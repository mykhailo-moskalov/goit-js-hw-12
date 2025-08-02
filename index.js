import{a as y,i as n,S as q}from"./assets/vendor-BK_rxH-O.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();y.defaults.baseURL="https://pixabay.com/api/";async function m(s,a=1,e=15){try{const o=await y.get("",{params:{key:"51584220-5b869931def1029bf82d58339",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:e}});return o.data.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.data}catch(o){throw n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o}}const h=document.querySelector("ul.gallery"),b=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(s){const a=s.map(e=>`<li class="gallery-item">
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
          </li>`).join("");h.innerHTML=a,b.refresh()}function w(){h.innerHTML=""}function g(){document.querySelector("#loader").classList.remove("hidden")}function l(){document.querySelector("#loader").classList.add("hidden")}function L(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}const S=document.querySelector(".form"),v=document.querySelector('[type="text"]'),p=document.querySelector('button[type="button"]');let P="",i=1;const d=15;S.addEventListener("submit",async s=>{s.preventDefault();const a=v.value.trim();if(i=1,a===""){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(),u(),w();try{const e=await m(a,i,d);if(l(),e.hits.length===0)return;f(e.hits),L(),i++}catch{l()}});p.addEventListener("click",async()=>{g(),u();try{const s=await m(P,i,d);l(),f(s.hits),s.hits.length<d?(u(),n.info({message:"No more images to load.",position:"topRight"})):(L(),i++)}catch{l()}});
//# sourceMappingURL=index.js.map
