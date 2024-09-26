export default function Header() {
    return (
        <div className="">
            <div className="w-full  flex items-center justify-between pt-1 h-14 shadow-md fixed bg-white z-50">
                <div className="flex gap-8 font-semibold ml-10">
                    <a href="" className="hover:text-blue-600"><h1>Dashboard</h1></a>
                    <a href="" className="hover:text-blue-600"><h1>Leave</h1></a>
                    <a href="" className="hover:text-blue-600"><h1>Attendance</h1></a>
                    <a href="" className="hover:text-blue-600"><h1>performance</h1></a>
                 </div>
                <div className="flex gap-6 mr-10">
                    <div>
                    <h1 className="text-lg font-bold ml-26 text-blue-600">ACHARYA  NAGARJUNA  UNIVERSITY</h1>
                    </div>
                    <div className="flex">
                    <a href="" className="flex items-center mr-6"><i className="fa-sharp fa-regular fa-bell text-xl font-bold"></i></a>
                    <a href="" className="flex items-center mr-6" ><i className="fa-sharp fa-regular fa-envelope text-xl font-bold"></i>
                    </a>
                    <img src="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6864.jpg" alt="girl" className="w-8 h-8 rounded-full mr-1.5 inline-block"></img>

                    </div>
                </div>
            </div>
  
            {/* Company Name */}
            <div>
              <h1 className="text-lg font-bold ml-26 text-purple-950">JNTUK</h1>
            </div>
  
            {/* Notifications and Profile */}
            <div className="flex items-center gap-6">
              <a href="" className="flex items-center mr-6">
                <i className="fa-sharp fa-regular fa-bell text-xl font-bold text-slate-400"></i>
              </a>
              <a href="" className="flex items-center mr-6">
                <i className="fa-sharp fa-regular fa-envelope text-xl font-bold text-slate-400"></i>
              </a>
              <img
                src="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6864.jpg"
                alt="girl"
                className="w-8 h-8 rounded-full mr-1.5 inline-block"
              />
            </div>
          </div>
    );
  }
  
