import { useState } from "react";
import styled from "styled-components";

import { DropTip } from "../../styled";

const Root = styled.li`
  position: relative;
  border-bottom: none !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  background: transparent;
  font: inherit;
  color: inherit;
  outline: none;
  border: none;
  cursor: inherit;
`;
const Triangle = styled(DropTip)<{ open: boolean }>`
  margin-left: 8px;
  ${({ open }) => open && "transform: scaleY(-1)"};
`;
const DropDown = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  width: 280px;
  top: 100%;
  right: 0;
  padding: 20px;
  border-radius: 6px;
  background-color: white;
  color: black;
  cursor: auto;
`;
const DropHead = styled.h3`
  text-transform: uppercase;
`;
const DropContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
  column-gap: 12px;
  margin-top: 16px;

  & > span {
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }
`;

export const DropMenu = () => {
  const [show, setShow] = useState(false);

  const onClick = () => setShow((current) => !current);

  const onBlur = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <Root>
      <Button onClick={onClick} onBlur={onBlur}>
        More Forecast <Triangle open={show} />
      </Button>
      <DropDown show={show}>
        <DropHead>Specialty Forecasts</DropHead>
        <DropContent>
          <span>Yesterday's weather</span>
          <span>Allergy Tracker</span>
          <span>Fishing</span>
          <span>{"Cold & Flu"}</span>
          <span>Air Quality Forecast</span>
        </DropContent>
      </DropDown>
    </Root>
  );
};
