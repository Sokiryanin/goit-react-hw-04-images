import { ModalImage } from 'components/Modal/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import { useState } from 'react';

function ImageGalleryItem({ webformatURL, largeImageURL, tag }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GalleryItem>
      <GalleryItemImg src={webformatURL} alt={tag} onClick={toggleModal} />
      {isOpen && (
        <ModalImage
          url={largeImageURL}
          name={tag}
          modalOpen={isOpen}
          modalClose={toggleModal}
        />
      )}
    </GalleryItem>
  );
}

export default ImageGalleryItem;
