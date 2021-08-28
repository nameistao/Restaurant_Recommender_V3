import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

interface IProps {
  imageUrl: string;
}

const Slides = ({ imageUrl }: IProps) => {
  const [imageLink, setImageLink] = useState(imageUrl);

  useEffect(() => {
    setImageLink(imageUrl);
  }, [imageUrl]);

  return (
    <StyledSlides>
      {imageUrl && <StyledImage src={imageUrl} alt="alt" />}
    </StyledSlides>
  );
};

export default Slides;
