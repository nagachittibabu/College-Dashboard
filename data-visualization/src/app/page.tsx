'use client'; // Mark this file as a client-side component
import React from 'react';
import { useEffect, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';
import AttendanceTrend from './trendline/trendline';


const App: React.FC = () => {

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

  useEffect(() => {
    fetch('../assets/students.json')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching the JSON file:', error));
  }, []);

  const data: any =
    [
      {
        "key": 0,
        "admissionNumber": "T123001",
        "rollNumber": "R2023001",
        "name": "Rama Krishna",
        "mobileNumber": "9876543210",
        "parentContact": "9123456789",
        "parentName": "Ramayya",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Computer Science",
        "currentPercentage": 88.5,
        "currentYear": "2nd Year",
        "feeBalance": 12000,
        "totalFeePaid": 50000,
        "totalFee": 62000,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 85 },
              { "subjectName": "Physics", "marks": 90 },
              { "subjectName": "Computer Programming", "marks": 88 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 87.6,
            "feePaid": 25000,
            "feeDue": 5000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 87 },
              { "subjectName": "Data Structures", "marks": 89 },
              { "subjectName": "Digital Logic", "marks": 90 }
            ],
            "semester": 1.2,
            "semesterPercentage": 88.7,
            "feePaid": 25000,
            "feeDue": 7000
          }
        }
      },
      {
        "key": 1,
        "admissionNumber": "T123002",
        "rollNumber": "R2023002",
        "name": "Sita Devi",
        "mobileNumber": "9887654321",
        "parentContact": "9234567890",
        "parentName": "Sitaram",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Information Technology",
        "currentPercentage": 84.3,
        "currentYear": "2nd Year",
        "feeBalance": 10000,
        "totalFeePaid": 48000,
        "totalFee": 58000,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 80 },
              { "subjectName": "Physics", "marks": 85 },
              { "subjectName": "Computer Programming", "marks": 82 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 82.3,
            "feePaid": 22000,
            "feeDue": 6000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 83 },
              { "subjectName": "Data Structures", "marks": 88 },
              { "subjectName": "Digital Logic", "marks": 86 }
            ],
            "semester": 1.2,
            "semesterPercentage": 85.3,
            "feePaid": 26000,
            "feeDue": 4000
          }
        }
      },
      {
        "key": 2,
        "admissionNumber": "T123003",
        "rollNumber": "R2023003",
        "name": "Anil Kumar",
        "mobileNumber": "9765432109",
        "parentContact": "9345678901",
        "parentName": "Anil",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Mechanical",
        "currentPercentage": 90.2,
        "currentYear": "2nd Year",
        "feeBalance": 15000,
        "totalFeePaid": 52000,
        "totalFee": 67000,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 90 },
              { "subjectName": "Physics", "marks": 92 },
              { "subjectName": "Mechanics", "marks": 91 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 91.0,
            "feePaid": 27000,
            "feeDue": 6000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 89 },
              { "subjectName": "Thermodynamics", "marks": 93 },
              { "subjectName": "Fluid Mechanics", "marks": 88 }
            ],
            "semester": 1.2,
            "semesterPercentage": 90.0,
            "feePaid": 25000,
            "feeDue": 9000
          }
        }
      },
      {
        "key": 3,
        "admissionNumber": "T123004",
        "rollNumber": "R2023004",
        "name": "Geetha Rani",
        "mobileNumber": "9456789123",
        "parentContact": "9456789012",
        "parentName": "Ravi",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Electrical",
        "currentPercentage": 86.4,
        "currentYear": "2nd Year",
        "feeBalance": 11000,
        "totalFeePaid": 49000,
        "totalFee": 60000,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 84 },
              { "subjectName": "Physics", "marks": 87 },
              { "subjectName": "Electrical Circuits", "marks": 85 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 85.0,
            "feePaid": 23000,
            "feeDue": 7000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 88 },
              { "subjectName": "Electromagnetics", "marks": 89 },
              { "subjectName": "Control Systems", "marks": 84 }
            ],
            "semester": 1.2,
            "semesterPercentage": 87.8,
            "feePaid": 26000,
            "feeDue": 4000
          }
        }
      },
      {
        "key": 4,
        "admissionNumber": "T123005",
        "rollNumber": "R2023005",
        "name": "Kiran Rao",
        "mobileNumber": "9865432198",
        "parentContact": "9367890123",
        "parentName": "Vijay",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Civil",
        "currentPercentage": 82.1,
        "currentYear": "2nd Year",
        "feeBalance": 13000,
        "totalFeePaid": 47000,
        "totalFee": 60000,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 78 },
              { "subjectName": "Physics", "marks": 80 },
              { "subjectName": "Surveying", "marks": 81 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 79.5,
            "feePaid": 22000,
            "feeDue": 8000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 85 },
              { "subjectName": "Structural Analysis", "marks": 84 },
              { "subjectName": "Fluid Mechanics", "marks": 87 }
            ],
            "semester": 1.2,
            "semesterPercentage": 84.7,
            "feePaid": 25000,
            "feeDue": 5000
          }
        }
      },
      {
        "key": 5,
        "admissionNumber": "T123006",
        "rollNumber": "R2023006",
        "name": "Priya Sharma",
        "mobileNumber": "9786543210",
        "parentContact": "9123456780",
        "parentName": "Deepak",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Chemical",
        "currentPercentage": 89.7,
        "currentYear": "2nd Year",
        "feeBalance": 14000,
        "totalFeePaid": 51000,
        "totalFee": 65000,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 87 },
              { "subjectName": "Chemistry", "marks": 90 },
              { "subjectName": "Chemical Engineering", "marks": 92 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 89.7,
            "feePaid": 26000,
            "feeDue": 7000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 91 },
              { "subjectName": "Organic Chemistry", "marks": 92 },
              { "subjectName": "Chemical Reaction Engineering", "marks": 89 }
            ],
            "semester": 1.2,
            "semesterPercentage": 90.7,
            "feePaid": 25000,
            "feeDue": 6000
          }
        }
      },
      {
        "key": 6,
        "admissionNumber": "T123007",
        "rollNumber": "R2023007",
        "name": "Ravi Patel",
        "mobileNumber": "9765432108",
        "parentContact": "9234567898",
        "parentName": "Arun",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Electronics",
        "currentPercentage": 87.8,
        "currentYear": "2nd Year",
        "feeBalance": 12500,
        "totalFeePaid": 50000,
        "totalFee": 62500,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 82 },
              { "subjectName": "Electronics Devices", "marks": 88 },
              { "subjectName": "Circuit Theory", "marks": 85 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 85.0,
            "feePaid": 24000,
            "feeDue": 7000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 89 },
              { "subjectName": "Signals and Systems", "marks": 90 },
              { "subjectName": "Digital Electronics", "marks": 86 }
            ],
            "semester": 1.2,
            "semesterPercentage": 88.0,
            "feePaid": 26000,
            "feeDue": 5500
          }
        }
      },
      {
        "key": 7,
        "admissionNumber": "T123008",
        "rollNumber": "R2023008",
        "name": "Sunita Reddy",
        "mobileNumber": "9876543211",
        "parentContact": "9345678902",
        "parentName": "Gopal",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Bioinformatics",
        "currentPercentage": 85.9,
        "currentYear": "2nd Year",
        "feeBalance": 11000,
        "totalFeePaid": 48000,
        "totalFee": 59000,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 80 },
              { "subjectName": "Biology", "marks": 88 },
              { "subjectName": "Bioinformatics", "marks": 85 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 84.3,
            "feePaid": 22000,
            "feeDue": 6000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 87 },
              { "subjectName": "Genomics", "marks": 90 },
              { "subjectName": "Proteomics", "marks": 84 }
            ],
            "semester": 1.2,
            "semesterPercentage": 87.0,
            "feePaid": 26000,
            "feeDue": 5000
          }
        }
      },
      {
        "key": 8,
        "admissionNumber": "T123009",
        "rollNumber": "R2023009",
        "name": "Aarti Verma",
        "mobileNumber": "9456789124",
        "parentContact": "9456789123",
        "parentName": "Ramesh",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Structural Engineering",
        "currentPercentage": 91.3,
        "currentYear": "2nd Year",
        "feeBalance": 13500,
        "totalFeePaid": 53000,
        "totalFee": 66500,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 92 },
              { "subjectName": "Structural Analysis", "marks": 94 },
              { "subjectName": "Materials Science", "marks": 89 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 91.7,
            "feePaid": 27000,
            "feeDue": 6000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 93 },
              { "subjectName": "Design of Structures", "marks": 90 },
              { "subjectName": "Geotechnical Engineering", "marks": 89 }
            ],
            "semester": 1.2,
            "semesterPercentage": 90.7,
            "feePaid": 26000,
            "feeDue": 7500
          }
        }
      },
      {
        "key": 9,
        "admissionNumber": "T123010",
        "rollNumber": "R2023010",
        "name": "Neha Singh",
        "mobileNumber": "9765432107",
        "parentContact": "9234567897",
        "parentName": "Suresh",
        "yearOfJoining": 2022,
        "department": "Engineering",
        "branch": "Environmental Engineering",
        "currentPercentage": 87.5,
        "currentYear": "2nd Year",
        "feeBalance": 11500,
        "totalFeePaid": 49000,
        "totalFee": 60500,
        "semesterDetails": {
          "semester1": {
            "subjects": [
              { "subjectName": "Mathematics 1", "marks": 85 },
              { "subjectName": "Environmental Science", "marks": 88 },
              { "subjectName": "Water Resources", "marks": 86 }
            ],
            "key": 0,
            "semester": 1.1,
            "semesterPercentage": 86.3,
            "feePaid": 23000,
            "feeDue": 7000
          },
          "semester2": {
            "key": 1,
            "subjects": [
              { "subjectName": "Mathematics 2", "marks": 89 },
              { "subjectName": "Waste Management", "marks": 87 },
              { "subjectName": "Air Quality Management", "marks": 85 }
            ],
            "semester": 1.2,
            "semesterPercentage": 88.0,
            "feePaid": 26000,
            "feeDue": 4500
          }
        }
      }
    ];

  const onChange: TableProps['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <Table
        columns={columns}
        onChange={onChange}
        expandable={{ expandedRowRender }}
        dataSource={data}
      />

<div className="flex space-x-4">
      <div className="flex-1 p-4">
        {/* First Component Content */}
        <AttendanceTrend></AttendanceTrend>
      </div>
      <div className="flex-1 p-4">
        {/* Second Component Content */}
        <AttendanceTrend></AttendanceTrend>
      </div>
    </div>

    </>
  );
};

export default App;