import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const SignInStyles = styled.div`
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

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refetch the logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop submitting
    console.log(inputs);
    const res = await signin();
    console.log(res);
    resetForm();
    // Send email and password to the graphQL API
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;
  return (
    <SignInStyles>
      <div id="form">
        <Form method="POST" onSubmit={handleSubmit}>
          <Head>
            <title>Ataire | Log In </title>
          </Head>
          <h2>Login to your Account</h2>
          <Error error={error} />
          <fieldset>
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
            <button type="submit">Sign In!</button>
            <div id="link">
              <Link href="/signup">Don't have an account? Sign Up</Link>
            </div>
            <div id="link">
              <Link href="/requestreset">Forgotten your password?</Link>
            </div>
          </fieldset>
        </Form>
      </div>
    </SignInStyles>
  );
}
