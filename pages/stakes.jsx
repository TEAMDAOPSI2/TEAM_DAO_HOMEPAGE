import Head from "next/head";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";
import ListStakes from "@sections/stakes/ListStakes";
import {useEffect, useState} from "react";

const MainDiv = styled.div`
  height: 1px;
  padding-top: 60px;
  padding-bottom: 120px;
`;


export async function getServerSideProps() {
    // with headers
    const res = await fetch('https://stake.teamdaoapp.dev/recent', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'api-key': 'hjXz4mj9Tlkk5Qm6ifuAs'
        }
    })
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}


const evenOdd = (stakes) => {
    stakes.map((item, index) => {
        item.odd = index + 1;
    })
    return stakes;
}


const Stakes = ({data}) => {
    const [stakes, setStakes] = useState([]);
    useEffect(() => {
        setStakes(evenOdd(data));
    }, [data]);
    return (
        <>
            <Head>
                <title>Stakes</title>
            </Head>
            <div>
                <HeaderOld/>
                <MainDiv>
                    <ListStakes bettors={stakes} />
                </MainDiv>
                <FooterOld/>
            </div>
        </>
    )
}

export default Stakes;