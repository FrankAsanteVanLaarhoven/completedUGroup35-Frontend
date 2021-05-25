import Link from 'next/link';
import styled from 'styled-components';
import Search from './Search';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 3em;
  margin: 1rem;
  position: relative;
  z-index: 2;
  background: var(--blue, blue);
  transform: skew(-7deg);
  padding: 0rem 1rem;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
  }

  .sub-bar {
    border-bottom: 5px solid var(--black, black);
    width: 100vw;
    margin-left: 0;
    height: 50px;
    padding-bottom: 10px;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Ataire</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
    </HeaderStyles>
  );
}

// <Search />
