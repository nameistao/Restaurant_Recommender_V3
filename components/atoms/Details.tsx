import styled, { keyframes } from "styled-components";

const StyledDetails = styled.div`
  height: 40%;
  width: 100%;
  background: #243447;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledLine = styled.div`
  height: 15%;
  text-align: center;
  font-size: 20px;
`;

const Pulse = keyframes`
0% { opacity: 100%}
100% { opacity: 0% }
`;

const StyledTextRow = styled.div`
  width: 100%;
  height: 15%;
  background: darkgrey;
  border-radius: 15px;
  animation: ${Pulse} 1s linear infinite alternate;
`;

interface IProps {
  name: string;
  status: boolean;
  category: Array<any>;
  phone: string;
  isLoading: boolean;
}

const Details = ({ name, status, category, phone, isLoading }: IProps) => {
  return isLoading ? (
    <StyledDetails>
      <StyledTextRow />
      <StyledTextRow />
      <StyledTextRow />
      <StyledTextRow />
    </StyledDetails>
  ) : (
    <StyledDetails>
      <StyledLine>Restaurant: {name}</StyledLine>
      <StyledLine>Status: {status ? "Closed" : "Open"}</StyledLine>
      <StyledLine>
        Category: {typeof category === "undefined" ? "" : category[0]?.title}
      </StyledLine>
      <StyledLine>Phone: {phone}</StyledLine>
    </StyledDetails>
  );
};

export default Details;
