import styled from 'styled-components';

const SearchBarStyles = styled.form`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 600;
  border: 0;
  label {
    display: block;
  }
  input,
  textarea {
    border-radius: 3px;
    height: 22px;
    width: 30vw;
    padding: 0;
    margin: 0;
  }
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button {
    background-image: url(/search.png);
    // https://www.vhv.rs/dpng/d/41-416159_search-flat-icon-png-transparent-png.png
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 10px;
    max-height: 20px;
    border-radius: 3px;
    right: 0;
    left: 30vw;
    bottom: 5px;
    button:hover {
      opacity: 0.3;
    }
  }
  fieldset {
    border: 0;
    padding: 0;
  }

  #index {
    left: 35vw;
    top: 124vh;
    z-index: 2;
    position: absolute;
    align-self: center;
    max-width: 40vw;
  }

  #header {
    max-width: 80vw;
    position: absolute;
    align-self: center;
    top: 86px;
    left: 50px;
  }
`;

export default SearchBarStyles;
