// Input 0
var webodf_version="0.4.2-1747-gbce2aba";
// Input 1
function Runtime(){}Runtime.prototype.getVariable=function(e){};Runtime.prototype.toJson=function(e){};Runtime.prototype.fromJson=function(e){};Runtime.prototype.byteArrayFromString=function(e,k){};Runtime.prototype.byteArrayToString=function(e,k){};Runtime.prototype.read=function(e,k,d,n){};Runtime.prototype.readFile=function(e,k,d){};Runtime.prototype.readFileSync=function(e,k){};Runtime.prototype.loadXML=function(e,k){};Runtime.prototype.writeFile=function(e,k,d){};
Runtime.prototype.isFile=function(e,k){};Runtime.prototype.getFileSize=function(e,k){};Runtime.prototype.deleteFile=function(e,k){};Runtime.prototype.log=function(e,k){};Runtime.prototype.setTimeout=function(e,k){};Runtime.prototype.clearTimeout=function(e){};Runtime.prototype.libraryPaths=function(){};Runtime.prototype.currentDirectory=function(){};Runtime.prototype.setCurrentDirectory=function(e){};Runtime.prototype.type=function(){};Runtime.prototype.getDOMImplementation=function(){};
Runtime.prototype.parseXML=function(e){};Runtime.prototype.exit=function(e){};Runtime.prototype.getWindow=function(){};Runtime.prototype.assert=function(e,k,d){};var IS_COMPILED_CODE=!0;
Runtime.byteArrayToString=function(e,k){function d(d){var l="",m,r=d.length;for(m=0;m<r;m+=1)l+=String.fromCharCode(d[m]&255);return l}function n(d){var l="",m,r=d.length,c=[],g,b,a,f;for(m=0;m<r;m+=1)g=d[m],128>g?c.push(g):(m+=1,b=d[m],194<=g&&224>g?c.push((g&31)<<6|b&63):(m+=1,a=d[m],224<=g&&240>g?c.push((g&15)<<12|(b&63)<<6|a&63):(m+=1,f=d[m],240<=g&&245>g&&(g=(g&7)<<18|(b&63)<<12|(a&63)<<6|f&63,g-=65536,c.push((g>>10)+55296,(g&1023)+56320))))),1E3===c.length&&(l+=String.fromCharCode.apply(null,
c),c.length=0);return l+String.fromCharCode.apply(null,c)}var q;"utf8"===k?q=n(e):("binary"!==k&&this.log("Unsupported encoding: "+k),q=d(e));return q};Runtime.getVariable=function(e){try{return eval(e)}catch(k){}};Runtime.toJson=function(e){return JSON.stringify(e)};Runtime.fromJson=function(e){return JSON.parse(e)};Runtime.getFunctionName=function(e){return void 0===e.name?(e=/function\s+(\w+)/.exec(e))&&e[1]:e.name};
function BrowserRuntime(e){function k(c){var b=c.length,a,f,h=0;for(a=0;a<b;a+=1)f=c.charCodeAt(a),h+=1+(128<f)+(2048<f),55040<f&&57344>f&&(h+=1,a+=1);return h}function d(c,b,a){var f=c.length,h,d;b=new Uint8Array(new ArrayBuffer(b));a?(b[0]=239,b[1]=187,b[2]=191,d=3):d=0;for(a=0;a<f;a+=1)h=c.charCodeAt(a),128>h?(b[d]=h,d+=1):2048>h?(b[d]=192|h>>>6,b[d+1]=128|h&63,d+=2):55040>=h||57344<=h?(b[d]=224|h>>>12&15,b[d+1]=128|h>>>6&63,b[d+2]=128|h&63,d+=3):(a+=1,h=(h-55296<<10|c.charCodeAt(a)-56320)+65536,
b[d]=240|h>>>18&7,b[d+1]=128|h>>>12&63,b[d+2]=128|h>>>6&63,b[d+3]=128|h&63,d+=4);return b}function n(c){var b=c.length,a=new Uint8Array(new ArrayBuffer(b)),f;for(f=0;f<b;f+=1)a[f]=c.charCodeAt(f)&255;return a}function q(c,b){var a,f,h;void 0!==b?h=c:b=c;e?(f=e.ownerDocument,h&&(a=f.createElement("span"),a.className=h,a.appendChild(f.createTextNode(h)),e.appendChild(a),e.appendChild(f.createTextNode(" "))),a=f.createElement("span"),0<b.length&&"<"===b[0]?a.innerHTML=b:a.appendChild(f.createTextNode(b)),
e.appendChild(a),e.appendChild(f.createElement("br"))):console&&console.log(b);"alert"===h&&alert(b)}function p(g,b,a){if(0!==a.status||a.responseText)if(200===a.status||0===a.status){if(a.response&&"string"!==typeof a.response)"binary"===b?(a=a.response,a=new Uint8Array(a)):a=String(a.response);else if("binary"===b)if(null!==a.responseBody&&"undefined"!==String(typeof VBArray)){a=(new VBArray(a.responseBody)).toArray();var f=a.length,h=new Uint8Array(new ArrayBuffer(f));for(b=0;b<f;b+=1)h[b]=a[b];
a=h}else{(b=a.getResponseHeader("Content-Length"))&&(b=parseInt(b,10));if(b&&b!==a.responseText.length)a:{var f=a.responseText,h=!1,m=k(f);if("number"===typeof b){if(b!==m&&b!==m+3){f=void 0;break a}h=m+3===b;m=b}f=d(f,m,h)}void 0===f&&(f=n(a.responseText));a=f}else a=a.responseText;c[g]=a;g={err:null,data:a}}else g={err:a.responseText||a.statusText,data:null};else g={err:"File "+g+" is empty.",data:null};return g}function l(c,b,a){var f=new XMLHttpRequest;f.open("GET",c,a);f.overrideMimeType&&("binary"!==
b?f.overrideMimeType("text/plain; charset="+b):f.overrideMimeType("text/plain; charset=x-user-defined"));return f}function m(g,b,a){function f(){var f;4===h.readyState&&(f=p(g,b,h),a(f.err,f.data))}if(c.hasOwnProperty(g))a(null,c[g]);else{var h=l(g,b,!0);h.onreadystatechange=f;try{h.send(null)}catch(d){a(d.message,null)}}}var r=this,c={};this.byteArrayFromString=function(c,b){var a;"utf8"===b?a=d(c,k(c),!1):("binary"!==b&&r.log("unknown encoding: "+b),a=n(c));return a};this.byteArrayToString=Runtime.byteArrayToString;
this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.readFile=m;this.read=function(c,b,a,f){m(c,"binary",function(h,c){var g=null;if(c){if("string"===typeof c)throw"This should not happen.";g=c.subarray(b,b+a)}f(h,g)})};this.readFileSync=function(c,b){var a=l(c,b,!1),f;try{a.send(null);f=p(c,b,a);if(f.err)throw f.err;if(null===f.data)throw"No data read from "+c+".";}catch(h){throw h;}return f.data};this.writeFile=function(g,b,a){c[g]=b;var f=new XMLHttpRequest,
h;f.open("PUT",g,!0);f.onreadystatechange=function(){4===f.readyState&&(0!==f.status||f.responseText?200<=f.status&&300>f.status||0===f.status?a(null):a("Status "+String(f.status)+": "+f.responseText||f.statusText):a("File "+g+" is empty."))};h=b.buffer&&!f.sendAsBinary?b.buffer:r.byteArrayToString(b,"binary");try{f.sendAsBinary?f.sendAsBinary(h):f.send(h)}catch(d){r.log("HUH? "+d+" "+b),a(d.message)}};this.deleteFile=function(g,b){delete c[g];var a=new XMLHttpRequest;a.open("DELETE",g,!0);a.onreadystatechange=
function(){4===a.readyState&&(200>a.status&&300<=a.status?b(a.responseText):b(null))};a.send(null)};this.loadXML=function(c,b){var a=new XMLHttpRequest;a.open("GET",c,!0);a.overrideMimeType&&a.overrideMimeType("text/xml");a.onreadystatechange=function(){4===a.readyState&&(0!==a.status||a.responseText?200===a.status||0===a.status?b(null,a.responseXML):b(a.responseText,null):b("File "+c+" is empty.",null))};try{a.send(null)}catch(f){b(f.message,null)}};this.isFile=function(c,b){r.getFileSize(c,function(a){b(-1!==
a)})};this.getFileSize=function(g,b){if(c.hasOwnProperty(g)&&"string"!==typeof c[g])b(c[g].length);else{var a=new XMLHttpRequest;a.open("HEAD",g,!0);a.onreadystatechange=function(){if(4===a.readyState){var f=a.getResponseHeader("Content-Length");f?b(parseInt(f,10)):m(g,"binary",function(a,f){a?b(-1):b(f.length)})}};a.send(null)}};this.log=q;this.assert=function(c,b,a){if(!c)throw q("alert","ASSERTION FAILED:\n"+b),a&&a(),b;};this.setTimeout=function(c,b){return setTimeout(function(){c()},b)};this.clearTimeout=
function(c){clearTimeout(c)};this.libraryPaths=function(){return["lib"]};this.setCurrentDirectory=function(){};this.currentDirectory=function(){return""};this.type=function(){return"BrowserRuntime"};this.getDOMImplementation=function(){return window.document.implementation};this.parseXML=function(c){return(new DOMParser).parseFromString(c,"text/xml")};this.exit=function(c){q("Calling exit with code "+String(c)+", but exit() is not implemented.")};this.getWindow=function(){return window}}
function NodeJSRuntime(){function e(d){var c=d.length,g,b=new Uint8Array(new ArrayBuffer(c));for(g=0;g<c;g+=1)b[g]=d[g];return b}function k(d,c,g){function b(a,b){if(a)return g(a,null);if(!b)return g("No data for "+d+".",null);if("string"===typeof b)return g(a,b);g(a,e(b))}d=q.resolve(p,d);"binary"!==c?n.readFile(d,c,b):n.readFile(d,null,b)}var d=this,n=require("fs"),q=require("path"),p="",l,m;this.byteArrayFromString=function(d,c){var g=new Buffer(d,c),b,a=g.length,f=new Uint8Array(new ArrayBuffer(a));
for(b=0;b<a;b+=1)f[b]=g[b];return f};this.byteArrayToString=Runtime.byteArrayToString;this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.readFile=k;this.loadXML=function(m,c){k(m,"utf-8",function(g,b){if(g)return c(g,null);if(!b)return c("No data for "+m+".",null);c(null,d.parseXML(b))})};this.writeFile=function(d,c,g){c=new Buffer(c);d=q.resolve(p,d);n.writeFile(d,c,"binary",function(b){g(b||null)})};this.deleteFile=function(d,c){d=q.resolve(p,d);
n.unlink(d,c)};this.read=function(d,c,g,b){d=q.resolve(p,d);n.open(d,"r+",666,function(a,f){if(a)b(a,null);else{var h=new Buffer(g);n.read(f,h,0,g,c,function(a){n.close(f);b(a,e(h))})}})};this.readFileSync=function(d,c){var g;g=n.readFileSync(d,"binary"===c?null:c);if(null===g)throw"File "+d+" could not be read.";"binary"===c&&(g=e(g));return g};this.isFile=function(d,c){d=q.resolve(p,d);n.stat(d,function(d,b){c(!d&&b.isFile())})};this.getFileSize=function(d,c){d=q.resolve(p,d);n.stat(d,function(d,
b){d?c(-1):c(b.size)})};this.log=function(d,c){var g;void 0!==c?g=d:c=d;"alert"===g&&process.stderr.write("\n!!!!! ALERT !!!!!\n");process.stderr.write(c+"\n");"alert"===g&&process.stderr.write("!!!!! ALERT !!!!!\n")};this.assert=function(d,c,g){d||(process.stderr.write("ASSERTION FAILED: "+c),g&&g())};this.setTimeout=function(d,c){return setTimeout(function(){d()},c)};this.clearTimeout=function(d){clearTimeout(d)};this.libraryPaths=function(){return[__dirname]};this.setCurrentDirectory=function(d){p=
d};this.currentDirectory=function(){return p};this.type=function(){return"NodeJSRuntime"};this.getDOMImplementation=function(){return m};this.parseXML=function(d){return l.parseFromString(d,"text/xml")};this.exit=process.exit;this.getWindow=function(){return null};l=new (require("xmldom").DOMParser);m=d.parseXML("<a/>").implementation}
function RhinoRuntime(){function e(d,l){var c;void 0!==l?c=d:l=d;"alert"===c&&print("\n!!!!! ALERT !!!!!");print(l);"alert"===c&&print("!!!!! ALERT !!!!!")}var k=this,d={},n=d.javax.xml.parsers.DocumentBuilderFactory.newInstance(),q,p,l="";n.setValidating(!1);n.setNamespaceAware(!0);n.setExpandEntityReferences(!1);n.setSchema(null);p=d.org.xml.sax.EntityResolver({resolveEntity:function(m,l){var c=new d.java.io.FileReader(l);return new d.org.xml.sax.InputSource(c)}});q=n.newDocumentBuilder();q.setEntityResolver(p);
this.byteArrayFromString=function(d,l){var c,g=d.length,b=new Uint8Array(new ArrayBuffer(g));for(c=0;c<g;c+=1)b[c]=d.charCodeAt(c)&255;return b};this.byteArrayToString=Runtime.byteArrayToString;this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.loadXML=function(m,l){var c=new d.java.io.File(m),g=null;try{g=q.parse(c)}catch(b){return print(b),l(b,null)}l(null,g)};this.readFile=function(m,n,c){l&&(m=l+"/"+m);var g=new d.java.io.File(m),b="binary"===n?
"latin1":n;g.isFile()?((m=readFile(m,b))&&"binary"===n&&(m=k.byteArrayFromString(m,"binary")),c(null,m)):c(m+" is not a file.",null)};this.writeFile=function(m,n,c){l&&(m=l+"/"+m);m=new d.java.io.FileOutputStream(m);var g,b=n.length;for(g=0;g<b;g+=1)m.write(n[g]);m.close();c(null)};this.deleteFile=function(m,n){l&&(m=l+"/"+m);var c=new d.java.io.File(m),g=m+Math.random(),g=new d.java.io.File(g);c.rename(g)?(g.deleteOnExit(),n(null)):n("Could not delete "+m)};this.read=function(m,n,c,g){l&&(m=l+"/"+
m);var b;b=m;var a="binary";(new d.java.io.File(b)).isFile()?("binary"===a&&(a="latin1"),b=readFile(b,a)):b=null;b?g(null,this.byteArrayFromString(b.substring(n,n+c),"binary")):g("Cannot read "+m,null)};this.readFileSync=function(d,l){if(!l)return"";var c=readFile(d,l);if(null===c)throw"File could not be read.";return c};this.isFile=function(m,n){l&&(m=l+"/"+m);var c=new d.java.io.File(m);n(c.isFile())};this.getFileSize=function(m,n){l&&(m=l+"/"+m);var c=new d.java.io.File(m);n(c.length())};this.log=
e;this.assert=function(d,l,c){d||(e("alert","ASSERTION FAILED: "+l),c&&c())};this.setTimeout=function(d){d();return 0};this.clearTimeout=function(){};this.libraryPaths=function(){return["lib"]};this.setCurrentDirectory=function(d){l=d};this.currentDirectory=function(){return l};this.type=function(){return"RhinoRuntime"};this.getDOMImplementation=function(){return q.getDOMImplementation()};this.parseXML=function(m){m=new d.java.io.StringReader(m);m=new d.org.xml.sax.InputSource(m);return q.parse(m)};
this.exit=quit;this.getWindow=function(){return null}}Runtime.create=function(){return"undefined"!==String(typeof window)?new BrowserRuntime(window.document.getElementById("logoutput")):"undefined"!==String(typeof require)?new NodeJSRuntime:new RhinoRuntime};var runtime=Runtime.create(),core={},gui={},xmldom={},odf={},ops={};
(function(){function e(d,l){var c=d+"/manifest.json",g,b;if(!p.hasOwnProperty(c)){try{g=runtime.readFileSync(c,"utf-8")}catch(a){console.log(String(a));return}g=JSON.parse(g);for(b in g)g.hasOwnProperty(b)&&(l[b]={dir:d,deps:g[b]});p[c]=1}}function k(d,l,c){var g=l[d].deps,b={};c[d]=b;g.forEach(function(a){b[a]=1});g.forEach(function(a){c[a]||k(a,l,c)});g.forEach(function(a){Object.keys(c[a]).forEach(function(a){b[a]=1})})}function d(d,l){function c(a,f){var h,g=l[a];if(-1===b.indexOf(a)&&-1===f.indexOf(a)){f.push(a);
for(h=0;h<d.length;h+=1)g[d[h]]&&c(d[h],f);f.pop();b.push(a)}}var g,b=[];for(g=0;g<d.length;g+=1)c(d[g],[]);return b}function n(d,l){for(var c=0;c<d.length&&void 0!==l[c];)null!==l[c]&&(eval(l[c]),l[c]=null),c+=1}var q={},p={},l={core:core,gui:gui,xmldom:xmldom,odf:odf,ops:ops};runtime.loadClass=function(m){var r;if(!(r=IS_COMPILED_CODE))a:{r=m.split(".");var c,g=l,b=r.length;for(c=0;c<b;c+=1){if(!g.hasOwnProperty(r[c])){r=!1;break a}g=g[r[c]]}r=!0}if(!r&&(r=m.replace(".","/")+".js",!p.hasOwnProperty(r))){if(!(0<
Object.keys(q).length)){c=runtime.libraryPaths();r={};runtime.currentDirectory()&&e(runtime.currentDirectory(),r);for(g=0;g<c.length;g+=1)e(c[g],r);var a,g={};for(a in r)r.hasOwnProperty(a)&&k(a,r,g);for(a in r)r.hasOwnProperty(a)&&(c=Object.keys(g[a]),r[a].deps=d(c,g),r[a].deps.push(a));q=r}a=m.replace(".","/")+".js";m=[];a=q[a].deps;for(r=0;r<a.length;r+=1)p.hasOwnProperty(a[r])||m.push(a[r]);a=[];a.length=m.length;for(r=m.length-1;0<=r;r-=1)p[m[r]]=1,void 0===a[r]&&(c=m[r],c=q[c].dir+"/"+c,g=runtime.readFileSync(c,
"utf-8"),g+="\n//# sourceURL="+c,g+="\n//@ sourceURL="+c,a[r]=g);n(m,a)}}})();(function(){var e=function(k){return k};runtime.getTranslator=function(){return e};runtime.setTranslator=function(k){e=k};runtime.tr=function(k){var d=e(k);return d&&"string"===String(typeof d)?d:k}})();
(function(e){function k(d){if(d.length){var n=d[0];runtime.readFile(n,"utf8",function(k,p){function l(){var c;(c=eval(e))&&runtime.exit(c)}var m="",e=p;-1!==n.indexOf("/")&&(m=n.substring(0,n.indexOf("/")));runtime.setCurrentDirectory(m);k?(runtime.log(k),runtime.exit(1)):null===e?(runtime.log("No code found for "+n),runtime.exit(1)):l.apply(null,d)})}}e=e?Array.prototype.slice.call(e):[];"NodeJSRuntime"===runtime.type()?k(process.argv.slice(2)):"RhinoRuntime"===runtime.type()?k(e):k(e.slice(1))})("undefined"!==
String(typeof arguments)&&arguments);
// Input 2
core.Async=function(){this.forEach=function(e,k,d){function n(m){l!==p&&(m?(l=p,d(m)):(l+=1,l===p&&d(null)))}var q,p=e.length,l=0;for(q=0;q<p;q+=1)k(e[q],n)};this.destroyAll=function(e,k){function d(n,q){if(q)k(q);else if(n<e.length)e[n](function(p){d(n+1,p)});else k()}d(0,void 0)}};
// Input 3
function makeBase64(){function e(a){var b,f=a.length,h=new Uint8Array(new ArrayBuffer(f));for(b=0;b<f;b+=1)h[b]=a.charCodeAt(b)&255;return h}function k(a){var b,f="",h,c=a.length-2;for(h=0;h<c;h+=3)b=a[h]<<16|a[h+1]<<8|a[h+2],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b>>>18],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b>>>12&63],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b>>>6&63],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b&
63];h===c+1?(b=a[h]<<4,f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b>>>6],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b&63],f+="=="):h===c&&(b=a[h]<<10|a[h+1]<<2,f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b>>>12],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b>>>6&63],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b&63],f+="=");return f}function d(a){a=a.replace(/[^A-Za-z0-9+\/]+/g,
"");var b=a.length,f=new Uint8Array(new ArrayBuffer(3*b)),c=a.length%4,d=0,g,l;for(g=0;g<b;g+=4)l=(h[a.charAt(g)]||0)<<18|(h[a.charAt(g+1)]||0)<<12|(h[a.charAt(g+2)]||0)<<6|(h[a.charAt(g+3)]||0),f[d]=l>>16,f[d+1]=l>>8&255,f[d+2]=l&255,d+=3;b=3*b-[0,0,2,1][c];return f.subarray(0,b)}function n(a){var b,f,h=a.length,c=0,d=new Uint8Array(new ArrayBuffer(3*h));for(b=0;b<h;b+=1)f=a[b],128>f?d[c++]=f:(2048>f?d[c++]=192|f>>>6:(d[c++]=224|f>>>12&15,d[c++]=128|f>>>6&63),d[c++]=128|f&63);return d.subarray(0,
c)}function q(a){var b,f,h,c,d=a.length,g=new Uint8Array(new ArrayBuffer(d)),l=0;for(b=0;b<d;b+=1)f=a[b],128>f?g[l++]=f:(b+=1,h=a[b],224>f?g[l++]=(f&31)<<6|h&63:(b+=1,c=a[b],g[l++]=(f&15)<<12|(h&63)<<6|c&63));return g.subarray(0,l)}function p(a){return k(e(a))}function l(a){return String.fromCharCode.apply(String,d(a))}function m(a){return q(e(a))}function r(a){a=q(a);for(var b="",f=0;f<a.length;)b+=String.fromCharCode.apply(String,a.subarray(f,f+45E3)),f+=45E3;return b}function c(a,b,f){var h,c,
d,g="";for(d=b;d<f;d+=1)b=a.charCodeAt(d)&255,128>b?g+=String.fromCharCode(b):(d+=1,h=a.charCodeAt(d)&255,224>b?g+=String.fromCharCode((b&31)<<6|h&63):(d+=1,c=a.charCodeAt(d)&255,g+=String.fromCharCode((b&15)<<12|(h&63)<<6|c&63)));return g}function g(a,b){function f(){var g=d+1E5;g>a.length&&(g=a.length);h+=c(a,d,g);d=g;g=d===a.length;b(h,g)&&!g&&runtime.setTimeout(f,0)}var h="",d=0;1E5>a.length?b(c(a,0,a.length),!0):("string"!==typeof a&&(a=a.slice()),f())}function b(a){return n(e(a))}function a(a){return String.fromCharCode.apply(String,
n(a))}function f(a){return String.fromCharCode.apply(String,n(e(a)))}var h=function(a){var b={},f,h;f=0;for(h=a.length;f<h;f+=1)b[a.charAt(f)]=f;return b}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),t,u,x=runtime.getWindow(),z,w;x&&x.btoa?(z=x.btoa,t=function(a){return z(f(a))}):(z=p,t=function(a){return k(b(a))});x&&x.atob?(w=x.atob,u=function(a){a=w(a);return c(a,0,a.length)}):(w=l,u=function(a){return r(d(a))});core.Base64=function(){this.convertByteArrayToBase64=this.convertUTF8ArrayToBase64=
k;this.convertBase64ToByteArray=this.convertBase64ToUTF8Array=d;this.convertUTF16ArrayToByteArray=this.convertUTF16ArrayToUTF8Array=n;this.convertByteArrayToUTF16Array=this.convertUTF8ArrayToUTF16Array=q;this.convertUTF8StringToBase64=p;this.convertBase64ToUTF8String=l;this.convertUTF8StringToUTF16Array=m;this.convertByteArrayToUTF16String=this.convertUTF8ArrayToUTF16String=r;this.convertUTF8StringToUTF16String=g;this.convertUTF16StringToByteArray=this.convertUTF16StringToUTF8Array=b;this.convertUTF16ArrayToUTF8String=
a;this.convertUTF16StringToUTF8String=f;this.convertUTF16StringToBase64=t;this.convertBase64ToUTF16String=u;this.fromBase64=l;this.toBase64=p;this.atob=w;this.btoa=z;this.utob=f;this.btou=g;this.encode=t;this.encodeURI=function(a){return t(a).replace(/[+\/]/g,function(a){return"+"===a?"-":"_"}).replace(/\\=+$/,"")};this.decode=function(a){return u(a.replace(/[\-_]/g,function(a){return"-"===a?"+":"/"}))};return this};return core.Base64}core.Base64=makeBase64();
// Input 4
core.ByteArray=function(e){this.pos=0;this.data=e;this.readUInt32LE=function(){this.pos+=4;var k=this.data,d=this.pos;return k[--d]<<24|k[--d]<<16|k[--d]<<8|k[--d]};this.readUInt16LE=function(){this.pos+=2;var k=this.data,d=this.pos;return k[--d]<<8|k[--d]}};
// Input 5
core.ByteArrayWriter=function(e){function k(d){d>q-n&&(q=Math.max(2*q,n+d),d=new Uint8Array(new ArrayBuffer(q)),d.set(p),p=d)}var d=this,n=0,q=1024,p=new Uint8Array(new ArrayBuffer(q));this.appendByteArrayWriter=function(l){d.appendByteArray(l.getByteArray())};this.appendByteArray=function(d){var m=d.length;k(m);p.set(d,n);n+=m};this.appendArray=function(d){var m=d.length;k(m);p.set(d,n);n+=m};this.appendUInt16LE=function(l){d.appendArray([l&255,l>>8&255])};this.appendUInt32LE=function(l){d.appendArray([l&
255,l>>8&255,l>>16&255,l>>24&255])};this.appendString=function(l){d.appendByteArray(runtime.byteArrayFromString(l,e))};this.getLength=function(){return n};this.getByteArray=function(){var d=new Uint8Array(new ArrayBuffer(n));d.set(p.subarray(0,n));return d}};
// Input 6
core.CSSUnits=function(){var e=this,k={"in":1,cm:2.54,mm:25.4,pt:72,pc:12};this.convert=function(d,n,e){return d*k[e]/k[n]};this.convertMeasure=function(d,n){var k,p;d&&n?(k=parseFloat(d),p=d.replace(k.toString(),""),k=e.convert(k,p,n).toString()):k="";return k};this.getUnits=function(d){return d.substr(d.length-2,d.length)}};
// Input 7
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){function e(){var d,n,e,p,l;void 0===k&&(l=(d=runtime.getWindow())&&d.document,k={rangeBCRIgnoresElementBCR:!1,unscaledRangeClientRects:!1},l&&(p=l.createElement("div"),p.style.position="absolute",p.style.left="-99999px",p.style.transform="scale(2)",p.style["-webkit-transform"]="scale(2)",n=l.createElement("div"),p.appendChild(n),l.body.appendChild(p),d=l.createRange(),d.selectNode(n),k.rangeBCRIgnoresElementBCR=0===d.getClientRects().length,n.appendChild(l.createTextNode("Rect transform test")),
n=n.getBoundingClientRect(),e=d.getBoundingClientRect(),k.unscaledRangeClientRects=2<Math.abs(n.height-e.height),d.detach(),l.body.removeChild(p),d=Object.keys(k).map(function(d){return d+":"+String(k[d])}).join(", "),runtime.log("Detected browser quirks - "+d)));return k}var k;core.DomUtils=function(){function d(b,a){for(var f=0,h;b.parentNode!==a;)runtime.assert(null!==b.parentNode,"parent is null"),b=b.parentNode;for(h=a.firstChild;h!==b;)f+=1,h=h.nextSibling;return f}function n(b,a){return 0>=
b.compareBoundaryPoints(Range.START_TO_START,a)&&0<=b.compareBoundaryPoints(Range.END_TO_END,a)}function k(b,a){return 0>=b.compareBoundaryPoints(Range.END_TO_START,a)&&0<=b.compareBoundaryPoints(Range.START_TO_END,a)}function p(b,a){var f=null;b.nodeType===Node.TEXT_NODE&&(0===b.length?(b.parentNode.removeChild(b),a.nodeType===Node.TEXT_NODE&&(f=a)):(a.nodeType===Node.TEXT_NODE&&(b.appendData(a.data),a.parentNode.removeChild(a)),f=b));return f}function l(b){for(var a=b.parentNode;b.firstChild;)a.insertBefore(b.firstChild,
b);a.removeChild(b);return a}function m(b,a){for(var f=b.parentNode,h=b.firstChild,d;h;)d=h.nextSibling,m(h,a),h=d;a(b)&&(f=l(b));return f}function r(b,a){return b===a||Boolean(b.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY)}function c(b,a,f){Object.keys(a).forEach(function(h){var d=h.split(":"),g=d[1],l=f(d[0]),d=a[h];"object"===typeof d&&Object.keys(d).length?(h=l?b.getElementsByTagNameNS(l,g)[0]||b.ownerDocument.createElementNS(l,h):b.getElementsByTagName(g)[0]||b.ownerDocument.createElement(h),
b.appendChild(h),c(h,d,f)):l&&b.setAttributeNS(l,h,String(d))})}var g=null;this.splitBoundaries=function(b){var a,f=[],h,c,g;if(b.startContainer.nodeType===Node.TEXT_NODE||b.endContainer.nodeType===Node.TEXT_NODE){h=b.endContainer;c=b.endContainer.nodeType!==Node.TEXT_NODE?b.endOffset===b.endContainer.childNodes.length:!1;g=b.endOffset;a=b.endContainer;if(g<a.childNodes.length)for(a=a.childNodes.item(g),g=0;a.firstChild;)a=a.firstChild;else for(;a.lastChild;)a=a.lastChild,g=a.nodeType===Node.TEXT_NODE?
a.textContent.length:a.childNodes.length;a===h&&(h=null);b.setEnd(a,g);g=b.endContainer;0!==b.endOffset&&g.nodeType===Node.TEXT_NODE&&(a=g,b.endOffset!==a.length&&(f.push(a.splitText(b.endOffset)),f.push(a)));g=b.startContainer;0!==b.startOffset&&g.nodeType===Node.TEXT_NODE&&(a=g,b.startOffset!==a.length&&(g=a.splitText(b.startOffset),f.push(a),f.push(g),b.setStart(g,0)));if(null!==h){for(g=b.endContainer;g.parentNode&&g.parentNode!==h;)g=g.parentNode;c=c?h.childNodes.length:d(g,h);b.setEnd(h,c)}}return f};
this.containsRange=n;this.rangesIntersect=k;this.getNodesInRange=function(b,a){for(var f=[],h=b.commonAncestorContainer,d,c=b.startContainer.ownerDocument.createTreeWalker(h.nodeType===Node.TEXT_NODE?h.parentNode:h,NodeFilter.SHOW_ALL,a,!1),h=c.currentNode=b.startContainer;h;){d=a(h);if(d===NodeFilter.FILTER_ACCEPT)f.push(h);else if(d===NodeFilter.FILTER_REJECT)break;h=h.parentNode}f.reverse();for(h=c.nextNode();h;)f.push(h),h=c.nextNode();return f};this.normalizeTextNodes=function(b){b&&b.nextSibling&&
(b=p(b,b.nextSibling));b&&b.previousSibling&&p(b.previousSibling,b)};this.rangeContainsNode=function(b,a){var f=a.ownerDocument.createRange(),h=a.ownerDocument.createRange(),d;f.setStart(b.startContainer,b.startOffset);f.setEnd(b.endContainer,b.endOffset);h.selectNodeContents(a);d=n(f,h);f.detach();h.detach();return d};this.mergeIntoParent=l;this.removeUnwantedNodes=m;this.getElementsByTagNameNS=function(b,a,f){var h=[];b=b.getElementsByTagNameNS(a,f);h.length=f=b.length;for(a=0;a<f;a+=1)h[a]=b.item(a);
return h};this.rangeIntersectsNode=function(b,a){var f=a.ownerDocument.createRange(),h;f.selectNodeContents(a);h=k(b,f);f.detach();return h};this.containsNode=function(b,a){return b===a||b.contains(a)};this.comparePoints=function(b,a,f,h){if(b===f)return h-a;var c=b.compareDocumentPosition(f);2===c?c=-1:4===c?c=1:10===c?(a=d(b,f),c=a<h?1:-1):(h=d(f,b),c=h<a?-1:1);return c};this.adaptRangeDifferenceToZoomLevel=function(b,a){return e().unscaledRangeClientRects?b:b/a};this.getBoundingClientRect=function(b){var a=
b.ownerDocument,f=e();if((!1===f.unscaledRangeClientRects||f.rangeBCRIgnoresElementBCR)&&b.nodeType===Node.ELEMENT_NODE)return b.getBoundingClientRect();var h;g?h=g:g=h=a.createRange();a=h;a.selectNode(b);return a.getBoundingClientRect()};this.mapKeyValObjOntoNode=function(b,a,f){Object.keys(a).forEach(function(h){var d=h.split(":"),c=d[1],d=f(d[0]),g=a[h];d?(c=b.getElementsByTagNameNS(d,c)[0],c||(c=b.ownerDocument.createElementNS(d,h),b.appendChild(c)),c.textContent=g):runtime.log("Key ignored: "+
h)})};this.removeKeyElementsFromNode=function(b,a,f){a.forEach(function(a){var d=a.split(":"),c=d[1];(d=f(d[0]))?(c=b.getElementsByTagNameNS(d,c)[0])?c.parentNode.removeChild(c):runtime.log("Element for "+a+" not found."):runtime.log("Property Name ignored: "+a)})};this.getKeyValRepresentationOfNode=function(b,a){for(var f={},h=b.firstElementChild,d;h;){if(d=a(h.namespaceURI))f[d+":"+h.localName]=h.textContent;h=h.nextElementSibling}return f};this.mapObjOntoNode=c;(function(b){var a,f;f=runtime.getWindow();
null!==f&&(a=f.navigator.appVersion.toLowerCase(),f=-1===a.indexOf("chrome")&&(-1!==a.indexOf("applewebkit")||-1!==a.indexOf("safari")),a=a.indexOf("msie"),f||a)&&(b.containsNode=r)})(this)};return core.DomUtils})();
// Input 8
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.EventNotifier=function(e){var k={};this.emit=function(d,n){var e,p;runtime.assert(k.hasOwnProperty(d),'unknown event fired "'+d+'"');p=k[d];for(e=0;e<p.length;e+=1)p[e](n)};this.subscribe=function(d,n){runtime.assert(k.hasOwnProperty(d),'tried to subscribe to unknown event "'+d+'"');k[d].push(n)};this.unsubscribe=function(d,n){var e;runtime.assert(k.hasOwnProperty(d),'tried to unsubscribe from unknown event "'+d+'"');e=k[d].indexOf(n);runtime.assert(-1!==e,'tried to unsubscribe unknown callback from event "'+
d+'"');-1!==e&&k[d].splice(e,1)};(function(){var d,n;for(d=0;d<e.length;d+=1)n=e[d],runtime.assert(!k.hasOwnProperty(n),'Duplicated event ids: "'+n+'" registered more than once.'),k[n]=[]})()};
// Input 9
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.LoopWatchDog=function(e,k){var d=Date.now(),n=0;this.check=function(){var q;if(e&&(q=Date.now(),q-d>e))throw runtime.log("alert","watchdog timeout"),"timeout!";if(0<k&&(n+=1,n>k))throw runtime.log("alert","watchdog loop overflow"),"loop overflow";}};
// Input 10
core.PositionIterator=function(e,k,d,n){function q(){this.acceptNode=function(b){return!b||b.nodeType===a&&0===b.length?t:h}}function p(b){this.acceptNode=function(f){return!f||f.nodeType===a&&0===f.length?t:b.acceptNode(f)}}function l(){var b=c.currentNode,h=b.nodeType;g=h===a?b.length-1:h===f?1:0}function m(){if(null===c.previousSibling()){if(!c.parentNode()||c.currentNode===e)return c.firstChild(),!1;g=0}else l();return!0}var r=this,c,g,b,a=Node.TEXT_NODE,f=Node.ELEMENT_NODE,h=NodeFilter.FILTER_ACCEPT,
t=NodeFilter.FILTER_REJECT;this.nextPosition=function(){var b=c.currentNode,h=b.nodeType;if(b===e)return!1;if(0===g&&h===f)null===c.firstChild()&&(g=1);else if(h===a&&g+1<b.length)g+=1;else if(null!==c.nextSibling())g=0;else if(c.parentNode())g=1;else return!1;return!0};this.previousPosition=function(){var b=!0,f=c.currentNode;0===g?b=m():f.nodeType===a?g-=1:null!==c.lastChild()?l():f===e?b=!1:g=0;return b};this.previousNode=m;this.container=function(){var b=c.currentNode,f=b.nodeType;0===g&&f!==
a&&(b=b.parentNode);return b};this.rightNode=function(){var d=c.currentNode,l=d.nodeType;if(l===a&&g===d.length)for(d=d.nextSibling;d&&b(d)!==h;)d=d.nextSibling;else l===f&&1===g&&(d=null);return d};this.leftNode=function(){var a=c.currentNode;if(0===g)for(a=a.previousSibling;a&&b(a)!==h;)a=a.previousSibling;else if(a.nodeType===f)for(a=a.lastChild;a&&b(a)!==h;)a=a.previousSibling;return a};this.getCurrentNode=function(){return c.currentNode};this.unfilteredDomOffset=function(){if(c.currentNode.nodeType===
a)return g;for(var b=0,f=c.currentNode,f=1===g?f.lastChild:f.previousSibling;f;)b+=1,f=f.previousSibling;return b};this.getPreviousSibling=function(){var a=c.currentNode,b=c.previousSibling();c.currentNode=a;return b};this.getNextSibling=function(){var a=c.currentNode,b=c.nextSibling();c.currentNode=a;return b};this.setUnfilteredPosition=function(f,d){var l,m;runtime.assert(null!==f&&void 0!==f,"PositionIterator.setUnfilteredPosition called without container");c.currentNode=f;if(f.nodeType===a)return g=
d,runtime.assert(d<=f.length,"Error in setPosition: "+d+" > "+f.length),runtime.assert(0<=d,"Error in setPosition: "+d+" < 0"),d===f.length&&(c.nextSibling()?g=0:c.parentNode()?g=1:runtime.assert(!1,"Error in setUnfilteredPosition: position not valid.")),!0;l=b(f);for(m=f.parentNode;m&&m!==e&&l===h;)l=b(m),l!==h&&(c.currentNode=m),m=m.parentNode;d<f.childNodes.length&&l!==NodeFilter.FILTER_REJECT?(c.currentNode=f.childNodes.item(d),l=b(c.currentNode),g=0):g=1;l===NodeFilter.FILTER_REJECT&&(g=1);if(l!==
h)return r.nextPosition();runtime.assert(b(c.currentNode)===h,"PositionIterater.setUnfilteredPosition call resulted in an non-visible node being set");return!0};this.moveToEnd=function(){c.currentNode=e;g=1};this.moveToEndOfNode=function(b){b.nodeType===a?r.setUnfilteredPosition(b,b.length):(c.currentNode=b,g=1)};this.getNodeFilter=function(){return b};b=(d?new p(d):new q).acceptNode;b.acceptNode=b;k=k||NodeFilter.SHOW_ALL;runtime.assert(e.nodeType!==Node.TEXT_NODE,"Internet Explorer doesn't allow tree walker roots to be text nodes");
c=e.ownerDocument.createTreeWalker(e,k,b,n);g=0;null===c.firstChild()&&(g=1)};
// Input 11
core.zip_HuftNode=function(){this.n=this.b=this.e=0;this.t=null};core.zip_HuftList=function(){this.list=this.next=null};
core.RawInflate=function(){function e(a,b,f,h,d,c){this.BMAX=16;this.N_MAX=288;this.status=0;this.root=null;this.m=0;var g=Array(this.BMAX+1),l,m,n,k,A,e,p,t=Array(this.BMAX+1),q,r,H,u=new core.zip_HuftNode,E=Array(this.BMAX);k=Array(this.N_MAX);var w,K=Array(this.BMAX+1),O,W,y;y=this.root=null;for(A=0;A<g.length;A++)g[A]=0;for(A=0;A<t.length;A++)t[A]=0;for(A=0;A<E.length;A++)E[A]=null;for(A=0;A<k.length;A++)k[A]=0;for(A=0;A<K.length;A++)K[A]=0;l=256<b?a[256]:this.BMAX;q=a;r=0;A=b;do g[q[r]]++,r++;
while(0<--A);if(g[0]===b)this.root=null,this.status=this.m=0;else{for(e=1;e<=this.BMAX&&0===g[e];e++);p=e;c<e&&(c=e);for(A=this.BMAX;0!==A&&0===g[A];A--);n=A;c>A&&(c=A);for(O=1<<e;e<A;e++,O<<=1)if(O-=g[e],0>O){this.status=2;this.m=c;return}O-=g[A];if(0>O)this.status=2,this.m=c;else{g[A]+=O;K[1]=e=0;q=g;r=1;for(H=2;0<--A;)e+=q[r++],K[H++]=e;q=a;A=r=0;do e=q[r++],0!==e&&(k[K[e]++]=A);while(++A<b);b=K[n];K[0]=A=0;q=k;r=0;k=-1;w=t[0]=0;H=null;W=0;for(p=p-1+1;p<=n;p++)for(a=g[p];0<a--;){for(;p>w+t[1+k];){w+=
t[1+k];k++;W=n-w;W=W>c?c:W;e=p-w;m=1<<e;if(m>a+1)for(m-=a+1,H=p;++e<W;){m<<=1;if(m<=g[++H])break;m-=g[H]}w+e>l&&w<l&&(e=l-w);W=1<<e;t[1+k]=e;H=Array(W);for(m=0;m<W;m++)H[m]=new core.zip_HuftNode;y=null===y?this.root=new core.zip_HuftList:y.next=new core.zip_HuftList;y.next=null;y.list=H;E[k]=H;0<k&&(K[k]=A,u.b=t[k],u.e=16+e,u.t=H,e=(A&(1<<w)-1)>>w-t[k],E[k-1][e].e=u.e,E[k-1][e].b=u.b,E[k-1][e].n=u.n,E[k-1][e].t=u.t)}u.b=p-w;r>=b?u.e=99:q[r]<f?(u.e=256>q[r]?16:15,u.n=q[r++]):(u.e=d[q[r]-f],u.n=h[q[r++]-
f]);m=1<<p-w;for(e=A>>w;e<W;e+=m)H[e].e=u.e,H[e].b=u.b,H[e].n=u.n,H[e].t=u.t;for(e=1<<p-1;0!==(A&e);e>>=1)A^=e;for(A^=e;(A&(1<<w)-1)!==K[k];)w-=t[k],k--}this.m=t[1];this.status=0!==O&&1!==n?1:0}}}function k(f){for(;a<f;){var h=b,d;d=s.length===A?-1:s[A++];b=h|d<<a;a+=8}}function d(a){return b&E[a]}function n(f){b>>=f;a-=f}function q(a,b,h){var c,g,A;if(0===h)return 0;for(A=0;;){k(w);g=x.list[d(w)];for(c=g.e;16<c;){if(99===c)return-1;n(g.b);c-=16;k(c);g=g.t[d(c)];c=g.e}n(g.b);if(16===c)m&=32767,a[b+
A++]=l[m++]=g.n;else{if(15===c)break;k(c);t=g.n+d(c);n(c);k(v);g=z.list[d(v)];for(c=g.e;16<c;){if(99===c)return-1;n(g.b);c-=16;k(c);g=g.t[d(c)];c=g.e}n(g.b);k(c);u=m-g.n-d(c);for(n(c);0<t&&A<h;)t--,u&=32767,m&=32767,a[b+A++]=l[m++]=l[u++]}if(A===h)return h}f=-1;return A}function p(a,b,f){var h,c,g,l,m,A,p,t=Array(316);for(h=0;h<t.length;h++)t[h]=0;k(5);A=257+d(5);n(5);k(5);p=1+d(5);n(5);k(4);h=4+d(4);n(4);if(286<A||30<p)return-1;for(c=0;c<h;c++)k(3),t[G[c]]=d(3),n(3);for(c=h;19>c;c++)t[G[c]]=0;w=
7;c=new e(t,19,19,null,null,w);if(0!==c.status)return-1;x=c.root;w=c.m;l=A+p;for(h=g=0;h<l;)if(k(w),m=x.list[d(w)],c=m.b,n(c),c=m.n,16>c)t[h++]=g=c;else if(16===c){k(2);c=3+d(2);n(2);if(h+c>l)return-1;for(;0<c--;)t[h++]=g}else{17===c?(k(3),c=3+d(3),n(3)):(k(7),c=11+d(7),n(7));if(h+c>l)return-1;for(;0<c--;)t[h++]=0;g=0}w=9;c=new e(t,A,257,H,y,w);0===w&&(c.status=1);if(0!==c.status)return-1;x=c.root;w=c.m;for(h=0;h<p;h++)t[h]=t[h+A];v=6;c=new e(t,p,0,O,W,v);z=c.root;v=c.m;return 0===v&&257<A||0!==c.status?
-1:q(a,b,f)}var l=[],m,r=null,c,g,b,a,f,h,t,u,x,z,w,v,s,A,E=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],H=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],y=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],O=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],W=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[16,17,18,0,8,7,9,6,
10,5,11,4,12,3,13,2,14,1,15],K;this.inflate=function(U,E){l.length=65536;a=b=m=0;f=-1;h=!1;t=u=0;x=null;s=U;A=0;var G=new Uint8Array(new ArrayBuffer(E));a:for(var F=0,M;F<E&&(!h||-1!==f);){if(0<t){if(0!==f)for(;0<t&&F<E;)t--,u&=32767,m&=32767,G[0+F]=l[m]=l[u],F+=1,m+=1,u+=1;else{for(;0<t&&F<E;)t-=1,m&=32767,k(8),G[0+F]=l[m]=d(8),F+=1,m+=1,n(8);0===t&&(f=-1)}if(F===E)break}if(-1===f){if(h)break;k(1);0!==d(1)&&(h=!0);n(1);k(2);f=d(2);n(2);x=null;t=0}switch(f){case 0:M=G;var R=0+F,L=E-F,I=void 0,I=a&
7;n(I);k(16);I=d(16);n(16);k(16);if(I!==(~b&65535))M=-1;else{n(16);t=I;for(I=0;0<t&&I<L;)t--,m&=32767,k(8),M[R+I++]=l[m++]=d(8),n(8);0===t&&(f=-1);M=I}break;case 1:if(null!==x)M=q(G,0+F,E-F);else b:{M=G;R=0+F;L=E-F;if(null===r){for(var J=void 0,I=Array(288),J=void 0,J=0;144>J;J++)I[J]=8;for(J=144;256>J;J++)I[J]=9;for(J=256;280>J;J++)I[J]=7;for(J=280;288>J;J++)I[J]=8;g=7;J=new e(I,288,257,H,y,g);if(0!==J.status){alert("HufBuild error: "+J.status);M=-1;break b}r=J.root;g=J.m;for(J=0;30>J;J++)I[J]=5;
K=5;J=new e(I,30,0,O,W,K);if(1<J.status){r=null;alert("HufBuild error: "+J.status);M=-1;break b}c=J.root;K=J.m}x=r;z=c;w=g;v=K;M=q(M,R,L)}break;case 2:M=null!==x?q(G,0+F,E-F):p(G,0+F,E-F);break;default:M=-1}if(-1===M)break a;F+=M}s=new Uint8Array(new ArrayBuffer(0));return G}};
// Input 12
core.ScheduledTask=function(e,k){function d(){p&&(runtime.clearTimeout(q),p=!1)}function n(){d();e.apply(void 0,l);l=null}var q,p=!1,l=[];this.trigger=function(){l=Array.prototype.slice.call(arguments);p||(p=!0,q=runtime.setTimeout(n,k))};this.triggerImmediate=function(){l=Array.prototype.slice.call(arguments);n()};this.processRequests=function(){p&&n()};this.cancel=d;this.destroy=function(l){d();l()}};
// Input 13
core.UnitTest=function(){};core.UnitTest.prototype.setUp=function(){};core.UnitTest.prototype.tearDown=function(){};core.UnitTest.prototype.description=function(){};core.UnitTest.prototype.tests=function(){};core.UnitTest.prototype.asyncTests=function(){};
core.UnitTest.provideTestAreaDiv=function(){var e=runtime.getWindow().document,k=e.getElementById("testarea");runtime.assert(!k,'Unclean test environment, found a div with id "testarea".');k=e.createElement("div");k.setAttribute("id","testarea");e.body.appendChild(k);return k};
core.UnitTest.cleanupTestAreaDiv=function(){var e=runtime.getWindow().document,k=e.getElementById("testarea");runtime.assert(!!k&&k.parentNode===e.body,'Test environment broken, found no div with id "testarea" below body.');e.body.removeChild(k)};core.UnitTest.createOdtDocument=function(e,k){var d="<?xml version='1.0' encoding='UTF-8'?>",d=d+"<office:document";Object.keys(k).forEach(function(e){d+=" xmlns:"+e+'="'+k[e]+'"'});d+=">";d+=e;d+="</office:document>";return runtime.parseXML(d)};
core.UnitTestLogger=function(){var e=[],k=0,d=0,n="",q="";this.startTest=function(p,l){e=[];k=0;n=p;q=l;d=(new Date).getTime()};this.endTest=function(){var p=(new Date).getTime();return{description:q,suite:[n,q],success:0===k,log:e,time:p-d}};this.debug=function(d){e.push({category:"debug",message:d})};this.fail=function(d){k+=1;e.push({category:"fail",message:d})};this.pass=function(d){e.push({category:"pass",message:d})}};
core.UnitTestRunner=function(e,k){function d(a){r+=1;b?k.debug(a):k.fail(a)}function n(a,b){var c;try{if(a.length!==b.length)return d("array of length "+a.length+" should be "+b.length+" long"),!1;for(c=0;c<a.length;c+=1)if(a[c]!==b[c])return d(a[c]+" should be "+b[c]+" at array index "+c),!1}catch(g){return!1}return!0}function q(a,b,c){var g=a.attributes,l=g.length,m,e,k;for(m=0;m<l;m+=1)if(e=g.item(m),"xmlns"!==e.prefix&&"urn:webodf:names:steps"!==e.namespaceURI){k=b.getAttributeNS(e.namespaceURI,
e.localName);if(!b.hasAttributeNS(e.namespaceURI,e.localName))return d("Attribute "+e.localName+" with value "+e.value+" was not present"),!1;if(k!==e.value)return d("Attribute "+e.localName+" was "+k+" should be "+e.value),!1}return c?!0:q(b,a,!0)}function p(a,b){var c,g;c=a.nodeType;g=b.nodeType;if(c!==g)return d("Nodetype '"+c+"' should be '"+g+"'"),!1;if(c===Node.TEXT_NODE){if(a.data===b.data)return!0;d("Textnode data '"+a.data+"' should be '"+b.data+"'");return!1}runtime.assert(c===Node.ELEMENT_NODE,
"Only textnodes and elements supported.");if(a.namespaceURI!==b.namespaceURI)return d("namespace '"+a.namespaceURI+"' should be '"+b.namespaceURI+"'"),!1;if(a.localName!==b.localName)return d("localName '"+a.localName+"' should be '"+b.localName+"'"),!1;if(!q(a,b,!1))return!1;c=a.firstChild;for(g=b.firstChild;c;){if(!g)return d("Nodetype '"+c.nodeType+"' is unexpected here."),!1;if(!p(c,g))return!1;c=c.nextSibling;g=g.nextSibling}return g?(d("Nodetype '"+g.nodeType+"' is missing here."),!1):!0}function l(a,
b){return 0===b?a===b&&1/a===1/b:a===b?!0:null===a||null===b?!1:"number"===typeof b&&isNaN(b)?"number"===typeof a&&isNaN(a):Object.prototype.toString.call(b)===Object.prototype.toString.call([])?n(a,b):"object"===typeof b&&"object"===typeof a?b.constructor===Element||b.constructor===Node?p(a,b):g(a,b):!1}function m(a,b,c){"string"===typeof b&&"string"===typeof c||k.debug("WARN: shouldBe() expects string arguments");var g,m;try{m=eval(b)}catch(e){g=e}a=eval(c);g?d(b+" should be "+a+". Threw exception "+
g):l(m,a)?k.pass(b+" is "+c):String(typeof m)===String(typeof a)?(c=0===m&&0>1/m?"-0":String(m),d(b+" should be "+a+". Was "+c+".")):d(b+" should be "+a+" (of type "+typeof a+"). Was "+m+" (of type "+typeof m+").")}var r=0,c,g,b=!1;this.resourcePrefix=function(){return e};this.beginExpectFail=function(){c=r;b=!0};this.endExpectFail=function(){var a=c===r;b=!1;r=c;a&&(r+=1,k.fail("Expected at least one failed test, but none registered."))};g=function(a,b){var c=Object.keys(a),g=Object.keys(b);c.sort();
g.sort();return n(c,g)&&Object.keys(a).every(function(c){var h=a[c],g=b[c];return l(h,g)?!0:(d(h+" should be "+g+" for key "+c),!1)})};this.areNodesEqual=p;this.shouldBeNull=function(a,b){m(a,b,"null")};this.shouldBeNonNull=function(a,b){var c,g;try{g=eval(b)}catch(l){c=l}c?d(b+" should be non-null. Threw exception "+c):null!==g?k.pass(b+" is non-null."):d(b+" should be non-null. Was "+g)};this.shouldBe=m;this.countFailedTests=function(){return r};this.name=function(a){var b,c,d=[],g=a.length;d.length=
g;for(b=0;b<g;b+=1){c=Runtime.getFunctionName(a[b])||"";if(""===c)throw"Found a function without a name.";d[b]={f:a[b],name:c}}return d}};
core.UnitTester=function(){function e(d,l){return"<span style='color:blue;cursor:pointer' onclick='"+l+"'>"+d+"</span>"}function k(l){d.reporter&&d.reporter(l)}var d=this,n=0,q=new core.UnitTestLogger,p={},l="BrowserRuntime"===runtime.type();this.resourcePrefix="";this.reporter=function(d){var k,c;l?runtime.log("<span>Running "+e(d.description,'runTest("'+d.suite[0]+'","'+d.description+'")')+"</span>"):runtime.log("Running "+d.description);if(!d.success)for(k=0;k<d.log.length;k+=1)c=d.log[k],runtime.log(c.category,
c.message)};this.runTests=function(m,r,c){function g(c){if(0===c.length)p[b]=h,n+=a.countFailedTests(),r();else{u=c[0].f;var d=c[0].name,l=!0===c[0].expectFail;w=a.countFailedTests();f.setUp();q.startTest(b,d);l&&a.beginExpectFail();u(function(){l&&a.endExpectFail();k(q.endTest());f.tearDown();h[d]=w===a.countFailedTests();g(c.slice(1))})}}var b=Runtime.getFunctionName(m)||"",a=new core.UnitTestRunner(d.resourcePrefix,q),f=new m(a),h={},t,u,x,z,w;if(p.hasOwnProperty(b))runtime.log("Test "+b+" has already run.");
else{l?runtime.log("<span>Running "+e(b,'runSuite("'+b+'");')+": "+f.description()+"</span>"):runtime.log("Running "+b+": "+f.description);x=f.tests();for(t=0;t<x.length;t+=1)u=x[t].f,m=x[t].name,z=!0===x[t].expectFail,c.length&&-1===c.indexOf(m)||(w=a.countFailedTests(),f.setUp(),q.startTest(b,m),z&&a.beginExpectFail(),u(),z&&a.endExpectFail(),k(q.endTest()),f.tearDown(),h[m]=w===a.countFailedTests());g(f.asyncTests())}};this.countFailedTests=function(){return n};this.results=function(){return p}};
// Input 14
core.Utils=function(){function e(k,d){if(d&&Array.isArray(d)){k=k||[];if(!Array.isArray(k))throw"Destination is not an array.";k=k.concat(d.map(function(d){return e(null,d)}))}else if(d&&"object"===typeof d){k=k||{};if("object"!==typeof k)throw"Destination is not an object.";Object.keys(d).forEach(function(n){k[n]=e(k[n],d[n])})}else k=d;return k}this.hashString=function(e){var d=0,n,q;n=0;for(q=e.length;n<q;n+=1)d=(d<<5)-d+e.charCodeAt(n),d|=0;return d};this.mergeObjects=function(k,d){Object.keys(d).forEach(function(n){k[n]=
e(k[n],d[n])});return k}};
// Input 15
/*

 WebODF
 Copyright (c) 2010 Jos van den Oever
 Licensed under the ... License:

 Project home: http://www.webodf.org/
*/
runtime.loadClass("core.RawInflate");runtime.loadClass("core.ByteArray");runtime.loadClass("core.ByteArrayWriter");runtime.loadClass("core.Base64");
core.Zip=function(e,k){function d(a){var b=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,
853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,
4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,
225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,
2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,
2932959818,3654703836,1088359270,936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],c,f,d=a.length,h=0,h=0;c=-1;for(f=0;f<d;f+=1)h=(c^a[f])&255,h=b[h],c=c>>>8^h;return c^-1}function n(a){return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&15,a>>5&63,(a&31)<<1)}function q(a){var b=a.getFullYear();return 1980>b?0:b-1980<<
25|a.getMonth()+1<<21|a.getDate()<<16|a.getHours()<<11|a.getMinutes()<<5|a.getSeconds()>>1}function p(a,b){var c,f,d,g,l,m,e,k=this;this.load=function(b){if(null!==k.data)b(null,k.data);else{var c=l+34+f+d+256;c+e>h&&(c=h-e);runtime.read(a,e,c,function(c,f){if(c||null===f)b(c,f);else a:{var d=f,h=new core.ByteArray(d),e=h.readUInt32LE(),A;if(67324752!==e)b("File entry signature is wrong."+e.toString()+" "+d.length.toString(),null);else{h.pos+=22;e=h.readUInt16LE();A=h.readUInt16LE();h.pos+=e+A;if(g){d=
d.subarray(h.pos,h.pos+l);if(l!==d.length){b("The amount of compressed bytes read was "+d.length.toString()+" instead of "+l.toString()+" for "+k.filename+" in "+a+".",null);break a}d=u(d,m)}else d=d.subarray(h.pos,h.pos+m);m!==d.length?b("The amount of bytes read was "+d.length.toString()+" instead of "+m.toString()+" for "+k.filename+" in "+a+".",null):(k.data=d,b(null,d))}}})}};this.set=function(b,a,c,f){k.filename=b;k.data=a;k.compressed=c;k.date=f};this.error=null;b&&(c=b.readUInt32LE(),33639248!==
c?this.error="Central directory entry has wrong signature at position "+(b.pos-4).toString()+' for file "'+a+'": '+b.data.length.toString():(b.pos+=6,g=b.readUInt16LE(),this.date=n(b.readUInt32LE()),b.readUInt32LE(),l=b.readUInt32LE(),m=b.readUInt32LE(),f=b.readUInt16LE(),d=b.readUInt16LE(),c=b.readUInt16LE(),b.pos+=8,e=b.readUInt32LE(),this.filename=runtime.byteArrayToString(b.data.subarray(b.pos,b.pos+f),"utf8"),this.data=null,b.pos+=f+d+c))}function l(b,a){if(22!==b.length)a("Central directory length should be 22.",
x);else{var c=new core.ByteArray(b),d;d=c.readUInt32LE();101010256!==d?a("Central directory signature is wrong: "+d.toString(),x):(d=c.readUInt16LE(),0!==d?a("Zip files with non-zero disk numbers are not supported.",x):(d=c.readUInt16LE(),0!==d?a("Zip files with non-zero disk numbers are not supported.",x):(d=c.readUInt16LE(),t=c.readUInt16LE(),d!==t?a("Number of entries is inconsistent.",x):(d=c.readUInt32LE(),c=c.readUInt16LE(),c=h-22-d,runtime.read(e,c,h-c,function(b,c){if(b||null===c)a(b,x);else a:{var d=
new core.ByteArray(c),h,g;f=[];for(h=0;h<t;h+=1){g=new p(e,d);if(g.error){a(g.error,x);break a}f[f.length]=g}a(null,x)}})))))}}function m(a,b){var c=null,d,h;for(h=0;h<f.length;h+=1)if(d=f[h],d.filename===a){c=d;break}c?c.data?b(null,c.data):c.load(b):b(a+" not found.",null)}function r(a){var b=new core.ByteArrayWriter("utf8"),c=0;b.appendArray([80,75,3,4,20,0,0,0,0,0]);a.data&&(c=a.data.length);b.appendUInt32LE(q(a.date));b.appendUInt32LE(a.data?d(a.data):0);b.appendUInt32LE(c);b.appendUInt32LE(c);
b.appendUInt16LE(a.filename.length);b.appendUInt16LE(0);b.appendString(a.filename);a.data&&b.appendByteArray(a.data);return b}function c(a,b){var c=new core.ByteArrayWriter("utf8"),f=0;c.appendArray([80,75,1,2,20,0,20,0,0,0,0,0]);a.data&&(f=a.data.length);c.appendUInt32LE(q(a.date));c.appendUInt32LE(a.data?d(a.data):0);c.appendUInt32LE(f);c.appendUInt32LE(f);c.appendUInt16LE(a.filename.length);c.appendArray([0,0,0,0,0,0,0,0,0,0,0,0]);c.appendUInt32LE(b);c.appendString(a.filename);return c}function g(a,
b){if(a===f.length)b(null);else{var c=f[a];null!==c.data?g(a+1,b):c.load(function(c){c?b(c):g(a+1,b)})}}function b(a,b){g(0,function(d){if(d)b(d);else{var h,g,l=new core.ByteArrayWriter("utf8"),e=[0];for(h=0;h<f.length;h+=1)l.appendByteArrayWriter(r(f[h])),e.push(l.getLength());d=l.getLength();for(h=0;h<f.length;h+=1)g=f[h],l.appendByteArrayWriter(c(g,e[h]));h=l.getLength()-d;l.appendArray([80,75,5,6,0,0,0,0]);l.appendUInt16LE(f.length);l.appendUInt16LE(f.length);l.appendUInt32LE(h);l.appendUInt32LE(d);
l.appendArray([0,0]);a(l.getByteArray())}})}function a(a,c){b(function(b){runtime.writeFile(a,b,c)},c)}var f,h,t,u=(new core.RawInflate).inflate,x=this,z=new core.Base64;this.load=m;this.save=function(a,b,c,d){var h,g;for(h=0;h<f.length;h+=1)if(g=f[h],g.filename===a){g.set(a,b,c,d);return}g=new p(e);g.set(a,b,c,d);f.push(g)};this.remove=function(a){var b,c;for(b=0;b<f.length;b+=1)if(c=f[b],c.filename===a)return f.splice(b,1),!0;return!1};this.write=function(b){a(e,b)};this.writeAs=a;this.createByteArray=
b;this.loadContentXmlAsFragments=function(a,b){x.loadAsString(a,function(a,c){if(a)return b.rootElementReady(a);b.rootElementReady(null,c,!0)})};this.loadAsString=function(a,b){m(a,function(a,c){if(a||null===c)return b(a,null);var f=runtime.byteArrayToString(c,"utf8");b(null,f)})};this.loadAsDOM=function(a,b){x.loadAsString(a,function(a,c){if(a||null===c)b(a,null);else{var f=(new DOMParser).parseFromString(c,"text/xml");b(null,f)}})};this.loadAsDataURL=function(a,b,c){m(a,function(a,f){if(a||!f)return c(a,
null);var d=0,h;b||(b=80===f[1]&&78===f[2]&&71===f[3]?"image/png":255===f[0]&&216===f[1]&&255===f[2]?"image/jpeg":71===f[0]&&73===f[1]&&70===f[2]?"image/gif":"");for(h="data:"+b+";base64,";d<f.length;)h+=z.convertUTF8ArrayToBase64(f.subarray(d,Math.min(d+45E3,f.length))),d+=45E3;c(null,h)})};this.getEntries=function(){return f.slice()};h=-1;null===k?f=[]:runtime.getFileSize(e,function(a){h=a;0>h?k("File '"+e+"' cannot be read.",x):runtime.read(e,h-22,22,function(a,b){a||null===k||null===b?k(a,x):
l(b,k)})})};
// Input 16
gui.Avatar=function(e,k){var d=this,n,q,p;this.setColor=function(d){q.style.borderColor=d};this.setImageUrl=function(l){d.isVisible()?q.src=l:p=l};this.isVisible=function(){return"block"===n.style.display};this.show=function(){p&&(q.src=p,p=void 0);n.style.display="block"};this.hide=function(){n.style.display="none"};this.markAsFocussed=function(d){n.className=d?"active":""};this.destroy=function(d){e.removeChild(n);d()};(function(){var d=e.ownerDocument,m=d.documentElement.namespaceURI;n=d.createElementNS(m,
"div");q=d.createElementNS(m,"img");q.width=64;q.height=64;n.appendChild(q);n.style.width="64px";n.style.height="70px";n.style.position="absolute";n.style.top="-80px";n.style.left="-34px";n.style.display=k?"block":"none";n.className="handle";e.appendChild(n)})()};
// Input 17
gui.EditInfoHandle=function(e){var k=[],d,n=e.ownerDocument,q=n.documentElement.namespaceURI;this.setEdits=function(e){k=e;var l,m,r,c;d.innerHTML="";for(e=0;e<k.length;e+=1)l=n.createElementNS(q,"div"),l.className="editInfo",m=n.createElementNS(q,"span"),m.className="editInfoColor",m.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k[e].memberid),r=n.createElementNS(q,"span"),r.className="editInfoAuthor",r.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k[e].memberid),
c=n.createElementNS(q,"span"),c.className="editInfoTime",c.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k[e].memberid),c.innerHTML=k[e].time,l.appendChild(m),l.appendChild(r),l.appendChild(c),d.appendChild(l)};this.show=function(){d.style.display="block"};this.hide=function(){d.style.display="none"};this.destroy=function(k){e.removeChild(d);k()};d=n.createElementNS(q,"div");d.setAttribute("class","editInfoHandle");d.style.display="none";e.appendChild(d)};
// Input 18
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.KeyboardHandler=function(){function e(d,e){e||(e=k.None);return d+":"+e}var k=gui.KeyboardHandler.Modifier,d=null,n={};this.setDefault=function(e){d=e};this.bind=function(d,k,l,m){d=e(d,k);runtime.assert(m||!1===n.hasOwnProperty(d),"tried to overwrite the callback handler of key combo: "+d);n[d]=l};this.unbind=function(d,k){var l=e(d,k);delete n[l]};this.reset=function(){d=null;n={}};this.handleEvent=function(q){var p=q.keyCode,l=k.None;q.metaKey&&(l|=k.Meta);q.ctrlKey&&(l|=k.Ctrl);q.altKey&&
(l|=k.Alt);q.shiftKey&&(l|=k.Shift);p=e(p,l);p=n[p];l=!1;p?l=p():null!==d&&(l=d(q));l&&(q.preventDefault?q.preventDefault():q.returnValue=!1)}};gui.KeyboardHandler.Modifier={None:0,Meta:1,Ctrl:2,Alt:4,CtrlAlt:6,Shift:8,MetaShift:9,CtrlShift:10,AltShift:12};
gui.KeyboardHandler.KeyCode={Backspace:8,Tab:9,Clear:12,Enter:13,Ctrl:17,End:35,Home:36,Left:37,Up:38,Right:39,Down:40,Delete:46,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LeftMeta:91,MetaInMozilla:224};(function(){return gui.KeyboardHandler})();
// Input 19
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.Namespaces={namespaceMap:{db:"urn:oasis:names:tc:opendocument:xmlns:database:1.0",dc:"http://purl.org/dc/elements/1.1/",dr3d:"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",draw:"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",chart:"urn:oasis:names:tc:opendocument:xmlns:chart:1.0",fo:"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",form:"urn:oasis:names:tc:opendocument:xmlns:form:1.0",meta:"urn:oasis:names:tc:opendocument:xmlns:meta:1.0",number:"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
office:"urn:oasis:names:tc:opendocument:xmlns:office:1.0",presentation:"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",style:"urn:oasis:names:tc:opendocument:xmlns:style:1.0",svg:"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",table:"urn:oasis:names:tc:opendocument:xmlns:table:1.0",text:"urn:oasis:names:tc:opendocument:xmlns:text:1.0",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},prefixMap:{},dbns:"urn:oasis:names:tc:opendocument:xmlns:database:1.0",
dcns:"http://purl.org/dc/elements/1.1/",dr3dns:"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",drawns:"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",chartns:"urn:oasis:names:tc:opendocument:xmlns:chart:1.0",fons:"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",formns:"urn:oasis:names:tc:opendocument:xmlns:form:1.0",metans:"urn:oasis:names:tc:opendocument:xmlns:meta:1.0",numberns:"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",officens:"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
presentationns:"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",stylens:"urn:oasis:names:tc:opendocument:xmlns:style:1.0",svgns:"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",tablens:"urn:oasis:names:tc:opendocument:xmlns:table:1.0",textns:"urn:oasis:names:tc:opendocument:xmlns:text:1.0",xlinkns:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/XML/1998/namespace"};
(function(){var e=odf.Namespaces.namespaceMap,k=odf.Namespaces.prefixMap,d;for(d in e)e.hasOwnProperty(d)&&(k[e[d]]=d)})();odf.Namespaces.forEachPrefix=function(e){var k=odf.Namespaces.namespaceMap,d;for(d in k)k.hasOwnProperty(d)&&e(d,k[d])};odf.Namespaces.lookupNamespaceURI=function(e){var k=null;odf.Namespaces.namespaceMap.hasOwnProperty(e)&&(k=odf.Namespaces.namespaceMap[e]);return k};odf.Namespaces.lookupPrefix=function(e){var k=odf.Namespaces.prefixMap;return k.hasOwnProperty(e)?k[e]:null};
odf.Namespaces.lookupNamespaceURI.lookupNamespaceURI=odf.Namespaces.lookupNamespaceURI;
// Input 20
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.Namespaces");
odf.OdfUtils=function(){function e(a){return"image"===(a&&a.localName)&&a.namespaceURI===O}function k(a){return null!==a&&a.nodeType===Node.ELEMENT_NODE&&"frame"===a.localName&&a.namespaceURI===O&&"as-char"===a.getAttributeNS(y,"anchor-type")}function d(a){var b;(b="annotation"===(a&&a.localName)&&a.namespaceURI===odf.Namespaces.officens)||(b="div"===(a&&a.localName)&&"annotationWrapper"===a.className);return b}function n(a){return"a"===(a&&a.localName)&&a.namespaceURI===y}function q(a){var b=a&&
a.localName;return("p"===b||"h"===b)&&a.namespaceURI===y}function p(a){for(;a&&!q(a);)a=a.parentNode;return a}function l(a){return/^[ \t\r\n]+$/.test(a)}function m(a){if(null===a||a.nodeType!==Node.ELEMENT_NODE)return!1;var b=a.localName;return/^(span|p|h|a|meta)$/.test(b)&&a.namespaceURI===y||"span"===b&&"annotationHighlight"===a.className}function r(a){var b=a&&a.localName,c=!1;b&&(a=a.namespaceURI,a===y&&(c="s"===b||"tab"===b||"line-break"===b));return c}function c(a){return r(a)||k(a)||d(a)}function g(a){var b=
a&&a.localName,c=!1;b&&(a=a.namespaceURI,a===y&&(c="s"===b));return c}function b(a){for(;null!==a.firstChild&&m(a);)a=a.firstChild;return a}function a(a){for(;null!==a.lastChild&&m(a);)a=a.lastChild;return a}function f(b){for(;!q(b)&&null===b.previousSibling;)b=b.parentNode;return q(b)?null:a(b.previousSibling)}function h(a){for(;!q(a)&&null===a.nextSibling;)a=a.parentNode;return q(a)?null:b(a.nextSibling)}function t(a){for(var b=!1;a;)if(a.nodeType===Node.TEXT_NODE)if(0===a.length)a=f(a);else return!l(a.data.substr(a.length-
1,1));else c(a)?(b=!1===g(a),a=null):a=f(a);return b}function u(a){var d=!1,f;for(a=a&&b(a);a;){f=a.nodeType===Node.TEXT_NODE?a.length:0;if(0<f&&!l(a.data)){d=!0;break}if(c(a)){d=!0;break}a=h(a)}return d}function x(a,b){return l(a.data.substr(b))?!u(h(a)):!1}function z(a,b){var d=a.data,h;if(!l(d[b])||c(a.parentNode))return!1;0<b?l(d[b-1])||(h=!0):t(f(a))&&(h=!0);return!0===h?x(a,b)?!1:!0:!1}function w(a){return(a=/(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px)|(%))/.exec(a))?
{value:parseFloat(a[1]),unit:a[3]}:null}function v(a){return(a=w(a))&&(0>a.value||"%"===a.unit)?null:a}function s(a){return(a=w(a))&&"%"!==a.unit?null:a}function A(a){switch(a.namespaceURI){case odf.Namespaces.drawns:case odf.Namespaces.svgns:case odf.Namespaces.dr3dns:return!1;case odf.Namespaces.textns:switch(a.localName){case "note-body":case "ruby-text":return!1}break;case odf.Namespaces.officens:switch(a.localName){case "annotation":case "binary-data":case "event-listeners":return!1}break;default:switch(a.localName){case "cursor":case "editinfo":return!1}}return!0}
function E(a,b,f){var h=a.startContainer.ownerDocument.createRange(),g;g=K.getNodesInRange(a,function(g){h.selectNodeContents(g);if(r(g.parentNode)||d(g.parentNode))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE){if(b&&K.rangesIntersect(a,h)||K.containsRange(a,h))if(f||Boolean(p(g)&&(!l(g.textContent)||z(g,0))))return NodeFilter.FILTER_ACCEPT}else if(c(g)){if(b&&K.rangesIntersect(a,h)||K.containsRange(a,h))return NodeFilter.FILTER_ACCEPT}else if(A(g)||m(g))return NodeFilter.FILTER_SKIP;
return NodeFilter.FILTER_REJECT});h.detach();return g}function H(a,b){var c=a;if(b<c.childNodes.length-1)c=c.childNodes[b+1];else{for(;!c.nextSibling;)c=c.parentNode;c=c.nextSibling}for(;c.firstChild;)c=c.firstChild;return c}var y=odf.Namespaces.textns,O=odf.Namespaces.drawns,W=odf.Namespaces.xlinkns,G=/^\s*$/,K=new core.DomUtils;this.isImage=e;this.isCharacterFrame=k;this.isInlineRoot=d;this.isTextSpan=function(a){return"span"===(a&&a.localName)&&a.namespaceURI===y};this.isHyperlink=n;this.getHyperlinkTarget=
function(a){return a.getAttributeNS(W,"href")};this.isParagraph=q;this.getParagraphElement=p;this.isWithinTrackedChanges=function(a,b){for(;a&&a!==b;){if(a.namespaceURI===y&&"tracked-changes"===a.localName)return!0;a=a.parentNode}return!1};this.isListItem=function(a){return"list-item"===(a&&a.localName)&&a.namespaceURI===y};this.isLineBreak=function(a){return"line-break"===(a&&a.localName)&&a.namespaceURI===y};this.isODFWhitespace=l;this.isGroupingElement=m;this.isCharacterElement=r;this.isAnchoredAsCharacterElement=
c;this.isSpaceElement=g;this.firstChild=b;this.lastChild=a;this.previousNode=f;this.nextNode=h;this.scanLeftForNonSpace=t;this.lookLeftForCharacter=function(a){var b,d=b=0;a.nodeType===Node.TEXT_NODE&&(d=a.length);0<d?(b=a.data,b=l(b.substr(d-1,1))?1===d?t(f(a))?2:0:l(b.substr(d-2,1))?0:2:1):c(a)&&(b=1);return b};this.lookRightForCharacter=function(a){var b=!1,d=0;a&&a.nodeType===Node.TEXT_NODE&&(d=a.length);0<d?b=!l(a.data.substr(0,1)):c(a)&&(b=!0);return b};this.scanLeftForAnyCharacter=function(b){var d=
!1,h;for(b=b&&a(b);b;){h=b.nodeType===Node.TEXT_NODE?b.length:0;if(0<h&&!l(b.data)){d=!0;break}if(c(b)){d=!0;break}b=f(b)}return d};this.scanRightForAnyCharacter=u;this.isTrailingWhitespace=x;this.isSignificantWhitespace=z;this.isDowngradableSpaceElement=function(a){return a.namespaceURI===y&&"s"===a.localName?t(f(a))&&u(h(a)):!1};this.getFirstNonWhitespaceChild=function(a){for(a=a&&a.firstChild;a&&a.nodeType===Node.TEXT_NODE&&G.test(a.nodeValue);)a=a.nextSibling;return a};this.parseLength=w;this.parseNonNegativeLength=
v;this.parseFoFontSize=function(a){var b;b=(b=w(a))&&(0>=b.value||"%"===b.unit)?null:b;return b||s(a)};this.parseFoLineHeight=function(a){return v(a)||s(a)};this.isTextContentContainingNode=A;this.getTextNodes=function(a,b){var c=a.startContainer.ownerDocument.createRange(),d;d=K.getNodesInRange(a,function(d){c.selectNodeContents(d);if(d.nodeType===Node.TEXT_NODE){if(b&&K.rangesIntersect(a,c)||K.containsRange(a,c))return Boolean(p(d)&&(!l(d.textContent)||z(d,0)))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}else if(K.rangesIntersect(a,
c)&&A(d))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_REJECT});c.detach();return d};this.getTextElements=E;this.getParagraphElements=function(a){var b=a.startContainer.ownerDocument.createRange(),c;c=K.getNodesInRange(a,function(c){b.selectNodeContents(c);if(q(c)){if(K.rangesIntersect(a,b))return NodeFilter.FILTER_ACCEPT}else if(A(c)||m(c))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_REJECT});b.detach();return c};this.getImageElements=function(a){var b=a.startContainer.ownerDocument.createRange(),
c;c=K.getNodesInRange(a,function(c){b.selectNodeContents(c);return e(c)&&K.containsRange(a,b)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});b.detach();return c};this.getHyperlinkElements=function(a){var b=[],c=a.cloneRange();a.collapsed&&a.endContainer.nodeType===Node.ELEMENT_NODE&&(a=H(a.endContainer,a.endOffset),a.nodeType===Node.TEXT_NODE&&c.setEnd(a,1));E(c,!0,!1).forEach(function(a){for(a=a.parentNode;!q(a);){if(n(a)&&-1===b.indexOf(a)){b.push(a);break}a=a.parentNode}});c.detach();return b}};
// Input 21
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Server=function(){};ops.Server.prototype.connect=function(e,k){};ops.Server.prototype.networkStatus=function(){};ops.Server.prototype.login=function(e,k,d,n){};ops.Server.prototype.joinSession=function(e,k,d,n){};ops.Server.prototype.leaveSession=function(e,k,d,n){};ops.Server.prototype.getGenesisUrl=function(e){};
// Input 22
xmldom.LSSerializerFilter=function(){};xmldom.LSSerializerFilter.prototype.acceptNode=function(e){};
// Input 23
xmldom.XPathIterator=function(){};xmldom.XPathIterator.prototype.next=function(){};xmldom.XPathIterator.prototype.reset=function(){};
function createXPathSingleton(){function e(c,b,a){return-1!==c&&(c<b||-1===b)&&(c<a||-1===a)}function k(d){for(var b=[],a=0,f=d.length,h;a<f;){var l=d,m=f,k=b,n="",p=[],q=l.indexOf("[",a),r=l.indexOf("/",a),A=l.indexOf("=",a);e(r,q,A)?(n=l.substring(a,r),a=r+1):e(q,r,A)?(n=l.substring(a,q),a=c(l,q,p)):e(A,r,q)?(n=l.substring(a,A),a=A):(n=l.substring(a,m),a=m);k.push({location:n,predicates:p});if(a<f&&"="===d[a]){h=d.substring(a+1,f);if(2<h.length&&("'"===h[0]||'"'===h[0]))h=h.slice(1,h.length-1);
else try{h=parseInt(h,10)}catch(E){}a=f}}return{steps:b,value:h}}function d(){var c=null,b=!1;this.setNode=function(a){c=a};this.reset=function(){b=!1};this.next=function(){var a=b?null:c;b=!0;return a}}function n(c,b,a){this.reset=function(){c.reset()};this.next=function(){for(var d=c.next();d;){d.nodeType===Node.ELEMENT_NODE&&(d=d.getAttributeNodeNS(b,a));if(d)break;d=c.next()}return d}}function q(c,b){var a=c.next(),d=null;this.reset=function(){c.reset();a=c.next();d=null};this.next=function(){for(;a;){if(d)if(b&&
d.firstChild)d=d.firstChild;else{for(;!d.nextSibling&&d!==a;)d=d.parentNode;d===a?a=c.next():d=d.nextSibling}else{do(d=a.firstChild)||(a=c.next());while(a&&!d)}if(d&&d.nodeType===Node.ELEMENT_NODE)return d}return null}}function p(c,b){this.reset=function(){c.reset()};this.next=function(){for(var a=c.next();a&&!b(a);)a=c.next();return a}}function l(c,b,a){b=b.split(":",2);var d=a(b[0]),h=b[1];return new p(c,function(a){return a.localName===h&&a.namespaceURI===d})}function m(c,b,a){var f=new d,h=r(f,
b,a),l=b.value;return void 0===l?new p(c,function(a){f.setNode(a);h.reset();return null!==h.next()}):new p(c,function(a){f.setNode(a);h.reset();return(a=h.next())?a.nodeValue===l:!1})}var r,c;c=function(c,b,a){for(var d=b,h=c.length,l=0;d<h;)"]"===c[d]?(l-=1,0>=l&&a.push(k(c.substring(b,d)))):"["===c[d]&&(0>=l&&(b=d+1),l+=1),d+=1;return d};r=function(c,b,a){var d,h,e,k;for(d=0;d<b.steps.length;d+=1){e=b.steps[d];h=e.location;if(""===h)c=new q(c,!1);else if("@"===h[0]){h=h.substr(1).split(":",2);k=
a(h[0]);if(!k)throw"No namespace associated with the prefix "+h[0];c=new n(c,k,h[1])}else"."!==h&&(c=new q(c,!1),-1!==h.indexOf(":")&&(c=l(c,h,a)));for(h=0;h<e.predicates.length;h+=1)k=e.predicates[h],c=m(c,k,a)}return c};return{getODFElementsWithXPath:function(c,b,a){var f=c.ownerDocument,h=[],l=null;if(f&&"function"===typeof f.evaluate)for(a=f.evaluate(b,c,a,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null),l=a.iterateNext();null!==l;)l.nodeType===Node.ELEMENT_NODE&&h.push(l),l=a.iterateNext();else{h=
new d;h.setNode(c);c=k(b);h=r(h,c,a);c=[];for(a=h.next();a;)c.push(a),a=h.next();h=c}return h}}}xmldom.XPath=createXPathSingleton();
// Input 24
runtime.loadClass("core.DomUtils");
core.Cursor=function(e,k){function d(b){b.parentNode&&(m.push(b.previousSibling),m.push(b.nextSibling),b.parentNode.removeChild(b))}function n(b,a,c){if(a.nodeType===Node.TEXT_NODE){runtime.assert(Boolean(a),"putCursorIntoTextNode: invalid container");var d=a.parentNode;runtime.assert(Boolean(d),"putCursorIntoTextNode: container without parent");runtime.assert(0<=c&&c<=a.length,"putCursorIntoTextNode: offset is out of bounds");0===c?d.insertBefore(b,a):(c!==a.length&&a.splitText(c),d.insertBefore(b,
a.nextSibling))}else a.nodeType===Node.ELEMENT_NODE&&a.insertBefore(b,a.childNodes.item(c));m.push(b.previousSibling);m.push(b.nextSibling)}var q=e.createElementNS("urn:webodf:names:cursor","cursor"),p=e.createElementNS("urn:webodf:names:cursor","anchor"),l,m=[],r=e.createRange(),c,g=new core.DomUtils;this.getNode=function(){return q};this.getAnchorNode=function(){return p.parentNode?p:q};this.getSelectedRange=function(){c?(r.setStartBefore(q),r.collapse(!0)):(r.setStartAfter(l?p:q),r.setEndBefore(l?
q:p));return r};this.setSelectedRange=function(b,a){r&&r!==b&&r.detach();r=b;l=!1!==a;(c=b.collapsed)?(d(p),d(q),n(q,b.startContainer,b.startOffset)):(d(p),d(q),n(l?q:p,b.endContainer,b.endOffset),n(l?p:q,b.startContainer,b.startOffset));m.forEach(g.normalizeTextNodes);m.length=0};this.hasForwardSelection=function(){return l};this.remove=function(){d(q);m.forEach(g.normalizeTextNodes);m.length=0};q.setAttributeNS("urn:webodf:names:cursor","memberId",k);p.setAttributeNS("urn:webodf:names:cursor","memberId",
k)};
// Input 25
runtime.loadClass("core.PositionIterator");core.PositionFilter=function(){};core.PositionFilter.FilterResult={FILTER_ACCEPT:1,FILTER_REJECT:2,FILTER_SKIP:3};core.PositionFilter.prototype.acceptPosition=function(e){};(function(){return core.PositionFilter})();
// Input 26
runtime.loadClass("core.PositionFilter");core.PositionFilterChain=function(){var e=[],k=core.PositionFilter.FilterResult.FILTER_ACCEPT,d=core.PositionFilter.FilterResult.FILTER_REJECT;this.acceptPosition=function(n){var q;for(q=0;q<e.length;q+=1)if(e[q].acceptPosition(n)===d)return d;return k};this.addFilter=function(d){e.push(d)}};
// Input 27
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.PositionFilter");
core.StepIterator=function(e,k){function d(){g=null;a=b=void 0}function n(){void 0===a&&(a=e.acceptPosition(k)===c);return a}function q(a,b){d();return k.setUnfilteredPosition(a,b)}function p(){g||(g=k.container());return g}function l(){void 0===b&&(b=k.unfilteredDomOffset());return b}function m(){for(d();k.nextPosition();)if(d(),n())return!0;return!1}function r(){for(d();k.previousPosition();)if(d(),n())return!0;return!1}var c=core.PositionFilter.FilterResult.FILTER_ACCEPT,g,b,a;this.isStep=n;this.setPosition=
q;this.container=p;this.offset=l;this.nextStep=m;this.previousStep=r;this.roundToClosestStep=function(){var a=p(),b=l(),c=n();c||(c=r(),c||(q(a,b),c=m()));return c};this.roundToPreviousStep=function(){var a=n();a||(a=r());return a};this.roundToNextStep=function(){var a=n();a||(a=m());return a}};
// Input 28
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.AnnotatableCanvas=function(){};gui.AnnotatableCanvas.prototype.refreshSize=function(){};gui.AnnotatableCanvas.prototype.getZoomLevel=function(){};gui.AnnotatableCanvas.prototype.getSizer=function(){};
gui.AnnotationViewManager=function(e,k,d,n){function q(a){var b=a.node,d=a.end;a=c.createRange();d&&(a.setStart(b,b.childNodes.length),a.setEnd(d,0),d=g.getTextNodes(a,!1),d.forEach(function(a){var d=c.createElement("span"),h=b.getAttributeNS(odf.Namespaces.officens,"name");d.className="annotationHighlight";d.setAttribute("annotation",h);a.parentNode.insertBefore(d,a);d.appendChild(a)}));a.detach()}function p(a){var c=e.getSizer();a?(d.style.display="inline-block",c.style.paddingRight=b.getComputedStyle(d).width):
(d.style.display="none",c.style.paddingRight=0);e.refreshSize()}function l(){r.sort(function(a,b){return a.node.compareDocumentPosition(b.node)===Node.DOCUMENT_POSITION_FOLLOWING?-1:1})}function m(){var a;for(a=0;a<r.length;a+=1){var b=r[a],c=b.node.parentNode,g=c.nextElementSibling,l=g.nextElementSibling,m=c.parentNode,k=0,k=r[r.indexOf(b)-1],n=void 0,b=e.getZoomLevel();c.style.left=(d.getBoundingClientRect().left-m.getBoundingClientRect().left)/b+"px";c.style.width=d.getBoundingClientRect().width/
b+"px";g.style.width=parseFloat(c.style.left)-30+"px";k&&(n=k.node.parentNode.getBoundingClientRect(),20>=(m.getBoundingClientRect().top-n.bottom)/b?c.style.top=Math.abs(m.getBoundingClientRect().top-n.bottom)/b+20+"px":c.style.top="0px");l.style.left=g.getBoundingClientRect().width/b+"px";var g=l.style,m=l.getBoundingClientRect().left/b,k=l.getBoundingClientRect().top/b,n=c.getBoundingClientRect().left/b,p=c.getBoundingClientRect().top/b,q=0,A=0,q=n-m,q=q*q,A=p-k,A=A*A,m=Math.sqrt(q+A);g.width=m+
"px";k=Math.asin((c.getBoundingClientRect().top-l.getBoundingClientRect().top)/(b*parseFloat(l.style.width)));l.style.transform="rotate("+k+"rad)";l.style.MozTransform="rotate("+k+"rad)";l.style.WebkitTransform="rotate("+k+"rad)";l.style.msTransform="rotate("+k+"rad)"}}var r=[],c=k.ownerDocument,g=new odf.OdfUtils,b=runtime.getWindow();runtime.assert(Boolean(b),"Expected to be run in an environment which has a global window, like a browser.");this.rerenderAnnotations=m;this.getMinimumHeightForAnnotationPane=
function(){return"none"!==d.style.display&&0<r.length?(r[r.length-1].node.parentNode.getBoundingClientRect().bottom-d.getBoundingClientRect().top)/e.getZoomLevel()+"px":null};this.addAnnotation=function(a){p(!0);r.push({node:a.node,end:a.end});l();var b=c.createElement("div"),d=c.createElement("div"),g=c.createElement("div"),e=c.createElement("div"),k;k=a.node;b.className="annotationWrapper";k.parentNode.insertBefore(b,k);d.className="annotationNote";d.appendChild(k);n&&(k=c.createElement("div"),
k.className="annotationRemoveButton",d.appendChild(k));g.className="annotationConnector horizontal";e.className="annotationConnector angular";b.appendChild(d);b.appendChild(g);b.appendChild(e);a.end&&q(a);m()};this.forgetAnnotations=function(){for(;r.length;){var a=r[0],b=r.indexOf(a),d=a.node,g=d.parentNode.parentNode;"div"===g.localName&&(g.parentNode.insertBefore(d,g),g.parentNode.removeChild(g));a=a.node.getAttributeNS(odf.Namespaces.officens,"name");a=c.querySelectorAll('span.annotationHighlight[annotation="'+
a+'"]');g=d=void 0;for(d=0;d<a.length;d+=1){for(g=a.item(d);g.firstChild;)g.parentNode.insertBefore(g.firstChild,g);g.parentNode.removeChild(g)}-1!==b&&r.splice(b,1);0===r.length&&p(!1)}}};
// Input 29
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");runtime.loadClass("xmldom.XPath");
gui.HyperlinkClickHandler=function(e){function k(){e().removeAttributeNS("urn:webodf:names:helper","links")}function d(){e().setAttributeNS("urn:webodf:names:helper","links","inactive")}var n=gui.HyperlinkClickHandler.Modifier.None,q=gui.HyperlinkClickHandler.Modifier.Ctrl,p=gui.HyperlinkClickHandler.Modifier.Meta,l=new odf.OdfUtils,m=xmldom.XPath,r=n;this.handleClick=function(c){var d=c.target||c.srcElement,b,a;c.ctrlKey?b=q:c.metaKey&&(b=p);if(r===n||r===b){a:{for(;null!==d;){if(l.isHyperlink(d))break a;
if(l.isParagraph(d))break;d=d.parentNode}d=null}d&&(d=l.getHyperlinkTarget(d))&&("#"===d[0]?(d=d.substring(1),b=e(),a=m.getODFElementsWithXPath(b,"//text:bookmark-start[@text:name='"+d+"']",odf.Namespaces.lookupNamespaceURI),0===a.length&&(a=m.getODFElementsWithXPath(b,"//text:bookmark[@text:name='"+d+"']",odf.Namespaces.lookupNamespaceURI)),0<a.length&&a[0].scrollIntoView(!0)):runtime.getWindow().open(d),c.preventDefault?c.preventDefault():c.returnValue=!1)}};this.showPointerCursor=k;this.showTextCursor=
d;this.setModifier=function(c){r=c;r!==n?d():k()}};gui.HyperlinkClickHandler.Modifier={None:0,Ctrl:1,Meta:2};
// Input 30
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Cursor");runtime.loadClass("core.DomUtils");runtime.loadClass("core.PositionIterator");runtime.loadClass("core.PositionFilter");runtime.loadClass("core.LoopWatchDog");runtime.loadClass("odf.OdfUtils");
gui.SelectionMover=function(e,k){function d(){t.setUnfilteredPosition(e.getNode(),0);return t}function n(a,b){var c,d=null;a&&0<a.length&&(c=b?a.item(a.length-1):a.item(0));c&&(d={top:c.top,left:b?c.right:c.left,bottom:c.bottom});return d}function q(a,b,c,d){var h=a.nodeType;c.setStart(a,b);c.collapse(!d);d=n(c.getClientRects(),!0===d);!d&&0<b&&(c.setStart(a,b-1),c.setEnd(a,b),d=n(c.getClientRects(),!0));d||(h===Node.ELEMENT_NODE&&0<b&&a.childNodes.length>=b?d=q(a,b-1,c,!0):a.nodeType===Node.TEXT_NODE&&
0<b?d=q(a,b-1,c,!0):a.previousSibling?d=q(a.previousSibling,a.previousSibling.nodeType===Node.TEXT_NODE?a.previousSibling.textContent.length:a.previousSibling.childNodes.length,c,!0):a.parentNode&&a.parentNode!==k?d=q(a.parentNode,0,c,!1):(c.selectNode(k),d=n(c.getClientRects(),!1)));runtime.assert(Boolean(d),"No visible rectangle found");return d}function p(a,b,c){var f=a,g=d(),l,m=k.ownerDocument.createRange(),n=e.getSelectedRange().cloneRange(),p;for(l=q(g.container(),g.unfilteredDomOffset(),m);0<
f&&c();)f-=1;b?(b=g.container(),g=g.unfilteredDomOffset(),-1===h.comparePoints(n.startContainer,n.startOffset,b,g)?(n.setStart(b,g),p=!1):n.setEnd(b,g)):(n.setStart(g.container(),g.unfilteredDomOffset()),n.collapse(!0));e.setSelectedRange(n,p);g=d();n=q(g.container(),g.unfilteredDomOffset(),m);if(n.top===l.top||void 0===u)u=n.left;runtime.clearTimeout(x);x=runtime.setTimeout(function(){u=void 0},2E3);m.detach();return a-f}function l(a){var b=d();return a.acceptPosition(b)===z&&(b.setUnfilteredPosition(e.getAnchorNode(),
0),a.acceptPosition(b)===z)?!0:!1}function m(a,b,c){for(var h=d(),f=new core.LoopWatchDog(1E4),g=0,l=0;0<a&&h.nextPosition();)f.check(),c.acceptPosition(h)===z&&(g+=1,b.acceptPosition(h)===z&&(l+=g,g=0,a-=1));return l}function r(a,b,c){for(var h=d(),f=new core.LoopWatchDog(1E4),g=0,l=0;0<a&&h.previousPosition();)f.check(),c.acceptPosition(h)===z&&(g+=1,b.acceptPosition(h)===z&&(l+=g,g=0,a-=1));return l}function c(a,b){for(var c=d(),h=a,f=new core.LoopWatchDog(1E4),g=0,l=0,e=0<=h?1:-1,m=0<=h?c.nextPosition:
c.previousPosition;0!==h&&m();)f.check(),l+=e,b.acceptPosition(c)===z&&(h-=e,g+=l,l=0);return g}function g(a,b){var c=d(),h=0,f=0,g=0>a?-1:1;for(a=Math.abs(a);0<a;){for(var l=b,e=g,m=c,n=m.container(),p=0,r=null,t=void 0,x=10,F=void 0,M=0,R=void 0,L=void 0,I=void 0,F=void 0,J=k.ownerDocument.createRange(),V=new core.LoopWatchDog(1E4),F=q(n,m.unfilteredDomOffset(),J),R=F.top,L=void 0===u?F.left:u,I=R;!0===(0>e?m.previousPosition():m.nextPosition());)if(V.check(),l.acceptPosition(m)===z&&(p+=1,n=m.container(),
F=q(n,m.unfilteredDomOffset(),J),F.top!==R)){if(F.top!==I&&I!==R)break;I=F.top;F=Math.abs(L-F.left);if(null===r||F<x)r=n,t=m.unfilteredDomOffset(),x=F,M=p}null!==r?(m.setUnfilteredPosition(r,t),p=M):p=0;J.detach();h+=p;if(0===h)break;f+=h;a-=1}return f*g}function b(a,b){var c,h,g,l,e=d(),m=f.getParagraphElement(e.getCurrentNode()),n=0,p=k.ownerDocument.createRange();0>a?(c=e.previousPosition,h=-1):(c=e.nextPosition,h=1);for(g=q(e.container(),e.unfilteredDomOffset(),p);c.call(e);)if(b.acceptPosition(e)===
z){if(f.getParagraphElement(e.getCurrentNode())!==m)break;l=q(e.container(),e.unfilteredDomOffset(),p);if(l.bottom!==g.bottom&&(g=l.top>=g.top&&l.bottom<g.bottom||l.top<=g.top&&l.bottom>g.bottom,!g))break;n+=h;g=l}p.detach();return n}function a(a,b,c){runtime.assert(null!==a,"SelectionMover.countStepsToPosition called with element===null");var f=d(),g=f.container(),l=f.unfilteredDomOffset(),e=0,m=new core.LoopWatchDog(1E4);for(f.setUnfilteredPosition(a,b);c.acceptPosition(f)!==z&&f.previousPosition();)m.check();
a=f.container();runtime.assert(Boolean(a),"SelectionMover.countStepsToPosition: positionIterator.container() returned null");b=f.unfilteredDomOffset();for(f.setUnfilteredPosition(g,l);c.acceptPosition(f)!==z&&f.previousPosition();)m.check();g=h.comparePoints(a,b,f.container(),f.unfilteredDomOffset());if(0>g)for(;f.nextPosition()&&(m.check(),c.acceptPosition(f)===z&&(e+=1),f.container()!==a||f.unfilteredDomOffset()!==b););else if(0<g)for(;f.previousPosition()&&(m.check(),c.acceptPosition(f)!==z||(e-=
1,f.container()!==a||f.unfilteredDomOffset()!==b)););return e}var f=new odf.OdfUtils,h=new core.DomUtils,t,u,x,z=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.movePointForward=function(a,b){return p(a,b||!1,t.nextPosition)};this.movePointBackward=function(a,b){return p(a,b||!1,t.previousPosition)};this.getStepCounter=function(){return{countSteps:c,convertForwardStepsBetweenFilters:m,convertBackwardStepsBetweenFilters:r,countLinesSteps:g,countStepsToLineBoundary:b,countStepsToPosition:a,isPositionWalkable:l}};
(function(){t=gui.SelectionMover.createPositionIterator(k);var a=k.ownerDocument.createRange();a.setStart(t.container(),t.unfilteredDomOffset());a.collapse(!0);e.setSelectedRange(a)})()};gui.SelectionMover.createPositionIterator=function(e){var k=new function(){this.acceptNode=function(d){return d&&"urn:webodf:names:cursor"!==d.namespaceURI&&"urn:webodf:names:editinfo"!==d.namespaceURI?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}};return new core.PositionIterator(e,5,k,!1)};(function(){return gui.SelectionMover})();
// Input 31
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.OdfNodeFilter=function(){this.acceptNode=function(e){return"http://www.w3.org/1999/xhtml"===e.namespaceURI?NodeFilter.FILTER_SKIP:e.namespaceURI&&e.namespaceURI.match(/^urn:webodf:/)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}};
// Input 32
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");runtime.loadClass("xmldom.XPath");runtime.loadClass("core.CSSUnits");odf.StyleTreeNode=function(e){this.derivedStyles={};this.element=e};
odf.Style2CSS=function(){function e(a){var b,c,d,f={};if(!a)return f;for(a=a.firstElementChild;a;){if(c=a.namespaceURI!==h||"style"!==a.localName&&"default-style"!==a.localName?a.namespaceURI===x&&"list-style"===a.localName?"list":a.namespaceURI!==h||"page-layout"!==a.localName&&"default-page-layout"!==a.localName?void 0:"page":a.getAttributeNS(h,"family"))(b=a.getAttributeNS(h,"name"))||(b=""),f.hasOwnProperty(c)?d=f[c]:f[c]=d={},d[b]=a;a=a.nextElementSibling}return f}function k(a,b){if(a.hasOwnProperty(b))return a[b];
var c,d=null;for(c in a)if(a.hasOwnProperty(c)&&(d=k(a[c].derivedStyles,b)))break;return d}function d(a,b,c){var f,g,l;if(!b.hasOwnProperty(a))return null;f=new odf.StyleTreeNode(b[a]);g=f.element.getAttributeNS(h,"parent-style-name");l=null;g&&(l=k(c,g)||d(g,b,c));l?l.derivedStyles[a]=f:c[a]=f;delete b[a];return f}function n(a,b){for(var c in a)a.hasOwnProperty(c)&&d(c,a,b)}function q(a,b,c){var d=[];c=c.derivedStyles;var f;var h=v[a],g;void 0===h?b=null:(g=b?"["+h+'|style-name="'+b+'"]':"","presentation"===
h&&(h="draw",g=b?'[presentation|style-name="'+b+'"]':""),b=h+"|"+s[a].join(g+","+h+"|")+g);null!==b&&d.push(b);for(f in c)c.hasOwnProperty(f)&&(b=q(a,f,c[f]),d=d.concat(b));return d}function p(a,b,c){for(a=a&&a.firstElementChild;a&&(a.namespaceURI!==b||a.localName!==c);)a=a.nextElementSibling;return a}function l(a,b){var c="",d,f,h;for(d=0;d<b.length;d+=1)if(f=b[d],h=a.getAttributeNS(f[0],f[1])){h=h.trim();if(Z.hasOwnProperty(f[1])){var g=h.indexOf(" "),l=void 0,e=void 0;-1!==g?(l=h.substring(0,g),
e=h.substring(g)):(l=h,e="");(l=M.parseLength(l))&&"pt"===l.unit&&0.75>l.value&&(h="0.75pt"+e)}f[2]&&(c+=f[2]+":"+h+";")}return c}function m(b){return(b=p(b,h,"text-properties"))?M.parseFoFontSize(b.getAttributeNS(a,"font-size")):null}function r(a,b,c,d){return b+b+c+c+d+d}function c(b,c,d,f){c='text|list[text|style-name="'+c+'"]';var g=d.getAttributeNS(x,"level");d=p(d,h,"list-level-properties");d=p(d,h,"list-level-label-alignment");var l,e;d&&(l=d.getAttributeNS(a,"text-indent"),e=d.getAttributeNS(a,
"margin-left"));l||(l="-0.6cm");d="-"===l.charAt(0)?l.substring(1):"-"+l;for(g=g&&parseInt(g,10);1<g;)c+=" > text|list-item > text|list",g-=1;if(e){g=c+" > text|list-item > *:not(text|list):first-child";g+="{";g=g+("margin-left:"+e+";")+"}";try{b.insertRule(g,b.cssRules.length)}catch(m){runtime.log("cannot load rule: "+g)}}f=c+" > text|list-item > *:not(text|list):first-child:before{"+f+";";f=f+"counter-increment:list;"+("margin-left:"+l+";");f+="width:"+d+";";f+="display:inline-block}";try{b.insertRule(f,
b.cssRules.length)}catch(k){runtime.log("cannot load rule: "+f)}}function g(d,e,k,n){if("list"===e)for(var t=n.element.firstChild,D,s;t;){if(t.namespaceURI===x)if(D=t,"list-level-style-number"===t.localName){var v=D;s=v.getAttributeNS(h,"num-format");var B=v.getAttributeNS(h,"num-suffix")||"",v=v.getAttributeNS(h,"num-prefix")||"",C={1:"decimal",a:"lower-latin",A:"upper-latin",i:"lower-roman",I:"upper-roman"},Z="";v&&(Z+=' "'+v+'"');Z=C.hasOwnProperty(s)?Z+(" counter(list, "+C[s]+")"):s?Z+(' "'+s+
'"'):Z+" ''";s="content:"+Z+' "'+B+'"';c(d,k,D,s)}else"list-level-style-image"===t.localName?(s="content: none;",c(d,k,D,s)):"list-level-style-bullet"===t.localName&&(s="content: '"+D.getAttributeNS(x,"bullet-char")+"';",c(d,k,D,s));t=t.nextSibling}else if("page"===e){if(s=n.element,v=B=k="",t=p(s,h,"page-layout-properties"))if(D=s.getAttributeNS(h,"name"),k+=l(t,U),(B=p(t,h,"background-image"))&&(v=B.getAttributeNS(z,"href"))&&(k=k+("background-image: url('odfkit:"+v+"');")+l(B,E)),"presentation"===
R)for(s=(s=p(s.parentNode.parentNode,f,"master-styles"))&&s.firstElementChild;s;){if(s.namespaceURI===h&&"master-page"===s.localName&&s.getAttributeNS(h,"page-layout-name")===D){v=s.getAttributeNS(h,"name");B="draw|page[draw|master-page-name="+v+"] {"+k+"}";v="office|body, draw|page[draw|master-page-name="+v+"] {"+l(t,da)+" }";try{d.insertRule(B,d.cssRules.length),d.insertRule(v,d.cssRules.length)}catch(ba){throw ba;}}s=s.nextElementSibling}else if("text"===R){B="office|text {"+k+"}";v="office|body {width: "+
t.getAttributeNS(a,"page-width")+";}";try{d.insertRule(B,d.cssRules.length),d.insertRule(v,d.cssRules.length)}catch(T){throw T;}}}else{k=q(e,k,n).join(",");t="";if(D=p(n.element,h,"text-properties")){v=D;s=Z="";B=1;D=""+l(v,A);C=v.getAttributeNS(h,"text-underline-style");"solid"===C&&(Z+=" underline");C=v.getAttributeNS(h,"text-line-through-style");"solid"===C&&(Z+=" line-through");Z.length&&(D+="text-decoration:"+Z+";");if(Z=v.getAttributeNS(h,"font-name")||v.getAttributeNS(a,"font-family"))C=F[Z],
D+="font-family: "+(C||Z)+";";C=v.parentNode;if(v=m(C)){for(;C;){if(v=m(C)){if("%"!==v.unit){s="font-size: "+v.value*B+v.unit+";";break}B*=v.value/100}v=C;Z=C="";C=null;"default-style"===v.localName?C=null:(C=v.getAttributeNS(h,"parent-style-name"),Z=v.getAttributeNS(h,"family"),C=J.getODFElementsWithXPath(L,C?"//style:*[@style:name='"+C+"'][@style:family='"+Z+"']":"//style:default-style[@style:family='"+Z+"']",odf.Namespaces.lookupNamespaceURI)[0])}s||(s="font-size: "+parseFloat(I)*B+V.getUnits(I)+
";");D+=s}t+=D}if(D=p(n.element,h,"paragraph-properties"))s=D,D=""+l(s,H),(B=p(s,h,"background-image"))&&(v=B.getAttributeNS(z,"href"))&&(D=D+("background-image: url('odfkit:"+v+"');")+l(B,E)),(s=s.getAttributeNS(a,"line-height"))&&"normal"!==s&&(s=M.parseFoLineHeight(s),D="%"!==s.unit?D+("line-height: "+s.value+s.unit+";"):D+("line-height: "+s.value/100+";")),t+=D;if(D=p(n.element,h,"graphic-properties"))v=D,D=""+l(v,y),s=v.getAttributeNS(b,"opacity"),B=v.getAttributeNS(b,"fill"),v=v.getAttributeNS(b,
"fill-color"),"solid"===B||"hatch"===B?v&&"none"!==v?(s=isNaN(parseFloat(s))?1:parseFloat(s)/100,B=v.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r),(v=(B=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(B))?{r:parseInt(B[1],16),g:parseInt(B[2],16),b:parseInt(B[3],16)}:null)&&(D+="background-color: rgba("+v.r+","+v.g+","+v.b+","+s+");")):D+="background: none;":"none"===B&&(D+="background: none;"),t+=D;if(D=p(n.element,h,"drawing-page-properties"))s=""+l(D,y),"true"===D.getAttributeNS(w,"background-visible")&&
(s+="background: none;"),t+=s;if(D=p(n.element,h,"table-cell-properties"))D=""+l(D,O),t+=D;if(D=p(n.element,h,"table-row-properties"))D=""+l(D,G),t+=D;if(D=p(n.element,h,"table-column-properties"))D=""+l(D,W),t+=D;if(D=p(n.element,h,"table-properties"))s=D,D=""+l(s,K),s=s.getAttributeNS(u,"border-model"),"collapsing"===s?D+="border-collapse:collapse;":"separating"===s&&(D+="border-collapse:separate;"),t+=D;if(0!==t.length)try{d.insertRule(k+"{"+t+"}",d.cssRules.length)}catch(fa){throw fa;}}for(var ga in n.derivedStyles)n.derivedStyles.hasOwnProperty(ga)&&
g(d,e,ga,n.derivedStyles[ga])}var b=odf.Namespaces.drawns,a=odf.Namespaces.fons,f=odf.Namespaces.officens,h=odf.Namespaces.stylens,t=odf.Namespaces.svgns,u=odf.Namespaces.tablens,x=odf.Namespaces.textns,z=odf.Namespaces.xlinkns,w=odf.Namespaces.presentationns,v={graphic:"draw","drawing-page":"draw",paragraph:"text",presentation:"presentation",ruby:"text",section:"text",table:"table","table-cell":"table","table-column":"table","table-row":"table",text:"text",list:"text",page:"office"},s={graphic:"circle connected control custom-shape ellipse frame g line measure page page-thumbnail path polygon polyline rect regular-polygon".split(" "),
paragraph:"alphabetical-index-entry-template h illustration-index-entry-template index-source-style object-index-entry-template p table-index-entry-template table-of-content-entry-template user-index-entry-template".split(" "),presentation:"caption circle connector control custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),"drawing-page":"caption circle connector control page custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),
ruby:["ruby","ruby-text"],section:"alphabetical-index bibliography illustration-index index-title object-index section table-of-content table-index user-index".split(" "),table:["background","table"],"table-cell":"body covered-table-cell even-columns even-rows first-column first-row last-column last-row odd-columns odd-rows table-cell".split(" "),"table-column":["table-column"],"table-row":["table-row"],text:"a index-entry-chapter index-entry-link-end index-entry-link-start index-entry-page-number index-entry-span index-entry-tab-stop index-entry-text index-title-template linenumbering-configuration list-level-style-number list-level-style-bullet outline-level-style span".split(" "),
list:["list-item"]},A=[[a,"color","color"],[a,"background-color","background-color"],[a,"font-weight","font-weight"],[a,"font-style","font-style"]],E=[[h,"repeat","background-repeat"]],H=[[a,"background-color","background-color"],[a,"text-align","text-align"],[a,"text-indent","text-indent"],[a,"padding","padding"],[a,"padding-left","padding-left"],[a,"padding-right","padding-right"],[a,"padding-top","padding-top"],[a,"padding-bottom","padding-bottom"],[a,"border-left","border-left"],[a,"border-right",
"border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"margin","margin"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"],[a,"border","border"]],y=[[a,"background-color","background-color"],[a,"min-height","min-height"],[b,"stroke","border"],[t,"stroke-color","border-color"],[t,"stroke-width","border-width"],[a,"border","border"],[a,"border-left","border-left"],[a,"border-right","border-right"],
[a,"border-top","border-top"],[a,"border-bottom","border-bottom"]],O=[[a,"background-color","background-color"],[a,"border-left","border-left"],[a,"border-right","border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"border","border"]],W=[[h,"column-width","width"]],G=[[h,"row-height","height"],[a,"keep-together",null]],K=[[h,"width","width"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"]],
U=[[a,"background-color","background-color"],[a,"padding","padding"],[a,"padding-left","padding-left"],[a,"padding-right","padding-right"],[a,"padding-top","padding-top"],[a,"padding-bottom","padding-bottom"],[a,"border","border"],[a,"border-left","border-left"],[a,"border-right","border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"margin","margin"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"]],
da=[[a,"page-width","width"],[a,"page-height","height"]],Z={border:!0,"border-left":!0,"border-right":!0,"border-top":!0,"border-bottom":!0,"stroke-width":!0},F={},M=new odf.OdfUtils,R,L,I,J=xmldom.XPath,V=new core.CSSUnits;this.style2css=function(a,b,c,d,f){for(var h,l,m,k;b.cssRules.length;)b.deleteRule(b.cssRules.length-1);h=null;d&&(h=d.ownerDocument,L=d.parentNode);f&&(h=f.ownerDocument,L=f.parentNode);if(h)for(k in odf.Namespaces.forEachPrefix(function(a,c){l="@namespace "+a+" url("+c+");";
try{b.insertRule(l,b.cssRules.length)}catch(d){}}),F=c,R=a,I=runtime.getWindow().getComputedStyle(document.body,null).getPropertyValue("font-size")||"12pt",a=e(d),d=e(f),f={},v)if(v.hasOwnProperty(k))for(m in c=f[k]={},n(a[k],c),n(d[k],c),c)c.hasOwnProperty(m)&&g(b,k,m,c[m])}};
// Input 33
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("xmldom.XPath");runtime.loadClass("odf.Namespaces");
odf.StyleInfo=function(){function e(a,b){var c,d,f,h,g,l=0;if(c=H[a.localName])if(f=c[a.namespaceURI])l=f.length;for(c=0;c<l;c+=1)d=f[c],h=d.ns,g=d.localname,(d=a.getAttributeNS(h,g))&&a.setAttributeNS(h,A[h]+g,b+d);for(f=a.firstElementChild;f;)e(f,b),f=f.nextElementSibling}function k(a,b){var c,d,f,h,g,l=0;if(c=H[a.localName])if(f=c[a.namespaceURI])l=f.length;for(c=0;c<l;c+=1)if(d=f[c],h=d.ns,g=d.localname,d=a.getAttributeNS(h,g))d=d.replace(b,""),a.setAttributeNS(h,A[h]+g,d);for(f=a.firstElementChild;f;)k(f,
b),f=f.nextElementSibling}function d(a,b){var c,d,f,h,g,l=0;if(c=H[a.localName])if(f=c[a.namespaceURI])l=f.length;for(c=0;c<l;c+=1)if(h=f[c],d=h.ns,g=h.localname,d=a.getAttributeNS(d,g))b=b||{},h=h.keyname,b.hasOwnProperty(h)?b[h][d]=1:(g={},g[d]=1,b[h]=g);return b}function n(a,b){var c,f;d(a,b);for(c=a.firstChild;c;)c.nodeType===Node.ELEMENT_NODE&&(f=c,n(f,b)),c=c.nextSibling}function q(a,b,c){this.key=a;this.name=b;this.family=c;this.requires={}}function p(a,b,c){var d=a+'"'+b,f=c[d];f||(f=c[d]=
new q(d,a,b));return f}function l(a,b,c){var d,f,h,g,e,m=0;d=a.getAttributeNS(w,"name");g=a.getAttributeNS(w,"family");d&&g&&(b=p(d,g,c));if(b){if(d=H[a.localName])if(h=d[a.namespaceURI])m=h.length;for(d=0;d<m;d+=1)if(g=h[d],f=g.ns,e=g.localname,f=a.getAttributeNS(f,e))g=g.keyname,g=p(f,g,c),b.requires[g.key]=g}for(a=a.firstElementChild;a;)l(a,b,c),a=a.nextElementSibling;return c}function m(a,b){var c=b[a.family];c||(c=b[a.family]={});c[a.name]=1;Object.keys(a.requires).forEach(function(c){m(a.requires[c],
b)})}function r(a,b){var c=l(a,null,{});Object.keys(c).forEach(function(a){a=c[a];var d=b[a.family];d&&d.hasOwnProperty(a.name)&&m(a,b)})}function c(a,b){function d(b){(b=g.getAttributeNS(w,b))&&(a[b]=!0)}var f=["font-name","font-name-asian","font-name-complex"],h,g;for(h=b&&b.firstElementChild;h;)g=h,f.forEach(d),c(a,g),h=h.nextElementSibling}function g(a,b){function c(a){var d=h.getAttributeNS(w,a);d&&b.hasOwnProperty(d)&&h.setAttributeNS(w,"style:"+a,b[d])}var d=["font-name","font-name-asian",
"font-name-complex"],f,h;for(f=a&&a.firstElementChild;f;)h=f,d.forEach(c),g(h,b),f=f.nextElementSibling}var b=odf.Namespaces.chartns,a=odf.Namespaces.dbns,f=odf.Namespaces.dr3dns,h=odf.Namespaces.drawns,t=odf.Namespaces.formns,u=odf.Namespaces.numberns,x=odf.Namespaces.officens,z=odf.Namespaces.presentationns,w=odf.Namespaces.stylens,v=odf.Namespaces.tablens,s=odf.Namespaces.textns,A={"urn:oasis:names:tc:opendocument:xmlns:chart:1.0":"chart:","urn:oasis:names:tc:opendocument:xmlns:database:1.0":"db:",
"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0":"dr3d:","urn:oasis:names:tc:opendocument:xmlns:drawing:1.0":"draw:","urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0":"fo:","urn:oasis:names:tc:opendocument:xmlns:form:1.0":"form:","urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0":"number:","urn:oasis:names:tc:opendocument:xmlns:office:1.0":"office:","urn:oasis:names:tc:opendocument:xmlns:presentation:1.0":"presentation:","urn:oasis:names:tc:opendocument:xmlns:style:1.0":"style:","urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0":"svg:",
"urn:oasis:names:tc:opendocument:xmlns:table:1.0":"table:","urn:oasis:names:tc:opendocument:xmlns:text:1.0":"chart:","http://www.w3.org/XML/1998/namespace":"xml:"},E={text:[{ens:w,en:"tab-stop",ans:w,a:"leader-text-style"},{ens:w,en:"drop-cap",ans:w,a:"style-name"},{ens:s,en:"notes-configuration",ans:s,a:"citation-body-style-name"},{ens:s,en:"notes-configuration",ans:s,a:"citation-style-name"},{ens:s,en:"a",ans:s,a:"style-name"},{ens:s,en:"alphabetical-index",ans:s,a:"style-name"},{ens:s,en:"linenumbering-configuration",
ans:s,a:"style-name"},{ens:s,en:"list-level-style-number",ans:s,a:"style-name"},{ens:s,en:"ruby-text",ans:s,a:"style-name"},{ens:s,en:"span",ans:s,a:"style-name"},{ens:s,en:"a",ans:s,a:"visited-style-name"},{ens:w,en:"text-properties",ans:w,a:"text-line-through-text-style"},{ens:s,en:"alphabetical-index-source",ans:s,a:"main-entry-style-name"},{ens:s,en:"index-entry-bibliography",ans:s,a:"style-name"},{ens:s,en:"index-entry-chapter",ans:s,a:"style-name"},{ens:s,en:"index-entry-link-end",ans:s,a:"style-name"},
{ens:s,en:"index-entry-link-start",ans:s,a:"style-name"},{ens:s,en:"index-entry-page-number",ans:s,a:"style-name"},{ens:s,en:"index-entry-span",ans:s,a:"style-name"},{ens:s,en:"index-entry-tab-stop",ans:s,a:"style-name"},{ens:s,en:"index-entry-text",ans:s,a:"style-name"},{ens:s,en:"index-title-template",ans:s,a:"style-name"},{ens:s,en:"list-level-style-bullet",ans:s,a:"style-name"},{ens:s,en:"outline-level-style",ans:s,a:"style-name"}],paragraph:[{ens:h,en:"caption",ans:h,a:"text-style-name"},{ens:h,
en:"circle",ans:h,a:"text-style-name"},{ens:h,en:"connector",ans:h,a:"text-style-name"},{ens:h,en:"control",ans:h,a:"text-style-name"},{ens:h,en:"custom-shape",ans:h,a:"text-style-name"},{ens:h,en:"ellipse",ans:h,a:"text-style-name"},{ens:h,en:"frame",ans:h,a:"text-style-name"},{ens:h,en:"line",ans:h,a:"text-style-name"},{ens:h,en:"measure",ans:h,a:"text-style-name"},{ens:h,en:"path",ans:h,a:"text-style-name"},{ens:h,en:"polygon",ans:h,a:"text-style-name"},{ens:h,en:"polyline",ans:h,a:"text-style-name"},
{ens:h,en:"rect",ans:h,a:"text-style-name"},{ens:h,en:"regular-polygon",ans:h,a:"text-style-name"},{ens:x,en:"annotation",ans:h,a:"text-style-name"},{ens:t,en:"column",ans:t,a:"text-style-name"},{ens:w,en:"style",ans:w,a:"next-style-name"},{ens:v,en:"body",ans:v,a:"paragraph-style-name"},{ens:v,en:"even-columns",ans:v,a:"paragraph-style-name"},{ens:v,en:"even-rows",ans:v,a:"paragraph-style-name"},{ens:v,en:"first-column",ans:v,a:"paragraph-style-name"},{ens:v,en:"first-row",ans:v,a:"paragraph-style-name"},
{ens:v,en:"last-column",ans:v,a:"paragraph-style-name"},{ens:v,en:"last-row",ans:v,a:"paragraph-style-name"},{ens:v,en:"odd-columns",ans:v,a:"paragraph-style-name"},{ens:v,en:"odd-rows",ans:v,a:"paragraph-style-name"},{ens:s,en:"notes-configuration",ans:s,a:"default-style-name"},{ens:s,en:"alphabetical-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"bibliography-entry-template",ans:s,a:"style-name"},{ens:s,en:"h",ans:s,a:"style-name"},{ens:s,en:"illustration-index-entry-template",ans:s,a:"style-name"},
{ens:s,en:"index-source-style",ans:s,a:"style-name"},{ens:s,en:"object-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"p",ans:s,a:"style-name"},{ens:s,en:"table-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"table-of-content-entry-template",ans:s,a:"style-name"},{ens:s,en:"table-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"user-index-entry-template",ans:s,a:"style-name"},{ens:w,en:"page-layout-properties",ans:w,a:"register-truth-ref-style-name"}],chart:[{ens:b,en:"axis",ans:b,
a:"style-name"},{ens:b,en:"chart",ans:b,a:"style-name"},{ens:b,en:"data-label",ans:b,a:"style-name"},{ens:b,en:"data-point",ans:b,a:"style-name"},{ens:b,en:"equation",ans:b,a:"style-name"},{ens:b,en:"error-indicator",ans:b,a:"style-name"},{ens:b,en:"floor",ans:b,a:"style-name"},{ens:b,en:"footer",ans:b,a:"style-name"},{ens:b,en:"grid",ans:b,a:"style-name"},{ens:b,en:"legend",ans:b,a:"style-name"},{ens:b,en:"mean-value",ans:b,a:"style-name"},{ens:b,en:"plot-area",ans:b,a:"style-name"},{ens:b,en:"regression-curve",
ans:b,a:"style-name"},{ens:b,en:"series",ans:b,a:"style-name"},{ens:b,en:"stock-gain-marker",ans:b,a:"style-name"},{ens:b,en:"stock-loss-marker",ans:b,a:"style-name"},{ens:b,en:"stock-range-line",ans:b,a:"style-name"},{ens:b,en:"subtitle",ans:b,a:"style-name"},{ens:b,en:"title",ans:b,a:"style-name"},{ens:b,en:"wall",ans:b,a:"style-name"}],section:[{ens:s,en:"alphabetical-index",ans:s,a:"style-name"},{ens:s,en:"bibliography",ans:s,a:"style-name"},{ens:s,en:"illustration-index",ans:s,a:"style-name"},
{ens:s,en:"index-title",ans:s,a:"style-name"},{ens:s,en:"object-index",ans:s,a:"style-name"},{ens:s,en:"section",ans:s,a:"style-name"},{ens:s,en:"table-of-content",ans:s,a:"style-name"},{ens:s,en:"table-index",ans:s,a:"style-name"},{ens:s,en:"user-index",ans:s,a:"style-name"}],ruby:[{ens:s,en:"ruby",ans:s,a:"style-name"}],table:[{ens:a,en:"query",ans:a,a:"style-name"},{ens:a,en:"table-representation",ans:a,a:"style-name"},{ens:v,en:"background",ans:v,a:"style-name"},{ens:v,en:"table",ans:v,a:"style-name"}],
"table-column":[{ens:a,en:"column",ans:a,a:"style-name"},{ens:v,en:"table-column",ans:v,a:"style-name"}],"table-row":[{ens:a,en:"query",ans:a,a:"default-row-style-name"},{ens:a,en:"table-representation",ans:a,a:"default-row-style-name"},{ens:v,en:"table-row",ans:v,a:"style-name"}],"table-cell":[{ens:a,en:"column",ans:a,a:"default-cell-style-name"},{ens:v,en:"table-column",ans:v,a:"default-cell-style-name"},{ens:v,en:"table-row",ans:v,a:"default-cell-style-name"},{ens:v,en:"body",ans:v,a:"style-name"},
{ens:v,en:"covered-table-cell",ans:v,a:"style-name"},{ens:v,en:"even-columns",ans:v,a:"style-name"},{ens:v,en:"covered-table-cell",ans:v,a:"style-name"},{ens:v,en:"even-columns",ans:v,a:"style-name"},{ens:v,en:"even-rows",ans:v,a:"style-name"},{ens:v,en:"first-column",ans:v,a:"style-name"},{ens:v,en:"first-row",ans:v,a:"style-name"},{ens:v,en:"last-column",ans:v,a:"style-name"},{ens:v,en:"last-row",ans:v,a:"style-name"},{ens:v,en:"odd-columns",ans:v,a:"style-name"},{ens:v,en:"odd-rows",ans:v,a:"style-name"},
{ens:v,en:"table-cell",ans:v,a:"style-name"}],graphic:[{ens:f,en:"cube",ans:h,a:"style-name"},{ens:f,en:"extrude",ans:h,a:"style-name"},{ens:f,en:"rotate",ans:h,a:"style-name"},{ens:f,en:"scene",ans:h,a:"style-name"},{ens:f,en:"sphere",ans:h,a:"style-name"},{ens:h,en:"caption",ans:h,a:"style-name"},{ens:h,en:"circle",ans:h,a:"style-name"},{ens:h,en:"connector",ans:h,a:"style-name"},{ens:h,en:"control",ans:h,a:"style-name"},{ens:h,en:"custom-shape",ans:h,a:"style-name"},{ens:h,en:"ellipse",ans:h,a:"style-name"},
{ens:h,en:"frame",ans:h,a:"style-name"},{ens:h,en:"g",ans:h,a:"style-name"},{ens:h,en:"line",ans:h,a:"style-name"},{ens:h,en:"measure",ans:h,a:"style-name"},{ens:h,en:"page-thumbnail",ans:h,a:"style-name"},{ens:h,en:"path",ans:h,a:"style-name"},{ens:h,en:"polygon",ans:h,a:"style-name"},{ens:h,en:"polyline",ans:h,a:"style-name"},{ens:h,en:"rect",ans:h,a:"style-name"},{ens:h,en:"regular-polygon",ans:h,a:"style-name"},{ens:x,en:"annotation",ans:h,a:"style-name"}],presentation:[{ens:f,en:"cube",ans:z,
a:"style-name"},{ens:f,en:"extrude",ans:z,a:"style-name"},{ens:f,en:"rotate",ans:z,a:"style-name"},{ens:f,en:"scene",ans:z,a:"style-name"},{ens:f,en:"sphere",ans:z,a:"style-name"},{ens:h,en:"caption",ans:z,a:"style-name"},{ens:h,en:"circle",ans:z,a:"style-name"},{ens:h,en:"connector",ans:z,a:"style-name"},{ens:h,en:"control",ans:z,a:"style-name"},{ens:h,en:"custom-shape",ans:z,a:"style-name"},{ens:h,en:"ellipse",ans:z,a:"style-name"},{ens:h,en:"frame",ans:z,a:"style-name"},{ens:h,en:"g",ans:z,a:"style-name"},
{ens:h,en:"line",ans:z,a:"style-name"},{ens:h,en:"measure",ans:z,a:"style-name"},{ens:h,en:"page-thumbnail",ans:z,a:"style-name"},{ens:h,en:"path",ans:z,a:"style-name"},{ens:h,en:"polygon",ans:z,a:"style-name"},{ens:h,en:"polyline",ans:z,a:"style-name"},{ens:h,en:"rect",ans:z,a:"style-name"},{ens:h,en:"regular-polygon",ans:z,a:"style-name"},{ens:x,en:"annotation",ans:z,a:"style-name"}],"drawing-page":[{ens:h,en:"page",ans:h,a:"style-name"},{ens:z,en:"notes",ans:h,a:"style-name"},{ens:w,en:"handout-master",
ans:h,a:"style-name"},{ens:w,en:"master-page",ans:h,a:"style-name"}],"list-style":[{ens:s,en:"list",ans:s,a:"style-name"},{ens:s,en:"numbered-paragraph",ans:s,a:"style-name"},{ens:s,en:"list-item",ans:s,a:"style-override"},{ens:w,en:"style",ans:w,a:"list-style-name"}],data:[{ens:w,en:"style",ans:w,a:"data-style-name"},{ens:w,en:"style",ans:w,a:"percentage-data-style-name"},{ens:z,en:"date-time-decl",ans:w,a:"data-style-name"},{ens:s,en:"creation-date",ans:w,a:"data-style-name"},{ens:s,en:"creation-time",
ans:w,a:"data-style-name"},{ens:s,en:"database-display",ans:w,a:"data-style-name"},{ens:s,en:"date",ans:w,a:"data-style-name"},{ens:s,en:"editing-duration",ans:w,a:"data-style-name"},{ens:s,en:"expression",ans:w,a:"data-style-name"},{ens:s,en:"meta-field",ans:w,a:"data-style-name"},{ens:s,en:"modification-date",ans:w,a:"data-style-name"},{ens:s,en:"modification-time",ans:w,a:"data-style-name"},{ens:s,en:"print-date",ans:w,a:"data-style-name"},{ens:s,en:"print-time",ans:w,a:"data-style-name"},{ens:s,
en:"table-formula",ans:w,a:"data-style-name"},{ens:s,en:"time",ans:w,a:"data-style-name"},{ens:s,en:"user-defined",ans:w,a:"data-style-name"},{ens:s,en:"user-field-get",ans:w,a:"data-style-name"},{ens:s,en:"user-field-input",ans:w,a:"data-style-name"},{ens:s,en:"variable-get",ans:w,a:"data-style-name"},{ens:s,en:"variable-input",ans:w,a:"data-style-name"},{ens:s,en:"variable-set",ans:w,a:"data-style-name"}],"page-layout":[{ens:z,en:"notes",ans:w,a:"page-layout-name"},{ens:w,en:"handout-master",ans:w,
a:"page-layout-name"},{ens:w,en:"master-page",ans:w,a:"page-layout-name"}]},H,y=xmldom.XPath;this.collectUsedFontFaces=c;this.changeFontFaceNames=g;this.UsedStyleList=function(a,b){var c={};this.uses=function(a){var b=a.localName,d=a.getAttributeNS(h,"name")||a.getAttributeNS(w,"name");a="style"===b?a.getAttributeNS(w,"family"):a.namespaceURI===u?"data":b;return(a=c[a])?0<a[d]:!1};n(a,c);b&&r(b,c)};this.hasDerivedStyles=function(a,b,c){var d=c.getAttributeNS(w,"name");c=c.getAttributeNS(w,"family");
return y.getODFElementsWithXPath(a,"//style:*[@style:parent-style-name='"+d+"'][@style:family='"+c+"']",b).length?!0:!1};this.prefixStyleNames=function(a,b,c){var d;if(a){for(d=a.firstChild;d;){if(d.nodeType===Node.ELEMENT_NODE){var f=d,g=b,l=f.getAttributeNS(h,"name"),m=void 0;l?m=h:(l=f.getAttributeNS(w,"name"))&&(m=w);m&&f.setAttributeNS(m,A[m]+"name",g+l)}d=d.nextSibling}e(a,b);c&&e(c,b)}};this.removePrefixFromStyleNames=function(a,b,c){var d=RegExp("^"+b);if(a){for(b=a.firstChild;b;){if(b.nodeType===
Node.ELEMENT_NODE){var f=b,g=d,l=f.getAttributeNS(h,"name"),e=void 0;l?e=h:(l=f.getAttributeNS(w,"name"))&&(e=w);e&&(l=l.replace(g,""),f.setAttributeNS(e,A[e]+"name",l))}b=b.nextSibling}k(a,d);c&&k(c,d)}};this.determineStylesForNode=d;H=function(){var a,b,c,d,f,h={},g,l,e,m;for(c in E)if(E.hasOwnProperty(c))for(d=E[c],b=d.length,a=0;a<b;a+=1)f=d[a],e=f.en,m=f.ens,h.hasOwnProperty(e)?g=h[e]:h[e]=g={},g.hasOwnProperty(m)?l=g[m]:g[m]=l=[],l.push({ns:f.ans,localname:f.a,keyname:c});return h}()};
// Input 34
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.OdfUtils");
odf.TextSerializer=function(){function e(n){var q="",p=k.filter?k.filter.acceptNode(n):NodeFilter.FILTER_ACCEPT,l=n.nodeType,m;if((p===NodeFilter.FILTER_ACCEPT||p===NodeFilter.FILTER_SKIP)&&d.isTextContentContainingNode(n))for(m=n.firstChild;m;)q+=e(m),m=m.nextSibling;p===NodeFilter.FILTER_ACCEPT&&(l===Node.ELEMENT_NODE&&d.isParagraph(n)?q+="\n":l===Node.TEXT_NODE&&n.textContent&&(q+=n.textContent));return q}var k=this,d=new odf.OdfUtils;this.filter=null;this.writeToString=function(d){if(!d)return"";
d=e(d);"\n"===d[d.length-1]&&(d=d.substr(0,d.length-1));return d}};
// Input 35
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.PositionFilter");runtime.loadClass("odf.OdfUtils");
ops.TextPositionFilter=function(e){function k(e,k,c){var g,b;if(k){if(d.isInlineRoot(k)&&d.isGroupingElement(c))return l;g=d.lookLeftForCharacter(k);if(1===g||2===g&&(d.scanRightForAnyCharacter(c)||d.scanRightForAnyCharacter(d.nextNode(e))))return p}g=null===k&&d.isParagraph(e);b=d.lookRightForCharacter(c);if(g)return b?p:d.scanRightForAnyCharacter(c)?l:p;if(!b)return l;k=k||d.previousNode(e);return d.scanLeftForAnyCharacter(k)?l:p}var d=new odf.OdfUtils,n=Node.ELEMENT_NODE,q=Node.TEXT_NODE,p=core.PositionFilter.FilterResult.FILTER_ACCEPT,
l=core.PositionFilter.FilterResult.FILTER_REJECT;this.acceptPosition=function(m){var r=m.container(),c=r.nodeType,g,b,a;if(c!==n&&c!==q)return l;if(c===q){if(!d.isGroupingElement(r.parentNode)||d.isWithinTrackedChanges(r.parentNode,e()))return l;c=m.unfilteredDomOffset();g=r.data;runtime.assert(c!==g.length,"Unexpected offset.");if(0<c){m=g[c-1];if(!d.isODFWhitespace(m))return p;if(1<c)if(m=g[c-2],!d.isODFWhitespace(m))b=p;else{if(!d.isODFWhitespace(g.substr(0,c)))return l}else a=d.previousNode(r),
d.scanLeftForNonSpace(a)&&(b=p);if(b===p)return d.isTrailingWhitespace(r,c)?l:p;b=g[c];return d.isODFWhitespace(b)?l:d.scanLeftForAnyCharacter(d.previousNode(r))?l:p}a=m.leftNode();b=r;r=r.parentNode;b=k(r,a,b)}else!d.isGroupingElement(r)||d.isWithinTrackedChanges(r,e())?b=l:(a=m.leftNode(),b=m.rightNode(),b=k(r,a,b));return b}};
// Input 36
"function"!==typeof Object.create&&(Object.create=function(e){var k=function(){};k.prototype=e;return new k});
xmldom.LSSerializer=function(){function e(d){var e=d||{},l=function(c){var b={},a;for(a in c)c.hasOwnProperty(a)&&(b[c[a]]=a);return b}(d),m=[e],k=[l],c=0;this.push=function(){c+=1;e=m[c]=Object.create(e);l=k[c]=Object.create(l)};this.pop=function(){m.pop();k.pop();c-=1;e=m[c];l=k[c]};this.getLocalNamespaceDefinitions=function(){return l};this.getQName=function(c){var b=c.namespaceURI,a=0,d;if(!b)return c.localName;if(d=l[b])return d+":"+c.localName;do{d||!c.prefix?(d="ns"+a,a+=1):d=c.prefix;if(e[d]===
b)break;if(!e[d]){e[d]=b;l[b]=d;break}d=null}while(null===d);return d+":"+c.localName}}function k(d){return d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;")}function d(e,p){var l="",m=n.filter?n.filter.acceptNode(p):NodeFilter.FILTER_ACCEPT,r;if(m===NodeFilter.FILTER_ACCEPT&&p.nodeType===Node.ELEMENT_NODE){e.push();r=e.getQName(p);var c,g=p.attributes,b,a,f,h="",t;c="<"+r;b=g.length;for(a=0;a<b;a+=1)f=g.item(a),"http://www.w3.org/2000/xmlns/"!==
f.namespaceURI&&(t=n.filter?n.filter.acceptNode(f):NodeFilter.FILTER_ACCEPT,t===NodeFilter.FILTER_ACCEPT&&(t=e.getQName(f),f="string"===typeof f.value?k(f.value):f.value,h+=" "+(t+'="'+f+'"')));b=e.getLocalNamespaceDefinitions();for(a in b)b.hasOwnProperty(a)&&((g=b[a])?"xmlns"!==g&&(c+=" xmlns:"+b[a]+'="'+a+'"'):c+=' xmlns="'+a+'"');l+=c+(h+">")}if(m===NodeFilter.FILTER_ACCEPT||m===NodeFilter.FILTER_SKIP){for(m=p.firstChild;m;)l+=d(e,m),m=m.nextSibling;p.nodeValue&&(l+=k(p.nodeValue))}r&&(l+="</"+
r+">",e.pop());return l}var n=this;this.filter=null;this.writeToString=function(k,n){if(!k)return"";var l=new e(n);return d(l,k)}};
// Input 37
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.OdfNodeFilter");runtime.loadClass("odf.TextSerializer");gui.MimeDataExporter=function(){var e,k;this.exportRangeToDataTransfer=function(d,k){var q=!0,p;p=k.startContainer.ownerDocument.createElement("span");p.appendChild(k.cloneContents());p=d.setData("text/plain",e.writeToString(p));return q&&p};e=new odf.TextSerializer;k=new odf.OdfNodeFilter;e.filter=k};
// Input 38
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.Clipboard=function(e){this.setDataFromRange=function(k,d){var n;n=k.clipboardData;var q=runtime.getWindow();!n&&q&&(n=q.clipboardData);n?(n=e.exportRangeToDataTransfer(n,d),k.preventDefault()):n=!1;return n}};
// Input 39
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Base64");runtime.loadClass("core.Zip");runtime.loadClass("core.DomUtils");runtime.loadClass("xmldom.LSSerializer");runtime.loadClass("odf.StyleInfo");runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfNodeFilter");
(function(){function e(b,a,c){for(b=b?b.firstChild:null;b;){if(b.localName===c&&b.namespaceURI===a)return b;b=b.nextSibling}return null}function k(b){var a,c=r.length;for(a=0;a<c;a+=1)if("urn:oasis:names:tc:opendocument:xmlns:office:1.0"===b.namespaceURI&&b.localName===r[a])return a;return-1}function d(b,a){var c=new p.UsedStyleList(b,a),d=new odf.OdfNodeFilter;this.acceptNode=function(b){var g=d.acceptNode(b);g===NodeFilter.FILTER_ACCEPT&&b.parentNode===a&&b.nodeType===Node.ELEMENT_NODE&&(g=c.uses(b)?
NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT);return g}}function n(b,a){var c=new d(b,a);this.acceptNode=function(a){var b=c.acceptNode(a);b!==NodeFilter.FILTER_ACCEPT||!a.parentNode||a.parentNode.namespaceURI!==odf.Namespaces.textns||"s"!==a.parentNode.localName&&"tab"!==a.parentNode.localName||(b=NodeFilter.FILTER_REJECT);return b}}function q(b,a){if(a){var c=k(a),d,g=b.firstChild;if(-1!==c){for(;g;){d=k(g);if(-1!==d&&d>c)break;g=g.nextSibling}b.insertBefore(a,g)}}}var p=new odf.StyleInfo,
l=new core.DomUtils,m=odf.Namespaces.stylens,r="meta settings scripts font-face-decls styles automatic-styles master-styles body".split(" "),c=(new Date).getTime()+"_webodf_",g=new core.Base64;odf.ODFElement=function(){};odf.ODFDocumentElement=function(){};odf.ODFDocumentElement.prototype=new odf.ODFElement;odf.ODFDocumentElement.prototype.constructor=odf.ODFDocumentElement;odf.ODFDocumentElement.prototype.fontFaceDecls=null;odf.ODFDocumentElement.prototype.manifest=null;odf.ODFDocumentElement.prototype.settings=
null;odf.ODFDocumentElement.namespaceURI="urn:oasis:names:tc:opendocument:xmlns:office:1.0";odf.ODFDocumentElement.localName="document";odf.OdfPart=function(b,a,c,d){var g=this;this.size=0;this.type=null;this.name=b;this.container=c;this.url=null;this.mimetype=a;this.onstatereadychange=this.document=null;this.EMPTY=0;this.LOADING=1;this.DONE=2;this.state=this.EMPTY;this.data="";this.load=function(){null!==d&&(this.mimetype=a,d.loadAsDataURL(b,a,function(a,b){a&&runtime.log(a);g.url=b;if(g.onchange)g.onchange(g);
if(g.onstatereadychange)g.onstatereadychange(g)}))}};odf.OdfPart.prototype.load=function(){};odf.OdfPart.prototype.getUrl=function(){return this.data?"data:;base64,"+g.toBase64(this.data):null};odf.OdfContainer=function a(f,h){function k(a){for(var c=a.firstChild,d;c;)d=c.nextSibling,c.nodeType===Node.ELEMENT_NODE?k(c):c.nodeType===Node.PROCESSING_INSTRUCTION_NODE&&a.removeChild(c),c=d}function r(a,c){for(var d=a&&a.firstChild;d;)d.nodeType===Node.ELEMENT_NODE&&d.setAttributeNS("urn:webodf:names:scope",
"scope",c),d=d.nextSibling}function x(a){var c={},d;for(a=a.firstChild;a;)a.nodeType===Node.ELEMENT_NODE&&a.namespaceURI===m&&"font-face"===a.localName&&(d=a.getAttributeNS(m,"name"),c[d]=a),a=a.nextSibling;return c}function z(a,c){var d=null,f,h,g;if(a)for(d=a.cloneNode(!0),f=d.firstElementChild;f;)h=f.nextElementSibling,(g=f.getAttributeNS("urn:webodf:names:scope","scope"))&&g!==c&&d.removeChild(f),f=h;return d}function w(a,c){var d,f,h,g=null,l={};if(a)for(c.forEach(function(a){p.collectUsedFontFaces(l,
a)}),g=a.cloneNode(!0),d=g.firstElementChild;d;)f=d.nextElementSibling,h=d.getAttributeNS(m,"name"),l[h]||g.removeChild(d),d=f;return g}function v(a){var c=N.rootElement.ownerDocument,d;if(a){k(a.documentElement);try{d=c.importNode(a.documentElement,!0)}catch(f){}}return d}function s(a){N.state=a;if(N.onchange)N.onchange(N);if(N.onstatereadychange)N.onstatereadychange(N)}function A(a){$=null;N.rootElement=a;a.fontFaceDecls=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","font-face-decls");
a.styles=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles");a.automaticStyles=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles");a.masterStyles=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles");a.body=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","body");a.meta=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta")}function E(d){var f=v(d),h=N.rootElement,g;f&&"document-styles"===f.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===
f.namespaceURI?(h.fontFaceDecls=e(f,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","font-face-decls"),q(h,h.fontFaceDecls),g=e(f,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles"),h.styles=g||d.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles"),q(h,h.styles),g=e(f,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles"),h.automaticStyles=g||d.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles"),r(h.automaticStyles,
"document-styles"),q(h,h.automaticStyles),f=e(f,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles"),h.masterStyles=f||d.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles"),q(h,h.masterStyles),p.prefixStyleNames(h.automaticStyles,c,h.masterStyles)):s(a.INVALID)}function H(c){c=v(c);var d,f,h,g;if(c&&"document-content"===c.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===c.namespaceURI){d=N.rootElement;h=e(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"font-face-decls");if(d.fontFaceDecls&&h){g=d.fontFaceDecls;var l,k,n,A,t={};f=x(g);A=x(h);for(h=h.firstElementChild;h;){l=h.nextElementSibling;if(h.namespaceURI===m&&"font-face"===h.localName)if(k=h.getAttributeNS(m,"name"),f.hasOwnProperty(k)){if(!h.isEqualNode(f[k])){n=k;for(var H=f,E=A,K=0,y=void 0,y=n=n.replace(/\d+$/,"");H.hasOwnProperty(y)||E.hasOwnProperty(y);)K+=1,y=n+K;n=y;h.setAttributeNS(m,"style:name",n);g.appendChild(h);f[n]=h;delete A[k];t[k]=n}}else g.appendChild(h),f[k]=h,delete A[k];
h=l}g=t}else h&&(d.fontFaceDecls=h,q(d,h));f=e(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles");r(f,"document-content");g&&p.changeFontFaceNames(f,g);if(d.automaticStyles&&f)for(g=f.firstChild;g;)d.automaticStyles.appendChild(g),g=f.firstChild;else f&&(d.automaticStyles=f,q(d,f));c=e(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","body");if(null===c)throw"<office:body/> tag is mising.";d.body=c;q(d,d.body)}else s(a.INVALID)}function y(a){a=v(a);var c;a&&"document-meta"===
a.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===a.namespaceURI&&(c=N.rootElement,c.meta=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta"),q(c,c.meta))}function O(a){a=v(a);var c;a&&"document-settings"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===a.namespaceURI&&(c=N.rootElement,c.settings=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","settings"),q(c,c.settings))}function W(a){a=v(a);var c;if(a&&"manifest"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"===
a.namespaceURI)for(c=N.rootElement,c.manifest=a,a=c.manifest.firstElementChild;a;)"file-entry"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"===a.namespaceURI&&(S[a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","full-path")]=a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","media-type")),a=a.nextElementSibling}function G(c){var d=c.shift();d?P.loadAsDOM(d.path,function(f,h){d.handler(h);f||N.state===a.INVALID||G(c)}):s(a.DONE)}function K(a){var c=
"";odf.Namespaces.forEachPrefix(function(a,d){c+=" xmlns:"+a+'="'+d+'"'});return'<?xml version="1.0" encoding="UTF-8"?><office:'+a+" "+c+' office:version="1.2">'}function U(){var a=new xmldom.LSSerializer,c=K("document-meta");a.filter=new odf.OdfNodeFilter;c+=a.writeToString(N.rootElement.meta,odf.Namespaces.namespaceMap);return c+"</office:document-meta>"}function da(a,c){var d=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest:file-entry");d.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0",
"manifest:full-path",a);d.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest:media-type",c);return d}function Z(){var a=runtime.parseXML('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2"></manifest:manifest>'),c=e(a,"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest"),d=new xmldom.LSSerializer,f;for(f in S)S.hasOwnProperty(f)&&c.appendChild(da(f,S[f]));d.filter=new odf.OdfNodeFilter;return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'+
d.writeToString(a,odf.Namespaces.namespaceMap)}function F(){var a=new xmldom.LSSerializer,c=K("document-settings");a.filter=new odf.OdfNodeFilter;c+=a.writeToString(N.rootElement.settings,odf.Namespaces.namespaceMap);return c+"</office:document-settings>"}function M(){var a,f,h,g=odf.Namespaces.namespaceMap,l=new xmldom.LSSerializer,e=K("document-styles");f=z(N.rootElement.automaticStyles,"document-styles");h=N.rootElement.masterStyles.cloneNode(!0);a=w(N.rootElement.fontFaceDecls,[h,N.rootElement.styles,
f]);p.removePrefixFromStyleNames(f,c,h);l.filter=new d(h,f);e+=l.writeToString(a,g);e+=l.writeToString(N.rootElement.styles,g);e+=l.writeToString(f,g);e+=l.writeToString(h,g);return e+"</office:document-styles>"}function R(){var a,c,d=odf.Namespaces.namespaceMap,f=new xmldom.LSSerializer,h=K("document-content");c=z(N.rootElement.automaticStyles,"document-content");a=w(N.rootElement.fontFaceDecls,[c]);f.filter=new n(N.rootElement.body,c);h+=f.writeToString(a,d);h+=f.writeToString(c,d);h+=f.writeToString(N.rootElement.body,
d);return h+"</office:document-content>"}function L(c,d){runtime.loadXML(c,function(c,f){if(c)d(c);else{var h=v(f);h&&"document"===h.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===h.namespaceURI?(A(h),s(a.DONE)):s(a.INVALID)}})}function I(a,c){var d;d=N.rootElement;var f=d.meta;f||(d.meta=f=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta"),q(d,f));d=f;a&&l.mapKeyValObjOntoNode(d,a,odf.Namespaces.lookupNamespaceURI);c&&l.removeKeyElementsFromNode(d,
c,odf.Namespaces.lookupNamespaceURI)}function J(){function c(a,d){var f;d||(d=a);f=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",d);h[a]=f;h.appendChild(f)}var d=new core.Zip("",null),f=runtime.byteArrayFromString("application/vnd.oasis.opendocument.text","utf8"),h=N.rootElement,g=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","text");d.save("mimetype",f,!1,new Date);c("meta");c("settings");c("scripts");c("fontFaceDecls","font-face-decls");
c("styles");c("automaticStyles","automatic-styles");c("masterStyles","master-styles");c("body");h.body.appendChild(g);s(a.DONE);return d}function V(){var a,c=new Date,d=runtime.getWindow();a="WebODF/"+("undefined"!==String(typeof webodf_version)?webodf_version:"FromSource");d&&(a=a+" "+d.navigator.userAgent);I({"meta:generator":a},null);a=runtime.byteArrayFromString(F(),"utf8");P.save("settings.xml",a,!0,c);a=runtime.byteArrayFromString(U(),"utf8");P.save("meta.xml",a,!0,c);a=runtime.byteArrayFromString(M(),
"utf8");P.save("styles.xml",a,!0,c);a=runtime.byteArrayFromString(R(),"utf8");P.save("content.xml",a,!0,c);a=runtime.byteArrayFromString(Z(),"utf8");P.save("META-INF/manifest.xml",a,!0,c)}function aa(a,c){V();P.writeAs(a,function(a){c(a)})}var N=this,P,S={},$;this.onstatereadychange=h;this.state=this.onchange=null;this.setRootElement=A;this.getContentElement=function(){var a;$||(a=N.rootElement.body,$=e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","text")||e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"presentation")||e(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","spreadsheet"));if(!$)throw"Could not find content element in <office:body/>.";return $};this.getDocumentType=function(){var a=N.getContentElement();return a&&a.localName};this.getPart=function(a){return new odf.OdfPart(a,S[a],N,P)};this.getPartData=function(a,c){P.load(a,c)};this.setMetadata=I;this.incrementEditingCycles=function(){var a;for(a=(a=N.rootElement.meta)&&a.firstChild;a&&(a.namespaceURI!==odf.Namespaces.metans||"editing-cycles"!==
a.localName);)a=a.nextSibling;for(a=a&&a.firstChild;a&&a.nodeType!==Node.TEXT_NODE;)a=a.nextSibling;a=a?a.data:null;a=a?parseInt(a,10):0;isNaN(a)&&(a=0);I({"meta:editing-cycles":a+1},null)};this.createByteArray=function(a,c){V();P.createByteArray(a,c)};this.saveAs=aa;this.save=function(a){aa(f,a)};this.getUrl=function(){return f};this.setBlob=function(a,c,d){d=g.convertBase64ToByteArray(d);P.save(a,d,!1,new Date);S.hasOwnProperty(a)&&runtime.log(a+" has been overwritten.");S[a]=c};this.removeBlob=
function(a){var c=P.remove(a);runtime.assert(c,"file is not found: "+a);delete S[a]};this.state=a.LOADING;this.rootElement=function(a){var c=document.createElementNS(a.namespaceURI,a.localName),d;a=new a.Type;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);return c}({Type:odf.ODFDocumentElement,namespaceURI:odf.ODFDocumentElement.namespaceURI,localName:odf.ODFDocumentElement.localName});P=f?new core.Zip(f,function(c,d){P=d;c?L(f,function(d){c&&(P.error=c+"\n"+d,s(a.INVALID))}):G([{path:"styles.xml",handler:E},
{path:"content.xml",handler:H},{path:"meta.xml",handler:y},{path:"settings.xml",handler:O},{path:"META-INF/manifest.xml",handler:W}])}):J()};odf.OdfContainer.EMPTY=0;odf.OdfContainer.LOADING=1;odf.OdfContainer.DONE=2;odf.OdfContainer.INVALID=3;odf.OdfContainer.SAVING=4;odf.OdfContainer.MODIFIED=5;odf.OdfContainer.getContainer=function(a){return new odf.OdfContainer(a,null)};return odf.OdfContainer})();
// Input 40
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Base64");runtime.loadClass("xmldom.XPath");runtime.loadClass("odf.OdfContainer");
(function(){function e(k,q,p,l,m){var r,c=0,g;for(g in k)if(k.hasOwnProperty(g)){if(c===p){r=g;break}c+=1}r?q.getPartData(k[r].href,function(b,a){if(b)runtime.log(b);else if(a){var c="@font-face { font-family: '"+(k[r].family||r)+"'; src: url(data:application/x-font-ttf;charset=binary;base64,"+d.convertUTF8ArrayToBase64(a)+') format("truetype"); }';try{l.insertRule(c,l.cssRules.length)}catch(h){runtime.log("Problem inserting rule in CSS: "+runtime.toJson(h)+"\nRule: "+c)}}else runtime.log("missing font data for "+
k[r].href);e(k,q,p+1,l,m)}):m&&m()}var k=xmldom.XPath,d=new core.Base64;odf.FontLoader=function(){this.loadFonts=function(d,q){for(var p=d.rootElement.fontFaceDecls;q.cssRules.length;)q.deleteRule(q.cssRules.length-1);if(p){var l={},m,r,c,g;if(p)for(p=k.getODFElementsWithXPath(p,"style:font-face[svg:font-face-src]",odf.Namespaces.lookupNamespaceURI),m=0;m<p.length;m+=1)r=p[m],c=r.getAttributeNS(odf.Namespaces.stylens,"name"),g=r.getAttributeNS(odf.Namespaces.svgns,"font-family"),r=k.getODFElementsWithXPath(r,
"svg:font-face-src/svg:font-face-uri",odf.Namespaces.lookupNamespaceURI),0<r.length&&(r=r[0].getAttributeNS(odf.Namespaces.xlinkns,"href"),l[c]={href:r,family:g});e(l,d,0,q)}}};return odf.FontLoader})();
// Input 41
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("core.Utils");
odf.ObjectNameGenerator=function(e,k){function d(a,b){var c={};this.generateName=function(){var d=b(),f=0,g;do g=a+f,f+=1;while(c[g]||d[g]);c[g]=!0;return g}}function n(){var a={};[e.rootElement.automaticStyles,e.rootElement.styles].forEach(function(b){for(b=b.firstElementChild;b;)b.namespaceURI===q&&"style"===b.localName&&(a[b.getAttributeNS(q,"name")]=!0),b=b.nextElementSibling});return a}var q=odf.Namespaces.stylens,p=odf.Namespaces.drawns,l=odf.Namespaces.xlinkns,m=new core.DomUtils,r=(new core.Utils).hashString(k),
c=null,g=null,b=null,a={},f={};this.generateStyleName=function(){null===c&&(c=new d("auto"+r+"_",function(){return n()}));return c.generateName()};this.generateFrameName=function(){null===g&&(m.getElementsByTagNameNS(e.rootElement.body,p,"frame").forEach(function(b){a[b.getAttributeNS(p,"name")]=!0}),g=new d("fr"+r+"_",function(){return a}));return g.generateName()};this.generateImageName=function(){null===b&&(m.getElementsByTagNameNS(e.rootElement.body,p,"image").forEach(function(a){a=a.getAttributeNS(l,
"href");a=a.substring(9,a.lastIndexOf("."));f[a]=!0}),b=new d("img"+r+"_",function(){return f}));return b.generateName()}};
// Input 42
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Utils");runtime.loadClass("odf.ObjectNameGenerator");runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfContainer");runtime.loadClass("odf.StyleInfo");runtime.loadClass("odf.OdfUtils");
odf.Formatting=function(){function e(a){return(a=s[a])?v.mergeObjects({},a):{}}function k(a,b,c){for(a=a&&a.firstElementChild;a&&(a.namespaceURI!==b||a.localName!==c);)a=a.nextElementSibling;return a}function d(){for(var a=b.rootElement.fontFaceDecls,c={},d,g,a=a&&a.firstElementChild;a;){if(d=a.getAttributeNS(h,"name"))if((g=a.getAttributeNS(f,"font-family"))||0<a.getElementsByTagNameNS(f,"font-face-uri").length)c[d]=g;a=a.nextElementSibling}return c}function n(a){for(var c=b.rootElement.styles.firstElementChild;c;){if(c.namespaceURI===
h&&"default-style"===c.localName&&c.getAttributeNS(h,"family")===a)return c;c=c.nextElementSibling}return null}function q(a,c,d){var f,g,l;d=d||[b.rootElement.automaticStyles,b.rootElement.styles];for(l=0;l<d.length;l+=1)for(f=d[l],f=f.firstElementChild;f;){g=f.getAttributeNS(h,"name");if(f.namespaceURI===h&&"style"===f.localName&&f.getAttributeNS(h,"family")===c&&g===a||"list-style"===c&&f.namespaceURI===t&&"list-style"===f.localName&&g===a||"data"===c&&f.namespaceURI===u&&g===a)return f;f=f.nextElementSibling}return null}
function p(a){for(var b,c,d,f,g={},l=a.firstElementChild;l;){if(l.namespaceURI===h)for(d=g[l.nodeName]={},c=l.attributes,b=0;b<c.length;b+=1)f=c.item(b),d[f.name]=f.value;l=l.nextElementSibling}c=a.attributes;for(b=0;b<c.length;b+=1)f=c.item(b),g[f.name]=f.value;return g}function l(a,c){for(var d=b.rootElement.styles,f,g={},l=a.getAttributeNS(h,"family"),k=a;k;)f=p(k),g=v.mergeObjects(f,g),k=(f=k.getAttributeNS(h,"parent-style-name"))?q(f,l,[d]):null;if(k=n(l))f=p(k),g=v.mergeObjects(f,g);c&&(f=e(l))&&
(g=v.mergeObjects(f,g));return g}function m(b,c){function d(a){Object.keys(a).forEach(function(b){Object.keys(a[b]).forEach(function(a){l+="|"+b+":"+a+"|"})})}for(var f=b.nodeType===Node.TEXT_NODE?b.parentNode:b,h,g=[],l="",e=!1;f;)!e&&z.isGroupingElement(f)&&(e=!0),(h=a.determineStylesForNode(f))&&g.push(h),f=f.parentNode;e&&(g.forEach(d),c&&(c[l]=g));return e?g:void 0}function r(a){var b={orderedStyles:[]};a.forEach(function(a){Object.keys(a).forEach(function(c){var d=Object.keys(a[c])[0],f,g;(f=
q(d,c))?(g=l(f),b=v.mergeObjects(g,b),g=f.getAttributeNS(h,"display-name")):runtime.log("No style element found for '"+d+"' of family '"+c+"'");b.orderedStyles.push({name:d,family:c,displayName:g})})});return b}function c(a,b){var c={},d=[];b||(b={});a.forEach(function(a){m(a,c)});Object.keys(c).forEach(function(a){b[a]||(b[a]=r(c[a]));d.push(b[a])});return d}function g(a,b){var c=z.parseLength(a),d=b;if(c)switch(c.unit){case "cm":d=c.value;break;case "mm":d=0.1*c.value;break;case "in":d=2.54*c.value;
break;case "pt":d=0.035277778*c.value;break;case "pc":case "px":case "em":break;default:runtime.log("Unit identifier: "+c.unit+" is not supported.")}return d}var b,a=new odf.StyleInfo,f=odf.Namespaces.svgns,h=odf.Namespaces.stylens,t=odf.Namespaces.textns,u=odf.Namespaces.numberns,x=odf.Namespaces.fons,z=new odf.OdfUtils,w=new core.DomUtils,v=new core.Utils,s={paragraph:{"style:paragraph-properties":{"fo:text-align":"left"}}};this.getSystemDefaultStyleAttributes=e;this.setOdfContainer=function(a){b=
a};this.getFontMap=d;this.getAvailableParagraphStyles=function(){for(var a=b.rootElement.styles,c,d,f=[],a=a&&a.firstElementChild;a;)"style"===a.localName&&a.namespaceURI===h&&(c=a.getAttributeNS(h,"family"),"paragraph"===c&&(c=a.getAttributeNS(h,"name"),d=a.getAttributeNS(h,"display-name")||c,c&&d&&f.push({name:c,displayName:d}))),a=a.nextElementSibling;return f};this.isStyleUsed=function(c){var d,f=b.rootElement;d=a.hasDerivedStyles(f,odf.Namespaces.lookupNamespaceURI,c);c=(new a.UsedStyleList(f.styles)).uses(c)||
(new a.UsedStyleList(f.automaticStyles)).uses(c)||(new a.UsedStyleList(f.body)).uses(c);return d||c};this.getDefaultStyleElement=n;this.getStyleElement=q;this.getStyleAttributes=p;this.getInheritedStyleAttributes=l;this.getFirstCommonParentStyleNameOrSelf=function(a){var c=b.rootElement.automaticStyles,d=b.rootElement.styles,f;for(f=q(a,"paragraph",[c]);f;)a=f.getAttributeNS(h,"parent-style-name"),f=q(a,"paragraph",[c]);return(f=q(a,"paragraph",[d]))?a:null};this.hasParagraphStyle=function(a){return Boolean(q(a,
"paragraph"))};this.getAppliedStyles=c;this.getAppliedStylesForElement=function(a,b){return c([a],b)[0]};this.updateStyle=function(a,c){var g,l;w.mapObjOntoNode(a,c,odf.Namespaces.lookupNamespaceURI);(g=c["style:text-properties"]&&c["style:text-properties"]["style:font-name"])&&!d().hasOwnProperty(g)&&(l=a.ownerDocument.createElementNS(h,"style:font-face"),l.setAttributeNS(h,"style:name",g),l.setAttributeNS(f,"svg:font-family",g),b.rootElement.fontFaceDecls.appendChild(l))};this.createDerivedStyleObject=
function(a,c,d){var f=q(a,c);runtime.assert(Boolean(f),"No style element found for '"+a+"' of family '"+c+"'");a=f.parentNode===b.rootElement.automaticStyles?p(f):{"style:parent-style-name":a};a["style:family"]=c;v.mergeObjects(a,d);return a};this.getDefaultTabStopDistance=function(){for(var a=n("paragraph"),a=a&&a.firstElementChild,b;a;)a.namespaceURI===h&&"paragraph-properties"===a.localName&&(b=a.getAttributeNS(h,"tab-stop-distance")),a=a.nextElementSibling;b||(b="1.25cm");return z.parseNonNegativeLength(b)};
this.getContentSize=function(a,c){var d,f,l,e,m,n,p,r,t,u,s;a:{var v,z,I;d=q(a,c);runtime.assert("paragraph"===c||"table"===c,"styleFamily has to be either paragraph or table");if(d){v=d.getAttributeNS(h,"master-page-name")||"Standard";for(d=b.rootElement.masterStyles.lastElementChild;d&&d.getAttributeNS(h,"name")!==v;)d=d.previousElementSibling;v=d.getAttributeNS(h,"page-layout-name");z=w.getElementsByTagNameNS(b.rootElement.automaticStyles,h,"page-layout");for(I=0;I<z.length;I+=1)if(d=z[I],d.getAttributeNS(h,
"name")===v)break a}d=null}d||(d=k(b.rootElement.styles,h,"default-page-layout"));if(d=k(d,h,"page-layout-properties"))f=d.getAttributeNS(h,"print-orientation")||"portrait","portrait"===f?(f=21.001,l=29.7):(f=29.7,l=21.001),f=g(d.getAttributeNS(x,"page-width"),f),l=g(d.getAttributeNS(x,"page-height"),l),e=g(d.getAttributeNS(x,"margin"),null),null===e?(e=g(d.getAttributeNS(x,"margin-left"),2),m=g(d.getAttributeNS(x,"margin-right"),2),n=g(d.getAttributeNS(x,"margin-top"),2),p=g(d.getAttributeNS(x,"margin-bottom"),
2)):e=m=n=p=e,r=g(d.getAttributeNS(x,"padding"),null),null===r?(r=g(d.getAttributeNS(x,"padding-left"),0),t=g(d.getAttributeNS(x,"padding-right"),0),u=g(d.getAttributeNS(x,"padding-top"),0),s=g(d.getAttributeNS(x,"padding-bottom"),0)):r=t=u=s=r;return{width:f-e-m-r-t,height:l-n-p-u-s}}};
// Input 43
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfContainer");runtime.loadClass("odf.Formatting");runtime.loadClass("xmldom.XPath");runtime.loadClass("odf.FontLoader");runtime.loadClass("odf.Style2CSS");runtime.loadClass("odf.OdfUtils");runtime.loadClass("gui.AnnotationViewManager");
(function(){function e(){function a(d){c=!0;runtime.setTimeout(function(){try{d()}catch(f){runtime.log(String(f))}c=!1;0<b.length&&a(b.pop())},10)}var b=[],c=!1;this.clearQueue=function(){b.length=0};this.addToQueue=function(d){if(0===b.length&&!c)return a(d);b.push(d)}}function k(a){function b(){for(;0<c.cssRules.length;)c.deleteRule(0);c.insertRule("#shadowContent draw|page {display:none;}",0);c.insertRule("office|presentation draw|page {display:none;}",1);c.insertRule("#shadowContent draw|page:nth-of-type("+
d+") {display:block;}",2);c.insertRule("office|presentation draw|page:nth-of-type("+d+") {display:block;}",3)}var c=a.sheet,d=1;this.showFirstPage=function(){d=1;b()};this.showNextPage=function(){d+=1;b()};this.showPreviousPage=function(){1<d&&(d-=1,b())};this.showPage=function(a){0<a&&(d=a,b())};this.css=a;this.destroy=function(b){a.parentNode.removeChild(a);b()}}function d(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function n(a,b,c){(new odf.Style2CSS).style2css(a.getDocumentType(),c.sheet,
b.getFontMap(),a.rootElement.styles,a.rootElement.automaticStyles)}function q(a,b,c){var d=null;a=a.rootElement.body.getElementsByTagNameNS(H,c+"-decl");c=b.getAttributeNS(H,"use-"+c+"-name");var f;if(c&&0<a.length)for(b=0;b<a.length;b+=1)if(f=a[b],f.getAttributeNS(H,"name")===c){d=f.textContent;break}return d}function p(a,b,c,f){var h=a.ownerDocument;b=a.getElementsByTagNameNS(b,c);for(a=0;a<b.length;a+=1)d(b[a]),f&&(c=b[a],c.appendChild(h.createTextNode(f)))}function l(a,b,c){b.setAttributeNS("urn:webodf:names:helper",
"styleid",a);var d,f=b.getAttributeNS(s,"anchor-type"),h=b.getAttributeNS(w,"x"),g=b.getAttributeNS(w,"y"),l=b.getAttributeNS(w,"width"),e=b.getAttributeNS(w,"height"),k=b.getAttributeNS(u,"min-height"),m=b.getAttributeNS(u,"min-width");if("as-char"===f)d="display: inline-block;";else if(f||h||g)d="position: absolute;";else if(l||e||k||m)d="display: block;";h&&(d+="left: "+h+";");g&&(d+="top: "+g+";");l&&(d+="width: "+l+";");e&&(d+="height: "+e+";");k&&(d+="min-height: "+k+";");m&&(d+="min-width: "+
m+";");d&&(d="draw|"+b.localName+'[webodfhelper|styleid="'+a+'"] {'+d+"}",c.insertRule(d,c.cssRules.length))}function m(a){for(a=a.firstChild;a;){if(a.namespaceURI===x&&"binary-data"===a.localName)return"data:image/png;base64,"+a.textContent.replace(/[\r\n\s]/g,"");a=a.nextSibling}return""}function r(a,b,c,d){function f(b){b&&(b='draw|image[webodfhelper|styleid="'+a+'"] {'+("background-image: url("+b+");")+"}",d.insertRule(b,d.cssRules.length))}function h(a){f(a.url)}c.setAttributeNS("urn:webodf:names:helper",
"styleid",a);var g=c.getAttributeNS(A,"href"),l;if(g)try{l=b.getPart(g),l.onchange=h,l.load()}catch(e){runtime.log("slight problem: "+String(e))}else g=m(c),f(g)}function c(a){var b=a.ownerDocument;G.getElementsByTagNameNS(a,s,"line-break").forEach(function(a){a.hasChildNodes()||a.appendChild(b.createElement("br"))})}function g(a){var b=a.ownerDocument;G.getElementsByTagNameNS(a,s,"s").forEach(function(a){for(var c,d;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(b.createTextNode(" "));d=
parseInt(a.getAttributeNS(s,"c"),10);if(1<d)for(a.removeAttributeNS(s,"c"),c=1;c<d;c+=1)a.parentNode.insertBefore(a.cloneNode(!0),a)})}function b(a){G.getElementsByTagNameNS(a,s,"tab").forEach(function(a){a.textContent="\t"})}function a(a,b){function c(a,d){var g=l.documentElement.namespaceURI;"video/"===d.substr(0,6)?(f=l.createElementNS(g,"video"),f.setAttribute("controls","controls"),h=l.createElementNS(g,"source"),a&&h.setAttribute("src",a),h.setAttribute("type",d),f.appendChild(h),b.parentNode.appendChild(f)):
b.innerHtml="Unrecognised Plugin"}function d(a){c(a.url,a.mimetype)}var f,h,g,l=b.ownerDocument,e;if(g=b.getAttributeNS(A,"href"))try{e=a.getPart(g),e.onchange=d,e.load()}catch(k){runtime.log("slight problem: "+String(k))}else runtime.log("using MP4 data fallback"),g=m(b),c(g,"video/mp4")}function f(a){var b=a.getElementsByTagName("head")[0],c;"undefined"!==String(typeof webodf_css)?(c=a.createElementNS(b.namespaceURI,"style"),c.setAttribute("media","screen, print, handheld, projection"),c.appendChild(a.createTextNode(webodf_css))):
(c=a.createElementNS(b.namespaceURI,"link"),a="webodf.css",runtime.currentDirectory&&(a=runtime.currentDirectory()+"/../"+a),c.setAttribute("href",a),c.setAttribute("rel","stylesheet"));c.setAttribute("type","text/css");b.appendChild(c);return c}function h(a){var b=a.getElementsByTagName("head")[0],c=a.createElementNS(b.namespaceURI,"style"),d="";c.setAttribute("type","text/css");c.setAttribute("media","screen, print, handheld, projection");odf.Namespaces.forEachPrefix(function(a,b){d+="@namespace "+
a+" url("+b+");\n"});d+="@namespace webodfhelper url(urn:webodf:names:helper);\n";c.appendChild(a.createTextNode(d));b.appendChild(c);return c}var t=odf.Namespaces.drawns,u=odf.Namespaces.fons,x=odf.Namespaces.officens,z=odf.Namespaces.stylens,w=odf.Namespaces.svgns,v=odf.Namespaces.tablens,s=odf.Namespaces.textns,A=odf.Namespaces.xlinkns,E=odf.Namespaces.xmlns,H=odf.Namespaces.presentationns,y=runtime.getWindow(),O=xmldom.XPath,W=new odf.OdfUtils,G=new core.DomUtils;odf.OdfCanvas=function(m){function A(a,
b,c){function d(a,b,c,f){ha.addToQueue(function(){r(a,b,c,f)})}var f,h;f=b.getElementsByTagNameNS(t,"image");for(b=0;b<f.length;b+=1)h=f.item(b),d("image"+String(b),a,h,c)}function u(b,c){function d(b,c){ha.addToQueue(function(){a(b,c)})}var f,h,g;h=c.getElementsByTagNameNS(t,"plugin");for(f=0;f<h.length;f+=1)g=h.item(f),d(b,g)}function w(){var a;P.firstChild&&(1<T?(P.style.MozTransformOrigin="center top",P.style.WebkitTransformOrigin="center top",P.style.OTransformOrigin="center top",P.style.msTransformOrigin=
"center top"):(P.style.MozTransformOrigin="left top",P.style.WebkitTransformOrigin="left top",P.style.OTransformOrigin="left top",P.style.msTransformOrigin="left top"),P.style.WebkitTransform="scale("+T+")",P.style.MozTransform="scale("+T+")",P.style.OTransform="scale("+T+")",P.style.msTransform="scale("+T+")",Y&&((a=Y.getMinimumHeightForAnnotationPane())?P.style.minHeight=a:P.style.removeProperty("min-height")),m.style.width=Math.round(T*P.offsetWidth)+"px",m.style.height=Math.round(T*P.offsetHeight)+
"px")}function F(a){function b(a){return d===a.getAttributeNS(x,"name")}var c=G.getElementsByTagNameNS(a,x,"annotation");a=G.getElementsByTagNameNS(a,x,"annotation-end");var d,f;for(f=0;f<c.length;f+=1)d=c[f].getAttributeNS(x,"name"),Y.addAnnotation({node:c[f],end:a.filter(b)[0]||null});Y.rerenderAnnotations()}function M(a){$?(S.parentNode||P.appendChild(S),Y&&Y.forgetAnnotations(),Y=new gui.AnnotationViewManager(I,a.body,S,D),F(a.body),w()):S.parentNode&&(P.removeChild(S),Y.forgetAnnotations(),w())}
function R(a){function f(){d(m);m.style.display="inline-block";var h=V.rootElement;m.ownerDocument.importNode(h,!0);aa.setOdfContainer(V);var e=V,k=B;(new odf.FontLoader).loadFonts(e,k.sheet);n(V,aa,C);k=V;e=ca.sheet;d(m);P=J.createElementNS(m.namespaceURI,"div");P.style.display="inline-block";P.style.background="white";P.appendChild(h);m.appendChild(P);S=J.createElementNS(m.namespaceURI,"div");S.id="annotationsPane";ba=J.createElementNS(m.namespaceURI,"div");ba.id="shadowContent";ba.style.position=
"absolute";ba.style.top=0;ba.style.left=0;k.getContentElement().appendChild(ba);var r=h.body,G,T=[],F;for(G=r.firstElementChild;G&&G!==r;)if(G.namespaceURI===t&&(T[T.length]=G),G.firstElementChild)G=G.firstElementChild;else{for(;G&&G!==r&&!G.nextElementSibling;)G=G.parentNode;G&&G.nextElementSibling&&(G=G.nextElementSibling)}for(F=0;F<T.length;F+=1)G=T[F],l("frame"+String(F),G,e);T=O.getODFElementsWithXPath(r,".//*[*[@text:anchor-type='paragraph']]",odf.Namespaces.lookupNamespaceURI);for(G=0;G<T.length;G+=
1)r=T[G],r.setAttributeNS&&r.setAttributeNS("urn:webodf:names:helper","containsparagraphanchor",!0);var r=ba,D,I,L;L=0;var X,N,T=k.rootElement.ownerDocument;if((G=h.body.firstElementChild)&&G.namespaceURI===x&&("presentation"===G.localName||"drawing"===G.localName))for(G=G.firstElementChild;G;){F=G.getAttributeNS(t,"master-page-name");if(F){for(D=k.rootElement.masterStyles.firstElementChild;D&&(D.getAttributeNS(z,"name")!==F||"master-page"!==D.localName||D.namespaceURI!==z);)D=D.nextElementSibling;
F=D}else F=null;if(F){D=G.getAttributeNS("urn:webodf:names:helper","styleid");I=T.createElementNS(t,"draw:page");N=F.firstElementChild;for(X=0;N;)"true"!==N.getAttributeNS(H,"placeholder")&&(L=N.cloneNode(!0),I.appendChild(L),l(D+"_"+X,L,e)),N=N.nextElementSibling,X+=1;N=X=L=void 0;var Q=I.getElementsByTagNameNS(t,"frame");for(L=0;L<Q.length;L+=1)X=Q[L],(N=X.getAttributeNS(H,"class"))&&!/^(date-time|footer|header|page-number)$/.test(N)&&X.parentNode.removeChild(X);r.appendChild(I);L=String(r.getElementsByTagNameNS(t,
"page").length);p(I,s,"page-number",L);p(I,H,"header",q(k,G,"header"));p(I,H,"footer",q(k,G,"footer"));l(D,I,e);I.setAttributeNS(t,"draw:master-page-name",F.getAttributeNS(z,"name"))}G=G.nextElementSibling}r=m.namespaceURI;T=h.body.getElementsByTagNameNS(v,"table-cell");for(G=0;G<T.length;G+=1)F=T.item(G),F.hasAttributeNS(v,"number-columns-spanned")&&F.setAttributeNS(r,"colspan",F.getAttributeNS(v,"number-columns-spanned")),F.hasAttributeNS(v,"number-rows-spanned")&&F.setAttributeNS(r,"rowspan",F.getAttributeNS(v,
"number-rows-spanned"));c(h.body);g(h.body);b(h.body);A(k,h.body,e);u(k,h.body);F=h.body;k=m.namespaceURI;G={};var T={},R;D=y.document.getElementsByTagNameNS(s,"list-style");for(r=0;r<D.length;r+=1)X=D.item(r),(N=X.getAttributeNS(z,"name"))&&(T[N]=X);F=F.getElementsByTagNameNS(s,"list");for(r=0;r<F.length;r+=1)if(X=F.item(r),D=X.getAttributeNS(E,"id")){I=X.getAttributeNS(s,"continue-list");X.setAttributeNS(k,"id",D);L="text|list#"+D+" > text|list-item > *:first-child:before {";if(N=X.getAttributeNS(s,
"style-name")){X=T[N];R=W.getFirstNonWhitespaceChild(X);X=void 0;if(R)if("list-level-style-number"===R.localName){X=R.getAttributeNS(z,"num-format");N=R.getAttributeNS(z,"num-suffix")||"";var Q="",Q={1:"decimal",a:"lower-latin",A:"upper-latin",i:"lower-roman",I:"upper-roman"},Y=void 0,Y=R.getAttributeNS(z,"num-prefix")||"",Y=Q.hasOwnProperty(X)?Y+(" counter(list, "+Q[X]+")"):X?Y+("'"+X+"';"):Y+" ''";N&&(Y+=" '"+N+"'");X=Q="content: "+Y+";"}else"list-level-style-image"===R.localName?X="content: none;":
"list-level-style-bullet"===R.localName&&(X="content: '"+R.getAttributeNS(s,"bullet-char")+"';");R=X}if(I){for(X=G[I];X;)X=G[X];L+="counter-increment:"+I+";";R?(R=R.replace("list",I),L+=R):L+="content:counter("+I+");"}else I="",R?(R=R.replace("list",D),L+=R):L+="content: counter("+D+");",L+="counter-increment:"+D+";",e.insertRule("text|list#"+D+" {counter-reset:"+D+"}",e.cssRules.length);L+="}";G[D]=I;L&&e.insertRule(L,e.cssRules.length)}P.insertBefore(ba,P.firstChild);w();M(h);if(!a&&(h=[V],fa.hasOwnProperty("statereadychange")))for(e=
fa.statereadychange,R=0;R<e.length;R+=1)e[R].apply(null,h)}V.state===odf.OdfContainer.DONE?f():(runtime.log("WARNING: refreshOdf called but ODF was not DONE."),ga=runtime.setTimeout(function ka(){V.state===odf.OdfContainer.DONE?f():(runtime.log("will be back later..."),ga=runtime.setTimeout(ka,500))},100))}function L(a){ha.clearQueue();m.innerHTML=runtime.tr("Loading")+" "+a+"...";m.removeAttribute("style");V=new odf.OdfContainer(a,function(a){V=a;R(!1)})}runtime.assert(null!==m&&void 0!==m,"odf.OdfCanvas constructor needs DOM element");
runtime.assert(null!==m.ownerDocument&&void 0!==m.ownerDocument,"odf.OdfCanvas constructor needs DOM");var I=this,J=m.ownerDocument,V,aa=new odf.Formatting,N,P=null,S=null,$=!1,D=!1,Y=null,Q,B,C,ca,ba,T=1,fa={},ga,ha=new e;this.refreshCSS=function(){n(V,aa,C);w()};this.refreshSize=function(){w()};this.odfContainer=function(){return V};this.setOdfContainer=function(a,b){V=a;R(!0===b)};this.load=this.load=L;this.save=function(a){V.save(a)};this.addListener=function(a,b){switch(a){case "click":var c=
m,d=a;c.addEventListener?c.addEventListener(d,b,!1):c.attachEvent?c.attachEvent("on"+d,b):c["on"+d]=b;break;default:c=fa.hasOwnProperty(a)?fa[a]:fa[a]=[],b&&-1===c.indexOf(b)&&c.push(b)}};this.getFormatting=function(){return aa};this.getAnnotationViewManager=function(){return Y};this.refreshAnnotations=function(){M(V.rootElement)};this.rerenderAnnotations=function(){Y&&(Y.rerenderAnnotations(),w())};this.getSizer=function(){return P};this.enableAnnotations=function(a,b){a!==$&&($=a,D=b,V&&M(V.rootElement))};
this.addAnnotation=function(a){Y&&(Y.addAnnotation(a),w())};this.forgetAnnotations=function(){Y&&(Y.forgetAnnotations(),w())};this.setZoomLevel=function(a){T=a;w()};this.getZoomLevel=function(){return T};this.fitToContainingElement=function(a,b){var c=m.offsetHeight/T;T=a/(m.offsetWidth/T);b/c<T&&(T=b/c);w()};this.fitToWidth=function(a){T=a/(m.offsetWidth/T);w()};this.fitSmart=function(a,b){var c,d;c=m.offsetWidth/T;d=m.offsetHeight/T;c=a/c;void 0!==b&&b/d<c&&(c=b/d);T=Math.min(1,c);w()};this.fitToHeight=
function(a){T=a/(m.offsetHeight/T);w()};this.showFirstPage=function(){N.showFirstPage()};this.showNextPage=function(){N.showNextPage()};this.showPreviousPage=function(){N.showPreviousPage()};this.showPage=function(a){N.showPage(a);w()};this.getElement=function(){return m};this.addCssForFrameWithImage=function(a){var b=a.getAttributeNS(t,"name"),c=a.firstElementChild;l(b,a,ca.sheet);c&&r(b+"img",V,c,ca.sheet)};this.destroy=function(a){var b=J.getElementsByTagName("head")[0];runtime.clearTimeout(ga);
S&&S.parentNode&&S.parentNode.removeChild(S);P&&(m.removeChild(P),P=null);b.removeChild(Q);b.removeChild(B);b.removeChild(C);b.removeChild(ca);N.destroy(a)};Q=f(J);N=new k(h(J));B=h(J);C=h(J);ca=h(J)}})();
// Input 44
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("core.LoopWatchDog");runtime.loadClass("odf.Namespaces");
odf.TextStyleApplicator=function(e,k,d){function n(c){function d(a,b){return"object"===typeof a&&"object"===typeof b?Object.keys(a).every(function(c){return d(a[c],b[c])}):a===b}var b={};this.isStyleApplied=function(a){a=k.getAppliedStylesForElement(a,b);return d(c,a)}}function q(c){var g={};this.applyStyleToContainer=function(b){var a;a=b.getAttributeNS(m,"style-name");var f=b.ownerDocument;a=a||"";if(!g.hasOwnProperty(a)){var h=a,l;l=a?k.createDerivedStyleObject(a,"text",c):c;f=f.createElementNS(r,
"style:style");k.updateStyle(f,l);f.setAttributeNS(r,"style:name",e.generateStyleName());f.setAttributeNS(r,"style:family","text");f.setAttributeNS("urn:webodf:names:scope","scope","document-content");d.appendChild(f);g[h]=f}a=g[a].getAttributeNS(r,"name");b.setAttributeNS(m,"text:style-name",a)}}function p(c,d){var b=c.ownerDocument,a=c.parentNode,f,h,e=new core.LoopWatchDog(1E4);h=[];"span"!==a.localName||a.namespaceURI!==m?(f=b.createElementNS(m,"text:span"),a.insertBefore(f,c),a=!1):(c.previousSibling&&
!l.rangeContainsNode(d,a.firstChild)?(f=a.cloneNode(!1),a.parentNode.insertBefore(f,a.nextSibling)):f=a,a=!0);h.push(c);for(b=c.nextSibling;b&&l.rangeContainsNode(d,b);)e.check(),h.push(b),b=b.nextSibling;h.forEach(function(a){a.parentNode!==f&&f.appendChild(a)});if(b&&a)for(h=f.cloneNode(!1),f.parentNode.insertBefore(h,f.nextSibling);b;)e.check(),a=b.nextSibling,h.appendChild(b),b=a;return f}var l=new core.DomUtils,m=odf.Namespaces.textns,r=odf.Namespaces.stylens;this.applyStyle=function(c,d,b){var a=
{},f,h,l,e;runtime.assert(b&&b.hasOwnProperty("style:text-properties"),"applyStyle without any text properties");a["style:text-properties"]=b["style:text-properties"];l=new q(a);e=new n(a);c.forEach(function(a){f=e.isStyleApplied(a);!1===f&&(h=p(a,d),l.applyStyleToContainer(h))})}};
// Input 45
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");
gui.StyleHelper=function(e){function k(d,l,e){var k=!0,c;for(c=0;c<d.length&&!(k=d[c]["style:text-properties"],k=!k||k[l]!==e);c+=1);return!k}function d(d,l,k){function r(){a=!0;(g=e.getDefaultStyleElement("paragraph"))||(g=null)}var c,g;d=n.getParagraphElements(d);for(var b={},a=!1;0<d.length;){(c=d[0].getAttributeNS(q,"style-name"))?b[c]||(g=e.getStyleElement(c,"paragraph"),b[c]=!0,g||a||r()):a?g=void 0:r();if(void 0!==g&&(c=null===g?e.getSystemDefaultStyleAttributes("paragraph"):e.getInheritedStyleAttributes(g,
!0),(c=c["style:paragraph-properties"])&&-1===k.indexOf(c[l])))return!1;d.pop()}return!0}var n=new odf.OdfUtils,q=odf.Namespaces.textns;this.getAppliedStyles=function(d){var l;d.collapsed?(l=d.startContainer,l.hasChildNodes()&&d.startOffset<l.childNodes.length&&(l=l.childNodes.item(d.startOffset)),d=[l]):d=n.getTextNodes(d,!0);return e.getAppliedStyles(d)};this.isBold=function(d){return k(d,"fo:font-weight","bold")};this.isItalic=function(d){return k(d,"fo:font-style","italic")};this.hasUnderline=
function(d){return k(d,"style:text-underline-style","solid")};this.hasStrikeThrough=function(d){return k(d,"style:text-line-through-style","solid")};this.isAlignedLeft=function(e){return d(e,"fo:text-align",["left","start"])};this.isAlignedCenter=function(e){return d(e,"fo:text-align",["center"])};this.isAlignedRight=function(e){return d(e,"fo:text-align",["right","end"])};this.isAlignedJustified=function(e){return d(e,"fo:text-align",["justify"])}};
// Input 46
core.RawDeflate=function(){function e(){this.dl=this.fc=0}function k(){this.extra_bits=this.static_tree=this.dyn_tree=null;this.max_code=this.max_length=this.elems=this.extra_base=0}function d(a,b,c,d){this.good_length=a;this.max_lazy=b;this.nice_length=c;this.max_chain=d}function n(){this.next=null;this.len=0;this.ptr=[];this.ptr.length=q;this.off=0}var q=8192,p,l,m,r,c=null,g,b,a,f,h,t,u,x,z,w,v,s,A,E,H,y,O,W,G,K,U,da,Z,F,M,R,L,I,J,V,aa,N,P,S,$,D,Y,Q,B,C,ca,ba,T,fa,ga,ha,la,X,ja,ka,ta,ua=[0,0,0,
0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ma=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],La=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ya=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],oa;oa=[new d(0,0,0,0),new d(4,4,8,4),new d(4,5,16,8),new d(4,6,32,32),new d(4,4,16,16),new d(8,16,32,32),new d(8,16,128,128),new d(8,32,128,256),new d(32,128,258,1024),new d(32,258,258,4096)];var pa=function(a){c[b+g++]=a;if(b+g===q){var d;if(0!==g){null!==p?(a=p,p=p.next):a=new n;
a.next=null;a.len=a.off=0;null===l?l=m=a:m=m.next=a;a.len=g-b;for(d=0;d<a.len;d++)a.ptr[d]=c[b+d];g=b=0}}},qa=function(a){a&=65535;b+g<q-2?(c[b+g++]=a&255,c[b+g++]=a>>>8):(pa(a&255),pa(a>>>8))},ra=function(){v=(v<<5^f[O+3-1]&255)&8191;s=u[32768+v];u[O&32767]=s;u[32768+v]=O},ea=function(a,b){z>16-b?(x|=a<<z,qa(x),x=a>>16-z,z+=b-16):(x|=a<<z,z+=b)},ia=function(a,b){ea(b[a].fc,b[a].dl)},za=function(a,b,c){return a[b].fc<a[c].fc||a[b].fc===a[c].fc&&Y[b]<=Y[c]},Aa=function(a,b,c){var d;for(d=0;d<c&&ta<
ka.length;d++)a[b+d]=ka.charCodeAt(ta++)&255;return d},va=function(){var a,b,c=65536-K-O;if(-1===c)c--;else if(65274<=O){for(a=0;32768>a;a++)f[a]=f[a+32768];W-=32768;O-=32768;w-=32768;for(a=0;8192>a;a++)b=u[32768+a],u[32768+a]=32768<=b?b-32768:0;for(a=0;32768>a;a++)b=u[a],u[a]=32768<=b?b-32768:0;c+=32768}G||(a=Aa(f,O+K,c),0>=a?G=!0:K+=a)},Ba=function(a){var b=U,c=O,d,h=y,g=32506<O?O-32506:0,l=O+258,e=f[c+h-1],k=f[c+h];y>=F&&(b>>=2);do if(d=a,f[d+h]===k&&f[d+h-1]===e&&f[d]===f[c]&&f[++d]===f[c+1]){c+=
2;d++;do++c;while(f[c]===f[++d]&&f[++c]===f[++d]&&f[++c]===f[++d]&&f[++c]===f[++d]&&f[++c]===f[++d]&&f[++c]===f[++d]&&f[++c]===f[++d]&&f[++c]===f[++d]&&c<l);d=258-(l-c);c=l-258;if(d>h){W=a;h=d;if(258<=d)break;e=f[c+h-1];k=f[c+h]}a=u[a&32767]}while(a>g&&0!==--b);return h},na=function(a,b){t[T++]=b;0===a?M[b].fc++:(a--,M[Q[b]+256+1].fc++,R[(256>a?B[a]:B[256+(a>>7)])&255].fc++,h[fa++]=a,ha|=la);la<<=1;0===(T&7)&&(ba[ga++]=ha,ha=0,la=1);if(2<Z&&0===(T&4095)){var c=8*T,d=O-w,f;for(f=0;30>f;f++)c+=R[f].fc*
(5+ma[f]);c>>=3;if(fa<parseInt(T/2,10)&&c<parseInt(d/2,10))return!0}return 8191===T||8192===fa},wa=function(a,b){for(var c=S[b],d=b<<1;d<=$;){d<$&&za(a,S[d+1],S[d])&&d++;if(za(a,c,S[d]))break;S[b]=S[d];b=d;d<<=1}S[b]=c},Ca=function(a,b){var c=0;do c|=a&1,a>>=1,c<<=1;while(0<--b);return c>>1},Da=function(a,b){var c=[];c.length=16;var d=0,f;for(f=1;15>=f;f++)d=d+P[f-1]<<1,c[f]=d;for(d=0;d<=b;d++)f=a[d].dl,0!==f&&(a[d].fc=Ca(c[f]++,f))},xa=function(a){var b=a.dyn_tree,c=a.static_tree,d=a.elems,f,h=-1,
g=d;$=0;D=573;for(f=0;f<d;f++)0!==b[f].fc?(S[++$]=h=f,Y[f]=0):b[f].dl=0;for(;2>$;)f=S[++$]=2>h?++h:0,b[f].fc=1,Y[f]=0,X--,null!==c&&(ja-=c[f].dl);a.max_code=h;for(f=$>>1;1<=f;f--)wa(b,f);do f=S[1],S[1]=S[$--],wa(b,1),c=S[1],S[--D]=f,S[--D]=c,b[g].fc=b[f].fc+b[c].fc,Y[g]=Y[f]>Y[c]+1?Y[f]:Y[c]+1,b[f].dl=b[c].dl=g,S[1]=g++,wa(b,1);while(2<=$);S[--D]=S[1];g=a.dyn_tree;f=a.extra_bits;var d=a.extra_base,c=a.max_code,l=a.max_length,e=a.static_tree,k,m,n,p,r=0;for(m=0;15>=m;m++)P[m]=0;g[S[D]].dl=0;for(a=
D+1;573>a;a++)k=S[a],m=g[g[k].dl].dl+1,m>l&&(m=l,r++),g[k].dl=m,k>c||(P[m]++,n=0,k>=d&&(n=f[k-d]),p=g[k].fc,X+=p*(m+n),null!==e&&(ja+=p*(e[k].dl+n)));if(0!==r){do{for(m=l-1;0===P[m];)m--;P[m]--;P[m+1]+=2;P[l]--;r-=2}while(0<r);for(m=l;0!==m;m--)for(k=P[m];0!==k;)f=S[--a],f>c||(g[f].dl!==m&&(X+=(m-g[f].dl)*g[f].fc,g[f].fc=m),k--)}Da(b,h)},Ea=function(a,b){var c,d=-1,f,h=a[0].dl,g=0,l=7,e=4;0===h&&(l=138,e=3);a[b+1].dl=65535;for(c=0;c<=b;c++)f=h,h=a[c+1].dl,++g<l&&f===h||(g<e?J[f].fc+=g:0!==f?(f!==
d&&J[f].fc++,J[16].fc++):10>=g?J[17].fc++:J[18].fc++,g=0,d=f,0===h?(l=138,e=3):f===h?(l=6,e=3):(l=7,e=4))},Fa=function(){8<z?qa(x):0<z&&pa(x);z=x=0},Ga=function(a,b){var c,d=0,f=0,g=0,l=0,e,k;if(0!==T){do 0===(d&7)&&(l=ba[g++]),c=t[d++]&255,0===(l&1)?ia(c,a):(e=Q[c],ia(e+256+1,a),k=ua[e],0!==k&&(c-=C[e],ea(c,k)),c=h[f++],e=(256>c?B[c]:B[256+(c>>7)])&255,ia(e,b),k=ma[e],0!==k&&(c-=ca[e],ea(c,k))),l>>=1;while(d<T)}ia(256,a)},Ha=function(a,b){var c,d=-1,f,h=a[0].dl,g=0,l=7,e=4;0===h&&(l=138,e=3);for(c=
0;c<=b;c++)if(f=h,h=a[c+1].dl,!(++g<l&&f===h)){if(g<e){do ia(f,J);while(0!==--g)}else 0!==f?(f!==d&&(ia(f,J),g--),ia(16,J),ea(g-3,2)):10>=g?(ia(17,J),ea(g-3,3)):(ia(18,J),ea(g-11,7));g=0;d=f;0===h?(l=138,e=3):f===h?(l=6,e=3):(l=7,e=4)}},Ia=function(){var a;for(a=0;286>a;a++)M[a].fc=0;for(a=0;30>a;a++)R[a].fc=0;for(a=0;19>a;a++)J[a].fc=0;M[256].fc=1;ha=T=fa=ga=X=ja=0;la=1},sa=function(a){var b,c,d,h;h=O-w;ba[ga]=ha;xa(V);xa(aa);Ea(M,V.max_code);Ea(R,aa.max_code);xa(N);for(d=18;3<=d&&0===J[ya[d]].dl;d--);
X+=3*(d+1)+14;b=X+3+7>>3;c=ja+3+7>>3;c<=b&&(b=c);if(h+4<=b&&0<=w)for(ea(0+a,3),Fa(),qa(h),qa(~h),d=0;d<h;d++)pa(f[w+d]);else if(c===b)ea(2+a,3),Ga(L,I);else{ea(4+a,3);h=V.max_code+1;b=aa.max_code+1;d+=1;ea(h-257,5);ea(b-1,5);ea(d-4,4);for(c=0;c<d;c++)ea(J[ya[c]].dl,3);Ha(M,h-1);Ha(R,b-1);Ga(M,R)}Ia();0!==a&&Fa()},Ja=function(a,d,f){var h,e,k;for(h=0;null!==l&&h<f;){e=f-h;e>l.len&&(e=l.len);for(k=0;k<e;k++)a[d+h+k]=l.ptr[l.off+k];l.off+=e;l.len-=e;h+=e;0===l.len&&(e=l,l=l.next,e.next=p,p=e)}if(h===
f)return h;if(b<g){e=f-h;e>g-b&&(e=g-b);for(k=0;k<e;k++)a[d+h+k]=c[b+k];b+=e;h+=e;g===b&&(g=b=0)}return h},Ka=function(c,d,h){var e;if(!r){if(!G){z=x=0;var k,m;if(0===I[0].dl){V.dyn_tree=M;V.static_tree=L;V.extra_bits=ua;V.extra_base=257;V.elems=286;V.max_length=15;V.max_code=0;aa.dyn_tree=R;aa.static_tree=I;aa.extra_bits=ma;aa.extra_base=0;aa.elems=30;aa.max_length=15;aa.max_code=0;N.dyn_tree=J;N.static_tree=null;N.extra_bits=La;N.extra_base=0;N.elems=19;N.max_length=7;for(m=k=N.max_code=0;28>m;m++)for(C[m]=
k,e=0;e<1<<ua[m];e++)Q[k++]=m;Q[k-1]=m;for(m=k=0;16>m;m++)for(ca[m]=k,e=0;e<1<<ma[m];e++)B[k++]=m;for(k>>=7;30>m;m++)for(ca[m]=k<<7,e=0;e<1<<ma[m]-7;e++)B[256+k++]=m;for(e=0;15>=e;e++)P[e]=0;for(e=0;143>=e;)L[e++].dl=8,P[8]++;for(;255>=e;)L[e++].dl=9,P[9]++;for(;279>=e;)L[e++].dl=7,P[7]++;for(;287>=e;)L[e++].dl=8,P[8]++;Da(L,287);for(e=0;30>e;e++)I[e].dl=5,I[e].fc=Ca(e,5);Ia()}for(e=0;8192>e;e++)u[32768+e]=0;da=oa[Z].max_lazy;F=oa[Z].good_length;U=oa[Z].max_chain;w=O=0;K=Aa(f,0,65536);if(0>=K)G=!0,
K=0;else{for(G=!1;262>K&&!G;)va();for(e=v=0;2>e;e++)v=(v<<5^f[e]&255)&8191}l=null;b=g=0;3>=Z?(y=2,H=0):(H=2,E=0);a=!1}r=!0;if(0===K)return a=!0,0}e=Ja(c,d,h);if(e===h)return h;if(a)return e;if(3>=Z)for(;0!==K&&null===l;){ra();0!==s&&32506>=O-s&&(H=Ba(s),H>K&&(H=K));if(3<=H)if(m=na(O-W,H-3),K-=H,H<=da){H--;do O++,ra();while(0!==--H);O++}else O+=H,H=0,v=f[O]&255,v=(v<<5^f[O+1]&255)&8191;else m=na(0,f[O]&255),K--,O++;m&&(sa(0),w=O);for(;262>K&&!G;)va()}else for(;0!==K&&null===l;){ra();y=H;A=W;H=2;0!==
s&&y<da&&32506>=O-s&&(H=Ba(s),H>K&&(H=K),3===H&&4096<O-W&&H--);if(3<=y&&H<=y){m=na(O-1-A,y-3);K-=y-1;y-=2;do O++,ra();while(0!==--y);E=0;H=2;O++;m&&(sa(0),w=O)}else 0!==E?na(0,f[O-1]&255)&&(sa(0),w=O):E=1,O++,K--;for(;262>K&&!G;)va()}0===K&&(0!==E&&na(0,f[O-1]&255),sa(1),a=!0);return e+Ja(c,e+d,h-e)};this.deflate=function(a,b){var d,g;ka=a;ta=0;"undefined"===String(typeof b)&&(b=6);(d=b)?1>d?d=1:9<d&&(d=9):d=6;Z=d;G=r=!1;if(null===c){p=l=m=null;c=[];c.length=q;f=[];f.length=65536;h=[];h.length=8192;
t=[];t.length=32832;u=[];u.length=65536;M=[];M.length=573;for(d=0;573>d;d++)M[d]=new e;R=[];R.length=61;for(d=0;61>d;d++)R[d]=new e;L=[];L.length=288;for(d=0;288>d;d++)L[d]=new e;I=[];I.length=30;for(d=0;30>d;d++)I[d]=new e;J=[];J.length=39;for(d=0;39>d;d++)J[d]=new e;V=new k;aa=new k;N=new k;P=[];P.length=16;S=[];S.length=573;Y=[];Y.length=573;Q=[];Q.length=256;B=[];B.length=512;C=[];C.length=29;ca=[];ca.length=30;ba=[];ba.length=1024}var n=Array(1024),A=[],H=[];for(d=Ka(n,0,n.length);0<d;){H.length=
d;for(g=0;g<d;g++)H[g]=String.fromCharCode(n[g]);A[A.length]=H.join("");d=Ka(n,0,n.length)}ka="";return A.join("")}};
// Input 47
runtime.loadClass("odf.Namespaces");
gui.ImageSelector=function(e){function k(){var d=e.getSizer(),k,p;k=q.createElement("div");k.id="imageSelector";k.style.borderWidth="1px";d.appendChild(k);n.forEach(function(c){p=q.createElement("div");p.className=c;k.appendChild(p)});return k}var d=odf.Namespaces.svgns,n="topLeft topRight bottomRight bottomLeft topMiddle rightMiddle bottomMiddle leftMiddle".split(" "),q=e.getElement().ownerDocument,p=!1;this.select=function(l){var m,n,c=q.getElementById("imageSelector");c||(c=k());p=!0;m=c.parentNode;
n=l.getBoundingClientRect();var g=m.getBoundingClientRect(),b=e.getZoomLevel();m=(n.left-g.left)/b-1;n=(n.top-g.top)/b-1;c.style.display="block";c.style.left=m+"px";c.style.top=n+"px";c.style.width=l.getAttributeNS(d,"width");c.style.height=l.getAttributeNS(d,"height")};this.clearSelection=function(){var d;p&&(d=q.getElementById("imageSelector"))&&(d.style.display="none");p=!1};this.isSelectorElement=function(d){var e=q.getElementById("imageSelector");return e?d===e||d.parentNode===e:!1}};
// Input 48
runtime.loadClass("odf.OdfCanvas");
odf.CommandLineTools=function(){this.roundTrip=function(e,k,d){return new odf.OdfContainer(e,function(n){if(n.state===odf.OdfContainer.INVALID)return d("Document "+e+" is invalid.");n.state===odf.OdfContainer.DONE?n.saveAs(k,function(e){d(e)}):d("Document was not completely loaded.")})};this.render=function(e,k,d){for(k=k.getElementsByTagName("body")[0];k.firstChild;)k.removeChild(k.firstChild);k=new odf.OdfCanvas(k);k.addListener("statereadychange",function(e){d(e)});k.load(e)}};
// Input 49
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Member=function(e,k){var d={};this.getMemberId=function(){return e};this.getProperties=function(){return d};this.setProperties=function(e){Object.keys(e).forEach(function(k){d[k]=e[k]})};this.removeProperties=function(e){delete e.fullName;delete e.color;delete e.imageUrl;Object.keys(e).forEach(function(e){d.hasOwnProperty(e)&&delete d[e]})};runtime.assert(Boolean(e),"No memberId was supplied!");k.fullName||(k.fullName=runtime.tr("Unknown Author"));k.color||(k.color="black");k.imageUrl||(k.imageUrl=
"avatar-joe.png");d=k};
// Input 50
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("core.PositionFilter");runtime.loadClass("odf.OdfUtils");
(function(){function e(d,e,q){function p(a,b){function c(a){for(var b=0;a&&a.previousSibling;)b+=1,a=a.previousSibling;return b}this.steps=a;this.node=b;this.setIteratorPosition=function(a){a.setUnfilteredPosition(b.parentNode,c(b));do if(e.acceptPosition(a)===t)break;while(a.nextPosition())}}function l(a){return a.nodeType===Node.ELEMENT_NODE&&a.getAttributeNS(c,"nodeId")}function m(a){var b=k;a.setAttributeNS(c,"nodeId",b.toString());k+=1;return b}function r(a,f){var h,g=null;for(a=a.childNodes[f]||
a;!g&&a&&a!==d;)(h=l(a))&&(g=b[h])&&g.node!==a&&(runtime.log("Cloned node detected. Creating new bookmark"),g=null,a.removeAttributeNS(c,"nodeId")),a=a.parentNode;return g}var c="urn:webodf:names:steps",g={},b={},a=new odf.OdfUtils,f=new core.DomUtils,h,t=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.updateCache=function(c,d,f,h){var e;0===f&&a.isParagraph(d)?(e=!0,h||(c+=1)):d.hasChildNodes()&&d.childNodes[f]&&(d=d.childNodes[f],(e=a.isParagraph(d))&&(c+=1));e&&(f=l(d)||m(d),(h=b[f])?h.node===
d?h.steps=c:(runtime.log("Cloned node detected. Creating new bookmark"),f=m(d),h=b[f]=new p(c,d)):h=b[f]=new p(c,d),f=h,c=Math.ceil(f.steps/q)*q,d=g[c],!d||f.steps>d.steps)&&(g[c]=f)};this.setToClosestStep=function(a,b){for(var c=Math.floor(a/q)*q,d;!d&&0!==c;)d=g[c],c-=q;d=d||h;d.setIteratorPosition(b);return d.steps};this.setToClosestDomPoint=function(a,b,c){var f;if(a===d&&0===b)f=h;else if(a===d&&b===d.childNodes.length)f=Object.keys(g).map(function(a){return g[a]}).reduce(function(a,b){return b.steps>
a.steps?b:a},h);else if(f=r(a,b),!f)for(c.setUnfilteredPosition(a,b);!f&&c.previousNode();)f=r(c.container(),c.unfilteredDomOffset());f=f||h;f.setIteratorPosition(c);return f.steps};this.updateCacheAtPoint=function(a,c){var h={};Object.keys(b).map(function(a){return b[a]}).filter(function(b){return b.steps>a}).forEach(function(a){var e=Math.ceil(a.steps/q)*q,k,m;if(f.containsNode(d,a.node)){if(c(a),k=Math.ceil(a.steps/q)*q,m=h[k],!m||a.steps>m.steps)h[k]=a}else delete b[l(a.node)];g[e]===a&&delete g[e]});
Object.keys(h).forEach(function(a){g[a]=h[a]})};h=new function(a,b){this.steps=a;this.node=b;this.setIteratorPosition=function(a){a.setUnfilteredPosition(b,0);do if(e.acceptPosition(a)===t)break;while(a.nextPosition())}}(0,d)}var k=0;ops.StepsTranslator=function(d,k,q,p){function l(){var a=d();a!==r&&(runtime.log("Undo detected. Resetting steps cache"),r=a,c=new e(r,q,p),b=k(r))}function m(b,c){if(!c||q.acceptPosition(b)===a)return!0;for(;b.previousPosition();)if(q.acceptPosition(b)===a){if(c(0,b.container(),
b.unfilteredDomOffset()))return!0;break}for(;b.nextPosition();)if(q.acceptPosition(b)===a){if(c(1,b.container(),b.unfilteredDomOffset()))return!0;break}return!1}var r=d(),c=new e(r,q,p),g=new core.DomUtils,b=k(d()),a=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.convertStepsToDomPoint=function(d){var h,g;0>d&&(runtime.log("warn","Requested steps were negative ("+d+")"),d=0);l();for(h=c.setToClosestStep(d,b);h<d&&b.nextPosition();)(g=q.acceptPosition(b)===a)&&(h+=1),c.updateCache(h,b.container(),
b.unfilteredDomOffset(),g);h!==d&&runtime.log("warn","Requested "+d+" steps but only "+h+" are available");return{node:b.container(),offset:b.unfilteredDomOffset()}};this.convertDomPointToSteps=function(d,h,e){var k;l();g.containsNode(r,d)||(h=0>g.comparePoints(r,0,d,h),d=r,h=h?0:r.childNodes.length);b.setUnfilteredPosition(d,h);m(b,e)||b.setUnfilteredPosition(d,h);e=b.container();h=b.unfilteredDomOffset();d=c.setToClosestDomPoint(e,h,b);if(0>g.comparePoints(b.container(),b.unfilteredDomOffset(),
e,h))return 0<d?d-1:d;for(;(b.container()!==e||b.unfilteredDomOffset()!==h)&&b.nextPosition();)(k=q.acceptPosition(b)===a)&&(d+=1),c.updateCache(d,b.container(),b.unfilteredDomOffset(),k);return d+0};this.prime=function(){var d,h;l();for(d=c.setToClosestStep(0,b);b.nextPosition();)(h=q.acceptPosition(b)===a)&&(d+=1),c.updateCache(d,b.container(),b.unfilteredDomOffset(),h)};this.handleStepsInserted=function(a){l();c.updateCacheAtPoint(a.position,function(b){b.steps+=a.length})};this.handleStepsRemoved=
function(a){l();c.updateCacheAtPoint(a.position,function(b){b.steps-=a.length;0>b.steps&&(b.steps=0)})}};ops.StepsTranslator.PREVIOUS_STEP=0;ops.StepsTranslator.NEXT_STEP=1;return ops.StepsTranslator})();
// Input 51
xmldom.RNG={};
xmldom.RelaxNGParser=function(){function e(c,d){this.message=function(){d&&(c+=1===d.nodeType?" Element ":" Node ",c+=d.nodeName,d.nodeValue&&(c+=" with value '"+d.nodeValue+"'"),c+=".");return c}}function k(c){if(2>=c.e.length)return c;var d={name:c.name,e:c.e.slice(0,2)};return k({name:c.name,e:[d].concat(c.e.slice(2))})}function d(c){c=c.split(":",2);var d="",b;1===c.length?c=["",c[0]]:d=c[0];for(b in m)m[b]===d&&(c[0]=b);return c}function n(c,g){for(var b=0,a,f,h=c.name;c.e&&b<c.e.length;)if(a=c.e[b],
"ref"===a.name){f=g[a.a.name];if(!f)throw a.a.name+" was not defined.";a=c.e.slice(b+1);c.e=c.e.slice(0,b);c.e=c.e.concat(f.e);c.e=c.e.concat(a)}else b+=1,n(a,g);a=c.e;"choice"!==h||a&&a[1]&&"empty"!==a[1].name||(a&&a[0]&&"empty"!==a[0].name?(a[1]=a[0],a[0]={name:"empty"}):(delete c.e,c.name="empty"));if("group"===h||"interleave"===h)"empty"===a[0].name?"empty"===a[1].name?(delete c.e,c.name="empty"):(h=c.name=a[1].name,c.names=a[1].names,a=c.e=a[1].e):"empty"===a[1].name&&(h=c.name=a[0].name,c.names=
a[0].names,a=c.e=a[0].e);"oneOrMore"===h&&"empty"===a[0].name&&(delete c.e,c.name="empty");if("attribute"===h){f=c.names?c.names.length:0;for(var e,l=[],k=[],b=0;b<f;b+=1)e=d(c.names[b]),k[b]=e[0],l[b]=e[1];c.localnames=l;c.namespaces=k}"interleave"===h&&("interleave"===a[0].name?c.e="interleave"===a[1].name?a[0].e.concat(a[1].e):[a[1]].concat(a[0].e):"interleave"===a[1].name&&(c.e=[a[0]].concat(a[1].e)))}function q(c,d){for(var b=0,a;c.e&&b<c.e.length;)a=c.e[b],"elementref"===a.name?(a.id=a.id||
0,c.e[b]=d[a.id]):"element"!==a.name&&q(a,d),b+=1}var p=this,l,m={"http://www.w3.org/XML/1998/namespace":"xml"},r;r=function(c,g,b){var a=[],f,h,e=c.localName,l=[];f=c.attributes;var n=e,p=l,q={},v,s;for(v=0;f&&v<f.length;v+=1)if(s=f.item(v),s.namespaceURI)"http://www.w3.org/2000/xmlns/"===s.namespaceURI&&(m[s.value]=s.localName);else{"name"!==s.localName||"element"!==n&&"attribute"!==n||p.push(s.value);if("name"===s.localName||"combine"===s.localName||"type"===s.localName){var A=s,E;E=s.value;E=
E.replace(/^\s\s*/,"");for(var H=/\s/,y=E.length-1;H.test(E.charAt(y));)y-=1;E=E.slice(0,y+1);A.value=E}q[s.localName]=s.value}f=q;f.combine=f.combine||void 0;c=c.firstChild;n=a;p=l;for(q="";c;){if(c.nodeType===Node.ELEMENT_NODE&&"http://relaxng.org/ns/structure/1.0"===c.namespaceURI){if(v=r(c,g,n))"name"===v.name?p.push(m[v.a.ns]+":"+v.text):"choice"===v.name&&v.names&&v.names.length&&(p=p.concat(v.names),delete v.names),n.push(v)}else c.nodeType===Node.TEXT_NODE&&(q+=c.nodeValue);c=c.nextSibling}c=
q;"value"!==e&&"param"!==e&&(c=/^\s*([\s\S]*\S)?\s*$/.exec(c)[1]);"value"===e&&void 0===f.type&&(f.type="token",f.datatypeLibrary="");"attribute"!==e&&"element"!==e||void 0===f.name||(h=d(f.name),a=[{name:"name",text:h[1],a:{ns:h[0]}}].concat(a),delete f.name);"name"===e||"nsName"===e||"value"===e?void 0===f.ns&&(f.ns=""):delete f.ns;"name"===e&&(h=d(c),f.ns=h[0],c=h[1]);1<a.length&&("define"===e||"oneOrMore"===e||"zeroOrMore"===e||"optional"===e||"list"===e||"mixed"===e)&&(a=[{name:"group",e:k({name:"group",
e:a}).e}]);2<a.length&&"element"===e&&(a=[a[0]].concat({name:"group",e:k({name:"group",e:a.slice(1)}).e}));1===a.length&&"attribute"===e&&a.push({name:"text",text:c});1!==a.length||"choice"!==e&&"group"!==e&&"interleave"!==e?2<a.length&&("choice"===e||"group"===e||"interleave"===e)&&(a=k({name:e,e:a}).e):(e=a[0].name,l=a[0].names,f=a[0].a,c=a[0].text,a=a[0].e);"mixed"===e&&(e="interleave",a=[a[0],{name:"text"}]);"optional"===e&&(e="choice",a=[a[0],{name:"empty"}]);"zeroOrMore"===e&&(e="choice",a=
[{name:"oneOrMore",e:[a[0]]},{name:"empty"}]);if("define"===e&&f.combine){a:{n=f.combine;p=f.name;q=a;for(v=0;b&&v<b.length;v+=1)if(s=b[v],"define"===s.name&&s.a&&s.a.name===p){s.e=[{name:n,e:s.e.concat(q)}];b=s;break a}b=null}if(b)return null}b={name:e};a&&0<a.length&&(b.e=a);for(h in f)if(f.hasOwnProperty(h)){b.a=f;break}void 0!==c&&(b.text=c);l&&0<l.length&&(b.names=l);"element"===e&&(b.id=g.length,g.push(b),b={name:"elementref",id:b.id});return b};this.parseRelaxNGDOM=function(c,d){var b=[],a=
r(c&&c.documentElement,b,void 0),f,h,k={};for(f=0;f<a.e.length;f+=1)h=a.e[f],"define"===h.name?k[h.a.name]=h:"start"===h.name&&(l=h);if(!l)return[new e("No Relax NG start element was found.")];n(l,k);for(f in k)k.hasOwnProperty(f)&&n(k[f],k);for(f=0;f<b.length;f+=1)n(b[f],k);d&&(p.rootPattern=d(l.e[0],b));q(l,b);for(f=0;f<b.length;f+=1)q(b[f],b);p.start=l;p.elements=b;p.nsmap=m;return null}};
// Input 52
runtime.loadClass("core.Cursor");runtime.loadClass("core.EventNotifier");runtime.loadClass("gui.SelectionMover");
ops.OdtCursor=function(e,k){var d=this,n={},q,p,l,m=new core.EventNotifier([ops.OdtCursor.signalCursorUpdated]);this.removeFromOdtDocument=function(){l.remove()};this.move=function(e,c){var g=0;0<e?g=p.movePointForward(e,c):0>=e&&(g=-p.movePointBackward(-e,c));m.emit(ops.OdtCursor.signalCursorUpdated,d);return g};this.subscribe=function(d,c){m.subscribe(d,c)};this.unsubscribe=function(d,c){m.unsubscribe(d,c)};this.getStepCounter=function(){return p.getStepCounter()};this.getMemberId=function(){return e};
this.getNode=function(){return l.getNode()};this.getAnchorNode=function(){return l.getAnchorNode()};this.getSelectedRange=function(){return l.getSelectedRange()};this.setSelectedRange=function(e,c){l.setSelectedRange(e,c);m.emit(ops.OdtCursor.signalCursorUpdated,d)};this.hasForwardSelection=function(){return l.hasForwardSelection()};this.getOdtDocument=function(){return k};this.getSelectionType=function(){return q};this.setSelectionType=function(d){n.hasOwnProperty(d)?q=d:runtime.log("Invalid selection type: "+
d)};this.resetSelectionType=function(){d.setSelectionType(ops.OdtCursor.RangeSelection)};l=new core.Cursor(k.getDOM(),e);p=new gui.SelectionMover(l,k.getRootNode());n[ops.OdtCursor.RangeSelection]=!0;n[ops.OdtCursor.RegionSelection]=!0;d.resetSelectionType()};ops.OdtCursor.RangeSelection="Range";ops.OdtCursor.RegionSelection="Region";ops.OdtCursor.signalCursorUpdated="cursorUpdated";(function(){return ops.OdtCursor})();
// Input 53
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.EventNotifier");runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("core.StepIterator");runtime.loadClass("odf.Namespaces");runtime.loadClass("gui.SelectionMover");runtime.loadClass("core.PositionFilterChain");runtime.loadClass("ops.StepsTranslator");runtime.loadClass("ops.TextPositionFilter");runtime.loadClass("ops.Member");
ops.OdtDocument=function(e){function k(){var a=e.odfContainer().getContentElement(),b=a&&a.localName;runtime.assert("text"===b,"Unsupported content element type '"+b+"' for OdtDocument");return a}function d(){return k().ownerDocument}function n(a){for(;a&&!(a.namespaceURI===odf.Namespaces.officens&&"text"===a.localName||a.namespaceURI===odf.Namespaces.officens&&"annotation"===a.localName);)a=a.parentNode;return a}function q(a){this.acceptPosition=function(b){b=b.container();var c;c="string"===typeof a?
h[a].getNode():a;return n(b)===n(c)?x:z}}function p(a,b,c,d){d=gui.SelectionMover.createPositionIterator(d);var f;1===c.length?f=c[0]:(f=new core.PositionFilterChain,c.forEach(f.addFilter));c=new core.StepIterator(f,d);c.setPosition(a,b);return c}function l(a){var b=gui.SelectionMover.createPositionIterator(k());a=v.convertStepsToDomPoint(a);b.setUnfilteredPosition(a.node,a.offset);return b}function m(b){return a.getParagraphElement(b)}function r(a,b){return e.getFormatting().getStyleElement(a,b)}
function c(a){return r(a,"paragraph")}function g(a,b,c){return(a=m(a.childNodes[b]||a))&&f.containsNode(c,a)?a:c}var b=this,a,f,h={},t={},u=new core.EventNotifier([ops.OdtDocument.signalMemberAdded,ops.OdtDocument.signalMemberUpdated,ops.OdtDocument.signalMemberRemoved,ops.OdtDocument.signalCursorAdded,ops.OdtDocument.signalCursorRemoved,ops.OdtDocument.signalCursorMoved,ops.OdtDocument.signalParagraphChanged,ops.OdtDocument.signalParagraphStyleModified,ops.OdtDocument.signalCommonStyleCreated,ops.OdtDocument.signalCommonStyleDeleted,
ops.OdtDocument.signalTableAdded,ops.OdtDocument.signalOperationStart,ops.OdtDocument.signalOperationEnd,ops.OdtDocument.signalUndoStackChanged,ops.OdtDocument.signalStepsInserted,ops.OdtDocument.signalStepsRemoved]),x=core.PositionFilter.FilterResult.FILTER_ACCEPT,z=core.PositionFilter.FilterResult.FILTER_REJECT,w,v,s;this.getDOM=d;this.getRootElement=n;this.createStepIterator=p;this.getIteratorAtPosition=l;this.convertDomPointToCursorStep=function(a,b,c){return v.convertDomPointToSteps(a,b,c)};
this.convertDomToCursorRange=function(a,b){var c,d;c=b&&b(a.anchorNode,a.anchorOffset);c=v.convertDomPointToSteps(a.anchorNode,a.anchorOffset,c);b||a.anchorNode!==a.focusNode||a.anchorOffset!==a.focusOffset?(d=b&&b(a.focusNode,a.focusOffset),d=v.convertDomPointToSteps(a.focusNode,a.focusOffset,d)):d=c;return{position:c,length:d-c}};this.convertCursorToDomRange=function(a,b){var c=d().createRange(),f,h;f=v.convertStepsToDomPoint(a);b?(h=v.convertStepsToDomPoint(a+b),0<b?(c.setStart(f.node,f.offset),
c.setEnd(h.node,h.offset)):(c.setStart(h.node,h.offset),c.setEnd(f.node,f.offset))):c.setStart(f.node,f.offset);return c};this.getStyleElement=r;this.upgradeWhitespacesAtPosition=function(b){b=l(b);var c,d,f;b.previousPosition();b.previousPosition();for(f=-1;1>=f;f+=1){c=b.container();d=b.unfilteredDomOffset();if(c.nodeType===Node.TEXT_NODE&&" "===c.data[d]&&a.isSignificantWhitespace(c,d)){runtime.assert(" "===c.data[d],"upgradeWhitespaceToElement: textNode.data[offset] should be a literal space");
var h=c.ownerDocument.createElementNS(odf.Namespaces.textns,"text:s");h.appendChild(c.ownerDocument.createTextNode(" "));c.deleteData(d,1);0<d&&(c=c.splitText(d));c.parentNode.insertBefore(h,c);c=h;b.moveToEndOfNode(c)}b.nextPosition()}};this.downgradeWhitespacesAtPosition=function(b){var c=l(b),d;b=c.container();for(c=c.unfilteredDomOffset();!a.isSpaceElement(b)&&b.childNodes[c];)b=b.childNodes[c],c=0;b.nodeType===Node.TEXT_NODE&&(b=b.parentNode);a.isDowngradableSpaceElement(b)&&(c=b.firstChild,
d=b.lastChild,f.mergeIntoParent(b),d!==c&&f.normalizeTextNodes(d),f.normalizeTextNodes(c))};this.getParagraphStyleElement=c;this.getParagraphElement=m;this.getParagraphStyleAttributes=function(a){return(a=c(a))?e.getFormatting().getInheritedStyleAttributes(a):null};this.getTextNodeAtStep=function(a,c){var f=l(a),g=f.container(),e,k=0,m=null;g.nodeType===Node.TEXT_NODE?(e=g,k=f.unfilteredDomOffset(),0<e.length&&(0<k&&(e=e.splitText(k)),e.parentNode.insertBefore(d().createTextNode(""),e),e=e.previousSibling,
k=0)):(e=d().createTextNode(""),k=0,g.insertBefore(e,f.rightNode()));if(c){if(h[c]&&b.getCursorPosition(c)===a){for(m=h[c].getNode();m.nextSibling&&"cursor"===m.nextSibling.localName;)m.parentNode.insertBefore(m.nextSibling,m);0<e.length&&e.nextSibling!==m&&(e=d().createTextNode(""),k=0);m.parentNode.insertBefore(e,m)}}else for(;e.nextSibling&&"cursor"===e.nextSibling.localName;)e.parentNode.insertBefore(e.nextSibling,e);for(;e.previousSibling&&e.previousSibling.nodeType===Node.TEXT_NODE;)e.previousSibling.appendData(e.data),
k=e.previousSibling.length,e=e.previousSibling,e.parentNode.removeChild(e.nextSibling);for(;e.nextSibling&&e.nextSibling.nodeType===Node.TEXT_NODE;)e.appendData(e.nextSibling.data),e.parentNode.removeChild(e.nextSibling);return{textNode:e,offset:k}};this.fixCursorPositions=function(){Object.keys(h).forEach(function(a){var c=h[a],d=n(c.getNode()),f=b.createRootFilter(d),e,l,k,m=!1;k=c.getSelectedRange();e=g(k.startContainer,k.startOffset,d);l=p(k.startContainer,k.startOffset,[w,f],e);k.collapsed?d=
l:(e=g(k.endContainer,k.endOffset,d),d=p(k.endContainer,k.endOffset,[w,f],e));l.isStep()&&d.isStep()?l.container()!==d.container()||l.offset()!==d.offset()||k.collapsed&&c.getAnchorNode()===c.getNode()||(m=!0,k.setStart(l.container(),l.offset()),k.collapse(!0)):(m=!0,runtime.assert(l.roundToClosestStep(),"No walkable step found for cursor owned by "+a),k.setStart(l.container(),l.offset()),runtime.assert(d.roundToClosestStep(),"No walkable step found for cursor owned by "+a),k.setEnd(d.container(),
d.offset()));m&&(c.setSelectedRange(k,c.hasForwardSelection()),b.emit(ops.OdtDocument.signalCursorMoved,c))})};this.getCursorPosition=function(a){return(a=h[a])?v.convertDomPointToSteps(a.getNode(),0):0};this.getCursorSelection=function(a){a=h[a];var b=0,c=0;a&&(b=v.convertDomPointToSteps(a.getNode(),0),c=v.convertDomPointToSteps(a.getAnchorNode(),0));return{position:c,length:b-c}};this.getPositionFilter=function(){return w};this.getOdfCanvas=function(){return e};this.getRootNode=k;this.addMember=
function(a){runtime.assert(void 0===t[a.getMemberId()],"This member already exists");t[a.getMemberId()]=a};this.getMember=function(a){return t.hasOwnProperty(a)?t[a]:null};this.removeMember=function(a){delete t[a]};this.getCursor=function(a){return h[a]};this.getCursors=function(){var a=[],b;for(b in h)h.hasOwnProperty(b)&&a.push(h[b]);return a};this.addCursor=function(a){runtime.assert(Boolean(a),"OdtDocument::addCursor without cursor");var b=a.getStepCounter().countSteps(1,w),c=a.getMemberId();
runtime.assert("string"===typeof c,"OdtDocument::addCursor has cursor without memberid");runtime.assert(!h[c],"OdtDocument::addCursor is adding a duplicate cursor with memberid "+c);a.move(b);h[c]=a};this.removeCursor=function(a){var c=h[a];return c?(c.removeFromOdtDocument(),delete h[a],b.emit(ops.OdtDocument.signalCursorRemoved,a),!0):!1};this.moveCursor=function(a,c,d,f){a=h[a];c=b.convertCursorToDomRange(c,d);a&&c&&(a.setSelectedRange(c,0<=d),a.setSelectionType(f||ops.OdtCursor.RangeSelection))};
this.getFormatting=function(){return e.getFormatting()};this.emit=function(a,b){u.emit(a,b)};this.subscribe=function(a,b){u.subscribe(a,b)};this.unsubscribe=function(a,b){u.unsubscribe(a,b)};this.createRootFilter=function(a){return new q(a)};this.close=function(a){a()};this.destroy=function(a){a()};w=new ops.TextPositionFilter(k);a=new odf.OdfUtils;f=new core.DomUtils;v=new ops.StepsTranslator(k,gui.SelectionMover.createPositionIterator,w,500);u.subscribe(ops.OdtDocument.signalStepsInserted,v.handleStepsInserted);
u.subscribe(ops.OdtDocument.signalStepsRemoved,v.handleStepsRemoved);u.subscribe(ops.OdtDocument.signalOperationEnd,function(a){var c=a.spec(),d=c.memberid,c=(new Date(c.timestamp)).toISOString(),f=e.odfContainer();a.isEdit&&(d=b.getMember(d).getProperties().fullName,f.setMetadata({"dc:creator":d,"dc:date":c},null),s||(f.incrementEditingCycles(),f.setMetadata(null,["meta:editing-duration","meta:document-statistic"])),s=a)})};ops.OdtDocument.signalMemberAdded="member/added";
ops.OdtDocument.signalMemberUpdated="member/updated";ops.OdtDocument.signalMemberRemoved="member/removed";ops.OdtDocument.signalCursorAdded="cursor/added";ops.OdtDocument.signalCursorRemoved="cursor/removed";ops.OdtDocument.signalCursorMoved="cursor/moved";ops.OdtDocument.signalParagraphChanged="paragraph/changed";ops.OdtDocument.signalTableAdded="table/added";ops.OdtDocument.signalCommonStyleCreated="style/created";ops.OdtDocument.signalCommonStyleDeleted="style/deleted";
ops.OdtDocument.signalParagraphStyleModified="paragraphstyle/modified";ops.OdtDocument.signalOperationStart="operation/start";ops.OdtDocument.signalOperationEnd="operation/end";ops.OdtDocument.signalUndoStackChanged="undo/changed";ops.OdtDocument.signalStepsInserted="steps/inserted";ops.OdtDocument.signalStepsRemoved="steps/removed";(function(){return ops.OdtDocument})();
// Input 54
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Operation=function(){};ops.Operation.prototype.init=function(e){};ops.Operation.prototype.execute=function(e){};ops.Operation.prototype.spec=function(){};
// Input 55
runtime.loadClass("xmldom.RelaxNGParser");
xmldom.RelaxNG=function(){function e(a){return function(){var b;return function(){void 0===b&&(b=a());return b}}()}function k(a,b){return function(){var c={},d=0;return function(f){var h=f.hash||f.toString();if(c.hasOwnProperty(h))return c[h];c[h]=f=b(f);f.hash=a+d.toString();d+=1;return f}}()}function d(a){return function(){var b={};return function(c){var d,f;if(b.hasOwnProperty(c.localName)){if(f=b[c.localName],d=f[c.namespaceURI],void 0!==d)return d}else b[c.localName]=f={};return f[c.namespaceURI]=
d=a(c)}}()}function n(a,b,c){return function(){var d={},f=0;return function(h,g){var e=b&&b(h,g),l;if(void 0!==e)return e;l=h.hash||h.toString();e=g.hash||g.toString();if(d.hasOwnProperty(l)){if(l=d[l],l.hasOwnProperty(e))return l[e]}else d[l]=l={};l[e]=e=c(h,g);e.hash=a+f.toString();f+=1;return e}}()}function q(a,b){"choice"===b.p1.type?q(a,b.p1):a[b.p1.hash]=b.p1;"choice"===b.p2.type?q(a,b.p2):a[b.p2.hash]=b.p2}function p(a,b){return{type:"element",nc:a,nullable:!1,textDeriv:function(){return E},
startTagOpenDeriv:function(c){return a.contains(c)?f(b,H):E},attDeriv:function(){return E},startTagCloseDeriv:function(){return this}}}function l(){return{type:"list",nullable:!1,hash:"list",textDeriv:function(){return H}}}function m(a,b,d,f){if(b===E)return E;if(f>=d.length)return b;0===f&&(f=0);for(var h=d.item(f);h.namespaceURI===c;){f+=1;if(f>=d.length)return b;h=d.item(f)}return h=m(a,b.attDeriv(a,d.item(f)),d,f+1)}function r(a,b,c){c.e[0].a?(a.push(c.e[0].text),b.push(c.e[0].a.ns)):r(a,b,c.e[0]);
c.e[1].a?(a.push(c.e[1].text),b.push(c.e[1].a.ns)):r(a,b,c.e[1])}var c="http://www.w3.org/2000/xmlns/",g,b,a,f,h,t,u,x,z,w,v,s,A,E={type:"notAllowed",nullable:!1,hash:"notAllowed",nc:void 0,p:void 0,p1:void 0,p2:void 0,textDeriv:function(){return E},startTagOpenDeriv:function(){return E},attDeriv:function(){return E},startTagCloseDeriv:function(){return E},endTagDeriv:function(){return E}},H={type:"empty",nullable:!0,hash:"empty",nc:void 0,p:void 0,p1:void 0,p2:void 0,textDeriv:function(){return E},
startTagOpenDeriv:function(){return E},attDeriv:function(){return E},startTagCloseDeriv:function(){return H},endTagDeriv:function(){return E}},y={type:"text",nullable:!0,hash:"text",nc:void 0,p:void 0,p1:void 0,p2:void 0,textDeriv:function(){return y},startTagOpenDeriv:function(){return E},attDeriv:function(){return E},startTagCloseDeriv:function(){return y},endTagDeriv:function(){return E}};g=n("choice",function(a,b){if(a===E)return b;if(b===E||a===b)return a},function(a,b){var c={},f;q(c,{p1:a,
p2:b});b=a=void 0;for(f in c)c.hasOwnProperty(f)&&(void 0===a?a=c[f]:b=void 0===b?c[f]:g(b,c[f]));return function(a,b){return{type:"choice",nullable:a.nullable||b.nullable,hash:void 0,nc:void 0,p:void 0,p1:a,p2:b,textDeriv:function(c,d){return g(a.textDeriv(c,d),b.textDeriv(c,d))},startTagOpenDeriv:d(function(c){return g(a.startTagOpenDeriv(c),b.startTagOpenDeriv(c))}),attDeriv:function(c,d){return g(a.attDeriv(c,d),b.attDeriv(c,d))},startTagCloseDeriv:e(function(){return g(a.startTagCloseDeriv(),
b.startTagCloseDeriv())}),endTagDeriv:e(function(){return g(a.endTagDeriv(),b.endTagDeriv())})}}(a,b)});b=function(a,b,c){return function(){var d={},f=0;return function(h,g){var e=b&&b(h,g),l,k;if(void 0!==e)return e;l=h.hash||h.toString();e=g.hash||g.toString();l<e&&(k=l,l=e,e=k,k=h,h=g,g=k);if(d.hasOwnProperty(l)){if(l=d[l],l.hasOwnProperty(e))return l[e]}else d[l]=l={};l[e]=e=c(h,g);e.hash=a+f.toString();f+=1;return e}}()}("interleave",function(a,b){if(a===E||b===E)return E;if(a===H)return b;if(b===
H)return a},function(a,c){return{type:"interleave",nullable:a.nullable&&c.nullable,hash:void 0,p1:a,p2:c,textDeriv:function(d,f){return g(b(a.textDeriv(d,f),c),b(a,c.textDeriv(d,f)))},startTagOpenDeriv:d(function(d){return g(v(function(a){return b(a,c)},a.startTagOpenDeriv(d)),v(function(c){return b(a,c)},c.startTagOpenDeriv(d)))}),attDeriv:function(d,f){return g(b(a.attDeriv(d,f),c),b(a,c.attDeriv(d,f)))},startTagCloseDeriv:e(function(){return b(a.startTagCloseDeriv(),c.startTagCloseDeriv())}),endTagDeriv:void 0}});
a=n("group",function(a,b){if(a===E||b===E)return E;if(a===H)return b;if(b===H)return a},function(b,c){return{type:"group",p1:b,p2:c,nullable:b.nullable&&c.nullable,textDeriv:function(d,f){var h=a(b.textDeriv(d,f),c);return b.nullable?g(h,c.textDeriv(d,f)):h},startTagOpenDeriv:function(d){var f=v(function(b){return a(b,c)},b.startTagOpenDeriv(d));return b.nullable?g(f,c.startTagOpenDeriv(d)):f},attDeriv:function(d,f){return g(a(b.attDeriv(d,f),c),a(b,c.attDeriv(d,f)))},startTagCloseDeriv:e(function(){return a(b.startTagCloseDeriv(),
c.startTagCloseDeriv())})}});f=n("after",function(a,b){if(a===E||b===E)return E},function(a,b){return{type:"after",p1:a,p2:b,nullable:!1,textDeriv:function(c,d){return f(a.textDeriv(c,d),b)},startTagOpenDeriv:d(function(c){return v(function(a){return f(a,b)},a.startTagOpenDeriv(c))}),attDeriv:function(c,d){return f(a.attDeriv(c,d),b)},startTagCloseDeriv:e(function(){return f(a.startTagCloseDeriv(),b)}),endTagDeriv:e(function(){return a.nullable?b:E})}});h=k("oneormore",function(b){return b===E?E:
{type:"oneOrMore",p:b,nullable:b.nullable,textDeriv:function(c,d){return a(b.textDeriv(c,d),g(this,H))},startTagOpenDeriv:function(c){var d=this;return v(function(b){return a(b,g(d,H))},b.startTagOpenDeriv(c))},attDeriv:function(c,d){return a(b.attDeriv(c,d),g(this,H))},startTagCloseDeriv:e(function(){return h(b.startTagCloseDeriv())})}});u=n("attribute",void 0,function(a,b){return{type:"attribute",nullable:!1,hash:void 0,nc:a,p:b,p1:void 0,p2:void 0,textDeriv:void 0,startTagOpenDeriv:void 0,attDeriv:function(c,
d){return a.contains(d)&&(b.nullable&&/^\s+$/.test(d.nodeValue)||b.textDeriv(c,d.nodeValue).nullable)?H:E},startTagCloseDeriv:function(){return E},endTagDeriv:void 0}});t=k("value",function(a){return{type:"value",nullable:!1,value:a,textDeriv:function(b,c){return c===a?H:E},attDeriv:function(){return E},startTagCloseDeriv:function(){return this}}});z=k("data",function(a){return{type:"data",nullable:!1,dataType:a,textDeriv:function(){return H},attDeriv:function(){return E},startTagCloseDeriv:function(){return this}}});
v=function W(a,b){return"after"===b.type?f(b.p1,a(b.p2)):"choice"===b.type?g(W(a,b.p1),W(a,b.p2)):b};s=function(a,b,c){var d=c.currentNode;b=b.startTagOpenDeriv(d);b=m(a,b,d.attributes,0);var f=b=b.startTagCloseDeriv(),d=c.currentNode;b=c.firstChild();for(var h=[],e;b;)b.nodeType===Node.ELEMENT_NODE?h.push(b):b.nodeType!==Node.TEXT_NODE||/^\s*$/.test(b.nodeValue)||h.push(b.nodeValue),b=c.nextSibling();0===h.length&&(h=[""]);e=f;for(f=0;e!==E&&f<h.length;f+=1)b=h[f],"string"===typeof b?e=/^\s*$/.test(b)?
g(e,e.textDeriv(a,b)):e.textDeriv(a,b):(c.currentNode=b,e=s(a,e,c));c.currentNode=d;return b=e.endTagDeriv()};x=function(a){var b,c,d;if("name"===a.name)b=a.text,c=a.a.ns,a={name:b,ns:c,hash:"{"+c+"}"+b,contains:function(a){return a.namespaceURI===c&&a.localName===b}};else if("choice"===a.name){b=[];c=[];r(b,c,a);a="";for(d=0;d<b.length;d+=1)a+="{"+c[d]+"}"+b[d]+",";a={hash:a,contains:function(a){var d;for(d=0;d<b.length;d+=1)if(b[d]===a.localName&&c[d]===a.namespaceURI)return!0;return!1}}}else a=
{hash:"anyName",contains:function(){return!0}};return a};w=function G(c,d){var f,e;if("elementref"===c.name){f=c.id||0;c=d[f];if(void 0!==c.name){var k=c;f=d[k.id]={hash:"element"+k.id.toString()};k=p(x(k.e[0]),w(k.e[1],d));for(e in k)k.hasOwnProperty(e)&&(f[e]=k[e]);return f}return c}switch(c.name){case "empty":return H;case "notAllowed":return E;case "text":return y;case "choice":return g(G(c.e[0],d),G(c.e[1],d));case "interleave":f=G(c.e[0],d);for(e=1;e<c.e.length;e+=1)f=b(f,G(c.e[e],d));return f;
case "group":return a(G(c.e[0],d),G(c.e[1],d));case "oneOrMore":return h(G(c.e[0],d));case "attribute":return u(x(c.e[0]),G(c.e[1],d));case "value":return t(c.text);case "data":return f=c.a&&c.a.type,void 0===f&&(f=""),z(f);case "list":return l()}throw"No support for "+c.name;};this.makePattern=function(a,b){var c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return d=w(a,c)};this.validate=function(a,b){var c;a.currentNode=a.root;c=s(null,A,a);c.nullable?b(null):(runtime.log("Error in Relax NG validation: "+
c),b(["Error in Relax NG validation: "+c]))};this.init=function(a){A=a}};
// Input 56
runtime.loadClass("xmldom.RelaxNGParser");
xmldom.RelaxNG2=function(){function e(d,e){this.message=function(){e&&(d+=e.nodeType===Node.ELEMENT_NODE?" Element ":" Node ",d+=e.nodeName,e.nodeValue&&(d+=" with value '"+e.nodeValue+"'"),d+=".");return d}}function k(d,e,k,c){return"empty"===d.name?null:q(d,e,k,c)}function d(d,m){if(2!==d.e.length)throw"Element with wrong # of elements: "+d.e.length;for(var n=m.currentNode,c=n?n.nodeType:0,g=null;c>Node.ELEMENT_NODE;){if(c!==Node.COMMENT_NODE&&(c!==Node.TEXT_NODE||!/^\s+$/.test(m.currentNode.nodeValue)))return[new e("Not allowed node of type "+
c+".")];c=(n=m.nextSibling())?n.nodeType:0}if(!n)return[new e("Missing element "+d.names)];if(d.names&&-1===d.names.indexOf(p[n.namespaceURI]+":"+n.localName))return[new e("Found "+n.nodeName+" instead of "+d.names+".",n)];if(m.firstChild()){for(g=k(d.e[1],m,n);m.nextSibling();)if(c=m.currentNode.nodeType,!(m.currentNode&&m.currentNode.nodeType===Node.TEXT_NODE&&/^\s+$/.test(m.currentNode.nodeValue)||c===Node.COMMENT_NODE))return[new e("Spurious content.",m.currentNode)];if(m.parentNode()!==n)return[new e("Implementation error.")]}else g=
k(d.e[1],m,n);m.nextSibling();return g}var n,q,p;q=function(l,m,n,c){var g=l.name,b=null;if("text"===g)a:{for(var a=(l=m.currentNode)?l.nodeType:0;l!==n&&3!==a;){if(1===a){b=[new e("Element not allowed here.",l)];break a}a=(l=m.nextSibling())?l.nodeType:0}m.nextSibling();b=null}else if("data"===g)b=null;else if("value"===g)c!==l.text&&(b=[new e("Wrong value, should be '"+l.text+"', not '"+c+"'",n)]);else if("list"===g)b=null;else if("attribute"===g)a:{if(2!==l.e.length)throw"Attribute with wrong # of elements: "+
l.e.length;g=l.localnames.length;for(b=0;b<g;b+=1){c=n.getAttributeNS(l.namespaces[b],l.localnames[b]);""!==c||n.hasAttributeNS(l.namespaces[b],l.localnames[b])||(c=void 0);if(void 0!==a&&void 0!==c){b=[new e("Attribute defined too often.",n)];break a}a=c}b=void 0===a?[new e("Attribute not found: "+l.names,n)]:k(l.e[1],m,n,a)}else if("element"===g)b=d(l,m);else if("oneOrMore"===g){c=0;do a=m.currentNode,g=q(l.e[0],m,n),c+=1;while(!g&&a!==m.currentNode);1<c?(m.currentNode=a,b=null):b=g}else if("choice"===
g){if(2!==l.e.length)throw"Choice with wrong # of options: "+l.e.length;a=m.currentNode;if("empty"===l.e[0].name){if(g=q(l.e[1],m,n,c))m.currentNode=a;b=null}else{if(g=k(l.e[0],m,n,c))m.currentNode=a,g=q(l.e[1],m,n,c);b=g}}else if("group"===g){if(2!==l.e.length)throw"Group with wrong # of members: "+l.e.length;b=q(l.e[0],m,n)||q(l.e[1],m,n)}else if("interleave"===g)a:{a=l.e.length;c=[a];for(var f=a,h,p,u,x;0<f;){h=0;p=m.currentNode;for(b=0;b<a;b+=1)u=m.currentNode,!0!==c[b]&&c[b]!==u&&(x=l.e[b],(g=
q(x,m,n))?(m.currentNode=u,void 0===c[b]&&(c[b]=!1)):u===m.currentNode||"oneOrMore"===x.name||"choice"===x.name&&("oneOrMore"===x.e[0].name||"oneOrMore"===x.e[1].name)?(h+=1,c[b]=u):(h+=1,c[b]=!0));if(p===m.currentNode&&h===f){b=null;break a}if(0===h){for(b=0;b<a;b+=1)if(!1===c[b]){b=[new e("Interleave does not match.",n)];break a}b=null;break a}for(b=f=0;b<a;b+=1)!0!==c[b]&&(f+=1)}b=null}else throw g+" not allowed in nonEmptyPattern.";return b};this.validate=function(d,e){d.currentNode=d.root;var p=
k(n.e[0],d,d.root);e(p)};this.init=function(d,e){n=d;p=e}};
// Input 57
runtime.loadClass("core.DomUtils");runtime.loadClass("gui.Avatar");runtime.loadClass("ops.OdtCursor");
gui.Caret=function(e,k,d){function n(d){b&&c.parentNode&&(!a||d)&&(d&&void 0!==f&&runtime.clearTimeout(f),a=!0,m.style.opacity=d||"0"===m.style.opacity?"1":"0",f=runtime.setTimeout(function(){a=!1;n(!1)},500))}function q(a,b){var c=a.getBoundingClientRect(),d=0,f=0;c&&b&&(d=Math.max(c.top,b.top),f=Math.min(c.bottom,b.bottom));return f-d}function p(){var a;a=e.getSelectedRange().cloneRange();var b=e.getNode(),c,d=null;b.previousSibling&&(c=b.previousSibling.nodeType===Node.TEXT_NODE?b.previousSibling.textContent.length:
b.previousSibling.childNodes.length,a.setStart(b.previousSibling,0<c?c-1:0),a.setEnd(b.previousSibling,c),(c=a.getBoundingClientRect())&&c.height&&(d=c));b.nextSibling&&(a.setStart(b.nextSibling,0),a.setEnd(b.nextSibling,0<(b.nextSibling.nodeType===Node.TEXT_NODE?b.nextSibling.textContent.length:b.nextSibling.childNodes.length)?1:0),(c=a.getBoundingClientRect())&&c.height&&(!d||q(b,c)>q(b,d))&&(d=c));a=d;b=e.getOdtDocument().getOdfCanvas().getZoomLevel();g&&e.getSelectionType()===ops.OdtCursor.RangeSelection?
m.style.visibility="visible":m.style.visibility="hidden";a?(m.style.top="0",d=h.getBoundingClientRect(m),8>a.height&&(a={top:a.top-(8-a.height)/2,height:8}),m.style.height=h.adaptRangeDifferenceToZoomLevel(a.height,b)+"px",m.style.top=h.adaptRangeDifferenceToZoomLevel(a.top-d.top,b)+"px"):(m.style.height="1em",m.style.top="5%")}function l(){d||e.getSelectedRange().collapsed?(b=!0,n(!0)):(b=!1,m.style.opacity="0")}var m,r,c,g=!0,b=!1,a=!1,f,h=new core.DomUtils;this.handleUpdate=p;this.refreshCursorBlinking=
l;this.setFocus=function(){r.markAsFocussed(!0);l()};this.removeFocus=function(){b=!1;r.markAsFocussed(!1);m.style.opacity="1"};this.show=function(){g=!0;p();r.markAsFocussed(!0)};this.hide=function(){g=!1;p();r.markAsFocussed(!1)};this.setAvatarImageUrl=function(a){r.setImageUrl(a)};this.setColor=function(a){m.style.borderColor=a;r.setColor(a)};this.getCursor=function(){return e};this.getFocusElement=function(){return m};this.toggleHandleVisibility=function(){r.isVisible()?r.hide():r.show()};this.showHandle=
function(){r.show()};this.hideHandle=function(){r.hide()};this.ensureVisible=function(){var a,b,c,d,f=e.getOdtDocument().getOdfCanvas().getElement().parentNode,h;c=f.offsetWidth-f.clientWidth+5;d=f.offsetHeight-f.clientHeight+5;h=m.getBoundingClientRect();a=h.left-c;b=h.top-d;c=h.right+c;d=h.bottom+d;h=f.getBoundingClientRect();b<h.top?f.scrollTop-=h.top-b:d>h.bottom&&(f.scrollTop+=d-h.bottom);a<h.left?f.scrollLeft-=h.left-a:c>h.right&&(f.scrollLeft+=c-h.right);p()};this.destroy=function(a){runtime.clearTimeout(f);
r.destroy(function(b){b?a(b):(c.removeChild(m),a())})};(function(){var a=e.getOdtDocument().getDOM();m=a.createElementNS(a.documentElement.namespaceURI,"span");m.className="caret";m.style.top="5%";c=e.getNode();c.appendChild(m);r=new gui.Avatar(c,k);p()})()};
// Input 58
gui.EventManager=function(e){function k(){var a=this,b=[];this.filters=[];this.handlers=[];this.handleEvent=function(c){-1===b.indexOf(c)&&(b.push(c),a.filters.every(function(a){return a(c)})&&a.handlers.forEach(function(a){a(c)}),runtime.setTimeout(function(){b.splice(b.indexOf(c),1)},0))}}function d(a){var b=a.scrollX,c=a.scrollY;this.restore=function(){a.scrollX===b&&a.scrollY===c||a.scrollTo(b,c)}}function n(a){var b=a.scrollTop,c=a.scrollLeft;this.restore=function(){if(a.scrollTop!==b||a.scrollLeft!==
c)a.scrollTop=b,a.scrollLeft=c}}function q(a,b,d){var e="on"+b,g=!1;a.attachEvent&&(g=a.attachEvent(e,d));!g&&a.addEventListener&&(a.addEventListener(b,d,!1),g=!0);g&&!c[b]||!a.hasOwnProperty(e)||(a[e]=d)}function p(c,d){var l=b[c]||null,m;!l&&d&&(m=e.getOdfCanvas().getElement(),l=b[c]=new k,g[c]&&(q(r,c,l.handleEvent),q(a,c,l.handleEvent)),q(m,c,l.handleEvent));return l}function l(){return e.getDOM().activeElement===a}function m(a){for(var b=[];a;)(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight)&&
b.push(new n(a)),a=a.parentNode;b.push(new d(r));return b}var r=runtime.getWindow(),c={beforecut:!0,beforepaste:!0},g={mousedown:!0,mouseup:!0,focus:!0},b={},a;this.addFilter=function(a,b){p(a,!0).filters.push(b)};this.removeFilter=function(a,b){var c=p(a,!0),d=c.filters.indexOf(b);-1!==d&&c.filters.splice(d,1)};this.subscribe=function(a,b){p(a,!0).handlers.push(b)};this.unsubscribe=function(a,b){var c=p(a,!1),d=c&&c.handlers.indexOf(b);c&&-1!==d&&c.handlers.splice(d,1)};this.hasFocus=l;this.focus=
function(){var b;l()||(b=m(a),a.focus(),b.forEach(function(a){a.restore()}))};this.getEventTrap=function(){return a};this.blur=function(){l()&&a.blur()};(function(){var b=e.getOdfCanvas().getElement(),c=b.ownerDocument;runtime.assert(Boolean(r),"EventManager requires a window object to operate correctly");a=c.createElement("div");a.id="eventTrap";b.appendChild(a)})()};
// Input 59
runtime.loadClass("core.Async");runtime.loadClass("core.DomUtils");runtime.loadClass("core.EventNotifier");runtime.loadClass("core.ScheduledTask");runtime.loadClass("ops.OdtDocument");runtime.loadClass("ops.OdtCursor");
(function(){function e(e){function d(d){l=d.which&&String.fromCharCode(d.which)===p;p=void 0;return!1===l}function n(){l=!1}function q(d){p=d.data;l=!1}var p,l=!1;this.destroy=function(l){e.unsubscribe("textInput",n);e.unsubscribe("compositionend",q);e.removeFilter("keypress",d);l()};e.subscribe("textInput",n);e.subscribe("compositionend",q);e.addFilter("keypress",d)}gui.InputMethodEditor=function(k,d,n){function q(a){h&&(a?h.getNode().setAttributeNS(f,"composing","true"):h.getNode().removeAttributeNS(f,
"composing"))}function p(){v&&(v=!1,q(!1),A.emit(gui.InputMethodEditor.signalCompositionEnd,{data:s}),s="")}function l(){var b=a.getSelection(),c,f=t.ownerDocument;p();for(x.containsNode(d.getOdfCanvas().getElement(),t)||d.getOdfCanvas().getElement().appendChild(t);1<t.childNodes.length;)t.removeChild(t.firstChild);c=t.firstChild;if(!c||c.nodeType!==Node.TEXT_NODE){for(;t.firstChild;)t.removeChild(t.firstChild);c=t.appendChild(f.createTextNode(""))}h&&h.getSelectedRange().collapsed?c.deleteData(0,
c.length):c.replaceData(0,c.length,z);b.collapse(t.firstChild,0);b.extend&&b.extend(t,t.childNodes.length)}function m(){E=void 0;w.cancel();q(!0);v||A.emit(gui.InputMethodEditor.signalCompositionStart,{data:""})}function r(a){a=E=a.data;v=!0;s+=a;w.trigger()}function c(a){a.data!==E&&(a=a.data,v=!0,s+=a,w.trigger());E=void 0}function g(){n.blur();t.setAttribute("contenteditable",!1)}function b(){t.setAttribute("contenteditable",O)}var a=runtime.getWindow(),f="urn:webodf:names:cursor",h=null,t=n.getEventTrap(),
u=new core.Async,x=new core.DomUtils,z="b",w,v=!1,s="",A=new core.EventNotifier([gui.InputMethodEditor.signalCompositionStart,gui.InputMethodEditor.signalCompositionEnd]),E,H=[],y,O=!1;this.subscribe=A.subscribe;this.unsubscribe=A.unsubscribe;this.registerCursor=function(a){var b;a.getMemberId()===k&&(b=n.hasFocus(),h=a,a=h.getNode(),a.insertBefore(t,a.firstChild),b&&n.focus())};this.removeCursor=function(a){h&&a===k&&(a=n.hasFocus(),h=null,d.getOdfCanvas().getElement().appendChild(t),a&&n.focus())};
this.destroy=function(a){n.unsubscribe("compositionstart",m);n.unsubscribe("compositionend",r);n.unsubscribe("textInput",c);n.unsubscribe("keypress",p);u.destroyAll(y,a)};this.setEditing=function(a){O=a;t.setAttribute("contenteditable",O)};(function(){n.subscribe("compositionstart",m);n.subscribe("compositionend",r);n.subscribe("textInput",c);n.subscribe("keypress",p);n.subscribe("mousedown",g);n.subscribe("mouseup",b);n.subscribe("focus",l);H.push(new e(n));y=H.map(function(a){return a.destroy});
t.setAttribute("tabindex",-1);w=new core.ScheduledTask(l,1);y.push(w.destroy)})()};gui.InputMethodEditor.signalCompositionStart="input/compositionstart";gui.InputMethodEditor.signalCompositionEnd="input/compositionend";return gui.InputMethodEditor})();
// Input 60
runtime.loadClass("gui.SelectionMover");gui.ShadowCursor=function(e){var k=e.getDOM().createRange(),d=!0;this.removeFromOdtDocument=function(){};this.getMemberId=function(){return gui.ShadowCursor.ShadowCursorMemberId};this.getSelectedRange=function(){return k};this.setSelectedRange=function(e,q){k=e;d=!1!==q};this.hasForwardSelection=function(){return d};this.getOdtDocument=function(){return e};this.getSelectionType=function(){return ops.OdtCursor.RangeSelection};k.setStart(e.getRootNode(),0)};
gui.ShadowCursor.ShadowCursorMemberId="";(function(){return gui.ShadowCursor})();
// Input 61
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.UndoManager=function(){};gui.UndoManager.prototype.subscribe=function(e,k){};gui.UndoManager.prototype.unsubscribe=function(e,k){};gui.UndoManager.prototype.setOdtDocument=function(e){};gui.UndoManager.prototype.setInitialState=function(){};gui.UndoManager.prototype.initialize=function(){};gui.UndoManager.prototype.purgeInitialState=function(){};gui.UndoManager.prototype.setPlaybackFunction=function(e){};gui.UndoManager.prototype.hasUndoStates=function(){};
gui.UndoManager.prototype.hasRedoStates=function(){};gui.UndoManager.prototype.moveForward=function(e){};gui.UndoManager.prototype.moveBackward=function(e){};gui.UndoManager.prototype.onOperationExecuted=function(e){};gui.UndoManager.signalUndoStackChanged="undoStackChanged";gui.UndoManager.signalUndoStateCreated="undoStateCreated";gui.UndoManager.signalUndoStateModified="undoStateModified";(function(){return gui.UndoManager})();
// Input 62
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.UndoStateRules=function(){function e(d){return d.isEdit}function k(d,e){var k=d.spec().optype,p=e[e.length-1],l;runtime.assert(Boolean(p),"No edit operations found in state");if(k===p.spec().optype){if(1===e.length)return k=d.spec().position-p.spec().position,0===k||1===Math.abs(k);l=e[e.length-2];k=d.spec().position;p=p.spec().position;l=l.spec().position;return k-p===p-l}return!1}this.isEditOperation=e;this.isPartOfOperationSet=function(d,n){var q=void 0!==d.group,p;if(!d.isEdit||0===n.length)return!0;
p=n[n.length-1];if(q&&d.group===p.group)return!0;a:switch(d.spec().optype){case "RemoveText":case "InsertText":p=!0;break a;default:p=!1}if(p&&(p=n.filter(e),0<p.length)){if(q){var q=d.spec().optype,l=p[p.length-1],m,r=!1;runtime.assert(Boolean(l),"No edit operations found in state");m=l.group;for(runtime.assert(void 0!==m,"Operation has no group");l&&l.group===m;){if(q===l.spec().optype){r=k(d,p);break}p.pop();l=p[p.length-1]}return r}return k(d,p)}return!1}};
// Input 63
/*

 Copyright (C) 2012 KO GmbH <aditya.bhatt@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.EditInfo=function(e,k){function d(){var d=[],e;for(e in q)q.hasOwnProperty(e)&&d.push({memberid:e,time:q[e].time});d.sort(function(d,e){return d.time-e.time});return d}var n,q={};this.getNode=function(){return n};this.getOdtDocument=function(){return k};this.getEdits=function(){return q};this.getSortedEdits=function(){return d()};this.addEdit=function(d,e){q[d]={time:e}};this.clearEdits=function(){q={}};this.destroy=function(d){e.parentNode&&e.removeChild(n);d()};n=k.getDOM().createElementNS("urn:webodf:names:editinfo",
"editinfo");e.insertBefore(n,e.firstChild)};
// Input 64
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");
ops.OpAddAnnotation=function(){function e(d,e,c){var g=d.getTextNodeAtStep(c,k);g&&(d=g.textNode,c=d.parentNode,g.offset!==d.length&&d.splitText(g.offset),c.insertBefore(e,d.nextSibling),0===d.length&&c.removeChild(d))}var k,d,n,q,p,l;this.init=function(e){k=e.memberid;d=parseInt(e.timestamp,10);n=parseInt(e.position,10);q=parseInt(e.length,10)||0;p=e.name};this.isEdit=!0;this.execute=function(m){var r={},c=m.getCursor(k),g,b;b=new core.DomUtils;l=m.getDOM();var a=new Date(d),f,h,t,u;g=l.createElementNS(odf.Namespaces.officens,
"office:annotation");g.setAttributeNS(odf.Namespaces.officens,"office:name",p);f=l.createElementNS(odf.Namespaces.dcns,"dc:creator");f.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k);f.textContent=m.getMember(k).getProperties().fullName;h=l.createElementNS(odf.Namespaces.dcns,"dc:date");h.appendChild(l.createTextNode(a.toISOString()));a=l.createElementNS(odf.Namespaces.textns,"text:list");t=l.createElementNS(odf.Namespaces.textns,"text:list-item");u=l.createElementNS(odf.Namespaces.textns,
"text:p");t.appendChild(u);a.appendChild(t);g.appendChild(f);g.appendChild(h);g.appendChild(a);r.node=g;if(!r.node)return!1;if(q){g=l.createElementNS(odf.Namespaces.officens,"office:annotation-end");g.setAttributeNS(odf.Namespaces.officens,"office:name",p);r.end=g;if(!r.end)return!1;e(m,r.end,n+q)}e(m,r.node,n);m.emit(ops.OdtDocument.signalStepsInserted,{position:n,length:q});c&&(g=l.createRange(),b=b.getElementsByTagNameNS(r.node,odf.Namespaces.textns,"p")[0],g.selectNodeContents(b),c.setSelectedRange(g),
m.emit(ops.OdtDocument.signalCursorMoved,c));m.getOdfCanvas().addAnnotation(r);m.fixCursorPositions();return!0};this.spec=function(){return{optype:"AddAnnotation",memberid:k,timestamp:d,position:n,length:q,name:p}}};
// Input 65
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpAddCursor=function(){var e,k;this.init=function(d){e=d.memberid;k=d.timestamp};this.isEdit=!1;this.execute=function(d){var k=d.getCursor(e);if(k)return!1;k=new ops.OdtCursor(e,d);d.addCursor(k);d.emit(ops.OdtDocument.signalCursorAdded,k);return!0};this.spec=function(){return{optype:"AddCursor",memberid:e,timestamp:k}}};
// Input 66
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.Member");ops.OpAddMember=function(){var e,k,d;this.init=function(n){e=n.memberid;k=parseInt(n.timestamp,10);d=n.setProperties};this.isEdit=!1;this.execute=function(k){if(k.getMember(e))return!1;var q=new ops.Member(e,d);k.addMember(q);k.emit(ops.OdtDocument.signalMemberAdded,q);return!0};this.spec=function(){return{optype:"AddMember",memberid:e,timestamp:k,setProperties:d}}};
// Input 67
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");
ops.OpAddStyle=function(){var e,k,d,n,q,p,l=odf.Namespaces.stylens;this.init=function(l){e=l.memberid;k=l.timestamp;d=l.styleName;n=l.styleFamily;q="true"===l.isAutomaticStyle||!0===l.isAutomaticStyle;p=l.setProperties};this.isEdit=!0;this.execute=function(e){var k=e.getOdfCanvas().odfContainer(),c=e.getFormatting(),g=e.getDOM().createElementNS(l,"style:style");if(!g)return!1;p&&c.updateStyle(g,p);g.setAttributeNS(l,"style:family",n);g.setAttributeNS(l,"style:name",d);q?k.rootElement.automaticStyles.appendChild(g):
k.rootElement.styles.appendChild(g);e.getOdfCanvas().refreshCSS();q||e.emit(ops.OdtDocument.signalCommonStyleCreated,{name:d,family:n});return!0};this.spec=function(){return{optype:"AddStyle",memberid:e,timestamp:k,styleName:d,styleFamily:n,isAutomaticStyle:q,setProperties:p}}};
// Input 68
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("odf.TextStyleApplicator");
ops.OpApplyDirectStyling=function(){function e(d,c,e){var b=d.getOdfCanvas().odfContainer(),a=m.splitBoundaries(c),f=l.getTextNodes(c,!1);c={startContainer:c.startContainer,startOffset:c.startOffset,endContainer:c.endContainer,endOffset:c.endOffset};(new odf.TextStyleApplicator(new odf.ObjectNameGenerator(b,k),d.getFormatting(),b.rootElement.automaticStyles)).applyStyle(f,c,e);a.forEach(m.normalizeTextNodes)}var k,d,n,q,p,l=new odf.OdfUtils,m=new core.DomUtils;this.init=function(e){k=e.memberid;d=
e.timestamp;n=parseInt(e.position,10);q=parseInt(e.length,10);p=e.setProperties};this.isEdit=!0;this.execute=function(m){var c=m.convertCursorToDomRange(n,q),g=l.getParagraphElements(c);e(m,c,p);c.detach();m.getOdfCanvas().refreshCSS();m.fixCursorPositions();g.forEach(function(b){m.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:b,memberId:k,timeStamp:d})});m.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"ApplyDirectStyling",memberid:k,timestamp:d,
position:n,length:q,setProperties:p}}};
// Input 69
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: http://gitorious.org/webodf/webodf/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");
ops.OpApplyHyperlink=function(){function e(d){for(;d;){if(m.isHyperlink(d))return!0;d=d.parentNode}return!1}var k,d,n,q,p,l=new core.DomUtils,m=new odf.OdfUtils;this.init=function(e){k=e.memberid;d=e.timestamp;n=e.position;q=e.length;p=e.hyperlink};this.isEdit=!0;this.execute=function(r){var c=r.getDOM(),g=r.convertCursorToDomRange(n,q),b=l.splitBoundaries(g),a=[],f=m.getTextNodes(g,!1);if(0===f.length)return!1;f.forEach(function(b){var d=m.getParagraphElement(b);runtime.assert(!1===e(b),"The given range should not contain any link.");
var f=p,g=c.createElementNS(odf.Namespaces.textns,"text:a");g.setAttributeNS(odf.Namespaces.xlinkns,"xlink:type","simple");g.setAttributeNS(odf.Namespaces.xlinkns,"xlink:href",f);b.parentNode.insertBefore(g,b);g.appendChild(b);-1===a.indexOf(d)&&a.push(d)});b.forEach(l.normalizeTextNodes);g.detach();r.getOdfCanvas().refreshSize();r.getOdfCanvas().rerenderAnnotations();a.forEach(function(a){r.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:a,memberId:k,timeStamp:d})});return!0};this.spec=
function(){return{optype:"ApplyHyperlink",memberid:k,timestamp:d,position:n,length:q,hyperlink:p}}};
// Input 70
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertImage=function(){var e,k,d,n,q,p,l,m,r=odf.Namespaces.drawns,c=odf.Namespaces.svgns,g=odf.Namespaces.textns,b=odf.Namespaces.xlinkns;this.init=function(a){e=a.memberid;k=a.timestamp;d=a.position;n=a.filename;q=a.frameWidth;p=a.frameHeight;l=a.frameStyleName;m=a.frameName};this.isEdit=!0;this.execute=function(a){var f=a.getOdfCanvas(),h=a.getTextNodeAtStep(d,e),t,u;if(!h)return!1;t=h.textNode;u=a.getParagraphElement(t);var h=h.offset!==t.length?t.splitText(h.offset):t.nextSibling,x=a.getDOM(),
z=x.createElementNS(r,"draw:image"),x=x.createElementNS(r,"draw:frame");z.setAttributeNS(b,"xlink:href",n);z.setAttributeNS(b,"xlink:type","simple");z.setAttributeNS(b,"xlink:show","embed");z.setAttributeNS(b,"xlink:actuate","onLoad");x.setAttributeNS(r,"draw:style-name",l);x.setAttributeNS(r,"draw:name",m);x.setAttributeNS(g,"text:anchor-type","as-char");x.setAttributeNS(c,"svg:width",q);x.setAttributeNS(c,"svg:height",p);x.appendChild(z);t.parentNode.insertBefore(x,h);a.emit(ops.OdtDocument.signalStepsInserted,
{position:d,length:1});0===t.length&&t.parentNode.removeChild(t);f.addCssForFrameWithImage(x);f.refreshCSS();a.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:u,memberId:e,timeStamp:k});f.rerenderAnnotations();return!0};this.spec=function(){return{optype:"InsertImage",memberid:e,timestamp:k,filename:n,position:d,frameWidth:q,frameHeight:p,frameStyleName:l,frameName:m}}};
// Input 71
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertTable=function(){function e(d,b){var a;if(1===c.length)a=c[0];else if(3===c.length)switch(d){case 0:a=c[0];break;case n-1:a=c[2];break;default:a=c[1]}else a=c[d];if(1===a.length)return a[0];if(3===a.length)switch(b){case 0:return a[0];case q-1:return a[2];default:return a[1]}return a[b]}var k,d,n,q,p,l,m,r,c;this.init=function(e){k=e.memberid;d=e.timestamp;p=e.position;n=e.initialRows;q=e.initialColumns;l=e.tableName;m=e.tableStyleName;r=e.tableColumnStyleName;c=e.tableCellStyleMatrix};
this.isEdit=!0;this.execute=function(c){var b=c.getTextNodeAtStep(p),a=c.getRootNode();if(b){var f=c.getDOM(),h=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table"),t=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-column"),u,x,z,w;m&&h.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",m);l&&h.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:name",l);t.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0",
"table:number-columns-repeated",q);r&&t.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",r);h.appendChild(t);for(z=0;z<n;z+=1){t=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-row");for(w=0;w<q;w+=1)u=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-cell"),(x=e(z,w))&&u.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",x),x=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",
"text:p"),u.appendChild(x),t.appendChild(u);h.appendChild(t)}b=c.getParagraphElement(b.textNode);a.insertBefore(h,b.nextSibling);c.emit(ops.OdtDocument.signalStepsInserted,{position:p,length:q*n+1});c.getOdfCanvas().refreshSize();c.emit(ops.OdtDocument.signalTableAdded,{tableElement:h,memberId:k,timeStamp:d});c.getOdfCanvas().rerenderAnnotations();return!0}return!1};this.spec=function(){return{optype:"InsertTable",memberid:k,timestamp:d,position:p,initialRows:n,initialColumns:q,tableName:l,tableStyleName:m,
tableColumnStyleName:r,tableCellStyleMatrix:c}}};
// Input 72
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertText=function(){var e,k,d,n,q;this.init=function(p){e=p.memberid;k=p.timestamp;d=p.position;n=p.text;q="true"===p.moveCursor||!0===p.moveCursor};this.isEdit=!0;this.execute=function(p){var l,m,r,c=null,g=p.getDOM(),b,a=0,f,h=p.getCursor(e),t;p.upgradeWhitespacesAtPosition(d);if(l=p.getTextNodeAtStep(d)){m=l.textNode;c=m.nextSibling;r=m.parentNode;b=p.getParagraphElement(m);for(t=0;t<n.length;t+=1)if(" "===n[t]&&(0===t||t===n.length-1||" "===n[t-1])||"\t"===n[t])0===a?(l.offset!==m.length&&
(c=m.splitText(l.offset)),0<t&&m.appendData(n.substring(0,t))):a<t&&(a=n.substring(a,t),r.insertBefore(g.createTextNode(a),c)),a=t+1,f=" "===n[t]?"text:s":"text:tab",f=g.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",f),f.appendChild(g.createTextNode(n[t])),r.insertBefore(f,c);0===a?m.insertData(l.offset,n):a<n.length&&(l=n.substring(a),r.insertBefore(g.createTextNode(l),c));r=m.parentNode;c=m.nextSibling;r.removeChild(m);r.insertBefore(m,c);0===m.length&&m.parentNode.removeChild(m);
p.emit(ops.OdtDocument.signalStepsInserted,{position:d,length:n.length});h&&q&&(p.moveCursor(e,d+n.length,0),p.emit(ops.OdtDocument.signalCursorMoved,h));0<d&&(1<d&&p.downgradeWhitespacesAtPosition(d-2),p.downgradeWhitespacesAtPosition(d-1));p.downgradeWhitespacesAtPosition(d);p.downgradeWhitespacesAtPosition(d+n.length-1);p.downgradeWhitespacesAtPosition(d+n.length);p.getOdfCanvas().refreshSize();p.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:b,memberId:e,timeStamp:k});p.getOdfCanvas().rerenderAnnotations();
return!0}return!1};this.spec=function(){return{optype:"InsertText",memberid:e,timestamp:k,position:d,text:n,moveCursor:q}}};
// Input 73
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpMoveCursor=function(){var e,k,d,n,q;this.init=function(p){e=p.memberid;k=p.timestamp;d=p.position;n=p.length||0;q=p.selectionType||ops.OdtCursor.RangeSelection};this.isEdit=!1;this.execute=function(k){var l=k.getCursor(e),m;if(!l)return!1;m=k.convertCursorToDomRange(d,n);l.setSelectedRange(m,0<=n);l.setSelectionType(q);k.emit(ops.OdtDocument.signalCursorMoved,l);return!0};this.spec=function(){return{optype:"MoveCursor",memberid:e,timestamp:k,position:d,length:n,selectionType:q}}};
// Input 74
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("core.DomUtils");
ops.OpRemoveAnnotation=function(){var e,k,d,n,q;this.init=function(p){e=p.memberid;k=p.timestamp;d=parseInt(p.position,10);n=parseInt(p.length,10);q=new core.DomUtils};this.isEdit=!0;this.execute=function(e){for(var l=e.getIteratorAtPosition(d).container(),k,r,c;l.namespaceURI!==odf.Namespaces.officens||"annotation"!==l.localName;)l=l.parentNode;if(null===l)return!1;r=l;(k=r.getAttributeNS(odf.Namespaces.officens,"name"))&&(c=q.getElementsByTagNameNS(e.getRootNode(),odf.Namespaces.officens,"annotation-end").filter(function(c){return k===
c.getAttributeNS(odf.Namespaces.officens,"name")})[0]||null);e.getOdfCanvas().forgetAnnotations();q.getElementsByTagNameNS(r,"urn:webodf:names:cursor","cursor").forEach(function(c){r.parentNode.insertBefore(c,r)});q.getElementsByTagNameNS(r,"urn:webodf:names:cursor","anchor").forEach(function(c){r.parentNode.insertBefore(c,r)});r.parentNode.removeChild(r);c&&c.parentNode.removeChild(c);e.emit(ops.OdtDocument.signalStepsRemoved,{position:0<d?d-1:d,length:n});e.fixCursorPositions();e.getOdfCanvas().refreshAnnotations();
return!0};this.spec=function(){return{optype:"RemoveAnnotation",memberid:e,timestamp:k,position:d,length:n}}};
// Input 75
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveBlob=function(){var e,k,d;this.init=function(n){e=n.memberid;k=n.timestamp;d=n.filename};this.isEdit=!0;this.execute=function(e){e.getOdfCanvas().odfContainer().removeBlob(d);return!0};this.spec=function(){return{optype:"RemoveBlob",memberid:e,timestamp:k,filename:d}}};
// Input 76
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveCursor=function(){var e,k;this.init=function(d){e=d.memberid;k=d.timestamp};this.isEdit=!1;this.execute=function(d){return d.removeCursor(e)?!0:!1};this.spec=function(){return{optype:"RemoveCursor",memberid:e,timestamp:k}}};
// Input 77
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: http://gitorious.org/webodf/webodf/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");
ops.OpRemoveHyperlink=function(){var e,k,d,n,q=new core.DomUtils,p=new odf.OdfUtils;this.init=function(l){e=l.memberid;k=l.timestamp;d=l.position;n=l.length};this.isEdit=!0;this.execute=function(l){var m=l.convertCursorToDomRange(d,n),r=p.getHyperlinkElements(m);runtime.assert(1===r.length,"The given range should only contain a single link.");r=q.mergeIntoParent(r[0]);m.detach();l.getOdfCanvas().refreshSize();l.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:p.getParagraphElement(r),
memberId:e,timeStamp:k});l.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"RemoveHyperlink",memberid:e,timestamp:k,position:d,length:n}}};
// Input 78
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.Member");ops.OpRemoveMember=function(){var e,k;this.init=function(d){e=d.memberid;k=parseInt(d.timestamp,10)};this.isEdit=!1;this.execute=function(d){if(!d.getMember(e))return!1;d.removeMember(e);d.emit(ops.OdtDocument.signalMemberRemoved,e);return!0};this.spec=function(){return{optype:"RemoveMember",memberid:e,timestamp:k}}};
// Input 79
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveStyle=function(){var e,k,d,n;this.init=function(q){e=q.memberid;k=q.timestamp;d=q.styleName;n=q.styleFamily};this.isEdit=!0;this.execute=function(e){var k=e.getStyleElement(d,n);if(!k)return!1;k.parentNode.removeChild(k);e.getOdfCanvas().refreshCSS();e.emit(ops.OdtDocument.signalCommonStyleDeleted,{name:d,family:n});return!0};this.spec=function(){return{optype:"RemoveStyle",memberid:e,timestamp:k,styleName:d,styleFamily:n}}};
// Input 80
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");runtime.loadClass("core.DomUtils");
ops.OpRemoveText=function(){function e(d){function c(a){return m.hasOwnProperty(a.namespaceURI)||"br"===a.localName&&p.isLineBreak(a.parentNode)||a.nodeType===Node.TEXT_NODE&&m.hasOwnProperty(a.parentNode.namespaceURI)}function e(a){if(p.isCharacterElement(a))return!1;if(a.nodeType===Node.TEXT_NODE)return 0===a.textContent.length;for(a=a.firstChild;a;){if(m.hasOwnProperty(a.namespaceURI)||!e(a))return!1;a=a.nextSibling}return!0}function b(a){var f;a.nodeType===Node.TEXT_NODE?(f=a.parentNode,f.removeChild(a)):
f=l.removeUnwantedNodes(a,c);return!p.isParagraph(f)&&f!==d&&e(f)?b(f):f}this.isEmpty=e;this.mergeChildrenIntoParent=b}var k,d,n,q,p,l,m={};this.init=function(e){runtime.assert(0<=e.length,"OpRemoveText only supports positive lengths");k=e.memberid;d=e.timestamp;n=parseInt(e.position,10);q=parseInt(e.length,10);p=new odf.OdfUtils;l=new core.DomUtils;m[odf.Namespaces.dbns]=!0;m[odf.Namespaces.dcns]=!0;m[odf.Namespaces.dr3dns]=!0;m[odf.Namespaces.drawns]=!0;m[odf.Namespaces.chartns]=!0;m[odf.Namespaces.formns]=
!0;m[odf.Namespaces.numberns]=!0;m[odf.Namespaces.officens]=!0;m[odf.Namespaces.presentationns]=!0;m[odf.Namespaces.stylens]=!0;m[odf.Namespaces.svgns]=!0;m[odf.Namespaces.tablens]=!0;m[odf.Namespaces.textns]=!0};this.isEdit=!0;this.execute=function(m){var c,g,b,a,f=m.getCursor(k),h=new e(m.getRootNode());m.upgradeWhitespacesAtPosition(n);m.upgradeWhitespacesAtPosition(n+q);g=m.convertCursorToDomRange(n,q);l.splitBoundaries(g);c=m.getParagraphElement(g.startContainer);b=p.getTextElements(g,!1,!0);
a=p.getParagraphElements(g);g.detach();b.forEach(function(a){h.mergeChildrenIntoParent(a)});g=a.reduce(function(a,b){var c,d=!1,f=a,e=b,g,l=null;h.isEmpty(a)&&(d=!0,b.parentNode!==a.parentNode&&(g=b.parentNode,a.parentNode.insertBefore(b,a.nextSibling)),e=a,f=b,l=f.getElementsByTagNameNS("urn:webodf:names:editinfo","editinfo")[0]||f.firstChild);for(;e.hasChildNodes();)c=d?e.lastChild:e.firstChild,e.removeChild(c),"editinfo"!==c.localName&&f.insertBefore(c,l);g&&h.isEmpty(g)&&h.mergeChildrenIntoParent(g);
h.mergeChildrenIntoParent(e);return f});m.emit(ops.OdtDocument.signalStepsRemoved,{position:n,length:q});m.downgradeWhitespacesAtPosition(n);m.fixCursorPositions();m.getOdfCanvas().refreshSize();m.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:g||c,memberId:k,timeStamp:d});f&&(f.resetSelectionType(),m.emit(ops.OdtDocument.signalCursorMoved,f));m.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"RemoveText",memberid:k,timestamp:d,position:n,length:q}}};
// Input 81
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSetBlob=function(){var e,k,d,n,q;this.init=function(p){e=p.memberid;k=p.timestamp;d=p.filename;n=p.mimetype;q=p.content};this.isEdit=!0;this.execute=function(e){e.getOdfCanvas().odfContainer().setBlob(d,n,q);return!0};this.spec=function(){return{optype:"SetBlob",memberid:e,timestamp:k,filename:d,mimetype:n,content:q}}};
// Input 82
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSetParagraphStyle=function(){var e,k,d,n;this.init=function(q){e=q.memberid;k=q.timestamp;d=q.position;n=q.styleName};this.isEdit=!0;this.execute=function(q){var p;p=q.getIteratorAtPosition(d);return(p=q.getParagraphElement(p.container()))?(""!==n?p.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0","text:style-name",n):p.removeAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0","style-name"),q.getOdfCanvas().refreshSize(),q.emit(ops.OdtDocument.signalParagraphChanged,
{paragraphElement:p,timeStamp:k,memberId:e}),q.getOdfCanvas().rerenderAnnotations(),!0):!1};this.spec=function(){return{optype:"SetParagraphStyle",memberid:e,timestamp:k,position:d,styleName:n}}};
// Input 83
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSplitParagraph=function(){var e,k,d,n,q;this.init=function(p){e=p.memberid;k=p.timestamp;d=p.position;n="true"===p.moveCursor||!0===p.moveCursor;q=new odf.OdfUtils};this.isEdit=!0;this.execute=function(p){var l,m,r,c,g,b,a,f=p.getCursor(e);p.upgradeWhitespacesAtPosition(d);l=p.getTextNodeAtStep(d);if(!l)return!1;m=p.getParagraphElement(l.textNode);if(!m)return!1;r=q.isListItem(m.parentNode)?m.parentNode:m;0===l.offset?(a=l.textNode.previousSibling,b=null):(a=l.textNode,b=l.offset>=l.textNode.length?
null:l.textNode.splitText(l.offset));for(c=l.textNode;c!==r;){c=c.parentNode;g=c.cloneNode(!1);b&&g.appendChild(b);if(a)for(;a&&a.nextSibling;)g.appendChild(a.nextSibling);else for(;c.firstChild;)g.appendChild(c.firstChild);c.parentNode.insertBefore(g,c.nextSibling);a=c;b=g}q.isListItem(b)&&(b=b.childNodes[0]);0===l.textNode.length&&l.textNode.parentNode.removeChild(l.textNode);p.emit(ops.OdtDocument.signalStepsInserted,{position:d,length:1});f&&n&&(p.moveCursor(e,d+1,0),p.emit(ops.OdtDocument.signalCursorMoved,
f));p.fixCursorPositions();p.getOdfCanvas().refreshSize();p.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:m,memberId:e,timeStamp:k});p.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:b,memberId:e,timeStamp:k});p.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"SplitParagraph",memberid:e,timestamp:k,position:d,moveCursor:n}}};
// Input 84
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.Member");runtime.loadClass("xmldom.XPath");
ops.OpUpdateMember=function(){function e(){var d="//dc:creator[@editinfo:memberid='"+k+"']",d=xmldom.XPath.getODFElementsWithXPath(p.getRootNode(),d,function(d){return"editinfo"===d?"urn:webodf:names:editinfo":odf.Namespaces.lookupNamespaceURI(d)}),e;for(e=0;e<d.length;e+=1)d[e].textContent=n.fullName}var k,d,n,q,p;this.init=function(e){k=e.memberid;d=parseInt(e.timestamp,10);n=e.setProperties;q=e.removedProperties};this.isEdit=!1;this.execute=function(d){p=d;var m=d.getMember(k);if(!m)return!1;q&&
m.removeProperties(q);n&&(m.setProperties(n),n.fullName&&e());d.emit(ops.OdtDocument.signalMemberUpdated,m);return!0};this.spec=function(){return{optype:"UpdateMember",memberid:k,timestamp:d,setProperties:n,removedProperties:q}}};
// Input 85
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpUpdateMetadata=function(){var e,k,d,n;this.init=function(q){e=q.memberid;k=parseInt(q.timestamp,10);d=q.setProperties;n=q.removedProperties};this.isEdit=!0;this.execute=function(e){e=e.getOdfCanvas().odfContainer();var k=[],l=["dc:date","dc:creator","meta:editing-cycles"];d&&l.forEach(function(e){if(d[e])return!1});n&&(l.forEach(function(d){if(-1!==k.indexOf(d))return!1}),k=n.attributes.split(","));e.setMetadata(d,k);return!0};this.spec=function(){return{optype:"UpdateMetadata",memberid:e,timestamp:k,
setProperties:d,removedProperties:n}}};
// Input 86
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");
ops.OpUpdateParagraphStyle=function(){function e(d,e){var c,g,b=e?e.split(","):[];for(c=0;c<b.length;c+=1)g=b[c].split(":"),d.removeAttributeNS(odf.Namespaces.lookupNamespaceURI(g[0]),g[1])}var k,d,n,q,p,l=odf.Namespaces.stylens;this.init=function(e){k=e.memberid;d=e.timestamp;n=e.styleName;q=e.setProperties;p=e.removedProperties};this.isEdit=!0;this.execute=function(d){var k=d.getFormatting(),c,g,b;return(c=""!==n?d.getParagraphStyleElement(n):k.getDefaultStyleElement("paragraph"))?(g=c.getElementsByTagNameNS(l,
"paragraph-properties")[0],b=c.getElementsByTagNameNS(l,"text-properties")[0],q&&k.updateStyle(c,q),p&&(p["style:paragraph-properties"]&&(e(g,p["style:paragraph-properties"].attributes),0===g.attributes.length&&c.removeChild(g)),p["style:text-properties"]&&(e(b,p["style:text-properties"].attributes),0===b.attributes.length&&c.removeChild(b)),e(c,p.attributes)),d.getOdfCanvas().refreshCSS(),d.emit(ops.OdtDocument.signalParagraphStyleModified,n),d.getOdfCanvas().rerenderAnnotations(),!0):!1};this.spec=
function(){return{optype:"UpdateParagraphStyle",memberid:k,timestamp:d,styleName:n,setProperties:q,removedProperties:p}}};
// Input 87
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.OpAddMember");runtime.loadClass("ops.OpUpdateMember");runtime.loadClass("ops.OpRemoveMember");runtime.loadClass("ops.OpAddCursor");runtime.loadClass("ops.OpApplyDirectStyling");runtime.loadClass("ops.OpRemoveCursor");runtime.loadClass("ops.OpMoveCursor");runtime.loadClass("ops.OpSetBlob");runtime.loadClass("ops.OpRemoveBlob");runtime.loadClass("ops.OpInsertImage");runtime.loadClass("ops.OpInsertTable");runtime.loadClass("ops.OpInsertText");runtime.loadClass("ops.OpRemoveText");
runtime.loadClass("ops.OpSplitParagraph");runtime.loadClass("ops.OpSetParagraphStyle");runtime.loadClass("ops.OpUpdateParagraphStyle");runtime.loadClass("ops.OpAddStyle");runtime.loadClass("ops.OpRemoveStyle");runtime.loadClass("ops.OpAddAnnotation");runtime.loadClass("ops.OpRemoveAnnotation");runtime.loadClass("ops.OpUpdateMetadata");runtime.loadClass("ops.OpApplyHyperlink");runtime.loadClass("ops.OpRemoveHyperlink");
ops.OperationFactory=function(){function e(d){return function(){return new d}}var k;this.register=function(d,e){k[d]=e};this.create=function(d){var e=null,q=k[d.optype];q&&(e=q(d),e.init(d));return e};k={AddMember:e(ops.OpAddMember),UpdateMember:e(ops.OpUpdateMember),RemoveMember:e(ops.OpRemoveMember),AddCursor:e(ops.OpAddCursor),ApplyDirectStyling:e(ops.OpApplyDirectStyling),SetBlob:e(ops.OpSetBlob),RemoveBlob:e(ops.OpRemoveBlob),InsertImage:e(ops.OpInsertImage),InsertTable:e(ops.OpInsertTable),
InsertText:e(ops.OpInsertText),RemoveText:e(ops.OpRemoveText),SplitParagraph:e(ops.OpSplitParagraph),SetParagraphStyle:e(ops.OpSetParagraphStyle),UpdateParagraphStyle:e(ops.OpUpdateParagraphStyle),AddStyle:e(ops.OpAddStyle),RemoveStyle:e(ops.OpRemoveStyle),MoveCursor:e(ops.OpMoveCursor),RemoveCursor:e(ops.OpRemoveCursor),AddAnnotation:e(ops.OpAddAnnotation),RemoveAnnotation:e(ops.OpRemoveAnnotation),UpdateMetadata:e(ops.OpUpdateMetadata),ApplyHyperlink:e(ops.OpApplyHyperlink),RemoveHyperlink:e(ops.OpRemoveHyperlink)}};
// Input 88
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationRouter=function(){};ops.OperationRouter.prototype.setOperationFactory=function(e){};ops.OperationRouter.prototype.setPlaybackFunction=function(e){};ops.OperationRouter.prototype.push=function(e){};ops.OperationRouter.prototype.close=function(e){};ops.OperationRouter.prototype.subscribe=function(e,k){};ops.OperationRouter.prototype.unsubscribe=function(e,k){};ops.OperationRouter.prototype.hasLocalUnsyncedOps=function(){};ops.OperationRouter.prototype.hasSessionHostConnection=function(){};
// Input 89
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationTransformMatrix=function(){function e(b){b.position+=b.length;b.length*=-1}function k(b){var a=0>b.length;a&&e(b);return a}function d(b,a){var c=[];b&&["style:parent-style-name","style:next-style-name"].forEach(function(d){b[d]===a&&c.push(d)});return c}function n(b,a){b&&["style:parent-style-name","style:next-style-name"].forEach(function(c){b[c]===a&&delete b[c]})}function q(b){var a={};Object.keys(b).forEach(function(c){a[c]="object"===typeof b[c]?q(b[c]):b[c]});return a}function p(b,
a,c,d){var e,g,k=!1,l=!1,m,n,p=d&&d.attributes?d.attributes.split(","):[];b&&(c||0<p.length)&&Object.keys(b).forEach(function(a){e=b[a];"object"!==typeof e&&(m=c&&c[a],void 0!==m?(delete b[a],l=!0,m===e&&(delete c[a],k=!0)):p&&-1!==p.indexOf(a)&&(delete b[a],l=!0))});if(a&&a.attributes&&(c||0<p.length)){n=a.attributes.split(",");for(d=0;d<n.length;d+=1)if(g=n[d],c&&void 0!==c[g]||p&&-1!==p.indexOf(g))n.splice(d,1),d-=1,l=!0;0<n.length?a.attributes=n.join(","):delete a.attributes}return{majorChanged:k,
minorChanged:l}}function l(b){for(var a in b)if(b.hasOwnProperty(a))return!0;return!1}function m(b){for(var a in b)if(b.hasOwnProperty(a)&&("attributes"!==a||0<b.attributes.length))return!0;return!1}function r(b,a,c){var d=b.setProperties?b.setProperties[c]:null,e=b.removedProperties?b.removedProperties[c]:null,g=a.setProperties?a.setProperties[c]:null,k=a.removedProperties?a.removedProperties[c]:null,n;n=p(d,e,g,k);d&&!l(d)&&delete b.setProperties[c];e&&!m(e)&&delete b.removedProperties[c];g&&!l(g)&&
delete a.setProperties[c];k&&!m(k)&&delete a.removedProperties[c];return n}function c(b,a){return{opSpecsA:[b],opSpecsB:[a]}}var g={AddCursor:{AddCursor:c,AddMember:c,AddStyle:c,ApplyDirectStyling:c,InsertText:c,MoveCursor:c,RemoveCursor:c,RemoveMember:c,RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},AddMember:{AddStyle:c,InsertText:c,MoveCursor:c,RemoveCursor:c,RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,
UpdateMetadata:c,UpdateParagraphStyle:c},AddStyle:{AddStyle:c,ApplyDirectStyling:c,InsertText:c,MoveCursor:c,RemoveCursor:c,RemoveMember:c,RemoveStyle:function(b,a){var c,e=[b],g=[a];b.styleFamily===a.styleFamily&&(c=d(b.setProperties,a.styleName),0<c.length&&(c={optype:"UpdateParagraphStyle",memberid:a.memberid,timestamp:a.timestamp,styleName:b.styleName,removedProperties:{attributes:c.join(",")}},g.unshift(c)),n(b.setProperties,a.styleName));return{opSpecsA:e,opSpecsB:g}},RemoveText:c,SetParagraphStyle:c,
SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},ApplyDirectStyling:{ApplyDirectStyling:function(b,a,c){var d,e,g,k,m,n,p,s;k=[b];g=[a];if(!(b.position+b.length<=a.position||b.position>=a.position+a.length)){d=c?b:a;e=c?a:b;if(b.position!==a.position||b.length!==a.length)n=q(d),p=q(e);a=r(e,d,"style:text-properties");if(a.majorChanged||a.minorChanged)g=[],b=[],k=d.position+d.length,m=e.position+e.length,e.position<d.position?a.minorChanged&&(s=q(p),s.length=d.position-e.position,
b.push(s),e.position=d.position,e.length=m-e.position):d.position<e.position&&a.majorChanged&&(s=q(n),s.length=e.position-d.position,g.push(s),d.position=e.position,d.length=k-d.position),m>k?a.minorChanged&&(n=p,n.position=k,n.length=m-k,b.push(n),e.length=k-e.position):k>m&&a.majorChanged&&(n.position=m,n.length=k-m,g.push(n),d.length=m-d.position),d.setProperties&&l(d.setProperties)&&g.push(d),e.setProperties&&l(e.setProperties)&&b.push(e),c?(k=g,g=b):k=b}return{opSpecsA:k,opSpecsB:g}},InsertText:function(b,
a){a.position<=b.position?b.position+=a.text.length:a.position<=b.position+b.length&&(b.length+=a.text.length);return{opSpecsA:[b],opSpecsB:[a]}},MoveCursor:c,RemoveCursor:c,RemoveStyle:c,RemoveText:function(b,a){var c=b.position+b.length,d=a.position+a.length,e=[b],g=[a];d<=b.position?b.position-=a.length:a.position<c&&(b.position<a.position?b.length=d<c?b.length-a.length:a.position-b.position:(b.position=a.position,d<c?b.length=c-d:e=[]));return{opSpecsA:e,opSpecsB:g}},SetParagraphStyle:c,SplitParagraph:function(b,
a){a.position<b.position?b.position+=1:a.position<b.position+b.length&&(b.length+=1);return{opSpecsA:[b],opSpecsB:[a]}},UpdateMetadata:c,UpdateParagraphStyle:c},InsertText:{InsertText:function(b,a,c){b.position<a.position?a.position+=b.text.length:b.position>a.position?b.position+=a.text.length:c?a.position+=b.text.length:b.position+=a.text.length;return{opSpecsA:[b],opSpecsB:[a]}},MoveCursor:function(b,a){var c=k(a);b.position<a.position?a.position+=b.text.length:b.position<a.position+a.length&&
(a.length+=b.text.length);c&&e(a);return{opSpecsA:[b],opSpecsB:[a]}},RemoveCursor:c,RemoveMember:c,RemoveStyle:c,RemoveText:function(b,a){var c;c=a.position+a.length;var d=[b],e=[a];c<=b.position?b.position-=a.length:b.position<=a.position?a.position+=b.text.length:(a.length=b.position-a.position,c={optype:"RemoveText",memberid:a.memberid,timestamp:a.timestamp,position:b.position+b.text.length,length:c-b.position},e.unshift(c),b.position=a.position);return{opSpecsA:d,opSpecsB:e}},SplitParagraph:function(b,
a,c){if(b.position<a.position)a.position+=b.text.length;else if(b.position>a.position)b.position+=1;else return c?a.position+=b.text.length:b.position+=1,null;return{opSpecsA:[b],opSpecsB:[a]}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},MoveCursor:{MoveCursor:c,RemoveCursor:function(b,a){return{opSpecsA:b.memberid===a.memberid?[]:[b],opSpecsB:[a]}},RemoveMember:c,RemoveStyle:c,RemoveText:function(b,a){var c=k(b),d=b.position+b.length,g=a.position+a.length;g<=b.position?b.position-=a.length:
a.position<d&&(b.position<a.position?b.length=g<d?b.length-a.length:a.position-b.position:(b.position=a.position,b.length=g<d?d-g:0));c&&e(b);return{opSpecsA:[b],opSpecsB:[a]}},SetParagraphStyle:c,SplitParagraph:function(b,a){var c=k(b);a.position<b.position?b.position+=1:a.position<b.position+b.length&&(b.length+=1);c&&e(b);return{opSpecsA:[b],opSpecsB:[a]}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},RemoveCursor:{RemoveCursor:function(b,a){var c=b.memberid===a.memberid;return{opSpecsA:c?
[]:[b],opSpecsB:c?[]:[a]}},RemoveMember:c,RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},RemoveMember:{RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,UpdateMetadata:c,UpdateParagraphStyle:c},RemoveStyle:{RemoveStyle:function(b,a){var c=b.styleName===a.styleName&&b.styleFamily===a.styleFamily;return{opSpecsA:c?[]:[b],opSpecsB:c?[]:[a]}},RemoveText:c,SetParagraphStyle:function(b,a){var c,d=[b],e=[a];"paragraph"===
b.styleFamily&&b.styleName===a.styleName&&(c={optype:"SetParagraphStyle",memberid:b.memberid,timestamp:b.timestamp,position:a.position,styleName:""},d.unshift(c),a.styleName="");return{opSpecsA:d,opSpecsB:e}},SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:function(b,a){var c,e=[b],g=[a];"paragraph"===b.styleFamily&&(c=d(a.setProperties,b.styleName),0<c.length&&(c={optype:"UpdateParagraphStyle",memberid:b.memberid,timestamp:b.timestamp,styleName:a.styleName,removedProperties:{attributes:c.join(",")}},
e.unshift(c)),b.styleName===a.styleName?g=[]:n(a.setProperties,b.styleName));return{opSpecsA:e,opSpecsB:g}}},RemoveText:{RemoveText:function(b,a){var c=b.position+b.length,d=a.position+a.length,e=[b],g=[a];d<=b.position?b.position-=a.length:c<=a.position?a.position-=b.length:a.position<c&&(b.position<a.position?(b.length=d<c?b.length-a.length:a.position-b.position,c<d?(a.position=b.position,a.length=d-c):g=[]):(c<d?a.length-=b.length:a.position<b.position?a.length=b.position-a.position:g=[],d<c?(b.position=
a.position,b.length=c-d):e=[]));return{opSpecsA:e,opSpecsB:g}},SplitParagraph:function(b,a){var c=b.position+b.length,d=[b],e=[a];a.position<=b.position?b.position+=1:a.position<c&&(b.length=a.position-b.position,c={optype:"RemoveText",memberid:b.memberid,timestamp:b.timestamp,position:a.position+1,length:c-a.position},d.unshift(c));b.position+b.length<=a.position?a.position-=b.length:b.position<a.position&&(a.position=b.position);return{opSpecsA:d,opSpecsB:e}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},
SetParagraphStyle:{UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},SplitParagraph:{SplitParagraph:function(b,a,c){b.position<a.position?a.position+=1:b.position>a.position?b.position+=1:b.position===a.position&&(c?a.position+=1:b.position+=1);return{opSpecsA:[b],opSpecsB:[a]}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},UpdateMember:{UpdateMetadata:c,UpdateParagraphStyle:c},UpdateMetadata:{UpdateMetadata:function(b,a,c){var d,e=[b],g=[a];d=c?b:a;b=c?a:b;p(b.setProperties||null,
b.removedProperties||null,d.setProperties||null,d.removedProperties||null);d.setProperties&&l(d.setProperties)||d.removedProperties&&m(d.removedProperties)||(c?e=[]:g=[]);b.setProperties&&l(b.setProperties)||b.removedProperties&&m(b.removedProperties)||(c?g=[]:e=[]);return{opSpecsA:e,opSpecsB:g}},UpdateParagraphStyle:c},UpdateParagraphStyle:{UpdateParagraphStyle:function(b,a,c){var d,e=[b],g=[a];b.styleName===a.styleName&&(d=c?b:a,b=c?a:b,r(b,d,"style:paragraph-properties"),r(b,d,"style:text-properties"),
p(b.setProperties||null,b.removedProperties||null,d.setProperties||null,d.removedProperties||null),d.setProperties&&l(d.setProperties)||d.removedProperties&&m(d.removedProperties)||(c?e=[]:g=[]),b.setProperties&&l(b.setProperties)||b.removedProperties&&m(b.removedProperties)||(c?g=[]:e=[]));return{opSpecsA:e,opSpecsB:g}}}};this.passUnchanged=c;this.extendTransformations=function(b){Object.keys(b).forEach(function(a){var c=b[a],d,e=g.hasOwnProperty(a);runtime.log((e?"Extending":"Adding")+" map for optypeA: "+
a);e||(g[a]={});d=g[a];Object.keys(c).forEach(function(b){var e=d.hasOwnProperty(b);runtime.assert(a<=b,"Wrong order:"+a+", "+b);runtime.log("  "+(e?"Overwriting":"Adding")+" entry for optypeB: "+b);d[b]=c[b]})})};this.transformOpspecVsOpspec=function(b,a){var c=b.optype<=a.optype,d;runtime.log("Crosstransforming:");runtime.log(runtime.toJson(b));runtime.log(runtime.toJson(a));c||(d=b,b=a,a=d);(d=(d=g[b.optype])&&d[a.optype])?(d=d(b,a,!c),c||null===d||(d={opSpecsA:d.opSpecsB,opSpecsB:d.opSpecsA})):
d=null;runtime.log("result:");d?(runtime.log(runtime.toJson(d.opSpecsA)),runtime.log(runtime.toJson(d.opSpecsB))):runtime.log("null");return d}};
// Input 90
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.OperationFactory");runtime.loadClass("ops.OperationTransformMatrix");
ops.OperationTransformer=function(){function e(e){var k=[];e.forEach(function(e){k.push(d.create(e))});return k}function k(d,e){for(var l,m,r=[],c=[];0<d.length&&e;){l=d.shift();l=n.transformOpspecVsOpspec(l,e);if(!l)return null;r=r.concat(l.opSpecsA);if(0===l.opSpecsB.length){r=r.concat(d);e=null;break}for(;1<l.opSpecsB.length;){m=k(d,l.opSpecsB.shift());if(!m)return null;c=c.concat(m.opSpecsB);d=m.opSpecsA}e=l.opSpecsB.pop()}e&&c.push(e);return{opSpecsA:r,opSpecsB:c}}var d,n=new ops.OperationTransformMatrix;
this.setOperationFactory=function(e){d=e};this.getOperationTransformMatrix=function(){return n};this.transform=function(d,n){for(var l,m=[];0<n.length;){l=k(d,n.shift());if(!l)return null;d=l.opSpecsA;m=m.concat(l.opSpecsB)}return{opsA:e(d),opsB:e(m)}}};
// Input 91
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.TrivialOperationRouter=function(){var e,k,d=0;this.setOperationFactory=function(d){e=d};this.setPlaybackFunction=function(d){k=d};this.push=function(n){d+=1;n.forEach(function(n){n=n.spec();n.timestamp=(new Date).getTime();n=e.create(n);n.group="g"+d;k(n)})};this.close=function(d){d()};this.subscribe=function(d,e){};this.unsubscribe=function(d,e){};this.hasLocalUnsyncedOps=function(){return!1};this.hasSessionHostConnection=function(){return!0}};
// Input 92
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.EditInfo");runtime.loadClass("gui.EditInfoHandle");
gui.EditInfoMarker=function(e,k){function d(c,b){return runtime.setTimeout(function(){l.style.opacity=c},b)}var n=this,q,p,l,m,r,c;this.addEdit=function(g,b){var a=Date.now()-b;e.addEdit(g,b);p.setEdits(e.getSortedEdits());l.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",g);runtime.clearTimeout(r);runtime.clearTimeout(c);1E4>a?(m=d(1,0),r=d(0.5,1E4-a),c=d(0.2,2E4-a)):1E4<=a&&2E4>a?(m=d(0.5,0),c=d(0.2,2E4-a)):m=d(0.2,0)};this.getEdits=function(){return e.getEdits()};this.clearEdits=
function(){e.clearEdits();p.setEdits([]);l.hasAttributeNS("urn:webodf:names:editinfo","editinfo:memberid")&&l.removeAttributeNS("urn:webodf:names:editinfo","editinfo:memberid")};this.getEditInfo=function(){return e};this.show=function(){l.style.display="block"};this.hide=function(){n.hideHandle();l.style.display="none"};this.showHandle=function(){p.show()};this.hideHandle=function(){p.hide()};this.destroy=function(d){runtime.clearTimeout(m);runtime.clearTimeout(r);runtime.clearTimeout(c);q.removeChild(l);
p.destroy(function(b){b?d(b):e.destroy(d)})};(function(){var c=e.getOdtDocument().getDOM();l=c.createElementNS(c.documentElement.namespaceURI,"div");l.setAttribute("class","editInfoMarker");l.onmouseover=function(){n.showHandle()};l.onmouseout=function(){n.hideHandle()};q=e.getNode();q.appendChild(l);p=new gui.EditInfoHandle(q);k||n.hide()})()};
// Input 93
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.PlainTextPasteboard=function(e,k){function d(d,e){d.init(e);return d}this.createPasteOps=function(n){var q=e.getCursorPosition(k),p=q,l=[];n.replace(/\r/g,"").split("\n").forEach(function(e){l.push(d(new ops.OpSplitParagraph,{memberid:k,position:p,moveCursor:!0}));p+=1;l.push(d(new ops.OpInsertText,{memberid:k,position:p,text:e,moveCursor:!0}));p+=e.length});l.push(d(new ops.OpRemoveText,{memberid:k,position:q,length:1}));return l}};
// Input 94
gui.SelectionView=function(e){};gui.SelectionView.prototype.rerender=function(){};gui.SelectionView.prototype.show=function(){};gui.SelectionView.prototype.hide=function(){};gui.SelectionView.prototype.visible=function(){};gui.SelectionView.prototype.destroy=function(e){};
// Input 95
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("gui.SelectionView");
gui.SelectionViewManager=function(e){function k(){return Object.keys(d).map(function(e){return d[e]})}var d={};this.getSelectionView=function(e){return d.hasOwnProperty(e)?d[e]:null};this.getSelectionViews=k;this.removeSelectionView=function(e){d.hasOwnProperty(e)&&(d[e].destroy(function(){}),delete d[e])};this.hideSelectionView=function(e){d.hasOwnProperty(e)&&d[e].hide()};this.showSelectionView=function(e){d.hasOwnProperty(e)&&d[e].show()};this.rerenderSelectionViews=function(){Object.keys(d).forEach(function(e){d[e].visible()&&
d[e].rerender()})};this.registerCursor=function(k,q){var p=k.getMemberId(),l=new e(k);q?l.show():l.hide();return d[p]=l};this.destroy=function(d){var e=k();(function l(k,r){r?d(r):k<e.length?e[k].destroy(function(c){l(k+1,c)}):d()})(0,void 0)}};
// Input 96
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("odf.OdfNodeFilter");runtime.loadClass("gui.SelectionMover");
gui.SvgSelectionView=function(e){function k(){var b=a.getRootNode();f!==b&&(f=b,h=f.parentNode.parentNode.parentNode,h.appendChild(u),u.setAttribute("class","selectionOverlay"),u.appendChild(x))}function d(a){v=a;u.style.display=!0===a?"block":"none"}function n(b){var c=w.getBoundingClientRect(h),d=a.getOdfCanvas().getZoomLevel(),e={};e.top=w.adaptRangeDifferenceToZoomLevel(b.top-c.top,d);e.left=w.adaptRangeDifferenceToZoomLevel(b.left-c.left,d);e.bottom=w.adaptRangeDifferenceToZoomLevel(b.bottom-
c.top,d);e.right=w.adaptRangeDifferenceToZoomLevel(b.right-c.left,d);e.width=w.adaptRangeDifferenceToZoomLevel(b.width,d);e.height=w.adaptRangeDifferenceToZoomLevel(b.height,d);return e}function q(a){a=a.getBoundingClientRect();return Boolean(a&&0!==a.height)}function p(a){var b=z.getTextElements(a,!0,!1),c=a.cloneRange(),d=a.cloneRange();a=a.cloneRange();if(!b.length)return null;var e;a:{e=0;var f=b[e],g=c.startContainer===f?c.startOffset:0,h=g;c.setStart(f,g);for(c.setEnd(f,h);!q(c);){if(f.nodeType===
Node.ELEMENT_NODE&&h<f.childNodes.length)h=f.childNodes.length;else if(f.nodeType===Node.TEXT_NODE&&h<f.length)h+=1;else if(b[e])f=b[e],e+=1,g=h=0;else{e=!1;break a}c.setStart(f,g);c.setEnd(f,h)}e=!0}if(!e)return null;a:{e=b.length-1;f=b[e];h=g=d.endContainer===f?d.endOffset:f.length||f.childNodes.length;d.setStart(f,g);for(d.setEnd(f,h);!q(d);){if(f.nodeType===Node.ELEMENT_NODE&&0<g)g=0;else if(f.nodeType===Node.TEXT_NODE&&0<g)g-=1;else if(b[e])f=b[e],e-=1,g=h=f.length||f.childNodes.length;else{b=
!1;break a}d.setStart(f,g);d.setEnd(f,h)}b=!0}if(!b)return null;a.setStart(c.startContainer,c.startOffset);a.setEnd(d.endContainer,d.endOffset);return{firstRange:c,lastRange:d,fillerRange:a}}function l(a,b){var c={};c.top=Math.min(a.top,b.top);c.left=Math.min(a.left,b.left);c.right=Math.max(a.right,b.right);c.bottom=Math.max(a.bottom,b.bottom);c.width=c.right-c.left;c.height=c.bottom-c.top;return c}function m(a,b){b&&0<b.width&&0<b.height&&(a=a?l(a,b):b);return a}function r(b){function c(a){s.setUnfilteredPosition(a,
0);return v.acceptNode(a)===A&&u.acceptPosition(s)===A?A:E}function d(a){var b=null;c(a)===A&&(b=w.getBoundingClientRect(a));return b}var e=b.commonAncestorContainer,f=b.startContainer,g=b.endContainer,h=b.startOffset,k=b.endOffset,l,n,p=null,q,r=t.createRange(),u,v=new odf.OdfNodeFilter,x;if(f===e||g===e)return r=b.cloneRange(),p=r.getBoundingClientRect(),r.detach(),p;for(b=f;b.parentNode!==e;)b=b.parentNode;for(n=g;n.parentNode!==e;)n=n.parentNode;u=a.createRootFilter(f);for(e=b.nextSibling;e&&
e!==n;)q=d(e),p=m(p,q),e=e.nextSibling;if(z.isParagraph(b))p=m(p,w.getBoundingClientRect(b));else if(b.nodeType===Node.TEXT_NODE)e=b,r.setStart(e,h),r.setEnd(e,e===n?k:e.length),q=r.getBoundingClientRect(),p=m(p,q);else for(x=t.createTreeWalker(b,NodeFilter.SHOW_TEXT,c,!1),e=x.currentNode=f;e&&e!==g;)r.setStart(e,h),r.setEnd(e,e.length),q=r.getBoundingClientRect(),p=m(p,q),l=e,h=0,e=x.nextNode();l||(l=f);if(z.isParagraph(n))p=m(p,w.getBoundingClientRect(n));else if(n.nodeType===Node.TEXT_NODE)e=n,
r.setStart(e,e===b?h:0),r.setEnd(e,k),q=r.getBoundingClientRect(),p=m(p,q);else for(x=t.createTreeWalker(n,NodeFilter.SHOW_TEXT,c,!1),e=x.currentNode=g;e&&e!==l;)if(r.setStart(e,0),r.setEnd(e,k),q=r.getBoundingClientRect(),p=m(p,q),e=x.previousNode())k=e.length;return p}function c(a,b){var c=a.getBoundingClientRect(),d={width:0};d.top=c.top;d.bottom=c.bottom;d.height=c.height;d.left=d.right=b?c.right:c.left;return d}function g(){k();if(e.getSelectionType()===ops.OdtCursor.RangeSelection){d(!0);var a=
e.getSelectedRange(),b=p(a),f,g,h,m,q,s,A;if(a.collapsed||!b)d(!1);else{d(!0);a=b.firstRange;f=b.lastRange;b=b.fillerRange;g=n(c(a,!1));m=n(c(f,!0));h=(h=r(b))?n(h):l(g,m);q=h.left;h=g.left+Math.max(0,h.width-(g.left-h.left));s=Math.min(g.top,m.top);A=m.top+m.height;g=[{x:g.left,y:s+g.height},{x:g.left,y:s},{x:h,y:s},{x:h,y:A-m.height},{x:m.right,y:A-m.height},{x:m.right,y:A},{x:q,y:A},{x:q,y:s+g.height},{x:g.left,y:s+g.height}];m="";for(q=0;q<g.length;q+=1)m+=g[q].x+","+g[q].y+" ";x.setAttribute("points",
m);a.detach();f.detach();b.detach()}}else d(!1)}function b(a){a===e&&g()}var a=e.getOdtDocument(),f,h,t=a.getDOM(),u=t.createElementNS("http://www.w3.org/2000/svg","svg"),x=t.createElementNS("http://www.w3.org/2000/svg","polygon"),z=new odf.OdfUtils,w=new core.DomUtils,v=!0,s=gui.SelectionMover.createPositionIterator(a.getRootNode()),A=NodeFilter.FILTER_ACCEPT,E=NodeFilter.FILTER_REJECT;this.show=this.rerender=g;this.hide=function(){d(!1)};this.visible=function(){return v};this.destroy=function(a){h.removeChild(u);
e.getOdtDocument().unsubscribe(ops.OdtDocument.signalCursorMoved,b);a()};(function(){var a=e.getMemberId();k();u.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",a);e.getOdtDocument().subscribe(ops.OdtDocument.signalCursorMoved,b)})()};
// Input 97
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("gui.UndoManager");runtime.loadClass("gui.UndoStateRules");
gui.TrivialUndoManager=function(e){function k(a){0<a.length&&(v=!0,f(a),v=!1)}function d(){z.emit(gui.UndoManager.signalUndoStackChanged,{undoAvailable:r.hasUndoStates(),redoAvailable:r.hasRedoStates()})}function n(){t!==a&&t!==u[u.length-1]&&u.push(t)}function q(a){var b=a.previousSibling||a.nextSibling;a.parentNode.removeChild(a);g.normalizeTextNodes(b)}function p(a){return Object.keys(a).map(function(b){return a[b]})}function l(a){function b(a){var g=a.spec();if(e[g.memberid])switch(g.optype){case "AddCursor":c[g.memberid]||
(c[g.memberid]=a,delete e[g.memberid],f-=1);break;case "MoveCursor":d[g.memberid]||(d[g.memberid]=a)}}var c={},d={},e={},f,g=a.pop();h.getCursors().forEach(function(a){e[a.getMemberId()]=!0});for(f=Object.keys(e).length;g&&0<f;)g.reverse(),g.forEach(b),g=a.pop();return p(c).concat(p(d))}function m(){var e=h.getOdfCanvas().odfContainer(),f=h.getOdfCanvas().getAnnotationViewManager();f&&f.forgetAnnotations();b=e.rootElement.cloneNode(!0);h.getOdfCanvas().refreshAnnotations();e=b;g.getElementsByTagNameNS(e,
c,"cursor").forEach(q);g.getElementsByTagNameNS(e,c,"anchor").forEach(q);n();t=a=l([a].concat(u));u.length=0;x.length=0;d()}var r=this,c="urn:webodf:names:cursor",g=new core.DomUtils,b,a=[],f,h,t=[],u=[],x=[],z=new core.EventNotifier([gui.UndoManager.signalUndoStackChanged,gui.UndoManager.signalUndoStateCreated,gui.UndoManager.signalUndoStateModified,gui.TrivialUndoManager.signalDocumentRootReplaced]),w=e||new gui.UndoStateRules,v=!1;this.subscribe=function(a,b){z.subscribe(a,b)};this.unsubscribe=
function(a,b){z.unsubscribe(a,b)};this.hasUndoStates=function(){return 0<u.length};this.hasRedoStates=function(){return 0<x.length};this.setOdtDocument=function(a){h=a};this.purgeInitialState=function(){u.length=0;x.length=0;a.length=0;t.length=0;b=null;d()};this.setInitialState=m;this.initialize=function(){b||m()};this.setPlaybackFunction=function(a){f=a};this.onOperationExecuted=function(b){v||(w.isEditOperation(b)&&(t===a||0<x.length)||!w.isPartOfOperationSet(b,t)?(x.length=0,n(),t=[b],u.push(t),
z.emit(gui.UndoManager.signalUndoStateCreated,{operations:t}),d()):(t.push(b),z.emit(gui.UndoManager.signalUndoStateModified,{operations:t})))};this.moveForward=function(a){for(var b=0,c;a&&x.length;)c=x.pop(),u.push(c),k(c),a-=1,b+=1;b&&(t=u[u.length-1],d());return b};this.moveBackward=function(c){for(var e=h.getOdfCanvas(),f=e.odfContainer(),g=0;c&&u.length;)x.push(u.pop()),c-=1,g+=1;g&&(f.setRootElement(b.cloneNode(!0)),e.setOdfContainer(f,!0),z.emit(gui.TrivialUndoManager.signalDocumentRootReplaced,
{}),h.getCursors().forEach(function(a){h.removeCursor(a.getMemberId())}),k(a),u.forEach(k),e.refreshCSS(),t=u[u.length-1]||a,d());return g}};gui.TrivialUndoManager.signalDocumentRootReplaced="documentRootReplaced";(function(){return gui.TrivialUndoManager})();
// Input 98
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.TrivialOperationRouter");runtime.loadClass("ops.OperationFactory");runtime.loadClass("ops.OdtDocument");
ops.Session=function(e){var k=new ops.OperationFactory,d=new ops.OdtDocument(e),n=null;this.setOperationFactory=function(d){k=d;n&&n.setOperationFactory(k)};this.setOperationRouter=function(e){n=e;e.setPlaybackFunction(function(e){d.emit(ops.OdtDocument.signalOperationStart,e);return e.execute(d)?(d.emit(ops.OdtDocument.signalOperationEnd,e),!0):!1});e.setOperationFactory(k)};this.getOperationFactory=function(){return k};this.getOdtDocument=function(){return d};this.enqueue=function(d){n.push(d)};
this.close=function(e){n.close(function(k){k?e(k):d.close(e)})};this.destroy=function(e){d.destroy(e)};this.setOperationRouter(new ops.TrivialOperationRouter)};
// Input 99
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.EventNotifier");runtime.loadClass("core.PositionFilter");runtime.loadClass("ops.Session");runtime.loadClass("ops.OpAddAnnotation");runtime.loadClass("ops.OpRemoveAnnotation");runtime.loadClass("gui.SelectionMover");
gui.AnnotationController=function(e,k){function d(){var d=l.getCursor(k),d=d&&d.getNode(),b=!1;if(d){a:{for(b=l.getRootNode();d&&d!==b;){if(d.namespaceURI===c&&"annotation"===d.localName){d=!0;break a}d=d.parentNode}d=!1}b=!d}b!==m&&(m=b,r.emit(gui.AnnotationController.annotatableChanged,m))}function n(c){c.getMemberId()===k&&d()}function q(c){c===k&&d()}function p(c){c.getMemberId()===k&&d()}var l=e.getOdtDocument(),m=!1,r=new core.EventNotifier([gui.AnnotationController.annotatableChanged]),c=odf.Namespaces.officens;
this.isAnnotatable=function(){return m};this.addAnnotation=function(){var c=new ops.OpAddAnnotation,b=l.getCursorSelection(k),a=b.length,b=b.position;m&&(b=0<=a?b:b+a,a=Math.abs(a),c.init({memberid:k,position:b,length:a,name:k+Date.now()}),e.enqueue([c]))};this.removeAnnotation=function(c){var b,a;b=l.convertDomPointToCursorStep(c,0)+1;a=l.convertDomPointToCursorStep(c,c.childNodes.length);c=new ops.OpRemoveAnnotation;c.init({memberid:k,position:b,length:a-b});a=new ops.OpMoveCursor;a.init({memberid:k,
position:0<b?b-1:b,length:0});e.enqueue([c,a])};this.subscribe=function(c,b){r.subscribe(c,b)};this.unsubscribe=function(c,b){r.unsubscribe(c,b)};this.destroy=function(c){l.unsubscribe(ops.OdtDocument.signalCursorAdded,n);l.unsubscribe(ops.OdtDocument.signalCursorRemoved,q);l.unsubscribe(ops.OdtDocument.signalCursorMoved,p);c()};l.subscribe(ops.OdtDocument.signalCursorAdded,n);l.subscribe(ops.OdtDocument.signalCursorRemoved,q);l.subscribe(ops.OdtDocument.signalCursorMoved,p);d()};
gui.AnnotationController.annotatableChanged="annotatable/changed";(function(){return gui.AnnotationController})();
// Input 100
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.EventNotifier");runtime.loadClass("core.Utils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("ops.OpAddStyle");runtime.loadClass("ops.OpApplyDirectStyling");runtime.loadClass("ops.OpSetParagraphStyle");runtime.loadClass("gui.StyleHelper");
gui.DirectFormattingController=function(e,k,d,n){function q(a,b){for(var c=0,d=b[c];d&&a;)a=a[d],c+=1,d=b[c];return b.length===c?a:void 0}function p(a,b){var c=q(a[0],b);return a.every(function(a){return c===q(a,b)})?c:void 0}function l(){var a=U.getCursor(k),a=(a=a&&a.getSelectedRange())&&F.getAppliedStyles(a)||[];a[0]&&I&&(a[0]=da.mergeObjects(a[0],I));return a}function m(){function a(b,d,e){b!==d&&(void 0===c&&(c={}),c[e]=d);return d}var b,c;J=l();V=a(V,J?F.isBold(J):!1,"isBold");aa=a(aa,J?F.isItalic(J):
!1,"isItalic");N=a(N,J?F.hasUnderline(J):!1,"hasUnderline");P=a(P,J?F.hasStrikeThrough(J):!1,"hasStrikeThrough");b=J&&p(J,["style:text-properties","fo:font-size"]);S=a(S,b&&parseFloat(b),"fontSize");$=a($,J&&p(J,["style:text-properties","style:font-name"]),"fontName");c&&M.emit(gui.DirectFormattingController.textStylingChanged,c)}function r(){function a(b,d,e){b!==d&&(void 0===c&&(c={}),c[e]=d);return d}var b=U.getCursor(k),b=b&&b.getSelectedRange(),c;D=a(D,b?F.isAlignedLeft(b):!1,"isAlignedLeft");
Y=a(Y,b?F.isAlignedCenter(b):!1,"isAlignedCenter");Q=a(Q,b?F.isAlignedRight(b):!1,"isAlignedRight");B=a(B,b?F.isAlignedJustified(b):!1,"isAlignedJustified");c&&M.emit(gui.DirectFormattingController.paragraphStylingChanged,c)}function c(a){a.getMemberId()===k&&r()}function g(a){a===k&&(m(),r())}function b(a){a.getMemberId()===k&&(m(),r())}function a(){m();r()}function f(a){var b=U.getCursor(k);b&&U.getParagraphElement(b.getNode())===a.paragraphElement&&(m(),r())}function h(a,b){var c=U.getCursor(k);
if(!c)return!1;c=F.getAppliedStyles(c.getSelectedRange());b(!a(c));return!0}function t(a){var b=U.getCursorSelection(k),c={"style:text-properties":a};0!==b.length?(a=new ops.OpApplyDirectStyling,a.init({memberid:k,position:b.position,length:b.length,setProperties:c}),e.enqueue([a])):(I=da.mergeObjects(I||{},c),m())}function u(a,b){var c={};c[a]=b;t(c)}function x(a){a=a.spec();I&&a.memberid===k&&"SplitParagraph"!==a.optype&&(I=null,m())}function z(a){u("fo:font-weight",a?"bold":"normal")}function w(a){u("fo:font-style",
a?"italic":"normal")}function v(a){u("style:text-underline-style",a?"solid":"none")}function s(a){u("style:text-line-through-style",a?"solid":"none")}function A(a){return a===ops.StepsTranslator.NEXT_STEP}function E(a){var b=U.getCursor(k).getSelectedRange(),b=Z.getParagraphElements(b),c=U.getFormatting(),f=[];b.forEach(function(b){var e=U.convertDomPointToCursorStep(b,0,A),g=b.getAttributeNS(odf.Namespaces.textns,"style-name");b=d.generateStyleName();var h;g&&(h=c.createDerivedStyleObject(g,"paragraph",
{}));h=a(h||{});g=new ops.OpAddStyle;g.init({memberid:k,styleName:b,styleFamily:"paragraph",isAutomaticStyle:!0,setProperties:h});f.push(g);h=new ops.OpSetParagraphStyle;h.init({memberid:k,styleName:b,position:e});f.push(h)});e.enqueue(f)}function H(a){E(function(b){return da.mergeObjects(b,a)})}function y(a){H({"style:paragraph-properties":{"fo:text-align":a}})}function O(a,b){var c=U.getFormatting().getDefaultTabStopDistance(),d=b["style:paragraph-properties"],d=(d=d&&d["fo:margin-left"])&&Z.parseLength(d);
return da.mergeObjects(b,{"style:paragraph-properties":{"fo:margin-left":d&&d.unit===c.unit?d.value+a*c.value+d.unit:a*c.value+c.unit}})}function W(a,b){var c=F.getAppliedStyles(a)[0],d=U.getFormatting().getAppliedStylesForElement(b);if(!c||"text"!==c["style:family"]||!c["style:text-properties"])return!1;if(!d||!d["style:text-properties"])return!0;c=c["style:text-properties"];d=d["style:text-properties"];return!Object.keys(c).every(function(a){return c[a]===d[a]})}function G(){}var K=this,U=e.getOdtDocument(),
da=new core.Utils,Z=new odf.OdfUtils,F=new gui.StyleHelper(U.getFormatting()),M=new core.EventNotifier([gui.DirectFormattingController.textStylingChanged,gui.DirectFormattingController.paragraphStylingChanged]),R=odf.Namespaces.textns,L=core.PositionFilter.FilterResult.FILTER_ACCEPT,I,J=[],V=!1,aa=!1,N=!1,P=!1,S,$,D,Y,Q,B;this.formatTextSelection=t;this.createCursorStyleOp=function(a,b,c){var d=null;(c=c?J[0]:I)&&c["style:text-properties"]&&(d=new ops.OpApplyDirectStyling,d.init({memberid:k,position:a,
length:b,setProperties:{"style:text-properties":c["style:text-properties"]}}),I=null,m());return d};this.setBold=z;this.setItalic=w;this.setHasUnderline=v;this.setHasStrikethrough=s;this.setFontSize=function(a){u("fo:font-size",a+"pt")};this.setFontName=function(a){u("style:font-name",a)};this.getAppliedStyles=function(){return J};this.toggleBold=h.bind(K,F.isBold,z);this.toggleItalic=h.bind(K,F.isItalic,w);this.toggleUnderline=h.bind(K,F.hasUnderline,v);this.toggleStrikethrough=h.bind(K,F.hasStrikeThrough,
s);this.isBold=function(){return V};this.isItalic=function(){return aa};this.hasUnderline=function(){return N};this.hasStrikeThrough=function(){return P};this.fontSize=function(){return S};this.fontName=function(){return $};this.isAlignedLeft=function(){return D};this.isAlignedCenter=function(){return Y};this.isAlignedRight=function(){return Q};this.isAlignedJustified=function(){return B};this.alignParagraphLeft=function(){y("left");return!0};this.alignParagraphCenter=function(){y("center");return!0};
this.alignParagraphRight=function(){y("right");return!0};this.alignParagraphJustified=function(){y("justify");return!0};this.indent=function(){E(O.bind(null,1));return!0};this.outdent=function(){E(O.bind(null,-1));return!0};this.createParagraphStyleOps=function(a){var b=U.getCursor(k),c=b.getSelectedRange(),e=[],f,g;b.hasForwardSelection()?(f=b.getAnchorNode(),g=b.getNode()):(f=b.getNode(),g=b.getAnchorNode());b=U.getParagraphElement(g);runtime.assert(Boolean(b),"DirectFormattingController: Cursor outside paragraph");
var h;a:{h=b;var l=gui.SelectionMover.createPositionIterator(h),m=new core.PositionFilterChain;m.addFilter(U.getPositionFilter());m.addFilter(U.createRootFilter(k));for(l.setUnfilteredPosition(c.endContainer,c.endOffset);l.nextPosition();)if(m.acceptPosition(l)===L){h=U.getParagraphElement(l.getCurrentNode())!==h;break a}h=!0}if(!h)return e;g!==f&&(b=U.getParagraphElement(f));if(!I&&!W(c,b))return e;c=J[0];if(!c)return e;if(f=b.getAttributeNS(R,"style-name"))c={"style:text-properties":c["style:text-properties"]},
c=U.getFormatting().createDerivedStyleObject(f,"paragraph",c);b=d.generateStyleName();f=new ops.OpAddStyle;f.init({memberid:k,styleName:b,styleFamily:"paragraph",isAutomaticStyle:!0,setProperties:c});e.push(f);f=new ops.OpSetParagraphStyle;f.init({memberid:k,styleName:b,position:a});e.push(f);return e};this.subscribe=function(a,b){M.subscribe(a,b)};this.unsubscribe=function(a,b){M.unsubscribe(a,b)};this.destroy=function(d){U.unsubscribe(ops.OdtDocument.signalCursorAdded,c);U.unsubscribe(ops.OdtDocument.signalCursorRemoved,
g);U.unsubscribe(ops.OdtDocument.signalCursorMoved,b);U.unsubscribe(ops.OdtDocument.signalParagraphStyleModified,a);U.unsubscribe(ops.OdtDocument.signalParagraphChanged,f);U.unsubscribe(ops.OdtDocument.signalOperationEnd,x);d()};(function(){U.subscribe(ops.OdtDocument.signalCursorAdded,c);U.subscribe(ops.OdtDocument.signalCursorRemoved,g);U.subscribe(ops.OdtDocument.signalCursorMoved,b);U.subscribe(ops.OdtDocument.signalParagraphStyleModified,a);U.subscribe(ops.OdtDocument.signalParagraphChanged,
f);U.subscribe(ops.OdtDocument.signalOperationEnd,x);m();r();n||(K.alignParagraphCenter=G,K.alignParagraphJustified=G,K.alignParagraphLeft=G,K.alignParagraphRight=G,K.createParagraphStyleOps=function(){return[]},K.indent=G,K.outdent=G)})()};gui.DirectFormattingController.textStylingChanged="textStyling/changed";gui.DirectFormattingController.paragraphStylingChanged="paragraphStyling/changed";(function(){return gui.DirectFormattingController})();
// Input 101
runtime.loadClass("odf.OdfUtils");
gui.HyperlinkController=function(e,k){var d=new odf.OdfUtils,n=e.getOdtDocument();this.addHyperlink=function(d,p){var l=n.getCursorSelection(k),m=new ops.OpApplyHyperlink,r=[];if(0===l.length||p)p=p||d,m=new ops.OpInsertText,m.init({memberid:k,position:l.position,text:p}),l.length=p.length,r.push(m);m=new ops.OpApplyHyperlink;m.init({memberid:k,position:l.position,length:l.length,hyperlink:d});r.push(m);e.enqueue(r)};this.removeHyperlinks=function(){var q=gui.SelectionMover.createPositionIterator(n.getRootNode()),p=
n.getCursor(k).getSelectedRange(),l=d.getHyperlinkElements(p),m=p.collapsed&&1===l.length,r=n.getDOM().createRange(),c=[],g,b;0!==l.length&&(l.forEach(function(a){r.selectNodeContents(a);g=n.convertDomToCursorRange({anchorNode:r.startContainer,anchorOffset:r.startOffset,focusNode:r.endContainer,focusOffset:r.endOffset});b=new ops.OpRemoveHyperlink;b.init({memberid:k,position:g.position,length:g.length});c.push(b)}),m||(m=l[0],-1===p.comparePoint(m,0)&&(r.setStart(m,0),r.setEnd(p.startContainer,p.startOffset),
g=n.convertDomToCursorRange({anchorNode:r.startContainer,anchorOffset:r.startOffset,focusNode:r.endContainer,focusOffset:r.endOffset}),0<g.length&&(b=new ops.OpApplyHyperlink,b.init({memberid:k,position:g.position,length:g.length,hyperlink:d.getHyperlinkTarget(m)}),c.push(b))),l=l[l.length-1],q.moveToEndOfNode(l),q=q.unfilteredDomOffset(),1===p.comparePoint(l,q)&&(r.setStart(p.endContainer,p.endOffset),r.setEnd(l,q),g=n.convertDomToCursorRange({anchorNode:r.startContainer,anchorOffset:r.startOffset,
focusNode:r.endContainer,focusOffset:r.endOffset}),0<g.length&&(b=new ops.OpApplyHyperlink,b.init({memberid:k,position:g.position,length:g.length,hyperlink:d.getHyperlinkTarget(l)}),c.push(b)))),e.enqueue(c),r.detach())}};
// Input 102
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.ObjectNameGenerator");
gui.ImageController=function(e,k,d){var n={"image/gif":".gif","image/jpeg":".jpg","image/png":".png"},q=odf.Namespaces.textns,p=e.getOdtDocument(),l=p.getFormatting(),m={};this.insertImage=function(r,c,g,b){var a;runtime.assert(0<g&&0<b,"Both width and height of the image should be greater than 0px.");a=p.getParagraphElement(p.getCursor(k).getNode()).getAttributeNS(q,"style-name");m.hasOwnProperty(a)||(m[a]=l.getContentSize(a,"paragraph"));a=m[a];g*=0.0264583333333334;b*=0.0264583333333334;var f=
1,h=1;g>a.width&&(f=a.width/g);b>a.height&&(h=a.height/b);f=Math.min(f,h);a=g*f;g=b*f;h=p.getOdfCanvas().odfContainer().rootElement.styles;b=r.toLowerCase();var f=n.hasOwnProperty(b)?n[b]:null,t;b=[];runtime.assert(null!==f,"Image type is not supported: "+r);f="Pictures/"+d.generateImageName()+f;t=new ops.OpSetBlob;t.init({memberid:k,filename:f,mimetype:r,content:c});b.push(t);l.getStyleElement("Graphics","graphic",[h])||(r=new ops.OpAddStyle,r.init({memberid:k,styleName:"Graphics",styleFamily:"graphic",
isAutomaticStyle:!1,setProperties:{"style:graphic-properties":{"text:anchor-type":"paragraph","svg:x":"0cm","svg:y":"0cm","style:wrap":"dynamic","style:number-wrapped-paragraphs":"no-limit","style:wrap-contour":"false","style:vertical-pos":"top","style:vertical-rel":"paragraph","style:horizontal-pos":"center","style:horizontal-rel":"paragraph"}}}),b.push(r));r=d.generateStyleName();c=new ops.OpAddStyle;c.init({memberid:k,styleName:r,styleFamily:"graphic",isAutomaticStyle:!0,setProperties:{"style:parent-style-name":"Graphics",
"style:graphic-properties":{"style:vertical-pos":"top","style:vertical-rel":"baseline","style:horizontal-pos":"center","style:horizontal-rel":"paragraph","fo:background-color":"transparent","style:background-transparency":"100%","style:shadow":"none","style:mirror":"none","fo:clip":"rect(0cm, 0cm, 0cm, 0cm)","draw:luminance":"0%","draw:contrast":"0%","draw:red":"0%","draw:green":"0%","draw:blue":"0%","draw:gamma":"100%","draw:color-inversion":"false","draw:image-opacity":"100%","draw:color-mode":"standard"}}});
b.push(c);t=new ops.OpInsertImage;t.init({memberid:k,position:p.getCursorPosition(k),filename:f,frameWidth:a+"cm",frameHeight:g+"cm",frameStyleName:r,frameName:d.generateFrameName()});b.push(t);e.enqueue(b)}};
// Input 103
runtime.loadClass("core.DomUtils");runtime.loadClass("core.PositionFilterChain");runtime.loadClass("gui.SelectionMover");runtime.loadClass("odf.OdfUtils");runtime.loadClass("ops.OdtCursor");runtime.loadClass("ops.OpMoveCursor");runtime.loadClass("ops.Session");runtime.loadClass("ops.StepsTranslator");
gui.SelectionController=function(e,k){function d(){var a=u.getCursor(k).getNode();return u.createStepIterator(a,0,[w,s],u.getRootElement(a))}function n(a){return function(b){var c=a(b);return function(b,d){return a(d)===c}}}function q(a,b){return b?{anchorNode:a.startContainer,anchorOffset:a.startOffset,focusNode:a.endContainer,focusOffset:a.endOffset}:{anchorNode:a.endContainer,anchorOffset:a.endOffset,focusNode:a.startContainer,focusOffset:a.startOffset}}function p(a,b,c){var d=new ops.OpMoveCursor;
d.init({memberid:k,position:a,length:b||0,selectionType:c});return d}function l(a){var b=/[A-Za-z0-9]/,c=gui.SelectionMover.createPositionIterator(u.getRootNode()),d;for(c.setUnfilteredPosition(a.startContainer,a.startOffset);c.previousPosition();){d=c.getCurrentNode();if(d.nodeType===Node.TEXT_NODE){if(d=d.data[c.unfilteredDomOffset()],!b.test(d))break}else if(!z.isTextSpan(d))break;a.setStart(c.container(),c.unfilteredDomOffset())}c.setUnfilteredPosition(a.endContainer,a.endOffset);do if(d=c.getCurrentNode(),
d.nodeType===Node.TEXT_NODE){if(d=d.data[c.unfilteredDomOffset()],!b.test(d))break}else if(!z.isTextSpan(d))break;while(c.nextPosition());a.setEnd(c.container(),c.unfilteredDomOffset())}function m(a){var b=z.getParagraphElements(a),c=b[0],b=b[b.length-1];c&&a.setStart(c,0);b&&(z.isParagraph(a.endContainer)&&0===a.endOffset?a.setEndBefore(b):a.setEnd(b,b.childNodes.length))}function r(a){var b=u.getCursorSelection(k),c=u.getCursor(k).getStepCounter();0!==a&&(a=0<a?c.convertForwardStepsBetweenFilters(a,
v,w):-c.convertBackwardStepsBetweenFilters(-a,v,w),a=b.length+a,e.enqueue([p(b.position,a)]))}function c(a){var b=d(),c=u.getCursor(k).getAnchorNode();a(b)&&(a=u.convertDomToCursorRange({anchorNode:c,anchorOffset:0,focusNode:b.container(),focusOffset:b.offset()}),e.enqueue([p(a.position,a.length)]))}function g(a){var b=u.getCursorPosition(k),c=u.getCursor(k).getStepCounter();0!==a&&(a=0<a?c.convertForwardStepsBetweenFilters(a,v,w):-c.convertBackwardStepsBetweenFilters(-a,v,w),e.enqueue([p(b+a,0)]))}
function b(a){var b=d();a(b)&&(a=u.convertDomPointToCursorStep(b.container(),b.offset()),e.enqueue([p(a,0)]))}function a(a,b){var c=u.getParagraphElement(u.getCursor(k).getNode());runtime.assert(Boolean(c),"SelectionController: Cursor outside paragraph");c=u.getCursor(k).getStepCounter().countLinesSteps(a,v);b?r(c):g(c)}function f(a,b){var c=u.getCursor(k).getStepCounter().countStepsToLineBoundary(a,v);b?r(c):g(c)}function h(a,b){var c=u.getCursor(k),d=b(c.getNode()),c=q(c.getSelectedRange(),c.hasForwardSelection());
runtime.assert(Boolean(d),"SelectionController: Cursor outside root");0>a?(c.focusNode=d,c.focusOffset=0):(c.focusNode=d,c.focusOffset=d.childNodes.length);d=u.convertDomToCursorRange(c,n(b));e.enqueue([p(d.position,d.length)])}function t(a){var b=u.getCursor(k),b=u.getRootElement(b.getNode());runtime.assert(Boolean(b),"SelectionController: Cursor outside root");a=0>a?u.convertDomPointToCursorStep(b,0,function(a){return a===ops.StepsTranslator.NEXT_STEP}):u.convertDomPointToCursorStep(b,b.childNodes.length);
e.enqueue([p(a,0)]);return!0}var u=e.getOdtDocument(),x=new core.DomUtils,z=new odf.OdfUtils,w=u.getPositionFilter(),v=new core.PositionFilterChain,s=u.createRootFilter(k);v.addFilter(w);v.addFilter(u.createRootFilter(k));this.selectionToRange=function(a){var b=0<=x.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset),c=a.focusNode.ownerDocument.createRange();b?(c.setStart(a.anchorNode,a.anchorOffset),c.setEnd(a.focusNode,a.focusOffset)):(c.setStart(a.focusNode,a.focusOffset),c.setEnd(a.anchorNode,
a.anchorOffset));return{range:c,hasForwardSelection:b}};this.rangeToSelection=q;this.selectImage=function(a){var b=u.getRootElement(a),c=u.createRootFilter(b),b=u.createStepIterator(a,0,[c,u.getPositionFilter()],b),d;b.roundToPreviousStep()||runtime.assert(!1,"No walkable position before frame");c=b.container();d=b.offset();b.setPosition(a,a.childNodes.length);b.roundToNextStep()||runtime.assert(!1,"No walkable position after frame");a=u.convertDomToCursorRange({anchorNode:c,anchorOffset:d,focusNode:b.container(),
focusOffset:b.offset()});a=p(a.position,a.length,ops.OdtCursor.RegionSelection);e.enqueue([a])};this.expandToWordBoundaries=l;this.expandToParagraphBoundaries=m;this.selectRange=function(a,b,c){var d=u.getOdfCanvas().getElement(),f;f=x.containsNode(d,a.startContainer);d=x.containsNode(d,a.endContainer);if(f||d)if(f&&d&&(2===c?l(a):3<=c&&m(a)),a=q(a,b),b=u.convertDomToCursorRange(a,n(z.getParagraphElement)),a=u.getCursorSelection(k),b.position!==a.position||b.length!==a.length)a=p(b.position,b.length,
ops.OdtCursor.RangeSelection),e.enqueue([a])};this.moveCursorToLeft=function(){b(function(a){return a.previousStep()});return!0};this.moveCursorToRight=function(){b(function(a){return a.nextStep()});return!0};this.extendSelectionToLeft=function(){c(function(a){return a.previousStep()});return!0};this.extendSelectionToRight=function(){c(function(a){return a.nextStep()});return!0};this.moveCursorUp=function(){a(-1,!1);return!0};this.moveCursorDown=function(){a(1,!1);return!0};this.extendSelectionUp=
function(){a(-1,!0);return!0};this.extendSelectionDown=function(){a(1,!0);return!0};this.moveCursorToLineStart=function(){f(-1,!1);return!0};this.moveCursorToLineEnd=function(){f(1,!1);return!0};this.extendSelectionToLineStart=function(){f(-1,!0);return!0};this.extendSelectionToLineEnd=function(){f(1,!0);return!0};this.extendSelectionToParagraphStart=function(){h(-1,u.getParagraphElement);return!0};this.extendSelectionToParagraphEnd=function(){h(1,u.getParagraphElement);return!0};this.moveCursorToDocumentStart=
function(){t(-1);return!0};this.moveCursorToDocumentEnd=function(){t(1);return!0};this.extendSelectionToDocumentStart=function(){h(-1,u.getRootElement);return!0};this.extendSelectionToDocumentEnd=function(){h(1,u.getRootElement);return!0};this.extendSelectionToEntireDocument=function(){var a=u.getCursor(k),a=u.getRootElement(a.getNode());runtime.assert(Boolean(a),"SelectionController: Cursor outside root");a=u.convertDomToCursorRange({anchorNode:a,anchorOffset:0,focusNode:a,focusOffset:a.childNodes.length},
n(u.getRootElement));e.enqueue([p(a.position,a.length)]);return!0}};
// Input 104
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.PositionFilter");
gui.TextController=function(e,k,d,n){function q(c){var d=new ops.OpRemoveText;d.init({memberid:k,position:c.position,length:c.length});return d}function p(c){0>c.length&&(c.position+=c.length,c.length=-c.length);return c}function l(c,d){var b=new core.PositionFilterChain,a=gui.SelectionMover.createPositionIterator(m.getRootElement(c)),e=d?a.nextPosition:a.previousPosition;b.addFilter(m.getPositionFilter());b.addFilter(m.createRootFilter(k));for(a.setUnfilteredPosition(c,0);e();)if(b.acceptPosition(a)===
r)return!0;return!1}var m=e.getOdtDocument(),r=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.enqueueParagraphSplittingOps=function(){var c=p(m.getCursorSelection(k)),d,b=[];0<c.length&&(d=q(c),b.push(d));d=new ops.OpSplitParagraph;d.init({memberid:k,position:c.position,moveCursor:!0});b.push(d);n&&(c=n(c.position+1),b=b.concat(c));e.enqueue(b);return!0};this.removeTextByBackspaceKey=function(){var c=m.getCursor(k),d=p(m.getCursorSelection(k)),b=null;0===d.length?l(c.getNode(),!1)&&(b=new ops.OpRemoveText,
b.init({memberid:k,position:d.position-1,length:1}),e.enqueue([b])):(b=q(d),e.enqueue([b]));return null!==b};this.removeTextByDeleteKey=function(){var c=m.getCursor(k),d=p(m.getCursorSelection(k)),b=null;0===d.length?l(c.getNode(),!0)&&(b=new ops.OpRemoveText,b.init({memberid:k,position:d.position,length:1}),e.enqueue([b])):(b=q(d),e.enqueue([b]));return null!==b};this.removeCurrentSelection=function(){var c=p(m.getCursorSelection(k));0!==c.length&&(c=q(c),e.enqueue([c]));return!0};this.insertText=
function(c){var g=p(m.getCursorSelection(k)),b,a=[],f=!1;0<g.length&&(b=q(g),a.push(b),f=!0);b=new ops.OpInsertText;b.init({memberid:k,position:g.position,text:c,moveCursor:!0});a.push(b);d&&(c=d(g.position,c.length,f))&&a.push(c);e.enqueue(a)}};(function(){return gui.TextController})();
// Input 105
runtime.loadClass("core.DomUtils");runtime.loadClass("core.Async");runtime.loadClass("core.ScheduledTask");runtime.loadClass("odf.OdfUtils");runtime.loadClass("odf.ObjectNameGenerator");runtime.loadClass("ops.OdtCursor");runtime.loadClass("ops.OpAddCursor");runtime.loadClass("ops.OpRemoveCursor");runtime.loadClass("gui.MimeDataExporter");runtime.loadClass("gui.Clipboard");runtime.loadClass("gui.DirectFormattingController");runtime.loadClass("gui.KeyboardHandler");runtime.loadClass("gui.HyperlinkClickHandler");
runtime.loadClass("gui.HyperlinkController");runtime.loadClass("gui.ImageController");runtime.loadClass("gui.ImageSelector");runtime.loadClass("gui.SelectionController");runtime.loadClass("gui.TextController");runtime.loadClass("gui.AnnotationController");runtime.loadClass("gui.EventManager");runtime.loadClass("gui.PlainTextPasteboard");runtime.loadClass("gui.InputMethodEditor");
gui.SessionController=function(){var e=core.PositionFilter.FilterResult.FILTER_ACCEPT;gui.SessionController=function(k,d,n,q){function p(a){var b=w.getCursor(d).getSelectedRange();b.collapsed?a.preventDefault():H.setDataFromRange(a,b)?I.removeCurrentSelection():runtime.log("Cut operation failed")}function l(){return!1!==w.getCursor(d).getSelectedRange().collapsed}function m(a){var b;z.clipboardData&&z.clipboardData.getData?b=z.clipboardData.getData("Text"):a.clipboardData&&a.clipboardData.getData&&
(b=a.clipboardData.getData("text/plain"));b&&(I.removeCurrentSelection(),k.enqueue(P.createPasteOps(b)));a.preventDefault?a.preventDefault():a.returnValue=!1}function r(){return!1}function c(a){w.emit(ops.OdtDocument.signalUndoStackChanged,a)}function g(){return F?(F.moveBackward(1),!0):!1}function b(){return F?(F.moveForward(1),!0):!1}function a(){var a=z.getSelection(),b=0<a.rangeCount&&Q.selectionToRange(a);G&&b&&(U=!0,V.clearSelection(),aa.setUnfilteredPosition(a.focusNode,a.focusOffset),da.acceptPosition(aa)===
e&&(2===$?Q.expandToWordBoundaries(b.range):3<=$&&Q.expandToParagraphBoundaries(b.range),n.setSelectedRange(b.range,b.hasForwardSelection),w.emit(ops.OdtDocument.signalCursorMoved,n)))}function f(a){var b=a.target||a.srcElement,c=a.detail,d=a.clientX,e=a.clientY;N.processRequests();A.isImage(b)&&A.isCharacterFrame(b.parentNode)?(Q.selectImage(b.parentNode),M.focus()):V.isSelectorElement(b)?M.focus():G&&(U?(Q.selectRange(n.getSelectedRange(),n.hasForwardSelection(),a.detail),M.focus()):Z=runtime.setTimeout(function(){var a;
a=(a=z.getSelection())?{anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}:null;var b;if(!a.anchorNode&&!a.focusNode){var f=w.getDOM();b=null;f.caretRangeFromPoint?(f=f.caretRangeFromPoint(d,e),b={container:f.startContainer,offset:f.startOffset}):f.caretPositionFromPoint&&(f=f.caretPositionFromPoint(d,e))&&f.offsetNode&&(b={container:f.offsetNode,offset:f.offset});b&&(a.anchorNode=b.container,a.anchorOffset=b.offset,a.focusNode=a.anchorNode,a.focusOffset=
a.anchorOffset)}a.anchorNode&&a.focusNode&&(a=Q.selectionToRange(a),Q.selectRange(a.range,a.hasForwardSelection,c));M.focus()},0));$=0;U=G=!1}function h(a){(a=a.data)&&I.insertText(a)}function t(a){return function(){a();return!0}}function u(a){return function(b){return w.getCursor(d).getSelectionType()===ops.OdtCursor.RangeSelection?a(b):!0}}function x(){var a=new ops.OpAddCursor;a.init({memberid:d});k.enqueue([a])}var z=runtime.getWindow(),w=k.getOdtDocument(),v=new core.Async,s=new core.DomUtils,
A=new odf.OdfUtils,E=new gui.MimeDataExporter,H=new gui.Clipboard(E),y=new gui.KeyboardHandler,O=new gui.KeyboardHandler,W=new gui.KeyboardHandler,G=!1,K=new odf.ObjectNameGenerator(w.getOdfCanvas().odfContainer(),d),U=!1,da=null,Z,F=null,M=new gui.EventManager(w),R=new gui.AnnotationController(k,d),L=new gui.DirectFormattingController(k,d,K,q.directParagraphStylingEnabled),I=new gui.TextController(k,d,L.createCursorStyleOp,L.createParagraphStyleOps),J=new gui.ImageController(k,d,K),V=new gui.ImageSelector(w.getOdfCanvas()),
aa=gui.SelectionMover.createPositionIterator(w.getRootNode()),N,P=new gui.PlainTextPasteboard(w,d),S=new gui.InputMethodEditor(d,w,M),$=0,D=new gui.HyperlinkClickHandler(w.getRootNode),Y=new gui.HyperlinkController(k,d),Q=new gui.SelectionController(k,d),B=gui.KeyboardHandler.Modifier,C=gui.KeyboardHandler.KeyCode,ca=-1!==z.navigator.appVersion.toLowerCase().indexOf("mac"),ba;runtime.assert(null!==z,"Expected to be run in an environment which has a global window, like a browser.");this.registerLocalCursor=
x;this.startEditing=function(){k.getOdtDocument().getCursor(d)||x();S.subscribe(gui.InputMethodEditor.signalCompositionStart,I.removeCurrentSelection);S.subscribe(gui.InputMethodEditor.signalCompositionEnd,h);M.subscribe("beforecut",l);M.subscribe("cut",p);M.subscribe("beforepaste",r);M.subscribe("paste",m);z.addEventListener("focus",D.showTextCursor,!1);F&&F.initialize();S.setEditing(!0);D.setModifier(ca?gui.HyperlinkClickHandler.Modifier.Meta:gui.HyperlinkClickHandler.Modifier.Ctrl);y.bind(C.Backspace,
B.None,t(I.removeTextByBackspaceKey),!0);y.bind(C.Delete,B.None,I.removeTextByDeleteKey);y.bind(C.Tab,B.None,u(function(){I.insertText("\t");return!0}));ca?(y.bind(C.Clear,B.None,I.removeCurrentSelection),y.bind(C.B,B.Meta,u(L.toggleBold)),y.bind(C.I,B.Meta,u(L.toggleItalic)),y.bind(C.U,B.Meta,u(L.toggleUnderline)),y.bind(C.L,B.MetaShift,u(L.alignParagraphLeft)),y.bind(C.E,B.MetaShift,u(L.alignParagraphCenter)),y.bind(C.R,B.MetaShift,u(L.alignParagraphRight)),y.bind(C.J,B.MetaShift,u(L.alignParagraphJustified)),
y.bind(C.C,B.MetaShift,R.addAnnotation),y.bind(C.Z,B.Meta,g),y.bind(C.Z,B.MetaShift,b),y.bind(C.LeftMeta,B.Meta,D.showPointerCursor),y.bind(C.MetaInMozilla,B.Meta,D.showPointerCursor),W.bind(C.LeftMeta,B.None,D.showTextCursor),W.bind(C.MetaInMozilla,B.None,D.showTextCursor)):(y.bind(C.B,B.Ctrl,u(L.toggleBold)),y.bind(C.I,B.Ctrl,u(L.toggleItalic)),y.bind(C.U,B.Ctrl,u(L.toggleUnderline)),y.bind(C.L,B.CtrlShift,u(L.alignParagraphLeft)),y.bind(C.E,B.CtrlShift,u(L.alignParagraphCenter)),y.bind(C.R,B.CtrlShift,
u(L.alignParagraphRight)),y.bind(C.J,B.CtrlShift,u(L.alignParagraphJustified)),y.bind(C.C,B.CtrlAlt,R.addAnnotation),y.bind(C.Z,B.Ctrl,g),y.bind(C.Z,B.CtrlShift,b),y.bind(C.Ctrl,B.Ctrl,D.showPointerCursor),W.bind(C.Ctrl,B.None,D.showTextCursor));O.setDefault(u(function(a){var b;b=null===a.which||void 0===a.which?String.fromCharCode(a.keyCode):0!==a.which&&0!==a.charCode?String.fromCharCode(a.which):null;return!b||a.altKey||a.ctrlKey||a.metaKey?!1:(I.insertText(b),!0)}));O.bind(C.Enter,B.None,u(I.enqueueParagraphSplittingOps))};
this.endEditing=function(){S.unsubscribe(gui.InputMethodEditor.signalCompositionStart,I.removeCurrentSelection);S.unsubscribe(gui.InputMethodEditor.signalCompositionEnd,h);M.unsubscribe("cut",p);M.unsubscribe("beforecut",l);M.unsubscribe("paste",m);M.unsubscribe("beforepaste",r);z.removeEventListener("focus",D.showTextCursor,!1);S.setEditing(!1);D.setModifier(gui.HyperlinkClickHandler.Modifier.None);y.bind(C.Backspace,B.None,function(){return!0},!0);y.unbind(C.Delete,B.None);y.unbind(C.Tab,B.None);
ca?(y.unbind(C.Clear,B.None),y.unbind(C.B,B.Meta),y.unbind(C.I,B.Meta),y.unbind(C.U,B.Meta),y.unbind(C.L,B.MetaShift),y.unbind(C.E,B.MetaShift),y.unbind(C.R,B.MetaShift),y.unbind(C.J,B.MetaShift),y.unbind(C.C,B.MetaShift),y.unbind(C.Z,B.Meta),y.unbind(C.Z,B.MetaShift),y.unbind(C.LeftMeta,B.Meta),y.unbind(C.MetaInMozilla,B.Meta),W.unbind(C.LeftMeta,B.None),W.unbind(C.MetaInMozilla,B.None)):(y.unbind(C.B,B.Ctrl),y.unbind(C.I,B.Ctrl),y.unbind(C.U,B.Ctrl),y.unbind(C.L,B.CtrlShift),y.unbind(C.E,B.CtrlShift),
y.unbind(C.R,B.CtrlShift),y.unbind(C.J,B.CtrlShift),y.unbind(C.C,B.CtrlAlt),y.unbind(C.Z,B.Ctrl),y.unbind(C.Z,B.CtrlShift),y.unbind(C.Ctrl,B.Ctrl),W.unbind(C.Ctrl,B.None));O.setDefault(null);O.unbind(C.Enter,B.None)};this.getInputMemberId=function(){return d};this.getSession=function(){return k};this.setUndoManager=function(a){F&&F.unsubscribe(gui.UndoManager.signalUndoStackChanged,c);if(F=a)F.setOdtDocument(w),F.setPlaybackFunction(k.enqueue),F.subscribe(gui.UndoManager.signalUndoStackChanged,c)};
this.getUndoManager=function(){return F};this.getAnnotationController=function(){return R};this.getDirectFormattingController=function(){return L};this.getHyperlinkController=function(){return Y};this.getImageController=function(){return J};this.getSelectionController=function(){return Q};this.getTextController=function(){return I};this.getEventManager=function(){return M};this.getKeyboardHandlers=function(){return{keydown:y,keypress:O}};this.destroy=function(a){var b=[N.destroy,L.destroy,S.destroy];
runtime.clearTimeout(Z);v.destroyAll(b,a)};N=new core.ScheduledTask(a,0);q=new core.ScheduledTask(function(){var a=w.getCursor(d);if(a&&a.getSelectionType()===ops.OdtCursor.RegionSelection&&(a=A.getImageElements(a.getSelectedRange())[0])){V.select(a.parentNode);return}V.clearSelection()},0);y.bind(C.Left,B.None,u(Q.moveCursorToLeft));y.bind(C.Right,B.None,u(Q.moveCursorToRight));y.bind(C.Up,B.None,u(Q.moveCursorUp));y.bind(C.Down,B.None,u(Q.moveCursorDown));y.bind(C.Left,B.Shift,u(Q.extendSelectionToLeft));
y.bind(C.Right,B.Shift,u(Q.extendSelectionToRight));y.bind(C.Up,B.Shift,u(Q.extendSelectionUp));y.bind(C.Down,B.Shift,u(Q.extendSelectionDown));y.bind(C.Home,B.None,u(Q.moveCursorToLineStart));y.bind(C.End,B.None,u(Q.moveCursorToLineEnd));y.bind(C.Home,B.Ctrl,u(Q.moveCursorToDocumentStart));y.bind(C.End,B.Ctrl,u(Q.moveCursorToDocumentEnd));y.bind(C.Home,B.Shift,u(Q.extendSelectionToLineStart));y.bind(C.End,B.Shift,u(Q.extendSelectionToLineEnd));y.bind(C.Up,B.CtrlShift,u(Q.extendSelectionToParagraphStart));
y.bind(C.Down,B.CtrlShift,u(Q.extendSelectionToParagraphEnd));y.bind(C.Home,B.CtrlShift,u(Q.extendSelectionToDocumentStart));y.bind(C.End,B.CtrlShift,u(Q.extendSelectionToDocumentEnd));ca?(y.bind(C.Left,B.Meta,u(Q.moveCursorToLineStart)),y.bind(C.Right,B.Meta,u(Q.moveCursorToLineEnd)),y.bind(C.Home,B.Meta,u(Q.moveCursorToDocumentStart)),y.bind(C.End,B.Meta,u(Q.moveCursorToDocumentEnd)),y.bind(C.Left,B.MetaShift,u(Q.extendSelectionToLineStart)),y.bind(C.Right,B.MetaShift,u(Q.extendSelectionToLineEnd)),
y.bind(C.Up,B.AltShift,u(Q.extendSelectionToParagraphStart)),y.bind(C.Down,B.AltShift,u(Q.extendSelectionToParagraphEnd)),y.bind(C.Up,B.MetaShift,u(Q.extendSelectionToDocumentStart)),y.bind(C.Down,B.MetaShift,u(Q.extendSelectionToDocumentEnd)),y.bind(C.A,B.Meta,u(Q.extendSelectionToEntireDocument))):y.bind(C.A,B.Ctrl,u(Q.extendSelectionToEntireDocument));M.subscribe("keydown",y.handleEvent);M.subscribe("keypress",O.handleEvent);M.subscribe("keyup",W.handleEvent);M.subscribe("copy",function(a){var b=
w.getCursor(d).getSelectedRange();b.collapsed?a.preventDefault():H.setDataFromRange(a,b)||runtime.log("Copy operation failed")});M.subscribe("mousedown",function(b){var c=b.target||b.srcElement,e=w.getCursor(d);if(G=c&&s.containsNode(w.getOdfCanvas().getElement(),c))U=!1,da=w.createRootFilter(c),$=b.detail,e&&b.shiftKey?z.getSelection().collapse(e.getAnchorNode(),0):(b=z.getSelection(),c=e.getSelectedRange(),b.extend?e.hasForwardSelection()?(b.collapse(c.startContainer,c.startOffset),b.extend(c.endContainer,
c.endOffset)):(b.collapse(c.endContainer,c.endOffset),b.extend(c.startContainer,c.startOffset)):(b.removeAllRanges(),b.addRange(c.cloneRange()))),1<$&&a()});M.subscribe("mousemove",N.trigger);M.subscribe("mouseup",function(a){var b=a.target||a.srcElement,c=null;"annotationRemoveButton"===b.className?(c=s.getElementsByTagNameNS(b.parentNode,odf.Namespaces.officens,"annotation")[0],R.removeAnnotation(c),M.focus()):f(a)});M.subscribe("contextmenu",function(a){f(a)});M.subscribe("dragstart",function(a){var b=
w.getCursor(d).getSelectedRange();b.collapsed||E.exportRangeToDataTransfer(a.dataTransfer,b)});M.subscribe("dragend",function(){G&&M.focus();$=0;U=G=!1});M.subscribe("click",D.handleClick);w.subscribe(ops.OdtDocument.signalOperationEnd,q.trigger);w.subscribe(ops.OdtDocument.signalCursorAdded,S.registerCursor);w.subscribe(ops.OdtDocument.signalCursorRemoved,S.removeCursor);w.subscribe(ops.OdtDocument.signalOperationStart,function(){(ba=M.hasFocus())&&M.blur()});w.subscribe(ops.OdtDocument.signalOperationEnd,
function(){ba&&M.focus();ba=void 0});w.subscribe(ops.OdtDocument.signalOperationEnd,function(a){if(F)F.onOperationExecuted(a)})};return gui.SessionController}();
// Input 106
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("gui.Caret");
gui.CaretManager=function(e){function k(b){return a.hasOwnProperty(b)?a[b]:null}function d(){return Object.keys(a).map(function(b){return a[b]})}function n(b){b===e.getInputMemberId()&&e.getSession().getOdtDocument().getOdfCanvas().getElement().removeAttribute("tabindex");delete a[b]}function q(a){a=a.getMemberId();a===e.getInputMemberId()&&(a=k(a))&&a.refreshCursorBlinking()}function p(){var a=k(e.getInputMemberId());t=!1;a&&a.ensureVisible()}function l(){var a=k(e.getInputMemberId());a&&(a.handleUpdate(),
t||(t=!0,h=runtime.setTimeout(p,50)))}function m(a){a.memberId===e.getInputMemberId()&&l()}function r(){var a=k(e.getInputMemberId());a&&a.setFocus()}function c(){var a=k(e.getInputMemberId());a&&a.removeFocus()}function g(){var a=k(e.getInputMemberId());a&&a.show()}function b(){var a=k(e.getInputMemberId());a&&a.hide()}var a={},f=runtime.getWindow(),h,t=!1;this.registerCursor=function(b,c,d){var f=b.getMemberId();c=new gui.Caret(b,c,d);a[f]=c;f===e.getInputMemberId()?(runtime.log("Starting to track input on new cursor of "+
f),b.subscribe(ops.OdtCursor.signalCursorUpdated,l),e.getEventManager().focus()):b.subscribe(ops.OdtCursor.signalCursorUpdated,c.handleUpdate);return c};this.getCaret=k;this.getCarets=d;this.destroy=function(k){var l=e.getSession().getOdtDocument(),p=e.getEventManager(),t=d();runtime.clearTimeout(h);l.unsubscribe(ops.OdtDocument.signalParagraphChanged,m);l.unsubscribe(ops.OdtDocument.signalCursorMoved,q);l.unsubscribe(ops.OdtDocument.signalCursorRemoved,n);p.unsubscribe("focus",r);p.unsubscribe("blur",
c);f.removeEventListener("focus",g,!1);f.removeEventListener("blur",b,!1);(function s(a,b){b?k(b):a<t.length?t[a].destroy(function(b){s(a+1,b)}):k()})(0,void 0);a={}};(function(){var a=e.getSession().getOdtDocument(),d=e.getEventManager();a.subscribe(ops.OdtDocument.signalParagraphChanged,m);a.subscribe(ops.OdtDocument.signalCursorMoved,q);a.subscribe(ops.OdtDocument.signalCursorRemoved,n);d.subscribe("focus",r);d.subscribe("blur",c);f.addEventListener("focus",g,!1);f.addEventListener("blur",b,!1)})()};
// Input 107
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("gui.Caret");runtime.loadClass("ops.EditInfo");runtime.loadClass("gui.EditInfoMarker");gui.SessionViewOptions=function(){this.caretBlinksOnRangeSelect=this.caretAvatarsInitiallyVisible=this.editInfoMarkersInitiallyVisible=!0};
gui.SessionView=function(){return function(e,k,d,n,q){function p(a,b,c){function d(b,c,e){c=b+'[editinfo|memberid="'+a+'"]'+e+c;a:{var f=t.firstChild;for(b=b+'[editinfo|memberid="'+a+'"]'+e+"{";f;){if(f.nodeType===Node.TEXT_NODE&&0===f.data.indexOf(b)){b=f;break a}f=f.nextSibling}b=null}b?b.data=c:t.appendChild(document.createTextNode(c))}d("div.editInfoMarker","{ background-color: "+c+"; }","");d("span.editInfoColor","{ background-color: "+c+"; }","");d("span.editInfoAuthor",'{ content: "'+b+'"; }',
":before");d("dc|creator","{ background-color: "+c+"; }","");d(".selectionOverlay","{ fill: "+c+"; stroke: "+c+";}","")}function l(a){var b,c;for(c in x)x.hasOwnProperty(c)&&(b=x[c],a?b.show():b.hide())}function m(a){n.getCarets().forEach(function(b){a?b.showHandle():b.hideHandle()})}function r(a){var b=a.getMemberId();a=a.getProperties();p(b,a.fullName,a.color);k===b&&p("","",a.color)}function c(a){var b=a.getMemberId(),c=d.getOdtDocument().getMember(b).getProperties();n.registerCursor(a,w,v);q.registerCursor(a,
!0);if(a=n.getCaret(b))a.setAvatarImageUrl(c.imageUrl),a.setColor(c.color);runtime.log("+++ View here +++ eagerly created an Caret for '"+b+"'! +++")}function g(a){a=a.getMemberId();var b=q.getSelectionView(k),c=q.getSelectionView(gui.ShadowCursor.ShadowCursorMemberId),d=n.getCaret(k);a===k?(c.hide(),b&&b.show(),d&&d.show()):a===gui.ShadowCursor.ShadowCursorMemberId&&(c.show(),b&&b.hide(),d&&d.hide())}function b(a){q.removeSelectionView(a)}function a(a){var b=a.paragraphElement,c=a.memberId;a=a.timeStamp;
var e,f="",g=b.getElementsByTagNameNS(u,"editinfo")[0];g?(f=g.getAttributeNS(u,"id"),e=x[f]):(f=Math.random().toString(),e=new ops.EditInfo(b,d.getOdtDocument()),e=new gui.EditInfoMarker(e,z),g=b.getElementsByTagNameNS(u,"editinfo")[0],g.setAttributeNS(u,"id",f),x[f]=e);e.addEdit(c,new Date(a))}function f(){A=!0}function h(){s=runtime.getWindow().setInterval(function(){A&&(q.rerenderSelectionViews(),A=!1)},200)}var t,u="urn:webodf:names:editinfo",x={},z=void 0!==e.editInfoMarkersInitiallyVisible?
Boolean(e.editInfoMarkersInitiallyVisible):!0,w=void 0!==e.caretAvatarsInitiallyVisible?Boolean(e.caretAvatarsInitiallyVisible):!0,v=void 0!==e.caretBlinksOnRangeSelect?Boolean(e.caretBlinksOnRangeSelect):!0,s,A=!1;this.showEditInfoMarkers=function(){z||(z=!0,l(z))};this.hideEditInfoMarkers=function(){z&&(z=!1,l(z))};this.showCaretAvatars=function(){w||(w=!0,m(w))};this.hideCaretAvatars=function(){w&&(w=!1,m(w))};this.getSession=function(){return d};this.getCaret=function(a){return n.getCaret(a)};
this.destroy=function(e){var h=d.getOdtDocument(),k=Object.keys(x).map(function(a){return x[a]});h.unsubscribe(ops.OdtDocument.signalMemberAdded,r);h.unsubscribe(ops.OdtDocument.signalMemberUpdated,r);h.unsubscribe(ops.OdtDocument.signalCursorAdded,c);h.unsubscribe(ops.OdtDocument.signalCursorRemoved,b);h.unsubscribe(ops.OdtDocument.signalParagraphChanged,a);h.unsubscribe(ops.OdtDocument.signalCursorMoved,g);h.unsubscribe(ops.OdtDocument.signalParagraphChanged,f);h.unsubscribe(ops.OdtDocument.signalTableAdded,
f);h.unsubscribe(ops.OdtDocument.signalParagraphStyleModified,f);runtime.getWindow().clearInterval(s);t.parentNode.removeChild(t);(function W(a,b){b?e(b):a<k.length?k[a].destroy(function(b){W(a+1,b)}):e()})(0,void 0)};(function(){var e=d.getOdtDocument(),k=document.getElementsByTagName("head")[0];e.subscribe(ops.OdtDocument.signalMemberAdded,r);e.subscribe(ops.OdtDocument.signalMemberUpdated,r);e.subscribe(ops.OdtDocument.signalCursorAdded,c);e.subscribe(ops.OdtDocument.signalCursorRemoved,b);e.subscribe(ops.OdtDocument.signalParagraphChanged,
a);e.subscribe(ops.OdtDocument.signalCursorMoved,g);h();e.subscribe(ops.OdtDocument.signalParagraphChanged,f);e.subscribe(ops.OdtDocument.signalTableAdded,f);e.subscribe(ops.OdtDocument.signalParagraphStyleModified,f);t=document.createElementNS(k.namespaceURI,"style");t.type="text/css";t.media="screen, print, handheld, projection";t.appendChild(document.createTextNode("@namespace editinfo url(urn:webodf:names:editinfo);"));t.appendChild(document.createTextNode("@namespace dc url(http://purl.org/dc/elements/1.1/);"));
k.appendChild(t)})()}}();
// Input 108
var webodf_css="@namespace draw url(urn:oasis:names:tc:opendocument:xmlns:drawing:1.0);\n@namespace fo url(urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0);\n@namespace office url(urn:oasis:names:tc:opendocument:xmlns:office:1.0);\n@namespace presentation url(urn:oasis:names:tc:opendocument:xmlns:presentation:1.0);\n@namespace style url(urn:oasis:names:tc:opendocument:xmlns:style:1.0);\n@namespace svg url(urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0);\n@namespace table url(urn:oasis:names:tc:opendocument:xmlns:table:1.0);\n@namespace text url(urn:oasis:names:tc:opendocument:xmlns:text:1.0);\n@namespace webodfhelper url(urn:webodf:names:helper);\n@namespace cursor url(urn:webodf:names:cursor);\n@namespace editinfo url(urn:webodf:names:editinfo);\n@namespace annotation url(urn:webodf:names:annotation);\n@namespace dc url(http://purl.org/dc/elements/1.1/);\n@namespace svgns url(http://www.w3.org/2000/svg);\n\noffice|document > *, office|document-content > * {\n  display: none;\n}\noffice|body, office|document {\n  display: inline-block;\n  position: relative;\n}\n\ntext|p, text|h {\n  display: block;\n  padding: 0;\n  margin: 0;\n  line-height: normal;\n  position: relative;\n  min-height: 1.3em; /* prevent empty paragraphs and headings from collapsing if they are empty */\n}\n*[webodfhelper|containsparagraphanchor] {\n  position: relative;\n}\ntext|s {\n    white-space: pre;\n}\ntext|tab {\n  display: inline;\n  white-space: pre;\n}\ntext|tracked-changes {\n  /*Consumers that do not support change tracking, should ignore changes.*/\n  display: none;\n}\noffice|binary-data {\n  display: none;\n}\noffice|text {\n  display: block;\n  text-align: left;\n  overflow: visible;\n  word-wrap: break-word;\n}\n\noffice|text::selection {\n  /** Let's not draw selection highlight that overflows into the office|text\n   * node when selecting content across several paragraphs\n   */\n  background: transparent;\n}\n\noffice|document *::selection {\n  background: transparent;\n}\noffice|document *::-moz-selection {\n  background: transparent;\n}\n\noffice|text * draw|text-box {\n/** only for text documents */\n    display: block;\n    border: 1px solid #d3d3d3;\n}\noffice|spreadsheet {\n  display: block;\n  border-collapse: collapse;\n  empty-cells: show;\n  font-family: sans-serif;\n  font-size: 10pt;\n  text-align: left;\n  page-break-inside: avoid;\n  overflow: hidden;\n}\noffice|presentation {\n  display: inline-block;\n  text-align: left;\n}\n#shadowContent {\n  display: inline-block;\n  text-align: left;\n}\ndraw|page {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\npresentation|notes, presentation|footer-decl, presentation|date-time-decl {\n    display: none;\n}\n@media print {\n  draw|page {\n    border: 1pt solid black;\n    page-break-inside: avoid;\n  }\n  presentation|notes {\n    /*TODO*/\n  }\n}\noffice|spreadsheet text|p {\n  border: 0px;\n  padding: 1px;\n  margin: 0px;\n}\noffice|spreadsheet table|table {\n  margin: 3px;\n}\noffice|spreadsheet table|table:after {\n  /* show sheet name the end of the sheet */\n  /*content: attr(table|name);*/ /* gives parsing error in opera */\n}\noffice|spreadsheet table|table-row {\n  counter-increment: row;\n}\noffice|spreadsheet table|table-row:before {\n  width: 3em;\n  background: #cccccc;\n  border: 1px solid black;\n  text-align: center;\n  content: counter(row);\n  display: table-cell;\n}\noffice|spreadsheet table|table-cell {\n  border: 1px solid #cccccc;\n}\ntable|table {\n  display: table;\n}\ndraw|frame table|table {\n  width: 100%;\n  height: 100%;\n  background: white;\n}\ntable|table-header-rows {\n  display: table-header-group;\n}\ntable|table-row {\n  display: table-row;\n}\ntable|table-column {\n  display: table-column;\n}\ntable|table-cell {\n  width: 0.889in;\n  display: table-cell;\n  word-break: break-all; /* prevent long words from extending out the table cell */\n}\ndraw|frame {\n  display: block;\n}\ndraw|image {\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  -moz-background-size: 100% 100%;\n}\n/* only show the first image in frame */\ndraw|frame > draw|image:nth-of-type(n+2) {\n  display: none;\n}\ntext|list:before {\n    display: none;\n    content:\"\";\n}\ntext|list {\n    counter-reset: list;\n}\ntext|list-item {\n    display: block;\n}\ntext|number {\n    display:none;\n}\n\ntext|a {\n    color: blue;\n    text-decoration: underline;\n    cursor: pointer;\n}\noffice|text[webodfhelper|links=\"inactive\"] text|a {\n    cursor: text;\n}\ntext|note-citation {\n    vertical-align: super;\n    font-size: smaller;\n}\ntext|note-body {\n    display: none;\n}\ntext|note:hover text|note-citation {\n    background: #dddddd;\n}\ntext|note:hover text|note-body {\n    display: block;\n    left:1em;\n    max-width: 80%;\n    position: absolute;\n    background: #ffffaa;\n}\nsvg|title, svg|desc {\n    display: none;\n}\nvideo {\n    width: 100%;\n    height: 100%\n}\n\n/* below set up the cursor */\ncursor|cursor {\n    display: inline;\n    width: 0;\n    height: 1em;\n    /* making the position relative enables the avatar to use\n       the cursor as reference for its absolute position */\n    position: relative;\n    z-index: 1;\n}\n\ncursor|cursor > .caret {\n    /* IMPORTANT: when changing these values ensure DEFAULT_CARET_TOP and DEFAULT_CARET_HEIGHT\n        in Caret.js remain in sync */\n    display: inline;\n    position: absolute;\n    top: 5%; /* push down the caret; 0px can do the job, 5% looks better, 10% is a bit over */\n    height: 1em;\n    border-left: 2px solid black;\n    outline: none;\n}\n\ncursor|cursor > .handle {\n    padding: 3px;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    border: none !important;\n    border-radius: 5px;\n    opacity: 0.3;\n}\n\ncursor|cursor > .handle > img {\n    border-radius: 5px;\n}\n\ncursor|cursor > .handle.active {\n    opacity: 0.8;\n}\n\ncursor|cursor > .handle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 43%;\n}\n\n/** Input Method Editor input pane & behaviours */\n/* not within a cursor */\n#eventTrap {\n    height: 1px;\n    margin: auto 0;\n    display: block;\n    position: absolute;\n    left: -10000px;\n    width: 1px;\n    outline: none;\n}\n\n/* within a cursor */\ncursor|cursor > #eventTrap {\n    display: inline-block;\n    position: static;\n    left: 0;\n    margin-right: -1px; /* Hide the content editable's own caret */\n    color: rgba(255, 255, 255, 0); /** additionally hide the blinking caret by setting the colour to fully transparent */\n    overflow: hidden; /* The overflow visibility is used to hide and show characters being entered */\n    height: 1px;\n    width: 1px; /* marginRight + width must equal 0 so chrome & FF don't think the element takes up space */\n}\n\ncursor|cursor[cursor|composing=\"true\"] > #eventTrap {\n    color: inherit; /* make colour non-transparent again to show the entered text */\n    overflow: visible; /* The overflow visibility is used to hide and show characters being entered */\n    height: auto;\n    width: auto;\n}\n\ncursor|cursor[cursor|composing=\"true\"] {\n    display: inline-block;\n    width: auto;\n    height: inherit;\n}\n\ncursor|cursor[cursor|composing=\"true\"] > .caret {\n    /* during composition, the caret should be pushed along by the composition text, inline with the text */\n    position: static;\n    /* as it is now part of an inline-block, it will no longer need correct to top or height values to align properly */\n    height: auto !important;\n    top: auto !important;\n}\n\n.editInfoMarker {\n    position: absolute;\n    width: 10px;\n    height: 100%;\n    left: -20px;\n    opacity: 0.8;\n    top: 0;\n    border-radius: 5px;\n    background-color: transparent;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n}\n.editInfoMarker:hover {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);\n}\n\n.editInfoHandle {\n    position: absolute;\n    background-color: black;\n    padding: 5px;\n    border-radius: 5px;\n    opacity: 0.8;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    bottom: 100%;\n    margin-bottom: 10px;\n    z-index: 3;\n    left: -25px;\n}\n.editInfoHandle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 5px;\n}\n.editInfo {\n    font-family: sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    color: white;\n    width: 100%;\n    height: 12pt;\n}\n.editInfoColor {\n    float: left;\n    width: 10pt;\n    height: 10pt;\n    border: 1px solid white;\n}\n.editInfoAuthor {\n    float: left;\n    margin-left: 5pt;\n    font-size: 10pt;\n    text-align: left;\n    height: 12pt;\n    line-height: 12pt;\n}\n.editInfoTime {\n    float: right;\n    margin-left: 30pt;\n    font-size: 8pt;\n    font-style: italic;\n    color: yellow;\n    height: 12pt;\n    line-height: 12pt;\n}\n\n.annotationWrapper {\n    display: inline;\n    position: relative;\n}\n\n.annotationRemoveButton:before {\n    content: '\u00d7';\n    color: white;\n    padding: 5px;\n    line-height: 1em;\n}\n\n.annotationRemoveButton {\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background-color: black;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    z-index: 3;\n    text-align: center;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: none;\n    font-size: 15px;\n}\n.annotationRemoveButton:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);\n}\n\n.annotationNote {\n    width: 4cm;\n    position: absolute;\n    display: inline;\n    z-index: 10;\n}\n.annotationNote > office|annotation {\n    display: block;\n    text-align: left;\n}\n\n.annotationConnector {\n    position: absolute;\n    display: inline;\n    z-index: 2;\n    border-top: 1px dashed brown;\n}\n.annotationConnector.angular {\n    -moz-transform-origin: left top;\n    -webkit-transform-origin: left top;\n    -ms-transform-origin: left top;\n    transform-origin: left top;\n}\n.annotationConnector.horizontal {\n    left: 0;\n}\n.annotationConnector.horizontal:before {\n    content: '';\n    display: inline;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: brown transparent transparent transparent;\n    top: -1px;\n    left: -5px;\n}\n\noffice|annotation {\n    width: 100%;\n    height: 100%;\n    display: none;\n    background: rgb(198, 238, 184);\n    background: -moz-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -webkit-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -o-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -ms-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: linear-gradient(180deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    box-shadow: 0 3px 4px -3px #ccc;\n}\n\noffice|annotation > dc|creator {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    color: white;\n    background-color: brown;\n    padding: 4px;\n}\noffice|annotation > dc|date {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    border: 4px solid transparent;\n}\noffice|annotation > text|list {\n    display: block;\n    padding: 5px;\n}\n\n/* This is very temporary CSS. This must go once\n * we start bundling webodf-default ODF styles for annotations.\n */\noffice|annotation text|p {\n    font-size: 10pt;\n    color: black;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    font-family: sans-serif;\n}\n\ndc|*::selection {\n    background: transparent;\n}\ndc|*::-moz-selection {\n    background: transparent;\n}\n\n#annotationsPane {\n    background-color: #EAEAEA;\n    width: 4cm;\n    height: 100%;\n    display: none;\n    position: absolute;\n    outline: 1px solid #ccc;\n}\n\n.annotationHighlight {\n    background-color: yellow;\n    position: relative;\n}\n\n.selectionOverlay {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 15;\n}\n.selectionOverlay > polygon {\n    fill-opacity: 0.3;\n    stroke-opacity: 0.8;\n    stroke-width: 1;\n    fill-rule: evenodd;\n}\n\n#imageSelector {\n    display: none;\n    position: absolute;\n    border-style: solid;\n    border-color: black;\n}\n\n#imageSelector > div {\n    width: 5px;\n    height: 5px;\n    display: block;\n    position: absolute;\n    border: 1px solid black;\n    background-color: #ffffff;\n}\n\n#imageSelector > .topLeft {\n    top: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topRight {\n    top: -4px;\n    right: -4px;\n}\n\n#imageSelector > .bottomRight {\n    right: -4px;\n    bottom: -4px;\n}\n\n#imageSelector > .bottomLeft {\n    bottom: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topMiddle {\n    top: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .rightMiddle {\n    top: 50%;\n    right: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n\n#imageSelector > .bottomMiddle {\n    bottom: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .leftMiddle {\n    top: 50%;\n    left: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n";
