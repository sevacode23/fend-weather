import styled from "styled-components";

import { Image } from "../image";

const Styles = {
  Root: styled.footer`
    background-color: white;
    margin-top: 60px;
    font-size: 14px;
  `,
  WidthContainer: styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 30px;
  `,
  TopContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ConnectContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  ConnectText: styled.b`
    font-size: 18px;
  `,
  LinkImage: styled(Image)`
    height: 100%;
    display: flex;
    align-items: center;
  `,
  LinkImageBorder: styled.div`
    background-color: #cfdaf9;
    padding: 10px;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      background-color: #1b4de4;
    }

    &:not(:first-child) {
      margin-left: 12px;
    }
  `,

  ConnectLinksContainer: styled.div`
    margin-left: 10px;
    display: flex;
  `,
  PartnerLinksContainer: styled.div`
    display: flex;
    align-items: center;

    & > * {
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 12px;
      }
    }
  `,
  GeneralLinks: styled.ul`
    margin-top: 40px;
    display: flex;
    justify-content: center;

    & > li {
      padding: 0 7px;
      cursor: pointer;

      &:hover {
        color: blue;
      }
    }
  `,
  LegalLinks: styled.ul`
    margin-top: 20px;
    display: flex;
    justify-content: center;

    > li {
      padding: 0 7px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        color: blue;
      }

      &:not(:last-child) {
        border-right: 1px solid black;
      }
    }
  `,
  ResponsibilityText: styled.p`
    margin-top: 20px;
    text-align: center;
  `,
  GeorgiaAccessContainer: styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      cursor: pointer;

      &:not(:first-child) {
        margin-left: 12px;
      }
    }
  `,
  DataRights: styled.b`
    display: block;
    margin-top: 25px;
    cursor: pointer;
    text-align: center;

    &:hover {
      color: blue;
    }
  `,
  CopyrightText: styled.p`
    margin-top: 25px;
    text-align: center;
  `,
  IBMContainer: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    cursor: pointer;
  `,
  CloudImage: styled.img`
    margin: 0 12px;
  `,
  CloudWord: styled.b`
    display: inline-block;
    margin-left: 3px;
  `,
};

export const Footer = () => (
  <Styles.Root>
    <Styles.WidthContainer>
      <Styles.TopContainer>
        <Styles.ConnectContainer>
          <Styles.ConnectText>Connect With Us</Styles.ConnectText>
          <Styles.ConnectLinksContainer>
            <Styles.LinkImageBorder>
              <Styles.LinkImage file="facebook" width="20px" />
            </Styles.LinkImageBorder>
            <Styles.LinkImageBorder>
              <Styles.LinkImage file="twitter" width="20px" />
            </Styles.LinkImageBorder>
            <Styles.LinkImageBorder>
              <Styles.LinkImage file="instagram" width="20px" />
            </Styles.LinkImageBorder>
            <Styles.LinkImageBorder>
              <Styles.LinkImage file="youtube" width="20px" />
            </Styles.LinkImageBorder>
          </Styles.ConnectLinksContainer>
        </Styles.ConnectContainer>
        <Styles.PartnerLinksContainer>
          <Image file="weatherCompany" />
          <Image file="weatherChannel" />
          <Image file="wu" />
        </Styles.PartnerLinksContainer>
      </Styles.TopContainer>

      <Styles.GeneralLinks>
        <li>Feedback</li>
        <li>Careers</li>
        <li>Press Room</li>
        <li>Advertise With Us</li>
        <li>TV</li>
      </Styles.GeneralLinks>
      <Styles.LegalLinks>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Ad Choices</li>
        <li>Accessibility Statement</li>
        <li>Data Vendors</li>
      </Styles.LegalLinks>
      <Styles.GeorgiaAccessContainer>
        <Image file="georgia" />
        <Image file="disabled" />
      </Styles.GeorgiaAccessContainer>
      <Styles.ResponsibilityText>
        We recognize our responsibility to use data and technology for good.
        Take control of your data.
      </Styles.ResponsibilityText>
      <Styles.DataRights>Data Rights</Styles.DataRights>
      <Styles.CopyrightText>
        © Copyright TWC Product and Technology LLC 2014, 2021
      </Styles.CopyrightText>
      <Styles.IBMContainer>
        <span>Powered by the</span>
        <Styles.CloudImage
          src="data:image/png;base64,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"
          alt="cloud"
        />
        <span>IBM</span>
        <Styles.CloudWord>Cloud</Styles.CloudWord>
      </Styles.IBMContainer>
    </Styles.WidthContainer>
  </Styles.Root>
);
