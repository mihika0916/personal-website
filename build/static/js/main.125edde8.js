(()=>{"use strict";const e=function(e){e.classList.toggle("active")},t=document.querySelector("[data-sidebar]");document.querySelector("[data-sidebar-btn]").addEventListener("click",(function(){e(t)}));const a=document.querySelectorAll("[data-testimonials-item]"),c=document.querySelector("[data-modal-container]"),n=document.querySelector("[data-modal-close-btn]"),l=document.querySelector("[data-overlay]"),i=document.querySelector("[data-modal-img]"),o=document.querySelector("[data-modal-title]"),r=document.querySelector("[data-modal-text]"),s=function(){c.classList.toggle("active"),l.classList.toggle("active")};for(let b=0;b<a.length;b++)a[b].addEventListener("click",(function(){i.src=this.querySelector("[data-testimonials-avatar]").src,i.alt=this.querySelector("[data-testimonials-avatar]").alt,o.innerHTML=this.querySelector("[data-testimonials-title]").innerHTML,r.innerHTML=this.querySelector("[data-testimonials-text]").innerHTML,s()}));n.addEventListener("click",s),l.addEventListener("click",s);const d=document.querySelector("[data-select]"),u=document.querySelectorAll("[data-select-item]"),m=document.querySelector("[data-selecct-value]"),v=document.querySelectorAll("[data-filter-btn]");d.addEventListener("click",(function(){e(this)}));for(let b=0;b<u.length;b++)u[b].addEventListener("click",(function(){let t=this.innerText.toLowerCase();m.innerText=this.innerText,e(d),y(t)}));const L=document.querySelectorAll("[data-filter-item]"),y=function(e){for(let t=0;t<L.length;t++)"all"===e||e===L[t].dataset.category?L[t].classList.add("active"):L[t].classList.remove("active")};let q=v[0];for(let b=0;b<v.length;b++)v[b].addEventListener("click",(function(){let e=this.innerText.toLowerCase();m.innerText=this.innerText,y(e),q.classList.remove("active"),this.classList.add("active"),q=this}));const S=document.querySelector("[data-form]"),f=document.querySelectorAll("[data-form-input]"),h=document.querySelector("[data-form-btn]");for(let b=0;b<f.length;b++)f[b].addEventListener("input",(function(){S.checkValidity()?h.removeAttribute("disabled"):h.setAttribute("disabled","")}));const g=document.querySelectorAll("[data-nav-link]"),T=document.querySelectorAll("[data-page]");for(let b=0;b<g.length;b++)g[b].addEventListener("click",(function(){for(let e=0;e<T.length;e++)this.innerHTML.toLowerCase()===T[e].dataset.page?(T[e].classList.add("active"),g[e].classList.add("active"),window.scrollTo(0,0)):(T[e].classList.remove("active"),g[e].classList.remove("active"))}))})();
//# sourceMappingURL=main.125edde8.js.map