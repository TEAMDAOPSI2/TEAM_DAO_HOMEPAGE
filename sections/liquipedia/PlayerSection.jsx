import styled from "styled-components";
import React from "react";
import TeamImg from "public/assets/round-team-logo.png";
import EarningsImg from "public/assets/icons/TEAM-earning-circle.png";
import RankImg from "public/assets/icons/TEAM-rank-circle.png";
import RecordImg from "public/assets/icons/TEAM-record-circle.png";
import Image from "@components/Image";

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

  .ax {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .poligon {
    display: inline-block;
    position: relative;
    width: 140px;
    height: 121.23px; /* width * 0.866 */
    background: #2dfe31;
    box-sizing: border-box;
    -webkit-clip-path: polygon(0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%);
    -moz-clip-path: polygon(0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%);
  }

  .hex-background {
    position: absolute;
    background-color: #1D1d1d;
    top: 2px; /* equal to border thickness */
    left: 2px; /* equal to border thickness */
    width: 136px; /* container width - (border thickness * 2) */
    height: 117.24px; /* container height - (border thickness * 2) */
    -webkit-clip-path: polygon(0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%);
    -moz-clip-path: polygon(0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%);
  }

  .poligon img {
    position: absolute;
    width: 136px; /* container width - (border thickness * 2) */
    height: 117.24px; /* container height - (border thickness * 2) */
    object-fit: contain;
    -webkit-clip-path: polygon(0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%);
    -moz-clip-path: polygon(0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%);
  }

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

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
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


const PlayerSection = ({player, game}) => {
    return (
        <>
            <Row>
                <InfoTeamBox>
                    <h3>{player?.name}</h3>
                    <div className="ax">
                        <div className="poligon">
                            <div className="hex-background">
                                {
                                    player?.imgHard ?
                                        <Image
                                            img={`https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/${game}-player/${player.imgHard}`}/>
                                        :
                                        <Image
                                            img={`https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/${game}-player/${player.nickName}.png`}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="region">Country : <span>{player.country}</span></div>

                    <InfoGroup>
                        <div className="info">
                            <div className="icon">
                                <img src={RankImg.src} alt="rank icon"/>
                            </div>
                            <div className="detail">
                                <span>Rank:</span> -
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <img src={RecordImg.src} alt="record icon"/>
                            </div>
                            <div className="detail">
                                <span>Record:</span>
                                <span>
                                    <span className="c-win">-</span>
                                    &nbsp;/&nbsp;
                                    <span className="c-lose">-</span>
                               </span>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <img src={EarningsImg.src} alt="Earnings icon"/>
                            </div>
                            <div className="detail">
                                <span>Earnings:</span> {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                            })
                                .format(player?.approx)
                                .replace("$", "")}
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <img src={TeamImg.src} alt="team icon"/>
                            </div>
                            <div className="detail text">
                                <span>Current Team:</span> {player.team}
                            </div>
                        </div>
                    </InfoGroup>

                </InfoTeamBox>
            </Row>
        </>
    )
}

export default PlayerSection;