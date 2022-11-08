import dataTeam from "data/top50.json";
import styled from "styled-components";
import {useEffect, useState} from "react";
import ISOCountry from "helper/ISOCountry";

const ListSectionContainer = styled.div`
  margin: auto;
  min-height: 400px;
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
  }

  td {
    height: 40px;
    font: normal normal 400 14px/20px 'technology', sans-serif;
  }

  tr td:nth-child(1) {
    position: relative;
    width: 80px;

    .team-symbol {
      right: 20px;
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
  
  .text{
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
    
    //.flag{
    //  margin-left: 10px;
    //  img{
    //    width: 20px;
    //    height: 20px;
    //  }
    //}


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
  //  tr th {
  //    display: none;
  //  }
  //
  //  .cell-title {
  //    display: inline;
  //    margin-right: auto;
  //    flex-shrink: 0;
  //    align-self: flex-start;
  //    text-align: left;
  //    white-space: nowrap;
  //    text-transform: uppercase;
  //    color: #00ff19;
  //    font: normal normal 400 14px/20px 'Roboto Mono', sans-serif;
  //  }
  //
  //  td {
  //    display: flex;
  //    align-items: center;
  //    justify-content: space-around;
  //    padding-right: 10px;
  //    padding-left: 10px;
  //
  //    .team-name {
  //      justify-content: flex-end;
  //    }
  //  }
  //}
    .mobile-gone{
      display: none;
    }
`;

const SymbolTeam = ({rank, mapRandom}) => {
    const rankINT = parseInt(rank);
    const is = mapRandom.has(rankINT);
    if (is) {
        return (
            <span className="team-symbol" suppressHydrationWarning />
        )
    }
}

const ListSection = ({data, page}) => {
    const [mapRandom, setMapRandom] = useState(new Set());
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
            random.add( Math.floor(Math.random() * (max - min + 1) + min));
        }
        setMapRandom(random);
    }, [page]);

    return (
        <ListSectionContainer>
            <Table>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>player</th>
                    <th className="mobile-gone">TEAM</th>
                    <th>country</th>
                    <th className="mobile-gone">passport</th>
                    <th className="mobile-gone">age</th>
                    <th className="mobile-gone">games</th>
                    <th className="mobile-gone">EARNINGS</th>
                    <th className="mobile-gone">WIN</th>
                    <th className="mobile-gone">LOSE</th>
                    <th className="mobile-gone">%</th>
                    <th className="mobile-gone">Points</th>
                </tr>
                </thead>
                <tbody>
                {data.slice((page - 1) * 15, page * 15).map((player, index) => (

                    // going to page team/{player.id}
                    <tr key={index} onClick={() => {
                        window.location.href = `teams/player/${player.name}`
                    }}>
                        <td className="number">
                            <span className="cell-title">Rank</span>
                            <span style={{fontSize: '18px'}}>{player.rank}</span>

                            <SymbolTeam rank={player.rank} mapRandom={mapRandom}/>
                        </td>
                        <td className='text'>
                            <span className="cell-title">Player</span>
                            <div className="team-name">
                                {player.nickName}
                            </div>
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Team</span>
                            {player.team}
                        </td>
                        <td className="text" style={{textAlign: 'left'}}>
                            <span className="cell-title">Team</span>
                            <div className="team-name">
                                <div className="flag">
                                    <img src={`https://countryflagsapi.com/png/${ISOCountry(player.country) ? ISOCountry(player.country) : player.country}`} alt=""/>
                                </div>
                                {player.country}
                            </div>
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Passport</span>
                            -
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Age</span>
                            -
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Games</span>
                            DOTA 2
                        </td>
                        <td className="text mobile-gone" style={{textAlign: 'left'}}>
                            <span className="cell-title">Age</span>
                            -
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
                            {(parseInt(player.recordWin) / (parseInt(player.recordWin) + parseInt(player.recordLose)) * 100).toFixed(0)}&nbsp;
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