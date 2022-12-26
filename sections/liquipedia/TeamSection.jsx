import styled from "styled-components";
import RankImg from "../../public/assets/icons/TEAM-rank-circle.png";
import RecordImg from "../../public/assets/icons/TEAM-record-circle.png";
import PointsImg from "../../public/assets/icons/TEAM-point -circle.png";
import EarningsImg from "../../public/assets/icons/TEAM-earning-circle.png";
import ScopeImage from "../../public/assets/TEAMcrosshairpng.png";
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

  .region {
    text-align: center;
    color: #ca7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14x;
    font-family: "Roboto Mono", monospace;

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

    img {
      width: 150px;
      object-fit: contain;
    }
  }
`;

const TeamMemberBox = styled.div`
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

const MembersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  div {
    width: 50%;
    @media (max-width: 568px) {
      width: 100%;
    }
  }
`;

const MemberBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;

  .scope {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 140px !important;
    height: 140px !important;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 9999;
  }

  &:hover {
    .scope {
      opacity: 1;
    }
  }

  .avatar {
    height: 120px;
    width: 120px;
    float: left;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-right: 20px;
    display: block;


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
      height: 120px;
      width: 120px;
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

      img.main {
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
      }
    }
  }

  .bio {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      width: 100%;
      font-family: "Roboto Mono", monospace;
    }

    .nick-name {
      font: normal normal 600 18px/22px 'Roboto Mono', sans-serif;
      color: #379341;
    }

    .detail {
      font: normal normal 400 14px/17px 'Roboto Mono', sans-serif;
      color: #d5c6b5;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const TeamSection = ({team}) => {
    return (
        <>
            <Row>
                <InfoTeamBox>
                    <h3>{team?.name}</h3>
                    <div className="logo">
                        <img
                            src={`https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/codm-team/${team?.name}.png`}
                            alt={team?.name}/>
                    </div>
                    <div className="region">Country : <span>{team?.region}</span></div>
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
                                -
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <img src={PointsImg.src} alt="points icon"/>
                            </div>
                            <div className="detail">
                                <span>Points:</span> -
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <img src={EarningsImg.src} alt="Earnings Icon"/>
                            </div>
                            <div className="detail">
                                <span>Earnings:</span> $&nbsp;{
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0
                                }).format(team?.prizeMoney).replace('$', '')}
                            </div>
                        </div>
                    </InfoGroup>
                </InfoTeamBox>
                <TeamMemberBox>
                    <h3>Team PLAYERS</h3>
                    <MembersWrapper>
                        {
                            team?.players?.map((member, index) => (
                                <MemberBox className="member" key={index} onClick={() => {
                                    window.location.href = `/teams/player/${member?.nickName}`
                                }}>
                                    <div className="avatar">
                                        {
                                            <>
                                                <div
                                                    style={{backgroundImage: `url(https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/codm-player/${member.nickName}.png)`}}></div>
                                                <div>
                                                    <img
                                                        style={{backgroundColor: '#6c6969'}}
                                                        className="main"
                                                        src={`https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/codm-player/${member.nickName}.png`}
                                                        alt={member?.nickName}
                                                        onError={({currentTarget}) => {
                                                            currentTarget.onerror = null; // prevents looping
                                                            currentTarget.src = "https://cdn1-v3.gamesports.net/img/themes/general/edb_player_default.jpg";
                                                        }}
                                                    />
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="scope">
                                        <img src={ScopeImage.src} loading="lazy" alt="scope"/>
                                    </div>
                                    <div className="bio">
                                        <div className="nick-name">{member?.nickName}</div>
                                        <div className="real-name">{member?.realName}</div>
                                        <div className="detail">{member?.detail}</div>
                                    </div>
                                </MemberBox>

                            ))
                        }
                    </MembersWrapper>
                    {
                        team.players.length === 0 && <div className="no-member">Currently this team doesn't have active member</div>
                    }
                </TeamMemberBox>
            </Row>
        </>
    )
}

export default TeamSection;