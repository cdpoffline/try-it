// Automatically generated file.  Do not edit!
'use strict';var f=this;
function g(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a){var b=l;function c(){}c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.o=function(a,c,h){for(var x=Array(arguments.length-2),q=2;q<arguments.length;q++)x[q-2]=arguments[q];return b.prototype[c].apply(a,x)}};var m=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function n(a,b){return a<b?-1:a>b?1:0};var p=Array.prototype,aa=p.indexOf?function(a,b,c){return p.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function ba(a,b,c){return 2>=arguments.length?p.slice.call(a,b):p.slice.call(a,b,c)};function r(a){var b=arguments.length;if(1==b&&"array"==g(arguments[0]))return r.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};r("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var v={u:!0};function l(){throw Error("Do not instantiate directly");}l.prototype.toString=function(){return this.content};var w;a:{var y=f.navigator;if(y){var z=y.userAgent;if(z){w=z;break a}}w=""};function A(){return-1!=w.indexOf("Edge")};var ca=-1!=w.indexOf("Opera")||-1!=w.indexOf("OPR"),B=-1!=w.indexOf("Edge")||-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),C=-1!=w.indexOf("Gecko")&&!(-1!=w.toLowerCase().indexOf("webkit")&&!A())&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"))&&!A(),da=-1!=w.toLowerCase().indexOf("webkit")&&!A();function ea(){var a=w;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(B&&A())return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(da)return/WebKit\/(\S+)/.exec(a)}
function D(){var a=f.document;return a?a.documentMode:void 0}var E=function(){if(ca&&f.opera){var a=f.opera.version;return"function"==g(a)?a():a}var a="",b=ea();b&&(a=b?b[1]:"");return B&&!A()&&(b=D(),b>parseFloat(a))?String(b):a}(),F={};
function G(a){if(!F[a]){for(var b=0,c=m(String(E)).split("."),d=m(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var x=c[h]||"",q=d[h]||"",ia=/(\d*)(\D*)/g,ja=/(\d*)(\D*)/g;do{var t=ia.exec(x)||["","",""],u=ja.exec(q)||["","",""];if(0==t[0].length&&0==u[0].length)break;b=n(0==t[1].length?0:parseInt(t[1],10),0==u[1].length?0:parseInt(u[1],10))||n(0==t[2].length,0==u[2].length)||n(t[2],u[2])}while(0==b)}F[a]=0<=b}}
var H=f.document,I=D(),fa=!H||!B||!I&&A()?void 0:I||("CSS1Compat"==H.compatMode?parseInt(E,10):5);var J;if(!(J=!C&&!B)){var K;if(K=B)K=B&&(A()||9<=fa);J=K}J||C&&G("1.9.1");B&&G("9");B&&G(8);function L(){l.call(this)}k(L);L.prototype.h=v;function M(){l.call(this)}k(M);M.prototype.h={t:!0};function N(){l.call(this)}k(N);N.prototype.h={}.m;function O(){l.call(this)}k(O);O.prototype.h={v:!0};function P(){l.call(this)}k(P);P.prototype.h={s:!0};function Q(){l.call(this)}k(Q);Q.prototype.h={p:!0};function R(a){return a&&a.h&&a.h===v?a.content:String(a).replace(ga,ha)}
var ka={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function ha(a){return ka[a]}var ga=/[\x00\x22\x26\x27\x3c\x3e]/g;function la(){var a={lang:S,j:T,k:-1!=U.indexOf(S)};return'<div style="display: none"><span id="title">Blockly Games</span><span id="Index_clear">Delete all your solutions?</span></div><div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle">Games for tomorrow\'s programmers. &nbsp;'+(a.j?'<a href="about.html?lang='+R(a.lang)+'">':'<a href="about?lang='+R(a.lang)+'">')+'More info...</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-80,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x=80 y=60><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"'+
(a.k?'transform="translate(100) scale(-1, 1)"':"")+"/></svg>"+V({g:"puzzle",x:10,y:15,i:"\u0411\u0430\u0448 \u043a\u0430\u0442\u044b\u0440\u043c\u0430."},a)+V({g:"maze",x:16,y:47,i:"Maze"},a)+V({g:"bird",x:29,y:75,i:"Bird"},a)+V({g:"turtle",x:49,y:72,i:"Turtle"},a)+V({g:"movie",x:64,y:48,i:"Movie"},a)+V({g:"pond-basic",x:83,y:53,i:"Pond"},a)+V({g:"pond-advanced",x:90,y:85,i:"JS Pond"},a)+'</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">Want to start over?<button class="secondary" id="clearData">Clear data</span></button></p>'}
function V(a,b){return'<svg height="150" width="160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(b.k?'x="'+R(100-a.x)+'%"':'x="'+R(a.x)+'%"')+'y="'+R(a.y)+'%"><path d="M 41.11,98.89 A 55 55 0 1 1 118.89,98.89" class="gaugeBack" id="back-'+R(a.g)+'" /><g class="icon" id="icon-'+R(a.g)+'"><circle cx=80 cy=60 r=50 class="iconBack" /><image xlink:href="index/'+R(a.g)+'.png" height="100" width="100" x=30 y=10 />'+(b.j?'<a xlink:href="'+R(a.g)+".html?lang="+
R(b.lang)+'">':'<a xlink:href="'+R(a.g)+"?lang="+R(b.lang)+'">')+'<circle cx=80 cy=60 r=50 class="iconBorder" /><path d="M 21.11,98.89 A 55 55 0 1 1 21.11,98.89" class="gaugeFront" id="gauge-'+R(a.g)+'" /><text x="80" y="135">'+R(a.i)+"</text></a></g></svg>"};function ma(a,b){var c;c=a.className;for(var d=c="string"==typeof c&&c.match(/\S+/g)||[],e=ba(arguments,1),h=0;h<e.length;h++)0<=aa(d,e[h])||d.push(e[h]);a.className=c.join(" ")};var na={},oa={ace:"\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",af:"Afrikaans",ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",az:"Az\u0259rbaycanca","be-tarask":"Tara\u0161kievica",br:"Brezhoneg",ca:"Catal\u00e0",cdo:"\u95a9\u6771\u8a9e",cs:"\u010cesky",da:"Dansk",de:"Deutsch",el:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",en:"English",es:"Espa\u00f1ol",eu:"Euskara",fa:"\u0641\u0627\u0631\u0633\u06cc",fi:"Suomi",fo:"F\u00f8royskt",fr:"Fran\u00e7ais",frr:"Frasch",gl:"Galego",hak:"\u5ba2\u5bb6\u8a71",
he:"\u05e2\u05d1\u05e8\u05d9\u05ea",hi:"\u0939\u093f\u0928\u094d\u0926\u0940",hrx:"Hunsrik",hu:"Magyar",ia:"Interlingua",id:"Bahasa Indonesia",is:"\u00cdslenska",it:"Italiano",ja:"\u65e5\u672c\u8a9e",ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",km:"\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",ko:"\ud55c\uad6d\uc5b4",ksh:"Ripoar\u0117sch",ky:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",la:"Latine",lb:"L\u00ebtzebuergesch",lt:"Lietuvi\u0173",lv:"Latvie\u0161u",mg:"Malagasy",ml:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
mk:"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",mr:"\u092e\u0930\u093e\u0920\u0940",ms:"Bahasa Melayu",mzn:"\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",nb:"Norsk Bokm\u00e5l",nl:"Nederlands, Vlaams",oc:"Lenga d'\u00f2c",pa:"\u092a\u0902\u091c\u093e\u092c\u0940",pl:"Polski",pms:"Piemont\u00e8is",ps:"\u067e\u069a\u062a\u0648",pt:"Portugu\u00eas","pt-br":"Portugu\u00eas Brasileiro",ro:"Rom\u00e2n\u0103",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",sc:"Sardu",sco:"Scots",si:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
sk:"Sloven\u010dina",sr:"\u0421\u0440\u043f\u0441\u043a\u0438",sv:"Svenska",sw:"Kishwahili",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",tl:"Tagalog",tlh:"tlhIngan Hol",tr:"T\u00fcrk\u00e7e",uk:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",vi:"Ti\u1ebfng Vi\u1ec7t","zh-hans":"\u7c21\u9ad4\u4e2d\u6587","zh-hant":"\u6b63\u9ad4\u4e2d\u6587"},U="ace ar fa he mzn ps".split(" "),S=window.BlocklyGamesLang,W=window.BlocklyGamesLanguages,T=!!window.location.pathname.match(/\.html$/),pa=
Number,X,Y=window.location.search.match(/[?&]level=([^&]+)/);X=Y?decodeURIComponent(Y[1].replace(/\+/g,"%20")):"NaN";var qa=pa(X);isNaN(qa)||Math.min(Math.max(1,qa),10);
function ra(){document.title=document.getElementById("title").textContent;document.head.parentElement.setAttribute("dir",-1!=U.indexOf(S)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",S);var a=document.getElementById("languageMenu");if(a){for(var b=[],c=0;c<W.length;c++){var d=W[c];b.push([oa[d],d])}b.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(c=a.options.length=0;c<b.length;c++){var e=b[c],d=e[1],e=new Option(e[0],d);d==S&&(e.selected=!0);a.options.add(e)}1>=a.options.length&&
(a.style.display="none")}for(c=1;10>=c;c++)a=document.getElementById("level"+c),b=!!sa(na.n,c),a&&b&&ma(a,"level_done");(c=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&c.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(ta,1)}
function ua(){var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),b=window.location.search,b=1>=b.length?"?lang="+a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b}function sa(a,b){var c;try{c=window.localStorage[a+b]}catch(d){}return c}
function va(a){var b=wa;"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function ta(){if(!T){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var Z="puzzle maze bird turtle movie pond-basic pond-advanced".split(" ");
window.addEventListener("load",function(){function a(a,b){return function(){xa(a,0,b)}}document.body.innerHTML=la();ra();document.getElementById("languageMenu").addEventListener("change",ua,!0);for(var b=!1,c=[],d=0;d<Z.length;d++){c[d]=0;for(var e=1;10>=e;e++)sa(Z[d],e)&&(b=!0,c[d]++)}b&&(document.getElementById("clearDataPara").style.visibility="visible",d=document.getElementById("clearData"),va(d));for(d=0;d<c.length;d++)b=Z[d],(e=c[d]/(0==d?1:10)*270)?setTimeout(a(b,e),1500):(b=document.getElementById("gauge-"+
b),b.parentNode.removeChild(b))},!1);function xa(a,b,c){b+=4;ya(a,Math.min(b,c));b<c&&setTimeout(function(){xa(a,b,c)},10)}function ya(a,b){var c=(b-45)/180*Math.PI,d=80-52.75*Math.cos(c),c=60-52.75*Math.sin(c),e=180<b?1:0;document.getElementById("gauge-"+a).setAttribute("d",["M 42.7,97.3 A",52.75,52.75,0,e,1,d,c].join(" "))}
function wa(){var a=confirm,b;(b=document.getElementById("Index_clear"))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;if(a(null===b?"[Unknown message: Index_clear]":b)){for(a=0;a<Z.length;a++)for(b=1;10>=b;b++)delete window.localStorage[Z[a]+b];location.reload()}};
