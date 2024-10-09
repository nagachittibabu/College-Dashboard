'use client'
import { usePathname } from "next/navigation";
import ProfessorDetails from "../page";
import StudentDetails from "../page";

export default function SelectedProfessor(){
    const selectedstudentkey=usePathname().split('/')[2];

    return (
        <div>
            <StudentDetails />
        </div>
    )
}