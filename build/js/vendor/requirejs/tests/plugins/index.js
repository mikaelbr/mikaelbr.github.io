(function(){function e(e){var t=e.split("?"),n=parseInt(t[0],10),r=t[1].split(":"),i=r[n];return{index:n,choices:r,choice:i}}define({pluginBuilder:"./indexBuilder",normalize:function(t,n){var r=e(t),s=r.choices;for(i=0;i<s.length;i++)s[i]=n(s[i]);return r.index+"?"+s.join(":")},load:function(t,n,r,i){n([e(t).choice],function(e){r(e)})}})})();