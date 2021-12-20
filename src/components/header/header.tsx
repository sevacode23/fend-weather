import styled from "styled-components";
import { BottomRow, MiddleRow, TopRow } from "./components";

const Root = styled.div`
  color: white;
`;

export const Header = () => (
  <Root>
    <TopRow />
    <MiddleRow />
    <BottomRow />
  </Root>
);
