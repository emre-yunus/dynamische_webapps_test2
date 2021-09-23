import {KLEUREN} from "../data/data";
import {Section} from "./Section";
import {Card} from "./Card";

function Element(props) {
    const {name, value} = props;
    if (!value) return null;
    if (name==="kleur") return <ColoredElement name={name} value={value} />
    return <div>{name} : {value}</div>
}

function ColoredElement(props) {
    const {name, value} = props;
    const kleur = KLEUREN.find(k => k.nl===value);
    let style = { margin: "0.5em", backgroundColor: kleur.background };
    if (kleur.color) style.color = kleur.color;
    return <div style={style}>{name} : {value}</div>
}

function Car(props) {
    const {car} = props;
    return <Card title={car.name} extraClass="big">
        <Element name="merk" value={car.brand} />
        <Element name="type" value={car.type} />
        <Element name="kleur" value={car.color} />
    </Card>
}

export function Cars(props) {
    const {title, cars} = props;
    return <Section title={title}>
        {cars.map(car => <Car key={car.name} car={car} />)}
    </Section>
}