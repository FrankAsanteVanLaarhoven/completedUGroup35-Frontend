import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';

const SignUpStyles = styled.div`
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
  #link {
    position: right;
    align-items: right;
    text-align: right;
  }
`;

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;
  console.log(error);
  async function handleSubmit(e) {
    e.preventDefault(); // stop submitting
    console.log(inputs);
    const res = await reset().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
    // Send email and password to the graphQL API
  }

  return (
    <SignUpStyles>
      <div id="form">
        <Form method="POST" onSubmit={handleSubmit}>
          <Head>
            <title>Ataire | Sign Up </title>
          </Head>
          <h2>Reset Your Password</h2>
          <Error error={error || successfulError} />
          <fieldset>
            {data?.redeemUserPasswordResetToken === null && (
              <p>
                Success! You can now <Link href="/signin"> Log In!</Link>
              </p>
            )}
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="password"
                value={inputs.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Send Request!</button>
          </fieldset>
        </Form>
      </div>
    </SignUpStyles>
  );
}
