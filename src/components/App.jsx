import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import React, { Component } from 'react';
import { AppStyleDetka } from './App.styled';

export class App extends Component {
  state = {
    imgRequestName: '',
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  DataHandleSubmit = imgRequestName => this.setState({ imgRequestName });

  render() {
    return (
      <AppStyleDetka>
        <Searchbar onSubmit={this.DataHandleSubmit} />
        <ImageGallery imgRequestName={this.state.imgRequestName}></ImageGallery>
      </AppStyleDetka>
    );
  }
}
