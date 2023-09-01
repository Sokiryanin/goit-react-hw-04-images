import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Container } from './App.styled';
import { Loader } from 'components/Loader/Loader';
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

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: false });
        const imagesNew = await fetchImages(query, page);

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
        {this.state.loading && <Loader />}
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
