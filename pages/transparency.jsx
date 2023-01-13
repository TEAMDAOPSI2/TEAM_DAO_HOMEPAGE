import Head from "next/head";
import LoadingScreen from "@components/LoadingScreen";
import React, {useEffect, useState} from "react";
import HeroSection from "@sections/transparancy/HeroSection";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";
import TabSection from "@sections/transparancy/TabSection";

const MainDiv = styled.div`
  height: 1px;
  padding-top: 120px;
  padding-bottom: 120px;
`;

const transparency = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.onreadystatechange = () => {
            setTimeout(() => {
                setLoading(document.readyState !== 'complete');
            }, 1000);
        };
    }, []);
    return (<>
        <Head>
            <title>Transparency</title>
        </Head>
        <div>
            {loading ? <LoadingScreen/> : <div>
                <HeaderOld/>
                <MainDiv>
                    <HeroSection/>
                    <TabSection/>
                </MainDiv>
                <FooterOld/>
            </div>}
        </div>
    </>);
}

export default transparency;




