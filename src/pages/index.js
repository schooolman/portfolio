import React from 'react';
import Helmet from 'react-helmet';
// import ReactDOM from 'react-dom';

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Modal from '../components/Modal'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/uhc.png'
import thumb03 from '../assets/images/thumbs/eaton.png'
import thumb04 from '../assets/images/thumbs/ihg.png'
import thumb05 from '../assets/images/thumbs/se.svg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'HFMA', description: 'Healthcare Financial Management Association, a large scale Adobe Experience Manager project.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'UnitedHealthcare', description: 'UnitedHealthcare, health insurance company, site built on AEM 6.4'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Eaton', description: 'Eaton is a power management company providing energy efficient solutions.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'IHG', description: 'Intercontinental Hotel Group.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'SportsEngine', description: 'an NBC Sports Group company, is the leading provider of Sport Relationship Management (SRM) software.'},
];

const modal_objects = [
    {
        id: '1',
        company: 'HFMA',
        description: 'A complete redesign and replatforming of the Healthcare Financial Management Association website. In particular a lot of the work that I did was with helping to build out their community and forum functionality.',
        website: 'www.hfma.org'
    },
    {
        id: '2',
        company: 'UnitedHealthCare',
        description: 'This project was built on AEM 6.4, and was a large scale push towards accessibility for the company.',
        website: 'www.hfma.org'
    },
    {
        id: '3',
        company: 'Eaton',
        description: 'This was built on AEM 6.2, a lot of the work that I did for this was working on proofing the layouts and build for multiple languages including Left to Right languages.',
        website: 'www.eaton.com'
    },
    {
        id: '4',
        company: 'IHG',
        description: 'Worked on this project, built on AEM 6.3, was the roll out of their new site design and also a platform upgrade. Started with the military site, and will be rolled out to all of their different properties.',
        website: 'www.ihg.com'
    },
    {
        id: '5',
        company: 'SportsEngine',
        description: 'I helped to develop, and maintain the main marketing website for SportsEngine.com',
        website: 'www.sportsengine.com'
    }
]

class HomeIndex extends React.Component {
    
    state = { show: false };

    // custom modal open close
    showModal = () => {
        // Open modal
        this.setState({ show: true });
    }

    hideModal = () => {
        // Close Modal
        this.setState({ show: false });
    }

    render() {
        const siteTitle = "Jake Schoolmeesters Portfolio"
        const siteDescription = "Front-End Web Developer"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Thanks for stopping by </h2> 
                            <span>
                                <h2 className="header-emoji">😄</h2>
                            </span>
                        </header>
                        <p>Originally hailing from Minneapolis, Minnesota, in the Northeast neighborhood also known as the Arts District. I have had a bit of a meandering path to end up where I am now. After earning my undergrad in Technical Communications I then went Miami Ad School to study Art Direction. At some point I came to the realization I wanted to actually build the websites I had been designing. I went through Prime Academy, a web development boot camp, and have been working as a Front-End Developer since 2015.</p>
                        <button type="button" onClick={this.showModal} className="button learn-more">Learn More</button>

                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <h3>More about Jake:</h3>
                            <p>Need to fill out a more thoroug about me...</p>
                        </Modal>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} descriptions={modal_objects.map(({id, company, description,website}) => ({
                            id,
                            company,
                            description,
                            website
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Please feel free to send me an email, submit this quick form, or reach out to me on any social media platform of your choice!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form action="https://formspree.io/j.schoolmee@gmail.com" method="POST">


                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <input className="button learn-more" type="submit" value="Send"></input>
                                    </div>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Chicago, IL 60640<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">j.schoolmee@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex