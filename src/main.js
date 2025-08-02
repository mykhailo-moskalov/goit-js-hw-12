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
} from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = document.querySelector('[type="text"]');
export const loadMoreBtn = document.querySelector('button[type="button"]');

let searchQuery = '';
let page = 1;
const PER_PAGE = 15;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const searchQuery = searchInput.value.trim();
  page = 1;

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

  try {
    const data = await getImagesByQuery(searchQuery, page, PER_PAGE);
    hideLoader();

    if (data.hits.length === 0) return;

    createGallery(data.hits);
    showLoadMoreButton();
    page++;
  } catch (error) {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(searchQuery, page, PER_PAGE);
    hideLoader();

    createGallery(data.hits);

    if (data.hits.length < PER_PAGE) {
      hideLoadMoreButton();
      iziToast.info({
        message: 'No more images to load.',
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
      page++;
    }
  } catch (error) {
    hideLoader();
  }
});
