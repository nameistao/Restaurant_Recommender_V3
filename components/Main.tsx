import styled from "styled-components";
import Header from "components/Header";
import Slides from "components/Slides";

const StyledMain = styled.main`
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw 5vh 5vw;
  background: #ffffff;
  border-radius: 15px;
`;

const StyledHR = styled.hr`
  border: 3px solid #ff3c38;
  border-radius: 15px;
  width: 90%;
`;

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <StyledHR />
      <Slides />
      <button>find me a restaurant!</button>
    </StyledMain>
  );
};

export default Main;
