import styled from 'styled-components';

const Dot = styled.div`
  background: var(--red);
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
`;

export default function CartCount({ count }) {
  return <Dot>{count}</Dot>;
}
