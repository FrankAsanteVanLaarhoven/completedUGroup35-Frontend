import Head from 'next/head';
import styled from 'styled-components';

const AboutStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  #main {
    grid-column: 2;
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 50vh;
    padding: 25px;
    padding-right: 50px;
    text-align: justify;
    ul {
      list-style-type: circle;
    }
  }
`;

export default function Account() {
  return (
    <AboutStyles>
      <Head>
        <title>Ataire | Account </title>
      </Head>
      <div id="main">
        <h1>Who is Ataire?</h1>
        <p>
          We have a introduced online shopping plat form committed to providing
          amazing outfits for men, women, and children of the highest quality.
          Each of our items is an original work of art. Ataire appreciates your
          uniqueness more so than your stunning style; we want to assist you in
          expressing yourself, accomplishing your goals, and looking fabulous
          all at the same time. We are available 24 hours a day and will provide
          you with an unbeatable view at the lowest possible price. At Ataire we
          make fashion approachable and enjoyable, so everyone can have
          everyone’s own unique style.
        </p>

        <p>Our objectives are: </p>
        <ul>
          <li>
            ► Our philosophy is straightforward: Be yourself and express your
            individuality.
          </li>
          <li>
            ► As we are related to your family, please present your identity and
            not a mask.
          </li>
          <li>
            ► We have everything you could need in terms of Attire and
            creativity.
          </li>
          <li>
            ► We’ll never ever let visitors down, if you’re looking for
            date-night dresses or something to cheer you up on a bad day.
          </li>
        </ul>
        <p>
          Recyclability and robustness We’ve developed into a green business
          that places a premium on waste reduction and increased recycling. All
          our products are made with eco-friendly materials in order to minimise
          our carbon footprint without sacrificing comfort or protection. Our
          plants are powered by green energy, which would be beneficial to the
          environment. All waste generated during the manufacturing process is
          recycled, ensuring that nothing is discarded.
        </p>
        <p>
          Return guide and Policy for Ecommerce Website We are thankful for your
          shopping at our site. If you are dissatisfied with your buying, we are
          here to assist you.
        </p>
      </div>
    </AboutStyles>
  );
}
