(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody, h1, h2, h3, h4, p,\nfigure, blockquote, dl, dd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1, h2, h3, h4,\nbutton, input, label {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1, h2,\nh3, h4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n:root {\n  --text-color: white;\n  --secondary-color: #5F758E;\n  --black-color: #00120B;\n  --green-color: #3EC300;\n  --red-color: #FF3C38;\n  --yellow-color: #F4B860;\n  --common-padding: 0.5rem;\n  --border-color: #C1CAD6;\n  --background-color: #4A5A75;\n  --radius: 0.5rem;\n}\n\n* {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  text-shadow: 0 0 1px var(--black-color);\n  color: var(--text-color);\n  border-radius: var(--radius);\n  font-weight: 600;\n}\n\nbutton {\n  background-color: var(--background-color);\n  padding: 6px 12px;\n  border: 2px solid var(--border-color);\n}\n\ninput,\ntextarea,\nfieldset,\nselect {\n  background-color: var(--background-color);\n  border: 2px solid var(--border-color);\n  padding: var(--common-padding);\n  color: var(--text-color);\n  font-weight: 800;\n}\n\nlabel {\n  font-weight: 800;\n}\n\ndialog {\n  margin: auto;\n  background-color: var(--secondary-color);\n  border: 2px solid var(--border-color);\n  padding: 1.5rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: var(--common-padding);\n}\n\nbody {\n  padding: var(--common-padding);\n  display: grid;\n  grid-template-rows: 70px 1fr;\n  grid-template-columns: 200px 1fr;\n  grid-template-areas: \n    \"header header\"\n    \"nav main\";\n  gap: 8px;\n  background-color: var(--background-color);\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: var(--secondary-color);\n  color: var(--text-color);\n}\n\nnav {\n  grid-area: nav;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: var(--secondary-color);\n}\n\nmain {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0.5rem 1rem;\n}\n\n#task-cards-container {\n  display: grid;\n  gap: 1rem;\n}\n\n.task-cards {\n  min-width: 45ch;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border : 2px solid var(--border-color);\n}\n\n#project-header-container {\n  padding: 0.5rem;\n  background-color: var(--secondary-color);\n}\n\n#project-description-display,\n.task-description,\n.task-note {\n  width: 44ch;\n  overflow-wrap: break-word;\n}\n\n.add-btn-container,\n.task-title-div {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#show-task-dialog,\n#show-project-dialog,\n.project-delete-btn,\n.task-expand-btn,\n.task-delete-btn,\n.task-edit-btn {\n  cursor: pointer;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--border-color);\n  padding: 0;\n}\n\n#show-task-dialog,\n#show-project-dialog,\n.task-edit-btn,\n.task-expand-btn {\n  font-size: 1.6rem;\n  background-color: var(--green-color);\n}\n\n.task-edit-btn,\n.task-expand-btn {\n  font-size: 1rem;\n}\n\n.project-delete-btn,\n.task-delete-btn {\n  font-size: 1.1rem;\n  background-color: var(--red-color);\n}\n\n.project-container {\n  width: 100%;\n  padding: 4px 8px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  /* outline: 1px solid black; */\n}\n\n#project-nav {\n  width: 100%;\n}\n\n.project-title {\n  width: 75%;\n  cursor: pointer;\n  padding: 6px 8px;\n  overflow-wrap: break-word;\n}\n\n#project-delete-dialog {\n  text-align: center;\n}\n\n#project-delete-confirm {\n  margin-bottom: 1rem;\n}\n\n.project-title:active,\n.project-title:hover {\n  background-color: var(--background-color);\n}\n\n#project-delete-confirm {\n  white-space: pre;\n}\n\n.task-btn-container {\n  justify-content: space-between;\n}\n\n.task-title-div {\n  display: flex;\n  justify-content: space-between;\n}",""]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var h=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),u=n(56),d=n.n(u),l=n(540),h=n.n(l),m=n(113),f=n.n(m),p=n(365),g={};function y(t,e,n,r){const o=document.createElement(t);return o.setAttribute(e,n),o.textContent=r,o}g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),o()(p.A,g),p.A&&p.A.locals&&p.A.locals;const b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const v={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function x(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const S={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:x({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:x({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:x({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:x({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:x({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function M(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let u;return u=t.valueCallback?t.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const C={ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(j.matchPattern);if(!n)return null;const r=n[0],o=t.match(j.parsePattern);if(!o)return null;let a=j.valueCallback?j.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var j;const q={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=b[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:(t,e,n,r)=>k[t],localize:S,match:C,options:{weekStartsOn:0,firstWeekContainsDate:1}};let D={};function A(){return D}Math.pow(10,8);const P=6048e5,E=Symbol.for("constructDateFrom");function T(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&E in t?t[E](e):t instanceof Date?new t.constructor(e):new Date(e)}function W(t,e){return T(e||t,t)}function L(t){const e=W(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function N(t,...e){const n=T.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}function O(t,e){const n=W(t,e?.in);return n.setHours(0,0,0,0),n}function Y(t,e){const n=W(t,e?.in);return function(t,e,n){const[r,o]=N(n?.in,t,e),a=O(r),i=O(o),c=+a-L(a),s=+i-L(i);return Math.round((c-s)/864e5)}(n,function(t,e){const n=W(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function F(t,e){const n=A(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=W(t,e?.in),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function z(t,e){return F(t,{...e,weekStartsOn:1})}function H(t,e){const n=W(t,e?.in),r=n.getFullYear(),o=T(n,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const a=z(o),i=T(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const c=z(i);return n.getTime()>=a.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function I(t,e){const n=W(t,e?.in),r=+z(n)-+function(t,e){const n=H(t,e),r=T(e?.in||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),z(r)}(n);return Math.round(r/P)+1}function B(t,e){const n=W(t,e?.in),r=n.getFullYear(),o=A(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=T(e?.in||t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const c=F(i,e),s=T(e?.in||t,0);s.setFullYear(r,0,a),s.setHours(0,0,0,0);const u=F(s,e);return+n>=+c?r+1:+n>=+u?r:r-1}function Q(t,e){const n=W(t,e?.in),r=+F(n,e)-+function(t,e){const n=A(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=B(t,e),a=T(e?.in||t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),F(a,e)}(n,e);return Math.round(r/P)+1}function G(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const X={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return G("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):G(n+1,2)},d:(t,e)=>G(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>G(t.getHours()%12||12,e.length),H:(t,e)=>G(t.getHours(),e.length),m:(t,e)=>G(t.getMinutes(),e.length),s:(t,e)=>G(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return G(Math.trunc(r*Math.pow(10,n-3)),e.length)}},J={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return X.y(t,e)},Y:function(t,e,n,r){const o=B(t,r),a=o>0?o:1-o;return"YY"===e?G(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):G(a,e.length)},R:function(t,e){return G(H(t),e.length)},u:function(t,e){return G(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return G(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return G(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return X.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return G(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=Q(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):G(o,e.length)},I:function(t,e,n){const r=I(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):G(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):X.d(t,e)},D:function(t,e,n){const r=Y(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):G(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return G(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return G(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return G(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return X.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):X.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):X.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):X.s(t,e)},S:function(t,e){return X.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return R(r);case"XXXX":case"XX":return U(r);default:return U(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return R(r);case"xxxx":case"xx":return U(r);default:return U(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+$(r,":");default:return"GMT"+U(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+$(r,":");default:return"GMT"+U(r,":")}},t:function(t,e,n){return G(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return G(+t,e.length)}};function $(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+G(a,2)}function R(t,e){return t%60==0?(t>0?"-":"+")+G(Math.abs(t)/60,2):U(t,e)}function U(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+G(Math.trunc(r/60),2)+e+G(r%60,2)}const V=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},K=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Z={p:K,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return V(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",V(r,e)).replace("{{time}}",K(o,e))}},_=/^D+$/,tt=/^Y+$/,et=["D","DD","YY","YYYY"];function nt(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+W(t)));var e}const rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,at=/^'([^]*?)'?$/,it=/''/g,ct=/[a-zA-Z]/;function st(t,e,n){const r=A(),o=n?.locale??r.locale??q,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=W(t,n?.in);if(!nt(c))throw new RangeError("Invalid time value");let s=e.match(ot).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,Z[e])(t,o.formatLong):t})).join("").match(rt).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:ut(t)};if(J[e])return{isToken:!0,value:t};if(e.match(ct))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(s=o.localize.preprocessor(c,s));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return s.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return tt.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return _.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),et.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,J[a[0]])(c,a,o.localize,u)})).join("")}function ut(t){const e=t.match(at);return e?e[1].replace(it,"'"):t}function dt(t){return T(t,Date.now())}function lt(t,e,n){const[r,o]=N(n?.in,t,e);return+O(r)==+O(o)}function ht(t,e){return lt(T(e?.in||t,t),dt(e?.in||t))}function mt(t,e,n){const r=W(t,n?.in);return isNaN(e)?T(n?.in||t,NaN):e?(r.setDate(r.getDate()+e),r):r}function ft(t,e){return lt(t,mt(dt(e?.in||t),1),e)}function pt(t,e){return lt(T(e?.in||t,t),function(t,e,n){return mt(t,-e,n)}(dt(e?.in||t),1))}function gt(t){return+W(t)<Date.now()}function yt(t){for(let e=0;e<t.length;e++)t[e].value=""}function bt(t,e){"Priority: High"===e.textContent?(t.style.borderColor="var(--red-color)",e.style.textShadow="0 0 2px var(--red-color)"):"Priority: Medium"===e.textContent&&(t.style.borderColor="var(--yellow-color)",e.style.textShadow="0 0 2px var(--yellow-color)")}const wt=document.querySelector("#project-dialog"),vt=document.querySelector("#project-nav"),kt=document.querySelector("#task-dialog"),xt=document.querySelector("#select-project"),St=document.querySelector("#edit-task-dialog"),Mt=document.querySelector("#project-delete-dialog");let Ct,jt,qt;function Dt(t,e){vt.textContent="";for(let e=0;e<t.length;e++){const n=y("div","class","project-container",""),r=y("h4","class","project-title",t[e].title);r.setAttribute("data-project-title",t[e].id);const o=y("button","data-delete-project",t[e].id,"🗑");o.setAttribute("class","project-delete-btn"),n.appendChild(o),n.appendChild(r),vt.appendChild(n)}e()}function At(t,e){const n=document.querySelector("#project-header-display"),r=document.querySelector("#project-description-display"),o=document.querySelector("#task-cards-container");if(n.textContent="",r.textContent="",o.textContent="",void 0===t)return n.textContent="No Projects",void(r.textContent="Make a new project to start adding tasks");document.querySelector(`[data-project-title="${t.id}"]`).style.backgroundColor="var(--background-color)",n.textContent=t.title,r.textContent=t.description;const a=t.tasks;if(0!==a.length){for(let t=0;t<a.length;t++){const e=y("div","class","task-cards",""),n=y("div","class","task-btn-container",""),r=y("button","data-task-delete",a[t].id,"🗑"),c=y("button","data-task-edit",a[t].id,"🖍");r.setAttribute("data-task-delete-project",a[t].projectId),r.setAttribute("class","task-delete-btn"),c.setAttribute("data-task-edit-project",a[t].projectId),c.setAttribute("class","task-edit-btn"),n.appendChild(c),n.appendChild(r);const s=y("div","class","task-title-div",""),u=y("button","class","task-expand-btn","▼");u.setAttribute("data-expand-index",a[t].id),s.appendChild(y("h4","class","task-title",a[t].title)),s.appendChild(u);const d=y("p","class","task-priority","Priority: "+a[t].priority);bt(e,d),e.appendChild(s),e.appendChild(y("p","class","task-description",a[t].description)),e.appendChild(y("p","class","task-due-date","Due Date: "+(i=a[t].dueDate,ht(new Date(i))?"Today":ft(new Date(i))?"Tomorrow":pt(new Date(i))?"Expired Yesterday":gt(new Date(i))?`Expired on ${st(new Date(i),"dd MMMM yyyy")}`:st(new Date(i),"dd MMMM yyyy")))),e.appendChild(d),e.appendChild(y("hp","class","task-note","Note: "+a[t].note)),e.appendChild(n),o.appendChild(e)}var i;e(),Array.from(document.querySelectorAll(".task-description")).forEach((t=>t.style.display="none")),Array.from(document.querySelectorAll(".task-note")).forEach((t=>t.style.display="none")),Array.from(document.querySelectorAll(".task-btn-container")).forEach((t=>t.style.display="none"))}else o.textContent="Add task to view"}function Pt(t){localStorage.setItem("localApp",JSON.stringify(t))}const Et=(0===localStorage.length&&Pt([{title:"My Project",description:"The default project.",tasks:[{title:"Complete the Todo App",description:"Complete the Todo App from the odin project",dueDate:"2025-02-10",priority:"High",note:"Learn from your mistakes",id:0,projectId:0},{title:"Start learning React",description:"Start learning react after completing the Javascript section",dueDate:"2025-03-01",priority:"Medium",note:"Do not Rush",id:1,projectId:0},{title:"Complete FullStack course",description:"Complete the FullStack course from The Odin Project",dueDate:"2025-05-15",priority:"Low",note:"Understand all the concepts well",id:2,projectId:0}],id:0}]),JSON.parse(localStorage.getItem("localApp")));class Tt{constructor(t,e,n,r,o){this.title=t,this.description=e||"No Description",this.dueDate=n||st(new Date,"yyyy-LL-dd"),this.priority=r,this.note=o||"No note"}}class Wt{constructor(t,e){this.title=t,this.description=e,this.tasks=[]}}function Lt(t){t.forEach(((t,e)=>t.id=e))}function Nt(){for(let t=0;t<Et.length;t++)for(let e=0;e<Et[t].tasks.length;e++)Et[t].tasks[e].projectId=t}!function(t,e,n,r,o){function a(t){Ct=+t.target.dataset.deleteProject,document.querySelector("#project-delete-confirm").textContent=`Are you sure you want to delete ${o[Ct].title} project?\r\nAll task in project will be deleted`,Mt.showModal()}function i(t){Array.from(document.querySelectorAll(".project-title")).forEach((t=>t.style.backgroundColor="transparent"));const e=+t.target.dataset.projectTitle;t.target.style.backgroundColor="var(--background-color)",At(o[e],u)}function c(){Array.from(document.querySelectorAll(".project-delete-btn")).forEach((t=>t.addEventListener("click",a))),Array.from(document.querySelectorAll(".project-title")).forEach((t=>t.addEventListener("click",i)))}function s(t){const e=+t.target.dataset.taskDeleteProject;(function(t,e){Et[t].tasks.splice(e,1),Lt(Et[t].tasks),Pt(Et)})(e,+t.target.dataset.taskDelete),At(o[e],u)}function u(){Array.from(document.querySelectorAll(".task-delete-btn")).forEach((t=>t.addEventListener("click",s))),Array.from(document.querySelectorAll(".task-expand-btn")).forEach((t=>t.addEventListener("click",d))),Array.from(document.querySelectorAll(".task-edit-btn")).forEach((t=>t.addEventListener("click",l)))}function d(t){const e=+t.target.dataset.expandIndex;if("▼"===t.target.textContent)return function(t){const e=document.querySelectorAll(".task-description"),n=document.querySelectorAll(".task-note"),r=document.querySelectorAll(".task-btn-container");e[t].style.display="block",n[t].style.display="block",r[t].style.display="flex"}(e),void(t.target.textContent="⏏");!function(t){const e=document.querySelectorAll(".task-description"),n=document.querySelectorAll(".task-note"),r=document.querySelectorAll(".task-btn-container");e[t].style.display="none",n[t].style.display="none",r[t].style.display="none"}(e),t.target.textContent="▼"}function l(t){Ct=+t.target.dataset.taskEditProject,jt=+t.target.dataset.taskEdit,document.querySelector("#edit-task-title").value=o[Ct].tasks[jt].title,document.querySelector("#edit-task-description").value=o[Ct].tasks[jt].description,document.querySelector("#edit-task-note").value=o[Ct].tasks[jt].note,document.querySelector("#edit-task-due-date").value=o[Ct].tasks[jt].dueDate,St.showModal()}qt=st(new Date,"yyyy-LL-dd"),Array.from(document.querySelectorAll(".date-input")).forEach((t=>t.setAttribute("min",qt))),document.querySelector("#show-project-dialog").addEventListener("click",(function(){wt.showModal()})),document.querySelector("#project-cancel-btn").addEventListener("click",(function(t){t.preventDefault(),wt.close()})),document.querySelector("#show-task-dialog").addEventListener("click",(function(){kt.showModal(),function(t){xt.textContent="";for(let e=0;e<t.length;e++){const n=y("option","value",e,t[e].title);xt.appendChild(n)}}(o)})),document.querySelector("#task-cancel-btn").addEventListener("click",(function(t){t.preventDefault(),kt.close()})),document.querySelector("#project-form").addEventListener("submit",(function(t){t.preventDefault();const e=document.querySelector("#project-title"),n=document.querySelector("#project-description");(function(t,e){Et.push(new Wt(t,e)),Lt(Et),Nt(),Pt(Et)})(e.value,n.value),yt([e,n]),Dt(o,c),wt.close(),At(o[o.length-1],u)})),document.querySelector("#task-form").addEventListener("submit",(function(t){t.preventDefault();const e=document.querySelector("#task-title"),n=document.querySelector("#task-description"),r=document.querySelector("#task-due-date"),a=document.querySelector("input[name='priority']:checked"),i=document.querySelector("#task-note"),c=+xt.selectedIndex;(function(t,e,n,r,o,a){t.push(new Tt(e,n,r,o,a)),Lt(t),Nt(),Pt(Et)})(o[c].tasks,e.value,n.value,r.value,a.value,i.value),At(o[c],u),yt([e,n,r,i]),document.querySelector("#medium").checked="true",kt.close()})),document.querySelector("#edit-task-form").addEventListener("submit",(function(t){t.preventDefault();const e=document.querySelector("#edit-task-title"),n=document.querySelector("#edit-task-description"),r=document.querySelector("#edit-task-due-date"),a=document.querySelector("input[name='edit-priority']:checked"),i=document.querySelector("#edit-task-note");(function(t,e,n,r,o,a,i){Et[t].tasks[e].title=n,Et[t].tasks[e].description=r,Et[t].tasks[e].dueDate=o,Et[t].tasks[e].priority=a,Et[t].tasks[e].note=i,Pt(Et)})(Ct,jt,e.value,n.value,r.value,a.value,i.value),At(o[Ct],u),yt([e,n,r,i]),document.querySelector("#edit-medium").checked="true",St.close()})),document.querySelector("#edit-task-cancel-btn").addEventListener("click",(function(t){t.preventDefault(),St.close()})),Dt(o,c),At(o[0],u),document.querySelector("#project-delete-confirm-cancel").addEventListener("click",(function(t){t.preventDefault(),Mt.close()})),document.querySelector("#project-delete-confirm-yes").addEventListener("click",(function(t){var e;t.preventDefault(),e=Ct,Et.splice(e,1),Lt(Et),Nt(),Pt(Et),Dt(o,c),At(o[o.length-1],u),Mt.close()}))}(0,0,0,0,Et)})();