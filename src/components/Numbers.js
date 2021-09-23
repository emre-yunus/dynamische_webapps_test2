import {Section} from "./Section";

export function Numbers(props) {
    const {title, numbers} = props;
    return <Section title={title}>
        {numbers.map((val, key) => <Number number={val} key={key} />)}
    </Section>
}

function Number(props) {
    const {number} = props;
    return <div className="card">{number}</div>
}
