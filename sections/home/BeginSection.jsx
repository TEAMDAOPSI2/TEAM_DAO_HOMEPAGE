import styled from "styled-components";
import Bg1 from 'public/assets/TEAMDAOwebsitewallpaper.jpg';
import Bg1Lazy from 'public/assets/bg1-lazy.png';
import Robot1 from 'public/assets/robot1.png';
import CircleDown from 'public/assets/circle-down.png';
import useProgressiveImage from "../../hooks/useProgressiveImage";
import Image from "next/image";

const BeginSectionContainer = styled.div`
  // background-image: linear-gradient(180deg,
  // rgba(0, 0, 0, 0) 0%,
  // rgba(0, 0, 0, 0.5) 21.58%,
  // rgba(0, 0, 0, 0) 58.51%,
  // #000000 90.91%),
  // url(${props => props.backgroundImage});
   background-image: url(${props => props.backgroundImage});
  background-position: center;
  height: 100vh;
  background-color: black;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  margin-top: -10px;

  @media (max-width: 1920px) {
    background-size: cover;
  }

  @media (max-width: 1440px) {
    background-size: cover;
  }

  @media (max-width: 1024px) {
    height: 780px;
    background-size: contain;
  }

  @media (max-width: 776px) {
    height: 480px;
    margin-top: 60px;
  }

`;

const BigGlowText = styled.h2`
  font-style: normal;
  font-weight: 900;
  text-align: left;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 255, 25, 0.9);
  margin-top: 0;
  word-break: break-word;

  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #ff000000;
  font-weight: 900;
  font-size: 47px;
  line-height: 47px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #00FF19;
  margin-top: 250px;
  margin-bottom: 24px;

  > span {
    color: #e9eee9;
    text-shadow: none;
    font-weight: 600;
    font-size: 83px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 0.9;
    > span {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
    line-height: 0.9;
    > span {
      font-size: 1.8rem;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  

  @media (max-width: 768px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
`;

const WrapHeroContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 85%;
  margin: auto;
  padding-top: 710px;
  
  @media (max-width: 1024px) {
    padding-top: 610px;
  }
  @media (max-width: 768px) {
    padding-top: 380px;
  }
  @media (max-width: 512px) {
    padding-top: 240px;
  }
`;

const BeginSection = () => {
    const bgImage = useProgressiveImage(Bg1.src, Bg1Lazy.src);
    return (
        <BeginSectionContainer backgroundImage={bgImage}>
            <WrapHeroContent >
                {/*<div style={{width: '100%', margin: '0 auto',paddingTop: '280px'}}>*/}
                {/*    <BigGlowText style={{textAlign: 'center', width: '100%'}}>$TEAM IS THE #1 ESPORTS DAO</BigGlowText>*/}
                {/*</div>*/}
                {/*<ImgContainer style={{display: 'none'}}>*/}
                {/*    <div className="teamdao-flash">*/}
                {/*        <Image className="teamdao-pulse" src={Robot1} alt=""/>*/}
                {/*    </div>*/}
                {/*</ImgContainer>*/}
            </WrapHeroContent>
            <ImgContainer style={{height: 100}}>
                <Image
                    className="teamdao-pulse-delay"
                    objectFit="contain"
                    src={CircleDown}
                    alt=""
                />
            </ImgContainer>
        </BeginSectionContainer>
    )
}

export default BeginSection;