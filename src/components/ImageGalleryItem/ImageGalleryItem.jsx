import {
  ImageGalleryItemList,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgArr, onImgClick }) => {
  return imgArr.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <ImageGalleryItemList key={id}>
        <ImageGalleryItemImg
          onClick={onImgClick}
          src={webformatURL}
          alt={largeImageURL}
        />
      </ImageGalleryItemList>
    );
  });
};
