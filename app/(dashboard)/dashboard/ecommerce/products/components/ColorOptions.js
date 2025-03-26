const ColorOptions = ({ colors }) => {
    return (
        <div>
            {colors?.map((color, index) => (
                <span key={index} className={"icon-shape icon-xxs bg-" + color + " rounded-circle border border-2 border-white shadow"}></span>

            ))}
        </div>
    )
}

export default ColorOptions