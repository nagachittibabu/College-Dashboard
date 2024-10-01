const Eventcard = ({
    month,
    day,
    events,
    eventtype
}) => {
    return (
            <div className="w-full flex justify items-center  py-4">
                <div className="w-1/4 flex flex-col justify-center items-center h-14">
                    <div className="h-14 border border-orange-300 w-14 text-center text-white font-bold bg-orange-300 text-lg">{month}jan</div>
                    <div className="h-14 w-14 border border-orange-300 text-center font-extrabold text-orange-300 text-lg bg-white">{day}12</div>
                </div>
                <div className="w-3/4 h-14 flex items-center text-lg">
                    <div>
                        <div>{events}this is warning event</div>
                    </div>
                </div>

            </div>
    )
}
export default Eventcard