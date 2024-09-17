export default function Header() {
    return (
        <div>
            <div className="w-full  flex items-center justify-between pt-1 h-14 shadow-md">
                <div className="flex gap-8 font-semibold ml-10">
                    <a href="" className="hover:text-blue-600"><h1>Dashboard</h1></a>
                    <a href="" className="hover:text-blue-600"><h1>Leave</h1></a>
                    <a href="" className="hover:text-blue-600"><h1>Attendance</h1></a>
                    <a href="" className="hover:text-blue-600"><h1>performance</h1></a>
                 </div>
                {/* <div className="rounded-full ml-2">
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/2a/Acharya_Nagarjuna_University_crest.png" alt="anu logo" className="w-8 h-8  rounded-full " />
                </div> */}
                <div className="flex gap-6 mr-10">
                    <div>
                    <h1 className="text-lg font-bold ml-26 text-blue-600">ACHARYA  NAGARJUNA  UNIVERSITY</h1>
                    </div>
                    <div className="flex">
                    <a href="" className="flex items-center mr-6"><i className="fa-sharp fa-regular fa-bell text-xl font-bold"></i></a>
                    <a href="" className="flex items-center mr-6" ><i className="fa-sharp fa-regular fa-envelope text-xl font-bold"></i>
                    </a>
                    <img src="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6864.jpg" alt="girl" className="w-8 h-8 rounded-full mr-1.5 inline-block"></img>
                    {/* <h1 className=" text-base font-semibold flex items-center mr-4 text-black">Savya Jajimoggala</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}