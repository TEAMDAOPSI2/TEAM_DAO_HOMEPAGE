import styled from "styled-components";

export const TreasuryWrap = styled.div`
  position: relative;
  margin-top: 0;
  min-height: 100vh;
  background-image: url("../../assets/bg-treasury.svg");
  background-color: rgba(15, 199, 19, 0.06);
  background-repeat: revert;
  background-size: contain;
  margin-bottom: 0;
  padding-bottom: 100px;

  #treasury {

  }

  .z-top {
    position: relative;
    min-height: 100vh;
  }

  .z-top div {
    display: flex;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    height: initial;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(26, 225, 32, 0.2) 0%, rgb(27, 27, 27) 100%);
    align-items: center;
  }

  .z-top div img {
    width: 100%;
  }

  #treasury .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  #treasury .hero h2 {
    font-size: 80px;
    line-height: 82px;
    margin-bottom: 40px;
  }


  #treasury .hero p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
    width: 75%;
    word-break: keep-all;
    color: #fff;
  }

  #treasury .hero .button-group {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
  }

  #treasury .hero .button-group a {
    background: #379341;
    border: 1px solid #00ff19;
    border-radius: 5px;
    padding: 13px 23px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    transition: all 0.2s ease-in-out 0s;
    text-transform: uppercase;
  }

  #treasury .hero .button-group a:hover {
    background: #0fc713;
    color: #333;
  }

  @media (max-width: 528px) {
    #treasury .hero h2 {
      font-size: 40px;
      line-height: 42px;
    }

    #treasury .hero p {
      width: 100%;
    }

    #treasury .hero {
      min-height: 100vh;
    }

    .z-top div {
      min-height: 100vh;
    }

    .z-top {
      min-height: 100vh;
    }
  }

  #treasury .ecosystems {
    padding: 100px 0;
  }

  #treasury .ecosystems .title {
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #treasury .ecosystems .title h2 {
    position: absolute;
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 110%;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 528px) {
    #treasury .ecosystems .title h2 {
      font-size: 40px;
      line-height: 42px;
    }
  }

  #treasury .partners {
    margin-top: 40px;
  }

  #treasury .box-partner {
    padding: 40px;
    border: 1px solid #0f0f0f;
    background: #0f0f0f;
    text-align: justify;
    margin-bottom: 40px;
    position: relative;
    transition: all 0.2s ease-in-out 0s;
  }

  #treasury .box-partner:hover {
    border: 1px solid #00ff19;
    transform: scale(1.01);
  }

  #treasury .box-partner svg {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  #treasury .box-partner .logo {
    width: 140px;
    height: 140px;
    margin-bottom: 20px;
  }

  #treasury .box-partner .logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #treasury .box-partner .box-body h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 110%;
    margin-bottom: 10px;
    text-align: left;
  }

  #treasury .box-partner .box-body {
    padding-bottom: 40px;
  }

  #treasury .box-partner .box-footer {
    border-top: 1px solid #333333;
    padding-top: 20px;
  }

  #treasury .box-partner .box-footer > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #treasury .amounts {
    padding: 60px 0;
  }

  #treasury .amounts .title {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  #treasury .amounts .title p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
    color: #fff;
  }

  #treasury .amounts .title h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 110%;
    margin-bottom: 10px;
    color: #fff;
  }

  @media (max-width: 528px) {
    #treasury .amounts .title h2 {
      font-size: 40px;
      line-height: 42px;
    }
  }

  #treasury .amounts .title h2 span:first-child {
    color: grey;
  }

  #treasury .amounts .title a {
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
    color: #fff;
    text-decoration: none;
    margin-top: 20px;
    transition: all 0.2s ease-in-out 0s;
  }

  #treasury .amounts .title a:before {
    position: absolute;
    bottom: -4px;
    content: '';
    width: 0px;
    height: 4px;
    background: #00ff19;
    transition: all 0.2s ease;
  }

  #treasury .amounts .title a:hover:before {
    width: 100%;
  }

  #treasury .amounts .table {
    width: 100%;
  }

  #treasury .amounts .table table {
    width: 100%;
    border-collapse: collapse;
  }

  #treasury .amounts .table table tr {
    padding: 0;
  }

  #treasury .amounts .table table thead {
    border-bottom: 2px solid #dcd5d5;
  }

  #treasury .amounts .table table tr td, #treasury .amounts .table table tr th {
    height: 54px;
    font-weight: 600;
    color: #fff;
    border-top: none;
    //width: calc(100% / 5);
    font-size: 23px;
  }

  #treasury .amounts .table table tr td:first-child, #treasury .amounts .table table tr th:first-child {
    width: calc(100% / 5 + 50px);
  }

  #treasury .amounts .table table tr td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    font-weight: normal;
    color: #fff;
  }

  #treasury .amounts .table table tr td span, #treasury .amounts .table table tr th span {
    margin-left: 10px;
    margin-right: 3px;
    color: rgba(255, 255, 255, 0.3);
    font-weight: normal;
  }

  #treasury .amounts .table table tr td:nth-child(2),
  #treasury .amounts .table table tr th:nth-child(2),
  #treasury .amounts .table table tr th:nth-child(3),
  #treasury .amounts .table table tr th:nth-child(4),
  #treasury .amounts .table table tr td:nth-child(4),
  #treasury .amounts .table table tr td:nth-child(3) {
    text-align: center;
  }

  #treasury .amounts .table table tr td:nth-child(5), #treasury .amounts .table table tr th:nth-child(5) {
    text-align: right;
  }

  #treasury .amounts .table .green-border td {
    border-bottom: 2px solid #00ff19 !important;
    border-top: 2px solid #00ff19 !important;
  }

  #treasury .amounts .grows {
    margin-top: 120px;
  }

  #treasury .amounts .grows .title {
    text-align: left;
    align-items: start;
  }

  #treasury .amounts .grows .title h2 {
    font-size: 56px;
    margin-bottom: 40px;
  }

  #treasury .amounts .grows .center {
    margin-top: 40px;
    text-align: center;
  }

  #treasury .amounts .grows a.link {
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
    color: #fff;
    text-decoration: none;
    margin-top: 20px;
    transition: all 0.2s ease-in-out 0s;
  }

  #treasury .amounts .grows a.link:before {
    position: absolute;
    bottom: -4px;
    content: '';
    width: 0px;
    height: 4px;
    background: #00ff19;
    transition: all 0.2s ease;
  }

  #treasury .amounts .grows a.link:hover:before {
    width: 100%;
  }

  @media (max-width: 528px) {
    #treasury .amounts .table table tr td span, #treasury .amounts .table table tr th span {
      display: none;
    }

    #treasury .amounts .table table tr td:last-child span {
      display: inline-block;
    }

    #treasury .amounts .grows .title h2 {
      font-size: 40px;
      line-height: 42px;
    }
  }

  #treasury .chart {
    text-align: center;
  }

  #treasury .chart svg {
    display: block;
    vertical-align: middle;
  }

  .pie-legend-title {
    font-size: 23px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 20px;
    font-family: 'Teamdao', sans-serif;
    letter-spacing: 0.1rem;
  }

  .pie-legend-sub-title span {
    color: white;
  }

  .pie-legend-sub-title {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    margin-top: 20px;
  }

  .pie-row .pie-wrap > div {
    background: red;
    margin: 0 auto;
  }

  #treasury .get-to-know {
    margin: 40px;
    background: rgba(90, 90, 90, 0.5);
    text-align: center;
    padding: 40px;
    border-radius: 40px;
  }

  #treasury .get-to-know .title {
    max-width: 600px;
    margin: 0 auto;
  }

  #treasury .get-to-know .title h2 {
    font-size: 56px;
    margin-bottom: 40px;
  }

  .number {
    font-family: 'Teamdao', sans-serif;
    letter-spacing: 0.1em;
  }

  #treasury .utility ul li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(225, 225, 225, 0.3);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  #treasury .utility ul li h5 {
    display: flex;
    align-items: center;
    font-weight: normal;
    size: 0.8em;
    font-size: 23px;
  }

  #treasury .utility ul li h5 svg {
    width: 18px;
    height: 18px;
    margin-left: 8px;
  }

  .green {
    color: #00ff19;
  }

  #treasury .utility ul {
    padding: 0;
    color: #fff;
    font-size: 23px;
  }

  #treasury .utility ul li span {
    size: 0.8em;
    margin-right: 8px;
  }

  #treasury .utility ul li button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  #treasury .utility ul li a {
    color: #fff;
    position: relative;
    font-style: normal;
    font-weight: 400;
  }

  #treasury .utility ul li a:before {
    position: absolute;
    bottom: -4px;
    content: '';
    width: 0px;
    height: 4px;
    background: #00ff19;
    transition: all 0.2s ease;
  }

  #treasury .utility ul li a:hover:before {
    width: 100%;
  }

  #treasury .partners .go {
    display: flex;
    flex-wrap: nowrap;
  }

  #treasury .partners .go .item {
    margin: 0 20px;
  }

  #treasury .partners .go .item img {
    width: 300px;
    margin: 0 auto;
  }

  #treasury .utility .chart {
    height: 460px;
  }

  .xC .legend {
    display: none;
  }

  .mobile-gone {
    display: block;
  }

  @media (max-width: 528px) {
    #treasury .utility .chart {
      height: 370px;
    }

    #treasury .get-to-know .title h2 {
      font-size: 40px;
      line-height: 42px;
    }

    #treasury .get-to-know {
      margin: 20px 0;
      padding: 20px;
    }

    .xC .legend {
      display: block;
    }

    #treasury .legend li .legend-color {
      width: 10px;
      height: 10px;
      margin-right: 15px;
    }

    #treasury .legend li {
      color: #333;
      text-align: left !important;
      display: flex;
      justify-content: flex-start !important;
      border-bottom: none !important;
      align-items: baseline !important;
      flex-wrap: wrap;
    }

    .legend-title {
      font-size: 20px;
      font-weight: bold;
    }

    .legend-value {
      font-size: 23px;
      font-weight: bold;
      color: #dcd5d5
    }

    .mobile-gone {
      display: none;
    }

    .recharts-pie-labels {
      display: none;
    }
  }
`

export const TreasuryChartPrice = styled.div`

  .header {
    padding-top: 10px;
    color: #fff;
    width: 50%;

    p {
      font-size: 1rem;
      line-height: 1.25rem;
    }

    h3 {
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 0;
      margin-right: 7px;
    }

    span {
      font-size: 1.2rem;
      line-height: 1.25rem;
      margin-right: 7px;
    }
  }

  .filter {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    align-items: flex-end;
    position: relative;
  }

  .cst-tooltip {
    color: #fff;
    background-color: rgb(23, 27, 47);
    text-align: left;
    padding: 10px;
    min-width: 150px;
    border-radius: 4px;
    border: none !important;
  }
  .tooltip-chart .dot{
    display: inline-block;
    width: 10px;
    height: 10px;
    //border-radius: 50%;
    margin-right: 5px;
  }

  /* hiding first and last lines in cartesian grid */

  .recharts-wrapper .recharts-cartesian-grid-horizontal line:first-child,
  .recharts-wrapper .recharts-cartesian-grid-horizontal line:last-child {
    stroke-opacity: 0;
  }

  .card-dark {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    min-height: 332px;
    border-radius: 16px;
    width: 100%;
    height: 380px;
    padding: 1rem 2rem 1rem 1rem;
    display: flex;
    background-color: rgb(23, 27, 47);
    flex-direction: column;
  }

  .price-group {
    color: white;
  }

  .price-card-title {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-weight: 600;
    font-size: 21px;
    color: rgb(255, 255, 255);
  }

  .price-card-sub-title {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-weight: 500;
    font-size: 16px;
    color: rgb(108, 114, 132);
  }

  .recharts-tooltip-wrapper {
    border: none;
  }

  .recharts-tooltip-wrapper {
    .customTooltip {
      p {
        margin: 0;
      }
    }
  }
`