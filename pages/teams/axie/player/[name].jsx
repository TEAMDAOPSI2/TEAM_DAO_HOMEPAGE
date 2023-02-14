import DataPlayers from "@data/axie.json";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import LoadingScreen from "@components/LoadingScreen";
import {ToastContainer} from "react-toastify";
import {ParallaxProvider} from "react-scroll-parallax";
import HeaderOld from "@components/HeaderOld";
import Link from "next/link";
import PlayerSection from "@sections/liquipedia/PlayerSection";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";

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
      @media (max-width: 768px) {
        display: none;
      }
    }
    li:nth-child(2){
      @media (max-width: 768px) {
        display: none;
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

export async function getServerSideProps(context) {
    const {name} = context.query;
    const player = DataPlayers.find((player) => player.nickName === name);
    if(!player) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            player,
        },
    };
}

const Name = ({player}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);

    }, []);


    return (
        <>
            <Head>
                <title>T.E.A.M DAO | Player</title>
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
                                        <a className="a"><span>Player</span></a>
                                    </Link>
                                </li>
                                <li><a style={{cursor: 'auto'}} href="#"><span>{player?.team}</span></a></li>
                                <li><a style={{cursor: 'auto'}} href="#"><span>{player?.nickName}</span></a></li>
                            </ul>
                        </BreadCrumb>

                        <PlayerSection player={player} game="axie"/>

                    </MainContainer>

                    <div style={{height: '200px'}}/>
                    <FooterOld/>
                </div>
            </ParallaxProvider>
        </>
    )
};


export default Name;
