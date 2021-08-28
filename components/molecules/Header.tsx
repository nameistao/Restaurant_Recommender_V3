import { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

import Dice from "components/icons/Dice";
import Notch from "components/icons/Notch";

const StyledHeader = styled.header`
  width: 100%;
  height: 20%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
`;

const StyledTitleWrapper = styled.div`
  text-align: center;
  border: 3px solid #c51f5d;
  width: 57.5%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #243447;
`;

const StyledTitle = styled.h1`
  font-size 35px;
  font-weight: bold;
  color: #ffffff;
  width: 100%;
`;

const StyledSearchButton = styled.button`
  margin-left: 2.5vw;
  width: calc(42.5% - 2.5vw);
  border: none;
  background: #c51f5d;
  text-align: center;
  height: 100%;
  border-radius: 15px;
  :hover {
    cursor: pointer;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledNotch = styled(Notch)`
  animation: ${rotate} 2s linear infinite;
`;

interface IProps {
  setData: Function;
  curData: any;
}

const Header = ({ setData, curData }: IProps) => {
  const [loading, setLoading] = useState(false);

  const searchHandler = async () => {
    setLoading(true);
    let lat;
    let long;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        const response = await axios.get(`/api/getData`, {
          params: {
            lat: lat,
            long: long,
          },
        });

        response.data.data.business;

        let select = response.data
          ? Math.floor(Math.random() * response.data.data.businesses.length)
          : 0;

        while (curData.name === response.data.data.businesses[select].name) {
          select = response.data
            ? Math.floor(Math.random() * response.data.data.businesses.length)
            : 0;
        }

        setData(response.data.data.businesses[select]);
        console.log(response.data.data.businesses[select]);
        setLoading(false);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      return;
    }
  };

  return (
    <StyledHeader>
      <StyledTitleWrapper>
        <StyledTitle>Restaurant Recommender</StyledTitle>
      </StyledTitleWrapper>

      <StyledSearchButton onClick={searchHandler}>
        {loading ? (
          <StyledNotch height="80%" width="auto" fill={"#ffffff"} />
        ) : (
          <Dice height="80%" width="auto" fill={"#ffffff"} />
        )}
      </StyledSearchButton>
    </StyledHeader>
  );
};

export default Header;
