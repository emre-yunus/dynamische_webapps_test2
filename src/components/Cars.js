function Element(props) {
    const {name, value} = props;
    if (!value) return null;
    return <div>{name} : {value}</div>
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