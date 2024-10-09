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
                                        <div className="flex justify-center py-8">
                                            <button className="bg-orange-500 rounded-full px-4 py-2 text-white mr-2">Follow</button>
                                            <button className="bg-orange-200 rounded-full px-5 py-2 text-orange-600">Message</button>
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

                                            <p><i className="fa-solid fa-star me-1"></i><strong>Department:</strong> {details.department}</p>
                                            <p><i className="fa-solid fa-star me-1"></i><strong>Branch:</strong> {details.branch}</p>

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