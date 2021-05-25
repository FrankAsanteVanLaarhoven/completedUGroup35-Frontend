import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
// import Pagination from './Pagination';
import Head from 'next/head';
import Product from './Product';
import ProductsSidebar from './ProductsSidebar';

const ALL_PRODUCTS_QUERY = gql`
  query All_PRODUCTS_QUERY {
    allProducts {
      id
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  #products {
    display: grid;
    grid-column: 2 / 5;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    padding-left: 10%;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductsListStyles>
      <Head>
        <title>Ataire | Products </title>
      </Head>
      <ProductsSidebar />
      <div id="products">
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </ProductsListStyles>
  );
}
