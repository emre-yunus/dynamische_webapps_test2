import {useState} from "react";
import {Section} from "./Section";

export function StateDemo(props) {
    const [isOn, setIsOn] = useState(false);
    return <Section title="state">
        <h3>de huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
    </Section>
}