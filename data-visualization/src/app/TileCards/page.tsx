
const Titlecard = ({
   Name,
   numberof,
   Description,
   imgpath,
   pagenav,
   percent
}) => {
   return (
      <div className="w-1/4 h-full titlecard">
         <a href={pagenav}>
         <div className="titlecontent p-5 border bg-white flex justify-between items-center rounded-xl h-36 shadow-md mx-3">
            <div className="w-3/4 text-black space-y-2 ">
               <div className="text-lg  text-left text-gray-500	">{Name}</div>
               <div className="text-base font-bold text-left pb-1 text-gray-600	">{numberof}</div>
               <div className="flex items-center">
               <div className="text-xm text-left text-green-600 pr-1 percent">{percent}% </div>
               <span className=" text-lg text-gray-800	">{Description}</span>
               </div>
            </div>
            <div className=" w-1/3  flex items-center">
               <img src={imgpath} className="text-xl text-black  w-3/4 h-16 mt-4"></img>
            </div>
         </div>
         </a>
      </div>
   )
}
export default Titlecard; 