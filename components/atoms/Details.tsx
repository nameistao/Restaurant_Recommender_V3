import styled from "styled-components";

const StyledDetails = styled.div`
  height: 40%;
  width: 100%;
  background: #243447;
  border-radius: 15px;
  padding: 15px;
`;

const StyledLine = styled.div`
  height: 25%;
  text-align: center;
  font-size: 20px;
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
      <StyledLine>
        Category: {typeof category === "undefined" ? "" : category[0]?.title}
      </StyledLine>
      <StyledLine>Phone: {phone}</StyledLine>
    </StyledDetails>
  );
};

export default Details;
