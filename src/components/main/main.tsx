import styled from "styled-components";

import { Summary, Chart, Today, Hourly } from "./components";

const Root = styled.main`
  width: 84%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 12px;
  display: flex;
  color: black;
`;

const PrimarySection = styled.section`
  flex: 2.2;

  > * {
    flex: 1;
  }
`;

const SideSection = styled.section`
  margin-left: 16px;
  flex: 1;
`;

export const Main = () => (
  <Root>
    <PrimarySection>
      <Summary />
      <Chart />
      <Today />
      <Hourly />
    </PrimarySection>

    <SideSection></SideSection>
  </Root>
);
