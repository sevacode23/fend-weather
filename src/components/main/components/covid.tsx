import styled from "styled-components";
import { CardButton } from "../../styled";

const Root = styled.div`
  border-radius: 6px;
  background-color: white;
  padding: 16px;
  padding-right: 24px;
`;

const ContentContainer = styled.div`
  margin-top: 10px;
  display: flex;

  & img {
    margin-left: 24px;
  }
`;

const Description = styled.p`
  color: #686c74;
  font-size: 14px;
`;

const Button = styled(CardButton)`
  margin-top: 20px;
`;

export const Covid = () => (
  <Root>
    <h2>COVID-19</h2>
    <ContentContainer>
      <Description>
        See the latest in the new information hub, including county-level
        tracking for the US. Stay safe.
      </Description>
      <img
        src="https://s.w-x.co/germs-coronavirus-icon.png"
        alt="virus-img"
        width="72px"
        height="72px"
      />
    </ContentContainer>

    <Button>Go Premium</Button>
  </Root>
);
