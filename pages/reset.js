import Header from '../components/Header';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query.token) {
    return (
      <div>
        <Header />
        <p>Sorry you must supply a token</p>;
        <RequestReset />
      </div>
    );
  }
  return (
    <>
      <Header />
      <p>Reset Your Password {query.token}</p>
      <Reset token={query.token} />
    </>
  );
}
