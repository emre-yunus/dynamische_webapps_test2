import {useState} from "react";
import {Section} from "./Section";
import {Person} from "./Person";

export function PersonBrowser(props) {
    const { persons } = props;
    const [ shownPerson, setShownPerson ] = useState(persons[0]);

    return <Section title="Person browser">
        <Person person={shownPerson} />
    </Section>
}