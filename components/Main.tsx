import styled from "styled-components";

const StyledMain = styled.main`
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw 5vh 5vw;
  background: #ffffff;
  border-radius: 15px;
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>Restaurant Recommender</h1>
      <button>find me a restaurant!</button>
    </StyledMain>
  );
};

export default Main;
