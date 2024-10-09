import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', feeCollected: 4000, totalFee: 8000, balance: 4000 },
  { month: 'Feb', feeCollected: 4500, totalFee: 8000, balance: 3500 },
  { month: 'Mar', feeCollected: 5000, totalFee: 8000, balance: 3000 },
  { month: 'Apr', feeCollected: 6000, totalFee: 8000, balance: 2000 },
  { month: 'May', feeCollected: 7000, totalFee: 8000, balance: 1000 },
  { month: 'Jun', feeCollected: 7500, totalFee: 8000, balance: 500 },
];

const FeeLineChart = () => {
  return (
    <div>
    <ResponsiveContainer width={"90%"} height={250} >
      <LineChart data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Line type="monotone" dataKey="feeCollected" stroke="#D946EF" strokeWidth={2} dot={{ stroke: '#D946EF', strokeWidth: 2 }} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="totalFee" stroke="#F97316" strokeWidth={2} dot={{ stroke: '#F97316', strokeWidth: 2 }} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="balance" stroke="#FBBF24" strokeWidth={2} dot={{ stroke: '#FBBF24', strokeWidth: 2 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default FeeLineChart;
