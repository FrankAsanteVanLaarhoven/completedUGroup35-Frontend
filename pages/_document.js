/* eslint-disable prettier/prettier */
import Document, { Html, Head, NextScript, Main} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(
            App => props => sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        console.log(styleTags);
        return {...page, styleTags};
    }

    render() {
        return(
            <Html lang="en-GB">
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
                        crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}