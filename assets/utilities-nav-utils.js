!function(){"use strict";var e={4105:function(e,t,r){document.querySelectorAll(".local-scroll").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();const t=e.target.getAttribute("href");(e=>{Math.easeInOutQuad=function(e,t,r,o){return(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t};const t=document.getElementById("grid-archive-header"),r=document.getElementById("nav-wrapper");let o=0;t&&(o=t.offsetHeight+50),r&&(navWrapperOffset=r.offsetHeight+50);const n=e.offsetTop-o-navWrapperOffset,c=window.scrollY,a=n-c;let u=0;const l=()=>{u+=5;const e=Math.easeInOutQuad(u,c,a,200);window.scrollTo(0,e),u<200&&setTimeout(l,5)};l()})(document.querySelector(t))}))}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(4105),document.getElementById("nav-wrapper"),document.querySelectorAll(".predictive-search"),document.getElementById("overlay")}();