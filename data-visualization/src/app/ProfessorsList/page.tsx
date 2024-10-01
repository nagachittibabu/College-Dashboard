import Header from "../header/page";
import Sidenav from "../sideNav/page";
import Professorcard from "../ProfessorCard/page";
import ProfessorsData from "../../../public/professors.json";

const ProfessorsList = () => {
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
                    <Professorcard
                        Name={item.name}
                        Role={item.role}
                        Photo={item.photo}
                        Address={item.address}
                        Mobile={item.mobileNumber}
                    />
                );
            })}
        </div>
        </>
    );
};
export default ProfessorsList;