import styled from "styled-components";

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
  background: grey;
  border-radius: 15px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledSection>Restaurant Recommender</StyledSection>
      <StyledSection>Button</StyledSection>
    </StyledHeader>
  );
};

export default Header;
