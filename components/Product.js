import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
      </Link>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
    </ItemStyles>
  );
}
