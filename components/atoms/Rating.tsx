import styled from "styled-components";
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

interface IProps {
  rating: number;
}

const Rating = ({ rating }: IProps) => {
  return (
    <StyledRating>
      {rating >= 1 &&
        Array(Math.floor(rating)).fill(
          <StyledStar height="auto" width="15%" />
        )}
    </StyledRating>
  );
};

export default Rating;
