import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useUser } from './User';
import RemoveFromCart from './RemoveFromCart';
// import DeleteCartItem from './DeleteCartItem';

const BasketItemsStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .item {
    padding: 5px;
  }
`;

export default function BasketItem() {
  const user = useUser();
  if (!user) return null;
  return (
    <BasketItemsStyles>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {user.cart.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/product/${item.product.id}`}>
                  <img
                    src={item?.product?.photo?.image?.publicUrlTransformed}
                    alt={item?.product.name}
                  />
                </Link>
              </td>
              <td>{item.product.name}</td>
              <td>{item.product.description}</td>
              <td>{item.quantity}</td>
              <td>
                <div id="button">
                  <RemoveFromCart id={item.id} />
                </div>
              </td>
              <td>{formatMoney(item.product.price * item.quantity)}</td>
            </tr>
          ))}
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th>Total: {formatMoney(calcTotalPrice(user.cart))}</th>
          </tr>
        </tbody>
      </Table>
    </BasketItemsStyles>
  );
}
