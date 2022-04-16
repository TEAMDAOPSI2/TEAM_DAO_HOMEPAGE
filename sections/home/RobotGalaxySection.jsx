import BlurredCircle from "@components/BlurredCircle";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import bgGalaxy from 'public/assets/galaxy-night-view-2.png';
import bgLazy from 'public/assets/background-galaxy-lazy.png';
import imgRobot from 'public/assets/robot-no-reflect.png';
import imgFragment1 from 'public/assets/fragment1.png';
import imgFragment2 from 'public/assets/fragment2.png';
import Token4 from 'public/assets/token-4.png';
import Token5 from 'public/assets/token-5.png';
import Fragment from 'public/assets/fragment4.png';
import useProgressiveImage from "../../hooks/useProgressiveImage";



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
  position: relative;
`;

const BeginSectionContainer = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;

const RobotGalaxySection = () => {
    const bgImage = useProgressiveImage(bgGalaxy.src, bgLazy.src);
    return (
        <BgContainer bgImage={bgImage}>
            <BeginSectionContainer>
                <ScrollAnimation animateIn="fadeInUp" animateOnce>
                    <Parallax easing="easeIn" translateY={[100, 0]}>
                        <div style={{ position: 'relative' }}>
                            <Parallax speed={12}>
                                <div
                                    className="teamdao-pulse"
                                    style={{ position: 'absolute', left: 50, top: -330 }}
                                >
                                    <Image src={imgFragment2} width={272} alt="" />
                                </div>
                            </Parallax>
                            <Parallax speed={15.5}>
                                <div
                                    className="teamdao-pulse-delay"
                                    style={{ position: 'absolute', top: -150 }}
                                >
                                    <Image src={imgRobot} width={300} alt="" />
                                </div>
                            </Parallax>
                            <Parallax speed={16}>
                                <div
                                    className="teamdao-pulse"
                                    style={{ position: 'absolute', top: -100 }}
                                >
                                    <Image src={imgFragment1} width={300} alt="" />
                                </div>
                            </Parallax>
                            <Parallax speed={3}>
                                <div
                                    className="teamdao-pulse-delay"
                                    style={{ position: 'absolute', top: -280, left: -380 }}
                                >
                                    <Image src={Fragment} alt="" />
                                </div>
                            </Parallax>
                            <Parallax speed={10}>
                                <div
                                    className="teamdao-pulse-delay"
                                    style={{ position: 'absolute', top: -30, left: -520 }}
                                >
                                    <Image src={Token4} alt="" />
                                </div>
                            </Parallax>
                            <Parallax speed={9}>
                                <div
                                    className="teamdao-pulse-delay"
                                    style={{ position: 'absolute', top: 200, left: 500 }}
                                >
                                    <Image src={Token5} alt="" />
                                </div>
                            </Parallax>
                            <div style={{ width: 300, height: 10, visibility: 'hidden' }} />
                        </div>
                    </Parallax>
                </ScrollAnimation>
            </BeginSectionContainer>

            <BlurredCircle top="20%" left={-100} />
            <BlurredCircle top="70%" left="100vw" />
        </BgContainer>
    );
};

export default RobotGalaxySection;
