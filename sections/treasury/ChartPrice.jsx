import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {useEffect, useState} from "react";
import {faker} from "@faker-js/faker";
import moment from "moment";
import {TreasuryChartPrice} from "@sections/treasury/style";
import {formatNumber} from "../../utils/money_format";


function CustomTooltip({active, payload, label}) {
    if (active) {
        return (
            <div className="price-group cst-tooltip d-flex flex-column">
                <p className="price-card-title">{`${payload[0].value.toLocaleString("en-US", {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`}</p>
                <p className="price-card-sub-title">{`${moment(label).format('D MMMM YYYY, h:mm:ss a')}`}</p>
            </div>
        );
    }

    return null;
}


const ChartPrice = ({data}) => {
    const [xData, setData] = useState([]);
    const [percentageMove, setPercentageMove] = useState({
        start: 0,
        end: 0,
        percentage: 0
    });
    const colorMove = {
        green: '#8FFCE1',
        red: '#CD0404',
        orange: '#f9cf29'
    };

    useEffect(() => {
        setData(data)
    }, [data]);

    useEffect(() => {
        // calculate percentage move
        const start = xData[0]?.price_1;
        const end = xData[xData.length - 1]?.price_1;
        const percentage = ((end - start) / start) * 100;
        setPercentageMove({
            start: start,
            end: end,
            percentage: percentage
        })
    }, [xData]);

    return (
        <TreasuryChartPrice className="container" style={{background: '#333'}}>
            <div className="header">
                <p>Share Price</p>
                <div className="d-flex price-group flex-row mb-5 align-items-end">
                    <h3>${formatNumber(percentageMove?.end)}</h3>
                    <span>
                        {
                            percentageMove.percentage > 0 ?
                                <span className="text-success">+{percentageMove.percentage.toFixed(2)}%</span> :
                                <span className="text-danger">{percentageMove.percentage.toFixed(2)}%</span>
                        }
                    </span>
                    <span>Past All</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                {/*  print two line  dataBTC and dataXRP */}
                <AreaChart data={xData}>
                    <defs>
                        <linearGradient id="green-move" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06ce9c" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#8FFCE1" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="color-grad2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f9cf29" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#f9cf29" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="red-move" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#CD0404" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#CD0404" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="aqua-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#85CDFD" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#3C84AB" stopOpacity="0"/>
                        </linearGradient>
                    </defs>

                    <XAxis dataKey="date" tickFormatter={(date) => moment(date).format('MM/DD/YYYY')}/>

                    <Area type="monotone" dataKey="price_1"
                          stackId="1"  strokeWidth={3}
                          stroke={percentageMove.percentage > 0 ? colorMove.green : colorMove.red}
                          fill={percentageMove.percentage > 0 ? 'url(#green-move)' : 'url(#red-move)'}/>

                    <Area type="monotone" dataKey="price_3"
                          strokeWidth={3} stackId="2" stroke="#85CDFD" fill="transparent"/>

                    <Area type="monotone" dataKey="price_2"
                          stackId="3"  strokeWidth={3} stroke="#FFEA20" fill="transparent"/>

                    <Tooltip wrapperStyle={{outline: "none"}} content={<CustomTooltip/>} cursor={false}/>

                </AreaChart>
            </ResponsiveContainer>

        </TreasuryChartPrice>
    )
}

export default ChartPrice;