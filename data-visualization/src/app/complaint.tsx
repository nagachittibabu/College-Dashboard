const Complaint=({
    complaint,
    imagepath
})=>{
    return(
        <div className="flex w-full px-4 fontstyle">
            <div className="w-1/4 h-24 flex items-center ">
                <img src={"/images/photo_0.jpg"} alt="pic" className="w-16 h-16 rounded-lg	" ></img>
            </div>
            <div className=" w-3/4 h-24 flex items-center overflow-hidden">
                {complaint}The ceiling fans are not working properly
            </div>
        </div>
    )
    
}
export default Complaint