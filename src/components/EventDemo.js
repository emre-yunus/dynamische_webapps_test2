import {Section} from "./Section";

export function EventDemo() {
    return <Section title="Events">
        <div style={{backgroundColor: "pink"}}>
            <a href="http://www.thomasmore.be" onClick={(e) => {e.preventDefault();alert('link is clicked');}}>dit is een link met een href</a>
        </div>
    </Section>
}