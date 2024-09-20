import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LegendProps } from 'recharts';

const totalStudents = 5000; // Total number of students
// Example data, replace with your actual data
const data = [
    { date: '2024-08-01', attended: 4800, medicalLeave: 50, personalLeave: 30, leaveNotApplied: 120, totalStudents: 5000 },
    { date: '2024-08-02', attended: 4700, medicalLeave: 60, personalLeave: 25, leaveNotApplied: 215, totalStudents: 5000 },
    { date: '2024-08-03', attended: 4600, medicalLeave: 70, personalLeave: 40, leaveNotApplied: 290, totalStudents: 5000 },
    { date: '2024-08-04', attended: 1850, medicalLeave: 1045, personalLeave: 1020, leaveNotApplied: 1085, totalStudents: 5000 },
    { date: '2024-08-05', attended: 4750, medicalLeave: 55, personalLeave: 35, leaveNotApplied: 160, totalStudents: 5000 },
    { date: '2024-08-06', attended: 4900, medicalLeave: 40, personalLeave: 30, leaveNotApplied: 130, totalStudents: 5000 }
]

const dataForChart = data.map(d => ({
    date: d.date,
    attended: (d.attended / totalStudents) * 100,
    medicalLeave: (d.medicalLeave / totalStudents) * 100,
    personalLeave: (d.personalLeave / totalStudents) * 100,
    leaveNotApplied: (d.leaveNotApplied / totalStudents) * 100
}));

const CustomTooltip: React.FC<any> = ({ payload, label }) => {
    if (!payload || payload.length === 0) return null;

    // Find the corresponding data point in the original data
    const dataPoint = data.find(d => d.date === label);

    const date = new Date(label); // Replace with your date
    const weekNumber = getWeekDay(date);

    if (!dataPoint) return null;

    return (
        <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: 10,
            padding: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            maxWidth: '300px'
        }}>
            <div style={{
                position: 'absolute',
                top: '8px',
                right: '10px',
                width: '0',
                height: '0',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '10px solid #fff'
            }}></div>
                  <h4 style={{ margin: 0, fontWeight:'bolder' }}>{`${label} (${weekNumber})`}</h4>
            <p style={{ margin: '5px 0' }}><strong>Total Students:</strong> {totalStudents}</p>
            <p style={{ margin: '5px 0' }}><strong>Attended:</strong> {dataPoint.attended}</p>
            <p style={{ margin: '5px 0' }}><strong>Medical Leave:</strong> {dataPoint.medicalLeave}</p>
            <p style={{ margin: '5px 0' }}><strong>Personal Leave:</strong> {dataPoint.personalLeave}</p>
            <p style={{ margin: '5px 0' }}><strong>Leave Not Applied:</strong><span style={{ color: 'red' }}>{dataPoint.leaveNotApplied}</span></p>
        </div>
    );
};

const AttendanceTrend: React.FC = () => {
    return (
        <div>
            <h1 style={{fontWeight:'bolder' }}>Students Attendence</h1>
            <ResponsiveContainer width={500} height={400}>
                <BarChart
                    data={dataForChart}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <defs>
                        <linearGradient id="colorAttended" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F97316" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#FDE68A" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={(tick) => `${tick.toFixed(0)}%`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="attended" fill="url(#colorAttended)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const getWeekDay = (date: Date) => {
    // Array of day names
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the day index (0-6) and map it to the day name
    return daysOfWeek[date.getDay()];
};

export default AttendanceTrend;
