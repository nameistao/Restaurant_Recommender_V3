import axios from "axios";
import styled from "styled-components";

import ServeFood from "components/icons/ServeFood";

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

interface IProps {
  setData: Function;
}

const Header = ({ setData }: IProps) => {
  const searchHandler = async () => {
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

        const select = response.data
          ? Math.floor(Math.random() * response.data.data.businesses.length)
          : 0;

        setData(response.data.data.businesses[select]);
        console.log(response.data.data.businesses[select]);
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
        <ServeFood height={50} width={50} fill={"#ffffff"} />
      </StyledSearchButton>
    </StyledHeader>
  );
};

export default Header;
