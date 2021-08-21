import styled from "styled-components";

const StyledWalk = styled.div`
  width: calc(100% / 3 - 5vw / 3);
  background: #243447;
  border-radius: 15px;
`;

const StyledBike = styled.div`
  width: calc(100% / 3 - 5vw / 3);
  background: #243447;
  border-radius: 15px;
  margin-left: 2.5vw;
`;

const StyledCar = styled.div`
  width: calc(100% / 3 - 5vw / 3);
  background: #243447;
  border-radius: 15px;
  margin-left: 2.5vw;
`;

const TravelTimes = () => {
  return (
    <>
      <StyledWalk>walk</StyledWalk>
      <StyledBike>bike</StyledBike>
      <StyledCar>car</StyledCar>
    </>
  );
};

export default TravelTimes;
