export function Section(props) {
    const {title, children} = props;
    return <div className="section">
        <h3>{title}</h3>
        {children}
    </div>
}