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

import scrnShot1 from '../assets/images/portfolio-hfmaSCRN.png'
import scrnShot2 from '../assets/images/portfolio-uhcSCRN.png'
import scrnShot3 from '../assets/images/portfolio-eatonSCRN.png'
import scrnShot4 from '../assets/images/portfolio-ihgSCRN.png'
import scrnShot5 from '../assets/images/portfolio-seSCRN.png'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'HFMA', description: 'Healthcare Financial Management Association, a large scale Adobe Experience Manager project.' },
    { id: '2', source: full02, thumbnail: thumb02, caption: 'UnitedHealthcare', description: 'UnitedHealthcare, health insurance company, site built on AEM 6.4' },
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Eaton', description: 'Eaton is a power management company providing energy efficient solutions.' },
    { id: '4', source: full04, thumbnail: thumb04, caption: 'IHG', description: 'Intercontinental Hotel Group and their affiliate sites' },
    { id: '5', source: full05, thumbnail: thumb05, caption: 'SportsEngine', description: 'an NBC Sports Group company, is the leading provider of Sport Relationship Management (SRM) software.' },
];

const modal_objects = [
    {
        id: '1',
        company: 'HFMA',
        description: 'Built on AEM 6.4 this was a large scale re-branding of Healthcare Financial Management Association. We brought them into the future for their customers to create a site that would not only provide the information and resources they had come to expect, but also create a place for their members to interact with the company as well as each other. We integrated Adobe communities into their site, along with messaging, and event planning as well. A lot of my part on this project was building out the custom integration of Adobe communities, messaging and forums.',
        website: 'www.hfma.org',
        screenShot: scrnShot1
    },
    {
        id: '2',
        company: 'UnitedHealthCare',
        description: 'The most recent iteration of the UHC website was a slight redesign, but the main focus was refactoring their code base and a massive push for accessibility. A lot of my work on this project has been around researching and implementing accessibility standards site wide. This was an amazing opportunity to do a deep dive into accessibility best practices and why they are so important.',
        website: 'www.uhc.org',
        screenShot: scrnShot2
    },
    {
        id: '3',
        company: 'Eaton',
        description: 'Built on AEM 6.2 a lot of work that I participated with in this rather large scale project was around building layouts to accommodate multiple languages, including left to right languages. I also did some work and was involved with the site search and sorting of products.',
        website: 'www.eaton.com',
        screenShot: scrnShot3
    },
    {
        id: '4',
        company: 'IHG',
        description: 'Working on the International Hotel Groups platform migration as well as it\'s site redesign was a pretty exciting project.Building out custom components for their new look and feel, like a custom date picker, and a custom media slider was a great learning experience for me.',
        website: 'www.ihg.com',
        screenShot: scrnShot4
    },
    {
        id: '5',
        company: 'SportsEngine',
        description: 'I helped to develop, and maintain the main marketing website for SportsEngine.comOne of my big responsibilities while working at SportsEngine was to help maintain, update, and develop new pages and components for their corporate marketing sites. I worked with the marketing team to build out new pages, as well as develop emails and press releases. We maintained this site using Jekyll, a static site builder.',
        website: 'www.sportsengine.com',
        screenShot: scrnShot5
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
                        <p>Currently living life in Chicago and loving every second of it. Spend a lot of my free time biking, (all winter long) playing video games, building custom mechanical keyboards, and planning my next snowboarding trip. Oh, I nearly forgot, I love to eat all of the food, and I'm not afraid of a tasting menu. Click below if you want to find a little more about my story and life journey.</p>
                        <button type="button" onClick={this.showModal} className="button learn-more">Learn More</button>

                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <h3>More about Jake:</h3>
                            <p>Originally hailing from Minneapolis, Minnesota, I have now found my way to the amazing city of Chicago. I'm currently working as a Front End Web Developer, and while I don't have what some would call a typical career path, I feel as though I have had one that is unique to me, and speaks to who I am. I started off completing my undergraduate degree in Technical Communications at Metropolitan State University in St Paul, MN.</p>

                            <p>After, I had a burning desire to break into the advertising world and since I loved art and design, I decided that Art Direction would be my next stop. I went to Miami Ad School for their Art Direction program, and this is when I realized that while I enjoyed designing digital experiences I wanted to learn how to build them.</p>

                            <p>This brings us to my time at Prime Academy, a full stack development bootcamp started adjacent to The Nerdery. Over the next 20 weeks I learned everything I could about the MEAN stack, from smaller personal projects, to a bigger team project for a pro-bono "client". The program was a fantastic experience for me, and it launched me into the next phase of my life and career. With a job offer in hand a week before graduating the program I have continued to learn and grow every day since. My motto has always been to learn one new thing everyday, and I stick by it.</p>
                        </Modal>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} descriptions={modal_objects.map(({ id, company, description, website, screenShot }) => ({
                            id,
                            company,
                            description,
                            website,
                            screenShot
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