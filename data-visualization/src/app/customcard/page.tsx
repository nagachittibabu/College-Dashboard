const CustomCard = ({
    width,
    height,
    component,
    classes,
    border
}) => {
    return (
        <div className={`w-${width} h-${height} ${classes} `}>
            <div className={`w-full h-full bg-white  rounded-lg shadow-lg ${border} `}>
                {component}
            </div>
        </div>
    )

}
export default CustomCard