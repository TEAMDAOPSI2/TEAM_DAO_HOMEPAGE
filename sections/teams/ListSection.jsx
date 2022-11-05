import dataTeam from "data/top50.json";
import styled from "styled-components";
import {useEffect, useState} from "react";

const ListSectionContainer = styled.div`
  max-width: 80%;
  margin: auto;
  min-height: 400px;
  position: relative;
  color: #fff;
  @media (max-width: 763px) {
    max-width: 90%;
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

  @media (max-width: 739px) {
    tr th {
      display: none;
    }

    .cell-title {
      display: inline;
      margin-right: auto;
      flex-shrink: 0;
      align-self: flex-start;
      text-align: left;
      white-space: nowrap;
      text-transform: uppercase;
      color: #00ff19;
      font: normal normal 400 14px/20px 'Roboto Mono', sans-serif;
    }

    td {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-right: 10px;
      padding-left: 10px;

      .team-name {
        justify-content: flex-end;
      }
    }
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
        const randomOne = Math.floor(Math.random() * (max - min + 1) + min);
        const randomTwo = Math.floor(Math.random() * (max - min + 1) + min);
        const randomThree = Math.floor(Math.random() * (max - min + 1) + min);
        const randomFour = Math.floor(Math.random() * (max - min + 1) + min);

        setMapRandom(new Set([randomOne, randomTwo, randomThree, randomFour]));
    }, [page]);

    return (
        <ListSectionContainer>
            <Table>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Earnings</th>
                    <th>WIN</th>
                    <th>LOSE</th>
                    <th>%</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {data.slice((page - 1) * 15, page * 15).map((team, index) => (

                    // going to page team/{team.id}
                    <tr key={index} onClick={() => {
                        window.location.href = `teams/${team.rank}`
                    }}>
                        <td className="number">
                            <span className="cell-title">Rank</span>
                            <span style={{fontSize: '18px'}}>{team.rank}</span>

                            <SymbolTeam rank={team.rank} mapRandom={mapRandom}/>
                        </td>
                        <td className=''>
                            <span className="cell-title">Team</span>
                            <div className="team-name">
                                <div className="logo">
                                    <img src={team.logo} alt={team.name} width="30px" height="30px" loading='lazy'/>
                                </div>
                                {team.name}
                                <span>{team.region}</span>
                            </div>
                        </td>
                        {/*number format usd using coma style fixed 0*/}
                        <td className="number" style={{textAlign: 'left'}}><span
                            className="cell-title">Earnings</span><span className="symbol">$</span>&nbsp;{
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(team.prizeMoney).replace('$', '')
                        }</td>
                        <td className="number">
                            <span className="cell-title">WIN</span>
                            <span className='c-win'>{team.recordWin}</span>
                        </td>
                        <td className="number">
                            <span className="cell-title">LOSE</span>
                            <span className='c-lose'>{team.recordLose}</span>&nbsp;
                        </td>
                        <td className="number">
                            <span className="cell-title">%</span>
                            <span className='c-percent'>
                            {(parseInt(team.recordWin) / (parseInt(team.recordWin) + parseInt(team.recordLose)) * 100).toFixed(0)}&nbsp;
                                <span className="symbol">%</span>
                            </span>
                        </td>
                        <td className="number"><span
                            className="cell-title">Points</span>{team.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ListSectionContainer>
    );
}

export default ListSection;