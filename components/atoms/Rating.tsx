import styled, { keyframes } from "styled-components";
import Star from "components/icons/Star";

const StyledRating = styled.div`
  width: calc(50% - 1.25vw);
  margin-left: 2.5vw;
  height: 100%;
  background: #243447;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;

const StyledStar = styled(Star)`
  margin-left: 1.25%;
  margin-right: 1.25%;
`;

const Pulse = keyframes`
0% { opacity: 100%}
100% { opacity: 0% }
`;

const StyledLoadingBox = styled.div`
  height: 70%;
  width: 80%;
  background: darkgrey;
  margin: auto;
  border-radius: 15px;
  animation: ${Pulse} 1s linear infinite alternate;
`;

interface IProps {
  rating: number;
  isLoading: boolean;
}

const Rating = ({ rating, isLoading }: IProps) => {
  return isLoading ? (
    <StyledRating>
      <StyledLoadingBox />
    </StyledRating>
  ) : (
    <StyledRating>
      {rating >= 1 &&
        Array(Math.floor(rating)).fill(
          <StyledStar height="auto" width="15%" />
        )}
    </StyledRating>
  );
};

export default Rating;
