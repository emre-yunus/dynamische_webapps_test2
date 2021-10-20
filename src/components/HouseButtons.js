import React from "react";

export function HouseButtons(props) {
    const {status, setStatus} = props;

    if (status === "for sale") {return (
        <div>
            <button onClick={(e) => {e.stopPropagation();setStatus("option")}}>in option</button>
            <button onClick={(e) => {e.stopPropagation();setStatus("sold")}}>sold</button>
        </div>
    )} else if (status === "option") return (
        <div>
            <button onClick={(e) => {e.stopPropagation();setStatus("sold")}}>sold</button>
        </div>
    )

    return <></>
}