import BeginSection from "@sections/home/BeginSection";
import {ParallaxProvider} from "react-scroll-parallax";
import AboutSection from "@sections/home/AboutSection";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RecruimentProcessSection from "@sections/home/RecruimentProcessSection";
import MetaverseSection from "@sections/home/MetaverseSection";
import LogoCarousel from "@sections/home/LogoCarousel";
import RobotGalaxySection from "@sections/home/RobotGalaxySection";
import LoadingScreen from "@components/LoadingScreen";
import {useEffect, useState} from "react";
import React from "react";
import RobotGalaxyBottom from "@sections/home/RobotGalaxyBottom";
import Footer from "@components/Footer";
import Head from "next/head";
import PartnersSection from "@sections/home/PartnersSection";
import HomeScreenImg from "public/assets/home_screen_dao.png";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";


export default function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.onreadystatechange = () => {
            setTimeout(() => {
                setLoading(document.readyState !== 'complete');
            }, 1000);
        };
    }, []);

    return (
        <>
            <Head>
                <title>T.E.A.M DAO</title>
                <meta name="description" content="TEAM DAO"/>
                <meta name="keywords" content="$TEAM, TEAM, TEAMDAO, DAO, wTEAM"/>
                <meta name="robots" content="all"/>

                <meta name="author" content="T.E.A.M DAO"/>
                <meta name="publisher" content="T.E.A.M DAO"/>


                {/*Twitter Card*/}
                <meta name="twitter:card" content={HomeScreenImg}/>
                <meta name="twitter:site" content="@TEAM"/>
                <meta name="twitter:creator" content="@_TEAMDAO"/>

                <link rel="canonical" href="https://teamdao.com"/>
                <meta property="og:url" content="https://teamdao.com"/>
                <meta property="og:title" content="T.E.A.M DAO"/>
                <meta property="og:description" content="TEAM DAO"/>
                <meta property="og:image" content="https://teamdao.com"/>
                <meta property="og:site_name" content="T.E.A.M DAO"/>
                <meta property="og:ttl" content="3600"/>

            </Head>
            {/*<React.StrictMode>*/}
            <div>
                <div style={{display: !loading ? 'none' : 'block'}}>
                    <LoadingScreen/>
                </div>
                <div
                    style={{
                        background: 'black',
                        overflow: 'hidden',
                        display: loading ? 'none' : 'block'
                    }}
                >
                    <ToastContainer
                        position="top-center"
                        hideProgressBar={false}
                        newestOnTop={false}
                        limit={1}
                        theme="dark"
                    />
                    <ParallaxProvider>
                        <HeaderOld/>
                        <BeginSection/>
                        <AboutSection/>
                        <RecruimentProcessSection/>
                        {/*<TokenSection/>*/}
                        <MetaverseSection/>
                        <LogoCarousel/>
                        <RobotGalaxySection/>
                        {/*<WrappedTeamSection/>*/}
                        {/*<FlyWheelSection/>*/}
                        {/*<RoadmapSection/>*/}
                        <PartnersSection/>
                        <RobotGalaxyBottom/>
                        <FooterOld/>
                    </ParallaxProvider>
                </div>
            </div>
        </>
    )
}
