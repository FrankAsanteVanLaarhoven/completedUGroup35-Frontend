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

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetch the logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop submitting
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
    // Send email and password to the graphQL API
  }
  // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;

  return (
    <SignUpStyles>
      <div id="form">
        <Form method="POST" onSubmit={handleSubmit}>
          <Head>
            <title>Ataire | Sign Up </title>
          </Head>
          <h2>Create an Account</h2>
          <Error error={error} />
          <fieldset>
            {data?.createUser && (
              <p>
                Account created with: {data.createUser.email}, please
                <Link href="/signin"> Log In!</Link>
              </p>
            )}
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </label>
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
            <button type="submit">Sign Up!</button>
            <div id="link">
              <Link href="/signin">Already have an account? Log In</Link>
            </div>
          </fieldset>
        </Form>
      </div>
    </SignUpStyles>
  );
}
