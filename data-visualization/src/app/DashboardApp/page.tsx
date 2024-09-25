// import Calender from "../calender/page"
import Header from "../header/page"
import Popup from "../popop/page"
import StudentGrid from "../StudentGrid/page"
// import TitleCard from "../TileCards/page"
import TitlecardData from "../jsonfiles/titlename.json"
import Sidenav from "../sideNav/page"
import AttendanceTrend from "../trendline/trendline"
import AttendancePieChart from "../piechart/page"
import FeeAreaChart from "../areachart/page"
import Titlecard from "../TileCards/page"
import Calender from "../calender/page"

const DashboardHome = () => {
    return (

        <div className="main-container">
            {/* Header */}
            <div className="header-container">
                <Header />
            </div>

            {/* Sidenav and Main Content */}
            <div className="flex mt-16 content-container">
                {/* Sidenav */}
                <div className="sidenav-container">
                    <Sidenav />
                </div>

                {/* Scrollable Content */}
                <div className="content-area flex flex-wrap justify-center gap-12 mt-4">
                    {TitlecardData.map((item) => {
                        return (
                            <Titlecard
                                Name={item.name}
                                Description={item.description}
                                numberof={item.count}
                                iconpath={item.iconpath}
                                className={item.bgcolor}
                                widthClass={item.percent}
                                pagenav={item.pagenavigation}
                            />
                        );
                    })}
                    <div className="w-full flex justify-evenly  gap-12 mt-6">
                        <div className="w-1/3 bg-white p-4 shadow-md rounded-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-4">Students Attendance Insights</h3>
                            <AttendanceTrend />
                        </div>
                        <div className="w-1/3 bg-white p-4 shadow-md rounded-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-4">Faculty Attendance Insights</h3>
                            <AttendancePieChart />
                        </div>
                    </div>
                    <div className="w-1/3 bg-white p-4 shadow-md rounded-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-4">Financial Health:</h3>
                            <FeeAreaChart />
                    </div>
                </div>

                {/* Calendar */}
                <div className="calendar-container">
                    <Calender />
                </div>
            </div>
        </div>
    )
}
export default DashboardHome