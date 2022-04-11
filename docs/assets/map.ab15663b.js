import{_ as y,i as x}from"./index.d638adea.js";import{_ as P,d as I,$ as k,y as C,o as h,l as j,j as $,r as E,c as S,w as B,a as U,k as G}from"./vendor.de7194bf.js";var b={exports:{}};(function(v,w){(function(l,f){v.exports=f()})(P,function(){function l(e){var s=[];return e.AMapUI&&s.push(f(e.AMapUI)),e.Loca&&s.push(A(e.Loca)),Promise.all(s)}function f(e){return new Promise(function(s,o){var u=[];if(e.plugins)for(var i=0;i<e.plugins.length;i+=1)a.AMapUI.plugins.indexOf(e.plugins[i])==-1&&u.push(e.plugins[i]);if(p.AMapUI===n.failed)o("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");else if(p.AMapUI===n.notload){p.AMapUI=n.loading,a.AMapUI.version=e.version||a.AMapUI.version,i=a.AMapUI.version;var r=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+i+"/main.js",d.onerror=function(t){p.AMapUI=n.failed,o("\u8BF7\u6C42 AMapUI \u5931\u8D25")},d.onload=function(){if(p.AMapUI=n.loaded,u.length)window.AMapUI.loadUI(u,function(){for(var t=0,M=u.length;t<M;t++){var g=u[t].split("/").slice(-1)[0];window.AMapUI[g]=arguments[t]}for(s();c.AMapUI.length;)c.AMapUI.splice(0,1)[0]()});else for(s();c.AMapUI.length;)c.AMapUI.splice(0,1)[0]()},r.appendChild(d)}else p.AMapUI===n.loaded?e.version&&e.version!==a.AMapUI.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):u.length?window.AMapUI.loadUI(u,function(){for(var t=0,M=u.length;t<M;t++){var g=u[t].split("/").slice(-1)[0];window.AMapUI[g]=arguments[t]}s()}):s():e.version&&e.version!==a.AMapUI.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):c.AMapUI.push(function(t){t?o(t):u.length?window.AMapUI.loadUI(u,function(){for(var M=0,g=u.length;M<g;M++){var _=u[M].split("/").slice(-1)[0];window.AMapUI[_]=arguments[M]}s()}):s()})})}function A(e){return new Promise(function(s,o){if(p.Loca===n.failed)o("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");else if(p.Loca===n.notload){p.Loca=n.loading,a.Loca.version=e.version||a.Loca.version;var u=a.Loca.version,i=a.AMap.version.startsWith("2"),r=u.startsWith("2");if(i&&!r||!i&&r)o("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");else{i=a.key,r=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+u+"&key="+i,d.onerror=function(t){p.Loca=n.failed,o("\u8BF7\u6C42 AMapUI \u5931\u8D25")},d.onload=function(){for(p.Loca=n.loaded,s();c.Loca.length;)c.Loca.splice(0,1)[0]()},r.appendChild(d)}}else p.Loca===n.loaded?e.version&&e.version!==a.Loca.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):s():e.version&&e.version!==a.Loca.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):c.Loca.push(function(t){t?o(t):o()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var n;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(n||(n={}));var a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},c={AMap:[],AMapUI:[],Loca:[]},m=[],L=function(e){typeof e=="function"&&(p.AMap===n.loaded?e(window.AMap):m.push(e))};return{load:function(e){return new Promise(function(s,o){if(p.AMap==n.failed)o("");else if(p.AMap==n.notload){var u=e.key,i=e.version,r=e.plugins;u?(window.AMap&&location.host!=="lbs.amap.com"&&o("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"),a.key=u,a.AMap.version=i||a.AMap.version,a.AMap.plugins=r||a.AMap.plugins,p.AMap=n.loading,i=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)p.AMap=n.failed,o(t);else for(p.AMap=n.loaded,l(e).then(function(){s(window.AMap)}).catch(o);m.length;)m.splice(0,1)[0]()},r=document.createElement("script"),r.type="text/javascript",r.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+a.AMap.version+"&key="+u+"&plugin="+a.AMap.plugins.join(","),r.onerror=function(t){p.AMap=n.failed,o(t)},i.appendChild(r)):o("\u8BF7\u586B\u5199key")}else if(p.AMap==n.loaded)if(e.key&&e.key!==a.key)o("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==a.AMap.version)o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{if(u=[],e.plugins)for(i=0;i<e.plugins.length;i+=1)a.AMap.plugins.indexOf(e.plugins[i])==-1&&u.push(e.plugins[i]);u.length?window.AMap.plugin(u,function(){l(e).then(function(){s(window.AMap)}).catch(o)}):l(e).then(function(){s(window.AMap)}).catch(o)}else if(e.key&&e.key!==a.key)o("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==a.AMap.version)o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{var d=[];if(e.plugins)for(i=0;i<e.plugins.length;i+=1)a.AMap.plugins.indexOf(e.plugins[i])==-1&&d.push(e.plugins[i]);L(function(){d.length?window.AMap.plugin(d,function(){l(e).then(function(){s(window.AMap)}).catch(o)}):l(e).then(function(){s(window.AMap)}).catch(o)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},c={AMap:[],AMapUI:[],Loca:[]}}}})})(b);var J=b.exports;const O="ac63f198a6808bc9e800082e90746757",W=I({name:"cli-gaode-map",props:{id:{type:String,default:"CliGaodeMap"}},setup(v,{emit:w}){const l=k(null),f=()=>{J.load({key:O,version:"2.0"}).then(A=>{l.value=new A.Map(v.id,{zoom:5,center:[105.602725,37.076636]})}).catch(A=>{console.log(A)})};return C(()=>{f()}),{id:v.id,map:l,initMap:f}}}),q=["id"];function z(v,w,l,f,A,n){return h(),j("div",{id:v.id,style:{height:"400px"}},null,8,q)}var K=y(W,[["render",z]]),N=x(K);const Y=I({setup(v){const{t:w}=$();return(l,f)=>{const A=E("crud-form");return h(),S(A,{title:U(w)("example.map.title")},{default:B(()=>[G(U(N))]),_:1},8,["title"])}}});export{Y as default};