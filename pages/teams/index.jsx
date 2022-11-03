import React, {useEffect, useState} from "react";
import LoadingScreen from "@components/LoadingScreen";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ParallaxProvider} from "react-scroll-parallax";

import Head from "next/head";
import HeaderOld from "@components/HeaderOld";
import FooterOld from "@components/FooterOld";
import styled from "styled-components";
import ListSection from "@sections/teams/ListSection";
import GridSection from "@sections/teams/GridSection";
import dataTeam from "../../data/top50.json";

const CenterText = styled.div`
  text-align: center;
  margin-top: 40px;
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
  }

  .search-wrapper {
    display: flex;

    button {
      display: none;
    }

    .active {
      display: block;
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

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: center;

    .active {
      background-color: #3f701e;
      color: #00ff19;
      border: 1px solid #00ff19;
    }

    @media (max-width: 1024px) {
      flex-wrap: nowrap;
      overflow-x: auto;
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
    const [data, setData] = useState(dataTeam);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            console.log('ready');
        }, 5000);
        // count total page
        setTotalPages(Math.ceil(data.length / 15));
        // have keyword
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length > 0) {
            const newData = dataTeam.filter((item) => {
                return item.name.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setData(newData);
            setTotalPages(Math.ceil(newData.length / 15));
        } else {
            setData(dataTeam);
            setTotalPages(Math.ceil(dataTeam.length / 15));
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
                                    setData(dataTeam);
                                    setTotalPages(Math.ceil(dataTeam.length / 15));
                                }}
                                        className={search !== '' ? 'active' : ''}>Clear
                                </button>
                            </div>
                            <div className="filter-mode">
                                <button onClick={() => setShowType(0)} className={`${!showType ? 'active' : ''}`}><i
                                    className="fa-solid fa-list"></i></button>
                                <button onClick={() => setShowType(1)} className={`${showType ? 'active' : ''}`}><i
                                    className="fa-solid fa-grip"></i></button>
                            </div>
                        </div>
                        <GameWrapper>
                            <ul>
                                <li className="active">DOTA</li>
                                <li>LOL</li>
                                <li>MLBB</li>
                                <li>PUBG</li>
                                <li>CODM</li>
                                <li>FOOTBALL</li>
                                <li>BASKETBALL</li>
                                <li>HORSE</li>
                                <li>RACING</li>
                                <li>TENNIS</li>
                                <li>GOLF</li>
                            </ul>
                        </GameWrapper>
                    </FilterWrapper>

                    {showType ? <GridSection page={page} data={data}/> : <ListSection data={data} page={page}/>}

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