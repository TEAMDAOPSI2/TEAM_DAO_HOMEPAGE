import styled from "styled-components";
import React from "react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoTeamBox = styled.div`
  padding: 20px;
  margin-right: 10px;
  width: 35%;
  color: white;
  background-color: #1e1e1e;
  text-transform: uppercase;

  h3 {
    font-size: 1.7rem;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }

  .avatar {
    height: 180px;
    width: 180px;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0 auto;


    div:first-child {
      position: absolute;
      z-index: 300;
      top: 0;
      left: 0;
      display: block;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      background-position: 50% 50%;
      -webkit-filter: blur(10px);
      -ms-filter: blur(10px);
      filter: blur(10px);
      height: 180px;
      width: 180px;
    }

    div:last-child {
      z-index: 301;
      position: absolute;
      width: 100%;
      height: 100%;

      &:before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
      }
    }
  }

  .region {
    text-align: center;
    color: #ca7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14x;
    font-family: "Roboto Mono", monospace;
    margin-top: 10px;

    span {
      font-size: 18px;
      color: white;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;

const StatsBox = styled.div`
  padding: 20px;
  width: 65%;
  margin-left: 10px;
  color: white;
  background-color: #1e1e1e;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
    font-family: "Roboto Mono", monospace;
  }
`;

const InfoGroup = styled.div`
  margin-bottom: 20px;

  .info {
    width: 50%;
    padding: 10px;
    float: left;
    text-align: center;
    font-family: "Roboto Mono", monospace;

    .icon {
      text-align: center;
      font-size: 2.1em;
      color: #ca7;
    }

    .detail {
      display: flex;
      flex-direction: column;
      width: 100%;
      font-family: 'technology', sans-serif;

      span {
        font-family: "Roboto Mono", monospace;
      }

      > span:first-child {
        width: 100%;
        padding-right: 10px;
        color: #ca7;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        text-align: center;
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
        color: #ffffff;
        padding-left: 7px;
        font-family: 'technology', sans-serif;
      }
    }

  }
`;

const HeroesBox = styled.div`
  color: white;
`;

const HeroCard = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  padding: 20px;
  flex-wrap: nowrap;

  div {
    flex: auto;
  }

  &:nth-of-type(odd) {
    background-color: #000;
  }

  .avatar {
    height: 82px;
    margin-right: 10px;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .txt-sub {
    font: normal normal 300 18px/28px 'Roboto Mono', sans-serif;
    font-size: 14px;
    color: #b7a48e;
    vertical-align: middle;
    margin-bottom: 5px;
  }

  .txt-info {
    font: normal normal 400 10px/16px 'Roboto Mono', sans-serif;
    color: #379341;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }

  .stat {
    margin-right: 10px;

    .bar {
      height: 20px;
      background: #cb2b1c;
      margin-top: 10px;

      div {
        height: 20px;
        background: #00b43b;
      }
    }

    .c-win, .c-lose, .c-percent {
      font-family: 'technology', sans-serif;
    }

    .c-win {
      color: #0fc713;
    }

    .c-lose {
      color: #c0392b;
    }

    .c-percent {
      color: #ffffff;
      padding-left: 7px;
    }
  }

  .hero-detail {
    margin-right: 10px;

    h3 {
      font-size: 1.2rem;
      font-family: 'Roboto Mono', monospace;
      text-align: left;
      margin-bottom: 5px;
    }
  }
`


const PlayerSection = ({player}) => {
    return (
        <>
            <Row>
                <InfoTeamBox>
                    <h3>{player?.name}</h3>
                    <div className="avatar">
                        <div style={{backgroundImage: `url(${player.avatar})`}}></div>
                        <div>
                            <img src={player.avatar} alt={player.name}/>
                        </div>
                    </div>
                    <div className="region">Country : <span>{player.country}</span></div>

                    <InfoGroup>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-ranking-star"></i>
                            </div>
                            <div className="detail">
                                <span>Rank:</span> {player.rank}
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-trophy"></i>
                            </div>
                            <div className="detail">
                                <span>Record:</span>
                                <span>
                                    <span className="c-win">{player.recordWin}</span>
                                    &nbsp;/&nbsp;
                                    <span className="c-lose">{player.recordLose}</span>
                                <span className="c-percent">
                                    ({(parseInt(player?.recordWin) / (parseInt(player?.recordWin) + parseInt(player?.recordLose)) * 100).toFixed(0)}%)
                                </span>
                               </span>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-star-half-alt"></i>
                            </div>
                            <div className="detail">
                                <span>Points:</span> {player?.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-people-group"></i>
                            </div>
                            <div className="detail text">
                                <span>Current Team:</span> {player.team}
                            </div>
                        </div>
                    </InfoGroup>

                </InfoTeamBox>
                <StatsBox>
                    <h3>SIGNATURE HEROES</h3>
                    <HeroesBox>
                        {player?.details?.map((hero, index) => (
                            <HeroCard key={index} hero={hero}>
                                <div className="avatar">
                                    <img src={hero.image} alt={hero.name}/>
                                </div>
                                <div className="hero-detail">
                                    <h3>{hero.hero}</h3>
                                    <p className="txt-sub">{hero.totalGames}</p>
                                    <p className="txt-info">Last Game{hero.lastGame}</p>
                                </div>
                                <div className="stat">
                                    <p className="txt-info">Pick Rate:</p>
                                    <p>
                                        <span className="c-win">{hero.statPickWin}</span> / <span
                                        className="c-lose">{hero.statPickLose}</span>
                                        <span className="c-percent">({(parseInt(hero.statPickWin) / parseInt(hero.statPickLose) * 100).toFixed(0)}&nbsp;%)</span>
                                    </p>
                                    <div className="bar">
                                        <div className="bar-inner"
                                             style={{width: `${(parseInt(hero.statPickWin) / parseInt(hero.statPickLose) * 100).toFixed(0)}%`}}></div>
                                    </div>
                                </div>
                                <div className="stat">
                                    <p className="txt-info">Record:</p>
                                    <p>
                                        <span className="c-win">{hero.recordWin}</span> / <span
                                        className="c-lose">{hero.recordLose}</span>
                                        <span
                                            className="c-percent">({(parseInt(hero.recordWin) / (parseInt(hero.recordWin) + parseInt(hero.recordLose)) * 100).toFixed(0)}&nbsp;%)</span>
                                    </p>
                                    <div className="bar">
                                        <div className="bar-inner"
                                             style={{width: `${(parseInt(hero.recordWin) / (parseInt(hero.recordWin) + parseInt(hero.recordLose)) * 100).toFixed(0)}%`}}></div>
                                    </div>
                                </div>
                            </HeroCard>
                        ))}
                    </HeroesBox>
                </StatsBox>
            </Row>
        </>
    )
}

export default PlayerSection;