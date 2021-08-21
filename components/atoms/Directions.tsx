import styled from "styled-components";
import Link from "next/link";

const StyledAnchor = styled.a`
  width: calc(50% - 1.25vw);
  margin-left: 2.5vw;
`;

const StyledDirections = styled.button`
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
`;

interface IProps {
  name: string;
}

const Directions = ({ name }: IProps) => {
  return (
    <StyledAnchor
      href={
        name
          ? `https://www.google.com/maps/search/?api=1&query=" +
    ${name} +
    " restaurant`
          : "#"
      }
      target="_blank"
    >
      <StyledDirections>Directions</StyledDirections>
    </StyledAnchor>
  );
};

export default Directions;
