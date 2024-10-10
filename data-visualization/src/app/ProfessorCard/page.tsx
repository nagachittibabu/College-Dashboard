const Professorcard = ({
    Name,
    Role,
    Address,
    Mobile,
    Photo
 }) => {
    return (
        <div className="flex">
            <div className="w-96 border flex justify-center rounded-xl h-48 shadow-md">
                <div className=" flex p-5">
                    <div className="flex justify-center items-center w-2/5 px-3">
                        <img src={`${Photo}`} alt="Professor" className="h-1/2 rounded-full"/>
                    </div>
                    <div className="w-full text-black  px-2">
                        <h5>{Name}</h5>
                        <small>{Role}</small>
                        <p className="my-1">{Address}</p>
                        <p><i className="fa fa-phone pr-2"> </i>{Mobile}</p>
                    </div>
                </div>
            </div>
        </div>
    )
 }   
 export default  Professorcard; 