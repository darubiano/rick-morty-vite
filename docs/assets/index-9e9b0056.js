(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l="/rick-morty-vite/assets/javascript-8dac5379.svg",d="/rick-morty-vite/vite.svg",i=async()=>{const r=await(await fetch("https://rickandmortyapi.com/api/character")).json(),n=Math.floor(Math.random()*r.results.length);return r.results[n]},u=async s=>{console.log("RickAndMorty"),document.querySelector("#app-title").innerHTML="Rick And Morty",s.innerHTML="<h3> Loading... </h3>";const r=document.createElement("blockquote"),n=document.createElement("img"),c=document.createElement("h3"),e=document.createElement("button");e.innerText="Otro personaje";const t=o=>{r.innerHTML=o.name,n.src=o.image,n.style.width="80%",c.innerHTML=o.species,s.replaceChildren(r,n,c,e)};e.addEventListener("click",async()=>{s.innerHTML="<h3> Loading... </h3>",await new Promise(a=>setTimeout(a,250));const o=await i();t(o)}),i().then(o=>t(o))};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${d}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${l}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;const m=document.querySelector(".card");u(m);
