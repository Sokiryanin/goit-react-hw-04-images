import { useEffect, useState } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Container } from './App.styled';
import { Loader } from 'components/Loader/Loader';
import { fetchImages } from 'components/serviceApi/fetchImage';

import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      toast('What we will search? 🥸');
      return;
    }

    async function getImages() {
      setLoading(true);

      const searchRequest = await fetchImages(query, page);
      try {
        if (searchRequest.length === 0) {
          toast.error('Sorry image not found... ');
        }

        setImages(prevStateImages => [...prevStateImages, ...searchRequest]);
      } catch (error) {
        setLoading(false);
        toast.error('Sometheng went wrong!');
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSubmitSearch = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmitSearch} />
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
}

export default App;
