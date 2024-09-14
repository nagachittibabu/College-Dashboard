
const Titlecard = ({
   Name,
   Description,
   iconpath="fa-regular fa-user",
   Backgroundcolor
}) => {
   return (
      <div className={`${Backgroundcolor} w-1/6 border flex  rounded-xl  h-28 shadow-md`}>
         <div className="flex justify-center items-center w-1/4 text-center ">
            <span className="w-12 h-12 rounded-full bg-gray-400 leading-10">
               <i className={`${iconpath} text-white w-8 h-8 `}></i>
            </span>
         </div>
         <div className="w-3/4 text-black  pl-2 mt-6">
            <div className="">
               <div className="text-xs text-left">Total Students{Name}</div>
               <div className="text-xl text-left pb-1 ">450{Description}</div>
            </div>
            <div className="bg-black w-3/4 h-0.5">
            <hr />
            </div>
            <div>
               <h1 className="text-xs pt-1">45% increase in 28 ...</h1>
            </div>
            </div>
         </div>
   )
}
export default Titlecard