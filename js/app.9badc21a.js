(function(t){function e(e){for(var s,i,a=e[0],l=e[1],c=e[2],p=0,d=[];p<a.length;p++)i=a[p],r[i]&&d.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"077b":function(t,e,n){},1415:function(t){t.exports={slides:[{img:"https://source.unsplash.com/phIFdC6lA4E/1000x500",link:"https://www.google.ru/"},{img:"https://source.unsplash.com/z8ct_Q3oCqM/1000x500",link:"https://www.google.ru/"},{img:"https://source.unsplash.com/dfo06_DqxpA/1000x500",link:"https://www.google.ru/"},{img:"https://source.unsplash.com/roZgc7SXXmI/1000x500",link:"https://www.google.ru/"},{img:"https://source.unsplash.com/WeFDiEDModQ/1000x500",link:"https://www.google.ru/"}]}},5235:function(t,e,n){"use strict";var s=n("077b"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-component"),n("main-component")],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Sticky")]),n("div",{staticClass:"menu"},[n("a",{staticClass:"menu__link is-active",attrs:{href:"#"}},[t._v("Home")]),n("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("About Us")]),n("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Contact Us")])])])])}],l={name:"header-component",methods:{handleScroll:function(t,e){window.pageYOffset>e?(this.$el.classList.add("is-sticky"),document.body.style.paddingTop=this.$el.clientHeight+"px"):(this.$el.classList.remove("is-sticky"),document.body.style.paddingTop="")}},mounted:function(){var t=this,e=this.$el.offsetTop;window.addEventListener("scroll",function(n){return t.handleScroll(n,e)})}},c=l,u=(n("9b67"),n("2877")),p=Object(u["a"])(c,i,a,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[t._m(0),n("tiny-slider",{staticClass:"slider",attrs:{"mouse-drag":!0,loop:!1,controls:!1,responsive:t.slider.responsive}},t._l(t.slider.slides,function(t){return n("div",{staticClass:"slider__item"},[n("a",{staticClass:"slider__link",attrs:{href:t.link,target:"_blank"}}),n("div",{staticClass:"slider__img",style:{backgroundImage:"url("+t.img+")"}})])})),n("div",{staticStyle:{height:"100vh"}})],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jumbotron text-center"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"jumbotron-heading"},[t._v("Album example")]),n("p",{staticClass:"lead text-muted"},[t._v("Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.")])])])}],m=n("91a0"),v=n.n(m),g=n("1415"),b={name:"main-component",components:{"tiny-slider":v.a},data:function(){return{slider:{slides:g.slides,responsive:{768:{items:2},992:{items:3}}}}}},_=b,w=(n("5235"),Object(u["a"])(_,f,h,!1,null,null,null)),y=w.exports,k={name:"app",components:{"header-component":d,"main-component":y}},x=k,C=Object(u["a"])(x,r,o,!1,null,null,null),j=C.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")},9219:function(t,e,n){},"9b67":function(t,e,n){"use strict";var s=n("9219"),r=n.n(s);r.a}});
//# sourceMappingURL=app.9badc21a.js.map