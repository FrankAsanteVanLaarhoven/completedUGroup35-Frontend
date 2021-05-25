/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { CartItem } from '../schemas/CartItem';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('ADDING TO CART!');
  // Query the user
  const sesh = context.session as Session;
  if(!sesh.itemId) {
    throw new Error('You must be logged in to perform this action!')
  }
  // Query user's cart
  const allCartItems = await context.lists.CartItem.findMany({
    where:{user: {id: sesh.itemId}, product: { id: productId } },
    resolveFields: 'id,quantity'
  });
  // See if current item is in the cart
  const [existingCartItem] = allCartItems;
  console.log(allCartItems);
  if (existingCartItem) {
    console.log(existingCartItem);
    console.log(
      `Item already in cart (quantity = ${existingCartItem.quantity}), add one.`
    );
    //  if it is increment by one
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }
  //  if not, create new item
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId }},
      user: { connect: {id: sesh.itemId }}
    },
    resolveFields: false,
  });
}

export default addToCart;
