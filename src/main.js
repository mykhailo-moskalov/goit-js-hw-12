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

    if (data.hits.length === 0) return;

    createGallery(data.hits);
    page++;

    if (page * 15 >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching images.',
      position: 'topRight',
    });
  } finally {
    hideLoader('.loader-top');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  showLoader('.loader-bottom');
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    createGallery(data.hits);

    const firstcard = document.querySelector('.gallery-item');

    if (firstcard) {
      const cardHeight = firstcard.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight,
        behavior: 'smooth',
      });
    }

    page++;

    if (page * 15 >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Failed to load more images.',
      position: 'topRight',
    });
  } finally {
    hideLoader('.loader-bottom');
  }
});
