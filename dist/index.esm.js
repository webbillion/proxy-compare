var t=Symbol(),r=Symbol(),e=Symbol(),n=function(t){try{var r=Object.getPrototypeOf(t);return r===Object.prototype||r===Array.prototype}catch(t){return!1}},i=function(o,u,f){if(!n(o))return o;var s,a=o[e]||o,c=f&&f.get(a);return c||(((s={}).r=function(t){if(!this.t){var r=this.a.get(this.o);r||(r=new Set,this.a.set(this.o,r)),r.add(t)}},s.u=function(){this.t=!0,this.a.delete(this.o)},s.get=function(t,r){return r===e?this.o:(this.r(r),i(t[r],this.a,this.c))},s.has=function(t,e){return e===r?(this.u(),!0):(this.r(e),e in t)},s.ownKeys=function(r){return this.r(t),Reflect.ownKeys(r)},c=s).p=new Proxy(function(t){return Object.isFrozen(t)?Array.isArray(t)?Array.from(t):Object.assign({},t):t}(a),c),c.o=a,c.t=!1,f&&f.set(a,c)),c.a=u,c.c=f,c.p},o=function(t,r){var e=Reflect.ownKeys(t),n=Reflect.ownKeys(r);return e.length!==n.length||e.some(function(t,r){return t!==n[r]})},u=1,f=2,s=4,a=8,c=function r(e,n,i,u,f){if(void 0===f&&(f=0),e===n&&0==(2&f))return!1;if("object"!=typeof e||null===e)return!0;if("object"!=typeof n||null===n)return!0;var s=i.get(e);if(!s)return 0==(1&f);if(u&&0==(2&f)){var a,c=u.get(e);if(c&&c.n===n)return c.g||!1;u.set(e,((a={}).n=n,a))}var l,y=null,h=s,b=Array.isArray(h),g=0;for(h=b?h:h[Symbol.iterator]();;){var v;if(b){if(g>=h.length)break;v=h[g++]}else{if((g=h.next()).done)break;v=g.value}var p=v,j=p===t?o(e,n):r(e[p],n[p],i,u,f>>>2<<2|f>>>2);if(!0!==j&&!1!==j||(y=j),y)break}return null===y&&(y=0==(1&f)),u&&0==(2&f)&&u.set(e,((l={}).n=n,l.g=y,l)),y},l=function(t){return!!n(t)&&r in t},y=function(t){return n(t)&&t[e]||null};export{u as MODE_ASSUME_UNCHANGED_IF_UNAFFECTED,s as MODE_ASSUME_UNCHANGED_IF_UNAFFECTED_IN_DEEP,f as MODE_IGNORE_REF_EQUALITY,a as MODE_IGNORE_REF_EQUALITY_IN_DEEP,i as createDeepProxy,y as getUntrackedObject,c as isDeepChanged,l as trackMemo};
//# sourceMappingURL=index.esm.js.map
