var ChoroplethLayer=function(){"use strict";function t(t,n){var r=null;return n.forEach(function(n){n.name===t&&(r=n.value)}),r}function n(t,n){for(var r=t.length,e=t.map(function(t,n){return 1/r*(r-n)}),a=0;a<t.length;a++)if(n<=t[a])return"rgba(255, 255, 255, "+(e[a]-.1)+")"}function r(t,n){var r=t.map(function(t){return t.value});r.sort(function(t,n){return t>n?1:-1});var e=Math.floor(r.length/n);return e<=1?r:Array.from(new Array(n-1)).map(function(t,n){return r[e*(n+1)]})}function e(r,e,a){var i=parseInt(t(a.name,this.data));i&&(r.ctx.fillStyle=this.color,r.utils.drawPath(r.ctx,e),r.ctx.fillStyle=n(this.thresholds,i),r.utils.drawPath(r.ctx,e))}function a(t,n){}function i(t){}var o=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}();return function(){function t(n){o(this,t),this.color=n.color||"cyan",this.level=n.level||5,this.data=n.data||[],this.thresholds=r(this.data,this.level),this.drawSubArea=e.bind(this),this.onEnter=a.bind(this),this.onLeave=i.bind(this)}return u(t,[{key:"beforeArea",value:function(){}},{key:"afterSubArea",value:function(t,n,r){this.drawSubArea(t,n,r)}},{key:"afterArea",value:function(){}}]),t}()}();
