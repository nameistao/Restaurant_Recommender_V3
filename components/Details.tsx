import styled from "styled-components";

const StyledDetails = styled.div`
  height: 40%;
  width: 100%;
  background: #243447;
  border-radius: 15px;
`;

interface IProps {
  title: string;
}

const Details = ({ title }: IProps) => {
  return <StyledDetails>Title: {title}</StyledDetails>;
};

export default Details;
