import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { data, COLORS } from './constants'


const Chart = () => {

  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
  )
}
export default Chart
