const Complaint=({
    complaint,
    imagepath
})=>{
    return(
        <div className="w-11/13 my-2 h-24 mx-4 mt-2 ">
        <div className="flex fontstyle  border rounded-md shadow px-2">
            <div className="w-1/4 h-24 flex items-center ">
                <img src={imagepath} alt="pic" className="w-16 h-16 rounded-lg	" ></img>
            </div>
            <div className=" w-3/4 h-24 flex items-center overflow-hidden text-lg">
                {complaint}
            </div>
        </div>
        </div>
    )
    
}
export default Complaint