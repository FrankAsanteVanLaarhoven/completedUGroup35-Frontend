import Link from 'next/link';
import CartCount from './CartCount';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  console.log(user);
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/account">{`Account: ${user.name}`}</Link>
          <Link href="/basket">Basket</Link>
          <div id="count">
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </div>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
      <Link href="/about">About</Link>
    </NavStyles>
  );
}
