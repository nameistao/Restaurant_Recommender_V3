import styled, { keyframes } from "styled-components";
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

const Pulse = keyframes`
0% { opacity: 100%}
100% { opacity: 0% }
`;

const StyledTravelContent = styled.div`
  height: 70%;
  width: 80%;
  background: darkgrey;
  margin: auto;
  border-radius: 15px;
  animation: ${Pulse} 1s linear infinite alternate;
`;

interface IProps {
  distance: number;
  isLoading: boolean;
}

const TravelTimes = ({ distance, isLoading }: IProps) => {
  return isLoading ? (
    <>
      <StyledWalkBox>
        <StyledTravelContent />
      </StyledWalkBox>
      <StyledBikeBox>
        <StyledTravelContent />
      </StyledBikeBox>
      <StyledCarBox>
        <StyledTravelContent />
      </StyledCarBox>
    </>
  ) : (
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
