import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'Api/fetch';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [modalImg, setModalImg] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (search) {
      setStatus('pending');
      fetchImages(search, page).then(resp => {
        setStatus('resolved');
        setImages(prevState => [...prevState, ...resp.hits]);
      });
    }
  }, [page, search]);

  const handleSubmit = currentSearch => {
    if (search !== currentSearch) {
      setPage(1);
      setImages([]);
      setSearch(currentSearch);
    }
  };
  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const clickImg = currentModalImg => {
    setShowModal(true);
    setModalImg(currentModalImg);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />

      {images.length !== 0 && (
        <ImageGallery clickImg={clickImg} images={images} />
      )}
      {status === 'pending' && <Loader />}
      {status !== 'pending' && status !== 'idle' && (
        <Button onClick={handleClick} />
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImg} alt="" />
        </Modal>
      )}
    </div>
  );
};
