import {useState} from "react";

export function Section(props) {
    const {title, children} = props;
    const [ isOpen, setIsOpen ] = useState(true);

    return <div className="section">
        <h3>{title}</h3>
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
        </div>
        <div style={isOpen ? {display: "block"} : {display: "none"}}>
            {children}
        </div>
    </div>
}