import styled, { keyframes } from "styled-components";
import Dollar from "components/icons/Dollar";

const StyledPrice = styled.div`
  width: calc(50% - 1.25vw);
  height: 100%;
  background: #243447;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;

const StyledDollar = styled(Dollar)`
  margin-left: 1.25%;
  margin-right: 1.25%;
`;

const Pulse = keyframes`
0% { opacity: 100%}
100% { opacity: 0% }
`;

const StyledLoadingBox = styled.div`
  height: 70%;
  width: 80%;
  background: darkgrey;
  margin: auto;
  border-radius: 15px;
  animation: ${Pulse} 1s linear infinite alternate;
`;

interface IProps {
  price: string;
  isLoading: boolean;
}

const Price = ({ price, isLoading }: IProps) => {
  return isLoading ? (
    <StyledPrice>
      <StyledLoadingBox />
    </StyledPrice>
  ) : (
    <StyledPrice>
      {price?.length >= 1 &&
        Array(Math.floor(price.length)).fill(
          <StyledDollar height="auto" width="15%" />
        )}
    </StyledPrice>
  );
};

export default Price;
