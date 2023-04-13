import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'Api/fetch';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    status: 'idle',
    modalImg: '',
    showModal: false,
  };
  componentDidUpdate(prevPfrops, prevState) {
    const prevSearch = prevState.search;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const currentSearch = this.state.search;
    // if (prevSearch !== currentSearch) {
    //   this.setState({ page: 1 });
    //   this.setState({ images: [] });
    // }
    if (prevSearch !== currentSearch || prevPage !== currentPage) {
      this.setState({ status: 'pending' });
      fetchImages(currentSearch, currentPage).then(resp => {
        this.setState({
          images: [...this.state.images, ...resp.hits],
          status: 'resolved',
        });
      });
    }
  }
  handleSubmit = search => {
    if (this.state.search !== search) {
      this.setState({ page: 1, images: [], search });
    }
  };
  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  clickImg = modalImg => {
    this.setState({
      showModal: true,
      modalImg,
    });
  };
  render() {
    const { images, status, showModal, modalImg } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />

        {images.length !== 0 && (
          <ImageGallery clickImg={this.clickImg} images={images} />
        )}
        {status === 'pending' && <Loader />}
        {status !== 'pending' && status !== 'idle' && (
          <Button onClick={this.handleClick} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
