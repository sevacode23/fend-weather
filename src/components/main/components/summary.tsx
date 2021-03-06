import styled from "styled-components";

import { Image } from "../../image";
import { Card } from "../../styled";

const Root = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding: 21px 30px;
  color: white;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LocationText = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

const TimeText = styled.p`
  opacity: 0.6;
`;

const Temperature = styled.b`
  font-size: 90px;
  line-height: 1;
  font-weight: 500;
`;

const TemperatureLabel = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const VideoLink = styled.p`
  margin-top: 12px;
  padding: 3px 6px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: rgba(50, 50, 50, 0.35);
  line-height: 1;

  > span {
    margin-left: 8px;
  }
`;

const SlashTemperatureText = styled.b`
  font-size: 20px;
`;

export const Summary = () => (
  <Root withTransparentBg>
    <div>
      <LocationText>Kyiv, Kiev, Ukraine Weather</LocationText>
      <TimeText>As of 6:50 pm EET</TimeText>
      <Temperature>28°</Temperature>
      <TemperatureLabel>Snow Shower</TemperatureLabel>
      <VideoLink>
        <Image file="play" width="24px" />
        <span>Watch: Snow Isn't Really White and 8 Other Cool Snow Facts</span>
      </VideoLink>
    </div>
    <RightContainer>
      <div>
        <Image file="cloud" width="60px" />
        <SlashTemperatureText>--/15°</SlashTemperatureText>
      </div>
    </RightContainer>
  </Root>
);
