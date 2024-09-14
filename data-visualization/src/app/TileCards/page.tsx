
const Titlecard = ({
   Name,
   count,
   Description,
   iconpath,
   Backgroundcolor
}) => {
   return (
      <div className={`${Backgroundcolor} w-1/4 border flex  rounded-xl h-40 shadow-md mx-4`}>
         <div className="flex justify-center items-center w-1/4 text-center ">
            <span className="w-16 h-16 rounded-full bg-neutral-500  leading-10">
               <i className={`${iconpath} text-xl text-white w-12 h-12 mt-5`}></i>
            </span>
         </div>
         <div className="w-3/4 text-white  pl-2 mt-6">
            <div className="">
               <div className="text-lg text-left tracking-wide	">{Name}</div>
               <div className="text-2xl text-left pb-1 ">{count}</div>
            </div>
            <div className="bg-black w-3/4 h-0.5">
               <hr />
            </div>
            <div>
               <h1 className="text-lg pt-1">{Description}</h1>
            </div>
         </div>
      </div>
   )
}
export default Titlecard;  