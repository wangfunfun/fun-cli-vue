var pe=Object.defineProperty;var K=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var V=(o,e,t)=>e in o?pe(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))ge.call(e,t)&&V(o,t,e[t]);if(K)for(var t of K(e))he.call(e,t)&&V(o,t,e[t]);return o};var D=(o,e,t)=>(V(o,typeof e!="symbol"?e+"":e,t),t);import{z as fe,E as Ee,c as ve,d as G,u as b,r as k,a as E,o as p,b as g,w as r,e as q,f as n,g as Ae,h as j,i as a,j as J,k as F,l as Fe,m as we,n as W,t as x,F as ye,p as Se,q as Y,s as X,v as Q,S as De,x as B,y as be,A as Ce,B as xe,M as Be,C as Pe,D as Z,U as Te,G as ee,L as Le,H as $e,I as ze,J as Ie,K as Ne,N as Oe,O as Re,P as te,Q as Me,R as oe,T as Ve,V as ke,W as qe,X as ne,Y as je,Z as Ue,_ as He}from"./vendor.b8761082.js";const Ke=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}};Ke();class Ge{constructor(e=new Date,t="yyyy-MM-dd hh:mm:ss"){D(this,"datetime");D(this,"template");this.datetime=e,this.template=t}format(){const e=this.datetime;let t=this.template;const s={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),ms:e.getMilliseconds()};return/(y+)/.test(t)&&(t=t.replace(RegExp.$1,`${e.getFullYear()}`.substr(4-RegExp.$1.length))),Object.keys(s).forEach(u=>{new RegExp(`(${u})`).test(t)&&(t=t.replace(RegExp.$1,RegExp.$1.length===1?s[u]:`00${s[u]}`.substr(`${s[u]}`.length)))}),t}}const Je=60*60*24*7,We="cli-vue3-vite2-ts",so="cli-vue3-vite2-ts";class P{constructor(e,t="session"){D(this,"cacheKey");D(this,"cacheType");D(this,"cacheData");D(this,"desc");this.cacheKey=`${We}-${e}`,this.cacheType=t}set(e=null,t=""){this.cacheData={save_time:new Ge(new Date,"yyyy-MM-dd hh:mm:ss").format(),save_data:e,save_desc:t},this.cacheType==="local"?window.localStorage.setItem(this.cacheKey,JSON.stringify(this.cacheData)):this.cacheType==="session"&&window.sessionStorage.setItem(this.cacheKey,JSON.stringify(this.cacheData))}remove(){this.cacheType==="local"?window.localStorage.removeItem(this.cacheKey):this.cacheType==="session"&&window.sessionStorage.removeItem(this.cacheKey)}get(){let e={};return this.cacheType==="local"?e=window.localStorage.getItem(this.cacheKey):e=window.sessionStorage.getItem(this.cacheKey),e?new Date().getTime()-new Date(JSON.parse(e).save_time).getTime()>Je?(this.cacheType==="local"?e=window.localStorage.removeItem(this.cacheKey):e=window.sessionStorage.removeItem(this.cacheKey),e):e?JSON.parse(e).save_data:JSON.parse(e):void 0}}const ue="leftMenu",U="enUS",se=sessionStorage,l={};l.loading="\u52A0\u8F7D\u4E2D...";l.darkTheme="\u6697\u591C";l.lightTheme="\u660E\u4EAE";l.zhCN="\u7B80\u4F53\u4E2D\u6587";l.enUS="\u82F1\u8BED";l.btn={};l.btn.home="\u9996\u9875";l.btn.github="Github";l.tooltip={};l.tooltip.setting="\u8BBE\u7F6E";l.tooltip.search="\u5168\u5C40\u641C\u7D22";l.tooltip.fullscreen="\u5168\u5C4F";l.tooltip.exitFullscreen="\u9000\u51FA\u5168\u5C4F";l.tooltip.refresh="\u5237\u65B0";l.tooltip.message="\u6D88\u606F";l.tooltip.fold="\u5C55\u5F00\u83DC\u5355";l.tooltip.unfold="\u6536\u56DE\u83DC\u5355";l.tooltip.language="\u5207\u6362\u8BED\u8A00";l.user={};l.user.userInfo="\u7528\u6237\u4FE1\u606F";l.user.lock="\u9501\u5C4F";l.user.logout="\u9000\u51FA";const T={};T.crud={};T.crud.btn={};T.crud.btn.add="\u6DFB\u52A0";T.crud.btn.delete="\u5220\u9664";T.crud.btn.Update="\u66F4\u65B0";const $={};$.welcome={};$.welcome.description="\u57FA\u4E8EVue3\u3001Vite2\u3001TypeScript\u642D\u5EFA\uFF0C\u96C6\u6210\u4E86Vue-router\u3001Pinia\u3001Axios\u3001Vue-i18n\u7B49\u63D2\u4EF6\uFF0C\u4F7F\u7528ElementPlus\u4F5C\u4E3A\u7EC4\u4EF6\u5E93\uFF0C\u5F15\u5165Echarts\u3001Draggable\u3001wangEditor\u7B49\u529F\u80FD\u7EC4\u4EF6\u3002";$.welcome.elementPlus="\u5173\u4E8E ElementPlus";$.welcome.toAdmin="\u7BA1\u7406\u7CFB\u7EDF";const c={};c.login={};c.login.login="\u767B\u5F55";c.login.resetPassword="\u5FD8\u8BB0\u5BC6\u7801\uFF1F";c.login.signup="\u6CE8\u518C\u65B0\u7528\u6237";c.login.existingAccount="\u5DF2\u6709\u8D26\u53F7\uFF1F";c.login.backLogin="\u8FD4\u56DE\u767B\u5F55";c.login.resetPasswordSubmit="\u91CD\u7F6E\u5BC6\u7801";c.login.sendEmailCode="\u53D1\u9001\u9A8C\u8BC1\u7801";c.login.info={};c.login.info.login="\u767B\u5F55";c.login.info.signup="\u6CE8\u518C\u65B0\u7528\u6237";c.login.info.resetPassword="\u627E\u56DE\u5BC6\u7801";c.login.placeholder={};c.login.placeholder.email="\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u7BB1";c.login.placeholder.emailCode="\u8BF7\u8F93\u5165\u90AE\u7BB1\u9A8C\u8BC1\u7801";c.login.placeholder.password="\u8BF7\u8F93\u5165\u5BC6\u7801";c.login.placeholder.confirmPassword="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801";c.login.rules={};c.login.rules.email="\u7535\u5B50\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E";c.login.rules.emailCode="\u9A8C\u8BC1\u7801\u683C\u5F0F\u4E0D\u6B63\u786E";c.login.rules.password="\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E";c.login.rules.confirmPassword="\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4";const w={};w.error={};w.error.goPrePage="\u8FD4\u56DE\u524D\u4E00\u9875";w.error.goHome="\u8FD4\u56DE\u9996\u9875";w.error.Code401="\u672A\u6388\u6743";w.error.Code403="\u62D2\u7EDD\u8BBF\u95EE";w.error.Code404="\u672A\u627E\u5230";w.error.Code500="\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF";w.error.Code503="\u670D\u52A1\u4E0D\u53EF\u7528";var Ye=f(f(f(f(f({languageName:"\u7B80\u4F53\u4E2D\u6587"},l),T),$),c),w);const _={};_.loading="Loading...";_.darkTheme="Dark";_.lightTheme="Light";_.zhCN="Chinese";_.enUS="English";_.btn={};_.btn.home="Home";_.btn.github="Github";_.tooltip={};_.tooltip.setting="Setting";_.tooltip.search="Global Search";_.tooltip.fullscreen="Full screen";_.tooltip.exitFullscreen="Exit Full screen";_.tooltip.refresh="Refresh";_.tooltip.message="Message";_.tooltip.fold="Fold Menu";_.tooltip.unfold="Unfold Menu";_.tooltip.language="Switch Language";_.user={};_.user.userInfo="User Info";_.user.lock="Lock Screen";_.user.logout="Log Out";const L={};L.crud={};L.crud.btn={};L.crud.btn.add="Add";L.crud.btn.delete="Delete";L.crud.btn.Update="Update";const z={};z.welcome={};z.welcome.description="Based on Vue3, Vite2 and TypeScript, Vue-router, Pinia, Axios, Vue-i18n and other plug-ins are integrated. ElementPlus is used as a component library, and Echarts, Draggable, wangEditor and other functional components are introduced.";z.welcome.elementPlus="About ElementPlus";z.welcome.toAdmin="Management system";const d={};d.login={};d.login.login="Log in";d.login.resetPassword="Forget the password ?";d.login.signup="Sign up";d.login.existingAccount="Existing account?";d.login.backLogin="Return to the log in";d.login.resetPasswordSubmit="Reset password";d.login.sendEmailCode="Send code";d.login.info={};d.login.info.login="Log in";d.login.info.signup="Sign up";d.login.info.resetPassword="Reset password";d.login.placeholder={};d.login.placeholder.email="Please enter your e-mail address";d.login.placeholder.emailCode="Please enter the e-mail code";d.login.placeholder.password="Please enter your password";d.login.placeholder.confirmPassword="Please enter your password again";d.login.rules={};d.login.rules.email="The e-mail format is incorrect";d.login.rules.emailCode="The e-mail code format is incorrect";d.login.rules.password="The password format is incorrect";d.login.rules.confirmPassword="The passwords are inconsistent";const y={};y.error={};y.error.goPrePage="Back to previous";y.error.goHome="Back home page";y.error.Code401="Unauthorized";y.error.Code403="Forbidden";y.error.Code404="Not Found Page";y.error.Code500="Server internal error";y.error.Code503="Service unavailable";var Xe=f(f(f(f(f({languageName:"English"},_),L),z),d),y);const Qe={zhCN:f(f({},Ye),fe),enUS:f(f({},Xe),Ee)},Ze=new P("languageAlias","local").get(),ae=ve({locale:Ze||U,messages:Qe}),re={zhCN:"\u7B80\u4F53\u4E2D\u6587",enUS:"English"},ie=G({id:"configStore",persist:{enabled:!0,strategies:[{key:"configStore",storage:se}]},state:()=>({language:U,languageName:re[U],elementPlusConfig:{zIndex:3e3}}),getters:{nowLanguage:o=>o.language,nowLanguageName:o=>o.languageName},actions:{setLanguage(o){this.language=o.alias,this.languageName=o.name,new P("languageAlias","local").set(o.alias)}}}),le=()=>{const{locale:o,messages:e}=b(),t=ie(),s=k(t.languageName);return{locale:o,messages:e,languageName:s,changeLanguage:i=>{o.value=i,t.setLanguage({alias:i,name:e.value[i].languageName})},configStore:t}},ce=E({setup(o){const e=ie(),t=le();return(s,u)=>(p(),g(n(Ae),{zIndex:n(e).elementPlusConfig.zIndex,locale:n(t).messages.value[n(e).language].el},{default:r(()=>[q(s.$slots,"app")]),_:3},8,["zIndex","locale"]))}});const et=E({setup(o){return(e,t)=>{const s=j("router-view");return p(),g(ce,null,{app:r(()=>[a(s)]),_:1})}}}),tt="modulepreload",_e={},ot="./",h=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${ot}${s}`,s in _e)return;_e[s]=!0;const u=s.endsWith(".css"),i=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":tt,u||(m.as="script",m.crossOrigin=""),m.href=s,document.head.appendChild(m),u)return new Promise((A,S)=>{m.addEventListener("load",A),m.addEventListener("error",S)})})).then(()=>e())},nt=G({id:"layoutStore",persist:{enabled:!0,strategies:[{key:"configStore",storage:se}]},state:()=>({mode:ue}),getters:{},actions:{setMode(o){this.mode=o}}});var v=(o,e)=>{const t=o.__vccOpts||o;for(const[s,u]of e)t[s]=u;return t};const ut={key:0,class:"hover flex-start"},st={class:"hover flex-start"},at=E({props:{showTooltip:{type:Boolean,default:!1},tooltip:{default:""},placement:{default:"bottom"}},setup(o){const e=o;return(t,s)=>{const u=Fe;return e.showTooltip?(p(),g(u,{key:1,content:e.tooltip,placement:e.placement},{default:r(()=>[F("div",st,[q(t.$slots,"content",{},void 0,!0)])]),_:3},8,["content","placement"])):(p(),J("div",ut,[q(t.$slots,"content",{},void 0,!0)]))}}});var C=v(at,[["__scopeId","data-v-412e3a47"]]);const rt=E({setup(o){const e=le();return(t,s)=>{const u=Se,i=Y,m=X,A=Q;return p(),g(n(C),null,{content:r(()=>[a(A,{onCommand:n(e).changeLanguage},{dropdown:r(()=>[(p(!0),J(ye,null,we(n(re),(S,I)=>(p(),g(m,{key:I},{default:r(()=>[a(i,{command:I},{default:r(()=>[W(x(S),1)]),_:2},1032,["command"])]),_:2},1024))),128))]),default:r(()=>[a(u,{type:"text"},{default:r(()=>[W(x(n(e).configStore.languageName),1)]),_:1})]),_:1},8,["onCommand"])]),_:1})}}});var it=v(rt,[["__scopeId","data-v-0a3f0a46"]]);const lt=E({props:{iconSize:{default:20}},setup(o){const e=o,{t}=b();return(s,u)=>{const i=B;return p(),g(n(C),{showTooltip:"",tooltip:n(t)("tooltip.refresh")},{content:r(()=>[a(i,{size:e.iconSize},{default:r(()=>[a(n(De))]),_:1},8,["size"])]),_:1},8,["tooltip"])}}}),ct=E({props:{iconSize:{default:20}},setup(o){const e=o,{t}=b(),s=k(!1);return(u,i)=>{const m=B;return p(),g(n(C),{showTooltip:"",tooltip:s.value?n(t)("tooltip.exitFullscreen"):n(t)("tooltip.fullscreen")},{content:r(()=>[a(m,{size:e.iconSize},{default:r(()=>[s.value?(p(),g(n(be),{key:0})):(p(),g(n(Ce),{key:1}))]),_:1},8,["size"])]),_:1},8,["tooltip"])}}}),_t=E({props:{iconSize:{default:20}},setup(o){const e=o,{t}=b();return(s,u)=>{const i=B;return p(),g(n(C),{showTooltip:"",tooltip:n(t)("tooltip.setting")},{content:r(()=>[a(i,{size:e.iconSize},{default:r(()=>[a(n(xe))]),_:1},8,["size"])]),_:1},8,["tooltip"])}}}),dt=E({props:{iconSize:{default:20}},setup(o){const e=o,{t}=b(),s=k(!1);return(u,i)=>{const m=B;return p(),g(n(C),{showTooltip:"",tooltip:s.value?n(t)("tooltip.unfold"):n(t)("tooltip.fold")},{content:r(()=>[a(m,{size:e.iconSize},{default:r(()=>[s.value?(p(),g(n(Be),{key:0})):(p(),g(n(Pe),{key:1}))]),_:1},8,["size"])]),_:1},8,["tooltip"])}}});const mt={class:"flex-start"},pt={style:{"padding-left":"12px"}},gt=E({setup(o){const{t:e}=b(),t=Z({username:"\u6E38\u5BA2"}),s=u=>()=>ee(B,null,{default:()=>ee(u)});return(u,i)=>{const m=ze,A=Y,S=X,I=Q;return p(),g(n(C),null,{content:r(()=>[a(I,null,{dropdown:r(()=>[a(S,null,{default:r(()=>[a(A,{icon:s(n(Te))},{default:r(()=>[F("span",null,x(n(e)("user.userInfo")),1)]),_:1},8,["icon"]),a(A,{icon:s(n(Le))},{default:r(()=>[F("span",null,x(n(e)("user.lock")),1)]),_:1},8,["icon"]),a(A,{icon:s(n($e))},{default:r(()=>[F("span",null,x(n(e)("user.logout")),1)]),_:1},8,["icon"])]),_:1})]),default:r(()=>[F("div",mt,[a(m,{size:"small",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),F("span",pt,x(n(t).username),1)])]),_:1})]),_:1})}}});var ht=v(gt,[["__scopeId","data-v-0392066a"]]);const ft=E({props:{iconSize:{default:20}},setup(o){const e=o,{t}=b();return(s,u)=>{const i=B;return p(),g(n(C),{showTooltip:"",tooltip:n(t)("tooltip.message")},{content:r(()=>[a(i,{size:e.iconSize},{default:r(()=>[a(n(Ie))]),_:1},8,["size"])]),_:1},8,["tooltip"])}}});const Et={class:"slot flex-between"},vt={class:"left flex-start"},At={class:"right flex-start"},Ft=E({setup(o){const e=Z({iconSize:20});return(t,s)=>{const u=Ne;return p(),g(u,{class:"shadow"},{default:r(()=>[F("div",Et,[F("div",vt,[a(n(dt),{iconSize:n(e).iconSize},null,8,["iconSize"]),a(n(lt),{iconSize:n(e).iconSize},null,8,["iconSize"])]),F("div",At,[a(n(it),{showTooltip:!1}),a(n(ct),{iconSize:n(e).iconSize},null,8,["iconSize"]),a(n(ft),{iconSize:n(e).iconSize},null,8,["iconSize"]),a(n(_t),{iconSize:n(e).iconSize},null,8,["iconSize"]),a(n(ht),{showTooltip:!1})])])]),_:1})}}});var wt=v(Ft,[["__scopeId","data-v-4471f1c2"]]);const yt={};function St(o,e){return null}var Dt=v(yt,[["render",St]]);const bt={};function Ct(o,e){return null}var xt=v(bt,[["render",Ct]]);const Bt={};function Pt(o,e){return null}var Tt=v(Bt,[["render",Pt]]);const Lt=E({setup(o){return(e,t)=>{const s=Oe,u=Re,i=j("router-view"),m=te,A=Me,S=oe;return p(),g(S,null,{default:r(()=>[a(s,{width:"200px"},{default:r(()=>[a(xt)]),_:1}),a(S,null,{default:r(()=>[a(u,null,{default:r(()=>[a(wt),a(Tt)]),_:1}),a(m,{class:"admin-scrollbar"},{default:r(()=>[a(i)]),_:1}),a(A,null,{default:r(()=>[a(Dt)]),_:1})]),_:1})]),_:1})}}});var $t=v(Lt,[["__scopeId","data-v-ea0ff212"]]);const zt=E({setup(o){const e=nt();return(t,s)=>n(e).mode=="leftMenu"||n(ue)=="leftMenu"?(p(),g($t,{key:0})):Ve("",!0)}});var N=v(zt,[["__scopeId","data-v-21a0e010"]]),It=[{path:"/admin/dashboard",name:"AdminDashboard",menuName:"\u9996\u9875",component:N,meta:{isMenu:!0,requiresAuth:!0,icon:"",menuName:"\u7CFB\u7EDF\u8BBE\u7F6E",sort:0},children:[{path:"workbench",name:"AdminDashboardWorkbench",component:()=>h(()=>import("./workbench.50cbd6ec.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u5DE5\u4F5C\u53F0",sort:0}},{path:"visual",name:"AdminDashboardVisual",component:()=>h(()=>import("./visual.1e7eee46.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u4EEA\u8868\u76D8",sort:1}}]}],Nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:It}),Ot=[{path:"/admin/example",name:"AdminExample",component:N,meta:{isMenu:!0,requiresAuth:!0,icon:"",menuName:"\u529F\u80FD\u793A\u4F8B",sort:1},children:[{path:"echarts",name:"AdminExampleEcharts",component:()=>h(()=>import("./echarts.e6364e2d.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"Echarts\u56FE\u8868",sort:0}},{path:"drag",name:"AdminExampleDrag",component:()=>h(()=>import("./drag.c7d470fa.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u62D6\u62FD",sort:1}},{path:"editor",name:"AdminExampleEditor",component:()=>h(()=>import("./editor.b44b0f5a.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",sort:2}},{path:"form",name:"AdminExampleForm",component:()=>h(()=>import("./form.b5a836dc.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u8868\u5355\u793A\u4F8B",sort:3}},{path:"table",name:"AdminExampleTable",component:()=>h(()=>import("./table.5c1ea492.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u8868\u683C\u793A\u4F8B",sort:4}},{path:"upload",name:"AdminExampleUpload",component:()=>h(()=>import("./upload.a361f87e.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u4E0A\u4F20\u793A\u4F8B",sort:5}}]}],Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ot}),Mt=[{path:"/admin/external",name:"AdminExternal",component:N,meta:{isMenu:!0,requiresAuth:!0,icon:"",menuName:"\u5916\u90E8\u9875\u9762",sort:2},children:[{path:"elementPlus",name:"AdminExternalElementPlus",component:()=>h(()=>import("./elementPlus.dac46e45.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"ElementPlus\u6587\u6863",sort:0}},{path:"vite",name:"AdminExternalVite",component:()=>h(()=>import("./vite.ea077af0.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"Vite\u6587\u6863",sort:1}},{path:"vue",name:"AdminExternalVue",component:()=>h(()=>import("./vue.727532f1.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"Vue\u6587\u6863",sort:2}}]}],Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mt}),kt=[{path:"/admin/system",name:"AdminSystem",component:N,meta:{isMenu:!0,requiresAuth:!0,icon:"",menuName:"\u7CFB\u7EDF",sort:2},children:[{path:"log",name:"AdminSystemLog",component:()=>h(()=>import("./log.39d520f0.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u64CD\u4F5C\u65E5\u5FD7",sort:0}},{path:"dict",name:"AdminSystemDict",component:()=>h(()=>import("./dict.47c80c88.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u5B57\u5178\u7BA1\u7406",sort:1}},{path:"menu",name:"AdminSystemMenu",component:()=>h(()=>import("./menu.31558d63.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u83DC\u5355\u7BA1\u7406",sort:2}},{path:"role",name:"AdminSystemRole",component:()=>h(()=>import("./role.6fb2a300.js"),[]),meta:{requiresAuth:!0,icon:"",menuName:"\u6743\u9650\u7BA1\u7406",sort:3}}]}],qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt});const jt={};function Ut(o,e){return null}var Ht=v(jt,[["render",Ut]]);const Kt={};function Gt(o,e){const t=j("router-view"),s=te,u=oe;return p(),g(u,null,{default:r(()=>[a(s,null,{default:r(()=>[a(t)]),_:1})]),_:1})}var Jt=v(Kt,[["render",Gt],["__scopeId","data-v-034fad12"]]),Wt=[{path:"/",name:"Index",component:Jt,meta:{requiresAuth:!1},children:[{path:"/",component:Ht,redirect:"/welcome",meta:{requiresAuth:!1}},{path:"/error",name:"Error",component:()=>h(()=>import("./error.e3ae396a.js"),["assets/error.e3ae396a.js","assets/error.3a7f6346.css","assets/vendor.b8761082.js","assets/vendor.d931009e.css"]),meta:{requiresAuth:!1}}]}],Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wt}),Xt=[{path:"/login",name:"Login",component:()=>h(()=>import("./login.290c1496.js"),["assets/login.290c1496.js","assets/login.cb0af9b6.css","assets/vendor.b8761082.js","assets/vendor.d931009e.css"]),meta:{requiresAuth:!1}}],Qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xt}),Zt=[{path:"/welcome",name:"Welcome",component:()=>h(()=>import("./welcome.ae4908af.js"),["assets/welcome.ae4908af.js","assets/welcome.3a5e85c2.css","assets/vendor.b8761082.js","assets/vendor.d931009e.css"]),meta:{requiresAuth:!1}}],eo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zt});const de={"./pages/base.ts":Yt,"./pages/login.ts":Qt,"./pages/welcome.ts":eo},me={"./views/dashboard.ts":Nt,"./views/example.ts":Rt,"./views/external.ts":Vt,"./views/system.ts":qt};let O=[],R=[],H=[];Object.keys(de).forEach(o=>{O=O.concat(de[o].default)});Object.keys(me).forEach(o=>{R=R.concat(me[o].default)});H=O.concat(R);new P("pagesRoutes","local").set(O);new P("viewsRoutes","local").set(R);new P("allRoutes","local").set(H);const M=ke({history:qe(),routes:H});M.beforeEach((o,e,t)=>{const s=new P("token","session").get();if(o.matched.some(i=>i.meta.requiresAuth)&&!s){t({path:"/login"});return}t()});M.beforeResolve(async o=>{});M.afterEach((o,e)=>{});const to=ne(et),oo=ne(ce);oo.mount("#appprovider",!0);to.use(ae).use(je,{i18n:ae}).use(M).use(Ue().use(He)).mount("#app",!0);export{so as A,P as G,v as _,re as i,le as u};
