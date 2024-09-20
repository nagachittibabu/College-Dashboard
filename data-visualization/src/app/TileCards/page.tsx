const Titlecard = ({
   Name,
   className,
   widthClass,
   numberof,
   Description,
   iconpath,
   pagenav
}) => {
   return (
      <div className={`${className} w-1/4 border flex justify-center rounded-xl h-44 shadow-md ml-2 px-2 m-2`}>
         <div className="flex justify-center items-center w-1/4 text-center ">
            <span className="w-14 h-14 rounded-full iconbg  leading-10">
               <i className={`${iconpath} text-xl text-white w-12 h-12 mt-4 `}></i>
            </span>
         </div>
         <div className="w-full text-white  pl-2 mt-7">
            <div className="">
               <a href={pagenav}>
                  <div className="text-xl font-bold text-left ">{Name}</div>
                  <div className="text-2xl text-left pb-1 ">{numberof}</div>
               </a>
            </div>
               <span className="bar">
                  <span className={`${widthClass} innerbar`}></span>
               </span>
            <div>
               <h1 className="text-xs pt-3   pr-2" >{Description}</h1>
            </div>
         </div>
      </div>
   )
}   
export default  Titlecard; 