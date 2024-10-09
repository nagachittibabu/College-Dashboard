export default function Departmentcard({ imagepath, name, hod, admissions }) {
    return (
        <div className="w-1/4 ">
            <div className=" m-2 space-y-2 border rounded-md shadow-lg bg-white">
                <div className="">
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg" alt="pic" width="w-full" height="h-96" />
                </div>
                <div className="space-y-2 py-4">
                    <div className="px-3">
                        <h1 className=" font-semibold text-xl">{name}SyntaxN</h1>
                    </div>
                    <div className="space-y-1 text-lg">
                        <h1 ><i className="fa-regular fa-user px-3"></i>Head:{hod} Venkatesh</h1>
                        <h1><i className="fa-solid fa-graduation-cap px-3"></i>Students:{admissions} 100+</h1>
                    </div>
                    <div className="px-3 py-2">
                        <button className="border p-2 rounded-md text-white bg-orange-600">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}