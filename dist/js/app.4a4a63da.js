(function(){"use strict";var t={271:function(t,s,a){var e=a(144),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("Home")],1)},r=[],i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("header",[a("navbar",{attrs:{color:"white",classMode:"header-nav"}}),a("div",{staticClass:"wp-text"},[t._m(0),a("btnarrow",{attrs:{msg:"ACERCA DE NOSOTROS",color:"btn-arrow-white",icon:"btn-arrow-icon-white"}})],1),a("hr",{staticClass:"line"})],1),a("section",{staticClass:"section-tenis"},[a("div",{staticClass:"wp-top"},[a("div",{staticClass:"wp-top-width"},[t._m(1),a("div",{staticClass:"wp-top-text"},[a("p",{staticClass:"text"},[t._v(" Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional. ")]),a("btnarrow",{attrs:{msg:"HISTORIA",color:"btn-arrow-dark",icon:"btn-arrow-icon-dark"}})],1)])]),a("div",{staticClass:"wp-bottom"},[t._m(2),a("div",{staticClass:"wp-bottom-carrusel"},[a("Slider")],1)])]),t._m(3),a("footer",{staticClass:"footer"},[a("div",[a("navbar",{attrs:{color:"black",classMode:"footer-nav"}}),t._m(4)],1),t._m(5)])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",[t._v(" Las mejores raquetas para jugar "),a("span",{staticClass:"green"},[t._v("Tennis")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wp-top-title"},[a("span",{staticClass:"subtitle"},[t._v("Tennis")]),a("h2",[t._v("Raquetas."),a("span",[t._v("Accesorios.")]),a("span",[t._v("Pelotas.")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wp-bottom-text"},[a("h2",{staticClass:"title"},[t._v("Nuestras "),a("span",[t._v("Raquetas")])]),a("p",{staticClass:"text-info"},[t._v(" Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional. ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section-bannerFull"},[e("img",{attrs:{src:a(476),alt:"banner"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"social-list"},[e("img",{attrs:{src:a(85),alt:"linkedin"}}),e("img",{attrs:{src:a(404),alt:"v"}}),e("img",{attrs:{src:a(361),alt:"instagram"}}),e("img",{attrs:{src:a(655),alt:"twitter"}}),e("img",{attrs:{src:a(238),alt:"facebook"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer-logo"},[e("img",{attrs:{src:a(955),alt:"logo"}})])}],o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:[t.classMode,t.activeModalMenu?"active bg-green":""]},[e("nav",{staticClass:"wp-nav"},["footer-nav"!=t.classMode?e("div",{staticClass:"logo"},[e("img",{attrs:{src:a(955),alt:""}})]):t._e(),e("ul",{class:t.color},["footer-nav"!=t.classMode?e("li",{attrs:{id:"mobile"}},[e("button",{staticClass:"menu_bars",class:t.activeModalMenu?"active":"",on:{click:function(s){return t.activeMobile()}}},[e("span"),e("span"),e("span")])]):t._e(),e("div",{staticClass:"menu_show"},[t._m(0),t._m(1),t._m(2),t._m(3),"footer-nav"!=t.classMode?e("div",{staticClass:"language"},[e("a",{class:t.active?"active":"",attrs:{href:""}},[t._v("ES")]),e("a",{attrs:{href:""}},[t._v("EN")])]):t._e()])])]),e("div",{staticClass:"menuMobile",style:t.activeModalMenu?"opacity: 1; z-index: 2":"opacity: 0"},[e("nav",{staticClass:"menu"},[e("ul",[t._m(4),t._m(5),t._m(6),t._m(7),e("li",{staticClass:"language"},[e("a",{class:t.active?"active":"",attrs:{href:""}},[t._v("ES")]),e("a",{attrs:{href:""}},[t._v("EN")])])])])])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"select"},[a("a",{attrs:{href:"/"}},[t._v("Inicio")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"/"}},[t._v("Acerca de nosotros")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"/"}},[t._v("Historia")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"/"}},[t._v("Contacto")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{staticClass:"select",attrs:{href:"/"}},[t._v("Inicio")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"/"}},[t._v("Acerca de nosotros")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"/"}},[t._v("Historia")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"/"}},[t._v("Contacto")])])}],u={name:"w-navbar",props:{color:String,classMode:String},data(){return{active:!0,activeModalMenu:!1}},methods:{activeMobile(){this.activeModalMenu=!this.activeModalMenu;const t=document.querySelector("body");this.activeModalMenu?t.classList.add("no-scroll"):t.classList.remove("no-scroll")}}},d=u,v=a(1),f=(0,v.Z)(d,o,l,!1,null,null,null),p=f.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btn-arrow",class:t.color},[e("p",{staticClass:"btn-arrow-text"},[t._v(" "+t._s(t.msg)+" "),e("span",{staticClass:"btn-arrow-icon",class:t.icon},[e("img",{attrs:{src:a(140),alt:""}})])])])},h=[],g={name:"HelloWorld",props:{msg:String,color:String,icon:String}},_=g,w=(0,v.Z)(_,m,h,!1,null,null,null),C=w.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ssr-carousel",{attrs:{"show-arrows":"","show-dots":"","paginate-by-slide":"","slides-per-page":t.cards,gutter:t.padding}},[e("slide",{attrs:{index:1}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-circle"},[e("span",[t._v("1")])]),e("img",{attrs:{src:a(648),alt:"product"}})])]),e("slide",{attrs:{index:2}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-circle"},[e("span",[t._v("2")])]),e("img",{attrs:{src:a(648),alt:"product"}})])]),e("slide",{attrs:{index:3}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-circle"},[e("span",[t._v("3")])]),e("img",{attrs:{src:a(648),alt:"product"}})])]),e("slide",{attrs:{index:4}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-circle"},[e("span",[t._v("4")])]),e("img",{attrs:{src:a(648),alt:"product"}})])]),e("slide",{attrs:{index:5}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-circle"},[e("span",[t._v("5")])]),e("img",{attrs:{src:a(648),alt:"product"}})])]),e("slide",{attrs:{index:6}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-circle"},[e("span",[t._v("6")])]),e("img",{attrs:{src:a(648),alt:"product"}})])])],1)},A=[],E=a(584),x=a.n(E),M={name:"w-slider",components:{SsrCarousel:x()},data(){return{width:document.documentElement.clientWidth,cards:1,padding:0}},mounted(){window.addEventListener("resize",this.getDimensions)},unmounted(){window.removeEventListener("resize",this.getDimensions)},methods:{getDimensions(){this.width=document.documentElement.clientWidth;const t=window.matchMedia("(min-width: 1024px)"),s=window.matchMedia("(min-width: 1440px)");s||this.width>=1400?(this.cards=3,this.padding=60):t||this.width>=1024&&this.width<=1400?(this.cards=2,this.padding=60):this.width<=1023&&(this.cards=1,this.padding=0)}}},S=M,k=(0,v.Z)(S,b,A,!1,null,null,null),D=k.exports,O={name:"v-Home",components:{navbar:p,btnarrow:C,Slider:D},data(){return{url:0}}},R=O,y=(0,v.Z)(R,i,c,!1,null,null,null),I=y.exports,N={name:"App",components:{Home:I}},P=N,Y=(0,v.Z)(P,n,r,!1,null,null,null),F=Y.exports;e.Z.config.productionTip=!1,new e.Z({render:t=>t(F)}).$mount("#app")},140:function(t,s,a){t.exports=a.p+"img/flechaBtn.a9b69cb5.svg"},238:function(t,s,a){t.exports=a.p+"img/icon-facebook.b27941be.svg"},361:function(t,s,a){t.exports=a.p+"img/icon-instagram.b64c8abf.svg"},85:function(t,s,a){t.exports=a.p+"img/icon-linkedin.23954785.svg"},655:function(t,s,a){t.exports=a.p+"img/icon-twitter.1688834e.svg"},404:function(t,s,a){t.exports=a.p+"img/icon-v.93f9faf9.svg"},476:function(t,s,a){t.exports=a.p+"img/action-athlete-ball.96fae724.png"},648:function(t,s,a){t.exports=a.p+"img/group-10.3878e729.png"},955:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAA75JREFUWAmtmFlIFVEYx7tmJW1QtkALRAuVUYIVFa1E2gaFQQv1JoVKiz0EUUQP0QJR0ULQQw+tYI9BURlliWEUphGYRIFStpgVqWUWdfv9ba5d7505M3PvfPDjzDnf//vO55lzz8wY6ubDwuFwCvJ5sMiinXYJ5MNh+ASN8BrK4B5UhkKh37TBGsX0hDyohVi7ykB3OBvrsPoNtHtgcGBVkSwb6sFkx3D2gGcGURu+fdAr4eIUDJrsD7jZbwQzYDa46Z+jmem7MIL6wH3wY08Rp8J5D0E/0Kz2XBjiRAqK1LGWiymRjkur1d3sWhiiENxwSWZyl2sSBKUmUZRPha0wFoZge1RAopdjCCz0EdyMdpJtYXJAm49kTtICHGOdnA7jjxkPRQrTYRgxHX5pkU4S7QIOy5fEv/WRYxravC56qsx0+AsSGX6k5AQ+8Bn8AX3HGRZZqZ1dqkyuM8IKf+MzzRD0qxSTQnW6ZbnqBGTpVp6PCeTbqBit1FwIYi8pn+zbv6Zbb6v12rQhvC2xisrWRYDWYuXq5yNnGVodC0+4c4dUVJaPYC/SBkvk9a3gLPocKIBbMFO/EtOTHbdvO0GE9upXD5EH0ei1pzhKW6ui9FMM0taTLMNDwkusiuY/HaNt1uDPmMFkut8J7g9FLknK8evFcauN7oeKarRxJDp02frrqw0J2vFNgNFg91h7n0oSnSdeN6XmdLIwDu2nqbSZTiLGj/IY0mv1da7tjqImrdQdCMLOqxAS3TQka8LXG+YbNMU6Eh4qWZLWSvwuJlpJu9iQ6xyr9B3/FoOmSn/ZIkPVXlx6UVsJfeGVS8A4/IPgl0GXpaK0nHYbzhDXxbWDns6a611G4zsvtDoMr4l3dY7USZNiLWfHr0YDPkwbey/xR2iPwzKX2FLLv9Cgu9Dpo87JnbV6u2hBlgv6ejnpLSS8SROiLXPQ627p9eW/MXDNQRw7fJWB8ZAOd2Odhv5yzYbfad8d+l+NdYV4FLQ6JNXGLIE5oC+edVAPfkznl4qy279VjPeMK8oK0NeMPhTroAIuwwYYAComByohEZtozaFbH20qMsO2ILtBxGmwFM5AAyRjs6yi3sUkKbKbO26MoN2gItz+LxCT39hdahVVE6XaHze50wBBOndORQUHcVloFXWFZNqjeU7zG8cJ3AZ6HQnCOs4gEuVDtnFiNycJRsIlSPZW1rjN5dtPUdPhInwBP6aNfQCGep208/vdawDJe6DVo0KH4WgYDsNgIDTDZ9CqVEMJVPAo+kPr2f4CYGDCPj4C8qoAAAAASUVORK5CYII="}},s={};function a(e){var n=s[e];if(void 0!==n)return n.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(s,e,n,r){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],n=t[u][1],r=t[u][2];for(var c=!0,o=0;o<e.length;o++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](e[o])}))?e.splice(o--,1):(c=!1,r<i&&(i=r));if(c){t.splice(u--,1);var l=n();void 0!==l&&(s=l)}}return s}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,n,r]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.p="/REPO_NAME/"}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var n,r,i=e[0],c=e[1],o=e[2],l=0;if(i.some((function(s){return 0!==t[s]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(o)var u=o(a)}for(s&&s(e);l<i.length;l++)r=i[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},e=self["webpackChunktest_getmore"]=self["webpackChunktest_getmore"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(271)}));e=a.O(e)})();
//# sourceMappingURL=app.4a4a63da.js.map