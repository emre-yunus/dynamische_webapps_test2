import {Section} from "./Section";
import {Card} from "./Card";
import React, {useState} from "react";

export function Houses(props) {
    const {title, houses} = props;
    return <Section title={title}>
        {houses.map(h => <House key={h.name} house={h} />)}
    </Section>
}

function House(props) {
    const {house} = props;
    const [status, setStatus] = useState(house.status);
    let button;
    if(status == "for sale") {
        button = <div>
            <button onClick={() => setStatus("option")}>in option</button>
            <button onClick={() => setStatus("sold")}>sold</button>
        </div>
    } else if(status == "option"){
        button = <div>
            <button onClick={() => setStatus("sold")}>sold</button>
        </div>
    }

    return <Card extraClass={status=="for sale" ? "forsale" : status=="sold" ? "sold" : "option"} title={house.name}>
        <Element name={"type"} value={house.type}/>
        <Element name={"address"} value={house.address}/>
        <Element name={"price"} value={house.price}/>
        <Element name={"status"} value={status}/>
        {(status == "sold") ? <></> : button}
    </Card>

}

function Element(props) {
    const {name, value} = props;
    return <div>{name} : {value}</div>
}