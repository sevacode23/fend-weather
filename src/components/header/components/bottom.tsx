import styled from "styled-components";

import { DropMenu } from "./drop-menu";

const Root = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
`;
const NavCentered = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 60px;
  list-style: none;

  & > li {
    margin: 0;
    padding: 0;

    padding: 10px 13px;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid white;
    }
  }
`;

export const BottomRow = () => (
  <Root>
    <NavCentered>
      <List>
        <li>Today</li>
        <li>Hourly</li>
        <li>10 Day</li>
        <li>Weekend</li>
        <li>Monthly</li>
        <li>Radar</li>
        <li>Video</li>
        <DropMenu />
      </List>
    </NavCentered>
  </Root>
);
