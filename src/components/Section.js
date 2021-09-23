export function Section(props) {
    const {title, children} = props;
    return <div className="section">
        <div>
            <button onClick={() => alert("hallo")}>klik hier</button>
        </div>
        <h3>{title}</h3>
        {children}
    </div>
}