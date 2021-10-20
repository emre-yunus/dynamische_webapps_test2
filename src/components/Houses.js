import {Section} from "./Section";
import {Card} from "./Card";
import React from "react";

export function Houses(props) {
    const {title, houses} = props;
    return <Section title={title}>
        {houses.map(h => <House key={h.name} house={h} />)}
    </Section>
}

function House(props) {
    const {house} = props;
    return <Card extraClass={house.status=="for sale" ? "forsale" : house.status=="sold" ? "sold" : "option"} title={house.name}>
        <Element name={"type"} value={house.type}/>
        <Element name={"address"} value={house.address}/>
        <Element name={"price"} value={house.price}/>
        <Element name={"status"} value={house.status}/>
        <Buttons status={house.status}/>
    </Card>

}

function Element(props) {
    const {name, value} = props;
    return <div>{name} : {value}</div>
}

function Buttons(props) {
    const {status} = props;
    if (status=="for sale") return (<div>
        <button>in option</button>
        <button>sold</button>
    </div>)

    if (status=="option") return (<div>
        <button>sold</button>
    </div>)
}