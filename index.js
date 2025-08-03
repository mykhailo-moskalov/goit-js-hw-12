import{a as p,i,S as b}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();p.defaults.baseURL="https://pixabay.com/api/";async function m(r,t){try{const e=await p.get("",{params:{key:"51584220-5b869931def1029bf82d58339",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return e.data.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),e.data}catch(e){throw e}}const d=document.querySelector(".load-more"),f=document.querySelector("ul.gallery"),w=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(r){const t=r.map(e=>`<li class="gallery-item">
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
          </li>`).join("");f.insertAdjacentHTML("beforeend",t),w.refresh()}function q(){f.innerHTML=""}function y(r){document.querySelector(r).classList.remove("hidden")}function g(r){document.querySelector(r).classList.add("hidden")}function L(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}const v=document.querySelector(".form"),S=document.querySelector('[type="text"]');let n="",a=1;v.addEventListener("submit",async r=>{if(r.preventDefault(),n=S.value.trim(),a=1,n===""){i.error({message:"Please enter a search term!",position:"topRight"});return}y(".loader-top"),l(),q();try{const t=await m(n,a);if(t.hits.length===0)return;h(t.hits),a++,a*15>=t.totalHits?(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch{i.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{g(".loader-top")}});d.addEventListener("click",async()=>{y(".loader-bottom"),l();try{const r=await m(n,a);h(r.hits);const t=document.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})}a++,a*15>=r.totalHits?(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch{i.error({message:"Failed to load more images.",position:"topRight"})}finally{g(".loader-bottom")}});
//# sourceMappingURL=index.js.map
