import SectionTitle from "./SectionTitle";


const About = () => {
    return (
        <div className="about-wrapper">
            <SectionTitle title={'About Me:'}/>
            <div className="about">
                <p className="about-paragraph">Hi, my name is Charlie. I enjoy creating websites with a focus on front-end development. My interest in programming began by recreating classic games utilising Godot, and has since branched out to a focus on web dev. <br /> I am currently enrolled in a Front-End Developer Bootcamp, and have enjoyed learning all of the most popular technologies and frameworks. I hope to continue my progress as a developer by learning more about Back-End Development with Node.js. <br /> Here are some of the technologies I have specialised in.</p>
                <ul className="tech-list">
                    <li className="tech-item">React</li>
                    <li className="tech-item">Node.js</li>
                    <li className="tech-item">CSS & BootStrap</li>
                    <li className="tech-item">GDScript</li>
                </ul>
            </div>
        </div>

    )
}

export default About;