import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledSlides = styled.div`
  width: calc(42.5% - 2.5vw);
  margin-left: 2.5vw;
  height: 100%;
  background: #243447;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  object-fit: contain;
  max-width: 90%;
  width: fit-content;
  height: fit-content;
  max-height: 90%;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 15px;
`;

const Pulse = keyframes`
0% { opacity: 100%}
100% { opacity: 0% }
`;

const StyledLoadingBox = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  background: darkgrey;
  border-radius: 15px;
  animation: ${Pulse} 1s linear infinite alternate;
`;

interface IProps {
  imageUrl: string;
  isLoading: boolean;
}

const Slides = ({ imageUrl, isLoading }: IProps) => {
  const [imageLink, setImageLink] = useState(imageUrl);

  useEffect(() => {
    setImageLink(imageUrl);
  }, [imageUrl]);

  return isLoading ? (
    <StyledSlides>
      <StyledLoadingBox />
    </StyledSlides>
  ) : (
    <StyledSlides>
      {imageUrl && <StyledImage src={imageUrl} alt="alt" />}
    </StyledSlides>
  );
};

export default Slides;
