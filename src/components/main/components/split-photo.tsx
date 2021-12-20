import styled from "styled-components";

import { Image } from "../../image";

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;

    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`;

const ImgContainer = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 6px;
  line-height: 1;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const PlayIcon = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Description = styled.p`
  line-height: 1.1;
  font-size: 14px;
`;

interface IItem {
  img: string;
  description: string;
}

interface IProps {
  items: IItem[];
}

export const SplitPhoto = (props: IProps) => (
  <Root>
    {props.items.map((item) => (
      <div>
        <ImgContainer>
          <img src={item.img} alt="img" />
          <Background />
          <PlayIcon file="play" width="25px" />
        </ImgContainer>

        <Description>{item.description}</Description>
      </div>
    ))}
  </Root>
);
