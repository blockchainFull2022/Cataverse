(this.webpackJsonpcataverse=this.webpackJsonpcataverse||[]).push([[16],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"checkGnosisSafeContext",(function(){return f}));var r=n(3),a=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){s(o,r,a,c,i,"next",e)}function i(e){s(o,r,a,c,i,"throw",e)}c(void 0)}))}}var p=function(e){return Promise.race([e.getSafeInfo(),new Promise((function(e){return setTimeout(e,200)}))])},f=function(){var e=u(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=p,e.next=3,n.e(15).then(n.t.bind(null,1086,7));case 3:return e.t2=e.sent.default,e.t3=new e.t2,e.next=7,(0,e.t1)(e.t3);case 7:if(e.t0=!!e.sent,!e.t0){e.next=10;break}e.t0=t();case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=function(e){var t=e.preferred,r=e.label,o=e.iconSrc,i=e.svg,s=e.networkId,f="https://".concat(4===s?"rinkeby.":"","gnosis-safe.io/app"),l=e.appName?"Then go to APPS and select <b>".concat(e.appName,"</b>."):e.appUrl?"Then go to APPS and add a custom app with the URL:<br /><b>".concat(e.appUrl,"</b>"):"";return{name:r||"Gnosis Safe",iconSrc:o,svg:i||'\n<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 440 440">\n    <path d="M220,9.82C103.92,9.82,9.82,103.92,9.82,220S103.92,430.18,220,430.18,430.18,336.08,430.18,220,336.08,9.82,220,9.82ZM373.83,231.47H276.3a59.41,59.41,0,1,1,.45-20.67h97.08a10.34,10.34,0,1,1,0,20.67Z"/>\n</svg>\n',wallet:function(){var e=u(a.a.mark((function e(t){var r,o,i,s,u,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.createModernProviderInterface,e.next=3,n.e(15).then(n.t.bind(null,1086,7));case 3:return e.t0=e.sent.default,o=new e.t0,e.next=7,n.e(39).then(n.t.bind(null,1809,7));case 7:return i=e.sent,s=i.SafeAppProvider,e.next=11,p(o);case 11:if(u=e.sent){e.next=14;break}return e.abrupt("return",{provider:void 0,interface:null});case 14:return f=new s(u,o),e.abrupt("return",{provider:f,interface:c(c({},r(f)),{},{connect:function(){return Promise.resolve([u.safeAddress])}})});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),type:"sdk",link:f,installMessage:function(){return'\n        <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n            Click the button below to open the Gnosis Safe interface.<br />\n            '.concat(l,"\n        </p>\n        ")},desktop:!0,mobile:!1,preferred:t}}}}]);
//# sourceMappingURL=16.ec7ba238.chunk.js.map