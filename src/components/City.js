import {Section} from "./Section";

function City(props) {
    const {city} = props;
    return <div className="card">
        <div>{city.name}</div>
        <div>{city.numberOfPersons}</div>
    </div>
}

export function Cities(props) {
    const {title, cities} = props;
    return <Section title={title}>
        {cities.map(c => <City key={c.name} city={c} />)}
    </Section>
}