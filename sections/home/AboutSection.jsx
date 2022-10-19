import styled from 'styled-components';

import {H2, Paragraph} from 'components/Typo';
import {Parallax} from 'react-scroll-parallax';
import bgGalaxy from 'public/assets/galaxy-night-view.png';
import bgLazy from 'public/assets/background-galaxy-lazy.png';
import imgRobot from 'public/assets/robot-no-reflect.png';
import imgFragment1 from 'public/assets/fragment1.png';
import imgFragment2 from 'public/assets/fragment2.png';
import imgFragment3 from 'public/assets/fragment3.png';
import ScrollAnimation from 'react-animate-on-scroll';
import {useState} from 'react';
import useProgressiveImage from "../../hooks/useProgressiveImage";
import Image from 'next/image';
import EmailInput from "@components/EmailInput";

const BgContainer = styled.div`
  background: linear-gradient(to bottom,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0) 80%,
  rgba(0, 0, 0, 1) 100%),
  url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

const BeginSectionContainer = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  min-height: 800px;
  justify-content: space-between;
  flex-wrap: wrap;

  > div:first-child {
    display: flex;
    flex-direction: column;
    width: 450px;
    @media (max-width: 768px) {
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ButtonGreen = styled.button`
  color: #00ff19;
  font-weight: 500;
  border: 1px solid #00ff19;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #153300;
  box-shadow: -1px 1px 14px rgba(0, 0, 0, 0.15),
  0px 19px 16px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  padding: 15.5px 17px;
  width: 181px;
  font-size: 20px;
  line-height: 24px;
  transition: 0.2s ease all;
  cursor: pointer;

  &:hover {
    background-color: #3f701e;
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

const AboutSection = () => {
    const bgImage = useProgressiveImage(bgGalaxy.src, bgLazy.src);
    const [showInput, setShowInput] = useState(false);

    return (
        <BgContainer bgImage={bgImage}>
            <BeginSectionContainer id="about-us">
                <div style={{width: '100%', margin: '0 auto',paddingTop: '-30px'}}>
                    <BigGlowText style={{textAlign: 'center', width: '100%'}}>$TEAM IS THE #1 ESPORTS DAO</BigGlowText>
                </div>
                <div>
                    <H2>About TEAM</H2>
                    <Paragraph style={{marginTop: 24}}>
                        TEAM is an incubator for next generation eSports champions
                    </Paragraph>

                    <div style={{marginTop: 50, minHeight: 60}}>
                        {!showInput ? (
                            <ButtonGreen onClick={() => setShowInput(true)} showIcon={false}>
                                Get updates
                            </ButtonGreen>
                        ) : (
                            <EmailInput />
                        )}
                    </div>
                </div>

                <ScrollAnimation animateOnce animateIn="fadeInUp">
                    <Parallax easing="easeIn" translateY={[100, 0]}>
                        <div style={{position: 'relative'}}>
                            <Parallax speed={12}>
                                <div
                                    className="teamdao-pulse"
                                    style={{position: 'absolute', left: 50, top: -330}}
                                >
                                    <Image src={imgFragment2} width={272} alt=""/>
                                </div>
                            </Parallax>
                            <Parallax speed={15.5}>
                                <div
                                    className="teamdao-pulse-delay"
                                    style={{position: 'absolute', top: -150}}
                                >
                                    <Image src={imgRobot} width={300} alt=""/>
                                </div>
                            </Parallax>
                            <Parallax speed={16}>
                                <div
                                    className="teamdao-pulse"
                                    style={{position: 'absolute', top: -100}}
                                >
                                    <Image src={imgFragment1} width={300} alt=""/>
                                </div>
                            </Parallax>
                            <Parallax speed={7}>
                                <div
                                    className="teamdao-pulse-delay"
                                    style={{position: 'absolute', top: 100, left: -200}}
                                >
                                    <Image src={imgFragment3} alt=""/>
                                </div>
                            </Parallax>
                            <div style={{width: 300, height: 500, visibility: 'hidden'}}/>
                        </div>
                    </Parallax>
                </ScrollAnimation>
            </BeginSectionContainer>
        </BgContainer>
    );
};

export default AboutSection;
