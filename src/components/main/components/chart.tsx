import styled from "styled-components";

import { Image } from "../../image";
import { ContentContainer } from "../../styled";

const Root = styled(ContentContainer)`
  flex-direction: column;
  font-size: 20px;
  padding: 0;
`;

const TitleContainer = styled.div`
  padding: 15px;
  background-color: #f6f6f6;
`;

const Title = styled.h3`
  color: #686c74;
  line-height: 1.1;
  font-weight: 500;
  font-size: 20px;
`;

const Tip = styled.p`
  margin-top: 10px;
  font-weight: 600;
  color: #383838;
`;

const ChartImage = styled(Image)`
  padding: 15px;
`;

export const Chart = () => (
  <Root>
    <TitleContainer>
      <Title>Snow</Title>
      <Tip>Snow continuing through 1 am.</Tip>
    </TitleContainer>
    <ChartImage file="chart" width="700px" />
  </Root>
);
