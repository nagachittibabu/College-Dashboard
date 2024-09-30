import Calender from "../calender/page"
import Header from "../header/page"
import TitleCard from "../TileCards/page"
import TitlecardData from "../jsonfiles/titlename.json"
import Sidenav from "../sideNav/page"
import AttendanceTrend from "../trendline/trendline"
import AttendancePieChart from "../piechart/page"
import FeeAreaChart from "../areachart/page"

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
                <div className=" flex flex-wrap justify-center w-full ml-16">
                    {TitlecardData.map((item) => {
                        return (
                            <TitleCard
                                Name={item.name}
                                Description={item.description}
                                numberof={item.count}
                                imgpath={item.imgpath}
                                pagenav={item.pagenavigation}
                            />
                        );
                    })}
                </div>
                <div className="w-full flex">
                    <div className="w-full  mt-12">
                        <div className="w-3/4 flex ml-28">
                            <div className="  bg-white p-4 shadow-md rounded-md mr-12 mb-6">
                                <h3 className="text-lg font-semibold mb-4 text-center">Students Attendance Insights</h3>
                                <AttendanceTrend />
                            </div>
                           
                        </div>
                        <div className="w-full flex ml-28 mt-10 ">
                            <div className="chartswidth  h-80 bg-white p-4 shadow-md rounded-md flex flex-col mr-12 mb-6">
                                <h3 className="text-lg font-semibold mb-4 text-center">Financial Health:</h3>
                                <FeeAreaChart />
                            </div>
                            <div className="chartswidth  h-80 bg-white p-4 shadow-md rounded-md flex flex-col">
                                <h3 className="text-lg font-semibold mb-4 text-center">Financial Health:</h3>
                                <FeeAreaChart />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 shadow-md border h-full mt-12 mr-24">
                        <h1 className="text-center font-bold text-2xl">Events</h1>

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