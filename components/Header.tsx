import Image from "next/image";
import styled from "styled-components";

import ServeFood from "components/icons/ServeFood";

const StyledHeader = styled.header`
  width: 100%;
  height: 20%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
`;

const StyledSection = styled.div`
  height: 100%;
  width: 50%;
  color: #ffffff;
  border-radius: 15px;
`;

const StyledTitle = styled.div`
  font-size: 26px;
  text-align: center;
  margin-top: 55px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledSection>
        <StyledTitle>
          Restaurant <ServeFood height={40} width={40} fill={"#ffffff"} />{" "}
          Recommender
        </StyledTitle>
      </StyledSection>
      <StyledSection>Button</StyledSection>
    </StyledHeader>
  );
};

export default Header;
