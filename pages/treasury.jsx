import Head from "next/head";
import Navbar from "@components/HeaderOld";
import Footer from "@components/FooterOld";
import Chart from "@sections/treasury/chart";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {formatNumber} from "../utils/money_format";
import {SuccessButton, TreasuryWrap} from "@sections/treasury/style";
import ChartPrice from "@sections/treasury/ChartPrice";
import {useEffect, useState} from "react";

// get data from api
export async function getServerSideProps() {
    const res = await fetch(`https://script.google.com/macros/s/AKfycbyCqi5hiqSn_c0te5qVMpQp7Zf2AS0jSQymU8lCgW9pRLH_RSRD0idUf1sUcIv4q6rW/exec?action=stats`);
    const resMarketCap = await fetch(`https://script.google.com/macros/s/AKfycbxjut-YkSj6wrLolorbDvZ3OI4aSTuNLhFMSJQvY1yFStdcOsMaiGk3nNglQZkTgKwh/exec?action=marketcap`);
    const resMovingPrice = await fetch(`https://script.google.com/macros/s/AKfycbxAigVjruEbOCEQG-F6XIrOFk4Wv0Rn0GLCwxYuBlsKXIP3SRqkQAyWncgolQ92j6jQ/exec?action=moving-price`);
    const ressTestPrice = await fetch('https://script.google.com/macros/s/AKfycbz3MtzqnbXlVLz5MICYNx0ZIlDCEb-Xx1uhDBgdqNYKxUpLdksrf469-EPcvBrgkOdl/exec?action=test');

    const dataMarketCap = await resMarketCap.json();
    const data = await res.json();
    const dataMovingPrice = await resMovingPrice.json();
    return {
        props: {
            treasuryData: data,
            marketCap: dataMarketCap[0],
            movingPrice: dataMovingPrice
        }
    }
}

const treasury = ({treasuryData, marketCap, movingPrice}) => {

    const [copySuccess, setCopySuccess] = useState(false);
    useEffect(() => {
        const setTimer = setTimeout(() => {
            setCopySuccess(false);
        }, 4000);
        return () => {
            clearTimeout(setTimer);
        };
    }, [copySuccess]);

    return (
        <>
            <Head>
                <title>T.E.A.M | Treasury</title>
            </Head>
            <Navbar/>
            <TreasuryWrap>
                <main id="treasury">
                    <section className="amounts" id="">

                        <div style={{paddingTop: '40px'}}/>

                        <ChartPrice data={movingPrice}/>

                        <div className="container">
                            <div className="title">
                                {/*<p>Total dollar amount of tokens held in T.E.A.M Dao treasury</p>*/}
                                {/*<h2><span>$</span><span>1,746,448,670</span></h2>*/}
                                {/*<a href="#">VIEW ON ETHERSCAN</a>*/}
                            </div>
                            <div className="table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Symbol <span>Name</span></th>
                                        <th>Tokens <span>Percentage</span></th>
                                        <th>USD</th>
                                        <th>Earned</th>
                                        <th>Rewarded</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        treasuryData.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>${item.Ticker} <span>{item.Name}</span></td>
                                                    <td className="number">{formatNumber(item.token)}
                                                        <span>{item.percentage}%</span></td>
                                                    <td className="number"><span>$</span>{formatNumber(item.usd)}</td>
                                                    <td className="number"><span>$</span>{formatNumber(item.earned)}
                                                    </td>
                                                    <td className="number"><span>$</span>{formatNumber(item.rewarded)}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className="green-border">
                                        <td>Total Assets</td>
                                        <td>{` `}</td>
                                        {/*sum total usd key*/}
                                        <td className="number">
                                            <span>$</span>{formatNumber(treasuryData.reduce((a, b) => a + (b['usd'] || 0), 0))}
                                        </td>
                                        <td colSpan="2"></td>
                                    </tr>
                                    <tr className="green-border">
                                        <td>Total Liabilities</td>
                                        <td>{` `}</td>
                                        {/*sum total usd key*/}
                                        <td className="number">
                                            {/*<span>$</span>{formatNumber(treasuryData.reduce((a, b) => a + (b['usd'] || 0), 0))}*/}
                                            0
                                        </td>
                                        <td colSpan="2"></td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className="utility">
                        <div className="container">
                            <div className="get-to-know">
                                <Chart/>
                            </div>
                            <ul>
                                <li>
                                    <h5>
                                        <span>Market Cap</span>
                                        <OverlayTrigger
                                            delay={{show: 250, hide: 400}}
                                            placement="right"
                                            overlay={
                                                <Tooltip id="tooltip-disabled">
                                                    Circulating supply x $TEAM current price
                                                </Tooltip>
                                            }>
                                        <span>
                                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                 className="w-[18px] h-[18px] text-bitdaoBlack-60"
                                                 data-state="tooltip-hidden"
                                                 data-reach-tooltip-trigger="">
                                            <path
                                                d="M6.672 6.6a2.4 2.4 0 0 1 4.664.8c0 1.6-2.4 2.4-2.4 2.4M9 13h.008M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0Z"
                                                stroke="currentColor" strokeWidth="1.333" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        </span>
                                        </OverlayTrigger>
                                    </h5>
                                    <span className="number">${formatNumber(marketCap['market-cap'])}</span>
                                </li>
                                <li>
                                    <h5>$TEAM Price</h5>
                                    <div className="d-flex">
                                        <span className="number">${formatNumber(marketCap['team-price'])}</span>
                                        <span className="green">+0.5%</span>
                                    </div>
                                </li>
                                <li>
                                    <h5>Total Supply</h5>
                                    <div className="d-flex">
                                        <span className="number">{formatNumber(88888888)}</span>
                                    </div>
                                </li>
                                <li>
                                    <h5>Circulating Supply</h5>
                                    <div className="d-flex">
                                        <span className="number">{formatNumber(0)}</span>
                                    </div>
                                </li>
                                <li className='contract'>
                                    <h5>Contract</h5>
                                    <div className="d-flex flex-row">
                                        <span>ETH</span>
                                        0x9BADA086BAE4962037f14B0e79BaEa62e972dD21

                                        {
                                            copySuccess ? <SuccessButton>
                                                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                         width="30" height="30"
                                                         className="text-bitdaoBlack-100 hover:text-bitdaoBlack-50">
                                                        <path
                                                            d="M6.667 10.667L3.333 7.333 4.333 6.333 6.667 8.667 11.667 3.667 12.667 4.667L6.667 10.667Z"
                                                            fill="currentColor"/>
                                                    </svg>
                                                </SuccessButton> :
                                                <button onClick={
                                                    () => {
                                                        navigator.clipboard.writeText('0x9BADA086BAE4962037f14B0e79BaEa62e972dD21');
                                                        setCopySuccess(true);
                                                    }
                                                } className="copy">
                                                    <svg viewBox="0 0 16 17" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="16" height="17"
                                                         className="text-bitdaoBlack-100 hover:text-bitdaoBlack-50">
                                                        <path
                                                            d="M3.333 10.5h-.666a1.333 1.333 0 0 1-1.334-1.333v-6a1.333 1.333 0 0 1 1.334-1.334h6A1.333 1.333 0 0 1 10 3.167v.666M7.333 6.5h6c.737 0 1.334.597 1.334 1.333v6c0 .737-.597 1.334-1.334 1.334h-6A1.333 1.333 0 0 1 6 13.833v-6C6 7.097 6.597 6.5 7.333 6.5Z"
                                                            stroke="currentColor" strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                        }

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </TreasuryWrap>
            <Footer/>
        </>
    );
}
export default treasury;