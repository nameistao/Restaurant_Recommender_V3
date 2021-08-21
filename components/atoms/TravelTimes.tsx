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

interface IProps {
  distance: number;
}

const TravelTimes = ({ distance }: IProps) => {
  return (
    <>
      <StyledWalk>
        walk {Math.max(1, Math.round((distance / 1000) * 12))}
      </StyledWalk>
      <StyledBike>bike {Math.max(1, Math.round(distance / 200))}</StyledBike>
      <StyledCar>car {Math.max(1, Math.round(distance / 400))}</StyledCar>
    </>
  );
};

export default TravelTimes;
