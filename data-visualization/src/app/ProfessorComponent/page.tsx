'use client'; // Mark this file as a client-side component
import React from 'react';
import { useEffect, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';


const ProfessorGrid: React.FC = () => {

    const expandedRowRender = (_record: any) => {
        if (_record.professorId !== undefined) {
            const columns: TableColumnsType = [
                { title: 'Total Leave Applied', dataIndex: 'totalLeavesApplied', key: 'totalLeavesApplied' },
                { title: 'Medical Leaves', dataIndex: 'medicalLeaves', key: 'medicalLeaves' },
                { title: 'Personal Leaves', dataIndex: 'personalLeaves', key: 'personalLeaves' },
                { title: 'Un-Paid Leaves', dataIndex: 'unpaidLeaves', key: 'unpaidLeaves' },
                { title: 'Leave Balance', dataIndex: 'leaveBalance', key: 'leaveBalance' }
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
        { title: 'Photo', dataIndex: 'photo', key: 'photo', render: (text: string) => <img src={text} alt="Professor" className="w-80 h-14 rounded-full" /> },
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
        { title: 'Alterntative Number', dataIndex: 'alternateMobileNumber', key: 'alternateMobileNumber'},
        { title: 'Address', dataIndex: 'address', key: 'address'}
    ];

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('/professors.json')
        .then((response) => response.json())
        .then((data) => setDetail(data))
        .catch((error) => console.error('Error fetching the JSON file:', error));
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
            </div>
            <div className="flex-1 p-4">
            </div>
        </div>

        </>

    );
};

export default ProfessorGrid;