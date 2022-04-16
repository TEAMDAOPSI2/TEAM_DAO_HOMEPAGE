import styled from 'styled-components';
import { H3, Paragraph } from '@components/Typo';
import imgValueChain from 'public/assets/value-chain.png';
import imgEarn from 'public/assets/wrapped-team-earn.png';
import imgTrade from 'public/assets/wrapped-team-trade.png';
import imgDevelop from 'public/assets/wrapped-team-develop.png';
import imgEarth from 'public/assets/earth.png';
import bgLazy from 'public/assets/background-galaxy-lazy.png';
import ScrollAnimation from 'react-animate-on-scroll';
import useProgressiveImage from "../../hooks/useProgressiveImage";
import Image from "next/image";

const EarthBG = styled.div`
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  width: 80%;
  margin: auto;
  h3 {
    max-width: 480px;
  }
  > div {
    width: 100%;
    margin-top: 81px;
    text-align: center;
  }
`;

const ChildContainer = styled.div`
  max-width: 80%;
  margin: auto;
  div:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const ChildSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap: wrap;
  gap: 150px;

  @media (max-width: 768px) {
    gap: 50px;
  }

  img {
    width: 550px;
  }
  h3 {
    display: inline-block;
  }
  > div {
    max-width: 361px;
    p {
      margin-top: 28px;
    }
  }
`;

const BigGlowText = styled.h2`
  width: 80%;
  margin: auto;
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  line-height: 105px;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #00ff19;
  text-shadow: 0px 0px 20px rgba(0, 255, 25, 0.9);
  margin-top: 156px;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 0.9;
  }
`;

const WrappedTeamSection = () => {
    const bgImage = useProgressiveImage(imgEarth.src, bgLazy.src);
    return (
        <Container>
            <SubContainer>
                <H3 style={{ maxWidth: '60%', margin: 'auto' }}>
                    WRAPPED TEAM (wTEAM) VALUE CHAIN
                </H3>
                <div>
                    <Image objectFit="contain" src={imgValueChain} alt="" />
                </div>
            </SubContainer>

            <BigGlowText>What can i do with a Wrapped Team?</BigGlowText>

            <EarthBG bgImage={bgImage}>
                <ChildContainer>
                    <ChildSection>
                        <div>
                            <ScrollAnimation animateOnce animateIn="fadeInLeft">
                                <H3>Earn</H3>
                                <Paragraph>
                                    wTEAMs generate income through numerous P2E games and
                                    metaverses of theirs & your choosing!
                                </Paragraph>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateOnce animateIn="fadeInRight">
                            <Image
                                src={imgEarn}
                                objectFit="contain"
                                alt="earn"
                                className="teamdao-pulse"
                            />
                        </ScrollAnimation>
                    </ChildSection>
                    <ChildSection>
                        <div>
                            <ScrollAnimation animateOnce animateIn="fadeInLeft">
                                <H3>Trade</H3>
                                <Paragraph>
                                    Purchase & Sell wTEAMs on our TEAM Marketplace! Find the best
                                    player & pick up gems in TEAM DAO
                                </Paragraph>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation
                            animateOnce
                            animateIn="fadeInRight"
                            style={{ maxWidth: 'unset' }}
                        >
                            <Image
                                src={imgTrade}
                                objectFit="contain"
                                alt="trade"
                                className="teamdao-pulse"
                            />
                        </ScrollAnimation>
                    </ChildSection>
                    <ChildSection>
                        <div>
                            <ScrollAnimation animateOnce animateIn="fadeInLeft">
                                <H3>Develop</H3>
                                <Paragraph>
                                    Upgrade your wTEAM through player coaching and asset expansion
                                </Paragraph>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateOnce animateIn="fadeInRight">
                            <Image
                                src={imgDevelop}
                                objectFit="contain"
                                alt="develop"
                                className="teamdao-pulse"
                            />
                        </ScrollAnimation>
                    </ChildSection>
                </ChildContainer>
            </EarthBG>
        </Container>
    );
};

export default WrappedTeamSection;
