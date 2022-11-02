import dataTeam from "data/top50.json";
import styled from "styled-components";

const ListSectionContainer = styled.div`
  max-width: 80%;
  margin: auto;
  min-height: 400px;
  position: relative;
  color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 50px;

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
    color: #ca7;
    white-space: nowrap;
    overflow: hidden;
    background: #0f1510;
  }

  td {
    height: 40px;
    font: normal normal 400 14px/20px 'technology', sans-serif;
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
    font: normal normal 400 14px/20px 'Roboto Mono', sans-serif;
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
`;


const ListSection = ({data,page}) => {

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
                        <td>{team.rank}</td>
                        <td className=''>
                            <div className="team-name">
                                <div className="logo">
                                    <img src={team.logo} alt={team.name} width="30px" height="30px" loading='lazy'/>
                                </div>
                                {team.name}
                                <span>{team.region}</span>
                            </div>
                        </td>
                        {/*number format usd using coma style fixed 0*/}
                        <td style={{textAlign: 'left'}}>{
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            }).format(team.prizeMoney)
                        }</td>
                        <td>
                            <span className='c-win'>{team.recordWin}</span>
                        </td>
                        <td>
                            <span className='c-lose'>{team.recordLose}</span>&nbsp;
                        </td>
                        <td>
                            <span className='c-percent'>
                            {(parseInt(team.recordWin) / (parseInt(team.recordWin) + parseInt(team.recordLose)) * 100).toFixed(0)}%
                            </span>
                        </td>
                        <td>{team.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ListSectionContainer>
    );
}

export default ListSection;