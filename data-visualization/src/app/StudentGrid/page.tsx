'use client'; // Mark this file as a client-side component
import React, { useEffect, useState } from 'react';
import type { TableColumnsType } from 'antd';
import { Table, Select, Input, Space, Button } from 'antd';
import Header from '../header/page';
import Sidenav from '../sideNav/page';

const StudentGrid: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<any[]>([]);
  const [uniqueYears, setUniqueYears] = useState<string[]>([]);
  const [uniqueDepartments, setUniqueDepartments] = useState<string[]>([]);
  const [uniqueBranches, setUniqueBranches] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | undefined>(undefined);
  const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>(undefined);
  const [selectedBranch, setSelectedBranch] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch('/studentsdata/students.json')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
        const years = Array.from(new Set(data.map(student => student.yearOfJoining))).sort();
        const departments = Array.from(new Set(data.map(student => student.department))).sort();
        setUniqueYears(years);
        setUniqueDepartments(departments);
      })
      .catch((error) => console.error('Error fetching the JSON file:', error));
  }, []);

  useEffect(() => {
    // Filter branches based on selected department
    if (selectedDepartment) {
      const branches = Array.from(new Set(students
        .filter(student => student.department === selectedDepartment)
        .map(student => student.branch))).sort();
      setUniqueBranches(branches);
    } else {
      setUniqueBranches([]);
    }
  }, [selectedDepartment, students]);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    filterStudents(year, selectedDepartment, selectedBranch);
  };

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartment(department);
    setSelectedBranch(undefined); // Reset branch selection
    filterStudents(selectedYear, department, undefined);
  };

  const handleBranchChange = (branch: string) => {
    setSelectedBranch(branch);
    filterStudents(selectedYear, selectedDepartment, branch);
  };

  const filterStudents = (year?: string, department?: string, branch?: string) => {
    const filtered = students.filter(student => {
      return (!year || student.yearOfJoining === year) &&
        (!department || student.department === department) &&
        (!branch || student.branch === branch);
    });
    setFilteredStudents(filtered);
  };

  const expandedRowRender = (record: any) => {
    if (record.admissionNumber !== undefined) {
      const columns: TableColumnsType = [
        { title: 'Semester', dataIndex: 'semester', key: 'semester' },
        { title: 'Semester Percentage', dataIndex: 'semesterPercentage', key: 'semesterPercentage' },
        { title: 'Fee Paid', dataIndex: 'feePaid', key: 'feePaid' },
        { title: 'Fee Due', dataIndex: 'feeDue', key: 'feeDue' },
      ];

      const semestersArray = Object.keys(record.semesterDetails).map(key => ({
        semester: key,
        ...record.semesterDetails[key]
      }));

      return (
        <Table
          columns={columns}
          expandable={{ expandedRowRender }}
          dataSource={semestersArray}
          pagination={false}
          size="small"
        />
      );
    } else {
      const columns: TableColumnsType = [
        { title: 'Subject', dataIndex: 'subjectName', key: 'subjectName' },
        { title: 'Marks', dataIndex: 'marks', key: 'marks' }
      ];
      return <Table columns={columns} dataSource={record.subjects} pagination={false} />;
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
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    { title: 'Contact', dataIndex: 'mobileNumber', key: 'mobileNumber' },
    { title: 'Parent Name', dataIndex: 'parentName', key: 'parentName' },
    { title: 'Parent Contact', dataIndex: 'parentContact', key: 'parentContact' },
    { title: 'Joined On', dataIndex: 'yearOfJoining', key: 'yearOfJoining' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Branch', dataIndex: 'branch', key: 'branch' },
    { title: 'Year', dataIndex: 'currentYear', key: 'currentYear' },
    { title: 'Attendance %', dataIndex: 'attendancePercentage', key: 'attendancePercentage' },
    { title: 'Semester %', dataIndex: 'currentPercentage', key: 'currentPercentage' },
    { title: 'Balance', dataIndex: 'feeBalance', key: 'feeBalance' }
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
      <div className='flex justify-between pt-20 px-8'>
        <div className='flex gap-4 ml-16'>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search Year"
            options={uniqueYears.map(year => ({ label: year, value: year }))}
            onChange={handleYearChange}
          />
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search Department"
            options={uniqueDepartments.map(department => ({ label: department, value: department }))}
            onChange={handleDepartmentChange}
          />
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search Branch"
            options={uniqueBranches.map(branch => ({ label: branch, value: branch }))}
            onChange={handleBranchChange}
            disabled={!selectedDepartment} // Disable if no department is selected
          />
        </div>
        <div className='flex gap-4 ml-24'>
          <Button className='bg-indigo-50'><i className="fa-solid fa-file-export"></i></Button>
          <Space direction="vertical">
            <Input.Search placeholder="input search text" onSearch={onSearch} enterButton />
          </Space>
        </div>
      </div>
      <div className='w-full p-10'>
        <Table
          columns={columns}
          expandable={{ expandedRowRender }}
          dataSource={filteredStudents}
          className='w-full shadow-lg ml-6 mr-0'
        />
      </div>
    </>
  );
};

export default StudentGrid;