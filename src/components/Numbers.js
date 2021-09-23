import {Section} from "./Section";
import {Card} from "./Card";

export function Numbers(props) {
    const {title, numbers} = props;
    return <Section title={title}>
        {numbers.map((val, key) => <Card key={key}>{val}</Card>)}
    </Section>
}

