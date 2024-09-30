const Titlecard = ({
   Name,
   numberof,
   Description,
   imgpath,
   pagenav
}) => {
   return (
      <div className="w-1/4 h-full ">
         <div className="p-5 border bg-white flex justify-between items-center rounded-xl h-36 shadow-md mx-3">
            <div className="w-full text-black space-y-2 ">
               <div className="text-lg  text-left text-gray-500	">{Name}</div>
               <div className="text-base font-bold text-left pb-1 ">{numberof}</div>
               <div className="text-xs text-left">{Description}</div>
            </div>
            <div className=" w-1/2  flex items-center">
               <img src={imgpath} className="text-xl text-black  w-3/4 h-16 mt-4"></img>
            </div>
         </div>
      </div>
   )
}
export default Titlecard; 