(this["webpackJsonpdevgurus-test"]=this["webpackJsonpdevgurus-test"]||[]).push([[0],{24:function(e,t,a){e.exports=a(46)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(7),i=a(2),m=(a(30),a(31),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"test"),r.a.createElement("small",null,"by ",r.a.createElement("strong",null,"Gustavo Lopez")))))}),u=a(18),s=a(10),E=a.n(s),d=a(14),g="http://api.tvmaze.com/search/shows?q=girls",p={text:"devgurus.io",link:"/",isBlank:!1},f=function(){var e=Object(d.a)(E.a.mark((function e(){var t,a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=n.map((function(e){var t,a,n,r=e.show;return{id:r.id,thumbnail:r.image.medium,title:r.name,description:null!==(t=r.summary)&&void 0!==t?t:"",genres:r.genres,raitingAverage:null!==(a=r.rating.average)&&void 0!==a?a:"",datePremier:null!==(n=r.premiered)&&void 0!==n?n:"",language:r.language}})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return a=e.sent,n=a.find((function(e){return e.id===t})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(a(33),function(e){e.id;var t=e.title,a=e.thumbnail,n=e.description,l=e.genres,c=e.raitingAverage,o=e.datePremier,i=e.language;return r.a.createElement("article",{className:"photo-detail"},r.a.createElement("div",{className:"container-photo"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("ul",null,null===l||void 0===l?void 0:l.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("h1",{className:"raiting"},c),r.a.createElement("small",null,""!==c&&r.a.createElement("em",null,"raiting"))),r.a.createElement("div",{className:"container-detail"},r.a.createElement("h2",{className:"title"},t),r.a.createElement("hr",null),r.a.createElement("div",{className:"detail"},r.a.createElement("p",null,n),r.a.createElement("div",{className:"date-language"},r.a.createElement("div",null,r.a.createElement("strong",null,"Date Premier "),r.a.createElement("span",null,o)),r.a.createElement("div",null,r.a.createElement("strong",null,"Language "),r.a.createElement("span",null,i))))))}),b=(a(34),function(e){var t=e.error;return r.a.createElement("div",null,r.a.createElement("h1",null,"Error"),r.a.createElement("pre",null,t))}),w=a(12),N=a(9);v.propTypes={};var k=function(e){var t=Object(i.f)(),a=function(e){var t=Object(n.useState)({messageError:void 0,data:{},loading:!0}),a=Object(u.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){h(e).then((function(e){l({data:e,loading:!1})})).catch((function(e){l({messageError:e,data:{},loading:!1})}))}),[e]),r}(parseInt(t.id)),l=a.data,c=a.loading,o=a.messageError;return o?r.a.createElement(b,{error:o}):r.a.createElement("div",null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loading"},r.a.createElement("h3",null,"loading"),r.a.createElement(N.a,{icon:w.a,size:"3x",spin:!0}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v,l)))},x=(a(42),function(e){var t=e.id,a=e.thumbnail,n=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"photo-item",key:t},r.a.createElement("div",{className:"photo-item-img"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:"photo-item-desc"},r.a.createElement("p",null,n),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/photo/".concat(t)},r.a.createElement("button",null,"show more..."))))))}),j=(a(43),function(){var e=function(){var e=Object(n.useState)({messageError:void 0,data:[],loading:!0}),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){f().then((function(e){r({data:e,loading:!1})})).catch((function(e){r({messageError:e,data:[],loading:!1})}))}),[]),a}(),t=e.data,a=e.loading,l=e.messageError;return l?r.a.createElement(b,{error:l}):r.a.createElement("div",null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loading"},r.a.createElement("h3",null,"loading"),r.a.createElement(N.a,{icon:w.a,size:"3x",spin:!0}))),r.a.createElement("ul",{className:"photo-list"},t.map((function(e,t){return r.a.createElement(x,Object.assign({key:t},e))}))))}),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Not Found"))},F=(a(44),function(e){var t=p;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:t.link,target:t.isBlank?"_blank":"",rel:t.isBlank?"noopener noreferrer":""},r.a.createElement("h1",{className:"brand"},t.text)),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/photo"},r.a.createElement("button",null,"Call API")))))}),O=(a(45),a(23)),B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/gustavoml/"},r.a.createElement(N.a,{icon:O.a})),r.a.createElement("strong",null,"copyright"),r.a.createElement("small",null,(new Date).getFullYear()))))},z=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),t,r.a.createElement(B,null))},P=function(){return r.a.createElement(o.a,null,r.a.createElement(z,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:m}),r.a.createElement(i.a,{path:"/photo/:id",component:k}),r.a.createElement(i.a,{path:"/photo",component:j}),r.a.createElement(i.a,{exact:!0,path:"*",component:y}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.eeaa9e0f.chunk.js.map