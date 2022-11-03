import dataTeam from "data/top50.json";
import styled from 'styled-components';

const GridSectionWrapper = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: row;
  margin: 40px auto 0;
  flex-grow: 1;
  flex-wrap: wrap;
  @media (max-width: 763px) {
    max-width: 90%;
  }
`;

const BoxTeamWrapper = styled.div`
  width: calc(100% / 3);
  margin-bottom: 20px;
  
  @media(max-width: 1024px) {
    width: calc(100% / 2);
  }

  @media(max-width: 528px) {
    width: calc(100% / 1);
  }

  .box {
    background-color: #0f1510;
    padding: 10px;
    border-radius: 2px;
    margin: 0 10px;
    cursor: pointer;

    .info-top {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        h3 {
          font: normal normal 400 16px/22px 'Roboto Mono', sans-serif;
          color: #ccc;
        }

        p {
          font: normal normal 400 10px/16px 'Roboto Mono', sans-serif;
          color: #ca7;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    &:hover {
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .info {
    width: calc(100% / 2);
    text-align: left;
    padding-right: 10px;
    display: flex;
    flex-direction: row;

    .icon {
      text-align: left;
      font-size: 1em;
      color: #ca7;
    }

    .detail {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: #fff;
      text-align: left;
      margin-left: 10px;
      font-family: 'technology','Roboto Mono' ,'sans-serif';
      text-transform: uppercase;
      span{
        font-family: 'Roboto Mono' ,'sans-serif';
      }

      > span:first-child {
        width: 100%;
        padding-right: 10px;
        color: #ca7;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
      }

      .c-win {
        color: #0fc713;
        font-family: 'technology' ,'sans-serif';
      }

      .c-lose {
        color: #c0392b;
        font-family: 'technology' ,'sans-serif';
      }

      .c-percent {
        color: #ffffff;
        padding-left: 7px;
        font-family: 'technology' ,'sans-serif';
      }
    }

  }
`;

const GridSection = ({page, keyword}) => {
    const data = keyword ? dataTeam.filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase())) : dataTeam
    return (
        <>
            <GridSectionWrapper>
                {
                    data.slice((page - 1) * 15, page * 15).map((item, index) => (
                        <BoxTeamWrapper key={index}>
                            <div className="box" onClick={() => {
                                window.location.href = `teams/${item.rank}`
                            }}>
                                <div className="info-top">
                                    <div className="image">
                                        <img src={item.logo} alt={item.name}/>
                                    </div>
                                    <div className="text">
                                        <h3>{item.name}</h3>
                                        <p>{item.region}</p>
                                    </div>
                                </div>
                                <div className="info-bot">
                                    <InfoGroup>
                                        <div className="info">
                                            <div className="icon">
                                                <i className="fa-solid fa-ranking-star"></i>
                                            </div>
                                            <div className="detail">
                                                <span>Rank:</span> {item.rank}
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <i className="fa-solid fa-trophy"></i>
                                            </div>
                                            <div className="detail">
                                                <span>Record:</span>
                                                <span>
                                    <span className="c-win">{item.recordWin}</span>
                                                    &nbsp;/&nbsp;
                                                    <span className="c-lose">{item.recordLose}</span>
                                <span className="c-percent">
                                    ({(parseInt(item.recordWin) / (parseInt(item.recordWin) + parseInt(item.recordLose)) * 100).toFixed(0)}%)
                                </span>
                               </span>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <i className="fa-solid fa-star-half-alt"></i>
                                            </div>
                                            <div className="detail">
                                                <span>Points:</span> {item.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <i className="fa-solid fa-money-bill-wave-alt"></i>
                                            </div>
                                            <div className="detail">
                                                <span>Earnings:</span> $&nbsp;{
                                                new Intl.NumberFormat('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    minimumFractionDigits: 0
                                                }).format(item.prizeMoney).replace('$', '')}
                                            </div>
                                        </div>
                                    </InfoGroup>
                                </div>
                            </div>
                        </BoxTeamWrapper>
                    ))
                }
            </GridSectionWrapper>
        </>
    )
}

export default GridSection;