import styled from "styled-components";

export const DropTip = styled.i`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
`;

export const Card = styled.div<{
  withShadow?: boolean;
  withTransparentBg?: boolean;
}>`
  border-radius: 6px;
  padding: 16px;
  line-height: 1.5;
  overflow: hidden;
  ${({ withShadow = true }) =>
    withShadow && "box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%)"};
  background: ${({ withTransparentBg = false }) =>
    withTransparentBg ? "hsla(0,0%,100%,.1)" : "white"};

  &:not(:first-child) {
    margin-top: 12px;
  }
`;

export const CardHead = styled.h3`
  margin-bottom: 6px;
`;
