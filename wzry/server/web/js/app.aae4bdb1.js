(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b0a4abd0"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var o=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,s[1](o)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"05d8":function(t,e,s){t.exports=s.p+"img/3b9fcda2d5c6d441c79b2c07f7846898.3b9fcda2.jpeg"},1399:function(t,e,s){"use strict";s("1660")},1660:function(t,e,s){},"21bb":function(t,e,s){"use strict";s("4850")},"22de":function(t,e,s){"use strict";s("8319")},"418a":function(t,e,s){},4850:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("2877"),c={},l=Object(r["a"])(c,i,n,!1,null,null,null),o=l.exports,u=(s("be35"),s("78a7"),s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("05d8")}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("a938")}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("05d8")}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3 pt-3 text-dark-1"},[a("div",{staticClass:"d-flex flex-wrap"},t._l(12,(function(e){return a("div",{key:e,staticClass:"nav-item mb-3 text-center"},[a("i",{staticClass:"sprite sprite-news"}),a("div",{staticClass:"py-2"},[t._v(" 爆料站 ")])])})),0),t._m(0)]),a("m-list-card",{attrs:{icon:"cc-menu-circle",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),a("m-list-card",{attrs:{icon:"card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])}),a("m-card",{attrs:{icon:"Video1",title:"精彩视频"}})],1)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 text-center fs-sm"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],f=s("1da1"),v=(s("96cf"),s("5a0c")),m=s.n(v),b={filters:{date:function(t){return m()(t).format("MM/DD")}},data:function(){return{swiperOptions:{pagination:{el:".pagination-home"}},newsCats:[],heroCats:[]}},methods:{fetchNewsCats:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,t.newsCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:s=e.sent,t.heroCats=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNewsCats(),this.fetchHeroCats()}},_=b,g=(s("21bb"),Object(r["a"])(_,d,p,!1,null,null,null)),h=g.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-inverse pb-1 jc-around"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("cf05"),height:"31"}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-gery-1 fs-sm"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],w={},y=w,k=(s("22de"),Object(r["a"])(y,C,x,!1,null,null,null)),j=k.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[s("div",{staticClass:"iconfont icon-back text-blue"}),s("strong",{staticClass:"flex-1 text-blue pl-2"},[t._v(" "+t._s(t.model.title)+" ")]),s("div",{staticClass:"text-grey fs-xs"},[t._v(" 2019-06-19 ")])]),s("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),s("div")]):t._e()},S=[],$={props:{id:{required:!0}},data:function(){return{model:null}},methods:{fetch:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:s=e.sent,console.log(s),t.model=s.data;case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch()}},E=$,P=(s("1399"),Object(r["a"])(E,O,S,!1,null,null,null)),R=P.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("cf05"),height:"31"}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v(" 皮肤:2 > ")])],1)])]),a("div",[t._m(1),a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-Video"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-tupian"}),t._v(" 英雄介绍视频 ")])],1),a("div",{staticClass:"skills bg-white mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:e.name,staticClass:"icon ",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex pt-4 pb-3"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v(" (冷却值: "+t._s(t.currentSkill.delay)+" 消耗: "+t._s(t.currentSkill.cost)+") ")])]),a("p",[t._v(t._s(t.currentSkill.description))])]):t._e()])]),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"zhuangbei",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,(function(e){return a("div",{key:e.naem},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,(function(e){return a("div",{key:e.naem},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"zhuangbei",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"zhuangbei",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"zhuangbei",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"zhuangbei",title:"英雄关系"}},[a("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v(" "+t._s(e.description)+" ")])])})),a("div",{staticClass:"border-bottom mt-3"})],2)],1)]),a("swiper-slide")],1)],1)]):t._e()},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",{staticClass:"text-white"},[t._v("王者荣耀")]),s("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white px-3"},[s("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v(" 进阶攻略 ")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v(" 进阶攻略 ")])])])])}],L={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch()}},A=L,M=(s("6e94"),Object(r["a"])(A,T,q,!1,null,null,null)),I=M.exports;a["default"].use(u["a"]);var z=[{path:"/",component:j,children:[{path:"/",name:"home",component:h},{path:"/articles/:id",name:"article",component:R,props:!0}]},{path:"/heroes/:id",name:"hero",component:I,props:!0},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],N=new u["a"]({routes:z}),H=N,U=s("7212"),V=s.n(U),D=(s("a7a3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white p-3 mt-3 "},[s("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[s("strong",[t._v(t._s(t.title))])]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),B=[],J={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},F=J,G=(s("e60d"),Object(r["a"])(F,D,B,!1,null,null,null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,title:t.title}},[s("div",{staticClass:"card-body pt-3"},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.$swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{transitionStart:function(){return t.active=t.$refs.list.$swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])])},W=[],X={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},Y=X,Z=Object(r["a"])(Y,Q,W,!1,null,null,null),tt=Z.exports,et=s("bc3a"),st=s.n(et);a["default"].config.productionTip=!1,a["default"].use(V.a),a["default"].component("m-card",K),a["default"].component("m-list-card",tt),a["default"].prototype.$http=st.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new a["default"]({router:H,render:function(t){return t(o)}}).$mount("#app")},"6e94":function(t,e,s){"use strict";s("bf0f")},"78a7":function(t,e,s){},8319:function(t,e,s){},a938:function(t,e,s){t.exports=s.p+"img/c835b52d2a83743fdc3ce87ad4cfb166.c835b52d.jpeg"},be35:function(t,e,s){},bf0f:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.b3b3bca8.png"},e60d:function(t,e,s){"use strict";s("418a")}});
//# sourceMappingURL=app.aae4bdb1.js.map