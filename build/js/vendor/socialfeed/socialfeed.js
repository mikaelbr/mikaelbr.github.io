/*
 * ECMAScript 5 Shims.
 * Copyright 2009, 2010 Kristopher Michael Kowal. All rights reserved.
 */

/** 
  Extend from Backbone 
  (Copyright (c) 2010-2013 Jeremy Ashkenas, DocumentCloud)
*/

// jquery.jsonp 2.4.0 (c)2012 Julian Aubourg | MIT License
// https://github.com/jaubourg/jquery-jsonp

(function(e,t,n){function r(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(i)return i(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var i=e[n][1][t];return r(i?i:t)},u,u.exports)}return t[n].exports}var i=typeof require=="function"&&require;for(var s=0;s<n.length;s++)r(n[s]);return r})({1:[function(e,t,n){var r=e("./api"),i=e("./controller"),s=e("./basemodule"),o=e("./utils"),u=function(e){if(!(this instanceof u))return new u;e.el||(e={el:e}),this.c=new i(e)};o.inherits(u,r),u.Modules={Disqus:e("./modules/disqus"),Github:e("./modules/github"),YouTubeUploads:e("./modules/youtubeuploads"),Delicious:e("./modules/delicious"),RSS:e("./modules/rss"),Vimeo:e("./modules/vimeo"),SocialBase:s,extend:function(e){return s.extend(e)}},function(e){typeof define=="function"&&define.amd?define(["jquery"],function(e){return s.$=e,u}):this.SocialFeed=u}(this)},{"./api":2,"./controller":3,"./basemodule":4,"./utils":5,"./modules/disqus":6,"./modules/github":7,"./modules/youtubeuploads":8,"./modules/delicious":9,"./modules/rss":10,"./modules/vimeo":11}],2:[function(e,t,n){var r=t.exports=function(e){};r.prototype={start:function(){return this.c.emit("start"),this},reload:function(){return this.c.emit("reload"),this},addModule:function(e){return this.c.emit("addModule",e),this},nextBulk:function(){return this.c.emit("nextBulk"),this},loadNumEntries:function(e){return this.c.emit("loadNumEntries",e),this},on:function(e,t){return this.c.on(e,t),this}}},{}],5:[function(e,t,n){n.timesince=function(e){e=new Date(e);var t=Math.floor((new Date-e)/1e3),n=Math.floor(t/31536e3);return n>1?n+" years ago":(n=Math.floor(t/2592e3),n>1?n+" months ago":(n=Math.floor(t/86400),n>1?n+" days ago":(n=Math.floor(t/3600),n>1?n+" hours ago":(n=Math.floor(t/60),n>1?n+" minutes ago":Math.floor(t)+" seconds ago"))))};var r=n.isFunc=function(e){return Object.prototype.toString.call(e)=="[object Function]"},i=n.isString=function(e){return Object.prototype.toString.call(e)=="[object String]"};n.result=function(e,t){if(e==null)return;var n=e[t];return r(n)?n.call(e):n},n.bind=function(e,t){var n=[].slice.call(arguments,2);return function(){return e.apply(t||this,n.concat([].slice.call(arguments)))}},n.has=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.extend=function(e){return[].slice.call(arguments,1).forEach(function(t){if(t)for(var n in t)e[n]=t[n]}),e},n.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})};var s=function(e){if(e==null)throw new TypeError("can't convert "+e+" to object");return Object(e)},o=Object("a"),u=o[0]!="a"||!(0 in o);Array.prototype.forEach||(Array.prototype.forEach=function(t){var n=s(this),o=u&&i(this)?this.split(""):n,a=arguments[1],f=-1,l=o.length>>>0;if(!r(t))throw new TypeError;while(++f<l)f in o&&t.call(a,o[f],f,n)}),Array.prototype.map||(Array.prototype.map=function(t){var n=s(this),r=u&&_toString(this)=="[object String]"?this.split(""):n,i=r.length>>>0,o=Array(i),a=arguments[1];if(_toString(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var f=0;f<i;f++)f in r&&(o[f]=t.call(a,r[f],f,n));return o}),Array.prototype.filter||(Array.prototype.filter=function(t){var n=s(this),r=u&&_toString(this)=="[object String]"?this.split(""):n,i=r.length>>>0,o=[],a,f=arguments[1];if(_toString(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var l=0;l<i;l++)l in r&&(a=r[l],t.call(f,a,l,n)&&o.push(a));return o})},{}],12:[function(e,t,n){var r=t.exports={};r.nextTick=function(){var e=typeof window!="undefined"&&window.setImmediate,t=typeof window!="undefined"&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){if(e.source===window&&e.data==="process-tick"){e.stopPropagation();if(n.length>0){var t=n.shift();t()}}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")}},{}],13:[function(e,t,n){(function(e){function i(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(t===e[n])return n;return-1}e.EventEmitter||(e.EventEmitter=function(){});var t=n.EventEmitter=e.EventEmitter,r=typeof Array.isArray=="function"?Array.isArray:function(e){return Object.prototype.toString.call(e)==="[object Array]"},s=10;t.prototype.setMaxListeners=function(e){this._events||(this._events={}),this._events.maxListeners=e},t.prototype.emit=function(e){if(e==="error")if(!this._events||!this._events.error||r(this._events.error)&&!this._events.error.length)throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");if(!this._events)return!1;var t=this._events[e];if(!t)return!1;if(typeof t=="function"){switch(arguments.length){case 1:t.call(this);break;case 2:t.call(this,arguments[1]);break;case 3:t.call(this,arguments[1],arguments[2]);break;default:var n=Array.prototype.slice.call(arguments,1);t.apply(this,n)}return!0}if(r(t)){var n=Array.prototype.slice.call(arguments,1),i=t.slice();for(var s=0,o=i.length;s<o;s++)i[s].apply(this,n);return!0}return!1},t.prototype.addListener=function(e,t){if("function"!=typeof t)throw new Error("addListener only takes instances of Function");this._events||(this._events={}),this.emit("newListener",e,t);if(!this._events[e])this._events[e]=t;else if(r(this._events[e])){if(!this._events[e].warned){var n;this._events.maxListeners!==undefined?n=this._events.maxListeners:n=s,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),console.trace())}this._events[e].push(t)}else this._events[e]=[this._events[e],t];return this},t.prototype.on=t.prototype.addListener,t.prototype.once=function(e,t){var n=this;return n.on(e,function r(){n.removeListener(e,r),t.apply(this,arguments)}),this},t.prototype.removeListener=function(e,t){if("function"!=typeof t)throw new Error("removeListener only takes instances of Function");if(!this._events||!this._events[e])return this;var n=this._events[e];if(r(n)){var s=i(n,t);if(s<0)return this;n.splice(s,1),n.length==0&&delete this._events[e]}else this._events[e]===t&&delete this._events[e];return this},t.prototype.removeAllListeners=function(e){return arguments.length===0?(this._events={},this):(e&&this._events&&this._events[e]&&(this._events[e]=null),this)},t.prototype.listeners=function(e){return this._events||(this._events={}),this._events[e]||(this._events[e]=[]),r(this._events[e])||(this._events[e]=[this._events[e]]),this._events[e]}})(e("__browserify_process"))},{__browserify_process:12}],3:[function(e,t,n){var r=e("events").EventEmitter,i=e("./utils"),s=t.exports=function(e){this.modules=[],this.feedRendered=null,this.$el=$(e.el)||$("#socialfeed"),this.count=e.count||1e3,this._offset=e.offset||0,this.on("start",i.bind(this.start,this)),this.on("reload",i.bind(this.reload)),this.on("addModule",i.bind(this.addModule)),this.on("postFetch",i.bind(this.render)),this.on("nextBulk",i.bind(this.nextBulk)),this.on("loadNumEntries",i.bind(this.loadNumEntries))};i.inherits(s,r),i.extend(s.prototype,{_sync_count:0,addModule:function(e){var t=this;this.modules.push(e),e.on("fetched",i.bind(t.moduleFetched,t)),e.on("error",function(){t.listeners("error").length>0&&t.emit.apply(t,["error"].concat(arguments)),t.moduleFetched()})},start:function(){var e=this;e.emit("preFetch"),e.modules.forEach(function(e){e.fetch()})},moduleFetched:function(e,t,n){this.emit("moduleAdded",e),++this._sync_count===this.modules.length&&(this.emit("postFetch",this.modules),this._sync_count=0)},reload:function(){this.$el.empty(),this._offset=0,this.feedRendered=null,this.start()},nextBulk:function(){return this.loadNumEntries(this.count)},loadNumEntries:function(e){if(this._offset>=this.feedRendered.length)return this;var t=this.count;return this.count=e,this.render(),this.count=t,this},render:function(){var e=this.$el;this.feedRendered===null&&(this.feedRendered=this._generateOrderedList(),this.emit("dataReady",this.feedRendered,this.modules));var t=this.feedRendered.slice(this._offset,this._offset+this.count);return t.forEach(function(t){e.append(t.html)}),this._offset+=this.count,this.emit("rendered",t),this},_generateOrderedList:function(){var e=[];return this.modules.forEach(function(t){var n=t.collection.map(function(e){var n=t.render(e);return n?{orderBy:t.orderBy(e),html:n}:null});n=n.filter(function(e){return e!==null}),e=e.concat(n)}),this._orderList(e)},_orderList:function(e){return e.sort(function(e,t){var n=e.orderBy,r=t.orderBy;if(n>r||n===void 0)return 1;if(n<=r||r===void 0)return-1})}})},{events:13,"./utils":5}],4:[function(e,t,n){(function(){var n=e("events").EventEmitter,r=e("./utils");e("./vendor/jquery-jsonp");var i=t.exports=function(){this.collection=[],this.init.apply(this,arguments),this.$=i.$||s.jQuery||s.Zepto||s.$;if(!this.$)throw"jQuery or Zepto is required to use SocialFeed."};r.inherits(i,n),i.extend=function(e){var t=this,n=function(){return t.apply(this,arguments)};r.extend(n,t);var i=function(){this.constructor=n};return i.prototype=t.prototype,n.prototype=new i,e&&r.extend(n.prototype,e),n.__super__=t.prototype,n},i.fetch=function(e){var t=$.jsonp;return e.dataType.toLowerCase()==="jsonp"&&t?(e.callbackParameter=e.callbackParameter||"callback",t(e)):this.$.ajax(e)};var s=window;r.extend(i.prototype,{ajaxSettings:{dataType:"jsonp",type:"GET"},init:function(e){this.ident=e},fetch:function(e){e=e?r.clone(e):{};var t=r.result(this,"url"),n=this,s=e.success;e.url=t,e.success=function(t){var r=n.parse(t);n.collection=r,s&&s(n,r,e),n.emit("fetched",n,r,e)};var o=e.error;return e.error=function(e,t){o&&o(n,t,e),n.emit("error",n,t,e)},!t&&this.data?(e.success(r.result(this,"data")),void 0):i.fetch(r.extend(this.ajaxSettings,e))},parse:function(e){return e},orderBy:function(e){},render:function(e){}})})()},{events:13,"./utils":5,"./vendor/jquery-jsonp":14}],6:[function(e,t,n){var r=e("../basemodule"),i=e("../resources").disqus,s=e("../utils");t.exports=r.extend({init:function(e,t){this.ident=e,this.apikey=t},url:function(){return"https://disqus.com/api/3.0/users/listPosts.json?api_key="+this.apikey+"&user:username="+this.ident},parse:function(e){return e.response},orderBy:function(e){return-(new Date(e.createdAt)).getTime()},render:function(e){return i.replace("{{author.profileUrl}}",e.author.profileUrl).replace("{{author.name}}",e.author.name).replace("{{createdAt}}",e.createdAt).replace("{{time_since}}",s.timesince(e.createdAt)).replace("{{message}}",e.message)}})},{"../basemodule":4,"../resources":15,"../utils":5}],7:[function(e,t,n){var r=e("../basemodule"),i=e("../resources"),s=e("../utils"),o={create:i.github_create,createbranch:i.github_createbranch,watch:i.github_watch,push:i.github_push,pullrequest:i.github_pullrequest,fork:i.github_fork,issue:i.github_issue},u=function(e){return"https://github.com/"+e.repo.name},a=function(e){return"https://github.com/"+e.actor.login},f=function(e,t){return o[e].replace("{{profileUrl}}",a(t)).replace("{{username}}",t.actor.login).replace("{{reponame}}",t.repo.name).replace("{{repourl}}",u(t)).replace("{{time_since}}",s.timesince(t.created_at)).replace("{{created_at}}",t.created_at)},l={CreateEvent:!0,WatchEvent:!0,PushEvent:!0,PullRequestEvent:!0,ForkEvent:!0,IssuesEvent:!0};t.exports=r.extend({init:function(e,t){this.ident=e,this.show=s.extend(l,t)},url:function(){return"https://api.github.com/users/"+this.ident+"/events"},orderBy:function(e){return-(new Date(e.created_at)).getTime()},renderMethods:{CreateEvent:function(e){return e.payload.ref===null?f("create",e):f("createbranch",e).replace("{{branchurl}}",u(e)+"/tree/"+e.payload.ref).replace("{{branchname}}",e.payload.ref)},WatchEvent:function(e){return f("watch",e)},PushEvent:function(e){var t=$(f("push",e)),n=t.find(".socialfeed-commit-list"),r=n.find("li:first");return e.payload.commits.forEach(function(t){var i=r.clone();i.find("a").attr("href",u(e)+"/commit/"+t.sha).text(t.sha.substr(0,7)),i.find("span").text(t.message),n.prepend(i)}),r.remove(),t},PullRequestEvent:function(e){return f("pullrequest",e).replace("{{action}}",e.payload.action).replace("{{title}}",e.payload.pull_request.title).replace("{{pullrequesturl}}",e.payload.pull_request.html_url).replace("{{pullrequestname}}",e.repo.name+"#"+e.payload.number)},ForkEvent:function(e){return f("fork",e).replace("{{forkeeurl}}",e.payload.forkee.html_url).replace("{{forkeename}}",e.payload.forkee.full_name)},IssuesEvent:function(e){return f("issue",e).replace("{{action}}",e.payload.action).replace("{{title}}",e.payload.issue.title).replace("{{issueurl}}",e.payload.issue.html_url).replace("{{issuename}}",e.repo.name+"#"+e.payload.number)}},parse:function(e){return e.data},render:function(e){return e.type&&this.renderMethods[e.type]&&!!this.show[e.type]?this.renderMethods[e.type].apply(this,[e]):null}})},{"../basemodule":4,"../resources":15,"../utils":5}],8:[function(e,t,n){var r=e("../basemodule"),i=e("../resources").youtubeuploads,s=e("../utils");t.exports=r.extend({ajaxSettings:{cache:!0,dataType:"jsonp"},init:function(e,t){this.ident=e,this.maxCount=t||10},url:function(){return"http://gdata.youtube.com/feeds/users/"+this.ident+"/uploads?alt=json-in-script&format=5&max-results="+this.maxCount},parse:function(e){var t=e.feed;return t.entry||[]},orderBy:function(e){return-(new Date(e.updated.$t)).getTime()},hideAndMakeYoutubeClickable:function(e,t){var n=$(t),r=n.find("iframe"),i=e.media$group.media$thumbnail[0].url,s=$("<img />",{src:i,"class":"youtube-preview"}).insertAfter(r).on("click",function(){r.insertAfter(s),s.remove()});return r.remove(),n},render:function(e){var t=i.replace("{{profileurl}}",e.author[0].uri.$t).replace("{{username}}",e.author[0].name.$t).replace("{{videourl}}",e.link[0].href).replace("{{videoname}}",e.title.$t).replace("{{created_at}}",e.updated.$t).replace("{{time_since}}",s.timesince(e.updated.$t)).replace("{{entryid}}",e.id.$t.substring(38)).replace("{{desc}}",e.media$group.media$description.$t);return this.hideAndMakeYoutubeClickable(e,t)}})},{"../basemodule":4,"../resources":15,"../utils":5}],9:[function(e,t,n){var r=e("../basemodule"),i=e("../resources").delicious,s=e("../utils");t.exports=r.extend({url:function(){return"http://feeds.delicious.com/v2/json/"+this.ident},orderBy:function(e){return-(new Date(e.dt)).getTime()},render:function(e){return i.replace("{{u}}",e.u).replace("{{d}}",e.d).replace("{{n}}",e.n).replace("{{dt}}",e.dt).replace("{{time_since}}",s.timesince(e.dt))}})},{"../basemodule":4,"../resources":15,"../utils":5}],10:[function(e,t,n){var r=e("../basemodule"),i=e("../resources").rss,s=e("../utils");t.exports=r.extend({init:function(e,t){this.feedURL=e,this.count=t||10},url:function(){return"http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num="+this.count+"&q="+encodeURIComponent(this.feedURL)},parse:function(e){var t=e.responseData.feed;return t?(this.blogname=t.title,this.blogurl=t.link,t.entries||[]):[]},orderBy:function(e){return-(new Date(e.publishedDate)).getTime()},render:function(e){return i.replace("{{blogname}}",this.blogname).replace("{{blogurl}}",this.blogurl).replace("{{url}}",e.link).replace("{{title}}",e.title).replace("{{dt}}",e.publishedDate).replace("{{time_since}}",s.timesince(e.publishedDate))}})},{"../basemodule":4,"../resources":15,"../utils":5}],11:[function(e,t,n){var r=e("../basemodule"),i=e("../resources"),s=e("../utils"),o={like:i.vimeo_like,add_comment:i.vimeo_add_comment,upload:i.vimeo_upload},u={like:!0,add_comment:!0,upload:!0},a=function(e,t){return o[e].replace("{{user_url}}",t.user_url).replace("{{user_name}}",t.user_name).replace("{{user_portrait}}",t.user_portrait_small).replace("{{video_title}}",t.video_title).replace(new RegExp("{{video_url}}","g"),t.video_url).replace("{{video_thumbnail_large}}",t.video_thumbnail_large).replace("{{user_portrait}}",t.user_portrait_small).replace("{{time_since}}",s.timesince(t.date)).replace("{{created_at}}",t.date)};t.exports=r.extend({ajaxSettings:{cache:!0,dataType:"jsonp"},init:function(e,t){this.ident=e,this.show=s.extend(u,t)},url:function(){return"http://vimeo.com/api/v2/activity/"+this.ident+"/user_did.json"},orderBy:function(e){return-(new Date(e.date)).getTime()},renderMethods:{like:function(e){return a("like",e)},add_comment:function(e){return a("add_comment",e).replace("{{comment_text}}",e.comment_text)},upload:function(e){return a("upload",e)}},render:function(e){return e.type&&this.renderMethods[e.type]&&!!this.show[e.type]?this.renderMethods[e.type].apply(this,[e]):null}})},{"../basemodule":4,"../resources":15,"../utils":5}],14:[function(e,t,n){(function(e){function t(){}function n(e){k=[e]}function r(e,t,n){return e&&e.apply&&e.apply(t.context||t,n)}function i(e){return/\?/.test(e)?"&":"?"}function s(s){function h(e){X++||(V(),I&&(N[R]={s:[e]}),H&&(e=H.apply(s,[e])),r(_,s,[e,w,s]),r(P,s,[s,w]))}function M(e){X++||(V(),I&&e!=E&&(N[R]=e),r(D,s,[s,e]),r(P,s,[s,e]))}s=e.extend({},L,s);var _=s.success,D=s.error,P=s.complete,H=s.dataFilter,B=s.callbackParameter,j=s.callback,F=s.cache,I=s.pageCache,q=s.charset,R=s.url,U=s.data,z=s.timeout,W,X=0,V=t,$,J,K,Q,G,Y;return x&&x(function(e){e.done(_).fail(D),_=e.resolve,D=e.reject}).promise(s),s.abort=function(){!(X++)&&V()},r(s.beforeSend,s,[s])===!1||X?s:(R=R||a,U=U?typeof U=="string"?U:e.param(U,s.traditional):a,R+=U?i(R)+U:a,B&&(R+=i(R)+encodeURIComponent(B)+"=?"),!F&&!I&&(R+=i(R)+"_"+(new Date).getTime()+"="),R=R.replace(/=\?(&|$)/,"="+j+"$1"),I&&(W=N[R])?W.s?h(W.s[0]):M(W):(S[j]=n,Q=e(b)[0],Q.id=c+C++,q&&(Q[u]=q),A&&A.version()<11.6?(G=e(b)[0]).text="document.getElementById('"+Q.id+"')."+d+"()":Q[o]=o,O&&(Q.htmlFor=Q.id,Q.event=p),Q[v]=Q[d]=Q[m]=function(e){if(!Q[g]||!/i/.test(Q[g])){try{Q[p]&&Q[p]()}catch(t){}e=k,k=0,e?h(e[0]):M(f)}},Q.src=R,V=function(e){Y&&clearTimeout(Y),Q[m]=Q[v]=Q[d]=null,T[y](Q),G&&T[y](G)},T[l](Q,K=T.firstChild),G&&T[l](G,K),Y=z>0&&setTimeout(function(){M(E)},z)),s)}var o="async",u="charset",a="",f="error",l="insertBefore",c="_jqjsp",h="on",p=h+"click",d=h+f,v=h+"load",m=h+"readystatechange",g="readyState",y="removeChild",b="<script>",w="success",E="timeout",S=window,x=e.Deferred,T=e("head")[0]||document.documentElement,N={},C=0,k,L={callback:c,url:location.href},A=S.opera,O=!!e("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;s.setup=function(t){e.extend(L,t)},e.jsonp=s})(jQuery)},{}],15:[function(e,t,n){t.exports={delicious:'<div class="socialfeed-item socialfeed-delicious">\n  <i class="socialfeed-icon icon-link"></i>\n  <header>\n    <h2><a href="{{u}}">{{d}}</a></h2>\n    <time datetime="{{dt}}">{{time_since}}</time>\n  </header>\n  <div class="socialfeed-body">\n    {{n}}\n  </div>\n</div>',disqus:'<div class="socialfeed-item socialfeed-disqus">\n  <i class="socialfeed-icon icon-comment-alt"></i>\n  <header>\n    <h2><a href="{{author.profileUrl}}">{{author.name}}</a></h2>\n    <time datetime="{{createdAt}}">{{time_since}}</time>\n  </header>\n  <div class="socialfeed-body">\n    {{message}}\n  </div>\n</div>',github_create:'<div class="socialfeed-item socialfeed-github socialfeed-github-create">\n  <i class="socialfeed-icon icon-github"></i>\n  <header>\n    <h2>\n      <a href="{{profileUrl}}">{{username}}</a> created repository <a href="{{repourl}}">{{reponame}}</a>\n    </h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n</div>',github_createbranch:'<div class="socialfeed-item socialfeed-github socialfeed-github-createbranch">\n  <i class="socialfeed-icon icon-github"></i>\n  <header>\n    <h2>\n      <a href="{{profileUrl}}">{{username}}</a> \n      created branch <a href="{{branchurl}}">{{branchname}}</a> \n      at <a href="{{repourl}}">{{reponame}}</a></h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n</div>',github_fork:'<div class="socialfeed-item socialfeed-github socialfeed-github-fork">\n  <i class="socialfeed-icon icon-github"></i>\n  <header>\n    <h2>\n      <a href="{{profileUrl}}">{{username}}</a> \n      forked repository <a href="{{repourl}}">{{reponame}}</a>\n      to <a href="{{forkeeurl}}">{{forkeename}}</a>\n    </h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n</div>',github_issue:'<div class="socialfeed-item socialfeed-github socialfeed-github-issue">\n  <i class="socialfeed-icon icon-github"></i>\n  <header>\n    <h2>\n      <a href="{{profileUrl}}">{{username}}</a> \n      {{action}} issue <a href="{{issueurl}}">{{issuename}}</a>\n    </h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n  <div class="socialfeed-body">\n    {{title}}\n  </div>\n</div>',github_pullrequest:'<div class="socialfeed-item socialfeed-github socialfeed-github-pull-request">\n  <i class="socialfeed-icon icon-github"></i>\n  <header>\n    <h2>\n      <a href="{{profileUrl}}">{{username}}</a> \n      {{action}} pull request <a href="{{pullrequesturl}}">{{pullrequestname}}</a>\n    </h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n  <div class="socialfeed-body">\n    {{title}}\n  </div>\n</div>',github_push:'<div class="socialfeed-item socialfeed-github socialfeed-github-push">\n  <i class="socialfeed-icon icon-github"></i>\n  <header>\n    <h2>\n      <a href="{{profileUrl}}">{{username}}</a> \n      pushed to <a href="{{repourl}}">{{reponame}}</a>\n    </h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n  <ul class="socialfeed-commit-list">\n    <li>\n      <a href="{{commiturl}}">{{commit}}</a>\n      <span>{{commit_message}}</span>\n    </li>\n  </ul>\n</div>',github_watch:'<div class="socialfeed-item socialfeed-github socialfeed-github-watch">\n  <i class="socialfeed-icon icon-github"></i>\n  <header>\n    <h2><a href="{{profileUrl}}">{{username}}</a> starred <a href="{{repourl}}">{{reponame}}</a></h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n</div>',rss:'<div class="socialfeed-item socialfeed-rss">\n  <i class="socialfeed-icon icon-rss"></i>\n  <header>\n    <h2>\n      New blog post at \n      <a href="{{blogurl}}">{{blogname}}</a>\n    </h2>\n    <time datetime="{{dt}}">{{time_since}}</time>\n  </header>\n  <div class="socialfeed-body">\n    <a href="{{url}}">{{title}}</a>\n  </div>\n</div>',vimeo_add_comment:'<div class="socialfeed-item socialfeed-vimeo socialfeed-vimeo-comment">\n  <i class="socialfeed-icon icon-play-sign"></i>\n  <header>\n    <h2><a href="{{user_url}}">{{user_name}}</a> commented on <a href="{{video_url}}">{{video_title}}</a> on Vimeo</h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n\n  <div class="socialfeed-body">\n    {{comment_text}}\n  </div>\n</div>',vimeo_like:'<div class="socialfeed-item socialfeed-vimeo socialfeed-vimeo-like">\n  <i class="socialfeed-icon icon-play-sign"></i>\n  <header>\n    <h2><a href="{{user_url}}">{{user_name}}</a> liked a <a href="{{video_url}}">video on Vimeo</a></h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n\n  <div class="socialfeed-body">\n    <h3><a href="{{video_url}}">{{video_title}}</a></h3>\n    <a href="{{video_url}}">\n      <img src="{{video_thumbnail_large}}" alt="{{video_title}}">\n    </a>\n  </div>\n</div>',vimeo_upload:'<div class="socialfeed-item socialfeed-vimeo socialfeed-vimeo-upload">\n  <i class="socialfeed-icon icon-play-sign"></i>\n  <header>\n    <h2><a href="{{user_url}}">{{user_name}}</a> uploaded a <a href="{{video_url}}">video on Vimeo</a></h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n\n  <div class="socialfeed-body">\n    <h3><a href="{{video_url}}">{{video_title}}</a></h3>\n    <a href="{{video_url}}">\n      <img src="{{video_thumbnail_large}}" alt="{{video_title}}">\n    </a>\n  </div>\n</div>',youtubeuploads:'<div class="socialfeed-item socialfeed-youtube socialfeed-youtube-upload">\n  <i class="socialfeed-icon icon-play-circle"></i>\n  <header>\n    <h2><a href="{{profileurl}}">{{username}}</a> added a video: <a href="{{videourl}}">{{videoname}}</a></h2>\n    <time datetime="{{created_at}}">{{time_since}}</time>\n  </header>\n  <div class="socialfeed-body">\n    <iframe class="youtube-preview"\n      src="http://www.youtube.com/embed/{{entryid}}?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" \n      frameborder="0" \n      allowfullscreen>\n    </iframe>\n    <p>{{desc}}</p>\n  </div>\n</div>'}},{}]},{},[1]);