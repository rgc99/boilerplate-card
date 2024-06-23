/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$6=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),n$7=new WeakMap;let o$5 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$6&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$7.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new o$5("string"==typeof t?t:t+"",void 0,s$5),S$2=(s,n)=>{e$6?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$2=e$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$5=window,r$3=e$5.trustedTypes,h$2=r$3?r$3.emptyScript:"",o$4=e$5.reactiveElementPolyfillSupport,n$6={toAttribute(t,i){switch(i){case Boolean:t=t?h$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$2=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$6,reflect:!1,hasChanged:a$2},d$2="finalized";let u$2 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$2))return !1;this[d$2]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$2(i));}else void 0!==i&&s.push(c$2(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$6).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$6;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$2[d$2]=!0,u$2.elementProperties=new Map,u$2.elementStyles=[],u$2.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:u$2}),(null!==(s$4=e$5.reactiveElementVersions)&&void 0!==s$4?s$4:e$5.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$2=window,s$3=i$2.trustedTypes,e$4=s$3?s$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3="$lit$",n$5=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$5,h$1=`<${l$2}>`,r$2=document,u$1=()=>r$2.createComment(""),d$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$1=Array.isArray,v=t=>c$1(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$2.createTreeWalker(r$2,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$4?e$4.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h$1:v>=0?(e.push(d),s.slice(0,v)+o$3+s.slice(v)+n$5+w):s+n$5+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$3)||i.startsWith(n$5)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$3).split(n$5),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$5),i=t.length-1;if(i>0){h.textContent=s$3?s$3.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$1()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$1());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$5,t+1));)v.push({type:7,index:r}),t+=n$5.length-1;}r++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S$1(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$1(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$1(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$2).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$2,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$1(this,t,i),d$1(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d$1(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$2.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$1()),this.k(u$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$1(this,t,i,0),n=!d$1(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$1(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d$1(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$3?s$3.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$1(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$1(this,t);}}const B=i$2.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$2.litHtmlVersions)&&void 0!==t$2?t$2:i$2.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$3=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),n$4=new WeakMap;let o$2 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$4.set(s,t));}return t}toString(){return this.cssText}};const r$1=t=>new o$2("string"==typeof t?t:t+"",void 0,s$2),i$1=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$2(n,t,s$2)},S=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$1(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$1;const e$2=window,r=e$2.trustedTypes,h=r?r.emptyScript:"",o$1=e$2.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l$1={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$1){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$1}static finalize(){if(this.hasOwnProperty(d))return !1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i));}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$1){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==o$1||o$1({ReactiveElement:u}),(null!==(s$1=e$2.reactiveElementVersions)&&void 0!==s$1?s$1:e$2.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return n$1({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

// Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/**
 * Dispatches a custom event with an optional detail value.
 *
 * @param {string} type Name of event type.
 * @param {*=} detail Detail value containing event-specific
 *   payload.
 * @param {{ bubbles: (boolean|undefined),
 *           cancelable: (boolean|undefined),
 *           composed: (boolean|undefined) }=}
 *  options Object specifying options.  These may include:
 *  `bubbles` (boolean, defaults to `true`),
 *  `cancelable` (boolean, defaults to false), and
 *  `node` on which to fire the event (HTMLElement, defaults to `this`).
 * @return {Event} The new event that was fired.
 */
const fireEvent = (node, type, detail, options) => {
    options = options || {};
    // @ts-ignore
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

let IrrigationUnlimitedCardEditor = class IrrigationUnlimitedCardEditor extends s {
    setConfig(config) {
        this._config = config;
    }
    get _name() {
        var _a;
        return ((_a = this._config) === null || _a === void 0 ? void 0 : _a.name) || "";
    }
    get _show_controllers() {
        var _a;
        return ((_a = this._config) === null || _a === void 0 ? void 0 : _a.show_controllers) || "";
    }
    get _always_show_zones() {
        var _a;
        return ((_a = this._config) === null || _a === void 0 ? void 0 : _a.always_show_zones) || false;
    }
    get _always_show_sequences() {
        var _a;
        return ((_a = this._config) === null || _a === void 0 ? void 0 : _a.always_show_sequences) || false;
    }
    get _show_timeline_scheduled() {
        var _a;
        return ((_a = this._config) === null || _a === void 0 ? void 0 : _a.show_timeline_scheduled) || false;
    }
    get _show_timeline_history() {
        var _a;
        return ((_a = this._config) === null || _a === void 0 ? void 0 : _a.show_timeline_history) || true;
    }
    render() {
        if (!this.hass) {
            return A;
        }
        return x `
      <div class="iu-editor-row">
        <ha-textfield
          label="Title (optional)"
          .value=${this._name}
          .configValue=${"name"}
          @input="${this._valueChanged}"
        ></ha-textfield>
      </div>
      <div class="iu-editor-row">
        <ha-textfield
          label="Show controllers (CSV list)"
          .value=${this._show_controllers}
          .configValue=${"show_controllers"}
          @input="${this._valueChanged}"
        ></ha-textfield>
      </div>
      <div class="iu-editor-row">
        <ha-switch
          id=${this._always_show_zones}
          .checked=${this._always_show_zones}
          .configValue=${"always_show_zones"}
          @change=${this._valueChanged}
        ></ha-switch>
        <label for=${this._always_show_zones}>Always show zones</label>
      </div>
      <div class="iu-editor-row">
        <ha-switch
          id=${this._always_show_sequences}
          .checked=${this._always_show_sequences}
          .configValue=${"always_show_sequences"}
          @change=${this._valueChanged}
        ></ha-switch>
        <label for=${this._always_show_sequences}>Always show sequences</label>
      </div>
      <div class="iu-editor-row">
        <ha-switch
          id=${this._show_timeline_scheduled}
          .checked=${this._show_timeline_scheduled}
          .configValue=${"show_timeline_scheduled"}
          @change=${this._valueChanged}
        ></ha-switch>
        <label for=${this._show_timeline_scheduled}
          >Show timeline scheduled</label
        >
      </div>
      <div class="iu-editor-row">
        <ha-switch
          id=${this._show_timeline_history}
          .checked=${this._show_timeline_history}
          .configValue=${"show_timeline_history"}
          @change=${this._valueChanged}
        ></ha-switch>
        <label for=${this._show_timeline_history}>Show timeline history</label>
      </div>
    `;
    }
    _valueChanged(ev) {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        if (target.configValue) {
            if (target.value === "") {
                const tmpConfig = Object.assign({}, this._config);
                delete tmpConfig[target.configValue];
                this._config = tmpConfig;
            }
            else {
                this._config = Object.assign(Object.assign({}, this._config), { [target.configValue]: target.checked !== undefined ? target.checked : target.value });
            }
        }
        fireEvent(this, "config-changed", { config: this._config }, { bubbles: true, composed: true });
    }
};
IrrigationUnlimitedCardEditor.styles = i$1 `
    ha-switch {
      padding: 16px 6px;
    }
    ha-textfield {
      width: 100%;
    }
  `;
__decorate([
    n$1({ attribute: false })
], IrrigationUnlimitedCardEditor.prototype, "hass", void 0);
__decorate([
    t()
], IrrigationUnlimitedCardEditor.prototype, "_config", void 0);
IrrigationUnlimitedCardEditor = __decorate([
    e$1("irrigation-unlimited-card-editor")
], IrrigationUnlimitedCardEditor);

function hms_to_secs(value) {
    if (!value)
        return undefined;
    var hms = value.split(":");
    return +hms[0] * 60 * 60 + +hms[1] * 60 + (+hms[2] || 0);
}
function secs_to_hms(value) {
    if (!value)
        return undefined;
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value - hours * 3600) / 60);
    const seconds = value % 60;
    return (String(hours) +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0"));
}

class IUEntity {
    constructor(data) {
        this.start = undefined;
        this.status = undefined;
        this.duration = undefined;
        this._remaining = undefined;
        this.last_updated = undefined;
        this._percent_completed = undefined;
        this.index = data.index;
        this.name = data.name;
        this.entity_id = data.entity_id;
    }
    get remaining() {
        return secs_to_hms(this._remaining);
    }
    set remaining(value) {
        this._remaining = hms_to_secs(value);
        return;
    }
    get percent_completed() {
        return this._percent_completed;
    }
    update(hass) {
        let result = 0 /* IUUpdateStatus.None */;
        const entity = hass.states[this.entity_id];
        const date = new Date(entity.last_updated);
        if (this.last_updated === undefined || date > this.last_updated) {
            this.last_updated = date;
            result |= 1 /* IUUpdateStatus.EntityUpdated */;
            this.status = entity.attributes.status;
            if (this.status === "on" ||
                this.status === "delay" ||
                this.status === "paused") {
                this.start = new Date(entity.attributes.current_start);
                this.duration = hms_to_secs(entity.attributes.current_duration);
                this.remaining = entity.attributes.time_remaining;
            }
            else
                this.duration = this.start = this._remaining = undefined;
        }
        if (this.status === "on" || this.status === "delay")
            result |= 2 /* IUUpdateStatus.TimerRequired */;
        return result;
    }
    timer(now) {
        if (!this.start || !this.duration)
            return;
        if (this.status === "on" || this.status === "delay") {
            const elapsed = Math.round((now.getTime() - this.start.getTime()) / 1000);
            this._remaining = this.duration - elapsed;
            this._percent_completed = Math.round((elapsed / this.duration) * 100);
        }
    }
}
class IUSequenceZone {
    constructor(data) {
        this.enabled = true;
        this.suspended = null;
        this.index = data.index;
        this.zone_ids = data.zone_ids;
    }
    get remaining() {
        return secs_to_hms(this._remaining);
    }
    set remaining(value) {
        this._remaining = hms_to_secs(value);
        return;
    }
    get duration() {
        return secs_to_hms(this._remaining);
    }
    set duration(value) {
        this._remaining = hms_to_secs(value);
        return;
    }
}
class IUSequence extends IUEntity {
    constructor(data) {
        super(data);
        this.zones = [];
        for (const z of data.zones)
            this.zones.push(new IUSequenceZone(z));
    }
    update(hass) {
        let result = super.update(hass);
        if ((result & 1 /* IUUpdateStatus.EntityUpdated */) !== 0) {
            const entity = hass.states[this.entity_id];
            for (const z of entity.attributes.zones) {
                const zone = this.zones[z.index];
                zone.icon = z.icon;
                zone.enabled = z.enabled;
                zone.suspended = z.suspended ? new Date(z.suspended) : null;
                zone.start = new Date(z.start);
                zone._duration = hms_to_secs(z.duration);
                zone.adjustment = z.adjustment;
                if (zone.status === "off" && z.status === "on") {
                    zone._remaining = zone._duration;
                    zone.percent_completed = 0;
                }
                else if (z.status === "off")
                    zone._remaining = zone.percent_completed = undefined;
                zone.status = z.status;
            }
        }
        return result;
    }
    timer(now) {
        super.timer(now);
        if (this.status === "on")
            for (const z of this.zones) {
                if (z.start && z._duration) {
                    const elapsed = Math.round((now.getTime() - z.start.getTime()) / 1000);
                    z._remaining = z._duration - elapsed;
                    z.percent_completed = Math.round((elapsed / z._duration) * 100);
                }
            }
    }
}
class IUZone extends IUEntity {
    constructor(data) {
        super(data);
        this.zone_id = data.zone_id;
    }
}
class IUController extends IUEntity {
    constructor(data) {
        super(data);
        this.zones = [];
        this.sequences = [];
        this.controller_id = data.controller_id;
        for (const z of data.zones)
            this.zones.push(new IUZone(z));
        for (const s of data.sequences)
            this.sequences.push(new IUSequence(s));
    }
    lookup_zone_name(zone_id) {
        for (const z of this.zones)
            if (z.zone_id === zone_id)
                return z.name;
        return undefined;
    }
    update(hass) {
        let result = super.update(hass);
        for (const z of this.zones)
            result |= z.update(hass);
        for (const s of this.sequences)
            result |= s.update(hass);
        return result;
    }
}
class IUCoordinator {
    constructor(parent) {
        this.initialised = false;
        this.version = "";
        this.timer_id = undefined;
        this.parent = parent;
        this.controllers = [];
    }
    async _getInfo(hass) {
        try {
            const response = (await hass.callService("irrigation_unlimited", "get_info", {}, { entity_id: "irrigation_unlimited.coordinator" }, true, true)).response;
            return response;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    init(hass) {
        if (!hass || this.initialised)
            return;
        this._getInfo(hass).then((response) => {
            this.version = response.version;
            for (const c of response.controllers)
                this.controllers.push(new IUController(c));
            this.initialised = true;
            this.parent.requestUpdate();
        });
    }
    update(hass) {
        if (!this.initialised)
            return false;
        let result = 0 /* IUUpdateStatus.None */;
        for (const c of this.controllers)
            result |= c.update(hass);
        if (this.timer_id === undefined &&
            (result & 2 /* IUUpdateStatus.TimerRequired */) !== 0) {
            this.start_timer(hass);
        }
        else if (this.timer_id !== undefined &&
            (result & 2 /* IUUpdateStatus.TimerRequired */) === 0) {
            this.stop_timer();
        }
        return result !== 0;
    }
    start_timer(_hass) {
        if (this.timer_id)
            return;
        this.timer_id = setInterval((function (scope) {
            return function () {
                const now = new Date();
                for (const c of scope.controllers) {
                    c.timer(now);
                    for (const z of c.zones)
                        z.timer(now);
                    for (const s of c.sequences)
                        s.timer(now);
                }
                scope.parent.requestUpdate();
            };
        })(this), 1000);
    }
    stop_timer() {
        if (!this.timer_id)
            return;
        clearInterval(this.timer_id);
        this.timer_id = undefined;
    }
}

const styles = i$1 `
  .iu-controller.iu-hidden {
    display: none;
  }

  .iu-control-panel {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iu-control-panel-item {
    padding: 0.5em 0 0.5em 1em;
  }

  .iu-zones.iu-hidden.iu-content {
    display: none;
  }

  .iu-sequences.iu-hidden.iu-content {
    display: none;
  }

  .iu-hidden .iu-content {
    display: none;
  }

  .iu-hidden .iu-expander::before {
    content: "\u25B6";
    font-size: large;
  }

  .iu-expander::before {
    content: "\u25BC";
    font-size: large;
  }

  .iu-controller-row.iu-td {
    display: flex;
    align-items: center;
    min-height: 3em;
  }

  .iu-zone-row.iu-td {
    display: flex;
    align-items: center;
    min-height: 3em;
  }

  .iu-sequence-row.iu-td {
    display: flex;
    align-items: center;
    min-height: 3em;
  }

  .iu-sequence-zone-row.iu-td {
    display: flex;
    align-items: center;
    height: 2em;
  }

  .iu-timeline-scheduled,
  .iu-timeline-scheduled .iu-schedule {
    color: var(--label-badge-blue, #039be5);
  }

  .iu-timeline-next,
  .iu-timeline-next .iu-schedule {
    color: var(--label-badge-red, #db4437);
  }

  .iu-timeline-history,
  .iu-timeline-history .iu-schedule {
    color: var(--label-badge-green, #43a047);
  }

  .iu-td {
    display: flex;
    align-items: center;
  }

  .iu-td1 {
    flex: 1.5em;
    text-align: center;
    cursor: pointer;
  }

  .iu-td2 {
    flex: 30px;
    text-align: center;
  }

  .iu-td3 {
    flex: 40%;
    text-align: left;
  }

  .iu-td4 {
    flex: 20%;
    text-align: center;
  }

  .iu-td5 {
    flex: 15%;
    text-align: center;
  }

  .iu-td6 {
    flex: 15%;
    text-align: center;
  }

  .iu-td7 {
    flex: 10%;
    text-align: center;
  }

  .iu-on .iu-duration,
  .iu-delay .iu-duration {
    color: var(--state-on-color, #66a61e);
  }

  .iu-paused .iu-duration {
    color: var(--state-on-color, #66a61e);
    animation: 1s step-end infinite duration-paused;
  }

  @keyframes duration-paused {
    50% {
      opacity: 0;
    }
  }

  .iu-schedule {
    color: var(--secondary-text-color, #727272);
    font-size: small;
  }

  .iu-manual .iu-schedule {
    color: var(--label-badge-red, #df4c1e);
  }

  .iu-suspended .iu-start {
    color: var(--label-badge-yellow, #ffff00);
    font-style: italic;
  }

  .iu-name {
    color: var(--secondary-text-color, #727272);
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ha-icon {
    color: var(--state-icon-color, #44739e);
  }

  .iu-on .iu-td2 ha-icon,
  .iu-paused .iu-td2 ha-icon,
  .iu-delay .iu-td2 ha-icon {
    color: var(--state-icon-active-color, #fdd835);
  }

  .iu-menu {
    position: relative;
    display: inline-block;
  }

  .iu-menu-button {
    background-color: transparent;
    text-align: center;
    display: block;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .iu-menu-content {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 200px;
    padding: 10px 0;
    position: absolute;
    background-color: var(--card-background-color, white);
    right: 0;
    box-shadow: 0px 0px 7px 0px rgba(50, 50, 50, 0.75);
    border-radius: 5px;
    z-index: 1;
  }

  .iu-menu-content.iu-hidden {
    display: none;
  }

  .iu-menu-content .iu-menu-item {
    display: flex;
    padding: 0px 5px;
    line-height: 48px;
  }

  .iu-menu .iu-menu-item:hover {
    color: var(--primary-color, #b3e5fc);
    background-color: var(--secondary-background-color, #e5e5e5);
  }

  .iu-menu-item.iu-hidden {
    display: none;
  }

  .iu-mc1 {
    flex: 30%;
    text-align: left;
  }

  .iu-mc2 {
    flex: 40%;
    text-align: right;
  }

  .iu-mc3 {
    flex: 30%;
    text-align: center;
  }

  .iu-mc3 ha-icon {
    display: flex;
  }

  .iu-adjust-input:invalid,
  .iu-time-input:invalid {
    color: var(--label-badge-red, #df4c1e);
  }
`;

const CARD_VERSION = '2024.5.0';

var common$1 = {
	version: "Version",
	invalid_configuration: "Invalid configuration",
	show_warning: "Show Warning",
	show_error: "Show Error"
};
var en = {
	common: common$1
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common$1,
    default: en
});

var common = {
	version: "Versjon",
	invalid_configuration: "Ikke gyldig konfiguration",
	show_warning: "Vis advarsel"
};
var nb = {
	common: common
};

var nb$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common,
    default: nb
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages = {
    en: en$1,
    nb: nb$1,
};
function localize(string, search = '', replace = '') {
    const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');
    let translated;
    try {
        translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
    }
    catch (e) {
        translated = string.split('.').reduce((o, i) => o[i], languages['en']);
    }
    if (translated === undefined)
        translated = string.split('.').reduce((o, i) => o[i], languages['en']);
    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}

/* eslint no-console: 0 */
console.info(`%c  IRRIGATION-UNLIMITED-CARD \n%c  ${localize("common.version")} ${CARD_VERSION}    `, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");
window.customCards = window.customCards || [];
window.customCards.push({
    type: "irrigation-unlimited-card",
    name: "Irrigation Unlimited Card",
    description: "A companion card for the Irrigation Unlimited integration",
});
let IrrigationUnlimitedCard = class IrrigationUnlimitedCard extends s {
    constructor() {
        super(...arguments);
        this.iu_coordinator = new IUCoordinator(this);
    }
    static async getConfigElement() {
        return document.createElement("irrigation-unlimited-card-editor");
    }
    setConfig(config) {
        if (!config) {
            throw new Error(localize("common.invalid_configuration"));
        }
        this.config = config;
    }
    static getStubConfig() {
        return {};
    }
    getCardSize() {
        return 1;
    }
    firstUpdated(_changedProperties) {
        this.iu_coordinator.init(this.hass);
    }
    shouldUpdate(changedProps) {
        if (!this.hass) {
            return false;
        }
        if (changedProps.has("config"))
            return true;
        return this.iu_coordinator.update(this.hass);
    }
    render() {
        if (!this.hass)
            return A;
        return x `
      <ha-card
        .header=${this.config.name}
        tabindex="0"
        id="iu-card"
        @click="${this._clickNet}"
      >
        <div class="iu-header-row iu-td">
          <div class="iu-td1"></div>
          <div class="iu-td2"></div>
          <div class="iu-td3"></div>
          <div class="iu-td4"><ha-icon icon="mdi:clock-outline"></ha-icon></div>
          <div class="iu-td5"><ha-icon icon="mdi:timer-sand"></ha-icon></div>
          <div class="iu-td6"><ha-icon icon="mdi:delta"></ha-icon></div>
          <div class="iu-td7"><ha-icon icon="mdi:menu"></ha-icon></div>
        </div>
        <div class="iu-controllers">
          ${this.iu_coordinator.controllers.map((controller) => this._renderController(controller))}
        </div>
      </ha-card>
    `;
    }
    _renderController(controller) {
        var _a;
        const stateObj = this.hass.states[controller.entity_id];
        stateObj.attributes.status;
        const isOn = stateObj.state === "on";
        const isEnabled = stateObj.attributes.enabled;
        const suspended = stateObj.attributes.suspended;
        const isHidden = !(!this.config.show_controllers ||
            (this.config.show_controllers &&
                ((_a = this.config.show_controllers) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, "").split(",").includes(controller.index + 1 + ""))));
        const zonesHidden = !this.config.always_show_zones;
        const sequencesHidden = !this.config.always_show_sequences;
        let start;
        let duration;
        let schedule_name;
        let startStr = "";
        if (isOn) {
            start = new Date(stateObj.attributes.current_start);
            duration = controller.remaining;
            schedule_name = stateObj.attributes.current_name;
        }
        else if (suspended) {
            start = new Date(suspended);
            duration = "";
            schedule_name = "";
        }
        else {
            start = new Date(stateObj.attributes.next_start);
            duration = stateObj.attributes.next_duration;
            schedule_name = stateObj.attributes.next_name;
        }
        if (!isNaN(start.getTime())) {
            startStr = start.toLocaleTimeString(undefined, {
                weekday: "short",
                hour: "numeric",
                minute: "2-digit",
                hour12: false,
            });
        }
        const controllerClasses = ["iu-controller iu-object"];
        if (isHidden)
            controllerClasses.push("iu-hidden");
        const rowClasses = ["iu-controller-row iu-td"];
        if (isOn)
            rowClasses.push("iu-on");
        if (isEnabled)
            rowClasses.push("iu-enabled");
        if (suspended)
            rowClasses.push("iu-suspended");
        const zonesClasses = ["iu-zones iu-content"];
        if (zonesHidden)
            zonesClasses.push("iu-hidden");
        const sequencesClasses = ["iu-sequences iu-content"];
        if (sequencesHidden)
            sequencesClasses.push("iu-hidden");
        return x `
      <div
        class=${controllerClasses.join(" ")}
        iu-key="${controller.index + 1}.0.0.0"
      >
        <hr />
        <div class=${rowClasses.join(" ")}>
          <div class="iu-td1"></div>
          <div class="iu-td2">
            <ha-icon .icon=${stateObj.attributes.icon}></ha-icon>
          </div>
          <div class="iu-td3">
            <span>${controller.index + 1}</span>
            <span class="iu-name">${controller.name}</span>
          </div>
          <div class="iu-td4">
            <div ?hidden=${!isEnabled}>
              <span class="iu-schedule">${schedule_name}</span>
              <br ?hidden=${isOn || suspended} />
              <span class="iu-start" ?hidden=${isOn}>${startStr}</span>
            </div>
          </div>
          <div class="iu-td5 iu-duration">
            <div ?hidden=${!isEnabled}>${duration}</div>
          </div>
          <div class="iu-td6"></div>
          <div class="iu-td7">
            ${this._renderMenu(isEnabled, false, true, true, 3, null, suspended)}
          </div>
        </div>
        <div class="iu-control-panel">
          <div class="iu-control-panel-item">
            <label>Zones&nbsp;</label>
            <ha-switch
              .checked="${!zonesHidden}"
              .disabled="${this.config.always_show_zones}"
              @change="${this._toggleZones}"
            >
            </ha-switch>
          </div>
          <div class="iu-control-panel-item">
            <label>Sequences&nbsp;</label>
            <ha-switch
              .checked="${!sequencesHidden}"
              .disabled="${this.config.always_show_sequences}"
              @change="${this._toggleSequences}"
            >
            </ha-switch>
          </div>
        </div>
        <div class=${zonesClasses.join(" ")}>
          <hr />
          ${controller.zones.map((zone) => this._renderZone(controller, zone))}
        </div>
        <div class=${sequencesClasses.join(" ")}>
          <hr />
          ${controller.sequences.map((sequence) => this._renderSequence(controller, sequence))}
        </div>
      </div>
    `;
    }
    _renderZone(controller, zone) {
        const stateObj = this.hass.states[zone.entity_id];
        const status = stateObj.attributes.status;
        const isOn = stateObj.state === "on";
        const isEnabled = stateObj.attributes.enabled;
        const suspended = stateObj.attributes.suspended;
        const isBlocked = status === "blocked";
        let start;
        let duration;
        let schedule_index;
        let schedule_name;
        let adjustment;
        let startStr = "";
        if (isOn) {
            start = new Date(stateObj.attributes.current_start);
            duration = zone.remaining;
            schedule_index = stateObj.attributes.current_schedule;
            schedule_name = stateObj.attributes.current_name;
            adjustment = stateObj.attributes.current_adjustment;
        }
        else if (suspended) {
            start = new Date(suspended);
            duration = "";
            schedule_index = -1;
            schedule_name = "";
            adjustment = "";
        }
        else {
            start = new Date(stateObj.attributes.next_start);
            duration = stateObj.attributes.next_duration;
            schedule_index = stateObj.attributes.next_schedule;
            schedule_name = stateObj.attributes.next_name;
            adjustment = stateObj.attributes.next_adjustment;
        }
        const isManual = schedule_index === 0;
        if (!isNaN(start.getTime())) {
            startStr = start.toLocaleTimeString(undefined, {
                weekday: "short",
                hour: "numeric",
                minute: "2-digit",
                hour12: false,
            });
        }
        const classes = ["iu-zone-row iu-td"];
        if (isOn)
            classes.push("iu-on");
        if (isEnabled)
            classes.push("iu-enabled");
        if (suspended)
            classes.push("iu-suspended");
        if (isManual)
            classes.push("iu-manual");
        if (isBlocked)
            classes.push("iu-blocked");
        let timeline = stateObj.attributes.timeline;
        if (timeline === undefined)
            timeline = [];
        return x `
      <div
        class="iu-zone iu-object"
        iu-key="${controller.index + 1}.${zone.index + 1}.0.0"
      >
        <div class="iu-collapsible iu-hidden">
          <div class=${classes.join(" ")}>
            <div
              class="iu-td1 iu-expander"
              @click="${this._toggleCollapse}"
            ></div>
            <div class="iu-td2" @click="${this._toggleCollapse}">
              <ha-icon .icon=${stateObj.attributes.icon}></ha-icon>
            </div>
            <div class="iu-td3">
              <span style="color: ${this._selectColour(zone.index)}"
                >${zone.index + 1}</span
              >
              <span class="iu-name">${stateObj.attributes.friendly_name}</span>
            </div>
            <div class="iu-td4">
              <div ?hidden=${!isEnabled || isBlocked}>
                <span class="iu-schedule">${schedule_name}</span>
                <br ?hidden=${isOn || isManual || suspended} />
                <span class="iu-start" ?hidden=${isOn || isManual}
                  >${startStr}</span
                >
              </div>
            </div>
            <div class="iu-td5 iu-duration">
              <div ?hidden=${!isEnabled || suspended || isBlocked}>
                ${duration}
              </div>
            </div>
            <div class="iu-td6 iu-adjustment">
              <div ?hidden=${!isEnabled || isBlocked || suspended || isManual}>
                ${adjustment}
              </div>
            </div>
            <div class="iu-td7">
              ${this._renderMenu(isEnabled, isBlocked, true, true, 0, adjustment, suspended)}
            </div>
          </div>
          <div class="iu-zone-history iu-content">
            ${timeline
            .filter((item) => {
            return ((item.start !== item.end &&
                item.status === "history" &&
                (this.config.show_timeline_history === undefined ||
                    this.config.show_timeline_history)) ||
                (item.status === "scheduled" &&
                    this.config.show_timeline_scheduled) ||
                (item.status === "next" &&
                    this.config.show_timeline_scheduled));
        })
            .map((item) => this._renderZoneHistory(item))}
          </div>
        </div>
      </div>
    `;
    }
    _renderZoneHistory(timeline) {
        const start = new Date(timeline.start);
        const duration = new Date(new Date(timeline.end).getTime() - start.getTime())
            .toISOString()
            .slice(12, 19);
        const startStr = start.toLocaleString(undefined, {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: false,
        });
        const classes = ["iu-timeline-row iu-td"];
        let icon = "";
        if (timeline.status === "history") {
            classes.push("iu-timeline-history");
            icon = "mdi:history";
        }
        else if (timeline.status === "scheduled") {
            classes.push("iu-timeline-scheduled");
            icon = "mdi:clock-outline";
        }
        else if (timeline.status === "next") {
            classes.push("iu-timeline-next");
            icon = "mdi:clock-star-four-points-outline";
        }
        return x `
      <div class="iu-zone-history iu-object">
        <div class=${classes.join(" ")}>
          <div class="iu-td1"></div>
          <div class="iu-td2">
            <ha-icon icon=${icon}></ha-icon>
          </div>
          <div class="iu-td3">${startStr}</div>
          <div class="iu-td4 iu-schedule">${timeline.schedule_name}</div>
          <div class="iu-td5 iu-duration">${duration}</div>
          <div class="iu-td6 iu-adjustment">${timeline.adjustment}</div>
          <div class="iu-td7"></div>
        </div>
      </div>
    `;
    }
    _renderSequence(controller, sequence) {
        const stateObj = this.hass.states[sequence.entity_id];
        const status = stateObj.attributes.status;
        const isOn = status === "on";
        const isPaused = status === "paused";
        const isDelay = status === "delay";
        const isBlocked = status === "blocked";
        const isEnabled = stateObj.attributes.enabled;
        const suspended = stateObj.attributes.suspended;
        let start;
        let duration;
        let schedule_index;
        let schedule_name;
        let adjustment;
        let startStr = "";
        if (isOn || isPaused || isDelay) {
            start = new Date(stateObj.attributes.current_start);
            duration = sequence.remaining;
            schedule_index = stateObj.attributes.current_schedule;
            schedule_name = stateObj.attributes.current_name;
            adjustment = stateObj.attributes.adjustment;
        }
        else if (suspended) {
            start = new Date(suspended);
            duration = "";
            schedule_index = -1;
            schedule_name = "";
            adjustment = "";
        }
        else {
            start = new Date(stateObj.attributes.next_start);
            duration = stateObj.attributes.next_duration;
            schedule_index = stateObj.attributes.next_schedule;
            schedule_name = stateObj.attributes.next_name;
            adjustment = stateObj.attributes.adjustment;
        }
        const isManual = schedule_index === 0;
        const isRunning = sequence.remaining !== "0:00:00";
        if (start !== null && !isNaN(start.getTime())) {
            startStr = start.toLocaleTimeString(undefined, {
                weekday: "short",
                hour: "numeric",
                minute: "2-digit",
                hour12: false,
            });
        }
        const classes = ["iu-sequence-row iu-td"];
        if (isOn)
            classes.push("iu-on");
        if (isPaused)
            classes.push("iu-paused");
        if (isDelay)
            classes.push("iu-delay");
        if (isEnabled)
            classes.push("iu-enabled");
        if (suspended)
            classes.push("iu-suspended");
        if (isManual)
            classes.push("iu-manual");
        if (isRunning)
            classes.push("iu-running");
        if (isBlocked)
            classes.push("iu-blocked");
        return x `
      <div
        class="iu-sequence iu-object"
        iu-key="${controller.index + 1}.0.${sequence.index + 1}.0"
      >
        <div class="iu-collapsible iu-hidden">
          <div class=${classes.join(" ")}>
            <div
              class="iu-td1 iu-expander"
              @click="${this._toggleCollapse}"
            ></div>
            <div class="iu-td2" @click="${this._toggleCollapse}">
              <ha-icon
                .icon=${stateObj.attributes.icon}
                ?is-on=${isOn || isPaused}
              ></ha-icon>
            </div>
            <div class="iu-td3" @click="${this._toggleCollapse}">
              <span>${sequence.index + 1}</span>
              <span class="iu-name">${sequence.name}</span>
            </div>
            <div class="iu-td4">
              <div ?hidden=${!isEnabled || isBlocked}>
                <span class="iu-schedule">${schedule_name}</span>
                <br ?hidden=${isOn || isPaused || isDelay || suspended} />
                <span class="iu-start" ?hidden=${isOn || isPaused || isDelay}
                  >${startStr}</span
                >
              </div>
            </div>
            <div class="iu-td5 iu-duration">
              <div
                ?hidden=${!isEnabled ||
            suspended ||
            isBlocked ||
            !(isRunning || isPaused || isDelay)}
              >
                ${duration}
              </div>
            </div>
            <div class="iu-td6 iu-adjustment">
              <div ?hidden=${isManual}>${adjustment}</div>
            </div>
            <div class="iu-td7">
              ${this._renderMenu(isEnabled, isBlocked, true, true, status === "on" || status === "delay"
            ? 1
            : status === "paused"
                ? 2
                : 0, adjustment, suspended)}
            </div>
          </div>
          <div class="iu-sequence-zones iu-content">
            ${sequence.zones.map((zone) => this._renderSequenceZone(controller, sequence, zone, isManual))}
          </div>
        </div>
      </div>
    `;
    }
    _renderSequenceZone(controller, sequence, sequenceZone, isManual) {
        const status = sequenceZone.status;
        const isOn = status === "on";
        const isEnabled = sequenceZone.enabled;
        const suspended = sequenceZone.suspended;
        const isBlocked = status === "blocked";
        const isRunning = sequenceZone._duration !== 0;
        let duration;
        let startStr = "";
        if (isOn)
            duration = sequenceZone.remaining;
        else if (suspended)
            duration = "";
        else
            duration = sequenceZone.duration;
        if (suspended !== null) {
            const start = new Date(suspended);
            if (!isNaN(start.getTime())) {
                startStr = start.toLocaleTimeString(undefined, {
                    weekday: "short",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: false,
                });
            }
        }
        const classes = ["iu-sequence-zone-row iu-td"];
        if (isOn)
            classes.push("iu-on");
        if (isEnabled)
            classes.push("iu-enabled");
        if (suspended)
            classes.push("iu-suspended");
        if (isManual)
            classes.push("iu-manual");
        if (isRunning)
            classes.push("iu-running");
        if (isBlocked)
            classes.push("iu-blocked");
        return x `
      <div
        class="iu-sequence-zone iu-object"
        iu-key="${controller.index + 1}.0.${sequence.index +
            1}.${sequenceZone.index + 1}"
      >
        <div class=${classes.join(" ")}>
          <div class="iu-td1"></div>
          <div class="iu-td2">
            <ha-icon .icon=${sequenceZone.icon} ?is-on=${isOn}></ha-icon>
          </div>
          <div class="iu-td3">
            <span
              >${sequenceZone.zone_ids.map((zoneRef, index, array) => this._renderSequenceZoneRef(controller, zoneRef, index === array.length - 1))}</span
            >
          </div>
          <div class="iu-td4">
            <div ?hidden=${!isEnabled || isBlocked}>
              <span class="iu-start">${startStr}</span>
            </div>
          </div>
          <div class="iu-td5 iu-duration">
            <div
              ?hidden=${!isEnabled ||
            suspended !== null ||
            isBlocked ||
            !isRunning}
            >
              ${duration}
            </div>
          </div>
          <div class="iu-td6 iu-adjustment">
            <div ?hidden=${isManual}>${sequenceZone.adjustment}</div>
          </div>
          <div class="iu-td7">
            ${this._renderMenu(isEnabled, isBlocked, false, false, 0, sequenceZone.adjustment, suspended)}
          </div>
        </div>
      </div>
    `;
    }
    _renderSequenceZoneRef(controller, zoneRef, last) {
        const name = controller.lookup_zone_name(zoneRef);
        if (name)
            return x `<span class="iu-name"
        >${name}${last === false ? ", " : ""}</span
      >`;
        return x `
      <span style="color: ${this._selectColour(parseInt(zoneRef) - 1)}"
        >${zoneRef}</span
      >
    `;
    }
    _renderMenu(isEnabled, isBlocked, allowManual, allowCancel, pauseResume, adjustment, suspended) {
        return x `
      <div class="iu-menu">
        <ha-icon
          class="iu-menu-button"
          icon="mdi:dots-vertical"
          @click="${this._toggleMenu}"
        ></ha-icon>
        <div class="iu-menu-content iu-hidden">
          <div class="iu-menu-item">
            <div class="iu-mc1">Enable</div>
            <div class="iu-mc2"></div>
            <div class="iu-mc3">
              ${this._renderEnabled(isEnabled, isBlocked)}
            </div>
          </div>
          <div
            class="iu-menu-item ${suspended === undefined ? "iu-hidden" : ""}"
          >
            <div class="iu-mc1">Suspend</div>
            <div class="iu-mc2">
              <input
                type="text"
                class="iu-time-input"
                placeholder="h:mm:ss"
                title="Duration
===============
h:mm:ss
<blank> = reset"
                size="8"
                maxlength="8"
                required
                pattern="^[0-9]{1,2}:[0-9]{2}:[0-9]{2}$"
              />
            </div>
            <div class="iu-mc3">
              <ha-icon-button
                icon="mdi:timer-outline"
                @click="${this._serviceSuspend}"
              >
                <ha-icon icon="mdi:timer-outline"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
          <div class="iu-menu-item ${!allowManual ? "iu-hidden" : ""}">
            <div class="iu-mc1">Manual</div>
            <div class="iu-mc2">
              <input
                type="text"
                class="iu-time-input"
                placeholder="0:00:00"
                title="Duration"
                size="8"
                maxlength="8"
                required
                pattern="^[0-9]{1,2}:[0-9]{2}:[0-9]{2}$"
              />
            </div>
            <div class="iu-mc3">
              <ha-icon-button
                icon="mdi:play"
                @click="${this._serviceManualRun}"
              >
                <ha-icon icon="mdi:run"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
          <div
            class="iu-menu-item ${(~pauseResume & 1) > 0 ? "iu-hidden" : ""}"
          >
            <div class="iu-mc1">Pause</div>
            <div class="iu-mc2"></div>
            <div class="iu-mc3">
              <ha-icon-button
                .disabled=${(~pauseResume & 1) > 0}
                @click="${this._servicePause}"
              >
                <ha-icon icon="mdi:pause"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
          <div
            class="iu-menu-item ${(~pauseResume & 2) > 0 ? "iu-hidden" : ""}"
          >
            <div class="iu-mc1">Resume</div>
            <div class="iu-mc2"></div>
            <div class="iu-mc3">
              <ha-icon-button
                .disabled=${(~pauseResume & 2) > 0}
                @click="${this._serviceResume}"
              >
                <ha-icon icon="mdi:play"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
          <div class="iu-menu-item ${!allowCancel ? "iu-hidden" : ""}">
            <div class="iu-mc1">Cancel</div>
            <div class="iu-mc2"></div>
            <div class="iu-mc3">
              <ha-icon-button
                .disabled=${!allowCancel}
                @click="${this._serviceCancel}"
              >
                <ha-icon icon="mdi:cancel"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
          <div
            class="iu-menu-item ${adjustment === undefined ? "iu-hidden" : ""}"
          >
            <div class="iu-mc1">Adjust</div>
            <div class="iu-mc2">
              <input
                type="text"
                class="iu-adjust-input"
                value=${adjustment !== null && adjustment !== void 0 ? adjustment : ""}
                title="Adjustment options
===============
Percentage: %n
Actual: =0:00:00
Increase: +0:00:00
Decrease: -0:00:00
Reset: <blank>"
                size="9"
                maxlength="9"
                pattern="^$|^[=+-][0-9]{1,2}:[0-9]{2}:[0-9]{2}$|^%[0-9]*.?[0-9]+$"
              />
            </div>
            <div class="iu-mc3">
              <ha-icon-button icon="mdi:adjust" @click="${this._serviceAdjust}">
                <ha-icon icon="mdi:adjust"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    _renderEnabled(isEnabled, isBlocked) {
        return x `
      <ha-switch
        .checked=${isEnabled}
        .disabled=${isBlocked}
        @change="${this._serviceEnable}"
      ></ha-switch>
    `;
    }
    _selectColour(index) {
        const palette = [
            "#3498db",
            "#e74c3c",
            "#9b59b6",
            "#f1c40f",
            "#2ecc71",
            "#1abc9c",
            "#34495e",
            "#e67e22",
            "#7f8c8d",
            "#27ae60",
            "#2980b9",
            "#8e44ad",
        ];
        return palette[index % palette.length];
    }
    _clickNet(e) {
        var _a;
        const target = e.target;
        if (target.closest(".iu-menu"))
            return;
        const menus = (_a = target
            .closest("#iu-card")) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".iu-menu-content:not(.iu-hidden)");
        menus === null || menus === void 0 ? void 0 : menus.forEach((p) => p.classList.add("iu-hidden"));
    }
    _toggleCollapse(e) {
        const target = e.target.closest(".iu-collapsible");
        target === null || target === void 0 ? void 0 : target.classList.toggle("iu-hidden");
        this.requestUpdate();
    }
    _toggleZones(e) {
        var _a, _b;
        (_b = (_a = e.target
            .closest(".iu-controller")) === null || _a === void 0 ? void 0 : _a.querySelector(".iu-zones")) === null || _b === void 0 ? void 0 : _b.classList.toggle("iu-hidden");
    }
    _toggleSequences(e) {
        var _a, _b;
        (_b = (_a = e.target
            .closest(".iu-controller")) === null || _a === void 0 ? void 0 : _a.querySelector(".iu-sequences")) === null || _b === void 0 ? void 0 : _b.classList.toggle("iu-hidden");
    }
    _toggleMenu(e) {
        var _a, _b;
        (_b = (_a = e.target
            .closest(".iu-menu")) === null || _a === void 0 ? void 0 : _a.querySelector(".iu-menu-content")) === null || _b === void 0 ? void 0 : _b.classList.toggle("iu-hidden");
    }
    _get_iu_key(e) {
        var _a, _b;
        return (_b = (_a = e.target
            .closest(".iu-object")) === null || _a === void 0 ? void 0 : _a.getAttribute("iu-key")) === null || _b === void 0 ? void 0 : _b.split(".", 4);
    }
    _build_entity_id(keys) {
        const controller = this.iu_coordinator.controllers[+keys[0] - 1];
        let entity_id;
        if (keys[1] === "0" && keys[2] === "0") {
            entity_id = controller.entity_id;
        }
        else if (keys[1] !== "0") {
            entity_id = controller.zones[+keys[1] - 1].entity_id;
        }
        else {
            entity_id = controller.sequences[+keys[2] - 1].entity_id;
        }
        return entity_id;
    }
    _build_data(e) {
        const keys = this._get_iu_key(e);
        if (!keys)
            return;
        const entity_id = this._build_entity_id(keys);
        const data = {
            entity_id: entity_id,
        };
        if (keys[3] !== "0") {
            data["zones"] = Number(keys[3]);
        }
        return data;
    }
    _serviceEnable(e) {
        const data = this._build_data(e);
        if (!data)
            return;
        this.hass.callService("irrigation_unlimited", "toggle", data);
        return;
    }
    _serviceSuspend(e) {
        var _a;
        const data = this._build_data(e);
        if (!data)
            return;
        const timeElement = (_a = e.target
            .closest(".iu-menu-item")) === null || _a === void 0 ? void 0 : _a.querySelector(".iu-time-input");
        if (timeElement.value)
            data["for"] = timeElement.value;
        else
            data["reset"] = null;
        this.hass.callService("irrigation_unlimited", "suspend", data);
    }
    _serviceManualRun(e) {
        var _a;
        const data = this._build_data(e);
        if (!data)
            return;
        const timeElement = (_a = e.target
            .closest(".iu-menu-item")) === null || _a === void 0 ? void 0 : _a.querySelector(".iu-time-input");
        if (timeElement.value)
            data["time"] = timeElement.value;
        this.hass.callService("irrigation_unlimited", "manual_run", data);
        this._toggleMenu(e);
        return;
    }
    _serviceCancel(e) {
        const data = this._build_data(e);
        if (!data)
            return;
        this.hass.callService("irrigation_unlimited", "cancel", data);
        this._toggleMenu(e);
    }
    _servicePause(e) {
        const data = this._build_data(e);
        if (!data)
            return;
        data["sequence_id"] = "0";
        this.hass.callService("irrigation_unlimited", "pause", data);
        this._toggleMenu(e);
    }
    _serviceResume(e) {
        const data = this._build_data(e);
        if (!data)
            return;
        data["sequence_id"] = "0";
        this.hass.callService("irrigation_unlimited", "resume", data);
        this._toggleMenu(e);
    }
    _serviceAdjust(e) {
        var _a;
        const data = this._build_data(e);
        if (!data)
            return;
        const adjustElement = (_a = e.target
            .closest(".iu-menu-item")) === null || _a === void 0 ? void 0 : _a.querySelector(".iu-adjust-input");
        const value = adjustElement.value;
        switch (value.slice(0, 1)) {
            case "%": {
                data["percentage"] = value.slice(1);
                break;
            }
            case "=": {
                data["actual"] = value.slice(1);
                break;
            }
            case "+": {
                data["increase"] = value.slice(1);
                break;
            }
            case "-": {
                data["decrease"] = value.slice(1);
                break;
            }
            case "": {
                data["reset"] = null;
                break;
            }
            default:
                return;
        }
        this.hass.callService("irrigation_unlimited", "adjust_time", data);
        this._toggleMenu(e);
    }
};
IrrigationUnlimitedCard.styles = styles;
__decorate([
    n$1({ attribute: false })
], IrrigationUnlimitedCard.prototype, "hass", void 0);
__decorate([
    t()
], IrrigationUnlimitedCard.prototype, "config", void 0);
IrrigationUnlimitedCard = __decorate([
    e$1("irrigation-unlimited-card")
], IrrigationUnlimitedCard);

export { IrrigationUnlimitedCard };
