'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Header from '../header/page';
import Sidenav from '../sideNav/page';

const ProfessorDetails = () => {
    const [details, setDetail] = useState();
    const selectedVal = usePathname().split('/')[2];
    useEffect(() => {
        fetch('/professors.json')
            .then((response) => response.json())
            .then((data) => {
                setDetail(data[selectedVal]);
            });
    }, []);
        
    return (
        <>
        <div>
            <Header />
        </div>
        <div className='sidenav-container'>
            <Sidenav />
        </div>
        <div className='pl-20'>
            <div className='flex pt-24 text-xl'>
                <a href="/" className='px-3'>Home </a>
                <p> {'>'} </p>
                <a href="/ProfessorsList/" className='px-3'>Professors</a>
            </div>
            <div className="mx-auto pt-10 pr-6">
                {details && ( 
                <div className="flex gap-7">
                    <div className="w-2/5 border shadow-md px-3 rounded-xl ">
                        <div className="mb-5">
                            <div className="p-6">
                                <div className="flex justify-center mb-5">
                                    <img src={details.photo} alt="Professor" className="w-1/5 rounded-full shadow-md" />
                                </div>
                                <div className="text-center">
                                    <h3 className='text-3xl'><strong>{details.name}</strong></h3>
                                    <span className="mb-0 text-lg">{details.role}</span>
                                    <p className="my-5 py-3">{details.address}</p>
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
                                    <p><i className="fa-solid fa-graduation-cap me-1"></i><strong>Degree:</strong> {details.qualification}</p>
                                    <p><i className="fa-solid fa-star me-1"></i><strong>Experience:</strong> {details.experience}</p>
                                    <p><i className="fa-solid fa-right-long me-1"></i><strong>Subjects:</strong> Higher Math, Math Puzzle</p>
                                    <p><i className="fa-solid fa-right-long me-1"></i><strong>Projects:</strong> Map Creation</p>
                                </div>
                                <hr />
                                <div className='pt-4'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque. Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Vestibulum interdum diam non mi cursus venenatis. Morbi lacinia libero et elementum vulputate. Vivamus et facilisis mauris. Maecenas nec massa auctor, ultricies massa eu, tristique erat. Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Eu pellentesque, accumsan tellus leo, ultrices mi dui lectus sem nulla eu.Eu pellentesque, accumsan tellus leo, ultrices mi dui</p>
                                </div>
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
export default ProfessorDetails;