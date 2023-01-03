import React, {useEffect, useState} from "react";
import LoadingScreen from "@components/LoadingScreen";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ParallaxProvider} from "react-scroll-parallax";

import Head from "next/head";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";
import ListSection from "@sections/players/ListSection";
import mlPlayers from "@data/ml.json";
import pubgmPlayers from "@data/pubgm.json";
import codPlayers from "@data/cod.json";
import dota2Players from "@data/dota2WithDetailApprox.json";


const MainDiv = styled.div`
  height: 1px;
  padding-top: 70px;
`;

const FilterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #1f2125;

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

  .filter-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  input[type="text"] {
    width: 200px;
    padding: 10px;
    border: 1px solid #6c757d;
    border-radius: 5px;
    background-color: #1f2125;
    color: #00ff19;
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;

    &:focus {
      border: 1px solid #00ff19;
      outline: none;
    }

    @media (max-width: 526px) {
      width: 200px;
    }
  }

  .search-wrapper {
    display: flex;
    order: 1;

    button {
      display: none;
    }

    .active {
      display: block;
    }
  }

  .filter-mode {
    order: 3;
    min-width: 125px;
    margin-left: 10px;
    @media (max-width: 768px) {
      order: 2;
      min-width: 80px;
    }
  }

  button {
    background-color: #153300;
    border: 1px solid #00ff19;
    border-radius: 5px;
    box-shadow: -1px 1px 14px rgba(0, 0, 0, 0.15),
    0px 19px 16px rgba(0, 0, 0, 0.09);
    font-size: 14px;
    font-weight: 700;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    color: #00ff19;
    margin-right: 7px;

    &:hover {
      background-color: #3f701e;
      color: #00ff19;
    }

    &.active {
      background-color: #3f701e;
      color: #00ff19;
    }

    @media (max-width: 526px) {
      font-size: 12px;
      font-weight: 700;
      padding: 10px 12px;
    }
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  button {
    background-color: #153300;
    border: 1px solid #00ff19;
    border-radius: 5px;
    box-shadow: -1px 1px 14px rgba(0, 0, 0, 0.15),
    0px 19px 16px rgba(0, 0, 0, 0.09);
    font-size: 14px;
    font-weight: 700;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    color: #00ff19;
    margin-right: 7px;

    &:hover {
      background-color: #3f701e;
      color: #00ff19;
    }

    &.active {
      background-color: #3f701e;
      color: #00ff19;
    }

    &.disabled {
      background-color: #153300;
      color: #6c757d;
      cursor: not-allowed;
    }
  }
`

const GameWrapper = styled.div`
  margin-top: 20px;
  min-width: 350px;
  order: 2;
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: center;
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 4px;
      height: 3px;
      background-color: black;
    }

    ::-webkit-scrollbar-track {
      border-radius: 2px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background-color: #00ff19;
    }

    ::-webkit-scrollbar:vertical {
      display: none;
    }
    .active {
      background-color: #3f701e;
      color: #00ff19;
      border: 1px solid #00ff19;
    }

    .active {
      background-color: #3f701e;
      color: #00ff19;
      border: 1px solid #00ff19;
    }


    li {
      color: white;
      padding: 3px 15px;
      border-radius: 15px;
      border: 1px solid #6c757d;
      margin-right: 8px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-weight: 500;
      font-family: "Roboto Mono", monospace;
      margin-bottom: 10px;

      &:hover {
        border: 1px solid #00ff19;
        background-color: #3f701e;
        color: #00ff19;
      }
    }
  }
`;


const Index = () => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [data, setData] = useState(dota2Players);
    const [gameFilter, setGameFilter] = useState('dota2');


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
        // count total page
        setTotalPages(Math.ceil(data.length / 15));
        // have keyword
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length > 0) {
            const newData = data.filter((item) => {
                return item.nickName.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setPage(1);
            setData(newData);
            setTotalPages(Math.ceil(newData.length / 15));
        } else {
            setPage(1);
            setData(data);
            setTotalPages(Math.ceil(data.length / 15));
        }
    }

    const handleGameFilter = (game) => {
        setGameFilter(game);
        setPage(1);
        switch (game) {
            case 'dota2':
                setData(dota2Players);
                break;
            case 'pubgm':
                setData(pubgmPlayers);
                break;
            case 'mlbb':
                setData(mlPlayers);
                break;
            case 'codm':
                setData(codPlayers);
                break;
        }
        setTotalPages(Math.ceil(data.length / 15));
    }

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
                    {/*<CenterText>*/}
                    {/*    <h3>Teams</h3>*/}
                    {/*</CenterText>*/}

                    <FilterWrapper>
                        <div className="filter-top">
                            <div className="search-wrapper">
                                <input type="text" placeholder="Search" id="keywords" onChange={() => {
                                    handleSearch(event)
                                }}/>
                                <button onClick={() => {
                                    // remove text input value
                                    document.getElementById('keywords').value = '';
                                    setSearch('');
                                    // setData(data);
                                    handleGameFilter(gameFilter);
                                    setTotalPages(Math.ceil(data.length / 15));
                                }}
                                        className={search !== '' ? 'active' : ''}>Clear
                                </button>
                            </div>
                            <GameWrapper>
                                <ul>
                                    <li onClick={() => handleGameFilter('dota2')}
                                        className={`${gameFilter === 'dota2' ? 'active' : ''}`}>DOTA
                                    </li>
                                    <li onClick={() => handleGameFilter('mlbb')}
                                        className={`${gameFilter === 'mlbb' ? 'active' : ''}`}>MLBB
                                    </li>
                                    <li onClick={() => handleGameFilter('pubgm')}
                                        className={`${gameFilter === 'pubgm' ? 'active' : ''}`}>PUBGM
                                    </li>
                                    <li onClick={() => handleGameFilter('codm')}
                                        className={`${gameFilter === 'codm' ? 'active' : ''}`}>CODM
                                    </li>
                                    <li>LOL</li>
                                    <li>FREE FIRE</li>
                                    <li>FORTNITE</li>
                                    <li>FB</li>
                                    <li>BB</li>
                                    <li>HORSE</li>
                                    <li>RACING</li>
                                </ul>
                            </GameWrapper>
                            {/*<div className="filter-mode">*/}
                            {/*    <button onClick={() => setShowType(0)} className={`${!showType ? 'active' : ''}`}><i*/}
                            {/*        className="fa-solid fa-list"></i></button>*/}
                            {/*    <button onClick={() => setShowType(1)} className={`${showType ? 'active' : ''}`}><i*/}
                            {/*        className="fa-solid fa-grip"></i></button>*/}
                            {/*</div>*/}
                        </div>
                    </FilterWrapper>

                    <ListSection data={data} game={gameFilter} page={page}/>

                    {
                        totalPages > 1 ?
                            <Pagination>
                                <button onClick={() => {
                                    if (page > 1) {
                                        setPage(page - 1);
                                    }
                                }} className={`${page === 1 ? 'disabled' : ''}`}>
                                    PREV
                                </button>
                                <button onClick={() => {
                                    if (page < totalPages) {
                                        setPage(page + 1);
                                    }
                                }} className={`${page === totalPages ? 'disabled' : ''}`}>
                                    NEXT
                                </button>
                            </Pagination> : ''
                    }


                    <div style={{height: '200px'}}/>
                    <FooterOld/>
                </div>
            </ParallaxProvider>
        </>
    );
};

export default Index;