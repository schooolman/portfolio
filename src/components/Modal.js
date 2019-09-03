import React from 'react';
import ReactDOM from 'react-dom'

const Modal = ({ handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose} className="button">Close</button>
            </section>
        </div>
    )
}

export default Modal;