import { Gallery, LoaderBtn } from './ImageGallery.styled';
import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';

const API_KEY = '33377492-476d22b77d4b85ba3622e340f';

export class ImageGallery extends Component {
  state = {
    imgArr: null,
    modalImg: '',
    loader: false,
    page: 1,
  };
  //   componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgRequestName !== this.props.imgRequestName) {
      this.fetchImg();
    }
    if (prevState.page !== this.state.page) {
      this.setState({ loader: true });
      this.fetchImg();
    }
  }

  onImgClick = e => {
    this.setState({ modalImg: e.currentTarget.alt });
  };

  onLoaderButton = () => {
    this.setState(prevState => {
      console.log(prevState.page);
      return {
        page: prevState.page + 1,
      };
    });
  };

  async fetchImg() {
    const searchParams = new URLSearchParams({
      per_page: 12,
      page: this.state.page,
      key: API_KEY,
      q: this.props.imgRequestName,
    });
    try {
      const response = await fetch(`https://pixabay.com/api/?${searchParams}`);
      if (!response.ok) {
        throw new Error('Какая то беда 404');
      }
      this.setState({ loader: false });
      const imgs = await response.json();
      const filtered = imgs.hits.map(imgSet => {
        return {
          id: imgSet.id,
          webformatURL: imgSet.webformatURL,
          largeImageURL: imgSet.largeImageURL,
        };
      });

      return this.setState({ imgArr: filtered });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <>
        <Gallery>
          {this.state.imgArr && (
            <ImageGalleryItem
              onImgClick={this.onImgClick}
              imgArr={this.state.imgArr}
            />
          )}
        </Gallery>
        {this.state.loader && <Loader />}
        {this.state.imgArr && (
          <LoaderBtn onClick={this.onLoaderButton} type="button">
            Load more
          </LoaderBtn>
        )}
      </>
    );
  }
}
