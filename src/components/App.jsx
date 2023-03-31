import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    imgRequestName: '',
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  DataHandleSubmit = imgRequestName => this.setState({ imgRequestName });

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.DataHandleSubmit} />
        <h2>jgdfslijgflig</h2>
      </div>
    );
  }
}
