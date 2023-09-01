import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '32420905-2cf8166f8b67cbc6d543c739c';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo`
  );

  return response.data.hits;
};
