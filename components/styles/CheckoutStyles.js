import styled from 'styled-components';

const CheckoutStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  #form {
    grid-column: 2;
    width: 100%;
    margin-top: 10vh;
    margin-bottom: 30vh;
    padding: 25px;
    padding-right: 50px;
    border: solid black 2px;
    border-radius: 10px;
    box-shadow: 3px 3px lightgray;
  }
  .item {
    padding: 10px;
  }
`;

export default CheckoutStyles;
