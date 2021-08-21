import styled from "styled-components";

const StyledDetails = styled.div`
  height: 40%;
  width: 100%;
  background: #243447;
  border-radius: 15px;
`;

const StyledLine = styled.div`
  height: 20%;
`;

interface IProps {
  name: string;
  status: boolean;
  category: Array<any>;
  phone: string;
}

const Details = ({ name, status, category, phone }: IProps) => {
  return (
    <StyledDetails>
      <StyledLine>Restaurant: {name}</StyledLine>
      <StyledLine>Status: {status ? "Closed" : "Open"}</StyledLine>
      <StyledLine>Category: {category[0].title}</StyledLine>
      <StyledLine>Phone: {phone}</StyledLine>
    </StyledDetails>
  );
};

export default Details;
