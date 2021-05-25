import styled from 'styled-components';

const IndexImageStyles = styled.div`
  h1 {
    text-align: center;
    color: lavender;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    background-color: rgba(0, 0, 15, 0.3);
    width: 100%;
    font-style: italic;
    padding-top: 0;
    text-shadow: black 3px 3px;
  }

  #hoodies {
    background-image: url(/hoodies.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
    h1 {
      top: 50px;
    }
  }

  #dresses {
    background-image: url(/dresses.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #footwear {
    background-image: url(/footwear.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #shirts {
    background-image: url(/shirts.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #kids {
    background-image: url(/kids.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #accessories {
    background-image: url(/accessories.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #female {
    background-image: url(/female.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 100px;
  }

  #male {
    background-image: url(/male.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 100px;
  }

  .overlay {
    background-color: black;
    opacity: 1;
  }

  .overlay:hover {
    opacity: 0.3;
  }
`;

export default IndexImageStyles;
