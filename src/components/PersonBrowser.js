import {useState} from "react";
import {Section} from "./Section";
import {Person} from "./Person";

export function PersonBrowser(props) {
    const { persons } = props;
    const [ shownPerson, setShownPerson ] = useState(persons[0]);

    const searchPerson = (next) => {
        const shownKey = persons.indexOf(persons.find(p => p.id===shownPerson.id));
        if (next) {
            if (shownKey < persons.length - 1) return persons[shownKey + 1];
            return persons[0];
        } else {
            if (shownKey > 0) return persons[shownKey - 1];
            return persons[persons.length - 1];
        }
    }

    return <Section title="Person browser">
        <div className="personWithButtons">
            <button onClick={() => setShownPerson(searchPerson(false))}>&lt;</button>
            <Person person={shownPerson} />
            <button onClick={() => setShownPerson(searchPerson(true))}>&gt;</button>
        </div>
    </Section>
}