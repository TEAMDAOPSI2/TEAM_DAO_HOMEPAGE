import React, {useEffect, useState} from "react";
import useProgressiveImage from "../hooks/useProgressiveImage";
import LoadingScreen from "@components/LoadingScreen";
import {ToastContainer} from "react-toastify";
import {ParallaxProvider} from "react-scroll-parallax";
import Header from "@components/Header";
import {H3} from "@components/Typo";
import Footer from "@components/Footer";
import styled from "styled-components";
import Bg1 from 'public/assets/bg1.png';
import Bg1Lazy from 'public/assets/bg1-lazy.png';
import TeamLogo from 'public/assets/team-logo.png';
import TeamLogoBlack from 'public/assets/team-logo-black.png';
import TeamLogoRound from 'public/assets/round-team-logo.png';
import Head from "next/head";

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

  &:hover {
    background-color: #3f701e;
  }
`;

const Item = styled.div`
  margin-bottom: 80px;

  > p {
    color: #fff;
    margin-bottom: 20px;
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
                    <BeginSectionContainer bgImage={bgImage}>
                        <Header/>
                    </BeginSectionContainer>
                    <Container>
                        <div style={{marginBottom: 60}}>
                            <H3 style={{display: 'inline-block'}}>Logos</H3>
                        </div>
                        <Columns
                            style={{width: '100%', justifyContent: 'space-around', gap: 0}}
                        >

                            <Item>
                                <img style={{width: '150px'}} src={TeamLogo.src} alt="Team Logo"/>
                                <p>T.E.A.M LOGO</p>
                                <Btn
                                    href="https://drive.google.com/file/d/18JrwVhfMgKeQjjiUD6mVsC5tHOU1aW_v/view?usp=sharing"
                                    target="_blank" rel="noreferrer">Download</Btn>
                            </Item>

                            <Item>
                                <img style={{width: '150px'}} src={TeamLogoBlack.src} alt="Team Logo"/>
                                <p>T.E.A.M LOGO Black Background</p>
                                <Btn
                                    href="https://drive.google.com/file/d/1RK7tW5qmpHUh9E8nWN6KLJCtOuXGa36Z/view?usp=sharing"
                                    target="_blank" rel="noreferrer">Download</Btn>
                            </Item>

                            <Item>
                                <img style={{width: '53px'}} src={TeamLogoRound.src} alt="Team Logo"/>
                                <p>T.E.A.M LOGO ROUND</p>
                                <Btn
                                    href="https://drive.google.com/file/d/1CpZd4tswhxfaz2hkDdicBldw5Qnn_nzW/view?usp=sharing"
                                    target="_blank" rel="noreferrer">Download</Btn>
                            </Item>

                        </Columns>

                        <div style={{marginBottom: 60}}>
                            <H3 style={{display: 'inline-block'}}>Colors</H3>
                        </div>

                        <Columns
                            style={{width: '100%', justifyContent: 'space-around', gap: 0}}
                        >
                            <Item>
                                <BoxColor style={{background: '#1b8520 '}}/>
                                <p>Accent Color</p>
                                <p>#2afe30 </p>
                            </Item>
                            <Item>
                                <BoxColor style={{background: '#2afe30 '}}/>
                                <p>Primary Color</p>
                                <p>#1b8520 </p>
                            </Item>
                        </Columns>
                    </Container>
                    <Footer/>
                </div>
            </ParallaxProvider>
        </>
    );
};

export default MediaKit;