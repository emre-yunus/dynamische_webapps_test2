export function Numbers(props) {
    const {title, numbers} = props;
    return <div className="section">
        <h3>{title}</h3>
        {numbers.map((val, key) => <Number number={val} key={key} />)}
    </div>
}

function Number(props) {
    const {number} = props;
    return <div className="card">{number}</div>
}
