import {useState} from "react";
import {Section} from "./Section";

export function StateDemo() {
    const [isOn, setIsOn] = useState(false);
    return <Section title="state">
        <h3>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsOn(true)}>verander de state in true</button>
        <button onClick={() => setIsOn(false)}>verander de state in false</button>
        <button onClick={() => setIsOn(!isOn)}>toggle state</button>
        <p>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</p>
    </Section>
}