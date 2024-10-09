import eventsdata from "../../../public/events.json"
import Eventcard from "../event"
const Events = () => {
    return (
        <div className="w-full h-full shadow-md border h-350  mr-24 bg-white rounded-md flex flex-col">
            <div className=" w-full flex items-center h-16 text-left text-xl font-normal fontstyle border-b px-4">Upcoming events</div>
            <div className="w-full overflow-y-scroll scroll-hiddden flex justify-start flex-wrap border-t h-3/4">
                {eventsdata.map(item => {
                    return (
                        <Eventcard month={item.month} day={item.day} events={item.events} eventtype={item.eventtype} />
                    )
                })}

            </div>
        </div>
    )

}
export default Events