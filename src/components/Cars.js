import {KLEUREN} from "../data/data";

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
    return <div className="card big">
        <h4>{car.name}</h4>
        <Element name="merk" value={car.brand} />
        <Element name="type" value={car.type} />
        <Element name="kleur" value={car.color} />
    </div>
}

export function Cars(props) {
    const {title, cars} = props;
    return <div className="section">
        <h3>{title}</h3>
        {cars.map(car => <Car key={car.name} car={car} />)}
    </div>
}