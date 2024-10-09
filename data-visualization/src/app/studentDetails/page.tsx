'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Header from '../header/page';
import MenusideNav from '../sideNav/page';
const StudentDetails = () => {
    const [details, setDetail] = useState();
    const selectedstudentkey = usePathname().split("/")[2];
    console.log(selectedstudentkey)
    useEffect(() => {
        fetch('/studentsdata/students.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setDetail(data[selectedstudentkey]);
            });
        console.log(details)
    }, []);

    return (
        <>
            <div>
                <Header />
            </div>
            <div className='sidenav-container'>
                < MenusideNav />
            </div>
            <div className='pl-20'>
                <div className='flex pt-24 text-xl'>
                    <a href="/" className='px-3'>Home </a>
                    <p> {'>'} </p>
                    <a href='/StudentGrid' className='px-3'>Students</a>
                </div>
                <div className="mx-auto pt-10 pr-6">
                    {details && (
                        <div className="flex gap-7">
                            <div className="w-2/5 border shadow-md px-3 rounded-xl ">
                                <div className="mb-5">
                                    <div className="p-6">
                                        <div className="text-center">
                                            <h3 className='text-3xl'><strong>{details.name}</strong></h3>
                                            <span className="mb-0 text-lg">{details.department}</span>
                                            <p className="my-5 py-3">{details.branch}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-3/5 border shadow-md px-3 rounded-xl">
                                <div className="p-5">
                                    <div className="flex">
                                        <div className='border bg-orange-500 text-white py-2 px-4'><a href="#">About</a></div>
                                    </div>
                                    <hr />
                                    <div className="py-5">
                                        <div className="leading-9 pb-3">
                                            <p><i className="fa-solid fa-graduation-cap me-1"></i><strong>Name:</strong> {details.name}</p>
                                            <p><i className="fa-solid fa-star me-1"></i><strong>AdmissionNumber:</strong> {details.admissionNumber}</p>
                                            <p><i className="fa-solid fa-building me-1"></i><strong>Department:</strong> {details.department}</p>
                                            <p><i className="fa-solid fa-star me-1"></i><strong>Branch:</strong> {details.branch}</p>
                                            <div className='flex gap-6'>
                                                <p><i className="fa-solid fa-phone me-1"></i><strong>ContactNumber:</strong> {details.mobileNumber}</p>
                                                <p><i className="fa-solid fa-phone me-1"></i><strong>ParentNumber:</strong> {details.parentContact}</p>
                                            </div>
                                            <div className='flex gap-14'>
                                                <p><i className="fa-solid fa-chart-simple me-1"></i><strong>CurrentPercentage:</strong> {details.currentPercentage}</p>
                                                <p><i className="fa-solid fa-clipboard-user me-1"></i><strong>AttendancePercentage:</strong> {details.attendancePercentage}</p>
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}
export default StudentDetails;