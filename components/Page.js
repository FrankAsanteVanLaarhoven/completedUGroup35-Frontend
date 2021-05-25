/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: radnika_next;
        src: url('/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        --red: #ff0000;
        --blue: #4682B4;
        --black: #393939;
        --gray: var(--grey);
        --lightGrey: #e1e1e1
        --lightGray: var(---lightGray)
        --offWhite: #ededed;
        --maxWidth: 90%;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: boarder-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    li {
      list-style-type: none;
    }

    a {
        text-decoration: none;
        color: var(---black);
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0;
    padding: 0;
`;

export default function Page({ children }) {
    return(
        <>
            <GlobalStyles />
            <InnerStyles>{children}</InnerStyles>
            <Footer />
        </>
    );
}

Page.propTypes = {
    children: PropTypes.any
};