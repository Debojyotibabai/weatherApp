(this["webpackJsonpweather-map"]=this["webpackJsonpweather-map"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(5),r=n.n(s),h=(n(4),n(3)),o=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)({Name:"Search for city namesss",Temp:"",Description:""}),r=Object(h.a)(s,2),o=r[0],u=r[1];return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("h1",{className:"main-heading",children:["Weather ",Object(c.jsx)("br",{})," Map"]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===n?alert("Please add a city name."):(fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=142edd739fe653be18bd7941f7adf3ca&units=metric")).then((function(e){return e.json()})).then((function(e){u({Name:e.name,Temp:"".concat(e.main.temp,"\xb0"),Description:e.weather[0].description})})),i(""))},className:"search",children:[Object(c.jsx)("input",{type:"text",placeholder:"Type here",onChange:function(e){i(e.target.value)},required:!0,autoFocus:!0,value:n}),Object(c.jsx)("button",{type:"submit",children:"Search"})]}),Object(c.jsxs)("div",{className:"result",children:[Object(c.jsx)("h1",{children:o.Name}),Object(c.jsx)("h3",{children:o.Temp}),Object(c.jsx)("p",{children:o.Description})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(o,{})}),document.getElementById("root")),u()},4:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.0efa8bc2.chunk.js.map