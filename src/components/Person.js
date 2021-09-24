import {Section} from "./Section";
import {Card} from "./Card";

export function Person(props) {
    const {person} = props;
    return <Card title={person.name}>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </Card>
}

export function Persons(props) {
    const {title, persons} = props;
    return <Section title={title}>
        {persons.map(p => <Person key={p.id} person={p} />)}
    </Section>
}