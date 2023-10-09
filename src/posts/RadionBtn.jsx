import React from 'react'

const RadionBtn = () => {
    const radioOptions = [
        { label: "All", value: "all" },
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        // Add more options as needed
    ];

    const allOption = radioOptions.find(option => option.value === "all");
    const otherOptions = radioOptions.filter(option => option.value !== "all");
    return (
        <div>
            <div className="top-div">
                <label>
                    <input type="radio" name="radioGroup" value={allOption.value} />
                    {allOption.label}
                </label>
            </div>
            <div className="bottom-div">
                {otherOptions.map(option => (
                    <label key={option.value}>
                        <input type="radio" name="radioGroup" value={option.value} />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default RadionBtn
