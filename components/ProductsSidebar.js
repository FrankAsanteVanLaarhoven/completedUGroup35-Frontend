import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductsSidebarStyles = styled.div`
  display: grid;
  grid-column: 1;
  background-color: lightgray;
  height: 100%;
  padding: 40px;
  padding-bottom: 0;
  padding-top: 10px;
  margin-bottom: 0;
  min-width: 100px;
  h2 {
    padding: 0;
  }
`;

export default function ProductsSidebar() {
  return (
    <ProductsSidebarStyles>
      <div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3 align-items-center">
              <h2>Colour</h2>
              <Form.Check type={type} id={`default-${type}`} label="black" />
              <Form.Check type={type} id={`default-${type}`} label="white" />
              <Form.Check type={type} id={`default-${type}`} label="red" />
              <Form.Check type={type} id={`default-${type}`} label="blue" />
              <h2>Size</h2>
              <Form.Check type={type} id={`default-${type}`} label="S" />
              <Form.Check type={type} id={`default-${type}`} label="M" />
              <Form.Check type={type} id={`default-${type}`} label="L" />
              <Form.Check type={type} id={`default-${type}`} label="XL" />
              <Form.Check type={type} id={`default-${type}`} label="Kids" />
              <h2>Gender</h2>
              <Form.Check type={type} id={`default-${type}`} label="Male" />
              <Form.Check type={type} id={`default-${type}`} label="Female" />
              <Form.Check type={type} id={`default-${type}`} label="Unisex" />
              <h2>Catagory</h2>
              <Form.Check type={type} id={`default-${type}`} label="T-Shirts" />
              <Form.Check type={type} id={`default-${type}`} label="Hoodies" />
              <Form.Check type={type} id={`default-${type}`} label="Jeans" />
              <Form.Check type={type} id={`default-${type}`} label="Dresses" />
              <Form.Check type={type} id={`default-${type}`} label="Shoes" />
              <Form.Check type={type} id={`default-${type}`} label="Accessories" />
              <Button variant="dark" type="submit" size="lg">
                Submit
              </Button>{' '}
            </div>
          ))}
        </Form>
      </div>
    </ProductsSidebarStyles>
  );
}
