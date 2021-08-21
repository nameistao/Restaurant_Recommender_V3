import { useState, useEffect } from "react";
import styled from "styled-components";
import Details from "components/Details";
import Price from "components/Price";
import Rating from "components/Rating";
import TravelTimes from "components/TravelTimes";

const StyledContent = styled.div`
  width: 57.5%;
  height: 100%;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(20% - 2.5vh);
  margin-top: 2.5vh;
  display: flex;
`;

interface IProps {
  data: {
    businesses: Array<any>;
  };
}

const Content = ({ data }: IProps) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const select = data
      ? Math.floor(Math.random() * data.businesses.length)
      : 0;

    data && setTitle(data.businesses[select].alias);
  }, [data]);

  return (
    <StyledContent>
      <Details title={title} />
      <StyledWrapper>
        <Price />
        <Rating />
      </StyledWrapper>
      <StyledWrapper>
        <TravelTimes />
      </StyledWrapper>
      <StyledWrapper>Info and Dir</StyledWrapper>
    </StyledContent>
  );
};

export default Content;
