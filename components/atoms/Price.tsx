import styled from "styled-components";

const StyledPrice = styled.div`
  width: calc(50% - 1.25vw);
  height: 100%;
  background: #243447;
  border-radius: 15px;
`;

const Price = () => {
  return <StyledPrice>price</StyledPrice>;
};

export default Price;
