import styled from "styled-components";
import Walk from "components/icons/Walk";
import Bike from "components/icons/Bike";
import Car from "components/icons/Car";

const StyledWalkBox = styled.div`
  width: calc(100% / 3 - 5vw / 3);
  background: #243447;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const StyledBikeBox = styled.div`
  width: calc(100% / 3 - 5vw / 3);
  background: #243447;
  border-radius: 15px;
  margin-left: 2.5vw;
  display: flex;
  align-items: center;
`;

const StyledCarBox = styled.div`
  width: calc(100% / 3 - 5vw / 3);
  background: #243447;
  border-radius: 15px;
  margin-left: 2.5vw;
  display: flex;
  align-items: center;
`;

const StyledTime = styled.div`
  font-size: 40px;
  width: 50%;
`;

interface IProps {
  distance: number;
}

const TravelTimes = ({ distance }: IProps) => {
  return (
    <>
      <StyledWalkBox>
        <Walk height="70%" width="auto" />
        <StyledTime>
          {Math.max(1, Math.round((distance / 1000) * 12))}
        </StyledTime>
      </StyledWalkBox>
      <StyledBikeBox>
        <Bike height="70%" width="auto" />
        <StyledTime>{Math.max(1, Math.round(distance / 200))}</StyledTime>
      </StyledBikeBox>
      <StyledCarBox>
        <Car height="70%" width="auto" />
        <StyledTime>{Math.max(1, Math.round(distance / 400))}</StyledTime>
      </StyledCarBox>
    </>
  );
};

export default TravelTimes;
