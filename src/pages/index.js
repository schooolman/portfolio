import React from 'react';
import Helmet from 'react-helmet';
// import ReactDOM from 'react-dom';

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Modal from '../components/Modal'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'HFMA', description: 'Healthcare Financial Management Association, a large scale Adobe Experience Manager project.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

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
                            <p>Need to fill out a more thorough about me...</p>
                        </Modal>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <p>I will be updating this with work as I have time. Need to figure out the best structure for this.</p>

                        <p>Most of my work in the past year has been within the Adobe Experience Manager(AEM) CMS. Working with many of the standard web technologies that are often associated with AEM, Javascript, HTML, CSS being the very basic pieces.</p>

                        <p>I have worked at least some with most of the main front end frameworks, and regularly use and configure front-end build tools like grunt, gulp, webpack. Sass makes everyones lives better.</p>

                        <p>I will be updating this section very soon to have the most recent work I've done.</p>

{/* 
                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} /> */}

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
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
                                        <ul className="actions">
                                            <li><input type="submit" value="Send Message" /></li>
                                        </ul>
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