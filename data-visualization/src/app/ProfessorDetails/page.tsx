'use client';
import React, { useEffect, useState } from 'react';

const ProfessorDetails = () => {
    const [details, setDetail] = useState([]);
    useEffect(() => {
        fetch('/professors.json')
            .then((response) => response.json())
            .then((data) => { 
                setDetail(data[0]);
            });
    }, []);
        
    return (
        <div className="p-6 mx-auto">
            {details && ( 
            <div className="flex gap-7">
                <div className="w-2/5 shadow-md px-3 rounded-xl">
                    <div className="mb-5">
                        <div className="p-6">
                            <div className="flex justify-center mb-5">
                                <img src={details.photo} alt="Professor" className="w-1/5 rounded-full shadow-md" />
                            </div>
                            <div className="text-center">
                                <h3 className='text-xl'><strong>{details.name}</strong></h3>
                                <span className="mb-0">{details.role}</span>
                                <p className="my-5">{details.address}</p>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-purple-600 rounded-full px-4 py-2 text-white mr-2">Follow</button>
                                <button className="bg-purple-200 rounded-full px-5 py-2 text-purple-600">Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 shadow-md px-3 rounded-xl">
                    <div className="p-5">
                        <ul className="flex">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Account</a></li>
                        </ul>
                        <div className="">
                            <div className="py-30">
                                <ul>
                                    <li><p><i className="fa-solid fa-graduation-cap me-1"></i><strong>Degree:</strong> {details.qualification}</p></li>
                                    <li><p><i className="fa-solid fa-star me-1"></i><strong>Experience:</strong> {details.experience}</p></li>
                                    <li><p><i className="fa-solid fa-right-long me-1"></i><strong>My Courses:</strong> Higher Math, Math Puzzle</p></li>
                                    <li><p><i className="fa-solid fa-right-long me-1"></i><strong>Projects:</strong> Map Creation</p></li>
                                </ul>
                                <hr />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque. Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Vestibulum interdum diam non mi cursus venenatis. Morbi lacinia libero et elementum vulputate. Vivamus et facilisis mauris. Maecenas nec massa auctor, ultricies massa eu, tristique erat. Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Eu pellentesque, accumsan tellus leo, ultrices mi dui lectus sem nulla eu.Eu pellentesque, accumsan tellus leo, ultrices mi dui</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
export default ProfessorDetails;