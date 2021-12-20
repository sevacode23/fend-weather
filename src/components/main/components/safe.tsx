import styled from "styled-components";

const Root = styled.div`
  border-radius: 6px;
  background-color: white;
`;

const Head = styled.h2`
  padding: 16px;
  padding-bottom: 0;
`;

const ImgContainer = styled.div`
  margin-top: 8px;
  padding: 20px;
  padding-top: 0;
`;

export const Safe = () => (
  <Root>
    <Head>Stay Safe</Head>
    <ImgContainer>
      <img
        src="https://s.w-x.co/promo-modules-units-features.png?crop=2.85:1&width=320&format=pjpg&auto=webp&quality=60"
        alt="safe-img"
      />
    </ImgContainer>
  </Root>
);
