!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.menuItems=new Array,this.CreateMenus(),this.menuItems.forEach(function(e){chrome.contextMenus.create(e)})}return e.prototype.CreateMenus=function(){this.menuItems.push({contexts:["selection"],title:"Add selection to journey",onclick:this.onclick})},e.prototype.onclick=function(e,t){console.log("item "+e.menuItemId+" was clicked"),console.log("info: "+JSON.stringify(e)),console.log("tab: "+JSON.stringify(t))},e}();t.default=o},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);window.onload=function(){new o.default}}]);