const Sidenav = () => {
    return (
      <nav className="flex pl-2 flex-col items-center gap-10 w-fit p-4 bg-white shadow-lg border h-screen text-2xl fixed text-slate-700">
        {[
          { icon: "fa-user-graduate", label: "Students" },            
          { icon: "fa-trophy", label: "Academic Achievers" },          
          { icon: "fa-exclamation-triangle", label: "Academic Deficiencies" }, 
          { icon: "fa-chalkboard-teacher", label: "Faculty" },         
          { icon: "fa-money-bill-wave", label: "Fee Collection" },     
          { icon: "fa-piggy-bank", label: "Budget" },                  
          { icon: "fa-book", label: "Courses" },                       
          { icon: "fa-user", label: "Account Details" },
          { icon: "fa-users-cog", label: "Manage Accounts" },          
          { icon: "fa-sign-out-alt", label: "Logout" }                 
        ].map((item, index) => (
          <div key={index} className="relative group">
            <a href="#">
              <i className={`fa-solid ${item.icon} cursor-pointer group-hover:text-orange-900`}></i>
            </a>
            {/* Tooltip */}
            <span className="absolute left-12 -top-1/2 transform translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    );
  };
  
  export default Sidenav;
  