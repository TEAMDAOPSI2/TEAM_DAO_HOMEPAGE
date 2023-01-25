import React, {useContext, useEffect, useState} from "react";
import {Table, FilterWrapper, GameWrapper} from "./style";
import WSContext from "../../context/WSContext";
import categoryStakes from "@data/stakeCategories.json";
import EmojiConvertor from 'emoji-js';

const emojiConvertor = new EmojiConvertor();

const ListStakes = ({bettors}) => {
    const [odd, setOdd] = useState(0)
    const [animation, setAnimation] = useState(null)
    const [data, setData] = useState({
        "status": false,
        "stakes": [],
    });
    const socket = useContext(WSContext)

    useEffect(() => {
        setData((prev) => {
            return {
                ...prev,
                stakes: bettors
            }
        });
        console.log(bettors);
    }, [bettors])

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

        const timeoutId = setTimeout(() => {
            setAnimation(null);
        }, 1000);


        return () => {
            socket.off('status')
            socket.off('disconnect')
            socket.off('new_stake')
            clearTimeout(timeoutId)
        }
    }, [data, setData, socket])


    return (
        <div className="container">
            <FilterWrapper>
                <div className="filter-top">
                    <GameWrapper>
                        <ul>
                            <li>All</li>
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
                            const categoryIcon = categoryStakes.find((x) => x.name === stake.category)?.logo;

                            return (
                                <tr key={index}
                                    className={`${stake.odd % 2 === 0 ? 'odd' : ''} ${animation === stake.betID ? 'animate' : ''}`}>
                                    <td>{`${categoryIcon} ${stake.category}`}</td>
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