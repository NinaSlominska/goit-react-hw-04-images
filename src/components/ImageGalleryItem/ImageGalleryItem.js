import { Img, Li } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export function ImageGalleryItem({ id, urlItem, onClick }) {
  return (
    <Li id={id} onClick={onClick}>
      <Img src={urlItem} alt="" />
    </Li>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  urlItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
