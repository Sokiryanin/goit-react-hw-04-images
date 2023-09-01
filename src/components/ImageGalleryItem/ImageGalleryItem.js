import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tag }) => {
  return (
    <GalleryItem>
      <GalleryItemImg src={webformatURL} alt={tag} />
    </GalleryItem>
  );
};
