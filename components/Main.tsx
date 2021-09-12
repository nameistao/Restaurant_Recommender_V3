import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "components/molecules/Header";
import Slides from "components/atoms/Slides";
import Content from "components/molecules/Content";

const StyledMain = styled.main`
  width: 95vw;
  height: 95vh;
  margin: 2.5vh 2.5vw 2.5vh 2.5vw;
  border-radius: 15px;
  color: #ffffff;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: calc(80% - 2.5vh);
  margin-top: 2.5vh;
  display: flex;
`;

const Main = () => {
  const [data, setData] = useState({
    name: "",
    is_closed: true,
    display_phone: "",
    categories: [],
    price: "",
    rating: 0,
    distance: 0,
    url: "#",
    image_url: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  return (
    <StyledMain>
      <Header setData={setData} curData={data} setIsLoading={setIsLoading} />
      <StyledContentWrapper>
        <Content data={data} isLoading={isLoading} />
        <Slides imageUrl={data["image_url"]} isLoading={isLoading} />
      </StyledContentWrapper>
    </StyledMain>
  );
};

export default Main;
