(function(){function e(e){F.set(e)}function t(e){if(!e||""==e)return"";for(;e[a](0)[p]>0&&" \n\r	"[f](e[a](0))>-1;)e=e[b](1);for(;e[a](e[p]-1)[p]>0&&" \n\r	"[f](e[a](e[p]-1))>-1;)e=e[b](0,e[p]-1);return e}var n=void 0,r=encodeURIComponent,i=String,s=Math,o="push",u="cookie",a="charAt",f="indexOf",l="getTime",c="toString",h="window",p="length",d="document",v="split",m="location",g="protocol",y="href",b="substring",w="join",E="toLowerCase",S="_gat",x="_gaq",T="4.9.4",N="_gaUserPrefs",C="ioo",k="&",L="=",A="__utma=",O="__utmb=",M="__utmc=",_="__utmk=",D="__utmv=",P="__utmz=",H="__utmx=",B="GASO=",j=function(){var e=this,t=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";e.set=function(e){t[e]=!0},e.Sc=function(){for(var e=[],r=0;r<t[p];r++)t[r]&&(e[s.floor(r/6)]^=1<<r%6);for(r=0;r<e[p];r++)e[r]=n[a](e[r]||0);return e[w]("")+"~"}},F=new j,I=function(e,t){var n=this;n.window=e,n.document=t,n.setTimeout=function(e,t){setTimeout(e,t)},n.Jb=function(e){return navigator.userAgent[f](e)>=0},n.Xc=function(){return n.Jb("Firefox")&&![].reduce},n.Vc=function(){return q[h][N]},n.Gc=function(){return q[h].external},n.Hc=function(){return q[h].performance||q[h].webkitPerformance},n.Ic=function(){return q[h].top==q[h]},n.Ya=function(e){var t=q[h]&&q[h].gaGlobal;return e&&!t&&(t={},q[h].gaGlobal=t),t},n.ec=function(e){q[d][m].href=e},n.qb=function(e){if(!e||!n.Jb("Firefox"))return e;for(var e=e.replace(/\n|\r/g," "),t=0,r=e[p];t<r;++t){var i=e.charCodeAt(t)&255;if(i==10||i==13)e=e[b](0,t)+"?"+e[b](t+1)}return e}},q=new I(window,document),R=function(t){return function(n,r,i){return t[n]=function(){return e(r),i.apply(t,arguments)},i}},U=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,!!r):e.attachEvent&&e.attachEvent("on"+t,n)},z=function(e){return Object.prototype[c].call(Object(e))=="[object Array]"},W=function(e){return n==e||"-"==e||""==e},X=function(e,t,n){var r="-",i;return!W(e)&&!W(t)&&!W(n)&&(i=e[f](t),i>-1&&(n=e[f](n,i),n<0&&(n=e[p]),r=e[b](i+t[f](L)+1,n))),r},V=function(e){var t=!1,n=0,r,i;if(!W(e)){t=!0;for(r=0;r<e[p];r++)i=e[a](r),n+="."==i?1:0,t=t&&n<=1&&(0==r&&"-"==i||".0123456789"[f](i)>-1)}return t},$=function(t,n){var i=r;return i instanceof Function?n?encodeURI(t):i(t):(e(68),escape(t))},J=function(t,n){var r=decodeURIComponent,i,t=t[v]("+")[w](" ");if(r instanceof Function)try{i=n?decodeURI(t):r(t)}catch(s){e(17),i=unescape(t)}else e(68),i=unescape(t);return i},K=function(e,t){return e[f](t)>-1},Q=function(t,n){t[o]||e(94),t[t[p]]=n},G=function(e){var t=1,n=0,r;if(!W(e)){t=0;for(r=e[p]-1;r>=0;r--)n=e.charCodeAt(r),t=(t<<6&268435455)+n+(n<<14),n=t&266338304,t=n!=0?t^n>>21:t}return t},Y=function(){return s.round(s.random()*2147483647)},Z=function(){},et=function(e,t){this.ib=e,this.jb=t},tt=function(){function e(e){for(var t=[],e=e[v](","),n,r=0;r<e[p];r++)n=e[r][v](":"),t[o](new et(n[0],n[1]));return t}var t=this;t.Ca="utm_campaign",t.Da="utm_content",t.Ea="utm_id",t.Fa="utm_medium",t.Ga="utm_nooverride",t.Ha="utm_source",t.Ia="utm_term",t.Ja="gclid",t.vc="dclid",t.U=0,t.w=0,t.La=15768e6,t.Ma=18e5,t.s=63072e6,t.V=[],t.W=[],t.wc="cse",t.xc="q",t.Ta=50,t.J=e("daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query,rambler:words"),t.f="/",t.L=100,t.ga="/__utm.gif",t.la=1,t.ma=1,t.u="|",t.ka=1,t.Ka=1,t.Ua=1,t.b="auto",t.B=1,t.Wb=10,t.zc=10,t.Ac=.2,t.o=n},nt=function(t){function n(e,t,n,r){var i="",o=0,i=X(e,"2"+t,";");if(!W(i)){e=i[f]("^"+n+".");if(e<0)return["",0];i=i[b](e+n[p]+2),i[f]("^")>0&&(i=i[v]("^")[0]),n=i[v](":"),i=n[1],o=parseInt(n[0],10),!r&&o<s.m&&(i="")}return W(i)&&(i=""),[i,o]}function r(e,t){return"^"+[[t,e[1]][w]("."),e[0]][w](":")}function i(e){var t=new Date,e=new Date(t[l]()+e);return"expires="+e.toGMTString()+"; "}var s=this,o=t;s.m=(new Date)[l]();var a=[A,O,M,P,D,H,B];s.g=function(){var e=q[d][u];return o.o?s.Nc(e,o.o):e},s.Nc=function(e,t){for(var r=[],i,s=0;s<a[p];s++)i=n(e,a[s],t)[0],W(i)||(r[r[p]]=a[s]+i+";");return r[w]("")},s.l=function(t,n,r){var a=r>0?i(r):"";o.o&&(n=s.Oc(q[d][u],t,o.o,n,r),t="2"+t,a=r>0?i(o.s):""),t+=n,t=q.qb(t),t[p]>2e3&&(e(69),t=t[b](0,2e3)),a=t+"; path="+o.f+"; "+a+s.hb(),bt.pb()||(q[d].cookie=a)},s.Oc=function(e,t,i,u,a){var f="",a=a||o.s,u=r([u,s.m+a*1],i),f=X(e,"2"+t,";");return W(f)?u:(e=r(n(e,t,i,!0),i),f=f[v](e)[w](""),f=u+f)},s.hb=function(){return W(o.b)?"":"domain="+o.b+";"}},rt=function(e){function t(e){return e=z(e)?e[w]("."):"",W(e)?"-":e}function r(e,t){var n=[],r;if(!W(e)&&(n=e[v]("."),t))for(r=0;r<n[p];r++)V(n[r])||(n[r]="-");return n}function s(e,t,n){var r=d.I,i,s;for(i=0;i<r[p];i++)s=r[i][0],s+=W(t)?t:t+r[i][4],r[i][2](X(e,s,n))}var o,u,a,f,l,c,h,d=this,m,g=e;d.i=new nt(e),d.Ba=function(){return n==m||m==d.K()},d.g=function(){return d.i.g()},d.ea=function(){return l?l:"-"},d.Pa=function(e){l=e},d.fa=function(e){m=V(e)?e*1:"-"},d.da=function(){return t(c)},d.X=function(e){c=r(e)},d.yc=function(){d.i.l(D,"",-1)},d.Rb=function(){return m?m:"-"},d.hb=function(){return W(g.b)?"":"domain="+g.b+";"},d.ba=function(){return t(o)},d.Na=function(e){o=r(e,1)},d.z=function(){return t(u)},d.$=function(e){u=r(e,1)},d.ca=function(){return t(a)},d.Oa=function(e){a=r(e,1)},d.qa=function(){return t(f)},d.ra=function(e){f=r(e);for(e=0;e<f[p];e++)e<4&&!V(f[e])&&(f[e]="-")},d.Fc=function(){return h},d.Dc=function(e){h=e},d.Qb=function(){o=[],u=[],a=[],f=[],l=n,c=[],m=n},d.K=function(){for(var e="",t=0;t<d.I[p];t++)e+=d.I[t][1]();return G(e)},d.Z=function(e){var t=d.g(),n=!1;return t&&(s(t,e,";"),d.fa(i(d.K())),n=!0),n},d.Sb=function(e){s(e,"",k),d.fa(X(e,_,k))},d.Tb=function(){var e=d.I,t=[],n;for(n=0;n<e[p];n++)Q(t,e[n][0]+e[n][1]());return Q(t,_+d.K()),t[w](k)},d.Ub=function(e,t){var n=d.I,r=g.f;d.Z(e),g.f=t;for(var i=0;i<n[p];i++)W(n[i][1]())||n[i][3]();g.f=r},d.Qa=function(){d.i.l(A,d.ba(),g.s)},d.aa=function(){d.i.l(O,d.z(),g.Ma)},d.Ra=function(){d.i.l(M,d.ca(),0)},d.sa=function(){d.i.l(P,d.qa(),g.La)},d.Sa=function(){d.i.l(H,d.ea(),g.s)},d.Y=function(){d.i.l(D,d.da(),g.s)},d.Ec=function(){d.i.l(B,d.Fc(),0)},d.I=[[A,d.ba,d.Na,d.Qa,"."],[O,d.z,d.$,d.aa,""],[M,d.ca,d.Oa,d.Ra,""],[H,d.ea,d.Pa,d.Sa,""],[P,d.qa,d.ra,d.sa,"."],[D,d.da,d.X,d.Y,"."]]},it="https:"==q[d][m][g]?"https://ssl.google-analytics.com/":"http://www.google-analytics.com/",st=it+"p/__utm.gif",ot=function(){var e=this;e.Bb=function(t,n,r,i,s){n[p]<=2036||s?e.Aa(t+"?"+n,i):n[p]<=8192?q.Xc()?e.Aa(t+"?"+r+"&err=ff2post&len="+n[p],i):e.fd(n,i):e.Aa(t+"?"+r+"&err=len&max=8192&len="+n[p],i)},e.Aa=function(e,t){var n=new Image(1,1);n.src=e,n.onload=function(){n.onload=null,(t||Z)()}},e.fd=function(t,n){e.ed(t,n)||e.Ob(t,n)},e.ed=function(e,t){var n,r=q[h].XDomainRequest;if(r)n=new r,n.open("POST",st);else if(r=q[h].XMLHttpRequest)r=new r,"withCredentials"in r&&(n=r,n.open("POST",st,!0),n.setRequestHeader("Content-Type","text/plain"));return n?(n.onreadystatechange=function(){n.readyState==4&&(t&&t(),n=null)},n.send(e),!0):!1},e.Ob=function(t,n){var i=q[d];if(i.body){t=r(t);try{var s=i.createElement('<iframe name="'+t+'"></iframe>')}catch(o){s=i.createElement("iframe"),s.name=t}s.height="0",s.width="0",s.style.display="none",s.style.visibility="hidden";var u=i[m],u=u[g]+"//"+u.host+"/favicon.ico",u=it+"u/post_iframe.html#"+r(u),a=function(){s.src="",s.parentNode&&s.parentNode.removeChild(s)};U(q[h],"beforeunload",a);var f=!1,l=0,c=function(){if(!f){try{if(l>9||s.contentWindow[m].host==i[m].host){f=!0,a();var e=q[h],t="beforeunload",r=a;e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent&&e.detachEvent("on"+t,r),n&&n();return}}catch(o){}l++,q.setTimeout(c,200)}};U(s,"load",c),i.body.appendChild(s),s.src=u}else q.setTimeout(function(){e.Ob(t,n)},100)}},ut=function(e){var t=this,n=e,r=new rt(n),i=null,o=!bt.pb(),u=function(){};t.Uc=function(){return"https:"==q[d][m][g]?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif"},t.A=function(e,a,f,c,h,p){i||(i=new ot);var g=n.B,y=q[d][m];r.Z(f);var b=r.z()[v](".");if(b[1]<500||c){if(h){var E=(new Date)[l](),S;S=(E-b[3])*(n.Ac/1e3),S>=1&&(b[2]=s.min(s.floor(b[2]*1+S),n.zc),b[3]=E)}if(c||!h||b[2]>=1){!c&&h&&(b[2]=b[2]*1-1),c=b[1]*1+1,b[1]=c,h="utmwv="+T,E="&utms="+c,S="&utmn="+Y(),c=h+"e"+E+S,e=h+E+S+(W(y.hostname)?"":"&utmhn="+$(y.hostname))+(n.L==100?"":"&utmsp="+$(n.L))+e;if(0==g||2==g)y=2==g?u:p||u,o&&i.Bb(n.ga,e,c,y,!0);if(1==g||2==g)a="&utmac="+a,c+=a,e+=a+"&utmcc="+t.Tc(f),bt.Ab&&(f="&aip=1",c+=f,e+=f),e+="&utmu="+F.Sc(),o&&i.Bb(t.Uc(),e,c,p)}}r.$(b[w](".")),r.aa()},t.Tc=function(e){for(var t=[],n=[A,P,D,H],i=r.g(),s,o=0;o<n[p];o++)if(s=X(i,n[o]+e,";"),!W(s)){if(n[o]==D){s=s[v](e+".")[1][v]("|")[0];if(W(s))continue;s=e+"."+s}Q(t,n[o]+s+";")}return $(t[w]("+"))}},at=function(){var e=this;e.N=[],e.Va=function(t){for(var n,r=e.N,i=0;i<r[p];i++)n=t==r[i].q?r[i]:n;return n},e.Xb=function(t,r,i,s,o,u,a,f){var l=e.Va(t);return n==l?(l=new at.Wc(t,r,i,s,o,u,a,f),Q(e.N,l)):(l.tb=r,l.zb=i,l.yb=s,l.wb=o,l.ub=u,l.xb=a,l.vb=f),l}};at.Qc=function(e,t,n,r,i,s){var o=this;o.Fb=e,o.va=t,o.n=n,o.Cb=r,o.Db=i,o.Eb=s,o.ha=function(){return"&"+["utmt=item","tid="+$(o.Fb),"ipc="+$(o.va),"ipn="+$(o.n),"iva="+$(o.Cb),"ipr="+$(o.Db),"iqt="+$(o.Eb)][w]("&utm")}},at.Wc=function(e,t,r,i,s,o,u,a){var f=this;f.q=e,f.tb=t,f.zb=r,f.yb=i,f.wb=s,f.ub=o,f.xb=u,f.vb=a,f.M=[],f.Vb=function(e,t,r,i,s){var o=f.Rc(e),u=f.q;n==o?Q(f.M,new at.Qc(u,e,t,r,i,s)):(o.Fb=u,o.va=e,o.n=t,o.Cb=r,o.Db=i,o.Eb=s)},f.Rc=function(e){for(var t,n=f.M,r=0;r<n[p];r++)t=e==n[r].va?n[r]:t;return t},f.ha=function(){return"&"+["utmt=tran","id="+$(f.q),"st="+$(f.tb),"to="+$(f.zb),"tx="+$(f.yb),"sp="+$(f.wb),"ci="+$(f.ub),"rg="+$(f.xb),"co="+$(f.vb)][w]("&utmt")}};var ft=function(e){function t(){var e,t,r;t="ShockwaveFlash";var s="$version",o=q[h].navigator;if((o=o?o.plugins:n)&&o[p]>0)for(e=0;e<o[p]&&!r;e++)t=o[e],K(t.name,"Shockwave Flash")&&(r=t.description[v]("Shockwave Flash ")[1]);else{t=t+"."+t;try{e=new ActiveXObject(t+".7"),r=e.GetVariable(s)}catch(u){}if(!r)try{e=new ActiveXObject(t+".6"),r="WIN 6,0,21,0",e.we="always",r=e.GetVariable(s)}catch(a){}if(!r)try{e=new ActiveXObject(t),r=e.GetVariable(s)}catch(f){}r&&(r=r[v](" ")[1][v](","),r=r[0]+"."+r[1]+" r"+r[2])}return r?r:i}var r=this,i="-",s=q[h].screen,o=q[h].navigator;r.Nb=s?s.width+"x"+s.height:i,r.Mb=s?s.colorDepth+"-bit":i,r.cd=$(q[d].characterSet?q[d].characterSet:q[d].charset?q[d].charset:i),r.Lb=(o&&o.language?o.language:o&&o.browserLanguage?o.browserLanguage:i)[E](),r.Kb=o&&o.javaEnabled()?1:0,r.dd=e?t():i,r.dc=function(){return k+"utm"+["cs="+$(r.cd),"sr="+r.Nb,"sc="+r.Mb,"ul="+r.Lb,"je="+r.Kb,"fl="+$(r.dd)][w]("&utm")},r.cc=function(){for(var e=q[h].navigator,t=q[h].history[p],e=e.appName+e.version+r.Lb+e.platform+e.userAgent+r.Kb+r.Nb+r.Mb+(q[d][u]?q[d][u]:"")+(q[d].referrer?q[d].referrer:""),n=e[p];t>0;)e+=t--^n++;return G(e)}},lt=function(e,t,r,i){function s(e){var t="",t=e[v]("://")[1][E]();return K(t,"/")&&(t=t[v]("/")[0]),t}var o=i,u=this;u.a=e,u.ob=t,u.m=r,u.mb=function(e){var t=u.ua();return new lt.v(X(e,o.Ea+L,k),X(e,o.Ha+L,k),X(e,o.Ja+L,k),u.R(e,o.Ca,"(not set)"),u.R(e,o.Fa,"(not set)"),u.R(e,o.Ia,t&&!W(t.G)?J(t.G):n),u.R(e,o.Da,n),X(e,o.vc+L,k))},u.nb=function(e){var t=s(e),n;n=e;var r="";return n=n[v]("://")[1][E](),K(n,"/")&&(n=n[v]("/")[1],K(n,"?")&&(r=n[v]("?")[0])),n=r,K(t,"google")&&(e=e[v]("?")[w](k),K(e,k+o.xc+L)&&n==o.wc)?!0:!1},u.ua=function(){var e,t=u.ob,r,i=o.J;if(!W(t)&&"0"!=t&&K(t,"://")&&!u.nb(t)){e=s(t);for(var a=0;a<i[p];a++)if(r=i[a],K(e,r.ib[E]())&&(t=t[v]("?")[w](k),K(t,k+r.jb+L)))return e=t[v](k+r.jb+L)[1],K(e,k)&&(e=e[v](k)[0]),new lt.v(n,r.ib,n,"(organic)","organic",e,n,n)}},u.R=function(e,t,n){return e=X(e,t+L,k),n=W(e)?W(n)?"-":n:J(e)},u.Bc=function(e){var t=o.V,n=!1;if(e&&"organic"==e.P)for(var e=J(e.G)[E](),r=0;r<t[p];r++)n=n||t[r][E]()==e;return n},u.lb=function(){var e="",t="",e=u.ob;if(!W(e)&&"0"!=e&&K(e,"://")&&!u.nb(e))return e=e[v]("://")[1],K(e,"/")&&(t=e[b](e[f]("/")),t=t[v]("?")[0],e=e[v]("/")[0][E]()),0==e[f]("www.")&&(e=e[b](4)),new lt.v(n,e,n,"(referral)","referral",n,t,n)},u.kb=function(e){var t="";return o.U&&(t=e&&e.hash?e[y][b](e[y][f]("#")):"",t=""!=t?t+k:t),t+=e.search,t},u.ta=function(){return new lt.v(n,"(direct)",n,"(direct)","(none)",n,n,n)},u.Cc=function(e){var t=!1,n=o.W;if(e&&"referral"==e.P)for(var e=$(e.Q)[E](),r=0;r<n[p];r++)t=t||K(e,n[r][E]());return t},u.h=function(e){return n!=e&&e.fb()},u.te=function(e){var e=X(e,P+u.a+".",";"),t=e[v]("."),e=new lt.v;return e.gb(t.slice(4)[w](".")),u.h(e)?(t=q[d][m],t=u.kb(t),t=u.mb(t),u.h(t)||(t=u.ua(),u.h(t)||(t=u.lb())),u.h(t)&&e.H()[E]()!=t.H()[E]()):!0},u.Pb=function(e,t){if(o.Ka){var n="",r="-",i,s=0,a,f,l=u.a;if(e){f=e.g(),n=u.kb(q[d][m]);if(o.w&&e.Ba()&&(r=J(e.qa()),!W(r)&&!K(r,";"))){e.ra(r),e.sa();return}r=X(f,P+l+".",";"),i=u.mb(n);if(u.h(i)&&(n=X(n,o.Ga+L,k),"1"==n&&!W(r)))return;if(!u.h(i)){i=u.ua(),n=u.Bc(i);if(!W(r)&&n)return;n&&(i=u.ta())}if(!u.h(i)&&t){i=u.lb(),n=u.Cc(i);if(!W(r)&&n)return;n&&(i=u.ta())}u.h(i)||W(r)&&t&&(i=u.ta()),u.h(i)&&(W(r)||(s=r[v]("."),a=new lt.v,a.gb(s.slice(4)[w](".")),a=a.H()[E]()==i.H()[E](),s=s[3]*1),!a||t)&&(f=X(f,A+l+".",";"),a=f.lastIndexOf("."),f=a>9?f[b](a+1)*1:0,s++,f=0==f?1:f,e.ra([l,u.m,f,s,i.H()][w](".")),e.sa())}}}};lt.v=function(e,t,n,r,i,s,o,u){var a=this;a.q=e,a.Q=t,a.ya=n,a.n=r,a.P=i,a.G=s,a.Gb=o,a.xa=u,a.H=function(){var e=[],t=[["cid",a.q],["csr",a.Q],["gclid",a.ya],["ccn",a.n],["cmd",a.P],["ctr",a.G],["cct",a.Gb],["dclid",a.xa]],n,r;if(a.fb())for(n=0;n<t[p];n++)W(t[n][1])||(r=t[n][1][v]("+")[w]("%20"),r=r[v](" ")[w]("%20"),Q(e,"utm"+t[n][0]+L+r));return q.qb(e[w]("|"))},a.fb=function(){return!(W(a.q)&&W(a.Q)&&W(a.ya)&&W(a.xa))},a.gb=function(e){var t=function(t){return J(X(e,"utm"+t+L,"|"))};a.q=t("cid"),a.Q=t("csr"),a.ya=t("gclid"),a.n=t("ccn"),a.P=t("cmd"),a.G=t("ctr"),a.Gb=t("cct"),a.xa=t("dclid")}};var ct=function(e,t,n,r){var i=this,s=t,o=L,u=e,a=r;i.S=n,i.wa="",i.r={},i.$b=function(){var e;e=X(i.S.g(),D+s+".",";")[v](s+".")[1];if(!W(e)){e=e[v]("|");var t=i.r,n=e[1],r;if(!W(n))for(var n=n[v](","),u=0;u<n[p];u++)r=n[u],W(r)||(r=r[v](o),r[p]==4&&(t[r[0]]=[J(r[1]),J(r[2]),1]));i.wa=J(e[0]),i.T()}},i.T=function(){i.Pc();var e=$(i.wa),t,n,r="";for(t in i.r)(n=i.r[t])&&1===n[2]&&(r+=t+o+$(n[0])+o+$(n[1])+o+1+",");W(r)||(e+="|"+r),W(e)?i.S.yc():(i.S.X(s+"."+e),i.S.Y())},i.bc=function(e){i.wa=e,i.T()},i.ac=function(e,t,n,r){1!=r&&2!=r&&3!=r&&(r=3);var s=!1;if(t&&n&&e>0&&e<=u.Ta){var o=$(t),a=$(n);o[p]+a[p]<=64&&(i.r[e]=[t,n,r],i.T(),s=!0)}return s},i.Zb=function(e){if((e=i.r[e])&&1===e[2])return e[1]},i.Yb=function(e){var t=i.r;t[e]&&(delete t[e],i.T())},i.Pc=function(){a.t(8),a.t(9),a.t(11);var e=i.r,t,n;for(n in e)if(t=e[n])a.j(8,n,t[0]),a.j(9,n,t[1]),(t=t[2])&&3!=t&&a.j(11,n,""+t)}},ht=function(){function e(e,t,r,i){n==f[e]&&(f[e]={}),n==f[e][t]&&(f[e][t]=[]),f[e][t][r]=i}function t(e,t,r){if(n!=f[e]&&n!=f[e][t])return f[e][t][r]}function r(e,t){if(n!=f[e]&&n!=f[e][t]){f[e][t]=n;var r=!0,i;for(i=0;i<d[p];i++)if(n!=f[e][d[i]]){r=!1;break}r&&(f[e]=n)}}function i(e){var t="",r=!1,i,s;for(i=0;i<d[p];i++)if(s=e[d[i]],n!=s){r&&(t+=d[i]);for(var r=[],o=n,u=n,u=0;u<s[p];u++)if(n!=s[u]){o="",u!=S&&n==s[u-1]&&(o+=u[c]()+y);var f;f=s[u];for(var l="",h=n,b=n,x=n,h=0;h<f[p];h++)b=f[a](h),x=E[b],l+=n!=x?x:b;f=l,o+=f,Q(r,o)}s=v+r[w](g)+m,t+=s,r=!1}else r=!0;return t}var o=this,u=R(o),f={},l="k",h="v",d=[l,h],v="(",m=")",g="*",y="!",b="'",E={};E[b]="'0",E[m]="'1",E[g]="'2",E[y]="'3";var S=1;o.Yc=function(e){return n!=f[e]},o.C=function(){var e="",t;for(t in f)n!=f[t]&&(e+=t[c]()+i(f[t]));return e},o.hc=function(e){if(e==n)return o.C();var t=e.C(),r;for(r in f)n!=f[r]&&!e.Yc(r)&&(t+=r[c]()+i(f[r]));return t},o.j=u("_setKey",89,function(t,n,r){return typeof r!="string"?!1:(e(t,l,n,r),!0)}),o.ja=u("_setValue",90,function(t,r,i){return(typeof i=="number"||n!=Number&&i instanceof Number)&&s.round(i)==i&&i!=NaN&&i!=Infinity?(e(t,h,r,i[c]()),!0):!1}),o.fc=u("_getKey",87,function(e,n){return t(e,l,n)}),o.gc=u("_getValue",88,function(e,n){return t(e,h,n)}),o.t=u("_clearKey",85,function(e){r(e,l)}),o.ia=u("_clearValue",86,function(e){r(e,h)})},pt=function(e,t){var n=this,r=R(n);n.ze=t,n.gd=e,n.Za=r("_trackEvent",91,function(e,r,i){return t.Za(n.gd,e,r,i)})},dt=function(e,t){var r=this,i=q.Gc(),o=q.Hc(),u=10;r.rb=new ht,r.Kc=function(){var e,t="timing",r="onloadT";return i&&i[r]!=n&&i.isValidLoadTime?e=i[r]:o&&o[t]&&(e=o[t].loadEventStart-o[t].fetchStart),e},r.Mc=function(){return e.D()&&e.Xa()%100<u},r.Lc=function(){var n="&utmt=event&utme="+$(r.rb.C())+e.na();t.A(n,e.p,e.a,!1,!0)},r.Jc=function(e){return e=s.min(s.floor(e/100),5e3),e>0?e+"00":"0"},r.sb=function(){var e=r.Kc();if(e==n||isNaN(e))return!1;if(e<=0)return!0;if(e>2147483648)return!1;var t=r.rb;t.t(14),t.ia(14);var s=r.Jc(e);return t.j(14,1,s)&&t.ja(14,1,e)&&r.Lc(),i&&i.isValidLoadTime!=n&&i.setPageReadyTime(),!1},r.Wa=function(){return r.Mc()?q.Ic()?(r.sb()&&U(q[h],"load",r.sb,!1),!0):!1:!1}},vt=function(){};vt.Zc=function(e){var t="gaso=",n=q[d][m].hash;return e=n&&1==n[f](t)?X(n,t,k):(n=q[h].name)&&0<=n[f](t)?X(n,t,k):X(e.g(),B,";"),e},vt.ad=function(e,t){var n=(t||"www")+".google.com",n="https://"+n+"/analytics/reporting/overlay_js?gaso="+e+k+Y(),r="_gasojs",i=q[d].createElement("script");i.type="text/javascript",i.src=n,r&&(i.id=r),(q[d].getElementsByTagName("head")[0]||q[d].getElementsByTagName("body")[0]).appendChild(i)},vt.load=function(e,t){if(!vt.$c){var n=vt.Zc(t),r=n&&n.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);r&&(t.Dc(n),t.Ec(),bt._gasoDomain=e.b,bt._gasoCPath=e.f,vt.ad(r[2],r[1])),vt.$c=!0}};var mt=function(r,o,u){function c(){if("auto"==D.b){var e=q[d].domain;"www."==e[b](0,4)&&(e=e[b](4)),D.b=e}D.b=D.b[E]()}function S(){c();var e=D.b,t=e[f]("www.google.")*e[f](".google.")*e[f]("google.");return t||"/"!=D.f||e[f]("google.org")>-1}function x(e,t,n){return W(e)||W(t)||W(n)?"-":(e=X(e,A+C.a+".",t),W(e)||(e=e[v]("."),e[5]=""+(e[5]?e[5]*1+1:1),e[3]=e[4],e[4]=n,e=e[w](".")),e)}function N(){return"file:"!=q[d][m][g]&&S()}var C=this,L=R(C),_=n,D=new tt,P=!1,H=n;C.n=r,C.m=s.round((new Date)[l]()/1e3),C.p=o||"UA-XXXXX-X",C.ab=q[d].referrer,C.oa=n,C.d=n,C.F=!1,C.O=n,C.e=n,C.bb=n,C.pa=n,C.a=n,C.k=n,D.o=u?$(u):n,C.eb=!1,C.mc=function(){return Y()^C.O.cc()&2147483647},C.lc=function(){return!D.b||""==D.b||"none"==D.b?(D.b="",1):(c(),D.Ua?G(D.b):1)},C.kc=function(e,t){if(W(e))e="-";else{t+=D.f&&"/"!=D.f?D.f:"";var n=e[f](t),e=n>=0&&n<=8?"0":"["==e[a](0)&&"]"==e[a](e[p]-1)?"-":e}return e},C.na=function(e){var t="";t+=D.ka?C.O.dc():"",t+=D.la&&!W(q[d].title)?"&utmdt="+$(q[d].title):"";var n;return n=q.Ya(!0),n.hid||(n.hid=Y()),n=n.hid,t+="&utmhid="+n+"&utmr="+$(i(C.oa))+"&utmp="+$(C.pc(e)),t},C.pc=function(t){var r=q[d][m];return t&&e(13),t=n!=t&&""!=t?$(t,!0):$(r.pathname+r.search,!0)},C.uc=function(e){if(C.D()){var t="";C.e!=n&&C.e.C()[p]>0&&(t+="&utme="+$(C.e.C())),t+=C.na(e),_.A(t,C.p,C.a)}},C.jc=function(){var e=new rt(D);return e.Z(C.a)?e.Tb():n},C.cb=L("_getLinkerUrl",52,function(e,t){var n=e[v]("#"),r=e,i=C.jc();if(i)if(t&&1>=n[p])r+="#"+i;else if(!t||1>=n[p])1>=n[p]?r+=(K(e,"?")?k:"?")+i:r=n[0]+(K(e,"?")?k:"?")+i+"#"+n[1];return r}),C.nc=function(){var e=C.m,t=C.k,r=t.g(),s=C.a+"",o=q.Ya(),u,a=K(r,A+s+"."),l=K(r,O+s),c=K(r,M+s),p,g=[],E="",S=!1,r=W(r)?"":r;if(D.w&&!C.eb){u=q[d][m]&&q[d][m].hash?q[d][m][y][b](q[d][m][y][f]("#")):"",D.U&&!W(u)&&(E=u+k),E+=q[d][m].search,!W(E)&&K(E,A)&&(t.Sb(E),t.Ba()||t.Qb(),p=t.ba(),C.eb=!0),u=t.ea;var T=t.Pa,N=t.Sa;W(u())||(T(J(u())),K(u(),";")||N()),u=t.da,T=t.X,N=t.Y,W(u())||(T(u()),K(u(),";")||N())}W(p)?a?(p=!l||!c)?(p=x(r,";",i(e)),C.F=!0):(p=X(r,A+s+".",";"),g=X(r,O+s,";")[v](".")):(p=[s,C.mc(),e,e,e,1][w]("."),S=C.F=!0):W(t.z())||W(t.ca())?(p=x(E,k,i(e)),C.F=!0):(g=t.z()[v]("."),s=g[0]),p=p[v]("."),q[h]&&o&&o.dh==s&&!D.o&&(p[4]=o.sid?o.sid:p[4],S&&(p[3]=o.sid?o.sid:p[4],o.vid&&(e=o.vid[v]("."),p[1]=e[0],p[2]=e[1]))),t.Na(p[w](".")),g[0]=s,g[1]=g[1]?g[1]:0,g[2]=n!=g[2]?g[2]:D.Wb,g[3]=g[3]?g[3]:p[4],t.$(g[w](".")),t.Oa(s),W(t.Rb())||t.fa(t.K()),t.Qa(),t.aa(),t.Ra()},C.oc=function(){_=new ut(D)},C.getName=L("_getName",58,function(){return C.n}),C.c=L("_initData",2,function(){var e;P||(C.O||(C.O=new ft(D.ma)),C.a=C.lc(),C.k=new rt(D),C.e=new ht,H=new ct(D,i(C.a),C.k,C.e),C.oc()),N()&&(P||(C.oa=C.kc(C.ab,q[d].domain),e=new lt(i(C.a),C.oa,C.m,D)),C.nc(e),H.$b()),P||(N()&&e.Pb(C.k,C.F),C.bb=new ht,vt.load(D,C.k),P=!0)}),C.Xa=L("_visitCode",54,function(){C.c();var e=X(C.k.g(),A+C.a+".",";"),e=e[v](".");return e[p]<4?"":e[1]}),C.qd=L("_cookiePathCopy",30,function(e){C.c(),C.k&&C.k.Ub(C.a,e)}),C.D=function(){return C.Xa()%1e4<D.L*100},C.re=L("_trackPageview",1,function(e){N()&&(C.c(),C.uc(e),C.F=!1)}),C.se=L("_trackTrans",18,function(){var e=C.a,t=[],n,r,i;C.c();if(C.d&&C.D()){for(n=0;n<C.d.N[p];n++){r=C.d.N[n],Q(t,r.ha());for(i=0;i<r.M[p];i++)Q(t,r.M[i].ha())}for(n=0;n<t[p];n++)_.A(t[n],C.p,e,!0)}}),C.me=L("_setTrans",20,function(){var e,r,i,s;e=q[d].getElementById?q[d].getElementById("utmtrans"):q[d].utmform&&q[d].utmform.utmtrans?q[d].utmform.utmtrans:n,C.c();if(e&&e.value){C.d=new at,s=e.value[v]("UTM:"),D.u=!D.u||""==D.u?"|":D.u;for(e=0;e<s[p];e++){s[e]=t(s[e]),r=s[e][v](D.u);for(i=0;i<r[p];i++)r[i]=t(r[i]);"T"==r[0]?C.$a(r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]):"I"==r[0]&&C.ic(r[1],r[2],r[3],r[4],r[5],r[6])}}}),C.$a=L("_addTrans",21,function(e,t,n,r,i,s,o,u){return C.d=C.d?C.d:new at,C.d.Xb(e,t,n,r,i,s,o,u)}),C.ic=L("_addItem",19,function(e,t,n,r,i,s){var o;C.d=C.d?C.d:new at,(o=C.d.Va(e))||(o=C.$a(e,"","","","","","","")),o.Vb(t,n,r,i,s)}),C.oe=L("_setVar",22,function(e){e&&""!=e&&S()&&(C.c(),H.bc(e),C.D()&&_.A("&utmt=var",C.p,C.a))}),C.Yd=L("_setCustomVar",10,function(e,t,n,r){return C.c(),H.ac(e,t,n,r)}),C.td=L("_deleteCustomVar",35,function(e){C.c(),H.Yb(e)}),C.Cd=L("_getVisitorCustomVar",50,function(e){return C.c(),H.Zb(e)}),C.fe=L("_setMaxCustomVariables",71,function(e){D.Ta=e}),C.link=L("_link",101,function(e,t){D.w&&e&&(C.c(),q.ec(C.cb(e,t)))}),C.Fd=L("_linkByPost",102,function(e,t){D.w&&e&&e.action&&(C.c(),e.action=C.cb(e.action,t))}),C.pe=L("_setXKey",83,function(e,t,n){C.e.j(e,t,n)}),C.qe=L("_setXValue",84,function(e,t,n){C.e.ja(e,t,n)}),C.Dd=L("_getXKey",76,function(e,t){return C.e.fc(e,t)}),C.Ed=L("_getXValue",77,function(e,t){return C.e.gc(e,t)}),C.od=L("_clearXKey",72,function(e){C.e.t(e)}),C.pd=L("_clearXValue",73,function(e){C.e.ia(e)}),C.sd=L("_createXObj",75,function(){return C.c(),new ht}),C.qc=L("_sendXEvent",78,function(e){var t="";C.c(),C.D()&&(t+="&utmt=event&utme="+$(C.e.hc(e))+C.na(),_.A(t,C.p,C.a,!1,!0))}),C.rd=L("_createEventTracker",74,function(e){return C.c(),new pt(e,C)}),C.Za=L("_trackEvent",4,function(e,t,r,i){C.c();var s=C.bb;return n!=e&&n!=t&&""!=e&&""!=t?(s.t(5),s.ia(5),(e=s.j(5,1,e)&&s.j(5,2,t)&&(n==r||s.j(5,3,r))&&(n==i||s.ja(5,1,i)))&&C.qc(s)):e=!1,e}),C.Wa=L("_trackPageLoadTime",100,function(){return C.c(),C.pa||(C.pa=new dt(C,_)),C.pa.Wa()}),C.wd=function(){return D},C.ae=L("_setDomainName",6,function(e){D.b=e}),C.kd=L("_addOrganic",14,function(e,t,n){D.J.splice(n?0:D.J[p],0,new et(e,t))}),C.nd=L("_clearOrganic",70,function(){D.J=[]}),C.hd=L("_addIgnoredOrganic",15,function(e){Q(D.V,e)}),C.ld=L("_clearIgnoredOrganic",97,function(){D.V=[]}),C.jd=L("_addIgnoredRef",31,function(e){Q(D.W,e)}),C.md=L("_clearIgnoredRef",32,function(){D.W=[]}),C.Id=L("_setAllowHash",8,function(e){D.Ua=e?1:0}),C.Td=L("_setCampaignTrack",36,function(e){D.Ka=e?1:0}),C.Ud=L("_setClientInfo",66,function(e){D.ka=e?1:0}),C.vd=L("_getClientInfo",53,function(){return D.ka}),C.Vd=L("_setCookiePath",9,function(e){D.f=e}),C.ne=L("_setTransactionDelim",82,function(e){D.u=e}),C.Xd=L("_setCookieTimeout",25,function(e){C.rc(e*1e3)}),C.rc=L("_setCampaignCookieTimeout",29,function(e){D.La=e}),C.Zd=L("_setDetectFlash",61,function(e){D.ma=e?1:0}),C.xd=L("_getDetectFlash",65,function(){return D.ma}),C.$d=L("_setDetectTitle",62,function(e){D.la=e?1:0}),C.yd=L("_getDetectTitle",56,function(){return D.la}),C.ce=L("_setLocalGifPath",46,function(e){D.ga=e}),C.zd=L("_getLocalGifPath",57,function(){return D.ga}),C.ee=L("_setLocalServerMode",92,function(){D.B=0}),C.ie=L("_setRemoteServerMode",63,function(){D.B=1}),C.de=L("_setLocalRemoteServerMode",47,function(){D.B=2}),C.Ad=L("_getServiceMode",59,function(){return D.B}),C.je=L("_setSampleRate",45,function(e){D.L=e}),C.ke=L("_setSessionTimeout",27,function(e){C.sc(e*1e3)}),C.sc=L("_setSessionCookieTimeout",26,function(e){D.Ma=e}),C.Jd=L("_setAllowLinker",11,function(e){D.w=e?1:0}),C.Hd=L("_setAllowAnchor",7,function(e){D.U=e?1:0}),C.Qd=L("_setCampNameKey",41,function(e){D.Ca=e}),C.Md=L("_setCampContentKey",38,function(e){D.Da=e}),C.Nd=L("_setCampIdKey",39,function(e){D.Ea=e}),C.Od=L("_setCampMediumKey",40,function(e){D.Fa=e}),C.Pd=L("_setCampNOKey",42,function(e){D.Ga=e}),C.Rd=L("_setCampSourceKey",43,function(e){D.Ha=e}),C.Sd=L("_setCampTermKey",44,function(e){D.Ia=e}),C.Ld=L("_setCampCIdKey",37,function(e){D.Ja=e}),C.ud=L("_getAccount",64,function(){return C.p}),C.Gd=L("_setAccount",3,function(e){C.p=e}),C.ge=L("_setNamespace",48,function(e){D.o=e?$(e):n}),C.Bd=L("_getVersion",60,function(){return T}),C.Kd=L("_setAutoTrackOutbound",79,Z),C.le=L("_setTrackOutboundSubdomains",81,Z),C.be=L("_setHrefExamineLimit",80,Z),C.he=L("_setReferrerOverride",49,function(e){C.ab=e}),C.Wd=L("_setCookiePersistence",24,function(e){C.tc(e)}),C.tc=L("_setVisitorCookieTimeout",28,function(e){D.s=e})},gt=function(){var t=this,r=R(t);t.Ab=!1,t.Ib={},t.bd=0,t._gasoDomain=n,t._gasoCPath=n,t.ve=r("_getTracker",0,function(e,r){return t.za(e,n,r)}),t.za=r("_createTracker",55,function(t,r,i){return r&&e(23),i&&e(67),r==n&&(r="~"+bt.bd++),bt.Ib[r]=new mt(r,t,i)}),t.Hb=r("_getTrackerByName",51,function(e){return e=e||"",bt.Ib[e]||bt.za(n,e)}),t.pb=function(){var e=q.Vc();return e&&e[C]&&e[C]()},t.ue=r("_anonymizeIp",16,function(){t.Ab=!0})},yt=function(){var t=this,n=R(t);t.xe=n("_createAsyncTracker",33,function(e,t){return bt.za(e,t||"")}),t.ye=n("_getAsyncTracker",34,function(e){return bt.Hb(e)}),t.push=function(){e(5);for(var t=arguments,n=0,r=0;r<t[p];r++)try{if(typeof t[r]=="function")t[r]();else{var i="",s=t[r][0],o=s.lastIndexOf(".");o>0&&(i=s[b](0,o),s=s[b](o+1));var u=i==S?bt:i==x?Et:bt.Hb(i);u[s].apply(u,t[r].slice(1))}}catch(a){n++}return n}},bt=new gt,wt=q[h][S];wt&&typeof wt._getTracker=="function"?bt=wt:q[h][S]=bt;var Et=new yt;e:{var St=q[h][x],xt=!1;if(St&&typeof St[o]=="function"&&(xt=z(St),!xt))break e;q[h][x]=Et,xt&&Et[o].apply(Et,St)}})();