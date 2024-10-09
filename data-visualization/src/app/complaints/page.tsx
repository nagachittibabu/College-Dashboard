import Complaintsdata from "../../../public/complaints.json"
import Complaint from "../complaint"
const Complaints = () => {
    return (
        <div className="w-full h-350 shadow-md border bg-white rounded-md ">
            <div className=" w-full flex items-center h-16 text-left text-xl font-normal fontstyle border-b px-4">Complaints</div>
            <div className="w-full overflow-y-scroll scroll-hiddden  flex flex-col border-t h-3/4">
                {Complaintsdata.map(item => {
                    return (
                        <Complaint imagepath={item.imagepath} complaint={item.complaint} />
                    )
                })}
            </div>
        </div>
    )

}
export default Complaints