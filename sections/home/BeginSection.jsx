import styled from "styled-components";
import Bg1 from 'public/assets/bg1.png';
import Bg1Lazy from 'public/assets/bg1-lazy.png';
import Robot1 from 'public/assets/robot1.png';
import CircleDown from 'public/assets/circle-down.png';
import useProgressiveImage from "../../hooks/useProgressiveImage";
import Header from "@components/Header";
import Image from "next/image";

const BeginSectionContainer = styled.div`
  background-image: linear-gradient(180deg,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.5) 21.58%,
  rgba(0, 0, 0, 0) 58.51%,
  #000000 90.91%),
  url(${props => props.backgroundImage});
  min-height: 100vh;
  background-position: center;
  background-color: black;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const BigGlowText = styled.h2`
  max-width: 950px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  line-height: 105px;
  text-align: left;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #00ff19;
  text-shadow: 0px 0px 20px rgba(0, 255, 25, 0.9);
  margin-top: 0;
  word-break: break-word;

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
    font-size: 2.1rem;
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
  margin-top: 100px;

  @media (min-width: 1440px) {
    margin-top: 200px;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
`;

const BeginSection = () => {
    const bgImage = useProgressiveImage(Bg1.src, Bg1Lazy.src);
    return (
        <BeginSectionContainer backgroundImage={bgImage}>
            <Header/>
            <ImgContainer>
                <div className="teamdao-flash">
                    <Image className="teamdao-pulse" src={Robot1} alt=""/>
                </div>
            </ImgContainer>
            <div style={{width: '80%', margin: 'auto'}}>
                <BigGlowText><span>$</span>TEAM up with the metaverse’s first Guild 3.0</BigGlowText>
            </div>
        </BeginSectionContainer>
    )
}

export default BeginSection;