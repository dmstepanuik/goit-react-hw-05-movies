"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[990],{126:function(e,t,n){n.d(t,{Z:function(){return c}});n(791);var r=n(87),u=n(689),a=n(184);function i(e){var t=e.id,n=e.title,i=(0,u.TH)();return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:i},children:n})})}function c(e){var t=e.movies;return(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)(i,{title:e.title,id:e.id},e.id)}))})}},618:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(126),u=(n(791),n(184));function a(e){var t=e.setSearch;return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target,r=n.elements.search.value.trim().toLowerCase();""!==r&&(t(r),n.reset())},children:[(0,u.jsx)("label",{children:(0,u.jsx)("input",{name:"search",type:"text"})}),(0,u.jsx)("button",{type:"sumbit",children:"Search"})]})}var i=n(921);function c(){var e=(0,i.Sk)(""),t=e.movies,n=e.setSearch;return t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Movies"}),(0,u.jsx)(a,{setSearch:n}),(0,u.jsx)(r.Z,{movies:t})]})}},921:function(e,t,n){n.d(t,{Sb:function(){return v},TA:function(){return f},vQ:function(){return d},Sk:function(){return o},nB:function(){return s}});var r=n(885),u=n(44),a=n(791);function i(){var e=(0,a.useRef)(!0);return e.current?(e.current=!1,!0):e.current}var c=u.ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f860fd14767163b7a314379672b23f90",language:"en-US"}});function s(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],u=t[1],i=(0,a.useState)([]),s=(0,r.Z)(i,2),o=s[0],f=s[1];return(0,a.useEffect)((function(){u(!0),c.get("/trending/movie/day").then((function(e){f(e.data.results),u(!1)}))}),[]),[o,n]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],s=n[1],o=(0,a.useState)([]),f=(0,r.Z)(o,2),v=f[0],d=f[1],l=(0,a.useState)(e),h=(0,r.Z)(l,2),m=h[0],S=h[1],Z=i();return(0,a.useEffect)((function(){if(!Z.current&&""!==m){var e={params:{query:m}};s(!0),c.get("/search/movie",e).then((function(e){d(e.data.results),s(!1)}))}}),[Z,m]),{movies:v,setSearch:S,loading:u}}function f(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],i=n[1],s=(0,a.useState)({}),o=(0,r.Z)(s,2),f=o[0],v=o[1],d=(0,a.useState)(!1),l=(0,r.Z)(d,2),h=l[0],m=l[1];return(0,a.useEffect)((function(){i(!0),c.get("/movie/".concat(e)).then((function(e){v(e.data),m(!0),i(!1)}))}),[e]),{loading:u,movie:f,done:h}}function v(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],i=n[1],s=(0,a.useState)({}),o=(0,r.Z)(s,2),f=o[0],v=o[1],d=(0,a.useState)(!1),l=(0,r.Z)(d,2),h=l[0],m=l[1];return(0,a.useEffect)((function(){i(!0),c.get("/movie/".concat(e,"/credits")).then((function(e){v(e.data.cast),m(!0),i(!1)}))}),[e]),{loading:u,cast:f,done:h}}function d(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],i=n[1],s=(0,a.useState)({}),o=(0,r.Z)(s,2),f=o[0],v=o[1],d=(0,a.useState)(!1),l=(0,r.Z)(d,2),h=l[0],m=l[1];return(0,a.useEffect)((function(){i(!0),c.get("/movie/".concat(e,"/reviews")).then((function(e){v(e.data.results),m(!0),i(!1)}))}),[e]),{loading:u,reviews:f,done:h}}}}]);
//# sourceMappingURL=990.f845169d.chunk.js.map