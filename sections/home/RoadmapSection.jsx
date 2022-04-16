import styled from 'styled-components';
import {Paragraph, H2} from "@components/Typo";
import imgSpaceship from 'public/assets/roadmap-spaceship.png';
import bgLazy from 'public/assets/roadmap-spaceship-lazy.png';
import imgRobot from 'public/assets/roadmap-robot.png';
import PlaybackSvg from 'public/assets/roadmap-playback.svg';
import imgLogo1 from 'public/assets/roadmap-logo1.png';
import imgLogo2 from 'public/assets/roadmap-logo2.png';
import imgLogo3 from 'public/assets/roadmap-logo3.png';
import { Parallax } from 'react-scroll-parallax';
import Image from "next/image";
import useProgressiveImage from "../../hooks/useProgressiveImage";

const BgContainer = styled.div`
  background: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
`;

const ImgContainer = styled.div`
  min-height: 100vh;
  margin-left: 10%;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  text-align: center;
  min-height: 800px;
  position: relative;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 85px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin-bottom: 90px;
`;

const RoadmapSectionContainer = styled.div`
  width: 80%;
  margin-left: 10%;
`;

const RoadmapSection = () => {
    const bgImage = useProgressiveImage(imgSpaceship.src, bgLazy.src);
    return (
        <div>
            <BgContainer bgImage={bgImage}>
                <ImgContainer>
                    <Parallax
                        translateX={[0, 500]}
                        style={{ position: 'absolute', bottom: '20%' }}
                    >
                        <Image className="teamdao-shake" src={imgRobot} alt="" />
                    </Parallax>
                </ImgContainer>
                <RoadmapSectionContainer>
                    <div id="road-map">
                        <H2 style={{ display: 'inline-block' }}>Roadmap</H2>
                    </div>
                    <PlaybackSvg />
                </RoadmapSectionContainer>
            </BgContainer>

            <Container>
                <Columns>
                    <Item>
                        <Image src={imgLogo1} alt="roadmap" />
                        <Paragraph
                            style={{
                                width: 250,
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                marginTop: 80
                            }}
                        >
                            TEAM ANALYTICS, OWNERS&apos; DASHBOARD, ECOSYSTEM EXPANSION
                        </Paragraph>
                    </Item>
                    <Item>
                        <Image src={imgLogo2} alt="roadmap" />
                        <Paragraph
                            style={{
                                width: 250,
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                marginTop: 80
                            }}
                        >
                            wTEAM ROLL OUT, wTEAM MARKETPLACE, TEAM SCHOLAR WALLETS
                        </Paragraph>
                    </Item>
                    <Item>
                        <Image src={imgLogo3} alt="roadmaps" />
                        <Paragraph
                            style={{
                                width: 250,
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                marginTop: 80
                            }}
                        >
                            wTEAM STAKING VAULTS, TEAM DAO, EXPANSION
                        </Paragraph>
                    </Item>
                </Columns>
            </Container>
        </div>
    );
};

export default RoadmapSection;
