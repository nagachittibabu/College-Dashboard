import Header from "../header/page"
import TitlecardData from "../jsonfiles/titlename.json"
import Sidenav from "../sideNav/page"
import AttendanceTrend from "../trendline/trendline"
import AttendancePieChart from "../piechart/page"
import Titlecard from "../TileCards/page"
import Calender from "../calender/page"
import FeeLineChart from "../areachart/page"
import CollectionCard from "../collectioncard/page"
import CustomCard from "../customcard/page"
import Events from "../events/page"
import Complaints from "../complaints/page"

const DashboardHome = () => {
    return (
        <div className="main-container ">
            {/* sidenav */}
            <div className="sidenav-container ">
                <CustomCard width="fit" height="fit" border="border" component={<Sidenav />} />
            </div>
            {/* header and Main Content */}
            <div className=" w-fit pl-12">
                {/* header */}
                <div className=" header-container z-50">
                    <CustomCard width="fit" height="fit" border="border" component={<Header />} />
                </div>
                {/* Scrollable Content */}
                <div className=" content-area mt-20 ">
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
                        <div className="w-3/4  mt-12  h-350 attendence">
                            <CustomCard width="full" height="full" border="border" component={<AttendanceTrend />} classes="px-4" />
                            <div className="w-full flex mt-10  flex-wrap ">
                                <div className="w-full flex justify-betweeen space-x-16">
                                    <CustomCard width="1/2" height="full" component={<AttendancePieChart />} classes="px-4" border="border" />
                                    <CustomCard width="1/2" height="full" border="border" component={<FeeLineChart />} classes="px-5" />
                                </div>
                                <CustomCard width="1/2" height="full" border="border" component={<Calender />} classes="mt-6 px-4" />
                            </div>
                        </div>
                        <div className="w-1/4 flex-col flex space-y-10 eventsarea pr-3">
                            <div className="w-full  h-full space-y-10  mt-12 ">
                                <CustomCard width="full" height="350" border="border" component={<Events />} />
                                <CustomCard width="full" height="350" border="border" component={<Complaints />} />
                                <div className=" w-full space-y-8 ">
                                    <CollectionCard title="New Admissions" todaycount="300" monthcount="200" weekcount="200" />
                                    <CollectionCard title="Fee Collection" todaycount="300$" monthcount="200$" weekcount="200$" />
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