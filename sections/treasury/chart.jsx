import {Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip} from "recharts";
import {formatNumber} from "../../utils/money_format";

const Chart = () => {
    const data = [
        {name: 'teamplayers.eth', quantity: '22,222,222', percentage: 25},
        {name: 'teamadvisors.eth', quantity: '1,777,777', percentage: 2},
        {name: 'teampublicsale.eth', quantity: '888,888', percentage: 1},
        {name: 'teammanagement.eth', quantity: '21,333,333', percentage: 24},
        {name: 'Team DAO: Deployer', quantity: '0.0000001', percentage: 0.0000001},
        {name: 'teamseriesa.eth', quantity: '7,111,111', percentage: 8},
        {name: 'teamfoundation.eth', quantity: '16,000,000', percentage: 18},
        {name: 'teampartners.eth', quantity: '5,333,333', percentage: 6},
        {name: 'teamliquidity.eth', quantity: '8,888,888', percentage: 10},
        {name: 'teamexchanges.eth', quantity: '5,333,333', percentage: 6},
    ]

    const data2 = [{name: 'teamplayers.eth', quantity: '22,222,222', percentage: 25},
        {name: 'teamadvisors.eth', quantity: '1,777,777', percentage: 2},
        {name: 'teampublicsale.eth', quantity: '888,888', percentage: 1},
        {name: 'teammanagement.eth', quantity: '21,333,333', percentage: 24},
        {name: 'Team DAO: Deployer', quantity: '0.0000001', percentage: 0.0000001},
        {name: 'teamseriesa.eth', quantity: '7,111,111', percentage: 8},
        {name: 'teamfoundation.eth', quantity: '16,000,000', percentage: 18},
        {name: 'teampartners.eth', quantity: '5,333,333', percentage: 6},
        {name: 'teamliquidity.eth', quantity: '8,888,888', percentage: 10},
        {name: 'teamexchanges.eth', quantity: '5,333,333', percentage: 6},];

    const renderCustomizedLabel = (props) => {
        const RADIAN = Math.PI / 180;
        const {
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            fill,
            payload,
            name,
            value,
            quantity
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g className="">
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
                <text className="pie-legend-title" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor}
                      fill="#fff">
                    {quantity}
                </text>
                <text className='pie-legend-sub-title' x={ex + (cos >= 0 ? 1 : -1) * 21} y={ey} dy={20}
                      textAnchor={textAnchor} fill="#0fc713">
                    {`${name}`}
                </text>
            </g>
        );
    };


    const COLORS = ['#1b8520'];

    return (
        <div className="xC">
            <div className="chart" style={{width: '100%'}}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={700} height={400}>
                        {/*<Tooltip content={customTooltip}/>*/}
                        <Pie
                            data={data}
                            cx={"50%"}
                            cy={200}
                            innerRadius={'40%'}
                            outerRadius={'60%'}
                            fill="#0074b9"
                            paddingAngle={5}
                            dataKey="percentage"
                            label={renderCustomizedLabel}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="legend">
                <ul>
                    {
                        // data sort by percentage
                        data2.sort((a, b) => b.percentage - a.percentage).map((item, index) => (
                            <li key={index}>
                                <span className="legend-color" style={{backgroundColor: '#1b8520'}}></span>
                                <div className="entry">
                                    <span className="legend-title">{item.name}</span> <br/>
                                    <span className="legend-value number">{item.quantity}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Chart;