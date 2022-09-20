import React, {useEffect, useState} from "react";
import useProgressiveImage from "../hooks/useProgressiveImage";
import LoadingScreen from "@components/LoadingScreen";
import {ToastContainer} from "react-toastify";
import {ParallaxProvider} from "react-scroll-parallax";
import {H3} from "@components/Typo";
import styled from "styled-components";
import Bg1 from 'public/assets/bg1.png';
import Bg1Lazy from 'public/assets/bg1-lazy.png';
import TeamLogo from 'public/assets/team-logo.png';
import TeamLogoBnw from 'public/assets/team-logo-v1-bnw.png';
import TeamLogoV2 from 'public/assets/team-dao-v2.png';
import TeamLogoBlack from 'public/assets/team-logo-black.png';
import TeamLogoV2White from 'public/assets/team-dao-white-v2.png';
import TeamLogoRound from 'public/assets/round-team-logo.png';
import Head from "next/head";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import Hexagon from "public/assets/hex-stroke.png"

const BeginSectionContainer = styled.div`
  background-image: linear-gradient(180deg,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.5) 21.58%,
  rgba(0, 0, 0, 0) 58.51%,
  #000000 90.91%),
  url(${props => props.bgImage});
  min-height: 80px;
  width: 100%;
  background-position: center;
  background-color: black;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const BoxColor = styled.div`
  height: 40px;
  width: 80%;
  margin: 0 auto;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  text-align: center;
  min-height: 800px;
  position: relative;

  #tsparticles {
    canvas {
      position: relative;
    }
  }
`;
const Columns = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 85px;
  padding-top: 40px;
  flex-wrap: wrap;

  img {
    width: 100%;
  }

`;

const Btn = styled.a`
  background-color: #153300;
  border: 1px solid #00ff19;
  border-radius: 5px;
  color: #000;
  box-shadow: -1px 1px 14px rgba(0, 0, 0, 0.15),
  0px 19px 16px rgba(0, 0, 0, 0.09);
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: #00ff19;
  margin-right: 7px;

  &:hover {
    background-color: #3f701e;
    color: #00ff19;
  }
`;

const Item = styled.div`
  margin-bottom: 80px;
  position: relative;
  min-height: 280px;
  min-width: 250px;

  > div.wrap-content {
    color: #fff;
    margin-bottom: 20px;
    position: absolute;
    z-index: 2;
    top: 70px;
    left: -10px;
    width: 100%;
  }

  > div.wrap {
    position: absolute;
    z-index: 1;
    left: -28px;
    top: 0px;
  }

  @media (max-width: 928px) {
    margin-bottom: 10px;
  }
  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;


const MediaKit = () => {
    const [loading, setLoading] = useState(true);
    const bgImage = useProgressiveImage(Bg1.src, Bg1Lazy.src);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            console.log('ready');
        }, 5000);
    }, []);

    return (
        <>
            <Head>
                <title>T.E.A.M DAO | Media Kit</title>
            </Head>
            <div style={{display: !loading ? 'none' : 'block'}}>
                <LoadingScreen/>
            </div>
            <ToastContainer
                position="top-center"
                hideProgressBar={false}
                newestOnTop={false}
                theme="dark"
            />
            <ParallaxProvider>
                <div
                    style={{
                        background: 'black',
                        overflowX: 'hidden',
                        display: loading ? 'none' : 'block'
                    }}>
                    <HeaderOld/>
                    <Container>
                        <div style={{marginBottom: 60}}>
                            <H3 style={{display: 'inline-block'}}>Logos</H3>
                        </div>
                        <Columns
                            style={{width: '100%', justifyContent: 'space-around', gap: 0}}
                        >

                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <img style={{width: '150px'}} src={TeamLogo.src} alt="Team Logo"/>
                                    <p>Transparent Background</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/18JrwVhfMgKeQjjiUD6mVsC5tHOU1aW_v/view?usp=sharing"
                                        target="_blank" rel="noreferrer">PNG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1cTXQ9g2CHirpnvOae-i54vGPKGHJgdCi/view?usp=sharing"
                                        target="_blank" rel="noreferrer">SVG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1fcRt9QfgyMpXmz4NdF_t_5_BMI373krE/view?usp=sharing"
                                        target="_blank" rel="noreferrer">JPG</Btn>
                                </div>
                            </Item>

                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <img style={{width: '150px'}} src={TeamLogoBlack.src} alt="Team Logo"/>
                                    <p>Black Background</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/1Ih1c6ytW4btmDHVqnGbIFZ9kwTjyz9ow/view?usp=sharing"
                                        target="_blank" rel="noreferrer">PNG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1RK7tW5qmpHUh9E8nWN6KLJCtOuXGa36Z/view?usp=sharing"
                                        target="_blank" rel="noreferrer">SVG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1Fz1tAqJPbyjq2hgP0rWWEgy4_P2kJdh7/view?usp=sharing"
                                        target="_blank" rel="noreferrer">JPG</Btn>
                                </div>
                            </Item>
                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <img style={{width: '150px'}} src={TeamLogoBnw.src} alt="Team Logo"/>
                                    <p>Black Background</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/1YQ0y4227JDO9JJ5Z2INmD8obxH4mQXsw/view?usp=sharing"
                                        target="_blank" rel="noreferrer">PNG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1VeDjKKoGtIyZcMTQHJzBqImPif3IHy6i/view?usp=sharing"
                                        target="_blank" rel="noreferrer">SVG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1gnryPnN7zbbpLcImyw6HdigDHbkuWjDm/view?usp=sharing"
                                        target="_blank" rel="noreferrer">JPG</Btn>
                                </div>
                            </Item>


                        </Columns>

                        <Columns
                            style={{width: '100%', justifyContent: 'space-around', gap: 0, marginTop: 0}}
                        >

                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <img style={{width: '220px'}} src={TeamLogoV2.src} alt="Team Logo"/>
                                    <p>Transparent Background</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/19BYH-oRBTqiIYwlkD3wva4pSHHxSWPLQ/view?usp=sharing"
                                        target="_blank" rel="noreferrer">PNG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1FRtmXMmwxbSO7cikSHkNXAKr6Mft8N9A/view?usp=sharing"
                                        target="_blank" rel="noreferrer">SVG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1y4LD80gf2Zn5eZEUBXd9xgavOkuF8Ajx/view?usp=sharing"
                                        target="_blank" rel="noreferrer">JPG</Btn>
                                </div>
                            </Item>

                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <img style={{width: '220px'}} src={TeamLogoV2.src} alt="Team Logo"/>
                                    <p>Black Background</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/1rkjh4Dc6qXTWMAyHfRE5bViCgT0CiDj3/view?usp=sharing"
                                        target="_blank" rel="noreferrer">PNG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1u3cZ7WJnlpPa7BdsNs5gzorVk7XgSSEt/view?usp=sharing"
                                        target="_blank" rel="noreferrer">SVG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1WxBLchX5tc86025x452RKUvrpaSNaG1D/view?usp=sharing"
                                        target="_blank" rel="noreferrer">JPG</Btn>
                                </div>
                            </Item>

                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <img style={{width: '220px'}} src={TeamLogoV2White.src} alt="Team Logo"/>
                                    <p>Black Background</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/1eS5Ws3eC7Zqa0AjRo_gOWoKZSLmQXYHq/view?usp=sharing"
                                        target="_blank" rel="noreferrer">PNG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1PwkIGAFxfmCZANKw5rxVG6mCsrHzgeg4/view?usp=sharing"
                                        target="_blank" rel="noreferrer">SVG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1QsHbqncjoYKNPDR7cK8UcrJH3asOWrQV/view?usp=sharing"
                                        target="_blank" rel="noreferrer">JPG</Btn>
                                </div>
                            </Item>

                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <img style={{width: '53px'}} src={TeamLogoRound.src} alt="Team Logo"/>
                                    <p>Circle</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/18QuIVTdyK6UmsPnbXsjwCVik7lnvgW23/view?usp=sharing"
                                        target="_blank" rel="noreferrer">PNG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/13Ubjd5fwfFsD9k1UTb01nG1b1jd3gd86/view?usp=sharing"
                                        target="_blank" rel="noreferrer">SVG</Btn>
                                    <Btn
                                        href="https://drive.google.com/file/d/1v6NAP46tzcc4N_dDXc2RI9yFter1ZESr/view?usp=sharing"
                                        target="_blank" rel="noreferrer">JPG</Btn>
                                </div>
                            </Item>

                        </Columns>

                        <div style={{marginBottom: 60, marginTop: 20}}>
                            <H3 style={{display: 'inline-block'}}>Colors</H3>
                        </div>

                        <Columns
                            style={{width: '100%', justifyContent: 'space-around', gap: 0}}
                        >
                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <BoxColor style={{background: '#1b8520 '}}/>
                                    <p>Accent Color</p>
                                    <p>#1b8520 </p>
                                    <Btn href="javascript:void(0)" onClick={() => {
                                        navigator.clipboard.writeText('#1b8520')
                                    }}>COPY</Btn>
                                </div>
                            </Item>
                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <BoxColor style={{background: '#2afe30 '}}/>
                                    <p>Primary Color</p>
                                    <p>#2afe30 </p>
                                    <Btn href="javascript:void(0)" onClick={() => {
                                        navigator.clipboard.writeText('#2afe30')
                                    }}>COPY</Btn>
                                </div>
                            </Item>
                        </Columns>
                        <div style={{marginBottom: 60}}>
                            <H3 style={{display: 'inline-block'}}>Fonts</H3>
                        </div>
                        <Columns style={{width: '100%', justifyContent: 'space-around', gap: 0}}>
                            <Item>
                                <div className='wrap'>
                                    <img style={{width: '280px'}} src={Hexagon.src} alt="Team Logo"/>
                                </div>
                                <div className="wrap-content">
                                    <p style={{
                                        fontFamily: 'teamdao',
                                        color: "#fff",
                                        fontSize: '21px',
                                        letterSpacing: "12px"
                                    }}>T.E.A.M fonts</p>
                                    <Btn
                                        href="https://drive.google.com/file/d/1nFCg8PkWiKPAQMqvGIT9AxGkJj90WQCd/view?usp=sharing"
                                        target="_blank" rel="noreferrer">Download</Btn>
                                </div>
                            </Item>
                        </Columns>
                    </Container>
                    <div style={{paddingBottom: 60}}/>
                    <FooterOld/>
                </div>
            </ParallaxProvider>
        </>
    );
};

export default MediaKit;