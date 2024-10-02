import Header from "../header/page"
import Popup from "../popop/page"
import StudentGrid from "../StudentGrid/page"
import TitlecardData from "../jsonfiles/titlename.json"
import Sidenav from "../sideNav/page"
import AttendanceTrend from "../trendline/trendline"
import AttendancePieChart from "../piechart/page"
import FeeAreaChart from "../areachart/page"
import Titlecard from "../TileCards/page"
import Calender from "../calender/page"
import Eventcard from "../event"
import Complaint from "../complaint"

const DashboardHome = () => {
    return (
        <div className="main-container ">
            {/* Header */}
            <div className="header-container ">
                <Header />
            </div>

            {/* Sidenav and Main Content */}
            <div className="  w-full flex mt-16 content-container">
                {/* Sidenav */}

                {/* Scrollable Content */}
                <div className=" w-full  flex flex-wrap titlecarddiv  ">
                    {TitlecardData.map((item) => {
                        return (
                            <Titlecard
                                Name={item.name}
                                Description={item.description}
                                numberof={item.count}
                                imgpath={item.imgpath}
                                percent={item.percentchange}
                            />
                        );
                    })}
                </div>
                <div className="w-full flex resource ">
                    <div className="w-3/4  mt-12  attendence ">
                        <div className="w-ful flex justify-center mx-4">
                            <div className="w-full  bg-white p-4 shadow-md rounded-md mb-6 ">
                                <h3 className="text-lg font-semibold mb-4 text-center text-black">Students Attendance Insights</h3>
                                <AttendanceTrend />
                            </div>
                        </div>
                        <div className="w-full flex mt-10 charts">
                            <div className="chartswidth  h-80 bg-white p-4 shadow-md rounded-md  mb-6 piechart">
                                <h3 className="text-lg font-semibold mb-4 text-center text-black">Teachers Attendence:</h3>
                                <AttendancePieChart />
                            </div>
                            <div className="chartswidth  h-80 bg-white p-4 shadow-md rounded-md finanicial ">
                                <h3 className="text-lg font-semibold mb-4 text-center text-black">Financial Health:</h3>
                                <FeeAreaChart />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 flex-col flex space-y-10 inline-block eventsarea">
                        <div className="h-full space-y-12 mr-6">
                            <div className="w-full shadow-md border h-96 mt-12 mr-24 bg-white">
                                <div className=" w-full flex items-center   h-16 text-left text-xl font-normal fontstyle border px-4">Upcoming events</div>
                                <div className="w-full overflow-y-scroll flex flex-wrap		h-3/4">
                                    <Eventcard />
                                    <Eventcard />
                                    <Eventcard />
                                    <Eventcard />
                                    <Eventcard />
                                    <Eventcard />
                                    <Eventcard />
                                    <Eventcard />
                                </div>
                            </div>
                            <div className="w-full h-96 shadow-md border  mr-24 bg-white ">
                                <div className=" w-full flex items-center   h-16 text-left text-xl font-normal fontstyle border px-4">Complaints</div>
                                <div className="w-full overflow-y-scroll flex flex-wrap		h-3/4">
                                    <Complaint />
                                    <Complaint />
                                    <Complaint />
                                    <Complaint />
                                    <Complaint />
                                    <Complaint />
                                </div>
                            </div>
                        </div>
                        <div className=" mr-6 space-y-8">
                            <div className="w-full h-48 bg-white shadow-md">
                                <div className=" w-full flex items-center   h-16 text-left text-xl font-normal fontstyle border px-4">New Admissions</div>
                                <div className="flex w-full h-1/2 justify-around items-center">
                                    <div>
                                        <h1>Today</h1>
                                        <span className="text-xl mr-1 font-bold">118</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                                    </div>
                                    <div>
                                        <h1>This Week</h1>
                                        <span className="text-xl mr-1 font-bold">189</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                                    </div>
                                    <div>
                                        <h1>This Month</h1>
                                        <span className="text-xl mr-1 font-bold">425</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <span className="w-full h-6 bg-black"></span>
                                </div>
                            </div>
                            <div className="w-full h-48 bg-white shadow-md">
                                <div className=" w-full flex items-center   h-16 text-left text-xl font-normal fontstyle border px-4">Fee Colection</div>
                                <div className="flex w-full h-1/2 justify-around items-center">
                                    <div>
                                        <h1>Today</h1>
                                        <span className="text-xl mr-1 font-bold">$ 12k</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                                    </div>
                                    <div>
                                        <h1>This Week</h1>
                                        <span className="text-xl mr-1 font-bold">$ 22k</span><i className="fa-solid fa-arrow-down text-red-600 font-bold text-xl"></i>
                                    </div>
                                    <div>
                                        <h1>This Month</h1>
                                        <span className="text-xl mr-1 font-bold">$ 95k</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <span className="w-full h-6 bg-black"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Calendar */}
                <div className="calendar-container  w-full">
                    <Calender />
                </div>
            </div>
        </div>
    )
}
export default DashboardHome