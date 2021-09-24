import {useState} from "react";
import {Section} from "./Section";
import {Numbers} from "./Numbers";

function OnOffDemo() {
    const [isOn, setIsOn] = useState(false);

    return <>
        <h3>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsOn(true)}>verander de state in true</button>
        <button onClick={() => setIsOn(false)}>verander de state in false</button>
        <button onClick={() => setIsOn(!isOn)}>toggle state</button>
        <p>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</p>
    </>
}

export function StateDemo() {
    const [counter, setCounter] = useState(0);
    const [favoriteNumbers, setFavoriteNumbers] = useState([]);

    const isCounterFavorite = favoriteNumbers.includes(counter);
    const toggleFavoriteButtonText = !isCounterFavorite ? counter + " is ook een favoriet" : counter + " is niet langer een favoriet";
    const toggleFavoriteNumber = () => {
        if (isCounterFavorite) {
            setFavoriteNumbers(favoriteNumbers.filter(n => n!==counter));
        } else {
            setFavoriteNumbers([...favoriteNumbers, counter]);
        }
    }

    return <Section title="state">
        <OnOffDemo />
        <hr />
        <h3>de huidige waarde van counter is {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>verhoog</button>
        <button onClick={() => setCounter(counter - 1)}>verlaag</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <p>de huidige waarde van counter is {counter}</p>
        <hr />
        <Numbers title="Mijn favorieten" numbers={favoriteNumbers} />
        <button onClick={() => toggleFavoriteNumber()}>{toggleFavoriteButtonText}</button>
    </Section>
}