import styled from "styled-components";

import { Image } from "../../image";

interface IItem {
  title: string;
  temperature: number;
  temperatureColor?: "black" | "blue";
  bold?: boolean;
  percent?: number;
}

interface IProps {
  items: IItem[];
  variant?: "black" | "gray";
}

const Root = styled.div`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }
`;

const ItemRoot = styled.div<{ color: string; bold?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  ${({ bold }) => bold && "font-weight: bold"};
  color: ${({ color }) => color};

  &:not(:last-child) {
    border-width: 0 1px 0 0;
    border-style: solid;
    border-image: linear-gradient(
        180deg,
        hsla(0, 0%, 87.1%, 0) 0,
        #dedede 25%,
        #dedede 70%,
        hsla(0, 0%, 87.1%, 0) 85%,
        hsla(0, 0%, 87.1%, 0)
      )
      1 100%;
  }
`;

const ItemTitle = styled.h4`
  font-weight: inherit;
  font-size: 18px;
`;

const ItemTemperature = styled.b<{ color?: string }>`
  font-weight: inherit;
  font-size: 40px;
  line-height: 1.1;
  color: ${({ color }) => (color === "blue" ? "#1b4de4" : "inherit")};
`;

const CloudImage = styled(Image)`
  margin: -5px 0;
`;

const BottomContainer = styled.div`
  display: flex;

  > span {
    margin-left: 6px;
  }
`;

export const SplitData = (props: IProps) => {
  const { variant, items } = props;

  return (
    <Root>
      {items.map((item) => {
        const { title, temperature, temperatureColor, bold, percent } = item;

        return (
          <ItemRoot
            bold={bold}
            color={variant === "gray" && !bold ? "#6f7585" : "#2b2b2b"}
          >
            <ItemTitle>{title}</ItemTitle>
            <ItemTemperature
              color={temperatureColor}
            >{`${temperature}°`}</ItemTemperature>
            <CloudImage file="cloud" width="56px" />
            <BottomContainer>
              {percent && <Image file="mark" width="7.5px" />}
              <span>{percent ? `${percent}%` : "--"}</span>
            </BottomContainer>
          </ItemRoot>
        );
      })}
    </Root>
  );
};
