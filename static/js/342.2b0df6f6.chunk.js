"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{342:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var i=t(439),r=t(791),s=t(689),c=t(87),a="movieDetails_linkMovieDetails__Krc5H",o=t(184),h=(0,r.lazy)((function(){return t.e(37).then(t.bind(t,37))})),l=(0,r.lazy)((function(){return t.e(602).then(t.bind(t,602))})),d=function(){var e=(0,s.UO)().movieId,n=(0,r.useState)({}),t=(0,i.Z)(n,2),d=t[0],u=t[1],j=(0,s.TH)();return(0,r.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("493ca07ced65ee69b94ce62a3e3db755")).then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){return console.error("Error fetching movie details:",e)}))}),[e]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h1",{children:d.title}),(0,o.jsx)("h3",{children:"Overview:"}),(0,o.jsx)("h4",{children:d.overview}),(0,o.jsx)("h3",{children:"run time:"}),(0,o.jsx)("h4",{children:d.runtime}),(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsxs)("nav",{children:[(0,o.jsx)(c.rU,{to:"/movies/".concat(e,"/cast"),state:{from:j},className:a,children:"Cast"}),(0,o.jsx)("br",{}),(0,o.jsx)(c.rU,{to:"/movies/".concat(e,"/reviews"),state:{from:j},className:a,children:"Reviews"})]})]}),(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("h1",{children:"Loading..."}),children:(0,o.jsxs)(s.Z5,{children:[(0,o.jsx)(s.AW,{path:"/".concat(e,"/cast"),element:(0,o.jsx)(h,{})}),(0,o.jsx)(s.AW,{path:"/movies/:movieId/reviews",element:(0,o.jsx)(l,{})})]})}),(0,o.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=342.2b0df6f6.chunk.js.map