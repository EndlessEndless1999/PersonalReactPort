
const LinkButton = ({link, text, area, type}) => {
    return (
        <div className={area}>
            <a href={link} target="_blank" rel="noreferrer">
                <button className={type}>{text}</button>
            </a>
        </div>
    )
}

export default LinkButton;