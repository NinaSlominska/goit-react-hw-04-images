import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';
export function ImageGallery({ images, clickImg }) {
  return (
    <div>
      <List>
        {images.map(img => (
          <ImageGalleryItem
            key={img.id}
            id={img.id}
            urlItem={img.webformatURL}
            onClick={() => clickImg(img.largeImageURL)}
          />
        ))}
      </List>
    </div>
  );
}
ImageGallery.propTypes = {
  clickImg: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
