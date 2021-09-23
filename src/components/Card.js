export function Card(props) {
    const {title, children, extraClass} = props;
    const cardClass = extraClass===undefined ? "card" : "card " + extraClass;
    return <div className={cardClass} onClick={() => alert(title || (typeof(children)==="object" ? children[0].props.children : children))}>
        {title && <h4>{title}</h4>}
        {children}
    </div>
}