import ReactModal from 'react-modal';
import React, { Component } from 'react';

ReactModal.setAppElement('#root');

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { url, name } = this.props;
    const closeModal = this.toggleModal;

    return (
      <>
        {this.state.isOpen && (
          <ReactModal
            isOpen={this.state.isOpen}
            onRequestClose={() => {
              closeModal();
            }}
          >
            <img src={url} alt={name} />
          </ReactModal>
        )}
      </>
    );
  }
}
