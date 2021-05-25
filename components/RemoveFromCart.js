import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const BigButton = styled.button`
  font-size: 3rem;
  line-height: 0.8em;
  background: var(--red);
  color: white;
  border: 3px black solid;
  border-radius: 32px;
  padding: 5px;
  padding-top: 0;
  margin: 0;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}
export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <BigButton
      type="button"
      title="Remove this Item from Cart"
      onClick={removeFromCart}
      disabled={loading}
    >
      &times;
    </BigButton>
  );
}
