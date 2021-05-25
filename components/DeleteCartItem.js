import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_CART_ITEM_MUTATION = gql`
  mutation DELETE_CART_ITEM_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

const DeleteCartItemStyles = styled.div`
  button {
    padding: 0;
    margin: 0;
    font-size: 14px;
    border: 2px solid black;
  }
`;

export default function DeleteCartItem({ id, children }) {
  const [deleteCartItem, { loading }] = useMutation(DELETE_CART_ITEM_MUTATION, {
    variables: { id },
  });
  return (
    <DeleteCartItemStyles>
      <button
        disabled={loading}
        type="button"
        onClick={() => {
          deleteCartItem().catch((err) => alert(err.message));
        }}
      >
        {children}
      </button>
    </DeleteCartItemStyles>
  );
}
