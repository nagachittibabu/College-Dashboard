export default function Header() {
    return (
        <div>
            <div className="w-full  flex items-center justify-between pt-1 h-14 shadow-md">
                <div className="rounded-full ml-2">
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/2a/Acharya_Nagarjuna_University_crest.png" alt="anu logo" className="w-8 h-8  rounded-full " />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">ACHARYA  NAGARJUNA  UNIVERSITY</h1>
                </div>
                <div className="flex">
                    <a href="" className="flex items-center mr-10"><i className="fa-sharp fa-regular fa-bell text-xl font-bold"></i></a>
                    <a href="" className="flex items-center mr-10" ><i className="fa-sharp fa-regular fa-envelope text-xl font-bold"></i>
                    </a>
                    <img src="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6864.jpg" alt="girl" className="w-8 h-8 rounded-full mr-1.5 inline-block"></img>
                    <h1 className=" text-base font-semibold flex items-center mr-4 text-black">Savya Jajimoggala</h1>
                </div>
            </div>
        </div>
    )
}