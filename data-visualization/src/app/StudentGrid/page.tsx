'use client'; // Mark this file as a client-side component
import React from 'react';
import { useEffect, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';
import AttendanceTrend from '../trendline/trendline';
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Header from '../header/page';
import Sidenav from '../sideNav/page';

const StudentGrid: React.FC = () => {
  const [students, setStudents] = useState([]);
  const [uniqueYears, setUniqueYears] = useState<string[]>([]);
  const [uniqueDepartments, setUniqueDepartments] = useState<string[]>([]);
  const [uniqueBranches, setUniqueBranches] = useState<string[]>([]);

  useEffect(() => {
    fetch('/studentsdata/students.json')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        const years = Array.from(new Set(data.map(student => student.yearOfJoining))).sort();
        const departments = Array.from(new Set(data.map(student => student.department))).sort();
        const branches = Array.from(new Set(data.map(student => student.branch))).sort();

        setUniqueYears(years);
        setUniqueDepartments(departments);
        setUniqueBranches(branches);
      })
      .catch((error) => console.error('Error fetching the JSON file:', error));
  }, []);
  const onChange: TableProps['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };
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
    { title: 'Contact', dataIndex: 'mobileNumber', key: 'mobileNumber' },
    { title: 'Parent Name', dataIndex: 'parentName', key: 'parentName' },
    { title: 'Parent Contact', dataIndex: 'parentContact', key: 'parentContact' },
    { title: 'Joined On', dataIndex: 'yearOfJoining', key: 'yearOfJoining' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Branch', dataIndex: 'branch', key: 'branch' },
    { title: 'Year', dataIndex: 'currentYear', key: 'currentYear' },
    { title: 'Attendance Percentage', dataIndex: 'attendancePercentage', key: 'attendancePercentage' },
    { title: 'Semister Percentage', dataIndex: 'currentPercentage', key: 'currentPercentage' }
  ];

  const onSearch = (value: string) => console.log(value);

  return (
    <>
    <div className="header-container">
    <Header />
    </div>
    <div className="sidenav-container">
                    <Sidenav />
                </div>
    <div className='flex justify-between pt-20'>
        <div className='flex gap-4 ml-16'>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search Year"
            options={uniqueYears.map(year => ({ label: year, value: year }))}
          />
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search Department"
            options={uniqueDepartments.map(department => ({ label: department, value: department }))}
          />
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search Branch"
            options={uniqueBranches.map(branch => ({ label: branch, value: branch }))}
          />
        </div>
        <div className='flex'>
          <Button className='bg-indigo-50'>Button</Button>
          <Space direction="vertical">
            <Input.Search placeholder="input search text" onSearch={onSearch} enterButton />
          </Space>
        </div>
      </div>
      <Table className='pt-8 ml-4'
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={students}
      />
    </>
  );
};

export default StudentGrid;