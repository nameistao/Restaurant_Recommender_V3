import styled from "styled-components";

const StyledRating = styled.div`
  width: calc(50% - 1.25vw);
  margin-left: 2.5vw;
  height: 100%;
  background: #243447;
  border-radius: 15px;
`;

const Rating = () => {
  return <StyledRating>rating</StyledRating>;
};

export default Rating;
