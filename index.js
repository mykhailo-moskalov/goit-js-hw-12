import{a as m,i as n,S as b}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();m.defaults.baseURL="https://pixabay.com/api/";async function y(t,r){try{const s=await m.get("",{params:{key:"51584220-5b869931def1029bf82d58339",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return s.data.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.data}catch(s){throw n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s}}const d=document.querySelector(".load-more"),h=document.querySelector("ul.gallery"),q=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(t){const r=t.map(s=>`<li class="gallery-item">
              <a class="gallery-link" href="${s.largeImageURL}">
                  <img 
                      src="${s.webformatURL}" 
                      class="gallery-image" 
                      alt="${s.tags}"
                  />
                  <div class="stats">
                      <ul class="stats-ul">
                          <li class="stats-item">
                              <p class="stats-name">Likes</p>
                              <p class="quantity">${s.likes}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Views</p>
                              <p class="quantity">${s.views}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Comments</p>
                              <p class="quantity">${s.comments}</p>
                          </li>
                          <li class="stats-item">
                              <p class="stats-name">Downloads</p>
                              <p class="quantity">${s.downloads}</p>
                          </li>
                      </ul>
                  </div>

              </a>
          </li>`).join("");h.insertAdjacentHTML("beforeend",r),q.refresh()}function w(){h.innerHTML=""}function g(t){document.querySelector(t).classList.remove("hidden")}function l(t){document.querySelector(t).classList.add("hidden")}function L(){d.classList.remove("hidden")}function u(){d.classList.add("hidden")}const v=document.querySelector(".form"),S=document.querySelector('[type="text"]');let i="",o=1;v.addEventListener("submit",async t=>{if(t.preventDefault(),i=S.value.trim(),o=1,i===""){n.error({message:"Please enter a search term!",position:"topRight"});return}g(".loader-top"),u(),w();try{const r=await y(i,o);if(l(".loader-top"),r.hits.length===0)return;f(r.hits),L(),o++}catch{l(".loader-top")}});d.addEventListener("click",async()=>{g(".loader-bottom"),u();try{const t=await y(i,o);l(".loader-bottom"),f(t.hits),t.hits.length<15?(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(L(),o++)}catch{l(".loader-bottom")}});
//# sourceMappingURL=index.js.map
