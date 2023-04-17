import { useEffect } from 'react';
import { Backdrop, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalStyle>{children}</ModalStyle>
    </Backdrop>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
