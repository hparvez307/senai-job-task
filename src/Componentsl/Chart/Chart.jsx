
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

const Chart = () => {


    const data = [
        {
            name: '0',
            uv: 13,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '23%',
            uv: 16,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '29%',
            uv: 18,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '58%',
            uv: 30,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '75%',
            uv: 50,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '33%',
            uv: 30,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '20%',
            uv: 26,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '73%',
            uv: 23,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '49%',
            uv: 13,
            pv: 4300,
            amt: 2100,
        }
    ];




    return (
        <div className='-ml-8'>









            <AreaChart
                width={690}
                height={150}
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#5c9ce5" />
            </AreaChart>


        </div>
    );
};

export default Chart;