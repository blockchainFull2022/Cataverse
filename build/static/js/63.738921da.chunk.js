(this.webpackJsonpcataverse=this.webpackJsonpcataverse||[]).push([[63],{152:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t.n(r),o=t(178);function i(e,n,t,r,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){i(o,r,a,s,l,"next",e)}function l(e){i(o,r,a,s,l,"throw",e)}s(void 0)}))}}var l='\n<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M21.6611 9.15935V3.77545C21.6611 3.0615 21.3873 2.37679 20.8998 1.87195C20.4124 1.36711 19.7513 1.0835 19.0619 1.0835H8.01524C7.32588 1.0835 6.66476 1.36711 6.17731 1.87195C5.68986 2.37679 5.41602 3.0615 5.41602 3.77545V19.3972C5.41626 19.8004 5.50397 20.1985 5.67268 20.5619C5.84139 20.9253 6.08678 21.2449 6.39072 21.4969L10.413 24.8417C10.4608 24.8818 10.5185 24.907 10.5796 24.9145C10.6406 24.922 10.7025 24.9114 10.758 24.8839C10.8134 24.8564 10.8602 24.8132 10.8929 24.7592C10.9256 24.7053 10.9428 24.6429 10.9426 24.5792V13.5338C10.9426 13.4445 10.9768 13.3589 11.0378 13.2958C11.0987 13.2327 11.1813 13.1973 11.2675 13.1973H14.1916C14.7086 13.1973 15.2045 13.41 15.5701 13.7886C15.9357 14.1672 16.141 14.6808 16.141 15.2162V24.5792C16.1411 24.6426 16.1584 24.7046 16.191 24.7583C16.2236 24.8119 16.2702 24.8549 16.3254 24.8823C16.3805 24.9098 16.442 24.9205 16.5028 24.9133C16.5636 24.9061 16.6212 24.8813 16.669 24.8417L20.6913 21.4969C20.9953 21.2449 21.2406 20.9253 21.4093 20.5619C21.5781 20.1985 21.6658 19.8004 21.666 19.3972V14.5433C21.666 13.8293 21.3922 13.1446 20.9047 12.6398C20.4173 12.1349 19.7562 11.8513 19.0668 11.8513C19.7553 11.85 20.4152 11.5658 20.9016 11.0611C21.388 10.5564 21.6611 9.87243 21.6611 9.15935V9.15935ZM14.1884 10.5053H11.2643C11.1781 10.5053 11.0955 10.4699 11.0345 10.4068C10.9736 10.3437 10.9394 10.2581 10.9394 10.1688V4.11194C10.9394 4.0227 10.9736 3.93711 11.0345 3.874C11.0955 3.8109 11.1781 3.77545 11.2643 3.77545H15.8129C15.8991 3.77545 15.9817 3.8109 16.0426 3.874C16.1036 3.93711 16.1378 4.0227 16.1378 4.11194V8.48636C16.1378 9.02182 15.9324 9.53536 15.5668 9.91399C15.2012 10.2926 14.7054 10.5053 14.1884 10.5053V10.5053Z" fill="url(#paint0_linear_1295:5753)"/>\n<defs>\n<linearGradient id="paint0_linear_1295:5753" x1="21.666" y1="1.08349" x2="1.99448" y2="4.35723" gradientUnits="userSpaceOnUse">\n<stop stop-color="#1C94F4"/>\n<stop offset="1" stop-color="#1273EA"/>\n</linearGradient>\n</defs>\n</svg>\n';n.default=function(e){var n=e.preferred,t=e.label,r=e.iconSrc,i=e.svg,c=e.isMobile;return{name:t||"Ronin",iconSrc:r||l,iconSrcSet:r||l,svg:i||l,wallet:function(){var e=s(a.a.mark((function e(n){var t,r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.createModernProviderInterface,o=null===(t=window.ronin)||void 0===t?void 0:t.provider,i=null,o&&(i=r(o)).network.get&&(i.network.get=s(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",2020);case 1:case"end":return e.stop()}}),e)})))),e.abrupt("return",{provider:o,interface:i});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),type:"injected",link:"https://skymavis.com/wallet",installMessage:c?o.b:o.a,desktop:!0,mobile:!1,preferred:n}}},178:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(e){var n=e.currentWallet,t=e.selectedWallet;return n?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n,"</b>\n    installed. If you would prefer to use\n    <b>").concat(t,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===t?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},a=function(e){var n=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n  Tap the button below to <b>Open '.concat(n,"</b>. Please access this site on ").concat(n,"'s in-app browser for a seamless experience.\n  </p>\n  ")}}}]);
//# sourceMappingURL=63.738921da.chunk.js.map