var y=Object.defineProperty,h=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var m=(e,t,l)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,s=(e,t)=>{for(var l in t||(t={}))v.call(t,l)&&m(e,l,t[l]);if(u)for(var l of u(t))N.call(t,l)&&m(e,l,t[l]);return e},p=(e,t)=>h(e,z(t));import{_ as S,u as k}from"./index.361c229e.js";import{d as $,j,y as F,D as w,r as a,k as T,n,w as r,F as B,o as D,q as P,t as U}from"./vendor.ae5b2540.js";const V=$({setup(){const{t:e}=j(),t=F({searchUrl:"/sys/menu/list",dataForm:{}});return p(s(s({},k(t)),w(t)),{t:e})}});function q(e,t,l,A,E,H){const d=a("el-button"),i=a("el-form-item"),c=a("el-form"),_=a("CrudSearch"),o=a("el-table-column"),b=a("el-table"),f=a("CrudTable"),g=a("el-pagination"),C=a("CrudPage");return D(),T(B,null,[n(_,null,{default:r(()=>[n(c,{inline:!0,model:e.dataForm},{default:r(()=>[n(i,null,{default:r(()=>[n(d,{type:"success",onClick:t[0]||(t[0]=I=>e.crudAddOrUpdate())},{default:r(()=>[P(U(e.t("crud.btn.add")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n(f,null,{default:r(()=>[n(b,{data:e.dataList},{default:r(()=>[n(o,{type:"index",width:"50"}),n(o,{prop:"menuName",label:e.t("system.menu.menuName")},null,8,["label"]),n(o,{prop:"iconName",label:e.t("system.menu.iconName")},null,8,["label"]),n(o,{prop:"sort",label:e.t("system.menu.sort")},null,8,["label"]),n(o,{prop:"route",label:e.t("system.menu.route")},null,8,["label"]),n(o,{prop:"role",label:e.t("system.menu.role")},null,8,["label"]),n(o,{label:e.t("crud.label.operate")},null,8,["label"])]),_:1},8,["data"])]),_:1}),n(C,null,{default:r(()=>[n(g,{small:"","current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.total,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:e.pageSize,onCurrentChange:e.pageCurrent},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])]),_:1})],64)}var G=S(V,[["render",q]]);export{G as default};
