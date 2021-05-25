// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Head from 'next/head';
// import CheckoutStyles from './styles/CheckoutStyles';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import gql from 'graphql-tag';

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import AtaireButton from './styles/AtaireButton';
import { CURRENT_USER_QUERY } from './User';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    // Stop form from submitting and turn on loader
    e.preventDefault();
    setLoading(true);
    console.log('Handle Submit');
    // Start page transition
    nProgress.start();
    // Create Payment method through stripe (Return Token IF sucsessful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);
    // Handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return; // stops the checkout
    }
    // Send the token to keystone server via mutation.
    const order = await checkout({
      variables: {
        token: paymentMethod.id,
      },
    });
    console.log(`Finished with the order!`);
    console.log(order);
    // Change the page to view the order
    router.push({
      pathname: `/order/[id]`,
      // pathname: `/order/[id]`,
      query: {
        id: order.data.checkout.id,
      },
    });

    // Turn the loader off
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      {graphQLError && <p>{graphQLError.message}</p>}
      <CardElement />
      <AtaireButton>Check Out Now</AtaireButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout };

/*
      <CheckoutStyles>
      <Head>
        <title>Ataire | Checkout </title>
      </Head>
      <div id="form">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <div className="item">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <div className="item">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <div className="item">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </div>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <div className="item">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </div>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <div className="item">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" defaultValue="Please Select">
                  <option>Please Select</option>
                  <option>United Kingdom</option>
                  <option>France</option>
                  <option>Spain</option>
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <div className="item">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </div>
            </Form.Group>

            <Form.Group as={Col}>
              <div className="item">
                <Form.Label>Postcode</Form.Label>
                <Form.Control />
              </div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <div className="item">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" />
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <div className="item">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control as="select" defaultValue="Please Select">
                  <option>Please Select</option>
                  <option>Paypal</option>
                  <option>Debit/Credit Card</option>
                </Form.Control>
              </div>
            </Form.Group>
          </Form.Row>
          <div className="item">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </CheckoutStyles>
*/
