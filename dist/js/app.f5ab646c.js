(function(e){function t(t){for(var o,s,c=t[0],u=t[1],l=t[2],a=0,d=[];a<c.length;a++)s=c[a],r[s]&&d.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7fb6bf3e"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),i=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");s.type=o,s.request=i,n[1](s)}r[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var o=n("bcc9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],s=(n("5c0b"),n("2877")),c={},u=Object(s["a"])(c,r,i,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,a=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"score"},[e._v("NBack:\n    "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:e.nBackLevel,expression:"nBackLevel",modifiers:{number:!0}}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(t){var n="_value"in t?t._value:t.value;return e._n(n)});e.nBackLevel=t.target.multiple?n:n[0]}}},[n("option",[e._v("1")]),n("option",[e._v("2")]),n("option",[e._v("3")]),n("option",[e._v("4")]),n("option",[e._v("5")])]),e._v(" - Points: "+e._s(e.points))]),n("table",{staticClass:"grid"},e._l(e.rows,function(t){return n("tr",{key:t,staticClass:"grid__row"},e._l(e.columns,function(o){return n("td",{key:o,staticClass:"grid__cell",class:{grid__selected:e.selectedRow===t&&e.selectedColumn===o}},[e.selectedRow===t&&e.selectedColumn===o?n("span",{staticClass:"grid__number"},[e._v(e._s(e.selectedNumber))]):n("span",[e._v(" ")])])}),0)}),0),n("div",{staticClass:"controls"},[n("div",{staticClass:"controls__left",on:{click:e.userSelectedPosition}},[e._v("← Position")]),n("div",{staticClass:"controls__right",on:{click:e.userSelectedNumber}},[e._v("Number →")])])])},d=[],f=n("53ca"),p={name:"home",data:function(){return{columns:3,rows:3,selectedRow:2,selectedColumn:2,selectedNumber:5,nBackLevel:1,points:0}},created:function(){window.addEventListener("keydown",this.onKey),this.interval=2e3,this.history=[],this.tries={number:!1,position:!1},this.pushToHistory(),this.engine=setInterval(this.createSelection,this.interval)},methods:{createSelection:function(){this.checkForPenalty(),this.tries.number=!1,this.tries.position=!1,this.selectedColumn=this.getRandomPosition(),this.selectedRow=this.getRandomPosition(),this.selectedNumber=this.getRandomNumber(),this.pushToHistory()},checkForPenalty:function(){return this.history.length<1+this.nBackLevel?0:(!1===this.tries.number&&this.checkNumber()&&(this.points-=1),!1===this.tries.position&&this.checkPosition()&&(this.points-=1),0)},getRandomPosition:function(){return Math.floor(3*Math.random()+1)},getRandomNumber:function(){return Math.floor(10*Math.random())},onKey:function(e){var t="ArrowRight",n="ArrowLeft",o=e.key;o===t?this.userSelectedNumber():o===n&&this.userSelectedPosition()},userSelectedNumber:function(){this.tries.number||(this.tries.number=!0,this.points+=this.checkNumber()?1:-1,console.log(this.points))},userSelectedPosition:function(){this.tries.position||(this.tries.position=!0,this.points+=this.checkPosition()?1:-1,console.log(this.points))},checkNumber:function(){var e=this.history.length;return this.selectedNumber===this.history[e-1-this.nBackLevel].number},checkPosition:function(){var e=this.history.length,t=this.history[e-1-this.nBackLevel];return this.selectedColumn===t.column&&this.selectedRow===t.row},pushToHistory:function(){this.history.push({column:this.selectedColumn,row:this.selectedRow,number:this.selectedNumber});var e=this.history.length;e>this.nBackLevel+1&&(this.history=this.history.splice(e-this.nBackLevel-1),console.log("nBackLevel:",this.nBackLevel,Object(f["a"])(this.nBackLevel)),console.log("history length:",this.history.length))}}},v=p,m=(n("21bb"),Object(s["a"])(v,h,d,!1,null,null,null));m.options.__file="Home.vue";var b=m.exports;o["a"].use(a["a"]);var g=new a["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),y=n("2f62");o["a"].use(y["a"]);var _=new y["a"].Store({state:{},mutations:{},actions:{}}),w=n("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:g,store:_,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},bcc9:function(e,t,n){}});
//# sourceMappingURL=app.f5ab646c.js.map