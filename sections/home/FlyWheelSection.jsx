import styled from 'styled-components';
import { H2, H4 } from '@components/Typo';
import imgSteamFlyWheel from 'public/assets/fly-wheel.png';
import imgSteamFlyWheelToken from 'public/assets/fly-wheel-token.png';
import imgCloud from 'public/assets/cloud.png';
import bgLazy from 'public/assets/background-galaxy-lazy.png';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import useProgressiveImage from "../../hooks/useProgressiveImage";


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
  ${props => (props.isActive ? 'background-color: #3f701e;' : '')}
  
  &:hover {
    background-color: #3f701e;
  }
`;

const Container = styled.div`
  margin-top: 50px;
  background: url(${props => props.bgImage}) ;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  width: 80%;
  gap: 30px;
  marign: auto;
  display: flex;
  h2 {
    max-width: 350px;
  }
  > div {
    width: 100%;
    margin-top: 81px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StyledParallax = styled(Parallax)`
  position: absolute;
  bottom: 33%;
  right: 35%;
  z-index: 100;
  width: 20%;

  @media (min-width: 1024px) {
    right: 38%;
  }
`;

const ParagraphContainer = styled.div`
  max-width: 255px;
  h4 {
    display: inline-block;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 8px;
  max-width: 350px;
  svg {
    display: none;
  }

  > div {
    width: unset;
    flex: 1;

    @media (max-width: 768px) {
      padding-left: 2px;
      padding-right: 2px;
    }
  }
`;

const Paragraph = styled.div`
  margin: 0;
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: white;

  ul {
    list-style: none;
    padding-left: 14px;
    li {
      margin-bottom: 20px;
    }
    li:before {
      content: '■';
      color: #00ff19;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const infos = [
    {
        title: 'PLAYERS',
        content: [
            '% of player earmings governed by DAO, purchase $TEAM',
            'Players are paid in $TEAM with the option to stake $TEAM for higher yields'
        ]
    },
    {
        title: 'OWNERS',
        content: [
            'Owners pay wrapped team markups & marketplace transaction fees with $TEAM'
        ]
    },
    {
        title: 'ASSETS',
        content: [
            'DAO retains ownership % of all wTEAMs, creating exposure to asset appreciation w/out depreciation risk.',
            '$TEAM holders have voting rights on DAO assets'
        ]
    }
];
const FlyWheelSection = () => {
    const bgImage = useProgressiveImage(imgCloud.src, bgLazy.src);
    const [selected, setSelected] = useState(0);
    const intervalRef = useRef(null);

    const data = infos[selected];

    useEffect(() => {
        const interval = setInterval(() => setSelected((v) => (v + 1) % 3), 5000);
        intervalRef.current = interval;
        return () => {
            clearInterval(interval);
            intervalRef.current = null;
        };
    }, []);

    const handleSelect = (index) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setSelected(index);
    };

    return (
        <Container id="token" bgImage={bgImage}>
            <SubContainer>
                <div style={{ maxWidth: 350, height: 400 }}>
                    <H2>$TEAM FLYWHEEL</H2>
                    <ButtonContainer>
                        <ButtonGreen onClick={() => handleSelect(0)} isActive={selected === 0}>
                            PLAYERS
                        </ButtonGreen>
                        <ButtonGreen onClick={() => handleSelect(1)} isActive={selected === 1}>
                            OWNERS
                        </ButtonGreen>
                        <ButtonGreen onClick={() => handleSelect(2)} isActive={selected === 2}>
                            ASSETS
                        </ButtonGreen>
                    </ButtonContainer>
                    <ParagraphContainer style={{ marginTop: 50 }}>
                        <H4>{data.title}</H4>
                        <Paragraph>
                            <ul>
                                {data.content.map((e) => (
                                    <li key={e}>{e}</li>
                                ))}
                            </ul>
                        </Paragraph>
                    </ParagraphContainer>
                </div>

                <div style={{ position: 'relative' }}>
                    <Parallax translateY={[-5, 5]}>
                        <StyledParallax className="teamdao-pulse" translateY={[-5, 5]}>
                            <Image src={imgSteamFlyWheelToken} alt="" objectFit="contain" />
                        </StyledParallax>
                        <Image src={imgSteamFlyWheel} alt="" objectFit="contain" />
                    </Parallax>
                </div>
            </SubContainer>
            <div style={{ width: '100%', height: 100 }} />
        </Container>
    );
};

export default FlyWheelSection;
