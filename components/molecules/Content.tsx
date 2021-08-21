import { useState, useEffect } from "react";
import styled from "styled-components";
import Details from "components/atoms/Details";
import Price from "components/atoms/Price";
import Rating from "components/atoms/Rating";
import TravelTimes from "components/atoms/TravelTimes";
import MoreInfo from "components/atoms/MoreInfo";
import Directions from "components/atoms/Directions";

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
    name: string;
    is_closed: boolean;
    display_phone: string;
    categories: Array<any>;
  };
}

const Content = ({ data }: IProps) => {
  const [name, setName] = useState(data ? data.name : "");
  const [status, setStatus] = useState(data ? data["is_closed"] : true);
  const [category, setCategory] = useState(data ? data.categories : []);
  const [phone, setPhone] = useState(data ? data["display_phone"] : "");

  useEffect(() => {
    setName(data.name);
    setStatus(data["is_closed"]);
    setCategory(data.categories);
    setPhone(data["display_phone"]);
  }, [data]);

  return (
    <StyledContent>
      <Details name={name} status={status} category={category} phone={phone} />
      <StyledWrapper>
        <Price />
        <Rating />
      </StyledWrapper>
      <StyledWrapper>
        <TravelTimes />
      </StyledWrapper>
      <StyledWrapper>
        <MoreInfo />
        <Directions />
      </StyledWrapper>
    </StyledContent>
  );
};

export default Content;
