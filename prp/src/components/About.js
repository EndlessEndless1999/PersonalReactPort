import SectionTitle from "./SectionTitle";
import picture from "../images/338174335_241058938477256_5328812125130735667_n.jpg"


const About = () => {
    return (
        <div className="about-wrapper" id="about">
            <SectionTitle title={'About Me:'}/>
            <div className="about widget-border">
            <img className="profilePic" src={picture} alt='hi'/>
                <p className="about-paragraph ">Hi, my name is <mark>Charlie</mark>. I enjoy creating websites with a focus on front-end development. My interest in programming began by recreating classic games utilising Godot, and has since branched out to a focus on <mark>web development</mark>.</p> 
                <div className="hl" />
                <p className="about-paragraph ">I am currently enrolled in a <mark>Front-End Developer Bootcamp</mark>, and have enjoyed learning all of the most popular technologies and frameworks. I hope to continue my progress as a developer by learning more about <mark>Back-End Development</mark> with Node.js. <br /> Here are some of the technologies I have specialised in.</p>
                <div className="hl" />
                <ul className="tech-list">
                    <li className="tech-item"><mark>React</mark></li>
                    <li className="tech-item"><mark>Node.js</mark></li>
                    <li className="tech-item"><mark>CSS & BootStrap</mark></li>
                    <li className="tech-item"><mark>GDScript</mark></li>
                </ul>
            </div>
        </div>

    )
}

export default About;