import React, {useEffect, useState} from "react";
import useProgressiveImage from "../hooks/useProgressiveImage";
import LoadingScreen from "@components/LoadingScreen";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ParallaxProvider} from "react-scroll-parallax";
import Bg1 from 'public/assets/bg1.png';
import Bg1Lazy from 'public/assets/bg1-lazy.png';
import Head from "next/head";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";

const CenterText = styled.div`
  text-align: center;
  margin-top: 40px;
  color: white;
  font-family: 'Technology',serif;
  h3{
    font-size: 3em;
  }
  
`;
const MainDiv = styled.div`
  height: 1px;
  padding-top: 120px; 
`;


const Sports = () => {
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
                <title>T.E.A.M DAO | Sports</title>
            </Head>
            <div style={{display: !loading ? 'none' : 'block'}}>
                <LoadingScreen/>
            </div>
            <ToastContainer
                position="top-center"
                hideProgressBar={false}
                newestOnTop={false}
                theme="dark"
                limit={1}
            />
            <ParallaxProvider>
                <div
                    style={{
                        background: 'black',
                        overflowX: 'hidden',
                        display: loading ? 'none' : 'block'
                    }}>
                    <HeaderOld/>
                    <MainDiv />
                    <CenterText>

                    </CenterText>
                    <FooterOld/>
                </div>
            </ParallaxProvider>
        </>
    );
};

export default Sports;