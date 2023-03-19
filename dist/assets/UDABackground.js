/*! For license information please see UDABackground.js.LICENSE.txt */
var UdanLibrary;!function(){"use strict";var t={r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e);var r=function(t,e,r,n){return new(r||(r=Promise))((function(a,o){function i(t){try{u(n.next(t))}catch(t){o(t)}}function c(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}u((n=n.apply(t,e||[])).next())}))};const n=(t,e)=>r(void 0,void 0,void 0,(function*(){const r=(new TextEncoder).encode(t),n=yield crypto.subtle.digest(e,r);return Array.from(new Uint8Array(n)).map((t=>t.toString(16).padStart(2,"0"))).join("")}));var a=function(t,e,r,n){return new(r||(r=Promise))((function(a,o){function i(t){try{u(n.next(t))}catch(t){o(t)}}function c(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}u((n=n.apply(t,e||[])).next())}))};const o=(t,e,r,n=!0)=>a(void 0,void 0,void 0,(function*(){try{const a={method:e,headers:{"Content-Type":"application/json",charset:"UTF-8"}};r&&(a.body=JSON.stringify(r));const o="https://udantest.nistapp.ai/voiceapi";let i="https://udan.nistapp.ai/voiceapi";-1===t.indexOf("http")&&("TEST"===UDAGlobalConfig.environment&&(i=o),t=i+t);let c=yield fetch(t,a);return!!c.ok&&(n?c.json():c.text())}catch(t){return!1}}));function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,a){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new P(a||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var l={};function d(){}function y(){}function v(){}var m={};f(m,o,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(j([])));b&&b!==e&&r.call(b,o)&&(m=b);var g=v.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function a(n,o,i,u){var s=p(t[n],t,o);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==c(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,i,u)}),(function(t){a("throw",t,i,u)})):e.resolve(h).then((function(t){f.value=t,i(f)}),(function(t){return a("throw",t,i,u)}))}u(s.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var a=p(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,l;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:y,configurable:!0}),y.displayName=f(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(k.prototype),f(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new k(h(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),f(g,s,"Generator"),f(g,o,(function(){return this})),f(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,a)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){u(o,n,a,i,c,"next",t)}function c(t){u(o,n,a,i,c,"throw",t)}i(void 0)}))}}var f,h="https://udan.nistapp.ai/voiceapi",p="uda-sessiondata",l="uda-csp-storage",d={sessionkey:"",authenticated:!1,authenticationsource:"",authdata:{},csp:{cspenabled:!1,udanallowed:!0,domain:""}};function y(){return v.apply(this,arguments)}function v(){return v=s(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d.authenticationsource="google",chrome.identity.getProfileUserInfo({accountStatus:"ANY"},function(){var t=s(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e.id||""===e.email){t.next=6;break}d.authenticated=!0,d.authdata=e,n(d.authdata.id,"SHA-512").then(function(){var t=s(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.authdata.id=e,n(d.authdata.email,"SHA-512").then(function(){var t=s(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d.authdata.email=e,t.next=3,O();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=8;break;case 6:return t.next=8,m("UDAAlertMessageData","login");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 3:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function m(){return x.apply(this,arguments)}function x(){return x=s(i().mark((function t(){var e,r,n,a,o,c,u,s,f,h,p=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.length>0&&void 0!==p[0]?p[0]:"UDAUserSessionData",r=p.length>1&&void 0!==p[1]?p[1]:"",t.next=4,b();case 4:if(n=t.sent,"UDAAlertMessageData"!==e){t.next=11;break}return t.next=8,chrome.tabs.sendMessage(n.id,{action:e,data:r});case 8:return t.abrupt("return",!0);case 11:if(a=new URL(n.url),o=a.protocol+"//"+a.hostname,c={cspenabled:!1,udanallowed:!0,domain:""},u=_(l),s=!1,!u){t.next=29;break}if(!((f=u).length>0)){t.next=29;break}h=0;case 20:if(!(h<f.length)){t.next=28;break}if(f[h].domain!==o){t.next=25;break}return s=!0,c=f[h],t.abrupt("break",28);case 25:h++,t.next=20;break;case 28:s&&(d.csp=c);case 29:return d.csp=c,t.next=33,chrome.tabs.sendMessage(n.id,{action:e,data:JSON.stringify(d)});case 33:return t.abrupt("return",!0);case 34:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function b(){return g.apply(this,arguments)}function g(){return(g=s(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={active:!0,currentWindow:!0},t.next=3,chrome.tabs.query(e);case 3:if(!(r=t.sent[0])){t.next=8;break}return t.abrupt("return",r);case 8:return t.next=10,chrome.tabs.get(f);case 10:if(!(r=t.sent)){t.next=15;break}return t.abrupt("return",r);case 15:case 16:return t.abrupt("return",r);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return k.apply(this,arguments)}function k(){return(k=s(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e={})[p]=d,t.next=4,chrome.storage.local.set(e);case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return S.apply(this,arguments)}function S(){return S=s(i().mark((function t(){var e,r,n=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],t.next=3,o(h+"/user/getsessionkey","GET",null,!1);case 3:if(r=t.sent){t.next=7;break}return t.abrupt("return",r);case 7:return d.sessionkey=r,t.next=10,w();case 10:if(!e){t.next=13;break}return t.next=13,m();case 13:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}function O(){return E.apply(this,arguments)}function E(){return(E=s(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={authid:d.authdata.id,emailid:d.authdata.email?d.authdata.email:"",authsource:d.authenticationsource},t.next=3,o(h+"/user/checkauthid","POST",e);case 3:if(!(r=t.sent)){t.next=10;break}return t.next=7,P(r);case 7:return t.abrupt("return",!0);case 10:return t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t){return j.apply(this,arguments)}function j(){return(j=s(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={userauthid:e.id,usersessionid:d.sessionkey},t.next=3,o(h+"/user/checkusersession","POST",r);case 3:return t.sent,t.next=6,w();case 6:return t.next=8,m("UDAAuthenticatedUserSessionData");case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){try{var e=localStorage.getItem(t);return JSON.parse(e)}catch(t){return!1}}chrome.tabs.onActivated.addListener((function(t){f=t.tabId})),chrome.runtime.onMessage.addListener(function(){var t=s(i().mark((function t(e,r,n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("getusersessiondata"!==e.action){t.next=5;break}chrome.storage.local.get([p],function(){var t=s(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!chrome.runtime.lastError){t.next=4;break}t.next=30;break;case 4:if(!e.hasOwnProperty("sessionkey")||!e.sessionKey||"object"==c(e.sessionKey)){t.next=15;break}if(d=e,!e.hasOwnProperty("authenticated")||!e.authenticated){t.next=11;break}return t.next=9,m();case 9:t.next=13;break;case 11:return t.next=13,y();case 13:case 24:t.next=30;break;case 15:if(!(e.hasOwnProperty(p)&&e[p].hasOwnProperty("sessionkey")&&e[p].sessionKey&&"object"!=c(e[p].sessionKey))){t.next=26;break}if(d=e[p],!e.hasOwnProperty("authenticated")||!e.authenticated){t.next=22;break}return t.next=20,m();case 20:t.next=24;break;case 22:return t.next=24,y();case 26:return t.next=28,L(!1);case 28:return t.next=30,y();case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=17;break;case 5:if("authtenicate"!==e.action){t.next=10;break}return t.next=8,y();case 8:t.next=17;break;case 10:if("Debugvalueset"!==e.action){t.next=14;break}e.data,t.next=17;break;case 14:if("createSession"!==e.action){t.next=17;break}return t.next=17,A(e.data);case 17:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}());function A(t){return T.apply(this,arguments)}function T(){return(T=s(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d.authenticationsource="keycloak",d.authenticated=!0,d.authdata=e,t.next=6,L(!1);case 6:return t.next=8,O();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}UdanLibrary=e}();