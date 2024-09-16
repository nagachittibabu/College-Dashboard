import App from "../calender/page"
import Header from "../header/page"
import Popup from "../popop/page"
import TitleCard from "../TileCards/page"

const DashboardHome=()=>{
   return(
    <div>
        <Header />
        <div className="flex flex-wrap justify-center pt-16 gap-4 ">
        <TitleCard Name={"Total Students"}  Description="45% increase in students from last 28 days" numberof={450} iconpath="fa-regular fa-user" className="bg-gradient-to-r from-orange-500 to-yellow-300 " widthClass="w-1/2"/>
        <TitleCard Name={"Total Students"} Description="45% increase in 28 ..." numberof={450} iconpath="fa-solid fa-book" className="bg-gradient-to-r from-gray-600 to-slate-400 " widthClass="w-1/5"/>
        <TitleCard Name={"Total Students"} Description="45% increase in 28 ..." numberof={450} iconpath="fa-solid fa-book" className="bg-gradient-to-r from-green-500 to-emerald-700 " widthClass="w-1/5"/>
        <TitleCard Name={"Total Students"}  Description="45% increase in students from last 28 days" numberof={450} iconpath="fa-regular fa-user" className="bg-gradient-to-r from-indigo-500 to-purple-400 " widthClass="w-1/4"/>
        <TitleCard Name={"Total Students"}  Description="45% increase in 28 ..." numberof={450} iconpath="fa-solid fa-dollar-sign" className=" bg-gradient-to-r from-fuchsia-500  to-slate-400 " widthClass="w-3/4"/>
        <TitleCard Name={"Total Students"}  Description="45% increase in 28 ..." numberof={450} iconpath="fa-regular fa-user" className="bg-gradient-to-r from-cyan-600 to-cyan-400" widthClass="w-1/4"/>
        <TitleCard Name={"Total Students"}  Description="45% increase in students from last 28 days" numberof={450} iconpath="fa-regular fa-user" className="bg-gradient-to-r from-pink-600 to-orange-400 " widthClass="w-1/2"/>
        <TitleCard Name={"Total Students"}  Description="45% increase in 28 ..." numberof={450} iconpath="fa-solid fa-dollar-sign" className="bg-gradient-to-r from-blue-700 to-sky-400" widthClass="w-3/4"/>
        
        </div>
        <div className="flex">
        <App />
        </div>
    </div>
   )
}
export default DashboardHome