import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';

const ContactStyles = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
  grid-template-rows: auto 60px 180px 50vh;
  align-items: center;
  #header {
    grid-column: 1 / 4;
    grid-row: 1;
  }
  #title {
    grid-column: 2;
    grid-row: 2;
    padding-bottom: 0;
  }
  #contact {
    grid-column: 2;
    grid-row: 3;
    line-height: 1em;
    padding-top: 0;
  }
  #map {
    grid-column: 2;
    grid-row: 4;
  }
`;
export default function ContactPage() {
  return (
    <ContactStyles>
      <Head>
        <title>Ataire | Contact Ataire</title>
      </Head>
      <div id="header">
        <Header />
      </div>
      <div id="title">
        <h1>Contact Us!</h1>
      </div>
      <div id="contact">
        <p>Ataire,</p>
        <p>1557 London Road,</p>
        <p>Norbury London,</p>
        <p>SW16 4AD,</p>
        <p>Tell +442038932944</p>
        <a href="mailto:Ataire.online@gmail.com">Email Ataire</a>
      </div>
      <div id="map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.485311812884!2d-0.1239883589835976!3d51.4125111023666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760693750bfd4b%3A0x127e4734a3c2db22!2s1557%20London%20Rd%2C%20Norbury%2C%20London%20SW16%204AD!5e0!3m2!1sen!2suk!4v1621758501839!5m2!1sen!2suk"
          width="800"
          height="450"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </ContactStyles>
  );
}
