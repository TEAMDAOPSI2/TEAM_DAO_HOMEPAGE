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
import dataPlayers from "@data/player200.json";


const MainDiv = styled.div`
  height: 1px;
  padding-top: 70px;
`;

const FilterWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #1f2125;
  
  @media (max-width: 763px) {
    max-width: 90%;
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
  
  .filter-mode{
    order: 3;
    min-width: 125px;
    margin-left: 10px;
    @media(max-width: 768px){
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
    const [showType, setShowType] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [data, setData] = useState(dataPlayers);


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
            const newData = dataPlayers.filter((item) => {
                return item.nickName.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setData(newData);
            setTotalPages(Math.ceil(newData.length / 15));
        } else {
            setData(dataPlayers);
            setTotalPages(Math.ceil(dataPlayers.length / 15));
        }
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
                                    setData(dataPlayers);
                                    setTotalPages(Math.ceil(dataPlayers.length / 15));
                                }}
                                        className={search !== '' ? 'active' : ''}>Clear
                                </button>
                            </div>
                            <GameWrapper>
                                <ul>
                                    <li className="active">DOTA</li>
                                    <li>LOL</li>
                                    <li>MLBB</li>
                                    <li>PUBG</li>
                                    <li>CODM</li>
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

                    <ListSection data={data} page={page}/>

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