(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8357:function(e,t,r){"use strict";r.d(t,{Z:function(){return ae}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,o=String.fromCharCode,c=Object.assign;function s(e){return e.trim()}function i(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function l(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function y(e,t){return t.push(e),e}var h=1,m=1,v=0,b=0,g=0,w="";function x(e,t,r,n,a,o,c){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:h,column:m,length:c,return:""}}function $(e,t){return c(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function k(){return g=b>0?f(w,--b):0,m--,10===g&&(m=1,h--),g}function S(){return g=b<v?f(w,b++):0,m++,10===g&&(m=1,h++),g}function C(){return f(w,b)}function O(){return b}function _(e,t){return l(w,e,t)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return h=m=1,v=d(w=e),b=0,[]}function A(e){return w="",e}function j(e){return s(_(b-1,M(91===e?e+2:40===e?e+1:e)))}function N(e){for(;(g=C())&&g<33;)S();return E(e)>2||E(g)>3?"":" "}function T(e,t){for(;--t&&S()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return _(e,O()+(t<6&&32==C()&&32==S()))}function M(e){for(;S();)switch(g){case e:return b;case 34:case 39:34!==e&&39!==e&&M(g);break;case 40:41===e&&M(e);break;case 92:S()}return b}function z(e,t){for(;S()&&e+g!==57&&(e+g!==84||47!==C()););return"/*"+_(t,b-1)+"*"+o(47===e?e:S())}function R(e){for(;!E(C());)S();return _(e,b)}var F="-ms-",I="-moz-",D="-webkit-",Z="comm",L="rule",G="decl",W="@keyframes";function X(e,t){for(var r="",n=p(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function B(e,t,r,n){switch(e.type){case"@import":case G:return e.return=e.return||e.value;case Z:return"";case W:return e.return=e.value+"{"+X(e.children,n)+"}";case L:e.value=e.props.join(",")}return d(r=X(e.children,n))?e.return=e.value+"{"+r+"}":""}function H(e,t){switch(function(e,t){return(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3)}(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+I+e+F+e+e;case 6828:case 4268:return D+e+F+e+e;case 6165:return D+e+F+"flex-"+e+e;case 5187:return D+e+i(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return D+e+F+"flex-item-"+i(e,/flex-|-self/,"")+e;case 4675:return D+e+F+"flex-line-pack"+i(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+F+i(e,"shrink","negative")+e;case 5292:return D+e+F+i(e,"basis","preferred-size")+e;case 6060:return D+"box-"+i(e,"-grow","")+D+e+F+i(e,"grow","positive")+e;case 4554:return D+i(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return i(i(i(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return i(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return i(i(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return i(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return i(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+I+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?H(i(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return i(e,":",":"+D)+e;case 101:return i(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(45===f(e,14)?"inline-":"")+"box$3$1"+D+"$2$3$1"+F+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return D+e+F+i(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+F+i(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+F+i(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+F+e+e}return e}function q(e){return A(Y("",null,null,null,[""],e=P(e),0,[0],e))}function Y(e,t,r,n,a,c,s,f,l){for(var p=0,h=0,m=s,v=0,b=0,g=0,w=1,x=1,$=1,_=0,E="",P=a,A=c,M=n,F=E;x;)switch(g=_,_=S()){case 40:if(108!=g&&58==F.charCodeAt(m-1)){-1!=u(F+=i(j(_),"&","&\f"),"&\f")&&($=-1);break}case 34:case 39:case 91:F+=j(_);break;case 9:case 10:case 13:case 32:F+=N(g);break;case 92:F+=T(O()-1,7);continue;case 47:switch(C()){case 42:case 47:y(V(z(S(),O()),t,r),l);break;default:F+="/"}break;case 123*w:f[p++]=d(F)*$;case 125*w:case 59:case 0:switch(_){case 0:case 125:x=0;case 59+h:b>0&&d(F)-m&&y(b>32?J(F+";",n,r,m-1):J(i(F," ","")+";",n,r,m-2),l);break;case 59:F+=";";default:if(y(M=U(F,t,r,p,h,a,f,E,P=[],A=[],m),c),123===_)if(0===h)Y(F,t,M,M,P,c,m,f,A);else switch(v){case 100:case 109:case 115:Y(e,M,M,n&&y(U(e,M,M,0,0,a,f,E,a,P=[],m),A),a,A,m,f,n?P:A);break;default:Y(F,M,M,M,[""],A,0,f,A)}}p=h=b=0,w=$=1,E=F="",m=s;break;case 58:m=1+d(F),b=g;default:if(w<1)if(123==_)--w;else if(125==_&&0==w++&&125==k())continue;switch(F+=o(_),_*w){case 38:$=h>0?1:(F+="\f",-1);break;case 44:f[p++]=(d(F)-1)*$,$=1;break;case 64:45===C()&&(F+=j(S())),v=C(),h=m=d(E=F+=R(O())),_++;break;case 45:45===g&&2==d(F)&&(w=0)}}return c}function U(e,t,r,n,o,c,u,f,d,y,h){for(var m=o-1,v=0===o?c:[""],b=p(v),g=0,w=0,$=0;g<n;++g)for(var k=0,S=l(e,m+1,m=a(w=u[g])),C=e;k<b;++k)(C=s(w>0?v[k]+" "+S:i(S,/&\f/g,v[k])))&&(d[$++]=C);return x(e,t,r,0===o?L:f,d,y,h)}function V(e,t,r){return x(e,t,r,Z,o(g),l(e,2,-2),0)}function J(e,t,r,n){return x(e,t,r,G,l(e,0,n),l(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,a=0;n=a,a=C(),38===n&&12===a&&(t[r]=1),!E(a);)S();return _(e,b)},Q=function(e,t){return A(function(e,t){var r=-1,n=44;do{switch(E(n)){case 0:38===n&&12===C()&&(t[r]=1),e[r]+=K(b-1,t,r);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===C()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=o(n)}}while(n=S());return e}(P(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var a=[],o=Q(t,a),c=r.props,s=0,i=0;s<o.length;s++)for(var u=0;u<c.length;u++,i++)e.props[i]=a[s]?o[s].replace(/&\f/g,c[u]):c[u]+" "+o[s]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case G:e.return=H(e.value,e.length);break;case W:return X([$(e,{value:i(e.value,"@","@"+D)})],n);case L:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([$(e,{props:[i(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return X([$(e,{props:[i(t,/:(plac\w+)/,":-webkit-input-$1")]}),$(e,{props:[i(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[i(t,/:(plac\w+)/,F+"input-$1")]})],n)}return""}))}}],ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ne;var o,c,s={},i=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;i.push(e)}));var u,f,l=[B,(f=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],d=function(e){var t=p(e);return function(r,n,a,o){for(var c="",s=0;s<t;s++)c+=e[s](r,n,a,o)||"";return c}}([te,re].concat(a,l));c=function(e,t,r,n){u=r,X(q(e?e+"{"+t.styles+"}":t.styles),d),n&&(y.inserted[t.name]=!0)};var y={key:t,sheet:new n({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return y.sheet.hydrate(i),y}},4880:function(e,t,r){"use strict";var n;r.d(t,{E:function(){return m},T:function(){return l},c:function(){return y},h:function(){return i},w:function(){return f}});var a=r(7294),o=r(8357),c=r(444),s=r(2243),i={}.hasOwnProperty,u=(0,a.createContext)("undefined"!==typeof HTMLElement?(0,o.Z)({key:"css"}):null);u.Provider;var f=function(e){return(0,a.forwardRef)((function(t,r){var n=(0,a.useContext)(u);return e(t,n,r)}))},l=(0,a.createContext)({});var d=(n||(n=r.t(a,2))).useInsertionEffect?(n||(n=r.t(a,2))).useInsertionEffect:function(e){e()};var p="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",y=function(e,t){var r={};for(var n in t)i.call(t,n)&&(r[n]=t[n]);return r[p]=e,r},h=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;(0,c.hC)(t,r,n);d((function(){return(0,c.My)(t,r,n)}));return null},m=f((function(e,t,r){var n=e.css;"string"===typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var o=e[p],u=[n],f="";"string"===typeof e.className?f=(0,c.fp)(t.registered,u,e.className):null!=e.className&&(f=e.className+" ");var d=(0,s.O)(u,void 0,(0,a.useContext)(l));f+=t.key+"-"+d.name;var y={};for(var m in e)i.call(e,m)&&"css"!==m&&m!==p&&(y[m]=e[m]);return y.ref=r,y.className=f,(0,a.createElement)(a.Fragment,null,(0,a.createElement)(h,{cache:t,serialized:d,isStringTag:"string"===typeof o}),(0,a.createElement)(o,y))}))},5944:function(e,t,r){"use strict";r.d(t,{BX:function(){return s},HY:function(){return o},tZ:function(){return c}});r(7294),r(8357);var n=r(4880),a=(r(8679),r(2243),r(5893)),o=a.Fragment;function c(e,t,r){return n.h.call(t,"css")?(0,a.jsx)(n.E,(0,n.c)(e,t),r):(0,a.jsx)(e,t,r)}function s(e,t,r){return n.h.call(t,"css")?(0,a.jsxs)(n.E,(0,n.c)(e,t),r):(0,a.jsxs)(e,t,r)}},2243:function(e,t,r){"use strict";r.d(t,{O:function(){return y}});var n=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var o=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},i=function(e){return null!=e&&"boolean"!==typeof e},u=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return s(e)?e:e.replace(o,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(c,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===a[e]||s(e)||"number"!==typeof t||0===t?t:t+"px"};function l(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=l(e,t,r[a])+";";else for(var o in r){var c=r[o];if("object"!==typeof c)null!=t&&void 0!==t[c]?n+=o+"{"+t[c]+"}":i(c)&&(n+=u(o)+":"+f(o,c)+";");else if(!Array.isArray(c)||"string"!==typeof c[0]||null!=t&&void 0!==t[c[0]]){var s=l(e,t,c);switch(o){case"animation":case"animationName":n+=u(o)+":"+s+";";break;default:n+=o+"{"+s+"}"}}else for(var d=0;d<c.length;d++)i(c[d])&&(n+=u(o)+":"+f(o,c[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=d,o=r(e);return d=a,l(e,t,o)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var y=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,o="";d=void 0;var c=e[0];null==c||void 0===c.raw?(a=!1,o+=l(r,t,c)):o+=c[0];for(var s=1;s<e.length;s++)o+=l(r,t,e[s]),a&&(o+=c[s]);p.lastIndex=0;for(var i,u="";null!==(i=p.exec(o));)u+="-"+i[1];return{name:n(o)+u,styles:o,next:d}}},444:function(e,t,r){"use strict";r.d(t,{My:function(){return o},fp:function(){return n},hC:function(){return a}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},o=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},8679:function(e,t,r){"use strict";var n=r(9864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var a=p(r);a&&a!==y&&e(t,a,n)}var c=f(r);l&&(c=c.concat(l(r)));for(var s=i(t),h=i(r),m=0;m<c.length;++m){var v=c[m];if(!o[v]&&(!n||!n[v])&&(!h||!h[v])&&(!s||!s[v])){var b=d(r,v);try{u(t,v,b)}catch(g){}}}}return t}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5019)}])},5019:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5944),a=r(9008),o=r.n(a),c=r(7294),s=r.t(c,2),i=(r(8357),r(4880)),u=(r(8679),r(444)),f=r(2243),l=s.useInsertionEffect?s.useInsertionEffect:c.useLayoutEffect,d=(0,i.w)((function(e,t){var r=e.styles,n=(0,f.O)([r],void 0,(0,c.useContext)(i.T)),a=(0,c.useRef)();return l((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,c=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==c&&(o=!0,c.setAttribute("data-emotion",e),r.hydrate([c])),a.current=[r,o],function(){r.flush()}}),[t]),l((function(){var e=a.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&(0,u.My)(t,n.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}t.insert("",n,r,!1)}}),[t,n.name]),null}));var p=r(7595),y=r.n(p);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}var v=function(e){var t=e.Component,r=e.pageProps;return(0,n.BX)(n.HY,{children:[(0,n.BX)(o(),{children:[(0,n.tZ)("title",{children:"Metroid Dread Leaderboard"}),(0,n.tZ)("meta",{name:"description",content:"This is a simple leaderboard for Metroid Dread."})]}),(0,n.tZ)(d,{styles:[y()]}),(0,n.tZ)("div",{css:{padding:"0 2rem"},children:(0,n.tZ)(t,m({},r))})]})}},7595:function(){},9008:function(e,t,r){e.exports=r(3121)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case o:case s:case c:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case m:case h:case i:return e;default:return t}}case a:return t}}}function $(e){return x(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=i,t.Element=n,t.ForwardRef=d,t.Fragment=o,t.Lazy=m,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return $(e)||x(e)===f},t.isConcurrentMode=$,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===l||e===s||e===c||e===p||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===i||e.$$typeof===u||e.$$typeof===d||e.$$typeof===b||e.$$typeof===g||e.$$typeof===w||e.$$typeof===v)},t.typeOf=x},9864:function(e,t,r){"use strict";e.exports=r(9921)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var r=e.O();_N_E=r}]);