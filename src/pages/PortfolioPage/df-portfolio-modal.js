import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.scss';
import PropTypes from 'prop-types';

const DfPortfolioModal = (props, context) => {

    const { theme: { colorAlternate } } = context;

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="open-modal-button" onClick={onClick}>
            <p style={{ color: colorAlternate }}>
                Learn More
            </p>
            <Modal
                appElement={document.getElementById('portfolioItem')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <div className="modal-container">
                    <button className="modal-close-button" onClick={onClick}>X</button>
                    <div className="modal-title-container">
                        <h2>Dollface Permanent Makeup</h2>
                    </div>
                    <div className="modal-background-story">
                        <h3>Clean & Minimalist. </h3> {/* what did the client want */}
                        <p>Eyebrows! Eyebrows for many, is a neglected portion of an individual's face that has an incredible impact on the overall look of a person.
                        I wanted to make a user experience that was simple yet pleasing to the eyes.
                        Having lots of negative white space allows for a clean yet professional presentation.
                        In combination with two distinct fonts to make clear of what text describes what, created a website that allowed information to be received in a crystal clear manner.
                    </p>
                    </div>
                    <div className="modal-sample-image">
                        <img src={require("../../images/dollface-home.PNG")} />
                    </div>
                    <div className="design-inspiration-text">

                    </div>
                    <div className="challenges-text">

                    </div>
                    <div className="my-role-text">

                    </div>
                </div>
            </Modal>
        </button>
    )
}

DfPortfolioModal.contextTypes = {
    theme: PropTypes.any
};


export default DfPortfolioModal;