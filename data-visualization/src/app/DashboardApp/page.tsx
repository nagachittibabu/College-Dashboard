import Header from "../header/page"
import TitlecardData from "../jsonfiles/titlename.json"
import Sidenav from "../sideNav/page"
import AttendanceTrend from "../trendline/trendline"
import AttendancePieChart from "../piechart/page"
import FeeAreaChart from "../areachart/page"
import Titlecard from "../TileCards/page"
import Calender from "../calender/page"
import Eventcard from "../event"
import Complaintsdata from "../../../public/complaints.json"
import eventsdata from "../../../public/events.json"
import Complaint from "../complaint"
import ChartsCard from "../chartscard"
import { PieChart } from "../../../node_modules/recharts/types/index"
import FeeLineChart from "../areachart/page"

const DashboardHome = () => {
    return (
        <div className="main-container ">
            {/* sidenav */}
            <div className="sidenav-container ">
                <Sidenav></Sidenav>
            </div>
            {/* header and Main Content */}
            <div className=" w-fit ">
                {/* header */}
                <div className=" header-container z-50">
                    <Header />
                </div>
                {/* Scrollable Content */}
                <div className=" content-area ">
                    <div className=" w-full  flex flex-wrap titlecarddiv ">
                        {TitlecardData.map((item) => {
                            return (
                                <Titlecard
                                    Name={item.name}
                                    Description={item.description}
                                    numberof={item.count}
                                    imgpath={item.imgpath}
                                    percent={item.percent}
                                    pagenav={""}
                                />
                            );
                        })}
                    </div>
                    <div className="w-full flex resource  ">
                        <div className="w-3/4  mt-12  attendence">
                            <div className=" flex justify-center mx-4 z-0">
                                <div className="w-full  bg-white p-4 shadow-md rounded-lg mb-6 z-0">
                                    <h3 className="text-lg font-semibold mb-4 text-center text-black">Students Attendance Insights</h3>
                                    <AttendanceTrend />
                                </div>
                            </div>
                            <div className="w-full flex mt-10 charts flex-wrap">
                                <ChartsCard chartcomp={<AttendancePieChart />} heading="Teachers Attendence" />
                                <ChartsCard chartcomp={<FeeLineChart />} heading="Finacial Percentage" />
                                 <ChartsCard chartcomp={<Calender />} heading="Calender " />
                            </div>
                            
                        </div>
                        <div className="w-1/4 flex-col flex space-y-10 eventsarea pr-3">
                            <div className="w-full  h-full space-y-16  mt-12 ">
                                <div className="w-full shadow-md border h-350  mr-24 bg-white rounded-md flex flex-col">
                                    <div className=" w-full flex items-center h-16 text-left text-xl font-normal fontstyle border-b px-4">Upcoming events</div>
                                    <div className="w-full overflow-y-scroll scroll-hiddden flex justify-start flex-wrap border-t h-3/4">
                                        {eventsdata.map(item => {
                                            return (
                                                <Eventcard month={item.month} day={item.day} events={item.events} eventtype={item.eventtype} />
                                            )
                                        })}

                                    </div>
                                </div>
                                <div className="w-full h-96 shadow-md border bg-white rounded-md ">
                                    <div className=" w-full flex items-center h-16 text-left text-xl font-normal fontstyle border-b px-4">Complaints</div>
                                    <div className="w-full overflow-y-scroll scroll-hiddden  flex flex-col border-t h-3/4">
                                        {Complaintsdata.map(item => {
                                            return (
                                                <Complaint imagepath={item.imagepath} complaint={item.complaint} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full  space-y-8">
                                <div className="w-full h-48 bg-white shadow-md rounded-md">
                                    <div className=" w-full flex items-center   h-16 text-left text-xl font-normal fontstyle border-b px-4">New Admissions</div>
                                    <div className="flex w-full h-1/2 justify-around items-center border-t	">
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
                                <div className="w-full h-48 bg-white shadow-md rounded-md">
                                    <div className=" w-full flex items-center   h-16 text-left text-xl font-normal fontstyle border-b px-4">Fee Colection</div>
                                    <div className="flex w-full h-1/2 justify-around items-center border-t">
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

                </div>
            </div>
        </div>
    )
}
export default DashboardHome