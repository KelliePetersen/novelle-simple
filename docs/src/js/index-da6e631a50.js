!function(n){var i={};function s(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=4)}({4:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var s=(i(o.prototype,[{key:"events",value:function(){window.addEventListener("scroll",this.scrollFunction.bind(this))}},{key:"scrollFunction",value:function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?this.backToTopButton[0].classList.remove(".back-to-top--hidden"):this.backToTopButton[0].classList.add(".back-to-top--hidden")}}]),o);function o(){!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),this.backToTopButton=document.getElementsByClassName(".back-to-top"),this.events()}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=(a(r.prototype,[{key:"events",value:function(){var t=this;this.menu[0].addEventListener("click",this.toggleMenu.bind(this)),this.menu[0].addEventListener("click",this.animateMenu.bind(this)),window.addEventListener("scroll",this.closeMenu.bind(this)),window.addEventListener("resize",this.closeMenu.bind(this)),Array.from(this.listItem).forEach(function(e){return e.addEventListener("click",t.closeMenu.bind(t))})}},{key:"toggleMenu",value:function(){this.list[0].classList.toggle("nav__list--visible")}},{key:"animateMenu",value:function(){this.menu[0].classList.toggle("open")}},{key:"closeMenu",value:function(){this.menu[0].classList.remove("open"),this.list[0].classList.remove("nav__list--visible")}}]),r);function r(){!function(e){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this),this.menu=document.getElementsByClassName("menu__button"),this.list=document.getElementsByClassName("nav__list"),this.listItem=document.getElementsByClassName("nav__section"),this.events()}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=(c(v.prototype,[{key:"events",value:function(){window.addEventListener("scroll",this.hiddenMenu.bind(this)),window.addEventListener("scroll",this.fixedMenu.bind(this))}},{key:"hiddenMenu",value:function(){50<document.body.scrollTop||50<document.documentElement.scrollTop?this.nav[0].classList.add("nav--hidden"):this.nav[0].classList.remove("nav--hidden")}},{key:"fixedMenu",value:function(){300<document.body.scrollTop||300<document.documentElement.scrollTop?(this.nav[0].classList.add("nav--fixed"),this.navList[0].classList.add("nav__list--small"),this.navLogo[0].classList.add("nav__logo--small")):(this.nav[0].classList.remove("nav--fixed"),this.navList[0].classList.remove("nav__list--small"),this.navLogo[0].classList.remove("nav__logo--small"))}}]),v),d=(new s,new l,new function t(){!function(e){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.options={delay:100,duration:1e3,distance:"100px",easing:"ease-in-out"},this.sr=ScrollReveal(this.options)});function v(){!function(e){if(!(e instanceof v))throw new TypeError("Cannot call a class as a function")}(this),this.nav=document.getElementsByClassName("nav"),this.navList=document.getElementsByClassName("nav__list"),this.navLogo=document.getElementsByClassName("nav__logo"),this.events()}new u,d.sr.reveal(".heading",{distance:"10px",origin:"right",delay:600,viewOffset:{bottom:-300}})}});