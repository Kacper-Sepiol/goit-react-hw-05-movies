"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[229],{229:function(e,t,n){n.r(t);var r=n(439),c=n(791),i=n(87),u=n(184);t.default=function(){var e="https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=".concat("493ca07ced65ee69b94ce62a3e3db755"),t=(0,c.useState)([]),n=(0,r.Z)(t,2),a=n[0],o=n[1];return(0,c.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.results.filter((function(e,t){return 20!==t})).filter((function(e){return e.title}));o(t)})).catch((function(e){return console.error(e)}))}),[e]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Trending Today"}),(0,u.jsx)("ul",{children:a.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=229.f448e0b2.chunk.js.map