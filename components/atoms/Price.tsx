import styled from "styled-components";
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

interface IProps {
  price: string;
}

const Price = ({ price }: IProps) => {
  return (
    <StyledPrice>
      {price?.length >= 1 &&
        Array(Math.floor(price.length)).fill(
          <StyledDollar height="auto" width="15%" />
        )}
    </StyledPrice>
  );
};

export default Price;
