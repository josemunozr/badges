import React from 'react';

import Modal from './Modal';
import './styles/DeleteBadgeModal.css';

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpenModal} onCloseModal={props.onCloseModal}>
      <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p>You area about to delete this badge.</p>
        <div>
          <button className="btn btn-primary" onClick={props.onCloseModal}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={props.onDeleteBadge}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
