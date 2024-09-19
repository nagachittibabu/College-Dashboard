'use client'; // Mark this file as a client-side component
import React from 'react';
import { useEffect, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';
//import AttendanceTrend from '../trendline/trendline';

const StudentGrid: React.FC = () => {

  const expandedRowRender = (_record: any) => {
    if (_record.admissionNumber !== undefined) {
      const columns: TableColumnsType = [
        { title: 'Semester', dataIndex: 'semester', key: 'semester' },
        { title: 'Semester Pecentage', dataIndex: 'semesterPercentage', key: 'semesterPercentage' },
        { title: 'Fee Paid', dataIndex: 'feePaid', key: 'feePaid' },
        { title: 'Fee Due', dataIndex: 'feeDue', key: 'feeDue' },
      ];

      var semestersArray = Object.keys(_record.semesterDetails).map(key => ({
        semester: key,
        ..._record.semesterDetails[key]
      }));

      const data: any = semestersArray;
      return (
        <>
          <Table
            columns={columns}
            expandable={{ expandedRowRender }}
            dataSource={data}
            pagination={false}
            size="small"
          />
        </>
      )
    } else {
      const columns: TableColumnsType = [
        { title: 'Subject', dataIndex: 'subjectName', key: 'subjectName' },
        { title: 'Marks', dataIndex: 'marks', key: 'marks' }
      ];
      const data: any = _record.subjects;
      return <Table columns={columns} dataSource={data} pagination={false} />;
    }
  };

  const columns: TableColumnsType = [
    {
      title: 'Admission Number', dataIndex: 'admissionNumber', key: 'admissionNumber', defaultSortOrder: 'descend',
      sorter: (a, b) => a.admissionNumber - b.admissionNumber
    },
    {
      title: 'Roll Number', dataIndex: 'rollNumber', key: 'rollNumber', defaultSortOrder: 'descend',
      sorter: (a, b) => a.rollNumber - b.rollNumber
    },
    {
      title: 'Name', dataIndex: 'name', key: 'name', defaultSortOrder: 'descend',
      sorter: (a, b) => a.name - b.name
    },
    { title: 'Contact', dataIndex: 'mobileNumber', key: 'mobileNumber'},
    { title: 'Parent Name', dataIndex: 'parentName', key: 'parentName' },
    { title: 'Parent Contact', dataIndex: 'parentContact', key: 'parentContact' },
    { title: 'Joined On', dataIndex: 'yearOfJoining', key: 'yearOfJoining' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Branch', dataIndex: 'branch', key: 'branch' },
    { title: 'Year', dataIndex: 'currentYear', key: 'currentYear' },
    { title: 'Total Fee', dataIndex: 'totalFee', key: 'totalFee' },
    { title: 'Fee Paid', dataIndex: 'totalFeePaid', key: 'totalFeePaid' },
    { title: 'Balance', dataIndex: 'feeBalance', key: 'feeBalance' }
  ];

const [detail,setdetail] = useState([])
useEffect(() => {
  fetch('/students.json')
    .then((response) => response.json())
    .then((data) => setdetail(data))
    .catch((error) => console.error('Error fetching the JSON file:',error));
}, []);

  const onChange: TableProps['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <Table
        columns={columns}
        onChange={onChange}
        expandable={{ expandedRowRender }}
        dataSource={detail}
      />

<div className="flex space-x-4">
      <div className="flex-1 p-4">
        {/* First Component Content */}
        {/* <AttendanceTrend></AttendanceTrend> */}
      </div>
      <div className="flex-1 p-4">
        {/* Second Component Content */}
        {/* <AttendanceTrend></AttendanceTrend> */}
      </div>
    </div>

    </>
  );
};

export default StudentGrid;