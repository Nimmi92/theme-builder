"use strict";(self.webpackChunktheme_builder=self.webpackChunktheme_builder||[]).push([[826],{465:(e,t,n)=>{var r,o,l,a=n(294),c=n(935),u=n(727),i=n(977),s=n(163);const d=s.ZP.button(r||(o=["\n    border: ",";\n    border-radius: ","; \n    padding: ","; \n    font-size: ",";\n    cursor: ",";\n    color: ",";\n    background-color: ",";\n    opacity: ",";\n    width: auto;\n    min-width: 100px;\n"],l||(l=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(l)}}))),(function(e){return"enabled"===e.status?e.theme.specs.button.enabled.border:"hover"===e.status?e.theme.specs.button.hover.border:"focus"===e.status?e.theme.specs.button.focus.border:"disabled"===e.status?e.theme.specs.button.disabled.border:void 0}),(function(e){return e.theme.specs.borderRadius}),(function(e){return e.theme.specs.padding}),(function(e){return e.theme.specs.fontSize}),(function(e){return"disabled"===e.status?e.theme.specs.button.disabled.cursor:e.theme.specs.cursor}),(function(e){return"enabled"===e.status?e.color||e.theme.specs.button.enabled.color:"hover"===e.status?e.color||e.theme.specs.button.hover.color:"focus"===e.status?e.color||e.theme.specs.button.focus.color:"disabled"===e.status?e.color||e.theme.specs.button.disabled.color:void 0}),(function(e){return"enabled"===e.status?e.bgColor||e.theme.specs.button.enabled.background:"hover"===e.status?e.hoverBgColor||e.theme.specs.button.hover.background:"focus"===e.status?e.hoverBgColor||e.theme.specs.button.focus.background:"disabled"===e.status?e.bgColor||e.theme.specs.button.disabled.background:void 0}),(function(e){return"enabled"===e.status?e.theme.specs.button.enabled.opacity:"hover"===e.status?e.theme.specs.button.hover.opacity:"focus"===e.status?e.theme.specs.button.focus.opacity:"disabled"===e.status?e.theme.specs.button.disabled.opacity:void 0}));var p,m,f;function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h,g,y,v=s.ZP.div(p||(p=b(["\n  display: flex;\n  align-items: center;\n  height: 30px;\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n"]))),x=s.ZP.label(m||(m=b(["\n  position: absolute;\n  top: 18%;\n  left: 5px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #ccc;\n"]))),F=s.ZP.input(f||(f=b(["\n  opacity: 0;\n  z-index: 1;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  &:hover ~ ",' {\n    background: #ccc;\n    &::after {\n      content: "\f005";\n      font-family: "FontAwesome";\n      display: block;\n      color: white;\n      width: 12px;\n      height: 12px;\n      margin: 0px 4px;\n    }\n  }\n  &:checked + ',' {\n    background: yellowgreen;\n    border: 1px solid yellowgreen;\n    &::after {\n      content: "\f005";\n      font-family: "FontAwesome";\n      display: block;\n      color: white;\n      width: 12px;\n      height: 12px;\n      margin: 0px;\n    }\n  }\n'],["\n  opacity: 0;\n  z-index: 1;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  &:hover ~ ",' {\n    background: #ccc;\n    &::after {\n      content: "\\f005";\n      font-family: "FontAwesome";\n      display: block;\n      color: white;\n      width: 12px;\n      height: 12px;\n      margin: 0px 4px;\n    }\n  }\n  &:checked + ',' {\n    background: yellowgreen;\n    border: 1px solid yellowgreen;\n    &::after {\n      content: "\\f005";\n      font-family: "FontAwesome";\n      display: block;\n      color: white;\n      width: 12px;\n      height: 12px;\n      margin: 0px;\n    }\n  }\n'])),x,x);function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var w,k,C,S,O,A,j,z,P=s.ZP.div(h||(h=E(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 80px;\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n"]))),B=s.ZP.label(g||(g=E(["\n  margin: 2px 10px 2px 0; \n"]))),Z=s.ZP.input.attrs((function(e){return{type:e.type||"text",size:e.size||"0.5em"}}))(y||(y=E(["\n  color: ",";\n  border: 1px solid #cccccc;\n  border-radius: ",";\n  font-size: ",";\n  width: 70%;\n  padding: ",";\n"])),(function(e){return e.theme.specs.color}),(function(e){return e.theme.specs.borderRadius}),(function(e){return e.theme.specs.fontSize}),(function(e){return e.theme.specs.padding}));function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var D=s.ZP.div(w||(w=T(["\n\tmargin: 0 20px;\n"]))),M=s.ZP.div(k||(k=T(["\n\tdisplay: flex;\n\tmargin: 0 20px;\n"]))),J=s.ZP.div(C||(C=T(["\n\tmargin: 0 40px 0 0;\n"]))),N=s.ZP.div(S||(S=T(["\n\ttext-align: center;\n"]))),_=s.ZP.div(O||(O=T(["\n"]))),H=s.ZP.div(A||(A=T(["\n"]))),L=s.ZP.div(j||(j=T(["\n\n\twidth: 600px;\n\tborder: 1px solid #CCCCCC;\n\tmin-height: 100px;\n\tmax-height: 300px;\n\toverflow-y: scroll;\n\theight: auto;\n\ttext-align: left;\n\tpadding: ",";\n\n\tp {\n\t\tmargin: 2px;\n\t}\n"])),(function(e){return e.theme.specs.padding})),R=s.ZP.div(z||(z=T(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 600px;\n\tborder: 1px solid #CCCCCC;\n\theight: 100px;\n\ttext-align: center;\n\tpadding: ",";\n"])),(function(e){return e.theme.specs.padding}));const U=function(e){var t=(0,s.Fg)(),n=I((0,a.useState)("enabled"),2),r=n[0],o=n[1],l=I((0,a.useState)(t.specs.button.enabled.color),2),c=l[0],u=l[1],i=I((0,a.useState)(t.specs.button.enabled.background),2),p=i[0],m=i[1],f=I((0,a.useState)(t.specs.button.hover.background),2),b=f[0],h=f[1],g=function(e){var t=e.target.value;o(t)};return a.createElement(D,null,a.createElement("div",{className:"about"},a.createElement("h1",null,"Theme builder")),a.createElement(M,null,a.createElement(J,null,a.createElement(N,null,a.createElement("h3",null,"Enabled State"),a.createElement(d,{label:"OK",onClick:function(e){return e.preventDefault},status:"enabled"},"OK")),a.createElement(N,null,a.createElement("h3",null,"Hover State"),a.createElement(d,{label:"OK",onClick:function(e){return e.preventDefault},status:"hover"},"OK")),a.createElement(N,null,a.createElement("h3",null,"Focus State"),a.createElement(d,{label:"OK",onClick:function(e){return e.preventDefault},status:"focus"},"OK")),a.createElement(N,null,a.createElement("h3",null,"Disabled State"),a.createElement(d,{label:"OK",onClick:function(e){return e.preventDefault},status:"disabled"},"OK"))),a.createElement(_,null,a.createElement("h3",null,"Playground"),a.createElement(R,null,a.createElement(d,{label:"OK",onClick:function(e){document.querySelector(".".concat(L.styledComponentId)).innerHTML+="<p>Clicked</p>"},status:r,color:c,bgColor:p,hoverBgColor:b},"OK")),a.createElement("h4",null,"Actions"),a.createElement(L,null),a.createElement(H,null,a.createElement("h4",null,"States"),a.createElement(v,null,a.createElement(F,{type:"radio",name:"radio",value:"enabled",checked:"enabled"===o,onChange:function(e){return g(e)}}),a.createElement(x,null),a.createElement("div",null,"enabled")),a.createElement(v,null,a.createElement(F,{type:"radio",name:"radio",value:"hover",checked:"hover"===o,onChange:function(e){return g(e)}}),a.createElement(x,null),a.createElement("div",null,"hover")),a.createElement(v,null,a.createElement(F,{type:"radio",name:"radio",value:"focus",checked:"focus"===o,onChange:function(e){return g(e)}}),a.createElement(x,null),a.createElement("div",null,"focus")),a.createElement(v,null,a.createElement(F,{type:"radio",name:"radio",value:"disabled",checked:"disabled"===o,onChange:function(e){return g(e)}}),a.createElement(x,null),a.createElement("div",null,"disabled")),a.createElement("h4",null,"Customisations"),a.createElement(P,null,a.createElement(B,null,a.createElement("div",null,"Color")),a.createElement(Z,{type:"text",name:"color",placeholder:"Please enter color in #hexcode",onChange:function(e){return function(e){var t=e.target.value;u(t)}(e)}})),a.createElement(P,null,a.createElement(B,null,a.createElement("div",null,"Background Color")),a.createElement(Z,{type:"text",name:"color",placeholder:"Please enter background color in #hexcode",onChange:function(e){return function(e){var t=e.target.value;m(t)}(e)}})),a.createElement(P,null,a.createElement(B,null,a.createElement("div",null,"Hover Background Color")),a.createElement(Z,{type:"text",name:"color",placeholder:"Please enter hover background color in #hexcode",onChange:function(e){return function(e){var t=e.target.value;h(t)}(e)}}))))))},$=JSON.parse('{"data":{"theme1":{"id":"T_001","name":"Theme Blue","specs":{"body":"#FFFFFF","color":"#000000","fontFamily":"Montserrat","fontSize":"14px","padding":"12px 16px","cursor":"pointer","borderRadius":"0px","button":{"enabled":{"color":"#FFFFFF","background":"#058ED8","border":"none","opacity":"1"},"hover":{"color":"#FFFFFF","background":"#093554","border":"none","opacity":"1"},"focus":{"color":"#FFFFFF","background":"#093554","border":"none","opacity":"1"},"disabled":{"color":"#FFFFFF","background":"#058ED8","border":"none","opacity":"0.3","cursor":"default"}}}},"theme2":{"id":"T_002","name":"Theme Orange","specs":{"body":"#FFFFFF","color":"#000000","fontFamily":"Pacifico","fontSize":"14px","padding":"8px 16px","cursor":"pointer","border-radius":"5px","button":{"enabled":{"color":"#F7AB1B","background":"#FFFFFF","border":"1px solid #F7AB1B","opacity":"normal"},"hover":{"color":"#FFFFFF","background":"#F7AB1B","border":"1px solid #F7AB1B","opacity":"normal"},"focus":{"color":"#FFFFFF","background":"#F7AB1B","border":"1px solid #F7AB1B","opacity":"normal"},"disabled":{"color":"#F7AB1B","background":"#FFFFFF","border":"1px solid #F7AB1B","opacity":"disabled","cursor":"default"}}}}}}');var q=n.t($,2),V=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},W=function(e){var t=window.localStorage.getItem(e);if(t)return JSON.parse(t)};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X;function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=(0,s.vJ)(X||(X=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  body {\n    font-family: ",";\n    font-size: ",";\n    background: ",";\n    color: ",";\n    text-rendering: optimizeSpeed;\n    word-wrap: break-word;\n  }\n  h1 {\n    text-align: center;\n  }\n"])),(function(e){return e.theme.specs.fontFamily}),(function(e){return e.theme.specs.fontSize}),(function(e){return e.theme.specs.body}),(function(e){return e.theme.specs.color}));const ne=function(){var e=function(){var e=W("all-themes"),t=G((0,a.useState)(e.data.theme1),2),n=t[0],r=t[1],o=G((0,a.useState)(!1),2),l=o[0],c=o[1];return(0,a.useEffect)((function(){var t=W("theme");r(t||e.data.theme1),c(!0)}),[]),{theme:n,themeLoaded:l,setMode:function(e){V("theme",e),r(e)}}}(),t=e.theme,n=e.themeLoaded,r=Y((0,a.useState)(t),2),o=r[0],l=r[1];return(0,a.useEffect)((function(){l(t)}),[n]),V("all-themes",q),a.createElement(u.VK,null,n&&a.createElement(s.f6,{theme:o},a.createElement(i.rs,null,a.createElement(i.AW,{exact:!0,path:"/",component:U})),a.createElement(te,null)))};c.render(a.createElement(ne,null),document.getElementById("app"))}},e=>{var t;t=465,e(e.s=t)}]);