(this.webpackJsonpascc=this.webpackJsonpascc||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(4),i=n.n(r),j=(n(10),n(11),function(){return Object(c.jsx)("div",{className:"head",children:Object(c.jsx)("h1",{children:"User Request"})})}),l=n(2),u=function(e){return null===e.data?Object(c.jsx)(c.Fragment,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Results"}),Object(c.jsx)("div",{id:"results",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:e.data.picture.thumbnail,alt:""}),Object(c.jsx)("span",{children:e.data.name.first}),Object(c.jsx)("span",{children:e.name}),Object(c.jsxs)("span",{children:[e.data.location.city,","]}),Object(c.jsx)("span",{children:e.data.location.country})]})})]})},d=function(){return fetch("https://randomuser.me/api/",{method:"GET"}).then((function(e){return e.json()}))},b=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),i=Object(l.a)(r,2),j=i[0],b=i[1],o=Object(s.useState)(""),h=Object(l.a)(o,2),O=h[0],x=h[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d().then((function(e){a(e.results[0])}))},id:"searchForm",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Last Name"}),Object(c.jsx)("input",{type:"text",placeholder:"Enter User Name",onChange:function(e){return t=e.target.value,b(t.charAt(0).toUpperCase()+t.slice(1));var t},name:"name"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"text",placeholder:"Enter User Email",onChange:function(e){return x(e.target.value)},name:"email"})]}),Object(c.jsx)("input",{type:"submit",value:"Submit"}),Object(c.jsx)("input",{type:"button",value:"Clear",onClick:function(){document.getElementById("searchForm").reset(),a(null)}})]})}),Object(c.jsx)("div",{children:Object(c.jsx)(u,{data:n,name:j,email:O})})]})};var o=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsx)(b,{})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(o,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.640c2222.chunk.js.map