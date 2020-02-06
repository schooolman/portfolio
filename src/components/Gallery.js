import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import Carousel, { Modal, ModalGateway } from "react-images";
import Modal from '../components/Modal'

class Gallery extends Component {
    state = { showModal: false };

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            selectedIndex: 0,
        };

        this.toggleLightbox = this.toggleLightbox.bind(this);
        this.setDescription = this.toggleLightbox.bind(this);
    }
    toggleLightbox(selectedIndex) {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex
        }));
    }

    setDescription = () => {
        this.setState({
            description: 'description',
            currentCompany: 'company',
            screenShot: 'screenshot'
        });
    }

    showModal = () => {
        this.setState({ showModal: true });
    };

    hideModal = () => {
        this.setState({ showModal: false });
    };

    renderModalDescription(descriptions, i) {
        this.setState({ description: descriptions[i].description })
        this.setState({ currentCompany: descriptions[i].company })
        this.setState({ screenShot: descriptions[i].screenShot })
    }

    renderGallery(images, descriptions) {

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article
                    className="6u 12u$(xsmall) work-item" key={i}
                    onClick={e => {
                        e.preventDefault();
                        this.showModal();
                        this.renderModalDescription(descriptions, i);
                    }}>
                    <a
                        className="image fit thumb"
                        href="#"
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render() {
        const { images } = this.props;
        const { selectedIndex, lightboxIsOpen } = this.state;
        const { descriptions } = this.props;
        let currentDescription = this.state.description;
        let companyName = this.state.currentCompany;
        let screenShot = this.state.screenShot;
        console.log(screenShot)


        return (
            <div>
                {this.renderGallery(images, descriptions)}
                {/* {this.renderModal(descriptions)} */}
                <Modal show={this.state.showModal} handleClose={this.hideModal}>
                    <h1>Description: {companyName}</h1>
                    <div className="modal-image-container">
                        <img className="modal-image" src={screenShot} />
                    </div>
                    <p>{currentDescription}</p>

                </Modal>
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array,
    descriptions: PropTypes.array
};

export default Gallery;