import styled from "styled-components";

const StyledMoreInfo = styled.div`
  width: calc(50% - 1.25vw);
  height: 100%;
  background: #243447;
  border-radius: 15px;
  text-align: center;
`;

const MoreInfo = () => {
  return <StyledMoreInfo>More Info</StyledMoreInfo>;
};

export default MoreInfo;
