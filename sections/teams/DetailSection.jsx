import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const InfoTeamBox = styled.div`
  padding: 20px;
  margin-right: 10px;
  width: 35%;
  color: white;
  background-color: #1e1e1e;

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
  }
`;

const TeamMemberBox = styled.div`
  padding: 20px;
  width: 65%;
  margin-left: 10px;
  color: white;
  background-color: #1e1e1e;
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
      span{
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
  }
`;

const MemberBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

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

      img {
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

    div{
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


const DetailSection = ({team}) => {
    return (
        <>
            <Row>
                <InfoTeamBox>
                    <div className="logo">
                        <img src={team?.logo} alt={team?.name}/>
                    </div>
                    <div className="region">Country : <span>{team?.region}</span></div>
                    <InfoGroup>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-ranking-star"></i>
                            </div>
                            <div className="detail">
                                <span>Rank:</span> {team?.rank}
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-trophy"></i>
                            </div>
                            <div className="detail">
                                <span>Record:</span>
                                <span>
                                    <span className="c-win">{team?.recordWin}</span>
                                    &nbsp;/&nbsp;
                                    <span className="c-lose">{team?.recordLose}</span>
                                <span className="c-percent">
                                    ({(parseInt(team?.recordWin) / (parseInt(team?.recordWin) + parseInt(team?.recordLose)) * 100).toFixed(0)}%)
                                </span>
                               </span>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-star-half-alt"></i>
                            </div>
                            <div className="detail">
                                <span>Points:</span> {team?.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <i className="fa-solid fa-money-bill-wave-alt"></i>
                            </div>
                            <div className="detail">
                                <span>Earnings:</span> {
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0
                                }).format(team?.prizeMoney)}
                            </div>
                        </div>
                    </InfoGroup>
                </InfoTeamBox>
                <TeamMemberBox>
                    <h3>Team Members</h3>
                    <MembersWrapper>
                        {team?.players?.map((member, index) => (
                            <MemberBox className="member" key={index}>
                                <div className="avatar">
                                    <div style={{backgroundImage: `url(${member.avatar})`}}></div>
                                    <div>
                                        <img src={member?.avatar} alt={member?.name}/>
                                    </div>
                                </div>
                                <div className="bio">
                                    <div className="nick-name">{member?.nickName}</div>
                                    <div className="real-name">{member?.realName}</div>
                                    <div className="detail">{member?.detail}</div>
                                </div>
                            </MemberBox>
                        ))}
                    </MembersWrapper>
                </TeamMemberBox>
            </Row>
        </>
    )
}

export default DetailSection;