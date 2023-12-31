import TeamLogo from 'public/assets/team-logo.png';
import Image from 'next/image';
import styled from 'styled-components';
import TwitterIcon from 'public/assets/social-media/twitter.svg';
import TelegramIcon from 'public/assets/social-media/telegram.svg';
import NextLink from "next/link";

const FooterContainer = styled.div`
  max-width: 80%;
  margin: auto;
  color: white;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const ConnectContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  > svg {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
    justify-content: space-between;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  margin-top: 90px;
  margin-bottom: 20px;
`;

const Footer = () => (
    <FooterContainer>
        <Divider />
        <ConnectContainer>
            <Image src={TeamLogo} alt="logo" />
            <SocialMediaContainer>
                <NextLink href="https://t.me/TeamAXS" target="_blank" rel="noopener">
                    <TelegramIcon />
                </NextLink>
                <NextLink href="https://twitter.com/TEAMDAOcom" target="_blank" rel="noopener">
                    <TwitterIcon />
                </NextLink>
            </SocialMediaContainer>
        </ConnectContainer>
    </FooterContainer>
);

export default Footer;