import React from 'react'
import { AreaChart , Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';
const Chart = () => {
    const data = [
        {month : "Jan", sales : 100},
        {month : "Feb", sales : 20},
        {month : "Mar", sales : 300},
        {month : "Apr", sales : 100},
        {month : "May", sales : 200},
        {month : "Jun", sales : 30},
        {month : "Jul", sales : 100},
        {month : "Aug", sales : 22},
        {month : "Sep", sales : 300},
        {month : "Oct", sales : 100},
        {month : "Nov", sales : 20},

    ];
  return (
    <div>
        <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray={"1 1"}/>
        <XAxis dataKey="month" />
        <YAxis dataKey="sales" />
        <Tooltip />
        <Legend />
        {/* <Line type="natural" dataKey="sales" stroke="#8884d8" /> */}
        <Area type={"monotone"} dataKey="sales" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
