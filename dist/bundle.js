(()=>{"use strict";var e={424:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap);"]),i.push([e.id,"* {\r\n  font-family: 'Comic Neue', sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3rem 2rem;\r\n  margin: auto;\r\n}\r\n\r\n.title {\r\n  font-weight: 900;\r\n  font-size: 3rem;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.subtitle {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.05rem;\r\n}\r\n\r\n.bt {\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  letter-spacing: 0.03rem;\r\n  background-color: #fff;\r\n  padding: 0.1rem 0.8rem;\r\n  border-bottom: 5px solid #000;\r\n  border-right: 5px solid #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.fullContainer {\r\n  padding: 3rem;\r\n  display: flex;\r\n  gap: 20rem;\r\n}\r\n\r\n.textScoreContainer {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.section1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.section2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.submit {\r\n  width: 50%;\r\n  align-self: flex-end;\r\n}\r\n\r\n::placeholder {\r\n  font-weight: bold;\r\n  color: #000;\r\n  padding: 0.2rem;\r\n}\r\n\r\n.input {\r\n  padding: 0.2rem;\r\n  font-weight: bold;\r\n  border: 2px solid #000;\r\n}\r\n\r\n.table {\r\n  border: 2px solid #000;\r\n  list-style: none;\r\n}\r\n\r\n.items {\r\n  font-weight: bold;\r\n}\r\n\r\n.items:nth-child(2n) {\r\n  background-color: lavender;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=t.base?c[0]+t.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);r[s].references--}for(var c=t(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(424),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector(".table"),g=document.querySelector(".submit"),h=document.querySelector(".inputName"),y=document.querySelector(".inputScore");let b=JSON.parse(localStorage.getItem("table"))||[];g.addEventListener("click",(()=>{b=((e,r,n)=>{const t={name:e.value,score:r.value};return n.push(t),e.value="",r.value="",n})(h,y,b),(e=>{localStorage.setItem("table",JSON.stringify(e))})(b),v.textContent="",(e=>{e.forEach((e=>{const r=document.createElement("li");r.setAttribute("class","items"),r.textContent=`${e.name}: ${e.score}`,v.appendChild(r)}))})(b)}))})()})();