const CollectionCard = ({
    title,
    todaycount,
    weekcount,
    monthcount
}) => {
    return (
        <div  className="w-full h-48 bg-white shadow-md rounded-md ">
            <div className=" w-full flex items-center   h-16 text-left text-xl font-normal fontstyle border-b px-4">{title}</div>
            <div className="flex w-full h-1/2 justify-around items-center border-t	">
                <div>
                    <h1>Today</h1>
                    <span className="text-xl mr-1 font-bold">{todaycount}</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                </div>
                <div>
                    <h1>This Week</h1>
                    <span className="text-xl mr-1 font-bold">{weekcount}</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                </div>
                <div>
                    <h1>This Month</h1>
                    <span className="text-xl mr-1 font-bold">{monthcount}</span><i className="fa-solid fa-arrow-up text-green-800 font-bold text-xl"></i>
                </div>
            </div>
        </div> 

    )

}
export default CollectionCard