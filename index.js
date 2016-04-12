!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WeVision=e():t.WeVision=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,s){try{var i=e[o](s),a=i.value}catch(u){return void r(u)}return i.done?void t(a):Promise.resolve(a).then(function(t){return n("next",t)},function(t){return n("throw",t)})}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.searchById=e.showProducts=e.getCategoryData=e.searchByImage=void 0;var s=r(1),i=n(s),a="http://api.wide-eyes.it";e.searchByImage=function(t,e){return new Promise(function(r,n){i.default.post(a+"/v4/SearchByImage").set("Content-Type","application/json").set("Authorization","Bearer "+t).send(e).end(function(t,e){if(t||!(e.body instanceof Object))return n(_createError(t));var o=e.body.attributes,s=[],i=[];return e.body.results.map(function(t){s.push({name:t.category}),i=i.concat(t.products)}),r({categories:s,products:i,attributes:o})})})},e.getCategoryData=function(){var t=o(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){i.default.post(a+"/get_category_data").set("Authorization","Bearer "+t).set("Content-Type","application/json").send(r?{weCategories:!0}:{}).end(function(t,r){!t&&r.body instanceof Object?e(r.body.categories):n(_createError(t,r))})}));case 1:case"end":return e.stop()}},e,void 0)}));return function(e,r){return t.apply(this,arguments)}}(),e.showProducts=function(){var t=o(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){i.default.post(a+"/show_products").set("Authorization","Bearer "+t).set("Content-Type","application/json").send(r).end(function(t,r){!t&&r.body instanceof Object?e(r.body.products):n(_createError(t,r))})}));case 1:case"end":return e.stop()}},e,void 0)}));return function(e,r){return t.apply(this,arguments)}}(),e.searchById=function(){var t=o(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){i.default.post(a+"/v4/SearchById").set("Authorization","Bearer "+t).set("Content-Type","application/json").send(r).end(function(t,r){!t&&r.body instanceof Object?e(r.body.results[0].products):n(_createError(t,r))})}));case 1:case"end":return e.stop()}},e,void 0)}));return function(e,r){return t.apply(this,arguments)}}()},function(t,e,r){function n(){}function o(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function s(t){if(!w(t))return t;var e=[];for(var r in t)null!=t[r]&&i(e,r,t[r]);return e.join("&")}function i(t,e,r){return Array.isArray(r)?r.forEach(function(r){i(t,e,r)}):void t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}function a(t){for(var e,r,n={},o=t.split("&"),s=0,i=o.length;i>s;++s)r=o[s],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function u(t){var e,r,n,o,s=t.split(/\r?\n/),i={};s.pop();for(var a=0,u=s.length;u>a;++a)r=s[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),o=x(r.slice(e+1)),i[n]=o;return i}function c(t){return/[\/+]json\b/.test(t)}function h(t){return t.split(/ *; */).shift()}function p(t){return b(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),o=r.shift();return n&&o&&(t[n]=o),t},{})}function l(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function f(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new l(r)}catch(n){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=n,t.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,t.statusCode=r.xhr&&r.xhr.status?r.xhr.status:null,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);if(e.status>=200&&e.status<300)return r.callback(t,e);var o=new Error(e.statusText||"Unsuccessful HTTP response");o.original=t,o.response=e,o.status=e.status,r.callback(o,e)})}function d(t,e){var r=_("DELETE",t);return e&&r.end(e),r}var y,m=r(2),b=r(3),v=r(4),w=r(5);y="undefined"!=typeof window?window:"undefined"!=typeof self?self:this;var _=t.exports=r(6).bind(null,f);_.getXHR=function(){if(!(!y.XMLHttpRequest||y.location&&"file:"==y.location.protocol&&y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var x="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};_.serializeObject=s,_.parseString=a,_.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},_.serialize={"application/x-www-form-urlencoded":s,"application/json":JSON.stringify},_.parse={"application/x-www-form-urlencoded":a,"application/json":JSON.parse},l.prototype.get=function(t){return this.header[t.toLowerCase()]},l.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=h(e);var r=p(e);for(var n in r)this[n]=r[n]},l.prototype.parseBody=function(t){var e=_.parse[this.type];return!e&&c(this.type)&&(e=_.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},l.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},l.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",o=new Error(n);return o.status=this.status,o.method=e,o.url=r,o},_.Response=l,m(f.prototype);for(var g in v)f.prototype[g]=v[g];f.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},f.prototype.type=function(t){return this.set("Content-Type",_.types[t]||t),this},f.prototype.responseType=function(t){return this._responseType=t,this},f.prototype.accept=function(t){return this.set("Accept",_.types[t]||t),this},f.prototype.auth=function(t,e,r){switch(r||(r={type:"basic"}),r.type){case"basic":var n=btoa(t+":"+e);this.set("Authorization","Basic "+n);break;case"auto":this.username=t,this.password=e}return this},f.prototype.query=function(t){return"string"!=typeof t&&(t=s(t)),t&&this._query.push(t),this},f.prototype.attach=function(t,e,r){return this._getFormData().append(t,e,r||e.name),this},f.prototype._getFormData=function(){return this._formData||(this._formData=new y.FormData),this._formData},f.prototype.send=function(t){var e=w(t),r=this._header["content-type"];if(e&&w(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||o(t)?this:(r||this.type("json"),this)},l.prototype.parse=function(t){return y.console&&console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"),this.serialize(t),this},l.prototype.serialize=function(t){return this._parser=t,this},f.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},f.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},f.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},f.prototype.withCredentials=function(){return this._withCredentials=!0,this},f.prototype.end=function(t){var e=this,r=this.xhr=_.getXHR(),s=this._query.join("&"),i=this._timeout,a=this._formData||this._data;this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(n){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var u=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),t.direction="download",e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=u);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=u)}catch(h){}if(i&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},i)),s&&(s=_.serializeObject(s),this.url+=~this.url.indexOf("?")?"&"+s:"?"+s),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!o(a)){var p=this._header["content-type"],l=this._parser||_.serialize[p?p.split(";")[0]:""];!l&&c(p)&&(l=_.serialize["application/json"]),l&&(a=l(a))}for(var f in this.header)null!=this.header[f]&&r.setRequestHeader(f,this.header[f]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof a?a:null),this},_.Request=f,_.get=function(t,e,r){var n=_("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},_.head=function(t,e,r){var n=_("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},_.del=d,_.delete=d,_.patch=function(t,e,r){var n=_("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},_.post=function(t,e,r){var n=_("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},_.put=function(t,e,r){var n=_("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}},function(t,e){function r(t){return t?n(t):void 0}function n(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;o>n;++n)r[n].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){t.exports=function(t,e,r){for(var n=0,o=t.length,s=3==arguments.length?r:t[n++];o>n;)s=e.call(null,s,t[n],++n,t);return s}},function(t,e,r){var n=r(5);e.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},e.parse=function(t){return this._parser=t,this},e.timeout=function(t){return this._timeout=t,this},e.then=function(t,e){return this.end(function(r,n){r?e(r):t(n)})},e.use=function(t){return t(this),this},e.get=function(t){return this._header[t.toLowerCase()]},e.getHeader=e.get,e.set=function(t,e){if(n(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},e.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},e.field=function(t,e){return this._getFormData().append(t,e),this}},function(t,e){function r(t){return null!=t&&"object"==typeof t}t.exports=r},function(t,e){function r(t,e,r){return"function"==typeof r?new t("GET",e).end(r):2==arguments.length?new t("GET",e):new t(e,r)}t.exports=r}])});