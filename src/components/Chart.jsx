import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {
    const data = [
        { month: "Jan", sales: 100 , Return: 199 },
        { month: "Feb", sales: 20 , Return: 15 },
        { month: "Mar", sales: 300 , Return: 110 },
        { month: "Apr", sales: 100 , Return: 31 },
        { month: "May", sales: 200 , Return: "" },
        { month: "Jun", sales: 30 , Return: 13 },
        { month: "Jul", sales: 100 , Return: 11 },
        { month: "Aug", sales: 22 , Return: 13 },
        { month: "Sep", sales: 300 , Return: 11 },
        { month: "Oct", sales: 100 , Return: 29 },
        { month: "Nov", sales: 20 , Return: 11 },

    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray={"1 1"} />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sales" />
                    <Tooltip />
                    <Legend />
                    {/* <Line type="natural" dataKey="sales" stroke="#8884d8" /> */}
                    <Area type={"monotone"} dataKey="sales" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
                    <Area type={"monotone"} dataKey="Return" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
