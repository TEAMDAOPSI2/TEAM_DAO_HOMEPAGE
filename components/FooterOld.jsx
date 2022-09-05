import TeamLogo from 'public/assets/team-logo.png';
import Image from 'next/image';
import styled from 'styled-components';
import TwitterIcon from 'public/assets/social-media/twitter.svg';
import TelegramIcon from 'public/assets/social-media/telegram.svg';
import NextLink from "next/link";
import EmailInput from "@components/EmailInput";
import FacebookIcon from 'public/assets/social-media/facebook.svg';
import TiktokIcon from 'public/assets/social-media/tiktok.png';
import MediumIcon from 'public/assets/social-media/medium_white.svg';
import DiscordIcon from 'public/assets/social-media/discord_white.svg';
import WhitePaperIcon from 'public/assets/social-media/litepaper.png';
import GithubIcon from 'public/assets/social-media/github_white.svg';
import YoutubeIcon from 'public/assets/social-media/youtube.svg';
import TwitchIcon from 'public/assets/social-media/iconmonstr-twitch-1-240.png';
import LinksIcon from 'public/assets/social-media/iconmonstr-share-thin-240.png';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";


const FooterContainer = styled.div`
  margin: auto;
  color: white;
  background: #000;
  background: linear-gradient(270deg, #1b8520, #1b8520, #2afe30, #2afe30) 0 0 #000 no-repeat;
  background-size: 100% 5px;
  padding: 10px 70px;
  @media (max-width: 1024px) {
    padding: 8px 10px;
  }
`;

const EmailWrap = styled.div`
  @media (max-width: 782px) {
    div {
      display: none;
    }
  }
`;

const WrapLeft = styled.div`
  display: flex;
  flex-direction: row;
  div{
    margin-left: 10px;
  }
  @media (max-width: 782px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    div{
      margin-left: 0;
    } 
  }
  @media (max-width: 542px) {
    div:nth-child(1){
      display: none;
    }
  }
`


const ConnectContainer = styled.div`
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
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 90px;
  margin-bottom: 20px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 120px;
`;


const Footer = () => {

    const fetchNotifications = () => {
        fetch('https://script.google.com/macros/s/AKfycbwYEFQFcl2Anqos_CQ5qnYMtHP07Ej9xZNNykjyGMTabeS3SPVTpa8YIAFsE7JnHrv7bw/exec?action=notif')
            .then(res => res.json())
            .then(res => {
                // setNotification(res[0].message);
                toast.success(res[0].message, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    useEffect(() => {
        setInterval(fetchNotifications, 8000);
    }, []);

    return (
        <FooterWrapper>
            <FooterContainer>
                <ConnectContainer>
                    <WrapLeft>
                       <ContainerLogo>
                           <Image width={111} height={31} className="LogoFooter" src={TeamLogo} alt="logo"/>
                       </ContainerLogo>
                        <SocialMediaContainer>
                            <NextLink href="https://t.me/TeamAXS" target="_blank" rel="noopener">
                                <TelegramIcon/>
                            </NextLink>
                            <NextLink href="https://twitter.com/TEAMDAOcom" target="_blank" rel="noopener">
                                <TwitterIcon/>
                            </NextLink>
                            <NextLink href="https://web.facebook.com/TEAMDAOcom" target="_blank" rel="noopener">
                                <FacebookIcon/>
                            </NextLink>
                            <NextLink href="https://www.tiktok.com/@teamdao" target="_blank" rel="noopener">
                                <Image src={TiktokIcon} height={24} width={18.3} style={{cursor: 'pointer'}}/>
                            </NextLink>
                            <NextLink href="https://teamdao.medium.com" target="_blank" rel="noopener">
                                <MediumIcon width="26"/>
                            </NextLink>
                            <NextLink href="https://discord.gg/TEAMDAO" target="_blank" rel="noopener">
                                <DiscordIcon width="26"/>
                            </NextLink>
                            <NextLink href="https://whitepaper.teamdao.com/" target="_blank" rel="noopener">
                                <Image src={WhitePaperIcon} height={20} width={18.3} style={{cursor: 'pointer'}}/>
                            </NextLink>
                            <NextLink href="https://github.com/TEAMDAO" target="_blank" rel="noopener">
                                <GithubIcon width="26"/>
                            </NextLink>
                            <NextLink href="https://www.youtube.com/c/TeamDAO" target="_blank" rel="noopener">
                                <YoutubeIcon width="26"/>
                            </NextLink>
                            <NextLink href="https://www.twitch.tv/teamdaoTV" target="_blank" rel="noopener">
                                <Image src={TwitchIcon} height={20} width={18.3} style={{cursor: 'pointer'}}/>
                            </NextLink>
                            <NextLink href="https://linktr.ee/TEAMDAO" target="_blank" rel="noopener">
                                <Image src={LinksIcon} height={20} width={18.3} style={{cursor: 'pointer'}}/>
                            </NextLink>
                        </SocialMediaContainer>
                    </WrapLeft>
                    <EmailWrap>
                        <EmailInput/>
                    </EmailWrap>
                </ConnectContainer>
            </FooterContainer>
        </FooterWrapper>
    );
}

export default Footer;