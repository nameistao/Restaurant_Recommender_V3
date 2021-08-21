import styled from "styled-components";

const StyledDirections = styled.div`
  width: calc(50% - 1.25vw);
  margin-left: 2.5vw;
  height: 100%;
  background: #243447;
  border-radius: 15px;
  text-align: center;
`;

const Directions = () => {
  return <StyledDirections>Directions</StyledDirections>;
};

export default Directions;