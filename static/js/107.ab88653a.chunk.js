"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[107],{126:function(t,e,n){n.d(e,{Z:function(){return c}});n(791);var r=n(87),u=n(689),a=n(184);function i(t){var e=t.id,n=t.title,i=(0,u.TH)();return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e),state:{from:i},children:n})})}function c(t){var e=t.movies;return(0,a.jsx)("ul",{children:e.map((function(t){return(0,a.jsx)(i,{title:t.title,id:t.id},t.id)}))})}},107:function(t,e,n){n.r(e);var r=n(885),u=n(126),a=n(921),i=n(184);e.default=function(){var t=(0,a.nB)("/trending/movie/day"),e=(0,r.Z)(t,1)[0];return e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),";",(0,i.jsx)(u.Z,{movies:e})]})}},921:function(t,e,n){n.d(e,{Sb:function(){return d},TA:function(){return f},vQ:function(){return v},Sk:function(){return s},nB:function(){return o}});var r=n(885),u=n(44),a=n(791);function i(){var t=(0,a.useRef)(!0);return t.current?(t.current=!1,!0):t.current}var c=u.ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f860fd14767163b7a314379672b23f90",language:"en-US"}});function o(){var t=(0,a.useState)(!1),e=(0,r.Z)(t,2),n=e[0],u=e[1],i=(0,a.useState)([]),o=(0,r.Z)(i,2),s=o[0],f=o[1];return(0,a.useEffect)((function(){u(!0),c.get("/trending/movie/day").then((function(t){f(t.data.results),u(!1)}))}),[]),[s,n]}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(0,a.useState)(!1),n=(0,r.Z)(e,2),u=n[0],o=n[1],s=(0,a.useState)([]),f=(0,r.Z)(s,2),d=f[0],v=f[1],l=(0,a.useState)(t),h=(0,r.Z)(l,2),m=h[0],S=h[1],Z=i();return(0,a.useEffect)((function(){if(!Z.current&&""!==m){var t={params:{query:m}};o(!0),c.get("/search/movie",t).then((function(t){v(t.data.results),o(!1)}))}}),[Z,m]),{movies:d,setSearch:S,loading:u}}function f(t){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),u=n[0],i=n[1],o=(0,a.useState)({}),s=(0,r.Z)(o,2),f=s[0],d=s[1],v=(0,a.useState)(!1),l=(0,r.Z)(v,2),h=l[0],m=l[1];return(0,a.useEffect)((function(){i(!0),c.get("/movie/".concat(t)).then((function(t){d(t.data),m(!0),i(!1)}))}),[t]),{loading:u,movie:f,done:h}}function d(t){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),u=n[0],i=n[1],o=(0,a.useState)({}),s=(0,r.Z)(o,2),f=s[0],d=s[1],v=(0,a.useState)(!1),l=(0,r.Z)(v,2),h=l[0],m=l[1];return(0,a.useEffect)((function(){i(!0),c.get("/movie/".concat(t,"/credits")).then((function(t){d(t.data.cast),m(!0),i(!1)}))}),[t]),{loading:u,cast:f,done:h}}function v(t){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),u=n[0],i=n[1],o=(0,a.useState)({}),s=(0,r.Z)(o,2),f=s[0],d=s[1],v=(0,a.useState)(!1),l=(0,r.Z)(v,2),h=l[0],m=l[1];return(0,a.useEffect)((function(){i(!0),c.get("/movie/".concat(t,"/reviews")).then((function(t){d(t.data.results),m(!0),i(!1)}))}),[t]),{loading:u,reviews:f,done:h}}}}]);
//# sourceMappingURL=107.ab88653a.chunk.js.map