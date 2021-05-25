import Link from 'next/link';
import Head from 'next/head';
import PhotoSlideshow from './PhotoSlideshow';
import IndexGrid from './styles/IndexGrid';
import IndexImage from './IndexImage';
import Search from './Search';

export default function Products() {
  return (
    <IndexGrid>
      <Head>
        <title>Ataire | Home </title>
      </Head>
      <div id="grid">
        <div id="slideshow">
          <PhotoSlideshow />
        </div>
        <div id="search">
          <Search />
        </div>

        <Link href="/products">
          <div id="hoodies">
            <IndexImage catagory="hoodies" />
          </div>
        </Link>
        <Link href="/products">
          <div id="shirts">
            <IndexImage catagory="shirts" />
          </div>
        </Link>
        <Link href="/products">
          <div id="footwear">
            <IndexImage catagory="footwear" />
          </div>
        </Link>
        <Link href="/products">
          <div id="kids">
            <IndexImage catagory="kids" />
          </div>
        </Link>
        <Link href="/products">
          <div id="dresses">
            <IndexImage catagory="dresses" />
          </div>
        </Link>
        <Link href="/products">
          <div id="female">
            <IndexImage catagory="female" />
          </div>
        </Link>
        <Link href="/products">
          <div id="male">
            <IndexImage catagory="male" />
          </div>
        </Link>
        <Link href="/products">
          <div id="accessories">
            <IndexImage catagory="accessories" />
          </div>
        </Link>
      </div>
    </IndexGrid>
  );
}

// Replace href="/products" with the correct link for each catagory to select thoese items to show on the backend
