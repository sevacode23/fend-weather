import styled from "styled-components";
import { CardButton } from "../../styled";

const Root = styled.div`
  border-radius: 6px;
  background-color: white;
  padding: 16px;
`;

const RadarContainer = styled.div`
  margin-top: 6px;
`;

const Proposal = styled.p`
  margin-top: 3px;
`;

const Button = styled(CardButton)`
  margin-top: 20px;
`;

export const Radar = () => (
  <Root>
    <h2>24-Hour Future Radar</h2>
    <RadarContainer>
      <img
        src="https://s.w-x.co/TWC_Web_Subs_Homefeed_Intro-24hr-Radar_0.gif "
        alt="radar"
      />
    </RadarContainer>
    <Proposal>
      Get a clear picture of rain’s potential impact in your area a full day in
      advance with Premium for Web.
    </Proposal>
    <Button>Go Premium</Button>
  </Root>
);
