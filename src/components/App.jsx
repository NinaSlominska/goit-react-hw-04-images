import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'Api/fetch';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    search: '',
    images: [],
  };
  componentDidUpdate(prevPfrops, prevState) {
    const prevSearch = prevState.search;

    const currentSearch = this.state.search;
    if (prevSearch !== currentSearch) {
      fetchImages(currentSearch).then(resp => {
        console.log(resp.hits);
        this.setState({ images: resp.hits });
      });
    }
  }
  handleSubmit = search => {
    this.setState({ search });
  };
  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length && <ImageGallery images={images} />}
      </div>
    );
  }
}
