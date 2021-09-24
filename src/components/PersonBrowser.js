import {useState} from "react";
import {Person, Persons} from "./Person";

export function PersonBrowser(props) {
    const { persons } = props;
    const [ shownPerson, setShownPerson ] = useState(persons[0]);
    const [ favoritePersons, setFavoritePersons ] = useState([]);

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

    const isPersonFavorite = favoritePersons.includes(shownPerson);
    const toggleFavoriteButtonText = !isPersonFavorite ? "deze persoon is ook een favoriet" : "deze persoon is niet langer een favoriet";
    const toggleFavoritePerson = () => {
        if (!isPersonFavorite) {
            setFavoritePersons([...favoritePersons, shownPerson]);
        } else {
            setFavoritePersons(favoritePersons.filter((p) => p.id!==shownPerson.id));
        }
    };

    return <>
        <Persons persons={favoritePersons} title="Mijn favoriete personen" />
        <hr />
        <div className="personWithButtons">
            <button onClick={() => setShownPerson(searchPerson(false))}>&lt;</button>
            <Person person={shownPerson} />
            <button onClick={() => setShownPerson(searchPerson(true))}>&gt;</button>
        </div>
        <button onClick={() => toggleFavoritePerson()}>{toggleFavoriteButtonText}</button>
    </>
}