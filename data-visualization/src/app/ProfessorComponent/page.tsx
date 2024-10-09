'use client'; // Mark this file as a client-side component
import React, { useEffect, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Select, Space, Table, Input } from 'antd';
import Header from '../header/page';
import Sidenav from '../sideNav/page';


const ProfessorGrid: React.FC = () => {
    const [uniqueDepartments, setUniqueDepartments] = useState<string[]>([]);

    const expandedRowRender = (_record: any) => {
        if (_record.professorId !== undefined) {
            const columns: TableColumnsType = [
                { title: 'Total Leave Applied', dataIndex: 'totalLeavesApplied', key: 'totalLeavesApplied' },
                { title: 'Medical Leaves', dataIndex: 'medicalLeaves', key: 'medicalLeaves' },
                { title: 'Personal Leaves', dataIndex: 'personalLeaves', key: 'personalLeaves' },
                { title: 'Un-Paid Leaves', dataIndex: 'unpaidLeaves', key: 'unpaidLeaves' },
                { title: 'Leave Balance', dataIndex: 'leaveBalance', key: 'leaveBalance' },
                {title: 'Subjects', dataIndex: 'subjects', key: 'subjects',
                    render: (subjects) => (
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                            {subjects.map((subject: any, index: number) => (
                                <li key={index}>{subject.subjectName}</li>
                            ))}
                        </ul>
                    )
                }
            ];

            const data: any = [_record.details];
            return (
                <>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    size="small"
                />
                </>
            )
        }
    };

    const columns: TableColumnsType = [
        { title: 'Photo', dataIndex: 'photo', key: 'photo', render: (text: string) => <img src={text} alt="Professor" className="rounded-full w-2/5" /> },
        {
            title: 'ID', dataIndex: 'professorId', key: 'professorId', defaultSortOrder: 'descend',
            sorter: (a, b) => a.professorId - b.professorId
        },
        {
        title: 'Name', dataIndex: 'name', key: 'name', defaultSortOrder: 'descend',
        sorter: (a, b) => a.name - b.name
        },
        { title: 'Qualification', dataIndex: 'qualification', key: 'qualification' },
        { title: 'Experience', dataIndex: 'experience', key: 'experience' },
        { title: 'Department', dataIndex: 'department', key: 'department' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Phone Number', dataIndex: 'mobileNumber', key: 'mobileNumber'},
        { title: 'Alternate Number', dataIndex: 'alternateMobileNumber', key: 'alternateMobileNumber'},
        { title: 'Address', dataIndex: 'address', key: 'address'}
    ];

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('/professors.json')
        .then((response) => response.json())
        .then((data) => {
            setDetail(data);
            const departments = Array.from(new Set(data.map(professor => professor.department))).sort();
            setUniqueDepartments(departments);
        })
        .catch((error) => console.error('Error fetching the JSON file:', error));
    }, []);

    const onChange: TableProps['onChange'] = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra);
    };

    const onSearch = (value: string) => console.log(value);

    return (
        <>
        <div>
            <Header />
        </div>
        <div className='sidenav-container'>
            <Sidenav />
        </div>
            <div className='flex justify-between px-20 pt-20 pb-5'>
                <div className='flex gap-4 ml-16'>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search Department"
                        options={uniqueDepartments.map(department => ({ label: department, value: department }))}
                    />
                </div>
                <div className='flex'>
                    <Space direction="vertical">
                        <Input.Search placeholder="Search" onSearch={onSearch} enterButton />
                    </Space>
                    <Button className='bg-indigo-50 ml-10'><i className="fa-solid fa-file-export"></i></Button>
                </div>
            </div>
            <div className='shadow-md overflow-hidden ml-16 mr-2'>
                <Table
                    columns={columns}
                    onChange={onChange}
                    expandable={{ expandedRowRender }}
                    dataSource={detail}
                />
            </div>
        

        <div className="flex space-x-4">
            <div className="flex-1 p-4">
            </div>
            <div className="flex-1 p-4">
            </div>
        </div>

        </>

    );
};

export default ProfessorGrid;