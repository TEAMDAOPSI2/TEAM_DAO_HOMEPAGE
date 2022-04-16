import BeginSection from "@sections/home/BeginSection";
import {ParallaxProvider} from "react-scroll-parallax";
import AboutSection from "@sections/home/AboutSection";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RecruimentProcessSection from "@sections/home/RecruimentProcessSection";
import TokenSection from "@sections/home/TokenSection";
import MetaverseSection from "@sections/home/MetaverseSection";
import LogoCarousel from "@sections/home/LogoCarousel";
import RobotGalaxySection from "@sections/home/RobotGalaxySection";
import WrappedTeamSection from "@sections/home/WrappedTeamSection";
import FlyWheelSection from "@sections/home/FlyWheelSection";
import LoadingScreen from "@components/LoadingScreen";
import {useEffect, useState} from "react";
import React from "react";
import RoadmapSection from "@sections/home/RoadmapSection";
import RobotGalaxyBottom from "@sections/home/RobotGalaxyBottom";
import Footer from "@components/Footer";
import Head from "next/head";


export default function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <>
            <Head>
                <title>T.E.A.M DAO</title>
            </Head>
            <React.StrictMode>
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
                        theme="dark"
                    />
                    <ParallaxProvider>

                        <BeginSection/>
                        <AboutSection/>
                        <RecruimentProcessSection/>
                        <TokenSection/>
                        <MetaverseSection/>
                        <LogoCarousel/>
                        <RobotGalaxySection/>
                        <WrappedTeamSection/>
                        <FlyWheelSection/>
                        <RoadmapSection/>
                        <RobotGalaxyBottom/>
                        <Footer/>
                    </ParallaxProvider>
                </div>
            </React.StrictMode>
        </>
    )
}
