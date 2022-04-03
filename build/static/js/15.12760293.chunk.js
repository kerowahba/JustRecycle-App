/*! For license information please see 15.12760293.chunk.js.LICENSE.txt */
(this["webpackJsonpJustRecycle-app"]=this["webpackJsonpJustRecycle-app"]||[]).push([[15],{149:function(e,n,r){"use strict";r.r(n),r.d(n,"ion_spinner",(function(){return o}));var t=r(31),s=r(27),i=r(162),a=r(168),o=function(){function e(e){Object(t.l)(this,e),this.paused=!1}return e.prototype.getName=function(){var e=this.name||s.c.get("spinner"),n=Object(s.b)(this);return e||("ios"===n?"lines":"circular")},e.prototype.render=function(){var e,n=this,r=Object(s.b)(n),o=n.getName(),f=a.a[o]||a.a.lines,u="number"===typeof n.duration&&n.duration>10?n.duration:f.dur,p=[];if(void 0!==f.circles)for(var m=0;m<f.circles;m++)p.push(l(f,u,m,f.circles));else if(void 0!==f.lines)for(m=0;m<f.lines;m++)p.push(c(f,u,m,f.lines));return Object(t.h)(t.b,{class:Object(i.a)(n.color,(e={},e[r]=!0,e["spinner-"+o]=!0,e["spinner-paused"]=n.paused||s.c.getBoolean("_testing"),e)),role:"progressbar",style:f.elmDuration?{animationDuration:u+"ms"}:{}},p)},e}(),l=function(e,n,r,s){var i=e.fn(n,r,s);return i.style["animation-duration"]=n+"ms",Object(t.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(t.h)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:n+"ms"}:{}}))},c=function(e,n,r,s){var i=e.fn(n,r,s);return i.style["animation-duration"]=n+"ms",Object(t.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(t.h)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};o.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},162:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return s})),r.d(n,"d",(function(){return l}));var t=r(16),s=function(e,n){return null!==n.closest(e)},i=function(e,n){var r;return"string"===typeof e&&e.length>0?Object.assign(((r={"ion-color":!0})["ion-color-"+e]=!0,r),n):n},a=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},o=/^[a-z][a-z0-9+\-.]*:/,l=function(e,n,r,s){return Object(t.a)(void 0,void 0,void 0,(function(){var i;return Object(t.c)(this,(function(t){return null!=e&&"#"!==e[0]&&!o.test(e)&&(i=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,i.push(e,r,s)]):[2,!1]}))}))}},168:function(e,n,r){"use strict";r.d(n,"a",(function(){return t}));var t={bubbles:{dur:1e3,circles:9,fn:function(e,n,r){var t=e*n/r-e+"ms",s=2*Math.PI*n/r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(e,n,r){var t=n/r,s=e*t-e+"ms",i=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:8,fn:function(e,n,r){return{y1:14,y2:26,style:{transform:"rotate("+(360/r*n+(n<r/2?180:-180))+"deg)","animation-delay":e*n/r-e+"ms"}}}},"lines-small":{dur:1e3,lines:8,fn:function(e,n,r){return{y1:12,y2:20,style:{transform:"rotate("+(360/r*n+(n<r/2?180:-180))+"deg)","animation-delay":e*n/r-e+"ms"}}}},"lines-sharp":{dur:1e3,lines:12,fn:function(e,n,r){return{y1:17,y2:29,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":e*n/r-e+"ms"}}}},"lines-sharp-small":{dur:1e3,lines:12,fn:function(e,n,r){return{y1:12,y2:20,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":e*n/r-e+"ms"}}}}}}}]);
//# sourceMappingURL=15.12760293.chunk.js.map