import{i as d,e as u,D as l,I as c,J as f,j as _,k as p,l as v,s as m,o as g}from"./vendor.f6e90a27.js";import{_ as b}from"./index.b64eeccb.js";const k=d({setup(){const e=u(),a=l("about:_blank"),r=l(!1);c(()=>e,s=>{s.path==="/iframe"&&n(s)},{deep:!0}),f(()=>{n(e)});const n=s=>{const{meta:o,query:t}=s;r.value=!0,t.url?a.value=t.url:o&&o.isIframe&&(a.value=o.url)};return{url:a,loading:r,load:()=>{r.value=!1}}}}),$=["src"];function h(e,a,r,n,i,s){const o=_("loading");return p((g(),v("div",null,[m("iframe",{class:"iframe",src:e.url,onLoad:a[0]||(a[0]=(...t)=>e.load&&e.load(...t))},null,40,$)])),[[o,e.loading]])}var y=b(k,[["render",h],["__scopeId","data-v-8301976a"]]);export{y as default};
