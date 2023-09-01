import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Container } from './App.styled';
import { fetchImages } from 'components/serviceApi/fetchImage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, error: false });
        const imagesNew = await fetchImages(this.state.query, this.state.page);
        // console.log(imagesNew.length);

        if (imagesNew.length === 0) {
          return toast.info('Sorry image not found...', {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }

        this.setState(({ images }) => {
          return {
            images: [...images, ...imagesNew],
          };
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmitSearch = query => {
    console.log(query);

    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitSearch} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}

        {this.state.images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
        <ToastContainer />
      </Container>
    );
  }
}
