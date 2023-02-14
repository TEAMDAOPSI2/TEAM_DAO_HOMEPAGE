import dataTeam from "data/top50.json";
import styled from "styled-components";
import {useEffect, useState} from "react";
import ISOCountry from "helper/ISOCountry";
import getFlagEmoji from "../../helper/GetFlagsEmoji";
import rank from "../../pages/teams/[name]";
import {formatNumber} from "../../helper/number_format";
import Router from "next/router";

const ListSectionContainer = styled.div`
  margin: auto;
  position: relative;
  color: #fff;
  display: flex;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    position: relative;
    background: #050609;
    transition: background-color 100ms 0ms;
    overflow: hidden;
  }

  th:first-child, td:first-child {
    padding-left: 10px;
  }

  th {
    height: 40px;
    vertical-align: middle;
    text-align: left;
    font: normal normal 400 14px/20px 'Roboto Mono', sans-serif;
    color: #00ff19;
    white-space: nowrap;
    overflow: hidden;
    background: #0f1510;
    text-transform: uppercase;
    cursor: pointer;
  }

  td {
    height: 40px;
    font: normal normal 400 14px/20px 'technology', sans-serif;
  }

  tr td:nth-child(1) {
    position: relative;
    width: 60px;
    @media (max-width: 576px) {
      width: 80px;
    }

    .team-symbol {
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #5cfe04;
      border: 2px solid #2f8317;
      position: absolute;
      margin-left: 10px;
    }
  }


  .number {
    font-size: 20px;
  }

  .text {
    font-family: 'Roboto Mono', monospace;
    font-size: 18px;
  }

  .symbol {
    font-size: 16px;
  }

  tbody tr:nth-of-type(odd) {
    background: #1f2125;
  }

  tbody tr:hover {
    background: #379341;
  }

  tbody tr {
    cursor: pointer;
  }

  .team-name {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none !important;
    font: normal normal 400 20px/20px 'Roboto Mono', sans-serif;
    color: #ccc;
    transition: color 100ms ease-in-out;

    .flag {
      width: 20px;
      font-family: 'NotoColorEmojiLimited', sans-serif;
    }


    div {
      margin-right: 10px;

      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
    }

    span {
      font: normal normal 400 10px/16px 'Roboto Mono', sans-serif;
      color: #ccc;
      margin-left: 10px;
    }
  }

  .c-win {
    color: #0fc713;
    font-family: 'technology', sans-serif;
  }

  .c-lose {
    color: #c0392b;
    font-family: 'technology', sans-serif;
  }

  .c-percent {
    color: #f1c40f;
    font-family: 'technology', sans-serif;
  }

  .cell-title {
    display: none;
  }

  @media (max-width: 524px) {
    .mobile-gone {
      display: none;
    }
`;

const SymbolTeam = ({rank, mapRandom}) => {
    const rankINT = parseInt(rank);
    const is = mapRandom.has(rankINT);
    if (is) {
        return (
            <span className="team-symbol" suppressHydrationWarning/>
        )
    }
}

// change # to %23
const changeHash = (str) => {
    return str.replace('#', '%23');
}

const ListSection = ({data, game, page}) => {
    const [mapRandom, setMapRandom] = useState(new Set());
    const [mapRandom2, setMapRandom2] = useState(new Set());
    const [sortData, setSortData] = useState({
        field: 'rank',
        order: 'asc'
    });

    // random number min 15 max 50
    useEffect(() => {
        let max = (page - 1) + 15;
        let min = page;
        if (page > 1) {
            min = (page - 1) * 15;
            max = page * 15;
        }
        let random = new Set();
        while (random.size < 4) {
            random.add(Math.floor(Math.random() * (max - min + 1) + min));
        }
        while (random.size < 8) {
            random.add(Math.floor(Math.random() * (max - min + 1) + min));
        }
        setMapRandom2(random);
        setMapRandom(random);
    }, [page]);

    const sortFilter = field => {
        if (sortData.field === field) {
            setSortData({
                field: field,
                order: sortData.order === 'asc' ? 'desc' : 'asc'
            });
        } else {
            setSortData({
                field: field,
                order: 'asc'
            });
        }
        if (field === 'rank' || field === 'approx') {
            if (sortData.order === 'asc') {
                data.sort((a, b) => a[field] - b[field]);
            } else {
                data.sort((a, b) => b[field] - a[field]);
            }
        } else {
            // sort data by field string
            if (sortData.order === 'asc') {
                data.sort((a, b) => a[field]?.toLowerCase().localeCompare(b[field]?.toLowerCase()));
            } else {
                data.sort((a, b) => b[field]?.toLowerCase().localeCompare(a[field]?.toLowerCase()));
            }

        }
    }


    return (
        <ListSectionContainer>
            <Table>
                <thead>
                <tr>
                    <th onClick={() => sortFilter('rank')}>
                        RANK {` `}
                        {
                            sortData.field === 'rank' ? <i className="fa-solid fa-sort text-white"></i> :
                                <i className="fa-solid fa-sort"></i>
                        }
                    </th>
                    <th onClick={() => sortFilter('nickName')} width={180}>
                        player {sortData.field === 'nickName' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th onClick={() => sortFilter('team')} className="mobile-gone">
                        TEAM {sortData.field === 'team' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th onClick={() => sortFilter('country')}>
                        country {sortData.field === 'country' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th className="mobile-gone">Price</th>
                    <th className="mobile-gone">age</th>
                    <th className="mobile-gone">games</th>
                    <th onClick={() => sortFilter('approx')} className="mobile-gone">
                        EARNINGS {sortData.field === 'approx' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th className="mobile-gone">WIN</th>
                    <th className="mobile-gone">LOSE</th>
                    <th className="mobile-gone">%</th>
                    <th className="mobile-gone">Points</th>
                </tr>
                </thead>
                <tbody>
                {data.slice((page - 1) * 15, page * 15).map((player, index) => (
                    <tr key={index} onClick={() => {
                        // if game is dota2
                        if (game === 'dota2') {
                            Router.push(`/teams/player/${player.name}`);
                        } else if (game === 'axie') {
                            // no redirect
                        } else {
                            Router.push(`/teams/${game}/player/${player.nickName}`);
                        }

                    }}>
                        <td className="number">
                            <span className="cell-title">Rank</span>

                            <span style={{fontSize: '18px'}}>
                                {player.rank}
                            </span>

                            <SymbolTeam rank={game !== 'dota2' ? index + 1 : player.rank} mapRandom={mapRandom}/>
                        </td>
                        <td className='text'>
                            <span className="cell-title">Player</span>
                            <div className="team-name" title={player.nickName}>
                                {
                                    // display ... if nickName is too long
                                    player.nickName.length > 10 ? player.nickName.substring(0, 10) + '...' : player.nickName
                                }
                            </div>
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Team</span>
                            {
                                player.team ? player.team : '*No team'
                            }
                        </td>
                        <td className="text" style={{textAlign: 'left'}}>
                            <span className="cell-title">Country</span>
                            {
                                player.country ? null : '*NA'
                            }
                            <div className="team-name" style={!player.country ? {display: 'none'} : null}>
                                <div className="flag">
                                    {
                                        mapRandom2.has(parseInt(game !== 'dota2' ? index + 1 : player.rank)) ? (`✈️`) : null
                                    }
                                </div>
                                <div className="flag">
                                    {
                                        getFlagEmoji(ISOCountry(player.country))
                                    }
                                </div>
                                {player.country}
                            </div>
                        </td>
                        <td className="number mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Price</span>
                            {/*{*/}
                            {/*    // random rank 1 is the highest price*/}
                            {/*    // player.rank == 1 ? (*/}
                            {/*    //     `$ ${formatNumber(8888888)}`*/}
                            {/*    // ) : (*/}
                            {/*    //     // max price 8888888 min price 8888 total row is 3000*/}
                            {/*    //     `$ ${formatNumber(8888888 - (player.rank * 3000))}`*/}
                            {/*    // )*/}
                            {/*}*/}
                            -
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Age</span>
                            -
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left', textTransform: 'uppercase'}}>
                            <span className="cell-title">Games</span>
                            {/*DOTA 2*/}
                            {player.category}
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Earnings</span>
                            {
                                player.approx ? (
                                    `$ ${formatNumber(player.approx)}`
                                ) : (
                                    `-`
                                )
                            }
                        </td>
                        <td className="number mobile-gone">
                            <span className="cell-title">WIN</span>
                            <span className='c-win'>{player.recordWin}</span>
                        </td>
                        <td className="number mobile-gone">
                            <span className="cell-title">LOSE</span>
                            <span className='c-lose'>{player.recordLose}</span>&nbsp;
                        </td>
                        <td className="number mobile-gone">
                            <span className="cell-title">%</span>
                            <span className='c-percent'>
                            {
                                game !== 'dota2' ? (
                                    '0'
                                ) : (
                                    (parseInt(player.recordWin) / (parseInt(player.recordWin) + parseInt(player.recordLose)) * 100).toFixed(0)
                                )
                            }&nbsp;
                                <span className="symbol">%</span>
                            </span>
                        </td>
                        <td className="number mobile-gone"><span
                            className="cell-title">Points</span>{player.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ListSectionContainer>
    );
}

export default ListSection;