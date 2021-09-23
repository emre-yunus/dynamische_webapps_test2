export function Section(props) {
    const {title, content} = props;
    return <div className="section">
        <h3>{title}</h3>
        {content}
    </div>
}