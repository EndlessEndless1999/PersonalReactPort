import VerticalLine from "./VerticalLine"
import TechIcon from "./TechIcon";

const LeftSide = () => {
    return (
        <div className="left-side-wrapper">
            <VerticalLine />
            <div className="tech-wrapper">
                <TechIcon icon="fa-brands fa-github fa-2x li-git li-tech" link="https://github.com/EndlessEndless1999"/>
                <div className="hl-t" />
                <TechIcon icon="fa-brands fa-linkedin fa-2x li-link li-tech" link="https://uk.linkedin.com/"/>
                <div className="hl-t" />
                <TechIcon icon="fa-brands fa-itch-io fa-2x li-itch li-tech" link="https://endlessendless1999.itch.io/"/>
                <div className="hl-t" />
                <TechIcon icon="fa-solid fa-envelope fa-2x li-git li-tech" link="https://github.com/EndlessEndless1999"/>
                <div className="hl-t" />
                <TechIcon icon="fa-solid fa-phone fa-2x li-link li-tech" link="https://uk.linkedin.com/"/>
            </div>
        </div>
    )
}

export default LeftSide;