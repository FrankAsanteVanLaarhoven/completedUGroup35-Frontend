/* eslint-disable prettier/prettier */
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 2fr 1fr;
  grid-template-rows: 60vh;
  max-width: 100vw;
  height: 60vh;
  justify-content: center;
  align-items: top;
  gap: 20rem;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 200px;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  img {
    background-position: center;
    padding-top: 10px;
    padding-bottom: 10px;
    grid-column: 2;
    max-width: 100%;
    max-height: 90%;
    object-fit: contain;
    border: 10px;
    size: cover;
    min-height: 70%;
    left: 30px;
    justify-self: center;
    background: white;
    border: 2px solid black;
    box-shadow: var(--bs);
  }
  #money {
    font-weight: bold;
    font-size: 32px;
    // background-color: var(--blue, blue);
  }
  button {
    align-self: center;
    margin: 5px;
    padding: 5px;
    border: 3px solid black;
    border-radius: 15px;
    text-align: center;
    width: 80%;
    height: 1.5em;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
  #fav {
    background-color: darkmagenta;
  }
  #fav:hover{
    background-color: hotpink;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
  }
}
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if(loading) return <p>Loading...</p>
  if(error) return <DisplayError error={error} />
  const { Product } = data;
  return (
    <ProductStyles>
      <Head>
        <title>Ataire | {Product.name} </title>
      </Head>
      <img 
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText}
      />
      <div className="detals">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
        <p id="money">{formatMoney(Product.price)}</p>
        <AddToCart id={Product.id} />
      </div>
    </ProductStyles>
  );
}