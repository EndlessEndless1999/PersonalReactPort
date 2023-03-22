
const LinkButton = ({link, text}) => {
    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                <button>{text}</button>
            </a>
        </div>
    )
}

export default LinkButton;