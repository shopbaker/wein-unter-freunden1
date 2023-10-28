!function(){"use strict";var e,r={6154:function(e,r,t){var a=t(7099);function i(){let e=window.matchMedia("(min-width: 0px) and (max-width: 767px)"),r=window.matchMedia("(min-width: 768px)");const t=function(e){let r=e.closest(".slider"),t=r.querySelectorAll("iframe, video"),i=r.querySelector(".swiper-pagination"),s=r.querySelector(".swiper-button-prev"),n=r.querySelector(".swiper-button-next"),o=e.hasAttribute("data-text-pagination"),l=parseInt(e.getAttribute("data-desktop-slides-per-view")),d=parseInt(e.getAttribute("data-mobile-slides-per-view")),p=new a.ZP(e,{observer:!0,observeParents:!0,observeSlideChildren:!0,freemode:!0,preloadImages:!1,loop:!1,watchSlidesProgress:!0,speed:800,slidesPerView:"auto",breakpoints:{0:{slidesPerGroup:d},768:{slidesPerGroup:l},992:{slidesPerGroup:l,freemode:!1}},pagination:{el:i,clickable:!0},navigation:{prevEl:s,nextEl:n},a11y:{enabled:!0}});if(r.classList.add("slider-enabled"),p.on("update",(()=>{Array.prototype.forEach.call(t,(function(e){if("video"===e.tagName.toLowerCase())e.pause();else{var r=e.src;e.src=r}}));var e=p.activeIndex,a=r.getElementsByClassName("swiper-slide")[e].getElementsByTagName("video")[0];a&&a.play()})),p.on("transitionStart",(()=>{Array.prototype.forEach.call(t,(function(e){if("video"===e.tagName.toLowerCase())e.pause();else{var r=e.src;e.src=r}}))})),p.on("transitionEnd",(()=>{var e=p.activeIndex,t=r.getElementsByClassName("swiper-slide")[e].getElementsByTagName("video")[0];t&&t.play()})),p.on("slideChange",(function(){p.pagination.render(),p.pagination.update(),p.navigation.destroy(),p.navigation.init()})),o){p.params.breakpoints[0].slidesPerView=1,p.params.breakpoints[0].slidesPerGroup=1,p.params.breakpoints[0].spaceBetween=16,p.params.breakpoints[768].slidesPerView="auto",p.params.breakpoints[768].slidesPerGroup=1,p.params.breakpoints[768].spaceBetween=32,p.params.breakpoints[992].slidesPerView="auto",p.params.breakpoints[992].slidesPerGroup=1,p.params.breakpoints[992].spaceBetween=32,p.currentBreakpoint=!1,p.update();let e=r.querySelectorAll(".feature__item");p.on("slideChange",(()=>{e.forEach((e=>{e.classList.remove("active")})),e[p.realIndex].classList.add("active")})),e.forEach(((e,r)=>{e.addEventListener("click",(()=>{p.slideToLoop(r)}))}))}};document.querySelectorAll(".swiper").forEach((a=>{let i=a.closest(".slider"),s=a.getAttribute("data-desktop-layout"),n=a.getAttribute("data-mobile-layout");"slider"==s&&"slider"==n?t(a):"grid"==s&&"slider"==n?e.matches?a.swiper||(t(a),a.swiper.update()):r.matches&&a.swiper&&(a.swiper.destroy(),i.classList.remove("slider-enabled")):"slider"==s&&"grid"==n&&(r.matches?a.swiper||(t(a),a.swiper.update()):e.matches&&a.swiper&&(a.swiper.destroy(),i.classList.remove("slider-enabled")))}))}a.ZP.use([a.W_,a.tl,a.s5]),window.addEventListener("load",(function(){i()})),window.addEventListener("resize",(function(){i()})),Shopify.designMode&&document.addEventListener("shopify:section:load",(()=>{i()}))}},t={};function a(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}};return r[e].call(s.exports,s,s.exports,a),s.exports}a.m=r,e=[],a.O=function(r,t,i,s){if(!t){var n=1/0;for(p=0;p<e.length;p++){t=e[p][0],i=e[p][1],s=e[p][2];for(var o=!0,l=0;l<t.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](t[l])}))?t.splice(l--,1):(o=!1,s<n&&(n=s));if(o){e.splice(p--,1);var d=i();void 0!==d&&(r=d)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[t,i,s]},a.d=function(e,r){for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.j=4949,function(){var e={4949:0};a.O.j=function(r){return 0===e[r]};var r=function(r,t){var i,s,n=t[0],o=t[1],l=t[2],d=0;if(n.some((function(r){return 0!==e[r]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var p=l(a)}for(r&&r(t);d<n.length;d++)s=n[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(p)},t=self.webpackChunkworkflow=self.webpackChunkworkflow||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var i=a.O(void 0,[1216],(function(){return a(6154)}));i=a.O(i)}();