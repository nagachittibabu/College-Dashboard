'use client'
import { usePathname } from "next/navigation";
import ProfessorDetails from "../page";

export default function SelectedProfessor(){
    const selectedVal=usePathname().split('/')[2];

    return (
        <div>
            <ProfessorDetails />
        </div>
    )
}