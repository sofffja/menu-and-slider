(()=>{"use strict";var n={904:(n,e,r)=>{r.d(e,{c:()=>c});var t=r(500),o=r.n(t),a=r(312),i=r.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  user-select: none;\n  scroll-behavior: smooth;\n  background-color: #e6edd5;\n}\n\nmain {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  place-content: center;\n  gap: 2rem;\n}\n\n.carousel-wrapper {\n  display: grid;\n  place-items: center;\n  place-content: center;\n  gap: 16px;\n}\n\n.counter {\n  grid-column: span 3;\n  display: flex;\n  gap: 8px;\n}\n\n.counter span {\n  border: 1px solid black;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n}\n\n.filled {\n  background-color: black;\n}\n\n.carousel {\n  aspect-ratio: 9 / 16;\n  border-radius: 8px;\n  display: flex;\n  gap: 3rem;\n  height: 60vh;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n}\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n\n.carousel img {\n  aspect-ratio: 9 / 16;\n  object-fit: cover;\n  scroll-snap-stop: always;\n  border-radius: 8px;\n  scroll-snap-align: center;\n  margin: 32px;\n  box-shadow: 0 0 16px #00000044;\n}\n\n/* menusito */\nnav {\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  padding: 1.5rem;\n  width: 100%;\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nmenu {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: display 300ms;\n}\n\n.hidden {\n  transition: 300ms;\n  display: none;\n}\n\nnav > div {\n  order: 1;\n  text-align: center;\n  background-color: #ffffff88;\n  box-shadow: 2px 2px #00000022;\n  border: 1px solid black;\n  padding: 0.25rem 0.5rem;\n  border-radius: 50%;\n}\n\nnav > div:hover {\n  background-color: #b8f529;\n}\n\n.arrow,\nmenu li {\n  cursor: pointer;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 32px;\n  padding: 0.25rem 0.5rem;\n  width: 4rem;\n  background-color: #ffffff88;\n  transition: background-color 300ms;\n  box-shadow: 2px 2px #00000022;\n}\n\nmenu li:hover,\n.arrow:hover {\n  background-color: #ffffffee;\n}\n\nli {\n  list-style: none;\n}\n",""]);const c=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},176:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(596),e=r.n(n),t=r(520),o=r.n(t),a=r(176),i=r.n(a),c=r(120),s=r.n(c),l=r(808),d=r.n(l),u=r(936),p=r.n(u),f=r(904),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.c,m),f.c&&f.c.locals&&f.c.locals;const v=document.querySelector(".menu-button"),h=document.querySelector(".menu-dropdown");var b;!function(){const n=document.querySelector(".counter"),e=document.querySelectorAll(".arrow"),r=document.querySelectorAll(".carousel-img"),t=document.querySelector(".carousel"),o=[];r.forEach((()=>{const e=document.createElement("span");n.appendChild(e),o.push(e)})),o[0].classList.add("filled"),e[0].addEventListener("click",(()=>{t.scrollBy({top:0,left:-10,behavior:"smooth"})})),e[1].addEventListener("click",(()=>{t.scrollBy({top:0,left:10,behavior:"smooth"})})),t.addEventListener("scroll",(()=>{const n=Math.floor(t.scrollLeft*r.length/t.scrollWidth);var e;console.log(n),e=n,o.forEach((n=>{o.indexOf(n)===e?n.classList.add("filled"):n.classList.contains("filled")&&n.classList.remove("filled")}))}))}(),b=h,v.addEventListener("click",(()=>{b.classList.toggle("hidden")}))})()})();