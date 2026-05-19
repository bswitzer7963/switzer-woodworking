export default function InfoView({curState}) {
    switch(curState.spec) {
        case 'about':
            return <About/>
        case 'create-info':
            return <AppCreationInfo/>
        case 'contact':
            return <Contact/>
        default:
            throw new Error("Unkown subview in InfoView", curState.spec);
    }
}           

function About() {
    return (
        <section id="about-section">
            <h1 className="info-header">
                About Us
            </h1>
            <h3 className="info-body">
                FILL
            </h3>
        </section>
    )
}

function AppCreationInfo() {
    return (
        <section id="creation-info-section">
            <h1 className="info-header">
                About this site...
            </h1>
            <h3 className="info-body">
                FILL
            </h3>
        </section>
    )
}

function Contact() {
    return (
        <section id="contact-section">
            <h1 className="info-header">
                Contact Now
            </h1>
            <h3 className="info-body">
                FILL
            </h3>
        </section>
    )
}