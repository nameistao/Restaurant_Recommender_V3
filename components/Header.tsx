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

const StyledSection = styled.div`
  height: 100%;
  width: 50%;
  color: #ffffff;
  border-radius: 15px;
  display: flex;
`;

const StyledTitle = styled.h1`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  margin: auto;
  border: 3px solid #c51f5d;
  width: 85%;
  height: 60%;
  border-radius: 15px;
  line-height: 2.4;
`;

const StyledSearchButton = styled.button`
  width: 85%;
  border: none;
  margin: auto;
  background: #c51f5d;
  text-align: center;
  height: 60%;
  border-radius: 15px;
  :hover {
    cursor: pointer;
  }
`;

const Header = () => {
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
        console.log(response);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      return;
    }
  };

  return (
    <StyledHeader>
      <StyledSection>
        <StyledTitle>Restaurant Recommender</StyledTitle>
      </StyledSection>
      <StyledSection>
        <StyledSearchButton onClick={searchHandler}>
          <ServeFood height={50} width={50} fill={"#ffffff"} />
        </StyledSearchButton>
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;
