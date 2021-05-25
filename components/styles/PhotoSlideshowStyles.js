import styled from 'styled-components';

const PhotoSlideshowStyles = styled.div`
  img {
    object-fit: cover;
    position: center;
    width: 100vw; // viewport width
    height: 100vh; // viewport height
    padding: 0;
    margin: 0;
  }
  h1 { // Styles for the page title
    text-align: center;
    color: lavender;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 120px;
    background-color: rgba(0, 0, 15, 0.3);
    font-style: italic;
    margin-top: 35vh;
    text-shadow: black 5px 5px;
    position: absolute;
    z-index: 3; // Push the text forward so it displays in front of the carousel.
    width: 100%;
    font-weight: bold;
  }
`;

export default PhotoSlideshowStyles;
