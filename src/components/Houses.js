import {Section} from "./Section";
import {Card} from "./Card";
import React, {useState} from "react";
import {HouseButtons} from "./HouseButtons";

export function Houses(props) {
    const {title, houses} = props;
    return <Section title={title}>
        {houses.map(h => <House key={h.name} house={h} />)}
    </Section>
}

function House(props) {
    const {house} = props;
    const [status, setStatus] = useState(house.status);

    return <Card extraClass={status==="for sale" ? "forsale" : status==="sold" ? "sold" : "option"} title={house.name}>
        <Element name={"type"} value={house.type}/>
        <Element name={"address"} value={house.address}/>
        <Element name={"price"} value={house.price}/>
        <Element name={"status"} value={status}/>
        <HouseButtons status={status} setStatus={setStatus}/>
    </Card>

}

function Element(props) {
    const {name, value} = props;
    return <div>{name} : {value}</div>
}