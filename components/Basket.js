import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Head from 'next/head';
import BasketItems from './BasketItems';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useUser } from './User';
import { Checkout } from './Checkout';

const BASKET_ITEMS_QUERY = gql`
  query BASKET_ITEMS_QUERY {
    allCartItems {
      quantity
      product {
        id
        name
        price
        description
        photo {
          id
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const BasketLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 20px;
  display: grid;
  grid-column: 1;
  grid-gap: 60px;
  padding-left: 10%;
  img {
    width: 100%;
    max-width: 30vw;
    height: 100px;
    object-fit: cover;
  }
  #side {
    background-color: ghostwhite;
    padding: 12px;
    margin: 0;
    max-height: 30vh;
    min-height: 100px;
    border: 2px solid black;
    border-radius: 20px;
  }
  #basket {
    align-self: center;
    font-size: 2em;
    margin: 5px;
    padding: 5px;
    border: 3px solid black;
    border-radius: 15px;
    text-align: center;
    width: 90%;
    height: 2em;
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: var(--blue);
  }
  @media (max-width: 1300px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export default function Basket() {
  const user = useUser();
  const { data, error, loading } = useQuery(BASKET_ITEMS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <BasketLayout>
      <Head>
        <title>Ataire | Basket </title>
      </Head>
      <BasketItems />
      <div id="side">
        <h1>Total: {formatMoney(calcTotalPrice(user.cart))}</h1>
        <Checkout />
      </div>
    </BasketLayout>
  );
}

/*
        <Link href="/checkout">
          <button id="basket" type="submit">
            Proceed to Checkout
          </button>
        </Link>
*/
