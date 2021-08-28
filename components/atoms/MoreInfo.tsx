import styled from "styled-components";

const StyledAnchor = styled.a`
  width: calc(50% - 1.25vw);
`;

const StyledMoreInfo = styled.button`
  width: 100%;
  height: 100%;
  background: #243447;
  border-radius: 15px;
  text-align: center;
  border: none;
  color: #ffffff;
  font-size: 30px;
  :hover {
    background: #c51f5d;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

interface IProps {
  url: string;
}

const MoreInfo = ({ url }: IProps) => {
  return (
    <StyledAnchor href={url} target="_blank">
      <StyledMoreInfo>More Info</StyledMoreInfo>
    </StyledAnchor>
  );
};

export default MoreInfo;
