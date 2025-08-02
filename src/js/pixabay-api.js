import axios from 'axios';
import iziToast from 'izitoast';

export function getImagesByQuery(query) {
  axios.defaults.baseURL = 'https://pixabay.com/api/';

  return axios
    .get('', {
      params: {
        key: '51584220-5b869931def1029bf82d58339',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
