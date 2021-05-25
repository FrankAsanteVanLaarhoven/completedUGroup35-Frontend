import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import SignOut from './SignOut';
import Orders from './Orders';
import { useUser } from './User';

const AccountStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 30px 60px 60px 60px auto;
  align-items: center;
  #title {
    grid-column: 2;
    grid-row: 1;
  }
  #link1 {
    grid-column: 2;
    grid-row: 2;
  }
  #link2 {
    grid-column: 2;
    grid-row: 3;
  }
  #button {
    grid-column: 2;
    grid-row: 4;
  }
  #orders {
    grid-column: 2;
    grid-row: 5;
  }
`;

export default function Account() {
  const user = useUser();
  return (
    <AccountStyles>
      <Head>
        <title>Ataire | Account</title>
      </Head>
      {user && (
        <>
          <div id="title">
            <h1>{`Welcome ${user.name}!`}</h1>
          </div>
          <div id="link1">
            <Link href="/requestreset">Change Password</Link>
          </div>
          <div id="link2">
            <Link href="/addproduct">Add Product</Link>
          </div>
          <div id="button">
            <SignOut />
          </div>
          <div id="orders">
            <Orders />
          </div>
        </>
      )}
    </AccountStyles>
  );
}

/*
      <AccountStyles>
      <div id="form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <div id="input">
            <Form.Control size="lg" type="email" placeholder="Enter email" />
            </div>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="lg" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save Login Information" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </AccountStyles>
*/
