import App from "../calender/page"
import Header from "../header/page"
import TitleCard from "../TileCards/page"
import TitlecardData from "../jsonfiles/titlename.json"
import Sidenav from "../sideNav/page"

const DashboardHome=()=>{
   return(
    <div>
        <div className="">
        <Header />
        </div>
        <div className="flex">
            <div>
                <Sidenav />
            </div>
        <div className="flex flex-wrap justify-center pt-16 gap-6 ">
            {TitlecardData.map(item=>{
                return(
        <TitleCard Name={item.name}  Description={item.description} numberof={item.count} iconpath={item.iconpath} className={item.bgcolor} widthClass={item.percent}/> 
                )
    })}
        </div>
        </div>
        <div className="flex">
        <App />
        </div>
    </div>
   )
}
export default DashboardHome