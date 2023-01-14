import React, {useContext, useEffect, useState} from "react";
import {Table, FilterWrapper, GameWrapper} from "./style";
import WSContext from "../../context/WSContext";


const ListStakes = () => {
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
            teams: ['INVICTUS GAMING CHINA', 'ASTER ARIES']
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
            setData((prev) => {
                if (prev.stakes.length > 9) {
                    prev.stakes.pop()
                }
                return {
                    ...prev,
                    stakes: [x, ...prev.stakes]
                }
            })
        });

        return () => {
            socket.off('status')
            socket.off('disconnect')
            socket.off('new_stake')
        }
    }, [data, setData, socket])

    return (
        <div className="container">
            <FilterWrapper>
                <div className="filter-top">
                    <GameWrapper>
                        <ul>
                            <li>Current Bets</li>
                            <li>Sport Bets</li>
                            <li>Race Leaderboard</li>
                        </ul>
                    </GameWrapper>
                </div>
            </FilterWrapper>
            <div className="table-wrapper">
                <Table>
                    <thead>
                    <tr>
                        <th>Event</th>
                        <th className="mobile-gone">User</th>
                        <th className="mobile-gone">Time</th>
                        <th>Bet Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.stakes.map((stake, index) => {
                            let event = "";
                            if (stake.teams.length === 2) event = stake.teams[0] + " VS " + stake.teams[1]; else event = stake.teamName;
                            const date = new Date(stake.timestamp);
                            // time format 	11:04
                            const time = date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
                            return (
                                <tr key={index}>
                                    <td>{event}</td>
                                    <td className="mobile-gone">{stake.name}</td>
                                    <td className="mobile-gone">{time}</td>
                                    <td>{stake.amount}</td>
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