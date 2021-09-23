export function Card(props) {
    const {title, children, extraClass} = props;
    const cardClass = ("card " + extraClass).trim();
    return <div className={cardClass}>
        {title && <h4>{title}</h4>}
        {children}
    </div>
}