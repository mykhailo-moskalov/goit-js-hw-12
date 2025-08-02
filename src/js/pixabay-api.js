import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get('', {
      params: {
        key: '51584220-5b869931def1029bf82d58339',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });

    if (response.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    return response.data;
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    throw error;
  }
}
