import { useStyle } from './BarChart.styles'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from './constants'


const Chart = () => {
  const classes = useStyle();

  return (
    <ResponsiveContainer width="100%" >
        <BarChart
          // width={100}
          // height={100}
          data={data}
          margin={{
            top: 2,
            right: 3,
            left: 2,
            bottom: 2,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#1565c0" />
          <Bar dataKey="uv" fill="orange" />
        </BarChart>
      </ResponsiveContainer>
  )
}
export default Chart
