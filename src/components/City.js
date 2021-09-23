import {Section} from "./Section";
import {Card} from "./Card";

function City(props) {
    const {city} = props;
    return <Card>
        <div>{city.name}</div>
        <div>{city.numberOfPersons}</div>
    </Card>
}

export function Cities(props) {
    const {title, cities} = props;
    return <Section title={title}>
        {cities.map(c => <City key={c.name} city={c} />)}
    </Section>
}