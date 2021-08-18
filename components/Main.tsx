import axios from "axios";

import styled from "styled-components";
import Header from "components/Header";
import Slides from "components/Slides";
import Details from "components/Details";

const StyledMain = styled.main`
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw 5vh 5vw;
  background: #243447;
  border-radius: 15px;
`;

const StyledHR = styled.hr`
  border: 3px solid #c51f5d;
  border-radius: 15px;
  width: 90%;
`;

const StyledCenterWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <StyledHR />
      <StyledCenterWrapper>
        <Slides />
        <Details />
      </StyledCenterWrapper>
      TODO: Travel Times, More Info, Directions
    </StyledMain>
  );
};

export default Main;
