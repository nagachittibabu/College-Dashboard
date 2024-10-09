import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const AttendancePieChart = () => {
  // Sample data for faculty attendance
  const data = [
    { name: 'Present', value: 60 },
    { name: 'Absent', value: 30 },
    { name: 'On Leave', value: 10 }
  ];

  // Custom colors for different sections of the pie chart
  const COLORS = ['#00C49F', '#FF8042', '#FFBB28'];
  return (
    <div className="flex justify-center items-center flex-col pt-6  px-4 space-y-4">
      <h1 className='w-full text-center text-xl font-semibold'>Professors Attendence</h1>
      <div>
      <PieChart width={450} height={250}>
        <Pie
          data={data}
          cx={200} // x coordinate of center of pie chart
          cy={100} // y coordinate of center of pie chart
          labelLine={false} // disables label lines
          outerRadius={100} // size of the chart radius
          fill="#8884d8"
          dataKey="value"
        >
          {/* Mapping custom colors to each pie slice */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* Displaying tooltip and legend */}
        <Tooltip />
        <Legend />
      </PieChart>
      </div>
    </div>
  );
};

export default AttendancePieChart;
