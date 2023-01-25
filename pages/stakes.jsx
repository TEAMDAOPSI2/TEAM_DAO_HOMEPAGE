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
    const res = await fetch('https://stake.teamdao.app/api/matches')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

const getBettors = (data) => {
    const bettorsToday = data.today.map(match => match.bettors).flat();
    const bettorsYesterday = data.yesterday.map(match => match.bettors).flat();
    const bettorsTomorrow = data.tomorrow.map(match => match.bettors).flat();
    const bettors = [...bettorsToday, ...bettorsYesterday, ...bettorsTomorrow];

    // get latest bettors
    const newestBettors = bettors.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    }).slice(0, 10);

    const getMatchDetails = (matchID) => {
        return data.today.find(match => match.matchID === matchID) || data.yesterday.find(match => match.matchID === matchID) || data.tomorrow.find(match => match.matchID === matchID);
    }

    return newestBettors.map((bettor, index) => {
        const match = getMatchDetails(bettor.matchID);
        return {
            ...bettor,
            teamName: match.team[bettor.team].name,
            category: match.type,
            teams: Object.values(match.team).map(team => team.name),
            odd: index % 2 === 0
        }
    });

}

const Stakes = ({data}) => {
    const [stakes, setStakes] = useState([]);
    useEffect(() => {
        setStakes(getBettors(data));
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