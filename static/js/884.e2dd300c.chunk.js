"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,n,t){t.r(n);var r=t(439),i=t(791),c=t(689),s=t(87),o=t(184),h=(0,i.lazy)((function(){return t.e(493).then(t.bind(t,493))})),a=(0,i.lazy)((function(){return t.e(736).then(t.bind(t,736))}));n.default=function(){var e=(0,c.UO)().movieId,n=(0,i.useState)({}),t=(0,r.Z)(n,2),l=t[0],d=t[1];return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("493ca07ced65ee69b94ce62a3e3db755")).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return console.error("Error fetching movie details:",e)}))}),[e]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h1",{children:l.title}),(0,o.jsx)("h3",{children:"Overview:"}),(0,o.jsx)("h4",{children:l.overview}),(0,o.jsx)("h3",{children:"run time:"}),(0,o.jsx)("h4",{children:l.runtime}),(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsxs)("nav",{children:[(0,o.jsx)(s.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"}),(0,o.jsx)("br",{}),(0,o.jsx)(s.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})]})]}),(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)("h1",{children:"Loading..."}),children:(0,o.jsxs)(c.Z5,{children:[(0,o.jsx)(c.AW,{path:"/".concat(e,"/cast"),element:(0,o.jsx)(h,{})}),(0,o.jsx)(c.AW,{path:"/movies/:movieId/reviews",element:(0,o.jsx)(a,{})})]})}),(0,o.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=884.e2dd300c.chunk.js.map