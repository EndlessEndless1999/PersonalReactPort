import SectionTitle from "./SectionTitle"

const Contact = () => {
    return (
        <div className="contact-wrapper" id="contact">
            <SectionTitle title={'Contact Me!:'}></SectionTitle>
            <div className="contact widget-border">
                <h2 className='contact-title' >I am actively looking for work and would love to hear from you.</h2>
                <div className="hl"></div>
                <ul className="tech-list">
                    <li className="contact-item">charliemitchellwork@gmail.com</li>
                    <li className="contact-item">07934572688</li>
                    <li className="contact-item">Brighton, East Sussex</li>
                </ul>
             </div>
        </div>
    )
}

export default Contact;