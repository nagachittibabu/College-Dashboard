import App from "../calender/page"
import Header from "../header/page"
import TitleCard from "../TileCards/page"
import TitlecardData from "../jsonfiles/titlename.json"

const DashboardHome=()=>{
   return(
    <div>
        <Header />
        <div className="flex flex-wrap justify-center pt-16 gap-6 ">
            {TitlecardData.map(item=>{
                return(
        <TitleCard Name={item.name}  Description={item.description} numberof={item.count} iconpath={item.iconpath} className={item.bgcolor} widthClass={item.percent}/> 
                )
    })}

        </div>
        <div className="flex">
        <App />
        </div>
    </div>
   )
}
export default DashboardHome