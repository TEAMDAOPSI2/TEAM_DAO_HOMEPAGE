import React, {useEffect, useState} from "react";
import LoadingScreen from "@components/LoadingScreen";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ParallaxProvider} from "react-scroll-parallax";
import Head from "next/head";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";
import DetailSection from "@sections/teams/DetailSection";
import Data from "data/top50.json";
import Link from "next/link";

const TitlePageText = styled.div`
  text-align: left;
  margin-top: 40px;
  margin-bottom: 40px;
  color: white;
  font-family: 'Technology', serif;

  h3 {
    font-size: 3em;
  }

`;
const MainDiv = styled.div`
  height: 1px;
  padding-top: 120px;
`;

const MainContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const BreadCrumb = styled.div`

  ul {
    list-style: none;
    display: block;
    padding-left: 20px;

    li:first-child {
      a {
        &:before {
          content: "";
          width: 40px;
          height: 38px;
          background: #142515;
          top: -2px;
          left: -19px;
          display: block;
          position: absolute;
          border-top: 2px solid #379341;
          transform: skew(45deg);
        }

        span {
          padding: 0 25px 0 10px;
        }
      }
    }

    li:last-child {
      a {
        &:after {
          content: "";
          width: 40px;
          height: 38px;
          background: #142515;
          top: -2px;
          right: -19px;
          display: block;
          position: absolute;
          border-top: 2px solid #379341;
          transform: skew(45deg);
        }
      }
    }

    li {
      display: inline-block;
      margin-right: 3px;
      position: relative;

      a {
        text-align: center;
        display: inline-block;
        font-size: 16px;
        height: 38px;
        background: #142515;
        border-top: 2px solid #379341;
        transform: skew(-45deg);
        position: relative;

        span {
          display: inline-block;
          font: normal normal 400 16px/19px Verdana, sans-serif;
          color: #ccc;
          max-width: 320px;
          height: 35px;
          line-height: 35px;
          padding: 0 25px;
          position: relative;
          vertical-align: middle;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transform: skew(45deg);
        }
      }
    }
  }
`;

// get serverside props
export async function getServerSideProps(context) {
    const {name} = context.query;
    const team = Data.find((team) => team.name === name);
    if(!team) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            team,
        },
    };
}

const Team = ({team}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);

    }, []);

    return (
        <>
            <Head>
                <title>T.E.A.M DAO | Teams</title>
            </Head>
            <div style={{display: !loading ? 'none' : 'block'}}>
                <LoadingScreen/>
            </div>
            <ToastContainer
                position="top-center"
                hideProgressBar={false}
                newestOnTop={false}
                theme="dark"
                limit={1}
            />
            <ParallaxProvider>
                <div
                    style={{
                        background: 'black',
                        overflowX: 'hidden',
                        display: loading ? 'none' : 'block'
                    }}>
                    <HeaderOld/>
                    <MainDiv/>
                    <MainContainer>
                        <BreadCrumb>
                            <ul>
                                <li>
                                    <Link href="/teams">
                                        <a className="a"><span>TEAMS</span></a>
                                    </Link>
                                </li>
                                <li><a style={{cursor: 'auto'}} href="#"><span>{team?.name}</span></a></li>
                            </ul>
                        </BreadCrumb>

                        <DetailSection team={team}/>

                    </MainContainer>

                    <div style={{height: '200px'}}/>
                    <FooterOld/>
                </div>
            </ParallaxProvider>
        </>
    );
};

export default Team;