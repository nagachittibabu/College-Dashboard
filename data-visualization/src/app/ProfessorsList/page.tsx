'use client';
import React from 'react';
import Header from "../header/page";
import Sidenav from "../sideNav/page";
import Professorcard from "../ProfessorCard/page";
import ProfessorsData from "../../../public/professors.json";
import { useRouter } from 'next/navigation';

const ProfessorsList = () => {
    const router = useRouter();
    const handleCardClick = (item:any) => {
        router.push(`/ProfessorDetails/${item.key}`)
    };
    
    return (
        <>
        <div>
            <Header />
        </div>
        <div className='sidenav-container'>
            <Sidenav />
        </div>
        <div className="content-area flex flex-wrap justify-center gap-12 pt-32">
            {ProfessorsData.map((item) => {
                return (
                    <div onClick={() => handleCardClick(item)}>
                    <Professorcard
                        Name={item.name}
                        Role={item.role}
                        Photo={item.photo}
                        Address={item.address}
                        Mobile={item.mobileNumber}
                    />
                    </div>
                );
                
            })}
        </div>
        </>
    );
};
export default ProfessorsList;