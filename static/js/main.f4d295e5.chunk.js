(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{26:function(n,e,r){},27:function(n,e,r){"use strict";r.r(e);var t,c,i,o,u,a,s=r(4),d=r(14),l=r(0),b=r.n(l),m=r(1),j=Object(l.createContext)(),f=function(n){var e=n.children,r=Object(l.useState)({sign:"",num:0,res:0}),t=Object(d.a)(r,2),c={calc:t[0],setCalc:t[1]};return Object(m.jsx)(j.Provider,{value:c,children:e})},x=r(2),g=r(3),p=g.a.button(t||(t=Object(x.a)(["\n  background: #ffffff;\n  height: 3.5rem;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #242424;\n  border: none;\n  &:hover {\n    border: 3px dotted #242424;\n  }\n"]))),h=g.a.button(c||(c=Object(x.a)(["\n  font-size: 16px;\n  background: #4db086;\n  grid-column: 3/5;\n  height: 3.5rem;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: ",";\n  border: none;\n  &:hover {\n    border: 3px dotted #242424;\n  }\n"])),(function(n){return n.color})),O=g.a.button(i||(i=Object(x.a)(["\n  background: #f79505;\n  grid-column: 4/5;\n  height: 3.5rem;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #242424;\n  border: none;\n  &:hover {\n    border: 3px dotted #242424;\n  }\n"]))),v=function(n){var e=n.value,r=Object(l.useContext)(j),t=r.calc,c=r.setCalc,i=function(){c(Object(s.a)(Object(s.a)({},t),{},{num:t.num.toString().includes(".")?t.num:t.num+e}))},o=function(){c({sign:"",num:0,res:0})},u=function(){c({sign:e,res:!t.res&&t.num?t.num:t.res,num:0})},a=function(){if(t.res&&t.num){c({res:(n=t.res,e=t.num,r=t.sign,{"+":function(n,e){return n+e},"-":function(n,e){return n-e},"/":function(n,e){return n/e},"*":function(n,e){return n*e}}[r](n,e)),sign:"",num:0})}var n,e,r},d=function(){c({res:t.res/100,sign:"",num:t.num/100})},b=function(){c({res:-1*t.res,sign:"",num:-1*t.num})},f=function(){console.log(e);var n={".":i,"&":o,"/":u,"*":u,"-":u,"+":u,"=":a,"%":d,"+-":b};return n[e]?n[e]():function(){var n,r=e.toString();n="0"===r&&"0"===t.num?"0":Number(t.num+r),c(Object(s.a)(Object(s.a)({},t),{},{num:n}))}()};return Object(m.jsxs)(m.Fragment,{children:[["&","+-","%",".",0,1,2,3,4,5,6,7,8,9].includes(e)&&Object(m.jsx)(p,{onClick:f,children:e}),["/","+","-","*"].includes(e)&&Object(m.jsx)(O,{onClick:f,children:e}),["="].includes(e)&&Object(m.jsx)(h,{onClick:f,children:e})]})},k=g.a.div(o||(o=Object(x.a)(["\n  /* display: flex;\n  flex-direction: column; */\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.5rem;\n"]))),y=function(n){var e=n.btnValues;return Object(m.jsx)(k,{children:e.flat().map((function(n,e){return Object(m.jsx)(v,{value:n},e)}))})},C=(g.a.span(u||(u=Object(x.a)(["\n  height: 4rem;\n  margin-bottom: 4rem;\n  background-color: white;\n  width: 100%;\n"]))),function(){var n=Object(l.useContext)(j).calc;return Object(m.jsx)("div",{max:70,children:n.num?n.num:n.res})}),w=g.a.div(a||(a=Object(x.a)(["\n  background: #67aeaf;\n  height: 30rem;\n  width: 20rem;\n  padding: 2rem;\n  margin-top: 4rem;\n  border-radius: 1rem;\n  box-shadow: 24px 34px 22px 15px rgba(0, 0, 0, 0.1);\n"]))),S=function(n){var e=n.children;return Object(m.jsx)(w,{children:e})},J=[["&","+-","%","/"],[7,8,9,"*"],[4,5,6,"-"],[1,2,3,"+"],[0,".","="]],V=function(){return Object(m.jsx)(f,{children:Object(m.jsxs)(S,{children:[Object(m.jsx)(C,{}),Object(m.jsx)(y,{btnValues:J})]})})},z=r(13),B=r.n(z);r(26);B.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(b.a.StrictMode,{children:Object(m.jsx)(V,{})}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f4d295e5.chunk.js.map