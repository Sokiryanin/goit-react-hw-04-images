import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Container } from './App.styled';
import { fetchImages } from 'components/serviceApi/fetchImage';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const imagesNew = await fetchImages(this.state.query, this.state.page);
        this.setState(({ images }) => {
          return {
            images: [...images, ...imagesNew],
          };
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
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
        <ImageGallery />
        <Button onClick={this.handleLoadMore} />
      </Container>
    );
  }
}
