import{s as d,u as B,a as h,j as u,M as l,S as f,b as a,c as p,C as F,A as m,H as E,d as C,R as s,e as y,f as A,g}from"./vendor.d10664d9.js";const D=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};D();const v=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  >.content{
    flex: 1;
    padding: 16px;
  }
`,k=[{title:"\u9996\u9875",key:"/home"},{title:"\u535A\u5BA2",key:"/blog"},{title:"\u7B80\u5386",key:"/resume"},{title:"\u6211\u7684",key:"/my"},{title:"\u6D4B\u8BD5",key:"/test",children:[{title:"test1",key:"/test1"},{title:"test2",key:"/test2"}]}],b=["","\u7B2C\u4E00\u6B21\uFF0C\u5F53\u5B83\u672C\u53EF\u8FDB\u53D6\u65F6\uFF0C\u5374\u6545\u4F5C\u8C26\u5351\uFF1B","\u7B2C\u4E8C\u6B21\uFF0C\u5F53\u5B83\u7A7A\u865A\u65F6\uFF0C\u7528\u7231\u6B32\u6765\u586B\u5145\uFF1B","\u7B2C\u4E09\u6B21\uFF0C\u5728\u56F0\u96BE\u548C\u5BB9\u6613\u4E4B\u95F4\uFF0C\u5B83\u9009\u62E9\u4E86\u5BB9\u6613\uFF1B","\u7B2C\u56DB\u6B21\uFF0C\u5B83\u72AF\u4E86\u9519\uFF0C\u5374\u501F\u7531\u522B\u4EBA\u4E5F\u4F1A\u72AF\u9519\u6765\u5BBD\u6170\u81EA\u5DF1\uFF1B","\u7B2C\u4E94\u6B21\uFF0C\u5B83\u81EA\u7531\u8F6F\u5F31\uFF0C\u5374\u628A\u4ED6\u8BA4\u4E3A\u662F\u751F\u547D\u7684\u575A\u97E7\uFF1B","\u7B2C\u516D\u6B21\uFF0C\u5F53\u4ED6\u9119\u5937\u4E00\u5F20\u4E11\u6076\u7684\u5634\u8138\u65F6\uFF0C\u5374\u4E0D\u77E5\u90A3\u6B63\u662F\u81EA\u5DF1\u9762\u5177\u4E2D\u7684\u4E00\u526F\uFF1B","\u7B2C\u4E03\u6B21\uFF0C\u5B83\u4FA7\u8EAB\u4E0E\u751F\u6D3B\u7684\u6C61\u6CE5\u4E2D\u867D\u4E0D\u7518\u5FC3\uFF0C\u5374\u53C8\u754F\u9996\u754F\u5C3E\uFF1B"];function L(){const o=B(),r=h();return u(l,{defaultSelectedKeys:[r.pathname],mode:"horizontal",theme:"dark",children:k.map(n=>n.children?u(f,{title:n.title,children:n.children.map(i=>u(l.Item,{onClick:()=>o.push(i.key),children:i.title},i.key))}):u(l.Item,{onClick:()=>o.push(n.key),children:n.title},n.key))})}function M(o){const{Routers:r}=o;return a(v,{children:[u(L,{}),u("div",{className:"content",children:u(r,{})})]})}function R(){return u("div",{children:"blog"})}function x(){return u("div",{children:"test"})}function S(){return u("div",{children:"Home"})}var j="/assets/avatar.ef314107.jpg";const{Meta:w}=F;function H(){return u(p,{direction:"vertical",style:{width:"100%"},children:a(F,{style:{width:"100%"},hoverable:!0,children:[u(w,{avatar:u(m,{src:j}),title:"\u6211\u66FE\u4E03\u6B21\u9119\u89C6\u81EA\u5DF1\u7684\u7075\u9B42:"}),b.map((o,r)=>u("p",{children:o},r))]})})}const I=()=>a(C,{children:[u(s,{path:"/",exact:!0,children:u(y,{to:"/home"})}),u(s,{path:"/home",component:S}),u(s,{path:"/test",component:x}),u(s,{path:"/blog",component:R}),u(s,{path:"/my",component:H})]});function O(){return u(E,{children:u(M,{Routers:I})})}function P(){return u("div",{children:u(O,{})})}A.render(u(g.StrictMode,{children:u(P,{})}),document.getElementById("root"));
