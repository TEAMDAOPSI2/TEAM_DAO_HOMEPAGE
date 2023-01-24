import React, {useContext, useEffect, useState} from "react";
import {Table, FilterWrapper, GameWrapper} from "./style";
import WSContext from "../../context/WSContext";


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
            game: 'DOTA🐲',
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
            const games = ['DOTA🐲', "CODM🔫", "MLBB🐢", "PUBGM🔫"]
            let x = {
                betID: Math.random().toString(36).substring(7),
                userID: '1978772578',
                name: '@TeamDAO???? | 3006 | APE |' + Math.random().toString(36).substring(2, 15),
                matchID: 'EQAGTV95O7OW',
                teamID: '0PNFSUMR3YJ9',
                team: 'b',
                custom: false,
                amount: Math.floor(Math.random() * 21),
                type: 'place-bet',
                timestamp: new Date().toISOString(),
                teamName: 'ASTER ARIES',
                teams: ['INVICTUS GAMING', 'ASTER ARIES'],
                game: games[Math.floor(Math.random() * games.length)],
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
        }, 3000);

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
                            <li>DOTA🐲</li>
                            <li>CODM🔫</li>
                            <li>MLBB🐢</li>
                            <li>PUBGM🔫</li>
                            <li>LOL🐉</li>
                            <li>FREE FIRE🔫</li>
                            <li>FORTNITE🔫</li>
                            <li>FB⚽</li>
                            <li>BB🏀</li>
                            <li>HORSE🐎</li>
                            <li>F1🏎</li>
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
                            if (stake.teams.length === 2) event = stake.teams[0] + " VS " + stake.teams[1]; else event = stake.teamName;
                            const date = new Date(stake.timestamp);
                            const time = date.toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            });
                            // make effect change by row
                            return (
                                <tr key={index} className={`${stake.odd % 2 === 0 ? 'odd' : ''} ${animation === stake.betID ? 'animate': ''}`}>
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