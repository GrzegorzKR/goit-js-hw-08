!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),s=Object.prototype.toString,p=Math.max,y=Math.min,m=function(){return v.Date.now()};function g(e,t,n){var o,r,u,f,a,c,l=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function j(e){return l=e,a=setTimeout(w,t),d?g(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=u}function w(){var e=m();if(T(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return v?y(n,u-(e-l)):n}(e))}function O(e){return a=void 0,s&&o?g(e):(o=r=void 0,f)}function S(){var e=m(),n=T(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return j(c);if(v)return a=setTimeout(w,t),g(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=h(t)||0,b(n)&&(d=!!n.leading,u=(v="maxWait"in n)?p(h(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},S.flush=function(){return void 0===a?f:O(m())},S}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};var j=document.querySelector("iframe#vimeo-player"),T=new Vimeo.Player(j);T.on("play",(function(){console.log("played the video!")})),T.getVideoTitle().then((function(e){console.log("title:",e)}));T.on("timeupdate",e(t)((function(e){var t=e.percent,n=e.seconds;t<1?localStorage.setItem("videoplayer-current-time",n):localStorage.removeItem("videoplayer-current-time")}),1e3));var w=localStorage.getItem("videoplayer-current-time");T.setCurrentTime(w).play().then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.4abf38f9.js.map