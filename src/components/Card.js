export function Card(props) {
    const {title, children, extraClass} = props;
    const cardClass = extraClass===undefined ? "card" : "card " + extraClass;
    return <div className={cardClass} onClick={() => alert(title || children)}>
        {title && <h4>{title}</h4>}
        {children}
    </div>
}