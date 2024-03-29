import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <div className="Modal__close-button" onClick={props.onCloseModal}>
          X
        </div>
        {props.children}
      </div>
    </div>,

    document.getElementById('modal')
  );
}

export default Modal;
