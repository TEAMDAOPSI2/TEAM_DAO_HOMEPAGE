import useProgressiveImage from "../../hooks/useProgressiveImage";
import ScrollAnimation from "react-animate-on-scroll";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import {H3} from "@components/Typo";
import EmailInput from "@components/EmailInput";
import styled from "styled-components";
import bgBottom from 'public/assets/bottom-background.png';
import bgBottomLazy from 'public/assets/bottom-background-lazy.png';
import imgRobot from 'public/assets/bottom-robot.png';
import imgFragment1 from 'public/assets/bottom-fragment1.png';
import imgFragment2 from 'public/assets/bottom-fragment2.png';

const BgContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
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
  justify-content: center;
`;

const EmailContainer = styled.div`
  position: absolute;
  margin-top: 40%;
  margin-left: 20%;
`;

const RobotGalaxyBottom = () => {
    const bgImage = useProgressiveImage(bgBottom.src, bgBottomLazy.src);

    return (
        <BgContainer bgImage={bgImage}>
            <BeginSectionContainer>
                <ScrollAnimation animateIn="fadeInUp" animateOnce>
                    <Parallax easing="easeIn" translateY={[100, 0]}>
                        <div style={{position: 'relative'}}>
                            <Parallax speed={10}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: -200,
                                        transform: 'scale(130%)'
                                    }}
                                >
                                    <Image
                                        objectFit="contain"
                                        className="teamdao-pulse"
                                        src={imgFragment1}
                                        alt=""
                                    />
                                </div>
                            </Parallax>
                            <Parallax speed={10}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: -350
                                    }}
                                >
                                    <Image className="teamdao-pulse" src={imgRobot} alt=""/>
                                </div>
                            </Parallax>
                            <Parallax speed={20}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 50,
                                        left: -200,
                                        width: 250
                                    }}
                                >
                                    <Image
                                        objectFit="contain"
                                        className="teamdao-pulse"
                                        src={imgFragment2}
                                        alt=""
                                    />
                                </div>
                            </Parallax>
                            <div style={{width: 400, height: 10, visibility: 'hidden'}}/>
                        </div>
                    </Parallax>
                </ScrollAnimation>
                <EmailContainer>
                    <H3>Receive</H3>
                    <H3 style={{marginBottom: 50}}>transmission</H3>
                    <EmailInput/>
                </EmailContainer>
            </BeginSectionContainer>
        </BgContainer>
    );
}

export default RobotGalaxyBottom;