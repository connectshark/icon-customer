(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a66f26b"],{"0038":function(c,e,t){},"37dd":function(c,e,t){"use strict";t.r(e);var o=t("7a23");Object(o["v"])("data-v-4bded084");const s={class:"all-list"},n={class:"box"},b=["onClick"],l={class:"box"},a=["onClick"],i={class:"material-icons icon"};function r(c,e,t,r,j,O){return Object(o["s"])(),Object(o["f"])("div",s,[Object(o["g"])("section",n,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(r.colors,(c,e)=>(Object(o["s"])(),Object(o["f"])("div",{class:Object(o["n"])(["color-item",{active:r.colorIndex===e}]),onClick:e=>r.setColor(c),key:e},[Object(o["g"])("div",{class:"color",style:Object(o["o"])({backgroundColor:c})},null,4)],10,b))),128))]),Object(o["g"])("section",l,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(r.icons,(c,e)=>(Object(o["s"])(),Object(o["f"])("div",{class:Object(o["n"])(["icon-item",{active:r.iconIndex===e}]),key:e,onClick:e=>r.setIcon(c)},[Object(o["g"])("span",i,Object(o["C"])(c),1)],10,a))),128))]),Object(o["g"])("a",{onClick:e[0]||(e[0]=(...c)=>r.clearStage&&r.clearStage(...c))},"back")])}Object(o["t"])();var j=t("5502"),O=t("6c02"),d={setup(){const c=Object(j["b"])(),e=Object(O["useRouter"])(),t=Object(o["b"])(()=>c.state.icons);c.commit("setIcon",t.value[0]);const s=e=>{c.commit("setIcon",e)},n=Object(o["b"])(()=>c.getters.getIconByName),b=Object(o["b"])(()=>c.state.colors);c.commit("setColor",b.value[0]);const l=e=>{c.commit("setColor",e)},a=Object(o["b"])(()=>c.getters.getColorByName),i=()=>{c.commit("resetBtn"),e.push("/")};return{icons:t,setIcon:s,colors:b,iconIndex:n,colorIndex:a,setColor:l,clearStage:i}}};t("5886");d.render=r,d.__scopeId="data-v-4bded084";e["default"]=d},5886:function(c,e,t){"use strict";t("0038")}}]);
//# sourceMappingURL=chunk-1a66f26b.3542069d.js.map