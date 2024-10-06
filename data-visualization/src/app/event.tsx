const Eventcard = ({
    month,
    day,
    events,
    eventtype
}) => {
    return (
            <div className="w-full flex justify items-center  py-4 border-b pb-6 ">
                <div className="w-1/4 flex flex-col justify-center items-center h-14">
                    <div className="h-14 border border-orange-300 w-14 text-center text-white font-bold bg-orange-300 text-lg">{month}</div>
                    <div className="h-14 w-14 border border-orange-300 text-center font-extrabold text-orange-300 text-lg bg-white">{day}</div>
                </div>
                <div className="w-3/4 h-14 flex align-start text-xm">
                    <div>
                        <div className="text-left text-xl font-semibold">{eventtype}</div>
                        <div>{events}</div>
                    </div>
                </div>      
            </div>
    )
}
export default Eventcard