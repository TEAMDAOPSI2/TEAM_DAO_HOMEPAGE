import React, {useContext, useEffect, useState} from "react";
import {Table, FilterWrapper, GameWrapper} from "./style";
import WSContext from "../../context/WSContext";
import {faker} from "@faker-js/faker";

const randomMatch = [
    {
        userID: '1978772578',
        name: '@TEAM_Beta_201????',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'b',
        custom: false,
        type: 'place-bet',
        timestamp: '2023-01-14T12:04:10+08:00',
        teamName: 'TEAM BDS',
        teams: ['EXCEL ESPORTS', 'TEAM BDS'],
        game: '🐉LOL',
    },
    {
        userID: '1978772578',
        name: '@TEAM_Beta_204 ????',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'b',
        custom: false,
        type: 'place-bet',
        timestamp: '2023-01-14T12:04:10+08:00',
        teamName: 'TEAM BDS',
        teams: ['EXCEL ESPORTS', 'TEAM BDS'],
        game: '🐉LOL',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO???? | 1174 | ??GM INTERN (TEKKEN/ F1 )',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: '2023-01-22T23:59:50+08:00',
        teamName: 'FULHAM',
        teams: ['FULHAM', 'TOTTENHAM HOTSPUR'],
        game: '⚽FOOTBALL',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO???? | 5220 | GOLF15 | Natco',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'b',
        custom: false,
        type: 'place-bet',
        timestamp: '2023-01-14T12:04:10+08:00',
        teamName: 'TOTTENHAM HOTSPUR',
        teams: ['FULHAM', 'TOTTENHAM HOTSPUR'],
        game: '⚽FOOTBALL',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO????| 1255 | ? ?e?? ??',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'b',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T11:03:09+08:00",
        teamName: 'GAIMIN GLADIATORS',
        teams: ['LIQUID', 'GAIMIN GLADIATORS'],
        game: '🐲DOTA',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO ???? | 1286 |??GM INTERN- KOF/TENNIS | Anne',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T11:03:09+08:00",
        teamName: 'LIQUID',
        teams: ['LIQUID', 'GAIMIN GLADIATORS'],
        game: '🐲DOTA',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO ???? | 2049 | BRAVO | DAO Jo1',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T11:04:14+08:00",
        teamName: 'LIQUID',
        teams: ['LIQUID', 'GAIMIN GLADIATORS'],
        game: '🐲DOTA',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO ???? | 4911 | COACH | YANKEE10 | Nico',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T11:04:14+08:00",
        teamName: 'PISTONS',
        teams: ['PISTONS', 'MILWAUKEE BUCKS'],
        game: '🏀NBA',
    },
    {
        userID: '1978772578',
        name: '@TEAM_Beta_209 ????',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T13:26:00+08:00",
        teamName: 'PISTONS',
        teams: ['PISTONS', 'MILWAUKEE BUCKS'],
        game: '🏀NBA',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO ???? M88 | 1252 | ?? GM INTERN - MK | Aicel',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T11:04:14+08:00",
        teamName: 'PISTONS',
        teams: ['PISTONS', 'MILWAUKEE BUCKS'],
        game: '🏀NBA',
    },
    {
        userID: '1978772578',
        name: '@TeamDAO ???? M88 | 1252 | ?? GM INTERN - MK | Aicel',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T13:47:31+08:00",
        teamName: 'PISTONS',
        teams: ['UTAH JAZZ', 'CHARLOTTE HORNETS'],
        game: '🏀NBA',
    },
    {
        userID: '1978772578',
        name: '@TEAM_Beta_208 ????',
        matchID: 'EQAGTV95O7OW',
        teamID: '0PNFSUMR3YJ9',
        team: 'a',
        custom: false,
        type: 'place-bet',
        timestamp: "2023-01-23T13:47:31+08:00",
        teamName: 'PISTONS',
        teams: ['UTAH JAZZ', 'CHARLOTTE HORNETS'],
        game: '🏀NBA',
    }
]


const ListStakes = () => {
    const [odd, setOdd] = useState(0)
    const [animation, setAnimation] = useState(null)
    const [data, setData] = useState({
        "status": false,
        "stakes": [{
            betID: 'af2e0700-37c0-4d3a-a4d3-752622956632',
            userID: '1978772578',
            name: '@TeamDAO???? | 3006 | APE | Edgar Perez',
            matchID: 'EQAGTV95O7OW',
            teamID: '0PNFSUMR3YJ9',
            team: 'b',
            custom: false,
            amount: 1,
            type: 'place-bet',
            timestamp: '2023-01-14T12:04:10+08:00',
            teamName: 'ASTER ARIES',
            teams: ['INVICTUS GAMING CHINA', 'ASTER ARIES'],
            game: '🐲DOTA',
        }],
    })
    const socket = useContext(WSContext)
    useEffect(() => {
        socket.on('status', (resp) => {
            const status = resp.status
            setData({...data, status})
        });
        socket.on('disconnect', () => {
            setData({...data, status: false})
        });
        socket.on('new_stake', (x) => {
            setOdd(odd + 1);
            x.odd = odd;
            setAnimation(x.betID)
            setData((prev) => {
                return {
                    ...prev,
                    stakes: [x, ...prev.stakes].slice(0, 10)
                }
            })
        });

        // add mocking set data every 30 seconds
        const interval = setInterval(() => {
            const games = ['🐲DOTA', "🔫CODM", "🐢MLBB", "🔫PUBGM"];
            const fakeID = faker.database.mongodbObjectId();
            const x = {
                betID: fakeID,
                amount : Math.floor(Math.random() * 20 + 1),
                ...
                    randomMatch[Math.floor(Math.random() * randomMatch.length)]
            };
            setOdd(odd + 1);
            x.odd = odd;
            setAnimation(x.betID)
            setData((prev) => {
                return {
                    ...prev,
                    stakes: [x, ...prev.stakes].slice(0, 10)
                }
            })
        }, 5000);

        const timeoutId = setTimeout(() => {
            setAnimation(null);
        }, 1000);

        return () => {
            socket.off('status')
            socket.off('disconnect')
            socket.off('new_stake')
            clearInterval(interval)
            clearTimeout(timeoutId)
        }
    }, [data, setData, socket])


    return (
        <div className="container">
            <FilterWrapper>
                <div className="filter-top">
                    <GameWrapper>
                        <ul>
                            <li>All Stakes</li>
                            <li>🐲DOTA</li>
                            <li>🔫CODM</li>
                            <li>🐢MLBB</li>
                            <li>🔫PUBGM</li>
                            <li>🐉LOL</li>
                            <li>🔫FREE FIRE</li>
                            <li>🔫FORTNITE</li>
                            <li>⚽FB</li>
                            <li>🏀BB</li>
                            <li>🐎HORSE</li>
                            <li>🏎F1</li>
                        </ul>
                    </GameWrapper>
                </div>
            </FilterWrapper>
            <div className="table-wrapper">
                <Table>
                    <thead>
                    <tr>
                        <th>GAME</th>
                        <th>MATCHES</th>
                        <th className="mobile-gone">STAKERS</th>
                        <th className="mobile-gone">Time</th>
                        <th>Stake Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.stakes.map((stake, index) => {
                            let event = "";
                            if (stake.teams.length === 2) event = stake.teams[0] + " ⚔ " + stake.teams[1]; else event = stake.teamName;
                            const date = new Date(stake.timestamp);
                            const time = date.toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            });
                            // make effect change by row
                            return (
                                <tr key={index}
                                    className={`${stake.odd % 2 === 0 ? 'odd' : ''} ${animation === stake.betID ? 'animate' : ''}`}>
                                    <td>{stake.game}</td>
                                    <td>{event}</td>
                                    <td className="mobile-gone">{stake.name}</td>
                                    <td className="mobile-gone">{time}</td>
                                    <td>
                                        <span style={{color: '#00ff19'}}>{stake.amount} $TEAM</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ListStakes;