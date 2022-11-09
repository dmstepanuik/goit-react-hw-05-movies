"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[548],{548:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(921),u=(n(791),n(689)),a=n(84),c=n(928),i=n(184);function s(){var e=(0,u.UO)().id,t=(0,r.Sb)(e),n=t.loading,s=t.cast,o=t.done;return n||o?n?(0,i.jsx)("h3",{children:"Loading..."}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"Cast"}),(0,i.jsx)("ul",{children:s.map((function(e){var t=e.profile_path?"".concat(a.H).concat(e.profile_path):c;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h2",{children:["Character:",e.character]}),(0,i.jsxs)("p",{children:["Name:",e.name]}),(0,i.jsx)("img",{src:t,alt:"",width:50})]},e.id)}))})]}):null}},921:function(e,t,n){n.d(t,{Sb:function(){return d},TA:function(){return f},vQ:function(){return A},Sk:function(){return o},nB:function(){return s}});var r=n(885),u=n(44),a=n(791);function c(){var e=(0,a.useRef)(!0);return e.current?(e.current=!1,!0):e.current}var i=u.ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f860fd14767163b7a314379672b23f90",language:"en-US"}});function s(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],u=t[1],c=(0,a.useState)([]),s=(0,r.Z)(c,2),o=s[0],f=s[1];return(0,a.useEffect)((function(){u(!0),i.get("/trending/movie/day").then((function(e){f(e.data.results),u(!1)}))}),[]),[o,n]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],s=n[1],o=(0,a.useState)([]),f=(0,r.Z)(o,2),d=f[0],A=f[1],h=(0,a.useState)(e),l=(0,r.Z)(h,2),v=l[0],p=l[1],S=c();return(0,a.useEffect)((function(){if(!S.current&&""!==v){var e={params:{query:v}};s(!0),i.get("/search/movie",e).then((function(e){A(e.data.results),s(!1)}))}}),[S,v]),{movies:d,setSearch:p,loading:u}}function f(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],c=n[1],s=(0,a.useState)({}),o=(0,r.Z)(s,2),f=o[0],d=o[1],A=(0,a.useState)(!1),h=(0,r.Z)(A,2),l=h[0],v=h[1];return(0,a.useEffect)((function(){c(!0),i.get("/movie/".concat(e)).then((function(e){d(e.data),v(!0),c(!1)}))}),[e]),{loading:u,movie:f,done:l}}function d(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],c=n[1],s=(0,a.useState)({}),o=(0,r.Z)(s,2),f=o[0],d=o[1],A=(0,a.useState)(!1),h=(0,r.Z)(A,2),l=h[0],v=h[1];return(0,a.useEffect)((function(){c(!0),i.get("/movie/".concat(e,"/credits")).then((function(e){d(e.data.cast),v(!0),c(!1)}))}),[e]),{loading:u,cast:f,done:l}}function A(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),u=n[0],c=n[1],s=(0,a.useState)({}),o=(0,r.Z)(s,2),f=o[0],d=o[1],A=(0,a.useState)(!1),h=(0,r.Z)(A,2),l=h[0],v=h[1];return(0,a.useEffect)((function(){c(!0),i.get("/movie/".concat(e,"/reviews")).then((function(e){d(e.data.results),v(!0),c(!1)}))}),[e]),{loading:u,reviews:f,done:l}}},928:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAMFBMVEWVu9////+QuN6JtNzk7fb2+fzu9PnP3/CFstvT4vGjxOOvy+ba5vPF2e270uqfweJZ24rFAAADV0lEQVRoge1ba5OrIAyFIKg85P//2yu1j21VSGxSZ+54Puxsd5w9EkIeJ0WpCxcuXGgAZrz/8jvqIacxds5a67o4pjz87AXAhKg/EcNPLAAw2RV3gZ3k+SG4Te4CF4Tpod/lLuhF6U1XJde6M4Lk+1Z/Wl+MHlorv61eyPiQEORaJxl6jyLX2kuQNz3uaXuJrQ9Icq0DPzl66SKLz2hyrTM3OdLhF7C7PcHwAqY3BHKtudmxh30B85GHicQ+8W58I7N+gjnTwrqWqiH+V+yUA8eeZi/209jP9bqRxD4ys1NSHHuSA3xlU8Dd1FCKC/7y4twMa7Yb121YbnbSkWM+cGfXdYRyXqKgp7gdfyd3bjdBqOyYq7ob8FWtRBN7bg+LNr2E4We0VZsCK8KNrenFVDMUuxA3bvFygiEm3snJhQi3F3L4G0wrz0ZBpVS1Tp0T5VZQj7deWiKvlZdZfjyQ9yo8K0u+TD5AbaebTsHrIQHucG8StiYz9n7UykP8/GAm9/QqgOnd991jIlS80k2GlR+MvwfZRzABo1LsrNXWdjGpB90jHPWe6wUAfP+y9CuM/5lFPv/0SgQ2eYYdgJw+jLx7psF/PJm+PASQ49rBRrX1T0GtW3wbv+E3Ow3MmIc3swIMeUdeSIcDf0WssX1Qxph5z+efKvT7PeZRCaelFJXxcyyD6Ppjx+iJ0uw+DlU7NE28hgPdxUBT6GroBip5I5HTQE77RHmwDrqWwUhOrvGJk5AWiJUuURVugXjmd8unY7A0+ZDT4wtIR54oCrdB0tBIc08MSHoG4IQCPBxl7dzbTtt4mhqPAUG+ZHc6ktuxBvkFhFCP+E4RFYTvIAFvpCuw+LXThjA4oGMtcQCFA3pMxZxeF6CTLFs1+xfoyrapTB0BWs0SOHCEI0eavWGBntENAuRaY4t62tQTC3SwE2HHkkuEOnyw468tCpD1hUigRYfac9lP9rpzYx13H1VA6KVAJeY+Lm1qfLv8JtC+31PDGOiqbZGGv3cAd1wwBpVTd/wNXJcyyeLrFwDlp9hSBFewLk6eZ04BADmkDb14hzmmkJmv8ACY2Qop1jbCxTSv2EjdXCmq8AA+pL7cFCpXhax15bZQn4KHwfzk0hIs2Px04cKFC5v4B9FWJOE9CueWAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=548.3edd0eb7.chunk.js.map