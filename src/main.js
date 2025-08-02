import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = document.querySelector('[type="text"]');
const submitBtn = document.querySelector('[type="submit"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  hideLoadMoreButton();
  clearGallery();

  getImagesByQuery(searchQuery)
    .then(data => {
      hideLoader();
      createGallery(data.hits);
      showLoadMoreButton();
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    });
});
