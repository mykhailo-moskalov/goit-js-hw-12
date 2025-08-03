import iziToast from 'izitoast';
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
  loadMoreBtn,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = document.querySelector('[type="text"]');

let searchQuery = '';
let page = 1;

form.addEventListener('submit', async e => {
  e.preventDefault();
  searchQuery = searchInput.value.trim();
  page = 1;

  if (searchQuery === '') {
    iziToast.error({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  showLoader('.loader-top');
  hideLoadMoreButton();
  clearGallery();

  try {
    const data = await getImagesByQuery(searchQuery, page);
    hideLoader('.loader-top');

    if (data.hits.length === 0) return;

    createGallery(data.hits);
    showLoadMoreButton();
    page++;
  } catch (error) {
    hideLoader('.loader-top');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  showLoader('.loader-bottom');
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(searchQuery, page);
    hideLoader('.loader-bottom');

    createGallery(data.hits);

    if (data.hits.length < 15) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
      page++;
    }
  } catch (error) {
    hideLoader('.loader-bottom');
  }
});
