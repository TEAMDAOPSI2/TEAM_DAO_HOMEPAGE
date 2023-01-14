import dataTeam from "@data/top50.json";
import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #1f2125;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;

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
    background-color: #1f2125;
    color: #00ff19;
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
    margin-left: 10px;
    transform: skew(-20deg);
    

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
    transform: skew(-20deg);

    .skew-fix{
      display:inline-block;
      transform: skew(20deg);
    }

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
    margin: 0;
    list-style: none;
    align-items: center;
    overflow-x: auto;
    padding: 0 0 0 10px;


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


    li {
      color: white;
      padding: 3px 15px;
      border: 1px solid #6c757d;
      margin-right: 8px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-weight: 500;
      font-family: "Roboto Mono", monospace;
      margin-bottom: 10px;
      transform: skew(-20deg);

      .skew-fix {
        display: inline-block;
        transform: skew(20deg);
      }

      &:hover {
        border: 1px solid #00ff19;
        background-color: #3f701e;
        color: #00ff19;
      }
    }
  }
`;

const ListStakes = () => {
    return(
        <div className="container">
            <FilterWrapper>
                <div className="filter-top">
                    <GameWrapper>
                        <ul>
                            <li>Current Bets</li>
                            <li>Sport Bets</li>
                            <li>Race Leaderboard</li>
                        </ul>
                    </GameWrapper>
                </div>
            </FilterWrapper>

        </div>
    )
}

export default ListStakes;