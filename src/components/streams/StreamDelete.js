import React from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  renderActions() {
    return (
      <div className='modal-buttons'>
        <button className='deleteBtn'>Delete</button>
        <button className='editBtn'>Cancel</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title='Delete Stream'
          content='Are you sure you want to delete this Stream?'
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

export default StreamDelete;
