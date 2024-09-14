import Header from "../header/page"
import TitleCard from "../TileCards/page"

const DashboardHome=()=>{
   return(
    <div>
        <Header />
        <div className="flex  justify-center pt-10">
        <TitleCard Name={"Total Students"} Backgroundcolor={"bg-teal-300"} Description="45% increase in 28 ..." count={450} iconpath="fa-regular fa-user"/>
        <TitleCard Name={"Total Students"} Backgroundcolor={"bg-orange-300"} Description="45% increase in 28 ..." count={450} iconpath="fa-regular fa-user"/>
        <TitleCard Name={"Total Students"} Backgroundcolor={"bg-blue-400	"} Description="45% increase in 28 ..." count={450} iconpath="fa-solid fa-book"/>
        <TitleCard Name={"Total Students"} Backgroundcolor={"bg-rose-400"} Description="45% increase in 28 ..." count={450} iconpath="fa-solid fa-dollar-sign"/>
        </div>
    </div>
   )
}
export default DashboardHome