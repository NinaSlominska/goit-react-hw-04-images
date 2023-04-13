import { Component } from 'react';
import { Backdrop, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalStyle>{this.props.children}</ModalStyle>
      </Backdrop>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
