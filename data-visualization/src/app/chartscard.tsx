const ChartsCard = ({ chartcomp, heading }) => {
    return (
        <div className="w-1/2 h-80  px-4 mb-8">
            <div className="w-full    bg-white shadow-md rounded-lg ">
                <h3 className="text-lg font-semibold mb-4 text-center text-black">{heading}</h3>
                <div className="w-full ">
                {chartcomp}
                </div>
            </div>
        </div>
    )
}
export default ChartsCard