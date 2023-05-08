import { useStyle } from './Chart.styles'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from './constants'


const Chart = () => {
  const classes = useStyle();

  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="orange" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#1565c0" />
        </LineChart>
      </ResponsiveContainer>
  )
}
export default Chart
