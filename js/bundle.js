(()=>{"use strict";const t=(t,e)=>{const o=document.querySelector(t);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearTimeout(e)},e=t=>{const e=document.querySelector(t);e.classList.remove("show"),e.classList.add("hide"),document.body.style.overflow=""},o=()=>{class t{constructor(t,e,o,s,a,r,...n){this.src=t,this.alt=e,this.title=o,this.descr=s,this.price=a,this.props=n,this.parent=document.querySelector(r),this.transfer=45,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.props.length?t.classList.add("menu__item"):this.props.forEach((e=>t.classList.add(e))),t.innerHTML=`\n\t\t\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t\t\t<h3 class="menu__item-subtitle">${this.title}</h3>\n\t\t\t\t\t<div class="menu__item-descr">${this.descr}</div>\n\t\t\t\t\t<div class="menu__item-divider"></div>\n\t\t\t\t\t<div class="menu__item-price">\n\t\t\t\t\t\t\t<div class="menu__item-cost">Цена:</div>\n\t\t\t\t\t\t\t<div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n\t\t\t\t\t</div>\n\t\t\t\t`,this.parent.append(t)}}(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("./js/services/db.json").then((e=>{e.menu.forEach((({img:e,altimg:o,title:s,descr:a,price:r})=>{new t(e,o,s,a,r,".menu .container").render()}))}))};window.addEventListener("DOMContentLoaded",(()=>{const s=setTimeout((()=>t(".modal",s)),5e4);((t,e,o,s)=>{const a=document.querySelectorAll(e),r=document.querySelector(o),n=r.querySelectorAll(t),c=()=>{a.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),n.forEach((t=>{t.classList.remove(s)}))},i=(t=1)=>{a[t].classList.add("show","fade"),a[t].classList.remove("hide"),n[t].classList.add(s)};c(),i(),r.addEventListener("click",(e=>{e.target&&e.target.classList.contains(t.slice(1))&&n.forEach(((t,o)=>{e.target===t&&(c(),i(o))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),((t,e)=>{const o=Date.parse(e),s=t=>0<=t&&t<10?`0${t}`:t;((t,e)=>{const o=document.querySelector(t),a=o.querySelector("#days"),r=o.querySelector("#minutes"),n=o.querySelector("#seconds"),c=setInterval(i,1e3);function i(){const t=(t=>{const e=t-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/6e4%60),seconds:Math.floor(e/1e3%60)}})(e);a.textContent=s(t.days),r.textContent=s(t.minutes),n.textContent=s(t.seconds),t.total<=0&&clearInterval(c)}i()})(t,o)})(".timer","2023.04.01"),(({slide:t,nextArrow:e,prevArrow:o,totalCounter:s,currentCounter:a,wrapper:r,field:n})=>{const c=document.querySelector(r),i=c.querySelector(n),l=i.querySelectorAll(t),d=document.querySelector(o),u=document.querySelector(e),m=document.querySelector(a),h=document.querySelector(s),g=window.getComputedStyle(c).width;let v=1,_=0;l.length<10?h.textContent=`0${l.length}`:h.textContent=l.length,m.textContent=v<10?`0${v}`:v,c.style.overflow="hidden",i.style.cssText=`display: flex; transition: 0.5s all; width: ${100*l.length}%`,l.forEach((t=>{t.style.width=g}));const f=t=>+t.replace(/\D/gi,"");d.addEventListener("click",(()=>{0===_?_=f(g)*(l.length-1):_-=f(g),i.style.transform=`translateX(-${_}px)`,1===v?v=l.length:v--,m.textContent=v<10?`0${v}`:v})),u.addEventListener("click",(()=>{_==f(g)*(l.length-1)?_=0:_+=f(g),i.style.transform=`translateX(-${_}px)`,v===l.length?v=1:v++,m.textContent=v<10?`0${v}`:v}))})({slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),((o,s,a)=>{const r=document.querySelector(s);document.querySelectorAll(o).forEach((e=>{e.addEventListener("click",(()=>t(s,a)))}));const n=()=>{window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(s,a),window.removeEventListener("scroll",n))};window.addEventListener("scroll",n),r.addEventListener("click",(t=>{t.target!==r&&""!==t.target.getAttribute("data-closeModal")||e(s)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&r.classList.contains("show")&&e(s)}))})("[data-openModal]",".modal",s),o(),((o,s)=>{document.querySelectorAll(o).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const o=document.createElement("img");o.src=a,o.style.cssText="display: block; margin: 10px auto 0",e.insertAdjacentElement("afterend",o);const s=new FormData(e);(async(t,e)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await o.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((t=>{console.log(t),c(r)})).catch((()=>{c(n)})).finally((()=>{e.reset(),o.remove()}))}))}));const a="img/form/spinner.svg",r="Спасибо! Скоро мы с вами свяжемся",n="Что-то пошло не так";function c(o){const a=document.querySelector(".modal__dialog");a.classList.add("hide"),t(".modal",s);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n\t\t\t<div class="modal__content">\n\t\t\t\t<div data-closeModal="" class="modal__close">×</div>\n\t\t\t\t<div class="modal__title">${o}</div>\n\t\t\t</div>\n\t\t`,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),a.classList.add("show"),a.classList.remove("hide"),e(".modal")}),3e3)}})("form",s),(()=>{const t=document.querySelector(".calculating__result span");let e,o,s,a,r;function n(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){t.textContent=e&&o&&s&&a&&r?"female"===e?Math.round((447.6+9.2*s+3.1*o-4.3*a)*r):Math.round((88.36+13.4*s+4.8*o-5.7*a)*r):"____"}function i(t,o){const s=document.querySelectorAll(t);s.forEach((t=>{t.addEventListener("click",(t=>{t.target.hasAttribute("data-ratio")?(r=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),s.forEach((t=>t.classList.remove(o))),t.target.classList.add(o),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="3px solid red":e.style.border="none",e.getAttribute("id")){case"height":o=+e.value;break;case"weight":s=+e.value;break;case"age":a=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",1.375)),n("#gender div","calculating__choose-item_active"),n(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")})()}))})();