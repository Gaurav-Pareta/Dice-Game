import { useState } from "react";
import "./ChooseNumber.css"

const ChooseNumber = ({number, setNumber}) => {

    const numbers = [1, 2, 3, 4, 5, 6];
    return (
        <div className="outer">
            <div className="boxes" >
                {numbers.map((value, key) => (
                    <div className={`box ${number == value ? "selected" : ""}`} key={key} onClick={() => { setNumber(value) }}>{value}</div>
                ))}
            </div>
            <p>Select Number</p>
        </div>

    )
}

export default ChooseNumber
