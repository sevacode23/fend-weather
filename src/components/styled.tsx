import styled from "styled-components";

export const DropTip = styled.i`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
`;

export const ContentContainer = styled.div<{
  withShadow?: boolean;
  withTransparentBg?: boolean;
}>`
  display: flex;
  border-radius: 6px;
  line-height: 1.5;
  ${({ withShadow = true }) =>
    withShadow && "box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%)"};
  background: ${({ withTransparentBg = false }) =>
    withTransparentBg ? "hsla(0,0%,100%,.1)" : "white"};
`;
