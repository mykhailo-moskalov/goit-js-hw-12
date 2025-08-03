import SimpleLightbox from 'simplelightbox';

export const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('ul.gallery');
const galleryLightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image =>
        `<li class="gallery-item">
              <a class="gallery-link" href="${image.largeImageURL}">
                  <img 
                      src="${image.webformatURL}" 
                      class="gallery-image" 
                      alt="${image.tags}"
                  />
                  <div class="stats">
                      <ul class="stats-ul">
                          <li class="stats-item">
                              <p class="stats-name">Likes</p>
                              <p class="quantity">${image.likes}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Views</p>
                              <p class="quantity">${image.views}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Comments</p>
                              <p class="quantity">${image.comments}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Downloads</p>
                              <p class="quantity">${image.downloads}</p>
                          </li>
                      </ul>
                  </div>

              </a>
          </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  galleryLightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader(selector) {
  document.querySelector(selector).classList.remove('hidden');
}

export function hideLoader(selector) {
  document.querySelector(selector).classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
