!function(){const e=document.querySelector(".button--add-to-cart"),t=document.querySelector(".sticky-add-to-cart"),o=document.querySelectorAll(".scroll-atc");document.body.prepend(t),e&&!Shopify.designMode&&new window.IntersectionObserver((e=>{let[o]=e;o.isIntersecting||o.boundingClientRect.top>0?t.classList.remove("active"):t.classList.add("active")}),{root:null,threshold:1}).observe(e),o&&o.forEach((e=>{e.addEventListener("click",(function(e){let t,o,c=document.querySelector(".product-converter"),r=document.querySelector(".product-converter__add-to-cart"),n=document.getElementById("nav-wrapper");t=n?n.offsetHeight+100:150,o=r?r.offsetTop:c.offsetTop;let d=o-t;window.scrollTo({top:d,behavior:"smooth"})}))}))}();