import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

const AddToCartStyles = styled.div`
  #basket {
    background-color: var(--blue, blue);
    font-size: 12px;
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
  }
  #basket:hover {
    background-color: lightblue;
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <AddToCartStyles>
      <button id="basket" disables={loading} type="button" onClick={addToCart}>
        Add{loading && 'ing'} To Basket
      </button>
    </AddToCartStyles>
  );
}
