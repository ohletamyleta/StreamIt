import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import './Modal.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className='modal-body'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='modal-main delete-modal'>
        <div className='header'>Delete Stream</div>
        <div className='modal-text'>
          Are you sure you want to delete this Stream?
        </div>
        <div className='modal-buttons'>
          <button className='deleteBtn'>Delete</button>
          <button className='editBtn'>Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
