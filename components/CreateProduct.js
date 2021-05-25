import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables get passed in and what types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

const CreateProductStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  #form {
    grid-column: 2;
    width: 100%;
    margin-top: 10vh;
    margin-bottom: 30vh;
    padding: 25px;
    padding-right: 50px;
    border: solid black 2px;
    border-radius: 10px;
    box-shadow: 3px 3px lightgray;
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
    }
  );
  console.log(createProduct);
  return (
    <CreateProductStyles>
      <div id="form">
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(inputs);
            // Submit the input fields to the backend:
            const res = await createProduct();
            console.log(res);
          }}
        >
          <Head>
            <title>Ataire | Create Product </title>
          </Head>
          <DisplayError error={error} />
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="image">
              Image
              <input
                required
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="price">
              Price
              <input
                type="number"
                id="price"
                name="price"
                placeholder="price"
                value={inputs.price}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="description">
              Description
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={inputs.description}
                onChange={handleChange}
              />
            </label>

            <button type="button" onClick={clearForm}>
              Clear
            </button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
            <button type="submit">+ Add Product</button>
          </fieldset>
        </Form>
      </div>
    </CreateProductStyles>
  );
}
