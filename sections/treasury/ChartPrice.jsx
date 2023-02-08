import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import moment from "moment";
import {TreasuryChartPrice} from "@sections/treasury/style";
import {formatNumber} from "../../utils/money_format";
import FilterComponent from "@sections/treasury/FilterComponent";


function CustomTooltip({active, payload, label, filter}) {
    if (active) {
        const countFilter = Object.values(filter).filter(item => item);
        return (
            <div className="price-group cst-tooltip d-flex flex-column">
                <p className="price-card-title">{`${formatNumber(payload[0].value.toFixed(3))}`}</p>
                {
                    countFilter.map((item, index) => {
                        return (
                            <div className="d-flex flex-column tooltip-chart" key={index}>
                                <div className="d-flex align-items-center">
                                    <div className="dot" style={{background: payload[index+1]?.stroke}}/>
                                    <p className="price-card-sub-title text-uppercase">{`${payload[index+1]?.dataKey}: ${formatNumber(payload[index+1]?.value)}`}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <p className="price-card-sub-title">{`${moment(label).format('D MMMM YYYY, h:mm:ss a')}`}</p>
            </div>
        );
    }

    return null;
}


const ChartPrice = ({data}) => {
    const [xData, setData] = useState([]);
    const [filter, setFilter] = useState({
        dai: false,
        usdt: false,
        usdc: false
    });
    const [percentageMove, setPercentageMove] = useState({
        start: 0,
        end: 0,
        percentage: 0
    });
    const colorMove = {
        green: '#8FFCE1',
        red: '#CD0404',
        orange: '#f9cf29',
        usdt: '#1F8A70',
        usdc: '#B9F3FC',
        dai: '#e1d01a'
    };

    useEffect(() => {
        // append new property to data by month and year APR-22 MEI-22 JAN-23 FEB-23
        const newData = data.map(item => {
            return {
                ...item,
                month: moment(item.date).format('MMM-YY')
            }
        });
        setData(newData)
    }, [data]);

    useEffect(() => {
        // calculate percentage move
        const start = xData[0]?.all;
        const end = xData[xData.length - 1]?.all;
        const percentage = ((end - start) / start) * 100;
        setPercentageMove({
            start: start,
            end: end,
            percentage: percentage
        })
    }, [xData]);

    useEffect(() => {
        // count data that have true value
        const count = Object.values(filter).filter(item => item).length;
        console.log(count)
    }, [filter])

    return (
        <TreasuryChartPrice className="container" style={{background: 'rgba(51,51,51,0.75)', borderRadius: '8px'}}>
            <div className="d-flex justify-content-between">
                <div className="header">
                    <p>NAV [Net Asset Value]</p>
                    <div className="d-flex price-group flex-row mb-5 align-items-end">
                        <h3>${formatNumber(percentageMove?.end)}</h3>
                        <span>
                        {
                            percentageMove.percentage > 0 ?
                                <span className="text-success">+{percentageMove.percentage.toFixed(2)}%</span> :
                                <span className="text-danger">{percentageMove.percentage.toFixed(2)}%</span>
                        }
                    </span>
                    </div>
                </div>
                <div className="filter p-3">
                    <FilterComponent filter={filter} setFilter={setFilter}/>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400} >
                {/*  print two line  dataBTC and dataXRP */}
                <AreaChart data={xData} >
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


                    <XAxis dataKey="month" xAxisId="1"  allowDuplicatedCategory={false} interval="preserveStartEnd" />
                    <XAxis dataKey="date" xAxisId="0" axisLine={false} tickLine={false} tickFormatter={() => ''}/>


                    <Area type="monotone" dataKey="all"
                          stackId="1" strokeWidth={3}
                          stroke={percentageMove.percentage > 0 ? colorMove.green : colorMove.red}
                          fill={percentageMove.percentage > 0 ? 'url(#green-move)' : 'url(#red-move)'}/>

                    {
                        filter.dai &&
                        <Area type="monotone" dataKey="dai" strokeWidth={2} stroke={colorMove.dai}
                              fill="transparent"/>
                    }
                    {
                        filter.usdc &&
                        <Area type="monotone" dataKey="usdc" strokeWidth={2} stroke={colorMove.usdc}
                              fill="transparent"/>
                    }
                    {
                        filter.usdt &&
                        <Area type="monotone" dataKey="usdt" strokeWidth={2} stroke={colorMove.usdt}
                              fill="transparent"/>
                    }


                    <Tooltip wrapperStyle={{outline: "none"}} content={<CustomTooltip filter={filter}/>}
                             cursor={false}/>

                </AreaChart>
            </ResponsiveContainer>

        </TreasuryChartPrice>
    )
}

export default ChartPrice;