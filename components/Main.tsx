import axios from "axios";

import styled from "styled-components";
import Header from "components/Header";
import Slides from "components/Slides";
import Details from "components/Details";
import Content from 'components/Content';

const StyledMain = styled.main`
  width: 95vw;
  height: 95vh;
  margin: 2.5vh 2.5vw 2.5vh 2.5vw;
  border-radius: 15px;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: calc(80% - 2.5vh);
  margin-top: 2.5vh;
  display: flex;
`;

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <StyledContentWrapper>
        <Content/>
        <Slides/>
      </StyledContentWrapper>
    </StyledMain>
  );
};

export default Main;
