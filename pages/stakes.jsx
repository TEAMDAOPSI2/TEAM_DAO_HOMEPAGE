import Head from "next/head";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";
import ListStakes from "@sections/stakes/ListStakes";

const MainDiv = styled.div`
  height: 1px;
  padding-top: 120px;
  padding-bottom: 120px;
`;

const Stakes = () => {
    return (
        <>
            <Head>
                <title>Stakes</title>
            </Head>
            <div>
                <HeaderOld/>
                <MainDiv>
                    <ListStakes/>
                </MainDiv>
                <FooterOld/>
            </div>
        </>
    )
}

export default Stakes;