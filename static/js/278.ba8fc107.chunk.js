"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{81:function(t,e,r){r.d(e,{Hm:function(){return f},Hx:function(){return l},MM:function(){return i},So:function(){return o},Tk:function(){return s},Vs:function(){return p},uV:function(){return h}});var n=r(861),u=r(757),a=r.n(u),c=r(243),i="https://themoviedb.org/t/p/w1280",s="https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png";c.Z.defaults.baseURL="https://api.themoviedb.org/3";c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzViODgyYzJmYWZhYTc1M2EyYjFlNjFhZTMxYWZlMyIsInN1YiI6IjY0MThjMGNhNmEyMjI3MDBlOTc2NmYyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HpUKoGZIk3XOJnE1mgAPzzSJnPYgOT4_k3_XM1sQUtc";var o=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.toLowerCase().trim(),t.next=3,c.Z.get("/search/movie",{params:{query:r}});case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},773:function(t,e,r){r(791);var n=r(175),u=r(184);e.Z=function(){return(0,u.jsxs)(n.ZP,{speed:2,width:460,height:460,viewBox:"0 0 460 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,u.jsx)("rect",{x:"6",y:"35",rx:"0",ry:"0",width:"140",height:"166"}),(0,u.jsx)("rect",{x:"10",y:"222",rx:"0",ry:"0",width:"363",height:"31"}),(0,u.jsx)("rect",{x:"10",y:"262",rx:"0",ry:"0",width:"363",height:"130"})]})}},368:function(t,e,r){r.d(e,{O:function(){return c}});var n=r(689),u=r(87),a=r(184);function c(t){var e=t.movies,r=t.addPath,c=void 0===r?"":r,i=(0,n.TH)();return(0,a.jsx)("ul",{children:e.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsxs)(u.rU,{to:"".concat(c+t.id),state:{from:i},children:[t.title," "]})},t.id)}))})}},278:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),u=r(439),a=r(757),c=r.n(a),i=r(368),s=r(87),o=r(791),f=r(81),p=r(773),h=r(184);function l(){var t,e=(0,o.useState)([]),r=(0,u.Z)(e,2),a=r[0],l=r[1],d=(0,o.useState)(!1),v=(0,u.Z)(d,2),m=v[0],x=v[1],y=(0,s.lr)(),w=(0,u.Z)(y,2),Z=w[0],g=w[1],j=null!==(t=Z.get("keyWord"))&&void 0!==t?t:"";return(0,o.useEffect)((function(){function t(){return t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,f.Hm)(e);case 4:r=t.sent,l(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,x(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])}))),t.apply(this,arguments)}""!==j&&function(e){t.apply(this,arguments)}(j)}),[j]),(0,h.jsxs)("main",{children:[(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==t.currentTarget.elements.film.value&&g({keyWord:t.currentTarget.elements.film.value})},children:[(0,h.jsx)("input",{type:"text",name:"film"}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),!m&&(0,h.jsx)(i.O,{movies:a}),m&&(0,h.jsx)(p.Z,{})]})}}}]);
//# sourceMappingURL=278.ba8fc107.chunk.js.map