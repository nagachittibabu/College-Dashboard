import App from "../calender/page"
import Header from "../header/page"
import TitleCard from "../TileCards/page"
import TitlecardData from "../jsonfiles/titlename.json"
import Sidenav from "../sideNav/page"
import AttendanceTrend from "../trendline/trendline"

const DashboardHome=()=>{
   return(
    <div>
        <div className="">
        <Header />
        </div>
        <div className="flex mt-8">
            <div>
                <Sidenav />
            </div>
        <div className="flex flex-wrap justify-center  gap-6 mt-4">
            {TitlecardData.map(item=>{
                return(
        <TitleCard Name={item.name}  Description={item.description} numberof={item.count} iconpath={item.iconpath} className={item.bgcolor} widthClass={item.percent} pagenav={item.pagenavigation}/> 
                )
    })}
        </div>
        </div>
        <div className="flex">
        <div className="">
            <AttendanceTrend />
        </div>
        <div>
            <AttendanceTrend />
        </div>
        </div>
        <div className="flex ml-12 z-0">
        <App />
        </div>
    </div>
   )
}
export default DashboardHome