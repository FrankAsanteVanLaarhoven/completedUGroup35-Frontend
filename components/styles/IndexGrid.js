import styled from 'styled-components';

const IndexGrid = styled.div`
  #grid {
    display: grid;
    grid-gap: 0;
    padding: 0;
    margin: 0;
    grid-template-columns: 20vw 30vw 30vw 20vw;
    grid-template-rows: 100vh 10vh 25vh 25vh 25vh 25vh;

    #slideshow {
      grid-row: 1;
      grid-column: 1 / 5;
      padding: 0;
      margin: 0;
      max-height: 100vh;
      max-width: 100vw;
    }

    #search {
      grid-row: 2;
      grid-column: 1 / 5;
      padding: 0;
      margin: 0;
      max-height: 5vh;
      max-width: 100vw;
    }

    #hoodies {
      grid-row: 3 / 5;
      grid-column: 1;
      padding: 0;
      margin: 0;
      max-height: 50vh;
      max-width: 20vw;
    }

    #dresses {
      grid-row: 5 / 7;
      grid-column: 1;
      padding: 0;
      margin: 0;
      max-height: 50vh;
      max-width: 20vw;
    }

    #footwear {
      grid-row: 3;
      grid-column: 2;
      padding: 0;
      margin: 0;
      max-height: 25vh;
      max-width: 30vw;
    }

    #shirts {
      grid-row: 3;
      grid-column: 3;
      padding: 0;
      margin: 0;
      max-height: 25vh;
      max-width: 30vw;
    }

    #kids {
      grid-row: 3 / 5;
      grid-column: 4;
      padding: 0;
      margin: 0;
      max-height: 50vh;
      max-width: 20vw;
    }

    #accessories {
      grid-row: 5 / 7;
      grid-column: 4;
      padding: 0;
      margin: 0;
      max-height: 50vh;
      max-width: 20vw;
    }

    #male {
      grid-row: 4 / 7;
      grid-column: 3;
      padding: 0;
      margin: 0;
      max-height: 75vh;
      max-width: 30vw;
    }

    #female {
      grid-row: 4 / 7;
      grid-column: 2;
      padding: 0;
      margin: 0;
      max-height: 75vh;
      max-width: 30vw;
    }
  }
`;

export default IndexGrid;
