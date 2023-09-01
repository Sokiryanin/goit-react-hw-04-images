import { ModalImage } from 'components/Modal/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tag } = this.props;
    return (
      <GalleryItem>
        <GalleryItemImg
          src={webformatURL}
          alt={tag}
          onClick={this.toggleModal}
        />
        {this.state.isOpen && (
          <ModalImage
            url={largeImageURL}
            name={tag}
            modalOpen={this.state.isOpen}
            modalClose={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
