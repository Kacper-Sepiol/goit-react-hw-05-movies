"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(e,t,n){n.r(t);var r=n(439),c=n(791),i=n(689),o=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],u=(0,i.UO)().movieId;return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(u,"/reviews?api_key=").concat("493ca07ced65ee69b94ce62a3e3db755")).then((function(e){return e.json()})).then((function(e){return s(e.results)})).catch((function(e){return console.error("Error fetching reviews:",e)}))}),[u]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Recenzje"}),(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=736.79f31112.chunk.js.map