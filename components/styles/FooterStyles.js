import styled from 'styled-components';

const FooterStyles = styled.li`
  #footer {
    display: grid;
    grid-gap: 0;
    padding: 0;
    margin: 0;
    grid-template-columns: 11vw 26vw 26vw 26vw 11vw;
    grid-template-rows: 5px 150px 30px;
    background-color: rgb(114, 128, 138);
  }

  li {
    list-style-type: none;
    font-size: 16px;
    color: azure;
    text-decoration: none;
    padding: 0;
    margin: 0;
    text-align: center;
    top: 10px;
  }

  .link {
    font-size: 16px;
    top: 0px;
    li:hover {
      text-decoration: underline;
    }
  }

  #top {
    grid-row: 1;
    grid-column: 1 / 5;
    padding: 0;
    margin: 0;
    max-height: 5px;
    width: 100vw;
    background-color: rgb(40, 44, 46);
  }

  #left {
    grid-row: 2;
    grid-column: 2;
    padding: 0;
    margin: 0;
    max-height: 30vh;
    width: 26vw;
    justify-self: center;
    padding-top: 10px;
  }
  #center {
    grid-row: 2;
    grid-column: 3;
    padding: 0;
    margin: 0;
    max-height: 30vh;
    width: 26vw;
    justify-self: center;
    padding-top: 10px;
  }

  #right {
    grid-row: 2;
    grid-column: 4;
    padding: 0;
    margin: 0;
    max-height: 30vh;
    justify-self: center;
    width: 26vw;
    padding-top: 10px;
  }

  #bottom {
    grid-row: 3;
    grid-column: 1 / 5;
    padding: 0;
    margin: 0;
    max-height: 30px;
    width: 100vw;
    background-color: rgb(40, 44, 46);
  }
`;

export default FooterStyles;
