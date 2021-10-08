import{s as a,u as f,a as h,j as e,M as l,b as d,H as m,S as p,R as s,c as y,d as g,e as v}from"./vendor.3b963e34.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};L();const R=a.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  >.content{
    flex: 1;
    padding: 16px;
  }
`,b=[{title:"\u9996\u9875",key:"/home"},{title:"\u535A\u5BA2",key:"/blog"},{title:"\u6D4B\u8BD5",key:"/test"},{title:"\u7B80\u5386",key:"/resume"}];function k(){const i=f(),o=h();return e(l,{defaultSelectedKeys:[o.pathname],mode:"horizontal",theme:"dark",children:b.map(r=>e(l.Item,{onClick:()=>i.push(r.key),children:r.title},r.key))})}function x(i){const{Routers:o}=i;return d(R,{children:[e(k,{}),e("div",{className:"content",children:e(o,{})})]})}function A(){return e("div",{children:"blog"})}function B(){return e("div",{children:"test"})}function M(){return e("div",{children:"Home"})}const H=()=>d(p,{children:[e(s,{path:"/",exact:!0,children:e(y,{to:"/home"})}),e(s,{path:"/home",component:M}),e(s,{path:"/test",component:B}),e(s,{path:"/blog",component:A})]});function N(){return e(m,{children:e(x,{Routers:H})})}function O(){return e("div",{className:"App",children:e(N,{})})}g.render(e(v.StrictMode,{children:e(O,{})}),document.getElementById("root"));
