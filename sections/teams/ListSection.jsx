import dataTeam from "data/top50.json";
import styled from "styled-components";
import {useEffect, useState} from "react";
import ISOCountry from "../../helper/ISOCountry";
import getFlagEmoji from "../../helper/GetFlagsEmoji";

const ListSectionContainer = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  color: #fff;

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
    width: 80px;

    @media (max-width: 540px) {
      width: 70px;
    }

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

    .flag {
      font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
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

  @media (max-width: 540px) {

    .mobile-gone {
      display: none;
    }

    .team-name {
      font-size: 14px;
    }
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

const ListSection = ({dataGame, page, dataFilter}) => {

    const [data, setData] = useState(dataGame);
    const [mapRandom, setMapRandom] = useState(new Set());
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
        setMapRandom(random);
        if (dataFilter) {
            setData(dataFilter);
        } else {
            setData(dataGame);
        }
    }, [page, dataFilter]);

    const sortFilter = field => {
        if (sortData.field === field) {
            setSortData({field: field, order: sortData.order === 'asc' ? 'desc' : 'asc'});
        } else {
            setSortData({field: field, order: 'asc'});
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
                        Rank {sortData.field === 'rank' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th onClick={() => sortFilter('name')}>
                        Team {sortData.field === 'name' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th onClick={() => sortFilter('region')}>
                        Country {sortData.field === 'region' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th className="mobile-gone" onClick={() => sortFilter('prizeMoney')}>
                        Earnings {sortData.field === 'prizeMoney' ? <i className="fa-solid fa-sort text-white"></i> :
                        <i className="fa-solid fa-sort"></i>}
                    </th>
                    <th className="mobile-gone">WIN</th>
                    <th className="mobile-gone">LOSE</th>
                    <th className="mobile-gone">%</th>
                    <th className="mobile-gone">Points</th>
                </tr>
                </thead>
                <tbody>
                {data.slice((page - 1) * 15, page * 15).map((team, index) => (

                    // going to page team/{team.id}
                    <tr key={index} onClick={() => {
                        window.location.href = `teams/${team?.name}`
                    }}>
                        <td className="number">
                            <span className="cell-title">Rank</span>
                            <span style={{fontSize: '18px'}}>{team.rank}</span>

                            <SymbolTeam rank={team?.rank} mapRandom={mapRandom}/>
                        </td>
                        <td className=''>
                            <span className="cell-title">Team</span>
                            <div className="team-name">
                                <div className="logo">
                                    <img src={team?.logo} alt={team.name} width="30px" height="30px" loading='lazy'/>
                                </div>
                                {team.name}
                            </div>
                        </td>
                        <td className="text" style={{textAlign: 'left'}}>
                            <span className="cell-title">country</span>
                            <div className="team-name">
                                <div className="flag">
                                    {
                                        getFlagEmoji(ISOCountry(team?.region))
                                    }
                                </div>
                                {team.region}
                            </div>
                        </td>
                        {/*number format usd using coma style fixed 0*/}
                        <td className="number mobile-gone" style={{textAlign: 'left'}}><span
                            className="cell-title">Earnings</span><span className="symbol">$</span>&nbsp;{
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(team?.prizeMoney).replace('$', '')
                        }</td>
                        <td className="number mobile-gone">
                            <span className="cell-title">WIN</span>
                            <span className='c-win'>{team?.recordWin}</span>
                        </td>
                        <td className="number mobile-gone">
                            <span className="cell-title">LOSE</span>
                            <span className='c-lose'>{team?.recordLose}</span>&nbsp;
                        </td>
                        <td className="number mobile-gone">
                            <span className="cell-title">%</span>
                            <span className='c-percent'>
                            {
                                team?.recordWin ? (parseInt(team?.recordWin) / (parseInt(team?.recordWin) + parseInt(team?.recordLose)) * 100).toFixed(0) : "-"
                            }&nbsp;
                                <span className="symbol">%</span>
                            </span>
                        </td>
                        <td className="number mobile-gone"><span
                            className="cell-title">Points</span>{team?.points ? team?.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ListSectionContainer>
    );
}

export default ListSection;