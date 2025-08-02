import{a as n,i as u,S as d}from"./assets/vendor-w2JwYdZo.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function m(s,o){return n.defaults.baseURL="https://pixabay.com/api/",n.get("",{params:{key:"51584220-5b869931def1029bf82d58339",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>(e.data.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),e.data)).catch(e=>{throw e})}const c=document.querySelector("ul.gallery");function p(s){const o=s.map(e=>`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                  <img 
                      src="${e.webformatURL}" 
                      class="gallery-image" 
                      alt="${e.tags}"
                  />
                  <div class="stats">
                      <ul class="stats-ul">
                          <li class="stats-item">
                              <p class="stats-name">Likes</p>
                              <p class="quantity">${e.likes}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Views</p>
                              <p class="quantity">${e.views}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Comments</p>
                              <p class="quantity">${e.comments}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Downloads</p>
                              <p class="quantity">${e.downloads}</p>
                          </li>
                      </ul>
                  </div>

              </a>
          </li>`).join("");c.innerHTML=o,new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function y(){c.innerHTML=""}function f(){document.querySelector("#loader").classList.remove("hidden")}function l(){document.querySelector("#loader").classList.add("hidden")}function h(){document.querySelector('button[type="button"]').classList.remove("hidden")}function g(){document.querySelector('button[type="button"]').classList.add("hidden")}const L=document.querySelector(".form"),q=document.querySelector('[type="text"]');document.querySelector('[type="submit"]');L.addEventListener("submit",s=>{s.preventDefault();const o=q.value.trim();if(o===""){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(),g(),y(),m(o).then(e=>{l(),p(e.hits),h()}).catch(e=>{l(),iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
