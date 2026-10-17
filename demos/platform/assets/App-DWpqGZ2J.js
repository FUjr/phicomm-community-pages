import{o as Me,e as Ce,b as R,y as Bt,t as Oe,h as Ue,F as ft,z as mn,k as Le,f as He,A as tt,i as Ge,v as ot,g as Yt,r as Ne,B as os,C as Jn,d as Ke,c as Jt,D as bl,E as vl,G as ln,H as yl,p as ze,j as wl,I as _s,w as lr,a as Bo,J as kl,m as Lt,K as _l,L as xl,s as Sl,u as Tl,M as kn,N as ir,x as xs,O as Al,q as El,P as Ss}from"./index-CydZmQxB.js";import{d as qe,l as Il,a as Ts,r as Ml,c as As,t as Cl}from"./deviceProtocol-DNiAofik.js";import{_ as Xt,a as je,b as Pl}from"./ThemeToggle-BtYAxjEo.js";var as=Object.defineProperty,Ol=Object.getOwnPropertyDescriptor,Nl=Object.getOwnPropertyNames,Rl=Object.prototype.hasOwnProperty,it=(u,m)=>()=>(u&&(m=u(u=0)),m),ve=(u,m)=>()=>(m||u((m={exports:{}}).exports,m),m.exports),Zt=(u,m)=>{for(var l in m)as(u,l,{get:m[l],enumerable:!0})},Ul=(u,m,l,a)=>{if(m&&typeof m=="object"||typeof m=="function")for(let c of Nl(m))!Rl.call(u,c)&&c!==l&&as(u,c,{get:()=>m[c],enumerable:!(a=Ol(m,c))||a.enumerable});return u},Be=u=>Ul(as({},"__esModule",{value:!0}),u),he=it(()=>{}),Fe={};Zt(Fe,{_debugEnd:()=>Wr,_debugProcess:()=>Dr,_events:()=>ri,_eventsCount:()=>ii,_exiting:()=>Er,_fatalExceptions:()=>jr,_getActiveHandles:()=>Ko,_getActiveRequests:()=>$o,_kill:()=>Cr,_linkedBinding:()=>zo,_maxListeners:()=>ni,_preload_modules:()=>ei,_rawDebug:()=>Sr,_startProfilerIdleNotifier:()=>zr,_stopProfilerIdleNotifier:()=>Hr,_tickCallback:()=>Fr,abort:()=>Qr,addListener:()=>si,allowedNodeEnvironmentFlags:()=>Lr,arch:()=>dr,argv:()=>hr,argv0:()=>Zr,assert:()=>Vo,binding:()=>vr,browser:()=>xr,chdir:()=>kr,config:()=>Ir,cpuUsage:()=>cn,cwd:()=>wr,debugPort:()=>Xr,default:()=>cs,dlopen:()=>Ho,domain:()=>Ar,emit:()=>di,emitWarning:()=>br,env:()=>pr,execArgv:()=>fr,execPath:()=>Jr,exit:()=>Rr,features:()=>qr,hasUncaughtExceptionCaptureCallback:()=>Qo,hrtime:()=>Sn,kill:()=>Nr,listeners:()=>Yo,memoryUsage:()=>Or,moduleLoadList:()=>Tr,nextTick:()=>Do,off:()=>ai,on:()=>vt,once:()=>oi,openStdin:()=>Ur,pid:()=>Gr,platform:()=>ur,ppid:()=>Yr,prependListener:()=>ui,prependOnceListener:()=>pi,reallyExit:()=>Mr,release:()=>_r,removeAllListeners:()=>ci,removeListener:()=>li,resourceUsage:()=>Pr,setSourceMapsEnabled:()=>ti,setUncaughtExceptionCaptureCallback:()=>Br,stderr:()=>Kr,stdin:()=>Vr,stdout:()=>$r,title:()=>cr,umask:()=>yr,uptime:()=>Go,version:()=>mr,versions:()=>gr});function ls(u){throw new Error("Node.js process "+u+" is not supported by JSPM core outside of Node.js")}function Ll(){!Ft||!qt||(Ft=!1,qt.length?mt=qt.concat(mt):hn=-1,mt.length&&Fo())}function Fo(){if(!Ft){var u=setTimeout(Ll,0);Ft=!0;for(var m=mt.length;m;){for(qt=mt,mt=[];++hn<m;)qt&&qt[hn].run();hn=-1,m=mt.length}qt=null,Ft=!1,clearTimeout(u)}}function Do(u){var m=new Array(arguments.length-1);if(arguments.length>1)for(var l=1;l<arguments.length;l++)m[l-1]=arguments[l];mt.push(new Wo(u,m)),mt.length===1&&!Ft&&setTimeout(Fo,0)}function Wo(u,m){this.fun=u,this.array=m}function Je(){}function zo(u){ls("_linkedBinding")}function Ho(u){ls("dlopen")}function $o(){return[]}function Ko(){return[]}function Vo(u,m){if(!u)throw new Error(m||"assertion error")}function Qo(){return!1}function Go(){return wt.now()/1e3}function Sn(u){var m=Math.floor((Date.now()-wt.now())*.001),l=wt.now()*.001,a=Math.floor(l)+m,c=Math.floor(l%1*1e9);return u&&(a=a-u[0],c=c-u[1],c<0&&(a--,c+=Tn)),[a,c]}function vt(){return cs}function Yo(u){return[]}var mt,Ft,qt,hn,cr,dr,ur,pr,hr,fr,mr,gr,br,vr,yr,wr,kr,_r,xr,Sr,Tr,Ar,Er,Ir,Mr,Cr,cn,Pr,Or,Nr,Rr,Ur,Lr,qr,jr,Br,Fr,Dr,Wr,zr,Hr,$r,Kr,Vr,Qr,Gr,Yr,Jr,Xr,Zr,ei,ti,wt,sr,Tn,ni,ri,ii,si,oi,ai,li,ci,di,ui,pi,cs,ql=it(()=>{he(),me(),fe(),mt=[],Ft=!1,hn=-1,Wo.prototype.run=function(){this.fun.apply(null,this.array)},cr="browser",dr="x64",ur="browser",pr={PATH:"/usr/bin",LANG:typeof navigator<"u"?navigator.language+".UTF-8":void 0,PWD:"/",HOME:"/home",TMP:"/tmp"},hr=["/usr/bin/node"],fr=[],mr="v16.8.0",gr={},br=function(u,m){console.warn((m?m+": ":"")+u)},vr=function(u){ls("binding")},yr=function(u){return 0},wr=function(){return"/"},kr=function(u){},_r={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},xr=!0,Sr=Je,Tr=[],Ar={},Er=!1,Ir={},Mr=Je,Cr=Je,cn=function(){return{}},Pr=cn,Or=cn,Nr=Je,Rr=Je,Ur=Je,Lr={},qr={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},jr=Je,Br=Je,Fr=Je,Dr=Je,Wr=Je,zr=Je,Hr=Je,$r=void 0,Kr=void 0,Vr=void 0,Qr=Je,Gr=2,Yr=1,Jr="/bin/usr/node",Xr=9229,Zr="node",ei=[],ti=Je,wt={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},wt.now===void 0&&(sr=Date.now(),wt.timing&&wt.timing.navigationStart&&(sr=wt.timing.navigationStart),wt.now=()=>Date.now()-sr),Tn=1e9,Sn.bigint=function(u){var m=Sn(u);return typeof BigInt>"u"?m[0]*Tn+m[1]:BigInt(m[0]*Tn)+BigInt(m[1])},ni=10,ri={},ii=0,si=vt,oi=vt,ai=vt,li=vt,ci=vt,di=Je,ui=vt,pi=vt,cs={version:mr,versions:gr,arch:dr,platform:ur,browser:xr,release:_r,_rawDebug:Sr,moduleLoadList:Tr,binding:vr,_linkedBinding:zo,_events:ri,_eventsCount:ii,_maxListeners:ni,on:vt,addListener:si,once:oi,off:ai,removeListener:li,removeAllListeners:ci,emit:di,prependListener:ui,prependOnceListener:pi,listeners:Yo,domain:Ar,_exiting:Er,config:Ir,dlopen:Ho,uptime:Go,_getActiveRequests:$o,_getActiveHandles:Ko,reallyExit:Mr,_kill:Cr,cpuUsage:cn,resourceUsage:Pr,memoryUsage:Or,kill:Nr,exit:Rr,openStdin:Ur,allowedNodeEnvironmentFlags:Lr,assert:Vo,features:qr,_fatalExceptions:jr,setUncaughtExceptionCaptureCallback:Br,hasUncaughtExceptionCaptureCallback:Qo,emitWarning:br,nextTick:Do,_tickCallback:Fr,_debugProcess:Dr,_debugEnd:Wr,_startProfilerIdleNotifier:zr,_stopProfilerIdleNotifier:Hr,stdout:$r,stdin:Vr,stderr:Kr,abort:Qr,umask:yr,chdir:kr,cwd:wr,env:pr,title:cr,argv:hr,execArgv:fr,pid:Gr,ppid:Yr,execPath:Jr,debugPort:Xr,hrtime:Sn,argv0:Zr,_preload_modules:ei,setSourceMapsEnabled:ti}}),fe=it(()=>{ql()});function jl(){if(hi)return Vt;hi=!0,Vt.byteLength=r,Vt.toByteArray=i,Vt.fromByteArray=h;for(var u=[],m=[],l=typeof Uint8Array<"u"?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,n=a.length;c<n;++c)u[c]=a[c],m[a.charCodeAt(c)]=c;m[45]=62,m[95]=63;function t(b){var p=b.length;if(p%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=b.indexOf("=");o===-1&&(o=p);var v=o===p?0:4-o%4;return[o,v]}function r(b){var p=t(b),o=p[0],v=p[1];return(o+v)*3/4-v}function e(b,p,o){return(p+o)*3/4-o}function i(b){var p,o=t(b),v=o[0],w=o[1],g=new l(e(b,v,w)),k=0,_=w>0?v-4:v,y;for(y=0;y<_;y+=4)p=m[b.charCodeAt(y)]<<18|m[b.charCodeAt(y+1)]<<12|m[b.charCodeAt(y+2)]<<6|m[b.charCodeAt(y+3)],g[k++]=p>>16&255,g[k++]=p>>8&255,g[k++]=p&255;return w===2&&(p=m[b.charCodeAt(y)]<<2|m[b.charCodeAt(y+1)]>>4,g[k++]=p&255),w===1&&(p=m[b.charCodeAt(y)]<<10|m[b.charCodeAt(y+1)]<<4|m[b.charCodeAt(y+2)]>>2,g[k++]=p>>8&255,g[k++]=p&255),g}function s(b){return u[b>>18&63]+u[b>>12&63]+u[b>>6&63]+u[b&63]}function f(b,p,o){for(var v,w=[],g=p;g<o;g+=3)v=(b[g]<<16&16711680)+(b[g+1]<<8&65280)+(b[g+2]&255),w.push(s(v));return w.join("")}function h(b){for(var p,o=b.length,v=o%3,w=[],g=16383,k=0,_=o-v;k<_;k+=g)w.push(f(b,k,k+g>_?_:k+g));return v===1?(p=b[o-1],w.push(u[p>>2]+u[p<<4&63]+"==")):v===2&&(p=(b[o-2]<<8)+b[o-1],w.push(u[p>>10]+u[p>>4&63]+u[p<<2&63]+"=")),w.join("")}return Vt}function Bl(){return fi?dn:(fi=!0,dn.read=function(u,m,l,a,c){var n,t,r=c*8-a-1,e=(1<<r)-1,i=e>>1,s=-7,f=l?c-1:0,h=l?-1:1,b=u[m+f];for(f+=h,n=b&(1<<-s)-1,b>>=-s,s+=r;s>0;n=n*256+u[m+f],f+=h,s-=8);for(t=n&(1<<-s)-1,n>>=-s,s+=a;s>0;t=t*256+u[m+f],f+=h,s-=8);if(n===0)n=1-i;else{if(n===e)return t?NaN:(b?-1:1)*(1/0);t=t+Math.pow(2,a),n=n-i}return(b?-1:1)*t*Math.pow(2,n-a)},dn.write=function(u,m,l,a,c,n){var t,r,e,i=n*8-c-1,s=(1<<i)-1,f=s>>1,h=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=a?0:n-1,p=a?1:-1,o=m<0||m===0&&1/m<0?1:0;for(m=Math.abs(m),isNaN(m)||m===1/0?(r=isNaN(m)?1:0,t=s):(t=Math.floor(Math.log(m)/Math.LN2),m*(e=Math.pow(2,-t))<1&&(t--,e*=2),t+f>=1?m+=h/e:m+=h*Math.pow(2,1-f),m*e>=2&&(t++,e/=2),t+f>=s?(r=0,t=s):t+f>=1?(r=(m*e-1)*Math.pow(2,c),t=t+f):(r=m*Math.pow(2,f-1)*Math.pow(2,c),t=0));c>=8;u[l+b]=r&255,b+=p,r/=256,c-=8);for(t=t<<c|r,i+=c;i>0;u[l+b]=t&255,b+=p,t/=256,i-=8);u[l+b-p]|=o*128},dn)}function Fl(){if(mi)return Mt;mi=!0;let u=jl(),m=Bl(),l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Mt.Buffer=t,Mt.SlowBuffer=w,Mt.INSPECT_MAX_BYTES=50;let a=2147483647;Mt.kMaxLength=a,t.TYPED_ARRAY_SUPPORT=c(),!t.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function c(){try{let d=new Uint8Array(1),x={foo:function(){return 42}};return Object.setPrototypeOf(x,Uint8Array.prototype),Object.setPrototypeOf(d,x),d.foo()===42}catch{return!1}}Object.defineProperty(t.prototype,"parent",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.buffer}}),Object.defineProperty(t.prototype,"offset",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.byteOffset}});function n(d){if(d>a)throw new RangeError('The value "'+d+'" is invalid for option "size"');let x=new Uint8Array(d);return Object.setPrototypeOf(x,t.prototype),x}function t(d,x,A){if(typeof d=="number"){if(typeof x=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return s(d)}return r(d,x,A)}t.poolSize=8192;function r(d,x,A){if(typeof d=="string")return f(d,x);if(ArrayBuffer.isView(d))return b(d);if(d==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d);if(M(d,ArrayBuffer)||d&&M(d.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(M(d,SharedArrayBuffer)||d&&M(d.buffer,SharedArrayBuffer)))return p(d,x,A);if(typeof d=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let j=d.valueOf&&d.valueOf();if(j!=null&&j!==d)return t.from(j,x,A);let J=o(d);if(J)return J;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof d[Symbol.toPrimitive]=="function")return t.from(d[Symbol.toPrimitive]("string"),x,A);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d)}t.from=function(d,x,A){return r(d,x,A)},Object.setPrototypeOf(t.prototype,Uint8Array.prototype),Object.setPrototypeOf(t,Uint8Array);function e(d){if(typeof d!="number")throw new TypeError('"size" argument must be of type number');if(d<0)throw new RangeError('The value "'+d+'" is invalid for option "size"')}function i(d,x,A){return e(d),d<=0?n(d):x!==void 0?typeof A=="string"?n(d).fill(x,A):n(d).fill(x):n(d)}t.alloc=function(d,x,A){return i(d,x,A)};function s(d){return e(d),n(d<0?0:v(d)|0)}t.allocUnsafe=function(d){return s(d)},t.allocUnsafeSlow=function(d){return s(d)};function f(d,x){if((typeof x!="string"||x==="")&&(x="utf8"),!t.isEncoding(x))throw new TypeError("Unknown encoding: "+x);let A=g(d,x)|0,j=n(A),J=j.write(d,x);return J!==A&&(j=j.slice(0,J)),j}function h(d){let x=d.length<0?0:v(d.length)|0,A=n(x);for(let j=0;j<x;j+=1)A[j]=d[j]&255;return A}function b(d){if(M(d,Uint8Array)){let x=new Uint8Array(d);return p(x.buffer,x.byteOffset,x.byteLength)}return h(d)}function p(d,x,A){if(x<0||d.byteLength<x)throw new RangeError('"offset" is outside of buffer bounds');if(d.byteLength<x+(A||0))throw new RangeError('"length" is outside of buffer bounds');let j;return x===void 0&&A===void 0?j=new Uint8Array(d):A===void 0?j=new Uint8Array(d,x):j=new Uint8Array(d,x,A),Object.setPrototypeOf(j,t.prototype),j}function o(d){if(t.isBuffer(d)){let x=v(d.length)|0,A=n(x);return A.length===0||d.copy(A,0,0,x),A}if(d.length!==void 0)return typeof d.length!="number"||ce(d.length)?n(0):h(d);if(d.type==="Buffer"&&Array.isArray(d.data))return h(d.data)}function v(d){if(d>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return d|0}function w(d){return+d!=d&&(d=0),t.alloc(+d)}t.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==t.prototype},t.compare=function(d,x){if(M(d,Uint8Array)&&(d=t.from(d,d.offset,d.byteLength)),M(x,Uint8Array)&&(x=t.from(x,x.offset,x.byteLength)),!t.isBuffer(d)||!t.isBuffer(x))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===x)return 0;let A=d.length,j=x.length;for(let J=0,ue=Math.min(A,j);J<ue;++J)if(d[J]!==x[J]){A=d[J],j=x[J];break}return A<j?-1:j<A?1:0},t.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(d,x){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return t.alloc(0);let A;if(x===void 0)for(x=0,A=0;A<d.length;++A)x+=d[A].length;let j=t.allocUnsafe(x),J=0;for(A=0;A<d.length;++A){let ue=d[A];if(M(ue,Uint8Array))J+ue.length>j.length?(t.isBuffer(ue)||(ue=t.from(ue)),ue.copy(j,J)):Uint8Array.prototype.set.call(j,ue,J);else if(t.isBuffer(ue))ue.copy(j,J);else throw new TypeError('"list" argument must be an Array of Buffers');J+=ue.length}return j};function g(d,x){if(t.isBuffer(d))return d.length;if(ArrayBuffer.isView(d)||M(d,ArrayBuffer))return d.byteLength;if(typeof d!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof d);let A=d.length,j=arguments.length>2&&arguments[2]===!0;if(!j&&A===0)return 0;let J=!1;for(;;)switch(x){case"ascii":case"latin1":case"binary":return A;case"utf8":case"utf-8":return H(d).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A*2;case"hex":return A>>>1;case"base64":return be(d).length;default:if(J)return j?-1:H(d).length;x=(""+x).toLowerCase(),J=!0}}t.byteLength=g;function k(d,x,A){let j=!1;if((x===void 0||x<0)&&(x=0),x>this.length||((A===void 0||A>this.length)&&(A=this.length),A<=0)||(A>>>=0,x>>>=0,A<=x))return"";for(d||(d="utf8");;)switch(d){case"hex":return Q(this,x,A);case"utf8":case"utf-8":return z(this,x,A);case"ascii":return pe(this,x,A);case"latin1":case"binary":return V(this,x,A);case"base64":return I(this,x,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,x,A);default:if(j)throw new TypeError("Unknown encoding: "+d);d=(d+"").toLowerCase(),j=!0}}t.prototype._isBuffer=!0;function _(d,x,A){let j=d[x];d[x]=d[A],d[A]=j}t.prototype.swap16=function(){let d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let x=0;x<d;x+=2)_(this,x,x+1);return this},t.prototype.swap32=function(){let d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let x=0;x<d;x+=4)_(this,x,x+3),_(this,x+1,x+2);return this},t.prototype.swap64=function(){let d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let x=0;x<d;x+=8)_(this,x,x+7),_(this,x+1,x+6),_(this,x+2,x+5),_(this,x+3,x+4);return this},t.prototype.toString=function(){let d=this.length;return d===0?"":arguments.length===0?z(this,0,d):k.apply(this,arguments)},t.prototype.toLocaleString=t.prototype.toString,t.prototype.equals=function(d){if(!t.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:t.compare(this,d)===0},t.prototype.inspect=function(){let d="",x=Mt.INSPECT_MAX_BYTES;return d=this.toString("hex",0,x).replace(/(.{2})/g,"$1 ").trim(),this.length>x&&(d+=" ... "),"<Buffer "+d+">"},l&&(t.prototype[l]=t.prototype.inspect),t.prototype.compare=function(d,x,A,j,J){if(M(d,Uint8Array)&&(d=t.from(d,d.offset,d.byteLength)),!t.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(x===void 0&&(x=0),A===void 0&&(A=d?d.length:0),j===void 0&&(j=0),J===void 0&&(J=this.length),x<0||A>d.length||j<0||J>this.length)throw new RangeError("out of range index");if(j>=J&&x>=A)return 0;if(j>=J)return-1;if(x>=A)return 1;if(x>>>=0,A>>>=0,j>>>=0,J>>>=0,this===d)return 0;let ue=J-j,ke=A-x,G=Math.min(ue,ke),se=this.slice(j,J),Ae=d.slice(x,A);for(let Ie=0;Ie<G;++Ie)if(se[Ie]!==Ae[Ie]){ue=se[Ie],ke=Ae[Ie];break}return ue<ke?-1:ke<ue?1:0};function y(d,x,A,j,J){if(d.length===0)return-1;if(typeof A=="string"?(j=A,A=0):A>2147483647?A=2147483647:A<-2147483648&&(A=-2147483648),A=+A,ce(A)&&(A=J?0:d.length-1),A<0&&(A=d.length+A),A>=d.length){if(J)return-1;A=d.length-1}else if(A<0)if(J)A=0;else return-1;if(typeof x=="string"&&(x=t.from(x,j)),t.isBuffer(x))return x.length===0?-1:T(d,x,A,j,J);if(typeof x=="number")return x=x&255,typeof Uint8Array.prototype.indexOf=="function"?J?Uint8Array.prototype.indexOf.call(d,x,A):Uint8Array.prototype.lastIndexOf.call(d,x,A):T(d,[x],A,j,J);throw new TypeError("val must be string, number or Buffer")}function T(d,x,A,j,J){let ue=1,ke=d.length,G=x.length;if(j!==void 0&&(j=String(j).toLowerCase(),j==="ucs2"||j==="ucs-2"||j==="utf16le"||j==="utf-16le")){if(d.length<2||x.length<2)return-1;ue=2,ke/=2,G/=2,A/=2}function se(Ie,Pe){return ue===1?Ie[Pe]:Ie.readUInt16BE(Pe*ue)}let Ae;if(J){let Ie=-1;for(Ae=A;Ae<ke;Ae++)if(se(d,Ae)===se(x,Ie===-1?0:Ae-Ie)){if(Ie===-1&&(Ie=Ae),Ae-Ie+1===G)return Ie*ue}else Ie!==-1&&(Ae-=Ae-Ie),Ie=-1}else for(A+G>ke&&(A=ke-G),Ae=A;Ae>=0;Ae--){let Ie=!0;for(let Pe=0;Pe<G;Pe++)if(se(d,Ae+Pe)!==se(x,Pe)){Ie=!1;break}if(Ie)return Ae}return-1}t.prototype.includes=function(d,x,A){return this.indexOf(d,x,A)!==-1},t.prototype.indexOf=function(d,x,A){return y(this,d,x,A,!0)},t.prototype.lastIndexOf=function(d,x,A){return y(this,d,x,A,!1)};function S(d,x,A,j){A=Number(A)||0;let J=d.length-A;j?(j=Number(j),j>J&&(j=J)):j=J;let ue=x.length;j>ue/2&&(j=ue/2);let ke;for(ke=0;ke<j;++ke){let G=parseInt(x.substr(ke*2,2),16);if(ce(G))return ke;d[A+ke]=G}return ke}function E(d,x,A,j){return $(H(x,d.length-A),d,A,j)}function P(d,x,A,j){return $(ne(x),d,A,j)}function O(d,x,A,j){return $(be(x),d,A,j)}function B(d,x,A,j){return $(ge(x,d.length-A),d,A,j)}t.prototype.write=function(d,x,A,j){if(x===void 0)j="utf8",A=this.length,x=0;else if(A===void 0&&typeof x=="string")j=x,A=this.length,x=0;else if(isFinite(x))x=x>>>0,isFinite(A)?(A=A>>>0,j===void 0&&(j="utf8")):(j=A,A=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let J=this.length-x;if((A===void 0||A>J)&&(A=J),d.length>0&&(A<0||x<0)||x>this.length)throw new RangeError("Attempt to write outside buffer bounds");j||(j="utf8");let ue=!1;for(;;)switch(j){case"hex":return S(this,d,x,A);case"utf8":case"utf-8":return E(this,d,x,A);case"ascii":case"latin1":case"binary":return P(this,d,x,A);case"base64":return O(this,d,x,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,d,x,A);default:if(ue)throw new TypeError("Unknown encoding: "+j);j=(""+j).toLowerCase(),ue=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(d,x,A){return x===0&&A===d.length?u.fromByteArray(d):u.fromByteArray(d.slice(x,A))}function z(d,x,A){A=Math.min(d.length,A);let j=[],J=x;for(;J<A;){let ue=d[J],ke=null,G=ue>239?4:ue>223?3:ue>191?2:1;if(J+G<=A){let se,Ae,Ie,Pe;switch(G){case 1:ue<128&&(ke=ue);break;case 2:se=d[J+1],(se&192)===128&&(Pe=(ue&31)<<6|se&63,Pe>127&&(ke=Pe));break;case 3:se=d[J+1],Ae=d[J+2],(se&192)===128&&(Ae&192)===128&&(Pe=(ue&15)<<12|(se&63)<<6|Ae&63,Pe>2047&&(Pe<55296||Pe>57343)&&(ke=Pe));break;case 4:se=d[J+1],Ae=d[J+2],Ie=d[J+3],(se&192)===128&&(Ae&192)===128&&(Ie&192)===128&&(Pe=(ue&15)<<18|(se&63)<<12|(Ae&63)<<6|Ie&63,Pe>65535&&Pe<1114112&&(ke=Pe))}}ke===null?(ke=65533,G=1):ke>65535&&(ke-=65536,j.push(ke>>>10&1023|55296),ke=56320|ke&1023),j.push(ke),J+=G}return D(j)}let F=4096;function D(d){let x=d.length;if(x<=F)return String.fromCharCode.apply(String,d);let A="",j=0;for(;j<x;)A+=String.fromCharCode.apply(String,d.slice(j,j+=F));return A}function pe(d,x,A){let j="";A=Math.min(d.length,A);for(let J=x;J<A;++J)j+=String.fromCharCode(d[J]&127);return j}function V(d,x,A){let j="";A=Math.min(d.length,A);for(let J=x;J<A;++J)j+=String.fromCharCode(d[J]);return j}function Q(d,x,A){let j=d.length;(!x||x<0)&&(x=0),(!A||A<0||A>j)&&(A=j);let J="";for(let ue=x;ue<A;++ue)J+=le[d[ue]];return J}function ie(d,x,A){let j=d.slice(x,A),J="";for(let ue=0;ue<j.length-1;ue+=2)J+=String.fromCharCode(j[ue]+j[ue+1]*256);return J}t.prototype.slice=function(d,x){let A=this.length;d=~~d,x=x===void 0?A:~~x,d<0?(d+=A,d<0&&(d=0)):d>A&&(d=A),x<0?(x+=A,x<0&&(x=0)):x>A&&(x=A),x<d&&(x=d);let j=this.subarray(d,x);return Object.setPrototypeOf(j,t.prototype),j};function W(d,x,A){if(d%1!==0||d<0)throw new RangeError("offset is not uint");if(d+x>A)throw new RangeError("Trying to access beyond buffer length")}t.prototype.readUintLE=t.prototype.readUIntLE=function(d,x,A){d=d>>>0,x=x>>>0,A||W(d,x,this.length);let j=this[d],J=1,ue=0;for(;++ue<x&&(J*=256);)j+=this[d+ue]*J;return j},t.prototype.readUintBE=t.prototype.readUIntBE=function(d,x,A){d=d>>>0,x=x>>>0,A||W(d,x,this.length);let j=this[d+--x],J=1;for(;x>0&&(J*=256);)j+=this[d+--x]*J;return j},t.prototype.readUint8=t.prototype.readUInt8=function(d,x){return d=d>>>0,x||W(d,1,this.length),this[d]},t.prototype.readUint16LE=t.prototype.readUInt16LE=function(d,x){return d=d>>>0,x||W(d,2,this.length),this[d]|this[d+1]<<8},t.prototype.readUint16BE=t.prototype.readUInt16BE=function(d,x){return d=d>>>0,x||W(d,2,this.length),this[d]<<8|this[d+1]},t.prototype.readUint32LE=t.prototype.readUInt32LE=function(d,x){return d=d>>>0,x||W(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},t.prototype.readUint32BE=t.prototype.readUInt32BE=function(d,x){return d=d>>>0,x||W(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},t.prototype.readBigUInt64LE=ae(function(d){d=d>>>0,ee(d,"offset");let x=this[d],A=this[d+7];(x===void 0||A===void 0)&&ye(d,this.length-8);let j=x+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24,J=this[++d]+this[++d]*2**8+this[++d]*2**16+A*2**24;return BigInt(j)+(BigInt(J)<<BigInt(32))}),t.prototype.readBigUInt64BE=ae(function(d){d=d>>>0,ee(d,"offset");let x=this[d],A=this[d+7];(x===void 0||A===void 0)&&ye(d,this.length-8);let j=x*2**24+this[++d]*2**16+this[++d]*2**8+this[++d],J=this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+A;return(BigInt(j)<<BigInt(32))+BigInt(J)}),t.prototype.readIntLE=function(d,x,A){d=d>>>0,x=x>>>0,A||W(d,x,this.length);let j=this[d],J=1,ue=0;for(;++ue<x&&(J*=256);)j+=this[d+ue]*J;return J*=128,j>=J&&(j-=Math.pow(2,8*x)),j},t.prototype.readIntBE=function(d,x,A){d=d>>>0,x=x>>>0,A||W(d,x,this.length);let j=x,J=1,ue=this[d+--j];for(;j>0&&(J*=256);)ue+=this[d+--j]*J;return J*=128,ue>=J&&(ue-=Math.pow(2,8*x)),ue},t.prototype.readInt8=function(d,x){return d=d>>>0,x||W(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},t.prototype.readInt16LE=function(d,x){d=d>>>0,x||W(d,2,this.length);let A=this[d]|this[d+1]<<8;return A&32768?A|4294901760:A},t.prototype.readInt16BE=function(d,x){d=d>>>0,x||W(d,2,this.length);let A=this[d+1]|this[d]<<8;return A&32768?A|4294901760:A},t.prototype.readInt32LE=function(d,x){return d=d>>>0,x||W(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},t.prototype.readInt32BE=function(d,x){return d=d>>>0,x||W(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},t.prototype.readBigInt64LE=ae(function(d){d=d>>>0,ee(d,"offset");let x=this[d],A=this[d+7];(x===void 0||A===void 0)&&ye(d,this.length-8);let j=this[d+4]+this[d+5]*2**8+this[d+6]*2**16+(A<<24);return(BigInt(j)<<BigInt(32))+BigInt(x+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24)}),t.prototype.readBigInt64BE=ae(function(d){d=d>>>0,ee(d,"offset");let x=this[d],A=this[d+7];(x===void 0||A===void 0)&&ye(d,this.length-8);let j=(x<<24)+this[++d]*2**16+this[++d]*2**8+this[++d];return(BigInt(j)<<BigInt(32))+BigInt(this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+A)}),t.prototype.readFloatLE=function(d,x){return d=d>>>0,x||W(d,4,this.length),m.read(this,d,!0,23,4)},t.prototype.readFloatBE=function(d,x){return d=d>>>0,x||W(d,4,this.length),m.read(this,d,!1,23,4)},t.prototype.readDoubleLE=function(d,x){return d=d>>>0,x||W(d,8,this.length),m.read(this,d,!0,52,8)},t.prototype.readDoubleBE=function(d,x){return d=d>>>0,x||W(d,8,this.length),m.read(this,d,!1,52,8)};function te(d,x,A,j,J,ue){if(!t.isBuffer(d))throw new TypeError('"buffer" argument must be a Buffer instance');if(x>J||x<ue)throw new RangeError('"value" argument is out of bounds');if(A+j>d.length)throw new RangeError("Index out of range")}t.prototype.writeUintLE=t.prototype.writeUIntLE=function(d,x,A,j){if(d=+d,x=x>>>0,A=A>>>0,!j){let ke=Math.pow(2,8*A)-1;te(this,d,x,A,ke,0)}let J=1,ue=0;for(this[x]=d&255;++ue<A&&(J*=256);)this[x+ue]=d/J&255;return x+A},t.prototype.writeUintBE=t.prototype.writeUIntBE=function(d,x,A,j){if(d=+d,x=x>>>0,A=A>>>0,!j){let ke=Math.pow(2,8*A)-1;te(this,d,x,A,ke,0)}let J=A-1,ue=1;for(this[x+J]=d&255;--J>=0&&(ue*=256);)this[x+J]=d/ue&255;return x+A},t.prototype.writeUint8=t.prototype.writeUInt8=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,1,255,0),this[x]=d&255,x+1},t.prototype.writeUint16LE=t.prototype.writeUInt16LE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,2,65535,0),this[x]=d&255,this[x+1]=d>>>8,x+2},t.prototype.writeUint16BE=t.prototype.writeUInt16BE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,2,65535,0),this[x]=d>>>8,this[x+1]=d&255,x+2},t.prototype.writeUint32LE=t.prototype.writeUInt32LE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,4,4294967295,0),this[x+3]=d>>>24,this[x+2]=d>>>16,this[x+1]=d>>>8,this[x]=d&255,x+4},t.prototype.writeUint32BE=t.prototype.writeUInt32BE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,4,4294967295,0),this[x]=d>>>24,this[x+1]=d>>>16,this[x+2]=d>>>8,this[x+3]=d&255,x+4};function N(d,x,A,j,J){Y(x,j,J,d,A,7);let ue=Number(x&BigInt(4294967295));d[A++]=ue,ue=ue>>8,d[A++]=ue,ue=ue>>8,d[A++]=ue,ue=ue>>8,d[A++]=ue;let ke=Number(x>>BigInt(32)&BigInt(4294967295));return d[A++]=ke,ke=ke>>8,d[A++]=ke,ke=ke>>8,d[A++]=ke,ke=ke>>8,d[A++]=ke,A}function Z(d,x,A,j,J){Y(x,j,J,d,A,7);let ue=Number(x&BigInt(4294967295));d[A+7]=ue,ue=ue>>8,d[A+6]=ue,ue=ue>>8,d[A+5]=ue,ue=ue>>8,d[A+4]=ue;let ke=Number(x>>BigInt(32)&BigInt(4294967295));return d[A+3]=ke,ke=ke>>8,d[A+2]=ke,ke=ke>>8,d[A+1]=ke,ke=ke>>8,d[A]=ke,A+8}t.prototype.writeBigUInt64LE=ae(function(d,x=0){return N(this,d,x,BigInt(0),BigInt("0xffffffffffffffff"))}),t.prototype.writeBigUInt64BE=ae(function(d,x=0){return Z(this,d,x,BigInt(0),BigInt("0xffffffffffffffff"))}),t.prototype.writeIntLE=function(d,x,A,j){if(d=+d,x=x>>>0,!j){let G=Math.pow(2,8*A-1);te(this,d,x,A,G-1,-G)}let J=0,ue=1,ke=0;for(this[x]=d&255;++J<A&&(ue*=256);)d<0&&ke===0&&this[x+J-1]!==0&&(ke=1),this[x+J]=(d/ue>>0)-ke&255;return x+A},t.prototype.writeIntBE=function(d,x,A,j){if(d=+d,x=x>>>0,!j){let G=Math.pow(2,8*A-1);te(this,d,x,A,G-1,-G)}let J=A-1,ue=1,ke=0;for(this[x+J]=d&255;--J>=0&&(ue*=256);)d<0&&ke===0&&this[x+J+1]!==0&&(ke=1),this[x+J]=(d/ue>>0)-ke&255;return x+A},t.prototype.writeInt8=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,1,127,-128),d<0&&(d=255+d+1),this[x]=d&255,x+1},t.prototype.writeInt16LE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,2,32767,-32768),this[x]=d&255,this[x+1]=d>>>8,x+2},t.prototype.writeInt16BE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,2,32767,-32768),this[x]=d>>>8,this[x+1]=d&255,x+2},t.prototype.writeInt32LE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,4,2147483647,-2147483648),this[x]=d&255,this[x+1]=d>>>8,this[x+2]=d>>>16,this[x+3]=d>>>24,x+4},t.prototype.writeInt32BE=function(d,x,A){return d=+d,x=x>>>0,A||te(this,d,x,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[x]=d>>>24,this[x+1]=d>>>16,this[x+2]=d>>>8,this[x+3]=d&255,x+4},t.prototype.writeBigInt64LE=ae(function(d,x=0){return N(this,d,x,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),t.prototype.writeBigInt64BE=ae(function(d,x=0){return Z(this,d,x,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function we(d,x,A,j,J,ue){if(A+j>d.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("Index out of range")}function re(d,x,A,j,J){return x=+x,A=A>>>0,J||we(d,x,A,4),m.write(d,x,A,j,23,4),A+4}t.prototype.writeFloatLE=function(d,x,A){return re(this,d,x,!0,A)},t.prototype.writeFloatBE=function(d,x,A){return re(this,d,x,!1,A)};function _e(d,x,A,j,J){return x=+x,A=A>>>0,J||we(d,x,A,8),m.write(d,x,A,j,52,8),A+8}t.prototype.writeDoubleLE=function(d,x,A){return _e(this,d,x,!0,A)},t.prototype.writeDoubleBE=function(d,x,A){return _e(this,d,x,!1,A)},t.prototype.copy=function(d,x,A,j){if(!t.isBuffer(d))throw new TypeError("argument should be a Buffer");if(A||(A=0),!j&&j!==0&&(j=this.length),x>=d.length&&(x=d.length),x||(x=0),j>0&&j<A&&(j=A),j===A||d.length===0||this.length===0)return 0;if(x<0)throw new RangeError("targetStart out of bounds");if(A<0||A>=this.length)throw new RangeError("Index out of range");if(j<0)throw new RangeError("sourceEnd out of bounds");j>this.length&&(j=this.length),d.length-x<j-A&&(j=d.length-x+A);let J=j-A;return this===d&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(x,A,j):Uint8Array.prototype.set.call(d,this.subarray(A,j),x),J},t.prototype.fill=function(d,x,A,j){if(typeof d=="string"){if(typeof x=="string"?(j=x,x=0,A=this.length):typeof A=="string"&&(j=A,A=this.length),j!==void 0&&typeof j!="string")throw new TypeError("encoding must be a string");if(typeof j=="string"&&!t.isEncoding(j))throw new TypeError("Unknown encoding: "+j);if(d.length===1){let ue=d.charCodeAt(0);(j==="utf8"&&ue<128||j==="latin1")&&(d=ue)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(x<0||this.length<x||this.length<A)throw new RangeError("Out of range index");if(A<=x)return this;x=x>>>0,A=A===void 0?this.length:A>>>0,d||(d=0);let J;if(typeof d=="number")for(J=x;J<A;++J)this[J]=d;else{let ue=t.isBuffer(d)?d:t.from(d,j),ke=ue.length;if(ke===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(J=0;J<A-x;++J)this[J+x]=ue[J%ke]}return this};let X={};function L(d,x,A){X[d]=class extends A{constructor(){super(),Object.defineProperty(this,"message",{value:x.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${d}]`,this.stack,delete this.name}get code(){return d}set code(j){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:j,writable:!0})}toString(){return`${this.name} [${d}]: ${this.message}`}}}L("ERR_BUFFER_OUT_OF_BOUNDS",function(d){return d?`${d} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),L("ERR_INVALID_ARG_TYPE",function(d,x){return`The "${d}" argument must be of type number. Received type ${typeof x}`},TypeError),L("ERR_OUT_OF_RANGE",function(d,x,A){let j=`The value of "${d}" is out of range.`,J=A;return Number.isInteger(A)&&Math.abs(A)>2**32?J=oe(String(A)):typeof A=="bigint"&&(J=String(A),(A>BigInt(2)**BigInt(32)||A<-(BigInt(2)**BigInt(32)))&&(J=oe(J)),J+="n"),j+=` It must be ${x}. Received ${J}`,j},RangeError);function oe(d){let x="",A=d.length,j=d[0]==="-"?1:0;for(;A>=j+4;A-=3)x=`_${d.slice(A-3,A)}${x}`;return`${d.slice(0,A)}${x}`}function K(d,x,A){ee(x,"offset"),(d[x]===void 0||d[x+A]===void 0)&&ye(x,d.length-(A+1))}function Y(d,x,A,j,J,ue){if(d>A||d<x){let ke=typeof x=="bigint"?"n":"",G;throw x===0||x===BigInt(0)?G=`>= 0${ke} and < 2${ke} ** ${(ue+1)*8}${ke}`:G=`>= -(2${ke} ** ${(ue+1)*8-1}${ke}) and < 2 ** ${(ue+1)*8-1}${ke}`,new X.ERR_OUT_OF_RANGE("value",G,d)}K(j,J,ue)}function ee(d,x){if(typeof d!="number")throw new X.ERR_INVALID_ARG_TYPE(x,"number",d)}function ye(d,x,A){throw Math.floor(d)!==d?(ee(d,A),new X.ERR_OUT_OF_RANGE("offset","an integer",d)):x<0?new X.ERR_BUFFER_OUT_OF_BOUNDS:new X.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${x}`,d)}let de=/[^+/0-9A-Za-z-_]/g;function U(d){if(d=d.split("=")[0],d=d.trim().replace(de,""),d.length<2)return"";for(;d.length%4!==0;)d=d+"=";return d}function H(d,x){x=x||1/0;let A,j=d.length,J=null,ue=[];for(let ke=0;ke<j;++ke){if(A=d.charCodeAt(ke),A>55295&&A<57344){if(!J){if(A>56319){(x-=3)>-1&&ue.push(239,191,189);continue}else if(ke+1===j){(x-=3)>-1&&ue.push(239,191,189);continue}J=A;continue}if(A<56320){(x-=3)>-1&&ue.push(239,191,189),J=A;continue}A=(J-55296<<10|A-56320)+65536}else J&&(x-=3)>-1&&ue.push(239,191,189);if(J=null,A<128){if((x-=1)<0)break;ue.push(A)}else if(A<2048){if((x-=2)<0)break;ue.push(A>>6|192,A&63|128)}else if(A<65536){if((x-=3)<0)break;ue.push(A>>12|224,A>>6&63|128,A&63|128)}else if(A<1114112){if((x-=4)<0)break;ue.push(A>>18|240,A>>12&63|128,A>>6&63|128,A&63|128)}else throw new Error("Invalid code point")}return ue}function ne(d){let x=[];for(let A=0;A<d.length;++A)x.push(d.charCodeAt(A)&255);return x}function ge(d,x){let A,j,J,ue=[];for(let ke=0;ke<d.length&&!((x-=2)<0);++ke)A=d.charCodeAt(ke),j=A>>8,J=A%256,ue.push(J),ue.push(j);return ue}function be(d){return u.toByteArray(U(d))}function $(d,x,A,j){let J;for(J=0;J<j&&!(J+A>=x.length||J>=d.length);++J)x[J+A]=d[J];return J}function M(d,x){return d instanceof x||d!=null&&d.constructor!=null&&d.constructor.name!=null&&d.constructor.name===x.name}function ce(d){return d!==d}let le=(function(){let d="0123456789abcdef",x=new Array(256);for(let A=0;A<16;++A){let j=A*16;for(let J=0;J<16;++J)x[j+J]=d[A]+d[J]}return x})();function ae(d){return typeof BigInt>"u"?Ee:d}function Ee(){throw new Error("BigInt not supported")}return Mt}var Vt,hi,dn,fi,Mt,mi,Dl=it(()=>{he(),me(),fe(),Vt={},hi=!1,dn={},fi=!1,Mt={},mi=!1}),Ve={};Zt(Ve,{Buffer:()=>Gn,INSPECT_MAX_BYTES:()=>Jo,default:()=>yt,kMaxLength:()=>Xo});var yt,Gn,Jo,Xo,Qe=it(()=>{he(),me(),fe(),Dl(),yt=Fl(),yt.Buffer,yt.SlowBuffer,yt.INSPECT_MAX_BYTES,yt.kMaxLength,Gn=yt.Buffer,Jo=yt.INSPECT_MAX_BYTES,Xo=yt.kMaxLength}),me=it(()=>{Qe()}),We=ve((u,m)=>{he(),me(),fe();var l=class extends Error{constructor(a){if(!Array.isArray(a))throw new TypeError(`Expected input to be an Array, got ${typeof a}`);let c="";for(let n=0;n<a.length;n++)c+=`    ${a[n].stack}
`;super(c),this.name="AggregateError",this.errors=a}};m.exports={AggregateError:l,ArrayIsArray(a){return Array.isArray(a)},ArrayPrototypeIncludes(a,c){return a.includes(c)},ArrayPrototypeIndexOf(a,c){return a.indexOf(c)},ArrayPrototypeJoin(a,c){return a.join(c)},ArrayPrototypeMap(a,c){return a.map(c)},ArrayPrototypePop(a,c){return a.pop(c)},ArrayPrototypePush(a,c){return a.push(c)},ArrayPrototypeSlice(a,c,n){return a.slice(c,n)},Error,FunctionPrototypeCall(a,c,...n){return a.call(c,...n)},FunctionPrototypeSymbolHasInstance(a,c){return Function.prototype[Symbol.hasInstance].call(a,c)},MathFloor:Math.floor,Number,NumberIsInteger:Number.isInteger,NumberIsNaN:Number.isNaN,NumberMAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER,NumberMIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER,NumberParseInt:Number.parseInt,ObjectDefineProperties(a,c){return Object.defineProperties(a,c)},ObjectDefineProperty(a,c,n){return Object.defineProperty(a,c,n)},ObjectGetOwnPropertyDescriptor(a,c){return Object.getOwnPropertyDescriptor(a,c)},ObjectKeys(a){return Object.keys(a)},ObjectSetPrototypeOf(a,c){return Object.setPrototypeOf(a,c)},Promise,PromisePrototypeCatch(a,c){return a.catch(c)},PromisePrototypeThen(a,c,n){return a.then(c,n)},PromiseReject(a){return Promise.reject(a)},PromiseResolve(a){return Promise.resolve(a)},ReflectApply:Reflect.apply,RegExpPrototypeTest(a,c){return a.test(c)},SafeSet:Set,String,StringPrototypeSlice(a,c,n){return a.slice(c,n)},StringPrototypeToLowerCase(a){return a.toLowerCase()},StringPrototypeToUpperCase(a){return a.toUpperCase()},StringPrototypeTrim(a){return a.trim()},Symbol,SymbolFor:Symbol.for,SymbolAsyncIterator:Symbol.asyncIterator,SymbolHasInstance:Symbol.hasInstance,SymbolIterator:Symbol.iterator,SymbolDispose:Symbol.dispose||Symbol("Symbol.dispose"),SymbolAsyncDispose:Symbol.asyncDispose||Symbol("Symbol.asyncDispose"),TypedArrayPrototypeSet(a,c,n){return a.set(c,n)},Boolean,Uint8Array}}),Zo=ve((u,m)=>{he(),me(),fe(),m.exports={format(l,...a){return l.replace(/%([sdifj])/g,function(...[c,n]){let t=a.shift();return n==="f"?t.toFixed(6):n==="j"?JSON.stringify(t):n==="s"&&typeof t=="object"?`${t.constructor!==Object?t.constructor.name:""} {}`.trim():t.toString()})},inspect(l){switch(typeof l){case"string":if(l.includes("'"))if(l.includes('"')){if(!l.includes("`")&&!l.includes("${"))return`\`${l}\``}else return`"${l}"`;return`'${l}'`;case"number":return isNaN(l)?"NaN":Object.is(l,-0)?String(l):l;case"bigint":return`${String(l)}n`;case"boolean":case"undefined":return String(l);case"object":return"{}"}}}}),nt=ve((u,m)=>{he(),me(),fe();var{format:l,inspect:a}=Zo(),{AggregateError:c}=We(),n=globalThis.AggregateError||c,t=Symbol("kIsNodeError"),r=["string","function","number","object","Function","Object","boolean","bigint","symbol"],e=/^([A-Z][a-z0-9]*)+$/,i="__node_internal_",s={};function f(g,k){if(!g)throw new s.ERR_INTERNAL_ASSERTION(k)}function h(g){let k="",_=g.length,y=g[0]==="-"?1:0;for(;_>=y+4;_-=3)k=`_${g.slice(_-3,_)}${k}`;return`${g.slice(0,_)}${k}`}function b(g,k,_){if(typeof k=="function")return f(k.length<=_.length,`Code: ${g}; The provided arguments length (${_.length}) does not match the required ones (${k.length}).`),k(..._);let y=(k.match(/%[dfijoOs]/g)||[]).length;return f(y===_.length,`Code: ${g}; The provided arguments length (${_.length}) does not match the required ones (${y}).`),_.length===0?k:l(k,..._)}function p(g,k,_){_||(_=Error);class y extends _{constructor(...S){super(b(g,k,S))}toString(){return`${this.name} [${g}]: ${this.message}`}}Object.defineProperties(y.prototype,{name:{value:_.name,writable:!0,enumerable:!1,configurable:!0},toString:{value(){return`${this.name} [${g}]: ${this.message}`},writable:!0,enumerable:!1,configurable:!0}}),y.prototype.code=g,y.prototype[t]=!0,s[g]=y}function o(g){let k=i+g.name;return Object.defineProperty(g,"name",{value:k}),g}function v(g,k){if(g&&k&&g!==k){if(Array.isArray(k.errors))return k.errors.push(g),k;let _=new n([k,g],k.message);return _.code=k.code,_}return g||k}var w=class extends Error{constructor(g="The operation was aborted",k=void 0){if(k!==void 0&&typeof k!="object")throw new s.ERR_INVALID_ARG_TYPE("options","Object",k);super(g,k),this.code="ABORT_ERR",this.name="AbortError"}};p("ERR_ASSERTION","%s",Error),p("ERR_INVALID_ARG_TYPE",(g,k,_)=>{f(typeof g=="string","'name' must be a string"),Array.isArray(k)||(k=[k]);let y="The ";g.endsWith(" argument")?y+=`${g} `:y+=`"${g}" ${g.includes(".")?"property":"argument"} `,y+="must be ";let T=[],S=[],E=[];for(let O of k)f(typeof O=="string","All expected entries have to be of type string"),r.includes(O)?T.push(O.toLowerCase()):e.test(O)?S.push(O):(f(O!=="object",'The value "object" should be written as "Object"'),E.push(O));if(S.length>0){let O=T.indexOf("object");O!==-1&&(T.splice(T,O,1),S.push("Object"))}if(T.length>0){switch(T.length){case 1:y+=`of type ${T[0]}`;break;case 2:y+=`one of type ${T[0]} or ${T[1]}`;break;default:{let O=T.pop();y+=`one of type ${T.join(", ")}, or ${O}`}}(S.length>0||E.length>0)&&(y+=" or ")}if(S.length>0){switch(S.length){case 1:y+=`an instance of ${S[0]}`;break;case 2:y+=`an instance of ${S[0]} or ${S[1]}`;break;default:{let O=S.pop();y+=`an instance of ${S.join(", ")}, or ${O}`}}E.length>0&&(y+=" or ")}switch(E.length){case 0:break;case 1:E[0].toLowerCase()!==E[0]&&(y+="an "),y+=`${E[0]}`;break;case 2:y+=`one of ${E[0]} or ${E[1]}`;break;default:{let O=E.pop();y+=`one of ${E.join(", ")}, or ${O}`}}if(_==null)y+=`. Received ${_}`;else if(typeof _=="function"&&_.name)y+=`. Received function ${_.name}`;else if(typeof _=="object"){var P;if((P=_.constructor)!==null&&P!==void 0&&P.name)y+=`. Received an instance of ${_.constructor.name}`;else{let O=a(_,{depth:-1});y+=`. Received ${O}`}}else{let O=a(_,{colors:!1});O.length>25&&(O=`${O.slice(0,25)}...`),y+=`. Received type ${typeof _} (${O})`}return y},TypeError),p("ERR_INVALID_ARG_VALUE",(g,k,_="is invalid")=>{let y=a(k);return y.length>128&&(y=y.slice(0,128)+"..."),`The ${g.includes(".")?"property":"argument"} '${g}' ${_}. Received ${y}`},TypeError),p("ERR_INVALID_RETURN_VALUE",(g,k,_)=>{var y;let T=_!=null&&(y=_.constructor)!==null&&y!==void 0&&y.name?`instance of ${_.constructor.name}`:`type ${typeof _}`;return`Expected ${g} to be returned from the "${k}" function but got ${T}.`},TypeError),p("ERR_MISSING_ARGS",(...g)=>{f(g.length>0,"At least one arg needs to be specified");let k,_=g.length;switch(g=(Array.isArray(g)?g:[g]).map(y=>`"${y}"`).join(" or "),_){case 1:k+=`The ${g[0]} argument`;break;case 2:k+=`The ${g[0]} and ${g[1]} arguments`;break;default:{let y=g.pop();k+=`The ${g.join(", ")}, and ${y} arguments`}break}return`${k} must be specified`},TypeError),p("ERR_OUT_OF_RANGE",(g,k,_)=>{f(k,'Missing "range" argument');let y;if(Number.isInteger(_)&&Math.abs(_)>2**32)y=h(String(_));else if(typeof _=="bigint"){y=String(_);let T=BigInt(2)**BigInt(32);(_>T||_<-T)&&(y=h(y)),y+="n"}else y=a(_);return`The value of "${g}" is out of range. It must be ${k}. Received ${y}`},RangeError),p("ERR_MULTIPLE_CALLBACK","Callback called multiple times",Error),p("ERR_METHOD_NOT_IMPLEMENTED","The %s method is not implemented",Error),p("ERR_STREAM_ALREADY_FINISHED","Cannot call %s after a stream was finished",Error),p("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable",Error),p("ERR_STREAM_DESTROYED","Cannot call %s after a stream was destroyed",Error),p("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),p("ERR_STREAM_PREMATURE_CLOSE","Premature close",Error),p("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF",Error),p("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event",Error),p("ERR_STREAM_WRITE_AFTER_END","write after end",Error),p("ERR_UNKNOWN_ENCODING","Unknown encoding: %s",TypeError),m.exports={AbortError:w,aggregateTwoErrors:o(v),hideStackFrames:o,codes:s}}),gn=ve((u,m)=>{he(),me(),fe();var{AbortController:l,AbortSignal:a}=typeof self<"u"?self:typeof window<"u"?window:void 0;m.exports=l,m.exports.AbortSignal=a,m.exports.default=l}),Ot={};Zt(Ot,{EventEmitter:()=>ea,default:()=>Qt,defaultMaxListeners:()=>ta,init:()=>na,listenerCount:()=>ra,on:()=>ia,once:()=>sa});function Wl(){if(gi)return un;gi=!0;var u=typeof Reflect=="object"?Reflect:null,m=u&&typeof u.apply=="function"?u.apply:function(_,y,T){return Function.prototype.apply.call(_,y,T)},l;u&&typeof u.ownKeys=="function"?l=u.ownKeys:Object.getOwnPropertySymbols?l=function(_){return Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_))}:l=function(_){return Object.getOwnPropertyNames(_)};function a(_){console&&console.warn&&console.warn(_)}var c=Number.isNaN||function(_){return _!==_};function n(){n.init.call(this)}un=n,un.once=w,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._eventsCount=0,n.prototype._maxListeners=void 0;var t=10;function r(_){if(typeof _!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof _)}Object.defineProperty(n,"defaultMaxListeners",{enumerable:!0,get:function(){return t},set:function(_){if(typeof _!="number"||_<0||c(_))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+_+".");t=_}}),n.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},n.prototype.setMaxListeners=function(_){if(typeof _!="number"||_<0||c(_))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+_+".");return this._maxListeners=_,this};function e(_){return _._maxListeners===void 0?n.defaultMaxListeners:_._maxListeners}n.prototype.getMaxListeners=function(){return e(this)},n.prototype.emit=function(_){for(var y=[],T=1;T<arguments.length;T++)y.push(arguments[T]);var S=_==="error",E=this._events;if(E!==void 0)S=S&&E.error===void 0;else if(!S)return!1;if(S){var P;if(y.length>0&&(P=y[0]),P instanceof Error)throw P;var O=new Error("Unhandled error."+(P?" ("+P.message+")":""));throw O.context=P,O}var B=E[_];if(B===void 0)return!1;if(typeof B=="function")m(B,this,y);else for(var I=B.length,z=p(B,I),T=0;T<I;++T)m(z[T],this,y);return!0};function i(_,y,T,S){var E,P,O;if(r(T),P=_._events,P===void 0?(P=_._events=Object.create(null),_._eventsCount=0):(P.newListener!==void 0&&(_.emit("newListener",y,T.listener?T.listener:T),P=_._events),O=P[y]),O===void 0)O=P[y]=T,++_._eventsCount;else if(typeof O=="function"?O=P[y]=S?[T,O]:[O,T]:S?O.unshift(T):O.push(T),E=e(_),E>0&&O.length>E&&!O.warned){O.warned=!0;var B=new Error("Possible EventEmitter memory leak detected. "+O.length+" "+String(y)+" listeners added. Use emitter.setMaxListeners() to increase limit");B.name="MaxListenersExceededWarning",B.emitter=_,B.type=y,B.count=O.length,a(B)}return _}n.prototype.addListener=function(_,y){return i(this,_,y,!1)},n.prototype.on=n.prototype.addListener,n.prototype.prependListener=function(_,y){return i(this,_,y,!0)};function s(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(_,y,T){var S={fired:!1,wrapFn:void 0,target:_,type:y,listener:T},E=s.bind(S);return E.listener=T,S.wrapFn=E,E}n.prototype.once=function(_,y){return r(y),this.on(_,f(this,_,y)),this},n.prototype.prependOnceListener=function(_,y){return r(y),this.prependListener(_,f(this,_,y)),this},n.prototype.removeListener=function(_,y){var T,S,E,P,O;if(r(y),S=this._events,S===void 0)return this;if(T=S[_],T===void 0)return this;if(T===y||T.listener===y)--this._eventsCount===0?this._events=Object.create(null):(delete S[_],S.removeListener&&this.emit("removeListener",_,T.listener||y));else if(typeof T!="function"){for(E=-1,P=T.length-1;P>=0;P--)if(T[P]===y||T[P].listener===y){O=T[P].listener,E=P;break}if(E<0)return this;E===0?T.shift():o(T,E),T.length===1&&(S[_]=T[0]),S.removeListener!==void 0&&this.emit("removeListener",_,O||y)}return this},n.prototype.off=n.prototype.removeListener,n.prototype.removeAllListeners=function(_){var y,T,S;if(T=this._events,T===void 0)return this;if(T.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):T[_]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete T[_]),this;if(arguments.length===0){var E=Object.keys(T),P;for(S=0;S<E.length;++S)P=E[S],P!=="removeListener"&&this.removeAllListeners(P);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(y=T[_],typeof y=="function")this.removeListener(_,y);else if(y!==void 0)for(S=y.length-1;S>=0;S--)this.removeListener(_,y[S]);return this};function h(_,y,T){var S=_._events;if(S===void 0)return[];var E=S[y];return E===void 0?[]:typeof E=="function"?T?[E.listener||E]:[E]:T?v(E):p(E,E.length)}n.prototype.listeners=function(_){return h(this,_,!0)},n.prototype.rawListeners=function(_){return h(this,_,!1)},n.listenerCount=function(_,y){return typeof _.listenerCount=="function"?_.listenerCount(y):b.call(_,y)},n.prototype.listenerCount=b;function b(_){var y=this._events;if(y!==void 0){var T=y[_];if(typeof T=="function")return 1;if(T!==void 0)return T.length}return 0}n.prototype.eventNames=function(){return this._eventsCount>0?l(this._events):[]};function p(_,y){for(var T=new Array(y),S=0;S<y;++S)T[S]=_[S];return T}function o(_,y){for(;y+1<_.length;y++)_[y]=_[y+1];_.pop()}function v(_){for(var y=new Array(_.length),T=0;T<y.length;++T)y[T]=_[T].listener||_[T];return y}function w(_,y){return new Promise(function(T,S){function E(O){_.removeListener(y,P),S(O)}function P(){typeof _.removeListener=="function"&&_.removeListener("error",E),T([].slice.call(arguments))}k(_,y,P,{once:!0}),y!=="error"&&g(_,E,{once:!0})})}function g(_,y,T){typeof _.on=="function"&&k(_,"error",y,T)}function k(_,y,T,S){if(typeof _.on=="function")S.once?_.once(y,T):_.on(y,T);else if(typeof _.addEventListener=="function")_.addEventListener(y,function E(P){S.once&&_.removeEventListener(y,E),T(P)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof _)}return un}var un,gi,Qt,ea,ta,na,ra,ia,sa,Wt=it(()=>{he(),me(),fe(),un={},gi=!1,Qt=Wl(),Qt.once,Qt.once=function(u,m){return new Promise((l,a)=>{function c(...t){n!==void 0&&u.removeListener("error",n),l(t)}let n;m!=="error"&&(n=t=>{u.removeListener(name,c),a(t)},u.once("error",n)),u.once(m,c)})},Qt.on=function(u,m){let l=[],a=[],c=null,n=!1,t={async next(){let i=l.shift();if(i)return createIterResult(i,!1);if(c){let s=Promise.reject(c);return c=null,s}return n?createIterResult(void 0,!0):new Promise((s,f)=>a.push({resolve:s,reject:f}))},async return(){u.removeListener(m,r),u.removeListener("error",e),n=!0;for(let i of a)i.resolve(createIterResult(void 0,!0));return createIterResult(void 0,!0)},throw(i){c=i,u.removeListener(m,r),u.removeListener("error",e)},[Symbol.asyncIterator](){return this}};return u.on(m,r),u.on("error",e),t;function r(...i){let s=a.shift();s?s.resolve(createIterResult(i,!1)):l.push(i)}function e(i){n=!0;let s=a.shift();s?s.reject(i):c=i,t.return()}},{EventEmitter:ea,defaultMaxListeners:ta,init:na,listenerCount:ra,on:ia,once:sa}=Qt}),rt=ve((u,m)=>{he(),me(),fe();var l=(Qe(),Be(Ve)),{format:a,inspect:c}=Zo(),{codes:{ERR_INVALID_ARG_TYPE:n}}=nt(),{kResistStopPropagation:t,AggregateError:r,SymbolDispose:e}=We(),i=globalThis.AbortSignal||gn().AbortSignal,s=globalThis.AbortController||gn().AbortController,f=Object.getPrototypeOf(async function(){}).constructor,h=globalThis.Blob||l.Blob,b=typeof h<"u"?function(v){return v instanceof h}:function(v){return!1},p=(v,w)=>{if(v!==void 0&&(v===null||typeof v!="object"||!("aborted"in v)))throw new n(w,"AbortSignal",v)},o=(v,w)=>{if(typeof v!="function")throw new n(w,"Function",v)};m.exports={AggregateError:r,kEmptyObject:Object.freeze({}),once(v){let w=!1;return function(...g){w||(w=!0,v.apply(this,g))}},createDeferredPromise:function(){let v,w;return{promise:new Promise((g,k)=>{v=g,w=k}),resolve:v,reject:w}},promisify(v){return new Promise((w,g)=>{v((k,..._)=>k?g(k):w(..._))})},debuglog(){return function(){}},format:a,inspect:c,types:{isAsyncFunction(v){return v instanceof f},isArrayBufferView(v){return ArrayBuffer.isView(v)}},isBlob:b,deprecate(v,w){return v},addAbortListener:(Wt(),Be(Ot)).addAbortListener||function(v,w){if(v===void 0)throw new n("signal","AbortSignal",v);p(v,"signal"),o(w,"listener");let g;return v.aborted?queueMicrotask(()=>w()):(v.addEventListener("abort",w,{__proto__:null,once:!0,[t]:!0}),g=()=>{v.removeEventListener("abort",w)}),{__proto__:null,[e](){var k;(k=g)===null||k===void 0||k()}}},AbortSignalAny:i.any||function(v){if(v.length===1)return v[0];let w=new s,g=()=>w.abort();return v.forEach(k=>{p(k,"signals"),k.addEventListener("abort",g,{once:!0})}),w.signal.addEventListener("abort",()=>{v.forEach(k=>k.removeEventListener("abort",g))},{once:!0}),w.signal}},m.exports.promisify.custom=Symbol.for("nodejs.util.promisify.custom")}),bn=ve((u,m)=>{he(),me(),fe();var{ArrayIsArray:l,ArrayPrototypeIncludes:a,ArrayPrototypeJoin:c,ArrayPrototypeMap:n,NumberIsInteger:t,NumberIsNaN:r,NumberMAX_SAFE_INTEGER:e,NumberMIN_SAFE_INTEGER:i,NumberParseInt:s,ObjectPrototypeHasOwnProperty:f,RegExpPrototypeExec:h,String:b,StringPrototypeToUpperCase:p,StringPrototypeTrim:o}=We(),{hideStackFrames:v,codes:{ERR_SOCKET_BAD_PORT:w,ERR_INVALID_ARG_TYPE:g,ERR_INVALID_ARG_VALUE:k,ERR_OUT_OF_RANGE:_,ERR_UNKNOWN_SIGNAL:y}}=nt(),{normalizeEncoding:T}=rt(),{isAsyncFunction:S,isArrayBufferView:E}=rt().types,P={};function O(M){return M===(M|0)}function B(M){return M===M>>>0}var I=/^[0-7]+$/,z="must be a 32-bit unsigned integer or an octal string";function F(M,ce,le){if(typeof M>"u"&&(M=le),typeof M=="string"){if(h(I,M)===null)throw new k(ce,M,z);M=s(M,8)}return V(M,ce),M}var D=v((M,ce,le=i,ae=e)=>{if(typeof M!="number")throw new g(ce,"number",M);if(!t(M))throw new _(ce,"an integer",M);if(M<le||M>ae)throw new _(ce,`>= ${le} && <= ${ae}`,M)}),pe=v((M,ce,le=-2147483648,ae=2147483647)=>{if(typeof M!="number")throw new g(ce,"number",M);if(!t(M))throw new _(ce,"an integer",M);if(M<le||M>ae)throw new _(ce,`>= ${le} && <= ${ae}`,M)}),V=v((M,ce,le=!1)=>{if(typeof M!="number")throw new g(ce,"number",M);if(!t(M))throw new _(ce,"an integer",M);let ae=le?1:0,Ee=4294967295;if(M<ae||M>Ee)throw new _(ce,`>= ${ae} && <= ${Ee}`,M)});function Q(M,ce){if(typeof M!="string")throw new g(ce,"string",M)}function ie(M,ce,le=void 0,ae){if(typeof M!="number")throw new g(ce,"number",M);if(le!=null&&M<le||ae!=null&&M>ae||(le!=null||ae!=null)&&r(M))throw new _(ce,`${le!=null?`>= ${le}`:""}${le!=null&&ae!=null?" && ":""}${ae!=null?`<= ${ae}`:""}`,M)}var W=v((M,ce,le)=>{if(!a(le,M)){let ae="must be one of: "+c(n(le,Ee=>typeof Ee=="string"?`'${Ee}'`:b(Ee)),", ");throw new k(ce,M,ae)}});function te(M,ce){if(typeof M!="boolean")throw new g(ce,"boolean",M)}function N(M,ce,le){return M==null||!f(M,ce)?le:M[ce]}var Z=v((M,ce,le=null)=>{let ae=N(le,"allowArray",!1),Ee=N(le,"allowFunction",!1);if(!N(le,"nullable",!1)&&M===null||!ae&&l(M)||typeof M!="object"&&(!Ee||typeof M!="function"))throw new g(ce,"Object",M)}),we=v((M,ce)=>{if(M!=null&&typeof M!="object"&&typeof M!="function")throw new g(ce,"a dictionary",M)}),re=v((M,ce,le=0)=>{if(!l(M))throw new g(ce,"Array",M);if(M.length<le){let ae=`must be longer than ${le}`;throw new k(ce,M,ae)}});function _e(M,ce){re(M,ce);for(let le=0;le<M.length;le++)Q(M[le],`${ce}[${le}]`)}function X(M,ce){re(M,ce);for(let le=0;le<M.length;le++)te(M[le],`${ce}[${le}]`)}function L(M,ce){re(M,ce);for(let le=0;le<M.length;le++){let ae=M[le],Ee=`${ce}[${le}]`;if(ae==null)throw new g(Ee,"AbortSignal",ae);ye(ae,Ee)}}function oe(M,ce="signal"){if(Q(M,ce),P[M]===void 0)throw P[p(M)]!==void 0?new y(M+" (signals must use all capital letters)"):new y(M)}var K=v((M,ce="buffer")=>{if(!E(M))throw new g(ce,["Buffer","TypedArray","DataView"],M)});function Y(M,ce){let le=T(ce),ae=M.length;if(le==="hex"&&ae%2!==0)throw new k("encoding",ce,`is invalid for data of length ${ae}`)}function ee(M,ce="Port",le=!0){if(typeof M!="number"&&typeof M!="string"||typeof M=="string"&&o(M).length===0||+M!==+M>>>0||M>65535||M===0&&!le)throw new w(ce,M,le);return M|0}var ye=v((M,ce)=>{if(M!==void 0&&(M===null||typeof M!="object"||!("aborted"in M)))throw new g(ce,"AbortSignal",M)}),de=v((M,ce)=>{if(typeof M!="function")throw new g(ce,"Function",M)}),U=v((M,ce)=>{if(typeof M!="function"||S(M))throw new g(ce,"Function",M)}),H=v((M,ce)=>{if(M!==void 0)throw new g(ce,"undefined",M)});function ne(M,ce,le){if(!a(le,M))throw new g(ce,`('${c(le,"|")}')`,M)}var ge=/^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;function be(M,ce){if(typeof M>"u"||!h(ge,M))throw new k(ce,M,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}function $(M){if(typeof M=="string")return be(M,"hints"),M;if(l(M)){let ce=M.length,le="";if(ce===0)return le;for(let ae=0;ae<ce;ae++){let Ee=M[ae];be(Ee,"hints"),le+=Ee,ae!==ce-1&&(le+=", ")}return le}throw new k("hints",M,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}m.exports={isInt32:O,isUint32:B,parseFileMode:F,validateArray:re,validateStringArray:_e,validateBooleanArray:X,validateAbortSignalArray:L,validateBoolean:te,validateBuffer:K,validateDictionary:we,validateEncoding:Y,validateFunction:de,validateInt32:pe,validateInteger:D,validateNumber:ie,validateObject:Z,validateOneOf:W,validatePlainFunction:U,validatePort:ee,validateSignalName:oe,validateString:Q,validateUint32:V,validateUndefined:H,validateUnion:ne,validateAbortSignal:ye,validateLinkHeaderValue:$}}),zt=ve((u,m)=>{he(),me(),fe();var l=m.exports={},a,c;function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=n}catch{a=n}try{typeof clearTimeout=="function"?c=clearTimeout:c=t}catch{c=t}})();function r(w){if(a===setTimeout)return setTimeout(w,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(w,0);try{return a(w,0)}catch{try{return a.call(null,w,0)}catch{return a.call(this,w,0)}}}function e(w){if(c===clearTimeout)return clearTimeout(w);if((c===t||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(w);try{return c(w)}catch{try{return c.call(null,w)}catch{return c.call(this,w)}}}var i=[],s=!1,f,h=-1;function b(){!s||!f||(s=!1,f.length?i=f.concat(i):h=-1,i.length&&p())}function p(){if(!s){var w=r(b);s=!0;for(var g=i.length;g;){for(f=i,i=[];++h<g;)f&&f[h].run();h=-1,g=i.length}f=null,s=!1,e(w)}}l.nextTick=function(w){var g=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)g[k-1]=arguments[k];i.push(new o(w,g)),i.length===1&&!s&&r(p)};function o(w,g){this.fun=w,this.array=g}o.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function v(){}l.on=v,l.addListener=v,l.once=v,l.off=v,l.removeListener=v,l.removeAllListeners=v,l.emit=v,l.prependListener=v,l.prependOnceListener=v,l.listeners=function(w){return[]},l.binding=function(w){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(w){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),St=ve((u,m)=>{he(),me(),fe();var{SymbolAsyncIterator:l,SymbolIterator:a,SymbolFor:c}=We(),n=c("nodejs.stream.destroyed"),t=c("nodejs.stream.errored"),r=c("nodejs.stream.readable"),e=c("nodejs.stream.writable"),i=c("nodejs.stream.disturbed"),s=c("nodejs.webstream.isClosedPromise"),f=c("nodejs.webstream.controllerErrorFunction");function h(N,Z=!1){var we;return!!(N&&typeof N.pipe=="function"&&typeof N.on=="function"&&(!Z||typeof N.pause=="function"&&typeof N.resume=="function")&&(!N._writableState||((we=N._readableState)===null||we===void 0?void 0:we.readable)!==!1)&&(!N._writableState||N._readableState))}function b(N){var Z;return!!(N&&typeof N.write=="function"&&typeof N.on=="function"&&(!N._readableState||((Z=N._writableState)===null||Z===void 0?void 0:Z.writable)!==!1))}function p(N){return!!(N&&typeof N.pipe=="function"&&N._readableState&&typeof N.on=="function"&&typeof N.write=="function")}function o(N){return N&&(N._readableState||N._writableState||typeof N.write=="function"&&typeof N.on=="function"||typeof N.pipe=="function"&&typeof N.on=="function")}function v(N){return!!(N&&!o(N)&&typeof N.pipeThrough=="function"&&typeof N.getReader=="function"&&typeof N.cancel=="function")}function w(N){return!!(N&&!o(N)&&typeof N.getWriter=="function"&&typeof N.abort=="function")}function g(N){return!!(N&&!o(N)&&typeof N.readable=="object"&&typeof N.writable=="object")}function k(N){return v(N)||w(N)||g(N)}function _(N,Z){return N==null?!1:Z===!0?typeof N[l]=="function":Z===!1?typeof N[a]=="function":typeof N[l]=="function"||typeof N[a]=="function"}function y(N){if(!o(N))return null;let Z=N._writableState,we=N._readableState,re=Z||we;return!!(N.destroyed||N[n]||re!=null&&re.destroyed)}function T(N){if(!b(N))return null;if(N.writableEnded===!0)return!0;let Z=N._writableState;return Z!=null&&Z.errored?!1:typeof Z?.ended!="boolean"?null:Z.ended}function S(N,Z){if(!b(N))return null;if(N.writableFinished===!0)return!0;let we=N._writableState;return we!=null&&we.errored?!1:typeof we?.finished!="boolean"?null:!!(we.finished||Z===!1&&we.ended===!0&&we.length===0)}function E(N){if(!h(N))return null;if(N.readableEnded===!0)return!0;let Z=N._readableState;return!Z||Z.errored?!1:typeof Z?.ended!="boolean"?null:Z.ended}function P(N,Z){if(!h(N))return null;let we=N._readableState;return we!=null&&we.errored?!1:typeof we?.endEmitted!="boolean"?null:!!(we.endEmitted||Z===!1&&we.ended===!0&&we.length===0)}function O(N){return N&&N[r]!=null?N[r]:typeof N?.readable!="boolean"?null:y(N)?!1:h(N)&&N.readable&&!P(N)}function B(N){return N&&N[e]!=null?N[e]:typeof N?.writable!="boolean"?null:y(N)?!1:b(N)&&N.writable&&!T(N)}function I(N,Z){return o(N)?y(N)?!0:!(Z?.readable!==!1&&O(N)||Z?.writable!==!1&&B(N)):null}function z(N){var Z,we;return o(N)?N.writableErrored?N.writableErrored:(Z=(we=N._writableState)===null||we===void 0?void 0:we.errored)!==null&&Z!==void 0?Z:null:null}function F(N){var Z,we;return o(N)?N.readableErrored?N.readableErrored:(Z=(we=N._readableState)===null||we===void 0?void 0:we.errored)!==null&&Z!==void 0?Z:null:null}function D(N){if(!o(N))return null;if(typeof N.closed=="boolean")return N.closed;let Z=N._writableState,we=N._readableState;return typeof Z?.closed=="boolean"||typeof we?.closed=="boolean"?Z?.closed||we?.closed:typeof N._closed=="boolean"&&pe(N)?N._closed:null}function pe(N){return typeof N._closed=="boolean"&&typeof N._defaultKeepAlive=="boolean"&&typeof N._removedConnection=="boolean"&&typeof N._removedContLen=="boolean"}function V(N){return typeof N._sent100=="boolean"&&pe(N)}function Q(N){var Z;return typeof N._consuming=="boolean"&&typeof N._dumped=="boolean"&&((Z=N.req)===null||Z===void 0?void 0:Z.upgradeOrConnect)===void 0}function ie(N){if(!o(N))return null;let Z=N._writableState,we=N._readableState,re=Z||we;return!re&&V(N)||!!(re&&re.autoDestroy&&re.emitClose&&re.closed===!1)}function W(N){var Z;return!!(N&&((Z=N[i])!==null&&Z!==void 0?Z:N.readableDidRead||N.readableAborted))}function te(N){var Z,we,re,_e,X,L,oe,K,Y,ee;return!!(N&&((Z=(we=(re=(_e=(X=(L=N[t])!==null&&L!==void 0?L:N.readableErrored)!==null&&X!==void 0?X:N.writableErrored)!==null&&_e!==void 0?_e:(oe=N._readableState)===null||oe===void 0?void 0:oe.errorEmitted)!==null&&re!==void 0?re:(K=N._writableState)===null||K===void 0?void 0:K.errorEmitted)!==null&&we!==void 0?we:(Y=N._readableState)===null||Y===void 0?void 0:Y.errored)!==null&&Z!==void 0?Z:!((ee=N._writableState)===null||ee===void 0)&&ee.errored))}m.exports={isDestroyed:y,kIsDestroyed:n,isDisturbed:W,kIsDisturbed:i,isErrored:te,kIsErrored:t,isReadable:O,kIsReadable:r,kIsClosedPromise:s,kControllerErrorFunction:f,kIsWritable:e,isClosed:D,isDuplexNodeStream:p,isFinished:I,isIterable:_,isReadableNodeStream:h,isReadableStream:v,isReadableEnded:E,isReadableFinished:P,isReadableErrored:F,isNodeStream:o,isWebStream:k,isWritable:B,isWritableNodeStream:b,isWritableStream:w,isWritableEnded:T,isWritableFinished:S,isWritableErrored:z,isServerRequest:Q,isServerResponse:V,willEmitClose:ie,isTransformStream:g}}),Nt=ve((u,m)=>{he(),me(),fe();var l=zt(),{AbortError:a,codes:c}=nt(),{ERR_INVALID_ARG_TYPE:n,ERR_STREAM_PREMATURE_CLOSE:t}=c,{kEmptyObject:r,once:e}=rt(),{validateAbortSignal:i,validateFunction:s,validateObject:f,validateBoolean:h}=bn(),{Promise:b,PromisePrototypeThen:p,SymbolDispose:o}=We(),{isClosed:v,isReadable:w,isReadableNodeStream:g,isReadableStream:k,isReadableFinished:_,isReadableErrored:y,isWritable:T,isWritableNodeStream:S,isWritableStream:E,isWritableFinished:P,isWritableErrored:O,isNodeStream:B,willEmitClose:I,kIsClosedPromise:z}=St(),F;function D(W){return W.setHeader&&typeof W.abort=="function"}var pe=()=>{};function V(W,te,N){var Z,we;if(arguments.length===2?(N=te,te=r):te==null?te=r:f(te,"options"),s(N,"callback"),i(te.signal,"options.signal"),N=e(N),k(W)||E(W))return Q(W,te,N);if(!B(W))throw new n("stream",["ReadableStream","WritableStream","Stream"],W);let re=(Z=te.readable)!==null&&Z!==void 0?Z:g(W),_e=(we=te.writable)!==null&&we!==void 0?we:S(W),X=W._writableState,L=W._readableState,oe=()=>{W.writable||ee()},K=I(W)&&g(W)===re&&S(W)===_e,Y=P(W,!1),ee=()=>{Y=!0,W.destroyed&&(K=!1),!(K&&(!W.readable||re))&&(!re||ye)&&N.call(W)},ye=_(W,!1),de=()=>{ye=!0,W.destroyed&&(K=!1),!(K&&(!W.writable||_e))&&(!_e||Y)&&N.call(W)},U=M=>{N.call(W,M)},H=v(W),ne=()=>{H=!0;let M=O(W)||y(W);if(M&&typeof M!="boolean")return N.call(W,M);if(re&&!ye&&g(W,!0)&&!_(W,!1))return N.call(W,new t);if(_e&&!Y&&!P(W,!1))return N.call(W,new t);N.call(W)},ge=()=>{H=!0;let M=O(W)||y(W);if(M&&typeof M!="boolean")return N.call(W,M);N.call(W)},be=()=>{W.req.on("finish",ee)};D(W)?(W.on("complete",ee),K||W.on("abort",ne),W.req?be():W.on("request",be)):_e&&!X&&(W.on("end",oe),W.on("close",oe)),!K&&typeof W.aborted=="boolean"&&W.on("aborted",ne),W.on("end",de),W.on("finish",ee),te.error!==!1&&W.on("error",U),W.on("close",ne),H?l.nextTick(ne):X!=null&&X.errorEmitted||L!=null&&L.errorEmitted?K||l.nextTick(ge):(!re&&(!K||w(W))&&(Y||T(W)===!1)||!_e&&(!K||T(W))&&(ye||w(W)===!1)||L&&W.req&&W.aborted)&&l.nextTick(ge);let $=()=>{N=pe,W.removeListener("aborted",ne),W.removeListener("complete",ee),W.removeListener("abort",ne),W.removeListener("request",be),W.req&&W.req.removeListener("finish",ee),W.removeListener("end",oe),W.removeListener("close",oe),W.removeListener("finish",ee),W.removeListener("end",de),W.removeListener("error",U),W.removeListener("close",ne)};if(te.signal&&!H){let M=()=>{let ce=N;$(),ce.call(W,new a(void 0,{cause:te.signal.reason}))};if(te.signal.aborted)l.nextTick(M);else{F=F||rt().addAbortListener;let ce=F(te.signal,M),le=N;N=e((...ae)=>{ce[o](),le.apply(W,ae)})}}return $}function Q(W,te,N){let Z=!1,we=pe;if(te.signal)if(we=()=>{Z=!0,N.call(W,new a(void 0,{cause:te.signal.reason}))},te.signal.aborted)l.nextTick(we);else{F=F||rt().addAbortListener;let _e=F(te.signal,we),X=N;N=e((...L)=>{_e[o](),X.apply(W,L)})}let re=(..._e)=>{Z||l.nextTick(()=>N.apply(W,_e))};return p(W[z].promise,re,re),pe}function ie(W,te){var N;let Z=!1;return te===null&&(te=r),(N=te)!==null&&N!==void 0&&N.cleanup&&(h(te.cleanup,"cleanup"),Z=te.cleanup),new b((we,re)=>{let _e=V(W,te,X=>{Z&&_e(),X?re(X):we()})})}m.exports=V,m.exports.finished=ie}),en=ve((u,m)=>{he(),me(),fe();var l=zt(),{aggregateTwoErrors:a,codes:{ERR_MULTIPLE_CALLBACK:c},AbortError:n}=nt(),{Symbol:t}=We(),{kIsDestroyed:r,isDestroyed:e,isFinished:i,isServerRequest:s}=St(),f=t("kDestroy"),h=t("kConstruct");function b(I,z,F){I&&(I.stack,z&&!z.errored&&(z.errored=I),F&&!F.errored&&(F.errored=I))}function p(I,z){let F=this._readableState,D=this._writableState,pe=D||F;return D!=null&&D.destroyed||F!=null&&F.destroyed?(typeof z=="function"&&z(),this):(b(I,D,F),D&&(D.destroyed=!0),F&&(F.destroyed=!0),pe.constructed?o(this,I,z):this.once(f,function(V){o(this,a(V,I),z)}),this)}function o(I,z,F){let D=!1;function pe(V){if(D)return;D=!0;let Q=I._readableState,ie=I._writableState;b(V,ie,Q),ie&&(ie.closed=!0),Q&&(Q.closed=!0),typeof F=="function"&&F(V),V?l.nextTick(v,I,V):l.nextTick(w,I)}try{I._destroy(z||null,pe)}catch(V){pe(V)}}function v(I,z){g(I,z),w(I)}function w(I){let z=I._readableState,F=I._writableState;F&&(F.closeEmitted=!0),z&&(z.closeEmitted=!0),(F!=null&&F.emitClose||z!=null&&z.emitClose)&&I.emit("close")}function g(I,z){let F=I._readableState,D=I._writableState;D!=null&&D.errorEmitted||F!=null&&F.errorEmitted||(D&&(D.errorEmitted=!0),F&&(F.errorEmitted=!0),I.emit("error",z))}function k(){let I=this._readableState,z=this._writableState;I&&(I.constructed=!0,I.closed=!1,I.closeEmitted=!1,I.destroyed=!1,I.errored=null,I.errorEmitted=!1,I.reading=!1,I.ended=I.readable===!1,I.endEmitted=I.readable===!1),z&&(z.constructed=!0,z.destroyed=!1,z.closed=!1,z.closeEmitted=!1,z.errored=null,z.errorEmitted=!1,z.finalCalled=!1,z.prefinished=!1,z.ended=z.writable===!1,z.ending=z.writable===!1,z.finished=z.writable===!1)}function _(I,z,F){let D=I._readableState,pe=I._writableState;if(pe!=null&&pe.destroyed||D!=null&&D.destroyed)return this;D!=null&&D.autoDestroy||pe!=null&&pe.autoDestroy?I.destroy(z):z&&(z.stack,pe&&!pe.errored&&(pe.errored=z),D&&!D.errored&&(D.errored=z),F?l.nextTick(g,I,z):g(I,z))}function y(I,z){if(typeof I._construct!="function")return;let F=I._readableState,D=I._writableState;F&&(F.constructed=!1),D&&(D.constructed=!1),I.once(h,z),!(I.listenerCount(h)>1)&&l.nextTick(T,I)}function T(I){let z=!1;function F(D){if(z){_(I,D??new c);return}z=!0;let pe=I._readableState,V=I._writableState,Q=V||pe;pe&&(pe.constructed=!0),V&&(V.constructed=!0),Q.destroyed?I.emit(f,D):D?_(I,D,!0):l.nextTick(S,I)}try{I._construct(D=>{l.nextTick(F,D)})}catch(D){l.nextTick(F,D)}}function S(I){I.emit(h)}function E(I){return I?.setHeader&&typeof I.abort=="function"}function P(I){I.emit("close")}function O(I,z){I.emit("error",z),l.nextTick(P,I)}function B(I,z){!I||e(I)||(!z&&!i(I)&&(z=new n),s(I)?(I.socket=null,I.destroy(z)):E(I)?I.abort():E(I.req)?I.req.abort():typeof I.destroy=="function"?I.destroy(z):typeof I.close=="function"?I.close():z?l.nextTick(O,I,z):l.nextTick(P,I),I.destroyed||(I[r]=!0))}m.exports={construct:y,destroyer:B,destroy:p,undestroy:k,errorOrDestroy:_}}),ds=ve((u,m)=>{he(),me(),fe();var{ArrayIsArray:l,ObjectSetPrototypeOf:a}=We(),{EventEmitter:c}=(Wt(),Be(Ot));function n(r){c.call(this,r)}a(n.prototype,c.prototype),a(n,c),n.prototype.pipe=function(r,e){let i=this;function s(w){r.writable&&r.write(w)===!1&&i.pause&&i.pause()}i.on("data",s);function f(){i.readable&&i.resume&&i.resume()}r.on("drain",f),!r._isStdio&&(!e||e.end!==!1)&&(i.on("end",b),i.on("close",p));let h=!1;function b(){h||(h=!0,r.end())}function p(){h||(h=!0,typeof r.destroy=="function"&&r.destroy())}function o(w){v(),c.listenerCount(this,"error")===0&&this.emit("error",w)}t(i,"error",o),t(r,"error",o);function v(){i.removeListener("data",s),r.removeListener("drain",f),i.removeListener("end",b),i.removeListener("close",p),i.removeListener("error",o),r.removeListener("error",o),i.removeListener("end",v),i.removeListener("close",v),r.removeListener("close",v)}return i.on("end",v),i.on("close",v),r.on("close",v),r.emit("pipe",i),r};function t(r,e,i){if(typeof r.prependListener=="function")return r.prependListener(e,i);!r._events||!r._events[e]?r.on(e,i):l(r._events[e])?r._events[e].unshift(i):r._events[e]=[i,r._events[e]]}m.exports={Stream:n,prependListener:t}}),Xn=ve((u,m)=>{he(),me(),fe();var{SymbolDispose:l}=We(),{AbortError:a,codes:c}=nt(),{isNodeStream:n,isWebStream:t,kControllerErrorFunction:r}=St(),e=Nt(),{ERR_INVALID_ARG_TYPE:i}=c,s,f=(h,b)=>{if(typeof h!="object"||!("aborted"in h))throw new i(b,"AbortSignal",h)};m.exports.addAbortSignal=function(h,b){if(f(h,"signal"),!n(b)&&!t(b))throw new i("stream",["ReadableStream","WritableStream","Stream"],b);return m.exports.addAbortSignalNoValidate(h,b)},m.exports.addAbortSignalNoValidate=function(h,b){if(typeof h!="object"||!("aborted"in h))return b;let p=n(b)?()=>{b.destroy(new a(void 0,{cause:h.reason}))}:()=>{b[r](new a(void 0,{cause:h.reason}))};if(h.aborted)p();else{s=s||rt().addAbortListener;let o=s(h,p);e(b,o[l])}return b}}),zl=ve((u,m)=>{he(),me(),fe();var{StringPrototypeSlice:l,SymbolIterator:a,TypedArrayPrototypeSet:c,Uint8Array:n}=We(),{Buffer:t}=(Qe(),Be(Ve)),{inspect:r}=rt();m.exports=class{constructor(){this.head=null,this.tail=null,this.length=0}push(e){let i={data:e,next:null};this.length>0?this.tail.next=i:this.head=i,this.tail=i,++this.length}unshift(e){let i={data:e,next:this.head};this.length===0&&(this.tail=i),this.head=i,++this.length}shift(){if(this.length===0)return;let e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}clear(){this.head=this.tail=null,this.length=0}join(e){if(this.length===0)return"";let i=this.head,s=""+i.data;for(;(i=i.next)!==null;)s+=e+i.data;return s}concat(e){if(this.length===0)return t.alloc(0);let i=t.allocUnsafe(e>>>0),s=this.head,f=0;for(;s;)c(i,s.data,f),f+=s.data.length,s=s.next;return i}consume(e,i){let s=this.head.data;if(e<s.length){let f=s.slice(0,e);return this.head.data=s.slice(e),f}return e===s.length?this.shift():i?this._getString(e):this._getBuffer(e)}first(){return this.head.data}*[a](){for(let e=this.head;e;e=e.next)yield e.data}_getString(e){let i="",s=this.head,f=0;do{let h=s.data;if(e>h.length)i+=h,e-=h.length;else{e===h.length?(i+=h,++f,s.next?this.head=s.next:this.head=this.tail=null):(i+=l(h,0,e),this.head=s,s.data=l(h,e));break}++f}while((s=s.next)!==null);return this.length-=f,i}_getBuffer(e){let i=t.allocUnsafe(e),s=e,f=this.head,h=0;do{let b=f.data;if(e>b.length)c(i,b,s-e),e-=b.length;else{e===b.length?(c(i,b,s-e),++h,f.next?this.head=f.next:this.head=this.tail=null):(c(i,new n(b.buffer,b.byteOffset,e),s-e),this.head=f,f.data=b.slice(e));break}++h}while((f=f.next)!==null);return this.length-=h,i}[Symbol.for("nodejs.util.inspect.custom")](e,i){return r(this,{...i,depth:0,customInspect:!1})}}}),Zn=ve((u,m)=>{he(),me(),fe();var{MathFloor:l,NumberIsInteger:a}=We(),{validateInteger:c}=bn(),{ERR_INVALID_ARG_VALUE:n}=nt().codes,t=16*1024,r=16;function e(h,b,p){return h.highWaterMark!=null?h.highWaterMark:b?h[p]:null}function i(h){return h?r:t}function s(h,b){c(b,"value",0),h?r=b:t=b}function f(h,b,p,o){let v=e(b,o,p);if(v!=null){if(!a(v)||v<0){let w=o?`options.${p}`:"options.highWaterMark";throw new n(w,v)}return l(v)}return i(h.objectMode)}m.exports={getHighWaterMark:f,getDefaultHighWaterMark:i,setDefaultHighWaterMark:s}}),Hl=ve((u,m)=>{he(),me(),fe();var l=(Qe(),Be(Ve)),a=l.Buffer;function c(t,r){for(var e in t)r[e]=t[e]}a.from&&a.alloc&&a.allocUnsafe&&a.allocUnsafeSlow?m.exports=l:(c(l,u),u.Buffer=n);function n(t,r,e){return a(t,r,e)}n.prototype=Object.create(a.prototype),c(a,n),n.from=function(t,r,e){if(typeof t=="number")throw new TypeError("Argument must not be a number");return a(t,r,e)},n.alloc=function(t,r,e){if(typeof t!="number")throw new TypeError("Argument must be a number");var i=a(t);return r!==void 0?typeof e=="string"?i.fill(r,e):i.fill(r):i.fill(0),i},n.allocUnsafe=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return a(t)},n.allocUnsafeSlow=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return l.SlowBuffer(t)}}),$l=ve(u=>{he(),me(),fe();var m=Hl().Buffer,l=m.isEncoding||function(g){switch(g=""+g,g&&g.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function a(g){if(!g)return"utf8";for(var k;;)switch(g){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return g;default:if(k)return;g=(""+g).toLowerCase(),k=!0}}function c(g){var k=a(g);if(typeof k!="string"&&(m.isEncoding===l||!l(g)))throw new Error("Unknown encoding: "+g);return k||g}u.StringDecoder=n;function n(g){this.encoding=c(g);var k;switch(this.encoding){case"utf16le":this.text=h,this.end=b,k=4;break;case"utf8":this.fillLast=i,k=4;break;case"base64":this.text=p,this.end=o,k=3;break;default:this.write=v,this.end=w;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=m.allocUnsafe(k)}n.prototype.write=function(g){if(g.length===0)return"";var k,_;if(this.lastNeed){if(k=this.fillLast(g),k===void 0)return"";_=this.lastNeed,this.lastNeed=0}else _=0;return _<g.length?k?k+this.text(g,_):this.text(g,_):k||""},n.prototype.end=f,n.prototype.text=s,n.prototype.fillLast=function(g){if(this.lastNeed<=g.length)return g.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);g.copy(this.lastChar,this.lastTotal-this.lastNeed,0,g.length),this.lastNeed-=g.length};function t(g){return g<=127?0:g>>5===6?2:g>>4===14?3:g>>3===30?4:g>>6===2?-1:-2}function r(g,k,_){var y=k.length-1;if(y<_)return 0;var T=t(k[y]);return T>=0?(T>0&&(g.lastNeed=T-1),T):--y<_||T===-2?0:(T=t(k[y]),T>=0?(T>0&&(g.lastNeed=T-2),T):--y<_||T===-2?0:(T=t(k[y]),T>=0?(T>0&&(T===2?T=0:g.lastNeed=T-3),T):0))}function e(g,k,_){if((k[0]&192)!==128)return g.lastNeed=0,"�";if(g.lastNeed>1&&k.length>1){if((k[1]&192)!==128)return g.lastNeed=1,"�";if(g.lastNeed>2&&k.length>2&&(k[2]&192)!==128)return g.lastNeed=2,"�"}}function i(g){var k=this.lastTotal-this.lastNeed,_=e(this,g);if(_!==void 0)return _;if(this.lastNeed<=g.length)return g.copy(this.lastChar,k,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);g.copy(this.lastChar,k,0,g.length),this.lastNeed-=g.length}function s(g,k){var _=r(this,g,k);if(!this.lastNeed)return g.toString("utf8",k);this.lastTotal=_;var y=g.length-(_-this.lastNeed);return g.copy(this.lastChar,0,y),g.toString("utf8",k,y)}function f(g){var k=g&&g.length?this.write(g):"";return this.lastNeed?k+"�":k}function h(g,k){if((g.length-k)%2===0){var _=g.toString("utf16le",k);if(_){var y=_.charCodeAt(_.length-1);if(y>=55296&&y<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=g[g.length-2],this.lastChar[1]=g[g.length-1],_.slice(0,-1)}return _}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=g[g.length-1],g.toString("utf16le",k,g.length-1)}function b(g){var k=g&&g.length?this.write(g):"";if(this.lastNeed){var _=this.lastTotal-this.lastNeed;return k+this.lastChar.toString("utf16le",0,_)}return k}function p(g,k){var _=(g.length-k)%3;return _===0?g.toString("base64",k):(this.lastNeed=3-_,this.lastTotal=3,_===1?this.lastChar[0]=g[g.length-1]:(this.lastChar[0]=g[g.length-2],this.lastChar[1]=g[g.length-1]),g.toString("base64",k,g.length-_))}function o(g){var k=g&&g.length?this.write(g):"";return this.lastNeed?k+this.lastChar.toString("base64",0,3-this.lastNeed):k}function v(g){return g.toString(this.encoding)}function w(g){return g&&g.length?this.write(g):""}}),oa=ve((u,m)=>{he(),me(),fe();var l=zt(),{PromisePrototypeThen:a,SymbolAsyncIterator:c,SymbolIterator:n}=We(),{Buffer:t}=(Qe(),Be(Ve)),{ERR_INVALID_ARG_TYPE:r,ERR_STREAM_NULL_VALUES:e}=nt().codes;function i(s,f,h){let b;if(typeof f=="string"||f instanceof t)return new s({objectMode:!0,...h,read(){this.push(f),this.push(null)}});let p;if(f&&f[c])p=!0,b=f[c]();else if(f&&f[n])p=!1,b=f[n]();else throw new r("iterable",["Iterable"],f);let o=new s({objectMode:!0,highWaterMark:1,...h}),v=!1;o._read=function(){v||(v=!0,g())},o._destroy=function(k,_){a(w(k),()=>l.nextTick(_,k),y=>l.nextTick(_,y||k))};async function w(k){let _=k!=null,y=typeof b.throw=="function";if(_&&y){let{value:T,done:S}=await b.throw(k);if(await T,S)return}if(typeof b.return=="function"){let{value:T}=await b.return();await T}}async function g(){for(;;){try{let{value:k,done:_}=p?await b.next():b.next();if(_)o.push(null);else{let y=k&&typeof k.then=="function"?await k:k;if(y===null)throw v=!1,new e;if(o.push(y))continue;v=!1}}catch(k){o.destroy(k)}break}}return o}m.exports=i}),er=ve((u,m)=>{he(),me(),fe();var l=zt(),{ArrayPrototypeIndexOf:a,NumberIsInteger:c,NumberIsNaN:n,NumberParseInt:t,ObjectDefineProperties:r,ObjectKeys:e,ObjectSetPrototypeOf:i,Promise:s,SafeSet:f,SymbolAsyncDispose:h,SymbolAsyncIterator:b,Symbol:p}=We();m.exports=ae,ae.ReadableState=le;var{EventEmitter:o}=(Wt(),Be(Ot)),{Stream:v,prependListener:w}=ds(),{Buffer:g}=(Qe(),Be(Ve)),{addAbortSignal:k}=Xn(),_=Nt(),y=rt().debuglog("stream",C=>{y=C}),T=zl(),S=en(),{getHighWaterMark:E,getDefaultHighWaterMark:P}=Zn(),{aggregateTwoErrors:O,codes:{ERR_INVALID_ARG_TYPE:B,ERR_METHOD_NOT_IMPLEMENTED:I,ERR_OUT_OF_RANGE:z,ERR_STREAM_PUSH_AFTER_EOF:F,ERR_STREAM_UNSHIFT_AFTER_END_EVENT:D},AbortError:pe}=nt(),{validateObject:V}=bn(),Q=p("kPaused"),{StringDecoder:ie}=$l(),W=oa();i(ae.prototype,v.prototype),i(ae,v);var te=()=>{},{errorOrDestroy:N}=S,Z=1,we=2,re=4,_e=8,X=16,L=32,oe=64,K=128,Y=256,ee=512,ye=1024,de=2048,U=4096,H=8192,ne=16384,ge=32768,be=65536,$=1<<17,M=1<<18;function ce(C){return{enumerable:!1,get(){return(this.state&C)!==0},set(q){q?this.state|=C:this.state&=~C}}}r(le.prototype,{objectMode:ce(Z),ended:ce(we),endEmitted:ce(re),reading:ce(_e),constructed:ce(X),sync:ce(L),needReadable:ce(oe),emittedReadable:ce(K),readableListening:ce(Y),resumeScheduled:ce(ee),errorEmitted:ce(ye),emitClose:ce(de),autoDestroy:ce(U),destroyed:ce(H),closed:ce(ne),closeEmitted:ce(ge),multiAwaitDrain:ce(be),readingMore:ce($),dataEmitted:ce(M)});function le(C,q,xe){typeof xe!="boolean"&&(xe=q instanceof _t()),this.state=de|U|X|L,C&&C.objectMode&&(this.state|=Z),xe&&C&&C.readableObjectMode&&(this.state|=Z),this.highWaterMark=C?E(this,C,"readableHighWaterMark",xe):P(!1),this.buffer=new T,this.length=0,this.pipes=[],this.flowing=null,this[Q]=null,C&&C.emitClose===!1&&(this.state&=~de),C&&C.autoDestroy===!1&&(this.state&=~U),this.errored=null,this.defaultEncoding=C&&C.defaultEncoding||"utf8",this.awaitDrainWriters=null,this.decoder=null,this.encoding=null,C&&C.encoding&&(this.decoder=new ie(C.encoding),this.encoding=C.encoding)}function ae(C){if(!(this instanceof ae))return new ae(C);let q=this instanceof _t();this._readableState=new le(C,this,q),C&&(typeof C.read=="function"&&(this._read=C.read),typeof C.destroy=="function"&&(this._destroy=C.destroy),typeof C.construct=="function"&&(this._construct=C.construct),C.signal&&!q&&k(C.signal,this)),v.call(this,C),S.construct(this,()=>{this._readableState.needReadable&&G(this,this._readableState)})}ae.prototype.destroy=S.destroy,ae.prototype._undestroy=S.undestroy,ae.prototype._destroy=function(C,q){q(C)},ae.prototype[o.captureRejectionSymbol]=function(C){this.destroy(C)},ae.prototype[h]=function(){let C;return this.destroyed||(C=this.readableEnded?null:new pe,this.destroy(C)),new s((q,xe)=>_(this,Se=>Se&&Se!==C?xe(Se):q(null)))},ae.prototype.push=function(C,q){return Ee(this,C,q,!1)},ae.prototype.unshift=function(C,q){return Ee(this,C,q,!0)};function Ee(C,q,xe,Se){y("readableAddChunk",q);let Te=C._readableState,$e;if((Te.state&Z)===0&&(typeof q=="string"?(xe=xe||Te.defaultEncoding,Te.encoding!==xe&&(Se&&Te.encoding?q=g.from(q,xe).toString(Te.encoding):(q=g.from(q,xe),xe=""))):q instanceof g?xe="":v._isUint8Array(q)?(q=v._uint8ArrayToBuffer(q),xe=""):q!=null&&($e=new B("chunk",["string","Buffer","Uint8Array"],q))),$e)N(C,$e);else if(q===null)Te.state&=~_e,J(C,Te);else if((Te.state&Z)!==0||q&&q.length>0)if(Se)if((Te.state&re)!==0)N(C,new D);else{if(Te.destroyed||Te.errored)return!1;d(C,Te,q,!0)}else if(Te.ended)N(C,new F);else{if(Te.destroyed||Te.errored)return!1;Te.state&=~_e,Te.decoder&&!xe?(q=Te.decoder.write(q),Te.objectMode||q.length!==0?d(C,Te,q,!1):G(C,Te)):d(C,Te,q,!1)}else Se||(Te.state&=~_e,G(C,Te));return!Te.ended&&(Te.length<Te.highWaterMark||Te.length===0)}function d(C,q,xe,Se){q.flowing&&q.length===0&&!q.sync&&C.listenerCount("data")>0?((q.state&be)!==0?q.awaitDrainWriters.clear():q.awaitDrainWriters=null,q.dataEmitted=!0,C.emit("data",xe)):(q.length+=q.objectMode?1:xe.length,Se?q.buffer.unshift(xe):q.buffer.push(xe),(q.state&oe)!==0&&ue(C)),G(C,q)}ae.prototype.isPaused=function(){let C=this._readableState;return C[Q]===!0||C.flowing===!1},ae.prototype.setEncoding=function(C){let q=new ie(C);this._readableState.decoder=q,this._readableState.encoding=this._readableState.decoder.encoding;let xe=this._readableState.buffer,Se="";for(let Te of xe)Se+=q.write(Te);return xe.clear(),Se!==""&&xe.push(Se),this._readableState.length=Se.length,this};var x=1073741824;function A(C){if(C>x)throw new z("size","<= 1GiB",C);return C--,C|=C>>>1,C|=C>>>2,C|=C>>>4,C|=C>>>8,C|=C>>>16,C++,C}function j(C,q){return C<=0||q.length===0&&q.ended?0:(q.state&Z)!==0?1:n(C)?q.flowing&&q.length?q.buffer.first().length:q.length:C<=q.length?C:q.ended?q.length:0}ae.prototype.read=function(C){y("read",C),C===void 0?C=NaN:c(C)||(C=t(C,10));let q=this._readableState,xe=C;if(C>q.highWaterMark&&(q.highWaterMark=A(C)),C!==0&&(q.state&=~K),C===0&&q.needReadable&&((q.highWaterMark!==0?q.length>=q.highWaterMark:q.length>0)||q.ended))return y("read: emitReadable",q.length,q.ended),q.length===0&&q.ended?ut(this):ue(this),null;if(C=j(C,q),C===0&&q.ended)return q.length===0&&ut(this),null;let Se=(q.state&oe)!==0;if(y("need readable",Se),(q.length===0||q.length-C<q.highWaterMark)&&(Se=!0,y("length less than watermark",Se)),q.ended||q.reading||q.destroyed||q.errored||!q.constructed)Se=!1,y("reading, ended or constructing",Se);else if(Se){y("do read"),q.state|=_e|L,q.length===0&&(q.state|=oe);try{this._read(q.highWaterMark)}catch($e){N(this,$e)}q.state&=~L,q.reading||(C=j(xe,q))}let Te;return C>0?Te=$t(C,q):Te=null,Te===null?(q.needReadable=q.length<=q.highWaterMark,C=0):(q.length-=C,q.multiAwaitDrain?q.awaitDrainWriters.clear():q.awaitDrainWriters=null),q.length===0&&(q.ended||(q.needReadable=!0),xe!==C&&q.ended&&ut(this)),Te!==null&&!q.errorEmitted&&!q.closeEmitted&&(q.dataEmitted=!0,this.emit("data",Te)),Te};function J(C,q){if(y("onEofChunk"),!q.ended){if(q.decoder){let xe=q.decoder.end();xe&&xe.length&&(q.buffer.push(xe),q.length+=q.objectMode?1:xe.length)}q.ended=!0,q.sync?ue(C):(q.needReadable=!1,q.emittedReadable=!0,ke(C))}}function ue(C){let q=C._readableState;y("emitReadable",q.needReadable,q.emittedReadable),q.needReadable=!1,q.emittedReadable||(y("emitReadable",q.flowing),q.emittedReadable=!0,l.nextTick(ke,C))}function ke(C){let q=C._readableState;y("emitReadable_",q.destroyed,q.length,q.ended),!q.destroyed&&!q.errored&&(q.length||q.ended)&&(C.emit("readable"),q.emittedReadable=!1),q.needReadable=!q.flowing&&!q.ended&&q.length<=q.highWaterMark,ct(C)}function G(C,q){!q.readingMore&&q.constructed&&(q.readingMore=!0,l.nextTick(se,C,q))}function se(C,q){for(;!q.reading&&!q.ended&&(q.length<q.highWaterMark||q.flowing&&q.length===0);){let xe=q.length;if(y("maybeReadMore read 0"),C.read(0),xe===q.length)break}q.readingMore=!1}ae.prototype._read=function(C){throw new I("_read()")},ae.prototype.pipe=function(C,q){let xe=this,Se=this._readableState;Se.pipes.length===1&&(Se.multiAwaitDrain||(Se.multiAwaitDrain=!0,Se.awaitDrainWriters=new f(Se.awaitDrainWriters?[Se.awaitDrainWriters]:[]))),Se.pipes.push(C),y("pipe count=%d opts=%j",Se.pipes.length,q);let Te=(!q||q.end!==!1)&&C!==l.stdout&&C!==l.stderr?et:Ut;Se.endEmitted?l.nextTick(Te):xe.once("end",Te),C.on("unpipe",$e);function $e(ht,bt){y("onunpipe"),ht===xe&&bt&&bt.hasUnpiped===!1&&(bt.hasUnpiped=!0,on())}function et(){y("onend"),C.end()}let at,sn=!1;function on(){y("cleanup"),C.removeListener("close",pt),C.removeListener("finish",Et),at&&C.removeListener("drain",at),C.removeListener("error",Rt),C.removeListener("unpipe",$e),xe.removeListener("end",et),xe.removeListener("end",Ut),xe.removeListener("data",wn),sn=!0,at&&Se.awaitDrainWriters&&(!C._writableState||C._writableState.needDrain)&&at()}function an(){sn||(Se.pipes.length===1&&Se.pipes[0]===C?(y("false write response, pause",0),Se.awaitDrainWriters=C,Se.multiAwaitDrain=!1):Se.pipes.length>1&&Se.pipes.includes(C)&&(y("false write response, pause",Se.awaitDrainWriters.size),Se.awaitDrainWriters.add(C)),xe.pause()),at||(at=Ae(xe,C),C.on("drain",at))}xe.on("data",wn);function wn(ht){y("ondata");let bt=C.write(ht);y("dest.write",bt),bt===!1&&an()}function Rt(ht){if(y("onerror",ht),Ut(),C.removeListener("error",Rt),C.listenerCount("error")===0){let bt=C._writableState||C._readableState;bt&&!bt.errorEmitted?N(C,ht):C.emit("error",ht)}}w(C,"error",Rt);function pt(){C.removeListener("finish",Et),Ut()}C.once("close",pt);function Et(){y("onfinish"),C.removeListener("close",pt),Ut()}C.once("finish",Et);function Ut(){y("unpipe"),xe.unpipe(C)}return C.emit("pipe",xe),C.writableNeedDrain===!0?an():Se.flowing||(y("pipe resume"),xe.resume()),C};function Ae(C,q){return function(){let xe=C._readableState;xe.awaitDrainWriters===q?(y("pipeOnDrain",1),xe.awaitDrainWriters=null):xe.multiAwaitDrain&&(y("pipeOnDrain",xe.awaitDrainWriters.size),xe.awaitDrainWriters.delete(q)),(!xe.awaitDrainWriters||xe.awaitDrainWriters.size===0)&&C.listenerCount("data")&&C.resume()}}ae.prototype.unpipe=function(C){let q=this._readableState,xe={hasUnpiped:!1};if(q.pipes.length===0)return this;if(!C){let Te=q.pipes;q.pipes=[],this.pause();for(let $e=0;$e<Te.length;$e++)Te[$e].emit("unpipe",this,{hasUnpiped:!1});return this}let Se=a(q.pipes,C);return Se===-1?this:(q.pipes.splice(Se,1),q.pipes.length===0&&this.pause(),C.emit("unpipe",this,xe),this)},ae.prototype.on=function(C,q){let xe=v.prototype.on.call(this,C,q),Se=this._readableState;return C==="data"?(Se.readableListening=this.listenerCount("readable")>0,Se.flowing!==!1&&this.resume()):C==="readable"&&!Se.endEmitted&&!Se.readableListening&&(Se.readableListening=Se.needReadable=!0,Se.flowing=!1,Se.emittedReadable=!1,y("on readable",Se.length,Se.reading),Se.length?ue(this):Se.reading||l.nextTick(Pe,this)),xe},ae.prototype.addListener=ae.prototype.on,ae.prototype.removeListener=function(C,q){let xe=v.prototype.removeListener.call(this,C,q);return C==="readable"&&l.nextTick(Ie,this),xe},ae.prototype.off=ae.prototype.removeListener,ae.prototype.removeAllListeners=function(C){let q=v.prototype.removeAllListeners.apply(this,arguments);return(C==="readable"||C===void 0)&&l.nextTick(Ie,this),q};function Ie(C){let q=C._readableState;q.readableListening=C.listenerCount("readable")>0,q.resumeScheduled&&q[Q]===!1?q.flowing=!0:C.listenerCount("data")>0?C.resume():q.readableListening||(q.flowing=null)}function Pe(C){y("readable nexttick read 0"),C.read(0)}ae.prototype.resume=function(){let C=this._readableState;return C.flowing||(y("resume"),C.flowing=!C.readableListening,Re(this,C)),C[Q]=!1,this};function Re(C,q){q.resumeScheduled||(q.resumeScheduled=!0,l.nextTick(lt,C,q))}function lt(C,q){y("resume",q.reading),q.reading||C.read(0),q.resumeScheduled=!1,C.emit("resume"),ct(C),q.flowing&&!q.reading&&C.read(0)}ae.prototype.pause=function(){return y("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(y("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState[Q]=!0,this};function ct(C){let q=C._readableState;for(y("flow",q.flowing);q.flowing&&C.read()!==null;);}ae.prototype.wrap=function(C){let q=!1;C.on("data",Se=>{!this.push(Se)&&C.pause&&(q=!0,C.pause())}),C.on("end",()=>{this.push(null)}),C.on("error",Se=>{N(this,Se)}),C.on("close",()=>{this.destroy()}),C.on("destroy",()=>{this.destroy()}),this._read=()=>{q&&C.resume&&(q=!1,C.resume())};let xe=e(C);for(let Se=1;Se<xe.length;Se++){let Te=xe[Se];this[Te]===void 0&&typeof C[Te]=="function"&&(this[Te]=C[Te].bind(C))}return this},ae.prototype[b]=function(){return Ye(this)},ae.prototype.iterator=function(C){return C!==void 0&&V(C,"options"),Ye(this,C)};function Ye(C,q){typeof C.read!="function"&&(C=ae.wrap(C,{objectMode:!0}));let xe=dt(C,q);return xe.stream=C,xe}async function*dt(C,q){let xe=te;function Se(et){this===C?(xe(),xe=te):xe=et}C.on("readable",Se);let Te,$e=_(C,{writable:!1},et=>{Te=et?O(Te,et):null,xe(),xe=te});try{for(;;){let et=C.destroyed?null:C.read();if(et!==null)yield et;else{if(Te)throw Te;if(Te===null)return;await new s(Se)}}}catch(et){throw Te=O(Te,et),Te}finally{(Te||q?.destroyOnReturn!==!1)&&(Te===void 0||C._readableState.autoDestroy)?S.destroyer(C,null):(C.off("readable",Se),$e())}}r(ae.prototype,{readable:{__proto__:null,get(){let C=this._readableState;return!!C&&C.readable!==!1&&!C.destroyed&&!C.errorEmitted&&!C.endEmitted},set(C){this._readableState&&(this._readableState.readable=!!C)}},readableDidRead:{__proto__:null,enumerable:!1,get:function(){return this._readableState.dataEmitted}},readableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._readableState.readable!==!1&&(this._readableState.destroyed||this._readableState.errored)&&!this._readableState.endEmitted)}},readableHighWaterMark:{__proto__:null,enumerable:!1,get:function(){return this._readableState.highWaterMark}},readableBuffer:{__proto__:null,enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}},readableFlowing:{__proto__:null,enumerable:!1,get:function(){return this._readableState.flowing},set:function(C){this._readableState&&(this._readableState.flowing=C)}},readableLength:{__proto__:null,enumerable:!1,get(){return this._readableState.length}},readableObjectMode:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.objectMode:!1}},readableEncoding:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.encoding:null}},errored:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.errored:null}},closed:{__proto__:null,get(){return this._readableState?this._readableState.closed:!1}},destroyed:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.destroyed:!1},set(C){this._readableState&&(this._readableState.destroyed=C)}},readableEnded:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.endEmitted:!1}}}),r(le.prototype,{pipesCount:{__proto__:null,get(){return this.pipes.length}},paused:{__proto__:null,get(){return this[Q]!==!1},set(C){this[Q]=!!C}}}),ae._fromList=$t;function $t(C,q){if(q.length===0)return null;let xe;return q.objectMode?xe=q.buffer.shift():!C||C>=q.length?(q.decoder?xe=q.buffer.join(""):q.buffer.length===1?xe=q.buffer.first():xe=q.buffer.concat(q.length),q.buffer.clear()):xe=q.buffer.consume(C,q.decoder),xe}function ut(C){let q=C._readableState;y("endReadable",q.endEmitted),q.endEmitted||(q.ended=!0,l.nextTick(st,q,C))}function st(C,q){if(y("endReadableNT",C.endEmitted,C.length),!C.errored&&!C.closeEmitted&&!C.endEmitted&&C.length===0){if(C.endEmitted=!0,q.emit("end"),q.writable&&q.allowHalfOpen===!1)l.nextTick(yn,q);else if(C.autoDestroy){let xe=q._writableState;(!xe||xe.autoDestroy&&(xe.finished||xe.writable===!1))&&q.destroy()}}}function yn(C){C.writable&&!C.writableEnded&&!C.destroyed&&C.end()}ae.from=function(C,q){return W(ae,C,q)};var Kt;function rn(){return Kt===void 0&&(Kt={}),Kt}ae.fromWeb=function(C,q){return rn().newStreamReadableFromReadableStream(C,q)},ae.toWeb=function(C,q){return rn().newReadableStreamFromStreamReadable(C,q)},ae.wrap=function(C,q){var xe,Se;return new ae({objectMode:(xe=(Se=C.readableObjectMode)!==null&&Se!==void 0?Se:C.objectMode)!==null&&xe!==void 0?xe:!0,...q,destroy(Te,$e){S.destroyer(C,Te),$e(Te)}}).wrap(C)}}),us=ve((u,m)=>{he(),me(),fe();var l=zt(),{ArrayPrototypeSlice:a,Error:c,FunctionPrototypeSymbolHasInstance:n,ObjectDefineProperty:t,ObjectDefineProperties:r,ObjectSetPrototypeOf:e,StringPrototypeToLowerCase:i,Symbol:s,SymbolHasInstance:f}=We();m.exports=V,V.WritableState=D;var{EventEmitter:h}=(Wt(),Be(Ot)),b=ds().Stream,{Buffer:p}=(Qe(),Be(Ve)),o=en(),{addAbortSignal:v}=Xn(),{getHighWaterMark:w,getDefaultHighWaterMark:g}=Zn(),{ERR_INVALID_ARG_TYPE:k,ERR_METHOD_NOT_IMPLEMENTED:_,ERR_MULTIPLE_CALLBACK:y,ERR_STREAM_CANNOT_PIPE:T,ERR_STREAM_DESTROYED:S,ERR_STREAM_ALREADY_FINISHED:E,ERR_STREAM_NULL_VALUES:P,ERR_STREAM_WRITE_AFTER_END:O,ERR_UNKNOWN_ENCODING:B}=nt().codes,{errorOrDestroy:I}=o;e(V.prototype,b.prototype),e(V,b);function z(){}var F=s("kOnFinished");function D(U,H,ne){typeof ne!="boolean"&&(ne=H instanceof _t()),this.objectMode=!!(U&&U.objectMode),ne&&(this.objectMode=this.objectMode||!!(U&&U.writableObjectMode)),this.highWaterMark=U?w(this,U,"writableHighWaterMark",ne):g(!1),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;let ge=!!(U&&U.decodeStrings===!1);this.decodeStrings=!ge,this.defaultEncoding=U&&U.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=N.bind(void 0,H),this.writecb=null,this.writelen=0,this.afterWriteTickInfo=null,pe(this),this.pendingcb=0,this.constructed=!0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!U||U.emitClose!==!1,this.autoDestroy=!U||U.autoDestroy!==!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this[F]=[]}function pe(U){U.buffered=[],U.bufferedIndex=0,U.allBuffers=!0,U.allNoop=!0}D.prototype.getBuffer=function(){return a(this.buffered,this.bufferedIndex)},t(D.prototype,"bufferedRequestCount",{__proto__:null,get(){return this.buffered.length-this.bufferedIndex}});function V(U){let H=this instanceof _t();if(!H&&!n(V,this))return new V(U);this._writableState=new D(U,this,H),U&&(typeof U.write=="function"&&(this._write=U.write),typeof U.writev=="function"&&(this._writev=U.writev),typeof U.destroy=="function"&&(this._destroy=U.destroy),typeof U.final=="function"&&(this._final=U.final),typeof U.construct=="function"&&(this._construct=U.construct),U.signal&&v(U.signal,this)),b.call(this,U),o.construct(this,()=>{let ne=this._writableState;ne.writing||_e(this,ne),K(this,ne)})}t(V,f,{__proto__:null,value:function(U){return n(this,U)?!0:this!==V?!1:U&&U._writableState instanceof D}}),V.prototype.pipe=function(){I(this,new T)};function Q(U,H,ne,ge){let be=U._writableState;if(typeof ne=="function")ge=ne,ne=be.defaultEncoding;else{if(!ne)ne=be.defaultEncoding;else if(ne!=="buffer"&&!p.isEncoding(ne))throw new B(ne);typeof ge!="function"&&(ge=z)}if(H===null)throw new P;if(!be.objectMode)if(typeof H=="string")be.decodeStrings!==!1&&(H=p.from(H,ne),ne="buffer");else if(H instanceof p)ne="buffer";else if(b._isUint8Array(H))H=b._uint8ArrayToBuffer(H),ne="buffer";else throw new k("chunk",["string","Buffer","Uint8Array"],H);let $;return be.ending?$=new O:be.destroyed&&($=new S("write")),$?(l.nextTick(ge,$),I(U,$,!0),$):(be.pendingcb++,ie(U,be,H,ne,ge))}V.prototype.write=function(U,H,ne){return Q(this,U,H,ne)===!0},V.prototype.cork=function(){this._writableState.corked++},V.prototype.uncork=function(){let U=this._writableState;U.corked&&(U.corked--,U.writing||_e(this,U))},V.prototype.setDefaultEncoding=function(U){if(typeof U=="string"&&(U=i(U)),!p.isEncoding(U))throw new B(U);return this._writableState.defaultEncoding=U,this};function ie(U,H,ne,ge,be){let $=H.objectMode?1:ne.length;H.length+=$;let M=H.length<H.highWaterMark;return M||(H.needDrain=!0),H.writing||H.corked||H.errored||!H.constructed?(H.buffered.push({chunk:ne,encoding:ge,callback:be}),H.allBuffers&&ge!=="buffer"&&(H.allBuffers=!1),H.allNoop&&be!==z&&(H.allNoop=!1)):(H.writelen=$,H.writecb=be,H.writing=!0,H.sync=!0,U._write(ne,ge,H.onwrite),H.sync=!1),M&&!H.errored&&!H.destroyed}function W(U,H,ne,ge,be,$,M){H.writelen=ge,H.writecb=M,H.writing=!0,H.sync=!0,H.destroyed?H.onwrite(new S("write")):ne?U._writev(be,H.onwrite):U._write(be,$,H.onwrite),H.sync=!1}function te(U,H,ne,ge){--H.pendingcb,ge(ne),re(H),I(U,ne)}function N(U,H){let ne=U._writableState,ge=ne.sync,be=ne.writecb;if(typeof be!="function"){I(U,new y);return}ne.writing=!1,ne.writecb=null,ne.length-=ne.writelen,ne.writelen=0,H?(H.stack,ne.errored||(ne.errored=H),U._readableState&&!U._readableState.errored&&(U._readableState.errored=H),ge?l.nextTick(te,U,ne,H,be):te(U,ne,H,be)):(ne.buffered.length>ne.bufferedIndex&&_e(U,ne),ge?ne.afterWriteTickInfo!==null&&ne.afterWriteTickInfo.cb===be?ne.afterWriteTickInfo.count++:(ne.afterWriteTickInfo={count:1,cb:be,stream:U,state:ne},l.nextTick(Z,ne.afterWriteTickInfo)):we(U,ne,1,be))}function Z({stream:U,state:H,count:ne,cb:ge}){return H.afterWriteTickInfo=null,we(U,H,ne,ge)}function we(U,H,ne,ge){for(!H.ending&&!U.destroyed&&H.length===0&&H.needDrain&&(H.needDrain=!1,U.emit("drain"));ne-- >0;)H.pendingcb--,ge();H.destroyed&&re(H),K(U,H)}function re(U){if(U.writing)return;for(let be=U.bufferedIndex;be<U.buffered.length;++be){var H;let{chunk:$,callback:M}=U.buffered[be],ce=U.objectMode?1:$.length;U.length-=ce,M((H=U.errored)!==null&&H!==void 0?H:new S("write"))}let ne=U[F].splice(0);for(let be=0;be<ne.length;be++){var ge;ne[be]((ge=U.errored)!==null&&ge!==void 0?ge:new S("end"))}pe(U)}function _e(U,H){if(H.corked||H.bufferProcessing||H.destroyed||!H.constructed)return;let{buffered:ne,bufferedIndex:ge,objectMode:be}=H,$=ne.length-ge;if(!$)return;let M=ge;if(H.bufferProcessing=!0,$>1&&U._writev){H.pendingcb-=$-1;let ce=H.allNoop?z:ae=>{for(let Ee=M;Ee<ne.length;++Ee)ne[Ee].callback(ae)},le=H.allNoop&&M===0?ne:a(ne,M);le.allBuffers=H.allBuffers,W(U,H,!0,H.length,le,"",ce),pe(H)}else{do{let{chunk:ce,encoding:le,callback:ae}=ne[M];ne[M++]=null;let Ee=be?1:ce.length;W(U,H,!1,Ee,ce,le,ae)}while(M<ne.length&&!H.writing);M===ne.length?pe(H):M>256?(ne.splice(0,M),H.bufferedIndex=0):H.bufferedIndex=M}H.bufferProcessing=!1}V.prototype._write=function(U,H,ne){if(this._writev)this._writev([{chunk:U,encoding:H}],ne);else throw new _("_write()")},V.prototype._writev=null,V.prototype.end=function(U,H,ne){let ge=this._writableState;typeof U=="function"?(ne=U,U=null,H=null):typeof H=="function"&&(ne=H,H=null);let be;if(U!=null){let $=Q(this,U,H);$ instanceof c&&(be=$)}return ge.corked&&(ge.corked=1,this.uncork()),be||(!ge.errored&&!ge.ending?(ge.ending=!0,K(this,ge,!0),ge.ended=!0):ge.finished?be=new E("end"):ge.destroyed&&(be=new S("end"))),typeof ne=="function"&&(be||ge.finished?l.nextTick(ne,be):ge[F].push(ne)),this};function X(U){return U.ending&&!U.destroyed&&U.constructed&&U.length===0&&!U.errored&&U.buffered.length===0&&!U.finished&&!U.writing&&!U.errorEmitted&&!U.closeEmitted}function L(U,H){let ne=!1;function ge(be){if(ne){I(U,be??y());return}if(ne=!0,H.pendingcb--,be){let $=H[F].splice(0);for(let M=0;M<$.length;M++)$[M](be);I(U,be,H.sync)}else X(H)&&(H.prefinished=!0,U.emit("prefinish"),H.pendingcb++,l.nextTick(Y,U,H))}H.sync=!0,H.pendingcb++;try{U._final(ge)}catch(be){ge(be)}H.sync=!1}function oe(U,H){!H.prefinished&&!H.finalCalled&&(typeof U._final=="function"&&!H.destroyed?(H.finalCalled=!0,L(U,H)):(H.prefinished=!0,U.emit("prefinish")))}function K(U,H,ne){X(H)&&(oe(U,H),H.pendingcb===0&&(ne?(H.pendingcb++,l.nextTick((ge,be)=>{X(be)?Y(ge,be):be.pendingcb--},U,H)):X(H)&&(H.pendingcb++,Y(U,H))))}function Y(U,H){H.pendingcb--,H.finished=!0;let ne=H[F].splice(0);for(let ge=0;ge<ne.length;ge++)ne[ge]();if(U.emit("finish"),H.autoDestroy){let ge=U._readableState;(!ge||ge.autoDestroy&&(ge.endEmitted||ge.readable===!1))&&U.destroy()}}r(V.prototype,{closed:{__proto__:null,get(){return this._writableState?this._writableState.closed:!1}},destroyed:{__proto__:null,get(){return this._writableState?this._writableState.destroyed:!1},set(U){this._writableState&&(this._writableState.destroyed=U)}},writable:{__proto__:null,get(){let U=this._writableState;return!!U&&U.writable!==!1&&!U.destroyed&&!U.errored&&!U.ending&&!U.ended},set(U){this._writableState&&(this._writableState.writable=!!U)}},writableFinished:{__proto__:null,get(){return this._writableState?this._writableState.finished:!1}},writableObjectMode:{__proto__:null,get(){return this._writableState?this._writableState.objectMode:!1}},writableBuffer:{__proto__:null,get(){return this._writableState&&this._writableState.getBuffer()}},writableEnded:{__proto__:null,get(){return this._writableState?this._writableState.ending:!1}},writableNeedDrain:{__proto__:null,get(){let U=this._writableState;return U?!U.destroyed&&!U.ending&&U.needDrain:!1}},writableHighWaterMark:{__proto__:null,get(){return this._writableState&&this._writableState.highWaterMark}},writableCorked:{__proto__:null,get(){return this._writableState?this._writableState.corked:0}},writableLength:{__proto__:null,get(){return this._writableState&&this._writableState.length}},errored:{__proto__:null,enumerable:!1,get(){return this._writableState?this._writableState.errored:null}},writableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._writableState.writable!==!1&&(this._writableState.destroyed||this._writableState.errored)&&!this._writableState.finished)}}});var ee=o.destroy;V.prototype.destroy=function(U,H){let ne=this._writableState;return!ne.destroyed&&(ne.bufferedIndex<ne.buffered.length||ne[F].length)&&l.nextTick(re,ne),ee.call(this,U,H),this},V.prototype._undestroy=o.undestroy,V.prototype._destroy=function(U,H){H(U)},V.prototype[h.captureRejectionSymbol]=function(U){this.destroy(U)};var ye;function de(){return ye===void 0&&(ye={}),ye}V.fromWeb=function(U,H){return de().newStreamWritableFromWritableStream(U,H)},V.toWeb=function(U){return de().newWritableStreamFromStreamWritable(U)}}),Kl=ve((u,m)=>{he(),me(),fe();var l=zt(),a=(Qe(),Be(Ve)),{isReadable:c,isWritable:n,isIterable:t,isNodeStream:r,isReadableNodeStream:e,isWritableNodeStream:i,isDuplexNodeStream:s,isReadableStream:f,isWritableStream:h}=St(),b=Nt(),{AbortError:p,codes:{ERR_INVALID_ARG_TYPE:o,ERR_INVALID_RETURN_VALUE:v}}=nt(),{destroyer:w}=en(),g=_t(),k=er(),_=us(),{createDeferredPromise:y}=rt(),T=oa(),S=globalThis.Blob||a.Blob,E=typeof S<"u"?function(F){return F instanceof S}:function(F){return!1},P=globalThis.AbortController||gn().AbortController,{FunctionPrototypeCall:O}=We(),B=class extends g{constructor(F){super(F),F?.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),F?.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)}};m.exports=function F(D,pe){if(s(D))return D;if(e(D))return z({readable:D});if(i(D))return z({writable:D});if(r(D))return z({writable:!1,readable:!1});if(f(D))return z({readable:k.fromWeb(D)});if(h(D))return z({writable:_.fromWeb(D)});if(typeof D=="function"){let{value:Q,write:ie,final:W,destroy:te}=I(D);if(t(Q))return T(B,Q,{objectMode:!0,write:ie,final:W,destroy:te});let N=Q?.then;if(typeof N=="function"){let Z,we=O(N,Q,re=>{if(re!=null)throw new v("nully","body",re)},re=>{w(Z,re)});return Z=new B({objectMode:!0,readable:!1,write:ie,final(re){W(async()=>{try{await we,l.nextTick(re,null)}catch(_e){l.nextTick(re,_e)}})},destroy:te})}throw new v("Iterable, AsyncIterable or AsyncFunction",pe,Q)}if(E(D))return F(D.arrayBuffer());if(t(D))return T(B,D,{objectMode:!0,writable:!1});if(f(D?.readable)&&h(D?.writable))return B.fromWeb(D);if(typeof D?.writable=="object"||typeof D?.readable=="object"){let Q=D!=null&&D.readable?e(D?.readable)?D?.readable:F(D.readable):void 0,ie=D!=null&&D.writable?i(D?.writable)?D?.writable:F(D.writable):void 0;return z({readable:Q,writable:ie})}let V=D?.then;if(typeof V=="function"){let Q;return O(V,D,ie=>{ie!=null&&Q.push(ie),Q.push(null)},ie=>{w(Q,ie)}),Q=new B({objectMode:!0,writable:!1,read(){}})}throw new o(pe,["Blob","ReadableStream","WritableStream","Stream","Iterable","AsyncIterable","Function","{ readable, writable } pair","Promise"],D)};function I(F){let{promise:D,resolve:pe}=y(),V=new P,Q=V.signal;return{value:F((async function*(){for(;;){let ie=D;D=null;let{chunk:W,done:te,cb:N}=await ie;if(l.nextTick(N),te)return;if(Q.aborted)throw new p(void 0,{cause:Q.reason});({promise:D,resolve:pe}=y()),yield W}})(),{signal:Q}),write(ie,W,te){let N=pe;pe=null,N({chunk:ie,done:!1,cb:te})},final(ie){let W=pe;pe=null,W({done:!0,cb:ie})},destroy(ie,W){V.abort(),W(ie)}}}function z(F){let D=F.readable&&typeof F.readable.read!="function"?k.wrap(F.readable):F.readable,pe=F.writable,V=!!c(D),Q=!!n(pe),ie,W,te,N,Z;function we(re){let _e=N;N=null,_e?_e(re):re&&Z.destroy(re)}return Z=new B({readableObjectMode:!!(D!=null&&D.readableObjectMode),writableObjectMode:!!(pe!=null&&pe.writableObjectMode),readable:V,writable:Q}),Q&&(b(pe,re=>{Q=!1,re&&w(D,re),we(re)}),Z._write=function(re,_e,X){pe.write(re,_e)?X():ie=X},Z._final=function(re){pe.end(),W=re},pe.on("drain",function(){if(ie){let re=ie;ie=null,re()}}),pe.on("finish",function(){if(W){let re=W;W=null,re()}})),V&&(b(D,re=>{V=!1,re&&w(D,re),we(re)}),D.on("readable",function(){if(te){let re=te;te=null,re()}}),D.on("end",function(){Z.push(null)}),Z._read=function(){for(;;){let re=D.read();if(re===null){te=Z._read;return}if(!Z.push(re))return}}),Z._destroy=function(re,_e){!re&&N!==null&&(re=new p),te=null,ie=null,W=null,N===null?_e(re):(N=_e,w(pe,re),w(D,re))},Z}}),_t=ve((u,m)=>{he(),me(),fe();var{ObjectDefineProperties:l,ObjectGetOwnPropertyDescriptor:a,ObjectKeys:c,ObjectSetPrototypeOf:n}=We();m.exports=e;var t=er(),r=us();n(e.prototype,t.prototype),n(e,t);{let h=c(r.prototype);for(let b=0;b<h.length;b++){let p=h[b];e.prototype[p]||(e.prototype[p]=r.prototype[p])}}function e(h){if(!(this instanceof e))return new e(h);t.call(this,h),r.call(this,h),h?(this.allowHalfOpen=h.allowHalfOpen!==!1,h.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),h.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)):this.allowHalfOpen=!0}l(e.prototype,{writable:{__proto__:null,...a(r.prototype,"writable")},writableHighWaterMark:{__proto__:null,...a(r.prototype,"writableHighWaterMark")},writableObjectMode:{__proto__:null,...a(r.prototype,"writableObjectMode")},writableBuffer:{__proto__:null,...a(r.prototype,"writableBuffer")},writableLength:{__proto__:null,...a(r.prototype,"writableLength")},writableFinished:{__proto__:null,...a(r.prototype,"writableFinished")},writableCorked:{__proto__:null,...a(r.prototype,"writableCorked")},writableEnded:{__proto__:null,...a(r.prototype,"writableEnded")},writableNeedDrain:{__proto__:null,...a(r.prototype,"writableNeedDrain")},destroyed:{__proto__:null,get(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set(h){this._readableState&&this._writableState&&(this._readableState.destroyed=h,this._writableState.destroyed=h)}}});var i;function s(){return i===void 0&&(i={}),i}e.fromWeb=function(h,b){return s().newStreamDuplexFromReadableWritablePair(h,b)},e.toWeb=function(h){return s().newReadableWritablePairFromDuplex(h)};var f;e.from=function(h){return f||(f=Kl()),f(h,"body")}}),aa=ve((u,m)=>{he(),me(),fe();var{ObjectSetPrototypeOf:l,Symbol:a}=We();m.exports=e;var{ERR_METHOD_NOT_IMPLEMENTED:c}=nt().codes,n=_t(),{getHighWaterMark:t}=Zn();l(e.prototype,n.prototype),l(e,n);var r=a("kCallback");function e(f){if(!(this instanceof e))return new e(f);let h=f?t(this,f,"readableHighWaterMark",!0):null;h===0&&(f={...f,highWaterMark:null,readableHighWaterMark:h,writableHighWaterMark:f.writableHighWaterMark||0}),n.call(this,f),this._readableState.sync=!1,this[r]=null,f&&(typeof f.transform=="function"&&(this._transform=f.transform),typeof f.flush=="function"&&(this._flush=f.flush)),this.on("prefinish",s)}function i(f){typeof this._flush=="function"&&!this.destroyed?this._flush((h,b)=>{if(h){f?f(h):this.destroy(h);return}b!=null&&this.push(b),this.push(null),f&&f()}):(this.push(null),f&&f())}function s(){this._final!==i&&i.call(this)}e.prototype._final=i,e.prototype._transform=function(f,h,b){throw new c("_transform()")},e.prototype._write=function(f,h,b){let p=this._readableState,o=this._writableState,v=p.length;this._transform(f,h,(w,g)=>{if(w){b(w);return}g!=null&&this.push(g),o.ended||v===p.length||p.length<p.highWaterMark?b():this[r]=b})},e.prototype._read=function(){if(this[r]){let f=this[r];this[r]=null,f()}}}),la=ve((u,m)=>{he(),me(),fe();var{ObjectSetPrototypeOf:l}=We();m.exports=c;var a=aa();l(c.prototype,a.prototype),l(c,a);function c(n){if(!(this instanceof c))return new c(n);a.call(this,n)}c.prototype._transform=function(n,t,r){r(null,n)}}),ps=ve((u,m)=>{he(),me(),fe();var l=zt(),{ArrayIsArray:a,Promise:c,SymbolAsyncIterator:n,SymbolDispose:t}=We(),r=Nt(),{once:e}=rt(),i=en(),s=_t(),{aggregateTwoErrors:f,codes:{ERR_INVALID_ARG_TYPE:h,ERR_INVALID_RETURN_VALUE:b,ERR_MISSING_ARGS:p,ERR_STREAM_DESTROYED:o,ERR_STREAM_PREMATURE_CLOSE:v},AbortError:w}=nt(),{validateFunction:g,validateAbortSignal:k}=bn(),{isIterable:_,isReadable:y,isReadableNodeStream:T,isNodeStream:S,isTransformStream:E,isWebStream:P,isReadableStream:O,isReadableFinished:B}=St(),I=globalThis.AbortController||gn().AbortController,z,F,D;function pe(re,_e,X){let L=!1;re.on("close",()=>{L=!0});let oe=r(re,{readable:_e,writable:X},K=>{L=!K});return{destroy:K=>{L||(L=!0,i.destroyer(re,K||new o("pipe")))},cleanup:oe}}function V(re){return g(re[re.length-1],"streams[stream.length - 1]"),re.pop()}function Q(re){if(_(re))return re;if(T(re))return ie(re);throw new h("val",["Readable","Iterable","AsyncIterable"],re)}async function*ie(re){F||(F=er()),yield*F.prototype[n].call(re)}async function W(re,_e,X,{end:L}){let oe,K=null,Y=de=>{if(de&&(oe=de),K){let U=K;K=null,U()}},ee=()=>new c((de,U)=>{oe?U(oe):K=()=>{oe?U(oe):de()}});_e.on("drain",Y);let ye=r(_e,{readable:!1},Y);try{_e.writableNeedDrain&&await ee();for await(let de of re)_e.write(de)||await ee();L&&(_e.end(),await ee()),X()}catch(de){X(oe!==de?f(oe,de):de)}finally{ye(),_e.off("drain",Y)}}async function te(re,_e,X,{end:L}){E(_e)&&(_e=_e.writable);let oe=_e.getWriter();try{for await(let K of re)await oe.ready,oe.write(K).catch(()=>{});await oe.ready,L&&await oe.close(),X()}catch(K){try{await oe.abort(K),X(K)}catch(Y){X(Y)}}}function N(...re){return Z(re,e(V(re)))}function Z(re,_e,X){if(re.length===1&&a(re[0])&&(re=re[0]),re.length<2)throw new p("streams");let L=new I,oe=L.signal,K=X?.signal,Y=[];k(K,"options.signal");function ee(){be(new w)}D=D||rt().addAbortListener;let ye;K&&(ye=D(K,ee));let de,U,H=[],ne=0;function ge(le){be(le,--ne===0)}function be(le,ae){var Ee;if(le&&(!de||de.code==="ERR_STREAM_PREMATURE_CLOSE")&&(de=le),!(!de&&!ae)){for(;H.length;)H.shift()(de);(Ee=ye)===null||Ee===void 0||Ee[t](),L.abort(),ae&&(de||Y.forEach(d=>d()),l.nextTick(_e,de,U))}}let $;for(let le=0;le<re.length;le++){let ae=re[le],Ee=le<re.length-1,d=le>0,x=Ee||X?.end!==!1,A=le===re.length-1;if(S(ae)){let j=function(J){J&&J.name!=="AbortError"&&J.code!=="ERR_STREAM_PREMATURE_CLOSE"&&ge(J)};if(x){let{destroy:J,cleanup:ue}=pe(ae,Ee,d);H.push(J),y(ae)&&A&&Y.push(ue)}ae.on("error",j),y(ae)&&A&&Y.push(()=>{ae.removeListener("error",j)})}if(le===0)if(typeof ae=="function"){if($=ae({signal:oe}),!_($))throw new b("Iterable, AsyncIterable or Stream","source",$)}else _(ae)||T(ae)||E(ae)?$=ae:$=s.from(ae);else if(typeof ae=="function"){if(E($)){var M;$=Q((M=$)===null||M===void 0?void 0:M.readable)}else $=Q($);if($=ae($,{signal:oe}),Ee){if(!_($,!0))throw new b("AsyncIterable",`transform[${le-1}]`,$)}else{var ce;z||(z=la());let j=new z({objectMode:!0}),J=(ce=$)===null||ce===void 0?void 0:ce.then;if(typeof J=="function")ne++,J.call($,G=>{U=G,G!=null&&j.write(G),x&&j.end(),l.nextTick(ge)},G=>{j.destroy(G),l.nextTick(ge,G)});else if(_($,!0))ne++,W($,j,ge,{end:x});else if(O($)||E($)){let G=$.readable||$;ne++,W(G,j,ge,{end:x})}else throw new b("AsyncIterable or Promise","destination",$);$=j;let{destroy:ue,cleanup:ke}=pe($,!1,!0);H.push(ue),A&&Y.push(ke)}}else if(S(ae)){if(T($)){ne+=2;let j=we($,ae,ge,{end:x});y(ae)&&A&&Y.push(j)}else if(E($)||O($)){let j=$.readable||$;ne++,W(j,ae,ge,{end:x})}else if(_($))ne++,W($,ae,ge,{end:x});else throw new h("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],$);$=ae}else if(P(ae)){if(T($))ne++,te(Q($),ae,ge,{end:x});else if(O($)||_($))ne++,te($,ae,ge,{end:x});else if(E($))ne++,te($.readable,ae,ge,{end:x});else throw new h("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],$);$=ae}else $=s.from(ae)}return(oe!=null&&oe.aborted||K!=null&&K.aborted)&&l.nextTick(ee),$}function we(re,_e,X,{end:L}){let oe=!1;if(_e.on("close",()=>{oe||X(new v)}),re.pipe(_e,{end:!1}),L){let K=function(){oe=!0,_e.end()};B(re)?l.nextTick(K):re.once("end",K)}else X();return r(re,{readable:!0,writable:!1},K=>{let Y=re._readableState;K&&K.code==="ERR_STREAM_PREMATURE_CLOSE"&&Y&&Y.ended&&!Y.errored&&!Y.errorEmitted?re.once("end",X).once("error",X):X(K)}),r(_e,{readable:!1,writable:!0},X)}m.exports={pipelineImpl:Z,pipeline:N}}),ca=ve((u,m)=>{he(),me(),fe();var{pipeline:l}=ps(),a=_t(),{destroyer:c}=en(),{isNodeStream:n,isReadable:t,isWritable:r,isWebStream:e,isTransformStream:i,isWritableStream:s,isReadableStream:f}=St(),{AbortError:h,codes:{ERR_INVALID_ARG_VALUE:b,ERR_MISSING_ARGS:p}}=nt(),o=Nt();m.exports=function(...v){if(v.length===0)throw new p("streams");if(v.length===1)return a.from(v[0]);let w=[...v];if(typeof v[0]=="function"&&(v[0]=a.from(v[0])),typeof v[v.length-1]=="function"){let I=v.length-1;v[I]=a.from(v[I])}for(let I=0;I<v.length;++I)if(!(!n(v[I])&&!e(v[I]))){if(I<v.length-1&&!(t(v[I])||f(v[I])||i(v[I])))throw new b(`streams[${I}]`,w[I],"must be readable");if(I>0&&!(r(v[I])||s(v[I])||i(v[I])))throw new b(`streams[${I}]`,w[I],"must be writable")}let g,k,_,y,T;function S(I){let z=y;y=null,z?z(I):I?T.destroy(I):!B&&!O&&T.destroy()}let E=v[0],P=l(v,S),O=!!(r(E)||s(E)||i(E)),B=!!(t(P)||f(P)||i(P));if(T=new a({writableObjectMode:!!(E!=null&&E.writableObjectMode),readableObjectMode:!!(P!=null&&P.readableObjectMode),writable:O,readable:B}),O){if(n(E))T._write=function(z,F,D){E.write(z,F)?D():g=D},T._final=function(z){E.end(),k=z},E.on("drain",function(){if(g){let z=g;g=null,z()}});else if(e(E)){let z=(i(E)?E.writable:E).getWriter();T._write=async function(F,D,pe){try{await z.ready,z.write(F).catch(()=>{}),pe()}catch(V){pe(V)}},T._final=async function(F){try{await z.ready,z.close().catch(()=>{}),k=F}catch(D){F(D)}}}let I=i(P)?P.readable:P;o(I,()=>{if(k){let z=k;k=null,z()}})}if(B){if(n(P))P.on("readable",function(){if(_){let I=_;_=null,I()}}),P.on("end",function(){T.push(null)}),T._read=function(){for(;;){let I=P.read();if(I===null){_=T._read;return}if(!T.push(I))return}};else if(e(P)){let I=(i(P)?P.readable:P).getReader();T._read=async function(){for(;;)try{let{value:z,done:F}=await I.read();if(!T.push(z))return;if(F){T.push(null);return}}catch{return}}}}return T._destroy=function(I,z){!I&&y!==null&&(I=new h),_=null,g=null,k=null,y===null?z(I):(y=z,n(P)&&c(P,I))},T}}),Vl=ve((u,m)=>{he(),me(),fe();var l=globalThis.AbortController||gn().AbortController,{codes:{ERR_INVALID_ARG_VALUE:a,ERR_INVALID_ARG_TYPE:c,ERR_MISSING_ARGS:n,ERR_OUT_OF_RANGE:t},AbortError:r}=nt(),{validateAbortSignal:e,validateInteger:i,validateObject:s}=bn(),f=We().Symbol("kWeak"),h=We().Symbol("kResistStopPropagation"),{finished:b}=Nt(),p=ca(),{addAbortSignalNoValidate:o}=Xn(),{isWritable:v,isNodeStream:w}=St(),{deprecate:g}=rt(),{ArrayPrototypePush:k,Boolean:_,MathFloor:y,Number:T,NumberIsNaN:S,Promise:E,PromiseReject:P,PromiseResolve:O,PromisePrototypeThen:B,Symbol:I}=We(),z=I("kEmpty"),F=I("kEof");function D(K,Y){if(Y!=null&&s(Y,"options"),Y?.signal!=null&&e(Y.signal,"options.signal"),w(K)&&!v(K))throw new a("stream",K,"must be writable");let ee=p(this,K);return Y!=null&&Y.signal&&o(Y.signal,ee),ee}function pe(K,Y){if(typeof K!="function")throw new c("fn",["Function","AsyncFunction"],K);Y!=null&&s(Y,"options"),Y?.signal!=null&&e(Y.signal,"options.signal");let ee=1;Y?.concurrency!=null&&(ee=y(Y.concurrency));let ye=ee-1;return Y?.highWaterMark!=null&&(ye=y(Y.highWaterMark)),i(ee,"options.concurrency",1),i(ye,"options.highWaterMark",0),ye+=ee,(async function*(){let de=rt().AbortSignalAny([Y?.signal].filter(_)),U=this,H=[],ne={signal:de},ge,be,$=!1,M=0;function ce(){$=!0,le()}function le(){M-=1,ae()}function ae(){be&&!$&&M<ee&&H.length<ye&&(be(),be=null)}async function Ee(){try{for await(let d of U){if($)return;if(de.aborted)throw new r;try{if(d=K(d,ne),d===z)continue;d=O(d)}catch(x){d=P(x)}M+=1,B(d,le,ce),H.push(d),ge&&(ge(),ge=null),!$&&(H.length>=ye||M>=ee)&&await new E(x=>{be=x})}H.push(F)}catch(d){let x=P(d);B(x,le,ce),H.push(x)}finally{$=!0,ge&&(ge(),ge=null)}}Ee();try{for(;;){for(;H.length>0;){let d=await H[0];if(d===F)return;if(de.aborted)throw new r;d!==z&&(yield d),H.shift(),ae()}await new E(d=>{ge=d})}}finally{$=!0,be&&(be(),be=null)}}).call(this)}function V(K=void 0){return K!=null&&s(K,"options"),K?.signal!=null&&e(K.signal,"options.signal"),(async function*(){let Y=0;for await(let ye of this){var ee;if(K!=null&&(ee=K.signal)!==null&&ee!==void 0&&ee.aborted)throw new r({cause:K.signal.reason});yield[Y++,ye]}}).call(this)}async function Q(K,Y=void 0){for await(let ee of N.call(this,K,Y))return!0;return!1}async function ie(K,Y=void 0){if(typeof K!="function")throw new c("fn",["Function","AsyncFunction"],K);return!await Q.call(this,async(...ee)=>!await K(...ee),Y)}async function W(K,Y){for await(let ee of N.call(this,K,Y))return ee}async function te(K,Y){if(typeof K!="function")throw new c("fn",["Function","AsyncFunction"],K);async function ee(ye,de){return await K(ye,de),z}for await(let ye of pe.call(this,ee,Y));}function N(K,Y){if(typeof K!="function")throw new c("fn",["Function","AsyncFunction"],K);async function ee(ye,de){return await K(ye,de)?ye:z}return pe.call(this,ee,Y)}var Z=class extends n{constructor(){super("reduce"),this.message="Reduce of an empty stream requires an initial value"}};async function we(K,Y,ee){var ye;if(typeof K!="function")throw new c("reducer",["Function","AsyncFunction"],K);ee!=null&&s(ee,"options"),ee?.signal!=null&&e(ee.signal,"options.signal");let de=arguments.length>1;if(ee!=null&&(ye=ee.signal)!==null&&ye!==void 0&&ye.aborted){let be=new r(void 0,{cause:ee.signal.reason});throw this.once("error",()=>{}),await b(this.destroy(be)),be}let U=new l,H=U.signal;if(ee!=null&&ee.signal){let be={once:!0,[f]:this,[h]:!0};ee.signal.addEventListener("abort",()=>U.abort(),be)}let ne=!1;try{for await(let be of this){var ge;if(ne=!0,ee!=null&&(ge=ee.signal)!==null&&ge!==void 0&&ge.aborted)throw new r;de?Y=await K(Y,be,{signal:H}):(Y=be,de=!0)}if(!ne&&!de)throw new Z}finally{U.abort()}return Y}async function re(K){K!=null&&s(K,"options"),K?.signal!=null&&e(K.signal,"options.signal");let Y=[];for await(let ye of this){var ee;if(K!=null&&(ee=K.signal)!==null&&ee!==void 0&&ee.aborted)throw new r(void 0,{cause:K.signal.reason});k(Y,ye)}return Y}function _e(K,Y){let ee=pe.call(this,K,Y);return(async function*(){for await(let ye of ee)yield*ye}).call(this)}function X(K){if(K=T(K),S(K))return 0;if(K<0)throw new t("number",">= 0",K);return K}function L(K,Y=void 0){return Y!=null&&s(Y,"options"),Y?.signal!=null&&e(Y.signal,"options.signal"),K=X(K),(async function*(){var ee;if(Y!=null&&(ee=Y.signal)!==null&&ee!==void 0&&ee.aborted)throw new r;for await(let de of this){var ye;if(Y!=null&&(ye=Y.signal)!==null&&ye!==void 0&&ye.aborted)throw new r;K--<=0&&(yield de)}}).call(this)}function oe(K,Y=void 0){return Y!=null&&s(Y,"options"),Y?.signal!=null&&e(Y.signal,"options.signal"),K=X(K),(async function*(){var ee;if(Y!=null&&(ee=Y.signal)!==null&&ee!==void 0&&ee.aborted)throw new r;for await(let de of this){var ye;if(Y!=null&&(ye=Y.signal)!==null&&ye!==void 0&&ye.aborted)throw new r;if(K-- >0&&(yield de),K<=0)return}}).call(this)}m.exports.streamReturningOperators={asIndexedPairs:g(V,"readable.asIndexedPairs will be removed in a future version."),drop:L,filter:N,flatMap:_e,map:pe,take:oe,compose:D},m.exports.promiseReturningOperators={every:ie,forEach:te,reduce:we,toArray:re,some:Q,find:W}}),da=ve((u,m)=>{he(),me(),fe();var{ArrayPrototypePop:l,Promise:a}=We(),{isIterable:c,isNodeStream:n,isWebStream:t}=St(),{pipelineImpl:r}=ps(),{finished:e}=Nt();ua();function i(...s){return new a((f,h)=>{let b,p,o=s[s.length-1];if(o&&typeof o=="object"&&!n(o)&&!c(o)&&!t(o)){let v=l(s);b=v.signal,p=v.end}r(s,(v,w)=>{v?h(v):f(w)},{signal:b,end:p})})}m.exports={finished:e,pipeline:i}}),ua=ve((u,m)=>{he(),me(),fe();var{Buffer:l}=(Qe(),Be(Ve)),{ObjectDefineProperty:a,ObjectKeys:c,ReflectApply:n}=We(),{promisify:{custom:t}}=rt(),{streamReturningOperators:r,promiseReturningOperators:e}=Vl(),{codes:{ERR_ILLEGAL_CONSTRUCTOR:i}}=nt(),s=ca(),{setDefaultHighWaterMark:f,getDefaultHighWaterMark:h}=Zn(),{pipeline:b}=ps(),{destroyer:p}=en(),o=Nt(),v=da(),w=St(),g=m.exports=ds().Stream;g.isDestroyed=w.isDestroyed,g.isDisturbed=w.isDisturbed,g.isErrored=w.isErrored,g.isReadable=w.isReadable,g.isWritable=w.isWritable,g.Readable=er();for(let _ of c(r)){let y=function(...S){if(new.target)throw i();return g.Readable.from(n(T,this,S))},T=r[_];a(y,"name",{__proto__:null,value:T.name}),a(y,"length",{__proto__:null,value:T.length}),a(g.Readable.prototype,_,{__proto__:null,value:y,enumerable:!1,configurable:!0,writable:!0})}for(let _ of c(e)){let y=function(...S){if(new.target)throw i();return n(T,this,S)},T=e[_];a(y,"name",{__proto__:null,value:T.name}),a(y,"length",{__proto__:null,value:T.length}),a(g.Readable.prototype,_,{__proto__:null,value:y,enumerable:!1,configurable:!0,writable:!0})}g.Writable=us(),g.Duplex=_t(),g.Transform=aa(),g.PassThrough=la(),g.pipeline=b;var{addAbortSignal:k}=Xn();g.addAbortSignal=k,g.finished=o,g.destroy=p,g.compose=s,g.setDefaultHighWaterMark=f,g.getDefaultHighWaterMark=h,a(g,"promises",{__proto__:null,configurable:!0,enumerable:!0,get(){return v}}),a(b,t,{__proto__:null,enumerable:!0,get(){return v.pipeline}}),a(o,t,{__proto__:null,enumerable:!0,get(){return v.finished}}),g.Stream=g,g._isUint8Array=function(_){return _ instanceof Uint8Array},g._uint8ArrayToBuffer=function(_){return l.from(_.buffer,_.byteOffset,_.byteLength)}}),Ht=ve((u,m)=>{he(),me(),fe();var l=ua(),a=da(),c=l.Readable.destroy;m.exports=l.Readable,m.exports._uint8ArrayToBuffer=l._uint8ArrayToBuffer,m.exports._isUint8Array=l._isUint8Array,m.exports.isDisturbed=l.isDisturbed,m.exports.isErrored=l.isErrored,m.exports.isReadable=l.isReadable,m.exports.Readable=l.Readable,m.exports.Writable=l.Writable,m.exports.Duplex=l.Duplex,m.exports.Transform=l.Transform,m.exports.PassThrough=l.PassThrough,m.exports.addAbortSignal=l.addAbortSignal,m.exports.finished=l.finished,m.exports.destroy=l.destroy,m.exports.destroy=c,m.exports.pipeline=l.pipeline,m.exports.compose=l.compose,Object.defineProperty(l,"promises",{configurable:!0,enumerable:!0,get(){return a}}),m.exports.Stream=l.Stream,m.exports.default=m.exports}),Ql=ve((u,m)=>{he(),me(),fe(),typeof Object.create=="function"?m.exports=function(l,a){a&&(l.super_=a,l.prototype=Object.create(a.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}))}:m.exports=function(l,a){if(a){l.super_=a;var c=function(){};c.prototype=a.prototype,l.prototype=new c,l.prototype.constructor=l}}}),Gl=ve((u,m)=>{he(),me(),fe();var{Buffer:l}=(Qe(),Be(Ve)),a=Symbol.for("BufferList");function c(n){if(!(this instanceof c))return new c(n);c._init.call(this,n)}c._init=function(n){Object.defineProperty(this,a,{value:!0}),this._bufs=[],this.length=0,n&&this.append(n)},c.prototype._new=function(n){return new c(n)},c.prototype._offset=function(n){if(n===0)return[0,0];let t=0;for(let r=0;r<this._bufs.length;r++){let e=t+this._bufs[r].length;if(n<e||r===this._bufs.length-1)return[r,n-t];t=e}},c.prototype._reverseOffset=function(n){let t=n[0],r=n[1];for(let e=0;e<t;e++)r+=this._bufs[e].length;return r},c.prototype.getBuffers=function(){return this._bufs},c.prototype.get=function(n){if(n>this.length||n<0)return;let t=this._offset(n);return this._bufs[t[0]][t[1]]},c.prototype.slice=function(n,t){return typeof n=="number"&&n<0&&(n+=this.length),typeof t=="number"&&t<0&&(t+=this.length),this.copy(null,0,n,t)},c.prototype.copy=function(n,t,r,e){if((typeof r!="number"||r<0)&&(r=0),(typeof e!="number"||e>this.length)&&(e=this.length),r>=this.length||e<=0)return n||l.alloc(0);let i=!!n,s=this._offset(r),f=e-r,h=f,b=i&&t||0,p=s[1];if(r===0&&e===this.length){if(!i)return this._bufs.length===1?this._bufs[0]:l.concat(this._bufs,this.length);for(let o=0;o<this._bufs.length;o++)this._bufs[o].copy(n,b),b+=this._bufs[o].length;return n}if(h<=this._bufs[s[0]].length-p)return i?this._bufs[s[0]].copy(n,t,p,p+h):this._bufs[s[0]].slice(p,p+h);i||(n=l.allocUnsafe(f));for(let o=s[0];o<this._bufs.length;o++){let v=this._bufs[o].length-p;if(h>v)this._bufs[o].copy(n,b,p),b+=v;else{this._bufs[o].copy(n,b,p,p+h),b+=v;break}h-=v,p&&(p=0)}return n.length>b?n.slice(0,b):n},c.prototype.shallowSlice=function(n,t){if(n=n||0,t=typeof t!="number"?this.length:t,n<0&&(n+=this.length),t<0&&(t+=this.length),n===t)return this._new();let r=this._offset(n),e=this._offset(t),i=this._bufs.slice(r[0],e[0]+1);return e[1]===0?i.pop():i[i.length-1]=i[i.length-1].slice(0,e[1]),r[1]!==0&&(i[0]=i[0].slice(r[1])),this._new(i)},c.prototype.toString=function(n,t,r){return this.slice(t,r).toString(n)},c.prototype.consume=function(n){if(n=Math.trunc(n),Number.isNaN(n)||n<=0)return this;for(;this._bufs.length;)if(n>=this._bufs[0].length)n-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift();else{this._bufs[0]=this._bufs[0].slice(n),this.length-=n;break}return this},c.prototype.duplicate=function(){let n=this._new();for(let t=0;t<this._bufs.length;t++)n.append(this._bufs[t]);return n},c.prototype.append=function(n){return this._attach(n,c.prototype._appendBuffer)},c.prototype.prepend=function(n){return this._attach(n,c.prototype._prependBuffer,!0)},c.prototype._attach=function(n,t,r){if(n==null)return this;if(n.buffer)t.call(this,l.from(n.buffer,n.byteOffset,n.byteLength));else if(Array.isArray(n)){let[e,i]=r?[n.length-1,-1]:[0,1];for(let s=e;s>=0&&s<n.length;s+=i)this._attach(n[s],t,r)}else if(this._isBufferList(n)){let[e,i]=r?[n._bufs.length-1,-1]:[0,1];for(let s=e;s>=0&&s<n._bufs.length;s+=i)this._attach(n._bufs[s],t,r)}else typeof n=="number"&&(n=n.toString()),t.call(this,l.from(n));return this},c.prototype._appendBuffer=function(n){this._bufs.push(n),this.length+=n.length},c.prototype._prependBuffer=function(n){this._bufs.unshift(n),this.length+=n.length},c.prototype.indexOf=function(n,t,r){if(r===void 0&&typeof t=="string"&&(r=t,t=void 0),typeof n=="function"||Array.isArray(n))throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');if(typeof n=="number"?n=l.from([n]):typeof n=="string"?n=l.from(n,r):this._isBufferList(n)?n=n.slice():Array.isArray(n.buffer)?n=l.from(n.buffer,n.byteOffset,n.byteLength):l.isBuffer(n)||(n=l.from(n)),t=Number(t||0),isNaN(t)&&(t=0),t<0&&(t=this.length+t),t<0&&(t=0),n.length===0)return t>this.length?this.length:t;let e=this._offset(t),i=e[0],s=e[1];for(;i<this._bufs.length;i++){let f=this._bufs[i];for(;s<f.length;)if(f.length-s>=n.length){let h=f.indexOf(n,s);if(h!==-1)return this._reverseOffset([i,h]);s=f.length-n.length+1}else{let h=this._reverseOffset([i,s]);if(this._match(h,n))return h;s++}s=0}return-1},c.prototype._match=function(n,t){if(this.length-n<t.length)return!1;for(let r=0;r<t.length;r++)if(this.get(n+r)!==t[r])return!1;return!0},(function(){let n={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readBigInt64BE:8,readBigInt64LE:8,readBigUInt64BE:8,readBigUInt64LE:8,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1,readIntBE:null,readIntLE:null,readUIntBE:null,readUIntLE:null};for(let t in n)(function(r){n[r]===null?c.prototype[r]=function(e,i){return this.slice(e,e+i)[r](0,i)}:c.prototype[r]=function(e=0){return this.slice(e,e+n[r])[r](0)}})(t)})(),c.prototype._isBufferList=function(n){return n instanceof c||c.isBufferList(n)},c.isBufferList=function(n){return n!=null&&n[a]},m.exports=c}),Yl=ve((u,m)=>{he(),me(),fe();var l=Ht().Duplex,a=Ql(),c=Gl();function n(t){if(!(this instanceof n))return new n(t);if(typeof t=="function"){this._callback=t;let r=(function(e){this._callback&&(this._callback(e),this._callback=null)}).bind(this);this.on("pipe",function(e){e.on("error",r)}),this.on("unpipe",function(e){e.removeListener("error",r)}),t=null}c._init.call(this,t),l.call(this)}a(n,l),Object.assign(n.prototype,c.prototype),n.prototype._new=function(t){return new n(t)},n.prototype._write=function(t,r,e){this._appendBuffer(t),typeof e=="function"&&e()},n.prototype._read=function(t){if(!this.length)return this.push(null);t=Math.min(t,this.length),this.push(this.slice(0,t)),this.consume(t)},n.prototype.end=function(t){l.prototype.end.call(this,t),this._callback&&(this._callback(null,this.slice()),this._callback=null)},n.prototype._destroy=function(t,r){this._bufs.length=0,this.length=0,r(t)},n.prototype._isBufferList=function(t){return t instanceof n||t instanceof c||n.isBufferList(t)},n.isBufferList=c.isBufferList,m.exports=n,m.exports.BufferListStream=n,m.exports.BufferList=c}),Jl=ve((u,m)=>{he(),me(),fe();var l=class{constructor(){this.cmd=null,this.retain=!1,this.qos=0,this.dup=!1,this.length=-1,this.topic=null,this.payload=null}};m.exports=l}),pa=ve((u,m)=>{he(),me(),fe();var l=m.exports,{Buffer:a}=(Qe(),Be(Ve));l.types={0:"reserved",1:"connect",2:"connack",3:"publish",4:"puback",5:"pubrec",6:"pubrel",7:"pubcomp",8:"subscribe",9:"suback",10:"unsubscribe",11:"unsuback",12:"pingreq",13:"pingresp",14:"disconnect",15:"auth"},l.requiredHeaderFlags={1:0,2:0,4:0,5:0,6:2,7:0,8:2,9:0,10:2,11:0,12:0,13:0,14:0,15:0},l.requiredHeaderFlagsErrors={};for(let n in l.requiredHeaderFlags){let t=l.requiredHeaderFlags[n];l.requiredHeaderFlagsErrors[n]="Invalid header flag bits, must be 0x"+t.toString(16)+" for "+l.types[n]+" packet"}l.codes={};for(let n in l.types){let t=l.types[n];l.codes[t]=n}l.CMD_SHIFT=4,l.CMD_MASK=240,l.DUP_MASK=8,l.QOS_MASK=3,l.QOS_SHIFT=1,l.RETAIN_MASK=1,l.VARBYTEINT_MASK=127,l.VARBYTEINT_FIN_MASK=128,l.VARBYTEINT_MAX=268435455,l.SESSIONPRESENT_MASK=1,l.SESSIONPRESENT_HEADER=a.from([l.SESSIONPRESENT_MASK]),l.CONNACK_HEADER=a.from([l.codes.connack<<l.CMD_SHIFT]),l.USERNAME_MASK=128,l.PASSWORD_MASK=64,l.WILL_RETAIN_MASK=32,l.WILL_QOS_MASK=24,l.WILL_QOS_SHIFT=3,l.WILL_FLAG_MASK=4,l.CLEAN_SESSION_MASK=2,l.CONNECT_HEADER=a.from([l.codes.connect<<l.CMD_SHIFT]),l.properties={sessionExpiryInterval:17,willDelayInterval:24,receiveMaximum:33,maximumPacketSize:39,topicAliasMaximum:34,requestResponseInformation:25,requestProblemInformation:23,userProperties:38,authenticationMethod:21,authenticationData:22,payloadFormatIndicator:1,messageExpiryInterval:2,contentType:3,responseTopic:8,correlationData:9,maximumQoS:36,retainAvailable:37,assignedClientIdentifier:18,reasonString:31,wildcardSubscriptionAvailable:40,subscriptionIdentifiersAvailable:41,sharedSubscriptionAvailable:42,serverKeepAlive:19,responseInformation:26,serverReference:28,topicAlias:35,subscriptionIdentifier:11},l.propertiesCodes={};for(let n in l.properties){let t=l.properties[n];l.propertiesCodes[t]=n}l.propertiesTypes={sessionExpiryInterval:"int32",willDelayInterval:"int32",receiveMaximum:"int16",maximumPacketSize:"int32",topicAliasMaximum:"int16",requestResponseInformation:"byte",requestProblemInformation:"byte",userProperties:"pair",authenticationMethod:"string",authenticationData:"binary",payloadFormatIndicator:"byte",messageExpiryInterval:"int32",contentType:"string",responseTopic:"string",correlationData:"binary",maximumQoS:"int8",retainAvailable:"byte",assignedClientIdentifier:"string",reasonString:"string",wildcardSubscriptionAvailable:"byte",subscriptionIdentifiersAvailable:"byte",sharedSubscriptionAvailable:"byte",serverKeepAlive:"int16",responseInformation:"string",serverReference:"string",topicAlias:"int16",subscriptionIdentifier:"var"};function c(n){return[0,1,2].map(t=>[0,1].map(r=>[0,1].map(e=>{let i=a.alloc(1);return i.writeUInt8(l.codes[n]<<l.CMD_SHIFT|(r?l.DUP_MASK:0)|t<<l.QOS_SHIFT|e,0,!0),i})))}l.PUBLISH_HEADER=c("publish"),l.SUBSCRIBE_HEADER=c("subscribe"),l.SUBSCRIBE_OPTIONS_QOS_MASK=3,l.SUBSCRIBE_OPTIONS_NL_MASK=1,l.SUBSCRIBE_OPTIONS_NL_SHIFT=2,l.SUBSCRIBE_OPTIONS_RAP_MASK=1,l.SUBSCRIBE_OPTIONS_RAP_SHIFT=3,l.SUBSCRIBE_OPTIONS_RH_MASK=3,l.SUBSCRIBE_OPTIONS_RH_SHIFT=4,l.SUBSCRIBE_OPTIONS_RH=[0,16,32],l.SUBSCRIBE_OPTIONS_NL=4,l.SUBSCRIBE_OPTIONS_RAP=8,l.SUBSCRIBE_OPTIONS_QOS=[0,1,2],l.UNSUBSCRIBE_HEADER=c("unsubscribe"),l.ACKS={unsuback:c("unsuback"),puback:c("puback"),pubcomp:c("pubcomp"),pubrel:c("pubrel"),pubrec:c("pubrec")},l.SUBACK_HEADER=a.from([l.codes.suback<<l.CMD_SHIFT]),l.VERSION3=a.from([3]),l.VERSION4=a.from([4]),l.VERSION5=a.from([5]),l.VERSION131=a.from([131]),l.VERSION132=a.from([132]),l.QOS=[0,1,2].map(n=>a.from([n])),l.EMPTY={pingreq:a.from([l.codes.pingreq<<4,0]),pingresp:a.from([l.codes.pingresp<<4,0]),disconnect:a.from([l.codes.disconnect<<4,0])},l.MQTT5_PUBACK_PUBREC_CODES={0:"Success",16:"No matching subscribers",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",144:"Topic Name invalid",145:"Packet identifier in use",151:"Quota exceeded",153:"Payload format invalid"},l.MQTT5_PUBREL_PUBCOMP_CODES={0:"Success",146:"Packet Identifier not found"},l.MQTT5_SUBACK_CODES={0:"Granted QoS 0",1:"Granted QoS 1",2:"Granted QoS 2",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use",151:"Quota exceeded",158:"Shared Subscriptions not supported",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},l.MQTT5_UNSUBACK_CODES={0:"Success",17:"No subscription existed",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use"},l.MQTT5_DISCONNECT_CODES={0:"Normal disconnection",4:"Disconnect with Will Message",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",135:"Not authorized",137:"Server busy",139:"Server shutting down",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},l.MQTT5_AUTH_CODES={0:"Success",24:"Continue authentication",25:"Re-authenticate"}}),Xl=ve((u,m)=>{he(),me(),fe();var l=1e3,a=l*60,c=a*60,n=c*24,t=n*7,r=n*365.25;m.exports=function(h,b){b=b||{};var p=typeof h;if(p==="string"&&h.length>0)return e(h);if(p==="number"&&isFinite(h))return b.long?s(h):i(h);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(h))};function e(h){if(h=String(h),!(h.length>100)){var b=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(h);if(b){var p=parseFloat(b[1]),o=(b[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return p*r;case"weeks":case"week":case"w":return p*t;case"days":case"day":case"d":return p*n;case"hours":case"hour":case"hrs":case"hr":case"h":return p*c;case"minutes":case"minute":case"mins":case"min":case"m":return p*a;case"seconds":case"second":case"secs":case"sec":case"s":return p*l;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return p;default:return}}}}function i(h){var b=Math.abs(h);return b>=n?Math.round(h/n)+"d":b>=c?Math.round(h/c)+"h":b>=a?Math.round(h/a)+"m":b>=l?Math.round(h/l)+"s":h+"ms"}function s(h){var b=Math.abs(h);return b>=n?f(h,b,n,"day"):b>=c?f(h,b,c,"hour"):b>=a?f(h,b,a,"minute"):b>=l?f(h,b,l,"second"):h+" ms"}function f(h,b,p,o){var v=b>=p*1.5;return Math.round(h/p)+" "+o+(v?"s":"")}}),Zl=ve((u,m)=>{he(),me(),fe();function l(a){n.debug=n,n.default=n,n.coerce=f,n.disable=i,n.enable=r,n.enabled=s,n.humanize=Xl(),n.destroy=h,Object.keys(a).forEach(b=>{n[b]=a[b]}),n.names=[],n.skips=[],n.formatters={};function c(b){let p=0;for(let o=0;o<b.length;o++)p=(p<<5)-p+b.charCodeAt(o),p|=0;return n.colors[Math.abs(p)%n.colors.length]}n.selectColor=c;function n(b){let p,o=null,v,w;function g(...k){if(!g.enabled)return;let _=g,y=Number(new Date),T=y-(p||y);_.diff=T,_.prev=p,_.curr=y,p=y,k[0]=n.coerce(k[0]),typeof k[0]!="string"&&k.unshift("%O");let S=0;k[0]=k[0].replace(/%([a-zA-Z%])/g,(E,P)=>{if(E==="%%")return"%";S++;let O=n.formatters[P];if(typeof O=="function"){let B=k[S];E=O.call(_,B),k.splice(S,1),S--}return E}),n.formatArgs.call(_,k),(_.log||n.log).apply(_,k)}return g.namespace=b,g.useColors=n.useColors(),g.color=n.selectColor(b),g.extend=t,g.destroy=n.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,get:()=>o!==null?o:(v!==n.namespaces&&(v=n.namespaces,w=n.enabled(b)),w),set:k=>{o=k}}),typeof n.init=="function"&&n.init(g),g}function t(b,p){let o=n(this.namespace+(typeof p>"u"?":":p)+b);return o.log=this.log,o}function r(b){n.save(b),n.namespaces=b,n.names=[],n.skips=[];let p=(typeof b=="string"?b:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(let o of p)o[0]==="-"?n.skips.push(o.slice(1)):n.names.push(o)}function e(b,p){let o=0,v=0,w=-1,g=0;for(;o<b.length;)if(v<p.length&&(p[v]===b[o]||p[v]==="*"))p[v]==="*"?(w=v,g=o,v++):(o++,v++);else if(w!==-1)v=w+1,g++,o=g;else return!1;for(;v<p.length&&p[v]==="*";)v++;return v===p.length}function i(){let b=[...n.names,...n.skips.map(p=>"-"+p)].join(",");return n.enable(""),b}function s(b){for(let p of n.skips)if(e(b,p))return!1;for(let p of n.names)if(e(b,p))return!0;return!1}function f(b){return b instanceof Error?b.stack||b.message:b}function h(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}m.exports=l}),xt=ve((u,m)=>{he(),me(),fe(),u.formatArgs=a,u.save=c,u.load=n,u.useColors=l,u.storage=t(),u.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),u.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function l(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function a(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+m.exports.humanize(this.diff),!this.useColors)return;let i="color: "+this.color;e.splice(1,0,i,"color: inherit");let s=0,f=0;e[0].replace(/%[a-zA-Z%]/g,h=>{h!=="%%"&&(s++,h==="%c"&&(f=s))}),e.splice(f,0,i)}u.log=console.debug||console.log||(()=>{});function c(e){try{e?u.storage.setItem("debug",e):u.storage.removeItem("debug")}catch{}}function n(){let e;try{e=u.storage.getItem("debug")||u.storage.getItem("DEBUG")}catch{}return!e&&typeof Fe<"u"&&"env"in Fe&&(e=Fe.env.DEBUG),e}function t(){try{return localStorage}catch{}}m.exports=Zl()(u);var{formatters:r}=m.exports;r.j=function(e){try{return JSON.stringify(e)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}}}),ec=ve((u,m)=>{he(),me(),fe();var l=Yl(),{EventEmitter:a}=(Wt(),Be(Ot)),c=Jl(),n=pa(),t=xt()("mqtt-packet:parser"),r=class bi extends a{constructor(){super(),this.parser=this.constructor.parser}static parser(i){return this instanceof bi?(this.settings=i||{},this._states=["_parseHeader","_parseLength","_parsePayload","_newPacket"],this._resetState(),this):new bi().parser(i)}_resetState(){t("_resetState: resetting packet, error, _list, and _stateCounter"),this.packet=new c,this.error=null,this._list=l(),this._stateCounter=0}parse(i){for(this.error&&this._resetState(),this._list.append(i),t("parse: current state: %s",this._states[this._stateCounter]);(this.packet.length!==-1||this._list.length>0)&&this[this._states[this._stateCounter]]()&&!this.error;)this._stateCounter++,t("parse: state complete. _stateCounter is now: %d",this._stateCounter),t("parse: packet.length: %d, buffer list length: %d",this.packet.length,this._list.length),this._stateCounter>=this._states.length&&(this._stateCounter=0);return t("parse: exited while loop. packet: %d, buffer list length: %d",this.packet.length,this._list.length),this._list.length}_parseHeader(){let i=this._list.readUInt8(0),s=i>>n.CMD_SHIFT;this.packet.cmd=n.types[s];let f=i&15,h=n.requiredHeaderFlags[s];return h!=null&&f!==h?this._emitError(new Error(n.requiredHeaderFlagsErrors[s])):(this.packet.retain=(i&n.RETAIN_MASK)!==0,this.packet.qos=i>>n.QOS_SHIFT&n.QOS_MASK,this.packet.qos>2?this._emitError(new Error("Packet must not have both QoS bits set to 1")):(this.packet.dup=(i&n.DUP_MASK)!==0,t("_parseHeader: packet: %o",this.packet),this._list.consume(1),!0))}_parseLength(){let i=this._parseVarByteNum(!0);return i&&(this.packet.length=i.value,this._list.consume(i.bytes)),t("_parseLength %d",i.value),!!i}_parsePayload(){t("_parsePayload: payload %O",this._list);let i=!1;if(this.packet.length===0||this._list.length>=this.packet.length){switch(this._pos=0,this.packet.cmd){case"connect":this._parseConnect();break;case"connack":this._parseConnack();break;case"publish":this._parsePublish();break;case"puback":case"pubrec":case"pubrel":case"pubcomp":this._parseConfirmation();break;case"subscribe":this._parseSubscribe();break;case"suback":this._parseSuback();break;case"unsubscribe":this._parseUnsubscribe();break;case"unsuback":this._parseUnsuback();break;case"pingreq":case"pingresp":break;case"disconnect":this._parseDisconnect();break;case"auth":this._parseAuth();break;default:this._emitError(new Error("Not supported"))}i=!0}return t("_parsePayload complete result: %s",i),i}_parseConnect(){t("_parseConnect");let i,s,f,h,b={},p=this.packet,o=this._parseString();if(o===null)return this._emitError(new Error("Cannot parse protocolId"));if(o!=="MQTT"&&o!=="MQIsdp")return this._emitError(new Error("Invalid protocolId"));if(p.protocolId=o,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(p.protocolVersion=this._list.readUInt8(this._pos),p.protocolVersion>=128&&(p.bridgeMode=!0,p.protocolVersion=p.protocolVersion-128),p.protocolVersion!==3&&p.protocolVersion!==4&&p.protocolVersion!==5)return this._emitError(new Error("Invalid protocol version"));if(this._pos++,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(this._list.readUInt8(this._pos)&1)return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));b.username=this._list.readUInt8(this._pos)&n.USERNAME_MASK,b.password=this._list.readUInt8(this._pos)&n.PASSWORD_MASK,b.will=this._list.readUInt8(this._pos)&n.WILL_FLAG_MASK;let v=!!(this._list.readUInt8(this._pos)&n.WILL_RETAIN_MASK),w=(this._list.readUInt8(this._pos)&n.WILL_QOS_MASK)>>n.WILL_QOS_SHIFT;if(b.will)p.will={},p.will.retain=v,p.will.qos=w;else{if(v)return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));if(w)return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"))}if(p.clean=(this._list.readUInt8(this._pos)&n.CLEAN_SESSION_MASK)!==0,this._pos++,p.keepalive=this._parseNum(),p.keepalive===-1)return this._emitError(new Error("Packet too short"));if(p.protocolVersion===5){let k=this._parseProperties();Object.getOwnPropertyNames(k).length&&(p.properties=k)}let g=this._parseString();if(g===null)return this._emitError(new Error("Packet too short"));if(p.clientId=g,t("_parseConnect: packet.clientId: %s",p.clientId),b.will){if(p.protocolVersion===5){let k=this._parseProperties();Object.getOwnPropertyNames(k).length&&(p.will.properties=k)}if(i=this._parseString(),i===null)return this._emitError(new Error("Cannot parse will topic"));if(p.will.topic=i,t("_parseConnect: packet.will.topic: %s",p.will.topic),s=this._parseBuffer(),s===null)return this._emitError(new Error("Cannot parse will payload"));p.will.payload=s,t("_parseConnect: packet.will.paylaod: %s",p.will.payload)}if(b.username){if(h=this._parseString(),h===null)return this._emitError(new Error("Cannot parse username"));p.username=h,t("_parseConnect: packet.username: %s",p.username)}if(b.password){if(f=this._parseBuffer(),f===null)return this._emitError(new Error("Cannot parse password"));p.password=f}return this.settings=p,t("_parseConnect: complete"),p}_parseConnack(){t("_parseConnack");let i=this.packet;if(this._list.length<1)return null;let s=this._list.readUInt8(this._pos++);if(s>1)return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));if(i.sessionPresent=!!(s&n.SESSIONPRESENT_MASK),this.settings.protocolVersion===5)this._list.length>=2?i.reasonCode=this._list.readUInt8(this._pos++):i.reasonCode=0;else{if(this._list.length<2)return null;i.returnCode=this._list.readUInt8(this._pos++)}if(i.returnCode===-1||i.reasonCode===-1)return this._emitError(new Error("Cannot parse return code"));if(this.settings.protocolVersion===5){let f=this._parseProperties();Object.getOwnPropertyNames(f).length&&(i.properties=f)}t("_parseConnack: complete")}_parsePublish(){t("_parsePublish");let i=this.packet;if(i.topic=this._parseString(),i.topic===null)return this._emitError(new Error("Cannot parse topic"));if(!(i.qos>0&&!this._parseMessageId())){if(this.settings.protocolVersion===5){let s=this._parseProperties();Object.getOwnPropertyNames(s).length&&(i.properties=s)}i.payload=this._list.slice(this._pos,i.length),t("_parsePublish: payload from buffer list: %o",i.payload)}}_parseSubscribe(){t("_parseSubscribe");let i=this.packet,s,f,h,b,p,o,v;if(i.subscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let w=this._parseProperties();Object.getOwnPropertyNames(w).length&&(i.properties=w)}if(i.length<=0)return this._emitError(new Error("Malformed subscribe, no payload specified"));for(;this._pos<i.length;){if(s=this._parseString(),s===null)return this._emitError(new Error("Cannot parse topic"));if(this._pos>=i.length)return this._emitError(new Error("Malformed Subscribe Payload"));if(f=this._parseByte(),this.settings.protocolVersion===5){if(f&192)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))}else if(f&252)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));if(h=f&n.SUBSCRIBE_OPTIONS_QOS_MASK,h>2)return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));if(o=(f>>n.SUBSCRIBE_OPTIONS_NL_SHIFT&n.SUBSCRIBE_OPTIONS_NL_MASK)!==0,p=(f>>n.SUBSCRIBE_OPTIONS_RAP_SHIFT&n.SUBSCRIBE_OPTIONS_RAP_MASK)!==0,b=f>>n.SUBSCRIBE_OPTIONS_RH_SHIFT&n.SUBSCRIBE_OPTIONS_RH_MASK,b>2)return this._emitError(new Error("Invalid retain handling, must be <= 2"));v={topic:s,qos:h},this.settings.protocolVersion===5?(v.nl=o,v.rap=p,v.rh=b):this.settings.bridgeMode&&(v.rh=0,v.rap=!0,v.nl=!0),t("_parseSubscribe: push subscription `%s` to subscription",v),i.subscriptions.push(v)}}}_parseSuback(){t("_parseSuback");let i=this.packet;if(this.packet.granted=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let s=this._parseProperties();Object.getOwnPropertyNames(s).length&&(i.properties=s)}if(i.length<=0)return this._emitError(new Error("Malformed suback, no payload specified"));for(;this._pos<this.packet.length;){let s=this._list.readUInt8(this._pos++);if(this.settings.protocolVersion===5){if(!n.MQTT5_SUBACK_CODES[s])return this._emitError(new Error("Invalid suback code"))}else if(s>2&&s!==128)return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));this.packet.granted.push(s)}}}_parseUnsubscribe(){t("_parseUnsubscribe");let i=this.packet;if(i.unsubscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let s=this._parseProperties();Object.getOwnPropertyNames(s).length&&(i.properties=s)}if(i.length<=0)return this._emitError(new Error("Malformed unsubscribe, no payload specified"));for(;this._pos<i.length;){let s=this._parseString();if(s===null)return this._emitError(new Error("Cannot parse topic"));t("_parseUnsubscribe: push topic `%s` to unsubscriptions",s),i.unsubscriptions.push(s)}}}_parseUnsuback(){t("_parseUnsuback");let i=this.packet;if(!this._parseMessageId())return this._emitError(new Error("Cannot parse messageId"));if((this.settings.protocolVersion===3||this.settings.protocolVersion===4)&&i.length!==2)return this._emitError(new Error("Malformed unsuback, payload length must be 2"));if(i.length<=0)return this._emitError(new Error("Malformed unsuback, no payload specified"));if(this.settings.protocolVersion===5){let s=this._parseProperties();for(Object.getOwnPropertyNames(s).length&&(i.properties=s),i.granted=[];this._pos<this.packet.length;){let f=this._list.readUInt8(this._pos++);if(!n.MQTT5_UNSUBACK_CODES[f])return this._emitError(new Error("Invalid unsuback code"));this.packet.granted.push(f)}}}_parseConfirmation(){t("_parseConfirmation: packet.cmd: `%s`",this.packet.cmd);let i=this.packet;if(this._parseMessageId(),this.settings.protocolVersion===5){if(i.length>2){switch(i.reasonCode=this._parseByte(),this.packet.cmd){case"puback":case"pubrec":if(!n.MQTT5_PUBACK_PUBREC_CODES[i.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break;case"pubrel":case"pubcomp":if(!n.MQTT5_PUBREL_PUBCOMP_CODES[i.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break}t("_parseConfirmation: packet.reasonCode `%d`",i.reasonCode)}else i.reasonCode=0;if(i.length>3){let s=this._parseProperties();Object.getOwnPropertyNames(s).length&&(i.properties=s)}}return!0}_parseDisconnect(){let i=this.packet;if(t("_parseDisconnect"),this.settings.protocolVersion===5){this._list.length>0?(i.reasonCode=this._parseByte(),n.MQTT5_DISCONNECT_CODES[i.reasonCode]||this._emitError(new Error("Invalid disconnect reason code"))):i.reasonCode=0;let s=this._parseProperties();Object.getOwnPropertyNames(s).length&&(i.properties=s)}return t("_parseDisconnect result: true"),!0}_parseAuth(){t("_parseAuth");let i=this.packet;if(this.settings.protocolVersion!==5)return this._emitError(new Error("Not supported auth packet for this version MQTT"));if(i.reasonCode=this._parseByte(),!n.MQTT5_AUTH_CODES[i.reasonCode])return this._emitError(new Error("Invalid auth reason code"));let s=this._parseProperties();return Object.getOwnPropertyNames(s).length&&(i.properties=s),t("_parseAuth: result: true"),!0}_parseMessageId(){let i=this.packet;return i.messageId=this._parseNum(),i.messageId===null?(this._emitError(new Error("Cannot parse messageId")),!1):(t("_parseMessageId: packet.messageId %d",i.messageId),!0)}_parseString(i){let s=this._parseNum(),f=s+this._pos;if(s===-1||f>this._list.length||f>this.packet.length)return null;let h=this._list.toString("utf8",this._pos,f);return this._pos+=s,t("_parseString: result: %s",h),h}_parseStringPair(){return t("_parseStringPair"),{name:this._parseString(),value:this._parseString()}}_parseBuffer(){let i=this._parseNum(),s=i+this._pos;if(i===-1||s>this._list.length||s>this.packet.length)return null;let f=this._list.slice(this._pos,s);return this._pos+=i,t("_parseBuffer: result: %o",f),f}_parseNum(){if(this._list.length-this._pos<2)return-1;let i=this._list.readUInt16BE(this._pos);return this._pos+=2,t("_parseNum: result: %s",i),i}_parse4ByteNum(){if(this._list.length-this._pos<4)return-1;let i=this._list.readUInt32BE(this._pos);return this._pos+=4,t("_parse4ByteNum: result: %s",i),i}_parseVarByteNum(i){t("_parseVarByteNum");let s=4,f=0,h=1,b=0,p=!1,o,v=this._pos?this._pos:0;for(;f<s&&v+f<this._list.length;){if(o=this._list.readUInt8(v+f++),b+=h*(o&n.VARBYTEINT_MASK),h*=128,(o&n.VARBYTEINT_FIN_MASK)===0){p=!0;break}if(this._list.length<=f)break}return!p&&f===s&&this._list.length>=f&&this._emitError(new Error("Invalid variable byte integer")),v&&(this._pos+=f),p?i?p={bytes:f,value:b}:p=b:p=!1,t("_parseVarByteNum: result: %o",p),p}_parseByte(){let i;return this._pos<this._list.length&&(i=this._list.readUInt8(this._pos),this._pos++),t("_parseByte: result: %o",i),i}_parseByType(i){switch(t("_parseByType: type: %s",i),i){case"byte":return this._parseByte()!==0;case"int8":return this._parseByte();case"int16":return this._parseNum();case"int32":return this._parse4ByteNum();case"var":return this._parseVarByteNum();case"string":return this._parseString();case"pair":return this._parseStringPair();case"binary":return this._parseBuffer()}}_parseProperties(){t("_parseProperties");let i=this._parseVarByteNum(),s=this._pos+i,f={};for(;this._pos<s;){let h=this._parseByte();if(!h)return this._emitError(new Error("Cannot parse property code type")),!1;let b=n.propertiesCodes[h];if(!b)return this._emitError(new Error("Unknown property")),!1;if(b==="userProperties"){f[b]||(f[b]=Object.create(null));let p=this._parseByType(n.propertiesTypes[b]);if(f[b][p.name])if(Array.isArray(f[b][p.name]))f[b][p.name].push(p.value);else{let o=f[b][p.name];f[b][p.name]=[o],f[b][p.name].push(p.value)}else f[b][p.name]=p.value;continue}f[b]?Array.isArray(f[b])?f[b].push(this._parseByType(n.propertiesTypes[b])):(f[b]=[f[b]],f[b].push(this._parseByType(n.propertiesTypes[b]))):f[b]=this._parseByType(n.propertiesTypes[b])}return f}_newPacket(){return t("_newPacket"),this.packet&&(this._list.consume(this.packet.length),t("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d",this.packet.cmd,this.packet.payload,this.packet.length),this.emit("packet",this.packet)),t("_newPacket: new packet"),this.packet=new c,this._pos=0,!0}_emitError(i){t("_emitError",i),this.error=i,this.emit("error",i)}};m.exports=r}),tc=ve((u,m)=>{he(),me(),fe();var{Buffer:l}=(Qe(),Be(Ve)),a=65536,c={},n=l.isBuffer(l.from([1,2]).subarray(0,1));function t(s){let f=l.allocUnsafe(2);return f.writeUInt8(s>>8,0),f.writeUInt8(s&255,1),f}function r(){for(let s=0;s<a;s++)c[s]=t(s)}function e(s){let f=0,h=0,b=l.allocUnsafe(4);do f=s%128|0,s=s/128|0,s>0&&(f=f|128),b.writeUInt8(f,h++);while(s>0&&h<4);return s>0&&(h=0),n?b.subarray(0,h):b.slice(0,h)}function i(s){let f=l.allocUnsafe(4);return f.writeUInt32BE(s,0),f}m.exports={cache:c,generateCache:r,generateNumber:t,genBufVariableByteInt:e,generate4ByteBuffer:i}}),nc=ve((u,m)=>{he(),me(),fe(),typeof Fe>"u"||!Fe.version||Fe.version.indexOf("v0.")===0||Fe.version.indexOf("v1.")===0&&Fe.version.indexOf("v1.8.")!==0?m.exports={nextTick:l}:m.exports=Fe;function l(a,c,n,t){if(typeof a!="function")throw new TypeError('"callback" argument must be a function');var r=arguments.length,e,i;switch(r){case 0:case 1:return Fe.nextTick(a);case 2:return Fe.nextTick(function(){a.call(null,c)});case 3:return Fe.nextTick(function(){a.call(null,c,n)});case 4:return Fe.nextTick(function(){a.call(null,c,n,t)});default:for(e=new Array(r-1),i=0;i<e.length;)e[i++]=arguments[i];return Fe.nextTick(function(){a.apply(null,e)})}}}),ha=ve((u,m)=>{he(),me(),fe();var l=pa(),{Buffer:a}=(Qe(),Be(Ve)),c=a.allocUnsafe(0),n=a.from([0]),t=tc(),r=nc().nextTick,e=xt()("mqtt-packet:writeToStream"),i=t.cache,s=t.generateNumber,f=t.generateCache,h=t.genBufVariableByteInt,b=t.generate4ByteBuffer,p=V,o=!0;function v(X,L,oe){switch(e("generate called"),L.cork&&(L.cork(),r(w,L)),o&&(o=!1,f()),e("generate: packet.cmd: %s",X.cmd),X.cmd){case"connect":return g(X,L);case"connack":return k(X,L,oe);case"publish":return _(X,L,oe);case"puback":case"pubrec":case"pubrel":case"pubcomp":return y(X,L,oe);case"subscribe":return T(X,L,oe);case"suback":return S(X,L,oe);case"unsubscribe":return E(X,L,oe);case"unsuback":return P(X,L,oe);case"pingreq":case"pingresp":return O(X,L);case"disconnect":return B(X,L,oe);case"auth":return I(X,L,oe);default:return L.destroy(new Error("Unknown command")),!1}}Object.defineProperty(v,"cacheNumbers",{get(){return p===V},set(X){X?((!i||Object.keys(i).length===0)&&(o=!0),p=V):(o=!1,p=Q)}});function w(X){X.uncork()}function g(X,L,oe){let K=X||{},Y=K.protocolId||"MQTT",ee=K.protocolVersion||4,ye=K.will,de=K.clean,U=K.keepalive||0,H=K.clientId||"",ne=K.username,ge=K.password,be=K.properties;de===void 0&&(de=!0);let $=0;if(typeof Y!="string"&&!a.isBuffer(Y))return L.destroy(new Error("Invalid protocolId")),!1;if($+=Y.length+2,ee!==3&&ee!==4&&ee!==5)return L.destroy(new Error("Invalid protocol version")),!1;if($+=1,(typeof H=="string"||a.isBuffer(H))&&(H||ee>=4)&&(H||de))$+=a.byteLength(H)+2;else{if(ee<4)return L.destroy(new Error("clientId must be supplied before 3.1.1")),!1;if(de*1===0)return L.destroy(new Error("clientId must be given if cleanSession set to 0")),!1}if(typeof U!="number"||U<0||U>65535||U%1!==0)return L.destroy(new Error("Invalid keepalive")),!1;$+=2,$+=1;let M,ce;if(ee===5){if(M=te(L,be),!M)return!1;$+=M.length}if(ye){if(typeof ye!="object")return L.destroy(new Error("Invalid will")),!1;if(!ye.topic||typeof ye.topic!="string")return L.destroy(new Error("Invalid will topic")),!1;if($+=a.byteLength(ye.topic)+2,$+=2,ye.payload)if(ye.payload.length>=0)typeof ye.payload=="string"?$+=a.byteLength(ye.payload):$+=ye.payload.length;else return L.destroy(new Error("Invalid will payload")),!1;if(ce={},ee===5){if(ce=te(L,ye.properties),!ce)return!1;$+=ce.length}}let le=!1;if(ne!=null)if(_e(ne))le=!0,$+=a.byteLength(ne)+2;else return L.destroy(new Error("Invalid username")),!1;if(ge!=null){if(!le)return L.destroy(new Error("Username is required to use password")),!1;if(_e(ge))$+=re(ge)+2;else return L.destroy(new Error("Invalid password")),!1}L.write(l.CONNECT_HEADER),F(L,$),W(L,Y),K.bridgeMode&&(ee+=128),L.write(ee===131?l.VERSION131:ee===132?l.VERSION132:ee===4?l.VERSION4:ee===5?l.VERSION5:l.VERSION3);let ae=0;return ae|=ne!=null?l.USERNAME_MASK:0,ae|=ge!=null?l.PASSWORD_MASK:0,ae|=ye&&ye.retain?l.WILL_RETAIN_MASK:0,ae|=ye&&ye.qos?ye.qos<<l.WILL_QOS_SHIFT:0,ae|=ye?l.WILL_FLAG_MASK:0,ae|=de?l.CLEAN_SESSION_MASK:0,L.write(a.from([ae])),p(L,U),ee===5&&M.write(),W(L,H),ye&&(ee===5&&ce.write(),D(L,ye.topic),W(L,ye.payload)),ne!=null&&W(L,ne),ge!=null&&W(L,ge),!0}function k(X,L,oe){let K=oe?oe.protocolVersion:4,Y=X||{},ee=K===5?Y.reasonCode:Y.returnCode,ye=Y.properties,de=2;if(typeof ee!="number")return L.destroy(new Error("Invalid return code")),!1;let U=null;if(K===5){if(U=te(L,ye),!U)return!1;de+=U.length}return L.write(l.CONNACK_HEADER),F(L,de),L.write(Y.sessionPresent?l.SESSIONPRESENT_HEADER:n),L.write(a.from([ee])),U?.write(),!0}function _(X,L,oe){e("publish: packet: %o",X);let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.qos||0,ye=Y.retain?l.RETAIN_MASK:0,de=Y.topic,U=Y.payload||c,H=Y.messageId,ne=Y.properties,ge=0;if(typeof de=="string")ge+=a.byteLength(de)+2;else if(a.isBuffer(de))ge+=de.length+2;else return L.destroy(new Error("Invalid topic")),!1;if(a.isBuffer(U)?ge+=U.length:ge+=a.byteLength(U),ee&&typeof H!="number")return L.destroy(new Error("Invalid messageId")),!1;ee&&(ge+=2);let be=null;if(K===5){if(be=te(L,ne),!be)return!1;ge+=be.length}return L.write(l.PUBLISH_HEADER[ee][Y.dup?1:0][ye?1:0]),F(L,ge),p(L,re(de)),L.write(de),ee>0&&p(L,H),be?.write(),e("publish: payload: %o",U),L.write(U)}function y(X,L,oe){let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.cmd||"puback",ye=Y.messageId,de=Y.dup&&ee==="pubrel"?l.DUP_MASK:0,U=0,H=Y.reasonCode,ne=Y.properties,ge=K===5?3:2;if(ee==="pubrel"&&(U=1),typeof ye!="number")return L.destroy(new Error("Invalid messageId")),!1;let be=null;if(K===5&&typeof ne=="object"){if(be=N(L,ne,oe,ge),!be)return!1;ge+=be.length}return L.write(l.ACKS[ee][U][de][0]),ge===3&&(ge+=H!==0?1:-1),F(L,ge),p(L,ye),K===5&&ge!==2&&L.write(a.from([H])),be!==null?be.write():ge===4&&L.write(a.from([0])),!0}function T(X,L,oe){e("subscribe: packet: ");let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.dup?l.DUP_MASK:0,ye=Y.messageId,de=Y.subscriptions,U=Y.properties,H=0;if(typeof ye!="number")return L.destroy(new Error("Invalid messageId")),!1;H+=2;let ne=null;if(K===5){if(ne=te(L,U),!ne)return!1;H+=ne.length}if(typeof de=="object"&&de.length)for(let be=0;be<de.length;be+=1){let $=de[be].topic,M=de[be].qos;if(typeof $!="string")return L.destroy(new Error("Invalid subscriptions - invalid topic")),!1;if(typeof M!="number")return L.destroy(new Error("Invalid subscriptions - invalid qos")),!1;if(K===5){if(typeof(de[be].nl||!1)!="boolean")return L.destroy(new Error("Invalid subscriptions - invalid No Local")),!1;if(typeof(de[be].rap||!1)!="boolean")return L.destroy(new Error("Invalid subscriptions - invalid Retain as Published")),!1;let ce=de[be].rh||0;if(typeof ce!="number"||ce>2)return L.destroy(new Error("Invalid subscriptions - invalid Retain Handling")),!1}H+=a.byteLength($)+2+1}else return L.destroy(new Error("Invalid subscriptions")),!1;e("subscribe: writing to stream: %o",l.SUBSCRIBE_HEADER),L.write(l.SUBSCRIBE_HEADER[1][ee?1:0][0]),F(L,H),p(L,ye),ne!==null&&ne.write();let ge=!0;for(let be of de){let $=be.topic,M=be.qos,ce=+be.nl,le=+be.rap,ae=be.rh,Ee;D(L,$),Ee=l.SUBSCRIBE_OPTIONS_QOS[M],K===5&&(Ee|=ce?l.SUBSCRIBE_OPTIONS_NL:0,Ee|=le?l.SUBSCRIBE_OPTIONS_RAP:0,Ee|=ae?l.SUBSCRIBE_OPTIONS_RH[ae]:0),ge=L.write(a.from([Ee]))}return ge}function S(X,L,oe){let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.messageId,ye=Y.granted,de=Y.properties,U=0;if(typeof ee!="number")return L.destroy(new Error("Invalid messageId")),!1;if(U+=2,typeof ye=="object"&&ye.length)for(let ne=0;ne<ye.length;ne+=1){if(typeof ye[ne]!="number")return L.destroy(new Error("Invalid qos vector")),!1;U+=1}else return L.destroy(new Error("Invalid qos vector")),!1;let H=null;if(K===5){if(H=N(L,de,oe,U),!H)return!1;U+=H.length}return L.write(l.SUBACK_HEADER),F(L,U),p(L,ee),H!==null&&H.write(),L.write(a.from(ye))}function E(X,L,oe){let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.messageId,ye=Y.dup?l.DUP_MASK:0,de=Y.unsubscriptions,U=Y.properties,H=0;if(typeof ee!="number")return L.destroy(new Error("Invalid messageId")),!1;if(H+=2,typeof de=="object"&&de.length)for(let be=0;be<de.length;be+=1){if(typeof de[be]!="string")return L.destroy(new Error("Invalid unsubscriptions")),!1;H+=a.byteLength(de[be])+2}else return L.destroy(new Error("Invalid unsubscriptions")),!1;let ne=null;if(K===5){if(ne=te(L,U),!ne)return!1;H+=ne.length}L.write(l.UNSUBSCRIBE_HEADER[1][ye?1:0][0]),F(L,H),p(L,ee),ne!==null&&ne.write();let ge=!0;for(let be=0;be<de.length;be++)ge=D(L,de[be]);return ge}function P(X,L,oe){let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.messageId,ye=Y.dup?l.DUP_MASK:0,de=Y.granted,U=Y.properties,H=Y.cmd,ne=0,ge=2;if(typeof ee!="number")return L.destroy(new Error("Invalid messageId")),!1;if(K===5)if(typeof de=="object"&&de.length)for(let $=0;$<de.length;$+=1){if(typeof de[$]!="number")return L.destroy(new Error("Invalid qos vector")),!1;ge+=1}else return L.destroy(new Error("Invalid qos vector")),!1;let be=null;if(K===5){if(be=N(L,U,oe,ge),!be)return!1;ge+=be.length}return L.write(l.ACKS[H][ne][ye][0]),F(L,ge),p(L,ee),be!==null&&be.write(),K===5&&L.write(a.from(de)),!0}function O(X,L,oe){return L.write(l.EMPTY[X.cmd])}function B(X,L,oe){let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.reasonCode,ye=Y.properties,de=K===5?1:0,U=null;if(K===5){if(U=N(L,ye,oe,de),!U)return!1;de+=U.length}return L.write(a.from([l.codes.disconnect<<4])),F(L,de),K===5&&L.write(a.from([ee])),U!==null&&U.write(),!0}function I(X,L,oe){let K=oe?oe.protocolVersion:4,Y=X||{},ee=Y.reasonCode,ye=Y.properties,de=K===5?1:0;K!==5&&L.destroy(new Error("Invalid mqtt version for auth packet"));let U=N(L,ye,oe,de);return U?(de+=U.length,L.write(a.from([l.codes.auth<<4])),F(L,de),L.write(a.from([ee])),U!==null&&U.write(),!0):!1}var z={};function F(X,L){if(L>l.VARBYTEINT_MAX)return X.destroy(new Error(`Invalid variable byte integer: ${L}`)),!1;let oe=z[L];return oe||(oe=h(L),L<16384&&(z[L]=oe)),e("writeVarByteInt: writing to stream: %o",oe),X.write(oe)}function D(X,L){let oe=a.byteLength(L);return p(X,oe),e("writeString: %s",L),X.write(L,"utf8")}function pe(X,L,oe){D(X,L),D(X,oe)}function V(X,L){return e("writeNumberCached: number: %d",L),e("writeNumberCached: %o",i[L]),X.write(i[L])}function Q(X,L){let oe=s(L);return e("writeNumberGenerated: %o",oe),X.write(oe)}function ie(X,L){let oe=b(L);return e("write4ByteNumber: %o",oe),X.write(oe)}function W(X,L){typeof L=="string"?D(X,L):L?(p(X,L.length),X.write(L)):p(X,0)}function te(X,L){if(typeof L!="object"||L.length!=null)return{length:1,write(){we(X,{},0)}};let oe=0;function K(Y,ee){let ye=l.propertiesTypes[Y],de=0;switch(ye){case"byte":{if(typeof ee!="boolean")return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=2;break}case"int8":{if(typeof ee!="number"||ee<0||ee>255)return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=2;break}case"binary":{if(ee&&ee===null)return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=1+a.byteLength(ee)+2;break}case"int16":{if(typeof ee!="number"||ee<0||ee>65535)return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=3;break}case"int32":{if(typeof ee!="number"||ee<0||ee>4294967295)return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=5;break}case"var":{if(typeof ee!="number"||ee<0||ee>268435455)return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=1+a.byteLength(h(ee));break}case"string":{if(typeof ee!="string")return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=3+a.byteLength(ee.toString());break}case"pair":{if(typeof ee!="object")return X.destroy(new Error(`Invalid ${Y}: ${ee}`)),!1;de+=Object.getOwnPropertyNames(ee).reduce((U,H)=>{let ne=ee[H];return Array.isArray(ne)?U+=ne.reduce((ge,be)=>(ge+=3+a.byteLength(H.toString())+2+a.byteLength(be.toString()),ge),0):U+=3+a.byteLength(H.toString())+2+a.byteLength(ee[H].toString()),U},0);break}default:return X.destroy(new Error(`Invalid property ${Y}: ${ee}`)),!1}return de}if(L)for(let Y in L){let ee=0,ye=0,de=L[Y];if(de!==void 0){if(Array.isArray(de))for(let U=0;U<de.length;U++){if(ye=K(Y,de[U]),!ye)return!1;ee+=ye}else{if(ye=K(Y,de),!ye)return!1;ee=ye}if(!ee)return!1;oe+=ee}}return{length:a.byteLength(h(oe))+oe,write(){we(X,L,oe)}}}function N(X,L,oe,K){let Y=["reasonString","userProperties"],ee=oe&&oe.properties&&oe.properties.maximumPacketSize?oe.properties.maximumPacketSize:0,ye=te(X,L);if(ee)for(;K+ye.length>ee;){let de=Y.shift();if(de&&L[de])delete L[de],ye=te(X,L);else return!1}return ye}function Z(X,L,oe){switch(l.propertiesTypes[L]){case"byte":{X.write(a.from([l.properties[L]])),X.write(a.from([+oe]));break}case"int8":{X.write(a.from([l.properties[L]])),X.write(a.from([oe]));break}case"binary":{X.write(a.from([l.properties[L]])),W(X,oe);break}case"int16":{X.write(a.from([l.properties[L]])),p(X,oe);break}case"int32":{X.write(a.from([l.properties[L]])),ie(X,oe);break}case"var":{X.write(a.from([l.properties[L]])),F(X,oe);break}case"string":{X.write(a.from([l.properties[L]])),D(X,oe);break}case"pair":{Object.getOwnPropertyNames(oe).forEach(K=>{let Y=oe[K];Array.isArray(Y)?Y.forEach(ee=>{X.write(a.from([l.properties[L]])),pe(X,K.toString(),ee.toString())}):(X.write(a.from([l.properties[L]])),pe(X,K.toString(),Y.toString()))});break}default:return X.destroy(new Error(`Invalid property ${L} value: ${oe}`)),!1}}function we(X,L,oe){F(X,oe);for(let K in L)if(Object.prototype.hasOwnProperty.call(L,K)&&L[K]!=null){let Y=L[K];if(Array.isArray(Y))for(let ee=0;ee<Y.length;ee++)Z(X,K,Y[ee]);else Z(X,K,Y)}}function re(X){return X?X instanceof a?X.length:a.byteLength(X):0}function _e(X){return typeof X=="string"||X instanceof a}m.exports=v}),rc=ve((u,m)=>{he(),me(),fe();var l=ha(),{EventEmitter:a}=(Wt(),Be(Ot)),{Buffer:c}=(Qe(),Be(Ve));function n(r,e){let i=new t;return l(r,i,e),i.concat()}var t=class extends a{constructor(){super(),this._array=new Array(20),this._i=0}write(r){return this._array[this._i++]=r,!0}concat(){let r=0,e=new Array(this._array.length),i=this._array,s=0,f;for(f=0;f<i.length&&i[f]!==void 0;f++)typeof i[f]!="string"?e[f]=i[f].length:e[f]=c.byteLength(i[f]),r+=e[f];let h=c.allocUnsafe(r);for(f=0;f<i.length&&i[f]!==void 0;f++)typeof i[f]!="string"?(i[f].copy(h,s),s+=e[f]):(h.write(i[f],s),s+=e[f]);return h}destroy(r){r&&this.emit("error",r)}};m.exports=n}),ic=ve(u=>{he(),me(),fe(),u.parser=ec().parser,u.generate=rc(),u.writeToStream=ha()}),sc=ve((u,m)=>{he(),me(),fe(),m.exports=a;function l(n){return n instanceof Gn?Gn.from(n):new n.constructor(n.buffer.slice(),n.byteOffset,n.length)}function a(n){if(n=n||{},n.circles)return c(n);let t=new Map;if(t.set(Date,f=>new Date(f)),t.set(Map,(f,h)=>new Map(e(Array.from(f),h))),t.set(Set,(f,h)=>new Set(e(Array.from(f),h))),n.constructorHandlers)for(let f of n.constructorHandlers)t.set(f[0],f[1]);let r=null;return n.proto?s:i;function e(f,h){let b=Object.keys(f),p=new Array(b.length);for(let o=0;o<b.length;o++){let v=b[o],w=f[v];typeof w!="object"||w===null?p[v]=w:w.constructor!==Object&&(r=t.get(w.constructor))?p[v]=r(w,h):ArrayBuffer.isView(w)?p[v]=l(w):p[v]=h(w)}return p}function i(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return e(f,i);if(f.constructor!==Object&&(r=t.get(f.constructor)))return r(f,i);let h={};for(let b in f){if(Object.hasOwnProperty.call(f,b)===!1)continue;let p=f[b];typeof p!="object"||p===null?h[b]=p:p.constructor!==Object&&(r=t.get(p.constructor))?h[b]=r(p,i):ArrayBuffer.isView(p)?h[b]=l(p):h[b]=i(p)}return h}function s(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return e(f,s);if(f.constructor!==Object&&(r=t.get(f.constructor)))return r(f,s);let h={};for(let b in f){let p=f[b];typeof p!="object"||p===null?h[b]=p:p.constructor!==Object&&(r=t.get(p.constructor))?h[b]=r(p,s):ArrayBuffer.isView(p)?h[b]=l(p):h[b]=s(p)}return h}}function c(n){let t=[],r=[],e=new Map;if(e.set(Date,b=>new Date(b)),e.set(Map,(b,p)=>new Map(s(Array.from(b),p))),e.set(Set,(b,p)=>new Set(s(Array.from(b),p))),n.constructorHandlers)for(let b of n.constructorHandlers)e.set(b[0],b[1]);let i=null;return n.proto?h:f;function s(b,p){let o=Object.keys(b),v=new Array(o.length);for(let w=0;w<o.length;w++){let g=o[w],k=b[g];if(typeof k!="object"||k===null)v[g]=k;else if(k.constructor!==Object&&(i=e.get(k.constructor)))v[g]=i(k,p);else if(ArrayBuffer.isView(k))v[g]=l(k);else{let _=t.indexOf(k);_!==-1?v[g]=r[_]:v[g]=p(k)}}return v}function f(b){if(typeof b!="object"||b===null)return b;if(Array.isArray(b))return s(b,f);if(b.constructor!==Object&&(i=e.get(b.constructor)))return i(b,f);let p={};t.push(b),r.push(p);for(let o in b){if(Object.hasOwnProperty.call(b,o)===!1)continue;let v=b[o];if(typeof v!="object"||v===null)p[o]=v;else if(v.constructor!==Object&&(i=e.get(v.constructor)))p[o]=i(v,f);else if(ArrayBuffer.isView(v))p[o]=l(v);else{let w=t.indexOf(v);w!==-1?p[o]=r[w]:p[o]=f(v)}}return t.pop(),r.pop(),p}function h(b){if(typeof b!="object"||b===null)return b;if(Array.isArray(b))return s(b,h);if(b.constructor!==Object&&(i=e.get(b.constructor)))return i(b,h);let p={};t.push(b),r.push(p);for(let o in b){let v=b[o];if(typeof v!="object"||v===null)p[o]=v;else if(v.constructor!==Object&&(i=e.get(v.constructor)))p[o]=i(v,h);else if(ArrayBuffer.isView(v))p[o]=l(v);else{let w=t.indexOf(v);w!==-1?p[o]=r[w]:p[o]=h(v)}}return t.pop(),r.pop(),p}}}),oc=ve((u,m)=>{he(),me(),fe(),m.exports=sc()()}),fa=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0}),u.validateTopic=m,u.validateTopics=l;function m(a){let c=a.split("/");for(let n=0;n<c.length;n++)if(c[n]!=="+"){if(c[n]==="#")return n===c.length-1;if(c[n].indexOf("+")!==-1||c[n].indexOf("#")!==-1)return!1}return!0}function l(a){if(a.length===0)return"empty_topic_list";for(let c=0;c<a.length;c++)if(!m(a[c]))return a[c];return null}}),ma=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=Ht(),l={objectMode:!0},a={clean:!0},c=class{options;_inflights;constructor(n){this.options=n||{},this.options={...a,...n},this._inflights=new Map}put(n,t){return this._inflights.set(n.messageId,n),t&&t(),this}createStream(){let n=new m.Readable(l),t=[],r=!1,e=0;return this._inflights.forEach((i,s)=>{t.push(i)}),n._read=()=>{!r&&e<t.length?n.push(t[e++]):n.push(null)},n.destroy=i=>{if(!r)return r=!0,setTimeout(()=>{n.emit("close")},0),n},n}del(n,t){let r=this._inflights.get(n.messageId);return r?(this._inflights.delete(n.messageId),t(null,r)):t&&t(new Error("missing packet")),this}get(n,t){let r=this._inflights.get(n.messageId);return r?t(null,r):t&&t(new Error("missing packet")),this}close(n){this.options.clean&&(this._inflights=null),n&&n()}};u.default=c}),ac=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=[0,16,128,131,135,144,145,151,153],l=(a,c,n)=>{a.log("handlePublish: packet %o",c),n=typeof n<"u"?n:a.noop;let t=c.topic.toString(),r=c.payload,{qos:e}=c,{messageId:i}=c,{options:s}=a;if(a.options.protocolVersion===5){let f;if(c.properties&&(f=c.properties.topicAlias),typeof f<"u")if(t.length===0)if(f>0&&f<=65535){let h=a.topicAliasRecv.getTopicByAlias(f);if(h)t=h,a.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d",t,f);else{a.log("handlePublish :: unregistered topic alias. alias: %d",f),a.emit("error",new Error("Received unregistered Topic Alias"));return}}else{a.log("handlePublish :: topic alias out of range. alias: %d",f),a.emit("error",new Error("Received Topic Alias is out of range"));return}else if(a.topicAliasRecv.put(t,f))a.log("handlePublish :: registered topic: %s - alias: %d",t,f);else{a.log("handlePublish :: topic alias out of range. alias: %d",f),a.emit("error",new Error("Received Topic Alias is out of range"));return}}switch(a.log("handlePublish: qos %d",e),e){case 2:{s.customHandleAcks(t,r,c,(f,h)=>{if(typeof f=="number"&&(h=f,f=null),f)return a.emit("error",f);if(m.indexOf(h)===-1)return a.emit("error",new Error("Wrong reason code for pubrec"));h?a._sendPacket({cmd:"pubrec",messageId:i,reasonCode:h},n):a.incomingStore.put(c,()=>{a._sendPacket({cmd:"pubrec",messageId:i},n)})});break}case 1:{s.customHandleAcks(t,r,c,(f,h)=>{if(typeof f=="number"&&(h=f,f=null),f)return a.emit("error",f);if(m.indexOf(h)===-1)return a.emit("error",new Error("Wrong reason code for puback"));h||a.emit("message",t,r,c),a.handleMessage(c,b=>{if(b)return n&&n(b);a._sendPacket({cmd:"puback",messageId:i,reasonCode:h},n)})});break}case 0:a.emit("message",t,r,c),a.handleMessage(c,n);break;default:a.log("handlePublish: unknown QoS. Doing nothing.");break}};u.default=l}),lc=ve((u,m)=>{m.exports={version:"5.15.0"}}),tn=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0}),u.MQTTJS_VERSION=u.nextTick=u.ErrorWithSubackPacket=u.ErrorWithReasonCode=void 0,u.applyMixin=a;var m=class ga extends Error{code;constructor(n,t){super(n),this.code=t,Object.setPrototypeOf(this,ga.prototype),Object.getPrototypeOf(this).name="ErrorWithReasonCode"}};u.ErrorWithReasonCode=m;var l=class ba extends Error{packet;constructor(n,t){super(n),this.packet=t,Object.setPrototypeOf(this,ba.prototype),Object.getPrototypeOf(this).name="ErrorWithSubackPacket"}};u.ErrorWithSubackPacket=l;function a(c,n,t=!1){let r=[n];for(;;){let e=r[0],i=Object.getPrototypeOf(e);if(i?.prototype)r.unshift(i);else break}for(let e of r)for(let i of Object.getOwnPropertyNames(e.prototype))(t||i!=="constructor")&&Object.defineProperty(c.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i)??Object.create(null))}u.nextTick=typeof Fe?.nextTick=="function"?Fe.nextTick:c=>{setTimeout(c,0)},u.MQTTJS_VERSION=lc().version}),tr=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0}),u.ReasonCodes=void 0;var m=tn();u.ReasonCodes={0:"",1:"Unacceptable protocol version",2:"Identifier rejected",3:"Server unavailable",4:"Bad username or password",5:"Not authorized",16:"No matching subscribers",17:"No subscription existed",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",132:"Unsupported Protocol Version",133:"Client Identifier not valid",134:"Bad User Name or Password",135:"Not authorized",136:"Server unavailable",137:"Server busy",138:"Banned",139:"Server shutting down",140:"Bad authentication method",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",145:"Packet identifier in use",146:"Packet Identifier not found",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"};var l=(a,c)=>{let{messageId:n}=c,t=c.cmd,r=null,e=a.outgoing[n]?a.outgoing[n].cb:null,i=null;if(!e){a.log("_handleAck :: Server sent an ack in error. Ignoring.");return}switch(a.log("_handleAck :: packet type",t),t){case"pubcomp":case"puback":{let s=c.reasonCode;s&&s>0&&s!==16?(i=new m.ErrorWithReasonCode(`Publish error: ${u.ReasonCodes[s]}`,s),a._removeOutgoingAndStoreMessage(n,()=>{e(i,c)})):a._removeOutgoingAndStoreMessage(n,e);break}case"pubrec":{r={cmd:"pubrel",qos:2,messageId:n};let s=c.reasonCode;s&&s>0&&s!==16?(i=new m.ErrorWithReasonCode(`Publish error: ${u.ReasonCodes[s]}`,s),a._removeOutgoingAndStoreMessage(n,()=>{e(i,c)})):a._sendPacket(r);break}case"suback":{delete a.outgoing[n],a.messageIdProvider.deallocate(n);let s=c.granted;for(let f=0;f<s.length;f++){let h=s[f];if((h&128)!==0){i=new Error(`Subscribe error: ${u.ReasonCodes[h]}`),i.code=h;let b=a.messageIdToTopic[n];b&&b.forEach(p=>{delete a._resubscribeTopics[p]})}}delete a.messageIdToTopic[n],a._invokeStoreProcessingQueue(),e(i,c);break}case"unsuback":{delete a.outgoing[n],a.messageIdProvider.deallocate(n),a._invokeStoreProcessingQueue(),e(null,c);break}default:a.emit("error",new Error("unrecognized packet type"))}a.disconnecting&&Object.keys(a.outgoing).length===0&&a.emit("outgoingEmpty")};u.default=l}),cc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=tn(),l=tr(),a=(c,n)=>{let{options:t}=c,r=t.protocolVersion,e=r===5?n.reasonCode:n.returnCode;if(r!==5){let i=new m.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${r}`,e);c.emit("error",i);return}c.handleAuth(n,(i,s)=>{if(i){c.emit("error",i);return}if(e===24)c.reconnecting=!1,c._sendPacket(s);else{let f=new m.ErrorWithReasonCode(`Connection refused: ${l.ReasonCodes[e]}`,e);c.emit("error",f)}})};u.default=a}),dc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0}),u.LRUCache=void 0;var m=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,l=new Set,a=typeof Fe=="object"&&Fe?Fe:{},c=(b,p,o,v)=>{typeof a.emitWarning=="function"?a.emitWarning(b,p,o,v):console.error(`[${o}] ${p}: ${b}`)},n=globalThis.AbortController,t=globalThis.AbortSignal;if(typeof n>"u"){t=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(o,v){this._onabort.push(v)}},n=class{constructor(){p()}signal=new t;abort(o){if(!this.signal.aborted){this.signal.reason=o,this.signal.aborted=!0;for(let v of this.signal._onabort)v(o);this.signal.onabort?.(o)}}};let b=a.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",p=()=>{b&&(b=!1,c("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",p))}}var r=b=>!l.has(b),e=b=>b&&b===Math.floor(b)&&b>0&&isFinite(b),i=b=>e(b)?b<=Math.pow(2,8)?Uint8Array:b<=Math.pow(2,16)?Uint16Array:b<=Math.pow(2,32)?Uint32Array:b<=Number.MAX_SAFE_INTEGER?s:null:null,s=class extends Array{constructor(b){super(b),this.fill(0)}},f=class pn{heap;length;static#l=!1;static create(p){let o=i(p);if(!o)return[];pn.#l=!0;let v=new pn(p,o);return pn.#l=!1,v}constructor(p,o){if(!pn.#l)throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new o(p),this.length=0}push(p){this.heap[this.length++]=p}pop(){return this.heap[--this.length]}},h=class va{#l;#u;#m;#g;#C;#P;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#i;#b;#r;#n;#e;#c;#p;#a;#s;#v;#o;#y;#w;#h;#k;#A;#d;static unsafeExposeInternals(p){return{starts:p.#w,ttls:p.#h,sizes:p.#y,keyMap:p.#r,keyList:p.#n,valList:p.#e,next:p.#c,prev:p.#p,get head(){return p.#a},get tail(){return p.#s},free:p.#v,isBackgroundFetch:o=>p.#t(o),backgroundFetch:(o,v,w,g)=>p.#R(o,v,w,g),moveToTail:o=>p.#M(o),indexes:o=>p.#_(o),rindexes:o=>p.#x(o),isStale:o=>p.#f(o)}}get max(){return this.#l}get maxSize(){return this.#u}get calculatedSize(){return this.#b}get size(){return this.#i}get fetchMethod(){return this.#C}get memoMethod(){return this.#P}get dispose(){return this.#m}get disposeAfter(){return this.#g}constructor(p){let{max:o=0,ttl:v,ttlResolution:w=1,ttlAutopurge:g,updateAgeOnGet:k,updateAgeOnHas:_,allowStale:y,dispose:T,disposeAfter:S,noDisposeOnSet:E,noUpdateTTL:P,maxSize:O=0,maxEntrySize:B=0,sizeCalculation:I,fetchMethod:z,memoMethod:F,noDeleteOnFetchRejection:D,noDeleteOnStaleGet:pe,allowStaleOnFetchRejection:V,allowStaleOnFetchAbort:Q,ignoreFetchAbort:ie}=p;if(o!==0&&!e(o))throw new TypeError("max option must be a nonnegative integer");let W=o?i(o):Array;if(!W)throw new Error("invalid max value: "+o);if(this.#l=o,this.#u=O,this.maxEntrySize=B||this.#u,this.sizeCalculation=I,this.sizeCalculation){if(!this.#u&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(F!==void 0&&typeof F!="function")throw new TypeError("memoMethod must be a function if defined");if(this.#P=F,z!==void 0&&typeof z!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#C=z,this.#A=!!z,this.#r=new Map,this.#n=new Array(o).fill(void 0),this.#e=new Array(o).fill(void 0),this.#c=new W(o),this.#p=new W(o),this.#a=0,this.#s=0,this.#v=f.create(o),this.#i=0,this.#b=0,typeof T=="function"&&(this.#m=T),typeof S=="function"?(this.#g=S,this.#o=[]):(this.#g=void 0,this.#o=void 0),this.#k=!!this.#m,this.#d=!!this.#g,this.noDisposeOnSet=!!E,this.noUpdateTTL=!!P,this.noDeleteOnFetchRejection=!!D,this.allowStaleOnFetchRejection=!!V,this.allowStaleOnFetchAbort=!!Q,this.ignoreFetchAbort=!!ie,this.maxEntrySize!==0){if(this.#u!==0&&!e(this.#u))throw new TypeError("maxSize must be a positive integer if specified");if(!e(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#D()}if(this.allowStale=!!y,this.noDeleteOnStaleGet=!!pe,this.updateAgeOnGet=!!k,this.updateAgeOnHas=!!_,this.ttlResolution=e(w)||w===0?w:1,this.ttlAutopurge=!!g,this.ttl=v||0,this.ttl){if(!e(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#U()}if(this.#l===0&&this.ttl===0&&this.#u===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#l&&!this.#u){let te="LRU_CACHE_UNBOUNDED";r(te)&&(l.add(te),c("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",te,va))}}getRemainingTTL(p){return this.#r.has(p)?1/0:0}#U(){let p=new s(this.#l),o=new s(this.#l);this.#h=p,this.#w=o,this.#L=(g,k,_=m.now())=>{if(o[g]=k!==0?_:0,p[g]=k,k!==0&&this.ttlAutopurge){let y=setTimeout(()=>{this.#f(g)&&this.#S(this.#n[g],"expire")},k+1);y.unref&&y.unref()}},this.#E=g=>{o[g]=p[g]!==0?m.now():0},this.#T=(g,k)=>{if(p[k]){let _=p[k],y=o[k];if(!_||!y)return;g.ttl=_,g.start=y,g.now=v||w();let T=g.now-y;g.remainingTTL=_-T}};let v=0,w=()=>{let g=m.now();if(this.ttlResolution>0){v=g;let k=setTimeout(()=>v=0,this.ttlResolution);k.unref&&k.unref()}return g};this.getRemainingTTL=g=>{let k=this.#r.get(g);if(k===void 0)return 0;let _=p[k],y=o[k];if(!_||!y)return 1/0;let T=(v||w())-y;return _-T},this.#f=g=>{let k=o[g],_=p[g];return!!_&&!!k&&(v||w())-k>_}}#E=()=>{};#T=()=>{};#L=()=>{};#f=()=>!1;#D(){let p=new s(this.#l);this.#b=0,this.#y=p,this.#I=o=>{this.#b-=p[o],p[o]=0},this.#q=(o,v,w,g)=>{if(this.#t(v))return 0;if(!e(w))if(g){if(typeof g!="function")throw new TypeError("sizeCalculation must be a function");if(w=g(v,o),!e(w))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return w},this.#O=(o,v,w)=>{if(p[o]=v,this.#u){let g=this.#u-p[o];for(;this.#b>g;)this.#N(!0)}this.#b+=p[o],w&&(w.entrySize=v,w.totalCalculatedSize=this.#b)}}#I=p=>{};#O=(p,o,v)=>{};#q=(p,o,v,w)=>{if(v||w)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#_({allowStale:p=this.allowStale}={}){if(this.#i)for(let o=this.#s;!(!this.#j(o)||((p||!this.#f(o))&&(yield o),o===this.#a));)o=this.#p[o]}*#x({allowStale:p=this.allowStale}={}){if(this.#i)for(let o=this.#a;!(!this.#j(o)||((p||!this.#f(o))&&(yield o),o===this.#s));)o=this.#c[o]}#j(p){return p!==void 0&&this.#r.get(this.#n[p])===p}*entries(){for(let p of this.#_())this.#e[p]!==void 0&&this.#n[p]!==void 0&&!this.#t(this.#e[p])&&(yield[this.#n[p],this.#e[p]])}*rentries(){for(let p of this.#x())this.#e[p]!==void 0&&this.#n[p]!==void 0&&!this.#t(this.#e[p])&&(yield[this.#n[p],this.#e[p]])}*keys(){for(let p of this.#_()){let o=this.#n[p];o!==void 0&&!this.#t(this.#e[p])&&(yield o)}}*rkeys(){for(let p of this.#x()){let o=this.#n[p];o!==void 0&&!this.#t(this.#e[p])&&(yield o)}}*values(){for(let p of this.#_())this.#e[p]!==void 0&&!this.#t(this.#e[p])&&(yield this.#e[p])}*rvalues(){for(let p of this.#x())this.#e[p]!==void 0&&!this.#t(this.#e[p])&&(yield this.#e[p])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(p,o={}){for(let v of this.#_()){let w=this.#e[v],g=this.#t(w)?w.__staleWhileFetching:w;if(g!==void 0&&p(g,this.#n[v],this))return this.get(this.#n[v],o)}}forEach(p,o=this){for(let v of this.#_()){let w=this.#e[v],g=this.#t(w)?w.__staleWhileFetching:w;g!==void 0&&p.call(o,g,this.#n[v],this)}}rforEach(p,o=this){for(let v of this.#x()){let w=this.#e[v],g=this.#t(w)?w.__staleWhileFetching:w;g!==void 0&&p.call(o,g,this.#n[v],this)}}purgeStale(){let p=!1;for(let o of this.#x({allowStale:!0}))this.#f(o)&&(this.#S(this.#n[o],"expire"),p=!0);return p}info(p){let o=this.#r.get(p);if(o===void 0)return;let v=this.#e[o],w=this.#t(v)?v.__staleWhileFetching:v;if(w===void 0)return;let g={value:w};if(this.#h&&this.#w){let k=this.#h[o],_=this.#w[o];if(k&&_){let y=k-(m.now()-_);g.ttl=y,g.start=Date.now()}}return this.#y&&(g.size=this.#y[o]),g}dump(){let p=[];for(let o of this.#_({allowStale:!0})){let v=this.#n[o],w=this.#e[o],g=this.#t(w)?w.__staleWhileFetching:w;if(g===void 0||v===void 0)continue;let k={value:g};if(this.#h&&this.#w){k.ttl=this.#h[o];let _=m.now()-this.#w[o];k.start=Math.floor(Date.now()-_)}this.#y&&(k.size=this.#y[o]),p.unshift([v,k])}return p}load(p){this.clear();for(let[o,v]of p){if(v.start){let w=Date.now()-v.start;v.start=m.now()-w}this.set(o,v.value,v)}}set(p,o,v={}){if(o===void 0)return this.delete(p),this;let{ttl:w=this.ttl,start:g,noDisposeOnSet:k=this.noDisposeOnSet,sizeCalculation:_=this.sizeCalculation,status:y}=v,{noUpdateTTL:T=this.noUpdateTTL}=v,S=this.#q(p,o,v.size||0,_);if(this.maxEntrySize&&S>this.maxEntrySize)return y&&(y.set="miss",y.maxEntrySizeExceeded=!0),this.#S(p,"set"),this;let E=this.#i===0?void 0:this.#r.get(p);if(E===void 0)E=this.#i===0?this.#s:this.#v.length!==0?this.#v.pop():this.#i===this.#l?this.#N(!1):this.#i,this.#n[E]=p,this.#e[E]=o,this.#r.set(p,E),this.#c[this.#s]=E,this.#p[E]=this.#s,this.#s=E,this.#i++,this.#O(E,S,y),y&&(y.set="add"),T=!1;else{this.#M(E);let P=this.#e[E];if(o!==P){if(this.#A&&this.#t(P)){P.__abortController.abort(new Error("replaced"));let{__staleWhileFetching:O}=P;O!==void 0&&!k&&(this.#k&&this.#m?.(O,p,"set"),this.#d&&this.#o?.push([O,p,"set"]))}else k||(this.#k&&this.#m?.(P,p,"set"),this.#d&&this.#o?.push([P,p,"set"]));if(this.#I(E),this.#O(E,S,y),this.#e[E]=o,y){y.set="replace";let O=P&&this.#t(P)?P.__staleWhileFetching:P;O!==void 0&&(y.oldValue=O)}}else y&&(y.set="update")}if(w!==0&&!this.#h&&this.#U(),this.#h&&(T||this.#L(E,w,g),y&&this.#T(y,E)),!k&&this.#d&&this.#o){let P=this.#o,O;for(;O=P?.shift();)this.#g?.(...O)}return this}pop(){try{for(;this.#i;){let p=this.#e[this.#a];if(this.#N(!0),this.#t(p)){if(p.__staleWhileFetching)return p.__staleWhileFetching}else if(p!==void 0)return p}}finally{if(this.#d&&this.#o){let p=this.#o,o;for(;o=p?.shift();)this.#g?.(...o)}}}#N(p){let o=this.#a,v=this.#n[o],w=this.#e[o];return this.#A&&this.#t(w)?w.__abortController.abort(new Error("evicted")):(this.#k||this.#d)&&(this.#k&&this.#m?.(w,v,"evict"),this.#d&&this.#o?.push([w,v,"evict"])),this.#I(o),p&&(this.#n[o]=void 0,this.#e[o]=void 0,this.#v.push(o)),this.#i===1?(this.#a=this.#s=0,this.#v.length=0):this.#a=this.#c[o],this.#r.delete(v),this.#i--,o}has(p,o={}){let{updateAgeOnHas:v=this.updateAgeOnHas,status:w}=o,g=this.#r.get(p);if(g!==void 0){let k=this.#e[g];if(this.#t(k)&&k.__staleWhileFetching===void 0)return!1;if(this.#f(g))w&&(w.has="stale",this.#T(w,g));else return v&&this.#E(g),w&&(w.has="hit",this.#T(w,g)),!0}else w&&(w.has="miss");return!1}peek(p,o={}){let{allowStale:v=this.allowStale}=o,w=this.#r.get(p);if(w===void 0||!v&&this.#f(w))return;let g=this.#e[w];return this.#t(g)?g.__staleWhileFetching:g}#R(p,o,v,w){let g=o===void 0?void 0:this.#e[o];if(this.#t(g))return g;let k=new n,{signal:_}=v;_?.addEventListener("abort",()=>k.abort(_.reason),{signal:k.signal});let y={signal:k.signal,options:v,context:w},T=(I,z=!1)=>{let{aborted:F}=k.signal,D=v.ignoreFetchAbort&&I!==void 0;if(v.status&&(F&&!z?(v.status.fetchAborted=!0,v.status.fetchError=k.signal.reason,D&&(v.status.fetchAbortIgnored=!0)):v.status.fetchResolved=!0),F&&!D&&!z)return E(k.signal.reason);let pe=O;return this.#e[o]===O&&(I===void 0?pe.__staleWhileFetching?this.#e[o]=pe.__staleWhileFetching:this.#S(p,"fetch"):(v.status&&(v.status.fetchUpdated=!0),this.set(p,I,y.options))),I},S=I=>(v.status&&(v.status.fetchRejected=!0,v.status.fetchError=I),E(I)),E=I=>{let{aborted:z}=k.signal,F=z&&v.allowStaleOnFetchAbort,D=F||v.allowStaleOnFetchRejection,pe=D||v.noDeleteOnFetchRejection,V=O;if(this.#e[o]===O&&(!pe||V.__staleWhileFetching===void 0?this.#S(p,"fetch"):F||(this.#e[o]=V.__staleWhileFetching)),D)return v.status&&V.__staleWhileFetching!==void 0&&(v.status.returnedStale=!0),V.__staleWhileFetching;if(V.__returned===V)throw I},P=(I,z)=>{let F=this.#C?.(p,g,y);F&&F instanceof Promise&&F.then(D=>I(D===void 0?void 0:D),z),k.signal.addEventListener("abort",()=>{(!v.ignoreFetchAbort||v.allowStaleOnFetchAbort)&&(I(void 0),v.allowStaleOnFetchAbort&&(I=D=>T(D,!0)))})};v.status&&(v.status.fetchDispatched=!0);let O=new Promise(P).then(T,S),B=Object.assign(O,{__abortController:k,__staleWhileFetching:g,__returned:void 0});return o===void 0?(this.set(p,B,{...y.options,status:void 0}),o=this.#r.get(p)):this.#e[o]=B,B}#t(p){if(!this.#A)return!1;let o=p;return!!o&&o instanceof Promise&&o.hasOwnProperty("__staleWhileFetching")&&o.__abortController instanceof n}async fetch(p,o={}){let{allowStale:v=this.allowStale,updateAgeOnGet:w=this.updateAgeOnGet,noDeleteOnStaleGet:g=this.noDeleteOnStaleGet,ttl:k=this.ttl,noDisposeOnSet:_=this.noDisposeOnSet,size:y=0,sizeCalculation:T=this.sizeCalculation,noUpdateTTL:S=this.noUpdateTTL,noDeleteOnFetchRejection:E=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:P=this.allowStaleOnFetchRejection,ignoreFetchAbort:O=this.ignoreFetchAbort,allowStaleOnFetchAbort:B=this.allowStaleOnFetchAbort,context:I,forceRefresh:z=!1,status:F,signal:D}=o;if(!this.#A)return F&&(F.fetch="get"),this.get(p,{allowStale:v,updateAgeOnGet:w,noDeleteOnStaleGet:g,status:F});let pe={allowStale:v,updateAgeOnGet:w,noDeleteOnStaleGet:g,ttl:k,noDisposeOnSet:_,size:y,sizeCalculation:T,noUpdateTTL:S,noDeleteOnFetchRejection:E,allowStaleOnFetchRejection:P,allowStaleOnFetchAbort:B,ignoreFetchAbort:O,status:F,signal:D},V=this.#r.get(p);if(V===void 0){F&&(F.fetch="miss");let Q=this.#R(p,V,pe,I);return Q.__returned=Q}else{let Q=this.#e[V];if(this.#t(Q)){let N=v&&Q.__staleWhileFetching!==void 0;return F&&(F.fetch="inflight",N&&(F.returnedStale=!0)),N?Q.__staleWhileFetching:Q.__returned=Q}let ie=this.#f(V);if(!z&&!ie)return F&&(F.fetch="hit"),this.#M(V),w&&this.#E(V),F&&this.#T(F,V),Q;let W=this.#R(p,V,pe,I),te=W.__staleWhileFetching!==void 0&&v;return F&&(F.fetch=ie?"stale":"refresh",te&&ie&&(F.returnedStale=!0)),te?W.__staleWhileFetching:W.__returned=W}}async forceFetch(p,o={}){let v=await this.fetch(p,o);if(v===void 0)throw new Error("fetch() returned undefined");return v}memo(p,o={}){let v=this.#P;if(!v)throw new Error("no memoMethod provided to constructor");let{context:w,forceRefresh:g,...k}=o,_=this.get(p,k);if(!g&&_!==void 0)return _;let y=v(p,_,{options:k,context:w});return this.set(p,y,k),y}get(p,o={}){let{allowStale:v=this.allowStale,updateAgeOnGet:w=this.updateAgeOnGet,noDeleteOnStaleGet:g=this.noDeleteOnStaleGet,status:k}=o,_=this.#r.get(p);if(_!==void 0){let y=this.#e[_],T=this.#t(y);return k&&this.#T(k,_),this.#f(_)?(k&&(k.get="stale"),T?(k&&v&&y.__staleWhileFetching!==void 0&&(k.returnedStale=!0),v?y.__staleWhileFetching:void 0):(g||this.#S(p,"expire"),k&&v&&(k.returnedStale=!0),v?y:void 0)):(k&&(k.get="hit"),T?y.__staleWhileFetching:(this.#M(_),w&&this.#E(_),y))}else k&&(k.get="miss")}#B(p,o){this.#p[o]=p,this.#c[p]=o}#M(p){p!==this.#s&&(p===this.#a?this.#a=this.#c[p]:this.#B(this.#p[p],this.#c[p]),this.#B(this.#s,p),this.#s=p)}delete(p){return this.#S(p,"delete")}#S(p,o){let v=!1;if(this.#i!==0){let w=this.#r.get(p);if(w!==void 0)if(v=!0,this.#i===1)this.#F(o);else{this.#I(w);let g=this.#e[w];if(this.#t(g)?g.__abortController.abort(new Error("deleted")):(this.#k||this.#d)&&(this.#k&&this.#m?.(g,p,o),this.#d&&this.#o?.push([g,p,o])),this.#r.delete(p),this.#n[w]=void 0,this.#e[w]=void 0,w===this.#s)this.#s=this.#p[w];else if(w===this.#a)this.#a=this.#c[w];else{let k=this.#p[w];this.#c[k]=this.#c[w];let _=this.#c[w];this.#p[_]=this.#p[w]}this.#i--,this.#v.push(w)}}if(this.#d&&this.#o?.length){let w=this.#o,g;for(;g=w?.shift();)this.#g?.(...g)}return v}clear(){return this.#F("delete")}#F(p){for(let o of this.#x({allowStale:!0})){let v=this.#e[o];if(this.#t(v))v.__abortController.abort(new Error("deleted"));else{let w=this.#n[o];this.#k&&this.#m?.(v,w,p),this.#d&&this.#o?.push([v,w,p])}}if(this.#r.clear(),this.#e.fill(void 0),this.#n.fill(void 0),this.#h&&this.#w&&(this.#h.fill(0),this.#w.fill(0)),this.#y&&this.#y.fill(0),this.#a=0,this.#s=0,this.#v.length=0,this.#b=0,this.#i=0,this.#d&&this.#o){let o=this.#o,v;for(;v=o?.shift();)this.#g?.(...v)}}};u.LRUCache=h}),Tt=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.ContainerIterator=u.Container=u.Base=void 0;var m=class{constructor(c=0){this.iteratorType=c}equals(c){return this.o===c.o}};u.ContainerIterator=m;var l=class{constructor(){this.i=0}get length(){return this.i}size(){return this.i}empty(){return this.i===0}};u.Base=l;var a=class extends l{};u.Container=a}),uc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=Tt(),l=class extends m.Base{constructor(c=[]){super(),this.S=[];let n=this;c.forEach(function(t){n.push(t)})}clear(){this.i=0,this.S=[]}push(c){return this.S.push(c),this.i+=1,this.i}pop(){if(this.i!==0)return this.i-=1,this.S.pop()}top(){return this.S[this.i-1]}},a=l;u.default=a}),pc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=Tt(),l=class extends m.Base{constructor(c=[]){super(),this.j=0,this.q=[];let n=this;c.forEach(function(t){n.push(t)})}clear(){this.q=[],this.i=this.j=0}push(c){let n=this.q.length;if(this.j/n>.5&&this.j+this.i>=n&&n>4096){let t=this.i;for(let r=0;r<t;++r)this.q[r]=this.q[this.j+r];this.j=0,this.q[this.i]=c}else this.q[this.j+this.i]=c;return++this.i}pop(){if(this.i===0)return;let c=this.q[this.j++];return this.i-=1,c}front(){if(this.i!==0)return this.q[this.j]}},a=l;u.default=a}),hc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=Tt(),l=class extends m.Base{constructor(c=[],n=function(r,e){return r>e?-1:r<e?1:0},t=!0){if(super(),this.v=n,Array.isArray(c))this.C=t?[...c]:c;else{this.C=[];let e=this;c.forEach(function(i){e.C.push(i)})}this.i=this.C.length;let r=this.i>>1;for(let e=this.i-1>>1;e>=0;--e)this.k(e,r)}m(c){let n=this.C[c];for(;c>0;){let t=c-1>>1,r=this.C[t];if(this.v(r,n)<=0)break;this.C[c]=r,c=t}this.C[c]=n}k(c,n){let t=this.C[c];for(;c<n;){let r=c<<1|1,e=r+1,i=this.C[r];if(e<this.i&&this.v(i,this.C[e])>0&&(r=e,i=this.C[e]),this.v(i,t)>=0)break;this.C[c]=i,c=r}this.C[c]=t}clear(){this.i=0,this.C.length=0}push(c){this.C.push(c),this.m(this.i),this.i+=1}pop(){if(this.i===0)return;let c=this.C[0],n=this.C.pop();return this.i-=1,this.i&&(this.C[0]=n,this.k(0,this.i>>1)),c}top(){return this.C[0]}find(c){return this.C.indexOf(c)>=0}remove(c){let n=this.C.indexOf(c);return n<0?!1:(n===0?this.pop():n===this.i-1?(this.C.pop(),this.i-=1):(this.C.splice(n,1,this.C.pop()),this.i-=1,this.m(n),this.k(n,this.i>>1)),!0)}updateItem(c){let n=this.C.indexOf(c);return n<0?!1:(this.m(n),this.k(n,this.i>>1),!0)}toArray(){return[...this.C]}},a=l;u.default=a}),hs=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=Tt(),l=class extends m.Container{},a=l;u.default=a}),At=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.throwIteratorAccessError=m;function m(){throw new RangeError("Iterator access denied!")}}),ya=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.RandomIterator=void 0;var m=Tt(),l=At(),a=class extends m.ContainerIterator{constructor(c,n){super(n),this.o=c,this.iteratorType===0?(this.pre=function(){return this.o===0&&(0,l.throwIteratorAccessError)(),this.o-=1,this},this.next=function(){return this.o===this.container.size()&&(0,l.throwIteratorAccessError)(),this.o+=1,this}):(this.pre=function(){return this.o===this.container.size()-1&&(0,l.throwIteratorAccessError)(),this.o+=1,this},this.next=function(){return this.o===-1&&(0,l.throwIteratorAccessError)(),this.o-=1,this})}get pointer(){return this.container.getElementByPos(this.o)}set pointer(c){this.container.setElementByPos(this.o,c)}};u.RandomIterator=a}),fc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=a(hs()),l=ya();function a(r){return r&&r.t?r:{default:r}}var c=class wa extends l.RandomIterator{constructor(e,i,s){super(e,s),this.container=i}copy(){return new wa(this.o,this.container,this.iteratorType)}},n=class extends m.default{constructor(r=[],e=!0){if(super(),Array.isArray(r))this.J=e?[...r]:r,this.i=r.length;else{this.J=[];let i=this;r.forEach(function(s){i.pushBack(s)})}}clear(){this.i=0,this.J.length=0}begin(){return new c(0,this)}end(){return new c(this.i,this)}rBegin(){return new c(this.i-1,this,1)}rEnd(){return new c(-1,this,1)}front(){return this.J[0]}back(){return this.J[this.i-1]}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J[r]}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J.splice(r,1),this.i-=1,this.i}eraseElementByValue(r){let e=0;for(let i=0;i<this.i;++i)this.J[i]!==r&&(this.J[e++]=this.J[i]);return this.i=this.J.length=e,this.i}eraseElementByIterator(r){let e=r.o;return r=r.next(),this.eraseElementByPos(e),r}pushBack(r){return this.J.push(r),this.i+=1,this.i}popBack(){if(this.i!==0)return this.i-=1,this.J.pop()}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;this.J[r]=e}insert(r,e,i=1){if(r<0||r>this.i)throw new RangeError;return this.J.splice(r,0,...new Array(i).fill(e)),this.i+=i,this.i}find(r){for(let e=0;e<this.i;++e)if(this.J[e]===r)return new c(e,this);return this.end()}reverse(){this.J.reverse()}unique(){let r=1;for(let e=1;e<this.i;++e)this.J[e]!==this.J[e-1]&&(this.J[r++]=this.J[e]);return this.i=this.J.length=r,this.i}sort(r){this.J.sort(r)}forEach(r){for(let e=0;e<this.i;++e)r(this.J[e],e,this)}[Symbol.iterator](){return(function*(){yield*this.J}).bind(this)()}},t=n;u.default=t}),mc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=c(hs()),l=Tt(),a=At();function c(e){return e&&e.t?e:{default:e}}var n=class ka extends l.ContainerIterator{constructor(i,s,f,h){super(h),this.o=i,this.h=s,this.container=f,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this})}get pointer(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.l}set pointer(i){this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.l=i}copy(){return new ka(this.o,this.h,this.container,this.iteratorType)}},t=class extends m.default{constructor(e=[]){super(),this.h={},this.p=this._=this.h.L=this.h.B=this.h;let i=this;e.forEach(function(s){i.pushBack(s)})}V(e){let{L:i,B:s}=e;i.B=s,s.L=i,e===this.p&&(this.p=s),e===this._&&(this._=i),this.i-=1}G(e,i){let s=i.B,f={l:e,L:i,B:s};i.B=f,s.L=f,i===this.h&&(this.p=f),s===this.h&&(this._=f),this.i+=1}clear(){this.i=0,this.p=this._=this.h.L=this.h.B=this.h}begin(){return new n(this.p,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this._,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){return this.p.l}back(){return this._.l}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let i=this.p;for(;e--;)i=i.B;return i.l}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let i=this.p;for(;e--;)i=i.B;return this.V(i),this.i}eraseElementByValue(e){let i=this.p;for(;i!==this.h;)i.l===e&&this.V(i),i=i.B;return this.i}eraseElementByIterator(e){let i=e.o;return i===this.h&&(0,a.throwIteratorAccessError)(),e=e.next(),this.V(i),e}pushBack(e){return this.G(e,this._),this.i}popBack(){if(this.i===0)return;let e=this._.l;return this.V(this._),e}pushFront(e){return this.G(e,this.h),this.i}popFront(){if(this.i===0)return;let e=this.p.l;return this.V(this.p),e}setElementByPos(e,i){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;s.l=i}insert(e,i,s=1){if(e<0||e>this.i)throw new RangeError;if(s<=0)return this.i;if(e===0)for(;s--;)this.pushFront(i);else if(e===this.i)for(;s--;)this.pushBack(i);else{let f=this.p;for(let b=1;b<e;++b)f=f.B;let h=f.B;for(this.i+=s;s--;)f.B={l:i,L:f},f.B.L=f,f=f.B;f.B=h,h.L=f}return this.i}find(e){let i=this.p;for(;i!==this.h;){if(i.l===e)return new n(i,this.h,this);i=i.B}return this.end()}reverse(){if(this.i<=1)return;let e=this.p,i=this._,s=0;for(;s<<1<this.i;){let f=e.l;e.l=i.l,i.l=f,e=e.B,i=i.L,s+=1}}unique(){if(this.i<=1)return this.i;let e=this.p;for(;e!==this.h;){let i=e;for(;i.B!==this.h&&i.l===i.B.l;)i=i.B,this.i-=1;e.B=i.B,e.B.L=e,e=e.B}return this.i}sort(e){if(this.i<=1)return;let i=[];this.forEach(function(f){i.push(f)}),i.sort(e);let s=this.p;i.forEach(function(f){s.l=f,s=s.B})}merge(e){let i=this;if(this.i===0)e.forEach(function(s){i.pushBack(s)});else{let s=this.p;e.forEach(function(f){for(;s!==i.h&&s.l<=f;)s=s.B;i.G(f,s.L)})}return this.i}forEach(e){let i=this.p,s=0;for(;i!==this.h;)e(i.l,s++,this),i=i.B}[Symbol.iterator](){return(function*(){if(this.i===0)return;let e=this.p;for(;e!==this.h;)yield e.l,e=e.B}).bind(this)()}},r=t;u.default=r}),gc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=a(hs()),l=ya();function a(r){return r&&r.t?r:{default:r}}var c=class _a extends l.RandomIterator{constructor(e,i,s){super(e,s),this.container=i}copy(){return new _a(this.o,this.container,this.iteratorType)}},n=class extends m.default{constructor(r=[],e=4096){super(),this.j=0,this.D=0,this.R=0,this.N=0,this.P=0,this.A=[];let i=(()=>{if(typeof r.length=="number")return r.length;if(typeof r.size=="number")return r.size;if(typeof r.size=="function")return r.size();throw new TypeError("Cannot get the length or size of the container")})();this.F=e,this.P=Math.max(Math.ceil(i/this.F),1);for(let h=0;h<this.P;++h)this.A.push(new Array(this.F));let s=Math.ceil(i/this.F);this.j=this.R=(this.P>>1)-(s>>1),this.D=this.N=this.F-i%this.F>>1;let f=this;r.forEach(function(h){f.pushBack(h)})}T(){let r=[],e=Math.max(this.P>>1,1);for(let i=0;i<e;++i)r[i]=new Array(this.F);for(let i=this.j;i<this.P;++i)r[r.length]=this.A[i];for(let i=0;i<this.R;++i)r[r.length]=this.A[i];r[r.length]=[...this.A[this.R]],this.j=e,this.R=r.length-1;for(let i=0;i<e;++i)r[r.length]=new Array(this.F);this.A=r,this.P=r.length}O(r){let e=this.D+r+1,i=e%this.F,s=i-1,f=this.j+(e-i)/this.F;return i===0&&(f-=1),f%=this.P,s<0&&(s+=this.F),{curNodeBucketIndex:f,curNodePointerIndex:s}}clear(){this.A=[new Array(this.F)],this.P=1,this.j=this.R=this.i=0,this.D=this.N=this.F>>1}begin(){return new c(0,this)}end(){return new c(this.i,this)}rBegin(){return new c(this.i-1,this,1)}rEnd(){return new c(-1,this,1)}front(){if(this.i!==0)return this.A[this.j][this.D]}back(){if(this.i!==0)return this.A[this.R][this.N]}pushBack(r){return this.i&&(this.N<this.F-1?this.N+=1:this.R<this.P-1?(this.R+=1,this.N=0):(this.R=0,this.N=0),this.R===this.j&&this.N===this.D&&this.T()),this.i+=1,this.A[this.R][this.N]=r,this.i}popBack(){if(this.i===0)return;let r=this.A[this.R][this.N];return this.i!==1&&(this.N>0?this.N-=1:this.R>0?(this.R-=1,this.N=this.F-1):(this.R=this.P-1,this.N=this.F-1)),this.i-=1,r}pushFront(r){return this.i&&(this.D>0?this.D-=1:this.j>0?(this.j-=1,this.D=this.F-1):(this.j=this.P-1,this.D=this.F-1),this.j===this.R&&this.D===this.N&&this.T()),this.i+=1,this.A[this.j][this.D]=r,this.i}popFront(){if(this.i===0)return;let r=this.A[this.j][this.D];return this.i!==1&&(this.D<this.F-1?this.D+=1:this.j<this.P-1?(this.j+=1,this.D=0):(this.j=0,this.D=0)),this.i-=1,r}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:e,curNodePointerIndex:i}=this.O(r);return this.A[e][i]}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:i,curNodePointerIndex:s}=this.O(r);this.A[i][s]=e}insert(r,e,i=1){if(r<0||r>this.i)throw new RangeError;if(r===0)for(;i--;)this.pushFront(e);else if(r===this.i)for(;i--;)this.pushBack(e);else{let s=[];for(let f=r;f<this.i;++f)s.push(this.getElementByPos(f));this.cut(r-1);for(let f=0;f<i;++f)this.pushBack(e);for(let f=0;f<s.length;++f)this.pushBack(s[f])}return this.i}cut(r){if(r<0)return this.clear(),0;let{curNodeBucketIndex:e,curNodePointerIndex:i}=this.O(r);return this.R=e,this.N=i,this.i=r+1,this.i}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;if(r===0)this.popFront();else if(r===this.i-1)this.popBack();else{let e=[];for(let s=r+1;s<this.i;++s)e.push(this.getElementByPos(s));this.cut(r),this.popBack();let i=this;e.forEach(function(s){i.pushBack(s)})}return this.i}eraseElementByValue(r){if(this.i===0)return 0;let e=[];for(let s=0;s<this.i;++s){let f=this.getElementByPos(s);f!==r&&e.push(f)}let i=e.length;for(let s=0;s<i;++s)this.setElementByPos(s,e[s]);return this.cut(i-1)}eraseElementByIterator(r){let e=r.o;return this.eraseElementByPos(e),r=r.next(),r}find(r){for(let e=0;e<this.i;++e)if(this.getElementByPos(e)===r)return new c(e,this);return this.end()}reverse(){let r=0,e=this.i-1;for(;r<e;){let i=this.getElementByPos(r);this.setElementByPos(r,this.getElementByPos(e)),this.setElementByPos(e,i),r+=1,e-=1}}unique(){if(this.i<=1)return this.i;let r=1,e=this.getElementByPos(0);for(let i=1;i<this.i;++i){let s=this.getElementByPos(i);s!==e&&(e=s,this.setElementByPos(r++,s))}for(;this.i>r;)this.popBack();return this.i}sort(r){let e=[];for(let i=0;i<this.i;++i)e.push(this.getElementByPos(i));e.sort(r);for(let i=0;i<this.i;++i)this.setElementByPos(i,e[i])}shrinkToFit(){if(this.i===0)return;let r=[];this.forEach(function(e){r.push(e)}),this.P=Math.max(Math.ceil(this.i/this.F),1),this.i=this.j=this.R=this.D=this.N=0,this.A=[];for(let e=0;e<this.P;++e)this.A.push(new Array(this.F));for(let e=0;e<r.length;++e)this.pushBack(r[e])}forEach(r){for(let e=0;e<this.i;++e)r(this.getElementByPos(e),e,this)}[Symbol.iterator](){return(function*(){for(let r=0;r<this.i;++r)yield this.getElementByPos(r)}).bind(this)()}},t=n;u.default=t}),bc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.TreeNodeEnableIndex=u.TreeNode=void 0;var m=class{constructor(a,c){this.ee=1,this.u=void 0,this.l=void 0,this.U=void 0,this.W=void 0,this.tt=void 0,this.u=a,this.l=c}L(){let a=this;if(a.ee===1&&a.tt.tt===a)a=a.W;else if(a.U)for(a=a.U;a.W;)a=a.W;else{let c=a.tt;for(;c.U===a;)a=c,c=a.tt;a=c}return a}B(){let a=this;if(a.W){for(a=a.W;a.U;)a=a.U;return a}else{let c=a.tt;for(;c.W===a;)a=c,c=a.tt;return a.W!==c?c:a}}te(){let a=this.tt,c=this.W,n=c.U;return a.tt===this?a.tt=c:a.U===this?a.U=c:a.W=c,c.tt=a,c.U=this,this.tt=c,this.W=n,n&&(n.tt=this),c}se(){let a=this.tt,c=this.U,n=c.W;return a.tt===this?a.tt=c:a.U===this?a.U=c:a.W=c,c.tt=a,c.W=this,this.tt=c,this.U=n,n&&(n.tt=this),c}};u.TreeNode=m;var l=class extends m{constructor(){super(...arguments),this.rt=1}te(){let a=super.te();return this.ie(),a.ie(),a}se(){let a=super.se();return this.ie(),a.ie(),a}ie(){this.rt=1,this.U&&(this.rt+=this.U.rt),this.W&&(this.rt+=this.W.rt)}};u.TreeNodeEnableIndex=l}),xa=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=bc(),l=Tt(),a=At(),c=class extends l.Container{constructor(t=function(e,i){return e<i?-1:e>i?1:0},r=!1){super(),this.Y=void 0,this.v=t,r?(this.re=m.TreeNodeEnableIndex,this.M=function(e,i,s){let f=this.ne(e,i,s);if(f){let h=f.tt;for(;h!==this.h;)h.rt+=1,h=h.tt;let b=this.he(f);if(b){let{parentNode:p,grandParent:o,curNode:v}=b;p.ie(),o.ie(),v.ie()}}return this.i},this.V=function(e){let i=this.fe(e);for(;i!==this.h;)i.rt-=1,i=i.tt}):(this.re=m.TreeNode,this.M=function(e,i,s){let f=this.ne(e,i,s);return f&&this.he(f),this.i},this.V=this.fe),this.h=new this.re}X(t,r){let e=this.h;for(;t;){let i=this.v(t.u,r);if(i<0)t=t.W;else if(i>0)e=t,t=t.U;else return t}return e}Z(t,r){let e=this.h;for(;t;)this.v(t.u,r)<=0?t=t.W:(e=t,t=t.U);return e}$(t,r){let e=this.h;for(;t;){let i=this.v(t.u,r);if(i<0)e=t,t=t.W;else if(i>0)t=t.U;else return t}return e}rr(t,r){let e=this.h;for(;t;)this.v(t.u,r)<0?(e=t,t=t.W):t=t.U;return e}ue(t){for(;;){let r=t.tt;if(r===this.h)return;if(t.ee===1){t.ee=0;return}if(t===r.U){let e=r.W;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.te():r.te();else if(e.W&&e.W.ee===1){e.ee=r.ee,r.ee=0,e.W.ee=0,r===this.Y?this.Y=r.te():r.te();return}else e.U&&e.U.ee===1?(e.ee=1,e.U.ee=0,e.se()):(e.ee=1,t=r)}else{let e=r.U;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.se():r.se();else if(e.U&&e.U.ee===1){e.ee=r.ee,r.ee=0,e.U.ee=0,r===this.Y?this.Y=r.se():r.se();return}else e.W&&e.W.ee===1?(e.ee=1,e.W.ee=0,e.te()):(e.ee=1,t=r)}}}fe(t){if(this.i===1)return this.clear(),this.h;let r=t;for(;r.U||r.W;){if(r.W)for(r=r.W;r.U;)r=r.U;else r=r.U;[t.u,r.u]=[r.u,t.u],[t.l,r.l]=[r.l,t.l],t=r}this.h.U===r?this.h.U=r.tt:this.h.W===r&&(this.h.W=r.tt),this.ue(r);let e=r.tt;return r===e.U?e.U=void 0:e.W=void 0,this.i-=1,this.Y.ee=0,e}oe(t,r){return t===void 0?!1:this.oe(t.U,r)||r(t)?!0:this.oe(t.W,r)}he(t){for(;;){let r=t.tt;if(r.ee===0)return;let e=r.tt;if(r===e.U){let i=e.W;if(i&&i.ee===1){if(i.ee=r.ee=0,e===this.Y)return;e.ee=1,t=e;continue}else if(t===r.W){if(t.ee=0,t.U&&(t.U.tt=r),t.W&&(t.W.tt=e),r.W=t.U,e.U=t.W,t.U=r,t.W=e,e===this.Y)this.Y=t,this.h.tt=t;else{let s=e.tt;s.U===e?s.U=t:s.W=t}return t.tt=e.tt,r.tt=t,e.tt=t,e.ee=1,{parentNode:r,grandParent:e,curNode:t}}else r.ee=0,e===this.Y?this.Y=e.se():e.se(),e.ee=1}else{let i=e.U;if(i&&i.ee===1){if(i.ee=r.ee=0,e===this.Y)return;e.ee=1,t=e;continue}else if(t===r.U){if(t.ee=0,t.U&&(t.U.tt=e),t.W&&(t.W.tt=r),e.W=t.U,r.U=t.W,t.U=e,t.W=r,e===this.Y)this.Y=t,this.h.tt=t;else{let s=e.tt;s.U===e?s.U=t:s.W=t}return t.tt=e.tt,r.tt=t,e.tt=t,e.ee=1,{parentNode:r,grandParent:e,curNode:t}}else r.ee=0,e===this.Y?this.Y=e.te():e.te(),e.ee=1}return}}ne(t,r,e){if(this.Y===void 0){this.i+=1,this.Y=new this.re(t,r),this.Y.ee=0,this.Y.tt=this.h,this.h.tt=this.Y,this.h.U=this.Y,this.h.W=this.Y;return}let i,s=this.h.U,f=this.v(s.u,t);if(f===0){s.l=r;return}else if(f>0)s.U=new this.re(t,r),s.U.tt=s,i=s.U,this.h.U=i;else{let h=this.h.W,b=this.v(h.u,t);if(b===0){h.l=r;return}else if(b<0)h.W=new this.re(t,r),h.W.tt=h,i=h.W,this.h.W=i;else{if(e!==void 0){let p=e.o;if(p!==this.h){let o=this.v(p.u,t);if(o===0){p.l=r;return}else if(o>0){let v=p.L(),w=this.v(v.u,t);if(w===0){v.l=r;return}else w<0&&(i=new this.re(t,r),v.W===void 0?(v.W=i,i.tt=v):(p.U=i,i.tt=p))}}}if(i===void 0)for(i=this.Y;;){let p=this.v(i.u,t);if(p>0){if(i.U===void 0){i.U=new this.re(t,r),i.U.tt=i,i=i.U;break}i=i.U}else if(p<0){if(i.W===void 0){i.W=new this.re(t,r),i.W.tt=i,i=i.W;break}i=i.W}else{i.l=r;return}}}}return this.i+=1,i}I(t,r){for(;t;){let e=this.v(t.u,r);if(e<0)t=t.W;else if(e>0)t=t.U;else return t}return t||this.h}clear(){this.i=0,this.Y=void 0,this.h.tt=void 0,this.h.U=this.h.W=void 0}updateKeyByIterator(t,r){let e=t.o;if(e===this.h&&(0,a.throwIteratorAccessError)(),this.i===1)return e.u=r,!0;if(e===this.h.U)return this.v(e.B().u,r)>0?(e.u=r,!0):!1;if(e===this.h.W)return this.v(e.L().u,r)<0?(e.u=r,!0):!1;let i=e.L().u;if(this.v(i,r)>=0)return!1;let s=e.B().u;return this.v(s,r)<=0?!1:(e.u=r,!0)}eraseElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r=0,e=this;return this.oe(this.Y,function(i){return t===r?(e.V(i),!0):(r+=1,!1)}),this.i}eraseElementByKey(t){if(this.i===0)return!1;let r=this.I(this.Y,t);return r===this.h?!1:(this.V(r),!0)}eraseElementByIterator(t){let r=t.o;r===this.h&&(0,a.throwIteratorAccessError)();let e=r.W===void 0;return t.iteratorType===0?e&&t.next():(!e||r.U===void 0)&&t.next(),this.V(r),t}forEach(t){let r=0;for(let e of this)t(e,r++,this)}getElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r,e=0;for(let i of this){if(e===t){r=i;break}e+=1}return r}getHeight(){if(this.i===0)return 0;let t=function(r){return r?Math.max(t(r.U),t(r.W))+1:0};return t(this.Y)}},n=c;u.default=n}),Sa=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=Tt(),l=At(),a=class extends m.ContainerIterator{constructor(n,t,r){super(r),this.o=n,this.h=t,this.iteratorType===0?(this.pre=function(){return this.o===this.h.U&&(0,l.throwIteratorAccessError)(),this.o=this.o.L(),this},this.next=function(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.B(),this}):(this.pre=function(){return this.o===this.h.W&&(0,l.throwIteratorAccessError)(),this.o=this.o.B(),this},this.next=function(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.L(),this})}get index(){let n=this.o,t=this.h.tt;if(n===this.h)return t?t.rt-1:0;let r=0;for(n.U&&(r+=n.U.rt);n!==t;){let e=n.tt;n===e.W&&(r+=1,e.U&&(r+=e.U.rt)),n=e}return r}},c=a;u.default=c}),vc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=c(xa()),l=c(Sa()),a=At();function c(e){return e&&e.t?e:{default:e}}var n=class Ta extends l.default{constructor(i,s,f,h){super(i,s,h),this.container=f}get pointer(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.u}copy(){return new Ta(this.o,this.h,this.container,this.iteratorType)}},t=class extends m.default{constructor(e=[],i,s){super(i,s);let f=this;e.forEach(function(h){f.insert(h)})}*K(e){e!==void 0&&(yield*this.K(e.U),yield e.u,yield*this.K(e.W))}begin(){return new n(this.h.U||this.h,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this.h.W||this.h,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){return this.h.U?this.h.U.u:void 0}back(){return this.h.W?this.h.W.u:void 0}insert(e,i){return this.M(e,void 0,i)}find(e){let i=this.I(this.Y,e);return new n(i,this.h,this)}lowerBound(e){let i=this.X(this.Y,e);return new n(i,this.h,this)}upperBound(e){let i=this.Z(this.Y,e);return new n(i,this.h,this)}reverseLowerBound(e){let i=this.$(this.Y,e);return new n(i,this.h,this)}reverseUpperBound(e){let i=this.rr(this.Y,e);return new n(i,this.h,this)}union(e){let i=this;return e.forEach(function(s){i.insert(s)}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=t;u.default=r}),yc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=c(xa()),l=c(Sa()),a=At();function c(e){return e&&e.t?e:{default:e}}var n=class Aa extends l.default{constructor(i,s,f,h){super(i,s,h),this.container=f}get pointer(){this.o===this.h&&(0,a.throwIteratorAccessError)();let i=this;return new Proxy([],{get(s,f){if(f==="0")return i.o.u;if(f==="1")return i.o.l},set(s,f,h){if(f!=="1")throw new TypeError("props must be 1");return i.o.l=h,!0}})}copy(){return new Aa(this.o,this.h,this.container,this.iteratorType)}},t=class extends m.default{constructor(e=[],i,s){super(i,s);let f=this;e.forEach(function(h){f.setElement(h[0],h[1])})}*K(e){e!==void 0&&(yield*this.K(e.U),yield[e.u,e.l],yield*this.K(e.W))}begin(){return new n(this.h.U||this.h,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this.h.W||this.h,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){if(this.i===0)return;let e=this.h.U;return[e.u,e.l]}back(){if(this.i===0)return;let e=this.h.W;return[e.u,e.l]}lowerBound(e){let i=this.X(this.Y,e);return new n(i,this.h,this)}upperBound(e){let i=this.Z(this.Y,e);return new n(i,this.h,this)}reverseLowerBound(e){let i=this.$(this.Y,e);return new n(i,this.h,this)}reverseUpperBound(e){let i=this.rr(this.Y,e);return new n(i,this.h,this)}setElement(e,i,s){return this.M(e,i,s)}find(e){let i=this.I(this.Y,e);return new n(i,this.h,this)}getElementByKey(e){return this.I(this.Y,e).l}union(e){let i=this;return e.forEach(function(s){i.setElement(s[0],s[1])}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=t;u.default=r}),Ea=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=m;function m(l){let a=typeof l;return a==="object"&&l!==null||a==="function"}}),Ia=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.HashContainerIterator=u.HashContainer=void 0;var m=Tt(),l=c(Ea()),a=At();function c(r){return r&&r.t?r:{default:r}}var n=class extends m.ContainerIterator{constructor(r,e,i){super(i),this.o=r,this.h=e,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this})}};u.HashContainerIterator=n;var t=class extends m.Container{constructor(){super(),this.H=[],this.g={},this.HASH_TAG=Symbol("@@HASH_TAG"),Object.setPrototypeOf(this.g,null),this.h={},this.h.L=this.h.B=this.p=this._=this.h}V(r){let{L:e,B:i}=r;e.B=i,i.L=e,r===this.p&&(this.p=i),r===this._&&(this._=e),this.i-=1}M(r,e,i){i===void 0&&(i=(0,l.default)(r));let s;if(i){let f=r[this.HASH_TAG];if(f!==void 0)return this.H[f].l=e,this.i;Object.defineProperty(r,this.HASH_TAG,{value:this.H.length,configurable:!0}),s={u:r,l:e,L:this._,B:this.h},this.H.push(s)}else{let f=this.g[r];if(f)return f.l=e,this.i;s={u:r,l:e,L:this._,B:this.h},this.g[r]=s}return this.i===0?(this.p=s,this.h.B=s):this._.B=s,this._=s,this.h.L=s,++this.i}I(r,e){if(e===void 0&&(e=(0,l.default)(r)),e){let i=r[this.HASH_TAG];return i===void 0?this.h:this.H[i]}else return this.g[r]||this.h}clear(){let r=this.HASH_TAG;this.H.forEach(function(e){delete e.u[r]}),this.H=[],this.g={},Object.setPrototypeOf(this.g,null),this.i=0,this.p=this._=this.h.L=this.h.B=this.h}eraseElementByKey(r,e){let i;if(e===void 0&&(e=(0,l.default)(r)),e){let s=r[this.HASH_TAG];if(s===void 0)return!1;delete r[this.HASH_TAG],i=this.H[s],delete this.H[s]}else{if(i=this.g[r],i===void 0)return!1;delete this.g[r]}return this.V(i),!0}eraseElementByIterator(r){let e=r.o;return e===this.h&&(0,a.throwIteratorAccessError)(),this.V(e),r.next()}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let e=this.p;for(;r--;)e=e.B;return this.V(e),this.i}};u.HashContainer=t}),wc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=Ia(),l=At(),a=class Ma extends m.HashContainerIterator{constructor(r,e,i,s){super(r,e,s),this.container=i}get pointer(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o.u}copy(){return new Ma(this.o,this.h,this.container,this.iteratorType)}},c=class extends m.HashContainer{constructor(t=[]){super();let r=this;t.forEach(function(e){r.insert(e)})}begin(){return new a(this.p,this.h,this)}end(){return new a(this.h,this.h,this)}rBegin(){return new a(this._,this.h,this,1)}rEnd(){return new a(this.h,this.h,this,1)}front(){return this.p.u}back(){return this._.u}insert(t,r){return this.M(t,void 0,r)}getElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r=this.p;for(;t--;)r=r.B;return r.u}find(t,r){let e=this.I(t,r);return new a(e,this.h,this)}forEach(t){let r=0,e=this.p;for(;e!==this.h;)t(e.u,r++,this),e=e.B}[Symbol.iterator](){return(function*(){let t=this.p;for(;t!==this.h;)yield t.u,t=t.B}).bind(this)()}},n=c;u.default=n}),kc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),u.default=void 0;var m=Ia(),l=c(Ea()),a=At();function c(e){return e&&e.t?e:{default:e}}var n=class Ca extends m.HashContainerIterator{constructor(i,s,f,h){super(i,s,h),this.container=f}get pointer(){this.o===this.h&&(0,a.throwIteratorAccessError)();let i=this;return new Proxy([],{get(s,f){if(f==="0")return i.o.u;if(f==="1")return i.o.l},set(s,f,h){if(f!=="1")throw new TypeError("props must be 1");return i.o.l=h,!0}})}copy(){return new Ca(this.o,this.h,this.container,this.iteratorType)}},t=class extends m.HashContainer{constructor(e=[]){super();let i=this;e.forEach(function(s){i.setElement(s[0],s[1])})}begin(){return new n(this.p,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this._,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){if(this.i!==0)return[this.p.u,this.p.l]}back(){if(this.i!==0)return[this._.u,this._.l]}setElement(e,i,s){return this.M(e,i,s)}getElementByKey(e,i){if(i===void 0&&(i=(0,l.default)(e)),i){let f=e[this.HASH_TAG];return f!==void 0?this.H[f].l:void 0}let s=this.g[e];return s?s.l:void 0}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let i=this.p;for(;e--;)i=i.B;return[i.u,i.l]}find(e,i){let s=this.I(e,i);return new n(s,this.h,this)}forEach(e){let i=0,s=this.p;for(;s!==this.h;)e([s.u,s.l],i++,this),s=s.B}[Symbol.iterator](){return(function*(){let e=this.p;for(;e!==this.h;)yield[e.u,e.l],e=e.B}).bind(this)()}},r=t;u.default=r}),_c=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"t",{value:!0}),Object.defineProperty(u,"Deque",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(u,"HashMap",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(u,"HashSet",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(u,"LinkList",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(u,"OrderedMap",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(u,"OrderedSet",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(u,"PriorityQueue",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(u,"Queue",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(u,"Stack",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(u,"Vector",{enumerable:!0,get:function(){return c.default}});var m=f(uc()),l=f(pc()),a=f(hc()),c=f(fc()),n=f(mc()),t=f(gc()),r=f(vc()),e=f(yc()),i=f(wc()),s=f(kc());function f(h){return h&&h.t?h:{default:h}}}),xc=ve((u,m)=>{he(),me(),fe();var l=_c().OrderedSet,a=xt()("number-allocator:trace"),c=xt()("number-allocator:error");function n(r,e){this.low=r,this.high=e}n.prototype.equals=function(r){return this.low===r.low&&this.high===r.high},n.prototype.compare=function(r){return this.low<r.low&&this.high<r.low?-1:r.low<this.low&&r.high<this.low?1:0};function t(r,e){if(!(this instanceof t))return new t(r,e);this.min=r,this.max=e,this.ss=new l([],(i,s)=>i.compare(s)),a("Create"),this.clear()}t.prototype.firstVacant=function(){return this.ss.size()===0?null:this.ss.front().low},t.prototype.alloc=function(){if(this.ss.size()===0)return a("alloc():empty"),null;let r=this.ss.begin(),e=r.pointer.low,i=r.pointer.high,s=e;return s+1<=i?this.ss.updateKeyByIterator(r,new n(e+1,i)):this.ss.eraseElementByPos(0),a("alloc():"+s),s},t.prototype.use=function(r){let e=new n(r,r),i=this.ss.lowerBound(e);if(!i.equals(this.ss.end())){let s=i.pointer.low,f=i.pointer.high;return i.pointer.equals(e)?(this.ss.eraseElementByIterator(i),a("use():"+r),!0):s>r?!1:s===r?(this.ss.updateKeyByIterator(i,new n(s+1,f)),a("use():"+r),!0):f===r?(this.ss.updateKeyByIterator(i,new n(s,f-1)),a("use():"+r),!0):(this.ss.updateKeyByIterator(i,new n(r+1,f)),this.ss.insert(new n(s,r-1)),a("use():"+r),!0)}return a("use():failed"),!1},t.prototype.free=function(r){if(r<this.min||r>this.max){c("free():"+r+" is out of range");return}let e=new n(r,r),i=this.ss.upperBound(e);if(i.equals(this.ss.end())){if(i.equals(this.ss.begin())){this.ss.insert(e);return}i.pre();let s=i.pointer.high;i.pointer.high+1===r?this.ss.updateKeyByIterator(i,new n(s,r)):this.ss.insert(e)}else if(i.equals(this.ss.begin()))if(r+1===i.pointer.low){let s=i.pointer.high;this.ss.updateKeyByIterator(i,new n(r,s))}else this.ss.insert(e);else{let s=i.pointer.low,f=i.pointer.high;i.pre();let h=i.pointer.low;i.pointer.high+1===r?r+1===s?(this.ss.eraseElementByIterator(i),this.ss.updateKeyByIterator(i,new n(h,f))):this.ss.updateKeyByIterator(i,new n(h,r)):r+1===s?(this.ss.eraseElementByIterator(i.next()),this.ss.insert(new n(r,f))):this.ss.insert(e)}a("free():"+r)},t.prototype.clear=function(){a("clear()"),this.ss.clear(),this.ss.insert(new n(this.min,this.max))},t.prototype.intervalCount=function(){return this.ss.size()},t.prototype.dump=function(){console.log("length:"+this.ss.size());for(let r of this.ss)console.log(r)},m.exports=t}),Pa=ve((u,m)=>{he(),me(),fe();var l=xc();m.exports.NumberAllocator=l}),Sc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=dc(),l=Pa(),a=class{aliasToTopic;topicToAlias;max;numberAllocator;length;constructor(c){c>0&&(this.aliasToTopic=new m.LRUCache({max:c}),this.topicToAlias={},this.numberAllocator=new l.NumberAllocator(1,c),this.max=c,this.length=0)}put(c,n){if(n===0||n>this.max)return!1;let t=this.aliasToTopic.get(n);return t&&delete this.topicToAlias[t],this.aliasToTopic.set(n,c),this.topicToAlias[c]=n,this.numberAllocator.use(n),this.length=this.aliasToTopic.size,!0}getTopicByAlias(c){return this.aliasToTopic.get(c)}getAliasByTopic(c){let n=this.topicToAlias[c];return typeof n<"u"&&this.aliasToTopic.get(n),n}clear(){this.aliasToTopic.clear(),this.topicToAlias={},this.numberAllocator.clear(),this.length=0}getLruAlias(){return this.numberAllocator.firstVacant()||[...this.aliasToTopic.keys()][this.aliasToTopic.size-1]}};u.default=a}),Tc=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(u,"__esModule",{value:!0});var l=tr(),a=m(Sc()),c=tn(),n=(t,r)=>{t.log("_handleConnack");let{options:e}=t,i=e.protocolVersion===5?r.reasonCode:r.returnCode;if(clearTimeout(t.connackTimer),delete t.topicAliasSend,r.properties){if(r.properties.topicAliasMaximum){if(r.properties.topicAliasMaximum>65535){t.emit("error",new Error("topicAliasMaximum from broker is out of range"));return}r.properties.topicAliasMaximum>0&&(t.topicAliasSend=new a.default(r.properties.topicAliasMaximum))}r.properties.serverKeepAlive&&e.keepalive&&(e.keepalive=r.properties.serverKeepAlive),r.properties.maximumPacketSize&&(e.properties||(e.properties={}),e.properties.maximumPacketSize=r.properties.maximumPacketSize)}if(i===0)t.reconnecting=!1,t._onConnect(r);else if(i>0){let s=new c.ErrorWithReasonCode(`Connection refused: ${l.ReasonCodes[i]}`,i);t.emit("error",s),t.options.reconnectOnConnackError&&t._cleanUp(!0)}};u.default=n}),Ac=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=(l,a,c)=>{l.log("handling pubrel packet");let n=typeof c<"u"?c:l.noop,{messageId:t}=a,r={cmd:"pubcomp",messageId:t};l.incomingStore.get(a,(e,i)=>{e?l._sendPacket(r,n):(l.emit("message",i.topic,i.payload,i),l.handleMessage(i,s=>{if(s)return n(s);l.incomingStore.del(i,l.noop),l._sendPacket(r,n)}))})};u.default=m}),Ec=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(u,"__esModule",{value:!0});var l=m(ac()),a=m(cc()),c=m(Tc()),n=m(tr()),t=m(Ac()),r=(e,i,s)=>{let{options:f}=e;if(f.protocolVersion===5&&f.properties&&f.properties.maximumPacketSize&&f.properties.maximumPacketSize<i.length)return e.emit("error",new Error(`exceeding packets size ${i.cmd}`)),e.end({reasonCode:149,properties:{reasonString:"Maximum packet size was exceeded"}}),e;switch(e.log("_handlePacket :: emitting packetreceive"),e.emit("packetreceive",i),i.cmd){case"publish":(0,l.default)(e,i,s);break;case"puback":case"pubrec":case"pubcomp":case"suback":case"unsuback":e.reschedulePing(),(0,n.default)(e,i),s();break;case"pubrel":e.reschedulePing(),(0,t.default)(e,i,s);break;case"connack":(0,c.default)(e,i),s();break;case"auth":e.reschedulePing(),(0,a.default)(e,i),s();break;case"pingresp":e.log("_handlePacket :: received pingresp"),e.reschedulePing(!0),s();break;case"disconnect":e.emit("disconnect",i),s();break;default:e.log("_handlePacket :: unknown command"),s();break}};u.default=r}),Oa=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=class{nextId;constructor(){this.nextId=Math.max(1,Math.floor(Math.random()*65535))}allocate(){let l=this.nextId++;return this.nextId===65536&&(this.nextId=1),l}getLastAllocated(){return this.nextId===1?65535:this.nextId-1}register(l){return!0}deallocate(l){}clear(){}};u.default=m}),Ic=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=class{aliasToTopic;max;length;constructor(l){this.aliasToTopic={},this.max=l}put(l,a){return a===0||a>this.max?!1:(this.aliasToTopic[a]=l,this.length=Object.keys(this.aliasToTopic).length,!0)}getTopicByAlias(l){return this.aliasToTopic[l]}clear(){this.aliasToTopic={}}};u.default=m}),Mc=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(u,"__esModule",{value:!0}),u.TypedEventEmitter=void 0;var l=m((Wt(),Be(Ot))),a=tn(),c=class{};u.TypedEventEmitter=c,(0,a.applyMixin)(c,l.default)}),nr=ve((u,m)=>{he(),me(),fe();function l(a){"@babel/helpers - typeof";return m.exports=l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},m.exports.__esModule=!0,m.exports.default=m.exports,l(a)}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),Cc=ve((u,m)=>{he(),me(),fe();var l=nr().default;function a(c,n){if(l(c)!="object"||!c)return c;var t=c[Symbol.toPrimitive];if(t!==void 0){var r=t.call(c,n||"default");if(l(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(c)}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}),Pc=ve((u,m)=>{he(),me(),fe();var l=nr().default,a=Cc();function c(n){var t=a(n,"string");return l(t)=="symbol"?t:t+""}m.exports=c,m.exports.__esModule=!0,m.exports.default=m.exports}),Oc=ve((u,m)=>{he(),me(),fe();var l=Pc();function a(c,n,t){return(n=l(n))in c?Object.defineProperty(c,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[n]=t,c}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}),Nc=ve((u,m)=>{he(),me(),fe();function l(a){if(Array.isArray(a))return a}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),Rc=ve((u,m)=>{he(),me(),fe();function l(a,c){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var t,r,e,i,s=[],f=!0,h=!1;try{if(e=(n=n.call(a)).next,c===0){if(Object(n)!==n)return;f=!1}else for(;!(f=(t=e.call(n)).done)&&(s.push(t.value),s.length!==c);f=!0);}catch(b){h=!0,r=b}finally{try{if(!f&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(h)throw r}}return s}}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),Uc=ve((u,m)=>{he(),me(),fe();function l(a,c){(c==null||c>a.length)&&(c=a.length);for(var n=0,t=Array(c);n<c;n++)t[n]=a[n];return t}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),Lc=ve((u,m)=>{he(),me(),fe();var l=Uc();function a(c,n){if(c){if(typeof c=="string")return l(c,n);var t={}.toString.call(c).slice(8,-1);return t==="Object"&&c.constructor&&(t=c.constructor.name),t==="Map"||t==="Set"?Array.from(c):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(c,n):void 0}}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}),qc=ve((u,m)=>{he(),me(),fe();function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),jc=ve((u,m)=>{he(),me(),fe();var l=Nc(),a=Rc(),c=Lc(),n=qc();function t(r,e){return l(r)||a(r,e)||c(r,e)||n()}m.exports=t,m.exports.__esModule=!0,m.exports.default=m.exports}),Na=ve((u,m)=>{he(),me(),fe(),(function(l,a){typeof u=="object"&&typeof m<"u"?a(u):typeof define=="function"&&define.amd?define(["exports"],a):(l=typeof globalThis<"u"?globalThis:l||self,a(l.fastUniqueNumbers={}))})(u,function(l){var a=function(b){return function(p){var o=b(p);return p.add(o),o}},c=function(b){return function(p,o){return b.set(p,o),o}},n=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,t=536870912,r=t*2,e=function(b,p){return function(o){var v=p.get(o),w=v===void 0?o.size:v<r?v+1:0;if(!o.has(w))return b(o,w);if(o.size<t){for(;o.has(w);)w=Math.floor(Math.random()*r);return b(o,w)}if(o.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;o.has(w);)w=Math.floor(Math.random()*n);return b(o,w)}},i=new WeakMap,s=c(i),f=e(s,i),h=a(f);l.addUniqueNumber=h,l.generateUniqueNumber=f})}),Bc=ve((u,m)=>{he(),me(),fe();function l(c,n,t,r,e,i,s){try{var f=c[i](s),h=f.value}catch(b){return void t(b)}f.done?n(h):Promise.resolve(h).then(r,e)}function a(c){return function(){var n=this,t=arguments;return new Promise(function(r,e){var i=c.apply(n,t);function s(h){l(i,r,e,s,f,"next",h)}function f(h){l(i,r,e,s,f,"throw",h)}s(void 0)})}}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}),Ra=ve((u,m)=>{he(),me(),fe();function l(a,c){this.v=a,this.k=c}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),Ua=ve((u,m)=>{he(),me(),fe();function l(a,c,n,t){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}m.exports=l=function(e,i,s,f){function h(b,p){l(e,b,function(o){return this._invoke(b,p,o)})}i?r?r(e,i,{value:s,enumerable:!f,configurable:!f,writable:!f}):e[i]=s:(h("next",0),h("throw",1),h("return",2))},m.exports.__esModule=!0,m.exports.default=m.exports,l(a,c,n,t)}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),La=ve((u,m)=>{he(),me(),fe();var l=Ua();function a(){var c,n,t=typeof Symbol=="function"?Symbol:{},r=t.iterator||"@@iterator",e=t.toStringTag||"@@toStringTag";function i(w,g,k,_){var y=g&&g.prototype instanceof f?g:f,T=Object.create(y.prototype);return l(T,"_invoke",(function(S,E,P){var O,B,I,z=0,F=P||[],D=!1,pe={p:0,n:0,v:c,a:V,f:V.bind(c,4),d:function(Q,ie){return O=Q,B=0,I=c,pe.n=ie,s}};function V(Q,ie){for(B=Q,I=ie,n=0;!D&&z&&!W&&n<F.length;n++){var W,te=F[n],N=pe.p,Z=te[2];Q>3?(W=Z===ie)&&(I=te[(B=te[4])?5:(B=3,3)],te[4]=te[5]=c):te[0]<=N&&((W=Q<2&&N<te[1])?(B=0,pe.v=ie,pe.n=te[1]):N<Z&&(W=Q<3||te[0]>ie||ie>Z)&&(te[4]=Q,te[5]=ie,pe.n=Z,B=0))}if(W||Q>1)return s;throw D=!0,ie}return function(Q,ie,W){if(z>1)throw TypeError("Generator is already running");for(D&&ie===1&&V(ie,W),B=ie,I=W;(n=B<2?c:I)||!D;){O||(B?B<3?(B>1&&(pe.n=-1),V(B,I)):pe.n=I:pe.v=I);try{if(z=2,O){if(B||(Q="next"),n=O[Q]){if(!(n=n.call(O,I)))throw TypeError("iterator result is not an object");if(!n.done)return n;I=n.value,B<2&&(B=0)}else B===1&&(n=O.return)&&n.call(O),B<2&&(I=TypeError("The iterator does not provide a '"+Q+"' method"),B=1);O=c}else if((n=(D=pe.n<0)?I:S.call(E,pe))!==s)break}catch(te){O=c,B=1,I=te}finally{z=1}}return{value:n,done:D}}})(w,k,_),!0),T}var s={};function f(){}function h(){}function b(){}n=Object.getPrototypeOf;var p=[][r]?n(n([][r]())):(l(n={},r,function(){return this}),n),o=b.prototype=f.prototype=Object.create(p);function v(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,b):(w.__proto__=b,l(w,e,"GeneratorFunction")),w.prototype=Object.create(o),w}return h.prototype=b,l(o,"constructor",b),l(b,"constructor",h),h.displayName="GeneratorFunction",l(b,e,"GeneratorFunction"),l(o),l(o,e,"Generator"),l(o,r,function(){return this}),l(o,"toString",function(){return"[object Generator]"}),(m.exports=a=function(){return{w:i,m:v}},m.exports.__esModule=!0,m.exports.default=m.exports)()}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}),qa=ve((u,m)=>{he(),me(),fe();var l=Ra(),a=Ua();function c(n,t){function r(i,s,f,h){try{var b=n[i](s),p=b.value;return p instanceof l?t.resolve(p.v).then(function(o){r("next",o,f,h)},function(o){r("throw",o,f,h)}):t.resolve(p).then(function(o){b.value=o,f(b)},function(o){return r("throw",o,f,h)})}catch(o){h(o)}}var e;this.next||(a(c.prototype),a(c.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),a(this,"_invoke",function(i,s,f){function h(){return new t(function(b,p){r(i,f,b,p)})}return e=e?e.then(h,h):h()},!0)}m.exports=c,m.exports.__esModule=!0,m.exports.default=m.exports}),ja=ve((u,m)=>{he(),me(),fe();var l=La(),a=qa();function c(n,t,r,e,i){return new a(l().w(n,t,r,e),i||Promise)}m.exports=c,m.exports.__esModule=!0,m.exports.default=m.exports}),Fc=ve((u,m)=>{he(),me(),fe();var l=ja();function a(c,n,t,r,e){var i=l(c,n,t,r,e);return i.next().then(function(s){return s.done?s.value:i.next()})}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}),Dc=ve((u,m)=>{he(),me(),fe();function l(a){var c=Object(a),n=[];for(var t in c)n.unshift(t);return function r(){for(;n.length;)if((t=n.pop())in c)return r.value=t,r.done=!1,r;return r.done=!0,r}}m.exports=l,m.exports.__esModule=!0,m.exports.default=m.exports}),Wc=ve((u,m)=>{he(),me(),fe();var l=nr().default;function a(c){if(c!=null){var n=c[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],t=0;if(n)return n.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length))return{next:function(){return c&&t>=c.length&&(c=void 0),{value:c&&c[t++],done:!c}}}}throw new TypeError(l(c)+" is not iterable")}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}),zc=ve((u,m)=>{he(),me(),fe();var l=Ra(),a=La(),c=Fc(),n=ja(),t=qa(),r=Dc(),e=Wc();function i(){var s=a(),f=s.m(i),h=(Object.getPrototypeOf?Object.getPrototypeOf(f):f.__proto__).constructor;function b(v){var w=typeof v=="function"&&v.constructor;return!!w&&(w===h||(w.displayName||w.name)==="GeneratorFunction")}var p={throw:1,return:2,break:3,continue:3};function o(v){var w,g;return function(k){w||(w={stop:function(){return g(k.a,2)},catch:function(){return k.v},abrupt:function(_,y){return g(k.a,p[_],y)},delegateYield:function(_,y,T){return w.resultName=y,g(k.d,e(_),T)},finish:function(_){return g(k.f,_)}},g=function(_,y,T){k.p=w.prev,k.n=w.next;try{return _(y,T)}finally{w.next=k.n}}),w.resultName&&(w[w.resultName]=k.v,w.resultName=void 0),w.sent=k.v,w.next=k.n;try{return v.call(this,w)}finally{k.p=w.prev,k.n=w.next}}}return(m.exports=i=function(){return{wrap:function(v,w,g,k){return s.w(o(v),w,g,k&&k.reverse())},isGeneratorFunction:b,mark:s.m,awrap:function(v,w){return new l(v,w)},AsyncIterator:t,async:function(v,w,g,k,_){return(b(w)?n:c)(o(v),w,g,k,_)},keys:r,values:e}},m.exports.__esModule=!0,m.exports.default=m.exports)()}m.exports=i,m.exports.__esModule=!0,m.exports.default=m.exports}),Hc=ve((u,m)=>{he(),me(),fe();var l=zc()();m.exports=l;try{regeneratorRuntime=l}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}}),$c=ve((u,m)=>{he(),me(),fe(),(function(l,a){typeof u=="object"&&typeof m<"u"?a(u,Oc(),jc(),Na(),Bc(),Hc()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/slicedToArray","fast-unique-numbers","@babel/runtime/helpers/asyncToGenerator","@babel/runtime/regenerator"],a):(l=typeof globalThis<"u"?globalThis:l||self,a(l.brokerFactory={},l._defineProperty,l._slicedToArray,l.fastUniqueNumbers,l._asyncToGenerator,l._regeneratorRuntime))})(u,function(l,a,c,n,t,r){var e=function(g){return typeof g.start=="function"},i=new WeakMap;function s(g,k){var _=Object.keys(g);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(g);k&&(y=y.filter(function(T){return Object.getOwnPropertyDescriptor(g,T).enumerable})),_.push.apply(_,y)}return _}function f(g){for(var k=1;k<arguments.length;k++){var _=arguments[k]!=null?arguments[k]:{};k%2?s(Object(_),!0).forEach(function(y){a(g,y,_[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(_)):s(Object(_)).forEach(function(y){Object.defineProperty(g,y,Object.getOwnPropertyDescriptor(_,y))})}return g}var h=function(g){return f(f({},g),{},{connect:function(k){var _=k.call;return t(r.mark(function y(){var T,S,E,P;return r.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return T=new MessageChannel,S=T.port1,E=T.port2,O.next=1,_("connect",{port:S},[S]);case 1:return P=O.sent,i.set(E,P),O.abrupt("return",E);case 2:case"end":return O.stop()}},y)}))},disconnect:function(k){var _=k.call;return(function(){var y=t(r.mark(function T(S){var E;return r.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(E=i.get(S),E!==void 0){P.next=1;break}throw new Error("The given port is not connected.");case 1:return P.next=2,_("disconnect",{portId:E});case 2:case"end":return P.stop()}},T)}));return function(T){return y.apply(this,arguments)}})()},isSupported:function(k){var _=k.call;return function(){return _("isSupported")}}})};function b(g,k){var _=Object.keys(g);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(g);k&&(y=y.filter(function(T){return Object.getOwnPropertyDescriptor(g,T).enumerable})),_.push.apply(_,y)}return _}function p(g){for(var k=1;k<arguments.length;k++){var _=arguments[k]!=null?arguments[k]:{};k%2?b(Object(_),!0).forEach(function(y){a(g,y,_[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(_)):b(Object(_)).forEach(function(y){Object.defineProperty(g,y,Object.getOwnPropertyDescriptor(_,y))})}return g}var o=new WeakMap,v=function(g){if(o.has(g))return o.get(g);var k=new Map;return o.set(g,k),k},w=function(g){var k=h(g);return function(_){var y=v(_);_.addEventListener("message",function(F){var D=F.data,pe=D.id;if(pe!==null&&y.has(pe)){var V=y.get(pe),Q=V.reject,ie=V.resolve;y.delete(pe),D.error===void 0?ie(D.result):Q(new Error(D.error.message))}}),e(_)&&_.start();for(var T=function(F){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,pe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return new Promise(function(V,Q){var ie=n.generateUniqueNumber(y);y.set(ie,{reject:Q,resolve:V}),D===null?_.postMessage({id:ie,method:F},pe):_.postMessage({id:ie,method:F,params:D},pe)})},S=function(F,D){var pe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];_.postMessage({id:null,method:F,params:D},pe)},E={},P=0,O=Object.entries(k);P<O.length;P++){var B=c(O[P],2),I=B[0],z=B[1];E=p(p({},E),{},a({},I,z({call:T,notify:S})))}return p({},E)}};l.createBroker=w})}),Kc=ve((u,m)=>{he(),me(),fe(),(function(l,a){typeof u=="object"&&typeof m<"u"?a(u,nr(),$c(),Na()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/typeof","broker-factory","fast-unique-numbers"],a):(l=typeof globalThis<"u"?globalThis:l||self,a(l.workerTimersBroker={},l._typeof,l.brokerFactory,l.fastUniqueNumbers))})(u,function(l,a,c,n){var t=new Map([[0,null]]),r=new Map([[0,null]]),e=c.createBroker({clearInterval:function(s){var f=s.call;return function(h){a(t.get(h))==="symbol"&&(t.set(h,null),f("clear",{timerId:h,timerType:"interval"}).then(function(){t.delete(h)}))}},clearTimeout:function(s){var f=s.call;return function(h){a(r.get(h))==="symbol"&&(r.set(h,null),f("clear",{timerId:h,timerType:"timeout"}).then(function(){r.delete(h)}))}},setInterval:function(s){var f=s.call;return function(h){for(var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,p=arguments.length,o=new Array(p>2?p-2:0),v=2;v<p;v++)o[v-2]=arguments[v];var w=Symbol(),g=n.generateUniqueNumber(t);t.set(g,w);var k=function(){return f("set",{delay:b,now:performance.timeOrigin+performance.now(),timerId:g,timerType:"interval"}).then(function(){var _=t.get(g);if(_===void 0)throw new Error("The timer is in an undefined state.");_===w&&(h.apply(void 0,o),t.get(g)===w&&k())})};return k(),g}},setTimeout:function(s){var f=s.call;return function(h){for(var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,p=arguments.length,o=new Array(p>2?p-2:0),v=2;v<p;v++)o[v-2]=arguments[v];var w=Symbol(),g=n.generateUniqueNumber(r);return r.set(g,w),f("set",{delay:b,now:performance.timeOrigin+performance.now(),timerId:g,timerType:"timeout"}).then(function(){var k=r.get(g);if(k===void 0)throw new Error("The timer is in an undefined state.");k===w&&(r.delete(g),h.apply(void 0,o))}),g}}}),i=function(s){var f=new Worker(s);return e(f)};l.load=i,l.wrap=e})}),Vc=ve((u,m)=>{he(),me(),fe(),(function(l,a){typeof u=="object"&&typeof m<"u"?a(u,Kc()):typeof define=="function"&&define.amd?define(["exports","worker-timers-broker"],a):(l=typeof globalThis<"u"?globalThis:l||self,a(l.workerTimers={},l.workerTimersBroker))})(u,function(l,a){var c=function(f,h){var b=null;return function(){if(b!==null)return b;var p=new Blob([h],{type:"application/javascript; charset=utf-8"}),o=URL.createObjectURL(p);return b=f(o),setTimeout(function(){return URL.revokeObjectURL(o)}),b}},n=`(()=>{var e={45:(e,t,r)=>{var n=r(738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},79:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},122:(e,t,r)=>{var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},156:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},172:e=>{e.exports=function(e,t){this.v=e,this.k=t},e.exports.__esModule=!0,e.exports.default=e.exports},293:e=>{function t(e,t,r,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,u){var a=e.apply(r,n);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},373:e=>{e.exports=function(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function e(){for(;r.length;)if((n=r.pop())in t)return e.value=n,e.done=!1,e;return e.done=!0,e}},e.exports.__esModule=!0,e.exports.default=e.exports},389:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,u=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<u?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*u);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,s=r(i),c=a(s,i),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c}(t)},472:function(e,t,r){!function(e,t,r,n){"use strict";var o=function(e,t){return function(r){var o=t.get(r);if(void 0===o)return Promise.resolve(!1);var u=n(o,2),a=u[0],i=u[1];return e(a),t.delete(r),i(!1),Promise.resolve(!0)}},u=function(e,t){var r=function(n,o,u,a){var i=n-e.now();i>0?o.set(a,[t(r,i,n,o,u,a),u]):(o.delete(a),u(!0))};return r},a=function(e,t,r,n){return function(o,u,a){var i=o+u-t.timeOrigin,s=i-t.now();return new Promise((function(t){e.set(a,[r(n,s,i,e,t,a),t])}))}},i=new Map,s=o(globalThis.clearTimeout,i),c=new Map,f=o(globalThis.clearTimeout,c),l=u(performance,globalThis.setTimeout),p=a(i,performance,globalThis.setTimeout,l),d=a(c,performance,globalThis.setTimeout,l);r.createWorker(self,{clear:function(){var r=e(t.mark((function e(r){var n,o,u;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timerId,o=r.timerType,e.next=1,"interval"===o?s(n):f(n);case 1:return u=e.sent,e.abrupt("return",{result:u});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}(),set:function(){var r=e(t.mark((function e(r){var n,o,u,a,i;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.delay,o=r.now,u=r.timerId,a=r.timerType,e.next=1,("interval"===a?p:d)(n,o,u);case 1:return i=e.sent,e.abrupt("return",{result:i});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}()})}(r(293),r(756),r(623),r(715))},546:e=>{function t(r,n,o,u){var a=Object.defineProperty;try{a({},"",{})}catch(r){a=0}e.exports=t=function(e,r,n,o){if(r)a?a(e,r,{value:n,enumerable:!o,configurable:!o,writable:!o}):e[r]=n;else{var u=function(r,n){t(e,r,(function(e){return this._invoke(r,n,e)}))};u("next",0),u("throw",1),u("return",2)}},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n,o,u)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},579:(e,t,r)=>{var n=r(738).default;e.exports=function(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(n(e)+" is not iterable")},e.exports.__esModule=!0,e.exports.default=e.exports},623:function(e,t,r){!function(e,t,r,n,o){"use strict";var u={INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601},a=function(e,t){return Object.assign(new Error(e),{status:t})},i=function(e){return a('The requested method called "'.concat(e,'" is not supported.'),u.METHOD_NOT_FOUND)},s=function(e){return a('The handler of the method called "'.concat(e,'" returned no required result.'),u.INTERNAL_ERROR)},c=function(e){return a('The handler of the method called "'.concat(e,'" returned an unexpected result.'),u.INTERNAL_ERROR)},f=function(e){return a('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),u.INVALID_PARAMS)},l=function(e,n){return function(){var o=t(r.mark((function t(o){var u,a,f,l,p,d,v,x,y,b,h,m,_,g,w;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o.data,a=u.id,f=u.method,l=u.params,p=n[f],t.prev=1,void 0!==p){t.next=2;break}throw i(f);case 2:if(void 0!==(d=void 0===l?p():p(l))){t.next=3;break}throw s(f);case 3:if(!(d instanceof Promise)){t.next=5;break}return t.next=4,d;case 4:g=t.sent,t.next=6;break;case 5:g=d;case 6:if(v=g,null!==a){t.next=8;break}if(void 0===v.result){t.next=7;break}throw c(f);case 7:t.next=10;break;case 8:if(void 0!==v.result){t.next=9;break}throw c(f);case 9:x=v.result,y=v.transferables,b=void 0===y?[]:y,e.postMessage({id:a,result:x},b);case 10:t.next=12;break;case 11:t.prev=11,w=t.catch(1),h=w.message,m=w.status,_=void 0===m?-32603:m,e.postMessage({error:{code:_,message:h},id:a});case 12:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return o.apply(this,arguments)}}()},p=function(){return new Promise((function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])}))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=new Map,y=function(e,n,u){return v(v({},n),{},{connect:function(t){var r=t.port;r.start();var u=e(r,n),a=o.generateUniqueNumber(x);return x.set(a,(function(){u(),r.close(),x.delete(a)})),{result:a}},disconnect:function(e){var t=e.portId,r=x.get(t);if(void 0===r)throw f(t);return r(),{result:null}},isSupported:function(){var e=t(r.mark((function e(){var t,n,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,p();case 1:if(!e.sent){e.next=5;break}if(!((t=u())instanceof Promise)){e.next=3;break}return e.next=2,t;case 2:o=e.sent,e.next=4;break;case 3:o=t;case 4:return n=o,e.abrupt("return",{result:n});case 5:return e.abrupt("return",{result:!1});case 6:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()})},b=function(e,t){var r=y(b,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0}),n=l(e,r);return e.addEventListener("message",n),function(){return e.removeEventListener("message",n)}};e.createWorker=b,e.isSupported=p}(t,r(293),r(756),r(693),r(389))},633:(e,t,r)=>{var n=r(172),o=r(993),u=r(869),a=r(887),i=r(791),s=r(373),c=r(579);function f(){"use strict";var t=o(),r=t.m(f),l=(Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__).constructor;function p(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))}var d={throw:1,return:2,break:3,continue:3};function v(e){var t,r;return function(n){t||(t={stop:function(){return r(n.a,2)},catch:function(){return n.v},abrupt:function(e,t){return r(n.a,d[e],t)},delegateYield:function(e,o,u){return t.resultName=o,r(n.d,c(e),u)},finish:function(e){return r(n.f,e)}},r=function(e,r,o){n.p=t.prev,n.n=t.next;try{return e(r,o)}finally{t.next=n.n}}),t.resultName&&(t[t.resultName]=n.v,t.resultName=void 0),t.sent=n.v,t.next=n.n;try{return e.call(this,t)}finally{n.p=t.prev,n.n=t.next}}}return(e.exports=f=function(){return{wrap:function(e,r,n,o){return t.w(v(e),r,n,o&&o.reverse())},isGeneratorFunction:p,mark:t.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:i,async:function(e,t,r,n,o){return(p(t)?a:u)(v(e),t,r,n,o)},keys:s,values:c}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=f,e.exports.__esModule=!0,e.exports.default=e.exports},693:(e,t,r)=>{var n=r(736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},715:(e,t,r)=>{var n=r(987),o=r(156),u=r(122),a=r(752);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},736:(e,t,r)=>{var n=r(738).default,o=r(45);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},752:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},756:(e,t,r)=>{var n=r(633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},791:(e,t,r)=>{var n=r(172),o=r(546);e.exports=function e(t,r){function u(e,o,a,i){try{var s=t[e](o),c=s.value;return c instanceof n?r.resolve(c.v).then((function(e){u("next",e,a,i)}),(function(e){u("throw",e,a,i)})):r.resolve(c).then((function(e){s.value=e,a(s)}),(function(e){return u("throw",e,a,i)}))}catch(e){i(e)}}var a;this.next||(o(e.prototype),o(e.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",(function(){return this}))),o(this,"_invoke",(function(e,t,n){function o(){return new r((function(t,r){u(e,n,t,r)}))}return a=a?a.then(o,o):o()}),!0)},e.exports.__esModule=!0,e.exports.default=e.exports},869:(e,t,r)=>{var n=r(887);e.exports=function(e,t,r,o,u){var a=n(e,t,r,o,u);return a.next().then((function(e){return e.done?e.value:a.next()}))},e.exports.__esModule=!0,e.exports.default=e.exports},887:(e,t,r)=>{var n=r(993),o=r(791);e.exports=function(e,t,r,u,a){return new o(n().w(e,t,r,u),a||Promise)},e.exports.__esModule=!0,e.exports.default=e.exports},987:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},993:(e,t,r)=>{var n=r(546);function o(){var t,r,u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.toStringTag||"@@toStringTag";function s(e,o,u,a){var i=o&&o.prototype instanceof f?o:f,s=Object.create(i.prototype);return n(s,"_invoke",function(e,n,o){var u,a,i,s=0,f=o||[],l=!1,p={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,r){return u=e,a=0,i=t,p.n=r,c}};function d(e,n){for(a=e,i=n,r=0;!l&&s&&!o&&r<f.length;r++){var o,u=f[r],d=p.p,v=u[2];e>3?(o=v===n)&&(i=u[(a=u[4])?5:(a=3,3)],u[4]=u[5]=t):u[0]<=d&&((o=e<2&&d<u[1])?(a=0,p.v=n,p.n=u[1]):d<v&&(o=e<3||u[0]>n||n>v)&&(u[4]=e,u[5]=n,p.n=v,a=0))}if(o||e>1)return c;throw l=!0,n}return function(o,f,v){if(s>1)throw TypeError("Generator is already running");for(l&&1===f&&d(f,v),a=f,i=v;(r=a<2?t:i)||!l;){u||(a?a<3?(a>1&&(p.n=-1),d(a,i)):p.n=i:p.v=i);try{if(s=2,u){if(a||(o="next"),r=u[o]){if(!(r=r.call(u,i)))throw TypeError("iterator result is not an object");if(!r.done)return r;i=r.value,a<2&&(a=0)}else 1===a&&(r=u.return)&&r.call(u),a<2&&(i=TypeError("The iterator does not provide a '"+o+"' method"),a=1);u=t}else if((r=(l=p.n<0)?i:e.call(n,p))!==c)break}catch(e){u=t,a=1,i=e}finally{s=1}}return{value:r,done:l}}}(e,u,a),!0),s}var c={};function f(){}function l(){}function p(){}r=Object.getPrototypeOf;var d=[][a]?r(r([][a]())):(n(r={},a,(function(){return this})),r),v=p.prototype=f.prototype=Object.create(d);function x(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,n(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e}return l.prototype=p,n(v,"constructor",p),n(p,"constructor",l),l.displayName="GeneratorFunction",n(p,i,"GeneratorFunction"),n(v),n(v,i,"Generator"),n(v,a,(function(){return this})),n(v,"toString",(function(){return"[object Generator]"})),(e.exports=o=function(){return{w:s,m:x}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`,t=c(a.load,n),r=function(f){return t().clearInterval(f)},e=function(f){return t().clearTimeout(f)},i=function(){var f;return(f=t()).setInterval.apply(f,arguments)},s=function(){var f;return(f=t()).setTimeout.apply(f,arguments)};l.clearInterval=r,l.clearTimeout=e,l.setInterval=i,l.setTimeout=s})}),rr=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0}),u.isReactNativeBrowser=u.isWebWorker=void 0;var m=()=>typeof window<"u"?typeof navigator<"u"&&navigator.userAgent?.toLowerCase().indexOf(" electron/")>-1&&Fe?.versions?!Object.prototype.hasOwnProperty.call(Fe.versions,"electron"):typeof window.document<"u":!1,l=()=>!!(typeof self=="object"&&self?.constructor?.name?.includes("WorkerGlobalScope")&&typeof Deno>"u"),a=()=>typeof navigator<"u"&&navigator.product==="ReactNative",c=m()||l()||a();u.isWebWorker=l(),u.isReactNativeBrowser=a(),u.default=c}),Qc=ve(u=>{he(),me(),fe();var m=u&&u.__createBinding||(Object.create?function(i,s,f,h){h===void 0&&(h=f);var b=Object.getOwnPropertyDescriptor(s,f);(!b||("get"in b?!s.__esModule:b.writable||b.configurable))&&(b={enumerable:!0,get:function(){return s[f]}}),Object.defineProperty(i,h,b)}:function(i,s,f,h){h===void 0&&(h=f),i[h]=s[f]}),l=u&&u.__setModuleDefault||(Object.create?function(i,s){Object.defineProperty(i,"default",{enumerable:!0,value:s})}:function(i,s){i.default=s}),a=u&&u.__importStar||(function(){var i=function(s){return i=Object.getOwnPropertyNames||function(f){var h=[];for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(h[h.length]=b);return h},i(s)};return function(s){if(s&&s.__esModule)return s;var f={};if(s!=null)for(var h=i(s),b=0;b<h.length;b++)h[b]!=="default"&&m(f,s,h[b]);return l(f,s),f}})();Object.defineProperty(u,"__esModule",{value:!0});var c=Vc(),n=a(rr()),t={set:c.setInterval,clear:c.clearInterval},r={set:(i,s)=>setInterval(i,s),clear:i=>clearInterval(i)},e=i=>{switch(i){case"native":return r;case"worker":return t;default:return n.default&&!n.isWebWorker&&!n.isReactNativeBrowser?t:r}};u.default=e}),Ba=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(u,"__esModule",{value:!0});var l=m(Qc()),a=class{_keepalive;timerId;timer;destroyed=!1;counter;client;_keepaliveTimeoutTimestamp;_intervalEvery;get keepaliveTimeoutTimestamp(){return this._keepaliveTimeoutTimestamp}get intervalEvery(){return this._intervalEvery}get keepalive(){return this._keepalive}constructor(c,n){this.client=c,this.timer=typeof n=="object"&&"set"in n&&"clear"in n?n:(0,l.default)(n),this.setKeepalive(c.options.keepalive)}clear(){this.timerId&&(this.timer.clear(this.timerId),this.timerId=null)}setKeepalive(c){if(c*=1e3,isNaN(c)||c<=0||c>2147483647)throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${c}`);this._keepalive=c,this.reschedule(),this.client.log(`KeepaliveManager: set keepalive to ${c}ms`)}destroy(){this.clear(),this.destroyed=!0}reschedule(){if(this.destroyed)return;this.clear(),this.counter=0;let c=Math.ceil(this._keepalive*1.5);this._keepaliveTimeoutTimestamp=Date.now()+c,this._intervalEvery=Math.ceil(this._keepalive/2),this.timerId=this.timer.set(()=>{this.destroyed||(this.counter+=1,this.counter===2?this.client.sendPing():this.counter>2&&this.client.onKeepaliveTimeout())},this._intervalEvery)}};u.default=a}),vi=ve(u=>{he(),me(),fe();var m=u&&u.__createBinding||(Object.create?function(y,T,S,E){E===void 0&&(E=S);var P=Object.getOwnPropertyDescriptor(T,S);(!P||("get"in P?!T.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return T[S]}}),Object.defineProperty(y,E,P)}:function(y,T,S,E){E===void 0&&(E=S),y[E]=T[S]}),l=u&&u.__setModuleDefault||(Object.create?function(y,T){Object.defineProperty(y,"default",{enumerable:!0,value:T})}:function(y,T){y.default=T}),a=u&&u.__importStar||(function(){var y=function(T){return y=Object.getOwnPropertyNames||function(S){var E=[];for(var P in S)Object.prototype.hasOwnProperty.call(S,P)&&(E[E.length]=P);return E},y(T)};return function(T){if(T&&T.__esModule)return T;var S={};if(T!=null)for(var E=y(T),P=0;P<E.length;P++)E[P]!=="default"&&m(S,T,E[P]);return l(S,T),S}})(),c=u&&u.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(u,"__esModule",{value:!0});var n=c(ic()),t=Ht(),r=c(oc()),e=c(xt()),i=a(fa()),s=c(ma()),f=c(Ec()),h=c(Oa()),b=c(Ic()),p=tn(),o=Mc(),v=c(Ba()),w=a(rr()),g=globalThis.setImmediate||((...y)=>{let T=y.shift();(0,p.nextTick)(()=>{T(...y)})}),k={keepalive:60,reschedulePings:!0,protocolId:"MQTT",protocolVersion:4,reconnectPeriod:1e3,connectTimeout:30*1e3,clean:!0,resubscribe:!0,subscribeBatchSize:null,writeCache:!0,timerVariant:"auto"},_=class yi extends o.TypedEventEmitter{static VERSION=p.MQTTJS_VERSION;connected;disconnecting;disconnected;reconnecting;incomingStore;outgoingStore;options;queueQoSZero;_reconnectCount;log;messageIdProvider;outgoing;messageIdToTopic;noop;keepaliveManager;stream;queue;streamBuilder;_resubscribeTopics;connackTimer;reconnectTimer;_storeProcessing;_packetIdsDuringStoreProcessing;_storeProcessingQueue;_firstConnection;topicAliasRecv;topicAliasSend;_deferredReconnect;connackPacket;static defaultId(){return`mqttjs_${Math.random().toString(16).substr(2,8)}`}constructor(T,S){super(),this.options=S||{};for(let E in k)typeof this.options[E]>"u"?this.options[E]=k[E]:this.options[E]=S[E];this.log=this.options.log||(0,e.default)("mqttjs:client"),this.noop=this._noop.bind(this),this.log("MqttClient :: version:",yi.VERSION),w.isWebWorker?this.log("MqttClient :: environment","webworker"):this.log("MqttClient :: environment",w.default?"browser":"node"),this.log("MqttClient :: options.protocol",S.protocol),this.log("MqttClient :: options.protocolVersion",S.protocolVersion),this.log("MqttClient :: options.username",S.username),this.log("MqttClient :: options.keepalive",S.keepalive),this.log("MqttClient :: options.reconnectPeriod",S.reconnectPeriod),this.log("MqttClient :: options.rejectUnauthorized",S.rejectUnauthorized),this.log("MqttClient :: options.properties.topicAliasMaximum",S.properties?S.properties.topicAliasMaximum:void 0),this.options.clientId=typeof S.clientId=="string"?S.clientId:yi.defaultId(),this.log("MqttClient :: clientId",this.options.clientId),this.options.customHandleAcks=S.protocolVersion===5&&S.customHandleAcks?S.customHandleAcks:(...E)=>{E[3](null,0)},this.options.writeCache||(n.default.writeToStream.cacheNumbers=!1),this.streamBuilder=T,this.messageIdProvider=typeof this.options.messageIdProvider>"u"?new h.default:this.options.messageIdProvider,this.outgoingStore=S.outgoingStore||new s.default,this.incomingStore=S.incomingStore||new s.default,this.queueQoSZero=S.queueQoSZero===void 0?!0:S.queueQoSZero,this._resubscribeTopics={},this.messageIdToTopic={},this.keepaliveManager=null,this.connected=!1,this.disconnecting=!1,this.reconnecting=!1,this.queue=[],this.connackTimer=null,this.reconnectTimer=null,this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={},this._storeProcessingQueue=[],this.outgoing={},this._firstConnection=!0,S.properties&&S.properties.topicAliasMaximum>0&&(S.properties.topicAliasMaximum>65535?this.log("MqttClient :: options.properties.topicAliasMaximum is out of range"):this.topicAliasRecv=new b.default(S.properties.topicAliasMaximum)),this.on("connect",()=>{let{queue:E}=this,P=()=>{let O=E.shift();this.log("deliver :: entry %o",O);let B=null;if(!O){this._resubscribe();return}B=O.packet,this.log("deliver :: call _sendPacket for %o",B);let I=!0;B.messageId&&B.messageId!==0&&(this.messageIdProvider.register(B.messageId)||(I=!1)),I?this._sendPacket(B,z=>{O.cb&&O.cb(z),P()}):(this.log("messageId: %d has already used. The message is skipped and removed.",B.messageId),P())};this.log("connect :: sending queued packets"),P()}),this.on("close",()=>{this.log("close :: connected set to `false`"),this.connected=!1,this.log("close :: clearing connackTimer"),clearTimeout(this.connackTimer),this._destroyKeepaliveManager(),this.topicAliasRecv&&this.topicAliasRecv.clear(),this.log("close :: calling _setupReconnect"),this._setupReconnect()}),this.options.manualConnect||(this.log("MqttClient :: setting up stream"),this.connect())}handleAuth(T,S){S()}handleMessage(T,S){S()}_nextId(){return this.messageIdProvider.allocate()}getLastMessageId(){return this.messageIdProvider.getLastAllocated()}connect(){let T=new t.Writable,S=n.default.parser(this.options),E=null,P=[];this.log("connect :: calling method to clear reconnect"),this._clearReconnect(),this.disconnected&&!this.reconnecting&&(this.incomingStore=this.options.incomingStore||new s.default,this.outgoingStore=this.options.outgoingStore||new s.default,this.disconnecting=!1,this.disconnected=!1),this.log("connect :: using streamBuilder provided to client to create stream"),this.stream=this.streamBuilder(this),S.on("packet",F=>{this.log("parser :: on packet push to packets array."),P.push(F)});let O=()=>{this.log("work :: getting next packet in queue");let F=P.shift();if(F)this.log("work :: packet pulled from queue"),(0,f.default)(this,F,B);else{this.log("work :: no packets in queue");let D=E;E=null,this.log("work :: done flag is %s",!!D),D&&D()}},B=()=>{if(P.length)(0,p.nextTick)(O);else{let F=E;E=null,F()}};T._write=(F,D,pe)=>{E=pe,this.log("writable stream :: parsing buffer"),S.parse(F),O()};let I=F=>{this.log("streamErrorHandler :: error",F.message),F.code?(this.log("streamErrorHandler :: emitting error"),this.emit("error",F)):this.noop(F)};this.log("connect :: pipe stream to writable stream"),this.stream.pipe(T),this.stream.on("error",I),this.stream.on("close",()=>{this.log("(%s)stream :: on close",this.options.clientId),this._flushVolatile(),this.log("stream: emit close to MqttClient"),this.emit("close")}),this.log("connect: sending packet `connect`");let z={cmd:"connect",protocolId:this.options.protocolId,protocolVersion:this.options.protocolVersion,clean:this.options.clean,clientId:this.options.clientId,keepalive:this.options.keepalive,username:this.options.username,password:this.options.password,properties:this.options.properties};if(this.options.will&&(z.will={...this.options.will,payload:this.options.will?.payload}),this.topicAliasRecv&&(z.properties||(z.properties={}),this.topicAliasRecv&&(z.properties.topicAliasMaximum=this.topicAliasRecv.max)),this._writePacket(z),S.on("error",this.emit.bind(this,"error")),this.options.properties){if(!this.options.properties.authenticationMethod&&this.options.properties.authenticationData)return this.end(()=>this.emit("error",new Error("Packet has no Authentication Method"))),this;if(this.options.properties.authenticationMethod&&this.options.authPacket&&typeof this.options.authPacket=="object"){let F={cmd:"auth",reasonCode:0,...this.options.authPacket};this._writePacket(F)}}return this.stream.setMaxListeners(1e3),clearTimeout(this.connackTimer),this.connackTimer=setTimeout(()=>{this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"),this.emit("error",new Error("connack timeout")),this._cleanUp(!0)},this.options.connectTimeout),this}publish(T,S,E,P){this.log("publish :: message `%s` to topic `%s`",S,T);let{options:O}=this;typeof E=="function"&&(P=E,E=null),E=E||{},E={qos:0,retain:!1,dup:!1,...E};let{qos:B,retain:I,dup:z,properties:F,cbStorePut:D}=E;if(this._checkDisconnecting(P))return this;let pe=()=>{let V=0;if((B===1||B===2)&&(V=this._nextId(),V===null))return this.log("No messageId left"),!1;let Q={cmd:"publish",topic:T,payload:S,qos:B,retain:I,messageId:V,dup:z};switch(O.protocolVersion===5&&(Q.properties=F),this.log("publish :: qos",B),B){case 1:case 2:this.outgoing[Q.messageId]={volatile:!1,cb:P||this.noop},this.log("MqttClient:publish: packet cmd: %s",Q.cmd),this._sendPacket(Q,void 0,D);break;default:this.log("MqttClient:publish: packet cmd: %s",Q.cmd),this._sendPacket(Q,P,D);break}return!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!pe())&&this._storeProcessingQueue.push({invoke:pe,cbStorePut:E.cbStorePut,callback:P}),this}publishAsync(T,S,E){return new Promise((P,O)=>{this.publish(T,S,E,(B,I)=>{B?O(B):P(I)})})}subscribe(T,S,E){let P=this.options.protocolVersion;typeof S=="function"&&(E=S),E=E||this.noop;let O=!1,B=[];typeof T=="string"?(T=[T],B=T):Array.isArray(T)?B=T:typeof T=="object"&&(O=T.resubscribe,delete T.resubscribe,B=Object.keys(T));let I=i.validateTopics(B);if(I!==null)return g(E,new Error(`Invalid topic ${I}`)),this;if(this._checkDisconnecting(E))return this.log("subscribe: discconecting true"),this;let z={qos:0};P===5&&(z.nl=!1,z.rap=!1,z.rh=0),S={...z,...S};let{properties:F}=S,D=[],pe=(ie,W)=>{if(W=W||S,!Object.prototype.hasOwnProperty.call(this._resubscribeTopics,ie)||this._resubscribeTopics[ie].qos<W.qos||O){let te={topic:ie,qos:W.qos};P===5&&(te.nl=W.nl,te.rap=W.rap,te.rh=W.rh,te.properties=F),this.log("subscribe: pushing topic `%s` and qos `%s` to subs list",te.topic,te.qos),D.push(te)}};if(Array.isArray(T)?T.forEach(ie=>{this.log("subscribe: array topic %s",ie),pe(ie)}):Object.keys(T).forEach(ie=>{this.log("subscribe: object topic %s, %o",ie,T[ie]),pe(ie,T[ie])}),!D.length)return E(null,[]),this;let V=(ie,W)=>{let te={cmd:"subscribe",subscriptions:ie,messageId:W};if(F&&(te.properties=F),this.options.resubscribe){this.log("subscribe :: resubscribe true");let Z=[];ie.forEach(we=>{if(this.options.reconnectPeriod>0){let re={qos:we.qos};P===5&&(re.nl=we.nl||!1,re.rap=we.rap||!1,re.rh=we.rh||0,re.properties=we.properties),this._resubscribeTopics[we.topic]=re,Z.push(we.topic)}}),this.messageIdToTopic[te.messageId]=Z}let N=new Promise((Z,we)=>{this.outgoing[te.messageId]={volatile:!0,cb(re,_e){if(!re){let{granted:X}=_e;for(let L=0;L<X.length;L+=1)ie[L].qos=X[L]}re?we(new p.ErrorWithSubackPacket(re.message,_e)):Z(_e)}}});return this.log("subscribe :: call _sendPacket"),this._sendPacket(te),N},Q=()=>{let ie=this.options.subscribeBatchSize??D.length,W=[];for(let te=0;te<D.length;te+=ie){let N=D.slice(te,te+ie),Z=this._nextId();if(Z===null)return this.log("No messageId left"),!1;W.push(V(N,Z))}return Promise.all(W).then(te=>{E(null,D,te.at(-1))}).catch(te=>{E(te,D,te.packet)}),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!Q())&&this._storeProcessingQueue.push({invoke:Q,callback:E}),this}subscribeAsync(T,S){return new Promise((E,P)=>{this.subscribe(T,S,(O,B)=>{O?P(O):E(B)})})}unsubscribe(T,S,E){typeof T=="string"&&(T=[T]),typeof S=="function"&&(E=S),E=E||this.noop;let P=i.validateTopics(T);if(P!==null)return g(E,new Error(`Invalid topic ${P}`)),this;if(this._checkDisconnecting(E))return this;let O=()=>{let B=this._nextId();if(B===null)return this.log("No messageId left"),!1;let I={cmd:"unsubscribe",messageId:B,unsubscriptions:[]};return typeof T=="string"?I.unsubscriptions=[T]:Array.isArray(T)&&(I.unsubscriptions=T),this.options.resubscribe&&I.unsubscriptions.forEach(z=>{delete this._resubscribeTopics[z]}),typeof S=="object"&&S.properties&&(I.properties=S.properties),this.outgoing[I.messageId]={volatile:!0,cb:E},this.log("unsubscribe: call _sendPacket"),this._sendPacket(I),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!O())&&this._storeProcessingQueue.push({invoke:O,callback:E}),this}unsubscribeAsync(T,S){return new Promise((E,P)=>{this.unsubscribe(T,S,(O,B)=>{O?P(O):E(B)})})}end(T,S,E){this.log("end :: (%s)",this.options.clientId),(T==null||typeof T!="boolean")&&(E=E||S,S=T,T=!1),typeof S!="object"&&(E=E||S,S=null),this.log("end :: cb? %s",!!E),(!E||typeof E!="function")&&(E=this.noop);let P=()=>{this.log("end :: closeStores: closing incoming and outgoing stores"),this.disconnected=!0,this.incomingStore.close(B=>{this.outgoingStore.close(I=>{if(this.log("end :: closeStores: emitting end"),this.emit("end"),E){let z=B||I;this.log("end :: closeStores: invoking callback with args"),E(z)}})}),this._deferredReconnect?this._deferredReconnect():(this.options.reconnectPeriod===0||this.options.manualConnect)&&(this.disconnecting=!1)},O=()=>{this.log("end :: (%s) :: finish :: calling _cleanUp with force %s",this.options.clientId,T),this._cleanUp(T,()=>{this.log("end :: finish :: calling process.nextTick on closeStores"),(0,p.nextTick)(P)},S)};return this.disconnecting?(E(),this):(this._clearReconnect(),this.disconnecting=!0,!T&&Object.keys(this.outgoing).length>0?(this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty",this.options.clientId),this.once("outgoingEmpty",setTimeout.bind(null,O,10))):(this.log("end :: (%s) :: immediately calling finish",this.options.clientId),O()),this)}endAsync(T,S){return new Promise((E,P)=>{this.end(T,S,O=>{O?P(O):E()})})}removeOutgoingMessage(T){if(this.outgoing[T]){let{cb:S}=this.outgoing[T];this._removeOutgoingAndStoreMessage(T,()=>{S(new Error("Message removed"))})}return this}reconnect(T){this.log("client reconnect");let S=()=>{T?(this.options.incomingStore=T.incomingStore,this.options.outgoingStore=T.outgoingStore):(this.options.incomingStore=null,this.options.outgoingStore=null),this.incomingStore=this.options.incomingStore||new s.default,this.outgoingStore=this.options.outgoingStore||new s.default,this.disconnecting=!1,this.disconnected=!1,this._deferredReconnect=null,this._reconnect()};return this.disconnecting&&!this.disconnected?this._deferredReconnect=S:S(),this}_flushVolatile(){this.outgoing&&(this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"),Object.keys(this.outgoing).forEach(T=>{this.outgoing[T].volatile&&typeof this.outgoing[T].cb=="function"&&(this.outgoing[T].cb(new Error("Connection closed")),delete this.outgoing[T])}))}_flush(){this.outgoing&&(this.log("_flush: queue exists? %b",!!this.outgoing),Object.keys(this.outgoing).forEach(T=>{typeof this.outgoing[T].cb=="function"&&(this.outgoing[T].cb(new Error("Connection closed")),delete this.outgoing[T])}))}_removeTopicAliasAndRecoverTopicName(T){let S;T.properties&&(S=T.properties.topicAlias);let E=T.topic.toString();if(this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o",S,E),E.length===0){if(typeof S>"u")return new Error("Unregistered Topic Alias");if(E=this.topicAliasSend.getTopicByAlias(S),typeof E>"u")return new Error("Unregistered Topic Alias");T.topic=E}S&&delete T.properties.topicAlias}_checkDisconnecting(T){return this.disconnecting&&(T&&T!==this.noop?T(new Error("client disconnecting")):this.emit("error",new Error("client disconnecting"))),this.disconnecting}_reconnect(){this.log("_reconnect: emitting reconnect to client"),this.emit("reconnect"),this.connected?(this.end(()=>{this.connect()}),this.log("client already connected. disconnecting first.")):(this.log("_reconnect: calling connect"),this.connect())}_setupReconnect(){!this.disconnecting&&!this.reconnectTimer&&this.options.reconnectPeriod>0?(this.reconnecting||(this.log("_setupReconnect :: emit `offline` state"),this.emit("offline"),this.log("_setupReconnect :: set `reconnecting` to `true`"),this.reconnecting=!0),this.log("_setupReconnect :: setting reconnectTimer for %d ms",this.options.reconnectPeriod),this.reconnectTimer=setInterval(()=>{this.log("reconnectTimer :: reconnect triggered!"),this._reconnect()},this.options.reconnectPeriod)):this.log("_setupReconnect :: doing nothing...")}_clearReconnect(){this.log("_clearReconnect : clearing reconnect timer"),this.reconnectTimer&&(clearInterval(this.reconnectTimer),this.reconnectTimer=null)}_cleanUp(T,S,E={}){if(S&&(this.log("_cleanUp :: done callback provided for on stream close"),this.stream.on("close",S)),this.log("_cleanUp :: forced? %s",T),T)this.options.reconnectPeriod===0&&this.options.clean&&this._flush(),this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),this.stream.destroy();else{let P={cmd:"disconnect",...E};this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet",this.options.clientId),this._sendPacket(P,()=>{this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),g(()=>{this.stream.end(()=>{this.log("_cleanUp :: (%s) :: stream destroyed",this.options.clientId)})})})}!this.disconnecting&&!this.reconnecting&&(this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."),this._clearReconnect(),this._setupReconnect()),this._destroyKeepaliveManager(),S&&!this.connected&&(this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener",this.options.clientId),this.stream.removeListener("close",S),S())}_storeAndSend(T,S,E){this.log("storeAndSend :: store packet with cmd %s to outgoingStore",T.cmd);let P=T,O;if(P.cmd==="publish"&&(P=(0,r.default)(T),O=this._removeTopicAliasAndRecoverTopicName(P),O))return S&&S(O);this.outgoingStore.put(P,B=>{if(B)return S&&S(B);E(),this._writePacket(T,S)})}_applyTopicAlias(T){if(this.options.protocolVersion===5&&T.cmd==="publish"){let S;T.properties&&(S=T.properties.topicAlias);let E=T.topic.toString();if(this.topicAliasSend)if(S){if(E.length!==0&&(this.log("applyTopicAlias :: register topic: %s - alias: %d",E,S),!this.topicAliasSend.put(E,S)))return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",E,S),new Error("Sending Topic Alias out of range")}else E.length!==0&&(this.options.autoAssignTopicAlias?(S=this.topicAliasSend.getAliasByTopic(E),S?(T.topic="",T.properties={...T.properties,topicAlias:S},this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d",E,S)):(S=this.topicAliasSend.getLruAlias(),this.topicAliasSend.put(E,S),T.properties={...T.properties,topicAlias:S},this.log("applyTopicAlias :: auto assign topic: %s - alias: %d",E,S))):this.options.autoUseTopicAlias&&(S=this.topicAliasSend.getAliasByTopic(E),S&&(T.topic="",T.properties={...T.properties,topicAlias:S},this.log("applyTopicAlias :: auto use topic: %s - alias: %d",E,S))));else if(S)return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",E,S),new Error("Sending Topic Alias out of range")}}_noop(T){this.log("noop ::",T)}_writePacket(T,S){this.log("_writePacket :: packet: %O",T),this.log("_writePacket :: emitting `packetsend`"),this.emit("packetsend",T),this.log("_writePacket :: writing to stream");let E=n.default.writeToStream(T,this.stream,this.options);this.log("_writePacket :: writeToStream result %s",E),!E&&S&&S!==this.noop?(this.log("_writePacket :: handle events on `drain` once through callback."),this.stream.once("drain",S)):S&&(this.log("_writePacket :: invoking cb"),S())}_sendPacket(T,S,E,P){this.log("_sendPacket :: (%s) ::  start",this.options.clientId),E=E||this.noop,S=S||this.noop;let O=this._applyTopicAlias(T);if(O){S(O);return}if(!this.connected){if(T.cmd==="auth"){this._writePacket(T,S);return}this.log("_sendPacket :: client not connected. Storing packet offline."),this._storePacket(T,S,E);return}if(P){this._writePacket(T,S);return}switch(T.cmd){case"publish":break;case"pubrel":this._storeAndSend(T,S,E);return;default:this._writePacket(T,S);return}switch(T.qos){case 2:case 1:this._storeAndSend(T,S,E);break;default:this._writePacket(T,S);break}this.log("_sendPacket :: (%s) ::  end",this.options.clientId)}_storePacket(T,S,E){this.log("_storePacket :: packet: %o",T),this.log("_storePacket :: cb? %s",!!S),E=E||this.noop;let P=T;if(P.cmd==="publish"){P=(0,r.default)(T);let B=this._removeTopicAliasAndRecoverTopicName(P);if(B)return S&&S(B)}let O=P.qos||0;O===0&&this.queueQoSZero||P.cmd!=="publish"?this.queue.push({packet:P,cb:S}):O>0?(S=this.outgoing[P.messageId]?this.outgoing[P.messageId].cb:null,this.outgoingStore.put(P,B=>{if(B)return S&&S(B);E()})):S&&S(new Error("No connection to broker"))}_setupKeepaliveManager(){this.log("_setupKeepaliveManager :: keepalive %d (seconds)",this.options.keepalive),!this.keepaliveManager&&this.options.keepalive&&(this.keepaliveManager=new v.default(this,this.options.timerVariant))}_destroyKeepaliveManager(){this.keepaliveManager&&(this.log("_destroyKeepaliveManager :: destroying keepalive manager"),this.keepaliveManager.destroy(),this.keepaliveManager=null)}reschedulePing(T=!1){this.keepaliveManager&&this.options.keepalive&&(T||this.options.reschedulePings)&&this._reschedulePing()}_reschedulePing(){this.log("_reschedulePing :: rescheduling ping"),this.keepaliveManager.reschedule()}sendPing(){this.log("_sendPing :: sending pingreq"),this._sendPacket({cmd:"pingreq"})}onKeepaliveTimeout(){this.emit("error",new Error("Keepalive timeout")),this.log("onKeepaliveTimeout :: calling _cleanUp with force true"),this._cleanUp(!0)}_resubscribe(){this.log("_resubscribe");let T=Object.keys(this._resubscribeTopics);if(!this._firstConnection&&(this.options.clean||this.options.protocolVersion>=4&&!this.connackPacket.sessionPresent)&&T.length>0)if(this.options.resubscribe)if(this.options.protocolVersion===5){this.log("_resubscribe: protocolVersion 5");for(let S=0;S<T.length;S++){let E={};E[T[S]]=this._resubscribeTopics[T[S]],E.resubscribe=!0,this.subscribe(E,{properties:E[T[S]].properties})}}else this._resubscribeTopics.resubscribe=!0,this.subscribe(this._resubscribeTopics);else this._resubscribeTopics={};this._firstConnection=!1}_onConnect(T){if(this.disconnected){this.emit("connect",T);return}this.connackPacket=T,this.messageIdProvider.clear(),this._setupKeepaliveManager(),this.connected=!0;let S=()=>{let E=this.outgoingStore.createStream(),P=()=>{E.destroy(),E=null,this._flushStoreProcessingQueue(),O()},O=()=>{this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={}};this.once("close",P),E.on("error",I=>{O(),this._flushStoreProcessingQueue(),this.removeListener("close",P),this.emit("error",I)});let B=()=>{if(!E)return;let I=E.read(1),z;if(!I){E.once("readable",B);return}if(this._storeProcessing=!0,this._packetIdsDuringStoreProcessing[I.messageId]){B();return}!this.disconnecting&&!this.reconnectTimer?(z=this.outgoing[I.messageId]?this.outgoing[I.messageId].cb:null,this.outgoing[I.messageId]={volatile:!1,cb(F,D){z&&z(F,D),B()}},this._packetIdsDuringStoreProcessing[I.messageId]=!0,this.messageIdProvider.register(I.messageId)?this._sendPacket(I,void 0,void 0,!0):this.log("messageId: %d has already used.",I.messageId)):E.destroy&&E.destroy()};E.on("end",()=>{let I=!0;for(let z in this._packetIdsDuringStoreProcessing)if(!this._packetIdsDuringStoreProcessing[z]){I=!1;break}this.removeListener("close",P),I?(O(),this._invokeAllStoreProcessingQueue(),this.emit("connect",T)):S()}),B()};S()}_invokeStoreProcessingQueue(){if(!this._storeProcessing&&this._storeProcessingQueue.length>0){let T=this._storeProcessingQueue[0];if(T&&T.invoke())return this._storeProcessingQueue.shift(),!0}return!1}_invokeAllStoreProcessingQueue(){for(;this._invokeStoreProcessingQueue(););}_flushStoreProcessingQueue(){for(let T of this._storeProcessingQueue)T.cbStorePut&&T.cbStorePut(new Error("Connection closed")),T.callback&&T.callback(new Error("Connection closed"));this._storeProcessingQueue.splice(0)}_removeOutgoingAndStoreMessage(T,S){delete this.outgoing[T],this.outgoingStore.del({messageId:T},(E,P)=>{S(E,P),this.messageIdProvider.deallocate(T),this._invokeStoreProcessingQueue()})}};u.default=_}),Gc=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=Pa(),l=class{numberAllocator;lastId;constructor(){this.numberAllocator=new m.NumberAllocator(1,65535)}allocate(){return this.lastId=this.numberAllocator.alloc(),this.lastId}getLastAllocated(){return this.lastId}register(a){return this.numberAllocator.use(a)}deallocate(a){this.numberAllocator.free(a)}clear(){this.numberAllocator.clear()}};u.default=l});function Yc(){if(wi)return An;wi=!0;let u=2147483647,m=36,l=1,a=26,c=38,n=700,t=72,r=128,e="-",i=/^xn--/,s=/[^\0-\x7F]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},b=m-l,p=Math.floor,o=String.fromCharCode;function v(O){throw new RangeError(h[O])}function w(O,B){let I=[],z=O.length;for(;z--;)I[z]=B(O[z]);return I}function g(O,B){let I=O.split("@"),z="";I.length>1&&(z=I[0]+"@",O=I[1]),O=O.replace(f,".");let F=O.split("."),D=w(F,B).join(".");return z+D}function k(O){let B=[],I=0,z=O.length;for(;I<z;){let F=O.charCodeAt(I++);if(F>=55296&&F<=56319&&I<z){let D=O.charCodeAt(I++);(D&64512)==56320?B.push(((F&1023)<<10)+(D&1023)+65536):(B.push(F),I--)}else B.push(F)}return B}let _=O=>String.fromCodePoint(...O),y=function(O){return O>=48&&O<58?26+(O-48):O>=65&&O<91?O-65:O>=97&&O<123?O-97:m},T=function(O,B){return O+22+75*(O<26)-((B!=0)<<5)},S=function(O,B,I){let z=0;for(O=I?p(O/n):O>>1,O+=p(O/B);O>b*a>>1;z+=m)O=p(O/b);return p(z+(b+1)*O/(O+c))},E=function(O){let B=[],I=O.length,z=0,F=r,D=t,pe=O.lastIndexOf(e);pe<0&&(pe=0);for(let V=0;V<pe;++V)O.charCodeAt(V)>=128&&v("not-basic"),B.push(O.charCodeAt(V));for(let V=pe>0?pe+1:0;V<I;){let Q=z;for(let W=1,te=m;;te+=m){V>=I&&v("invalid-input");let N=y(O.charCodeAt(V++));N>=m&&v("invalid-input"),N>p((u-z)/W)&&v("overflow"),z+=N*W;let Z=te<=D?l:te>=D+a?a:te-D;if(N<Z)break;let we=m-Z;W>p(u/we)&&v("overflow"),W*=we}let ie=B.length+1;D=S(z-Q,ie,Q==0),p(z/ie)>u-F&&v("overflow"),F+=p(z/ie),z%=ie,B.splice(z++,0,F)}return String.fromCodePoint(...B)},P=function(O){let B=[];O=k(O);let I=O.length,z=r,F=0,D=t;for(let Q of O)Q<128&&B.push(o(Q));let pe=B.length,V=pe;for(pe&&B.push(e);V<I;){let Q=u;for(let W of O)W>=z&&W<Q&&(Q=W);let ie=V+1;Q-z>p((u-F)/ie)&&v("overflow"),F+=(Q-z)*ie,z=Q;for(let W of O)if(W<z&&++F>u&&v("overflow"),W===z){let te=F;for(let N=m;;N+=m){let Z=N<=D?l:N>=D+a?a:N-D;if(te<Z)break;let we=te-Z,re=m-Z;B.push(o(T(Z+we%re,0))),te=p(we/re)}B.push(o(T(te,0))),D=S(F,ie,V===pe),F=0,++V}++F,++z}return B.join("")};return An={version:"2.3.1",ucs2:{decode:k,encode:_},decode:E,encode:P,toASCII:function(O){return g(O,function(B){return s.test(B)?"xn--"+P(B):B})},toUnicode:function(O){return g(O,function(B){return i.test(B)?E(B.slice(4).toLowerCase()):B})}},An}var An,wi,Ct,Jc=it(()=>{he(),me(),fe(),An={},wi=!1,Ct=Yc(),Ct.decode,Ct.encode,Ct.toASCII,Ct.toUnicode,Ct.ucs2,Ct.version});function Xc(){return _i||(_i=!0,ki=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var u={},m=Symbol("test"),l=Object(m);if(typeof m=="string"||Object.prototype.toString.call(m)!=="[object Symbol]"||Object.prototype.toString.call(l)!=="[object Symbol]")return!1;var a=42;u[m]=a;for(m in u)return!1;if(typeof Object.keys=="function"&&Object.keys(u).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(u).length!==0)return!1;var c=Object.getOwnPropertySymbols(u);if(c.length!==1||c[0]!==m||!Object.prototype.propertyIsEnumerable.call(u,m))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var n=Object.getOwnPropertyDescriptor(u,m);if(n.value!==a||n.enumerable!==!0)return!1}return!0}),ki}function Zc(){return Si||(Si=!0,xi=Error),xi}function ed(){return Ai||(Ai=!0,Ti=EvalError),Ti}function td(){return Ii||(Ii=!0,Ei=RangeError),Ei}function nd(){return Ci||(Ci=!0,Mi=ReferenceError),Mi}function Fa(){return Oi||(Oi=!0,Pi=SyntaxError),Pi}function vn(){return Ri||(Ri=!0,Ni=TypeError),Ni}function rd(){return Li||(Li=!0,Ui=URIError),Ui}function id(){if(qi)return En;qi=!0;var u=typeof Symbol<"u"&&Symbol,m=Xc();return En=function(){return typeof u!="function"||typeof Symbol!="function"||typeof u("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:m()},En}function sd(){if(ji)return In;ji=!0;var u={__proto__:null,foo:{}},m=Object;return In=function(){return{__proto__:u}.foo===u.foo&&!(u instanceof m)},In}function od(){if(Bi)return Mn;Bi=!0;var u="Function.prototype.bind called on incompatible ",m=Object.prototype.toString,l=Math.max,a="[object Function]",c=function(r,e){for(var i=[],s=0;s<r.length;s+=1)i[s]=r[s];for(var f=0;f<e.length;f+=1)i[f+r.length]=e[f];return i},n=function(r,e){for(var i=[],s=e,f=0;s<r.length;s+=1,f+=1)i[f]=r[s];return i},t=function(r,e){for(var i="",s=0;s<r.length;s+=1)i+=r[s],s+1<r.length&&(i+=e);return i};return Mn=function(r){var e=this;if(typeof e!="function"||m.apply(e)!==a)throw new TypeError(u+e);for(var i=n(arguments,1),s,f=function(){if(this instanceof s){var v=e.apply(this,c(i,arguments));return Object(v)===v?v:this}return e.apply(r,c(i,arguments))},h=l(0,e.length-i.length),b=[],p=0;p<h;p++)b[p]="$"+p;if(s=Function("binder","return function ("+t(b,",")+"){ return binder.apply(this,arguments); }")(f),e.prototype){var o=function(){};o.prototype=e.prototype,s.prototype=new o,o.prototype=null}return s},Mn}function fs(){if(Fi)return Cn;Fi=!0;var u=od();return Cn=Function.prototype.bind||u,Cn}function ad(){if(Di)return Pn;Di=!0;var u=Function.prototype.call,m=Object.prototype.hasOwnProperty,l=fs();return Pn=l.call(u,m),Pn}function nn(){if(Wi)return On;Wi=!0;var u,m=Zc(),l=ed(),a=td(),c=nd(),n=Fa(),t=vn(),r=rd(),e=Function,i=function(V){try{return e('"use strict"; return ('+V+").constructor;")()}catch{}},s=Object.getOwnPropertyDescriptor;if(s)try{s({},"")}catch{s=null}var f=function(){throw new t},h=s?(function(){try{return arguments.callee,f}catch{try{return s(arguments,"callee").get}catch{return f}}})():f,b=id()(),p=sd()(),o=Object.getPrototypeOf||(p?function(V){return V.__proto__}:null),v={},w=typeof Uint8Array>"u"||!o?u:o(Uint8Array),g={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?u:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?u:ArrayBuffer,"%ArrayIteratorPrototype%":b&&o?o([][Symbol.iterator]()):u,"%AsyncFromSyncIteratorPrototype%":u,"%AsyncFunction%":v,"%AsyncGenerator%":v,"%AsyncGeneratorFunction%":v,"%AsyncIteratorPrototype%":v,"%Atomics%":typeof Atomics>"u"?u:Atomics,"%BigInt%":typeof BigInt>"u"?u:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?u:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?u:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?u:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":m,"%eval%":eval,"%EvalError%":l,"%Float32Array%":typeof Float32Array>"u"?u:Float32Array,"%Float64Array%":typeof Float64Array>"u"?u:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?u:FinalizationRegistry,"%Function%":e,"%GeneratorFunction%":v,"%Int8Array%":typeof Int8Array>"u"?u:Int8Array,"%Int16Array%":typeof Int16Array>"u"?u:Int16Array,"%Int32Array%":typeof Int32Array>"u"?u:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":b&&o?o(o([][Symbol.iterator]())):u,"%JSON%":typeof JSON=="object"?JSON:u,"%Map%":typeof Map>"u"?u:Map,"%MapIteratorPrototype%":typeof Map>"u"||!b||!o?u:o(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?u:Promise,"%Proxy%":typeof Proxy>"u"?u:Proxy,"%RangeError%":a,"%ReferenceError%":c,"%Reflect%":typeof Reflect>"u"?u:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?u:Set,"%SetIteratorPrototype%":typeof Set>"u"||!b||!o?u:o(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?u:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":b&&o?o(""[Symbol.iterator]()):u,"%Symbol%":b?Symbol:u,"%SyntaxError%":n,"%ThrowTypeError%":h,"%TypedArray%":w,"%TypeError%":t,"%Uint8Array%":typeof Uint8Array>"u"?u:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?u:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?u:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?u:Uint32Array,"%URIError%":r,"%WeakMap%":typeof WeakMap>"u"?u:WeakMap,"%WeakRef%":typeof WeakRef>"u"?u:WeakRef,"%WeakSet%":typeof WeakSet>"u"?u:WeakSet};if(o)try{null.error}catch(V){var k=o(o(V));g["%Error.prototype%"]=k}var _=function V(Q){var ie;if(Q==="%AsyncFunction%")ie=i("async function () {}");else if(Q==="%GeneratorFunction%")ie=i("function* () {}");else if(Q==="%AsyncGeneratorFunction%")ie=i("async function* () {}");else if(Q==="%AsyncGenerator%"){var W=V("%AsyncGeneratorFunction%");W&&(ie=W.prototype)}else if(Q==="%AsyncIteratorPrototype%"){var te=V("%AsyncGenerator%");te&&o&&(ie=o(te.prototype))}return g[Q]=ie,ie},y={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},T=fs(),S=ad(),E=T.call(Function.call,Array.prototype.concat),P=T.call(Function.apply,Array.prototype.splice),O=T.call(Function.call,String.prototype.replace),B=T.call(Function.call,String.prototype.slice),I=T.call(Function.call,RegExp.prototype.exec),z=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,F=/\\(\\)?/g,D=function(V){var Q=B(V,0,1),ie=B(V,-1);if(Q==="%"&&ie!=="%")throw new n("invalid intrinsic syntax, expected closing `%`");if(ie==="%"&&Q!=="%")throw new n("invalid intrinsic syntax, expected opening `%`");var W=[];return O(V,z,function(te,N,Z,we){W[W.length]=Z?O(we,F,"$1"):N||te}),W},pe=function(V,Q){var ie=V,W;if(S(y,ie)&&(W=y[ie],ie="%"+W[0]+"%"),S(g,ie)){var te=g[ie];if(te===v&&(te=_(ie)),typeof te>"u"&&!Q)throw new t("intrinsic "+V+" exists, but is not available. Please file an issue!");return{alias:W,name:ie,value:te}}throw new n("intrinsic "+V+" does not exist!")};return On=function(V,Q){if(typeof V!="string"||V.length===0)throw new t("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof Q!="boolean")throw new t('"allowMissing" argument must be a boolean');if(I(/^%?[^%]*%?$/,V)===null)throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var ie=D(V),W=ie.length>0?ie[0]:"",te=pe("%"+W+"%",Q),N=te.name,Z=te.value,we=!1,re=te.alias;re&&(W=re[0],P(ie,E([0,1],re)));for(var _e=1,X=!0;_e<ie.length;_e+=1){var L=ie[_e],oe=B(L,0,1),K=B(L,-1);if((oe==='"'||oe==="'"||oe==="`"||K==='"'||K==="'"||K==="`")&&oe!==K)throw new n("property names with quotes must have matching quotes");if((L==="constructor"||!X)&&(we=!0),W+="."+L,N="%"+W+"%",S(g,N))Z=g[N];else if(Z!=null){if(!(L in Z)){if(!Q)throw new t("base intrinsic for "+V+" exists, but the property is not available.");return}if(s&&_e+1>=ie.length){var Y=s(Z,L);X=!!Y,X&&"get"in Y&&!("originalValue"in Y.get)?Z=Y.get:Z=Z[L]}else X=S(Z,L),Z=Z[L];X&&!we&&(g[N]=Z)}}return Z},On}function ms(){if(zi)return Nn;zi=!0;var u=nn(),m=u("%Object.defineProperty%",!0)||!1;if(m)try{m({},"a",{value:1})}catch{m=!1}return Nn=m,Nn}function Da(){if(Hi)return Rn;Hi=!0;var u=nn(),m=u("%Object.getOwnPropertyDescriptor%",!0);if(m)try{m([],"length")}catch{m=null}return Rn=m,Rn}function ld(){if($i)return Un;$i=!0;var u=ms(),m=Fa(),l=vn(),a=Da();return Un=function(c,n,t){if(!c||typeof c!="object"&&typeof c!="function")throw new l("`obj` must be an object or a function`");if(typeof n!="string"&&typeof n!="symbol")throw new l("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new l("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new l("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new l("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new l("`loose`, if provided, must be a boolean");var r=arguments.length>3?arguments[3]:null,e=arguments.length>4?arguments[4]:null,i=arguments.length>5?arguments[5]:null,s=arguments.length>6?arguments[6]:!1,f=!!a&&a(c,n);if(u)u(c,n,{configurable:i===null&&f?f.configurable:!i,enumerable:r===null&&f?f.enumerable:!r,value:t,writable:e===null&&f?f.writable:!e});else if(s||!r&&!e&&!i)c[n]=t;else throw new m("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Un}function cd(){if(Ki)return Ln;Ki=!0;var u=ms(),m=function(){return!!u};return m.hasArrayLengthDefineBug=function(){if(!u)return null;try{return u([],"length",{value:1}).length!==1}catch{return!0}},Ln=m,Ln}function dd(){if(Vi)return qn;Vi=!0;var u=nn(),m=ld(),l=cd()(),a=Da(),c=vn(),n=u("%Math.floor%");return qn=function(t,r){if(typeof t!="function")throw new c("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||n(r)!==r)throw new c("`length` must be a positive 32-bit integer");var e=arguments.length>2&&!!arguments[2],i=!0,s=!0;if("length"in t&&a){var f=a(t,"length");f&&!f.configurable&&(i=!1),f&&!f.writable&&(s=!1)}return(i||s||!e)&&(l?m(t,"length",r,!0,!0):m(t,"length",r)),t},qn}function ud(){if(Qi)return Gt;Qi=!0;var u=fs(),m=nn(),l=dd(),a=vn(),c=m("%Function.prototype.apply%"),n=m("%Function.prototype.call%"),t=m("%Reflect.apply%",!0)||u.call(n,c),r=ms(),e=m("%Math.max%");Gt=function(s){if(typeof s!="function")throw new a("a function is required");var f=t(u,n,arguments);return l(f,1+e(0,s.length-(arguments.length-1)),!0)};var i=function(){return t(u,c,arguments)};return r?r(Gt,"apply",{value:i}):Gt.apply=i,Gt}function pd(){if(Gi)return jn;Gi=!0;var u=nn(),m=ud(),l=m(u("String.prototype.indexOf"));return jn=function(a,c){var n=u(a,!!c);return typeof n=="function"&&l(a,".prototype.")>-1?m(n):n},jn}var ki,_i,xi,Si,Ti,Ai,Ei,Ii,Mi,Ci,Pi,Oi,Ni,Ri,Ui,Li,En,qi,In,ji,Mn,Bi,Cn,Fi,Pn,Di,On,Wi,Nn,zi,Rn,Hi,Un,$i,Ln,Ki,qn,Vi,Gt,Qi,jn,Gi,hd=it(()=>{he(),me(),fe(),ki={},_i=!1,xi={},Si=!1,Ti={},Ai=!1,Ei={},Ii=!1,Mi={},Ci=!1,Pi={},Oi=!1,Ni={},Ri=!1,Ui={},Li=!1,En={},qi=!1,In={},ji=!1,Mn={},Bi=!1,Cn={},Fi=!1,Pn={},Di=!1,On={},Wi=!1,Nn={},zi=!1,Rn={},Hi=!1,Un={},$i=!1,Ln={},Ki=!1,qn={},Vi=!1,Gt={},Qi=!1,jn={},Gi=!1});function gs(u){throw new Error("Node.js process "+u+" is not supported by JSPM core outside of Node.js")}function fd(){!Dt||!jt||(Dt=!1,jt.length?gt=jt.concat(gt):fn=-1,gt.length&&Wa())}function Wa(){if(!Dt){var u=setTimeout(fd,0);Dt=!0;for(var m=gt.length;m;){for(jt=gt,gt=[];++fn<m;)jt&&jt[fn].run();fn=-1,m=gt.length}jt=null,Dt=!1,clearTimeout(u)}}function md(u){var m=new Array(arguments.length-1);if(arguments.length>1)for(var l=1;l<arguments.length;l++)m[l-1]=arguments[l];gt.push(new za(u,m)),gt.length===1&&!Dt&&setTimeout(Wa,0)}function za(u,m){this.fun=u,this.array=m}function Xe(){}function gd(u){gs("_linkedBinding")}function bd(u){gs("dlopen")}function vd(){return[]}function yd(){return[]}function wd(u,m){if(!u)throw new Error(m||"assertion error")}function kd(){return!1}function _d(){return kt.now()/1e3}function or(u){var m=Math.floor((Date.now()-kt.now())*.001),l=kt.now()*.001,a=Math.floor(l)+m,c=Math.floor(l%1*1e9);return u&&(a=a-u[0],c=c-u[1],c<0&&(a--,c+=Bn)),[a,c]}function It(){return bs}function xd(u){return[]}var gt,Dt,jt,fn,Es,Is,Ms,Cs,Ps,Os,Ns,Rs,Us,Ls,qs,js,Bs,Fs,Ds,Ws,zs,Hs,$s,Ks,Vs,_n,Qs,Gs,Ys,Js,Xs,Zs,eo,to,no,ro,io,so,oo,ao,lo,co,uo,po,ho,fo,mo,go,bo,vo,yo,kt,ar,Bn,wo,ko,_o,xo,So,To,Ao,Eo,Io,Mo,Co,bs,Ha=it(()=>{he(),me(),fe(),gt=[],Dt=!1,fn=-1,za.prototype.run=function(){this.fun.apply(null,this.array)},Es="browser",Is="x64",Ms="browser",Cs={PATH:"/usr/bin",LANG:navigator.language+".UTF-8",PWD:"/",HOME:"/home",TMP:"/tmp"},Ps=["/usr/bin/node"],Os=[],Ns="v16.8.0",Rs={},Us=function(u,m){console.warn((m?m+": ":"")+u)},Ls=function(u){gs("binding")},qs=function(u){return 0},js=function(){return"/"},Bs=function(u){},Fs={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},Ds=Xe,Ws=[],zs={},Hs=!1,$s={},Ks=Xe,Vs=Xe,_n=function(){return{}},Qs=_n,Gs=_n,Ys=Xe,Js=Xe,Xs=Xe,Zs={},eo={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},to=Xe,no=Xe,ro=Xe,io=Xe,so=Xe,oo=Xe,ao=Xe,lo=void 0,co=void 0,uo=void 0,po=Xe,ho=2,fo=1,mo="/bin/usr/node",go=9229,bo="node",vo=[],yo=Xe,kt={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},kt.now===void 0&&(ar=Date.now(),kt.timing&&kt.timing.navigationStart&&(ar=kt.timing.navigationStart),kt.now=()=>Date.now()-ar),Bn=1e9,or.bigint=function(u){var m=or(u);return typeof BigInt>"u"?m[0]*Bn+m[1]:BigInt(m[0]*Bn)+BigInt(m[1])},wo=10,ko={},_o=0,xo=It,So=It,To=It,Ao=It,Eo=It,Io=Xe,Mo=It,Co=It,bs={version:Ns,versions:Rs,arch:Is,platform:Ms,release:Fs,_rawDebug:Ds,moduleLoadList:Ws,binding:Ls,_linkedBinding:gd,_events:ko,_eventsCount:_o,_maxListeners:wo,on:It,addListener:xo,once:So,off:To,removeListener:Ao,removeAllListeners:Eo,emit:Io,prependListener:Mo,prependOnceListener:Co,listeners:xd,domain:zs,_exiting:Hs,config:$s,dlopen:bd,uptime:_d,_getActiveRequests:vd,_getActiveHandles:yd,reallyExit:Ks,_kill:Vs,cpuUsage:_n,resourceUsage:Qs,memoryUsage:Gs,kill:Ys,exit:Js,openStdin:Xs,allowedNodeEnvironmentFlags:Zs,assert:wd,features:eo,_fatalExceptions:to,setUncaughtExceptionCaptureCallback:no,hasUncaughtExceptionCaptureCallback:kd,emitWarning:Us,nextTick:md,_tickCallback:ro,_debugProcess:io,_debugEnd:so,_startProfilerIdleNotifier:oo,_stopProfilerIdleNotifier:ao,stdout:lo,stdin:uo,stderr:co,abort:po,umask:qs,chdir:Bs,cwd:js,env:Cs,title:Es,argv:Ps,execArgv:Os,pid:ho,ppid:fo,execPath:mo,debugPort:go,hrtime:or,argv0:bo,_preload_modules:vo,setSourceMapsEnabled:yo}});function Sd(){if(Yi)return Fn;Yi=!0;var u=bs;function m(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function l(n,t){for(var r="",e=0,i=-1,s=0,f,h=0;h<=n.length;++h){if(h<n.length)f=n.charCodeAt(h);else{if(f===47)break;f=47}if(f===47){if(!(i===h-1||s===1))if(i!==h-1&&s===2){if(r.length<2||e!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var b=r.lastIndexOf("/");if(b!==r.length-1){b===-1?(r="",e=0):(r=r.slice(0,b),e=r.length-1-r.lastIndexOf("/")),i=h,s=0;continue}}else if(r.length===2||r.length===1){r="",e=0,i=h,s=0;continue}}t&&(r.length>0?r+="/..":r="..",e=2)}else r.length>0?r+="/"+n.slice(i+1,h):r=n.slice(i+1,h),e=h-i-1;i=h,s=0}else f===46&&s!==-1?++s:s=-1}return r}function a(n,t){var r=t.dir||t.root,e=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+e:r+n+e:e}var c={resolve:function(){for(var n="",t=!1,r,e=arguments.length-1;e>=-1&&!t;e--){var i;e>=0?i=arguments[e]:(r===void 0&&(r=u.cwd()),i=r),m(i),i.length!==0&&(n=i+"/"+n,t=i.charCodeAt(0)===47)}return n=l(n,!t),t?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(n){if(m(n),n.length===0)return".";var t=n.charCodeAt(0)===47,r=n.charCodeAt(n.length-1)===47;return n=l(n,!t),n.length===0&&!t&&(n="."),n.length>0&&r&&(n+="/"),t?"/"+n:n},isAbsolute:function(n){return m(n),n.length>0&&n.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var n,t=0;t<arguments.length;++t){var r=arguments[t];m(r),r.length>0&&(n===void 0?n=r:n+="/"+r)}return n===void 0?".":c.normalize(n)},relative:function(n,t){if(m(n),m(t),n===t||(n=c.resolve(n),t=c.resolve(t),n===t))return"";for(var r=1;r<n.length&&n.charCodeAt(r)===47;++r);for(var e=n.length,i=e-r,s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var f=t.length,h=f-s,b=i<h?i:h,p=-1,o=0;o<=b;++o){if(o===b){if(h>b){if(t.charCodeAt(s+o)===47)return t.slice(s+o+1);if(o===0)return t.slice(s+o)}else i>b&&(n.charCodeAt(r+o)===47?p=o:o===0&&(p=0));break}var v=n.charCodeAt(r+o),w=t.charCodeAt(s+o);if(v!==w)break;v===47&&(p=o)}var g="";for(o=r+p+1;o<=e;++o)(o===e||n.charCodeAt(o)===47)&&(g.length===0?g+="..":g+="/..");return g.length>0?g+t.slice(s+p):(s+=p,t.charCodeAt(s)===47&&++s,t.slice(s))},_makeLong:function(n){return n},dirname:function(n){if(m(n),n.length===0)return".";for(var t=n.charCodeAt(0),r=t===47,e=-1,i=!0,s=n.length-1;s>=1;--s)if(t=n.charCodeAt(s),t===47){if(!i){e=s;break}}else i=!1;return e===-1?r?"/":".":r&&e===1?"//":n.slice(0,e)},basename:function(n,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');m(n);var r=0,e=-1,i=!0,s;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";var f=t.length-1,h=-1;for(s=n.length-1;s>=0;--s){var b=n.charCodeAt(s);if(b===47){if(!i){r=s+1;break}}else h===-1&&(i=!1,h=s+1),f>=0&&(b===t.charCodeAt(f)?--f===-1&&(e=s):(f=-1,e=h))}return r===e?e=h:e===-1&&(e=n.length),n.slice(r,e)}else{for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){r=s+1;break}}else e===-1&&(i=!1,e=s+1);return e===-1?"":n.slice(r,e)}},extname:function(n){m(n);for(var t=-1,r=0,e=-1,i=!0,s=0,f=n.length-1;f>=0;--f){var h=n.charCodeAt(f);if(h===47){if(!i){r=f+1;break}continue}e===-1&&(i=!1,e=f+1),h===46?t===-1?t=f:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||e===-1||s===0||s===1&&t===e-1&&t===r+1?"":n.slice(t,e)},format:function(n){if(n===null||typeof n!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return a("/",n)},parse:function(n){m(n);var t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;var r=n.charCodeAt(0),e=r===47,i;e?(t.root="/",i=1):i=0;for(var s=-1,f=0,h=-1,b=!0,p=n.length-1,o=0;p>=i;--p){if(r=n.charCodeAt(p),r===47){if(!b){f=p+1;break}continue}h===-1&&(b=!1,h=p+1),r===46?s===-1?s=p:o!==1&&(o=1):s!==-1&&(o=-1)}return s===-1||h===-1||o===0||o===1&&s===h-1&&s===f+1?h!==-1&&(f===0&&e?t.base=t.name=n.slice(1,h):t.base=t.name=n.slice(f,h)):(f===0&&e?(t.name=n.slice(1,s),t.base=n.slice(1,h)):(t.name=n.slice(f,s),t.base=n.slice(f,h)),t.ext=n.slice(s,h)),f>0?t.dir=n.slice(0,f-1):e&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};return c.posix=c,Fn=c,Fn}var Fn,Yi,Ji,Td=it(()=>{he(),me(),fe(),Ha(),Fn={},Yi=!1,Ji=Sd()}),$a={};Zt($a,{URL:()=>tl,Url:()=>Ya,default:()=>Ze,fileURLToPath:()=>Va,format:()=>Ja,parse:()=>el,pathToFileURL:()=>Qa,resolve:()=>Xa,resolveObject:()=>Za});function Ad(){if(Xi)return Dn;Xi=!0;var u=typeof Map=="function"&&Map.prototype,m=Object.getOwnPropertyDescriptor&&u?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,l=u&&m&&typeof m.get=="function"?m.get:null,a=u&&Map.prototype.forEach,c=typeof Set=="function"&&Set.prototype,n=Object.getOwnPropertyDescriptor&&c?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,t=c&&n&&typeof n.get=="function"?n.get:null,r=c&&Set.prototype.forEach,e=typeof WeakMap=="function"&&WeakMap.prototype,i=e?WeakMap.prototype.has:null,s=typeof WeakSet=="function"&&WeakSet.prototype,f=s?WeakSet.prototype.has:null,h=typeof WeakRef=="function"&&WeakRef.prototype,b=h?WeakRef.prototype.deref:null,p=Boolean.prototype.valueOf,o=Object.prototype.toString,v=Function.prototype.toString,w=String.prototype.match,g=String.prototype.slice,k=String.prototype.replace,_=String.prototype.toUpperCase,y=String.prototype.toLowerCase,T=RegExp.prototype.test,S=Array.prototype.concat,E=Array.prototype.join,P=Array.prototype.slice,O=Math.floor,B=typeof BigInt=="function"?BigInt.prototype.valueOf:null,I=Object.getOwnPropertySymbols,z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,F=typeof Symbol=="function"&&typeof Symbol.iterator=="object",D=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===F||!0)?Symbol.toStringTag:null,pe=Object.prototype.propertyIsEnumerable,V=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(G){return G.__proto__}:null);function Q(G,se){if(G===1/0||G===-1/0||G!==G||G&&G>-1e3&&G<1e3||T.call(/e/,se))return se;var Ae=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof G=="number"){var Ie=G<0?-O(-G):O(G);if(Ie!==G){var Pe=String(Ie),Re=g.call(se,Pe.length+1);return k.call(Pe,Ae,"$&_")+"."+k.call(k.call(Re,/([0-9]{3})/g,"$&_"),/_$/,"")}}return k.call(se,Ae,"$&_")}var ie=Ga,W=ie.custom,te=Y(W)?W:null;Dn=function G(se,Ae,Ie,Pe){var Re=Ae||{};if(de(Re,"quoteStyle")&&Re.quoteStyle!=="single"&&Re.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(de(Re,"maxStringLength")&&(typeof Re.maxStringLength=="number"?Re.maxStringLength<0&&Re.maxStringLength!==1/0:Re.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var lt=de(Re,"customInspect")?Re.customInspect:!0;if(typeof lt!="boolean"&&lt!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(de(Re,"indent")&&Re.indent!==null&&Re.indent!=="	"&&!(parseInt(Re.indent,10)===Re.indent&&Re.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(de(Re,"numericSeparator")&&typeof Re.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var ct=Re.numericSeparator;if(typeof se>"u")return"undefined";if(se===null)return"null";if(typeof se=="boolean")return se?"true":"false";if(typeof se=="string")return ae(se,Re);if(typeof se=="number"){if(se===0)return 1/0/se>0?"0":"-0";var Ye=String(se);return ct?Q(se,Ye):Ye}if(typeof se=="bigint"){var dt=String(se)+"n";return ct?Q(se,dt):dt}var $t=typeof Re.depth>"u"?5:Re.depth;if(typeof Ie>"u"&&(Ie=0),Ie>=$t&&$t>0&&typeof se=="object")return we(se)?"[Array]":"[Object]";var ut=J(Re,Ie);if(typeof Pe>"u")Pe=[];else if(ne(Pe,se)>=0)return"[Circular]";function st(pt,Et,Ut){if(Et&&(Pe=P.call(Pe),Pe.push(Et)),Ut){var ht={depth:Re.depth};return de(Re,"quoteStyle")&&(ht.quoteStyle=Re.quoteStyle),G(pt,ht,Ie+1,Pe)}return G(pt,Re,Ie+1,Pe)}if(typeof se=="function"&&!_e(se)){var yn=H(se),Kt=ke(se,st);return"[Function"+(yn?": "+yn:" (anonymous)")+"]"+(Kt.length>0?" { "+E.call(Kt,", ")+" }":"")}if(Y(se)){var rn=F?k.call(String(se),/^(Symbol\(.*\))_[^)]*$/,"$1"):z.call(se);return typeof se=="object"&&!F?d(rn):rn}if(le(se)){for(var C="<"+y.call(String(se.nodeName)),q=se.attributes||[],xe=0;xe<q.length;xe++)C+=" "+q[xe].name+"="+N(Z(q[xe].value),"double",Re);return C+=">",se.childNodes&&se.childNodes.length&&(C+="..."),C+="</"+y.call(String(se.nodeName))+">",C}if(we(se)){if(se.length===0)return"[]";var Se=ke(se,st);return ut&&!j(Se)?"["+ue(Se,ut)+"]":"[ "+E.call(Se,", ")+" ]"}if(X(se)){var Te=ke(se,st);return!("cause"in Error.prototype)&&"cause"in se&&!pe.call(se,"cause")?"{ ["+String(se)+"] "+E.call(S.call("[cause]: "+st(se.cause),Te),", ")+" }":Te.length===0?"["+String(se)+"]":"{ ["+String(se)+"] "+E.call(Te,", ")+" }"}if(typeof se=="object"&&lt){if(te&&typeof se[te]=="function"&&ie)return ie(se,{depth:$t-Ie});if(lt!=="symbol"&&typeof se.inspect=="function")return se.inspect()}if(ge(se)){var $e=[];return a&&a.call(se,function(pt,Et){$e.push(st(Et,se,!0)+" => "+st(pt,se))}),A("Map",l.call(se),$e,ut)}if(M(se)){var et=[];return r&&r.call(se,function(pt){et.push(st(pt,se))}),A("Set",t.call(se),et,ut)}if(be(se))return x("WeakMap");if(ce(se))return x("WeakSet");if($(se))return x("WeakRef");if(oe(se))return d(st(Number(se)));if(ee(se))return d(st(B.call(se)));if(K(se))return d(p.call(se));if(L(se))return d(st(String(se)));if(typeof window<"u"&&se===window)return"{ [object Window] }";if(typeof globalThis<"u"&&se===globalThis||typeof Wn<"u"&&se===Wn)return"{ [object globalThis] }";if(!re(se)&&!_e(se)){var at=ke(se,st),sn=V?V(se)===Object.prototype:se instanceof Object||se.constructor===Object,on=se instanceof Object?"":"null prototype",an=!sn&&D&&Object(se)===se&&D in se?g.call(U(se),8,-1):on?"Object":"",wn=sn||typeof se.constructor!="function"?"":se.constructor.name?se.constructor.name+" ":"",Rt=wn+(an||on?"["+E.call(S.call([],an||[],on||[]),": ")+"] ":"");return at.length===0?Rt+"{}":ut?Rt+"{"+ue(at,ut)+"}":Rt+"{ "+E.call(at,", ")+" }"}return String(se)};function N(G,se,Ae){var Ie=(Ae.quoteStyle||se)==="double"?'"':"'";return Ie+G+Ie}function Z(G){return k.call(String(G),/"/g,"&quot;")}function we(G){return U(G)==="[object Array]"&&(!D||!(typeof G=="object"&&D in G))}function re(G){return U(G)==="[object Date]"&&(!D||!(typeof G=="object"&&D in G))}function _e(G){return U(G)==="[object RegExp]"&&(!D||!(typeof G=="object"&&D in G))}function X(G){return U(G)==="[object Error]"&&(!D||!(typeof G=="object"&&D in G))}function L(G){return U(G)==="[object String]"&&(!D||!(typeof G=="object"&&D in G))}function oe(G){return U(G)==="[object Number]"&&(!D||!(typeof G=="object"&&D in G))}function K(G){return U(G)==="[object Boolean]"&&(!D||!(typeof G=="object"&&D in G))}function Y(G){if(F)return G&&typeof G=="object"&&G instanceof Symbol;if(typeof G=="symbol")return!0;if(!G||typeof G!="object"||!z)return!1;try{return z.call(G),!0}catch{}return!1}function ee(G){if(!G||typeof G!="object"||!B)return!1;try{return B.call(G),!0}catch{}return!1}var ye=Object.prototype.hasOwnProperty||function(G){return G in(this||Wn)};function de(G,se){return ye.call(G,se)}function U(G){return o.call(G)}function H(G){if(G.name)return G.name;var se=w.call(v.call(G),/^function\s*([\w$]+)/);return se?se[1]:null}function ne(G,se){if(G.indexOf)return G.indexOf(se);for(var Ae=0,Ie=G.length;Ae<Ie;Ae++)if(G[Ae]===se)return Ae;return-1}function ge(G){if(!l||!G||typeof G!="object")return!1;try{l.call(G);try{t.call(G)}catch{return!0}return G instanceof Map}catch{}return!1}function be(G){if(!i||!G||typeof G!="object")return!1;try{i.call(G,i);try{f.call(G,f)}catch{return!0}return G instanceof WeakMap}catch{}return!1}function $(G){if(!b||!G||typeof G!="object")return!1;try{return b.call(G),!0}catch{}return!1}function M(G){if(!t||!G||typeof G!="object")return!1;try{t.call(G);try{l.call(G)}catch{return!0}return G instanceof Set}catch{}return!1}function ce(G){if(!f||!G||typeof G!="object")return!1;try{f.call(G,f);try{i.call(G,i)}catch{return!0}return G instanceof WeakSet}catch{}return!1}function le(G){return!G||typeof G!="object"?!1:typeof HTMLElement<"u"&&G instanceof HTMLElement?!0:typeof G.nodeName=="string"&&typeof G.getAttribute=="function"}function ae(G,se){if(G.length>se.maxStringLength){var Ae=G.length-se.maxStringLength,Ie="... "+Ae+" more character"+(Ae>1?"s":"");return ae(g.call(G,0,se.maxStringLength),se)+Ie}var Pe=k.call(k.call(G,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Ee);return N(Pe,"single",se)}function Ee(G){var se=G.charCodeAt(0),Ae={8:"b",9:"t",10:"n",12:"f",13:"r"}[se];return Ae?"\\"+Ae:"\\x"+(se<16?"0":"")+_.call(se.toString(16))}function d(G){return"Object("+G+")"}function x(G){return G+" { ? }"}function A(G,se,Ae,Ie){var Pe=Ie?ue(Ae,Ie):E.call(Ae,", ");return G+" ("+se+") {"+Pe+"}"}function j(G){for(var se=0;se<G.length;se++)if(ne(G[se],`
`)>=0)return!1;return!0}function J(G,se){var Ae;if(G.indent==="	")Ae="	";else if(typeof G.indent=="number"&&G.indent>0)Ae=E.call(Array(G.indent+1)," ");else return null;return{base:Ae,prev:E.call(Array(se+1),Ae)}}function ue(G,se){if(G.length===0)return"";var Ae=`
`+se.prev+se.base;return Ae+E.call(G,","+Ae)+`
`+se.prev}function ke(G,se){var Ae=we(G),Ie=[];if(Ae){Ie.length=G.length;for(var Pe=0;Pe<G.length;Pe++)Ie[Pe]=de(G,Pe)?se(G[Pe],G):""}var Re=typeof I=="function"?I(G):[],lt;if(F){lt={};for(var ct=0;ct<Re.length;ct++)lt["$"+Re[ct]]=Re[ct]}for(var Ye in G)de(G,Ye)&&(Ae&&String(Number(Ye))===Ye&&Ye<G.length||F&&lt["$"+Ye]instanceof Symbol||(T.call(/[^\w$]/,Ye)?Ie.push(se(Ye,G)+": "+se(G[Ye],G)):Ie.push(Ye+": "+se(G[Ye],G))));if(typeof I=="function")for(var dt=0;dt<Re.length;dt++)pe.call(G,Re[dt])&&Ie.push("["+se(Re[dt])+"]: "+se(G[Re[dt]],G));return Ie}return Dn}function Ed(){if(Zi)return zn;Zi=!0;var u=nn(),m=pd(),l=Ad(),a=vn(),c=u("%WeakMap%",!0),n=u("%Map%",!0),t=m("WeakMap.prototype.get",!0),r=m("WeakMap.prototype.set",!0),e=m("WeakMap.prototype.has",!0),i=m("Map.prototype.get",!0),s=m("Map.prototype.set",!0),f=m("Map.prototype.has",!0),h=function(v,w){for(var g=v,k;(k=g.next)!==null;g=k)if(k.key===w)return g.next=k.next,k.next=v.next,v.next=k,k},b=function(v,w){var g=h(v,w);return g&&g.value},p=function(v,w,g){var k=h(v,w);k?k.value=g:v.next={key:w,next:v.next,value:g}},o=function(v,w){return!!h(v,w)};return zn=function(){var v,w,g,k={assert:function(_){if(!k.has(_))throw new a("Side channel does not contain "+l(_))},get:function(_){if(c&&_&&(typeof _=="object"||typeof _=="function")){if(v)return t(v,_)}else if(n){if(w)return i(w,_)}else if(g)return b(g,_)},has:function(_){if(c&&_&&(typeof _=="object"||typeof _=="function")){if(v)return e(v,_)}else if(n){if(w)return f(w,_)}else if(g)return o(g,_);return!1},set:function(_,y){c&&_&&(typeof _=="object"||typeof _=="function")?(v||(v=new c),r(v,_,y)):n?(w||(w=new n),s(w,_,y)):(g||(g={key:{},next:null}),p(g,_,y))}};return k},zn}function vs(){if(es)return Hn;es=!0;var u=String.prototype.replace,m=/%20/g,l={RFC1738:"RFC1738",RFC3986:"RFC3986"};return Hn={default:l.RFC3986,formatters:{RFC1738:function(a){return u.call(a,m,"+")},RFC3986:function(a){return String(a)}},RFC1738:l.RFC1738,RFC3986:l.RFC3986},Hn}function Ka(){if(ts)return $n;ts=!0;var u=vs(),m=Object.prototype.hasOwnProperty,l=Array.isArray,a=(function(){for(var v=[],w=0;w<256;++w)v.push("%"+((w<16?"0":"")+w.toString(16)).toUpperCase());return v})(),c=function(v){for(;v.length>1;){var w=v.pop(),g=w.obj[w.prop];if(l(g)){for(var k=[],_=0;_<g.length;++_)typeof g[_]<"u"&&k.push(g[_]);w.obj[w.prop]=k}}},n=function(v,w){for(var g=w&&w.plainObjects?Object.create(null):{},k=0;k<v.length;++k)typeof v[k]<"u"&&(g[k]=v[k]);return g},t=function v(w,g,k){if(!g)return w;if(typeof g!="object"){if(l(w))w.push(g);else if(w&&typeof w=="object")(k&&(k.plainObjects||k.allowPrototypes)||!m.call(Object.prototype,g))&&(w[g]=!0);else return[w,g];return w}if(!w||typeof w!="object")return[w].concat(g);var _=w;return l(w)&&!l(g)&&(_=n(w,k)),l(w)&&l(g)?(g.forEach(function(y,T){if(m.call(w,T)){var S=w[T];S&&typeof S=="object"&&y&&typeof y=="object"?w[T]=v(S,y,k):w.push(y)}else w[T]=y}),w):Object.keys(g).reduce(function(y,T){var S=g[T];return m.call(y,T)?y[T]=v(y[T],S,k):y[T]=S,y},_)},r=function(v,w){return Object.keys(w).reduce(function(g,k){return g[k]=w[k],g},v)},e=function(v,w,g){var k=v.replace(/\+/g," ");if(g==="iso-8859-1")return k.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(k)}catch{return k}},i=1024,s=function(v,w,g,k,_){if(v.length===0)return v;var y=v;if(typeof v=="symbol"?y=Symbol.prototype.toString.call(v):typeof v!="string"&&(y=String(v)),g==="iso-8859-1")return escape(y).replace(/%u[0-9a-f]{4}/gi,function(I){return"%26%23"+parseInt(I.slice(2),16)+"%3B"});for(var T="",S=0;S<y.length;S+=i){for(var E=y.length>=i?y.slice(S,S+i):y,P=[],O=0;O<E.length;++O){var B=E.charCodeAt(O);if(B===45||B===46||B===95||B===126||B>=48&&B<=57||B>=65&&B<=90||B>=97&&B<=122||_===u.RFC1738&&(B===40||B===41)){P[P.length]=E.charAt(O);continue}if(B<128){P[P.length]=a[B];continue}if(B<2048){P[P.length]=a[192|B>>6]+a[128|B&63];continue}if(B<55296||B>=57344){P[P.length]=a[224|B>>12]+a[128|B>>6&63]+a[128|B&63];continue}O+=1,B=65536+((B&1023)<<10|E.charCodeAt(O)&1023),P[P.length]=a[240|B>>18]+a[128|B>>12&63]+a[128|B>>6&63]+a[128|B&63]}T+=P.join("")}return T},f=function(v){for(var w=[{obj:{o:v},prop:"o"}],g=[],k=0;k<w.length;++k)for(var _=w[k],y=_.obj[_.prop],T=Object.keys(y),S=0;S<T.length;++S){var E=T[S],P=y[E];typeof P=="object"&&P!==null&&g.indexOf(P)===-1&&(w.push({obj:y,prop:E}),g.push(P))}return c(w),v},h=function(v){return Object.prototype.toString.call(v)==="[object RegExp]"},b=function(v){return!v||typeof v!="object"?!1:!!(v.constructor&&v.constructor.isBuffer&&v.constructor.isBuffer(v))},p=function(v,w){return[].concat(v,w)},o=function(v,w){if(l(v)){for(var g=[],k=0;k<v.length;k+=1)g.push(w(v[k]));return g}return w(v)};return $n={arrayToObject:n,assign:r,combine:p,compact:f,decode:e,encode:s,isBuffer:b,isRegExp:h,maybeMap:o,merge:t},$n}function Id(){if(ns)return Kn;ns=!0;var u=Ed(),m=Ka(),l=vs(),a=Object.prototype.hasOwnProperty,c={brackets:function(o){return o+"[]"},comma:"comma",indices:function(o,v){return o+"["+v+"]"},repeat:function(o){return o}},n=Array.isArray,t=Array.prototype.push,r=function(o,v){t.apply(o,n(v)?v:[v])},e=Date.prototype.toISOString,i=l.default,s={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:m.encode,encodeValuesOnly:!1,format:i,formatter:l.formatters[i],indices:!1,serializeDate:function(o){return e.call(o)},skipNulls:!1,strictNullHandling:!1},f=function(o){return typeof o=="string"||typeof o=="number"||typeof o=="boolean"||typeof o=="symbol"||typeof o=="bigint"},h={},b=function o(v,w,g,k,_,y,T,S,E,P,O,B,I,z,F,D,pe,V){for(var Q=v,ie=V,W=0,te=!1;(ie=ie.get(h))!==void 0&&!te;){var N=ie.get(v);if(W+=1,typeof N<"u"){if(N===W)throw new RangeError("Cyclic object value");te=!0}typeof ie.get(h)>"u"&&(W=0)}if(typeof P=="function"?Q=P(w,Q):Q instanceof Date?Q=I(Q):g==="comma"&&n(Q)&&(Q=m.maybeMap(Q,function(U){return U instanceof Date?I(U):U})),Q===null){if(y)return E&&!D?E(w,s.encoder,pe,"key",z):w;Q=""}if(f(Q)||m.isBuffer(Q)){if(E){var Z=D?w:E(w,s.encoder,pe,"key",z);return[F(Z)+"="+F(E(Q,s.encoder,pe,"value",z))]}return[F(w)+"="+F(String(Q))]}var we=[];if(typeof Q>"u")return we;var re;if(g==="comma"&&n(Q))D&&E&&(Q=m.maybeMap(Q,E)),re=[{value:Q.length>0?Q.join(",")||null:void 0}];else if(n(P))re=P;else{var _e=Object.keys(Q);re=O?_e.sort(O):_e}var X=S?w.replace(/\./g,"%2E"):w,L=k&&n(Q)&&Q.length===1?X+"[]":X;if(_&&n(Q)&&Q.length===0)return L+"[]";for(var oe=0;oe<re.length;++oe){var K=re[oe],Y=typeof K=="object"&&typeof K.value<"u"?K.value:Q[K];if(!(T&&Y===null)){var ee=B&&S?K.replace(/\./g,"%2E"):K,ye=n(Q)?typeof g=="function"?g(L,ee):L:L+(B?"."+ee:"["+ee+"]");V.set(v,W);var de=u();de.set(h,V),r(we,o(Y,ye,g,k,_,y,T,S,g==="comma"&&D&&n(Q)?null:E,P,O,B,I,z,F,D,pe,de))}}return we},p=function(o){if(!o)return s;if(typeof o.allowEmptyArrays<"u"&&typeof o.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof o.encodeDotInKeys<"u"&&typeof o.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(o.encoder!==null&&typeof o.encoder<"u"&&typeof o.encoder!="function")throw new TypeError("Encoder has to be a function.");var v=o.charset||s.charset;if(typeof o.charset<"u"&&o.charset!=="utf-8"&&o.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var w=l.default;if(typeof o.format<"u"){if(!a.call(l.formatters,o.format))throw new TypeError("Unknown format option provided.");w=o.format}var g=l.formatters[w],k=s.filter;(typeof o.filter=="function"||n(o.filter))&&(k=o.filter);var _;if(o.arrayFormat in c?_=o.arrayFormat:"indices"in o?_=o.indices?"indices":"repeat":_=s.arrayFormat,"commaRoundTrip"in o&&typeof o.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var y=typeof o.allowDots>"u"?o.encodeDotInKeys===!0?!0:s.allowDots:!!o.allowDots;return{addQueryPrefix:typeof o.addQueryPrefix=="boolean"?o.addQueryPrefix:s.addQueryPrefix,allowDots:y,allowEmptyArrays:typeof o.allowEmptyArrays=="boolean"?!!o.allowEmptyArrays:s.allowEmptyArrays,arrayFormat:_,charset:v,charsetSentinel:typeof o.charsetSentinel=="boolean"?o.charsetSentinel:s.charsetSentinel,commaRoundTrip:o.commaRoundTrip,delimiter:typeof o.delimiter>"u"?s.delimiter:o.delimiter,encode:typeof o.encode=="boolean"?o.encode:s.encode,encodeDotInKeys:typeof o.encodeDotInKeys=="boolean"?o.encodeDotInKeys:s.encodeDotInKeys,encoder:typeof o.encoder=="function"?o.encoder:s.encoder,encodeValuesOnly:typeof o.encodeValuesOnly=="boolean"?o.encodeValuesOnly:s.encodeValuesOnly,filter:k,format:w,formatter:g,serializeDate:typeof o.serializeDate=="function"?o.serializeDate:s.serializeDate,skipNulls:typeof o.skipNulls=="boolean"?o.skipNulls:s.skipNulls,sort:typeof o.sort=="function"?o.sort:null,strictNullHandling:typeof o.strictNullHandling=="boolean"?o.strictNullHandling:s.strictNullHandling}};return Kn=function(o,v){var w=o,g=p(v),k,_;typeof g.filter=="function"?(_=g.filter,w=_("",w)):n(g.filter)&&(_=g.filter,k=_);var y=[];if(typeof w!="object"||w===null)return"";var T=c[g.arrayFormat],S=T==="comma"&&g.commaRoundTrip;k||(k=Object.keys(w)),g.sort&&k.sort(g.sort);for(var E=u(),P=0;P<k.length;++P){var O=k[P];g.skipNulls&&w[O]===null||r(y,b(w[O],O,T,S,g.allowEmptyArrays,g.strictNullHandling,g.skipNulls,g.encodeDotInKeys,g.encode?g.encoder:null,g.filter,g.sort,g.allowDots,g.serializeDate,g.format,g.formatter,g.encodeValuesOnly,g.charset,E))}var B=y.join(g.delimiter),I=g.addQueryPrefix===!0?"?":"";return g.charsetSentinel&&(g.charset==="iso-8859-1"?I+="utf8=%26%2310003%3B&":I+="utf8=%E2%9C%93&"),B.length>0?I+B:""},Kn}function Md(){if(rs)return Vn;rs=!0;var u=Ka(),m=Object.prototype.hasOwnProperty,l=Array.isArray,a={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:u.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1},c=function(h){return h.replace(/&#(\d+);/g,function(b,p){return String.fromCharCode(parseInt(p,10))})},n=function(h,b){return h&&typeof h=="string"&&b.comma&&h.indexOf(",")>-1?h.split(","):h},t="utf8=%26%2310003%3B",r="utf8=%E2%9C%93",e=function(h,b){var p={__proto__:null},o=b.ignoreQueryPrefix?h.replace(/^\?/,""):h;o=o.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var v=b.parameterLimit===1/0?void 0:b.parameterLimit,w=o.split(b.delimiter,v),g=-1,k,_=b.charset;if(b.charsetSentinel)for(k=0;k<w.length;++k)w[k].indexOf("utf8=")===0&&(w[k]===r?_="utf-8":w[k]===t&&(_="iso-8859-1"),g=k,k=w.length);for(k=0;k<w.length;++k)if(k!==g){var y=w[k],T=y.indexOf("]="),S=T===-1?y.indexOf("="):T+1,E,P;S===-1?(E=b.decoder(y,a.decoder,_,"key"),P=b.strictNullHandling?null:""):(E=b.decoder(y.slice(0,S),a.decoder,_,"key"),P=u.maybeMap(n(y.slice(S+1),b),function(B){return b.decoder(B,a.decoder,_,"value")})),P&&b.interpretNumericEntities&&_==="iso-8859-1"&&(P=c(P)),y.indexOf("[]=")>-1&&(P=l(P)?[P]:P);var O=m.call(p,E);O&&b.duplicates==="combine"?p[E]=u.combine(p[E],P):(!O||b.duplicates==="last")&&(p[E]=P)}return p},i=function(h,b,p,o){for(var v=o?b:n(b,p),w=h.length-1;w>=0;--w){var g,k=h[w];if(k==="[]"&&p.parseArrays)g=p.allowEmptyArrays&&(v===""||p.strictNullHandling&&v===null)?[]:[].concat(v);else{g=p.plainObjects?Object.create(null):{};var _=k.charAt(0)==="["&&k.charAt(k.length-1)==="]"?k.slice(1,-1):k,y=p.decodeDotInKeys?_.replace(/%2E/g,"."):_,T=parseInt(y,10);!p.parseArrays&&y===""?g={0:v}:!isNaN(T)&&k!==y&&String(T)===y&&T>=0&&p.parseArrays&&T<=p.arrayLimit?(g=[],g[T]=v):y!=="__proto__"&&(g[y]=v)}v=g}return v},s=function(h,b,p,o){if(h){var v=p.allowDots?h.replace(/\.([^.[]+)/g,"[$1]"):h,w=/(\[[^[\]]*])/,g=/(\[[^[\]]*])/g,k=p.depth>0&&w.exec(v),_=k?v.slice(0,k.index):v,y=[];if(_){if(!p.plainObjects&&m.call(Object.prototype,_)&&!p.allowPrototypes)return;y.push(_)}for(var T=0;p.depth>0&&(k=g.exec(v))!==null&&T<p.depth;){if(T+=1,!p.plainObjects&&m.call(Object.prototype,k[1].slice(1,-1))&&!p.allowPrototypes)return;y.push(k[1])}if(k){if(p.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+p.depth+" and strictDepth is true");y.push("["+v.slice(k.index)+"]")}return i(y,b,p,o)}},f=function(h){if(!h)return a;if(typeof h.allowEmptyArrays<"u"&&typeof h.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof h.decodeDotInKeys<"u"&&typeof h.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(h.decoder!==null&&typeof h.decoder<"u"&&typeof h.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof h.charset<"u"&&h.charset!=="utf-8"&&h.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var b=typeof h.charset>"u"?a.charset:h.charset,p=typeof h.duplicates>"u"?a.duplicates:h.duplicates;if(p!=="combine"&&p!=="first"&&p!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var o=typeof h.allowDots>"u"?h.decodeDotInKeys===!0?!0:a.allowDots:!!h.allowDots;return{allowDots:o,allowEmptyArrays:typeof h.allowEmptyArrays=="boolean"?!!h.allowEmptyArrays:a.allowEmptyArrays,allowPrototypes:typeof h.allowPrototypes=="boolean"?h.allowPrototypes:a.allowPrototypes,allowSparse:typeof h.allowSparse=="boolean"?h.allowSparse:a.allowSparse,arrayLimit:typeof h.arrayLimit=="number"?h.arrayLimit:a.arrayLimit,charset:b,charsetSentinel:typeof h.charsetSentinel=="boolean"?h.charsetSentinel:a.charsetSentinel,comma:typeof h.comma=="boolean"?h.comma:a.comma,decodeDotInKeys:typeof h.decodeDotInKeys=="boolean"?h.decodeDotInKeys:a.decodeDotInKeys,decoder:typeof h.decoder=="function"?h.decoder:a.decoder,delimiter:typeof h.delimiter=="string"||u.isRegExp(h.delimiter)?h.delimiter:a.delimiter,depth:typeof h.depth=="number"||h.depth===!1?+h.depth:a.depth,duplicates:p,ignoreQueryPrefix:h.ignoreQueryPrefix===!0,interpretNumericEntities:typeof h.interpretNumericEntities=="boolean"?h.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:typeof h.parameterLimit=="number"?h.parameterLimit:a.parameterLimit,parseArrays:h.parseArrays!==!1,plainObjects:typeof h.plainObjects=="boolean"?h.plainObjects:a.plainObjects,strictDepth:typeof h.strictDepth=="boolean"?!!h.strictDepth:a.strictDepth,strictNullHandling:typeof h.strictNullHandling=="boolean"?h.strictNullHandling:a.strictNullHandling}};return Vn=function(h,b){var p=f(b);if(h===""||h===null||typeof h>"u")return p.plainObjects?Object.create(null):{};for(var o=typeof h=="string"?e(h,p):h,v=p.plainObjects?Object.create(null):{},w=Object.keys(o),g=0;g<w.length;++g){var k=w[g],_=s(k,o[k],p,typeof h=="string");v=u.merge(v,_,p)}return p.allowSparse===!0?v:u.compact(v)},Vn}function Cd(){if(is)return Qn;is=!0;var u=Id(),m=Md(),l=vs();return Qn={formats:l,parse:m,stringify:u},Qn}function Pd(){if(ss)return Pt;ss=!0;var u=Ct;function m(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var l=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,n=["<",">",'"',"`"," ","\r",`
`,"	"],t=["{","}","|","\\","^","`"].concat(n),r=["'"].concat(t),e=["%","/","?",";","#"].concat(r),i=["/","?","#"],s=255,f=/^[+a-z0-9A-Z_-]{0,63}$/,h=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,b={javascript:!0,"javascript:":!0},p={javascript:!0,"javascript:":!0},o={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=Cd();function w(y,T,S){if(y&&typeof y=="object"&&y instanceof m)return y;var E=new m;return E.parse(y,T,S),E}m.prototype.parse=function(y,T,S){if(typeof y!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof y);var E=y.indexOf("?"),P=E!==-1&&E<y.indexOf("#")?"?":"#",O=y.split(P),B=/\\/g;O[0]=O[0].replace(B,"/"),y=O.join(P);var I=y;if(I=I.trim(),!S&&y.split("#").length===1){var z=c.exec(I);if(z)return this.path=I,this.href=I,this.pathname=z[1],z[2]?(this.search=z[2],T?this.query=v.parse(this.search.substr(1)):this.query=this.search.substr(1)):T&&(this.search="",this.query={}),this}var F=l.exec(I);if(F){F=F[0];var D=F.toLowerCase();this.protocol=D,I=I.substr(F.length)}if(S||F||I.match(/^\/\/[^@/]+@[^@/]+/)){var pe=I.substr(0,2)==="//";pe&&!(F&&p[F])&&(I=I.substr(2),this.slashes=!0)}if(!p[F]&&(pe||F&&!o[F])){for(var V=-1,Q=0;Q<i.length;Q++){var ie=I.indexOf(i[Q]);ie!==-1&&(V===-1||ie<V)&&(V=ie)}var W,te;V===-1?te=I.lastIndexOf("@"):te=I.lastIndexOf("@",V),te!==-1&&(W=I.slice(0,te),I=I.slice(te+1),this.auth=decodeURIComponent(W)),V=-1;for(var Q=0;Q<e.length;Q++){var ie=I.indexOf(e[Q]);ie!==-1&&(V===-1||ie<V)&&(V=ie)}V===-1&&(V=I.length),this.host=I.slice(0,V),I=I.slice(V),this.parseHost(),this.hostname=this.hostname||"";var N=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!N)for(var Z=this.hostname.split(/\./),Q=0,we=Z.length;Q<we;Q++){var re=Z[Q];if(re&&!re.match(f)){for(var _e="",X=0,L=re.length;X<L;X++)re.charCodeAt(X)>127?_e+="x":_e+=re[X];if(!_e.match(f)){var oe=Z.slice(0,Q),K=Z.slice(Q+1),Y=re.match(h);Y&&(oe.push(Y[1]),K.unshift(Y[2])),K.length&&(I="/"+K.join(".")+I),this.hostname=oe.join(".");break}}}this.hostname.length>s?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=u.toASCII(this.hostname));var ee=this.port?":"+this.port:"",ye=this.hostname||"";this.host=ye+ee,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),I[0]!=="/"&&(I="/"+I))}if(!b[D])for(var Q=0,we=r.length;Q<we;Q++){var de=r[Q];if(I.indexOf(de)!==-1){var U=encodeURIComponent(de);U===de&&(U=escape(de)),I=I.split(de).join(U)}}var H=I.indexOf("#");H!==-1&&(this.hash=I.substr(H),I=I.slice(0,H));var ne=I.indexOf("?");if(ne!==-1?(this.search=I.substr(ne),this.query=I.substr(ne+1),T&&(this.query=v.parse(this.query)),I=I.slice(0,ne)):T&&(this.search="",this.query={}),I&&(this.pathname=I),o[D]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var ee=this.pathname||"",ge=this.search||"";this.path=ee+ge}return this.href=this.format(),this};function g(y){return typeof y=="string"&&(y=w(y)),y instanceof m?y.format():m.prototype.format.call(y)}m.prototype.format=function(){var y=this.auth||"";y&&(y=encodeURIComponent(y),y=y.replace(/%3A/i,":"),y+="@");var T=this.protocol||"",S=this.pathname||"",E=this.hash||"",P=!1,O="";this.host?P=y+this.host:this.hostname&&(P=y+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(P+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(O=v.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var B=this.search||O&&"?"+O||"";return T&&T.substr(-1)!==":"&&(T+=":"),this.slashes||(!T||o[T])&&P!==!1?(P="//"+(P||""),S&&S.charAt(0)!=="/"&&(S="/"+S)):P||(P=""),E&&E.charAt(0)!=="#"&&(E="#"+E),B&&B.charAt(0)!=="?"&&(B="?"+B),S=S.replace(/[?#]/g,function(I){return encodeURIComponent(I)}),B=B.replace("#","%23"),T+P+S+B+E};function k(y,T){return w(y,!1,!0).resolve(T)}m.prototype.resolve=function(y){return this.resolveObject(w(y,!1,!0)).format()};function _(y,T){return y?w(y,!1,!0).resolveObject(T):T}return m.prototype.resolveObject=function(y){if(typeof y=="string"){var T=new m;T.parse(y,!1,!0),y=T}for(var S=new m,E=Object.keys(this),P=0;P<E.length;P++){var O=E[P];S[O]=this[O]}if(S.hash=y.hash,y.href==="")return S.href=S.format(),S;if(y.slashes&&!y.protocol){for(var B=Object.keys(y),I=0;I<B.length;I++){var z=B[I];z!=="protocol"&&(S[z]=y[z])}return o[S.protocol]&&S.hostname&&!S.pathname&&(S.pathname="/",S.path=S.pathname),S.href=S.format(),S}if(y.protocol&&y.protocol!==S.protocol){if(!o[y.protocol]){for(var F=Object.keys(y),D=0;D<F.length;D++){var pe=F[D];S[pe]=y[pe]}return S.href=S.format(),S}if(S.protocol=y.protocol,!y.host&&!p[y.protocol]){for(var we=(y.pathname||"").split("/");we.length&&!(y.host=we.shift()););y.host||(y.host=""),y.hostname||(y.hostname=""),we[0]!==""&&we.unshift(""),we.length<2&&we.unshift(""),S.pathname=we.join("/")}else S.pathname=y.pathname;if(S.search=y.search,S.query=y.query,S.host=y.host||"",S.auth=y.auth,S.hostname=y.hostname||y.host,S.port=y.port,S.pathname||S.search){var V=S.pathname||"",Q=S.search||"";S.path=V+Q}return S.slashes=S.slashes||y.slashes,S.href=S.format(),S}var ie=S.pathname&&S.pathname.charAt(0)==="/",W=y.host||y.pathname&&y.pathname.charAt(0)==="/",te=W||ie||S.host&&y.pathname,N=te,Z=S.pathname&&S.pathname.split("/")||[],we=y.pathname&&y.pathname.split("/")||[],re=S.protocol&&!o[S.protocol];if(re&&(S.hostname="",S.port=null,S.host&&(Z[0]===""?Z[0]=S.host:Z.unshift(S.host)),S.host="",y.protocol&&(y.hostname=null,y.port=null,y.host&&(we[0]===""?we[0]=y.host:we.unshift(y.host)),y.host=null),te=te&&(we[0]===""||Z[0]==="")),W)S.host=y.host||y.host===""?y.host:S.host,S.hostname=y.hostname||y.hostname===""?y.hostname:S.hostname,S.search=y.search,S.query=y.query,Z=we;else if(we.length)Z||(Z=[]),Z.pop(),Z=Z.concat(we),S.search=y.search,S.query=y.query;else if(y.search!=null){if(re){S.host=Z.shift(),S.hostname=S.host;var _e=S.host&&S.host.indexOf("@")>0?S.host.split("@"):!1;_e&&(S.auth=_e.shift(),S.hostname=_e.shift(),S.host=S.hostname)}return S.search=y.search,S.query=y.query,(S.pathname!==null||S.search!==null)&&(S.path=(S.pathname?S.pathname:"")+(S.search?S.search:"")),S.href=S.format(),S}if(!Z.length)return S.pathname=null,S.search?S.path="/"+S.search:S.path=null,S.href=S.format(),S;for(var X=Z.slice(-1)[0],L=(S.host||y.host||Z.length>1)&&(X==="."||X==="..")||X==="",oe=0,K=Z.length;K>=0;K--)X=Z[K],X==="."?Z.splice(K,1):X===".."?(Z.splice(K,1),oe++):oe&&(Z.splice(K,1),oe--);if(!te&&!N)for(;oe--;oe)Z.unshift("..");te&&Z[0]!==""&&(!Z[0]||Z[0].charAt(0)!=="/")&&Z.unshift(""),L&&Z.join("/").substr(-1)!=="/"&&Z.push("");var Y=Z[0]===""||Z[0]&&Z[0].charAt(0)==="/";if(re){S.hostname=Y?"":Z.length?Z.shift():"",S.host=S.hostname;var _e=S.host&&S.host.indexOf("@")>0?S.host.split("@"):!1;_e&&(S.auth=_e.shift(),S.hostname=_e.shift(),S.host=S.hostname)}return te=te||S.host&&Z.length,te&&!Y&&Z.unshift(""),Z.length>0?S.pathname=Z.join("/"):(S.pathname=null,S.path=null),(S.pathname!==null||S.search!==null)&&(S.path=(S.pathname?S.pathname:"")+(S.search?S.search:"")),S.auth=y.auth||S.auth,S.slashes=S.slashes||y.slashes,S.href=S.format(),S},m.prototype.parseHost=function(){var y=this.host,T=a.exec(y);T&&(T=T[0],T!==":"&&(this.port=T.substr(1)),y=y.substr(0,y.length-T.length)),y&&(this.hostname=y)},Pt.parse=w,Pt.resolve=k,Pt.resolveObject=_,Pt.format=g,Pt.Url=m,Pt}function Va(u){if(typeof u=="string")u=new URL(u);else if(!(u instanceof URL))throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");if(u.protocol!=="file:")throw new Deno.errors.InvalidData("invalid url scheme");return Yn?Od(u):Nd(u)}function Od(u){let m=u.hostname,l=u.pathname;for(let a=0;a<l.length;a++)if(l[a]==="%"){let c=l.codePointAt(a+2)||32;if(l[a+1]==="2"&&c===102||l[a+1]==="5"&&c===99)throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")}if(l=l.replace(ol,"\\"),l=decodeURIComponent(l),m!=="")return`\\\\${m}${l}`;{let a=l.codePointAt(1)|32,c=l[2];if(a<il||a>sl||c!==":")throw new Deno.errors.InvalidData("file url path must be absolute");return l.slice(1)}}function Nd(u){if(u.hostname!=="")throw new Deno.errors.InvalidData("invalid file url hostname");let m=u.pathname;for(let l=0;l<m.length;l++)if(m[l]==="%"){let a=m.codePointAt(l+2)||32;if(m[l+1]==="2"&&a===102)throw new Deno.errors.InvalidData("must not include encoded / characters")}return decodeURIComponent(m)}function Qa(u){let m=Ji.resolve(u),l=u.charCodeAt(u.length-1);(l===rl||Yn&&l===nl)&&m[m.length-1]!==Ji.sep&&(m+="/");let a=new URL("file://");return m.includes("%")&&(m=m.replace(al,"%25")),!Yn&&m.includes("\\")&&(m=m.replace(ll,"%5C")),m.includes(`
`)&&(m=m.replace(cl,"%0A")),m.includes("\r")&&(m=m.replace(dl,"%0D")),m.includes("	")&&(m=m.replace(ul,"%09")),a.pathname=m,a}var Ga,Dn,Xi,Wn,zn,Zi,Hn,es,$n,ts,Kn,ns,Vn,rs,Qn,is,Pt,ss,Ze,Po,Ya,Ja,Xa,Za,el,tl,nl,rl,il,sl,Yn,ol,al,ll,cl,dl,ul,Rd=it(()=>{he(),me(),fe(),Jc(),hd(),Td(),Ha(),Ga=Object.freeze(Object.create(null)),Dn={},Xi=!1,Wn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:global,zn={},Zi=!1,Hn={},es=!1,$n={},ts=!1,Kn={},ns=!1,Vn={},rs=!1,Qn={},is=!1,Pt={},ss=!1,Ze=Pd(),Ze.parse,Ze.resolve,Ze.resolveObject,Ze.format,Ze.Url,Po=typeof Deno<"u"?Deno.build.os==="windows"?"win32":Deno.build.os:void 0,Ze.URL=typeof URL<"u"?URL:null,Ze.pathToFileURL=Qa,Ze.fileURLToPath=Va,Ya=Ze.Url,Ja=Ze.format,Xa=Ze.resolve,Za=Ze.resolveObject,el=Ze.parse,tl=Ze.URL,nl=92,rl=47,il=97,sl=122,Yn=Po==="win32",ol=/\//g,al=/%/g,ll=/\\/g,cl=/\n/g,dl=/\r/g,ul=/\t/g}),Ud=ve((u,m)=>{he(),me(),fe(),m.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}}),ys=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0}),u.BufferedDuplex=void 0,u.writev=a;var m=Ht(),l=(Qe(),Be(Ve));function a(n,t){let r=new Array(n.length);for(let e=0;e<n.length;e++)typeof n[e].chunk=="string"?r[e]=l.Buffer.from(n[e].chunk,"utf8"):r[e]=n[e].chunk;this._write(l.Buffer.concat(r),"binary",t)}var c=class extends m.Duplex{socket;proxy;isSocketOpen;writeQueue;constructor(n,t,r){super({objectMode:!0}),this.proxy=t,this.socket=r,this.writeQueue=[],n.objectMode||(this._writev=a.bind(this)),this.isSocketOpen=!1,this.proxy.on("data",e=>{!this.destroyed&&this.readable&&this.push(e)})}_read(n){this.proxy.read(n)}_write(n,t,r){this.isSocketOpen?this.writeToProxy(n,t,r):this.writeQueue.push({chunk:n,encoding:t,cb:r})}_final(n){this.writeQueue=[],this.proxy.end(n)}_destroy(n,t){this.writeQueue=[],this.proxy.destroy(),t(n)}socketReady(){this.emit("connect"),this.isSocketOpen=!0,this.processWriteQueue()}writeToProxy(n,t,r){this.proxy.write(n,t)===!1?this.proxy.once("drain",r):r()}processWriteQueue(){for(;this.writeQueue.length>0;){let{chunk:n,encoding:t,cb:r}=this.writeQueue.shift();this.writeToProxy(n,t,r)}}};u.BufferedDuplex=c}),xn=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(u,"__esModule",{value:!0}),u.streamBuilder=u.browserStreamBuilder=void 0;var l=(Qe(),Be(Ve)),a=m(Ud()),c=m(xt()),n=Ht(),t=m(rr()),r=ys(),e=(0,c.default)("mqttjs:ws"),i=["rejectUnauthorized","ca","cert","key","pfx","passphrase"];function s(w,g){let k=`${w.protocol}://${w.hostname}:${w.port}${w.path}`;return typeof w.transformWsUrl=="function"&&(k=w.transformWsUrl(k,w,g)),k}function f(w){let g=w;return w.port||(w.protocol==="wss"?g.port=443:g.port=80),w.path||(g.path="/"),w.wsOptions||(g.wsOptions={}),!t.default&&!w.forceNativeWebSocket&&w.protocol==="wss"&&i.forEach(k=>{Object.prototype.hasOwnProperty.call(w,k)&&!Object.prototype.hasOwnProperty.call(w.wsOptions,k)&&(g.wsOptions[k]=w[k])}),g}function h(w){let g=f(w);if(g.hostname||(g.hostname=g.host),!g.hostname){if(typeof document>"u")throw new Error("Could not determine host. Specify host manually.");let k=new URL(document.URL);g.hostname=k.hostname,g.port||(g.port=Number(k.port))}return g.objectMode===void 0&&(g.objectMode=!(g.binary===!0||g.binary===void 0)),g}function b(w,g,k){e("createWebSocket"),e(`protocol: ${k.protocolId} ${k.protocolVersion}`);let _=k.protocolId==="MQIsdp"&&k.protocolVersion===3?"mqttv3.1":"mqtt";e(`creating new Websocket for url: ${g} and protocol: ${_}`);let y;return k.createWebsocket?y=k.createWebsocket(g,[_],k):y=new a.default(g,[_],k.wsOptions),y}function p(w,g){let k=g.protocolId==="MQIsdp"&&g.protocolVersion===3?"mqttv3.1":"mqtt",_=s(g,w),y;return g.createWebsocket?y=g.createWebsocket(_,[k],g):y=new WebSocket(_,[k]),y.binaryType="arraybuffer",y}var o=(w,g)=>{e("streamBuilder");let k=f(g);k.hostname=k.hostname||k.host||"localhost";let _=s(k,w),y=b(w,_,k),T=a.default.createWebSocketStream(y,k.wsOptions);return T.url=_,y.on("close",()=>{T.destroy()}),T};u.streamBuilder=o;var v=(w,g)=>{e("browserStreamBuilder");let k,_=h(g).browserBufferSize||1024*512,y=g.browserBufferTimeout||1e3,T=!g.objectMode,S=p(w,g),E=O(g,D,pe);g.objectMode||(E._writev=r.writev.bind(E)),E.on("close",()=>{S.close()});let P=typeof S.addEventListener<"u";S.readyState===S.OPEN?(k=E,k.socket=S):(k=new r.BufferedDuplex(g,E,S),P?S.addEventListener("open",B):S.onopen=B),P?(S.addEventListener("close",I),S.addEventListener("error",z),S.addEventListener("message",F)):(S.onclose=I,S.onerror=z,S.onmessage=F);function O(V,Q,ie){let W=new n.Transform({objectMode:V.objectMode});return W._write=Q,W._flush=ie,W}function B(){e("WebSocket onOpen"),k instanceof r.BufferedDuplex&&k.socketReady()}function I(V){e("WebSocket onClose",V),k.end(),k.destroy()}function z(V){e("WebSocket onError",V);let Q=new Error("WebSocket error");Q.event=V,k.destroy(Q)}async function F(V){if(!E||!E.readable||!E.writable)return;let{data:Q}=V;Q instanceof ArrayBuffer?Q=l.Buffer.from(Q):Q instanceof Blob?Q=l.Buffer.from(await new Response(Q).arrayBuffer()):Q=l.Buffer.from(Q,"utf8"),E.push(Q)}function D(V,Q,ie){if(S.bufferedAmount>_){setTimeout(D,y,V,Q,ie);return}T&&typeof V=="string"&&(V=l.Buffer.from(V,"utf8"));try{S.send(V)}catch(W){return ie(W)}ie()}function pe(V){S.close(),V()}return k};u.browserStreamBuilder=v}),ws={};Zt(ws,{Server:()=>De,Socket:()=>De,Stream:()=>De,_createServerHandle:()=>De,_normalizeArgs:()=>De,_setSimultaneousAccepts:()=>De,connect:()=>De,createConnection:()=>De,createServer:()=>De,default:()=>pl,isIP:()=>De,isIPv4:()=>De,isIPv6:()=>De});function De(){throw new Error("Node.js net module is not supported by JSPM core outside of Node.js")}var pl,hl=it(()=>{he(),me(),fe(),pl={_createServerHandle:De,_normalizeArgs:De,_setSimultaneousAccepts:De,connect:De,createConnection:De,createServer:De,isIP:De,isIPv4:De,isIPv6:De,Server:De,Socket:De,Stream:De}}),fl=ve((u,m)=>{he(),me(),fe(),m.exports={}}),Oo=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(u,"__esModule",{value:!0});var l=m((hl(),Be(ws))),a=m(xt()),c=m(fl()),n=(0,a.default)("mqttjs:tcp"),t=(r,e)=>{if(e.port=e.port||1883,e.hostname=e.hostname||e.host||"localhost",e.socksProxy)return(0,c.default)(e.hostname,e.port,e.socksProxy,{timeout:e.socksTimeout});let{port:i,path:s}=e,f=e.hostname;return n("port %d and host %s",i,f),l.default.createConnection({port:i,host:f,path:s})};u.default=t}),ml={};Zt(ml,{default:()=>gl});var gl,Ld=it(()=>{he(),me(),fe(),gl={}}),No=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(u,"__esModule",{value:!0});var l=(Ld(),Be(ml)),a=m((hl(),Be(ws))),c=m(xt()),n=m(fl()),t=(0,c.default)("mqttjs:tls");function r(i){let{host:s,port:f,socksProxy:h,...b}=i;if(h!==void 0){let p=(0,n.default)(s,f,h,{timeout:i.socksTimeout});return(0,l.connect)({...b,socket:p})}return(0,l.connect)(i)}var e=(i,s)=>{s.port=s.port||8883,s.host=s.hostname||s.host||"localhost",a.default.isIP(s.host)===0&&(s.servername=s.host),s.rejectUnauthorized=s.rejectUnauthorized!==!1,delete s.path,t("port %d host %s rejectUnauthorized %b",s.port,s.host,s.rejectUnauthorized);let f=r(s);f.on("secureConnect",()=>{s.rejectUnauthorized&&!f.authorized?f.emit("error",new Error("TLS not authorized")):f.removeListener("error",h)});function h(b){s.rejectUnauthorized&&i.emit("error",b),f.end()}return f.on("error",h),f};u.default=e}),Ro=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=(Qe(),Be(Ve)),l=Ht(),a=ys(),c,n,t;function r(){let h=new l.Transform;return h._write=(b,p,o)=>{c.send({data:b.buffer,success(){o()},fail(v){o(new Error(v))}})},h._flush=b=>{c.close({success(){b()}})},h}function e(h){h.hostname||(h.hostname="localhost"),h.path||(h.path="/"),h.wsOptions||(h.wsOptions={})}function i(h,b){let p=h.protocol==="wxs"?"wss":"ws",o=`${p}://${h.hostname}${h.path}`;return h.port&&h.port!==80&&h.port!==443&&(o=`${p}://${h.hostname}:${h.port}${h.path}`),typeof h.transformWsUrl=="function"&&(o=h.transformWsUrl(o,h,b)),o}function s(){c.onOpen(()=>{t.socketReady()}),c.onMessage(h=>{let{data:b}=h;b instanceof ArrayBuffer?b=m.Buffer.from(b):b=m.Buffer.from(b,"utf8"),n.push(b)}),c.onClose(()=>{t.emit("close"),t.end(),t.destroy()}),c.onError(h=>{let b=new Error(h.errMsg);t.destroy(b)})}var f=(h,b)=>{if(b.hostname=b.hostname||b.host,!b.hostname)throw new Error("Could not determine host. Specify host manually.");let p=b.protocolId==="MQIsdp"&&b.protocolVersion===3?"mqttv3.1":"mqtt";e(b);let o=i(b,h);c=wx.connectSocket({url:o,protocols:[p]}),n=r(),t=new a.BufferedDuplex(b,n,c),t._destroy=(w,g)=>{c.close({success(){g&&g(w)}})};let v=t.destroy;return t.destroy=(w,g)=>(t.destroy=v,setTimeout(()=>{c.close({fail(){t._destroy(w,g)}})},0),t),s(),t};u.default=f}),Uo=ve(u=>{he(),me(),fe(),Object.defineProperty(u,"__esModule",{value:!0});var m=(Qe(),Be(Ve)),l=Ht(),a=ys(),c,n,t,r=!1;function e(){let b=new l.Transform;return b._write=(p,o,v)=>{c.sendSocketMessage({data:p.buffer,success(){v()},fail(){v(new Error)}})},b._flush=p=>{c.closeSocket({success(){p()}})},b}function i(b){b.hostname||(b.hostname="localhost"),b.path||(b.path="/"),b.wsOptions||(b.wsOptions={})}function s(b,p){let o=b.protocol==="alis"?"wss":"ws",v=`${o}://${b.hostname}${b.path}`;return b.port&&b.port!==80&&b.port!==443&&(v=`${o}://${b.hostname}:${b.port}${b.path}`),typeof b.transformWsUrl=="function"&&(v=b.transformWsUrl(v,b,p)),v}function f(){r||(r=!0,c.onSocketOpen(()=>{t.socketReady()}),c.onSocketMessage(b=>{if(typeof b.data=="string"){let p=m.Buffer.from(b.data,"base64");n.push(p)}else{let p=new FileReader;p.addEventListener("load",()=>{if(p.result instanceof ArrayBuffer){n.push(m.Buffer.from(p.result));return}n.push(m.Buffer.from(p.result,"utf-8"))}),p.readAsArrayBuffer(b.data)}}),c.onSocketClose(()=>{t.end(),t.destroy()}),c.onSocketError(b=>{t.destroy(b)}))}var h=(b,p)=>{if(p.hostname=p.hostname||p.host,!p.hostname)throw new Error("Could not determine host. Specify host manually.");let o=p.protocolId==="MQIsdp"&&p.protocolVersion===3?"mqttv3.1":"mqtt";i(p);let v=s(p,b);return c=p.my,c.connectSocket({url:v,protocols:o}),n=e(),t=new a.BufferedDuplex(p,n,c),f(),t};u.default=h}),qd=ve(u=>{he(),me(),fe();var m=u&&u.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(u,"__esModule",{value:!0}),u.connectAsync=s;var l=m(xt()),a=m((Rd(),Be($a))),c=m(vi()),n=m(rr());typeof Fe?.nextTick!="function"&&(Fe.nextTick=setImmediate);var t=(0,l.default)("mqttjs"),r=null;function e(f){let h;if(f.auth)if(h=f.auth.match(/^(.+):(.+)$/),h){let[,b,p]=h;f.username=b,f.password=p}else f.username=f.auth}function i(f,h){if(t("connecting to an MQTT broker..."),typeof f=="object"&&!h&&(h=f,f=""),h=h||{},f&&typeof f=="string"){let o=a.default.parse(f,!0),v={};if(o.port!=null&&(v.port=Number(o.port)),v.host=o.hostname,v.query=o.query,v.auth=o.auth,v.protocol=o.protocol,v.path=o.path,h={...v,...h},!h.protocol)throw new Error("Missing protocol");h.protocol=h.protocol.replace(/:$/,"")}if(h.unixSocket=h.unixSocket||h.protocol?.includes("+unix"),h.unixSocket?h.protocol=h.protocol.replace("+unix",""):!h.protocol?.startsWith("ws")&&!h.protocol?.startsWith("wx")&&delete h.path,e(h),h.query&&typeof h.query.clientId=="string"&&(h.clientId=h.query.clientId),n.default||h.unixSocket?h.socksProxy=void 0:h.socksProxy===void 0&&typeof Fe<"u"&&(h.socksProxy=Fe.env.MQTTJS_SOCKS_PROXY),h.cert&&h.key)if(h.protocol){if(["mqtts","wss","wxs","alis"].indexOf(h.protocol)===-1)switch(h.protocol){case"mqtt":h.protocol="mqtts";break;case"ws":h.protocol="wss";break;case"wx":h.protocol="wxs";break;case"ali":h.protocol="alis";break;default:throw new Error(`Unknown protocol for secure connection: "${h.protocol}"!`)}}else throw new Error("Missing secure protocol key");if(r||(r={},!n.default&&!h.forceNativeWebSocket?(r.ws=xn().streamBuilder,r.wss=xn().streamBuilder,r.mqtt=Oo().default,r.tcp=Oo().default,r.ssl=No().default,r.tls=r.ssl,r.mqtts=No().default):(r.ws=xn().browserStreamBuilder,r.wss=xn().browserStreamBuilder,r.wx=Ro().default,r.wxs=Ro().default,r.ali=Uo().default,r.alis=Uo().default)),!r[h.protocol]){let o=["mqtts","wss"].indexOf(h.protocol)!==-1;h.protocol=["mqtt","mqtts","ws","wss","wx","wxs","ali","alis"].filter((v,w)=>o&&w%2===0?!1:typeof r[v]=="function")[0]}if(h.clean===!1&&!h.clientId)throw new Error("Missing clientId for unclean clients");h.protocol&&(h.defaultProtocol=h.protocol);function b(o){return h.servers&&((!o._reconnectCount||o._reconnectCount===h.servers.length)&&(o._reconnectCount=0),h.host=h.servers[o._reconnectCount].host,h.port=h.servers[o._reconnectCount].port,h.protocol=h.servers[o._reconnectCount].protocol?h.servers[o._reconnectCount].protocol:h.defaultProtocol,h.hostname=h.host,o._reconnectCount++),t("calling streambuilder for",h.protocol),r[h.protocol](o,h)}let p=new c.default(b,h);return p.on("error",()=>{}),p}function s(f,h,b=!0){return new Promise((p,o)=>{let v=i(f,h),w={connect:k=>{g(),p(v)},end:()=>{g(),p(v)},error:k=>{g(),v.end(),o(k)}};b===!1&&(w.close=()=>{w.error(new Error("Couldn't connect to server"))});function g(){Object.keys(w).forEach(k=>{v.off(k,w[k])})}Object.keys(w).forEach(k=>{v.on(k,w[k])})})}u.default=i}),Lo=ve(u=>{he(),me(),fe();var m=u&&u.__createBinding||(Object.create?function(b,p,o,v){v===void 0&&(v=o);var w=Object.getOwnPropertyDescriptor(p,o);(!w||("get"in w?!p.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return p[o]}}),Object.defineProperty(b,v,w)}:function(b,p,o,v){v===void 0&&(v=o),b[v]=p[o]}),l=u&&u.__setModuleDefault||(Object.create?function(b,p){Object.defineProperty(b,"default",{enumerable:!0,value:p})}:function(b,p){b.default=p}),a=u&&u.__importStar||(function(){var b=function(p){return b=Object.getOwnPropertyNames||function(o){var v=[];for(var w in o)Object.prototype.hasOwnProperty.call(o,w)&&(v[v.length]=w);return v},b(p)};return function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var v=b(p),w=0;w<v.length;w++)v[w]!=="default"&&m(o,p,v[w]);return l(o,p),o}})(),c=u&&u.__exportStar||function(b,p){for(var o in b)o!=="default"&&!Object.prototype.hasOwnProperty.call(p,o)&&m(p,b,o)},n=u&&u.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(u,"__esModule",{value:!0}),u.ReasonCodes=u.KeepaliveManager=u.UniqueMessageIdProvider=u.DefaultMessageIdProvider=u.Store=u.MqttClient=u.connectAsync=u.connect=u.Client=void 0;var t=n(vi());u.MqttClient=t.default;var r=n(Oa());u.DefaultMessageIdProvider=r.default;var e=n(Gc());u.UniqueMessageIdProvider=e.default;var i=n(ma());u.Store=i.default;var s=a(qd());u.connect=s.default,Object.defineProperty(u,"connectAsync",{enumerable:!0,get:function(){return s.connectAsync}});var f=n(Ba());u.KeepaliveManager=f.default,u.Client=t.default,c(vi(),u),c(tn(),u),c(fa(),u);var h=tr();Object.defineProperty(u,"ReasonCodes",{enumerable:!0,get:function(){return h.ReasonCodes}})}),jd=ve(u=>{he(),me(),fe();var m=u&&u.__createBinding||(Object.create?function(t,r,e,i){i===void 0&&(i=e);var s=Object.getOwnPropertyDescriptor(r,e);(!s||("get"in s?!r.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(t,i,s)}:function(t,r,e,i){i===void 0&&(i=e),t[i]=r[e]}),l=u&&u.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),a=u&&u.__importStar||(function(){var t=function(r){return t=Object.getOwnPropertyNames||function(e){var i=[];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[i.length]=s);return i},t(r)};return function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var i=t(r),s=0;s<i.length;s++)i[s]!=="default"&&m(e,r,i[s]);return l(e,r),e}})(),c=u&&u.__exportStar||function(t,r){for(var e in t)e!=="default"&&!Object.prototype.hasOwnProperty.call(r,e)&&m(r,t,e)};Object.defineProperty(u,"__esModule",{value:!0});var n=a(Lo());u.default=n,c(Lo(),u)});jd();function Bd(u={}){const m=Array.isArray(u.socket_states)?u.socket_states:Array.from({length:6},(l,a)=>u[`plug_${a}`]?.on);return Array.from({length:6},(l,a)=>{const c=m[a];return c===!0||c===1||c==="1"?!0:c===!1||c===0||c==="0"?!1:void 0})}const qo=u=>({tc1:"TC1 智能插排",m1:"M1 空气质量检测器",a1:"A1 空气净化器"})[u.model]||"设备";function Fd(u,m,l,a,{schedule:c=setTimeout,cancel:n=clearTimeout}={}){let t=!1,r;const e=l||(["a1","m1"].includes(m.model)?`${m.model.toUpperCase()}-${m.mac.slice(-4).toUpperCase()}`:null);function i(f){t||(t=!0,n(r),a(f))}function s(){t||u({action:"config.get",params:{}},f=>{if(!t){if(f.code==="ok"&&e!==null&&f.data?.name===e){i({code:"ok",data:{name:e}});return}r=c(s,1500)}},m,{timeoutMs:3e3})}r=c(s,1500),u({action:"config.set",params:{section:"device",values:{name:l}}},i,m)}const Dd={class:"device-summary"},Wd={class:"rack-head"},zd=["title"],Hd={key:0,class:"rack-body tc1-body"},$d={class:"stat"},Kd={class:"socket-info"},Vd=["aria-label"],Qd={key:1,class:"rack-body"},Gd={class:"ring-mini"},Yd={class:"sensor-copy"},Jd={class:"stat"},Xd={key:2,class:"rack-body"},Zd={class:"stat"},eu={__name:"DeviceSummary",props:{device:Object,state:Object,name:String,connected:Boolean,now:Number},setup(u){const m=u,l=tt(()=>m.connected&&m.state?.available!==!1),a=tt(()=>Bd(m.state)),c=tt(()=>l.value&&a.value.length===6&&a.value.every(f=>typeof f=="boolean")),n=tt(()=>l.value&&m.state?.sensor_valid&&m.state?.sensorAt&&m.now-m.state.sensorAt<=6e4&&i(m.state.pm25)),t=tt(()=>n.value?Number(m.state.pm25)>75||Number(m.state.formaldehyde)>.1?"较差":Number(m.state.pm25)>35||Number(m.state.formaldehyde)>.08?"一般":"良好":"—"),r=tt(()=>m.connected?m.state?.available===!1?{label:"离线",tone:"muted"}:(m.device.model==="m1"?n.value:m.device.model==="tc1"?c.value:m.state?.fan_on!==void 0)?{label:"在线",tone:"online"}:{label:"等待数据",tone:"waiting"}:{label:"未连接",tone:"muted"}),e=tt(()=>m.state?.applied_speed??m.state?.percentage??m.state?.speed);function i(f){return f!=null&&f!==""&&Number.isFinite(Number(f))}function s(f,h=0){return l.value&&i(f)?Number(f).toFixed(h):"—"}return(f,h)=>(Me(),Ce("span",Dd,[R("span",Wd,[R("span",{class:Bt(["presence-pill",r.value.tone]),role:"status"},Oe(r.value.label),3),R("b",{title:u.name},Oe(u.name),9,zd)]),u.device.model==="tc1"?(Me(),Ce("span",Hd,[R("span",$d,[Ue(Oe(s(u.state?.power_watts??u.state?.power,1)),1),h[0]||(h[0]=R("small",null,"W",-1))]),R("span",Kd,[R("span",{class:"sockets",role:"img","aria-label":a.value.map((b,p)=>`插座 ${p+1}：${!l.value||b===void 0?"未知":b?"开启":"关闭"}`).join("，")},[(Me(),Ce(ft,null,mn(6,b=>R("i",{key:b,class:Bt({on:l.value&&a.value[b-1]===!0,unknown:!l.value||a.value[b-1]===void 0})},null,2)),64))],8,Vd)])])):u.device.model==="m1"?(Me(),Ce("span",Qd,[R("span",Gd,[R("span",null,Oe(t.value),1)]),R("span",Yd,[R("span",Jd,[Ue(Oe(n.value?Math.round(Number(u.state.pm25)):"—"),1),h[1]||(h[1]=R("small",null,"μg/m³",-1))]),h[2]||(h[2]=R("small",{class:"rack-detail"},"PM2.5",-1))])])):u.device.model==="a1"?(Me(),Ce("span",Xd,[R("span",Zd,[Ue(Oe(l.value&&u.state?.fan_on!==void 0?u.state.fan_on?s(e.value):"0":"—"),1),h[3]||(h[3]=R("small",null,"%",-1))]),Le(je,{name:"fan",size:34})])):He("",!0)]))}},ks=Xt(eu,[["__scopeId","data-v-6878a64f"]]),tu=["disabled"],nu={key:0,class:"help"},ru={key:1,role:"alert",class:"error"},iu=["disabled"],su=["disabled"],ou=["disabled"],au={__name:"DeviceNameDialog",emits:["save"],setup(u,{expose:m,emit:l}){const a=l,c=Ne(),n=Ne(),t=Ne(""),r=Ne(""),e=Ne(!1);function i(f,h){n.value=f,t.value=h,r.value="",c.value.showModal()}function s(f=t.value.trim()){if(r.value="",f&&new TextEncoder().encode(f).length>63){r.value="名称不能超过 63 字节。";return}e.value=!0,a("save",n.value,f,h=>{e.value=!1,h?r.value=h:c.value.close()})}return m({open:i}),(f,h)=>(Me(),Ce("dialog",{ref_key:"dialog",ref:c,class:"rename-dialog",onCancel:h[4]||(h[4]=b=>e.value&&b.preventDefault())},[R("form",{onSubmit:h[3]||(h[3]=Yt(b=>s(),["prevent"]))},[h[6]||(h[6]=R("h2",null,"修改设备名称",-1)),h[7]||(h[7]=R("p",{class:"help"},"使用容易辨认的名称，例如“客厅净化器”。",-1)),R("label",null,[h[5]||(h[5]=Ue("设备名称",-1)),Ge(R("input",{"onUpdate:modelValue":h[0]||(h[0]=b=>t.value=b),maxlength:"63",disabled:e.value,autofocus:""},null,8,tu),[[ot,t.value]])]),n.value?.version==="v1"?(Me(),Ce("p",nu,"旧版设备的名称保存在当前浏览器中。")):He("",!0),r.value?(Me(),Ce("p",ru,Oe(r.value),1)):He("",!0),R("footer",null,[R("button",{class:"btn ghost",type:"button",disabled:e.value,onClick:h[1]||(h[1]=b=>s(""))},"恢复默认名称",8,iu),R("button",{class:"btn",type:"button",disabled:e.value,onClick:h[2]||(h[2]=b=>c.value.close())},"取消",8,su),R("button",{class:"btn primary",disabled:e.value},Oe(e.value?"保存中…":"保存名称"),9,ou)])],32)],544))}},lu=Xt(au,[["__scopeId","data-v-ee85dc5f"]]),cu={id:"device-picker-title"},du=["aria-pressed","onClick"],uu={key:0,class:"help"},pu={__name:"DevicePicker",props:{devices:Array,selected:String,states:Object,deviceName:Function,connected:Boolean,now:Number},emits:["select","refresh","add"],setup(u,{expose:m,emit:l}){const a=l,c=Ne(),n=Ne();let t,r,e;function i(){r&&(document.documentElement.style.overflow=r.html,document.body.style.overflow=r.body,r=null)}function s(){c.value?.open||(i(),e?.getClientRects().length&&e.focus({preventScroll:!0}))}function f(){c.value?.close(),i()}async function h(){if(c.value.open)return;e=document.activeElement,c.value.showModal(),r={html:document.documentElement.style.overflow,body:document.body.style.overflow},document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",await bl();const g=n.value.querySelector("[aria-pressed=true]");g&&(n.value.scrollTop+=g.getBoundingClientRect().top-n.value.getBoundingClientRect().top)}function b(){f(),a("add")}function p(g){a("select",qe(g)),f()}function o(g){if(g.key!=="Tab")return;const k=[...c.value.querySelectorAll("button:not(:disabled)")],_=k[0],y=k.at(-1);g.shiftKey&&document.activeElement===_?(g.preventDefault(),y.focus()):!g.shiftKey&&document.activeElement===y&&(g.preventDefault(),_.focus())}function v(g){if(g.target!==c.value)return;const k=c.value.getBoundingClientRect();(g.clientX<k.left||g.clientX>k.right||g.clientY<k.top||g.clientY>k.bottom)&&f()}function w(){t.matches||f()}return os(()=>{t=matchMedia("(max-width:800px)"),t.addEventListener("change",w)}),Jn(()=>{t?.removeEventListener("change",w),f()}),m({open:h}),(g,k)=>(Me(),Ce("dialog",{ref_key:"dialog",ref:c,class:"device-picker","aria-labelledby":"device-picker-title",onCancel:i,onClose:s,onClick:v,onKeydown:o},[R("header",null,[R("h2",cu,[k[1]||(k[1]=Ue("切换设备 ",-1)),R("small",null,Oe(u.devices.length)+" 台",1)]),R("button",{type:"button","aria-label":"关闭设备列表",autofocus:"",onClick:f},[Le(je,{name:"close"})])]),R("button",{class:"add-device-entry",type:"button",onClick:b},[Le(je,{name:"plus",size:17}),k[2]||(k[2]=Ue("添加设备",-1))]),R("ul",{ref_key:"list",ref:n,class:"picker-list"},[(Me(!0),Ce(ft,null,mn(u.devices,_=>(Me(),Ce("li",{key:Ke(qe)(_)},[R("button",{type:"button","aria-pressed":u.selected===Ke(qe)(_),onClick:y=>p(_)},[Le(ks,{device:_,state:u.states[Ke(qe)(_)]||{},name:u.deviceName(_),connected:u.connected,now:u.now},null,8,["device","state","name","connected","now"]),u.selected===Ke(qe)(_)?(Me(),Jt(je,{key:0,name:"check"})):He("",!0)],8,du)]))),128)),u.devices.length?He("",!0):(Me(),Ce("li",uu,"暂无设备，可在设置中添加。"))],512),R("footer",null,[R("button",{type:"button",onClick:k[0]||(k[0]=_=>a("refresh"))},"刷新设备列表"),R("button",{type:"button",onClick:f},"完成")])],544))}},hu=Xt(pu,[["__scopeId","data-v-1d7e7db6"]]),fu={tc1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta name="referrer" content="no-referrer"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TC1 智能插座</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;-webkit-tap-highlight-color:transparent;
 --bg:#f4f6f9;--surface:#fff;--surface-muted:#eef1f5;--text:#1d2430;--muted:#5f6b7c;--border:#dbe0e8;
 --accent:#305ed4;--accent-text:#fff;--accent-soft:#e6edfc;
 --danger:#b8353c;--danger-soft:#fbe9ea;--success:#26734c;--success-soft:#e3f3ea;--warn:#9a5b00;--warn-soft:#fdf1dc;
 --focus:#7a9cf5;--radius:12px;--radius-s:8px;--shadow:0 1px 2px rgba(20,30,50,.06),0 4px 16px rgba(20,30,50,.04);
 font-family:Inter,system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--text);background:var(--bg)}
:root[data-theme=dark]{--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}
@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}}
*{box-sizing:border-box}
body{max-width:1080px;margin:0 auto;padding:20px 32px 96px;line-height:1.5;font-size:15px}
h1{font-size:20px;margin:0;letter-spacing:-.3px}h2{font-size:16px;margin:0;font-weight:650}h3{font-size:14px;margin:0 0 8px;font-weight:650}
p{margin:0}a{color:var(--accent)}[hidden]{display:none!important}
.muted,.help{color:var(--muted)}.help{font-size:13px}.small{font-size:13px}.num{font-variant-numeric:tabular-nums}
:focus-visible{outline:3px solid var(--focus);outline-offset:2px}
svg.i{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}

/* Header */
.topbar{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;padding:4px 0 16px}
.brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
.brand .logo{width:40px;height:40px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}
.brand .kind{font-size:12px;color:var(--muted)}
.prefs{display:flex;gap:6px}.prefs select{font:inherit;font-size:12px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)}
.chips{display:flex;flex-wrap:wrap;gap:8px;width:100%}
.chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--surface);border:1px solid var(--border);font-size:13px;color:var(--muted);max-width:100%}
.chip b{color:var(--text);font-weight:600}
.dot{width:8px;height:8px;border-radius:50%;background:var(--muted);flex:none}
.dot.ok{background:var(--success)}.dot.warn{background:var(--warn)}.dot.bad{background:var(--danger)}
.dot.live{animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.35}}
.banner{display:flex;gap:10px;align-items:center;padding:10px 14px;border-radius:var(--radius-s);margin:0 0 16px;font-size:14px}
.banner.bad{background:var(--danger-soft);color:var(--danger)}.banner.warn{background:var(--warn-soft);color:var(--warn)}.banner.ok{background:var(--success-soft);color:var(--success)}.banner.info{background:var(--accent-soft);color:var(--accent)}

/* Tabs */
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);margin:0 0 20px}
.tabs a{display:flex;align-items:center;gap:8px;padding:10px 14px;color:var(--muted);text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:550}
.tabs a[aria-current=page]{color:var(--accent);border-bottom-color:var(--accent)}

/* Cards and grids */
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);min-width:0}
.card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.broker-card-head{flex-wrap:wrap}
.broker-platform-link{flex-shrink:0;color:var(--accent);background:var(--surface-muted)}
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{position:relative;font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
/* Keep pending feedback out of flex flow so buttons and wrapped rows stay put. */
.btn[aria-busy=true]::before{content:"";position:absolute;left:25%;bottom:3px;width:50%;height:2px;border-radius:1px;background:currentColor;animation:pulse 1s linear infinite;pointer-events:none}

/* Segmented control */
.seg{display:inline-flex;background:var(--surface-muted);border-radius:var(--radius-s);padding:3px;gap:2px;flex-wrap:wrap}
.seg button{font:inherit;font-size:14px;border:0;background:transparent;color:var(--muted);padding:7px 14px;border-radius:6px;cursor:pointer;min-height:36px;font-weight:550;width:auto;margin:0}
.seg button[aria-pressed=true]{background:var(--surface);color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.seg.full{display:flex}.seg.full button{flex:1}
.seg button:disabled{cursor:not-allowed;opacity:.5}

/* Switch */
.switch{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;min-height:44px}
.switch .text{min-width:0}.switch .text b{display:block;font-weight:600}.switch .text span{font-size:13px;color:var(--muted)}
.switch input{appearance:none;flex:none;width:44px;height:26px;min-height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;margin:0;transition:background .15s}
.switch input::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
.switch input:checked{background:var(--accent)}.switch input:checked::after{transform:translateX(18px)}
.switch input:disabled{opacity:.5}
.switch+.switch{border-top:1px solid var(--border);padding-top:8px;margin-top:8px}

/* Fields */
.field{display:block}.field>span{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
.field .help{margin-top:6px}
input[type=text],input[type=password],input[type=number],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input:not([type]),select,textarea{font:inherit;width:100%;min-height:40px;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);color:var(--text)}
textarea{min-height:120px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}
input[type=range]{width:100%;min-height:28px;accent-color:var(--accent);margin:0;padding:0;border:0;background:transparent}
input[type=color]{width:40px;height:40px;min-height:40px;padding:2px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);cursor:pointer}
input[type=file]{padding:8px}
.fields{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.form-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}
.input-unit{display:flex;align-items:center;gap:8px}.input-unit input{flex:1}.input-unit em{font-style:normal;color:var(--muted);font-size:13px;white-space:nowrap}
.sentence{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:14px}
.sentence input{width:90px;min-height:36px;padding:6px 8px}
details.more{border-top:1px solid var(--border);margin-top:20px;padding-top:12px}
details.more>summary{cursor:pointer;color:var(--muted);font-size:14px;font-weight:600;list-style:none;display:flex;align-items:center;gap:6px}
details.more>summary::before{content:"\\203A";display:inline-block;transition:transform .15s;font-size:18px;line-height:1}
details.more[open]>summary::before{transform:rotate(90deg)}
details.more>*:not(summary){margin-top:16px}
details.info{font-size:13px;color:var(--muted);margin-top:20px}
details.info>summary{cursor:pointer;display:inline-flex;align-items:center;gap:4px;list-style:none}
details.info>summary svg.i{width:15px;height:15px}
details.info>summary::-webkit-details-marker{display:none}
details.info>p{margin-top:6px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
summary::-webkit-details-marker{display:none}

/* Read-only display summary */
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px;background:var(--surface-muted);border-radius:var(--radius-s);padding:14px 16px;margin:0}
.summary dt{font-size:12px;color:var(--muted)}.summary dd{margin:2px 0 0;font-weight:600;overflow-wrap:anywhere;display:flex;align-items:center;gap:6px}

/* Settings layout */
.settings{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start}
.side{position:sticky;top:12px;display:flex;flex-direction:column;gap:2px}
.side .group{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin:14px 10px 4px;font-weight:700}
.side .group:first-child{margin-top:0}
.side a{padding:8px 10px;border-radius:var(--radius-s);color:var(--text);text-decoration:none;font-size:14px}
.side a:hover{background:var(--surface-muted)}.side a[aria-current=page]{background:var(--accent-soft);color:var(--accent);font-weight:600}
.page-title{margin:0 0 4px;font-size:18px}.page-lead{margin:0 0 16px;color:var(--muted);font-size:14px}
.section-label{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:0 0 10px}

/* Lists */
.list{display:flex;flex-direction:column;gap:8px}
.item{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);min-width:0}
.item .grow b{display:block}.item .grow span{font-size:13px;color:var(--muted)}
.item .time{font-size:20px;min-width:64px}
.empty{padding:20px;text-align:center;color:var(--muted);border:1px dashed var(--border);border-radius:var(--radius-s);font-size:14px}
.badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;background:var(--surface-muted);color:var(--muted);white-space:nowrap}
.badge.ok{background:var(--success-soft);color:var(--success)}.badge.warn{background:var(--warn-soft);color:var(--warn)}.badge.bad{background:var(--danger-soft);color:var(--danger)}.badge.info{background:var(--accent-soft);color:var(--accent)}
.subcard{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;background:var(--surface)}
.subcard h3{margin-bottom:12px}
fieldset{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;margin:16px 0;min-width:0}
fieldset.bare{border:0;padding:0;margin-left:0;margin-right:0;margin-bottom:0;min-width:0}
fieldset.bare:disabled{opacity:.5}
legend{padding:0 8px;font-size:14px}
.table{width:100%;border-collapse:collapse;font-size:14px}
.table th{text-align:left;font-size:12px;color:var(--muted);font-weight:600;padding:6px 8px;border-bottom:1px solid var(--border)}
.table td{padding:8px 8px;border-bottom:1px solid var(--border);vertical-align:middle}
.table tr:last-child td{border-bottom:0}

/* Weekday chips */
.days{display:flex;gap:6px;flex-wrap:wrap}
.days label{position:relative;margin:0}
.days input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer;width:100%;min-height:100%}
.days span{display:grid;place-items:center;min-width:40px;height:36px;padding:0 8px;border-radius:999px;border:1px solid var(--border);font-size:13px;font-weight:600;color:var(--muted)}
.days input:checked+span{background:var(--accent);border-color:var(--accent);color:var(--accent-text)}
.days input:focus-visible+span{outline:3px solid var(--focus);outline-offset:2px}

/* Option cards */
.options{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}
.option{position:relative;border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;cursor:pointer;background:var(--surface);display:block;margin:0}
.option input{position:absolute;opacity:0}
.option b{display:block;font-size:14px}.option span{font-size:12px;color:var(--muted)}
.option:has(input:checked){border-color:var(--accent);background:var(--accent-soft);box-shadow:inset 0 0 0 1px var(--accent)}
.option:has(input:focus-visible){outline:3px solid var(--focus);outline-offset:2px}

/* Toasts and dialogs */
.toasts{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:20;width:min(420px,calc(100% - 32px))}
.toast{padding:12px 16px;border-radius:var(--radius-s);background:var(--text);color:var(--bg);font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.2);animation:rise .2s}
.toast.bad{background:var(--danger);color:#fff}
@keyframes rise{from{transform:translateY(8px);opacity:0}}
dialog{border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);padding:24px;max-width:420px;width:calc(100% - 32px)}
dialog::backdrop{background:rgba(10,15,25,.45)}
dialog h2{margin-bottom:8px}dialog p{color:var(--muted);font-size:14px}

/* Stats and bars */
.stat{font-size:40px;font-weight:650;letter-spacing:-1px;line-height:1.1;font-variant-numeric:tabular-nums}
.stat small{font-size:15px;font-weight:500;color:var(--muted);letter-spacing:0;margin-left:4px}
.bar{height:8px;border-radius:4px;background:var(--surface-muted);overflow:hidden;position:relative}
.bar i{position:absolute;inset:0 auto 0 0;background:var(--accent);border-radius:4px;transition:width .6s}
.bar i.target{background:transparent;border-right:2px solid var(--text);border-radius:0}
.eyebrow{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}
.label{font-size:13px;font-weight:600}
progress{width:100%;height:8px;accent-color:var(--accent)}
pre{overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;background:var(--surface-muted);padding:14px;border-radius:var(--radius-s);max-height:360px}

/* Diagnostics */
.health{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.health .item{padding:10px 12px}
.diag{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.diag details{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;background:var(--surface)}
.diag summary{cursor:pointer;font-weight:600;display:flex;justify-content:space-between;gap:8px}
.diag dl{margin:8px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}
.diag dt{color:var(--muted)}.diag dd{margin:0;text-align:right;overflow-wrap:anywhere}

/* ---------- A1 ---------- */
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "filter filter" "light light"}
.fan-hero{display:flex;align-items:center;gap:20px}
.power{flex:none;width:96px;height:96px;border-radius:50%;border:0;display:grid;place-items:center;cursor:pointer;background:var(--surface-muted);color:var(--muted);box-shadow:inset 0 0 0 1px var(--border);transition:background .2s,box-shadow .2s,color .2s;width:96px}
.power svg{width:38px;height:38px}
.power[aria-pressed=true]{background:var(--accent);color:var(--accent-text);box-shadow:0 0 0 8px var(--accent-soft)}
.power:disabled{opacity:.5;cursor:not-allowed}
.mini-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.mini-metrics>div{display:flex;flex-direction:column;gap:2px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
.mini-metrics b{font-size:18px}.mini-metrics small{font-size:12px;color:var(--muted);font-weight:500}
.mini-metrics .badge{align-self:flex-start}
.light-layout{display:flex;gap:28px;align-items:center}
.ring{width:180px;height:180px;flex:none}
.ring-effect-preview{display:flex;justify-content:center;align-items:center;gap:24px;min-height:196px}
.ring-preview-controls{width:min(280px,100%)}
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .ring-anchor{font-size:7px;font-weight:700;fill:var(--muted)}
.ring .ring-guide{fill:none;stroke:var(--surface-muted);stroke-width:15}
.ring .ring-edge{fill:none;stroke:var(--muted);stroke-width:1;opacity:.45}
.ring .ring-light-segment{fill:none;stroke-width:12;stroke-linecap:butt;transition:stroke-opacity .12s linear}
.swatches{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;align-items:center}
.swatch{width:32px;height:32px;min-height:32px;border-radius:50%;border:2px solid var(--surface);background:var(--c);box-shadow:0 0 0 1px var(--border);cursor:pointer;padding:0}
.swatch[aria-pressed=true]{box-shadow:0 0 0 2px var(--accent)}
.swatch:disabled,.swatches input:disabled{opacity:.35;cursor:not-allowed}
.swatches input[type=color]{width:32px;height:32px;min-height:32px;border-radius:50%;padding:3px;border:0;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)}
.swatches input[type=color]::-webkit-color-swatch-wrapper{padding:0}
.swatches input[type=color]::-webkit-color-swatch{border:2px solid var(--surface);border-radius:50%}
.swatches input[type=color]::-moz-color-swatch{border:2px solid var(--surface);border-radius:50%}

/* ---------- M1 ---------- */
.verdict{display:flex;align-items:center;gap:16px;border-left:6px solid var(--border)}
.verdict[data-level=ok]{border-left-color:var(--success)}.verdict[data-level=warn]{border-left-color:var(--warn)}.verdict[data-level=bad]{border-left-color:var(--danger)}
.verdict[data-level=ok] .stat{color:var(--success)}.verdict[data-level=warn] .stat{color:var(--warn)}.verdict[data-level=bad] .stat{color:var(--danger)}
.fresh{display:flex;align-items:center;gap:8px;white-space:nowrap}
.metrics{display:grid;gap:16px;grid-template-columns:repeat(4,minmax(0,1fr))}
.metric .stat{margin:12px 0 14px}
.scale{position:relative;display:flex;gap:2px;height:6px}
.scale i{border-radius:3px;opacity:.55}.scale i.ok{background:var(--success)}.scale i.warn{background:var(--warn)}.scale i.bad{background:var(--danger)}
.scale b{position:absolute;top:-4px;width:4px;height:14px;margin-left:-2px;border-radius:2px;background:var(--text);box-shadow:0 0 0 2px var(--surface)}

/* ---------- TC1 ---------- */
.tc1-home{grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);grid-template-areas:"sockets power" "sockets panel"}
.tiles{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.tile-wrap{position:relative}
.tile{width:100%;font:inherit;text-align:left;display:flex;flex-direction:column;gap:4px;padding:14px;min-height:110px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface-muted);color:var(--muted);cursor:pointer;transition:background .15s,border-color .15s;margin:0}
.tile .tile-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:auto}
.tile .idx{font-size:12px;font-weight:700;padding-right:26px}
.tile .name{color:var(--text);font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .state{font-size:13px;font-weight:600}
.tile[aria-pressed=true]{background:var(--accent-soft);border-color:var(--accent);color:var(--accent)}
.tile:disabled{cursor:progress;opacity:.7}
.tile-edit{position:absolute;top:8px;right:8px}
.spark{width:100%;height:64px;margin:12px 0 4px;display:block}
.spark .line{fill:none;stroke:var(--accent);stroke-width:2;vector-effect:non-scaling-stroke}
.spark .area{fill:var(--accent-soft);stroke:none}

@media(max-width:860px){.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:760px){
 body{padding:12px 14px 96px}
 .settings{grid-template-columns:1fr;gap:12px}
 .side{position:static;flex-direction:row;overflow-x:auto;gap:4px;padding-bottom:6px;scrollbar-width:none}
 .side .group{display:none}.side a{white-space:nowrap;border:1px solid var(--border)}
 .a1-home,.tc1-home{grid-template-columns:1fr;grid-template-areas:none}
 .a1-home>*,.tc1-home>*{grid-area:auto!important}
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}.ring-effect-preview{flex-direction:column;gap:8px}
 .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
 .power{width:80px;height:80px}
 .verdict{flex-direction:column;align-items:flex-start}
 .card{padding:16px}.stat{font-size:34px}
 .brand h1{font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
 .prefs select{max-width:84px}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* Button mappings: gesture, concrete result, then row actions. */
.button-group{display:grid;gap:8px}.button-mapping{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr) auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.button-result{overflow-wrap:anywhere}.button-range{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px}.button-range summary{cursor:pointer;display:list-item}.button-range summary span{display:block;margin:6px 0 0 18px}.button-range summary .help{color:var(--accent)}
.button-preview{padding:14px;border-radius:var(--radius-s);background:var(--accent-soft);color:var(--accent);overflow-wrap:anywhere}
@media(max-width:600px){.button-mapping{grid-template-columns:1fr auto}.button-gesture{grid-column:1/-1}.button-mapping .row{justify-content:flex-end}.button-range .button-mapping{gap:6px}}

.copyright{margin-top:24px;padding:16px 0;border-top:1px solid var(--border);color:var(--muted);font-size:12px;line-height:1.8;text-align:center;overflow-wrap:anywhere}.copyright a{color:var(--accent);text-underline-offset:3px}
</style>
<script>/* Apply the saved theme before first paint so the page does not flash light on
 * a dark display. The control itself lives in the shared header (ui.js). */
(()=>{
'use strict';
 const key='phicomm.appearance',choices=['system','light','dark'];
 let selected='system';try{const saved=localStorage.getItem(key);if(choices.includes(saved))selected=saved;}catch{}
 if(selected==='system')document.documentElement.removeAttribute('data-theme');
 else document.documentElement.dataset.theme=selected;
})();
<\/script></head>
<body>
<main id="homePage" class="home tc1-home">
 <section class="card" style="grid-area:sockets">
  <div class="card-head">
   <div><h2 data-i18n="tc1.sockets"></h2><p class="help" id="onCount"></p></div>
   <div class="row" style="gap:8px"><button id="allOn" class="btn" type="button" data-i18n="tc1.all_on"></button><button id="allOff" class="btn" type="button" data-i18n="tc1.all_off"></button></div>
  </div>
  <div class="tiles" id="tiles"></div>
  <p class="help" style="margin-top:12px" data-i18n="tc1.output_hint"></p>
 </section>
 <section class="card" style="grid-area:power">
  <div class="card-head"><h2 data-i18n="tc1.power"></h2><span class="dot ok live"></span></div>
  <div class="stat" id="watts">—<small>W</small></div>
  <svg id="spark" class="spark" viewBox="0 0 300 64" preserveAspectRatio="none" aria-hidden="true"></svg>
  <div class="row between help"><span id="sparkRange"></span><span data-i18n="tc1.recent"></span></div>
  <dl class="summary" style="margin-top:14px">
   <div><dt data-i18n="tc1.energy"></dt><dd class="num" id="energy">—</dd></div>
   <div><dt data-i18n="tc1.peak"></dt><dd class="num" id="peak">—</dd></div>
  </dl>
 </section>
 <section class="card" style="grid-area:panel">
  <div class="card-head"><h2 data-i18n="a1.panel"></h2></div>
  <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="tc1.lock_desc"></span></span><input type="checkbox" role="switch" id="childLock"></label>
  <label class="switch"><span class="text"><b data-i18n="tc1.led"></b><span data-i18n="tc1.led_desc"></span></span><input type="checkbox" role="switch" id="ledEnabled"></label>
 </section>
</main>

<div id="settingsPage" class="settings" hidden>
 <nav class="side" id="side" aria-label="Settings"></nav>
 <div id="pages">
  <div data-settings-page="device" class="stack">
   <div><h2 class="page-title" data-i18n="nav.general"></h2><p class="page-lead" data-i18n="gen.lead"></p></div>
   <div data-slot="name"></div>
   <section class="card">
    <div class="card-head"><div><h2 data-i18n="tc1.names"></h2><p class="help" data-i18n="tc1.names_desc"></p></div></div>
    <form id="socketNamesForm"><div class="fields" id="nameFields"></div>
     <div class="form-actions"><button class="btn primary" type="submit" data-i18n="common.save"></button></div></form>
   </section>
   <section class="card">
    <div class="card-head"><h2 data-i18n="a1.panel"></h2></div>
    <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="tc1.lock_desc"></span></span><input type="checkbox" role="switch" id="childLockDevice"></label>
    <label class="switch"><span class="text"><b data-i18n="tc1.led"></b><span data-i18n="tc1.led_desc"></span></span><input type="checkbox" role="switch" id="ledEnabledDevice"></label>
   </section>
   <section class="card">
    <div class="card-head"><h2 data-i18n="tc1.metering"></h2></div>
    <form id="reportForm" class="field"><span data-i18n="tc1.report"></span>
     <div class="row"><span class="input-unit grow"><input id="reportSeconds" type="number" min="1" max="3600" required><em data-i18n="unit.s"></em></span>
      <button class="btn primary" type="submit" data-i18n="common.save"></button></div>
     <p class="help" data-i18n="tc1.report_help"></p></form>
    <details class="more"><summary data-i18n="tc1.calibration"></summary>
     <div class="banner warn"><span data-i18n="tc1.coef_warn"></span></div>
     <form id="coefForm" class="field"><span data-i18n="tc1.coef"></span>
      <div class="row"><span class="input-unit grow"><input id="coef" type="number" min="100" max="10000" required><em>×0.01</em></span>
       <button class="btn" type="submit" data-i18n="common.save"></button></div></form>
    </details>
   </section>
   <div data-slot="auth"></div>
  </div>
  <div data-settings-page="schedule" class="stack"></div>
  <div data-settings-page="buttons" class="stack"></div>
 </div>
</div>

<footer class="copyright">Copyright &copy; Phicomm Community · <a href="https://github.com/phicomm-io/phicomm-community-firmware" target="_blank" rel="noopener noreferrer">固件仓库</a> · <a href="https://phicomm-io.github.io" target="_blank" rel="noopener noreferrer">项目网站</a></footer>
<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'filter.title':['Estimated filter life','滤芯寿命预估'],
'filter.hint':['Counts fan running time only. Default: 4320 h (180 days continuously). Adjust to your filter specification; air quality and filter condition also affect replacement.','仅累计风机开启时间，默认 4320 小时（连续运行 180 天）。可按滤芯规格调整；更换时间还需结合空气质量和滤芯状态。'],
'filter.usage':['Used {used} / {total} h','已用 {used} / {total} 小时'],
'filter.normal':['In service','使用中'],'filter.due':['Replace filter soon','建议更换滤芯'],'filter.expired':['Replacement due','请更换滤芯'],
'filter.settings':['Adjust rated lifetime','调整额定寿命'],'filter.lifetime':['Rated lifetime (hours, 1–20000)','额定寿命（小时，1–20000）'],
'filter.reset':['Reset after replacing filter','更换滤芯后重置'],
'filter.confirm':['Reset accumulated usage to zero? Only reset after installing a new filter.','将累计使用时间清零并恢复至 100%？请在更换新滤芯后执行。'],
'filter.reset_done':['Filter usage reset','滤芯使用时间已重置'],
'import.platform':['Open IotCloud','打开 IotCloud'],
'import.title':['Import MQTT configuration','导入 MQTT 配置'],
'import.preview':['Broker: {host}:{port} · Username: {user}','Broker：{host}:{port} · 用户名：{user}'],
'import.source':['Configuration source: {origin}','配置来源：{origin}'],
'import.accept':['Receive and prefill','接收并预填'],
'import.help':['Only accept a transfer you started from a trusted platform. Review the fields and save to apply. The device never exports its saved password.','仅接收你从可信平台发起的配置。接收后请检查下方表单，点击保存才会生效。设备不会导出已保存的密码。'],
'import.http':['HTTP cannot protect against LAN interception or tampering. Use only on a trusted network.','HTTP 无法防止局域网窃听或篡改，请仅在可信网络使用。'],
'import.invalid':['Invalid import request. Start again from the platform.','导入请求无效，请从平台重新发起。'],
'import.expired':['Transfer cancelled or expired. Start again from the platform.','传递已取消或过期，请从平台重新发起。'],
'import.waiting':['Waiting for configuration…','正在等待配置…'],
'import.received':['Configuration prefilled. Review the MQTT Host, port and account below, then save.','配置已预填。请核对下方 MQTT Host、端口与账号，再点击保存。'],
'import.no_opener':['The platform window is unavailable. Keep it open and restart the transfer.','无法连接平台窗口，请保持平台页面打开并重新发起传递。'],
'fw.cancel':['Cancel download','终止下载'],'fw.cancelling':['Cancelling; services will resume shortly.','正在终止，稍后恢复正常服务。'],'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.sources_help':['Choose a source to check its latest version.','选择更新来源，检查最新版本。'],'fw.source_github':['GitHub Pages (HTTPS)','GitHub Pages（HTTPS）'],'fw.source_cn':['China mirror (HTTP)','境内镜像（HTTP）'],'fw.source_global':['Global mirror (HTTP)','境外镜像（HTTP）'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
/* Application watchdog diagnostics (A1/M1). */
'diag.g_watchdog':['Restart & watchdog','复位与看门狗'],
'diag.c_watchdog':['Watchdog','看门狗'],
'diag.watchdog_reboot':['Last restart was caused by watchdog timeout','上次因看门狗超时重启'],
'd.reset_reason':['Last reset reason','上次复位原因'],
'd.reset_reason_raw':['Raw reset reason','原始复位原因码'],
'd.watchdog_enabled':['Watchdog enabled','看门狗已启用'],
'd.watchdog_state':['Watchdog state','看门狗状态'],
'd.watchdog_fault':['Unresponsive worker','无响应的处理线程'],
's.watchdog':['Watchdog timeout','看门狗超时'],
's.lockup':['CPU lockup','CPU 锁死'],
's.software':['Software reset','软件复位'],
's.power_on':['Power-related reset','电源相关复位'],
's.unknown':['Unknown','未知'],
's.healthy':['Healthy','正常'],
's.starting':['Starting','启动中'],
's.fault':['Heartbeat timeout or watchdog error','心跳超时或看门狗错误'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
'btn.key_both':['Wi-Fi + power keys','Wi-Fi + 电源组合键'],
'btn.reset_note_a1':['Only the Wi-Fi key alone uses the fixed 5/10-second recovery gestures. Combination gestures cancel individual key actions.','仅单独长按 Wi-Fi 键 5／10 秒触发固定恢复操作；组合键会取消本轮单键动作。'],
'op.effect_next':['Cycle light effect','切换到下一灯效'],'op.effect_select':['Select light effect','设置灯效'],
'op.filter_reset':['Reset filter usage','重置滤芯寿命'],'op.light_always':['Light always on','灯环常亮'],
'op.set_brightness':['Also set brightness','同时设置亮度'],
'filter.status':['Used {used} hours · {remaining}% remaining','已使用 {used} 小时 · 剩余 {remaining}%'],
'filter.reset_hint':['Use this gesture after replacing the filter to clear its accumulated runtime.','更换滤芯后使用此手势，将累计运行时间清零。'],
'filter.reset_confirm':['Clear the filter runtime after replacing the filter?','确认已更换滤芯并清零累计使用时间？'],
'btn.key':['Key','按键'],'btn.key_fn':['Function key','功能键'],'btn.key_power':['Power key','电源键'],'btn.key_wifi':['Wi-Fi key','Wi-Fi 键'],'btn.pick_action':['Choose an action','请选择动作'],
'op.on':['On','开启'],'op.off':['Off','关闭'],'op.toggle':['Toggle','切换'],'op.all':['All sockets','全部插座'],'op.target':['Target','对象'],'op.state':['New state','目标状态'],'op.brightness':['Brightness','亮度'],'op.speed':['Fan speed','风速'],
'op.outlet':['Sockets','插座'],'op.fan':['Fan','风机'],'op.light':['Light ring','灯环'],'op.child_lock':['Child lock','童锁'],'op.indicator':['Indicator light','指示灯'],'op.display':['Screen brightness','屏幕亮度'],'op.reboot':['Restart device','重启设备'],
'clock.uptime':['Running for','已运行'],'clock.memory':['Free memory','可用内存'],
'night.hint':['Periods use the device time zone; an end earlier than the start crosses midnight.','时段按设备时区生效；结束早于开始表示跨午夜。'],'night.period':['Period {n}','时段 {n}'],'night.screen':['Limit screen brightness','限制屏幕亮度'],
'sch.new':['New schedule','新建定时'],'sch.edit':['Edit','编辑'],'sch.enable':['Enable','启用'],'sch.disable':['Disable','停用'],'sch.enabled':['Enabled','已启用'],'sch.disabled':['Disabled','已停用'],'sch.enabled_row':['Enabled','启用'],'sch.pick_action':['Choose an action for the schedule','请为定时任务选择动作'],'sch.pick_when':['Pick a date and time','请选择日期与时间'],'sch.save_btn':['Save schedule','保存任务'],
'fw.verify_ok':['Verified; the device is restarting','校验通过，设备正在重启'],'fw.failed':['Update failed: {e}','升级失败：{e}'],'fw.upload_lost':['Upload interrupted; reconnect to check the update state','连接中断，请重新连接设备查看升级状态'],'fw.upload_timeout':['Upload timed out','上传超时'],'fw.url_started':['Download started','已开始下载'],
'diag.g_ota_img':['Update image','升级镜像'],
'common.save':['Save','保存'],'common.cancel':['Cancel','取消'],'common.add':['Add','添加'],'common.delete':['Delete','删除'],'common.deleted':['Deleted','已删除'],
'common.copy':['Copy','复制'],'common.copied':['Copied','已复制'],'common.advanced':['Advanced','高级'],'common.more_info':['Details','说明'],
'common.prev':['Previous','上一页'],'common.next':['Next','下一页'],'common.yes':['Yes','是'],'common.no':['No','否'],'common.saving':['Saving…','保存中…'],'common.saved':['Saved','已保存'],'common.max':['Up to {n} items','最多 {n} 项'],
'unit.s':['s','秒'],'time.dh':['{d} d {h} h','{d} 天 {h} 小时'],'time.hm':['{h} h {m} min','{h} 小时 {m} 分'],'time.m':['{m} min','{m} 分钟'],
'toast.accepted':['Request accepted','设备已接受请求'],'toast.rebooting':['Restarting… reconnect in about 20 s','正在重启，约 20 秒后重新连接'],'toast.resetting':['Settings cleared. The device is restarting.','配置已清除，设备正在重启'],
'pref.lang_auto':['Auto','自动'],'pref.theme_system':['System','跟随系统'],'pref.theme_light':['Light','浅色'],'pref.theme_dark':['Dark','深色'],

/* kinds and navigation */
'kind.a1':['A1 Air Purifier','A1 空气净化器'],'kind.m1':['M1 Air Monitor','M1 空气质量检测器'],'kind.tc1':['TC1 Power Strip','TC1 智能插座'],
'nav.home':['Home','首页'],'nav.settings':['Settings','设置'],
'grp.network':['Network','网络'],'grp.device':['Device','设备'],'grp.auto':['Automation','自动化'],'grp.system':['System','系统'],
'nav.wifi':['Wi-Fi','Wi-Fi'],'nav.mqtt':['MQTT / Home Assistant','MQTT / Home Assistant'],'nav.general':['General','通用'],'nav.light':['Light effects','灯效'],
'nav.binding':['Linked M1','绑定 M1'],'nav.linkage':['Auto control','自动联动'],'nav.schedule':['Schedules','定时任务'],'nav.sleep':['Night mode','夜间模式'],
'nav.buttons':['Button events','按键事件'],'nav.permission':['Linkage access','联动许可'],
'nav.firmware':['Firmware','固件升级'],'nav.diagnostics':['Diagnostics','诊断'],'nav.logs':['Logs','日志'],'nav.maintenance':['Restart & reset','重启与恢复'],
/* header */
'chip.wifi':['Wi-Fi','Wi-Fi'],'chip.hotspot':['Setup hotspot','配网热点'],'chip.mqtt':['MQTT','MQTT'],'chip.firmware':['Firmware','固件'],'chip.clock':['Clock not synced','时钟未校准'],
'state.connected':['Connected','已连接'],'state.connecting':['Connecting…','连接中…'],'state.disconnected':['Disconnected','未连接'],'state.hotspot':['Setup hotspot on','配网热点已开启'],
'state.off':['Off','关闭'],'state.ready':['Ready','就绪'],'state.ok':['Normal','正常'],
'banner.lost':['Lost connection to the device. If it is updating, wait for it to restart.','与设备的连接已中断。如正在升级，请等待设备重启。'],
'banner.ota':['Firmware update in progress ({p}%). Controls are paused.','正在升级固件（{p}%），控制暂不可用。'],
'banner.rebooting':['The device is restarting.','设备正在重启。'],
'banner.cleanup':['Old Home Assistant entities could not be removed. Delete them on the previous broker.','旧 HA 实体清理失败，请在原 Broker 上手动删除。'],
'banner.save_error':['Settings could not be saved: {e}','设置保存失败：{e}'],
'banner.hotspot':['Not connected to Wi-Fi. Setup hotspot "{n}" is on.','尚未连接 Wi-Fi，配网热点「{n}」已开启。'],
/* Wi-Fi */
'wifi.lead':['The device keeps its old network until the new one is verified.','新网络验证成功前，设备保持原有连接。'],
'wifi.status':['Status','状态'],'wifi.ssid':['Network name','网络名称'],'wifi.ip':['IP address','IP 地址'],'wifi.ap':['Hotspot','热点名称'],'wifi.saved_password':['Password saved','已保存密码'],
'wifi.change':['Change network','更换网络'],'wifi.scan':['Scan','扫描'],'wifi.password':['Password','密码'],'wifi.pass_ph':['Leave empty to keep the saved password','同一网络留空则保留原密码'],
'wifi.open':['This network has no password','此网络没有密码'],'wifi.open_badge':['Open','开放'],'wifi.save':['Verify and save','验证并保存'],
'wifi.verifying':['Verifying… the device saves only after it gets an IP','验证中…取得 IP 后才会保存'],
'wifi.hint':['The new network is saved only after the device joins it and gets an IP address. If that does not happen within 30 s, it returns to the previous network.','设备连上新网络并取得 IP 后才保存；30 秒内失败则恢复之前的网络。'],
'wifi.none':['No networks found. Type the name instead.','未发现网络，可手动填写名称'],'wifi.scan_timeout':['Scan timed out','扫描超时'],
'wifi.signal.0':['Very weak','信号很弱'],'wifi.signal.1':['Weak','信号弱'],'wifi.signal.2':['Good','信号良好'],'wifi.signal.3':['Strong','信号强'],
/* MQTT */
'mqtt.lead':['Connect a broker to use Home Assistant or the TMCP cloud.','连接 Broker 后可接入 Home Assistant 或 TMCP 云平台。'],
'mqtt.status':['Status','状态'],'mqtt.broker':['Broker','Broker'],'mqtt.host':['Broker address','Broker 地址'],'mqtt.host_ph':['IP or domain — empty disables MQTT','IP 或域名；留空则停用'],
'mqtt.port':['Port','端口'],'mqtt.user':['Username','用户名'],'mqtt.password':['Password','密码'],'mqtt.pass_ph':['Leave empty to keep','留空保留原密码'],
'mqtt.mode':['Topic mode','主题模式'],'mqtt.mode_legacy':['Legacy','Legacy'],
'mqtt.mode_tmcp':['TMCP','TMCP'],'mqtt.mode_tmcp_desc':['TMCP — joins your cloud list automatically','TMCP — 上线后自动加入云端列表'],
'mqtt.mode_hint':['Changing the account tries to remove the old Home Assistant entities. If that fails, delete them on the old broker.','切换账户会尝试清理旧 HA 实体，失败时需在旧 Broker 手动清理。'],
'mqtt.clear':['Clear saved password','清除已保存的密码'],'mqtt.clear_desc':['Connect without a password','以无密码方式连接'],
'mqtt.too_long':['Username max 63 bytes, password max 256 bytes','用户名最多 63 字节，密码最多 256 字节'],
'mqtt.ha_a1':['Home Assistant creates the purifier, RGB light ring, child lock and always-on switches automatically.','Home Assistant 会自动创建净化器、RGB 灯环、童锁和常亮开关。'],
'mqtt.ha_m1':['Home Assistant creates four sensors and a screen brightness control automatically.','Home Assistant 会自动创建四项传感器和屏幕亮度控制。'],
'mqtt.ha_tc1':['Home Assistant creates six sockets, power, indicator and child lock entities automatically.','Home Assistant 会自动创建六路插座、功率、指示灯和童锁。'],
/* General */
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],'gen.default_name':['Restore default name','恢复默认名称'],
'gen.name_long':['Name is limited to 63 bytes','名称最多 63 字节'],'gen.device_id':['MAC','MAC 地址'],'gen.uptime':['Running for','已运行'],
'auth.title':['Web access','访问认证'],'auth.lead':['Protect this page with a password (username: admin).','为本页面设置密码（用户名 admin）。'],
'auth.password':['Web password','网页密码'],'auth.ph':['8–32 characters; empty turns it off','8–32 个字符；留空关闭认证'],
'auth.help':['Your browser will ask you to sign in again after it changes.','修改后浏览器会要求重新登录。'],'auth.set':['Set password','设置密码'],
'auth.on':['Protected','已启用'],'auth.off':['Not protected','未启用'],'auth.invalid':['Use 8–32 printable ASCII characters','请使用 8–32 个可打印 ASCII 字符'],
'clock.title':['Clock','时钟'],'clock.tz':['Time zone','时区'],'clock.ntp':['NTP server','NTP 服务器'],'clock.synced':['Clock','校时状态'],'clock.last':['Last sync','最近校时'],
'clock.hint':['Domain or IPv4 only, without protocol or port. If it fails the device tries Aliyun, Tencent and public NTP pools; it re-syncs hourly and retries after 60 s on failure.','只填域名或 IPv4，不含协议和端口。失败后自动尝试阿里、腾讯及公共 NTP 池；每小时校时，失败 60 秒后重试。'],
'tz.cn':['Beijing','北京'],
/* Firmware */
'fw.lead':['Updates keep Wi-Fi, MQTT and device settings.','升级会保留 Wi-Fi、MQTT 和设备设置。'],'fw.version':['Installed version','当前版本'],'fw.state':['Update status','升级状态'],'fw.error':['Last error','最近错误'],
'fw.install':['Install update','安装更新'],'fw.tab_file':['Upload file','上传文件'],'fw.tab_url':['From URL','从网址下载'],
'fw.file':['Signed {m} OTA file','{m} 签名 OTA 文件'],'fw.url':['Direct link (HTTP)','更新文件直链（HTTP）'],'fw.upload':['Upload and install','上传并升级'],'fw.download':['Download and install','下载并升级'],
'fw.unsigned':['Allow unsigned firmware','允许未签名的固件'],'fw.unsigned_desc':['Rescue only. The image is still checked for this device.','仅用于救援；仍会检查是否适用于本设备。'],
'fw.unsigned_confirm':['Unsigned firmware is not verified. Only continue if you trust the file.','未签名的固件不会校验来源，请确认文件可信后再继续。'],
'fw.uploading':['Uploading {p}%','正在上传 {p}%'],'fw.progress':['Installing {p}%','正在安装 {p}%'],'fw.preview_done':['Preview only: no file was sent.','预览模式：未实际发送文件。'],
'fw.hint_a1':['Choose an A1 OTA package from this project. The device restarts after verification.','请选择本项目的 A1 OTA 包，校验成功后自动重启。'],
'fw.hint_m1':['Choose an M1 OTA package from this project. The device restarts after verification.','请选择本项目的 M1 OTA 包，校验成功后自动重启。'],
'fw.hint_tc1':['Choose a TC1 OTA package from this project. The device restarts after verification.','请选择本项目的 TC1 OTA 包，校验成功后自动重启。'],
/* Diagnostics */
'diag.lead':['A health summary first; raw values below for troubleshooting.','先看健康摘要，下方为排障用的原始数值。'],'diag.health':['Health','健康状态'],'diag.details':['Details','详细状态'],
'diag.raw':['Raw JSON','原始 JSON'],'diag.updated':['Last read {t}','最近读取 {t}'],'diag.errors':['{n} errors','{n} 次错误'],'diag.logs':['System log','系统日志'],'logs.lead':['Device log records the last events of this run.','设备日志记录本次运行的最近事件。'],'logs.hint':['Only the most recent events from this run are kept; they are cleared on restart.','仅保留本次运行的最近事件，重启后清空。'],'logs.load_all':['Load all','读取全部'],'logs.download':['Download','下载'],'logs.empty':['No events yet','暂无事件'],'logs.overwritten':['Older entries were overwritten','较早的日志已被覆盖'],'diag.log_refresh':['Refresh','刷新'],
'diag.c_wifi':['Wi-Fi','Wi-Fi'],'diag.c_mqtt':['MQTT','MQTT'],'diag.c_ota':['Firmware update','固件升级'],'diag.c_panel':['Control panel','控制面板'],'diag.c_fan':['Fan driver','风机驱动'],
'diag.c_storage':['Settings storage','配置存储'],'diag.c_sensor':['Sensor','传感器'],'diag.c_clock':['Clock','时钟'],'diag.c_memory':['Free memory','可用内存'],
'diag.g_device':['Device','设备'],'diag.g_network':['Network','网络连接'],'diag.g_mqtt':['MQTT','MQTT'],'diag.g_ota':['Firmware update','固件升级'],'diag.g_fan':['Fan & panel','风机与面板'],
'diag.g_light':['Light ring','灯环'],'diag.g_sensor':['Sensor','传感器'],'diag.g_clock':['Clock','时钟'],'diag.g_screen':['Screen','屏幕'],'diag.g_sockets':['Sockets','插座'],
'diag.g_power':['Metering','计量'],'diag.g_time':['Clock','时钟'],'diag.g_lan':['LAN','局域网'],'diag.g_other':['Other','其他'],
/* Maintenance */
'sys.lead':['Restart the device or return it to defaults.','重启设备或恢复默认配置。'],'sys.reboot':['Restart','重启设备'],'sys.reboot_desc':['Settings are kept.','设置保留不变。'],
'sys.reboot_q':['Restart {m}?','重启 {m}？'],'sys.reboot_body':['The page reconnects when the device is back.','设备恢复后页面会自动重新连接。'],
'sys.reset':['Reset to defaults','恢复默认配置'],'sys.reset_desc':['Clears Wi-Fi, MQTT, password and all settings.','清除 Wi-Fi、MQTT、网页密码及全部设置。'],
'sys.reset_q':['Erase all settings?','清除全部配置？'],'sys.reset_body':['The device restarts with the setup hotspot. This cannot be undone.','设备将重启并开启配网热点，此操作无法撤销。'],
'sys.hint_a1':['On the device: hold the function key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything. Works even with child lock on.','设备上：功能键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置；童锁期间同样有效。'],
'sys.hint_m1':['On the device: a long press of the panel key clears Wi-Fi and the web password.','设备上：长按面板按键可清除 Wi-Fi 和网页密码。'],
'sys.hint_tc1':['On the device: hold the key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything (all sockets default to on).','设备上：按键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置（六路默认开启）。'],
/* Air quality */
'm.pm25':['PM2.5','PM2.5'],'m.formaldehyde':['Formaldehyde','甲醛'],'m.temperature':['Temperature','温度'],'m.humidity':['Humidity','湿度'],
'air.pm25.excellent':['Excellent','优'],'air.pm25.good':['Good','良'],'air.pm25.light':['Light pollution','轻度污染'],'air.pm25.moderate':['Moderate pollution','中度污染'],'air.pm25.heavy':['Heavy pollution','重度污染'],'air.pm25.severe':['Severe pollution','严重污染'],
'air.formaldehyde.pass':['Within limit','达标'],'air.formaldehyde.slight':['Slightly high','略高'],'air.formaldehyde.exceed':['Over limit','超标'],
'air.temperature.cool':['Cool','偏冷'],'air.temperature.comfort':['Comfortable','舒适'],'air.temperature.warm':['Warm','偏热'],
'air.humidity.dry':['Dry','偏干'],'air.humidity.comfort':['Comfortable','舒适'],'air.humidity.humid':['Humid','偏湿'],
/* A1 home */
'a1.fan':['Purifier','净化器'],'a1.power':['Power','电源'],'a1.running':['Running','运行中'],'a1.off':['Off','已关闭'],
'a1.sub_manual':['{p}% · manual','{p}% · 手动'],'a1.sub_auto':['{p}% · following M1','{p}% · 跟随 M1 自动调节'],'a1.sub_off':['Starts at {p}% when turned on','开启后以 {p}% 运行'],
'a1.locked_ota':['Controls paused during update or restart','升级或重启期间暂停控制'],
'a1.speed':['Fan speed','风速'],'a1.feedback_target':['Target speed','目标速度'],'a1.feedback_pwm':['Current output','当前输出'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
'a1.out_stopped':['Fan stopped','风机已停止'],'a1.out_ramp':['Output {a}% → ramping to {p}%','实际输出 {a}%，正在调整到 {p}%'],'a1.out_steady':['Output {a}%','实际输出 {a}%'],
'a1.fan_hint':['Output is the PWM level the firmware applies; the fan ramps gradually and has no speed sensor. Choosing a speed also turns the purifier on.','“实际输出”为软件 PWM 设定，风机逐步调整，设备没有转速回读。选择风速会同时开启净化器。'],
'a1.panel':['Panel','面板'],'a1.panel_ok':['Panel connected','面板通信正常'],'a1.panel_bad':['Panel not responding','面板无响应'],
'a1.child_lock':['Child lock','童锁'],'a1.child_lock_desc':['Locks power and speed keys on the device','锁定机身电源和调速按键'],'a1.lock_on':['Child lock on','童锁已开启'],'a1.lock_off':['Child lock off','童锁已关闭'],
'a1.button_hint':['Hold the Wi-Fi key for 2.5 s to open the setup hotspot; this works with child lock on.','长按 Wi-Fi 键 2.5 秒可开启配网热点，童锁期间仍可使用。'],
'a1.auto':['Auto control','自动联动'],'a1.auto_lead':['Adjusts the fan from linked M1 readings','根据绑定的 M1 读数调节风速'],
'a1.auto_empty':['No M1 is linked yet. Link one to run the purifier automatically.','尚未绑定 M1，绑定后可按空气质量自动运行。'],'a1.auto_link':['Link an M1','绑定 M1'],
'a1.auto_enable':['Turn on auto control','开启自动联动'],'a1.auto_peers':['{n} M1 · {f} reporting','{n} 台 M1 · {f} 台有数据'],
'a1.auto_failed':['No fresh M1 data. The fan keeps its current state.','暂无有效的 M1 数据，风机保持当前状态。'],'a1.auto_speed':['Auto speed {p}%','自动风速 {p}%'],
's.link_disabled':['Off','未开启'],'s.link_active':['Active','运行中'],'s.link_sensor_failed':['No data','无数据'],
'a1.ring':['Light ring','灯环'],'a1.ring_on':['Light ring','启用灯环'],'a1.always_on':['Always on','常亮'],'a1.always_on_desc':['Otherwise it lights for 2 s after each change','否则仅在操作后亮 2 秒'],
'a1.color':['Colour','颜色'],'a1.brightness':['Brightness','亮度'],'a1.effect_note':['Effect: {e}.','当前灯效：{e}。'],'a1.effect_change':['Change','更改'],
'a1.effect.0':['Speed bar','风速条'],'a1.effect.1':['Solid colour','固定颜色'],'a1.effect.2':['Breathing','呼吸'],'a1.effect.3':['Rainbow','彩虹'],'a1.effect.4':['Data segments','分段数据'],
'a1.effect_desc.0':['Ring length follows fan speed','灯环长度跟随风速'],'a1.effect_desc.1':['Whole ring in one colour','整圈单色'],'a1.effect_desc.2':['Slow fade in and out','缓慢明暗变化'],
'a1.effect_desc.3':['Cycling colours','循环彩色'],'a1.effect_desc.4':['Each segment shows a reading','每段显示一项读数'],
/* A1 light effects page */
'fx.lead':['How the ring looks. Colour and brightness are set on the home page.','设置灯环的显示方式；颜色和亮度在首页调整。'],'fx.effect':['Effect','灯效'],
'fx.follow':['Brightness follows fan speed','亮度随风速变化'],'fx.follow_desc':['Dimmer at low speed','低风速时更暗'],'fx.count':['Segments','分段数量'],'fx.segment':['Segment {n}','第 {n} 段'],
'fx.source':['Shows','显示内容'],'fx.display':['Style','显示方式'],'fx.range':['Range','数值范围'],'fx.comfort':['comfortable','适宜区间'],
'fx.low':['Low','偏低'],'fx.ok':['Comfortable','适宜'],'fx.high':['High','偏高'],
'fx.src.0':['Temperature','温度'],'fx.src.1':['Humidity','湿度'],'fx.src.2':['PM2.5','PM2.5'],'fx.src.3':['Formaldehyde','甲醛'],'fx.src.4':['Overall air quality','综合空气质量'],'fx.src.5':['Fan speed','风速'],
'fx.disp.0':['Fixed colour, brightness by value','固定颜色 + 数值亮度'],'fx.disp.1':['Comfort colour, fixed brightness','适宜程度颜色 + 固定亮度'],'fx.disp.2':['Comfort colour, brightness by value','适宜程度颜色 + 数值亮度'],
'fx.quality_hint':['Baselines used to compute "overall air quality".','用于计算“综合空气质量”的基准值。'],'fx.quality_pm':['PM2.5 baseline','PM2.5 基准'],'fx.quality_hcho':['Formaldehyde baseline','甲醛基准'],
/* A1 binding */
'bind.lead':['Link M1 monitors so the purifier can react to their readings.','绑定 M1 后，净化器可根据其读数自动运行。'],'bind.sensors':['Linked M1 monitors','已绑定的 M1'],
'bind.empty':['No M1 linked','尚未绑定 M1'],'bind.add':['Add an M1','添加 M1'],'bind.mac':['M1 MAC address','M1 的 MAC 地址'],'bind.ip':['LAN IP (optional)','局域网 IP（可选）'],'bind.ip_ph':['Found via MQTT if empty','留空则通过 MQTT 查找'],
'bind.ip_auto':['IP found via MQTT','IP 通过 MQTT 获取'],'bind.add_btn':['Add M1','添加'],'bind.added':['Added','已添加'],'bind.bad_mac':['Enter a 12-digit MAC address','请输入 12 位 MAC 地址'],'bind.dup':['Already in the list','已在列表中'],
'bind.pending':['Handshaking','握手中'],'bind.fresh':['Receiving data','数据正常'],'bind.stale':['No data','无数据'],'bind.probe':['Probe LAN','探测局域网'],'bind.probe_sent':['Probe sent','已发送探测'],
'bind.remove_q':['Remove this device?','移除此设备？'],'bind.remove_body':['{m} will no longer be linked.','{m} 将解除关联。'],
'bind.ids_title':['Next: allow this A1 on the M1','下一步：在 M1 上允许本机'],'bind.ids_body':['Copy the pairing ID to the M1 page → Settings → Linkage access.','复制以下配对 ID，粘贴到 M1 页面 → 设置 → 联动许可。'],
'bind.force':['Always use MQTT','强制使用 MQTT'],'bind.force_desc':['Skip the LAN connection','不使用局域网直连'],'bind.recovery':['Retry LAN automatically','自动检查局域网恢复'],'bind.recovery_desc':['Switch back to LAN when it recovers','恢复后切回局域网'],
'bind.timeout':['LAN timeout','局域网超时'],'bind.recovery_s':['Retry interval','恢复检查间隔'],
'bind.hint':['Both devices must use the same MQTT broker. The A1 prefers the LAN and falls back to MQTT.','两台设备需使用同一个 MQTT Broker。A1 优先局域网直连，失败时回退 MQTT。'],
'bind.group':['Purifier group','净化器组'],'bind.group_lead':['Run several A1 units as one. Enter the same name and member list on every A1.','多台 A1 作为一组运行；每台 A1 需填写相同的组名称和成员列表。'],
'bind.group_name':['Group name','组名称'],'bind.group_ph':['Empty = standalone','留空为独立设备'],'bind.member_add':['Add member','添加成员'],
/* A1 linkage */
'link.lead':['Rules that turn the purifier on, off and set its speed from M1 readings.','根据 M1 读数开关净化器并调节风速的规则。'],
'link.enable':['Automatic control','自动联动'],'link.enable_desc':['Manual control still works at any time','随时仍可手动控制'],
'link.no_peer':['Link an M1 first.','请先绑定 M1。'],'link.speed':['Fan speed','风速调节'],'link.metric':['Based on','依据指标'],'link.both':['Both','两者'],
'link.mode.0':['Fixed','固定风速'],'link.mode.1':['Proportional','线性调节'],'link.mode.2':['Target (PID)','目标值（PID）'],
'link.mode_desc.0':['Always the same speed','始终同一风速'],'link.mode_desc.1':['Faster as air gets worse','空气越差风速越高'],'link.mode_desc.2':['Hold a target level','维持在目标值'],
'link.fixed':['Speed','风速'],'link.lin_pm_a':['PM2.5 at','PM2.5 为'],'link.lin_hcho_a':['Formaldehyde at','甲醛为'],'link.lin_b':['→','时风速'],'link.lin_c':[', at',' ；为'],
'link.pid_pm':['Keep PM2.5 at','PM2.5 保持在'],'link.pid_hcho':['Keep formaldehyde at','甲醛保持在'],'link.range':['Speed between','风速范围'],'link.pid_tune':['PID tuning','PID 参数'],
'link.onoff':['Start and stop','自动启停'],'link.onoff_lead':['Keep the stop level below the start level to avoid rapid switching.','关闭阈值应低于启动阈值，避免频繁开关。'],
'link.on_rule':['Start automatically','自动开启'],'link.on_desc':['Turn on when air gets worse','空气变差时开启'],'link.off_rule':['Stop automatically','自动关闭'],'link.off_desc':['Turn off when air is clean','空气变好时关闭'],
'link.watch':['Watch','监测'],'link.any':['Any','任一满足'],'link.all':['All','全部满足'],'link.above':['above','高于'],'link.below':['below','低于'],
'link.hyst_warn':['The stop level should be lower than the start level.','关闭阈值应低于启动阈值。'],
'link.statistic':['With several M1','多台 M1 时取'],'link.debounce':['Condition must last','条件持续'],'link.min_switch':['Minimum time between on/off','最短开关间隔'],
'link.stat.0':['Average','平均值'],'link.stat.1':['Highest','最高值'],'link.stat.2':['Lowest','最低值'],'link.stat.3':['Median (more than 3)','中位数（多于 3 台）'],'link.stat.4':['Average without extremes','去掉最高最低后平均'],'link.stat.5':['First available in list','按列表顺序故障切换'],
/* Schedules / night */
'sch.lead_a1':['Turn the purifier on or off at set times.','在设定时间开启或关闭净化器。'],'sch.lead_tc1':['Switch sockets at set times (Beijing time).','在设定时间开关插座（北京时间）。'],
'sch.list':['Schedules','定时任务'],'sch.empty':['No schedules yet','暂无定时任务'],'sch.used':['{a} of {b} used','已使用 {a} / {b}'],'sch.off':['off','已停用'],'sch.hint':['Weekly events run in the device time zone and are not replayed after a missed window; a restart runs last.','每周任务按设备时区执行，错过的时段不补执行；重启类操作最后执行。'],'sch.add':['New schedule','新建定时'],'sch.time':['Time','时间'],'sch.date':['Date','日期'],
'sch.repeat':['Repeat','重复'],'sch.action':['Action','动作'],'sch.target':['Target','对象'],'sch.turn_on':['Turn on','开启'],'sch.turn_off':['Turn off','关闭'],'sch.weekly':['Weekly','每周'],
'sch.add_btn':['Add schedule','添加'],'sch.added':['Saved','已保存'],'sch.reset':['Clear form','清空表单'],'sch.when':['Date and time (device time zone)','执行日期与时间（设备时区）'],'sch.pick_day':['Pick at least one day','请至少选择一天'],'sch.future':['Pick a time in the future','请选择未来的时间'],
'sch.fan_on':['Turn on at {p}%','开启，风速 {p}%'],'sch.fan_off':['Turn off','关闭'],'sch.no_clock':['The clock is not synced yet; schedules will not run until it is.','时钟尚未校准，校准前定时任务不会执行。'],
'day.short.0':['Mon','一'],'day.short.1':['Tue','二'],'day.short.2':['Wed','三'],'day.short.3':['Thu','四'],'day.short.4':['Fri','五'],'day.short.5':['Sat','六'],'day.short.6':['Sun','日'],
'day.every':['Every day','每天'],'day.weekdays':['Weekdays','工作日'],'day.weekends':['Weekends','周末'],'day.once':['Once','仅一次'],
'night.lead':['Quieter fan and dimmer light during set hours.','在设定时段降低风速与灯光。'],'night.list':['Night periods','夜间时段'],'night.empty':['No night periods','暂无夜间时段'],
'night.add':['New night period','新建夜间时段'],'night.start':['From','开始'],'night.end':['Until','结束'],'night.next_day':['(next day)','（次日）'],
'night.fan':['Limit fan speed','限制风速'],'night.fan_desc':['Cap the speed during this period','时段内限制最高风速'],'night.fan_max':['Max speed','最高风速'],
'night.light':['Dim the light ring','调暗灯环'],'night.light_desc':['Cap brightness, 0 turns it off','限制亮度，0 为关闭'],'night.light_max':['Max brightness','亮度上限'],
'night.block_t':['Don’t auto-start','禁止自动开启'],'night.block_desc':['Auto control cannot turn the purifier on','自动联动不会开启净化器'],
'night.fan_cap':['Fan ≤ {p}%','风速 ≤ {p}%'],'night.light_cap':['Light ≤ {p}%','灯光 ≤ {p}%'],'night.light_off':['Light off','灯光关闭'],'night.block':['No auto-start','禁止自动开启'],'night.add_btn':['Add period','添加'],
/* M1 */
'm1.overall':['Air quality','空气质量'],'m1.v_excellent':['Excellent','优'],'m1.v_good':['Good','良好'],'m1.v_fair':['Fair','一般'],'m1.v_poor':['Poor','较差'],
'm1.all_ok':['All readings are in range','各项读数均在适宜范围'],'m1.no_data':['No data','暂无数据'],'m1.stale':['Data is out of date','数据已过期'],
'm1.stale_hint':['The sensor has not reported recently. Check Diagnostics.','传感器近期未上报，请查看诊断。'],'m1.updated':['Updated {n} s ago','{n} 秒前更新'],
'm1.screen':['Screen brightness','屏幕亮度'],'m1.screen_desc':['Shows the last level sent; the screen does not report it back','显示最近发送的档位，屏幕不回报实际亮度'],
'm1.linked':['Linked purifiers','联动的净化器'],'m1.linked_desc':['A1 units allowed to read this monitor','允许读取本机数据的 A1'],'m1.linked_empty':['No A1 is allowed yet','尚未允许任何 A1'],
'm1.allow_btn':['Allow an A1','添加许可'],'m1.session_ok':['Connected','已连接'],'m1.session_wait':['Waiting for A1','等待 A1 连接'],
'm1.perm_lead':['This M1 only answers A1 units listed here. Rules and fan control are set on the A1.','本机只响应此处允许的 A1；联动规则和风速控制在 A1 上设置。'],
'm1.allowed':['Allowed A1 units','已允许的 A1'],'m1.allowed_empty':['None yet','暂无'],'m1.allow_add':['Allow an A1','添加许可'],'m1.pair_id':['Pairing ID from the A1','A1 生成的配对 ID'],
'm1.pair_help':['On the A1: Settings → Linked M1 → add this M1, then copy the ID shown.','在 A1：设置 → 绑定 M1 → 添加本机后复制显示的配对 ID。'],
'm1.pair_bad':['Format: a1mac:m1mac (12 hex digits each)','格式：A1 的 MAC:M1 的 MAC（各 12 位十六进制）'],'m1.pair_other':['This ID is for a different M1','该配对 ID 属于另一台 M1'],
'm1.perm_hint':['Up to 8 entries. Both devices must use the same MQTT broker.','最多 8 个。两台设备需使用同一个 MQTT Broker。'],
/* TC1 */
'control.pending':['Waiting for device confirmation','等待设备确认中'],'control.unconfirmed':['Operation not confirmed; showing the latest device state','操作尚未确认，已恢复最近设备状态'],'control.syncing':['Confirming…','确认中…'],
 'tc1.sockets':['Sockets','插座'],'tc1.on_count':['{n} of 6 on','6 路中 {n} 路通电'],'tc1.all_on':['All on','全部开启'],'tc1.all_off':['All off','全部关闭'],
'tc1.on':['On','通电'],'tc1.off':['Off','断开'],'tc1.rename':['Rename','重命名'],'tc1.socket_n':['Socket {n}','插座 {n}'],
'tc1.output_hint':['Shows the output the strip has set; check the load to confirm power.','显示设备的输出设定，实际供电请以负载为准。'],
'tc1.power':['Power','功率'],'tc1.recent':['Recent samples','最近采样'],'tc1.energy':['Energy since start','累计电量'],'tc1.peak':['Recent peak','近期峰值'],
'tc1.lock_desc':['Disables the key on the strip','锁定机身按键'],'tc1.led':['Indicator light','指示灯'],'tc1.led_desc':['Status light on the strip','机身状态指示灯'],
'tc1.names':['Socket names','插座名称'],'tc1.names_desc':['Shown here and in Home Assistant','在本页和 Home Assistant 中显示'],
'tc1.metering':['Reporting & metering','上报与计量'],'tc1.report':['MQTT report interval','MQTT 上报间隔'],'tc1.report_help':['How often power is published to MQTT (1–3600 s).','功率发布到 MQTT 的频率（1–3600 秒）。'],
'tc1.calibration':['Calibration','计量校准'],'tc1.coef':['Power coefficient','功率系数'],'tc1.coef_warn':['Only change this with a known calibration value. An idle reading cannot verify accuracy.','仅在已知校准值时修改；空载读数无法验证计量精度。'],
'btn.lead':['See each gesture and its action. Expand a range to edit individual gestures.','按手势查看实际动作；相同动作合并显示，展开后可逐条编辑。'],'btn.current':['What each gesture does','按下后会发生什么'],
'btn.click_count':['Number of presses','连按次数'],'btn.hold_count':['Hold duration (seconds)','按住时长（秒）'],
'btn.single':['Single press','单击'],'btn.click_full':['Press {n} times','连按 {n} 次'],'btn.hold_full':['Hold {n} seconds','长按 {n} 秒'],
'btn.click_range':['Press {a}–{b} times','连按 {a}～{b} 次'],'btn.hold_range':['Hold {a}–{b} seconds','长按 {a}～{b} 秒'],
'btn.expand':['Expand to edit','展开编辑'],'btn.recovery':['Recovery gestures · fixed','恢复操作 · 固定功能'],'btn.reset_wifi':['Reset network settings','重置网络配置'],
'btn.n':['#','序号'],'btn.click':['Click','连击'],'btn.hold':['Hold','长按'],'btn.click_n':['×{n}','{n} 次'],'btn.hold_n':['{n} s','{n} 秒'],'btn.empty':['No custom events','暂无自定义事件'],
'btn.edit':['Set an event','设置事件'],'btn.kind':['Gesture','手势'],'btn.count':['Clicks / seconds','次数 / 秒数'],'btn.action':['Action','动作'],
'btn.reset_note':['Holding 5–10 s or over 10 s always triggers the recovery reset, regardless of mapping.','按住 5–10 秒或 10 秒以上固定触发恢复操作，不受映射影响。'],
'op.none':['Not set','未配置'],'op.g_switch':['Switch','开关'],'op.g_system':['System','系统'],'op.0':['All sockets','全部插座'],'op.7':['Indicator light','指示灯'],'op.8':['Restart device','重启设备'],
'op.9':['Open setup hotspot','开启配网热点'],'op.10':['Factory reset','恢复出厂设置'],'op.11':['Child lock','童锁'],'op.12':['Restart web service','重启网页服务'],'op.13':['Soft restart','软件重启'],
/* status values (from the shared diagnostics vocabulary) */
'sch.state.waiting':['Waiting','等待执行'],'sch.state.executed':['Executed','已执行'],'sch.state.missed':['Missed','已错过'],'sch.state.busy':['Skipped (busy)','设备忙，已跳过'],'sch.state.migration_disabled':['Disabled (old config)','旧配置不支持，已停用'],'s.ready':['Ready','就绪'],'s.disconnected':['Disconnected','未连接'],'s.connecting':['Connecting','连接中'],'s.synced':['Synced','校时成功'],'s.syncing':['Syncing','正在校时'],
's.waiting_network':['Waiting for network','等待网络'],'s.failed':['Failed','校时失败'],'s.screen_queue_failed':['Synced; screen update failed','网络校时成功，屏幕入队失败'],
's.idle':['Idle','空闲'],'s.pending':['Pending','等待验证'],'s.success':['Verified and saved','验证成功并已保存'],'s.storage_failure':['Save failed, rolled back','保存失败，已回滚'],
's.timeout_rollback':['Timed out, rolled back','连接超时，已回滚'],'s.legacy':['legacy','legacy'],'s.account':['TMCP','TMCP'],'s.downloading':['Downloading','下载中'],
/* diagnostic labels */
'd.wifi_trial_status':['Wi-Fi trial','Wi-Fi 试连状态'],'d.wifi_trial_active':['Verifying Wi-Fi','正在验证 Wi-Fi'],'d.uptime_seconds':['Uptime','运行时间'],'d.free_memory':['Free memory','可用内存'],
'd.child_lock':['Child lock','童锁'],'d.led_enabled':['Light enabled','启用指示灯'],'d.socket_names':['Socket names','插座名称'],'d.socket_states':['Socket outputs','插座输出'],
'd.time_synced':['Clock synced','时钟已校准'],'d.utc_time':['Device time','设备时间'],'d.fan_on':['Fan on','风机开启'],'d.speed':['Saved speed','风速'],'d.percentage':['Target speed','目标风速'],
'd.applied_speed':['Output speed','实际输出'],'d.requested_fan_on':['Requested on','请求开启'],'d.requested_speed':['Requested speed','请求风速'],'d.fan_ready':['Fan driver ready','风机驱动就绪'],
'd.panel_ready':['Panel OK','面板通信正常'],'d.panel_errors':['Panel errors','面板通信错误数'],'d.hardware_errors':['Hardware errors','硬件错误数'],'d.panel_raw':['Panel raw','面板原始数据'],
'd.version':['Firmware','固件版本'],'d.device_id':['Device ID','设备 ID'],'d.name':['Name','设备名称'],'d.ssid':['Network','网络名称'],'d.ip':['IP address','IP 地址'],
'd.wifi_connected':['Wi-Fi connected','Wi-Fi 已连接'],'d.ap_active':['Hotspot on','配网热点已开启'],'d.ap_name':['Hotspot name','热点名称'],'d.mqtt_connected':['MQTT connected','MQTT 已连接'],
'd.mqtt_status':['MQTT status','MQTT 状态'],'d.mqtt_host':['Broker','Broker 地址'],'d.mqtt_port':['Port','MQTT 端口'],'d.mqtt_user':['Username','MQTT 用户名'],'d.mqtt_topic_mode':['Topic mode','主题模式'],
'd.mqtt_errors':['MQTT errors','MQTT 错误次数'],'d.mqtt_last_error':['Last MQTT error','最近 MQTT 错误'],'d.mqtt_cleanup_warning':['HA cleanup failed','旧 HA 实体清理异常'],
'd.sensor_valid':['Sensor data valid','传感器数据有效'],'d.sensor_received':['Sensor data received','已收到传感器数据'],'d.age_ms':['Data age','数据距今'],
'd.temperature':['Temperature (℃)','温度（℃）'],'d.humidity':['Humidity (%)','湿度（%）'],'d.formaldehyde':['Formaldehyde (mg/m³)','甲醛（mg/m³）'],'d.pm25':['PM2.5 (µg/m³)','PM2.5（µg/m³）'],
'd.uart_ready':['UART ready','串口已就绪'],'d.rx_frames':['Frames received','接收帧数'],'d.unknown_frames':['Unknown frames','未知帧数'],'d.uart_errors':['UART errors','串口错误数'],
'd.discarded_bytes':['Discarded bytes','丢弃字节数'],'d.last_frame':['Last frame (hex)','最近串口帧（HEX）'],'d.brightness_requested':['Requested brightness','请求亮度档位'],
'd.ota_active':['Updating','正在升级'],'d.ota_state':['Update state','升级状态'],'d.ota_error':['Update error','升级错误'],'d.ota_progress':['Update progress (%)','升级进度（%）'],
'd.scan_busy':['Scanning Wi-Fi','正在扫描 Wi-Fi'],'d.web_password_set':['Web password set','已设置网页密码'],'d.mqtt_password_set':['MQTT password set','已设置 MQTT 密码'],'d.wifi_password_set':['Wi-Fi password set','已保存 Wi-Fi 密码'],
'd.ntp_host':['Preferred NTP','首选 NTP 服务器'],'d.ntp_server':['Last NTP tried','最近尝试的校时源'],'d.ntp_status':['Sync status','校时状态'],'d.ntp_synced':['Synced this boot','本次启动已完成校时'],
'd.ntp_screen_queued':['Screen time queued','屏幕时间已入队'],'d.ntp_last_success':['Last sync','最近成功校时'],'d.ntp_next_seconds':['Next sync in (s)','下次校时（秒后）'],'d.timezone_minutes':['UTC offset (min)','时区（UTC 分钟差）'],
'd.led_visible':['Light showing','灯环显示中'],'d.led_always_on':['Always on','常亮'],'d.brightness':['Brightness','亮度'],'d.red':['Red','红'],'d.green':['Green','绿'],'d.blue':['Blue','蓝'],
'd.config_dirty':['Saving settings','设置保存中'],'d.save_error':['Save error','保存错误'],'d.reboot_pending':['Restart pending','等待重启'],
'd.report_seconds':['Report interval (s)','上报间隔（秒）'],'d.powerCoefficientX100':['Power coefficient (×100)','功率系数（×100）'],'d.mask':['Subnet mask','子网掩码'],'d.gateway':['Gateway','网关']
};
const KEY='phicomm.language';
let preference='auto';try{preference=localStorage.getItem(KEY)||'auto';}catch{}
const detect=()=>{for(const l of navigator.languages||[navigator.language||'en']){const s=l.toLowerCase();if(s.startsWith('zh'))return 'zh-CN';if(s.startsWith('en'))return 'en';}return 'en';};
const listeners=[];
const I18N={
 lang:preference==='auto'?detect():preference,preference,
 has:k=>Object.hasOwn(D,k),
 t(k,vars){const e=D[k];let s=e?e[I18N.lang==='zh-CN'?1:0]:k;if(!e)console.warn('i18n missing',k);
  if(vars)s=s.replace(/\\{(\\w+)\\}/g,(_,n)=>vars[n]??'');return s;},
 apply(root=document){
  document.documentElement.lang=I18N.lang;
  root.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18n)el.textContent=I18N.t(el.dataset.i18n);});
  root.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=I18N.t(el.dataset.i18nPh));
  root.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',I18N.t(el.dataset.i18nAria)));
 },
 set(p){I18N.preference=p;try{localStorage.setItem(KEY,p);}catch{}I18N.lang=p==='auto'?detect():p;I18N.apply();listeners.forEach(f=>f());},
 onChange:f=>listeners.push(f),
 keys:()=>Object.keys(D),
 extend:o=>Object.assign(D,o)
};
document.documentElement.lang=I18N.lang;
window.addEventListener('languagechange',()=>{if(I18N.preference==='auto')I18N.set('auto');});
window.I18N=I18N;
})();
<\/script>
<script>// Device service.js retains its HTTP-shaped API; transport is supplied by host.
(()=>{
 const pending=new Map();
 let activeRead=null;
 function send(id,entry){entry.sent=true;if(entry.read)activeRead=id;parent.postMessage({type:'device-command',id,request:entry.request},parent.location.origin);}
 function nextRead(){
  if(activeRead)return;
  const waiting=[...pending].filter(([,entry])=>entry.read&&!entry.sent);
  const next=waiting.find(([,entry])=>entry.request.action==='status.get')||waiting[0];
  if(next)send(...next);
 }
 function remove(id){const entry=pending.get(id);if(!entry)return;pending.delete(id);clearTimeout(entry.timer);entry.cleanup();if(activeRead===id)activeRead=null;}

 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  remove(event.data.id);
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));nextRead();
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{remove(id);clearTimeout(timer);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));nextRead();};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   const request=JSON.parse(options.body),entry={resolve,timer,cleanup,request,read:request.action.endsWith('.get'),sent:false};
   pending.set(id,entry);
   if(entry.read)nextRead();else send(id,entry);
  });
 };
})();
window.addEventListener('storage',event=>{
 if(event.key!=='phicomm.appearance')return;
 if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
 else document.documentElement.dataset.theme=event.newValue;
});
<\/script><script>async function command(action,params={}){
 const request={action,params};
 if(!action.endsWith('.get'))request.request_id=globalThis.crypto?.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
 const response=await fetch('/api/v1/command',{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify(request),cache:'no-store'});
 const reply=await response.json();
 if(!response.ok||!['ok','accepted'].includes(reply.code)){const error=Error(reply.message||reply.code||('HTTP '+response.status));error.code=reply.code;throw error;}
 return reply.data||{};
 }finally{clearTimeout(timer);}
}
async function api(path,data){
 if(path==='/status')return command('status.get');
 if(path==='/sensors/average')return command('sensors.average.get');
 if(path==='/power')return command('power.get');
 if(path==='/wifi/scan')return command(data===undefined?'wifi.scan.get':'wifi.scan');
 const domains={'/binding/config':'binding','/binding/status':'binding.status','/binding/probe':'binding.probe','/linkage/config':'linkage','/light/advanced':'light_effect','/sleep/config':'night','/time/config':'time'};
 if(domains[path])return command(domains[path]+(path==='/binding/probe'?'':data===undefined?'.get':'.set'),data||{});
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/outlet':'outlet.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
 if(direct[path]){if(['/light','/light/config'].includes(path)&&data.brightness!==undefined)data={...data,brightness:Math.round(data.brightness*100/255)};return command(direct[path],data);}
 if(path==='/display/brightness')return command('display.set',{brightness:data.level*25});
 if(path==='/socket'){for(let index=0;index<data.states.length;index++)await command('outlet.set',{index,on:!!data.states[index]});return {};}
 const sections={'/wifi/config':'wifi','/mqtt/config':'mqtt','/deviceName':'device','/auth/password':'auth','/socketNames':'socket','/mqtt/report/freq':'report','/power/coefficient':'meter','/ntp/config':'ntp'};
 if(sections[path]){
  let values={...data};
  if(path==='/power/coefficient')values={coefficient_x100:Number(data)};
  if(path==='/mqtt/config'){delete values.topic_mode;delete values.clear_password;if(data.clear_password)values.password='';else if(!values.password)delete values.password;}
  if(path==='/wifi/config'){delete values.open_network;if(data.open_network)values.password='';else if(!values.password)delete values.password;}
  return command('config.set',{section:sections[path],values});
 }
 throw Error('不支持的操作');
}
<\/script>
<script>/* Public provisioning contract. Passwords and session tokens are never encoded into a URL. */
(()=>{
'use strict';
const VERSION=1,TTL=120000;
const bytes=s=>new TextEncoder().encode(s).length;
function localHost(host){
 const h=host.toLowerCase().replace(/^\\[|\\]$/g,'');
 if(h==='localhost'||h==='::1')return true;
 if(h.includes(':'))return /^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(h);
 if(!/^\\d+\\.\\d+\\.\\d+\\.\\d+$/.test(h))return false;
 const p=h.split('.').map(Number);if(p.some(n=>n>255))return false;
 return p[0]===10||p[0]===127||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===169&&p[1]===254);
}
function deviceURL(raw){
 if(typeof raw!=='string'||!raw.trim()||raw.length>256)throw Error('device');
 const value=raw.trim(),url=new URL(value.includes('://')?value:'http://'+value);
 if(!['http:','https:'].includes(url.protocol)||!localHost(url.hostname)||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw Error('device');
 return url;
}
function platformOrigin(raw){
 const u=new URL(raw);
 if(raw!==u.origin||!(u.protocol==='https:'||(u.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(u.hostname))))throw Error('origin');
 return u.origin;
}
function nonce(){const a=new Uint8Array(32);crypto.getRandomValues(a);return Array.from(a,n=>n.toString(16).padStart(2,'0')).join('');}
function readTicket(hash,now=Date.now()){
 if(!hash.startsWith('#iotcloud-import='))return null;
 if(hash.length>2048)throw Error('ticket');
 const p=new URLSearchParams(hash.slice(1));
 if([...p.keys()].sort().join(',')!=='expires,host,iotcloud-import,origin,port,user')throw Error('ticket');
 const id=p.get('iotcloud-import'),expires=Number(p.get('expires')),origin=platformOrigin(p.get('origin'));
 if(!/^[a-f0-9]{64}$/.test(id)||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('ticket');
 const visible=config({v:VERSION,host:p.get('host'),port:Number(p.get('port')),user:p.get('user'),password:'',protocol:'tmcp',expires},now);
 return {id,expires,origin,host:visible.host,port:visible.port,user:visible.user};
}
function config(value,now=Date.now()){
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).sort().join(',')!=='expires,host,password,port,protocol,user,v')throw Error('config');
 const {v,host,port,user,password,protocol,expires}=value;
 if(v!==VERSION||protocol!=='tmcp'||typeof host!=='string'||!host||bytes(host)>127||!/^([a-zA-Z0-9.-]+|\\[[a-fA-F0-9:]+\\])$/.test(host)||host.startsWith('.')||host.endsWith('.')||typeof user!=='string'||bytes(user)>63||/[\\x00-\\x1f\\x7f]/.test(user)||typeof password!=='string'||bytes(password)>256||/[\\x00-\\x1f\\x7f]/.test(password)||!Number.isInteger(port)||port<1||port>65535||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('config');
 return {v,host,port,user,password,protocol,expires};
}
function packet(e,{source,origin,id,expires},type){
 const d=e.data;return Date.now()<expires&&e.source===source&&e.origin===origin&&!!d&&typeof d==='object'&&d.type===type&&d.id===id;
}
globalThis.IotProvision=Object.freeze({VERSION,TTL,deviceURL,platformOrigin,nonce,readTicket,config,packet});
})();
<\/script>
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
// Remove the non-secret handshake fragment before any async device requests.
let importTicket=null,importInvalid=false;
if(location.hash.startsWith('#iotcloud-import=')){
 try{importTicket=IotProvision.readTicket(location.hash);}catch{importInvalid=true;}
 history.replaceState(null,'',location.pathname+location.search+'#settings/mqtt');
}

function h(tag,props,...kids){
 const el=document.createElement(tag);
 for(const [k,v] of Object.entries(props||{})){
  if(v==null||v===false)continue;
  if(k==='class')el.className=v;
  else if(k==='i18n'){el.dataset.i18n=v;el.textContent=t(v);}
  else if(k.startsWith('on')&&typeof v==='function')el.addEventListener(k.slice(2),v);
  else if(k in el&&!k.includes('-'))el[k]=v;
  else el.setAttribute(k,v===true?'':v);
 }
 for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;el.append(c.nodeType?c:document.createTextNode(String(c)));}
 return el;
}
const ICONS={
 power:'<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>',
 fan:'<path d="M10.8 9.1C9 6.4 9.6 3 12.6 2.2c3-.8 4.5 2.4 2.6 6.4M14.9 10.8c2.7-1.8 6.1-1.2 6.9 1.8.8 3-2.4 4.5-6.4 2.6M13.2 14.9c1.8 2.7 1.2 6.1-1.8 6.9-3 .8-4.5-2.4-2.6-6.4M9.1 13.2C6.4 15 3 14.4 2.2 11.4c-.8-3 2.4-4.5 6.4-2.6"/><circle cx="12" cy="12" r="2"/>',
 plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
 air:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 wifi:'<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
 edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 external:'<path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 auto:'<path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M3 21v-5h5"/>'
};
function icon(name,cls='i'){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('class',cls);s.setAttribute('aria-hidden','true');s.innerHTML=ICONS[name]||'';return s;}

/* ---------- Feedback ---------- */
function toast(text,bad=false){
 let box=$('toasts');if(!box){box=h('div',{id:'toasts',class:'toasts',role:'status','aria-live':'polite'});document.body.append(box);}
 const el=h('div',{class:'toast'+(bad?' bad':'')},text);box.append(el);setTimeout(()=>el.remove(),bad?6000:2600);
}
async function run(button,fn,okKey='toast.accepted'){
 if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
 try{const r=await fn();if(okKey)toast(t(okKey));return r;}
 catch(e){toast(e.message||String(e),true);}
 finally{if(button){button.disabled=false;button.removeAttribute('aria-busy');}}
}
function onSubmit(form,fn,okKey){form.addEventListener('submit',e=>{e.preventDefault();run(form.querySelector('button[type=submit],button:not([type])'),fn,okKey);});}
function confirmDialog({title,body,ok,danger}){
 if(typeof document.body.append!=='function'||!document.createElement('dialog').showModal)return Promise.resolve(window.confirm(title+'\\n'+body));
 return new Promise(resolve=>{
  const d=h('dialog',{},h('h2',{},title),h('p',{},body),
   h('div',{class:'form-actions'},
    h('button',{class:'btn '+(danger?'danger':'primary'),type:'button',onclick:()=>{d.close();resolve(true);}},ok),
    h('button',{class:'btn ghost',type:'button',onclick:()=>d.close()},t('common.cancel'))));
  d.addEventListener('close',()=>{d.remove();resolve(false);});
  document.body.append(d);d.showModal();
 });
}

/* ---------- Controls ---------- */
function switchRow(id,titleKey,descKey){
 return h('label',{class:'switch'},h('span',{class:'text'},h('b',{i18n:titleKey}),descKey&&h('span',{i18n:descKey})),h('input',{type:'checkbox',role:'switch',id}));
}
function seg(options,onPick,{full=false,aria}={}){
 const label=k=>typeof k==='function'?k():I18N.has(k)?t(k):k;
 const box=h('div',{class:'seg'+(full?' full':''),role:'group','aria-label':aria||null});
 for(const [value,key] of options)box.append(h('button',{type:'button','data-value':String(value),'aria-pressed':'false',onclick:()=>{box.set(value);onPick(value);}},label(key)));
 box.set=v=>{for(const b of box.children)b.setAttribute('aria-pressed',String(b.dataset.value===String(v)));box.value=v;};
 box.relabel=()=>options.forEach(([,key],i)=>{box.children[i].textContent=label(key);});
 I18N.onChange(box.relabel);
 return box;
}
const DAY_BITS=[1,2,4,8,16,32,64];
function daysPicker(name,mask=127){
 const box=h('div',{class:'days',role:'group'});
 DAY_BITS.forEach((bit,i)=>box.append(h('label',{},h('input',{type:'checkbox',name,value:bit,checked:!!(mask&bit)}),h('span',{'data-i18n':'day.short.'+i},t('day.short.'+i)))));
 box.mask=()=>[...box.querySelectorAll('input')].reduce((m,i)=>m|(i.checked?Number(i.value):0),0);
 box.setMask=m=>box.querySelectorAll('input').forEach(i=>{i.checked=!!(m&Number(i.value));});
 return box;
}
function presetDays(picker){
 return h('div',{class:'row small'},[[127,'day.every'],[31,'day.weekdays'],[96,'day.weekends']].map(([m,k])=>h('button',{type:'button',class:'btn ghost',style:'min-height:28px;padding:2px 8px',onclick:()=>picker.setMask(m)},h('span',{i18n:k}))));
}
function daysText(mask){
 if(!mask)return t('day.once');if(mask===127)return t('day.every');if(mask===31)return t('day.weekdays');if(mask===96)return t('day.weekends');
 return DAY_BITS.map((b,i)=>mask&b?t('day.short.'+i):null).filter(Boolean).join(I18N.lang==='zh-CN'?'、':', ');
}
const hhmm=m=>String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const toMinutes=v=>{const [a,b]=v.split(':').map(Number);return a*60+b;};
function duration(sec){const d=Math.floor(sec/86400),hr=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return d?t('time.dh',{d,h:hr}):hr?t('time.hm',{h:hr,m}):t('time.m',{m});}
function summary(items){return h('dl',{class:'summary'},items.filter(Boolean).map(([k,v,dot])=>h('div',{},h('dt',{i18n:k}),h('dd',{},dot?h('span',{class:'dot '+dot}):null,v))));}
function card(titleKey,leadKey,...body){return h('section',{class:'card'},h('div',{class:'card-head'},h('div',{},h('h2',{i18n:titleKey}),leadKey&&h('p',{class:'help',i18n:leadKey}))),...body);}
function info(key){return h('details',{class:'info'},h('summary',{},icon('info'),h('span',{i18n:'common.more_info'})),h('p',{i18n:key}));}
function pageHead(titleKey,leadKey){return h('div',{},h('h2',{class:'page-title',i18n:titleKey}),h('p',{class:'page-lead',i18n:leadKey}));}
function saveBar(fn,label='common.save'){const b=h('button',{type:'button',class:'btn primary'},h('span',{i18n:label}));b.onclick=()=>run(b,fn);return h('div',{class:'form-actions'},b);}
function num(model,key,{min,max,step='any',unit,width}={}){
 const input=h('input',{type:'number',value:model[key],min,max,step,style:width?'width:'+width:null,oninput:e=>{if(e.target.value!==''&&Number.isFinite(+e.target.value))model[key]=+e.target.value;}});
 return unit?h('span',{class:'input-unit'},input,h('em',{},unit)):input;
}
function flag(model,key,titleKey,descKey){const r=switchRow(null,titleKey,descKey);const i=r.querySelector('input');i.checked=!!model[key];i.onchange=()=>{model[key]=typeof model[key]==='boolean'?i.checked:Number(i.checked);};return r;}
function slider(model,key,{min=0,max=100,fmt=v=>v+'%'}={}){
 const out=h('b',{class:'num'},fmt(model[key]));
 const r=h('input',{type:'range',min,max,value:model[key],oninput:e=>{model[key]=+e.target.value;out.textContent=fmt(model[key]);}});
 return [out,r];
}
function normalizeMac(v){const m=(v||'').replace(/[^0-9a-f]/gi,'').toLowerCase();return m.length===12?m:null;}
function prettyMac(m){return (m||'').toUpperCase().replace(/(..)(?!$)/g,'$1:');}
const clone=o=>JSON.parse(JSON.stringify(o));

/* Air quality bands: PM2.5 per GB 3095, formaldehyde limit per GB/T 18883-2022,
 * temperature and humidity comfort per the A1 light-segment defaults. */
const AIR={
 pm25:{unit:'µg/m³',max:250,bands:[[35,'excellent','ok'],[75,'good','ok'],[115,'light','warn'],[150,'moderate','warn'],[250,'heavy','bad'],[Infinity,'severe','bad']]},
 formaldehyde:{unit:'mg/m³',max:0.2,bands:[[0.08,'pass','ok'],[0.1,'slight','warn'],[Infinity,'exceed','bad']]},
 temperature:{unit:'℃',min:0,max:40,bands:[[18,'cool','warn'],[26,'comfort','ok'],[Infinity,'warm','warn']]},
 humidity:{unit:'%',max:100,bands:[[40,'dry','warn'],[60,'comfort','ok'],[Infinity,'humid','warn']]}
};
function grade(metric,v){const b=AIR[metric].bands.find(([lim])=>v<=lim);return {key:'air.'+metric+'.'+b[1],cls:b[2]};}
function airScale(metric,v){
 const m=AIR[metric],lo=m.min||0,span=m.max-lo;let prev=lo;
 const strip=h('div',{class:'scale'});
 for(const [lim,,cls] of m.bands){const end=Math.min(lim,m.max);if(end<=prev)continue;strip.append(h('i',{class:cls,style:'flex:'+((end-prev)/span*100).toFixed(2)}));prev=end;}
 strip.append(h('b',{style:'left:'+Math.max(0,Math.min(100,(v-lo)/span*100))+'%'}));
 return strip;
}
const TZ=[-720,-660,-600,-540,-480,-420,-360,-300,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,540,570,600,630,660,720,780,840];
function tzLabel(m){const sg=m<0?'−':'+',a=Math.abs(m);return 'UTC'+sg+String(Math.floor(a/60)).padStart(2,'0')+':'+String(a%60).padStart(2,'0')+(m===480?' · '+t('tz.cn'):'');}

/* ---------- Header, navigation, banners ---------- */
const UI=window.UI={$,h,icon,toast,run,onSubmit,confirm:confirmDialog,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,duration,summary,card,info,pageHead,saveBar,num,flag,slider,normalizeMac,prettyMac,clone,AIR,grade,airScale,tzLabel,state:null,caps:null,pages:{},device:null,clockCard,maintenancePage,scanNetworks};
// Keep requested output visible until a fresh read confirms it. Polls may still
// contain the pre-write state while the device applies an accepted command.
let pendingControl=null;
UI.acceptStatus=s=>{UI.confirmed=s;UI.state=pendingControl?{...s,...pendingControl}:s;return UI.state;};
UI.control=async(action,params,patch)=>{
 if(pendingControl){UI.device.onStatus?.(UI.state);throw Error(t('control.pending'));}
 pendingControl=patch;UI.controlBusy=true;
 const render=()=>{if(UI.device.onStatus)UI.device.onStatus(UI.state);};
 UI.state={...UI.state,...patch};render();
 let sendError,last;
 const matches=s=>s&&Object.entries(patch).every(([k,v])=>Object.hasOwn(s,k)&&(Array.isArray(v)?Array.isArray(s[k])&&v.length===s[k].length&&v.every((x,i)=>!!x===!!s[k][i]):typeof v==='boolean'?!!s[k]===v:s[k]===v));
 try{
  try{await command(action,params);}catch(e){sendError=e;if(e.code&&!['timeout','offline'].includes(e.code))throw e;}
  const until=Date.now()+20000;
  do{
   last=await UI.reload();
   if(matches(last))return last;
   await new Promise(resolve=>setTimeout(resolve,750));
  }while(Date.now()<until);
  throw Error(t('control.unconfirmed')+(sendError?' · '+sendError.message:''));
 }finally{
  pendingControl=null;UI.controlBusy=false;UI.state=last||UI.confirmed||UI.state;render();
 }
};
function header(dev){
 const lang=h('select',{id:'langPick','aria-label':'Language'},
  h('option',{value:'auto','data-i18n':'pref.lang_auto'},t('pref.lang_auto')),h('option',{value:'en'},'English'),h('option',{value:'zh-CN'},'简体中文'));
 lang.value=I18N.preference;lang.onchange=()=>I18N.set(lang.value);
 const theme=h('select',{id:'themePick','aria-label':'Theme'},['system','light','dark'].map(v=>h('option',{value:v,'data-i18n':'pref.theme_'+v},t('pref.theme_'+v))));
 let saved='system';try{saved=localStorage.getItem('phicomm.appearance')||'system';}catch{}
 const apply=v=>{if(v==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.dataset.theme=v;};
 theme.value=saved;apply(saved);theme.onchange=()=>{apply(theme.value);try{localStorage.setItem('phicomm.appearance',theme.value);}catch{}};
 return h('header',{class:'topbar'},
  h('div',{class:'brand'},h('div',{class:'logo'},icon(dev.icon)),h('div',{class:'grow'},h('div',{class:'kind','data-i18n':dev.kindKey},t(dev.kindKey)),h('h1',{id:'title'},dev.model))),
  h('div',{class:'prefs'},lang,theme),
  h('div',{class:'chips',id:'chips'}));
}
function chip(dotCls,labelKey,value){return h('span',{class:'chip'},h('span',{class:'dot '+dotCls}),h('span',{i18n:labelKey}),value!=null&&h('b',{},value));}
function renderChips(s){
 const c=$('chips');if(!c)return;
 const wifi=s.wifi_connected?chip('ok','chip.wifi',s.ssid+' · '+s.ip):s.ap_active?chip('warn','chip.hotspot',s.ap_name):chip('bad','chip.wifi',t('state.connecting'));
 const mq=!s.mqtt_host?chip('','chip.mqtt',t('state.off')):s.mqtt_connected?chip('ok','chip.mqtt',t('state.ready')):chip('warn','chip.mqtt',t('s.'+(s.mqtt_status||'connecting')));
 c.replaceChildren(wifi,mq,h('span',{class:'chip'},h('span',{i18n:'chip.firmware'}),h('b',{class:'num'},s.version||'—')),...(UI.device.chips?UI.device.chips(s):[]));
}
function renderBanners(s,lost){
 const b=$('banners');if(!b)return;b.replaceChildren();
 const add=(cls,ic,text)=>b.append(h('div',{class:'banner '+cls,role:cls==='bad'?'alert':null},icon(ic),h('span',{},text)));
 if(lost){add('bad','alert',t('banner.lost'));return;}
 if(s.ota_active)add('info','auto',t('banner.ota',{p:s.ota_progress}));
 if(s.reboot_pending)add('info','auto',t('banner.rebooting'));
 if(s.mqtt_cleanup_warning)add('warn','alert',t('banner.cleanup'));
 if(s.save_error)add('bad','alert',t('banner.save_error',{e:s.save_error}));
 if(s.ap_active&&!s.wifi_connected)add('warn','wifi',t('banner.hotspot',{n:s.ap_name}));
}
function buildNav(dev){
 const side=$('side');side.replaceChildren();
 for(const [groupKey,keys] of dev.groups){
  const links=keys.filter(k=>UI.pages[k]).map(k=>h('a',{href:'#settings/'+k,'data-i18n':dev.nav[k]},t(dev.nav[k])));
  if(!links.length)continue;
  side.append(h('div',{class:'group','data-i18n':groupKey},t(groupKey)));
  for(const a of links)side.append(a);
 }
}
function showRoute(){
 const m=/^settings\\/([a-z]+)$/.exec(location.hash.slice(1));
 const page=m&&document.querySelector('[data-settings-page="'+m[1]+'"]')?m[1]:m?(UI.device.groups.flatMap(g=>g[1]).find(k=>UI.pages[k])||null):null;
 $('homePage').hidden=!!page;$('settingsPage').hidden=!page;
 document.querySelectorAll('[data-settings-page]').forEach(p=>{p.hidden=p.dataset.settingsPage!==page;});
 document.querySelectorAll('.tabs a').forEach(a=>{const on=a.dataset.tab===(page?'settings':'home');if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelectorAll('.side a').forEach(a=>{if(a.hash==='#settings/'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page&&!UI.state)load().then(()=>afterShow(page));else afterShow(page);
}
function afterShow(page){
 if(!page)return;
 const active=document.querySelector('.side a[aria-current]'),side=$('side');
 // Reveal mobile menu items without scrollIntoView scrolling the whole page.
 if(active&&side&&side.scrollWidth>side.clientWidth){
  const item=active.getBoundingClientRect(),menu=side.getBoundingClientRect();
  if(item.left<menu.left)side.scrollLeft+=item.left-menu.left;
  else if(item.right>menu.right)side.scrollLeft+=item.right-menu.right;
 }
 const p=UI.pages[page];if(p&&p.show)p.show();
}
/* Wi-Fi scan is shared: start, poll, and hand the sorted list to a callback. */
async function scanNetworks(onList){
 await command('wifi.scan');
 for(let i=0;i<25;i++){const r=await command('wifi.scan.get');if(r.scanning){await new Promise(res=>setTimeout(res,700));continue;}onList(r.networks||[]);return;}
 throw Error(t('wifi.scan_timeout'));
}

/* ---------- Shared settings pages ---------- */
function wifiPage(){
 const sum=h('div'),list=h('div',{class:'list',hidden:true});
 const ssid=h('input',{id:'ssid',maxLength:32,required:true,autocomplete:'off'});
 const pass=h('input',{id:'wifiPassword',type:'password',maxLength:63,autocomplete:'new-password',placeholder:t('wifi.pass_ph')});
 const open=switchRow('openNetwork','wifi.open');
 const scanBtn=h('button',{type:'button',class:'btn',id:'scan'},icon('auto'),h('span',{i18n:'wifi.scan'}));
 const form=h('form',{id:'wifiForm',class:'stack'},
  h('label',{class:'field'},h('span',{i18n:'wifi.ssid'}),h('div',{class:'row'},h('div',{class:'grow'},ssid),scanBtn)),list,
  h('label',{class:'field'},h('span',{i18n:'wifi.password'}),pass),open,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'wifi.save'}))),info('wifi.hint'));
 open.querySelector('input').onchange=e=>{pass.disabled=e.target.checked;};
 scanBtn.onclick=()=>run(scanBtn,()=>scanNetworks(net=>{
  list.replaceChildren(...net.slice().sort((a,b)=>b.rssi-a.rssi).map(n=>h('button',{type:'button',class:'item',style:'cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%',
   onclick:()=>{ssid.value=n.ssid;open.querySelector('input').checked=n.security===0;pass.disabled=n.security===0;list.hidden=true;pass.focus();}},
   icon('wifi'),h('span',{class:'grow'},h('b',{},n.ssid),h('span',{},t('wifi.signal.'+(n.rssi>-55?3:n.rssi>-70?2:1))+' · '+n.rssi+' dBm')),n.security===0?h('span',{class:'badge',i18n:'wifi.open_badge'}):icon('lock'))));
  list.hidden=false;
  if(!net.length)throw Error(t('wifi.none'));
 }),null);
 onSubmit(form,()=>api('/wifi/config',{ssid:ssid.value,password:pass.value,open_network:open.querySelector('input').checked}),'wifi.verifying');
 return {el:h('div',{class:'stack'},pageHead('nav.wifi','wifi.lead'),sum,card('wifi.change',null,form)),
  status(s){sum.replaceChildren(summary([['wifi.status',s.wifi_connected?t('state.connected'):s.ap_active?t('state.hotspot'):t('state.connecting'),s.wifi_connected?'ok':s.ap_active?'warn':'bad'],
   ['wifi.ssid',s.ssid||'—'],['wifi.ip',s.ip||'—'],s.ap_active?['wifi.ap',s.ap_name]:['wifi.saved_password',t(s.wifi_password_set?'common.yes':'common.no')]]));},
  init(s){ssid.value=s.ssid||'';}};
}
function mqttImportPanel(dev,fields){
 const box=h('section',{class:'card stack',id:'mqttImport',hidden:!importTicket&&!importInvalid});
 if(importInvalid){box.append(h('p',{role:'alert'},t('import.invalid')));return box;}
 if(!importTicket)return box;
 const ticket=importTicket;importTicket=null;
 const source=window.opener;
 const status=h('p',{role:'status'}),accept=h('button',{type:'button',class:'btn primary',disabled:true},t('import.accept')),
 cancel=h('button',{type:'button',class:'btn'},t('common.cancel'));
 box.append(h('h2',{},t('import.title')),h('p',{},t('import.source',{origin:ticket.origin})),h('p',{},t('import.preview',{host:ticket.host,port:ticket.port,user:ticket.user||'—'})),
  h('p',{class:'help'},t('import.help')),h('p',{class:'help'},t('import.http')),
  h('div',{class:'form-actions'},accept,cancel),status);
 let waiting=false,done=false,timer,original=null;
 box.activate=()=>{if(!done&&source&&Date.now()<ticket.expires)accept.disabled=false;};
 const detach=()=>{window.removeEventListener('message',receive);clearTimeout(timer);try{window.opener=null;}catch{}};
 const clear=()=>{fields.pass.value='';if(original){fields.host.value=original.host;fields.port.value=original.port;fields.user.value=original.user;if(fields.protocol)fields.protocol.value=original.protocol;fields.clear.checked=original.clear;original=null;}waiting=false;done=true;detach();accept.disabled=true;};
 box.saved=()=>{original=null;fields.pass.value='';clearTimeout(timer);};
 box.guard=()=>{if(waiting)throw Error(t('import.waiting'));};
 const finish=()=>{clear();status.textContent=t('import.expired');};
 const receive=e=>{
  if(!waiting||done||!IotProvision.packet(e,{source,origin:ticket.origin,id:ticket.id,expires:ticket.expires},'iotcloud.provision.config'))return;
  let data;
  try{if(Object.keys(e.data).sort().join(',')!=='id,password,type')throw Error();data=IotProvision.config({v:1,host:ticket.host,port:ticket.port,user:ticket.user,password:e.data.password,protocol:'tmcp',expires:ticket.expires});}catch{finish();status.textContent=t('import.invalid');return;}
  // Only front-end fields are touched. config.set remains the normal save flow.
  fields.host.value=data.host;fields.port.value=String(data.port);fields.user.value=data.user;fields.pass.value=data.password;
  if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=data.password==='';
  waiting=false;done=true;detach();accept.hidden=true;status.textContent=t('import.received');
  source.postMessage({type:'iotcloud.provision.received',id:ticket.id},ticket.origin);
  // Never leave an unsaved imported host paired with the device's old password.
  timer=setTimeout(()=>{clear();status.textContent=t('import.expired');},Math.max(0,ticket.expires-Date.now()));
 };
 cancel.onclick=()=>{clear();box.hidden=true;};
 accept.onclick=()=>{
  if(done||Date.now()>=ticket.expires||!source){finish();return;}
  original={host:fields.host.value,port:fields.port.value,user:fields.user.value,protocol:fields.protocol?.value,clear:fields.clear.checked};
  fields.host.value=ticket.host;fields.port.value=String(ticket.port);fields.user.value=ticket.user;fields.pass.value='';if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=false;
  waiting=true;accept.disabled=true;status.textContent=t('import.waiting');
  source.postMessage({type:'iotcloud.provision.ready',id:ticket.id},ticket.origin);
 };
 if(!source){accept.disabled=true;status.textContent=t('import.no_opener');return box;}
 window.addEventListener('message',receive);
 timer=setTimeout(finish,Math.max(0,ticket.expires-Date.now()));
 window.addEventListener('pagehide',clear,{once:true});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#settings/mqtt')clear();});
 return box;
}
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const imported=mqttImportPanel(dev,{host,port,user,pass,protocol,clear:clear.querySelector('input')});
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  imported.guard?.();
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})}).then(result=>{pass.value='';imported.saved?.();return result;});
 });
 const broker=card('mqtt.broker',null,form);
 const heading=broker.querySelector('.card-head');heading.classList.add('broker-card-head');
 heading.append(h('a',{class:'btn broker-platform-link',href:'https://phicomm-io.github.io/iotcloud/#/',target:'_blank',rel:'noopener noreferrer'},h('span',{i18n:'import.platform'}),icon('external')));
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,imported,broker),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';imported.activate?.();}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const sources=h('div',{class:'row',id:'otaSources'}),latest=h('p',{class:'help'});
  const notes=h('button',{class:'btn',type:'button',hidden:true},t('fw.notes'));
  const notesText=h('pre',{class:'help',hidden:true,style:'white-space:pre-wrap;max-height:24rem;overflow:auto'});
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  let timer=null,last=null;
  const buttons=[];
  function busy(value){for(const button of buttons)button.disabled=value;}
  function translate(){install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const button of buttons)button.textContent=t('fw.source_'+button.dataset.source);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'')+(data.error?' · '+data.error:'');
   install.hidden=!data.version||data.state==='failed';notes.hidden=!data.release_log;
   if(data.busy||data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),1000);
   else busy(false);
  }
  async function check(source){
   if(timer)clearTimeout(timer);busy(true);install.hidden=notes.hidden=notesText.hidden=true;
   try{await command('ota.check',{source});latest.textContent=t('fw.check_checking');timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),500);}
   catch(e){busy(false);throw e;}
  }
  notes.onclick=()=>run(notes,async()=>{
   let offset=0,text='';notesText.hidden=false;
   do{
    await command('ota.notes',{offset});
    let data;
    do{await new Promise(resolve=>setTimeout(resolve,500));data=await command('ota.notes.get');}while(data.busy);
    if(data.state!=='ready')throw Error(data.error||t('fw.check_failed'));
    text+=data.text;notesText.textContent=text;
    if(data.next<=offset&&data.next<data.total)throw Error(t('fw.check_failed'));
    offset=data.next;if(offset>=data.total)break;
   }while(offset<16384);
  });
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources){const button=h('button',{class:'btn',type:'button','data-source':id},t('fw.source_'+id));button.onclick=()=>run(button,()=>check(id));buttons.push(button);sources.append(button);}}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{i18n:'fw.online'}),h('p',{class:'help',i18n:'fw.sources_help'}),sources,latest,h('div',{class:'row'},install,notes),notesText);
 }
 const cancel=h('button',{class:'btn',type:'button',hidden:true,i18n:'fw.cancel'});
 cancel.onclick=()=>run(cancel,async()=>{await command('ota.cancel');toast(t('fw.cancelling'));});
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'https://…/'+dev.otaName});
 const fileForm=h('form',{id:'fileForm',class:'stack'},h('label',{class:'field'},h('span',{},t('fw.file',{m:dev.model})),file),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),unsigned),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.upload'}))));
 const urlForm=h('form',{id:'urlForm',class:'stack',hidden:true},h('label',{class:'field'},h('span',{i18n:'fw.url'}),url),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.download'}))));
 const picker=seg([['file','fw.tab_file'],['url','fw.tab_url']],v=>{fileForm.hidden=v!=='file';urlForm.hidden=v!=='url';});picker.set('file');
 // Upload streams raw bytes; the request is synchronous up to send(), like the old page.
 let uploading=false;
 fileForm.addEventListener('submit',e=>{
  e.preventDefault();const f=file.files&&file.files[0];if(!f||uploading)return;
  const rescue=unsigned.querySelector('input').checked;
  if(rescue&&!window.confirm(t('fw.unsigned_confirm')))return;
  uploading=true;prog.value=0;
  const xhr=new XMLHttpRequest();xhr.open('POST',rescue?'/api/v1/ota/upload-unsigned':'/api/v1/ota/upload');
  xhr.setRequestHeader('Content-Type','application/octet-stream');xhr.timeout=310000;
  xhr.upload.onprogress=ev=>{if(ev.lengthComputable){prog.value=ev.loaded/ev.total*100;state.textContent=t('fw.uploading',{p:Math.round(ev.loaded/ev.total*100)});}};
  xhr.onload=()=>{const ok=xhr.status===202;state.textContent=ok?t('fw.verify_ok'):t('fw.failed',{e:xhr.responseText});toast(state.textContent,!ok);};
  xhr.onerror=()=>toast(t('fw.upload_lost'),true);
  xhr.ontimeout=()=>toast(t('fw.upload_timeout'),true);
  xhr.onloadend=()=>{uploading=false;};
  xhr.send(f);
 });
 onSubmit(urlForm,()=>api('/ota',{url:url.value}),'fw.url_started');
 const fileLabel=fileForm.querySelector('.field>span');I18N.onChange(()=>{fileLabel.textContent=t('fw.file',{m:dev.model});});
 return {el:h('div',{class:'stack'},pageHead('nav.firmware','fw.lead'),sum,online,
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state,cancel),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
   cancel.hidden=!s.ota_active||s.ota_mode==='committing';
   if(s.ota_active){prog.value=s.ota_progress;state.textContent=t('fw.progress',{p:s.ota_progress});}}};
}
function diagValue(k,v){
 if(v===null||v===undefined||v==='')return '—';
 if(typeof v==='boolean')return t(v?'common.yes':'common.no');
 if(k==='uptime_seconds')return duration(v);
 if(k==='free_memory')return (v/1024).toFixed(1)+' KB';
 if(k==='age_ms')return (v/1000).toFixed(1)+' s';
 if(k==='ntp_last_success'||k==='utc_time')return new Date(v*1000).toLocaleString(I18N.lang);
 if(Array.isArray(v))return v.join(', ');
 if(typeof v==='string'&&I18N.has('s.'+v))return t('s.'+v);
 return String(v);
}
function diagnosticsPage(dev){
 const health=h('div',{class:'health'}),groups=h('div',{class:'diag'}),raw=h('pre'),updated=h('p',{class:'help'});
 const extra=dev.diagExtra?dev.diagExtra():null;
 return {el:h('div',{class:'stack'},pageHead('nav.diagnostics','diag.lead'),card('diag.health',null,health),
   h('section',{},h('div',{class:'section-label',i18n:'diag.details'}),groups),extra,
   h('details',{class:'more'},h('summary',{i18n:'diag.raw'}),raw),updated),
  status(s){
   if(!UI.pages.diagnostics||$('settingsPage').hidden)return;
   const checks=[['diag.c_wifi',s.wifi_connected?'ok':'bad',s.wifi_connected?s.ssid:t('state.disconnected')],
    ['diag.c_mqtt',!s.mqtt_host?'':s.mqtt_connected?'ok':'warn',!s.mqtt_host?t('state.off'):t('s.'+(s.mqtt_status||'connecting'))+(s.mqtt_errors?' · '+t('diag.errors',{n:s.mqtt_errors}):'')],
    ...(Object.hasOwn(s,'watchdog_state')?[['diag.c_watchdog',!s.watchdog_enabled||s.watchdog_state==='fault'?'bad':s.reset_reason==='watchdog'?'warn':'ok',s.reset_reason==='watchdog'?t('diag.watchdog_reboot'):t('s.'+s.watchdog_state)]]:[]),
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
    ['diag.g_watchdog',['reset_reason','reset_reason_raw','watchdog_enabled','watchdog_state','watchdog_fault']],
    ['diag.g_network',['wifi_connected','ssid','ip','ap_active','ap_name','scan_busy','wifi_password_set','wifi_trial_status','wifi_trial_active']],
    ['diag.g_mqtt',['mqtt_connected','mqtt_status','mqtt_host','mqtt_port','mqtt_user','mqtt_topic_mode','mqtt_password_set','mqtt_errors','mqtt_last_error','mqtt_cleanup_warning']],
    ...(dev.diagGroups||[]),['diag.g_ota',['ota_active','ota_state','ota_progress','ota_error']]];
   const open=new Set([...groups.querySelectorAll('details')].filter(d=>d.open).map(d=>d.dataset.key));
   groups.replaceChildren(...all.map(([key,keys],i)=>{const rows=keys.filter(k=>Object.hasOwn(s,k)).map(k=>{seen.add(k);return [k,s[k]];});if(!rows.length)return null;
    return h('details',{'data-key':key,open:open.size?open.has(key):i<2},h('summary',{},h('span',{i18n:key}),h('span',{class:'badge'},rows.length)),
     h('dl',{},rows.map(([k,v])=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,v))])));}).filter(Boolean));
   const rest=Object.keys(s).filter(k=>!seen.has(k)&&!(Array.isArray(s[k])&&typeof s[k][0]==='object'));
   if(rest.length)groups.append(h('details',{'data-key':'diag.g_other'},h('summary',{},h('span',{i18n:'diag.g_other'}),h('span',{class:'badge'},rest.length)),
    h('dl',{},rest.map(k=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,s[k]))]))));
   raw.textContent=JSON.stringify(s,null,2);updated.textContent=t('diag.updated',{t:new Date().toLocaleTimeString(I18N.lang)});
  }};
}
function logsPage(){
 const out=h('pre',{},''),rows=[],state=h('p',{class:'help'});
 let cursor=0;
 async function read(){
  const d=await command('logs.get',{after:cursor,limit:8});
  if(d.overwritten)rows.push(t('logs.overwritten'));
  for(const r of d.records)rows.push(JSON.stringify(r.module==='system'&&r.event==='watchdog'?{...r,message:t('diag.watchdog_reboot')}:r));
  cursor=d.next;out.textContent=rows.join('\\n')||t('logs.empty');return d;
 }
 const refresh=h('button',{type:'button',class:'btn'},icon('auto'),h('span',{i18n:'diag.log_refresh'}));
 refresh.onclick=()=>run(refresh,read,null);
 const all=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.load_all'}));
 all.onclick=()=>run(all,async()=>{for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}},null);
 const dl=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.download'}));
 dl.onclick=()=>run(dl,async()=>{
  for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}
  const url=URL.createObjectURL(new Blob([rows.join('\\n')],{type:'text/plain;charset=utf-8'})),a=h('a',{href:url,download:'device-log.txt'});
  document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);
 },null);
 return {el:h('div',{class:'stack'},pageHead('nav.logs','logs.lead'),
  card('diag.logs',null,h('p',{class:'help',i18n:'logs.hint'}),h('div',{class:'form-actions'},refresh,all,dl),out,state))};
}
function maintenancePage(dev){
 const reboot=h('button',{type:'button',class:'btn'},h('span',{i18n:'sys.reboot'}));
 reboot.onclick=async()=>{if(await confirmDialog({title:t('sys.reboot_q',{m:dev.model}),body:t('sys.reboot_body'),ok:t('sys.reboot')}))run(reboot,()=>api('/reboot',{}),'toast.rebooting');};
 const items=[h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reboot'}),h('span',{i18n:'sys.reboot_desc'})),reboot)];
 if(dev.factoryReset){
  const reset=h('button',{type:'button',class:'btn danger'},h('span',{i18n:'sys.reset'}));
  reset.onclick=async()=>{if(await confirmDialog({title:t('sys.reset_q'),body:t('sys.reset_body'),ok:t('sys.reset'),danger:true}))run(reset,()=>api('/device/reset',{full:true}),'toast.resetting');};
  items.push(h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reset'}),h('span',{i18n:'sys.reset_desc'})),reset));
 }
 return h('div',{class:'stack'},pageHead('nav.maintenance','sys.lead'),
  h('section',{class:'card danger-zone'},h('div',{class:'list'},items),
   h('p',{class:'help',style:'margin-top:12px',i18n:dev.buttonHintKey},t(dev.buttonHintKey))));
}
/* Slots shared by every "General" page. */
function nameCard(){
 const input=h('input',{id:'deviceName',maxLength:63}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))),
  h('button',{class:'btn ghost',type:'button',onclick:e=>run(e.currentTarget,async()=>{await api('/deviceName',{name:''});await UI.reload();input.value=UI.state?.name||'';},'common.saved')},h('span',{i18n:'gen.default_name'}))),meta);
 onSubmit(form,()=>{if(new TextEncoder().encode(input.value).length>63)throw Error(t('gen.name_long'));return api('/deviceName',{name:input.value});});
 return {el:card('gen.identity',null,form),init(s){input.value=s.name||'';},status(s){meta.replaceChildren(summary([['gen.device_id',h('span',{class:'num'},prettyMac(s.device_id))],['gen.uptime',duration(s.uptime_seconds||0)]]));}};
}
function authCard(){
 const input=h('input',{id:'webPassword',type:'password',maxLength:32,autocomplete:'new-password',placeholder:t('auth.ph')});
 const state=h('span',{class:'badge'});
 const form=h('form',{id:'authForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'auth.password'}),input,h('p',{class:'help',i18n:'auth.help'})),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'auth.set'}))));
 onSubmit(form,()=>{if(input.value&&!/^[\\x20-\\x7e]{8,32}$/.test(input.value))throw Error(t('auth.invalid'));return api('/auth/password',{password:input.value});});
 const c=card('auth.title','auth.lead',form);c.querySelector('.card-head').append(state);
 return {el:c,status(s){state.className='badge '+(s.web_password_set?'ok':'');state.textContent=t(s.web_password_set?'auth.on':'auth.off');}};
}
function clockCard({load,save,status}){
 const sum=h('div'),tz=h('select'),ntp=h('input',{maxLength:63,required:true,placeholder:'ntp1.aliyun.com'});
 const fill=()=>{const v=tz.value;tz.replaceChildren(...TZ.map(m=>h('option',{value:m},tzLabel(m))));tz.value=v;};fill();I18N.onChange(fill);
 const form=h('form',{class:'stack'},h('div',{class:'fields'},
   h('label',{class:'field'},h('span',{i18n:'clock.tz'}),tz),h('label',{class:'field'},h('span',{i18n:'clock.ntp'}),ntp)),
  info('clock.hint'),h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>save({timezone_minutes:Number(tz.value),ntp_host:ntp.value.trim()}));
 return {el:card('clock.title',null,sum,h('div',{style:'margin-top:16px'},form)),
  async show(){const c=await load();if(!c)return;tz.value=String(c.timezone_minutes||480);ntp.value=c.ntp_host||'';},
  status(s){sum.replaceChildren(summary(status(s)));}};
}

/* ---------- Boot ---------- */
let initialized=false,failures=0,lastSuccess=0,loading=null;
async function load(){
 try{
  const raw=await command('status.get');failures=0;lastSuccess=Date.now();
  if(raw.ota_active&&raw.ota_mode){UI.pages.firmware?.status(raw);return raw;}
  const s=UI.acceptStatus(raw);
  $('title').textContent=UI.device.model+' '+(s.name||'');
  renderChips(s);renderBanners(s,false);
  if(!initialized){for(const p of Object.values(UI.pages))if(p.init)p.init(s);initialized=true;}
  for(const p of Object.values(UI.pages))if(p.status)p.status(s);
  if(UI.device.onStatus)UI.device.onStatus(s);
  return raw;
 }catch(e){if(++failures>=3&&(!lastSuccess||Date.now()-lastSuccess>=30000))renderBanners(null,true);return null;}
}
function pollLoad(){if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
async function refresh(){await pollLoad();setTimeout(refresh,UI.device.interval||2000);}
UI.reload=async()=>{if(loading)await loading;return pollLoad();};
UI.start=async dev=>{
 UI.device=dev;
 const first=dev.groups.flatMap(g=>g[1])[0];
 document.body.prepend(header(dev),
  h('nav',{class:'tabs','aria-label':'Main'},
   h('a',{href:'#home','data-tab':'home'},icon('home'),h('span',{i18n:'nav.home'})),
   h('a',{href:'#settings/'+first,'data-tab':'settings'},icon('sliders'),h('span',{i18n:'nav.settings'}))),
  h('div',{id:'banners'}));
 UI.caps=await command('capabilities.get').catch(()=>null);
 const pages=$('pages');
 // Pages the framework builds for every product.
 const builders={network:wifiPage,mqtt:mqttPage,firmware:firmwarePage,diagnostics:diagnosticsPage,maintenance:maintenancePage,logs:logsPage};
 for(const [key,build] of Object.entries(builders)){const p=build(dev);UI.pages[key]=p;pages.append(h('div',{'data-settings-page':key,hidden:true},p.el));}
 // Automation pages, when the device advertises the capability.
 Object.assign(UI.pages,window.automationPages(dev));
 // Product pages: the product supplies show()/status(); the markup is either
 // already in the document or appended below.
 for(const [key,p] of Object.entries(dev.pages))UI.pages[key]=Object.assign(UI.pages[key]||{},p);
 for(const [key,p] of Object.entries(UI.pages)){
  let box=document.querySelector('[data-settings-page="'+key+'"]');
  if(!box){box=h('div',{'data-settings-page':key,hidden:true});pages.append(box);}
  if(p.el)box.append(p.el);
 }
 for(const slot of document.querySelectorAll('[data-slot]')){const p=slot.dataset.slot==='name'?nameCard():authCard();UI.pages['slot_'+slot.dataset.slot]=p;slot.replaceWith(p.el);}
 buildNav(dev);
 window.addEventListener('hashchange',showRoute);showRoute();
 I18N.apply();
 I18N.onChange(()=>{if(UI.state){renderChips(UI.state);renderBanners(UI.state,false);for(const p of Object.values(UI.pages))if(p.status)p.status(UI.state);}});
 refresh();
};
})();
<\/script>
<script>/* Automation pages shared by the three products: schedules, custom button
 * events and night mode. Installed by ui.js when the device reports the
 * matching capability. All traffic goes through command() from service.js. */
(()=>{
'use strict';
const {t}=I18N;
const {h,icon,toast,run,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,info,card,pageHead,slider,clone}=UI;

/* Action kinds a schedule or button event can run, keyed by action name. */
const ACTIONS={
 'outlet.set':'op.outlet','fan.set':'op.fan','light.set':'op.light',
 'child_lock.set':'op.child_lock','indicator.set':'op.indicator',
 'display.set':'op.display','system.reboot':'op.reboot',
 'light_effect.next':'op.effect_next','light_effect.select':'op.effect_select',
 'filter.reset':'op.filter_reset','light_always.set':'op.light_always'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a)&&(keys||!['light_effect.next','light_effect.select','filter.reset'].includes(a)));
 const box=h('div',{class:'stack'}),fields=h('div',{class:'stack'});
 const options=[...(keys?[['none','op.none']]:[]),...available.map(a=>[a,actKey(a)])];
 const pick=keys?sel(host,'btn.action',options):seg(options,v=>draw(v),{full:true});
 if(keys){pick.set=v=>{pick.value=v;};pick.addEventListener('change',()=>draw(pick.value));host.append(box);}
 else host.append(pick,box);
 box.append(fields);
 let read=()=>({}),current=keys?'none':(available[0]||'none');
 function draw(a,params={}){
  current=a;fields.replaceChildren();read=()=>({});
  if(a==='none'||!a)return;
  const parts=[];
  if(a==='outlet.set'){
   const index=sel(fields,'op.target',[['all','op.all'],...[0,1,2,3,4,5].map(i=>[String(i),()=>t('tc1.socket_n',{n:i+1})])]);
   if(params.index!=null)index.value=String(params.index);
   parts.push(()=>index.value==='all'?{}:{index:Number(index.value)});
  }
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set','light_always.set'].includes(a);
  if(switchable){
   const values=keys&&(['outlet.set','fan.set'].includes(a)||caps.model==='a1')?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='light_effect.select'){
   const effect=sel(fields,'op.effect_select',Array.from({length:5},(_,i)=>[String(i),'a1.effect.'+i]));
   effect.value=String(params.effect||0);parts.push(()=>({effect:Number(effect.value)}));
  }
  if(a==='filter.reset')fields.append(info('filter.reset_hint'));
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   if(a==='light.set'&&keys){
    const setBrightness=switchRow(null,'op.set_brightness');setBrightness.querySelector('input').checked=params.brightness!=null;
    fields.append(setBrightness);parts.push(()=>setBrightness.querySelector('input').checked?{brightness:Number(m.brightness)}:{});
   }else parts.push(()=>({brightness:Number(m.brightness)}));
  }
  read=()=>Object.assign({},...parts.map(f=>f()));
  current=a;
 }
 draw(keys?'none':(available[0]||'none'));
 return {
  get(){return {action:current,params:read()};},
  set(a,p){current=a;pick.set(a);draw(a,p||{});}
 };
}

/* ---------- Schedules ---------- */
function schedulePage(dev){
 const box=h('div',{class:'stack'}),listBox=h('div',{class:'stack'});
 let offset=0,editing=0,tasks=[];
 const tz=()=>((UI.state&&UI.state.timezone_minutes)||480)*60;
 const atText=sec=>new Date((sec+tz())*1000).toISOString().slice(0,16).replace('T',' ');
 const when=x=>x.trigger==='once'?atText(x.at):hhmm(x.minute);
 const timeValue=()=>{const d=new Date(Date.now()+tz()*1000+86400000);return d.toISOString().slice(0,16);};

 const enabled=switchRow(null,'sch.enabled_row');
 const trigger=seg([['weekly','sch.weekly'],['once','day.once']],v=>syncTrigger(),{full:true});
 const days=daysPicker('sdays',127),time=h('input',{type:'time',value:'08:00'}),at=h('input',{type:'datetime-local',value:timeValue()});
 const weekly=h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days);
 const once=h('label',{class:'field',hidden:true},h('span',{i18n:'sch.when'}),at);
 const minute=h('label',{class:'field'},h('span',{i18n:'sch.time'}),time);
 const editorHost=h('div',{class:'stack'});
 function syncTrigger(){const onceMode=trigger.value==='once';weekly.hidden=onceMode;once.hidden=!onceMode;minute.hidden=onceMode;}
 const editor=actionEditor(editorHost);
 const save=h('button',{type:'submit',class:'btn primary'});
 const labelSave=()=>save.replaceChildren(icon('plus'),h('span',{},t(editing?'sch.save_btn':'sch.add_btn')));
 labelSave();
 function row(x){
  return h('div',{class:'item'},h('b',{class:'time num'},when(x)),
   h('div',{class:'grow'},h('b',{},t(actKey(x.action))+(x.trigger==='weekly'?' · '+daysText(x.days):' · '+t('day.once'))),
    h('span',{},t('sch.state.'+(x.state||'waiting'))+(x.enabled?'':' · '+t('sch.off')))),
   h('span',{class:'badge '+(x.enabled?'ok':'')},t(x.enabled?'sch.enabled':'sch.disabled')),
   h('div',{class:'row',style:'gap:4px'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(x)},h('span',{i18n:'sch.edit'})),
    h('button',{type:'button',class:'btn ghost',onclick:ev=>run(ev.currentTarget,()=>command('schedules.enable',{id:x.id,enabled:!x.enabled}).then(load),null)},h('span',{i18n:x.enabled?'sch.disable':'sch.enable'})),
    h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:ev=>run(ev.currentTarget,()=>command('schedules.delete',{id:x.id}).then(load),'common.deleted')},icon('trash'))));
 }
 async function load(){
  const d=await command('schedules.get',{offset,limit:8});tasks=d.items;
  listBox.replaceChildren(
   tasks.length?h('div',{class:'list'},tasks.map(row)):h('div',{class:'empty'},t('sch.empty')),
   h('div',{class:'row between'},h('span',{class:'help'},t('sch.used',{a:d.count,b:d.capacity})),
    h('div',{class:'row',style:'gap:4px'},
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=Math.max(0,offset-8);return load();},null)},h('span',{i18n:'common.prev'})),
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=d.next;return load();},null),disabled:offset+8>=d.count},h('span',{i18n:'common.next'})))));
  banner.hidden=!(UI.state&&UI.state.time_synced===false);
 }
 function reset(){editing=0;enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();days.setMask(127);time.value='08:00';editor.set('none');labelSave();}
 function edit(x){
  editing=x.id;enabled.querySelector('input').checked=!!x.enabled;trigger.set(x.trigger);syncTrigger();
  days.setMask(x.days);time.value=hhmm(x.minute);at.value=atText(x.at);editor.set(x.action,x.params);labelSave();
  box.scrollIntoView({block:'start'});
 }
 const banner=h('div',{class:'banner warn',hidden:true},icon('clock'),h('span',{i18n:'sch.no_clock'}));
 const form=h('form',{class:'subcard stack'},h('h3',{i18n:'sch.new'}),trigger,weekly,once,minute,editorHost,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},icon('plus'),h('span',{},t('sch.add_btn'))),
   h('button',{type:'button',class:'btn ghost',onclick:reset},h('span',{i18n:'sch.reset'}))));
 form.addEventListener('submit',e=>{e.preventDefault();run(save,async()=>{
  const a=editor.get();
  if(a.action==='none')throw Error(t('sch.pick_action'));
  const task={enabled:Number(enabled.querySelector('input').checked),trigger:trigger.value,...a};
  if(editing)task.id=editing;
  if(trigger.value==='weekly'){const d=days.mask();if(!d)throw Error(t('sch.pick_day'));task.days=d;task.minute=toMinutes(time.value);}
  else{const parsed=Date.parse(at.value);if(!Number.isFinite(parsed))throw Error(t('sch.pick_when'));
   task.at=Math.floor(parsed/1000)-tz();if(task.at<=Math.floor(Date.now()/1000))throw Error(t('sch.future'));}
  await command('schedules.put',task);reset();await load();toast(t('sch.added'));
 },null);});
 box.append(form,info('sch.hint'));
 return {el:h('div',{class:'stack'},pageHead('nav.schedule',dev.scheduleLead),banner,card('sch.list',null,listBox,box)),
  async show(){if(!UI.state)await UI.reload();await load();}};
}

/* ---------- Custom button events ---------- */
function buttonsPage(dev){
 const listBox=h('div',{class:'stack'}),keyHost=h('div',{class:'fields'});
 const keyIds=dev.model==='A1'?(UI.caps.button_keys?.includes('combination')?[0,1,2]:[0,1]):[0];
 const keyName=k=>t(dev.model==='A1'?['btn.key_power','btn.key_wifi','btn.key_both'][Number(k)]:'btn.key_fn');
 const key=sel(keyHost,'btn.key',keyIds.map(k=>[String(k),()=>keyName(k)]));
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(['system.reboot','light_effect.next','filter.reset'].includes(v.action))return target;
  if(v.action==='light_effect.select')return target+' · '+t('a1.effect.'+p.effect);
  let text=v.action==='display.set'?target:state+' · '+target;
  if(p.speed!=null)text+=' · '+p.speed+'%';
  if(p.brightness!=null)text+=' · '+p.brightness+'%';
  return text;
 }
 const previewBox=h('div',{class:'button-preview','aria-live':'polite'});
 function preview(){
  const v={key:Number(key.value),[kind.value]:Number(count.value),...editor.get()};
  previewBox.textContent=keyName(v.key)+' · '+gesture(v)+' → '+actionText(v);
 }
 const editorCard=h('form',{class:'card stack','data-button-editor':''});
 const selected=()=>({key:Number(key.value),[kind.value]:Number(count.value)});
 function edit(v){
  key.value=String(v.key);kind.set(v.seconds?'seconds':'clicks');count.max=v.seconds?4:30;
  countLabel.textContent=t(v.seconds?'btn.hold_count':'btn.click_count');count.value=v.seconds||v.clicks;
  editor.set(v.action,v.params);preview();editorCard.scrollIntoView({block:'nearest',behavior:'smooth'});count.focus();
 }
 function row(v){
  return h('div',{class:'button-mapping'},h('b',{class:'button-gesture'},gesture(v)),
   h('span',{class:'button-result'},actionText(v)),h('div',{class:'row'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(v)},t('sch.edit')),
    h('button',{type:'button',class:'btn ghost','aria-label':t('common.delete')+' '+gesture(v),onclick:e=>run(e.currentTarget,async()=>{
     await command('buttons.set',{key:v.key,...(v.seconds?{seconds:v.seconds}:{clicks:v.clicks}),action:'none',params:{}});await load();
    },'common.deleted')},t('common.delete'))));
 }
 async function load(){
  const items=[];let offset=0,capacity=68;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);capacity=page.capacity||capacity;if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<capacity);
  listBox.replaceChildren();
  for(const k of keyIds){
   const groups=[];
   for(const type of ['clicks','seconds']){
    const values=items.filter(v=>Number(v.key)===k&&v[type]>0).sort((a,b)=>a[type]-b[type]);
    const runs=[];
    for(const v of values){const last=runs[runs.length-1];
     if(last&&v[type]===last[last.length-1][type]+1&&JSON.stringify([v.action,v.params])===JSON.stringify([last[0].action,last[0].params]))last.push(v);
     else runs.push([v]);
    }
    if(runs.length)groups.push(h('section',{class:'button-group'},h('h3',{},t(type==='clicks'?'btn.click':'btn.hold')),runs.map(run=>run.length===1?row(run[0]):
     h('details',{class:'button-range'},h('summary',{},h('b',{},t(type==='clicks'?'btn.click_range':'btn.hold_range',{a:run[0][type],b:run[run.length-1][type]})),h('span',{},actionText(run[0])),h('span',{class:'help'},t('btn.expand'))),run.map(row)))));
   }
   listBox.append(h('section',{class:'stack'},h('h3',{},keyName(k)),groups.length?groups:h('div',{class:'empty'},t('btn.empty'))));
  }
 }
 const save=h('button',{type:'submit',class:'btn primary'},t('common.save'));
 editorCard.append(h('h2',{i18n:'btn.edit'}),keyHost,editorHost,previewBox,h('div',{class:'form-actions'},save));
 editorCard.addEventListener('input',preview);editorCard.addEventListener('change',preview);editorCard.addEventListener('click',()=>preview());
 editorCard.addEventListener('submit',e=>{e.preventDefault();if(!editorCard.reportValidity())return;
  run(save,async()=>{const a=editor.get();if(a.action==='none')throw Error(t('btn.pick_action'));
   await command('buttons.set',{...selected(),...a});await load();},'common.saved');
 });
 let filterStatus,filterHours;
 function filterCards(){
  if(dev.model!=='A1'||!UI.caps.actions.includes('filter.get'))return [];
  filterStatus=h('p',{'data-filter-status':''});filterHours=h('input',{type:'number',min:1,max:20000,required:true,'data-filter-hours':''});
  const form=h('form',{class:'stack'},filterStatus,info('filter.hint'),h('label',{class:'field'},h('span',{i18n:'filter.lifetime'}),filterHours),
   h('div',{class:'form-actions'},h('button',{type:'submit',class:'btn primary'},t('common.save')),
    h('button',{type:'button',class:'btn ghost',onclick:e=>run(e.currentTarget,async()=>{if(!window.confirm(t('filter.reset_confirm')))return;await command('filter.reset',{});await loadFilter();},null)},t('op.filter_reset'))));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;run(null,async()=>{await command('filter.set',{lifetime_hours:Number(filterHours.value)});await loadFilter();},'common.saved');});
  return [card('filter.title',null,form)];
 }
 async function loadFilter(){if(!filterStatus)return;const f=await command('filter.get');filterHours.value=f.lifetime_hours;filterStatus.textContent=t('filter.status',{used:(f.used_seconds/3600).toFixed(1),remaining:f.remaining_percent});}
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info(dev.model==='A1'?'btn.reset_note_a1':'btn.reset_note')),editorCard,...filterCards()),
  async show(){await load();await loadFilter();preview();}};
}

/* ---------- Night mode ---------- */
function nightPage(dev){
 const isM1=dev.model==='M1',list=h('div',{class:'stack'});
 let model=[];
 function window(cfg,i){
  const days=daysPicker('ndays'+i,cfg.days),start=h('input',{type:'time',value:hhmm(cfg.start)}),end=h('input',{type:'time',value:hhmm(cfg.end)});
  const dim=switchRow(null,isM1?'night.screen':'night.light','night.light_desc');dim.querySelector('input').checked=!!cfg.light;
  const bright={brightness:Math.round(cfg.brightness*100/255)};
  const [bOut,bRange]=slider(bright,'brightness',{min:0,max:100,step:isM1?25:1,fmt:v=>v?v+'%':t('state.off')});
  const speed={max_speed:cfg.max_speed};
  const [fOut,fRange]=slider(speed,'max_speed',{min:1});
  const fan=switchRow(null,'night.fan','night.fan_desc'),block=switchRow(null,'night.block_t','night.block_desc');
  fan.querySelector('input').checked=!!cfg.fan;block.querySelector('input').checked=!!cfg.block_start;
  const extra=isM1?[]:[fan,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.fan_max'}),fOut)),fRange,block];
  const field=h('fieldset',{},h('legend',{},t('night.period',{n:i+1})),
   h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'night.start'}),start),h('label',{class:'field'},h('span',{i18n:'night.end'}),end)),
   dim,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.light_max'}),bOut)),bRange,...extra,
   h('div',{class:'form-actions'},h('button',{type:'button',class:'btn ghost',onclick:()=>{model.splice(i,1);draw();}},icon('trash'),h('span',{i18n:'common.delete'}))));
  // One listener writes the whole window back, so no control can drift.
  const collect=()=>{
   cfg.days=days.mask();cfg.start=toMinutes(start.value);cfg.end=toMinutes(end.value);
   cfg.light=Number(dim.querySelector('input').checked);cfg.brightness=Math.round(bright.brightness*255/100);
   if(!isM1){cfg.fan=Number(fan.querySelector('input').checked);cfg.block_start=Number(block.querySelector('input').checked);cfg.max_speed=Number(speed.max_speed);}
  };
  field.addEventListener('input',collect);field.addEventListener('change',collect);
  return field;
 }
 function draw(){
  list.replaceChildren(...(model.length?model.map(window):[h('div',{class:'empty'},t('night.empty'))]));
 }
 const add=h('button',{type:'button',class:'btn'},icon('plus'),h('span',{i18n:'night.add_btn'}));
 add.onclick=()=>run(add,async()=>{if(model.length>=4)throw Error(t('common.max',{n:4}));
  model.push({days:127,fan:isM1?0:1,light:1,max_speed:30,brightness:0,block_start:1,start:1320,end:420});draw();},null);
 const save=h('button',{type:'button',class:'btn primary'},h('span',{i18n:'common.save'}));
 save.onclick=()=>run(save,async()=>{await command('night.set',{windows:model});toast(t('common.saved'));});
 return {el:h('div',{class:'stack'},pageHead('nav.sleep','night.lead'),card('night.list',null,list,
  info('night.hint'),h('div',{class:'form-actions'},add,save))),
  async show(){model=clone((await command('night.get')).windows||[]);draw();}};
}

window.automationPages=dev=>{
 const caps=(UI.caps&&UI.caps.actions)||[];
 const pages={};
 if(!caps.length||caps.includes('schedules.get'))pages.schedule=schedulePage(dev);
 if(caps.includes('buttons.set')&&dev.hasButtons)pages.buttons=buttonsPage(dev);
 if(caps.includes('night.get'))pages.night=nightPage(dev);
 return pages;
};
})();
<\/script>
<script>// Reuse only the product home renderer, not the device's router or settings UI.
(()=>{
 let dev,stopped=false,ready=false,loading=null,failures=0,lastSuccess=0;
 const disabled=new Map();
 function lock(){for(const el of document.querySelectorAll('#homePage button,#homePage input,#homePage select')){if(!disabled.has(el))disabled.set(el,el.disabled);el.disabled=true;}}
 function unlock(){for(const [el,value] of disabled)el.disabled=value;disabled.clear();}
 const feedback=document.createElement('p');feedback.className='banner info';feedback.setAttribute('role','status');feedback.textContent='正在获取设备状态…';document.body.prepend(feedback);
 async function load(){
  try{
   const raw=await command('status.get');failures=0;lastSuccess=Date.now();unlock();const s=UI.acceptStatus(raw);dev.onStatus?.(s);ready=true;feedback.hidden=true;return raw;
  }catch(e){failures++;if(ready&&(failures<3||Date.now()-lastSuccess<30000))return null;lock();feedback.hidden=false;feedback.className='banner warn';feedback.textContent=ready?'暂时无法更新，正在重试。当前显示上次状态。':e.message;if(!ready)document.querySelectorAll('#homePage .tile').forEach((tile,i)=>{tile.querySelector('.name').textContent=I18N.t('tc1.socket_n',{n:i+1});tile.querySelector('.state').textContent='等待设备状态';});}
 }
 function pollLoad(){if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
 UI.reload=async()=>{if(loading)await loading;return pollLoad();};
 UI.start=options=>{document.querySelectorAll('[data-settings-page]').forEach(page=>page.hidden=true);dev=options;UI.device=options;I18N.set('zh-CN');queueMicrotask(()=>{I18N.apply();lock();(async function poll(){await pollLoad();if(!stopped)setTimeout(poll,3000);})();});};
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#settings/"]');if(link){event.preventDefault();UI.toast('此项请在设备本地 WebUI 中设置');}});
 window.addEventListener('pagehide',()=>stopped=true);
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}#settingsPage{display:none!important}.banner{margin-top:0}@media(max-width:600px){.grid{grid-template-columns:minmax(0,1fr)}.metric .stat{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:4px}.metric .stat small{margin-left:0}}';document.head.append(style);
 new ResizeObserver(()=>{parent.postMessage({type:'device-height',height:Math.ceil(document.body.getBoundingClientRect().height)+8},parent.location.origin);}).observe(document.body);
})();

/* TC1 smart power strip page: six socket tiles, power trend and the metering
 * settings the strip alone has. */
(()=>{
'use strict';
const {t}=I18N;
const {$,h,icon,toast,run,onSubmit,switchRow,summary,card,pageHead,seg}=UI;
const pendingSockets=new Map();
const names=()=>(UI.state&&UI.state.socket_names)||Array.from({length:6},(_,i)=>t('tc1.socket_n',{n:i+1}));

/* ---------- Home: sockets ---------- */
const tiles=[];
for(let i=0;i<6;i++){
 const name=h('b',{class:'name'}),state=h('span',{class:'state'});
 const tile=h('button',{type:'button',class:'tile',id:'socket'+i,'aria-pressed':'false'},
  h('span',{class:'tile-top'},icon('plug'),h('span',{class:'idx num'},String(i+1))),name,state);
 tile.onclick=()=>toggle(i);
 const edit=h('button',{type:'button',class:'btn ghost icon tile-edit','aria-label':t('tc1.rename')},icon('edit'));
 edit.onclick=e=>{e.stopPropagation();rename(i);};
 tiles.push({tile,name,state});
 $('tiles').append(h('div',{class:'tile-wrap'},tile,edit));
}
function lock(){for(let i=0;i<tiles.length;i++){const pending=pendingSockets.has(i)||pendingSockets.has('all');tiles[i].tile.disabled=pending;tiles[i].tile.setAttribute('aria-busy',String(pending));}$('allOn').disabled=pendingSockets.size>0;$('allOff').disabled=pendingSockets.size>0;}
async function setStates(params){
 const key=params.index===undefined?'all':params.index;if(pendingSockets.has(key)||(key==='all'&&pendingSockets.size)||pendingSockets.has('all'))return;
 pendingSockets.set(key,params.on);lock();
 const states=Array.from(UI.state.socket_states||[],Boolean);if(params.index===undefined)states.fill(params.on);else states[params.index]=params.on;
 UI.state={...UI.state,socket_states:states};renderSockets(UI.state);
 try{await api('/outlet',params);}
 catch(e){toast(e.message,true);}
 finally{pendingSockets.delete(key);lock();UI.reload().catch(()=>{});}
}
function toggle(i){setStates({index:i,on:!UI.state.socket_states[i]});}
$('allOn').onclick=()=>setStates({on:true});
$('allOff').onclick=()=>setStates({on:false});
async function rename(i){
 const input=h('input',{value:names()[i],maxLength:63,required:true});
 const d=h('dialog',{},h('form',{method:'dialog',class:'stack'},h('h2',{},t('tc1.rename')),
  h('label',{class:'field'},h('span',{},t('tc1.socket_n',{n:i+1})),input),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',value:'ok'},t('common.save')),
   h('button',{class:'btn ghost',value:'cancel',formnovalidate:true},t('common.cancel')))));
 document.body.append(d);d.showModal();input.select();
 d.addEventListener('close',()=>{if(d.returnValue==='ok'&&input.value.trim())run(null,()=>api('/socketNames',{index:i,name:input.value.trim()}).then(UI.reload),'common.saved');d.remove();});
}
function renderSockets(s){
 lock();
 const states=Array.from(s.socket_states||[0,0,0,0,0,0]);
 for(const [key,on] of pendingSockets){if(key==='all')states.fill(on);else states[key]=on;}
 UI.state={...s,socket_states:states};
 $('onCount').textContent=t('tc1.on_count',{n:states.filter(Boolean).length});
 states.forEach((v,i)=>{const x=tiles[i];x.tile.setAttribute('aria-pressed',String(!!v));
  x.name.textContent=(s.socket_names||[])[i]||t('tc1.socket_n',{n:i+1});x.state.textContent=t(v?'tc1.on':'tc1.off')+(pendingSockets.has(i)||pendingSockets.has('all')?' · '+t('control.syncing'):'');});
 for(const id of ['childLock','childLockDevice'])$(id).checked=!!s.child_lock;
 for(const id of ['ledEnabled','ledEnabledDevice'])$(id).checked=!!s.led_enabled;
}
for(const id of ['childLock','childLockDevice'])$(id).onchange=e=>run(null,()=>UI.control('child_lock.set',{enabled:e.target.checked},{child_lock:e.target.checked}));
for(const id of ['ledEnabled','ledEnabledDevice'])$(id).onchange=e=>run(null,()=>UI.control('indicator.set',{enabled:e.target.checked},{led_enabled:e.target.checked}));

/* ---------- Home: power trend ---------- */
const powerHistory=[];
async function pollPower(){
 try{
  if($('homePage').hidden)return;
  const p=await api('/power');
  $('watts').firstChild.textContent=Number(p.power_watts||0).toFixed(1);
  $('energy').textContent=(p.energy_kwh<1?(p.energy_kwh*1000).toFixed(1)+' Wh':p.energy_kwh.toFixed(3)+' kWh');
  powerHistory.push(Number(p.power_watts)||0);if(powerHistory.length>60)powerHistory.shift();
  const values=powerHistory;
  const max=Math.max(...values,1),min=Math.min(...values),top=max*1.25;
  $('peak').textContent=max+' W';$('sparkRange').textContent=min+'–'+max+' W';
  const points=values.map((y,i)=>(i/Math.max(values.length-1,1)*300).toFixed(1)+','+(62-(y/top)*58).toFixed(1)).join(' ');
  $('spark').innerHTML='<polyline points="0,64 '+points+' 300,64" class="area"/><polyline points="'+points+'" class="line"/>';
 }catch{}
 finally{setTimeout(pollPower,2000);}
}

/* ---------- Settings: general ---------- */
const nameInputs=Array.from({length:6},(_,i)=>h('input',{maxLength:63,required:true}));
$('nameFields').append(...nameInputs.map((input,i)=>h('label',{class:'field'},h('span',{},t('tc1.socket_n',{n:i+1})),input)));
UI.onSubmit($('socketNamesForm'),async()=>{
 const s=UI.state;
 for(let i=0;i<6;i++)if(nameInputs[i].value!==s.socket_names[i])await api('/socketNames',{index:i,name:nameInputs[i].value});
},'common.saved');
UI.onSubmit($('reportForm'),()=>api('/mqtt/report/freq',{seconds:Number($('reportSeconds').value)}));
UI.onSubmit($('coefForm'),()=>api('/power/coefficient',String($('coef').value)));
let initialized=false;

UI.start({
 model:'TC1',kindKey:'kind.tc1',icon:'plug',mqttHostMax:127,factoryReset:false,
 otaName:'phicomm_tc1_a1.ota.bin.signed',haHintKey:'mqtt.ha_tc1',otaHintKey:'fw.hint_tc1',buttonHintKey:'sys.hint_tc1',
 scheduleLead:'sch.lead_tc1',interval:3000,hasButtons:true,
 groups:[['grp.network',['network','mqtt']],['grp.device',['device']],['grp.auto',['schedule','buttons']],['grp.system',['firmware','diagnostics','logs','maintenance']]],
 nav:{network:'nav.wifi',mqtt:'nav.mqtt',device:'nav.general',schedule:'nav.schedule',buttons:'nav.buttons',firmware:'nav.firmware',diagnostics:'nav.diagnostics',logs:'nav.logs',maintenance:'nav.maintenance'},
 pages:{device:{}},
 diagGroups:[['diag.g_sockets',['socket_names','socket_states','child_lock','led_enabled']],
  ['diag.g_power',['report_seconds','powerCoefficientX100']],
  ['diag.g_time',['time_synced','utc_time']],['diag.g_lan',['mask','gateway']]],
 healthChecks:s=>[['diag.c_clock',s.time_synced?'ok':'warn',t(s.time_synced?'s.synced':'s.syncing')],
  ['diag.c_memory',s.free_memory>16384?'ok':'warn',(Math.round((s.free_memory||0)/1024))+' KB']],
 chips:s=>s.time_synced?[]:[h('span',{class:'chip'},h('span',{class:'dot warn'}),h('span',{i18n:'chip.clock'}))],
 onStatus:s=>{
  renderSockets(s);
  if(!initialized){nameInputs.forEach((x,i)=>x.value=(s.socket_names||[])[i]||'');
   $('reportSeconds').value=s.report_seconds;$('coef').value=s.powerCoefficientX100;initialized=true;}
 }
});
I18N.onChange(()=>{
 nameInputs.forEach((x,i)=>{x.previousSibling.textContent=t('tc1.socket_n',{n:i+1});});
 tiles.forEach((x,i)=>{x.tile.nextSibling.setAttribute('aria-label',t('tc1.rename'));
  if(UI.state)x.name.textContent=(UI.state.socket_names||[])[i]||t('tc1.socket_n',{n:i+1});});
});
pollPower();
})();
<\/script>
</body>
</html>
`,a1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta name="referrer" content="no-referrer"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>A1 空气净化器</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;-webkit-tap-highlight-color:transparent;
 --bg:#f4f6f9;--surface:#fff;--surface-muted:#eef1f5;--text:#1d2430;--muted:#5f6b7c;--border:#dbe0e8;
 --accent:#305ed4;--accent-text:#fff;--accent-soft:#e6edfc;
 --danger:#b8353c;--danger-soft:#fbe9ea;--success:#26734c;--success-soft:#e3f3ea;--warn:#9a5b00;--warn-soft:#fdf1dc;
 --focus:#7a9cf5;--radius:12px;--radius-s:8px;--shadow:0 1px 2px rgba(20,30,50,.06),0 4px 16px rgba(20,30,50,.04);
 font-family:Inter,system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--text);background:var(--bg)}
:root[data-theme=dark]{--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}
@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}}
*{box-sizing:border-box}
body{max-width:1080px;margin:0 auto;padding:20px 32px 96px;line-height:1.5;font-size:15px}
h1{font-size:20px;margin:0;letter-spacing:-.3px}h2{font-size:16px;margin:0;font-weight:650}h3{font-size:14px;margin:0 0 8px;font-weight:650}
p{margin:0}a{color:var(--accent)}[hidden]{display:none!important}
.muted,.help{color:var(--muted)}.help{font-size:13px}.small{font-size:13px}.num{font-variant-numeric:tabular-nums}
:focus-visible{outline:3px solid var(--focus);outline-offset:2px}
svg.i{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}

/* Header */
.topbar{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;padding:4px 0 16px}
.brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
.brand .logo{width:40px;height:40px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}
.brand .kind{font-size:12px;color:var(--muted)}
.prefs{display:flex;gap:6px}.prefs select{font:inherit;font-size:12px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)}
.chips{display:flex;flex-wrap:wrap;gap:8px;width:100%}
.chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--surface);border:1px solid var(--border);font-size:13px;color:var(--muted);max-width:100%}
.chip b{color:var(--text);font-weight:600}
.dot{width:8px;height:8px;border-radius:50%;background:var(--muted);flex:none}
.dot.ok{background:var(--success)}.dot.warn{background:var(--warn)}.dot.bad{background:var(--danger)}
.dot.live{animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.35}}
.banner{display:flex;gap:10px;align-items:center;padding:10px 14px;border-radius:var(--radius-s);margin:0 0 16px;font-size:14px}
.banner.bad{background:var(--danger-soft);color:var(--danger)}.banner.warn{background:var(--warn-soft);color:var(--warn)}.banner.ok{background:var(--success-soft);color:var(--success)}.banner.info{background:var(--accent-soft);color:var(--accent)}

/* Tabs */
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);margin:0 0 20px}
.tabs a{display:flex;align-items:center;gap:8px;padding:10px 14px;color:var(--muted);text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:550}
.tabs a[aria-current=page]{color:var(--accent);border-bottom-color:var(--accent)}

/* Cards and grids */
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);min-width:0}
.card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.broker-card-head{flex-wrap:wrap}
.broker-platform-link{flex-shrink:0;color:var(--accent);background:var(--surface-muted)}
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{position:relative;font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
/* Keep pending feedback out of flex flow so buttons and wrapped rows stay put. */
.btn[aria-busy=true]::before{content:"";position:absolute;left:25%;bottom:3px;width:50%;height:2px;border-radius:1px;background:currentColor;animation:pulse 1s linear infinite;pointer-events:none}

/* Segmented control */
.seg{display:inline-flex;background:var(--surface-muted);border-radius:var(--radius-s);padding:3px;gap:2px;flex-wrap:wrap}
.seg button{font:inherit;font-size:14px;border:0;background:transparent;color:var(--muted);padding:7px 14px;border-radius:6px;cursor:pointer;min-height:36px;font-weight:550;width:auto;margin:0}
.seg button[aria-pressed=true]{background:var(--surface);color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.seg.full{display:flex}.seg.full button{flex:1}
.seg button:disabled{cursor:not-allowed;opacity:.5}

/* Switch */
.switch{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;min-height:44px}
.switch .text{min-width:0}.switch .text b{display:block;font-weight:600}.switch .text span{font-size:13px;color:var(--muted)}
.switch input{appearance:none;flex:none;width:44px;height:26px;min-height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;margin:0;transition:background .15s}
.switch input::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
.switch input:checked{background:var(--accent)}.switch input:checked::after{transform:translateX(18px)}
.switch input:disabled{opacity:.5}
.switch+.switch{border-top:1px solid var(--border);padding-top:8px;margin-top:8px}

/* Fields */
.field{display:block}.field>span{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
.field .help{margin-top:6px}
input[type=text],input[type=password],input[type=number],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input:not([type]),select,textarea{font:inherit;width:100%;min-height:40px;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);color:var(--text)}
textarea{min-height:120px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}
input[type=range]{width:100%;min-height:28px;accent-color:var(--accent);margin:0;padding:0;border:0;background:transparent}
input[type=color]{width:40px;height:40px;min-height:40px;padding:2px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);cursor:pointer}
input[type=file]{padding:8px}
.fields{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.form-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}
.input-unit{display:flex;align-items:center;gap:8px}.input-unit input{flex:1}.input-unit em{font-style:normal;color:var(--muted);font-size:13px;white-space:nowrap}
.sentence{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:14px}
.sentence input{width:90px;min-height:36px;padding:6px 8px}
details.more{border-top:1px solid var(--border);margin-top:20px;padding-top:12px}
details.more>summary{cursor:pointer;color:var(--muted);font-size:14px;font-weight:600;list-style:none;display:flex;align-items:center;gap:6px}
details.more>summary::before{content:"\\203A";display:inline-block;transition:transform .15s;font-size:18px;line-height:1}
details.more[open]>summary::before{transform:rotate(90deg)}
details.more>*:not(summary){margin-top:16px}
details.info{font-size:13px;color:var(--muted);margin-top:20px}
details.info>summary{cursor:pointer;display:inline-flex;align-items:center;gap:4px;list-style:none}
details.info>summary svg.i{width:15px;height:15px}
details.info>summary::-webkit-details-marker{display:none}
details.info>p{margin-top:6px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
summary::-webkit-details-marker{display:none}

/* Read-only display summary */
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px;background:var(--surface-muted);border-radius:var(--radius-s);padding:14px 16px;margin:0}
.summary dt{font-size:12px;color:var(--muted)}.summary dd{margin:2px 0 0;font-weight:600;overflow-wrap:anywhere;display:flex;align-items:center;gap:6px}

/* Settings layout */
.settings{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start}
.side{position:sticky;top:12px;display:flex;flex-direction:column;gap:2px}
.side .group{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin:14px 10px 4px;font-weight:700}
.side .group:first-child{margin-top:0}
.side a{padding:8px 10px;border-radius:var(--radius-s);color:var(--text);text-decoration:none;font-size:14px}
.side a:hover{background:var(--surface-muted)}.side a[aria-current=page]{background:var(--accent-soft);color:var(--accent);font-weight:600}
.page-title{margin:0 0 4px;font-size:18px}.page-lead{margin:0 0 16px;color:var(--muted);font-size:14px}
.section-label{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:0 0 10px}

/* Lists */
.list{display:flex;flex-direction:column;gap:8px}
.item{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);min-width:0}
.item .grow b{display:block}.item .grow span{font-size:13px;color:var(--muted)}
.item .time{font-size:20px;min-width:64px}
.empty{padding:20px;text-align:center;color:var(--muted);border:1px dashed var(--border);border-radius:var(--radius-s);font-size:14px}
.badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;background:var(--surface-muted);color:var(--muted);white-space:nowrap}
.badge.ok{background:var(--success-soft);color:var(--success)}.badge.warn{background:var(--warn-soft);color:var(--warn)}.badge.bad{background:var(--danger-soft);color:var(--danger)}.badge.info{background:var(--accent-soft);color:var(--accent)}
.subcard{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;background:var(--surface)}
.subcard h3{margin-bottom:12px}
fieldset{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;margin:16px 0;min-width:0}
fieldset.bare{border:0;padding:0;margin-left:0;margin-right:0;margin-bottom:0;min-width:0}
fieldset.bare:disabled{opacity:.5}
legend{padding:0 8px;font-size:14px}
.table{width:100%;border-collapse:collapse;font-size:14px}
.table th{text-align:left;font-size:12px;color:var(--muted);font-weight:600;padding:6px 8px;border-bottom:1px solid var(--border)}
.table td{padding:8px 8px;border-bottom:1px solid var(--border);vertical-align:middle}
.table tr:last-child td{border-bottom:0}

/* Weekday chips */
.days{display:flex;gap:6px;flex-wrap:wrap}
.days label{position:relative;margin:0}
.days input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer;width:100%;min-height:100%}
.days span{display:grid;place-items:center;min-width:40px;height:36px;padding:0 8px;border-radius:999px;border:1px solid var(--border);font-size:13px;font-weight:600;color:var(--muted)}
.days input:checked+span{background:var(--accent);border-color:var(--accent);color:var(--accent-text)}
.days input:focus-visible+span{outline:3px solid var(--focus);outline-offset:2px}

/* Option cards */
.options{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}
.option{position:relative;border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;cursor:pointer;background:var(--surface);display:block;margin:0}
.option input{position:absolute;opacity:0}
.option b{display:block;font-size:14px}.option span{font-size:12px;color:var(--muted)}
.option:has(input:checked){border-color:var(--accent);background:var(--accent-soft);box-shadow:inset 0 0 0 1px var(--accent)}
.option:has(input:focus-visible){outline:3px solid var(--focus);outline-offset:2px}

/* Toasts and dialogs */
.toasts{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:20;width:min(420px,calc(100% - 32px))}
.toast{padding:12px 16px;border-radius:var(--radius-s);background:var(--text);color:var(--bg);font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.2);animation:rise .2s}
.toast.bad{background:var(--danger);color:#fff}
@keyframes rise{from{transform:translateY(8px);opacity:0}}
dialog{border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);padding:24px;max-width:420px;width:calc(100% - 32px)}
dialog::backdrop{background:rgba(10,15,25,.45)}
dialog h2{margin-bottom:8px}dialog p{color:var(--muted);font-size:14px}

/* Stats and bars */
.stat{font-size:40px;font-weight:650;letter-spacing:-1px;line-height:1.1;font-variant-numeric:tabular-nums}
.stat small{font-size:15px;font-weight:500;color:var(--muted);letter-spacing:0;margin-left:4px}
.bar{height:8px;border-radius:4px;background:var(--surface-muted);overflow:hidden;position:relative}
.bar i{position:absolute;inset:0 auto 0 0;background:var(--accent);border-radius:4px;transition:width .6s}
.bar i.target{background:transparent;border-right:2px solid var(--text);border-radius:0}
.eyebrow{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}
.label{font-size:13px;font-weight:600}
progress{width:100%;height:8px;accent-color:var(--accent)}
pre{overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;background:var(--surface-muted);padding:14px;border-radius:var(--radius-s);max-height:360px}

/* Diagnostics */
.health{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.health .item{padding:10px 12px}
.diag{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.diag details{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;background:var(--surface)}
.diag summary{cursor:pointer;font-weight:600;display:flex;justify-content:space-between;gap:8px}
.diag dl{margin:8px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}
.diag dt{color:var(--muted)}.diag dd{margin:0;text-align:right;overflow-wrap:anywhere}

/* ---------- A1 ---------- */
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "filter filter" "light light"}
.fan-hero{display:flex;align-items:center;gap:20px}
.power{flex:none;width:96px;height:96px;border-radius:50%;border:0;display:grid;place-items:center;cursor:pointer;background:var(--surface-muted);color:var(--muted);box-shadow:inset 0 0 0 1px var(--border);transition:background .2s,box-shadow .2s,color .2s;width:96px}
.power svg{width:38px;height:38px}
.power[aria-pressed=true]{background:var(--accent);color:var(--accent-text);box-shadow:0 0 0 8px var(--accent-soft)}
.power:disabled{opacity:.5;cursor:not-allowed}
.mini-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.mini-metrics>div{display:flex;flex-direction:column;gap:2px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
.mini-metrics b{font-size:18px}.mini-metrics small{font-size:12px;color:var(--muted);font-weight:500}
.mini-metrics .badge{align-self:flex-start}
.light-layout{display:flex;gap:28px;align-items:center}
.ring{width:180px;height:180px;flex:none}
.ring-effect-preview{display:flex;justify-content:center;align-items:center;gap:24px;min-height:196px}
.ring-preview-controls{width:min(280px,100%)}
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .ring-anchor{font-size:7px;font-weight:700;fill:var(--muted)}
.ring .ring-guide{fill:none;stroke:var(--surface-muted);stroke-width:15}
.ring .ring-edge{fill:none;stroke:var(--muted);stroke-width:1;opacity:.45}
.ring .ring-light-segment{fill:none;stroke-width:12;stroke-linecap:butt;transition:stroke-opacity .12s linear}
.swatches{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;align-items:center}
.swatch{width:32px;height:32px;min-height:32px;border-radius:50%;border:2px solid var(--surface);background:var(--c);box-shadow:0 0 0 1px var(--border);cursor:pointer;padding:0}
.swatch[aria-pressed=true]{box-shadow:0 0 0 2px var(--accent)}
.swatch:disabled,.swatches input:disabled{opacity:.35;cursor:not-allowed}
.swatches input[type=color]{width:32px;height:32px;min-height:32px;border-radius:50%;padding:3px;border:0;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)}
.swatches input[type=color]::-webkit-color-swatch-wrapper{padding:0}
.swatches input[type=color]::-webkit-color-swatch{border:2px solid var(--surface);border-radius:50%}
.swatches input[type=color]::-moz-color-swatch{border:2px solid var(--surface);border-radius:50%}

/* ---------- M1 ---------- */
.verdict{display:flex;align-items:center;gap:16px;border-left:6px solid var(--border)}
.verdict[data-level=ok]{border-left-color:var(--success)}.verdict[data-level=warn]{border-left-color:var(--warn)}.verdict[data-level=bad]{border-left-color:var(--danger)}
.verdict[data-level=ok] .stat{color:var(--success)}.verdict[data-level=warn] .stat{color:var(--warn)}.verdict[data-level=bad] .stat{color:var(--danger)}
.fresh{display:flex;align-items:center;gap:8px;white-space:nowrap}
.metrics{display:grid;gap:16px;grid-template-columns:repeat(4,minmax(0,1fr))}
.metric .stat{margin:12px 0 14px}
.scale{position:relative;display:flex;gap:2px;height:6px}
.scale i{border-radius:3px;opacity:.55}.scale i.ok{background:var(--success)}.scale i.warn{background:var(--warn)}.scale i.bad{background:var(--danger)}
.scale b{position:absolute;top:-4px;width:4px;height:14px;margin-left:-2px;border-radius:2px;background:var(--text);box-shadow:0 0 0 2px var(--surface)}

/* ---------- TC1 ---------- */
.tc1-home{grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);grid-template-areas:"sockets power" "sockets panel"}
.tiles{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.tile-wrap{position:relative}
.tile{width:100%;font:inherit;text-align:left;display:flex;flex-direction:column;gap:4px;padding:14px;min-height:110px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface-muted);color:var(--muted);cursor:pointer;transition:background .15s,border-color .15s;margin:0}
.tile .tile-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:auto}
.tile .idx{font-size:12px;font-weight:700;padding-right:26px}
.tile .name{color:var(--text);font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .state{font-size:13px;font-weight:600}
.tile[aria-pressed=true]{background:var(--accent-soft);border-color:var(--accent);color:var(--accent)}
.tile:disabled{cursor:progress;opacity:.7}
.tile-edit{position:absolute;top:8px;right:8px}
.spark{width:100%;height:64px;margin:12px 0 4px;display:block}
.spark .line{fill:none;stroke:var(--accent);stroke-width:2;vector-effect:non-scaling-stroke}
.spark .area{fill:var(--accent-soft);stroke:none}

@media(max-width:860px){.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:760px){
 body{padding:12px 14px 96px}
 .settings{grid-template-columns:1fr;gap:12px}
 .side{position:static;flex-direction:row;overflow-x:auto;gap:4px;padding-bottom:6px;scrollbar-width:none}
 .side .group{display:none}.side a{white-space:nowrap;border:1px solid var(--border)}
 .a1-home,.tc1-home{grid-template-columns:1fr;grid-template-areas:none}
 .a1-home>*,.tc1-home>*{grid-area:auto!important}
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}.ring-effect-preview{flex-direction:column;gap:8px}
 .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
 .power{width:80px;height:80px}
 .verdict{flex-direction:column;align-items:flex-start}
 .card{padding:16px}.stat{font-size:34px}
 .brand h1{font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
 .prefs select{max-width:84px}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* Button mappings: gesture, concrete result, then row actions. */
.button-group{display:grid;gap:8px}.button-mapping{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr) auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.button-result{overflow-wrap:anywhere}.button-range{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px}.button-range summary{cursor:pointer;display:list-item}.button-range summary span{display:block;margin:6px 0 0 18px}.button-range summary .help{color:var(--accent)}
.button-preview{padding:14px;border-radius:var(--radius-s);background:var(--accent-soft);color:var(--accent);overflow-wrap:anywhere}
@media(max-width:600px){.button-mapping{grid-template-columns:1fr auto}.button-gesture{grid-column:1/-1}.button-mapping .row{justify-content:flex-end}.button-range .button-mapping{gap:6px}}

.copyright{margin-top:24px;padding:16px 0;border-top:1px solid var(--border);color:var(--muted);font-size:12px;line-height:1.8;text-align:center;overflow-wrap:anywhere}.copyright a{color:var(--accent);text-underline-offset:3px}
</style>
<script>/* Apply the saved theme before first paint so the page does not flash light on
 * a dark display. The control itself lives in the shared header (ui.js). */
(()=>{
'use strict';
 const key='phicomm.appearance',choices=['system','light','dark'];
 let selected='system';try{const saved=localStorage.getItem(key);if(choices.includes(saved))selected=saved;}catch{}
 if(selected==='system')document.documentElement.removeAttribute('data-theme');
 else document.documentElement.dataset.theme=selected;
})();
<\/script></head>
<body>
<main id="homePage" class="home a1-home">
 <section class="card" style="grid-area:fan">
  <div class="fan-hero">
   <button id="power" class="power" type="button" aria-pressed="false" data-i18n-aria="a1.power"></button>
   <div class="grow">
    <div class="eyebrow" data-i18n="a1.fan"></div>
    <div class="stat" id="fanState">—</div>
    <p class="help" id="fanSub"></p>
   </div>
  </div>
  <div class="stack" style="margin-top:20px">
   <div class="row between"><span class="label" data-i18n="a1.speed"></span><b class="num" id="speedValue">—</b></div>
   <div id="presets"></div>
   <input id="speed" type="range" min="1" max="100" step="1" data-i18n-aria="a1.speed">
   <div>
    <div class="bar"><i id="outBar" style="width:0"></i><i id="targetBar" class="target" style="width:0"></i></div>
    <p class="help" id="outText" style="margin-top:6px"></p>
   </div>
   <details class="info"><summary><span data-i18n="common.more_info"></span></summary><p data-i18n="a1.fan_hint"></p></details>
  </div>
 </section>

 <section class="card" style="grid-area:panel">
  <div class="card-head"><h2 data-i18n="a1.panel"></h2><span id="panelBadge" class="badge"></span></div>
  <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="a1.child_lock_desc"></span></span><input type="checkbox" role="switch" id="childLock"></label>
 </section>

 <section class="card" id="autoCard" style="grid-area:auto"></section>

 <section class="card stack" id="filterCard" style="grid-area:filter" hidden>
  <div class="card-head"><h2 data-i18n="filter.title"></h2><span class="badge" id="filterBadge"></span></div>
  <div class="row between"><b class="stat num" id="filterRemaining">—</b><span class="help" id="filterUsage"></span></div>
  <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-i18n-aria="filter.title" id="filterProgress"><i id="filterBar"></i></div>
  <p class="help" data-i18n="filter.hint"></p>
  <details class="more"><summary data-i18n="filter.settings"></summary>
   <form id="filterForm" class="stack">
    <label class="field"><span data-i18n="filter.lifetime"></span><input id="filterLifetime" type="number" min="1" max="20000" step="1" required></label>
    <div class="form-actions"><button type="submit" class="btn" id="filterSave" data-i18n="common.save"></button></div>
   </form>
  </details>
  <div class="form-actions"><button class="btn" type="button" id="filterReset" data-i18n="filter.reset"></button></div>
 </section>

 <section class="card" style="grid-area:light">
  <div class="card-head"><div><h2 data-i18n="a1.ring"></h2><p class="help" id="effectNote"></p></div><span id="lightSave" class="help"></span></div>
  <div class="light-layout">
   <svg id="ring" class="ring ring-preview-svg" viewBox="0 0 200 200" aria-hidden="true"></svg>
   <div class="stack grow">
    <label class="switch"><span class="text"><b data-i18n="a1.ring_on"></b></span><input type="checkbox" role="switch" id="ledEnabled"></label>
    <label class="switch"><span class="text"><b data-i18n="a1.always_on"></b><span data-i18n="a1.always_on_desc"></span></span><input type="checkbox" role="switch" id="ledAlways"></label>
    <div><span class="label" data-i18n="a1.color"></span><div class="swatches" id="swatches"></div></div>
    <div><div class="row between"><span class="label" data-i18n="a1.brightness"></span><b class="num" id="brightValue"></b></div><input id="bright" type="range" min="0" max="255" step="1" data-i18n-aria="a1.brightness"></div>
   </div>
  </div>
 </section>
</main>

<div id="settingsPage" class="settings" hidden>
 <nav class="side" id="side" aria-label="Settings"></nav>
 <div id="pages">
  <div data-settings-page="device" class="stack">
   <div><h2 class="page-title" data-i18n="nav.general"></h2><p class="page-lead" data-i18n="gen.lead"></p></div>
   <div data-slot="name"></div>
   <section class="card">
    <div class="card-head"><h2 data-i18n="a1.panel"></h2><span id="panelBadge2" class="badge"></span></div>
    <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="a1.child_lock_desc"></span></span><input type="checkbox" role="switch" id="childLockDevice"></label>
    <p class="help" style="margin-top:8px" data-i18n="a1.button_hint"></p>
   </section>
   <section class="card" id="clockCard"></section>
   <div data-slot="auth"></div>
  </div>
  <div data-settings-page="light" class="stack"></div>
  <div data-settings-page="binding" class="stack"></div>
  <div data-settings-page="linkage" class="stack"></div>
 </div>
</div>

<footer class="copyright">Copyright &copy; Phicomm Community · <a href="https://github.com/phicomm-io/phicomm-community-firmware" target="_blank" rel="noopener noreferrer">固件仓库</a> · <a href="https://phicomm-io.github.io" target="_blank" rel="noopener noreferrer">项目网站</a></footer>
<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'filter.title':['Estimated filter life','滤芯寿命预估'],
'filter.hint':['Counts fan running time only. Default: 4320 h (180 days continuously). Adjust to your filter specification; air quality and filter condition also affect replacement.','仅累计风机开启时间，默认 4320 小时（连续运行 180 天）。可按滤芯规格调整；更换时间还需结合空气质量和滤芯状态。'],
'filter.usage':['Used {used} / {total} h','已用 {used} / {total} 小时'],
'filter.normal':['In service','使用中'],'filter.due':['Replace filter soon','建议更换滤芯'],'filter.expired':['Replacement due','请更换滤芯'],
'filter.settings':['Adjust rated lifetime','调整额定寿命'],'filter.lifetime':['Rated lifetime (hours, 1–20000)','额定寿命（小时，1–20000）'],
'filter.reset':['Reset after replacing filter','更换滤芯后重置'],
'filter.confirm':['Reset accumulated usage to zero? Only reset after installing a new filter.','将累计使用时间清零并恢复至 100%？请在更换新滤芯后执行。'],
'filter.reset_done':['Filter usage reset','滤芯使用时间已重置'],
'import.platform':['Open IotCloud','打开 IotCloud'],
'import.title':['Import MQTT configuration','导入 MQTT 配置'],
'import.preview':['Broker: {host}:{port} · Username: {user}','Broker：{host}:{port} · 用户名：{user}'],
'import.source':['Configuration source: {origin}','配置来源：{origin}'],
'import.accept':['Receive and prefill','接收并预填'],
'import.help':['Only accept a transfer you started from a trusted platform. Review the fields and save to apply. The device never exports its saved password.','仅接收你从可信平台发起的配置。接收后请检查下方表单，点击保存才会生效。设备不会导出已保存的密码。'],
'import.http':['HTTP cannot protect against LAN interception or tampering. Use only on a trusted network.','HTTP 无法防止局域网窃听或篡改，请仅在可信网络使用。'],
'import.invalid':['Invalid import request. Start again from the platform.','导入请求无效，请从平台重新发起。'],
'import.expired':['Transfer cancelled or expired. Start again from the platform.','传递已取消或过期，请从平台重新发起。'],
'import.waiting':['Waiting for configuration…','正在等待配置…'],
'import.received':['Configuration prefilled. Review the MQTT Host, port and account below, then save.','配置已预填。请核对下方 MQTT Host、端口与账号，再点击保存。'],
'import.no_opener':['The platform window is unavailable. Keep it open and restart the transfer.','无法连接平台窗口，请保持平台页面打开并重新发起传递。'],
'fw.cancel':['Cancel download','终止下载'],'fw.cancelling':['Cancelling; services will resume shortly.','正在终止，稍后恢复正常服务。'],'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.sources_help':['Choose a source to check its latest version.','选择更新来源，检查最新版本。'],'fw.source_github':['GitHub Pages (HTTPS)','GitHub Pages（HTTPS）'],'fw.source_cn':['China mirror (HTTP)','境内镜像（HTTP）'],'fw.source_global':['Global mirror (HTTP)','境外镜像（HTTP）'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
/* Application watchdog diagnostics (A1/M1). */
'diag.g_watchdog':['Restart & watchdog','复位与看门狗'],
'diag.c_watchdog':['Watchdog','看门狗'],
'diag.watchdog_reboot':['Last restart was caused by watchdog timeout','上次因看门狗超时重启'],
'd.reset_reason':['Last reset reason','上次复位原因'],
'd.reset_reason_raw':['Raw reset reason','原始复位原因码'],
'd.watchdog_enabled':['Watchdog enabled','看门狗已启用'],
'd.watchdog_state':['Watchdog state','看门狗状态'],
'd.watchdog_fault':['Unresponsive worker','无响应的处理线程'],
's.watchdog':['Watchdog timeout','看门狗超时'],
's.lockup':['CPU lockup','CPU 锁死'],
's.software':['Software reset','软件复位'],
's.power_on':['Power-related reset','电源相关复位'],
's.unknown':['Unknown','未知'],
's.healthy':['Healthy','正常'],
's.starting':['Starting','启动中'],
's.fault':['Heartbeat timeout or watchdog error','心跳超时或看门狗错误'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
'btn.key_both':['Wi-Fi + power keys','Wi-Fi + 电源组合键'],
'btn.reset_note_a1':['Only the Wi-Fi key alone uses the fixed 5/10-second recovery gestures. Combination gestures cancel individual key actions.','仅单独长按 Wi-Fi 键 5／10 秒触发固定恢复操作；组合键会取消本轮单键动作。'],
'op.effect_next':['Cycle light effect','切换到下一灯效'],'op.effect_select':['Select light effect','设置灯效'],
'op.filter_reset':['Reset filter usage','重置滤芯寿命'],'op.light_always':['Light always on','灯环常亮'],
'op.set_brightness':['Also set brightness','同时设置亮度'],
'filter.status':['Used {used} hours · {remaining}% remaining','已使用 {used} 小时 · 剩余 {remaining}%'],
'filter.reset_hint':['Use this gesture after replacing the filter to clear its accumulated runtime.','更换滤芯后使用此手势，将累计运行时间清零。'],
'filter.reset_confirm':['Clear the filter runtime after replacing the filter?','确认已更换滤芯并清零累计使用时间？'],
'btn.key':['Key','按键'],'btn.key_fn':['Function key','功能键'],'btn.key_power':['Power key','电源键'],'btn.key_wifi':['Wi-Fi key','Wi-Fi 键'],'btn.pick_action':['Choose an action','请选择动作'],
'op.on':['On','开启'],'op.off':['Off','关闭'],'op.toggle':['Toggle','切换'],'op.all':['All sockets','全部插座'],'op.target':['Target','对象'],'op.state':['New state','目标状态'],'op.brightness':['Brightness','亮度'],'op.speed':['Fan speed','风速'],
'op.outlet':['Sockets','插座'],'op.fan':['Fan','风机'],'op.light':['Light ring','灯环'],'op.child_lock':['Child lock','童锁'],'op.indicator':['Indicator light','指示灯'],'op.display':['Screen brightness','屏幕亮度'],'op.reboot':['Restart device','重启设备'],
'clock.uptime':['Running for','已运行'],'clock.memory':['Free memory','可用内存'],
'night.hint':['Periods use the device time zone; an end earlier than the start crosses midnight.','时段按设备时区生效；结束早于开始表示跨午夜。'],'night.period':['Period {n}','时段 {n}'],'night.screen':['Limit screen brightness','限制屏幕亮度'],
'sch.new':['New schedule','新建定时'],'sch.edit':['Edit','编辑'],'sch.enable':['Enable','启用'],'sch.disable':['Disable','停用'],'sch.enabled':['Enabled','已启用'],'sch.disabled':['Disabled','已停用'],'sch.enabled_row':['Enabled','启用'],'sch.pick_action':['Choose an action for the schedule','请为定时任务选择动作'],'sch.pick_when':['Pick a date and time','请选择日期与时间'],'sch.save_btn':['Save schedule','保存任务'],
'fw.verify_ok':['Verified; the device is restarting','校验通过，设备正在重启'],'fw.failed':['Update failed: {e}','升级失败：{e}'],'fw.upload_lost':['Upload interrupted; reconnect to check the update state','连接中断，请重新连接设备查看升级状态'],'fw.upload_timeout':['Upload timed out','上传超时'],'fw.url_started':['Download started','已开始下载'],
'diag.g_ota_img':['Update image','升级镜像'],
'common.save':['Save','保存'],'common.cancel':['Cancel','取消'],'common.add':['Add','添加'],'common.delete':['Delete','删除'],'common.deleted':['Deleted','已删除'],
'common.copy':['Copy','复制'],'common.copied':['Copied','已复制'],'common.advanced':['Advanced','高级'],'common.more_info':['Details','说明'],
'common.prev':['Previous','上一页'],'common.next':['Next','下一页'],'common.yes':['Yes','是'],'common.no':['No','否'],'common.saving':['Saving…','保存中…'],'common.saved':['Saved','已保存'],'common.max':['Up to {n} items','最多 {n} 项'],
'unit.s':['s','秒'],'time.dh':['{d} d {h} h','{d} 天 {h} 小时'],'time.hm':['{h} h {m} min','{h} 小时 {m} 分'],'time.m':['{m} min','{m} 分钟'],
'toast.accepted':['Request accepted','设备已接受请求'],'toast.rebooting':['Restarting… reconnect in about 20 s','正在重启，约 20 秒后重新连接'],'toast.resetting':['Settings cleared. The device is restarting.','配置已清除，设备正在重启'],
'pref.lang_auto':['Auto','自动'],'pref.theme_system':['System','跟随系统'],'pref.theme_light':['Light','浅色'],'pref.theme_dark':['Dark','深色'],

/* kinds and navigation */
'kind.a1':['A1 Air Purifier','A1 空气净化器'],'kind.m1':['M1 Air Monitor','M1 空气质量检测器'],'kind.tc1':['TC1 Power Strip','TC1 智能插座'],
'nav.home':['Home','首页'],'nav.settings':['Settings','设置'],
'grp.network':['Network','网络'],'grp.device':['Device','设备'],'grp.auto':['Automation','自动化'],'grp.system':['System','系统'],
'nav.wifi':['Wi-Fi','Wi-Fi'],'nav.mqtt':['MQTT / Home Assistant','MQTT / Home Assistant'],'nav.general':['General','通用'],'nav.light':['Light effects','灯效'],
'nav.binding':['Linked M1','绑定 M1'],'nav.linkage':['Auto control','自动联动'],'nav.schedule':['Schedules','定时任务'],'nav.sleep':['Night mode','夜间模式'],
'nav.buttons':['Button events','按键事件'],'nav.permission':['Linkage access','联动许可'],
'nav.firmware':['Firmware','固件升级'],'nav.diagnostics':['Diagnostics','诊断'],'nav.logs':['Logs','日志'],'nav.maintenance':['Restart & reset','重启与恢复'],
/* header */
'chip.wifi':['Wi-Fi','Wi-Fi'],'chip.hotspot':['Setup hotspot','配网热点'],'chip.mqtt':['MQTT','MQTT'],'chip.firmware':['Firmware','固件'],'chip.clock':['Clock not synced','时钟未校准'],
'state.connected':['Connected','已连接'],'state.connecting':['Connecting…','连接中…'],'state.disconnected':['Disconnected','未连接'],'state.hotspot':['Setup hotspot on','配网热点已开启'],
'state.off':['Off','关闭'],'state.ready':['Ready','就绪'],'state.ok':['Normal','正常'],
'banner.lost':['Lost connection to the device. If it is updating, wait for it to restart.','与设备的连接已中断。如正在升级，请等待设备重启。'],
'banner.ota':['Firmware update in progress ({p}%). Controls are paused.','正在升级固件（{p}%），控制暂不可用。'],
'banner.rebooting':['The device is restarting.','设备正在重启。'],
'banner.cleanup':['Old Home Assistant entities could not be removed. Delete them on the previous broker.','旧 HA 实体清理失败，请在原 Broker 上手动删除。'],
'banner.save_error':['Settings could not be saved: {e}','设置保存失败：{e}'],
'banner.hotspot':['Not connected to Wi-Fi. Setup hotspot "{n}" is on.','尚未连接 Wi-Fi，配网热点「{n}」已开启。'],
/* Wi-Fi */
'wifi.lead':['The device keeps its old network until the new one is verified.','新网络验证成功前，设备保持原有连接。'],
'wifi.status':['Status','状态'],'wifi.ssid':['Network name','网络名称'],'wifi.ip':['IP address','IP 地址'],'wifi.ap':['Hotspot','热点名称'],'wifi.saved_password':['Password saved','已保存密码'],
'wifi.change':['Change network','更换网络'],'wifi.scan':['Scan','扫描'],'wifi.password':['Password','密码'],'wifi.pass_ph':['Leave empty to keep the saved password','同一网络留空则保留原密码'],
'wifi.open':['This network has no password','此网络没有密码'],'wifi.open_badge':['Open','开放'],'wifi.save':['Verify and save','验证并保存'],
'wifi.verifying':['Verifying… the device saves only after it gets an IP','验证中…取得 IP 后才会保存'],
'wifi.hint':['The new network is saved only after the device joins it and gets an IP address. If that does not happen within 30 s, it returns to the previous network.','设备连上新网络并取得 IP 后才保存；30 秒内失败则恢复之前的网络。'],
'wifi.none':['No networks found. Type the name instead.','未发现网络，可手动填写名称'],'wifi.scan_timeout':['Scan timed out','扫描超时'],
'wifi.signal.0':['Very weak','信号很弱'],'wifi.signal.1':['Weak','信号弱'],'wifi.signal.2':['Good','信号良好'],'wifi.signal.3':['Strong','信号强'],
/* MQTT */
'mqtt.lead':['Connect a broker to use Home Assistant or the TMCP cloud.','连接 Broker 后可接入 Home Assistant 或 TMCP 云平台。'],
'mqtt.status':['Status','状态'],'mqtt.broker':['Broker','Broker'],'mqtt.host':['Broker address','Broker 地址'],'mqtt.host_ph':['IP or domain — empty disables MQTT','IP 或域名；留空则停用'],
'mqtt.port':['Port','端口'],'mqtt.user':['Username','用户名'],'mqtt.password':['Password','密码'],'mqtt.pass_ph':['Leave empty to keep','留空保留原密码'],
'mqtt.mode':['Topic mode','主题模式'],'mqtt.mode_legacy':['Legacy','Legacy'],
'mqtt.mode_tmcp':['TMCP','TMCP'],'mqtt.mode_tmcp_desc':['TMCP — joins your cloud list automatically','TMCP — 上线后自动加入云端列表'],
'mqtt.mode_hint':['Changing the account tries to remove the old Home Assistant entities. If that fails, delete them on the old broker.','切换账户会尝试清理旧 HA 实体，失败时需在旧 Broker 手动清理。'],
'mqtt.clear':['Clear saved password','清除已保存的密码'],'mqtt.clear_desc':['Connect without a password','以无密码方式连接'],
'mqtt.too_long':['Username max 63 bytes, password max 256 bytes','用户名最多 63 字节，密码最多 256 字节'],
'mqtt.ha_a1':['Home Assistant creates the purifier, RGB light ring, child lock and always-on switches automatically.','Home Assistant 会自动创建净化器、RGB 灯环、童锁和常亮开关。'],
'mqtt.ha_m1':['Home Assistant creates four sensors and a screen brightness control automatically.','Home Assistant 会自动创建四项传感器和屏幕亮度控制。'],
'mqtt.ha_tc1':['Home Assistant creates six sockets, power, indicator and child lock entities automatically.','Home Assistant 会自动创建六路插座、功率、指示灯和童锁。'],
/* General */
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],'gen.default_name':['Restore default name','恢复默认名称'],
'gen.name_long':['Name is limited to 63 bytes','名称最多 63 字节'],'gen.device_id':['MAC','MAC 地址'],'gen.uptime':['Running for','已运行'],
'auth.title':['Web access','访问认证'],'auth.lead':['Protect this page with a password (username: admin).','为本页面设置密码（用户名 admin）。'],
'auth.password':['Web password','网页密码'],'auth.ph':['8–32 characters; empty turns it off','8–32 个字符；留空关闭认证'],
'auth.help':['Your browser will ask you to sign in again after it changes.','修改后浏览器会要求重新登录。'],'auth.set':['Set password','设置密码'],
'auth.on':['Protected','已启用'],'auth.off':['Not protected','未启用'],'auth.invalid':['Use 8–32 printable ASCII characters','请使用 8–32 个可打印 ASCII 字符'],
'clock.title':['Clock','时钟'],'clock.tz':['Time zone','时区'],'clock.ntp':['NTP server','NTP 服务器'],'clock.synced':['Clock','校时状态'],'clock.last':['Last sync','最近校时'],
'clock.hint':['Domain or IPv4 only, without protocol or port. If it fails the device tries Aliyun, Tencent and public NTP pools; it re-syncs hourly and retries after 60 s on failure.','只填域名或 IPv4，不含协议和端口。失败后自动尝试阿里、腾讯及公共 NTP 池；每小时校时，失败 60 秒后重试。'],
'tz.cn':['Beijing','北京'],
/* Firmware */
'fw.lead':['Updates keep Wi-Fi, MQTT and device settings.','升级会保留 Wi-Fi、MQTT 和设备设置。'],'fw.version':['Installed version','当前版本'],'fw.state':['Update status','升级状态'],'fw.error':['Last error','最近错误'],
'fw.install':['Install update','安装更新'],'fw.tab_file':['Upload file','上传文件'],'fw.tab_url':['From URL','从网址下载'],
'fw.file':['Signed {m} OTA file','{m} 签名 OTA 文件'],'fw.url':['Direct link (HTTP)','更新文件直链（HTTP）'],'fw.upload':['Upload and install','上传并升级'],'fw.download':['Download and install','下载并升级'],
'fw.unsigned':['Allow unsigned firmware','允许未签名的固件'],'fw.unsigned_desc':['Rescue only. The image is still checked for this device.','仅用于救援；仍会检查是否适用于本设备。'],
'fw.unsigned_confirm':['Unsigned firmware is not verified. Only continue if you trust the file.','未签名的固件不会校验来源，请确认文件可信后再继续。'],
'fw.uploading':['Uploading {p}%','正在上传 {p}%'],'fw.progress':['Installing {p}%','正在安装 {p}%'],'fw.preview_done':['Preview only: no file was sent.','预览模式：未实际发送文件。'],
'fw.hint_a1':['Choose an A1 OTA package from this project. The device restarts after verification.','请选择本项目的 A1 OTA 包，校验成功后自动重启。'],
'fw.hint_m1':['Choose an M1 OTA package from this project. The device restarts after verification.','请选择本项目的 M1 OTA 包，校验成功后自动重启。'],
'fw.hint_tc1':['Choose a TC1 OTA package from this project. The device restarts after verification.','请选择本项目的 TC1 OTA 包，校验成功后自动重启。'],
/* Diagnostics */
'diag.lead':['A health summary first; raw values below for troubleshooting.','先看健康摘要，下方为排障用的原始数值。'],'diag.health':['Health','健康状态'],'diag.details':['Details','详细状态'],
'diag.raw':['Raw JSON','原始 JSON'],'diag.updated':['Last read {t}','最近读取 {t}'],'diag.errors':['{n} errors','{n} 次错误'],'diag.logs':['System log','系统日志'],'logs.lead':['Device log records the last events of this run.','设备日志记录本次运行的最近事件。'],'logs.hint':['Only the most recent events from this run are kept; they are cleared on restart.','仅保留本次运行的最近事件，重启后清空。'],'logs.load_all':['Load all','读取全部'],'logs.download':['Download','下载'],'logs.empty':['No events yet','暂无事件'],'logs.overwritten':['Older entries were overwritten','较早的日志已被覆盖'],'diag.log_refresh':['Refresh','刷新'],
'diag.c_wifi':['Wi-Fi','Wi-Fi'],'diag.c_mqtt':['MQTT','MQTT'],'diag.c_ota':['Firmware update','固件升级'],'diag.c_panel':['Control panel','控制面板'],'diag.c_fan':['Fan driver','风机驱动'],
'diag.c_storage':['Settings storage','配置存储'],'diag.c_sensor':['Sensor','传感器'],'diag.c_clock':['Clock','时钟'],'diag.c_memory':['Free memory','可用内存'],
'diag.g_device':['Device','设备'],'diag.g_network':['Network','网络连接'],'diag.g_mqtt':['MQTT','MQTT'],'diag.g_ota':['Firmware update','固件升级'],'diag.g_fan':['Fan & panel','风机与面板'],
'diag.g_light':['Light ring','灯环'],'diag.g_sensor':['Sensor','传感器'],'diag.g_clock':['Clock','时钟'],'diag.g_screen':['Screen','屏幕'],'diag.g_sockets':['Sockets','插座'],
'diag.g_power':['Metering','计量'],'diag.g_time':['Clock','时钟'],'diag.g_lan':['LAN','局域网'],'diag.g_other':['Other','其他'],
/* Maintenance */
'sys.lead':['Restart the device or return it to defaults.','重启设备或恢复默认配置。'],'sys.reboot':['Restart','重启设备'],'sys.reboot_desc':['Settings are kept.','设置保留不变。'],
'sys.reboot_q':['Restart {m}?','重启 {m}？'],'sys.reboot_body':['The page reconnects when the device is back.','设备恢复后页面会自动重新连接。'],
'sys.reset':['Reset to defaults','恢复默认配置'],'sys.reset_desc':['Clears Wi-Fi, MQTT, password and all settings.','清除 Wi-Fi、MQTT、网页密码及全部设置。'],
'sys.reset_q':['Erase all settings?','清除全部配置？'],'sys.reset_body':['The device restarts with the setup hotspot. This cannot be undone.','设备将重启并开启配网热点，此操作无法撤销。'],
'sys.hint_a1':['On the device: hold the function key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything. Works even with child lock on.','设备上：功能键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置；童锁期间同样有效。'],
'sys.hint_m1':['On the device: a long press of the panel key clears Wi-Fi and the web password.','设备上：长按面板按键可清除 Wi-Fi 和网页密码。'],
'sys.hint_tc1':['On the device: hold the key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything (all sockets default to on).','设备上：按键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置（六路默认开启）。'],
/* Air quality */
'm.pm25':['PM2.5','PM2.5'],'m.formaldehyde':['Formaldehyde','甲醛'],'m.temperature':['Temperature','温度'],'m.humidity':['Humidity','湿度'],
'air.pm25.excellent':['Excellent','优'],'air.pm25.good':['Good','良'],'air.pm25.light':['Light pollution','轻度污染'],'air.pm25.moderate':['Moderate pollution','中度污染'],'air.pm25.heavy':['Heavy pollution','重度污染'],'air.pm25.severe':['Severe pollution','严重污染'],
'air.formaldehyde.pass':['Within limit','达标'],'air.formaldehyde.slight':['Slightly high','略高'],'air.formaldehyde.exceed':['Over limit','超标'],
'air.temperature.cool':['Cool','偏冷'],'air.temperature.comfort':['Comfortable','舒适'],'air.temperature.warm':['Warm','偏热'],
'air.humidity.dry':['Dry','偏干'],'air.humidity.comfort':['Comfortable','舒适'],'air.humidity.humid':['Humid','偏湿'],
/* A1 home */
'a1.fan':['Purifier','净化器'],'a1.power':['Power','电源'],'a1.running':['Running','运行中'],'a1.off':['Off','已关闭'],
'a1.sub_manual':['{p}% · manual','{p}% · 手动'],'a1.sub_auto':['{p}% · following M1','{p}% · 跟随 M1 自动调节'],'a1.sub_off':['Starts at {p}% when turned on','开启后以 {p}% 运行'],
'a1.locked_ota':['Controls paused during update or restart','升级或重启期间暂停控制'],
'a1.speed':['Fan speed','风速'],'a1.feedback_target':['Target speed','目标速度'],'a1.feedback_pwm':['Current output','当前输出'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
'a1.out_stopped':['Fan stopped','风机已停止'],'a1.out_ramp':['Output {a}% → ramping to {p}%','实际输出 {a}%，正在调整到 {p}%'],'a1.out_steady':['Output {a}%','实际输出 {a}%'],
'a1.fan_hint':['Output is the PWM level the firmware applies; the fan ramps gradually and has no speed sensor. Choosing a speed also turns the purifier on.','“实际输出”为软件 PWM 设定，风机逐步调整，设备没有转速回读。选择风速会同时开启净化器。'],
'a1.panel':['Panel','面板'],'a1.panel_ok':['Panel connected','面板通信正常'],'a1.panel_bad':['Panel not responding','面板无响应'],
'a1.child_lock':['Child lock','童锁'],'a1.child_lock_desc':['Locks power and speed keys on the device','锁定机身电源和调速按键'],'a1.lock_on':['Child lock on','童锁已开启'],'a1.lock_off':['Child lock off','童锁已关闭'],
'a1.button_hint':['Hold the Wi-Fi key for 2.5 s to open the setup hotspot; this works with child lock on.','长按 Wi-Fi 键 2.5 秒可开启配网热点，童锁期间仍可使用。'],
'a1.auto':['Auto control','自动联动'],'a1.auto_lead':['Adjusts the fan from linked M1 readings','根据绑定的 M1 读数调节风速'],
'a1.auto_empty':['No M1 is linked yet. Link one to run the purifier automatically.','尚未绑定 M1，绑定后可按空气质量自动运行。'],'a1.auto_link':['Link an M1','绑定 M1'],
'a1.auto_enable':['Turn on auto control','开启自动联动'],'a1.auto_peers':['{n} M1 · {f} reporting','{n} 台 M1 · {f} 台有数据'],
'a1.auto_failed':['No fresh M1 data. The fan keeps its current state.','暂无有效的 M1 数据，风机保持当前状态。'],'a1.auto_speed':['Auto speed {p}%','自动风速 {p}%'],
's.link_disabled':['Off','未开启'],'s.link_active':['Active','运行中'],'s.link_sensor_failed':['No data','无数据'],
'a1.ring':['Light ring','灯环'],'a1.ring_on':['Light ring','启用灯环'],'a1.always_on':['Always on','常亮'],'a1.always_on_desc':['Otherwise it lights for 2 s after each change','否则仅在操作后亮 2 秒'],
'a1.color':['Colour','颜色'],'a1.brightness':['Brightness','亮度'],'a1.effect_note':['Effect: {e}.','当前灯效：{e}。'],'a1.effect_change':['Change','更改'],
'a1.effect.0':['Speed bar','风速条'],'a1.effect.1':['Solid colour','固定颜色'],'a1.effect.2':['Breathing','呼吸'],'a1.effect.3':['Rainbow','彩虹'],'a1.effect.4':['Data segments','分段数据'],
'a1.effect_desc.0':['Ring length follows fan speed','灯环长度跟随风速'],'a1.effect_desc.1':['Whole ring in one colour','整圈单色'],'a1.effect_desc.2':['Slow fade in and out','缓慢明暗变化'],
'a1.effect_desc.3':['Cycling colours','循环彩色'],'a1.effect_desc.4':['Each segment shows a reading','每段显示一项读数'],
/* A1 light effects page */
'fx.lead':['How the ring looks. Colour and brightness are set on the home page.','设置灯环的显示方式；颜色和亮度在首页调整。'],'fx.effect':['Effect','灯效'],
'fx.follow':['Brightness follows fan speed','亮度随风速变化'],'fx.follow_desc':['Dimmer at low speed','低风速时更暗'],'fx.count':['Segments','分段数量'],'fx.segment':['Segment {n}','第 {n} 段'],
'fx.source':['Shows','显示内容'],'fx.display':['Style','显示方式'],'fx.range':['Range','数值范围'],'fx.comfort':['comfortable','适宜区间'],
'fx.low':['Low','偏低'],'fx.ok':['Comfortable','适宜'],'fx.high':['High','偏高'],
'fx.src.0':['Temperature','温度'],'fx.src.1':['Humidity','湿度'],'fx.src.2':['PM2.5','PM2.5'],'fx.src.3':['Formaldehyde','甲醛'],'fx.src.4':['Overall air quality','综合空气质量'],'fx.src.5':['Fan speed','风速'],
'fx.disp.0':['Fixed colour, brightness by value','固定颜色 + 数值亮度'],'fx.disp.1':['Comfort colour, fixed brightness','适宜程度颜色 + 固定亮度'],'fx.disp.2':['Comfort colour, brightness by value','适宜程度颜色 + 数值亮度'],
'fx.quality_hint':['Baselines used to compute "overall air quality".','用于计算“综合空气质量”的基准值。'],'fx.quality_pm':['PM2.5 baseline','PM2.5 基准'],'fx.quality_hcho':['Formaldehyde baseline','甲醛基准'],
/* A1 binding */
'bind.lead':['Link M1 monitors so the purifier can react to their readings.','绑定 M1 后，净化器可根据其读数自动运行。'],'bind.sensors':['Linked M1 monitors','已绑定的 M1'],
'bind.empty':['No M1 linked','尚未绑定 M1'],'bind.add':['Add an M1','添加 M1'],'bind.mac':['M1 MAC address','M1 的 MAC 地址'],'bind.ip':['LAN IP (optional)','局域网 IP（可选）'],'bind.ip_ph':['Found via MQTT if empty','留空则通过 MQTT 查找'],
'bind.ip_auto':['IP found via MQTT','IP 通过 MQTT 获取'],'bind.add_btn':['Add M1','添加'],'bind.added':['Added','已添加'],'bind.bad_mac':['Enter a 12-digit MAC address','请输入 12 位 MAC 地址'],'bind.dup':['Already in the list','已在列表中'],
'bind.pending':['Handshaking','握手中'],'bind.fresh':['Receiving data','数据正常'],'bind.stale':['No data','无数据'],'bind.probe':['Probe LAN','探测局域网'],'bind.probe_sent':['Probe sent','已发送探测'],
'bind.remove_q':['Remove this device?','移除此设备？'],'bind.remove_body':['{m} will no longer be linked.','{m} 将解除关联。'],
'bind.ids_title':['Next: allow this A1 on the M1','下一步：在 M1 上允许本机'],'bind.ids_body':['Copy the pairing ID to the M1 page → Settings → Linkage access.','复制以下配对 ID，粘贴到 M1 页面 → 设置 → 联动许可。'],
'bind.force':['Always use MQTT','强制使用 MQTT'],'bind.force_desc':['Skip the LAN connection','不使用局域网直连'],'bind.recovery':['Retry LAN automatically','自动检查局域网恢复'],'bind.recovery_desc':['Switch back to LAN when it recovers','恢复后切回局域网'],
'bind.timeout':['LAN timeout','局域网超时'],'bind.recovery_s':['Retry interval','恢复检查间隔'],
'bind.hint':['Both devices must use the same MQTT broker. The A1 prefers the LAN and falls back to MQTT.','两台设备需使用同一个 MQTT Broker。A1 优先局域网直连，失败时回退 MQTT。'],
'bind.group':['Purifier group','净化器组'],'bind.group_lead':['Run several A1 units as one. Enter the same name and member list on every A1.','多台 A1 作为一组运行；每台 A1 需填写相同的组名称和成员列表。'],
'bind.group_name':['Group name','组名称'],'bind.group_ph':['Empty = standalone','留空为独立设备'],'bind.member_add':['Add member','添加成员'],
/* A1 linkage */
'link.lead':['Rules that turn the purifier on, off and set its speed from M1 readings.','根据 M1 读数开关净化器并调节风速的规则。'],
'link.enable':['Automatic control','自动联动'],'link.enable_desc':['Manual control still works at any time','随时仍可手动控制'],
'link.no_peer':['Link an M1 first.','请先绑定 M1。'],'link.speed':['Fan speed','风速调节'],'link.metric':['Based on','依据指标'],'link.both':['Both','两者'],
'link.mode.0':['Fixed','固定风速'],'link.mode.1':['Proportional','线性调节'],'link.mode.2':['Target (PID)','目标值（PID）'],
'link.mode_desc.0':['Always the same speed','始终同一风速'],'link.mode_desc.1':['Faster as air gets worse','空气越差风速越高'],'link.mode_desc.2':['Hold a target level','维持在目标值'],
'link.fixed':['Speed','风速'],'link.lin_pm_a':['PM2.5 at','PM2.5 为'],'link.lin_hcho_a':['Formaldehyde at','甲醛为'],'link.lin_b':['→','时风速'],'link.lin_c':[', at',' ；为'],
'link.pid_pm':['Keep PM2.5 at','PM2.5 保持在'],'link.pid_hcho':['Keep formaldehyde at','甲醛保持在'],'link.range':['Speed between','风速范围'],'link.pid_tune':['PID tuning','PID 参数'],
'link.onoff':['Start and stop','自动启停'],'link.onoff_lead':['Keep the stop level below the start level to avoid rapid switching.','关闭阈值应低于启动阈值，避免频繁开关。'],
'link.on_rule':['Start automatically','自动开启'],'link.on_desc':['Turn on when air gets worse','空气变差时开启'],'link.off_rule':['Stop automatically','自动关闭'],'link.off_desc':['Turn off when air is clean','空气变好时关闭'],
'link.watch':['Watch','监测'],'link.any':['Any','任一满足'],'link.all':['All','全部满足'],'link.above':['above','高于'],'link.below':['below','低于'],
'link.hyst_warn':['The stop level should be lower than the start level.','关闭阈值应低于启动阈值。'],
'link.statistic':['With several M1','多台 M1 时取'],'link.debounce':['Condition must last','条件持续'],'link.min_switch':['Minimum time between on/off','最短开关间隔'],
'link.stat.0':['Average','平均值'],'link.stat.1':['Highest','最高值'],'link.stat.2':['Lowest','最低值'],'link.stat.3':['Median (more than 3)','中位数（多于 3 台）'],'link.stat.4':['Average without extremes','去掉最高最低后平均'],'link.stat.5':['First available in list','按列表顺序故障切换'],
/* Schedules / night */
'sch.lead_a1':['Turn the purifier on or off at set times.','在设定时间开启或关闭净化器。'],'sch.lead_tc1':['Switch sockets at set times (Beijing time).','在设定时间开关插座（北京时间）。'],
'sch.list':['Schedules','定时任务'],'sch.empty':['No schedules yet','暂无定时任务'],'sch.used':['{a} of {b} used','已使用 {a} / {b}'],'sch.off':['off','已停用'],'sch.hint':['Weekly events run in the device time zone and are not replayed after a missed window; a restart runs last.','每周任务按设备时区执行，错过的时段不补执行；重启类操作最后执行。'],'sch.add':['New schedule','新建定时'],'sch.time':['Time','时间'],'sch.date':['Date','日期'],
'sch.repeat':['Repeat','重复'],'sch.action':['Action','动作'],'sch.target':['Target','对象'],'sch.turn_on':['Turn on','开启'],'sch.turn_off':['Turn off','关闭'],'sch.weekly':['Weekly','每周'],
'sch.add_btn':['Add schedule','添加'],'sch.added':['Saved','已保存'],'sch.reset':['Clear form','清空表单'],'sch.when':['Date and time (device time zone)','执行日期与时间（设备时区）'],'sch.pick_day':['Pick at least one day','请至少选择一天'],'sch.future':['Pick a time in the future','请选择未来的时间'],
'sch.fan_on':['Turn on at {p}%','开启，风速 {p}%'],'sch.fan_off':['Turn off','关闭'],'sch.no_clock':['The clock is not synced yet; schedules will not run until it is.','时钟尚未校准，校准前定时任务不会执行。'],
'day.short.0':['Mon','一'],'day.short.1':['Tue','二'],'day.short.2':['Wed','三'],'day.short.3':['Thu','四'],'day.short.4':['Fri','五'],'day.short.5':['Sat','六'],'day.short.6':['Sun','日'],
'day.every':['Every day','每天'],'day.weekdays':['Weekdays','工作日'],'day.weekends':['Weekends','周末'],'day.once':['Once','仅一次'],
'night.lead':['Quieter fan and dimmer light during set hours.','在设定时段降低风速与灯光。'],'night.list':['Night periods','夜间时段'],'night.empty':['No night periods','暂无夜间时段'],
'night.add':['New night period','新建夜间时段'],'night.start':['From','开始'],'night.end':['Until','结束'],'night.next_day':['(next day)','（次日）'],
'night.fan':['Limit fan speed','限制风速'],'night.fan_desc':['Cap the speed during this period','时段内限制最高风速'],'night.fan_max':['Max speed','最高风速'],
'night.light':['Dim the light ring','调暗灯环'],'night.light_desc':['Cap brightness, 0 turns it off','限制亮度，0 为关闭'],'night.light_max':['Max brightness','亮度上限'],
'night.block_t':['Don’t auto-start','禁止自动开启'],'night.block_desc':['Auto control cannot turn the purifier on','自动联动不会开启净化器'],
'night.fan_cap':['Fan ≤ {p}%','风速 ≤ {p}%'],'night.light_cap':['Light ≤ {p}%','灯光 ≤ {p}%'],'night.light_off':['Light off','灯光关闭'],'night.block':['No auto-start','禁止自动开启'],'night.add_btn':['Add period','添加'],
/* M1 */
'm1.overall':['Air quality','空气质量'],'m1.v_excellent':['Excellent','优'],'m1.v_good':['Good','良好'],'m1.v_fair':['Fair','一般'],'m1.v_poor':['Poor','较差'],
'm1.all_ok':['All readings are in range','各项读数均在适宜范围'],'m1.no_data':['No data','暂无数据'],'m1.stale':['Data is out of date','数据已过期'],
'm1.stale_hint':['The sensor has not reported recently. Check Diagnostics.','传感器近期未上报，请查看诊断。'],'m1.updated':['Updated {n} s ago','{n} 秒前更新'],
'm1.screen':['Screen brightness','屏幕亮度'],'m1.screen_desc':['Shows the last level sent; the screen does not report it back','显示最近发送的档位，屏幕不回报实际亮度'],
'm1.linked':['Linked purifiers','联动的净化器'],'m1.linked_desc':['A1 units allowed to read this monitor','允许读取本机数据的 A1'],'m1.linked_empty':['No A1 is allowed yet','尚未允许任何 A1'],
'm1.allow_btn':['Allow an A1','添加许可'],'m1.session_ok':['Connected','已连接'],'m1.session_wait':['Waiting for A1','等待 A1 连接'],
'm1.perm_lead':['This M1 only answers A1 units listed here. Rules and fan control are set on the A1.','本机只响应此处允许的 A1；联动规则和风速控制在 A1 上设置。'],
'm1.allowed':['Allowed A1 units','已允许的 A1'],'m1.allowed_empty':['None yet','暂无'],'m1.allow_add':['Allow an A1','添加许可'],'m1.pair_id':['Pairing ID from the A1','A1 生成的配对 ID'],
'm1.pair_help':['On the A1: Settings → Linked M1 → add this M1, then copy the ID shown.','在 A1：设置 → 绑定 M1 → 添加本机后复制显示的配对 ID。'],
'm1.pair_bad':['Format: a1mac:m1mac (12 hex digits each)','格式：A1 的 MAC:M1 的 MAC（各 12 位十六进制）'],'m1.pair_other':['This ID is for a different M1','该配对 ID 属于另一台 M1'],
'm1.perm_hint':['Up to 8 entries. Both devices must use the same MQTT broker.','最多 8 个。两台设备需使用同一个 MQTT Broker。'],
/* TC1 */
'control.pending':['Waiting for device confirmation','等待设备确认中'],'control.unconfirmed':['Operation not confirmed; showing the latest device state','操作尚未确认，已恢复最近设备状态'],'control.syncing':['Confirming…','确认中…'],
 'tc1.sockets':['Sockets','插座'],'tc1.on_count':['{n} of 6 on','6 路中 {n} 路通电'],'tc1.all_on':['All on','全部开启'],'tc1.all_off':['All off','全部关闭'],
'tc1.on':['On','通电'],'tc1.off':['Off','断开'],'tc1.rename':['Rename','重命名'],'tc1.socket_n':['Socket {n}','插座 {n}'],
'tc1.output_hint':['Shows the output the strip has set; check the load to confirm power.','显示设备的输出设定，实际供电请以负载为准。'],
'tc1.power':['Power','功率'],'tc1.recent':['Recent samples','最近采样'],'tc1.energy':['Energy since start','累计电量'],'tc1.peak':['Recent peak','近期峰值'],
'tc1.lock_desc':['Disables the key on the strip','锁定机身按键'],'tc1.led':['Indicator light','指示灯'],'tc1.led_desc':['Status light on the strip','机身状态指示灯'],
'tc1.names':['Socket names','插座名称'],'tc1.names_desc':['Shown here and in Home Assistant','在本页和 Home Assistant 中显示'],
'tc1.metering':['Reporting & metering','上报与计量'],'tc1.report':['MQTT report interval','MQTT 上报间隔'],'tc1.report_help':['How often power is published to MQTT (1–3600 s).','功率发布到 MQTT 的频率（1–3600 秒）。'],
'tc1.calibration':['Calibration','计量校准'],'tc1.coef':['Power coefficient','功率系数'],'tc1.coef_warn':['Only change this with a known calibration value. An idle reading cannot verify accuracy.','仅在已知校准值时修改；空载读数无法验证计量精度。'],
'btn.lead':['See each gesture and its action. Expand a range to edit individual gestures.','按手势查看实际动作；相同动作合并显示，展开后可逐条编辑。'],'btn.current':['What each gesture does','按下后会发生什么'],
'btn.click_count':['Number of presses','连按次数'],'btn.hold_count':['Hold duration (seconds)','按住时长（秒）'],
'btn.single':['Single press','单击'],'btn.click_full':['Press {n} times','连按 {n} 次'],'btn.hold_full':['Hold {n} seconds','长按 {n} 秒'],
'btn.click_range':['Press {a}–{b} times','连按 {a}～{b} 次'],'btn.hold_range':['Hold {a}–{b} seconds','长按 {a}～{b} 秒'],
'btn.expand':['Expand to edit','展开编辑'],'btn.recovery':['Recovery gestures · fixed','恢复操作 · 固定功能'],'btn.reset_wifi':['Reset network settings','重置网络配置'],
'btn.n':['#','序号'],'btn.click':['Click','连击'],'btn.hold':['Hold','长按'],'btn.click_n':['×{n}','{n} 次'],'btn.hold_n':['{n} s','{n} 秒'],'btn.empty':['No custom events','暂无自定义事件'],
'btn.edit':['Set an event','设置事件'],'btn.kind':['Gesture','手势'],'btn.count':['Clicks / seconds','次数 / 秒数'],'btn.action':['Action','动作'],
'btn.reset_note':['Holding 5–10 s or over 10 s always triggers the recovery reset, regardless of mapping.','按住 5–10 秒或 10 秒以上固定触发恢复操作，不受映射影响。'],
'op.none':['Not set','未配置'],'op.g_switch':['Switch','开关'],'op.g_system':['System','系统'],'op.0':['All sockets','全部插座'],'op.7':['Indicator light','指示灯'],'op.8':['Restart device','重启设备'],
'op.9':['Open setup hotspot','开启配网热点'],'op.10':['Factory reset','恢复出厂设置'],'op.11':['Child lock','童锁'],'op.12':['Restart web service','重启网页服务'],'op.13':['Soft restart','软件重启'],
/* status values (from the shared diagnostics vocabulary) */
'sch.state.waiting':['Waiting','等待执行'],'sch.state.executed':['Executed','已执行'],'sch.state.missed':['Missed','已错过'],'sch.state.busy':['Skipped (busy)','设备忙，已跳过'],'sch.state.migration_disabled':['Disabled (old config)','旧配置不支持，已停用'],'s.ready':['Ready','就绪'],'s.disconnected':['Disconnected','未连接'],'s.connecting':['Connecting','连接中'],'s.synced':['Synced','校时成功'],'s.syncing':['Syncing','正在校时'],
's.waiting_network':['Waiting for network','等待网络'],'s.failed':['Failed','校时失败'],'s.screen_queue_failed':['Synced; screen update failed','网络校时成功，屏幕入队失败'],
's.idle':['Idle','空闲'],'s.pending':['Pending','等待验证'],'s.success':['Verified and saved','验证成功并已保存'],'s.storage_failure':['Save failed, rolled back','保存失败，已回滚'],
's.timeout_rollback':['Timed out, rolled back','连接超时，已回滚'],'s.legacy':['legacy','legacy'],'s.account':['TMCP','TMCP'],'s.downloading':['Downloading','下载中'],
/* diagnostic labels */
'd.wifi_trial_status':['Wi-Fi trial','Wi-Fi 试连状态'],'d.wifi_trial_active':['Verifying Wi-Fi','正在验证 Wi-Fi'],'d.uptime_seconds':['Uptime','运行时间'],'d.free_memory':['Free memory','可用内存'],
'd.child_lock':['Child lock','童锁'],'d.led_enabled':['Light enabled','启用指示灯'],'d.socket_names':['Socket names','插座名称'],'d.socket_states':['Socket outputs','插座输出'],
'd.time_synced':['Clock synced','时钟已校准'],'d.utc_time':['Device time','设备时间'],'d.fan_on':['Fan on','风机开启'],'d.speed':['Saved speed','风速'],'d.percentage':['Target speed','目标风速'],
'd.applied_speed':['Output speed','实际输出'],'d.requested_fan_on':['Requested on','请求开启'],'d.requested_speed':['Requested speed','请求风速'],'d.fan_ready':['Fan driver ready','风机驱动就绪'],
'd.panel_ready':['Panel OK','面板通信正常'],'d.panel_errors':['Panel errors','面板通信错误数'],'d.hardware_errors':['Hardware errors','硬件错误数'],'d.panel_raw':['Panel raw','面板原始数据'],
'd.version':['Firmware','固件版本'],'d.device_id':['Device ID','设备 ID'],'d.name':['Name','设备名称'],'d.ssid':['Network','网络名称'],'d.ip':['IP address','IP 地址'],
'd.wifi_connected':['Wi-Fi connected','Wi-Fi 已连接'],'d.ap_active':['Hotspot on','配网热点已开启'],'d.ap_name':['Hotspot name','热点名称'],'d.mqtt_connected':['MQTT connected','MQTT 已连接'],
'd.mqtt_status':['MQTT status','MQTT 状态'],'d.mqtt_host':['Broker','Broker 地址'],'d.mqtt_port':['Port','MQTT 端口'],'d.mqtt_user':['Username','MQTT 用户名'],'d.mqtt_topic_mode':['Topic mode','主题模式'],
'd.mqtt_errors':['MQTT errors','MQTT 错误次数'],'d.mqtt_last_error':['Last MQTT error','最近 MQTT 错误'],'d.mqtt_cleanup_warning':['HA cleanup failed','旧 HA 实体清理异常'],
'd.sensor_valid':['Sensor data valid','传感器数据有效'],'d.sensor_received':['Sensor data received','已收到传感器数据'],'d.age_ms':['Data age','数据距今'],
'd.temperature':['Temperature (℃)','温度（℃）'],'d.humidity':['Humidity (%)','湿度（%）'],'d.formaldehyde':['Formaldehyde (mg/m³)','甲醛（mg/m³）'],'d.pm25':['PM2.5 (µg/m³)','PM2.5（µg/m³）'],
'd.uart_ready':['UART ready','串口已就绪'],'d.rx_frames':['Frames received','接收帧数'],'d.unknown_frames':['Unknown frames','未知帧数'],'d.uart_errors':['UART errors','串口错误数'],
'd.discarded_bytes':['Discarded bytes','丢弃字节数'],'d.last_frame':['Last frame (hex)','最近串口帧（HEX）'],'d.brightness_requested':['Requested brightness','请求亮度档位'],
'd.ota_active':['Updating','正在升级'],'d.ota_state':['Update state','升级状态'],'d.ota_error':['Update error','升级错误'],'d.ota_progress':['Update progress (%)','升级进度（%）'],
'd.scan_busy':['Scanning Wi-Fi','正在扫描 Wi-Fi'],'d.web_password_set':['Web password set','已设置网页密码'],'d.mqtt_password_set':['MQTT password set','已设置 MQTT 密码'],'d.wifi_password_set':['Wi-Fi password set','已保存 Wi-Fi 密码'],
'd.ntp_host':['Preferred NTP','首选 NTP 服务器'],'d.ntp_server':['Last NTP tried','最近尝试的校时源'],'d.ntp_status':['Sync status','校时状态'],'d.ntp_synced':['Synced this boot','本次启动已完成校时'],
'd.ntp_screen_queued':['Screen time queued','屏幕时间已入队'],'d.ntp_last_success':['Last sync','最近成功校时'],'d.ntp_next_seconds':['Next sync in (s)','下次校时（秒后）'],'d.timezone_minutes':['UTC offset (min)','时区（UTC 分钟差）'],
'd.led_visible':['Light showing','灯环显示中'],'d.led_always_on':['Always on','常亮'],'d.brightness':['Brightness','亮度'],'d.red':['Red','红'],'d.green':['Green','绿'],'d.blue':['Blue','蓝'],
'd.config_dirty':['Saving settings','设置保存中'],'d.save_error':['Save error','保存错误'],'d.reboot_pending':['Restart pending','等待重启'],
'd.report_seconds':['Report interval (s)','上报间隔（秒）'],'d.powerCoefficientX100':['Power coefficient (×100)','功率系数（×100）'],'d.mask':['Subnet mask','子网掩码'],'d.gateway':['Gateway','网关']
};
const KEY='phicomm.language';
let preference='auto';try{preference=localStorage.getItem(KEY)||'auto';}catch{}
const detect=()=>{for(const l of navigator.languages||[navigator.language||'en']){const s=l.toLowerCase();if(s.startsWith('zh'))return 'zh-CN';if(s.startsWith('en'))return 'en';}return 'en';};
const listeners=[];
const I18N={
 lang:preference==='auto'?detect():preference,preference,
 has:k=>Object.hasOwn(D,k),
 t(k,vars){const e=D[k];let s=e?e[I18N.lang==='zh-CN'?1:0]:k;if(!e)console.warn('i18n missing',k);
  if(vars)s=s.replace(/\\{(\\w+)\\}/g,(_,n)=>vars[n]??'');return s;},
 apply(root=document){
  document.documentElement.lang=I18N.lang;
  root.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18n)el.textContent=I18N.t(el.dataset.i18n);});
  root.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=I18N.t(el.dataset.i18nPh));
  root.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',I18N.t(el.dataset.i18nAria)));
 },
 set(p){I18N.preference=p;try{localStorage.setItem(KEY,p);}catch{}I18N.lang=p==='auto'?detect():p;I18N.apply();listeners.forEach(f=>f());},
 onChange:f=>listeners.push(f),
 keys:()=>Object.keys(D),
 extend:o=>Object.assign(D,o)
};
document.documentElement.lang=I18N.lang;
window.addEventListener('languagechange',()=>{if(I18N.preference==='auto')I18N.set('auto');});
window.I18N=I18N;
})();
<\/script>
<script>// Device service.js retains its HTTP-shaped API; transport is supplied by host.
(()=>{
 const pending=new Map();
 let activeRead=null;
 function send(id,entry){entry.sent=true;if(entry.read)activeRead=id;parent.postMessage({type:'device-command',id,request:entry.request},parent.location.origin);}
 function nextRead(){
  if(activeRead)return;
  const waiting=[...pending].filter(([,entry])=>entry.read&&!entry.sent);
  const next=waiting.find(([,entry])=>entry.request.action==='status.get')||waiting[0];
  if(next)send(...next);
 }
 function remove(id){const entry=pending.get(id);if(!entry)return;pending.delete(id);clearTimeout(entry.timer);entry.cleanup();if(activeRead===id)activeRead=null;}

 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  remove(event.data.id);
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));nextRead();
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{remove(id);clearTimeout(timer);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));nextRead();};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   const request=JSON.parse(options.body),entry={resolve,timer,cleanup,request,read:request.action.endsWith('.get'),sent:false};
   pending.set(id,entry);
   if(entry.read)nextRead();else send(id,entry);
  });
 };
})();
window.addEventListener('storage',event=>{
 if(event.key!=='phicomm.appearance')return;
 if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
 else document.documentElement.dataset.theme=event.newValue;
});
<\/script><script>async function command(action,params={}){
 const request={action,params};
 if(!action.endsWith('.get'))request.request_id=globalThis.crypto?.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
 const response=await fetch('/api/v1/command',{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify(request),cache:'no-store'});
 const reply=await response.json();
 if(!response.ok||!['ok','accepted'].includes(reply.code)){const error=Error(reply.message||reply.code||('HTTP '+response.status));error.code=reply.code;throw error;}
 return reply.data||{};
 }finally{clearTimeout(timer);}
}
async function api(path,data){
 if(path==='/status')return command('status.get');
 if(path==='/sensors/average')return command('sensors.average.get');
 if(path==='/power')return command('power.get');
 if(path==='/wifi/scan')return command(data===undefined?'wifi.scan.get':'wifi.scan');
 const domains={'/binding/config':'binding','/binding/status':'binding.status','/binding/probe':'binding.probe','/linkage/config':'linkage','/light/advanced':'light_effect','/sleep/config':'night','/time/config':'time'};
 if(domains[path])return command(domains[path]+(path==='/binding/probe'?'':data===undefined?'.get':'.set'),data||{});
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/outlet':'outlet.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
 if(direct[path]){if(['/light','/light/config'].includes(path)&&data.brightness!==undefined)data={...data,brightness:Math.round(data.brightness*100/255)};return command(direct[path],data);}
 if(path==='/display/brightness')return command('display.set',{brightness:data.level*25});
 if(path==='/socket'){for(let index=0;index<data.states.length;index++)await command('outlet.set',{index,on:!!data.states[index]});return {};}
 const sections={'/wifi/config':'wifi','/mqtt/config':'mqtt','/deviceName':'device','/auth/password':'auth','/socketNames':'socket','/mqtt/report/freq':'report','/power/coefficient':'meter','/ntp/config':'ntp'};
 if(sections[path]){
  let values={...data};
  if(path==='/power/coefficient')values={coefficient_x100:Number(data)};
  if(path==='/mqtt/config'){delete values.topic_mode;delete values.clear_password;if(data.clear_password)values.password='';else if(!values.password)delete values.password;}
  if(path==='/wifi/config'){delete values.open_network;if(data.open_network)values.password='';else if(!values.password)delete values.password;}
  return command('config.set',{section:sections[path],values});
 }
 throw Error('不支持的操作');
}
<\/script>
<script>/* Public provisioning contract. Passwords and session tokens are never encoded into a URL. */
(()=>{
'use strict';
const VERSION=1,TTL=120000;
const bytes=s=>new TextEncoder().encode(s).length;
function localHost(host){
 const h=host.toLowerCase().replace(/^\\[|\\]$/g,'');
 if(h==='localhost'||h==='::1')return true;
 if(h.includes(':'))return /^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(h);
 if(!/^\\d+\\.\\d+\\.\\d+\\.\\d+$/.test(h))return false;
 const p=h.split('.').map(Number);if(p.some(n=>n>255))return false;
 return p[0]===10||p[0]===127||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===169&&p[1]===254);
}
function deviceURL(raw){
 if(typeof raw!=='string'||!raw.trim()||raw.length>256)throw Error('device');
 const value=raw.trim(),url=new URL(value.includes('://')?value:'http://'+value);
 if(!['http:','https:'].includes(url.protocol)||!localHost(url.hostname)||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw Error('device');
 return url;
}
function platformOrigin(raw){
 const u=new URL(raw);
 if(raw!==u.origin||!(u.protocol==='https:'||(u.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(u.hostname))))throw Error('origin');
 return u.origin;
}
function nonce(){const a=new Uint8Array(32);crypto.getRandomValues(a);return Array.from(a,n=>n.toString(16).padStart(2,'0')).join('');}
function readTicket(hash,now=Date.now()){
 if(!hash.startsWith('#iotcloud-import='))return null;
 if(hash.length>2048)throw Error('ticket');
 const p=new URLSearchParams(hash.slice(1));
 if([...p.keys()].sort().join(',')!=='expires,host,iotcloud-import,origin,port,user')throw Error('ticket');
 const id=p.get('iotcloud-import'),expires=Number(p.get('expires')),origin=platformOrigin(p.get('origin'));
 if(!/^[a-f0-9]{64}$/.test(id)||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('ticket');
 const visible=config({v:VERSION,host:p.get('host'),port:Number(p.get('port')),user:p.get('user'),password:'',protocol:'tmcp',expires},now);
 return {id,expires,origin,host:visible.host,port:visible.port,user:visible.user};
}
function config(value,now=Date.now()){
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).sort().join(',')!=='expires,host,password,port,protocol,user,v')throw Error('config');
 const {v,host,port,user,password,protocol,expires}=value;
 if(v!==VERSION||protocol!=='tmcp'||typeof host!=='string'||!host||bytes(host)>127||!/^([a-zA-Z0-9.-]+|\\[[a-fA-F0-9:]+\\])$/.test(host)||host.startsWith('.')||host.endsWith('.')||typeof user!=='string'||bytes(user)>63||/[\\x00-\\x1f\\x7f]/.test(user)||typeof password!=='string'||bytes(password)>256||/[\\x00-\\x1f\\x7f]/.test(password)||!Number.isInteger(port)||port<1||port>65535||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('config');
 return {v,host,port,user,password,protocol,expires};
}
function packet(e,{source,origin,id,expires},type){
 const d=e.data;return Date.now()<expires&&e.source===source&&e.origin===origin&&!!d&&typeof d==='object'&&d.type===type&&d.id===id;
}
globalThis.IotProvision=Object.freeze({VERSION,TTL,deviceURL,platformOrigin,nonce,readTicket,config,packet});
})();
<\/script>
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
// Remove the non-secret handshake fragment before any async device requests.
let importTicket=null,importInvalid=false;
if(location.hash.startsWith('#iotcloud-import=')){
 try{importTicket=IotProvision.readTicket(location.hash);}catch{importInvalid=true;}
 history.replaceState(null,'',location.pathname+location.search+'#settings/mqtt');
}

function h(tag,props,...kids){
 const el=document.createElement(tag);
 for(const [k,v] of Object.entries(props||{})){
  if(v==null||v===false)continue;
  if(k==='class')el.className=v;
  else if(k==='i18n'){el.dataset.i18n=v;el.textContent=t(v);}
  else if(k.startsWith('on')&&typeof v==='function')el.addEventListener(k.slice(2),v);
  else if(k in el&&!k.includes('-'))el[k]=v;
  else el.setAttribute(k,v===true?'':v);
 }
 for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;el.append(c.nodeType?c:document.createTextNode(String(c)));}
 return el;
}
const ICONS={
 power:'<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>',
 fan:'<path d="M10.8 9.1C9 6.4 9.6 3 12.6 2.2c3-.8 4.5 2.4 2.6 6.4M14.9 10.8c2.7-1.8 6.1-1.2 6.9 1.8.8 3-2.4 4.5-6.4 2.6M13.2 14.9c1.8 2.7 1.2 6.1-1.8 6.9-3 .8-4.5-2.4-2.6-6.4M9.1 13.2C6.4 15 3 14.4 2.2 11.4c-.8-3 2.4-4.5 6.4-2.6"/><circle cx="12" cy="12" r="2"/>',
 plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
 air:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 wifi:'<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
 edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 external:'<path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 auto:'<path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M3 21v-5h5"/>'
};
function icon(name,cls='i'){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('class',cls);s.setAttribute('aria-hidden','true');s.innerHTML=ICONS[name]||'';return s;}

/* ---------- Feedback ---------- */
function toast(text,bad=false){
 let box=$('toasts');if(!box){box=h('div',{id:'toasts',class:'toasts',role:'status','aria-live':'polite'});document.body.append(box);}
 const el=h('div',{class:'toast'+(bad?' bad':'')},text);box.append(el);setTimeout(()=>el.remove(),bad?6000:2600);
}
async function run(button,fn,okKey='toast.accepted'){
 if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
 try{const r=await fn();if(okKey)toast(t(okKey));return r;}
 catch(e){toast(e.message||String(e),true);}
 finally{if(button){button.disabled=false;button.removeAttribute('aria-busy');}}
}
function onSubmit(form,fn,okKey){form.addEventListener('submit',e=>{e.preventDefault();run(form.querySelector('button[type=submit],button:not([type])'),fn,okKey);});}
function confirmDialog({title,body,ok,danger}){
 if(typeof document.body.append!=='function'||!document.createElement('dialog').showModal)return Promise.resolve(window.confirm(title+'\\n'+body));
 return new Promise(resolve=>{
  const d=h('dialog',{},h('h2',{},title),h('p',{},body),
   h('div',{class:'form-actions'},
    h('button',{class:'btn '+(danger?'danger':'primary'),type:'button',onclick:()=>{d.close();resolve(true);}},ok),
    h('button',{class:'btn ghost',type:'button',onclick:()=>d.close()},t('common.cancel'))));
  d.addEventListener('close',()=>{d.remove();resolve(false);});
  document.body.append(d);d.showModal();
 });
}

/* ---------- Controls ---------- */
function switchRow(id,titleKey,descKey){
 return h('label',{class:'switch'},h('span',{class:'text'},h('b',{i18n:titleKey}),descKey&&h('span',{i18n:descKey})),h('input',{type:'checkbox',role:'switch',id}));
}
function seg(options,onPick,{full=false,aria}={}){
 const label=k=>typeof k==='function'?k():I18N.has(k)?t(k):k;
 const box=h('div',{class:'seg'+(full?' full':''),role:'group','aria-label':aria||null});
 for(const [value,key] of options)box.append(h('button',{type:'button','data-value':String(value),'aria-pressed':'false',onclick:()=>{box.set(value);onPick(value);}},label(key)));
 box.set=v=>{for(const b of box.children)b.setAttribute('aria-pressed',String(b.dataset.value===String(v)));box.value=v;};
 box.relabel=()=>options.forEach(([,key],i)=>{box.children[i].textContent=label(key);});
 I18N.onChange(box.relabel);
 return box;
}
const DAY_BITS=[1,2,4,8,16,32,64];
function daysPicker(name,mask=127){
 const box=h('div',{class:'days',role:'group'});
 DAY_BITS.forEach((bit,i)=>box.append(h('label',{},h('input',{type:'checkbox',name,value:bit,checked:!!(mask&bit)}),h('span',{'data-i18n':'day.short.'+i},t('day.short.'+i)))));
 box.mask=()=>[...box.querySelectorAll('input')].reduce((m,i)=>m|(i.checked?Number(i.value):0),0);
 box.setMask=m=>box.querySelectorAll('input').forEach(i=>{i.checked=!!(m&Number(i.value));});
 return box;
}
function presetDays(picker){
 return h('div',{class:'row small'},[[127,'day.every'],[31,'day.weekdays'],[96,'day.weekends']].map(([m,k])=>h('button',{type:'button',class:'btn ghost',style:'min-height:28px;padding:2px 8px',onclick:()=>picker.setMask(m)},h('span',{i18n:k}))));
}
function daysText(mask){
 if(!mask)return t('day.once');if(mask===127)return t('day.every');if(mask===31)return t('day.weekdays');if(mask===96)return t('day.weekends');
 return DAY_BITS.map((b,i)=>mask&b?t('day.short.'+i):null).filter(Boolean).join(I18N.lang==='zh-CN'?'、':', ');
}
const hhmm=m=>String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const toMinutes=v=>{const [a,b]=v.split(':').map(Number);return a*60+b;};
function duration(sec){const d=Math.floor(sec/86400),hr=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return d?t('time.dh',{d,h:hr}):hr?t('time.hm',{h:hr,m}):t('time.m',{m});}
function summary(items){return h('dl',{class:'summary'},items.filter(Boolean).map(([k,v,dot])=>h('div',{},h('dt',{i18n:k}),h('dd',{},dot?h('span',{class:'dot '+dot}):null,v))));}
function card(titleKey,leadKey,...body){return h('section',{class:'card'},h('div',{class:'card-head'},h('div',{},h('h2',{i18n:titleKey}),leadKey&&h('p',{class:'help',i18n:leadKey}))),...body);}
function info(key){return h('details',{class:'info'},h('summary',{},icon('info'),h('span',{i18n:'common.more_info'})),h('p',{i18n:key}));}
function pageHead(titleKey,leadKey){return h('div',{},h('h2',{class:'page-title',i18n:titleKey}),h('p',{class:'page-lead',i18n:leadKey}));}
function saveBar(fn,label='common.save'){const b=h('button',{type:'button',class:'btn primary'},h('span',{i18n:label}));b.onclick=()=>run(b,fn);return h('div',{class:'form-actions'},b);}
function num(model,key,{min,max,step='any',unit,width}={}){
 const input=h('input',{type:'number',value:model[key],min,max,step,style:width?'width:'+width:null,oninput:e=>{if(e.target.value!==''&&Number.isFinite(+e.target.value))model[key]=+e.target.value;}});
 return unit?h('span',{class:'input-unit'},input,h('em',{},unit)):input;
}
function flag(model,key,titleKey,descKey){const r=switchRow(null,titleKey,descKey);const i=r.querySelector('input');i.checked=!!model[key];i.onchange=()=>{model[key]=typeof model[key]==='boolean'?i.checked:Number(i.checked);};return r;}
function slider(model,key,{min=0,max=100,fmt=v=>v+'%'}={}){
 const out=h('b',{class:'num'},fmt(model[key]));
 const r=h('input',{type:'range',min,max,value:model[key],oninput:e=>{model[key]=+e.target.value;out.textContent=fmt(model[key]);}});
 return [out,r];
}
function normalizeMac(v){const m=(v||'').replace(/[^0-9a-f]/gi,'').toLowerCase();return m.length===12?m:null;}
function prettyMac(m){return (m||'').toUpperCase().replace(/(..)(?!$)/g,'$1:');}
const clone=o=>JSON.parse(JSON.stringify(o));

/* Air quality bands: PM2.5 per GB 3095, formaldehyde limit per GB/T 18883-2022,
 * temperature and humidity comfort per the A1 light-segment defaults. */
const AIR={
 pm25:{unit:'µg/m³',max:250,bands:[[35,'excellent','ok'],[75,'good','ok'],[115,'light','warn'],[150,'moderate','warn'],[250,'heavy','bad'],[Infinity,'severe','bad']]},
 formaldehyde:{unit:'mg/m³',max:0.2,bands:[[0.08,'pass','ok'],[0.1,'slight','warn'],[Infinity,'exceed','bad']]},
 temperature:{unit:'℃',min:0,max:40,bands:[[18,'cool','warn'],[26,'comfort','ok'],[Infinity,'warm','warn']]},
 humidity:{unit:'%',max:100,bands:[[40,'dry','warn'],[60,'comfort','ok'],[Infinity,'humid','warn']]}
};
function grade(metric,v){const b=AIR[metric].bands.find(([lim])=>v<=lim);return {key:'air.'+metric+'.'+b[1],cls:b[2]};}
function airScale(metric,v){
 const m=AIR[metric],lo=m.min||0,span=m.max-lo;let prev=lo;
 const strip=h('div',{class:'scale'});
 for(const [lim,,cls] of m.bands){const end=Math.min(lim,m.max);if(end<=prev)continue;strip.append(h('i',{class:cls,style:'flex:'+((end-prev)/span*100).toFixed(2)}));prev=end;}
 strip.append(h('b',{style:'left:'+Math.max(0,Math.min(100,(v-lo)/span*100))+'%'}));
 return strip;
}
const TZ=[-720,-660,-600,-540,-480,-420,-360,-300,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,540,570,600,630,660,720,780,840];
function tzLabel(m){const sg=m<0?'−':'+',a=Math.abs(m);return 'UTC'+sg+String(Math.floor(a/60)).padStart(2,'0')+':'+String(a%60).padStart(2,'0')+(m===480?' · '+t('tz.cn'):'');}

/* ---------- Header, navigation, banners ---------- */
const UI=window.UI={$,h,icon,toast,run,onSubmit,confirm:confirmDialog,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,duration,summary,card,info,pageHead,saveBar,num,flag,slider,normalizeMac,prettyMac,clone,AIR,grade,airScale,tzLabel,state:null,caps:null,pages:{},device:null,clockCard,maintenancePage,scanNetworks};
// Keep requested output visible until a fresh read confirms it. Polls may still
// contain the pre-write state while the device applies an accepted command.
let pendingControl=null;
UI.acceptStatus=s=>{UI.confirmed=s;UI.state=pendingControl?{...s,...pendingControl}:s;return UI.state;};
UI.control=async(action,params,patch)=>{
 if(pendingControl){UI.device.onStatus?.(UI.state);throw Error(t('control.pending'));}
 pendingControl=patch;UI.controlBusy=true;
 const render=()=>{if(UI.device.onStatus)UI.device.onStatus(UI.state);};
 UI.state={...UI.state,...patch};render();
 let sendError,last;
 const matches=s=>s&&Object.entries(patch).every(([k,v])=>Object.hasOwn(s,k)&&(Array.isArray(v)?Array.isArray(s[k])&&v.length===s[k].length&&v.every((x,i)=>!!x===!!s[k][i]):typeof v==='boolean'?!!s[k]===v:s[k]===v));
 try{
  try{await command(action,params);}catch(e){sendError=e;if(e.code&&!['timeout','offline'].includes(e.code))throw e;}
  const until=Date.now()+20000;
  do{
   last=await UI.reload();
   if(matches(last))return last;
   await new Promise(resolve=>setTimeout(resolve,750));
  }while(Date.now()<until);
  throw Error(t('control.unconfirmed')+(sendError?' · '+sendError.message:''));
 }finally{
  pendingControl=null;UI.controlBusy=false;UI.state=last||UI.confirmed||UI.state;render();
 }
};
function header(dev){
 const lang=h('select',{id:'langPick','aria-label':'Language'},
  h('option',{value:'auto','data-i18n':'pref.lang_auto'},t('pref.lang_auto')),h('option',{value:'en'},'English'),h('option',{value:'zh-CN'},'简体中文'));
 lang.value=I18N.preference;lang.onchange=()=>I18N.set(lang.value);
 const theme=h('select',{id:'themePick','aria-label':'Theme'},['system','light','dark'].map(v=>h('option',{value:v,'data-i18n':'pref.theme_'+v},t('pref.theme_'+v))));
 let saved='system';try{saved=localStorage.getItem('phicomm.appearance')||'system';}catch{}
 const apply=v=>{if(v==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.dataset.theme=v;};
 theme.value=saved;apply(saved);theme.onchange=()=>{apply(theme.value);try{localStorage.setItem('phicomm.appearance',theme.value);}catch{}};
 return h('header',{class:'topbar'},
  h('div',{class:'brand'},h('div',{class:'logo'},icon(dev.icon)),h('div',{class:'grow'},h('div',{class:'kind','data-i18n':dev.kindKey},t(dev.kindKey)),h('h1',{id:'title'},dev.model))),
  h('div',{class:'prefs'},lang,theme),
  h('div',{class:'chips',id:'chips'}));
}
function chip(dotCls,labelKey,value){return h('span',{class:'chip'},h('span',{class:'dot '+dotCls}),h('span',{i18n:labelKey}),value!=null&&h('b',{},value));}
function renderChips(s){
 const c=$('chips');if(!c)return;
 const wifi=s.wifi_connected?chip('ok','chip.wifi',s.ssid+' · '+s.ip):s.ap_active?chip('warn','chip.hotspot',s.ap_name):chip('bad','chip.wifi',t('state.connecting'));
 const mq=!s.mqtt_host?chip('','chip.mqtt',t('state.off')):s.mqtt_connected?chip('ok','chip.mqtt',t('state.ready')):chip('warn','chip.mqtt',t('s.'+(s.mqtt_status||'connecting')));
 c.replaceChildren(wifi,mq,h('span',{class:'chip'},h('span',{i18n:'chip.firmware'}),h('b',{class:'num'},s.version||'—')),...(UI.device.chips?UI.device.chips(s):[]));
}
function renderBanners(s,lost){
 const b=$('banners');if(!b)return;b.replaceChildren();
 const add=(cls,ic,text)=>b.append(h('div',{class:'banner '+cls,role:cls==='bad'?'alert':null},icon(ic),h('span',{},text)));
 if(lost){add('bad','alert',t('banner.lost'));return;}
 if(s.ota_active)add('info','auto',t('banner.ota',{p:s.ota_progress}));
 if(s.reboot_pending)add('info','auto',t('banner.rebooting'));
 if(s.mqtt_cleanup_warning)add('warn','alert',t('banner.cleanup'));
 if(s.save_error)add('bad','alert',t('banner.save_error',{e:s.save_error}));
 if(s.ap_active&&!s.wifi_connected)add('warn','wifi',t('banner.hotspot',{n:s.ap_name}));
}
function buildNav(dev){
 const side=$('side');side.replaceChildren();
 for(const [groupKey,keys] of dev.groups){
  const links=keys.filter(k=>UI.pages[k]).map(k=>h('a',{href:'#settings/'+k,'data-i18n':dev.nav[k]},t(dev.nav[k])));
  if(!links.length)continue;
  side.append(h('div',{class:'group','data-i18n':groupKey},t(groupKey)));
  for(const a of links)side.append(a);
 }
}
function showRoute(){
 const m=/^settings\\/([a-z]+)$/.exec(location.hash.slice(1));
 const page=m&&document.querySelector('[data-settings-page="'+m[1]+'"]')?m[1]:m?(UI.device.groups.flatMap(g=>g[1]).find(k=>UI.pages[k])||null):null;
 $('homePage').hidden=!!page;$('settingsPage').hidden=!page;
 document.querySelectorAll('[data-settings-page]').forEach(p=>{p.hidden=p.dataset.settingsPage!==page;});
 document.querySelectorAll('.tabs a').forEach(a=>{const on=a.dataset.tab===(page?'settings':'home');if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelectorAll('.side a').forEach(a=>{if(a.hash==='#settings/'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page&&!UI.state)load().then(()=>afterShow(page));else afterShow(page);
}
function afterShow(page){
 if(!page)return;
 const active=document.querySelector('.side a[aria-current]'),side=$('side');
 // Reveal mobile menu items without scrollIntoView scrolling the whole page.
 if(active&&side&&side.scrollWidth>side.clientWidth){
  const item=active.getBoundingClientRect(),menu=side.getBoundingClientRect();
  if(item.left<menu.left)side.scrollLeft+=item.left-menu.left;
  else if(item.right>menu.right)side.scrollLeft+=item.right-menu.right;
 }
 const p=UI.pages[page];if(p&&p.show)p.show();
}
/* Wi-Fi scan is shared: start, poll, and hand the sorted list to a callback. */
async function scanNetworks(onList){
 await command('wifi.scan');
 for(let i=0;i<25;i++){const r=await command('wifi.scan.get');if(r.scanning){await new Promise(res=>setTimeout(res,700));continue;}onList(r.networks||[]);return;}
 throw Error(t('wifi.scan_timeout'));
}

/* ---------- Shared settings pages ---------- */
function wifiPage(){
 const sum=h('div'),list=h('div',{class:'list',hidden:true});
 const ssid=h('input',{id:'ssid',maxLength:32,required:true,autocomplete:'off'});
 const pass=h('input',{id:'wifiPassword',type:'password',maxLength:63,autocomplete:'new-password',placeholder:t('wifi.pass_ph')});
 const open=switchRow('openNetwork','wifi.open');
 const scanBtn=h('button',{type:'button',class:'btn',id:'scan'},icon('auto'),h('span',{i18n:'wifi.scan'}));
 const form=h('form',{id:'wifiForm',class:'stack'},
  h('label',{class:'field'},h('span',{i18n:'wifi.ssid'}),h('div',{class:'row'},h('div',{class:'grow'},ssid),scanBtn)),list,
  h('label',{class:'field'},h('span',{i18n:'wifi.password'}),pass),open,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'wifi.save'}))),info('wifi.hint'));
 open.querySelector('input').onchange=e=>{pass.disabled=e.target.checked;};
 scanBtn.onclick=()=>run(scanBtn,()=>scanNetworks(net=>{
  list.replaceChildren(...net.slice().sort((a,b)=>b.rssi-a.rssi).map(n=>h('button',{type:'button',class:'item',style:'cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%',
   onclick:()=>{ssid.value=n.ssid;open.querySelector('input').checked=n.security===0;pass.disabled=n.security===0;list.hidden=true;pass.focus();}},
   icon('wifi'),h('span',{class:'grow'},h('b',{},n.ssid),h('span',{},t('wifi.signal.'+(n.rssi>-55?3:n.rssi>-70?2:1))+' · '+n.rssi+' dBm')),n.security===0?h('span',{class:'badge',i18n:'wifi.open_badge'}):icon('lock'))));
  list.hidden=false;
  if(!net.length)throw Error(t('wifi.none'));
 }),null);
 onSubmit(form,()=>api('/wifi/config',{ssid:ssid.value,password:pass.value,open_network:open.querySelector('input').checked}),'wifi.verifying');
 return {el:h('div',{class:'stack'},pageHead('nav.wifi','wifi.lead'),sum,card('wifi.change',null,form)),
  status(s){sum.replaceChildren(summary([['wifi.status',s.wifi_connected?t('state.connected'):s.ap_active?t('state.hotspot'):t('state.connecting'),s.wifi_connected?'ok':s.ap_active?'warn':'bad'],
   ['wifi.ssid',s.ssid||'—'],['wifi.ip',s.ip||'—'],s.ap_active?['wifi.ap',s.ap_name]:['wifi.saved_password',t(s.wifi_password_set?'common.yes':'common.no')]]));},
  init(s){ssid.value=s.ssid||'';}};
}
function mqttImportPanel(dev,fields){
 const box=h('section',{class:'card stack',id:'mqttImport',hidden:!importTicket&&!importInvalid});
 if(importInvalid){box.append(h('p',{role:'alert'},t('import.invalid')));return box;}
 if(!importTicket)return box;
 const ticket=importTicket;importTicket=null;
 const source=window.opener;
 const status=h('p',{role:'status'}),accept=h('button',{type:'button',class:'btn primary',disabled:true},t('import.accept')),
 cancel=h('button',{type:'button',class:'btn'},t('common.cancel'));
 box.append(h('h2',{},t('import.title')),h('p',{},t('import.source',{origin:ticket.origin})),h('p',{},t('import.preview',{host:ticket.host,port:ticket.port,user:ticket.user||'—'})),
  h('p',{class:'help'},t('import.help')),h('p',{class:'help'},t('import.http')),
  h('div',{class:'form-actions'},accept,cancel),status);
 let waiting=false,done=false,timer,original=null;
 box.activate=()=>{if(!done&&source&&Date.now()<ticket.expires)accept.disabled=false;};
 const detach=()=>{window.removeEventListener('message',receive);clearTimeout(timer);try{window.opener=null;}catch{}};
 const clear=()=>{fields.pass.value='';if(original){fields.host.value=original.host;fields.port.value=original.port;fields.user.value=original.user;if(fields.protocol)fields.protocol.value=original.protocol;fields.clear.checked=original.clear;original=null;}waiting=false;done=true;detach();accept.disabled=true;};
 box.saved=()=>{original=null;fields.pass.value='';clearTimeout(timer);};
 box.guard=()=>{if(waiting)throw Error(t('import.waiting'));};
 const finish=()=>{clear();status.textContent=t('import.expired');};
 const receive=e=>{
  if(!waiting||done||!IotProvision.packet(e,{source,origin:ticket.origin,id:ticket.id,expires:ticket.expires},'iotcloud.provision.config'))return;
  let data;
  try{if(Object.keys(e.data).sort().join(',')!=='id,password,type')throw Error();data=IotProvision.config({v:1,host:ticket.host,port:ticket.port,user:ticket.user,password:e.data.password,protocol:'tmcp',expires:ticket.expires});}catch{finish();status.textContent=t('import.invalid');return;}
  // Only front-end fields are touched. config.set remains the normal save flow.
  fields.host.value=data.host;fields.port.value=String(data.port);fields.user.value=data.user;fields.pass.value=data.password;
  if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=data.password==='';
  waiting=false;done=true;detach();accept.hidden=true;status.textContent=t('import.received');
  source.postMessage({type:'iotcloud.provision.received',id:ticket.id},ticket.origin);
  // Never leave an unsaved imported host paired with the device's old password.
  timer=setTimeout(()=>{clear();status.textContent=t('import.expired');},Math.max(0,ticket.expires-Date.now()));
 };
 cancel.onclick=()=>{clear();box.hidden=true;};
 accept.onclick=()=>{
  if(done||Date.now()>=ticket.expires||!source){finish();return;}
  original={host:fields.host.value,port:fields.port.value,user:fields.user.value,protocol:fields.protocol?.value,clear:fields.clear.checked};
  fields.host.value=ticket.host;fields.port.value=String(ticket.port);fields.user.value=ticket.user;fields.pass.value='';if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=false;
  waiting=true;accept.disabled=true;status.textContent=t('import.waiting');
  source.postMessage({type:'iotcloud.provision.ready',id:ticket.id},ticket.origin);
 };
 if(!source){accept.disabled=true;status.textContent=t('import.no_opener');return box;}
 window.addEventListener('message',receive);
 timer=setTimeout(finish,Math.max(0,ticket.expires-Date.now()));
 window.addEventListener('pagehide',clear,{once:true});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#settings/mqtt')clear();});
 return box;
}
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const imported=mqttImportPanel(dev,{host,port,user,pass,protocol,clear:clear.querySelector('input')});
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  imported.guard?.();
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})}).then(result=>{pass.value='';imported.saved?.();return result;});
 });
 const broker=card('mqtt.broker',null,form);
 const heading=broker.querySelector('.card-head');heading.classList.add('broker-card-head');
 heading.append(h('a',{class:'btn broker-platform-link',href:'https://phicomm-io.github.io/iotcloud/#/',target:'_blank',rel:'noopener noreferrer'},h('span',{i18n:'import.platform'}),icon('external')));
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,imported,broker),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';imported.activate?.();}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const sources=h('div',{class:'row',id:'otaSources'}),latest=h('p',{class:'help'});
  const notes=h('button',{class:'btn',type:'button',hidden:true},t('fw.notes'));
  const notesText=h('pre',{class:'help',hidden:true,style:'white-space:pre-wrap;max-height:24rem;overflow:auto'});
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  let timer=null,last=null;
  const buttons=[];
  function busy(value){for(const button of buttons)button.disabled=value;}
  function translate(){install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const button of buttons)button.textContent=t('fw.source_'+button.dataset.source);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'')+(data.error?' · '+data.error:'');
   install.hidden=!data.version||data.state==='failed';notes.hidden=!data.release_log;
   if(data.busy||data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),1000);
   else busy(false);
  }
  async function check(source){
   if(timer)clearTimeout(timer);busy(true);install.hidden=notes.hidden=notesText.hidden=true;
   try{await command('ota.check',{source});latest.textContent=t('fw.check_checking');timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),500);}
   catch(e){busy(false);throw e;}
  }
  notes.onclick=()=>run(notes,async()=>{
   let offset=0,text='';notesText.hidden=false;
   do{
    await command('ota.notes',{offset});
    let data;
    do{await new Promise(resolve=>setTimeout(resolve,500));data=await command('ota.notes.get');}while(data.busy);
    if(data.state!=='ready')throw Error(data.error||t('fw.check_failed'));
    text+=data.text;notesText.textContent=text;
    if(data.next<=offset&&data.next<data.total)throw Error(t('fw.check_failed'));
    offset=data.next;if(offset>=data.total)break;
   }while(offset<16384);
  });
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources){const button=h('button',{class:'btn',type:'button','data-source':id},t('fw.source_'+id));button.onclick=()=>run(button,()=>check(id));buttons.push(button);sources.append(button);}}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{i18n:'fw.online'}),h('p',{class:'help',i18n:'fw.sources_help'}),sources,latest,h('div',{class:'row'},install,notes),notesText);
 }
 const cancel=h('button',{class:'btn',type:'button',hidden:true,i18n:'fw.cancel'});
 cancel.onclick=()=>run(cancel,async()=>{await command('ota.cancel');toast(t('fw.cancelling'));});
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'https://…/'+dev.otaName});
 const fileForm=h('form',{id:'fileForm',class:'stack'},h('label',{class:'field'},h('span',{},t('fw.file',{m:dev.model})),file),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),unsigned),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.upload'}))));
 const urlForm=h('form',{id:'urlForm',class:'stack',hidden:true},h('label',{class:'field'},h('span',{i18n:'fw.url'}),url),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.download'}))));
 const picker=seg([['file','fw.tab_file'],['url','fw.tab_url']],v=>{fileForm.hidden=v!=='file';urlForm.hidden=v!=='url';});picker.set('file');
 // Upload streams raw bytes; the request is synchronous up to send(), like the old page.
 let uploading=false;
 fileForm.addEventListener('submit',e=>{
  e.preventDefault();const f=file.files&&file.files[0];if(!f||uploading)return;
  const rescue=unsigned.querySelector('input').checked;
  if(rescue&&!window.confirm(t('fw.unsigned_confirm')))return;
  uploading=true;prog.value=0;
  const xhr=new XMLHttpRequest();xhr.open('POST',rescue?'/api/v1/ota/upload-unsigned':'/api/v1/ota/upload');
  xhr.setRequestHeader('Content-Type','application/octet-stream');xhr.timeout=310000;
  xhr.upload.onprogress=ev=>{if(ev.lengthComputable){prog.value=ev.loaded/ev.total*100;state.textContent=t('fw.uploading',{p:Math.round(ev.loaded/ev.total*100)});}};
  xhr.onload=()=>{const ok=xhr.status===202;state.textContent=ok?t('fw.verify_ok'):t('fw.failed',{e:xhr.responseText});toast(state.textContent,!ok);};
  xhr.onerror=()=>toast(t('fw.upload_lost'),true);
  xhr.ontimeout=()=>toast(t('fw.upload_timeout'),true);
  xhr.onloadend=()=>{uploading=false;};
  xhr.send(f);
 });
 onSubmit(urlForm,()=>api('/ota',{url:url.value}),'fw.url_started');
 const fileLabel=fileForm.querySelector('.field>span');I18N.onChange(()=>{fileLabel.textContent=t('fw.file',{m:dev.model});});
 return {el:h('div',{class:'stack'},pageHead('nav.firmware','fw.lead'),sum,online,
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state,cancel),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
   cancel.hidden=!s.ota_active||s.ota_mode==='committing';
   if(s.ota_active){prog.value=s.ota_progress;state.textContent=t('fw.progress',{p:s.ota_progress});}}};
}
function diagValue(k,v){
 if(v===null||v===undefined||v==='')return '—';
 if(typeof v==='boolean')return t(v?'common.yes':'common.no');
 if(k==='uptime_seconds')return duration(v);
 if(k==='free_memory')return (v/1024).toFixed(1)+' KB';
 if(k==='age_ms')return (v/1000).toFixed(1)+' s';
 if(k==='ntp_last_success'||k==='utc_time')return new Date(v*1000).toLocaleString(I18N.lang);
 if(Array.isArray(v))return v.join(', ');
 if(typeof v==='string'&&I18N.has('s.'+v))return t('s.'+v);
 return String(v);
}
function diagnosticsPage(dev){
 const health=h('div',{class:'health'}),groups=h('div',{class:'diag'}),raw=h('pre'),updated=h('p',{class:'help'});
 const extra=dev.diagExtra?dev.diagExtra():null;
 return {el:h('div',{class:'stack'},pageHead('nav.diagnostics','diag.lead'),card('diag.health',null,health),
   h('section',{},h('div',{class:'section-label',i18n:'diag.details'}),groups),extra,
   h('details',{class:'more'},h('summary',{i18n:'diag.raw'}),raw),updated),
  status(s){
   if(!UI.pages.diagnostics||$('settingsPage').hidden)return;
   const checks=[['diag.c_wifi',s.wifi_connected?'ok':'bad',s.wifi_connected?s.ssid:t('state.disconnected')],
    ['diag.c_mqtt',!s.mqtt_host?'':s.mqtt_connected?'ok':'warn',!s.mqtt_host?t('state.off'):t('s.'+(s.mqtt_status||'connecting'))+(s.mqtt_errors?' · '+t('diag.errors',{n:s.mqtt_errors}):'')],
    ...(Object.hasOwn(s,'watchdog_state')?[['diag.c_watchdog',!s.watchdog_enabled||s.watchdog_state==='fault'?'bad':s.reset_reason==='watchdog'?'warn':'ok',s.reset_reason==='watchdog'?t('diag.watchdog_reboot'):t('s.'+s.watchdog_state)]]:[]),
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
    ['diag.g_watchdog',['reset_reason','reset_reason_raw','watchdog_enabled','watchdog_state','watchdog_fault']],
    ['diag.g_network',['wifi_connected','ssid','ip','ap_active','ap_name','scan_busy','wifi_password_set','wifi_trial_status','wifi_trial_active']],
    ['diag.g_mqtt',['mqtt_connected','mqtt_status','mqtt_host','mqtt_port','mqtt_user','mqtt_topic_mode','mqtt_password_set','mqtt_errors','mqtt_last_error','mqtt_cleanup_warning']],
    ...(dev.diagGroups||[]),['diag.g_ota',['ota_active','ota_state','ota_progress','ota_error']]];
   const open=new Set([...groups.querySelectorAll('details')].filter(d=>d.open).map(d=>d.dataset.key));
   groups.replaceChildren(...all.map(([key,keys],i)=>{const rows=keys.filter(k=>Object.hasOwn(s,k)).map(k=>{seen.add(k);return [k,s[k]];});if(!rows.length)return null;
    return h('details',{'data-key':key,open:open.size?open.has(key):i<2},h('summary',{},h('span',{i18n:key}),h('span',{class:'badge'},rows.length)),
     h('dl',{},rows.map(([k,v])=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,v))])));}).filter(Boolean));
   const rest=Object.keys(s).filter(k=>!seen.has(k)&&!(Array.isArray(s[k])&&typeof s[k][0]==='object'));
   if(rest.length)groups.append(h('details',{'data-key':'diag.g_other'},h('summary',{},h('span',{i18n:'diag.g_other'}),h('span',{class:'badge'},rest.length)),
    h('dl',{},rest.map(k=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,s[k]))]))));
   raw.textContent=JSON.stringify(s,null,2);updated.textContent=t('diag.updated',{t:new Date().toLocaleTimeString(I18N.lang)});
  }};
}
function logsPage(){
 const out=h('pre',{},''),rows=[],state=h('p',{class:'help'});
 let cursor=0;
 async function read(){
  const d=await command('logs.get',{after:cursor,limit:8});
  if(d.overwritten)rows.push(t('logs.overwritten'));
  for(const r of d.records)rows.push(JSON.stringify(r.module==='system'&&r.event==='watchdog'?{...r,message:t('diag.watchdog_reboot')}:r));
  cursor=d.next;out.textContent=rows.join('\\n')||t('logs.empty');return d;
 }
 const refresh=h('button',{type:'button',class:'btn'},icon('auto'),h('span',{i18n:'diag.log_refresh'}));
 refresh.onclick=()=>run(refresh,read,null);
 const all=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.load_all'}));
 all.onclick=()=>run(all,async()=>{for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}},null);
 const dl=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.download'}));
 dl.onclick=()=>run(dl,async()=>{
  for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}
  const url=URL.createObjectURL(new Blob([rows.join('\\n')],{type:'text/plain;charset=utf-8'})),a=h('a',{href:url,download:'device-log.txt'});
  document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);
 },null);
 return {el:h('div',{class:'stack'},pageHead('nav.logs','logs.lead'),
  card('diag.logs',null,h('p',{class:'help',i18n:'logs.hint'}),h('div',{class:'form-actions'},refresh,all,dl),out,state))};
}
function maintenancePage(dev){
 const reboot=h('button',{type:'button',class:'btn'},h('span',{i18n:'sys.reboot'}));
 reboot.onclick=async()=>{if(await confirmDialog({title:t('sys.reboot_q',{m:dev.model}),body:t('sys.reboot_body'),ok:t('sys.reboot')}))run(reboot,()=>api('/reboot',{}),'toast.rebooting');};
 const items=[h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reboot'}),h('span',{i18n:'sys.reboot_desc'})),reboot)];
 if(dev.factoryReset){
  const reset=h('button',{type:'button',class:'btn danger'},h('span',{i18n:'sys.reset'}));
  reset.onclick=async()=>{if(await confirmDialog({title:t('sys.reset_q'),body:t('sys.reset_body'),ok:t('sys.reset'),danger:true}))run(reset,()=>api('/device/reset',{full:true}),'toast.resetting');};
  items.push(h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reset'}),h('span',{i18n:'sys.reset_desc'})),reset));
 }
 return h('div',{class:'stack'},pageHead('nav.maintenance','sys.lead'),
  h('section',{class:'card danger-zone'},h('div',{class:'list'},items),
   h('p',{class:'help',style:'margin-top:12px',i18n:dev.buttonHintKey},t(dev.buttonHintKey))));
}
/* Slots shared by every "General" page. */
function nameCard(){
 const input=h('input',{id:'deviceName',maxLength:63}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))),
  h('button',{class:'btn ghost',type:'button',onclick:e=>run(e.currentTarget,async()=>{await api('/deviceName',{name:''});await UI.reload();input.value=UI.state?.name||'';},'common.saved')},h('span',{i18n:'gen.default_name'}))),meta);
 onSubmit(form,()=>{if(new TextEncoder().encode(input.value).length>63)throw Error(t('gen.name_long'));return api('/deviceName',{name:input.value});});
 return {el:card('gen.identity',null,form),init(s){input.value=s.name||'';},status(s){meta.replaceChildren(summary([['gen.device_id',h('span',{class:'num'},prettyMac(s.device_id))],['gen.uptime',duration(s.uptime_seconds||0)]]));}};
}
function authCard(){
 const input=h('input',{id:'webPassword',type:'password',maxLength:32,autocomplete:'new-password',placeholder:t('auth.ph')});
 const state=h('span',{class:'badge'});
 const form=h('form',{id:'authForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'auth.password'}),input,h('p',{class:'help',i18n:'auth.help'})),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'auth.set'}))));
 onSubmit(form,()=>{if(input.value&&!/^[\\x20-\\x7e]{8,32}$/.test(input.value))throw Error(t('auth.invalid'));return api('/auth/password',{password:input.value});});
 const c=card('auth.title','auth.lead',form);c.querySelector('.card-head').append(state);
 return {el:c,status(s){state.className='badge '+(s.web_password_set?'ok':'');state.textContent=t(s.web_password_set?'auth.on':'auth.off');}};
}
function clockCard({load,save,status}){
 const sum=h('div'),tz=h('select'),ntp=h('input',{maxLength:63,required:true,placeholder:'ntp1.aliyun.com'});
 const fill=()=>{const v=tz.value;tz.replaceChildren(...TZ.map(m=>h('option',{value:m},tzLabel(m))));tz.value=v;};fill();I18N.onChange(fill);
 const form=h('form',{class:'stack'},h('div',{class:'fields'},
   h('label',{class:'field'},h('span',{i18n:'clock.tz'}),tz),h('label',{class:'field'},h('span',{i18n:'clock.ntp'}),ntp)),
  info('clock.hint'),h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>save({timezone_minutes:Number(tz.value),ntp_host:ntp.value.trim()}));
 return {el:card('clock.title',null,sum,h('div',{style:'margin-top:16px'},form)),
  async show(){const c=await load();if(!c)return;tz.value=String(c.timezone_minutes||480);ntp.value=c.ntp_host||'';},
  status(s){sum.replaceChildren(summary(status(s)));}};
}

/* ---------- Boot ---------- */
let initialized=false,failures=0,lastSuccess=0,loading=null;
async function load(){
 try{
  const raw=await command('status.get');failures=0;lastSuccess=Date.now();
  if(raw.ota_active&&raw.ota_mode){UI.pages.firmware?.status(raw);return raw;}
  const s=UI.acceptStatus(raw);
  $('title').textContent=UI.device.model+' '+(s.name||'');
  renderChips(s);renderBanners(s,false);
  if(!initialized){for(const p of Object.values(UI.pages))if(p.init)p.init(s);initialized=true;}
  for(const p of Object.values(UI.pages))if(p.status)p.status(s);
  if(UI.device.onStatus)UI.device.onStatus(s);
  return raw;
 }catch(e){if(++failures>=3&&(!lastSuccess||Date.now()-lastSuccess>=30000))renderBanners(null,true);return null;}
}
function pollLoad(){if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
async function refresh(){await pollLoad();setTimeout(refresh,UI.device.interval||2000);}
UI.reload=async()=>{if(loading)await loading;return pollLoad();};
UI.start=async dev=>{
 UI.device=dev;
 const first=dev.groups.flatMap(g=>g[1])[0];
 document.body.prepend(header(dev),
  h('nav',{class:'tabs','aria-label':'Main'},
   h('a',{href:'#home','data-tab':'home'},icon('home'),h('span',{i18n:'nav.home'})),
   h('a',{href:'#settings/'+first,'data-tab':'settings'},icon('sliders'),h('span',{i18n:'nav.settings'}))),
  h('div',{id:'banners'}));
 UI.caps=await command('capabilities.get').catch(()=>null);
 const pages=$('pages');
 // Pages the framework builds for every product.
 const builders={network:wifiPage,mqtt:mqttPage,firmware:firmwarePage,diagnostics:diagnosticsPage,maintenance:maintenancePage,logs:logsPage};
 for(const [key,build] of Object.entries(builders)){const p=build(dev);UI.pages[key]=p;pages.append(h('div',{'data-settings-page':key,hidden:true},p.el));}
 // Automation pages, when the device advertises the capability.
 Object.assign(UI.pages,window.automationPages(dev));
 // Product pages: the product supplies show()/status(); the markup is either
 // already in the document or appended below.
 for(const [key,p] of Object.entries(dev.pages))UI.pages[key]=Object.assign(UI.pages[key]||{},p);
 for(const [key,p] of Object.entries(UI.pages)){
  let box=document.querySelector('[data-settings-page="'+key+'"]');
  if(!box){box=h('div',{'data-settings-page':key,hidden:true});pages.append(box);}
  if(p.el)box.append(p.el);
 }
 for(const slot of document.querySelectorAll('[data-slot]')){const p=slot.dataset.slot==='name'?nameCard():authCard();UI.pages['slot_'+slot.dataset.slot]=p;slot.replaceWith(p.el);}
 buildNav(dev);
 window.addEventListener('hashchange',showRoute);showRoute();
 I18N.apply();
 I18N.onChange(()=>{if(UI.state){renderChips(UI.state);renderBanners(UI.state,false);for(const p of Object.values(UI.pages))if(p.status)p.status(UI.state);}});
 refresh();
};
})();
<\/script>
<script>/* Automation pages shared by the three products: schedules, custom button
 * events and night mode. Installed by ui.js when the device reports the
 * matching capability. All traffic goes through command() from service.js. */
(()=>{
'use strict';
const {t}=I18N;
const {h,icon,toast,run,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,info,card,pageHead,slider,clone}=UI;

/* Action kinds a schedule or button event can run, keyed by action name. */
const ACTIONS={
 'outlet.set':'op.outlet','fan.set':'op.fan','light.set':'op.light',
 'child_lock.set':'op.child_lock','indicator.set':'op.indicator',
 'display.set':'op.display','system.reboot':'op.reboot',
 'light_effect.next':'op.effect_next','light_effect.select':'op.effect_select',
 'filter.reset':'op.filter_reset','light_always.set':'op.light_always'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a)&&(keys||!['light_effect.next','light_effect.select','filter.reset'].includes(a)));
 const box=h('div',{class:'stack'}),fields=h('div',{class:'stack'});
 const options=[...(keys?[['none','op.none']]:[]),...available.map(a=>[a,actKey(a)])];
 const pick=keys?sel(host,'btn.action',options):seg(options,v=>draw(v),{full:true});
 if(keys){pick.set=v=>{pick.value=v;};pick.addEventListener('change',()=>draw(pick.value));host.append(box);}
 else host.append(pick,box);
 box.append(fields);
 let read=()=>({}),current=keys?'none':(available[0]||'none');
 function draw(a,params={}){
  current=a;fields.replaceChildren();read=()=>({});
  if(a==='none'||!a)return;
  const parts=[];
  if(a==='outlet.set'){
   const index=sel(fields,'op.target',[['all','op.all'],...[0,1,2,3,4,5].map(i=>[String(i),()=>t('tc1.socket_n',{n:i+1})])]);
   if(params.index!=null)index.value=String(params.index);
   parts.push(()=>index.value==='all'?{}:{index:Number(index.value)});
  }
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set','light_always.set'].includes(a);
  if(switchable){
   const values=keys&&(['outlet.set','fan.set'].includes(a)||caps.model==='a1')?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='light_effect.select'){
   const effect=sel(fields,'op.effect_select',Array.from({length:5},(_,i)=>[String(i),'a1.effect.'+i]));
   effect.value=String(params.effect||0);parts.push(()=>({effect:Number(effect.value)}));
  }
  if(a==='filter.reset')fields.append(info('filter.reset_hint'));
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   if(a==='light.set'&&keys){
    const setBrightness=switchRow(null,'op.set_brightness');setBrightness.querySelector('input').checked=params.brightness!=null;
    fields.append(setBrightness);parts.push(()=>setBrightness.querySelector('input').checked?{brightness:Number(m.brightness)}:{});
   }else parts.push(()=>({brightness:Number(m.brightness)}));
  }
  read=()=>Object.assign({},...parts.map(f=>f()));
  current=a;
 }
 draw(keys?'none':(available[0]||'none'));
 return {
  get(){return {action:current,params:read()};},
  set(a,p){current=a;pick.set(a);draw(a,p||{});}
 };
}

/* ---------- Schedules ---------- */
function schedulePage(dev){
 const box=h('div',{class:'stack'}),listBox=h('div',{class:'stack'});
 let offset=0,editing=0,tasks=[];
 const tz=()=>((UI.state&&UI.state.timezone_minutes)||480)*60;
 const atText=sec=>new Date((sec+tz())*1000).toISOString().slice(0,16).replace('T',' ');
 const when=x=>x.trigger==='once'?atText(x.at):hhmm(x.minute);
 const timeValue=()=>{const d=new Date(Date.now()+tz()*1000+86400000);return d.toISOString().slice(0,16);};

 const enabled=switchRow(null,'sch.enabled_row');
 const trigger=seg([['weekly','sch.weekly'],['once','day.once']],v=>syncTrigger(),{full:true});
 const days=daysPicker('sdays',127),time=h('input',{type:'time',value:'08:00'}),at=h('input',{type:'datetime-local',value:timeValue()});
 const weekly=h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days);
 const once=h('label',{class:'field',hidden:true},h('span',{i18n:'sch.when'}),at);
 const minute=h('label',{class:'field'},h('span',{i18n:'sch.time'}),time);
 const editorHost=h('div',{class:'stack'});
 function syncTrigger(){const onceMode=trigger.value==='once';weekly.hidden=onceMode;once.hidden=!onceMode;minute.hidden=onceMode;}
 const editor=actionEditor(editorHost);
 const save=h('button',{type:'submit',class:'btn primary'});
 const labelSave=()=>save.replaceChildren(icon('plus'),h('span',{},t(editing?'sch.save_btn':'sch.add_btn')));
 labelSave();
 function row(x){
  return h('div',{class:'item'},h('b',{class:'time num'},when(x)),
   h('div',{class:'grow'},h('b',{},t(actKey(x.action))+(x.trigger==='weekly'?' · '+daysText(x.days):' · '+t('day.once'))),
    h('span',{},t('sch.state.'+(x.state||'waiting'))+(x.enabled?'':' · '+t('sch.off')))),
   h('span',{class:'badge '+(x.enabled?'ok':'')},t(x.enabled?'sch.enabled':'sch.disabled')),
   h('div',{class:'row',style:'gap:4px'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(x)},h('span',{i18n:'sch.edit'})),
    h('button',{type:'button',class:'btn ghost',onclick:ev=>run(ev.currentTarget,()=>command('schedules.enable',{id:x.id,enabled:!x.enabled}).then(load),null)},h('span',{i18n:x.enabled?'sch.disable':'sch.enable'})),
    h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:ev=>run(ev.currentTarget,()=>command('schedules.delete',{id:x.id}).then(load),'common.deleted')},icon('trash'))));
 }
 async function load(){
  const d=await command('schedules.get',{offset,limit:8});tasks=d.items;
  listBox.replaceChildren(
   tasks.length?h('div',{class:'list'},tasks.map(row)):h('div',{class:'empty'},t('sch.empty')),
   h('div',{class:'row between'},h('span',{class:'help'},t('sch.used',{a:d.count,b:d.capacity})),
    h('div',{class:'row',style:'gap:4px'},
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=Math.max(0,offset-8);return load();},null)},h('span',{i18n:'common.prev'})),
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=d.next;return load();},null),disabled:offset+8>=d.count},h('span',{i18n:'common.next'})))));
  banner.hidden=!(UI.state&&UI.state.time_synced===false);
 }
 function reset(){editing=0;enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();days.setMask(127);time.value='08:00';editor.set('none');labelSave();}
 function edit(x){
  editing=x.id;enabled.querySelector('input').checked=!!x.enabled;trigger.set(x.trigger);syncTrigger();
  days.setMask(x.days);time.value=hhmm(x.minute);at.value=atText(x.at);editor.set(x.action,x.params);labelSave();
  box.scrollIntoView({block:'start'});
 }
 const banner=h('div',{class:'banner warn',hidden:true},icon('clock'),h('span',{i18n:'sch.no_clock'}));
 const form=h('form',{class:'subcard stack'},h('h3',{i18n:'sch.new'}),trigger,weekly,once,minute,editorHost,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},icon('plus'),h('span',{},t('sch.add_btn'))),
   h('button',{type:'button',class:'btn ghost',onclick:reset},h('span',{i18n:'sch.reset'}))));
 form.addEventListener('submit',e=>{e.preventDefault();run(save,async()=>{
  const a=editor.get();
  if(a.action==='none')throw Error(t('sch.pick_action'));
  const task={enabled:Number(enabled.querySelector('input').checked),trigger:trigger.value,...a};
  if(editing)task.id=editing;
  if(trigger.value==='weekly'){const d=days.mask();if(!d)throw Error(t('sch.pick_day'));task.days=d;task.minute=toMinutes(time.value);}
  else{const parsed=Date.parse(at.value);if(!Number.isFinite(parsed))throw Error(t('sch.pick_when'));
   task.at=Math.floor(parsed/1000)-tz();if(task.at<=Math.floor(Date.now()/1000))throw Error(t('sch.future'));}
  await command('schedules.put',task);reset();await load();toast(t('sch.added'));
 },null);});
 box.append(form,info('sch.hint'));
 return {el:h('div',{class:'stack'},pageHead('nav.schedule',dev.scheduleLead),banner,card('sch.list',null,listBox,box)),
  async show(){if(!UI.state)await UI.reload();await load();}};
}

/* ---------- Custom button events ---------- */
function buttonsPage(dev){
 const listBox=h('div',{class:'stack'}),keyHost=h('div',{class:'fields'});
 const keyIds=dev.model==='A1'?(UI.caps.button_keys?.includes('combination')?[0,1,2]:[0,1]):[0];
 const keyName=k=>t(dev.model==='A1'?['btn.key_power','btn.key_wifi','btn.key_both'][Number(k)]:'btn.key_fn');
 const key=sel(keyHost,'btn.key',keyIds.map(k=>[String(k),()=>keyName(k)]));
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(['system.reboot','light_effect.next','filter.reset'].includes(v.action))return target;
  if(v.action==='light_effect.select')return target+' · '+t('a1.effect.'+p.effect);
  let text=v.action==='display.set'?target:state+' · '+target;
  if(p.speed!=null)text+=' · '+p.speed+'%';
  if(p.brightness!=null)text+=' · '+p.brightness+'%';
  return text;
 }
 const previewBox=h('div',{class:'button-preview','aria-live':'polite'});
 function preview(){
  const v={key:Number(key.value),[kind.value]:Number(count.value),...editor.get()};
  previewBox.textContent=keyName(v.key)+' · '+gesture(v)+' → '+actionText(v);
 }
 const editorCard=h('form',{class:'card stack','data-button-editor':''});
 const selected=()=>({key:Number(key.value),[kind.value]:Number(count.value)});
 function edit(v){
  key.value=String(v.key);kind.set(v.seconds?'seconds':'clicks');count.max=v.seconds?4:30;
  countLabel.textContent=t(v.seconds?'btn.hold_count':'btn.click_count');count.value=v.seconds||v.clicks;
  editor.set(v.action,v.params);preview();editorCard.scrollIntoView({block:'nearest',behavior:'smooth'});count.focus();
 }
 function row(v){
  return h('div',{class:'button-mapping'},h('b',{class:'button-gesture'},gesture(v)),
   h('span',{class:'button-result'},actionText(v)),h('div',{class:'row'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(v)},t('sch.edit')),
    h('button',{type:'button',class:'btn ghost','aria-label':t('common.delete')+' '+gesture(v),onclick:e=>run(e.currentTarget,async()=>{
     await command('buttons.set',{key:v.key,...(v.seconds?{seconds:v.seconds}:{clicks:v.clicks}),action:'none',params:{}});await load();
    },'common.deleted')},t('common.delete'))));
 }
 async function load(){
  const items=[];let offset=0,capacity=68;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);capacity=page.capacity||capacity;if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<capacity);
  listBox.replaceChildren();
  for(const k of keyIds){
   const groups=[];
   for(const type of ['clicks','seconds']){
    const values=items.filter(v=>Number(v.key)===k&&v[type]>0).sort((a,b)=>a[type]-b[type]);
    const runs=[];
    for(const v of values){const last=runs[runs.length-1];
     if(last&&v[type]===last[last.length-1][type]+1&&JSON.stringify([v.action,v.params])===JSON.stringify([last[0].action,last[0].params]))last.push(v);
     else runs.push([v]);
    }
    if(runs.length)groups.push(h('section',{class:'button-group'},h('h3',{},t(type==='clicks'?'btn.click':'btn.hold')),runs.map(run=>run.length===1?row(run[0]):
     h('details',{class:'button-range'},h('summary',{},h('b',{},t(type==='clicks'?'btn.click_range':'btn.hold_range',{a:run[0][type],b:run[run.length-1][type]})),h('span',{},actionText(run[0])),h('span',{class:'help'},t('btn.expand'))),run.map(row)))));
   }
   listBox.append(h('section',{class:'stack'},h('h3',{},keyName(k)),groups.length?groups:h('div',{class:'empty'},t('btn.empty'))));
  }
 }
 const save=h('button',{type:'submit',class:'btn primary'},t('common.save'));
 editorCard.append(h('h2',{i18n:'btn.edit'}),keyHost,editorHost,previewBox,h('div',{class:'form-actions'},save));
 editorCard.addEventListener('input',preview);editorCard.addEventListener('change',preview);editorCard.addEventListener('click',()=>preview());
 editorCard.addEventListener('submit',e=>{e.preventDefault();if(!editorCard.reportValidity())return;
  run(save,async()=>{const a=editor.get();if(a.action==='none')throw Error(t('btn.pick_action'));
   await command('buttons.set',{...selected(),...a});await load();},'common.saved');
 });
 let filterStatus,filterHours;
 function filterCards(){
  if(dev.model!=='A1'||!UI.caps.actions.includes('filter.get'))return [];
  filterStatus=h('p',{'data-filter-status':''});filterHours=h('input',{type:'number',min:1,max:20000,required:true,'data-filter-hours':''});
  const form=h('form',{class:'stack'},filterStatus,info('filter.hint'),h('label',{class:'field'},h('span',{i18n:'filter.lifetime'}),filterHours),
   h('div',{class:'form-actions'},h('button',{type:'submit',class:'btn primary'},t('common.save')),
    h('button',{type:'button',class:'btn ghost',onclick:e=>run(e.currentTarget,async()=>{if(!window.confirm(t('filter.reset_confirm')))return;await command('filter.reset',{});await loadFilter();},null)},t('op.filter_reset'))));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;run(null,async()=>{await command('filter.set',{lifetime_hours:Number(filterHours.value)});await loadFilter();},'common.saved');});
  return [card('filter.title',null,form)];
 }
 async function loadFilter(){if(!filterStatus)return;const f=await command('filter.get');filterHours.value=f.lifetime_hours;filterStatus.textContent=t('filter.status',{used:(f.used_seconds/3600).toFixed(1),remaining:f.remaining_percent});}
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info(dev.model==='A1'?'btn.reset_note_a1':'btn.reset_note')),editorCard,...filterCards()),
  async show(){await load();await loadFilter();preview();}};
}

/* ---------- Night mode ---------- */
function nightPage(dev){
 const isM1=dev.model==='M1',list=h('div',{class:'stack'});
 let model=[];
 function window(cfg,i){
  const days=daysPicker('ndays'+i,cfg.days),start=h('input',{type:'time',value:hhmm(cfg.start)}),end=h('input',{type:'time',value:hhmm(cfg.end)});
  const dim=switchRow(null,isM1?'night.screen':'night.light','night.light_desc');dim.querySelector('input').checked=!!cfg.light;
  const bright={brightness:Math.round(cfg.brightness*100/255)};
  const [bOut,bRange]=slider(bright,'brightness',{min:0,max:100,step:isM1?25:1,fmt:v=>v?v+'%':t('state.off')});
  const speed={max_speed:cfg.max_speed};
  const [fOut,fRange]=slider(speed,'max_speed',{min:1});
  const fan=switchRow(null,'night.fan','night.fan_desc'),block=switchRow(null,'night.block_t','night.block_desc');
  fan.querySelector('input').checked=!!cfg.fan;block.querySelector('input').checked=!!cfg.block_start;
  const extra=isM1?[]:[fan,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.fan_max'}),fOut)),fRange,block];
  const field=h('fieldset',{},h('legend',{},t('night.period',{n:i+1})),
   h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'night.start'}),start),h('label',{class:'field'},h('span',{i18n:'night.end'}),end)),
   dim,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.light_max'}),bOut)),bRange,...extra,
   h('div',{class:'form-actions'},h('button',{type:'button',class:'btn ghost',onclick:()=>{model.splice(i,1);draw();}},icon('trash'),h('span',{i18n:'common.delete'}))));
  // One listener writes the whole window back, so no control can drift.
  const collect=()=>{
   cfg.days=days.mask();cfg.start=toMinutes(start.value);cfg.end=toMinutes(end.value);
   cfg.light=Number(dim.querySelector('input').checked);cfg.brightness=Math.round(bright.brightness*255/100);
   if(!isM1){cfg.fan=Number(fan.querySelector('input').checked);cfg.block_start=Number(block.querySelector('input').checked);cfg.max_speed=Number(speed.max_speed);}
  };
  field.addEventListener('input',collect);field.addEventListener('change',collect);
  return field;
 }
 function draw(){
  list.replaceChildren(...(model.length?model.map(window):[h('div',{class:'empty'},t('night.empty'))]));
 }
 const add=h('button',{type:'button',class:'btn'},icon('plus'),h('span',{i18n:'night.add_btn'}));
 add.onclick=()=>run(add,async()=>{if(model.length>=4)throw Error(t('common.max',{n:4}));
  model.push({days:127,fan:isM1?0:1,light:1,max_speed:30,brightness:0,block_start:1,start:1320,end:420});draw();},null);
 const save=h('button',{type:'button',class:'btn primary'},h('span',{i18n:'common.save'}));
 save.onclick=()=>run(save,async()=>{await command('night.set',{windows:model});toast(t('common.saved'));});
 return {el:h('div',{class:'stack'},pageHead('nav.sleep','night.lead'),card('night.list',null,list,
  info('night.hint'),h('div',{class:'form-actions'},add,save))),
  async show(){model=clone((await command('night.get')).windows||[]);draw();}};
}

window.automationPages=dev=>{
 const caps=(UI.caps&&UI.caps.actions)||[];
 const pages={};
 if(!caps.length||caps.includes('schedules.get'))pages.schedule=schedulePage(dev);
 if(caps.includes('buttons.set')&&dev.hasButtons)pages.buttons=buttonsPage(dev);
 if(caps.includes('night.get'))pages.night=nightPage(dev);
 return pages;
};
})();
<\/script>
<script>// Reuse only the product home renderer, not the device's router or settings UI.
(()=>{
 let dev,stopped=false,ready=false,loading=null,failures=0,lastSuccess=0;
 const disabled=new Map();
 function lock(){for(const el of document.querySelectorAll('#homePage button,#homePage input,#homePage select')){if(!disabled.has(el))disabled.set(el,el.disabled);el.disabled=true;}}
 function unlock(){for(const [el,value] of disabled)el.disabled=value;disabled.clear();}
 const feedback=document.createElement('p');feedback.className='banner info';feedback.setAttribute('role','status');feedback.textContent='正在获取设备状态…';document.body.prepend(feedback);
 async function load(){
  try{
   const raw=await command('status.get');failures=0;lastSuccess=Date.now();unlock();const s=UI.acceptStatus(raw);dev.onStatus?.(s);ready=true;feedback.hidden=true;return raw;
  }catch(e){failures++;if(ready&&(failures<3||Date.now()-lastSuccess<30000))return null;lock();feedback.hidden=false;feedback.className='banner warn';feedback.textContent=ready?'暂时无法更新，正在重试。当前显示上次状态。':e.message;if(!ready)document.querySelectorAll('#homePage .tile').forEach((tile,i)=>{tile.querySelector('.name').textContent=I18N.t('tc1.socket_n',{n:i+1});tile.querySelector('.state').textContent='等待设备状态';});}
 }
 function pollLoad(){if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
 UI.reload=async()=>{if(loading)await loading;return pollLoad();};
 UI.start=options=>{document.querySelectorAll('[data-settings-page]').forEach(page=>page.hidden=true);dev=options;UI.device=options;I18N.set('zh-CN');queueMicrotask(()=>{I18N.apply();lock();(async function poll(){await pollLoad();if(!stopped)setTimeout(poll,3000);})();});};
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#settings/"]');if(link){event.preventDefault();UI.toast('此项请在设备本地 WebUI 中设置');}});
 window.addEventListener('pagehide',()=>stopped=true);
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}#settingsPage{display:none!important}.banner{margin-top:0}@media(max-width:600px){.grid{grid-template-columns:minmax(0,1fr)}.metric .stat{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:4px}.metric .stat small{margin-left:0}}';document.head.append(style);
 new ResizeObserver(()=>{parent.postMessage({type:'device-height',height:Math.ceil(document.body.getBoundingClientRect().height)+8},parent.location.origin);}).observe(document.body);
})();

/* A1 air purifier page. Product-specific pages: light effects, M1 binding and
 * automatic control. Shared pages come from ui.js and automation.js. */
(()=>{
'use strict';
const {t}=I18N;
const {$,h,icon,toast,run,onSubmit,confirm,switchRow,seg,summary,card,info,pageHead,saveBar,num,flag,slider,hhmm,toMinutes,normalizeMac,prettyMac,clone}=UI;

let advanced={effect:0,segments:3,segment:[]},bindingStatus={peers:[],members:[],linkage_status:'disabled'};
const refresh=()=>UI.reload();

/* ---------- Home: fan ---------- */
const power=$('power');power.append(icon('power'));
const speed=$('speed');let dragging=false;
const presets=seg([[20,()=>t('a1.p_quiet')+' 20%'],[40,()=>t('a1.p_low')+' 40%'],[60,()=>t('a1.p_mid')+' 60%'],[100,()=>t('a1.p_max')+' 100%']],v=>setSpeed(v),{full:true});
$('presets').replaceWith(presets);
function setSpeed(v){speed.value=v;$('speedValue').textContent=v+'%';return run(null,()=>api('/fan/config',{speed:Number(v)}).then(refresh),null);}
speed.addEventListener('input',()=>{dragging=true;$('speedValue').textContent=speed.value+'%';presets.set(Number(speed.value));});
speed.addEventListener('change',()=>{dragging=false;setSpeed(speed.value);});
power.onclick=()=>{const on=!UI.state.fan_on;power.setAttribute('aria-pressed',String(on));run(power,()=>UI.control('fan.set',{on},{fan_on:on}),null);};
for(const id of ['childLock','childLockDevice'])$(id).onchange=e=>run(null,()=>UI.control('child_lock.set',{enabled:e.target.checked},{child_lock:e.target.checked}),e.target.checked?'a1.lock_on':'a1.lock_off');
function renderFan(s){
 const locked=s.ota_active||s.reboot_pending||UI.controlBusy;
 power.setAttribute('aria-pressed',String(s.fan_on));power.disabled=locked;speed.disabled=locked;
 presets.querySelectorAll('button').forEach(b=>b.disabled=locked);
 const auto=bindingStatus.linkage_status==='active'&&bindingStatus.automatic_on;
 $('fanState').textContent=s.fan_on?t('a1.running'):t('a1.off');
 $('fanSub').textContent=locked?t('a1.locked_ota'):s.fan_on?t(auto?'a1.sub_auto':'a1.sub_manual',{p:s.percentage}):t('a1.sub_off',{p:s.requested_speed});
 const previewSpeed=$('previewSpeed');
 if(previewSpeed&&document.activeElement!==previewSpeed){const value=s.fan_on?s.percentage:s.requested_speed;previewSpeed.value=value;$('previewSpeedValue').textContent=value+'%';}
 if(!dragging&&document.activeElement!==speed){const v=s.fan_on?s.percentage:s.requested_speed;speed.value=v;$('speedValue').textContent=v+'%';presets.set(s.fan_on?s.percentage:null);}
 $('outBar').style.width=s.applied_speed+'%';$('targetBar').style.width=s.percentage+'%';$('targetBar').hidden=!s.percentage;
 $('outText').textContent=!s.fan_on&&!s.applied_speed?t('a1.out_stopped'):s.applied_speed!==s.percentage?t('a1.out_ramp',{a:s.applied_speed,p:s.percentage}):t('a1.out_steady',{a:s.applied_speed});
 for(const [id,badge] of [['panelBadge',$('panelBadge')],['panelBadge2',$('panelBadge2')]]){badge.className='badge '+(s.panel_ready?'ok':'bad');badge.textContent=t(s.panel_ready?'a1.panel_ok':'a1.panel_bad');}
 for(const id of ['childLock','childLockDevice'])$(id).checked=s.child_lock;
}

/* Filter usage is owned by the device, including across browser sessions. */
let filterBusy=false,filterDirty=false;
function renderFilter(s){
 const f=s.filter,card=$('filterCard');card.hidden=!f||!Number.isFinite(f.remaining_percent);
 if(card.hidden)return;
 const remaining=Math.max(0,Math.min(100,f.remaining_percent));
 $('filterRemaining').textContent=remaining+'%';
 $('filterUsage').textContent=t('filter.usage',{used:(f.used_seconds/3600).toFixed(1),total:f.lifetime_hours});
 $('filterBar').style.width=remaining+'%';$('filterProgress').setAttribute('aria-valuenow',String(remaining));
 const badge=$('filterBadge');badge.className='badge '+(f.replacement_due?'warn':'ok');
 badge.textContent=t(remaining===0?'filter.expired':f.replacement_due?'filter.due':'filter.normal');
 if(!filterDirty&&document.activeElement!==$('filterLifetime'))$('filterLifetime').value=f.lifetime_hours;
 const locked=filterBusy||s.ota_active||s.reboot_pending||s.wifi_trial_active;
 for(const id of ['filterSave','filterReset','filterLifetime'])$(id).disabled=!!locked;
}
$('filterLifetime').oninput=()=>{filterDirty=true;};
async function changeFilter(action,params){
 if(filterBusy)return;filterBusy=true;if(UI.state)renderFilter(UI.state);
 try{const saved=await command(action,params);filterDirty=false;UI.state.filter=saved;renderFilter(UI.state);await refresh();}
 finally{filterBusy=false;if(UI.state)renderFilter(UI.state);}
}
onSubmit($('filterForm'),()=>changeFilter('filter.set',{lifetime_hours:Number($('filterLifetime').value)}));
$('filterReset').onclick=()=>run(null,async()=>{
 if(!await confirm({title:t('filter.reset'),body:t('filter.confirm'),ok:t('filter.reset'),danger:true}))return;
 await changeFilter('filter.reset',{});toast(t('filter.reset_done'));
},null);

/* ---------- Home: automatic control summary ---------- */
function renderAuto(){
 const c=$('autoCard'),st=bindingStatus.linkage_status,peers=bindingStatus.peers||[];
 const head=h('div',{class:'card-head'},h('div',{},h('h2',{i18n:'a1.auto'}),h('p',{class:'help',i18n:'a1.auto_lead'})),
  h('span',{class:'badge '+(st==='active'?'ok':st==='sensor_failed'?'warn':'')},t('s.link_'+st)));
 if(!peers.length){c.replaceChildren(head,h('div',{class:'empty'},h('p',{},t('a1.auto_empty')),
  h('a',{class:'btn',href:'#settings/binding',style:'margin-top:12px'},icon('link'),h('span',{},t('a1.auto_link')))));return;}
 const fresh=peers.filter(p=>p.fresh).length;
 const meta=h('p',{class:'help'},t('a1.auto_peers',{n:peers.length,f:fresh})+' · '+peers.map(p=>String(p.transport||'mqtt').toUpperCase()).join('/'));
 const avg=bindingStatus.average||{};
 const readings=h('div',{class:'fields'},...[["temperature","°C"],["humidity","%"],["pm25","µg/m³"],["formaldehyde","mg/m³"]].map(([key,unit])=>h('div',{class:'field'},h('span',{},t('average.'+key)),h('b',{},avg.valid&&Number.isFinite(avg[key])?Number(avg[key]).toFixed(key==='formaldehyde'?3:1)+' '+unit:'—'))));
 if(st==='disabled'){c.replaceChildren(head,meta,readings,h('a',{class:'btn',href:'#settings/linkage',style:'margin-top:12px'},h('span',{},t('a1.auto_enable'))));return;}
 // replaceChildren() stringifies null, so build the list explicitly.
 const rows=[head,readings];
 if(st==='sensor_failed')rows.push(h('div',{class:'banner warn'},icon('alert'),h('span',{},t('a1.auto_failed'))));
 rows.push(h('div',{class:'row between'},meta,h('span',{class:'badge info'},t('a1.auto_speed',{p:bindingStatus.automatic_speed}))));
 c.replaceChildren(...rows);
}

/* ---------- Home: light ring ---------- */
const SWATCHES=[[217,80,0],[255,255,255],[255,170,60],[0,90,255],[0,200,120],[170,60,255],[255,30,60]];
let lightDirty=false,lightTimer=null,ringAnimationTimer=null,previewTarget=null,ringPolling=false,ringPolledAt=0,color=[0,0,255];
const hex=c=>'#'+c.map(n=>n.toString(16).padStart(2,'0')).join('');
const custom=h('input',{type:'color','aria-label':'custom'});
$('swatches').append(...SWATCHES.map(c=>h('button',{type:'button',class:'swatch',style:'--c:'+hex(c),'aria-label':hex(c),onclick:()=>{color=c;lightChanged();}})),custom);
custom.oninput=()=>{const v=custom.value;color=[1,3,5].map(i=>parseInt(v.slice(i,i+2),16));lightChanged();};
for(const id of ['ledEnabled','ledAlways'])$(id).onchange=lightChanged;
$('bright').oninput=lightChanged;
function lightChanged(){
 lightDirty=true;renderLightControls();if(UI.state)renderRing(UI.state);
 $('lightSave').textContent=t('common.saving');clearTimeout(lightTimer);
 // Debounced auto-save replaces the old "Apply" button.
 lightTimer=setTimeout(async()=>{try{
  await api('/light/config',{enabled:$('ledEnabled').checked,always_on:$('ledAlways').checked,brightness:Number($('bright').value),color:{r:color[0],g:color[1],b:color[2]}});
  $('lightSave').textContent=t('common.saved');lightDirty=false;}catch(e){$('lightSave').textContent='';toast(e.message,true);}},600);
}
function renderLightControls(){
 const on=$('ledEnabled').checked;
 $('brightValue').textContent=Math.round($('bright').value/255*100)+'%';
 document.querySelectorAll('.swatch').forEach((b,i)=>b.setAttribute('aria-pressed',String(hex(SWATCHES[i])===hex(color))));
 custom.value=hex(color);
 for(const el of [$('ledAlways'),$('bright'),custom,...document.querySelectorAll('.swatch')])el.disabled=!on;
}
function renderRing(s){
 if(!s)return;const N=31,svgs=document.querySelectorAll('.ring-preview-svg'),enabled=$('ledEnabled').checked,brightness=Number($('bright').value)/255;
 const touching=previewTarget!==null||!!s.touch_active,eff=touching?0:advanced.effect,now=performance.now(),speed=Number(s.percentage??s.speed??s.requested_speed??0),sources=Array.from({length:N},()=>[0,0,0]);
 const feedbackSpeed=Math.max(0,Math.min(100,Number(touching?(previewTarget??s.requested_speed??s.speed??0):(s.applied_speed??0))));
 const followSpeed=s.fan_on?speed:0;
 // Physical LEDs 1..31 occupy output slots 18..31,1..17; slot 0 is not on the ring.
 const slotForLed=index=>((index+17)%N)+1;
 const slotColors=Array.from({length:32},()=>[0,0,0]);
 const clip=v=>Math.max(0,Math.min(1,v));
 if(enabled&&brightness&&eff===0){
  for(let i=0;i<N;i++){
   const delta=Math.abs(i-9),distance=Math.min(delta,N-delta);
   const x=Math.max(0,Math.min(200,16*feedbackSpeed-100*(distance-1)));
   const level=!feedbackSpeed?0:!distance?255:Math.floor((255*x*x*(600-2*x)+4000000)/8000000);
   sources[i]=color.map(v=>Math.floor(Math.floor(v*brightness)*level/255)/255*(advanced.follow_fan&&!touching?followSpeed/100:1));
  }
 }else if(enabled&&brightness&&eff===4){
  const cfg=advanced,n=Math.max(1,Math.min(4,Number(cfg.segments)||1)),avg=bindingStatus.average||{};let at=0;
  for(let part=0;part<n;part++){
   const length=Math.floor(32/n)+(part<32%n?1:0),lit=length-(n>1?1:0),segment=cfg.segment?.[part];
   if(segment){
    let value=0,valid=true;
    if(segment.source<4){const key=['temperature','humidity','pm25','formaldehyde'][segment.source];value=Number(avg[key]??s[key]??0);valid=avg.valid===true||s.sensor_valid===true;}
    else if(segment.source===5)value=followSpeed;
    else{valid=avg.valid===true||s.sensor_valid===true;value=Math.max((Number(avg.pm25??s.pm25??0)/Math.max(Number(cfg.quality_pm)||1,0.01)),(Number(avg.formaldehyde??s.formaldehyde??0)/Math.max(Number(cfg.quality_hcho)||1,0.001)));}
    if(valid){
     let colorIndex=value<segment.suitable_low?0:value>segment.suitable_high?2:1;if(segment.display===0)colorIndex=1;
     const range=Number(segment.maximum)-Number(segment.minimum),level=segment.display===1?1:range>0?clip((value-Number(segment.minimum))/range):0;
     const levelBrightness=brightness*level*(cfg.follow_fan?followSpeed/100:1),rgb=(segment.colors?.[colorIndex]||[0,0,0]).map(v=>Number(v)*levelBrightness/255);
     for(let i=0;i<lit;i++)slotColors[at+i]=rgb;
    }
   }
   at+=length;
  }
  for(let i=0;i<N;i++)sources[i]=slotColors[slotForLed(i)];
 }else if(enabled&&brightness){
  let level=brightness*(advanced.follow_fan?followSpeed/100:1);
  if(eff===2)level*=((1+Math.sin(now/2000))/2);
  for(let i=0;i<N;i++){
   let rgb=color;
   if(eff===3){const p=(Math.floor(slotForLed(i)*768/32)+Math.floor(now/30))%768;rgb=[p<256?255-p:p>512?p-512:0,p<256?p:p<512?511-p:0,p<256?0:p<512?p-256:767-p];}
   sources[i]=rgb.map(v=>v/255*level);
  }
 }
 const step=Math.PI*2/N,base=Math.PI/2-9*step,radius=77,samples=24,parts=[
  '<circle class="ring-guide" cx="100" cy="100" r="77"></circle>',
  '<circle class="ring-edge" cx="100" cy="100" r="85"></circle>',
  '<circle class="ring-edge" cx="100" cy="100" r="69"></circle>',
  '<text class="ring-anchor" x="100" y="198" text-anchor="middle">10</text>'
 ];
 // Wendland C2 gives a smooth, compact light spread that reaches zero at two LED pitches.
 const falloff=d=>{const r=d/2;if(r>=1)return 0;const q=1-r;return q*q*q*q*(4*r+1);};
 const point=a=>[100+radius*Math.cos(a),100+radius*Math.sin(a)];
 for(let sample=0;sample<N*samples;sample++){
  const position=(sample+0.5)/samples,a0=base+sample/samples*step,a1=base+(sample+1)/samples*step,[x0,y0]=point(a0),[x1,y1]=point(a1),mix=[0,0,0];
  for(let i=0;i<N;i++){
   if(!sources[i].some(v=>v>0))continue;
   const raw=Math.abs(position-i),distance=Math.min(raw,N-raw),weight=falloff(distance);
   if(!weight)continue;
   for(let c=0;c<3;c++)mix[c]=Math.min(1,mix[c]+sources[i][c]*weight);
  }
  const strength=Math.max(...mix);
  if(strength>0.00001){
   const rgb=mix.map(v=>Math.round(v/strength*255));
   parts.push('<path class="ring-light-segment" d="M'+x0.toFixed(3)+' '+y0.toFixed(3)+' A'+radius+' '+radius+' 0 0 1 '+x1.toFixed(3)+' '+y1.toFixed(3)+'" stroke="rgb('+rgb.join(',')+')" stroke-opacity="'+strength.toFixed(4)+'"></path>');
  }
 }
 for(const svg of svgs){
  svg.dataset.feedbackSpeed=String(feedbackSpeed);svg.dataset.feedbackSource=touching?'target':'pwm';
  svg.setAttribute('role','img');svg.removeAttribute('aria-hidden');svg.setAttribute('aria-label','A1 圆环导光预览：31 颗光源均匀分布，10 号在 6 点，25 和 26 号分列 12 点两侧');
  svg.innerHTML=parts.join('')+'<text x="100" y="98" text-anchor="middle" class="ring-v">'+(enabled?(eff===0?feedbackSpeed:Math.round(brightness*100))+'%':t('state.off'))+'</text><text x="100" y="122" text-anchor="middle" class="ring-l">'+(eff===0?t(touching?'a1.feedback_target':'a1.feedback_pwm'):t('a1.effect.'+eff))+'</text>';
 }
}
function updateRingAnimation(){
 clearInterval(ringAnimationTimer);
 ringAnimationTimer=setInterval(()=>{
  if(!UI.state)return;
  const lightPage=document.querySelector('[data-settings-page="light"]'),ramping=UI.state.applied_speed!==UI.state.percentage;
  if(!document.hidden&&(ramping||lightPage&&!lightPage.hidden)&&!ringPolling&&performance.now()-ringPolledAt>=(ramping?200:500)){
   ringPolling=true;ringPolledAt=performance.now();UI.reload().finally(()=>{ringPolling=false;});
  }
  if(advanced.effect===2||advanced.effect===3||previewTarget!==null)renderRing(UI.state);
 },50);
}
function renderLight(s){
 if(!lightDirty){$('ledEnabled').checked=s.led_enabled;$('ledAlways').checked=s.led_always_on;$('bright').value=s.brightness;color=[s.red,s.green,s.blue];renderLightControls();}
 $('effectNote').replaceChildren(t('a1.effect_note',{e:t('a1.effect.'+advanced.effect)})+' ',h('a',{href:'#settings/light'},t('a1.effect_change')));
 renderRing(s);
}

/* ---------- Settings: light effects ---------- */
const EFFECTS=[0,1,2,3,4];
async function showLight(){
 const page=document.querySelector('[data-settings-page="light"]');
 const m=clone(advanced=await api('/light/advanced'));updateRingAnimation();
 const refreshDraft=()=>{advanced=clone(m);updateRingAnimation();if(UI.state)renderRing(UI.state);};
 page.oninput=refreshDraft;page.onchange=refreshDraft;
 const draw=()=>{
  const opts=h('div',{class:'options',role:'radiogroup'},EFFECTS.map(e=>h('label',{class:'option'},h('input',{type:'radio',name:'effect',value:e,checked:m.effect===e,onchange:()=>{m.effect=e;refreshDraft();draw();}}),
   h('b',{},t('a1.effect.'+e)),h('span',{},t('a1.effect_desc.'+e)))));
  const segs=m.effect===4?h('div',{class:'stack'},
   h('div',{class:'row between'},h('span',{class:'label',i18n:'fx.count'}),seg([1,2,3,4].map(n=>[n,String(n)]),n=>{m.segments=n;draw();})),
   ...m.segment.slice(0,m.segments).map((sg,i)=>h('div',{class:'subcard stack'},h('h3',{},t('fx.segment',{n:i+1})),
    h('div',{class:'fields'},
     h('label',{class:'field'},h('span',{i18n:'fx.source'}),h('select',{onchange:e=>sg.source=+e.target.value},[0,1,2,3,4,5].map(v=>h('option',{value:v,selected:sg.source===v},t('fx.src.'+v))))),
     h('label',{class:'field'},h('span',{i18n:'fx.display'}),h('select',{onchange:e=>sg.display=+e.target.value},[0,1,2].map(v=>h('option',{value:v,selected:sg.display===v},t('fx.disp.'+v)))))),
    h('div',{class:'sentence',style:'margin-top:12px'},t('fx.range'),num(sg,'minimum'),'–',num(sg,'maximum'),h('span',{class:'help'},t('fx.comfort')),num(sg,'suitable_low'),'–',num(sg,'suitable_high')),
    h('div',{class:'row',style:'margin-top:12px'},['fx.low','fx.ok','fx.high'].map((k,j)=>h('label',{class:'row small'},h('input',{type:'color',value:hex(sg.colors[j]),oninput:e=>{const v=e.target.value;sg.colors[j]=[1,3,5].map(x=>parseInt(v.slice(x,x+2),16));}}),t(k)))))))
   :null;
  if(segs)segs.querySelector('.seg').set(m.segments);
  const previewSpeed=h('input',{id:'previewSpeed',type:'range',min:1,max:100,step:1,value:UI.state?.fan_on?UI.state.percentage:UI.state?.requested_speed||60,'aria-label':t('a1.speed'),
   oninput:e=>{previewTarget=Number(e.target.value);$('previewSpeedValue').textContent=e.target.value+'%';renderRing(UI.state);},
   onchange:()=>run(previewSpeed,async()=>{try{await setSpeed(previewSpeed.value);}finally{previewTarget=null;renderRing(UI.state);}},null),
   onblur:()=>{previewTarget=null;if(UI.state)renderRing(UI.state);}});
  const previewRing=document.createElementNS('http://www.w3.org/2000/svg','svg');
  previewRing.setAttribute('class','ring ring-preview-svg');previewRing.setAttribute('viewBox','0 0 200 200');
  page.replaceChildren(pageHead('nav.light','fx.lead'),
   h('div',{class:'ring-effect-preview'},previewRing,
    h('div',{class:'ring-preview-controls'},h('div',{class:'row between'},h('span',{class:'label',i18n:'a1.speed'}),h('b',{class:'num',id:'previewSpeedValue'},previewSpeed.value+'%')),previewSpeed)),
   h('section',{class:'card'},h('div',{class:'card-head'},h('h2',{i18n:'fx.effect'})),opts,
    h('div',{style:'margin-top:16px'},flag(m,'follow_fan','fx.follow','fx.follow_desc')),segs,
    h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),h('p',{class:'help',i18n:'fx.quality_hint'}),
     h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'fx.quality_pm'}),num(m,'quality_pm',{unit:'µg/m³',step:0.01})),
      h('label',{class:'field'},h('span',{i18n:'fx.quality_hcho'}),num(m,'quality_hcho',{unit:'mg/m³',step:0.001})))),
   saveBar(async()=>{const saved=await api('/light/advanced',m);m.revision=saved.revision;advanced=clone(m);updateRingAnimation();if(UI.state)renderLight(UI.state);})));
  if(UI.state)renderRing(UI.state);
 };
 draw();
}

/* ---------- Settings: M1 binding ---------- */
async function showBinding(){
 bindingStatus=await api('/binding/status').catch(()=>bindingStatus);
 const m=await api('/binding/config');const page=document.querySelector('[data-settings-page="binding"]');
 const save=()=>api('/binding/config',m).then(showBinding);
 const st=mac=>(bindingStatus.peers||[]).find(p=>p.mac===mac)||{};
 const peerItems=m.peers.map((p,i)=>{const s=st(p.mac);
  const probe=h('button',{type:'button',class:'btn ghost icon',title:t('bind.probe'),'aria-label':t('bind.probe')},icon('auto'));
  probe.onclick=()=>run(probe,()=>api('/binding/probe',{mac:p.mac}),'bind.probe_sent');
  const del=h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete')},icon('trash'));
  del.onclick=async()=>{if(await confirm({title:t('bind.remove_q'),body:t('bind.remove_body',{m:prettyMac(p.mac)}),ok:t('common.delete'),danger:true})){m.peers.splice(i,1);run(del,save);}};
  return h('div',{class:'item'},icon('air'),h('div',{class:'grow'},h('b',{class:'num'},'M1 · '+prettyMac(p.mac)),h('span',{},s.ip||p.ip||t('bind.ip_auto'))),
   h('span',{class:'badge'},String(s.transport||'mqtt').toUpperCase()),
   h('span',{class:'badge '+(s.pending?'warn':s.fresh?'ok':'bad')},t(s.pending?'bind.pending':s.fresh?'bind.fresh':'bind.stale')),probe,del);});
 const mac=h('input',{placeholder:'B0:F8:93:28:64:B6',maxLength:17,required:true,autocomplete:'off'});
 const ip=h('input',{placeholder:t('bind.ip_ph'),maxLength:15});
 const opts={force_mqtt:false,recovery:true,timeout_ms:1000,recovery_seconds:60};
 const add=h('form',{class:'subcard stack'},h('h3',{i18n:'bind.add'}),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'bind.mac'}),mac),h('label',{class:'field'},h('span',{i18n:'bind.ip'}),ip)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),flag(opts,'force_mqtt','bind.force','bind.force_desc'),flag(opts,'recovery','bind.recovery','bind.recovery_desc'),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'bind.timeout'}),num(opts,'timeout_ms',{unit:'ms',min:100})),
    h('label',{class:'field'},h('span',{i18n:'bind.recovery_s'}),num(opts,'recovery_seconds',{unit:t('unit.s'),min:5})))),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},icon('plus'),h('span',{},t('bind.add_btn')))));
 onSubmit(add,()=>{const id=normalizeMac(mac.value);if(!id)throw Error(t('bind.bad_mac'));
  if(m.peers.some(p=>p.mac===id))throw Error(t('bind.dup'));if(m.peers.length>=8)throw Error(t('common.max',{n:8}));
  m.peers.push({mac:id,ip:ip.value.trim(),kind:1,confirmed:false,...opts});return save();},'bind.added');
 const ids=m.response_ids.length?h('div',{class:'banner info',style:'display:block'},h('b',{},t('bind.ids_title')),h('p',{class:'small',style:'margin:4px 0 8px'},t('bind.ids_body')),
  ...m.response_ids.map(id=>h('div',{class:'row'},h('code',{class:'grow num'},id),
   h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.copy'),onclick:()=>{if(navigator.clipboard)navigator.clipboard.writeText(id);toast(t('common.copied'));}},icon('copy'))))):null;
 // Purifier group stays collapsed: it is only used with several A1 units.
 const members=h('div',{class:'list'},m.members.map((mb,i)=>h('div',{class:'item'},icon('fan'),
  h('div',{class:'grow'},h('b',{class:'num'},'A1 · '+prettyMac(mb.mac)),h('span',{},mb.ip||t('bind.ip_auto'))),
  h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:()=>{m.members.splice(i,1);save();}},icon('trash')))));
 const gmac=h('input',{placeholder:'B0:F8:93:30:31:34',maxLength:17});
 const group=h('details',{class:'card more'},h('summary',{i18n:'bind.group'}),h('p',{class:'help',i18n:'bind.group_lead'}),
  h('label',{class:'field'},h('span',{i18n:'bind.group_name'}),h('input',{value:m.group,maxLength:32,placeholder:t('bind.group_ph'),oninput:e=>m.group=e.target.value})),
  members,h('div',{class:'row'},h('div',{class:'grow'},gmac),
   h('button',{type:'button',class:'btn',onclick:()=>{const id=normalizeMac(gmac.value);if(!id){toast(t('bind.bad_mac'),true);return;}m.members.push({mac:id,ip:''});save();}},icon('plus'),h('span',{},t('bind.member_add')))),
  flag(m,'group_force_mqtt','bind.force','bind.force_desc'),flag(m,'group_recovery','bind.recovery','bind.recovery_desc'),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'bind.timeout'}),num(m,'group_timeout_ms',{unit:'ms'})),
   h('label',{class:'field'},h('span',{i18n:'bind.recovery_s'}),num(m,'group_recovery_seconds',{unit:t('unit.s')}))),
  saveBar(save));
 page.replaceChildren(pageHead('nav.binding','bind.lead'),
  h('section',{class:'card'},h('div',{class:'card-head'},h('h2',{i18n:'bind.sensors'}),h('span',{class:'badge'},m.peers.length+' / 8')),
   peerItems.length?h('div',{class:'list'},peerItems):h('div',{class:'empty'},t('bind.empty')),ids,add,info('bind.hint')),group);
}

/* ---------- Settings: automatic control rules ---------- */
async function showLinkage(){
 bindingStatus=await api('/binding/status').catch(()=>bindingStatus);
 const m=await api('/linkage/config');const page=document.querySelector('[data-settings-page="linkage"]');
 const has=(mask,bit)=>!!(mask&bit);
 const metricSeg=()=>{const s=seg([[1,'PM2.5'],[2,()=>t('m.formaldehyde')],[3,'link.both']],v=>{m.metrics=v;draw();});s.set(m.metrics);return s;};
 const draw=()=>{
  const modes=h('div',{class:'options',role:'radiogroup'},[0,1,2].map(v=>h('label',{class:'option'},h('input',{type:'radio',name:'mode',value:v,checked:m.mode===v,onchange:()=>{m.mode=v;draw();}}),
   h('b',{},t('link.mode.'+v)),h('span',{},t('link.mode_desc.'+v)))));
  let detail;
  if(m.mode===0){const [o,r]=slider(m,'fixed_speed',{min:1});detail=h('div',{},h('div',{class:'row between'},h('span',{class:'label',i18n:'link.fixed'}),o),r);}
  else if(m.mode===1)detail=h('div',{class:'stack'},
   has(m.metrics,1)&&h('div',{class:'sentence'},t('link.lin_pm_a'),num(m,'low_pm',{unit:'µg/m³',step:1}),t('link.lin_b'),num(m,'min_speed',{unit:'%',step:1}),t('link.lin_c'),num(m,'high_pm',{unit:'µg/m³',step:1}),t('link.lin_b'),num(m,'max_speed',{unit:'%',step:1})),
   has(m.metrics,2)&&h('div',{class:'sentence'},t('link.lin_hcho_a'),num(m,'low_hcho',{unit:'mg/m³',step:.001}),t('link.lin_b'),num(m,'min_speed',{unit:'%',step:1}),t('link.lin_c'),num(m,'high_hcho',{unit:'mg/m³',step:.001}),t('link.lin_b'),num(m,'max_speed',{unit:'%',step:1})));
  else detail=h('div',{class:'stack'},
   has(m.metrics,1)&&h('div',{class:'sentence'},t('link.pid_pm'),num(m,'target_pm',{unit:'µg/m³',step:1})),
   has(m.metrics,2)&&h('div',{class:'sentence'},t('link.pid_hcho'),num(m,'target_hcho',{unit:'mg/m³',step:.001})),
   h('div',{class:'sentence'},t('link.range'),num(m,'min_speed',{unit:'%',step:1}),'–',num(m,'max_speed',{unit:'%',step:1})),
   h('details',{class:'more'},h('summary',{i18n:'link.pid_tune'}),h('div',{class:'fields'},['kp','ki','kd'].map(k=>h('label',{class:'field'},h('span',{},k.toUpperCase()),num(m,k,{step:.01}))))));
  const rule=kind=>{
   const en=kind+'_enabled',mk=kind+'_metrics',all=kind+'_all',cmp=t(kind==='on'?'link.above':'link.below');
   const which=seg([[1,'PM2.5'],[2,()=>t('m.formaldehyde')],[3,'link.both']],v=>{m[mk]=v;draw();});which.set(m[mk]);
   const anyAll=seg([[0,'link.any'],[1,'link.all']],v=>{m[all]=v;});anyAll.set(m[all]);
   const warn=kind==='off'&&m.on_enabled&&(m.off_pm>=m.on_pm||m.off_hcho>=m.on_hcho)?h('p',{class:'help',style:'color:var(--warn)'},t('link.hyst_warn')):null;
   const box=h('div',{class:'subcard stack'},flag(m,en,'link.'+kind+'_rule','link.'+kind+'_desc'),
    h('div',{class:'row'},h('span',{class:'help',i18n:'link.watch'}),which,m[mk]===3?anyAll:null),
    has(m[mk],1)&&h('div',{class:'sentence'},'PM2.5 '+cmp,num(m,kind+'_pm',{unit:'µg/m³',step:1})),
    has(m[mk],2)&&h('div',{class:'sentence'},t('m.formaldehyde')+' '+cmp,num(m,kind+'_hcho',{unit:'mg/m³',step:.001})),warn);
   return box;};
  const master=flag(m,'enabled','link.enable','link.enable_desc');master.querySelector('input').addEventListener('change',draw);
  // replaceChildren() stringifies a null child, so assemble the list first.
  const rows=[pageHead('nav.linkage','link.lead')];
  if(!(bindingStatus.peers||[]).length)rows.push(h('div',{class:'banner warn'},icon('alert'),
   h('span',{},t('link.no_peer')+' '),h('a',{href:'#settings/binding'},t('a1.auto_link'))));
  rows.push(h('section',{class:'card'},master),
   h('fieldset',{class:'bare',disabled:!m.enabled},
    h('section',{class:'card stack'},h('h2',{i18n:'link.speed'}),h('div',{class:'row between'},h('span',{class:'label',i18n:'link.metric'}),metricSeg()),modes,detail),
    h('section',{class:'card stack',style:'margin-top:16px'},h('div',{},h('h2',{i18n:'link.onoff'}),h('p',{class:'help',i18n:'link.onoff_lead'})),rule('on'),rule('off'),
     h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),
      h('div',{class:'fields'},
       h('label',{class:'field'},h('span',{i18n:'link.statistic'}),h('select',{onchange:e=>m.statistic=+e.target.value},[0,1,2,3,4,5].map(v=>h('option',{value:v,selected:m.statistic===v},t('link.stat.'+v))))),
       h('label',{class:'field'},h('span',{i18n:'link.debounce'}),num(m,'debounce_seconds',{unit:t('unit.s'),min:0})),
       h('label',{class:'field'},h('span',{i18n:'link.min_switch'}),num(m,'min_switch_seconds',{unit:t('unit.s'),min:0})))))),
   saveBar(()=>api('/linkage/config',m)));
  page.replaceChildren(...rows);
 };
 draw();
}

/* ---------- Boot ---------- */
const clock=UI.clockCard({
 load:()=>api('/time/config'),
 save:v=>api('/time/config',v),
 status:s=>[['clock.synced',t((bindingStatus&&bindingStatus.clock_valid)?'s.synced':'s.syncing'),(bindingStatus&&bindingStatus.clock_valid)?'ok':'warn'],
  ['clock.uptime',UI.duration(s.uptime_seconds||0)],['clock.memory',(Math.round((s.free_memory||0)/1024))+' KB']]});
$('clockCard').replaceWith(clock.el);

UI.start({
 model:'A1',kindKey:'kind.a1',icon:'fan',mqttHostMax:127,factoryReset:true,
 otaName:'phicomm_a1.ota.bin.signed',haHintKey:'mqtt.ha_a1',otaHintKey:'fw.hint_a1',buttonHintKey:'sys.hint_a1',
 scheduleLead:'sch.lead_a1',interval:2000,hasButtons:true,
 groups:[['grp.network',['network','mqtt']],['grp.device',['device','light']],['grp.auto',['binding','linkage','schedule','buttons','night']],['grp.system',['firmware','diagnostics','logs','maintenance']]],
 nav:{network:'nav.wifi',mqtt:'nav.mqtt',device:'nav.general',light:'nav.light',binding:'nav.binding',linkage:'nav.linkage',schedule:'nav.schedule',buttons:'nav.buttons',night:'nav.sleep',firmware:'nav.firmware',diagnostics:'nav.diagnostics',logs:'nav.logs',maintenance:'nav.maintenance'},
 pages:{device:{show:clock.show,status:clock.status},light:{show:showLight},binding:{show:showBinding},linkage:{show:showLinkage}},
 diagGroups:[['diag.g_fan',['fan_on','requested_fan_on','requested_speed','speed','percentage','applied_speed','fan_ready','child_lock','panel_ready','panel_errors','hardware_errors','panel_raw']],
  ['diag.g_light',['led_enabled','led_visible','led_always_on','brightness','red','green','blue','config_dirty','save_error']],
  ['diag.g_ota_img',['ota_signature_verified','ota_image_verified','ota_key_id','ota_image_length','ota_release_counter','ota_version']]],
 healthChecks:s=>[['diag.c_panel',s.panel_ready?'ok':'bad',s.panel_ready?t('state.ok'):t('diag.errors',{n:s.panel_errors})],
  ['diag.c_fan',s.fan_ready&&!s.hardware_errors?'ok':'bad',s.hardware_errors?t('diag.errors',{n:s.hardware_errors}):t('state.ok')],
  ['diag.c_storage',s.save_error?'bad':'ok',s.save_error||t('state.ok')]],
 chips:s=>s.child_lock?[h('span',{class:'chip'},icon('lock'),h('b',{},t('a1.child_lock')))]:[],
 onStatus:s=>{renderFan(s);renderLight(s);renderFilter(s);}
});
I18N.onChange(()=>{if(UI.state){renderAuto();for(const key of ['device','light','binding','linkage'])if(!document.querySelector('[data-settings-page="'+key+'"]').hidden&&UI.pages[key].show)UI.pages[key].show();}});
// Keep the automatic-control summary fresh even while the home page is idle.
(async function poll(){try{bindingStatus=await api('/binding/status');if(UI.state)renderFan(UI.state);renderAuto();}catch{}setTimeout(poll,3000);})();
api('/light/advanced').then(a=>{advanced=a;updateRingAnimation();if(UI.state)renderLight(UI.state);}).catch(e=>toast(e.message,true));
})();
<\/script>
</body>
</html>
`,m1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta name="referrer" content="no-referrer"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>M1 空气质量检测器</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;-webkit-tap-highlight-color:transparent;
 --bg:#f4f6f9;--surface:#fff;--surface-muted:#eef1f5;--text:#1d2430;--muted:#5f6b7c;--border:#dbe0e8;
 --accent:#305ed4;--accent-text:#fff;--accent-soft:#e6edfc;
 --danger:#b8353c;--danger-soft:#fbe9ea;--success:#26734c;--success-soft:#e3f3ea;--warn:#9a5b00;--warn-soft:#fdf1dc;
 --focus:#7a9cf5;--radius:12px;--radius-s:8px;--shadow:0 1px 2px rgba(20,30,50,.06),0 4px 16px rgba(20,30,50,.04);
 font-family:Inter,system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--text);background:var(--bg)}
:root[data-theme=dark]{--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}
@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}}
*{box-sizing:border-box}
body{max-width:1080px;margin:0 auto;padding:20px 32px 96px;line-height:1.5;font-size:15px}
h1{font-size:20px;margin:0;letter-spacing:-.3px}h2{font-size:16px;margin:0;font-weight:650}h3{font-size:14px;margin:0 0 8px;font-weight:650}
p{margin:0}a{color:var(--accent)}[hidden]{display:none!important}
.muted,.help{color:var(--muted)}.help{font-size:13px}.small{font-size:13px}.num{font-variant-numeric:tabular-nums}
:focus-visible{outline:3px solid var(--focus);outline-offset:2px}
svg.i{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}

/* Header */
.topbar{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;padding:4px 0 16px}
.brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
.brand .logo{width:40px;height:40px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}
.brand .kind{font-size:12px;color:var(--muted)}
.prefs{display:flex;gap:6px}.prefs select{font:inherit;font-size:12px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)}
.chips{display:flex;flex-wrap:wrap;gap:8px;width:100%}
.chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--surface);border:1px solid var(--border);font-size:13px;color:var(--muted);max-width:100%}
.chip b{color:var(--text);font-weight:600}
.dot{width:8px;height:8px;border-radius:50%;background:var(--muted);flex:none}
.dot.ok{background:var(--success)}.dot.warn{background:var(--warn)}.dot.bad{background:var(--danger)}
.dot.live{animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.35}}
.banner{display:flex;gap:10px;align-items:center;padding:10px 14px;border-radius:var(--radius-s);margin:0 0 16px;font-size:14px}
.banner.bad{background:var(--danger-soft);color:var(--danger)}.banner.warn{background:var(--warn-soft);color:var(--warn)}.banner.ok{background:var(--success-soft);color:var(--success)}.banner.info{background:var(--accent-soft);color:var(--accent)}

/* Tabs */
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);margin:0 0 20px}
.tabs a{display:flex;align-items:center;gap:8px;padding:10px 14px;color:var(--muted);text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:550}
.tabs a[aria-current=page]{color:var(--accent);border-bottom-color:var(--accent)}

/* Cards and grids */
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);min-width:0}
.card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.broker-card-head{flex-wrap:wrap}
.broker-platform-link{flex-shrink:0;color:var(--accent);background:var(--surface-muted)}
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{position:relative;font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
/* Keep pending feedback out of flex flow so buttons and wrapped rows stay put. */
.btn[aria-busy=true]::before{content:"";position:absolute;left:25%;bottom:3px;width:50%;height:2px;border-radius:1px;background:currentColor;animation:pulse 1s linear infinite;pointer-events:none}

/* Segmented control */
.seg{display:inline-flex;background:var(--surface-muted);border-radius:var(--radius-s);padding:3px;gap:2px;flex-wrap:wrap}
.seg button{font:inherit;font-size:14px;border:0;background:transparent;color:var(--muted);padding:7px 14px;border-radius:6px;cursor:pointer;min-height:36px;font-weight:550;width:auto;margin:0}
.seg button[aria-pressed=true]{background:var(--surface);color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.seg.full{display:flex}.seg.full button{flex:1}
.seg button:disabled{cursor:not-allowed;opacity:.5}

/* Switch */
.switch{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;min-height:44px}
.switch .text{min-width:0}.switch .text b{display:block;font-weight:600}.switch .text span{font-size:13px;color:var(--muted)}
.switch input{appearance:none;flex:none;width:44px;height:26px;min-height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;margin:0;transition:background .15s}
.switch input::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
.switch input:checked{background:var(--accent)}.switch input:checked::after{transform:translateX(18px)}
.switch input:disabled{opacity:.5}
.switch+.switch{border-top:1px solid var(--border);padding-top:8px;margin-top:8px}

/* Fields */
.field{display:block}.field>span{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
.field .help{margin-top:6px}
input[type=text],input[type=password],input[type=number],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input:not([type]),select,textarea{font:inherit;width:100%;min-height:40px;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);color:var(--text)}
textarea{min-height:120px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}
input[type=range]{width:100%;min-height:28px;accent-color:var(--accent);margin:0;padding:0;border:0;background:transparent}
input[type=color]{width:40px;height:40px;min-height:40px;padding:2px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);cursor:pointer}
input[type=file]{padding:8px}
.fields{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.form-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}
.input-unit{display:flex;align-items:center;gap:8px}.input-unit input{flex:1}.input-unit em{font-style:normal;color:var(--muted);font-size:13px;white-space:nowrap}
.sentence{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:14px}
.sentence input{width:90px;min-height:36px;padding:6px 8px}
details.more{border-top:1px solid var(--border);margin-top:20px;padding-top:12px}
details.more>summary{cursor:pointer;color:var(--muted);font-size:14px;font-weight:600;list-style:none;display:flex;align-items:center;gap:6px}
details.more>summary::before{content:"\\203A";display:inline-block;transition:transform .15s;font-size:18px;line-height:1}
details.more[open]>summary::before{transform:rotate(90deg)}
details.more>*:not(summary){margin-top:16px}
details.info{font-size:13px;color:var(--muted);margin-top:20px}
details.info>summary{cursor:pointer;display:inline-flex;align-items:center;gap:4px;list-style:none}
details.info>summary svg.i{width:15px;height:15px}
details.info>summary::-webkit-details-marker{display:none}
details.info>p{margin-top:6px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
summary::-webkit-details-marker{display:none}

/* Read-only display summary */
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px;background:var(--surface-muted);border-radius:var(--radius-s);padding:14px 16px;margin:0}
.summary dt{font-size:12px;color:var(--muted)}.summary dd{margin:2px 0 0;font-weight:600;overflow-wrap:anywhere;display:flex;align-items:center;gap:6px}

/* Settings layout */
.settings{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start}
.side{position:sticky;top:12px;display:flex;flex-direction:column;gap:2px}
.side .group{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin:14px 10px 4px;font-weight:700}
.side .group:first-child{margin-top:0}
.side a{padding:8px 10px;border-radius:var(--radius-s);color:var(--text);text-decoration:none;font-size:14px}
.side a:hover{background:var(--surface-muted)}.side a[aria-current=page]{background:var(--accent-soft);color:var(--accent);font-weight:600}
.page-title{margin:0 0 4px;font-size:18px}.page-lead{margin:0 0 16px;color:var(--muted);font-size:14px}
.section-label{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:0 0 10px}

/* Lists */
.list{display:flex;flex-direction:column;gap:8px}
.item{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);min-width:0}
.item .grow b{display:block}.item .grow span{font-size:13px;color:var(--muted)}
.item .time{font-size:20px;min-width:64px}
.empty{padding:20px;text-align:center;color:var(--muted);border:1px dashed var(--border);border-radius:var(--radius-s);font-size:14px}
.badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;background:var(--surface-muted);color:var(--muted);white-space:nowrap}
.badge.ok{background:var(--success-soft);color:var(--success)}.badge.warn{background:var(--warn-soft);color:var(--warn)}.badge.bad{background:var(--danger-soft);color:var(--danger)}.badge.info{background:var(--accent-soft);color:var(--accent)}
.subcard{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;background:var(--surface)}
.subcard h3{margin-bottom:12px}
fieldset{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;margin:16px 0;min-width:0}
fieldset.bare{border:0;padding:0;margin-left:0;margin-right:0;margin-bottom:0;min-width:0}
fieldset.bare:disabled{opacity:.5}
legend{padding:0 8px;font-size:14px}
.table{width:100%;border-collapse:collapse;font-size:14px}
.table th{text-align:left;font-size:12px;color:var(--muted);font-weight:600;padding:6px 8px;border-bottom:1px solid var(--border)}
.table td{padding:8px 8px;border-bottom:1px solid var(--border);vertical-align:middle}
.table tr:last-child td{border-bottom:0}

/* Weekday chips */
.days{display:flex;gap:6px;flex-wrap:wrap}
.days label{position:relative;margin:0}
.days input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer;width:100%;min-height:100%}
.days span{display:grid;place-items:center;min-width:40px;height:36px;padding:0 8px;border-radius:999px;border:1px solid var(--border);font-size:13px;font-weight:600;color:var(--muted)}
.days input:checked+span{background:var(--accent);border-color:var(--accent);color:var(--accent-text)}
.days input:focus-visible+span{outline:3px solid var(--focus);outline-offset:2px}

/* Option cards */
.options{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}
.option{position:relative;border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;cursor:pointer;background:var(--surface);display:block;margin:0}
.option input{position:absolute;opacity:0}
.option b{display:block;font-size:14px}.option span{font-size:12px;color:var(--muted)}
.option:has(input:checked){border-color:var(--accent);background:var(--accent-soft);box-shadow:inset 0 0 0 1px var(--accent)}
.option:has(input:focus-visible){outline:3px solid var(--focus);outline-offset:2px}

/* Toasts and dialogs */
.toasts{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:20;width:min(420px,calc(100% - 32px))}
.toast{padding:12px 16px;border-radius:var(--radius-s);background:var(--text);color:var(--bg);font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.2);animation:rise .2s}
.toast.bad{background:var(--danger);color:#fff}
@keyframes rise{from{transform:translateY(8px);opacity:0}}
dialog{border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);padding:24px;max-width:420px;width:calc(100% - 32px)}
dialog::backdrop{background:rgba(10,15,25,.45)}
dialog h2{margin-bottom:8px}dialog p{color:var(--muted);font-size:14px}

/* Stats and bars */
.stat{font-size:40px;font-weight:650;letter-spacing:-1px;line-height:1.1;font-variant-numeric:tabular-nums}
.stat small{font-size:15px;font-weight:500;color:var(--muted);letter-spacing:0;margin-left:4px}
.bar{height:8px;border-radius:4px;background:var(--surface-muted);overflow:hidden;position:relative}
.bar i{position:absolute;inset:0 auto 0 0;background:var(--accent);border-radius:4px;transition:width .6s}
.bar i.target{background:transparent;border-right:2px solid var(--text);border-radius:0}
.eyebrow{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}
.label{font-size:13px;font-weight:600}
progress{width:100%;height:8px;accent-color:var(--accent)}
pre{overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;background:var(--surface-muted);padding:14px;border-radius:var(--radius-s);max-height:360px}

/* Diagnostics */
.health{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.health .item{padding:10px 12px}
.diag{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.diag details{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;background:var(--surface)}
.diag summary{cursor:pointer;font-weight:600;display:flex;justify-content:space-between;gap:8px}
.diag dl{margin:8px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}
.diag dt{color:var(--muted)}.diag dd{margin:0;text-align:right;overflow-wrap:anywhere}

/* ---------- A1 ---------- */
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "filter filter" "light light"}
.fan-hero{display:flex;align-items:center;gap:20px}
.power{flex:none;width:96px;height:96px;border-radius:50%;border:0;display:grid;place-items:center;cursor:pointer;background:var(--surface-muted);color:var(--muted);box-shadow:inset 0 0 0 1px var(--border);transition:background .2s,box-shadow .2s,color .2s;width:96px}
.power svg{width:38px;height:38px}
.power[aria-pressed=true]{background:var(--accent);color:var(--accent-text);box-shadow:0 0 0 8px var(--accent-soft)}
.power:disabled{opacity:.5;cursor:not-allowed}
.mini-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.mini-metrics>div{display:flex;flex-direction:column;gap:2px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
.mini-metrics b{font-size:18px}.mini-metrics small{font-size:12px;color:var(--muted);font-weight:500}
.mini-metrics .badge{align-self:flex-start}
.light-layout{display:flex;gap:28px;align-items:center}
.ring{width:180px;height:180px;flex:none}
.ring-effect-preview{display:flex;justify-content:center;align-items:center;gap:24px;min-height:196px}
.ring-preview-controls{width:min(280px,100%)}
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .ring-anchor{font-size:7px;font-weight:700;fill:var(--muted)}
.ring .ring-guide{fill:none;stroke:var(--surface-muted);stroke-width:15}
.ring .ring-edge{fill:none;stroke:var(--muted);stroke-width:1;opacity:.45}
.ring .ring-light-segment{fill:none;stroke-width:12;stroke-linecap:butt;transition:stroke-opacity .12s linear}
.swatches{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;align-items:center}
.swatch{width:32px;height:32px;min-height:32px;border-radius:50%;border:2px solid var(--surface);background:var(--c);box-shadow:0 0 0 1px var(--border);cursor:pointer;padding:0}
.swatch[aria-pressed=true]{box-shadow:0 0 0 2px var(--accent)}
.swatch:disabled,.swatches input:disabled{opacity:.35;cursor:not-allowed}
.swatches input[type=color]{width:32px;height:32px;min-height:32px;border-radius:50%;padding:3px;border:0;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)}
.swatches input[type=color]::-webkit-color-swatch-wrapper{padding:0}
.swatches input[type=color]::-webkit-color-swatch{border:2px solid var(--surface);border-radius:50%}
.swatches input[type=color]::-moz-color-swatch{border:2px solid var(--surface);border-radius:50%}

/* ---------- M1 ---------- */
.verdict{display:flex;align-items:center;gap:16px;border-left:6px solid var(--border)}
.verdict[data-level=ok]{border-left-color:var(--success)}.verdict[data-level=warn]{border-left-color:var(--warn)}.verdict[data-level=bad]{border-left-color:var(--danger)}
.verdict[data-level=ok] .stat{color:var(--success)}.verdict[data-level=warn] .stat{color:var(--warn)}.verdict[data-level=bad] .stat{color:var(--danger)}
.fresh{display:flex;align-items:center;gap:8px;white-space:nowrap}
.metrics{display:grid;gap:16px;grid-template-columns:repeat(4,minmax(0,1fr))}
.metric .stat{margin:12px 0 14px}
.scale{position:relative;display:flex;gap:2px;height:6px}
.scale i{border-radius:3px;opacity:.55}.scale i.ok{background:var(--success)}.scale i.warn{background:var(--warn)}.scale i.bad{background:var(--danger)}
.scale b{position:absolute;top:-4px;width:4px;height:14px;margin-left:-2px;border-radius:2px;background:var(--text);box-shadow:0 0 0 2px var(--surface)}

/* ---------- TC1 ---------- */
.tc1-home{grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);grid-template-areas:"sockets power" "sockets panel"}
.tiles{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.tile-wrap{position:relative}
.tile{width:100%;font:inherit;text-align:left;display:flex;flex-direction:column;gap:4px;padding:14px;min-height:110px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface-muted);color:var(--muted);cursor:pointer;transition:background .15s,border-color .15s;margin:0}
.tile .tile-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:auto}
.tile .idx{font-size:12px;font-weight:700;padding-right:26px}
.tile .name{color:var(--text);font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .state{font-size:13px;font-weight:600}
.tile[aria-pressed=true]{background:var(--accent-soft);border-color:var(--accent);color:var(--accent)}
.tile:disabled{cursor:progress;opacity:.7}
.tile-edit{position:absolute;top:8px;right:8px}
.spark{width:100%;height:64px;margin:12px 0 4px;display:block}
.spark .line{fill:none;stroke:var(--accent);stroke-width:2;vector-effect:non-scaling-stroke}
.spark .area{fill:var(--accent-soft);stroke:none}

@media(max-width:860px){.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:760px){
 body{padding:12px 14px 96px}
 .settings{grid-template-columns:1fr;gap:12px}
 .side{position:static;flex-direction:row;overflow-x:auto;gap:4px;padding-bottom:6px;scrollbar-width:none}
 .side .group{display:none}.side a{white-space:nowrap;border:1px solid var(--border)}
 .a1-home,.tc1-home{grid-template-columns:1fr;grid-template-areas:none}
 .a1-home>*,.tc1-home>*{grid-area:auto!important}
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}.ring-effect-preview{flex-direction:column;gap:8px}
 .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
 .power{width:80px;height:80px}
 .verdict{flex-direction:column;align-items:flex-start}
 .card{padding:16px}.stat{font-size:34px}
 .brand h1{font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
 .prefs select{max-width:84px}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* Button mappings: gesture, concrete result, then row actions. */
.button-group{display:grid;gap:8px}.button-mapping{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr) auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.button-result{overflow-wrap:anywhere}.button-range{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px}.button-range summary{cursor:pointer;display:list-item}.button-range summary span{display:block;margin:6px 0 0 18px}.button-range summary .help{color:var(--accent)}
.button-preview{padding:14px;border-radius:var(--radius-s);background:var(--accent-soft);color:var(--accent);overflow-wrap:anywhere}
@media(max-width:600px){.button-mapping{grid-template-columns:1fr auto}.button-gesture{grid-column:1/-1}.button-mapping .row{justify-content:flex-end}.button-range .button-mapping{gap:6px}}

.copyright{margin-top:24px;padding:16px 0;border-top:1px solid var(--border);color:var(--muted);font-size:12px;line-height:1.8;text-align:center;overflow-wrap:anywhere}.copyright a{color:var(--accent);text-underline-offset:3px}
</style>
<script>/* Apply the saved theme before first paint so the page does not flash light on
 * a dark display. The control itself lives in the shared header (ui.js). */
(()=>{
'use strict';
 const key='phicomm.appearance',choices=['system','light','dark'];
 let selected='system';try{const saved=localStorage.getItem(key);if(choices.includes(saved))selected=saved;}catch{}
 if(selected==='system')document.documentElement.removeAttribute('data-theme');
 else document.documentElement.dataset.theme=selected;
})();
<\/script></head>
<body>
<main id="homePage" class="home">
 <!-- Verdict first, then the four readings, then the one control. -->
 <section class="card verdict" id="verdict">
  <div class="grow"><div class="eyebrow" data-i18n="m1.overall"></div><div class="stat" id="overall">—</div><p class="help" id="overallWhy"></p></div>
  <div class="fresh"><span class="dot live" id="freshDot"></span><span id="freshText" class="help"></span></div>
 </section>
 <div class="metrics" id="metrics"></div>
 <div class="grid">
  <section class="card">
   <div class="card-head"><div><h2 data-i18n="m1.screen"></h2><p class="help" data-i18n="m1.screen_desc"></p></div></div>
   <div id="screenSeg"></div>
  </section>
  <section class="card" id="peerCard"></section>
 </div>
</main>

<div id="settingsPage" class="settings" hidden>
 <nav class="side" id="side" aria-label="Settings"></nav>
 <div id="pages">
  <div data-settings-page="device" class="stack">
   <div><h2 class="page-title" data-i18n="nav.general"></h2><p class="page-lead" data-i18n="gen.lead"></p></div>
   <div data-slot="name"></div>
   <section class="card" id="clockCard"></section>
   <div data-slot="auth"></div>
  </div>
  <div data-settings-page="binding" class="stack"></div>
 </div>
</div>

<footer class="copyright">Copyright &copy; Phicomm Community · <a href="https://github.com/phicomm-io/phicomm-community-firmware" target="_blank" rel="noopener noreferrer">固件仓库</a> · <a href="https://phicomm-io.github.io" target="_blank" rel="noopener noreferrer">项目网站</a></footer>
<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'filter.title':['Estimated filter life','滤芯寿命预估'],
'filter.hint':['Counts fan running time only. Default: 4320 h (180 days continuously). Adjust to your filter specification; air quality and filter condition also affect replacement.','仅累计风机开启时间，默认 4320 小时（连续运行 180 天）。可按滤芯规格调整；更换时间还需结合空气质量和滤芯状态。'],
'filter.usage':['Used {used} / {total} h','已用 {used} / {total} 小时'],
'filter.normal':['In service','使用中'],'filter.due':['Replace filter soon','建议更换滤芯'],'filter.expired':['Replacement due','请更换滤芯'],
'filter.settings':['Adjust rated lifetime','调整额定寿命'],'filter.lifetime':['Rated lifetime (hours, 1–20000)','额定寿命（小时，1–20000）'],
'filter.reset':['Reset after replacing filter','更换滤芯后重置'],
'filter.confirm':['Reset accumulated usage to zero? Only reset after installing a new filter.','将累计使用时间清零并恢复至 100%？请在更换新滤芯后执行。'],
'filter.reset_done':['Filter usage reset','滤芯使用时间已重置'],
'import.platform':['Open IotCloud','打开 IotCloud'],
'import.title':['Import MQTT configuration','导入 MQTT 配置'],
'import.preview':['Broker: {host}:{port} · Username: {user}','Broker：{host}:{port} · 用户名：{user}'],
'import.source':['Configuration source: {origin}','配置来源：{origin}'],
'import.accept':['Receive and prefill','接收并预填'],
'import.help':['Only accept a transfer you started from a trusted platform. Review the fields and save to apply. The device never exports its saved password.','仅接收你从可信平台发起的配置。接收后请检查下方表单，点击保存才会生效。设备不会导出已保存的密码。'],
'import.http':['HTTP cannot protect against LAN interception or tampering. Use only on a trusted network.','HTTP 无法防止局域网窃听或篡改，请仅在可信网络使用。'],
'import.invalid':['Invalid import request. Start again from the platform.','导入请求无效，请从平台重新发起。'],
'import.expired':['Transfer cancelled or expired. Start again from the platform.','传递已取消或过期，请从平台重新发起。'],
'import.waiting':['Waiting for configuration…','正在等待配置…'],
'import.received':['Configuration prefilled. Review the MQTT Host, port and account below, then save.','配置已预填。请核对下方 MQTT Host、端口与账号，再点击保存。'],
'import.no_opener':['The platform window is unavailable. Keep it open and restart the transfer.','无法连接平台窗口，请保持平台页面打开并重新发起传递。'],
'fw.cancel':['Cancel download','终止下载'],'fw.cancelling':['Cancelling; services will resume shortly.','正在终止，稍后恢复正常服务。'],'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.sources_help':['Choose a source to check its latest version.','选择更新来源，检查最新版本。'],'fw.source_github':['GitHub Pages (HTTPS)','GitHub Pages（HTTPS）'],'fw.source_cn':['China mirror (HTTP)','境内镜像（HTTP）'],'fw.source_global':['Global mirror (HTTP)','境外镜像（HTTP）'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
/* Application watchdog diagnostics (A1/M1). */
'diag.g_watchdog':['Restart & watchdog','复位与看门狗'],
'diag.c_watchdog':['Watchdog','看门狗'],
'diag.watchdog_reboot':['Last restart was caused by watchdog timeout','上次因看门狗超时重启'],
'd.reset_reason':['Last reset reason','上次复位原因'],
'd.reset_reason_raw':['Raw reset reason','原始复位原因码'],
'd.watchdog_enabled':['Watchdog enabled','看门狗已启用'],
'd.watchdog_state':['Watchdog state','看门狗状态'],
'd.watchdog_fault':['Unresponsive worker','无响应的处理线程'],
's.watchdog':['Watchdog timeout','看门狗超时'],
's.lockup':['CPU lockup','CPU 锁死'],
's.software':['Software reset','软件复位'],
's.power_on':['Power-related reset','电源相关复位'],
's.unknown':['Unknown','未知'],
's.healthy':['Healthy','正常'],
's.starting':['Starting','启动中'],
's.fault':['Heartbeat timeout or watchdog error','心跳超时或看门狗错误'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
'btn.key_both':['Wi-Fi + power keys','Wi-Fi + 电源组合键'],
'btn.reset_note_a1':['Only the Wi-Fi key alone uses the fixed 5/10-second recovery gestures. Combination gestures cancel individual key actions.','仅单独长按 Wi-Fi 键 5／10 秒触发固定恢复操作；组合键会取消本轮单键动作。'],
'op.effect_next':['Cycle light effect','切换到下一灯效'],'op.effect_select':['Select light effect','设置灯效'],
'op.filter_reset':['Reset filter usage','重置滤芯寿命'],'op.light_always':['Light always on','灯环常亮'],
'op.set_brightness':['Also set brightness','同时设置亮度'],
'filter.status':['Used {used} hours · {remaining}% remaining','已使用 {used} 小时 · 剩余 {remaining}%'],
'filter.reset_hint':['Use this gesture after replacing the filter to clear its accumulated runtime.','更换滤芯后使用此手势，将累计运行时间清零。'],
'filter.reset_confirm':['Clear the filter runtime after replacing the filter?','确认已更换滤芯并清零累计使用时间？'],
'btn.key':['Key','按键'],'btn.key_fn':['Function key','功能键'],'btn.key_power':['Power key','电源键'],'btn.key_wifi':['Wi-Fi key','Wi-Fi 键'],'btn.pick_action':['Choose an action','请选择动作'],
'op.on':['On','开启'],'op.off':['Off','关闭'],'op.toggle':['Toggle','切换'],'op.all':['All sockets','全部插座'],'op.target':['Target','对象'],'op.state':['New state','目标状态'],'op.brightness':['Brightness','亮度'],'op.speed':['Fan speed','风速'],
'op.outlet':['Sockets','插座'],'op.fan':['Fan','风机'],'op.light':['Light ring','灯环'],'op.child_lock':['Child lock','童锁'],'op.indicator':['Indicator light','指示灯'],'op.display':['Screen brightness','屏幕亮度'],'op.reboot':['Restart device','重启设备'],
'clock.uptime':['Running for','已运行'],'clock.memory':['Free memory','可用内存'],
'night.hint':['Periods use the device time zone; an end earlier than the start crosses midnight.','时段按设备时区生效；结束早于开始表示跨午夜。'],'night.period':['Period {n}','时段 {n}'],'night.screen':['Limit screen brightness','限制屏幕亮度'],
'sch.new':['New schedule','新建定时'],'sch.edit':['Edit','编辑'],'sch.enable':['Enable','启用'],'sch.disable':['Disable','停用'],'sch.enabled':['Enabled','已启用'],'sch.disabled':['Disabled','已停用'],'sch.enabled_row':['Enabled','启用'],'sch.pick_action':['Choose an action for the schedule','请为定时任务选择动作'],'sch.pick_when':['Pick a date and time','请选择日期与时间'],'sch.save_btn':['Save schedule','保存任务'],
'fw.verify_ok':['Verified; the device is restarting','校验通过，设备正在重启'],'fw.failed':['Update failed: {e}','升级失败：{e}'],'fw.upload_lost':['Upload interrupted; reconnect to check the update state','连接中断，请重新连接设备查看升级状态'],'fw.upload_timeout':['Upload timed out','上传超时'],'fw.url_started':['Download started','已开始下载'],
'diag.g_ota_img':['Update image','升级镜像'],
'common.save':['Save','保存'],'common.cancel':['Cancel','取消'],'common.add':['Add','添加'],'common.delete':['Delete','删除'],'common.deleted':['Deleted','已删除'],
'common.copy':['Copy','复制'],'common.copied':['Copied','已复制'],'common.advanced':['Advanced','高级'],'common.more_info':['Details','说明'],
'common.prev':['Previous','上一页'],'common.next':['Next','下一页'],'common.yes':['Yes','是'],'common.no':['No','否'],'common.saving':['Saving…','保存中…'],'common.saved':['Saved','已保存'],'common.max':['Up to {n} items','最多 {n} 项'],
'unit.s':['s','秒'],'time.dh':['{d} d {h} h','{d} 天 {h} 小时'],'time.hm':['{h} h {m} min','{h} 小时 {m} 分'],'time.m':['{m} min','{m} 分钟'],
'toast.accepted':['Request accepted','设备已接受请求'],'toast.rebooting':['Restarting… reconnect in about 20 s','正在重启，约 20 秒后重新连接'],'toast.resetting':['Settings cleared. The device is restarting.','配置已清除，设备正在重启'],
'pref.lang_auto':['Auto','自动'],'pref.theme_system':['System','跟随系统'],'pref.theme_light':['Light','浅色'],'pref.theme_dark':['Dark','深色'],

/* kinds and navigation */
'kind.a1':['A1 Air Purifier','A1 空气净化器'],'kind.m1':['M1 Air Monitor','M1 空气质量检测器'],'kind.tc1':['TC1 Power Strip','TC1 智能插座'],
'nav.home':['Home','首页'],'nav.settings':['Settings','设置'],
'grp.network':['Network','网络'],'grp.device':['Device','设备'],'grp.auto':['Automation','自动化'],'grp.system':['System','系统'],
'nav.wifi':['Wi-Fi','Wi-Fi'],'nav.mqtt':['MQTT / Home Assistant','MQTT / Home Assistant'],'nav.general':['General','通用'],'nav.light':['Light effects','灯效'],
'nav.binding':['Linked M1','绑定 M1'],'nav.linkage':['Auto control','自动联动'],'nav.schedule':['Schedules','定时任务'],'nav.sleep':['Night mode','夜间模式'],
'nav.buttons':['Button events','按键事件'],'nav.permission':['Linkage access','联动许可'],
'nav.firmware':['Firmware','固件升级'],'nav.diagnostics':['Diagnostics','诊断'],'nav.logs':['Logs','日志'],'nav.maintenance':['Restart & reset','重启与恢复'],
/* header */
'chip.wifi':['Wi-Fi','Wi-Fi'],'chip.hotspot':['Setup hotspot','配网热点'],'chip.mqtt':['MQTT','MQTT'],'chip.firmware':['Firmware','固件'],'chip.clock':['Clock not synced','时钟未校准'],
'state.connected':['Connected','已连接'],'state.connecting':['Connecting…','连接中…'],'state.disconnected':['Disconnected','未连接'],'state.hotspot':['Setup hotspot on','配网热点已开启'],
'state.off':['Off','关闭'],'state.ready':['Ready','就绪'],'state.ok':['Normal','正常'],
'banner.lost':['Lost connection to the device. If it is updating, wait for it to restart.','与设备的连接已中断。如正在升级，请等待设备重启。'],
'banner.ota':['Firmware update in progress ({p}%). Controls are paused.','正在升级固件（{p}%），控制暂不可用。'],
'banner.rebooting':['The device is restarting.','设备正在重启。'],
'banner.cleanup':['Old Home Assistant entities could not be removed. Delete them on the previous broker.','旧 HA 实体清理失败，请在原 Broker 上手动删除。'],
'banner.save_error':['Settings could not be saved: {e}','设置保存失败：{e}'],
'banner.hotspot':['Not connected to Wi-Fi. Setup hotspot "{n}" is on.','尚未连接 Wi-Fi，配网热点「{n}」已开启。'],
/* Wi-Fi */
'wifi.lead':['The device keeps its old network until the new one is verified.','新网络验证成功前，设备保持原有连接。'],
'wifi.status':['Status','状态'],'wifi.ssid':['Network name','网络名称'],'wifi.ip':['IP address','IP 地址'],'wifi.ap':['Hotspot','热点名称'],'wifi.saved_password':['Password saved','已保存密码'],
'wifi.change':['Change network','更换网络'],'wifi.scan':['Scan','扫描'],'wifi.password':['Password','密码'],'wifi.pass_ph':['Leave empty to keep the saved password','同一网络留空则保留原密码'],
'wifi.open':['This network has no password','此网络没有密码'],'wifi.open_badge':['Open','开放'],'wifi.save':['Verify and save','验证并保存'],
'wifi.verifying':['Verifying… the device saves only after it gets an IP','验证中…取得 IP 后才会保存'],
'wifi.hint':['The new network is saved only after the device joins it and gets an IP address. If that does not happen within 30 s, it returns to the previous network.','设备连上新网络并取得 IP 后才保存；30 秒内失败则恢复之前的网络。'],
'wifi.none':['No networks found. Type the name instead.','未发现网络，可手动填写名称'],'wifi.scan_timeout':['Scan timed out','扫描超时'],
'wifi.signal.0':['Very weak','信号很弱'],'wifi.signal.1':['Weak','信号弱'],'wifi.signal.2':['Good','信号良好'],'wifi.signal.3':['Strong','信号强'],
/* MQTT */
'mqtt.lead':['Connect a broker to use Home Assistant or the TMCP cloud.','连接 Broker 后可接入 Home Assistant 或 TMCP 云平台。'],
'mqtt.status':['Status','状态'],'mqtt.broker':['Broker','Broker'],'mqtt.host':['Broker address','Broker 地址'],'mqtt.host_ph':['IP or domain — empty disables MQTT','IP 或域名；留空则停用'],
'mqtt.port':['Port','端口'],'mqtt.user':['Username','用户名'],'mqtt.password':['Password','密码'],'mqtt.pass_ph':['Leave empty to keep','留空保留原密码'],
'mqtt.mode':['Topic mode','主题模式'],'mqtt.mode_legacy':['Legacy','Legacy'],
'mqtt.mode_tmcp':['TMCP','TMCP'],'mqtt.mode_tmcp_desc':['TMCP — joins your cloud list automatically','TMCP — 上线后自动加入云端列表'],
'mqtt.mode_hint':['Changing the account tries to remove the old Home Assistant entities. If that fails, delete them on the old broker.','切换账户会尝试清理旧 HA 实体，失败时需在旧 Broker 手动清理。'],
'mqtt.clear':['Clear saved password','清除已保存的密码'],'mqtt.clear_desc':['Connect without a password','以无密码方式连接'],
'mqtt.too_long':['Username max 63 bytes, password max 256 bytes','用户名最多 63 字节，密码最多 256 字节'],
'mqtt.ha_a1':['Home Assistant creates the purifier, RGB light ring, child lock and always-on switches automatically.','Home Assistant 会自动创建净化器、RGB 灯环、童锁和常亮开关。'],
'mqtt.ha_m1':['Home Assistant creates four sensors and a screen brightness control automatically.','Home Assistant 会自动创建四项传感器和屏幕亮度控制。'],
'mqtt.ha_tc1':['Home Assistant creates six sockets, power, indicator and child lock entities automatically.','Home Assistant 会自动创建六路插座、功率、指示灯和童锁。'],
/* General */
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],'gen.default_name':['Restore default name','恢复默认名称'],
'gen.name_long':['Name is limited to 63 bytes','名称最多 63 字节'],'gen.device_id':['MAC','MAC 地址'],'gen.uptime':['Running for','已运行'],
'auth.title':['Web access','访问认证'],'auth.lead':['Protect this page with a password (username: admin).','为本页面设置密码（用户名 admin）。'],
'auth.password':['Web password','网页密码'],'auth.ph':['8–32 characters; empty turns it off','8–32 个字符；留空关闭认证'],
'auth.help':['Your browser will ask you to sign in again after it changes.','修改后浏览器会要求重新登录。'],'auth.set':['Set password','设置密码'],
'auth.on':['Protected','已启用'],'auth.off':['Not protected','未启用'],'auth.invalid':['Use 8–32 printable ASCII characters','请使用 8–32 个可打印 ASCII 字符'],
'clock.title':['Clock','时钟'],'clock.tz':['Time zone','时区'],'clock.ntp':['NTP server','NTP 服务器'],'clock.synced':['Clock','校时状态'],'clock.last':['Last sync','最近校时'],
'clock.hint':['Domain or IPv4 only, without protocol or port. If it fails the device tries Aliyun, Tencent and public NTP pools; it re-syncs hourly and retries after 60 s on failure.','只填域名或 IPv4，不含协议和端口。失败后自动尝试阿里、腾讯及公共 NTP 池；每小时校时，失败 60 秒后重试。'],
'tz.cn':['Beijing','北京'],
/* Firmware */
'fw.lead':['Updates keep Wi-Fi, MQTT and device settings.','升级会保留 Wi-Fi、MQTT 和设备设置。'],'fw.version':['Installed version','当前版本'],'fw.state':['Update status','升级状态'],'fw.error':['Last error','最近错误'],
'fw.install':['Install update','安装更新'],'fw.tab_file':['Upload file','上传文件'],'fw.tab_url':['From URL','从网址下载'],
'fw.file':['Signed {m} OTA file','{m} 签名 OTA 文件'],'fw.url':['Direct link (HTTP)','更新文件直链（HTTP）'],'fw.upload':['Upload and install','上传并升级'],'fw.download':['Download and install','下载并升级'],
'fw.unsigned':['Allow unsigned firmware','允许未签名的固件'],'fw.unsigned_desc':['Rescue only. The image is still checked for this device.','仅用于救援；仍会检查是否适用于本设备。'],
'fw.unsigned_confirm':['Unsigned firmware is not verified. Only continue if you trust the file.','未签名的固件不会校验来源，请确认文件可信后再继续。'],
'fw.uploading':['Uploading {p}%','正在上传 {p}%'],'fw.progress':['Installing {p}%','正在安装 {p}%'],'fw.preview_done':['Preview only: no file was sent.','预览模式：未实际发送文件。'],
'fw.hint_a1':['Choose an A1 OTA package from this project. The device restarts after verification.','请选择本项目的 A1 OTA 包，校验成功后自动重启。'],
'fw.hint_m1':['Choose an M1 OTA package from this project. The device restarts after verification.','请选择本项目的 M1 OTA 包，校验成功后自动重启。'],
'fw.hint_tc1':['Choose a TC1 OTA package from this project. The device restarts after verification.','请选择本项目的 TC1 OTA 包，校验成功后自动重启。'],
/* Diagnostics */
'diag.lead':['A health summary first; raw values below for troubleshooting.','先看健康摘要，下方为排障用的原始数值。'],'diag.health':['Health','健康状态'],'diag.details':['Details','详细状态'],
'diag.raw':['Raw JSON','原始 JSON'],'diag.updated':['Last read {t}','最近读取 {t}'],'diag.errors':['{n} errors','{n} 次错误'],'diag.logs':['System log','系统日志'],'logs.lead':['Device log records the last events of this run.','设备日志记录本次运行的最近事件。'],'logs.hint':['Only the most recent events from this run are kept; they are cleared on restart.','仅保留本次运行的最近事件，重启后清空。'],'logs.load_all':['Load all','读取全部'],'logs.download':['Download','下载'],'logs.empty':['No events yet','暂无事件'],'logs.overwritten':['Older entries were overwritten','较早的日志已被覆盖'],'diag.log_refresh':['Refresh','刷新'],
'diag.c_wifi':['Wi-Fi','Wi-Fi'],'diag.c_mqtt':['MQTT','MQTT'],'diag.c_ota':['Firmware update','固件升级'],'diag.c_panel':['Control panel','控制面板'],'diag.c_fan':['Fan driver','风机驱动'],
'diag.c_storage':['Settings storage','配置存储'],'diag.c_sensor':['Sensor','传感器'],'diag.c_clock':['Clock','时钟'],'diag.c_memory':['Free memory','可用内存'],
'diag.g_device':['Device','设备'],'diag.g_network':['Network','网络连接'],'diag.g_mqtt':['MQTT','MQTT'],'diag.g_ota':['Firmware update','固件升级'],'diag.g_fan':['Fan & panel','风机与面板'],
'diag.g_light':['Light ring','灯环'],'diag.g_sensor':['Sensor','传感器'],'diag.g_clock':['Clock','时钟'],'diag.g_screen':['Screen','屏幕'],'diag.g_sockets':['Sockets','插座'],
'diag.g_power':['Metering','计量'],'diag.g_time':['Clock','时钟'],'diag.g_lan':['LAN','局域网'],'diag.g_other':['Other','其他'],
/* Maintenance */
'sys.lead':['Restart the device or return it to defaults.','重启设备或恢复默认配置。'],'sys.reboot':['Restart','重启设备'],'sys.reboot_desc':['Settings are kept.','设置保留不变。'],
'sys.reboot_q':['Restart {m}?','重启 {m}？'],'sys.reboot_body':['The page reconnects when the device is back.','设备恢复后页面会自动重新连接。'],
'sys.reset':['Reset to defaults','恢复默认配置'],'sys.reset_desc':['Clears Wi-Fi, MQTT, password and all settings.','清除 Wi-Fi、MQTT、网页密码及全部设置。'],
'sys.reset_q':['Erase all settings?','清除全部配置？'],'sys.reset_body':['The device restarts with the setup hotspot. This cannot be undone.','设备将重启并开启配网热点，此操作无法撤销。'],
'sys.hint_a1':['On the device: hold the function key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything. Works even with child lock on.','设备上：功能键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置；童锁期间同样有效。'],
'sys.hint_m1':['On the device: a long press of the panel key clears Wi-Fi and the web password.','设备上：长按面板按键可清除 Wi-Fi 和网页密码。'],
'sys.hint_tc1':['On the device: hold the key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything (all sockets default to on).','设备上：按键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置（六路默认开启）。'],
/* Air quality */
'm.pm25':['PM2.5','PM2.5'],'m.formaldehyde':['Formaldehyde','甲醛'],'m.temperature':['Temperature','温度'],'m.humidity':['Humidity','湿度'],
'air.pm25.excellent':['Excellent','优'],'air.pm25.good':['Good','良'],'air.pm25.light':['Light pollution','轻度污染'],'air.pm25.moderate':['Moderate pollution','中度污染'],'air.pm25.heavy':['Heavy pollution','重度污染'],'air.pm25.severe':['Severe pollution','严重污染'],
'air.formaldehyde.pass':['Within limit','达标'],'air.formaldehyde.slight':['Slightly high','略高'],'air.formaldehyde.exceed':['Over limit','超标'],
'air.temperature.cool':['Cool','偏冷'],'air.temperature.comfort':['Comfortable','舒适'],'air.temperature.warm':['Warm','偏热'],
'air.humidity.dry':['Dry','偏干'],'air.humidity.comfort':['Comfortable','舒适'],'air.humidity.humid':['Humid','偏湿'],
/* A1 home */
'a1.fan':['Purifier','净化器'],'a1.power':['Power','电源'],'a1.running':['Running','运行中'],'a1.off':['Off','已关闭'],
'a1.sub_manual':['{p}% · manual','{p}% · 手动'],'a1.sub_auto':['{p}% · following M1','{p}% · 跟随 M1 自动调节'],'a1.sub_off':['Starts at {p}% when turned on','开启后以 {p}% 运行'],
'a1.locked_ota':['Controls paused during update or restart','升级或重启期间暂停控制'],
'a1.speed':['Fan speed','风速'],'a1.feedback_target':['Target speed','目标速度'],'a1.feedback_pwm':['Current output','当前输出'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
'a1.out_stopped':['Fan stopped','风机已停止'],'a1.out_ramp':['Output {a}% → ramping to {p}%','实际输出 {a}%，正在调整到 {p}%'],'a1.out_steady':['Output {a}%','实际输出 {a}%'],
'a1.fan_hint':['Output is the PWM level the firmware applies; the fan ramps gradually and has no speed sensor. Choosing a speed also turns the purifier on.','“实际输出”为软件 PWM 设定，风机逐步调整，设备没有转速回读。选择风速会同时开启净化器。'],
'a1.panel':['Panel','面板'],'a1.panel_ok':['Panel connected','面板通信正常'],'a1.panel_bad':['Panel not responding','面板无响应'],
'a1.child_lock':['Child lock','童锁'],'a1.child_lock_desc':['Locks power and speed keys on the device','锁定机身电源和调速按键'],'a1.lock_on':['Child lock on','童锁已开启'],'a1.lock_off':['Child lock off','童锁已关闭'],
'a1.button_hint':['Hold the Wi-Fi key for 2.5 s to open the setup hotspot; this works with child lock on.','长按 Wi-Fi 键 2.5 秒可开启配网热点，童锁期间仍可使用。'],
'a1.auto':['Auto control','自动联动'],'a1.auto_lead':['Adjusts the fan from linked M1 readings','根据绑定的 M1 读数调节风速'],
'a1.auto_empty':['No M1 is linked yet. Link one to run the purifier automatically.','尚未绑定 M1，绑定后可按空气质量自动运行。'],'a1.auto_link':['Link an M1','绑定 M1'],
'a1.auto_enable':['Turn on auto control','开启自动联动'],'a1.auto_peers':['{n} M1 · {f} reporting','{n} 台 M1 · {f} 台有数据'],
'a1.auto_failed':['No fresh M1 data. The fan keeps its current state.','暂无有效的 M1 数据，风机保持当前状态。'],'a1.auto_speed':['Auto speed {p}%','自动风速 {p}%'],
's.link_disabled':['Off','未开启'],'s.link_active':['Active','运行中'],'s.link_sensor_failed':['No data','无数据'],
'a1.ring':['Light ring','灯环'],'a1.ring_on':['Light ring','启用灯环'],'a1.always_on':['Always on','常亮'],'a1.always_on_desc':['Otherwise it lights for 2 s after each change','否则仅在操作后亮 2 秒'],
'a1.color':['Colour','颜色'],'a1.brightness':['Brightness','亮度'],'a1.effect_note':['Effect: {e}.','当前灯效：{e}。'],'a1.effect_change':['Change','更改'],
'a1.effect.0':['Speed bar','风速条'],'a1.effect.1':['Solid colour','固定颜色'],'a1.effect.2':['Breathing','呼吸'],'a1.effect.3':['Rainbow','彩虹'],'a1.effect.4':['Data segments','分段数据'],
'a1.effect_desc.0':['Ring length follows fan speed','灯环长度跟随风速'],'a1.effect_desc.1':['Whole ring in one colour','整圈单色'],'a1.effect_desc.2':['Slow fade in and out','缓慢明暗变化'],
'a1.effect_desc.3':['Cycling colours','循环彩色'],'a1.effect_desc.4':['Each segment shows a reading','每段显示一项读数'],
/* A1 light effects page */
'fx.lead':['How the ring looks. Colour and brightness are set on the home page.','设置灯环的显示方式；颜色和亮度在首页调整。'],'fx.effect':['Effect','灯效'],
'fx.follow':['Brightness follows fan speed','亮度随风速变化'],'fx.follow_desc':['Dimmer at low speed','低风速时更暗'],'fx.count':['Segments','分段数量'],'fx.segment':['Segment {n}','第 {n} 段'],
'fx.source':['Shows','显示内容'],'fx.display':['Style','显示方式'],'fx.range':['Range','数值范围'],'fx.comfort':['comfortable','适宜区间'],
'fx.low':['Low','偏低'],'fx.ok':['Comfortable','适宜'],'fx.high':['High','偏高'],
'fx.src.0':['Temperature','温度'],'fx.src.1':['Humidity','湿度'],'fx.src.2':['PM2.5','PM2.5'],'fx.src.3':['Formaldehyde','甲醛'],'fx.src.4':['Overall air quality','综合空气质量'],'fx.src.5':['Fan speed','风速'],
'fx.disp.0':['Fixed colour, brightness by value','固定颜色 + 数值亮度'],'fx.disp.1':['Comfort colour, fixed brightness','适宜程度颜色 + 固定亮度'],'fx.disp.2':['Comfort colour, brightness by value','适宜程度颜色 + 数值亮度'],
'fx.quality_hint':['Baselines used to compute "overall air quality".','用于计算“综合空气质量”的基准值。'],'fx.quality_pm':['PM2.5 baseline','PM2.5 基准'],'fx.quality_hcho':['Formaldehyde baseline','甲醛基准'],
/* A1 binding */
'bind.lead':['Link M1 monitors so the purifier can react to their readings.','绑定 M1 后，净化器可根据其读数自动运行。'],'bind.sensors':['Linked M1 monitors','已绑定的 M1'],
'bind.empty':['No M1 linked','尚未绑定 M1'],'bind.add':['Add an M1','添加 M1'],'bind.mac':['M1 MAC address','M1 的 MAC 地址'],'bind.ip':['LAN IP (optional)','局域网 IP（可选）'],'bind.ip_ph':['Found via MQTT if empty','留空则通过 MQTT 查找'],
'bind.ip_auto':['IP found via MQTT','IP 通过 MQTT 获取'],'bind.add_btn':['Add M1','添加'],'bind.added':['Added','已添加'],'bind.bad_mac':['Enter a 12-digit MAC address','请输入 12 位 MAC 地址'],'bind.dup':['Already in the list','已在列表中'],
'bind.pending':['Handshaking','握手中'],'bind.fresh':['Receiving data','数据正常'],'bind.stale':['No data','无数据'],'bind.probe':['Probe LAN','探测局域网'],'bind.probe_sent':['Probe sent','已发送探测'],
'bind.remove_q':['Remove this device?','移除此设备？'],'bind.remove_body':['{m} will no longer be linked.','{m} 将解除关联。'],
'bind.ids_title':['Next: allow this A1 on the M1','下一步：在 M1 上允许本机'],'bind.ids_body':['Copy the pairing ID to the M1 page → Settings → Linkage access.','复制以下配对 ID，粘贴到 M1 页面 → 设置 → 联动许可。'],
'bind.force':['Always use MQTT','强制使用 MQTT'],'bind.force_desc':['Skip the LAN connection','不使用局域网直连'],'bind.recovery':['Retry LAN automatically','自动检查局域网恢复'],'bind.recovery_desc':['Switch back to LAN when it recovers','恢复后切回局域网'],
'bind.timeout':['LAN timeout','局域网超时'],'bind.recovery_s':['Retry interval','恢复检查间隔'],
'bind.hint':['Both devices must use the same MQTT broker. The A1 prefers the LAN and falls back to MQTT.','两台设备需使用同一个 MQTT Broker。A1 优先局域网直连，失败时回退 MQTT。'],
'bind.group':['Purifier group','净化器组'],'bind.group_lead':['Run several A1 units as one. Enter the same name and member list on every A1.','多台 A1 作为一组运行；每台 A1 需填写相同的组名称和成员列表。'],
'bind.group_name':['Group name','组名称'],'bind.group_ph':['Empty = standalone','留空为独立设备'],'bind.member_add':['Add member','添加成员'],
/* A1 linkage */
'link.lead':['Rules that turn the purifier on, off and set its speed from M1 readings.','根据 M1 读数开关净化器并调节风速的规则。'],
'link.enable':['Automatic control','自动联动'],'link.enable_desc':['Manual control still works at any time','随时仍可手动控制'],
'link.no_peer':['Link an M1 first.','请先绑定 M1。'],'link.speed':['Fan speed','风速调节'],'link.metric':['Based on','依据指标'],'link.both':['Both','两者'],
'link.mode.0':['Fixed','固定风速'],'link.mode.1':['Proportional','线性调节'],'link.mode.2':['Target (PID)','目标值（PID）'],
'link.mode_desc.0':['Always the same speed','始终同一风速'],'link.mode_desc.1':['Faster as air gets worse','空气越差风速越高'],'link.mode_desc.2':['Hold a target level','维持在目标值'],
'link.fixed':['Speed','风速'],'link.lin_pm_a':['PM2.5 at','PM2.5 为'],'link.lin_hcho_a':['Formaldehyde at','甲醛为'],'link.lin_b':['→','时风速'],'link.lin_c':[', at',' ；为'],
'link.pid_pm':['Keep PM2.5 at','PM2.5 保持在'],'link.pid_hcho':['Keep formaldehyde at','甲醛保持在'],'link.range':['Speed between','风速范围'],'link.pid_tune':['PID tuning','PID 参数'],
'link.onoff':['Start and stop','自动启停'],'link.onoff_lead':['Keep the stop level below the start level to avoid rapid switching.','关闭阈值应低于启动阈值，避免频繁开关。'],
'link.on_rule':['Start automatically','自动开启'],'link.on_desc':['Turn on when air gets worse','空气变差时开启'],'link.off_rule':['Stop automatically','自动关闭'],'link.off_desc':['Turn off when air is clean','空气变好时关闭'],
'link.watch':['Watch','监测'],'link.any':['Any','任一满足'],'link.all':['All','全部满足'],'link.above':['above','高于'],'link.below':['below','低于'],
'link.hyst_warn':['The stop level should be lower than the start level.','关闭阈值应低于启动阈值。'],
'link.statistic':['With several M1','多台 M1 时取'],'link.debounce':['Condition must last','条件持续'],'link.min_switch':['Minimum time between on/off','最短开关间隔'],
'link.stat.0':['Average','平均值'],'link.stat.1':['Highest','最高值'],'link.stat.2':['Lowest','最低值'],'link.stat.3':['Median (more than 3)','中位数（多于 3 台）'],'link.stat.4':['Average without extremes','去掉最高最低后平均'],'link.stat.5':['First available in list','按列表顺序故障切换'],
/* Schedules / night */
'sch.lead_a1':['Turn the purifier on or off at set times.','在设定时间开启或关闭净化器。'],'sch.lead_tc1':['Switch sockets at set times (Beijing time).','在设定时间开关插座（北京时间）。'],
'sch.list':['Schedules','定时任务'],'sch.empty':['No schedules yet','暂无定时任务'],'sch.used':['{a} of {b} used','已使用 {a} / {b}'],'sch.off':['off','已停用'],'sch.hint':['Weekly events run in the device time zone and are not replayed after a missed window; a restart runs last.','每周任务按设备时区执行，错过的时段不补执行；重启类操作最后执行。'],'sch.add':['New schedule','新建定时'],'sch.time':['Time','时间'],'sch.date':['Date','日期'],
'sch.repeat':['Repeat','重复'],'sch.action':['Action','动作'],'sch.target':['Target','对象'],'sch.turn_on':['Turn on','开启'],'sch.turn_off':['Turn off','关闭'],'sch.weekly':['Weekly','每周'],
'sch.add_btn':['Add schedule','添加'],'sch.added':['Saved','已保存'],'sch.reset':['Clear form','清空表单'],'sch.when':['Date and time (device time zone)','执行日期与时间（设备时区）'],'sch.pick_day':['Pick at least one day','请至少选择一天'],'sch.future':['Pick a time in the future','请选择未来的时间'],
'sch.fan_on':['Turn on at {p}%','开启，风速 {p}%'],'sch.fan_off':['Turn off','关闭'],'sch.no_clock':['The clock is not synced yet; schedules will not run until it is.','时钟尚未校准，校准前定时任务不会执行。'],
'day.short.0':['Mon','一'],'day.short.1':['Tue','二'],'day.short.2':['Wed','三'],'day.short.3':['Thu','四'],'day.short.4':['Fri','五'],'day.short.5':['Sat','六'],'day.short.6':['Sun','日'],
'day.every':['Every day','每天'],'day.weekdays':['Weekdays','工作日'],'day.weekends':['Weekends','周末'],'day.once':['Once','仅一次'],
'night.lead':['Quieter fan and dimmer light during set hours.','在设定时段降低风速与灯光。'],'night.list':['Night periods','夜间时段'],'night.empty':['No night periods','暂无夜间时段'],
'night.add':['New night period','新建夜间时段'],'night.start':['From','开始'],'night.end':['Until','结束'],'night.next_day':['(next day)','（次日）'],
'night.fan':['Limit fan speed','限制风速'],'night.fan_desc':['Cap the speed during this period','时段内限制最高风速'],'night.fan_max':['Max speed','最高风速'],
'night.light':['Dim the light ring','调暗灯环'],'night.light_desc':['Cap brightness, 0 turns it off','限制亮度，0 为关闭'],'night.light_max':['Max brightness','亮度上限'],
'night.block_t':['Don’t auto-start','禁止自动开启'],'night.block_desc':['Auto control cannot turn the purifier on','自动联动不会开启净化器'],
'night.fan_cap':['Fan ≤ {p}%','风速 ≤ {p}%'],'night.light_cap':['Light ≤ {p}%','灯光 ≤ {p}%'],'night.light_off':['Light off','灯光关闭'],'night.block':['No auto-start','禁止自动开启'],'night.add_btn':['Add period','添加'],
/* M1 */
'm1.overall':['Air quality','空气质量'],'m1.v_excellent':['Excellent','优'],'m1.v_good':['Good','良好'],'m1.v_fair':['Fair','一般'],'m1.v_poor':['Poor','较差'],
'm1.all_ok':['All readings are in range','各项读数均在适宜范围'],'m1.no_data':['No data','暂无数据'],'m1.stale':['Data is out of date','数据已过期'],
'm1.stale_hint':['The sensor has not reported recently. Check Diagnostics.','传感器近期未上报，请查看诊断。'],'m1.updated':['Updated {n} s ago','{n} 秒前更新'],
'm1.screen':['Screen brightness','屏幕亮度'],'m1.screen_desc':['Shows the last level sent; the screen does not report it back','显示最近发送的档位，屏幕不回报实际亮度'],
'm1.linked':['Linked purifiers','联动的净化器'],'m1.linked_desc':['A1 units allowed to read this monitor','允许读取本机数据的 A1'],'m1.linked_empty':['No A1 is allowed yet','尚未允许任何 A1'],
'm1.allow_btn':['Allow an A1','添加许可'],'m1.session_ok':['Connected','已连接'],'m1.session_wait':['Waiting for A1','等待 A1 连接'],
'm1.perm_lead':['This M1 only answers A1 units listed here. Rules and fan control are set on the A1.','本机只响应此处允许的 A1；联动规则和风速控制在 A1 上设置。'],
'm1.allowed':['Allowed A1 units','已允许的 A1'],'m1.allowed_empty':['None yet','暂无'],'m1.allow_add':['Allow an A1','添加许可'],'m1.pair_id':['Pairing ID from the A1','A1 生成的配对 ID'],
'm1.pair_help':['On the A1: Settings → Linked M1 → add this M1, then copy the ID shown.','在 A1：设置 → 绑定 M1 → 添加本机后复制显示的配对 ID。'],
'm1.pair_bad':['Format: a1mac:m1mac (12 hex digits each)','格式：A1 的 MAC:M1 的 MAC（各 12 位十六进制）'],'m1.pair_other':['This ID is for a different M1','该配对 ID 属于另一台 M1'],
'm1.perm_hint':['Up to 8 entries. Both devices must use the same MQTT broker.','最多 8 个。两台设备需使用同一个 MQTT Broker。'],
/* TC1 */
'control.pending':['Waiting for device confirmation','等待设备确认中'],'control.unconfirmed':['Operation not confirmed; showing the latest device state','操作尚未确认，已恢复最近设备状态'],'control.syncing':['Confirming…','确认中…'],
 'tc1.sockets':['Sockets','插座'],'tc1.on_count':['{n} of 6 on','6 路中 {n} 路通电'],'tc1.all_on':['All on','全部开启'],'tc1.all_off':['All off','全部关闭'],
'tc1.on':['On','通电'],'tc1.off':['Off','断开'],'tc1.rename':['Rename','重命名'],'tc1.socket_n':['Socket {n}','插座 {n}'],
'tc1.output_hint':['Shows the output the strip has set; check the load to confirm power.','显示设备的输出设定，实际供电请以负载为准。'],
'tc1.power':['Power','功率'],'tc1.recent':['Recent samples','最近采样'],'tc1.energy':['Energy since start','累计电量'],'tc1.peak':['Recent peak','近期峰值'],
'tc1.lock_desc':['Disables the key on the strip','锁定机身按键'],'tc1.led':['Indicator light','指示灯'],'tc1.led_desc':['Status light on the strip','机身状态指示灯'],
'tc1.names':['Socket names','插座名称'],'tc1.names_desc':['Shown here and in Home Assistant','在本页和 Home Assistant 中显示'],
'tc1.metering':['Reporting & metering','上报与计量'],'tc1.report':['MQTT report interval','MQTT 上报间隔'],'tc1.report_help':['How often power is published to MQTT (1–3600 s).','功率发布到 MQTT 的频率（1–3600 秒）。'],
'tc1.calibration':['Calibration','计量校准'],'tc1.coef':['Power coefficient','功率系数'],'tc1.coef_warn':['Only change this with a known calibration value. An idle reading cannot verify accuracy.','仅在已知校准值时修改；空载读数无法验证计量精度。'],
'btn.lead':['See each gesture and its action. Expand a range to edit individual gestures.','按手势查看实际动作；相同动作合并显示，展开后可逐条编辑。'],'btn.current':['What each gesture does','按下后会发生什么'],
'btn.click_count':['Number of presses','连按次数'],'btn.hold_count':['Hold duration (seconds)','按住时长（秒）'],
'btn.single':['Single press','单击'],'btn.click_full':['Press {n} times','连按 {n} 次'],'btn.hold_full':['Hold {n} seconds','长按 {n} 秒'],
'btn.click_range':['Press {a}–{b} times','连按 {a}～{b} 次'],'btn.hold_range':['Hold {a}–{b} seconds','长按 {a}～{b} 秒'],
'btn.expand':['Expand to edit','展开编辑'],'btn.recovery':['Recovery gestures · fixed','恢复操作 · 固定功能'],'btn.reset_wifi':['Reset network settings','重置网络配置'],
'btn.n':['#','序号'],'btn.click':['Click','连击'],'btn.hold':['Hold','长按'],'btn.click_n':['×{n}','{n} 次'],'btn.hold_n':['{n} s','{n} 秒'],'btn.empty':['No custom events','暂无自定义事件'],
'btn.edit':['Set an event','设置事件'],'btn.kind':['Gesture','手势'],'btn.count':['Clicks / seconds','次数 / 秒数'],'btn.action':['Action','动作'],
'btn.reset_note':['Holding 5–10 s or over 10 s always triggers the recovery reset, regardless of mapping.','按住 5–10 秒或 10 秒以上固定触发恢复操作，不受映射影响。'],
'op.none':['Not set','未配置'],'op.g_switch':['Switch','开关'],'op.g_system':['System','系统'],'op.0':['All sockets','全部插座'],'op.7':['Indicator light','指示灯'],'op.8':['Restart device','重启设备'],
'op.9':['Open setup hotspot','开启配网热点'],'op.10':['Factory reset','恢复出厂设置'],'op.11':['Child lock','童锁'],'op.12':['Restart web service','重启网页服务'],'op.13':['Soft restart','软件重启'],
/* status values (from the shared diagnostics vocabulary) */
'sch.state.waiting':['Waiting','等待执行'],'sch.state.executed':['Executed','已执行'],'sch.state.missed':['Missed','已错过'],'sch.state.busy':['Skipped (busy)','设备忙，已跳过'],'sch.state.migration_disabled':['Disabled (old config)','旧配置不支持，已停用'],'s.ready':['Ready','就绪'],'s.disconnected':['Disconnected','未连接'],'s.connecting':['Connecting','连接中'],'s.synced':['Synced','校时成功'],'s.syncing':['Syncing','正在校时'],
's.waiting_network':['Waiting for network','等待网络'],'s.failed':['Failed','校时失败'],'s.screen_queue_failed':['Synced; screen update failed','网络校时成功，屏幕入队失败'],
's.idle':['Idle','空闲'],'s.pending':['Pending','等待验证'],'s.success':['Verified and saved','验证成功并已保存'],'s.storage_failure':['Save failed, rolled back','保存失败，已回滚'],
's.timeout_rollback':['Timed out, rolled back','连接超时，已回滚'],'s.legacy':['legacy','legacy'],'s.account':['TMCP','TMCP'],'s.downloading':['Downloading','下载中'],
/* diagnostic labels */
'd.wifi_trial_status':['Wi-Fi trial','Wi-Fi 试连状态'],'d.wifi_trial_active':['Verifying Wi-Fi','正在验证 Wi-Fi'],'d.uptime_seconds':['Uptime','运行时间'],'d.free_memory':['Free memory','可用内存'],
'd.child_lock':['Child lock','童锁'],'d.led_enabled':['Light enabled','启用指示灯'],'d.socket_names':['Socket names','插座名称'],'d.socket_states':['Socket outputs','插座输出'],
'd.time_synced':['Clock synced','时钟已校准'],'d.utc_time':['Device time','设备时间'],'d.fan_on':['Fan on','风机开启'],'d.speed':['Saved speed','风速'],'d.percentage':['Target speed','目标风速'],
'd.applied_speed':['Output speed','实际输出'],'d.requested_fan_on':['Requested on','请求开启'],'d.requested_speed':['Requested speed','请求风速'],'d.fan_ready':['Fan driver ready','风机驱动就绪'],
'd.panel_ready':['Panel OK','面板通信正常'],'d.panel_errors':['Panel errors','面板通信错误数'],'d.hardware_errors':['Hardware errors','硬件错误数'],'d.panel_raw':['Panel raw','面板原始数据'],
'd.version':['Firmware','固件版本'],'d.device_id':['Device ID','设备 ID'],'d.name':['Name','设备名称'],'d.ssid':['Network','网络名称'],'d.ip':['IP address','IP 地址'],
'd.wifi_connected':['Wi-Fi connected','Wi-Fi 已连接'],'d.ap_active':['Hotspot on','配网热点已开启'],'d.ap_name':['Hotspot name','热点名称'],'d.mqtt_connected':['MQTT connected','MQTT 已连接'],
'd.mqtt_status':['MQTT status','MQTT 状态'],'d.mqtt_host':['Broker','Broker 地址'],'d.mqtt_port':['Port','MQTT 端口'],'d.mqtt_user':['Username','MQTT 用户名'],'d.mqtt_topic_mode':['Topic mode','主题模式'],
'd.mqtt_errors':['MQTT errors','MQTT 错误次数'],'d.mqtt_last_error':['Last MQTT error','最近 MQTT 错误'],'d.mqtt_cleanup_warning':['HA cleanup failed','旧 HA 实体清理异常'],
'd.sensor_valid':['Sensor data valid','传感器数据有效'],'d.sensor_received':['Sensor data received','已收到传感器数据'],'d.age_ms':['Data age','数据距今'],
'd.temperature':['Temperature (℃)','温度（℃）'],'d.humidity':['Humidity (%)','湿度（%）'],'d.formaldehyde':['Formaldehyde (mg/m³)','甲醛（mg/m³）'],'d.pm25':['PM2.5 (µg/m³)','PM2.5（µg/m³）'],
'd.uart_ready':['UART ready','串口已就绪'],'d.rx_frames':['Frames received','接收帧数'],'d.unknown_frames':['Unknown frames','未知帧数'],'d.uart_errors':['UART errors','串口错误数'],
'd.discarded_bytes':['Discarded bytes','丢弃字节数'],'d.last_frame':['Last frame (hex)','最近串口帧（HEX）'],'d.brightness_requested':['Requested brightness','请求亮度档位'],
'd.ota_active':['Updating','正在升级'],'d.ota_state':['Update state','升级状态'],'d.ota_error':['Update error','升级错误'],'d.ota_progress':['Update progress (%)','升级进度（%）'],
'd.scan_busy':['Scanning Wi-Fi','正在扫描 Wi-Fi'],'d.web_password_set':['Web password set','已设置网页密码'],'d.mqtt_password_set':['MQTT password set','已设置 MQTT 密码'],'d.wifi_password_set':['Wi-Fi password set','已保存 Wi-Fi 密码'],
'd.ntp_host':['Preferred NTP','首选 NTP 服务器'],'d.ntp_server':['Last NTP tried','最近尝试的校时源'],'d.ntp_status':['Sync status','校时状态'],'d.ntp_synced':['Synced this boot','本次启动已完成校时'],
'd.ntp_screen_queued':['Screen time queued','屏幕时间已入队'],'d.ntp_last_success':['Last sync','最近成功校时'],'d.ntp_next_seconds':['Next sync in (s)','下次校时（秒后）'],'d.timezone_minutes':['UTC offset (min)','时区（UTC 分钟差）'],
'd.led_visible':['Light showing','灯环显示中'],'d.led_always_on':['Always on','常亮'],'d.brightness':['Brightness','亮度'],'d.red':['Red','红'],'d.green':['Green','绿'],'d.blue':['Blue','蓝'],
'd.config_dirty':['Saving settings','设置保存中'],'d.save_error':['Save error','保存错误'],'d.reboot_pending':['Restart pending','等待重启'],
'd.report_seconds':['Report interval (s)','上报间隔（秒）'],'d.powerCoefficientX100':['Power coefficient (×100)','功率系数（×100）'],'d.mask':['Subnet mask','子网掩码'],'d.gateway':['Gateway','网关']
};
const KEY='phicomm.language';
let preference='auto';try{preference=localStorage.getItem(KEY)||'auto';}catch{}
const detect=()=>{for(const l of navigator.languages||[navigator.language||'en']){const s=l.toLowerCase();if(s.startsWith('zh'))return 'zh-CN';if(s.startsWith('en'))return 'en';}return 'en';};
const listeners=[];
const I18N={
 lang:preference==='auto'?detect():preference,preference,
 has:k=>Object.hasOwn(D,k),
 t(k,vars){const e=D[k];let s=e?e[I18N.lang==='zh-CN'?1:0]:k;if(!e)console.warn('i18n missing',k);
  if(vars)s=s.replace(/\\{(\\w+)\\}/g,(_,n)=>vars[n]??'');return s;},
 apply(root=document){
  document.documentElement.lang=I18N.lang;
  root.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18n)el.textContent=I18N.t(el.dataset.i18n);});
  root.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=I18N.t(el.dataset.i18nPh));
  root.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',I18N.t(el.dataset.i18nAria)));
 },
 set(p){I18N.preference=p;try{localStorage.setItem(KEY,p);}catch{}I18N.lang=p==='auto'?detect():p;I18N.apply();listeners.forEach(f=>f());},
 onChange:f=>listeners.push(f),
 keys:()=>Object.keys(D),
 extend:o=>Object.assign(D,o)
};
document.documentElement.lang=I18N.lang;
window.addEventListener('languagechange',()=>{if(I18N.preference==='auto')I18N.set('auto');});
window.I18N=I18N;
})();
<\/script>
<script>// Device service.js retains its HTTP-shaped API; transport is supplied by host.
(()=>{
 const pending=new Map();
 let activeRead=null;
 function send(id,entry){entry.sent=true;if(entry.read)activeRead=id;parent.postMessage({type:'device-command',id,request:entry.request},parent.location.origin);}
 function nextRead(){
  if(activeRead)return;
  const waiting=[...pending].filter(([,entry])=>entry.read&&!entry.sent);
  const next=waiting.find(([,entry])=>entry.request.action==='status.get')||waiting[0];
  if(next)send(...next);
 }
 function remove(id){const entry=pending.get(id);if(!entry)return;pending.delete(id);clearTimeout(entry.timer);entry.cleanup();if(activeRead===id)activeRead=null;}

 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  remove(event.data.id);
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));nextRead();
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{remove(id);clearTimeout(timer);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));nextRead();};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   const request=JSON.parse(options.body),entry={resolve,timer,cleanup,request,read:request.action.endsWith('.get'),sent:false};
   pending.set(id,entry);
   if(entry.read)nextRead();else send(id,entry);
  });
 };
})();
window.addEventListener('storage',event=>{
 if(event.key!=='phicomm.appearance')return;
 if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
 else document.documentElement.dataset.theme=event.newValue;
});
<\/script><script>async function command(action,params={}){
 const request={action,params};
 if(!action.endsWith('.get'))request.request_id=globalThis.crypto?.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
 const response=await fetch('/api/v1/command',{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify(request),cache:'no-store'});
 const reply=await response.json();
 if(!response.ok||!['ok','accepted'].includes(reply.code)){const error=Error(reply.message||reply.code||('HTTP '+response.status));error.code=reply.code;throw error;}
 return reply.data||{};
 }finally{clearTimeout(timer);}
}
async function api(path,data){
 if(path==='/status')return command('status.get');
 if(path==='/sensors/average')return command('sensors.average.get');
 if(path==='/power')return command('power.get');
 if(path==='/wifi/scan')return command(data===undefined?'wifi.scan.get':'wifi.scan');
 const domains={'/binding/config':'binding','/binding/status':'binding.status','/binding/probe':'binding.probe','/linkage/config':'linkage','/light/advanced':'light_effect','/sleep/config':'night','/time/config':'time'};
 if(domains[path])return command(domains[path]+(path==='/binding/probe'?'':data===undefined?'.get':'.set'),data||{});
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/outlet':'outlet.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
 if(direct[path]){if(['/light','/light/config'].includes(path)&&data.brightness!==undefined)data={...data,brightness:Math.round(data.brightness*100/255)};return command(direct[path],data);}
 if(path==='/display/brightness')return command('display.set',{brightness:data.level*25});
 if(path==='/socket'){for(let index=0;index<data.states.length;index++)await command('outlet.set',{index,on:!!data.states[index]});return {};}
 const sections={'/wifi/config':'wifi','/mqtt/config':'mqtt','/deviceName':'device','/auth/password':'auth','/socketNames':'socket','/mqtt/report/freq':'report','/power/coefficient':'meter','/ntp/config':'ntp'};
 if(sections[path]){
  let values={...data};
  if(path==='/power/coefficient')values={coefficient_x100:Number(data)};
  if(path==='/mqtt/config'){delete values.topic_mode;delete values.clear_password;if(data.clear_password)values.password='';else if(!values.password)delete values.password;}
  if(path==='/wifi/config'){delete values.open_network;if(data.open_network)values.password='';else if(!values.password)delete values.password;}
  return command('config.set',{section:sections[path],values});
 }
 throw Error('不支持的操作');
}
<\/script>
<script>/* Public provisioning contract. Passwords and session tokens are never encoded into a URL. */
(()=>{
'use strict';
const VERSION=1,TTL=120000;
const bytes=s=>new TextEncoder().encode(s).length;
function localHost(host){
 const h=host.toLowerCase().replace(/^\\[|\\]$/g,'');
 if(h==='localhost'||h==='::1')return true;
 if(h.includes(':'))return /^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(h);
 if(!/^\\d+\\.\\d+\\.\\d+\\.\\d+$/.test(h))return false;
 const p=h.split('.').map(Number);if(p.some(n=>n>255))return false;
 return p[0]===10||p[0]===127||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===169&&p[1]===254);
}
function deviceURL(raw){
 if(typeof raw!=='string'||!raw.trim()||raw.length>256)throw Error('device');
 const value=raw.trim(),url=new URL(value.includes('://')?value:'http://'+value);
 if(!['http:','https:'].includes(url.protocol)||!localHost(url.hostname)||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw Error('device');
 return url;
}
function platformOrigin(raw){
 const u=new URL(raw);
 if(raw!==u.origin||!(u.protocol==='https:'||(u.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(u.hostname))))throw Error('origin');
 return u.origin;
}
function nonce(){const a=new Uint8Array(32);crypto.getRandomValues(a);return Array.from(a,n=>n.toString(16).padStart(2,'0')).join('');}
function readTicket(hash,now=Date.now()){
 if(!hash.startsWith('#iotcloud-import='))return null;
 if(hash.length>2048)throw Error('ticket');
 const p=new URLSearchParams(hash.slice(1));
 if([...p.keys()].sort().join(',')!=='expires,host,iotcloud-import,origin,port,user')throw Error('ticket');
 const id=p.get('iotcloud-import'),expires=Number(p.get('expires')),origin=platformOrigin(p.get('origin'));
 if(!/^[a-f0-9]{64}$/.test(id)||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('ticket');
 const visible=config({v:VERSION,host:p.get('host'),port:Number(p.get('port')),user:p.get('user'),password:'',protocol:'tmcp',expires},now);
 return {id,expires,origin,host:visible.host,port:visible.port,user:visible.user};
}
function config(value,now=Date.now()){
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).sort().join(',')!=='expires,host,password,port,protocol,user,v')throw Error('config');
 const {v,host,port,user,password,protocol,expires}=value;
 if(v!==VERSION||protocol!=='tmcp'||typeof host!=='string'||!host||bytes(host)>127||!/^([a-zA-Z0-9.-]+|\\[[a-fA-F0-9:]+\\])$/.test(host)||host.startsWith('.')||host.endsWith('.')||typeof user!=='string'||bytes(user)>63||/[\\x00-\\x1f\\x7f]/.test(user)||typeof password!=='string'||bytes(password)>256||/[\\x00-\\x1f\\x7f]/.test(password)||!Number.isInteger(port)||port<1||port>65535||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('config');
 return {v,host,port,user,password,protocol,expires};
}
function packet(e,{source,origin,id,expires},type){
 const d=e.data;return Date.now()<expires&&e.source===source&&e.origin===origin&&!!d&&typeof d==='object'&&d.type===type&&d.id===id;
}
globalThis.IotProvision=Object.freeze({VERSION,TTL,deviceURL,platformOrigin,nonce,readTicket,config,packet});
})();
<\/script>
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
// Remove the non-secret handshake fragment before any async device requests.
let importTicket=null,importInvalid=false;
if(location.hash.startsWith('#iotcloud-import=')){
 try{importTicket=IotProvision.readTicket(location.hash);}catch{importInvalid=true;}
 history.replaceState(null,'',location.pathname+location.search+'#settings/mqtt');
}

function h(tag,props,...kids){
 const el=document.createElement(tag);
 for(const [k,v] of Object.entries(props||{})){
  if(v==null||v===false)continue;
  if(k==='class')el.className=v;
  else if(k==='i18n'){el.dataset.i18n=v;el.textContent=t(v);}
  else if(k.startsWith('on')&&typeof v==='function')el.addEventListener(k.slice(2),v);
  else if(k in el&&!k.includes('-'))el[k]=v;
  else el.setAttribute(k,v===true?'':v);
 }
 for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;el.append(c.nodeType?c:document.createTextNode(String(c)));}
 return el;
}
const ICONS={
 power:'<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>',
 fan:'<path d="M10.8 9.1C9 6.4 9.6 3 12.6 2.2c3-.8 4.5 2.4 2.6 6.4M14.9 10.8c2.7-1.8 6.1-1.2 6.9 1.8.8 3-2.4 4.5-6.4 2.6M13.2 14.9c1.8 2.7 1.2 6.1-1.8 6.9-3 .8-4.5-2.4-2.6-6.4M9.1 13.2C6.4 15 3 14.4 2.2 11.4c-.8-3 2.4-4.5 6.4-2.6"/><circle cx="12" cy="12" r="2"/>',
 plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
 air:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 wifi:'<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
 edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 external:'<path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 auto:'<path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M3 21v-5h5"/>'
};
function icon(name,cls='i'){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('class',cls);s.setAttribute('aria-hidden','true');s.innerHTML=ICONS[name]||'';return s;}

/* ---------- Feedback ---------- */
function toast(text,bad=false){
 let box=$('toasts');if(!box){box=h('div',{id:'toasts',class:'toasts',role:'status','aria-live':'polite'});document.body.append(box);}
 const el=h('div',{class:'toast'+(bad?' bad':'')},text);box.append(el);setTimeout(()=>el.remove(),bad?6000:2600);
}
async function run(button,fn,okKey='toast.accepted'){
 if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
 try{const r=await fn();if(okKey)toast(t(okKey));return r;}
 catch(e){toast(e.message||String(e),true);}
 finally{if(button){button.disabled=false;button.removeAttribute('aria-busy');}}
}
function onSubmit(form,fn,okKey){form.addEventListener('submit',e=>{e.preventDefault();run(form.querySelector('button[type=submit],button:not([type])'),fn,okKey);});}
function confirmDialog({title,body,ok,danger}){
 if(typeof document.body.append!=='function'||!document.createElement('dialog').showModal)return Promise.resolve(window.confirm(title+'\\n'+body));
 return new Promise(resolve=>{
  const d=h('dialog',{},h('h2',{},title),h('p',{},body),
   h('div',{class:'form-actions'},
    h('button',{class:'btn '+(danger?'danger':'primary'),type:'button',onclick:()=>{d.close();resolve(true);}},ok),
    h('button',{class:'btn ghost',type:'button',onclick:()=>d.close()},t('common.cancel'))));
  d.addEventListener('close',()=>{d.remove();resolve(false);});
  document.body.append(d);d.showModal();
 });
}

/* ---------- Controls ---------- */
function switchRow(id,titleKey,descKey){
 return h('label',{class:'switch'},h('span',{class:'text'},h('b',{i18n:titleKey}),descKey&&h('span',{i18n:descKey})),h('input',{type:'checkbox',role:'switch',id}));
}
function seg(options,onPick,{full=false,aria}={}){
 const label=k=>typeof k==='function'?k():I18N.has(k)?t(k):k;
 const box=h('div',{class:'seg'+(full?' full':''),role:'group','aria-label':aria||null});
 for(const [value,key] of options)box.append(h('button',{type:'button','data-value':String(value),'aria-pressed':'false',onclick:()=>{box.set(value);onPick(value);}},label(key)));
 box.set=v=>{for(const b of box.children)b.setAttribute('aria-pressed',String(b.dataset.value===String(v)));box.value=v;};
 box.relabel=()=>options.forEach(([,key],i)=>{box.children[i].textContent=label(key);});
 I18N.onChange(box.relabel);
 return box;
}
const DAY_BITS=[1,2,4,8,16,32,64];
function daysPicker(name,mask=127){
 const box=h('div',{class:'days',role:'group'});
 DAY_BITS.forEach((bit,i)=>box.append(h('label',{},h('input',{type:'checkbox',name,value:bit,checked:!!(mask&bit)}),h('span',{'data-i18n':'day.short.'+i},t('day.short.'+i)))));
 box.mask=()=>[...box.querySelectorAll('input')].reduce((m,i)=>m|(i.checked?Number(i.value):0),0);
 box.setMask=m=>box.querySelectorAll('input').forEach(i=>{i.checked=!!(m&Number(i.value));});
 return box;
}
function presetDays(picker){
 return h('div',{class:'row small'},[[127,'day.every'],[31,'day.weekdays'],[96,'day.weekends']].map(([m,k])=>h('button',{type:'button',class:'btn ghost',style:'min-height:28px;padding:2px 8px',onclick:()=>picker.setMask(m)},h('span',{i18n:k}))));
}
function daysText(mask){
 if(!mask)return t('day.once');if(mask===127)return t('day.every');if(mask===31)return t('day.weekdays');if(mask===96)return t('day.weekends');
 return DAY_BITS.map((b,i)=>mask&b?t('day.short.'+i):null).filter(Boolean).join(I18N.lang==='zh-CN'?'、':', ');
}
const hhmm=m=>String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const toMinutes=v=>{const [a,b]=v.split(':').map(Number);return a*60+b;};
function duration(sec){const d=Math.floor(sec/86400),hr=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return d?t('time.dh',{d,h:hr}):hr?t('time.hm',{h:hr,m}):t('time.m',{m});}
function summary(items){return h('dl',{class:'summary'},items.filter(Boolean).map(([k,v,dot])=>h('div',{},h('dt',{i18n:k}),h('dd',{},dot?h('span',{class:'dot '+dot}):null,v))));}
function card(titleKey,leadKey,...body){return h('section',{class:'card'},h('div',{class:'card-head'},h('div',{},h('h2',{i18n:titleKey}),leadKey&&h('p',{class:'help',i18n:leadKey}))),...body);}
function info(key){return h('details',{class:'info'},h('summary',{},icon('info'),h('span',{i18n:'common.more_info'})),h('p',{i18n:key}));}
function pageHead(titleKey,leadKey){return h('div',{},h('h2',{class:'page-title',i18n:titleKey}),h('p',{class:'page-lead',i18n:leadKey}));}
function saveBar(fn,label='common.save'){const b=h('button',{type:'button',class:'btn primary'},h('span',{i18n:label}));b.onclick=()=>run(b,fn);return h('div',{class:'form-actions'},b);}
function num(model,key,{min,max,step='any',unit,width}={}){
 const input=h('input',{type:'number',value:model[key],min,max,step,style:width?'width:'+width:null,oninput:e=>{if(e.target.value!==''&&Number.isFinite(+e.target.value))model[key]=+e.target.value;}});
 return unit?h('span',{class:'input-unit'},input,h('em',{},unit)):input;
}
function flag(model,key,titleKey,descKey){const r=switchRow(null,titleKey,descKey);const i=r.querySelector('input');i.checked=!!model[key];i.onchange=()=>{model[key]=typeof model[key]==='boolean'?i.checked:Number(i.checked);};return r;}
function slider(model,key,{min=0,max=100,fmt=v=>v+'%'}={}){
 const out=h('b',{class:'num'},fmt(model[key]));
 const r=h('input',{type:'range',min,max,value:model[key],oninput:e=>{model[key]=+e.target.value;out.textContent=fmt(model[key]);}});
 return [out,r];
}
function normalizeMac(v){const m=(v||'').replace(/[^0-9a-f]/gi,'').toLowerCase();return m.length===12?m:null;}
function prettyMac(m){return (m||'').toUpperCase().replace(/(..)(?!$)/g,'$1:');}
const clone=o=>JSON.parse(JSON.stringify(o));

/* Air quality bands: PM2.5 per GB 3095, formaldehyde limit per GB/T 18883-2022,
 * temperature and humidity comfort per the A1 light-segment defaults. */
const AIR={
 pm25:{unit:'µg/m³',max:250,bands:[[35,'excellent','ok'],[75,'good','ok'],[115,'light','warn'],[150,'moderate','warn'],[250,'heavy','bad'],[Infinity,'severe','bad']]},
 formaldehyde:{unit:'mg/m³',max:0.2,bands:[[0.08,'pass','ok'],[0.1,'slight','warn'],[Infinity,'exceed','bad']]},
 temperature:{unit:'℃',min:0,max:40,bands:[[18,'cool','warn'],[26,'comfort','ok'],[Infinity,'warm','warn']]},
 humidity:{unit:'%',max:100,bands:[[40,'dry','warn'],[60,'comfort','ok'],[Infinity,'humid','warn']]}
};
function grade(metric,v){const b=AIR[metric].bands.find(([lim])=>v<=lim);return {key:'air.'+metric+'.'+b[1],cls:b[2]};}
function airScale(metric,v){
 const m=AIR[metric],lo=m.min||0,span=m.max-lo;let prev=lo;
 const strip=h('div',{class:'scale'});
 for(const [lim,,cls] of m.bands){const end=Math.min(lim,m.max);if(end<=prev)continue;strip.append(h('i',{class:cls,style:'flex:'+((end-prev)/span*100).toFixed(2)}));prev=end;}
 strip.append(h('b',{style:'left:'+Math.max(0,Math.min(100,(v-lo)/span*100))+'%'}));
 return strip;
}
const TZ=[-720,-660,-600,-540,-480,-420,-360,-300,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,540,570,600,630,660,720,780,840];
function tzLabel(m){const sg=m<0?'−':'+',a=Math.abs(m);return 'UTC'+sg+String(Math.floor(a/60)).padStart(2,'0')+':'+String(a%60).padStart(2,'0')+(m===480?' · '+t('tz.cn'):'');}

/* ---------- Header, navigation, banners ---------- */
const UI=window.UI={$,h,icon,toast,run,onSubmit,confirm:confirmDialog,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,duration,summary,card,info,pageHead,saveBar,num,flag,slider,normalizeMac,prettyMac,clone,AIR,grade,airScale,tzLabel,state:null,caps:null,pages:{},device:null,clockCard,maintenancePage,scanNetworks};
// Keep requested output visible until a fresh read confirms it. Polls may still
// contain the pre-write state while the device applies an accepted command.
let pendingControl=null;
UI.acceptStatus=s=>{UI.confirmed=s;UI.state=pendingControl?{...s,...pendingControl}:s;return UI.state;};
UI.control=async(action,params,patch)=>{
 if(pendingControl){UI.device.onStatus?.(UI.state);throw Error(t('control.pending'));}
 pendingControl=patch;UI.controlBusy=true;
 const render=()=>{if(UI.device.onStatus)UI.device.onStatus(UI.state);};
 UI.state={...UI.state,...patch};render();
 let sendError,last;
 const matches=s=>s&&Object.entries(patch).every(([k,v])=>Object.hasOwn(s,k)&&(Array.isArray(v)?Array.isArray(s[k])&&v.length===s[k].length&&v.every((x,i)=>!!x===!!s[k][i]):typeof v==='boolean'?!!s[k]===v:s[k]===v));
 try{
  try{await command(action,params);}catch(e){sendError=e;if(e.code&&!['timeout','offline'].includes(e.code))throw e;}
  const until=Date.now()+20000;
  do{
   last=await UI.reload();
   if(matches(last))return last;
   await new Promise(resolve=>setTimeout(resolve,750));
  }while(Date.now()<until);
  throw Error(t('control.unconfirmed')+(sendError?' · '+sendError.message:''));
 }finally{
  pendingControl=null;UI.controlBusy=false;UI.state=last||UI.confirmed||UI.state;render();
 }
};
function header(dev){
 const lang=h('select',{id:'langPick','aria-label':'Language'},
  h('option',{value:'auto','data-i18n':'pref.lang_auto'},t('pref.lang_auto')),h('option',{value:'en'},'English'),h('option',{value:'zh-CN'},'简体中文'));
 lang.value=I18N.preference;lang.onchange=()=>I18N.set(lang.value);
 const theme=h('select',{id:'themePick','aria-label':'Theme'},['system','light','dark'].map(v=>h('option',{value:v,'data-i18n':'pref.theme_'+v},t('pref.theme_'+v))));
 let saved='system';try{saved=localStorage.getItem('phicomm.appearance')||'system';}catch{}
 const apply=v=>{if(v==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.dataset.theme=v;};
 theme.value=saved;apply(saved);theme.onchange=()=>{apply(theme.value);try{localStorage.setItem('phicomm.appearance',theme.value);}catch{}};
 return h('header',{class:'topbar'},
  h('div',{class:'brand'},h('div',{class:'logo'},icon(dev.icon)),h('div',{class:'grow'},h('div',{class:'kind','data-i18n':dev.kindKey},t(dev.kindKey)),h('h1',{id:'title'},dev.model))),
  h('div',{class:'prefs'},lang,theme),
  h('div',{class:'chips',id:'chips'}));
}
function chip(dotCls,labelKey,value){return h('span',{class:'chip'},h('span',{class:'dot '+dotCls}),h('span',{i18n:labelKey}),value!=null&&h('b',{},value));}
function renderChips(s){
 const c=$('chips');if(!c)return;
 const wifi=s.wifi_connected?chip('ok','chip.wifi',s.ssid+' · '+s.ip):s.ap_active?chip('warn','chip.hotspot',s.ap_name):chip('bad','chip.wifi',t('state.connecting'));
 const mq=!s.mqtt_host?chip('','chip.mqtt',t('state.off')):s.mqtt_connected?chip('ok','chip.mqtt',t('state.ready')):chip('warn','chip.mqtt',t('s.'+(s.mqtt_status||'connecting')));
 c.replaceChildren(wifi,mq,h('span',{class:'chip'},h('span',{i18n:'chip.firmware'}),h('b',{class:'num'},s.version||'—')),...(UI.device.chips?UI.device.chips(s):[]));
}
function renderBanners(s,lost){
 const b=$('banners');if(!b)return;b.replaceChildren();
 const add=(cls,ic,text)=>b.append(h('div',{class:'banner '+cls,role:cls==='bad'?'alert':null},icon(ic),h('span',{},text)));
 if(lost){add('bad','alert',t('banner.lost'));return;}
 if(s.ota_active)add('info','auto',t('banner.ota',{p:s.ota_progress}));
 if(s.reboot_pending)add('info','auto',t('banner.rebooting'));
 if(s.mqtt_cleanup_warning)add('warn','alert',t('banner.cleanup'));
 if(s.save_error)add('bad','alert',t('banner.save_error',{e:s.save_error}));
 if(s.ap_active&&!s.wifi_connected)add('warn','wifi',t('banner.hotspot',{n:s.ap_name}));
}
function buildNav(dev){
 const side=$('side');side.replaceChildren();
 for(const [groupKey,keys] of dev.groups){
  const links=keys.filter(k=>UI.pages[k]).map(k=>h('a',{href:'#settings/'+k,'data-i18n':dev.nav[k]},t(dev.nav[k])));
  if(!links.length)continue;
  side.append(h('div',{class:'group','data-i18n':groupKey},t(groupKey)));
  for(const a of links)side.append(a);
 }
}
function showRoute(){
 const m=/^settings\\/([a-z]+)$/.exec(location.hash.slice(1));
 const page=m&&document.querySelector('[data-settings-page="'+m[1]+'"]')?m[1]:m?(UI.device.groups.flatMap(g=>g[1]).find(k=>UI.pages[k])||null):null;
 $('homePage').hidden=!!page;$('settingsPage').hidden=!page;
 document.querySelectorAll('[data-settings-page]').forEach(p=>{p.hidden=p.dataset.settingsPage!==page;});
 document.querySelectorAll('.tabs a').forEach(a=>{const on=a.dataset.tab===(page?'settings':'home');if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelectorAll('.side a').forEach(a=>{if(a.hash==='#settings/'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page&&!UI.state)load().then(()=>afterShow(page));else afterShow(page);
}
function afterShow(page){
 if(!page)return;
 const active=document.querySelector('.side a[aria-current]'),side=$('side');
 // Reveal mobile menu items without scrollIntoView scrolling the whole page.
 if(active&&side&&side.scrollWidth>side.clientWidth){
  const item=active.getBoundingClientRect(),menu=side.getBoundingClientRect();
  if(item.left<menu.left)side.scrollLeft+=item.left-menu.left;
  else if(item.right>menu.right)side.scrollLeft+=item.right-menu.right;
 }
 const p=UI.pages[page];if(p&&p.show)p.show();
}
/* Wi-Fi scan is shared: start, poll, and hand the sorted list to a callback. */
async function scanNetworks(onList){
 await command('wifi.scan');
 for(let i=0;i<25;i++){const r=await command('wifi.scan.get');if(r.scanning){await new Promise(res=>setTimeout(res,700));continue;}onList(r.networks||[]);return;}
 throw Error(t('wifi.scan_timeout'));
}

/* ---------- Shared settings pages ---------- */
function wifiPage(){
 const sum=h('div'),list=h('div',{class:'list',hidden:true});
 const ssid=h('input',{id:'ssid',maxLength:32,required:true,autocomplete:'off'});
 const pass=h('input',{id:'wifiPassword',type:'password',maxLength:63,autocomplete:'new-password',placeholder:t('wifi.pass_ph')});
 const open=switchRow('openNetwork','wifi.open');
 const scanBtn=h('button',{type:'button',class:'btn',id:'scan'},icon('auto'),h('span',{i18n:'wifi.scan'}));
 const form=h('form',{id:'wifiForm',class:'stack'},
  h('label',{class:'field'},h('span',{i18n:'wifi.ssid'}),h('div',{class:'row'},h('div',{class:'grow'},ssid),scanBtn)),list,
  h('label',{class:'field'},h('span',{i18n:'wifi.password'}),pass),open,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'wifi.save'}))),info('wifi.hint'));
 open.querySelector('input').onchange=e=>{pass.disabled=e.target.checked;};
 scanBtn.onclick=()=>run(scanBtn,()=>scanNetworks(net=>{
  list.replaceChildren(...net.slice().sort((a,b)=>b.rssi-a.rssi).map(n=>h('button',{type:'button',class:'item',style:'cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%',
   onclick:()=>{ssid.value=n.ssid;open.querySelector('input').checked=n.security===0;pass.disabled=n.security===0;list.hidden=true;pass.focus();}},
   icon('wifi'),h('span',{class:'grow'},h('b',{},n.ssid),h('span',{},t('wifi.signal.'+(n.rssi>-55?3:n.rssi>-70?2:1))+' · '+n.rssi+' dBm')),n.security===0?h('span',{class:'badge',i18n:'wifi.open_badge'}):icon('lock'))));
  list.hidden=false;
  if(!net.length)throw Error(t('wifi.none'));
 }),null);
 onSubmit(form,()=>api('/wifi/config',{ssid:ssid.value,password:pass.value,open_network:open.querySelector('input').checked}),'wifi.verifying');
 return {el:h('div',{class:'stack'},pageHead('nav.wifi','wifi.lead'),sum,card('wifi.change',null,form)),
  status(s){sum.replaceChildren(summary([['wifi.status',s.wifi_connected?t('state.connected'):s.ap_active?t('state.hotspot'):t('state.connecting'),s.wifi_connected?'ok':s.ap_active?'warn':'bad'],
   ['wifi.ssid',s.ssid||'—'],['wifi.ip',s.ip||'—'],s.ap_active?['wifi.ap',s.ap_name]:['wifi.saved_password',t(s.wifi_password_set?'common.yes':'common.no')]]));},
  init(s){ssid.value=s.ssid||'';}};
}
function mqttImportPanel(dev,fields){
 const box=h('section',{class:'card stack',id:'mqttImport',hidden:!importTicket&&!importInvalid});
 if(importInvalid){box.append(h('p',{role:'alert'},t('import.invalid')));return box;}
 if(!importTicket)return box;
 const ticket=importTicket;importTicket=null;
 const source=window.opener;
 const status=h('p',{role:'status'}),accept=h('button',{type:'button',class:'btn primary',disabled:true},t('import.accept')),
 cancel=h('button',{type:'button',class:'btn'},t('common.cancel'));
 box.append(h('h2',{},t('import.title')),h('p',{},t('import.source',{origin:ticket.origin})),h('p',{},t('import.preview',{host:ticket.host,port:ticket.port,user:ticket.user||'—'})),
  h('p',{class:'help'},t('import.help')),h('p',{class:'help'},t('import.http')),
  h('div',{class:'form-actions'},accept,cancel),status);
 let waiting=false,done=false,timer,original=null;
 box.activate=()=>{if(!done&&source&&Date.now()<ticket.expires)accept.disabled=false;};
 const detach=()=>{window.removeEventListener('message',receive);clearTimeout(timer);try{window.opener=null;}catch{}};
 const clear=()=>{fields.pass.value='';if(original){fields.host.value=original.host;fields.port.value=original.port;fields.user.value=original.user;if(fields.protocol)fields.protocol.value=original.protocol;fields.clear.checked=original.clear;original=null;}waiting=false;done=true;detach();accept.disabled=true;};
 box.saved=()=>{original=null;fields.pass.value='';clearTimeout(timer);};
 box.guard=()=>{if(waiting)throw Error(t('import.waiting'));};
 const finish=()=>{clear();status.textContent=t('import.expired');};
 const receive=e=>{
  if(!waiting||done||!IotProvision.packet(e,{source,origin:ticket.origin,id:ticket.id,expires:ticket.expires},'iotcloud.provision.config'))return;
  let data;
  try{if(Object.keys(e.data).sort().join(',')!=='id,password,type')throw Error();data=IotProvision.config({v:1,host:ticket.host,port:ticket.port,user:ticket.user,password:e.data.password,protocol:'tmcp',expires:ticket.expires});}catch{finish();status.textContent=t('import.invalid');return;}
  // Only front-end fields are touched. config.set remains the normal save flow.
  fields.host.value=data.host;fields.port.value=String(data.port);fields.user.value=data.user;fields.pass.value=data.password;
  if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=data.password==='';
  waiting=false;done=true;detach();accept.hidden=true;status.textContent=t('import.received');
  source.postMessage({type:'iotcloud.provision.received',id:ticket.id},ticket.origin);
  // Never leave an unsaved imported host paired with the device's old password.
  timer=setTimeout(()=>{clear();status.textContent=t('import.expired');},Math.max(0,ticket.expires-Date.now()));
 };
 cancel.onclick=()=>{clear();box.hidden=true;};
 accept.onclick=()=>{
  if(done||Date.now()>=ticket.expires||!source){finish();return;}
  original={host:fields.host.value,port:fields.port.value,user:fields.user.value,protocol:fields.protocol?.value,clear:fields.clear.checked};
  fields.host.value=ticket.host;fields.port.value=String(ticket.port);fields.user.value=ticket.user;fields.pass.value='';if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=false;
  waiting=true;accept.disabled=true;status.textContent=t('import.waiting');
  source.postMessage({type:'iotcloud.provision.ready',id:ticket.id},ticket.origin);
 };
 if(!source){accept.disabled=true;status.textContent=t('import.no_opener');return box;}
 window.addEventListener('message',receive);
 timer=setTimeout(finish,Math.max(0,ticket.expires-Date.now()));
 window.addEventListener('pagehide',clear,{once:true});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#settings/mqtt')clear();});
 return box;
}
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const imported=mqttImportPanel(dev,{host,port,user,pass,protocol,clear:clear.querySelector('input')});
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  imported.guard?.();
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})}).then(result=>{pass.value='';imported.saved?.();return result;});
 });
 const broker=card('mqtt.broker',null,form);
 const heading=broker.querySelector('.card-head');heading.classList.add('broker-card-head');
 heading.append(h('a',{class:'btn broker-platform-link',href:'https://phicomm-io.github.io/iotcloud/#/',target:'_blank',rel:'noopener noreferrer'},h('span',{i18n:'import.platform'}),icon('external')));
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,imported,broker),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';imported.activate?.();}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const sources=h('div',{class:'row',id:'otaSources'}),latest=h('p',{class:'help'});
  const notes=h('button',{class:'btn',type:'button',hidden:true},t('fw.notes'));
  const notesText=h('pre',{class:'help',hidden:true,style:'white-space:pre-wrap;max-height:24rem;overflow:auto'});
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  let timer=null,last=null;
  const buttons=[];
  function busy(value){for(const button of buttons)button.disabled=value;}
  function translate(){install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const button of buttons)button.textContent=t('fw.source_'+button.dataset.source);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'')+(data.error?' · '+data.error:'');
   install.hidden=!data.version||data.state==='failed';notes.hidden=!data.release_log;
   if(data.busy||data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),1000);
   else busy(false);
  }
  async function check(source){
   if(timer)clearTimeout(timer);busy(true);install.hidden=notes.hidden=notesText.hidden=true;
   try{await command('ota.check',{source});latest.textContent=t('fw.check_checking');timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),500);}
   catch(e){busy(false);throw e;}
  }
  notes.onclick=()=>run(notes,async()=>{
   let offset=0,text='';notesText.hidden=false;
   do{
    await command('ota.notes',{offset});
    let data;
    do{await new Promise(resolve=>setTimeout(resolve,500));data=await command('ota.notes.get');}while(data.busy);
    if(data.state!=='ready')throw Error(data.error||t('fw.check_failed'));
    text+=data.text;notesText.textContent=text;
    if(data.next<=offset&&data.next<data.total)throw Error(t('fw.check_failed'));
    offset=data.next;if(offset>=data.total)break;
   }while(offset<16384);
  });
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources){const button=h('button',{class:'btn',type:'button','data-source':id},t('fw.source_'+id));button.onclick=()=>run(button,()=>check(id));buttons.push(button);sources.append(button);}}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{i18n:'fw.online'}),h('p',{class:'help',i18n:'fw.sources_help'}),sources,latest,h('div',{class:'row'},install,notes),notesText);
 }
 const cancel=h('button',{class:'btn',type:'button',hidden:true,i18n:'fw.cancel'});
 cancel.onclick=()=>run(cancel,async()=>{await command('ota.cancel');toast(t('fw.cancelling'));});
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'https://…/'+dev.otaName});
 const fileForm=h('form',{id:'fileForm',class:'stack'},h('label',{class:'field'},h('span',{},t('fw.file',{m:dev.model})),file),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),unsigned),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.upload'}))));
 const urlForm=h('form',{id:'urlForm',class:'stack',hidden:true},h('label',{class:'field'},h('span',{i18n:'fw.url'}),url),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.download'}))));
 const picker=seg([['file','fw.tab_file'],['url','fw.tab_url']],v=>{fileForm.hidden=v!=='file';urlForm.hidden=v!=='url';});picker.set('file');
 // Upload streams raw bytes; the request is synchronous up to send(), like the old page.
 let uploading=false;
 fileForm.addEventListener('submit',e=>{
  e.preventDefault();const f=file.files&&file.files[0];if(!f||uploading)return;
  const rescue=unsigned.querySelector('input').checked;
  if(rescue&&!window.confirm(t('fw.unsigned_confirm')))return;
  uploading=true;prog.value=0;
  const xhr=new XMLHttpRequest();xhr.open('POST',rescue?'/api/v1/ota/upload-unsigned':'/api/v1/ota/upload');
  xhr.setRequestHeader('Content-Type','application/octet-stream');xhr.timeout=310000;
  xhr.upload.onprogress=ev=>{if(ev.lengthComputable){prog.value=ev.loaded/ev.total*100;state.textContent=t('fw.uploading',{p:Math.round(ev.loaded/ev.total*100)});}};
  xhr.onload=()=>{const ok=xhr.status===202;state.textContent=ok?t('fw.verify_ok'):t('fw.failed',{e:xhr.responseText});toast(state.textContent,!ok);};
  xhr.onerror=()=>toast(t('fw.upload_lost'),true);
  xhr.ontimeout=()=>toast(t('fw.upload_timeout'),true);
  xhr.onloadend=()=>{uploading=false;};
  xhr.send(f);
 });
 onSubmit(urlForm,()=>api('/ota',{url:url.value}),'fw.url_started');
 const fileLabel=fileForm.querySelector('.field>span');I18N.onChange(()=>{fileLabel.textContent=t('fw.file',{m:dev.model});});
 return {el:h('div',{class:'stack'},pageHead('nav.firmware','fw.lead'),sum,online,
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state,cancel),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
   cancel.hidden=!s.ota_active||s.ota_mode==='committing';
   if(s.ota_active){prog.value=s.ota_progress;state.textContent=t('fw.progress',{p:s.ota_progress});}}};
}
function diagValue(k,v){
 if(v===null||v===undefined||v==='')return '—';
 if(typeof v==='boolean')return t(v?'common.yes':'common.no');
 if(k==='uptime_seconds')return duration(v);
 if(k==='free_memory')return (v/1024).toFixed(1)+' KB';
 if(k==='age_ms')return (v/1000).toFixed(1)+' s';
 if(k==='ntp_last_success'||k==='utc_time')return new Date(v*1000).toLocaleString(I18N.lang);
 if(Array.isArray(v))return v.join(', ');
 if(typeof v==='string'&&I18N.has('s.'+v))return t('s.'+v);
 return String(v);
}
function diagnosticsPage(dev){
 const health=h('div',{class:'health'}),groups=h('div',{class:'diag'}),raw=h('pre'),updated=h('p',{class:'help'});
 const extra=dev.diagExtra?dev.diagExtra():null;
 return {el:h('div',{class:'stack'},pageHead('nav.diagnostics','diag.lead'),card('diag.health',null,health),
   h('section',{},h('div',{class:'section-label',i18n:'diag.details'}),groups),extra,
   h('details',{class:'more'},h('summary',{i18n:'diag.raw'}),raw),updated),
  status(s){
   if(!UI.pages.diagnostics||$('settingsPage').hidden)return;
   const checks=[['diag.c_wifi',s.wifi_connected?'ok':'bad',s.wifi_connected?s.ssid:t('state.disconnected')],
    ['diag.c_mqtt',!s.mqtt_host?'':s.mqtt_connected?'ok':'warn',!s.mqtt_host?t('state.off'):t('s.'+(s.mqtt_status||'connecting'))+(s.mqtt_errors?' · '+t('diag.errors',{n:s.mqtt_errors}):'')],
    ...(Object.hasOwn(s,'watchdog_state')?[['diag.c_watchdog',!s.watchdog_enabled||s.watchdog_state==='fault'?'bad':s.reset_reason==='watchdog'?'warn':'ok',s.reset_reason==='watchdog'?t('diag.watchdog_reboot'):t('s.'+s.watchdog_state)]]:[]),
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
    ['diag.g_watchdog',['reset_reason','reset_reason_raw','watchdog_enabled','watchdog_state','watchdog_fault']],
    ['diag.g_network',['wifi_connected','ssid','ip','ap_active','ap_name','scan_busy','wifi_password_set','wifi_trial_status','wifi_trial_active']],
    ['diag.g_mqtt',['mqtt_connected','mqtt_status','mqtt_host','mqtt_port','mqtt_user','mqtt_topic_mode','mqtt_password_set','mqtt_errors','mqtt_last_error','mqtt_cleanup_warning']],
    ...(dev.diagGroups||[]),['diag.g_ota',['ota_active','ota_state','ota_progress','ota_error']]];
   const open=new Set([...groups.querySelectorAll('details')].filter(d=>d.open).map(d=>d.dataset.key));
   groups.replaceChildren(...all.map(([key,keys],i)=>{const rows=keys.filter(k=>Object.hasOwn(s,k)).map(k=>{seen.add(k);return [k,s[k]];});if(!rows.length)return null;
    return h('details',{'data-key':key,open:open.size?open.has(key):i<2},h('summary',{},h('span',{i18n:key}),h('span',{class:'badge'},rows.length)),
     h('dl',{},rows.map(([k,v])=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,v))])));}).filter(Boolean));
   const rest=Object.keys(s).filter(k=>!seen.has(k)&&!(Array.isArray(s[k])&&typeof s[k][0]==='object'));
   if(rest.length)groups.append(h('details',{'data-key':'diag.g_other'},h('summary',{},h('span',{i18n:'diag.g_other'}),h('span',{class:'badge'},rest.length)),
    h('dl',{},rest.map(k=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,s[k]))]))));
   raw.textContent=JSON.stringify(s,null,2);updated.textContent=t('diag.updated',{t:new Date().toLocaleTimeString(I18N.lang)});
  }};
}
function logsPage(){
 const out=h('pre',{},''),rows=[],state=h('p',{class:'help'});
 let cursor=0;
 async function read(){
  const d=await command('logs.get',{after:cursor,limit:8});
  if(d.overwritten)rows.push(t('logs.overwritten'));
  for(const r of d.records)rows.push(JSON.stringify(r.module==='system'&&r.event==='watchdog'?{...r,message:t('diag.watchdog_reboot')}:r));
  cursor=d.next;out.textContent=rows.join('\\n')||t('logs.empty');return d;
 }
 const refresh=h('button',{type:'button',class:'btn'},icon('auto'),h('span',{i18n:'diag.log_refresh'}));
 refresh.onclick=()=>run(refresh,read,null);
 const all=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.load_all'}));
 all.onclick=()=>run(all,async()=>{for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}},null);
 const dl=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.download'}));
 dl.onclick=()=>run(dl,async()=>{
  for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}
  const url=URL.createObjectURL(new Blob([rows.join('\\n')],{type:'text/plain;charset=utf-8'})),a=h('a',{href:url,download:'device-log.txt'});
  document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);
 },null);
 return {el:h('div',{class:'stack'},pageHead('nav.logs','logs.lead'),
  card('diag.logs',null,h('p',{class:'help',i18n:'logs.hint'}),h('div',{class:'form-actions'},refresh,all,dl),out,state))};
}
function maintenancePage(dev){
 const reboot=h('button',{type:'button',class:'btn'},h('span',{i18n:'sys.reboot'}));
 reboot.onclick=async()=>{if(await confirmDialog({title:t('sys.reboot_q',{m:dev.model}),body:t('sys.reboot_body'),ok:t('sys.reboot')}))run(reboot,()=>api('/reboot',{}),'toast.rebooting');};
 const items=[h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reboot'}),h('span',{i18n:'sys.reboot_desc'})),reboot)];
 if(dev.factoryReset){
  const reset=h('button',{type:'button',class:'btn danger'},h('span',{i18n:'sys.reset'}));
  reset.onclick=async()=>{if(await confirmDialog({title:t('sys.reset_q'),body:t('sys.reset_body'),ok:t('sys.reset'),danger:true}))run(reset,()=>api('/device/reset',{full:true}),'toast.resetting');};
  items.push(h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reset'}),h('span',{i18n:'sys.reset_desc'})),reset));
 }
 return h('div',{class:'stack'},pageHead('nav.maintenance','sys.lead'),
  h('section',{class:'card danger-zone'},h('div',{class:'list'},items),
   h('p',{class:'help',style:'margin-top:12px',i18n:dev.buttonHintKey},t(dev.buttonHintKey))));
}
/* Slots shared by every "General" page. */
function nameCard(){
 const input=h('input',{id:'deviceName',maxLength:63}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))),
  h('button',{class:'btn ghost',type:'button',onclick:e=>run(e.currentTarget,async()=>{await api('/deviceName',{name:''});await UI.reload();input.value=UI.state?.name||'';},'common.saved')},h('span',{i18n:'gen.default_name'}))),meta);
 onSubmit(form,()=>{if(new TextEncoder().encode(input.value).length>63)throw Error(t('gen.name_long'));return api('/deviceName',{name:input.value});});
 return {el:card('gen.identity',null,form),init(s){input.value=s.name||'';},status(s){meta.replaceChildren(summary([['gen.device_id',h('span',{class:'num'},prettyMac(s.device_id))],['gen.uptime',duration(s.uptime_seconds||0)]]));}};
}
function authCard(){
 const input=h('input',{id:'webPassword',type:'password',maxLength:32,autocomplete:'new-password',placeholder:t('auth.ph')});
 const state=h('span',{class:'badge'});
 const form=h('form',{id:'authForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'auth.password'}),input,h('p',{class:'help',i18n:'auth.help'})),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'auth.set'}))));
 onSubmit(form,()=>{if(input.value&&!/^[\\x20-\\x7e]{8,32}$/.test(input.value))throw Error(t('auth.invalid'));return api('/auth/password',{password:input.value});});
 const c=card('auth.title','auth.lead',form);c.querySelector('.card-head').append(state);
 return {el:c,status(s){state.className='badge '+(s.web_password_set?'ok':'');state.textContent=t(s.web_password_set?'auth.on':'auth.off');}};
}
function clockCard({load,save,status}){
 const sum=h('div'),tz=h('select'),ntp=h('input',{maxLength:63,required:true,placeholder:'ntp1.aliyun.com'});
 const fill=()=>{const v=tz.value;tz.replaceChildren(...TZ.map(m=>h('option',{value:m},tzLabel(m))));tz.value=v;};fill();I18N.onChange(fill);
 const form=h('form',{class:'stack'},h('div',{class:'fields'},
   h('label',{class:'field'},h('span',{i18n:'clock.tz'}),tz),h('label',{class:'field'},h('span',{i18n:'clock.ntp'}),ntp)),
  info('clock.hint'),h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>save({timezone_minutes:Number(tz.value),ntp_host:ntp.value.trim()}));
 return {el:card('clock.title',null,sum,h('div',{style:'margin-top:16px'},form)),
  async show(){const c=await load();if(!c)return;tz.value=String(c.timezone_minutes||480);ntp.value=c.ntp_host||'';},
  status(s){sum.replaceChildren(summary(status(s)));}};
}

/* ---------- Boot ---------- */
let initialized=false,failures=0,lastSuccess=0,loading=null;
async function load(){
 try{
  const raw=await command('status.get');failures=0;lastSuccess=Date.now();
  if(raw.ota_active&&raw.ota_mode){UI.pages.firmware?.status(raw);return raw;}
  const s=UI.acceptStatus(raw);
  $('title').textContent=UI.device.model+' '+(s.name||'');
  renderChips(s);renderBanners(s,false);
  if(!initialized){for(const p of Object.values(UI.pages))if(p.init)p.init(s);initialized=true;}
  for(const p of Object.values(UI.pages))if(p.status)p.status(s);
  if(UI.device.onStatus)UI.device.onStatus(s);
  return raw;
 }catch(e){if(++failures>=3&&(!lastSuccess||Date.now()-lastSuccess>=30000))renderBanners(null,true);return null;}
}
function pollLoad(){if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
async function refresh(){await pollLoad();setTimeout(refresh,UI.device.interval||2000);}
UI.reload=async()=>{if(loading)await loading;return pollLoad();};
UI.start=async dev=>{
 UI.device=dev;
 const first=dev.groups.flatMap(g=>g[1])[0];
 document.body.prepend(header(dev),
  h('nav',{class:'tabs','aria-label':'Main'},
   h('a',{href:'#home','data-tab':'home'},icon('home'),h('span',{i18n:'nav.home'})),
   h('a',{href:'#settings/'+first,'data-tab':'settings'},icon('sliders'),h('span',{i18n:'nav.settings'}))),
  h('div',{id:'banners'}));
 UI.caps=await command('capabilities.get').catch(()=>null);
 const pages=$('pages');
 // Pages the framework builds for every product.
 const builders={network:wifiPage,mqtt:mqttPage,firmware:firmwarePage,diagnostics:diagnosticsPage,maintenance:maintenancePage,logs:logsPage};
 for(const [key,build] of Object.entries(builders)){const p=build(dev);UI.pages[key]=p;pages.append(h('div',{'data-settings-page':key,hidden:true},p.el));}
 // Automation pages, when the device advertises the capability.
 Object.assign(UI.pages,window.automationPages(dev));
 // Product pages: the product supplies show()/status(); the markup is either
 // already in the document or appended below.
 for(const [key,p] of Object.entries(dev.pages))UI.pages[key]=Object.assign(UI.pages[key]||{},p);
 for(const [key,p] of Object.entries(UI.pages)){
  let box=document.querySelector('[data-settings-page="'+key+'"]');
  if(!box){box=h('div',{'data-settings-page':key,hidden:true});pages.append(box);}
  if(p.el)box.append(p.el);
 }
 for(const slot of document.querySelectorAll('[data-slot]')){const p=slot.dataset.slot==='name'?nameCard():authCard();UI.pages['slot_'+slot.dataset.slot]=p;slot.replaceWith(p.el);}
 buildNav(dev);
 window.addEventListener('hashchange',showRoute);showRoute();
 I18N.apply();
 I18N.onChange(()=>{if(UI.state){renderChips(UI.state);renderBanners(UI.state,false);for(const p of Object.values(UI.pages))if(p.status)p.status(UI.state);}});
 refresh();
};
})();
<\/script>
<script>/* Automation pages shared by the three products: schedules, custom button
 * events and night mode. Installed by ui.js when the device reports the
 * matching capability. All traffic goes through command() from service.js. */
(()=>{
'use strict';
const {t}=I18N;
const {h,icon,toast,run,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,info,card,pageHead,slider,clone}=UI;

/* Action kinds a schedule or button event can run, keyed by action name. */
const ACTIONS={
 'outlet.set':'op.outlet','fan.set':'op.fan','light.set':'op.light',
 'child_lock.set':'op.child_lock','indicator.set':'op.indicator',
 'display.set':'op.display','system.reboot':'op.reboot',
 'light_effect.next':'op.effect_next','light_effect.select':'op.effect_select',
 'filter.reset':'op.filter_reset','light_always.set':'op.light_always'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a)&&(keys||!['light_effect.next','light_effect.select','filter.reset'].includes(a)));
 const box=h('div',{class:'stack'}),fields=h('div',{class:'stack'});
 const options=[...(keys?[['none','op.none']]:[]),...available.map(a=>[a,actKey(a)])];
 const pick=keys?sel(host,'btn.action',options):seg(options,v=>draw(v),{full:true});
 if(keys){pick.set=v=>{pick.value=v;};pick.addEventListener('change',()=>draw(pick.value));host.append(box);}
 else host.append(pick,box);
 box.append(fields);
 let read=()=>({}),current=keys?'none':(available[0]||'none');
 function draw(a,params={}){
  current=a;fields.replaceChildren();read=()=>({});
  if(a==='none'||!a)return;
  const parts=[];
  if(a==='outlet.set'){
   const index=sel(fields,'op.target',[['all','op.all'],...[0,1,2,3,4,5].map(i=>[String(i),()=>t('tc1.socket_n',{n:i+1})])]);
   if(params.index!=null)index.value=String(params.index);
   parts.push(()=>index.value==='all'?{}:{index:Number(index.value)});
  }
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set','light_always.set'].includes(a);
  if(switchable){
   const values=keys&&(['outlet.set','fan.set'].includes(a)||caps.model==='a1')?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='light_effect.select'){
   const effect=sel(fields,'op.effect_select',Array.from({length:5},(_,i)=>[String(i),'a1.effect.'+i]));
   effect.value=String(params.effect||0);parts.push(()=>({effect:Number(effect.value)}));
  }
  if(a==='filter.reset')fields.append(info('filter.reset_hint'));
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   if(a==='light.set'&&keys){
    const setBrightness=switchRow(null,'op.set_brightness');setBrightness.querySelector('input').checked=params.brightness!=null;
    fields.append(setBrightness);parts.push(()=>setBrightness.querySelector('input').checked?{brightness:Number(m.brightness)}:{});
   }else parts.push(()=>({brightness:Number(m.brightness)}));
  }
  read=()=>Object.assign({},...parts.map(f=>f()));
  current=a;
 }
 draw(keys?'none':(available[0]||'none'));
 return {
  get(){return {action:current,params:read()};},
  set(a,p){current=a;pick.set(a);draw(a,p||{});}
 };
}

/* ---------- Schedules ---------- */
function schedulePage(dev){
 const box=h('div',{class:'stack'}),listBox=h('div',{class:'stack'});
 let offset=0,editing=0,tasks=[];
 const tz=()=>((UI.state&&UI.state.timezone_minutes)||480)*60;
 const atText=sec=>new Date((sec+tz())*1000).toISOString().slice(0,16).replace('T',' ');
 const when=x=>x.trigger==='once'?atText(x.at):hhmm(x.minute);
 const timeValue=()=>{const d=new Date(Date.now()+tz()*1000+86400000);return d.toISOString().slice(0,16);};

 const enabled=switchRow(null,'sch.enabled_row');
 const trigger=seg([['weekly','sch.weekly'],['once','day.once']],v=>syncTrigger(),{full:true});
 const days=daysPicker('sdays',127),time=h('input',{type:'time',value:'08:00'}),at=h('input',{type:'datetime-local',value:timeValue()});
 const weekly=h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days);
 const once=h('label',{class:'field',hidden:true},h('span',{i18n:'sch.when'}),at);
 const minute=h('label',{class:'field'},h('span',{i18n:'sch.time'}),time);
 const editorHost=h('div',{class:'stack'});
 function syncTrigger(){const onceMode=trigger.value==='once';weekly.hidden=onceMode;once.hidden=!onceMode;minute.hidden=onceMode;}
 const editor=actionEditor(editorHost);
 const save=h('button',{type:'submit',class:'btn primary'});
 const labelSave=()=>save.replaceChildren(icon('plus'),h('span',{},t(editing?'sch.save_btn':'sch.add_btn')));
 labelSave();
 function row(x){
  return h('div',{class:'item'},h('b',{class:'time num'},when(x)),
   h('div',{class:'grow'},h('b',{},t(actKey(x.action))+(x.trigger==='weekly'?' · '+daysText(x.days):' · '+t('day.once'))),
    h('span',{},t('sch.state.'+(x.state||'waiting'))+(x.enabled?'':' · '+t('sch.off')))),
   h('span',{class:'badge '+(x.enabled?'ok':'')},t(x.enabled?'sch.enabled':'sch.disabled')),
   h('div',{class:'row',style:'gap:4px'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(x)},h('span',{i18n:'sch.edit'})),
    h('button',{type:'button',class:'btn ghost',onclick:ev=>run(ev.currentTarget,()=>command('schedules.enable',{id:x.id,enabled:!x.enabled}).then(load),null)},h('span',{i18n:x.enabled?'sch.disable':'sch.enable'})),
    h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:ev=>run(ev.currentTarget,()=>command('schedules.delete',{id:x.id}).then(load),'common.deleted')},icon('trash'))));
 }
 async function load(){
  const d=await command('schedules.get',{offset,limit:8});tasks=d.items;
  listBox.replaceChildren(
   tasks.length?h('div',{class:'list'},tasks.map(row)):h('div',{class:'empty'},t('sch.empty')),
   h('div',{class:'row between'},h('span',{class:'help'},t('sch.used',{a:d.count,b:d.capacity})),
    h('div',{class:'row',style:'gap:4px'},
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=Math.max(0,offset-8);return load();},null)},h('span',{i18n:'common.prev'})),
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=d.next;return load();},null),disabled:offset+8>=d.count},h('span',{i18n:'common.next'})))));
  banner.hidden=!(UI.state&&UI.state.time_synced===false);
 }
 function reset(){editing=0;enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();days.setMask(127);time.value='08:00';editor.set('none');labelSave();}
 function edit(x){
  editing=x.id;enabled.querySelector('input').checked=!!x.enabled;trigger.set(x.trigger);syncTrigger();
  days.setMask(x.days);time.value=hhmm(x.minute);at.value=atText(x.at);editor.set(x.action,x.params);labelSave();
  box.scrollIntoView({block:'start'});
 }
 const banner=h('div',{class:'banner warn',hidden:true},icon('clock'),h('span',{i18n:'sch.no_clock'}));
 const form=h('form',{class:'subcard stack'},h('h3',{i18n:'sch.new'}),trigger,weekly,once,minute,editorHost,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},icon('plus'),h('span',{},t('sch.add_btn'))),
   h('button',{type:'button',class:'btn ghost',onclick:reset},h('span',{i18n:'sch.reset'}))));
 form.addEventListener('submit',e=>{e.preventDefault();run(save,async()=>{
  const a=editor.get();
  if(a.action==='none')throw Error(t('sch.pick_action'));
  const task={enabled:Number(enabled.querySelector('input').checked),trigger:trigger.value,...a};
  if(editing)task.id=editing;
  if(trigger.value==='weekly'){const d=days.mask();if(!d)throw Error(t('sch.pick_day'));task.days=d;task.minute=toMinutes(time.value);}
  else{const parsed=Date.parse(at.value);if(!Number.isFinite(parsed))throw Error(t('sch.pick_when'));
   task.at=Math.floor(parsed/1000)-tz();if(task.at<=Math.floor(Date.now()/1000))throw Error(t('sch.future'));}
  await command('schedules.put',task);reset();await load();toast(t('sch.added'));
 },null);});
 box.append(form,info('sch.hint'));
 return {el:h('div',{class:'stack'},pageHead('nav.schedule',dev.scheduleLead),banner,card('sch.list',null,listBox,box)),
  async show(){if(!UI.state)await UI.reload();await load();}};
}

/* ---------- Custom button events ---------- */
function buttonsPage(dev){
 const listBox=h('div',{class:'stack'}),keyHost=h('div',{class:'fields'});
 const keyIds=dev.model==='A1'?(UI.caps.button_keys?.includes('combination')?[0,1,2]:[0,1]):[0];
 const keyName=k=>t(dev.model==='A1'?['btn.key_power','btn.key_wifi','btn.key_both'][Number(k)]:'btn.key_fn');
 const key=sel(keyHost,'btn.key',keyIds.map(k=>[String(k),()=>keyName(k)]));
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(['system.reboot','light_effect.next','filter.reset'].includes(v.action))return target;
  if(v.action==='light_effect.select')return target+' · '+t('a1.effect.'+p.effect);
  let text=v.action==='display.set'?target:state+' · '+target;
  if(p.speed!=null)text+=' · '+p.speed+'%';
  if(p.brightness!=null)text+=' · '+p.brightness+'%';
  return text;
 }
 const previewBox=h('div',{class:'button-preview','aria-live':'polite'});
 function preview(){
  const v={key:Number(key.value),[kind.value]:Number(count.value),...editor.get()};
  previewBox.textContent=keyName(v.key)+' · '+gesture(v)+' → '+actionText(v);
 }
 const editorCard=h('form',{class:'card stack','data-button-editor':''});
 const selected=()=>({key:Number(key.value),[kind.value]:Number(count.value)});
 function edit(v){
  key.value=String(v.key);kind.set(v.seconds?'seconds':'clicks');count.max=v.seconds?4:30;
  countLabel.textContent=t(v.seconds?'btn.hold_count':'btn.click_count');count.value=v.seconds||v.clicks;
  editor.set(v.action,v.params);preview();editorCard.scrollIntoView({block:'nearest',behavior:'smooth'});count.focus();
 }
 function row(v){
  return h('div',{class:'button-mapping'},h('b',{class:'button-gesture'},gesture(v)),
   h('span',{class:'button-result'},actionText(v)),h('div',{class:'row'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(v)},t('sch.edit')),
    h('button',{type:'button',class:'btn ghost','aria-label':t('common.delete')+' '+gesture(v),onclick:e=>run(e.currentTarget,async()=>{
     await command('buttons.set',{key:v.key,...(v.seconds?{seconds:v.seconds}:{clicks:v.clicks}),action:'none',params:{}});await load();
    },'common.deleted')},t('common.delete'))));
 }
 async function load(){
  const items=[];let offset=0,capacity=68;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);capacity=page.capacity||capacity;if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<capacity);
  listBox.replaceChildren();
  for(const k of keyIds){
   const groups=[];
   for(const type of ['clicks','seconds']){
    const values=items.filter(v=>Number(v.key)===k&&v[type]>0).sort((a,b)=>a[type]-b[type]);
    const runs=[];
    for(const v of values){const last=runs[runs.length-1];
     if(last&&v[type]===last[last.length-1][type]+1&&JSON.stringify([v.action,v.params])===JSON.stringify([last[0].action,last[0].params]))last.push(v);
     else runs.push([v]);
    }
    if(runs.length)groups.push(h('section',{class:'button-group'},h('h3',{},t(type==='clicks'?'btn.click':'btn.hold')),runs.map(run=>run.length===1?row(run[0]):
     h('details',{class:'button-range'},h('summary',{},h('b',{},t(type==='clicks'?'btn.click_range':'btn.hold_range',{a:run[0][type],b:run[run.length-1][type]})),h('span',{},actionText(run[0])),h('span',{class:'help'},t('btn.expand'))),run.map(row)))));
   }
   listBox.append(h('section',{class:'stack'},h('h3',{},keyName(k)),groups.length?groups:h('div',{class:'empty'},t('btn.empty'))));
  }
 }
 const save=h('button',{type:'submit',class:'btn primary'},t('common.save'));
 editorCard.append(h('h2',{i18n:'btn.edit'}),keyHost,editorHost,previewBox,h('div',{class:'form-actions'},save));
 editorCard.addEventListener('input',preview);editorCard.addEventListener('change',preview);editorCard.addEventListener('click',()=>preview());
 editorCard.addEventListener('submit',e=>{e.preventDefault();if(!editorCard.reportValidity())return;
  run(save,async()=>{const a=editor.get();if(a.action==='none')throw Error(t('btn.pick_action'));
   await command('buttons.set',{...selected(),...a});await load();},'common.saved');
 });
 let filterStatus,filterHours;
 function filterCards(){
  if(dev.model!=='A1'||!UI.caps.actions.includes('filter.get'))return [];
  filterStatus=h('p',{'data-filter-status':''});filterHours=h('input',{type:'number',min:1,max:20000,required:true,'data-filter-hours':''});
  const form=h('form',{class:'stack'},filterStatus,info('filter.hint'),h('label',{class:'field'},h('span',{i18n:'filter.lifetime'}),filterHours),
   h('div',{class:'form-actions'},h('button',{type:'submit',class:'btn primary'},t('common.save')),
    h('button',{type:'button',class:'btn ghost',onclick:e=>run(e.currentTarget,async()=>{if(!window.confirm(t('filter.reset_confirm')))return;await command('filter.reset',{});await loadFilter();},null)},t('op.filter_reset'))));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;run(null,async()=>{await command('filter.set',{lifetime_hours:Number(filterHours.value)});await loadFilter();},'common.saved');});
  return [card('filter.title',null,form)];
 }
 async function loadFilter(){if(!filterStatus)return;const f=await command('filter.get');filterHours.value=f.lifetime_hours;filterStatus.textContent=t('filter.status',{used:(f.used_seconds/3600).toFixed(1),remaining:f.remaining_percent});}
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info(dev.model==='A1'?'btn.reset_note_a1':'btn.reset_note')),editorCard,...filterCards()),
  async show(){await load();await loadFilter();preview();}};
}

/* ---------- Night mode ---------- */
function nightPage(dev){
 const isM1=dev.model==='M1',list=h('div',{class:'stack'});
 let model=[];
 function window(cfg,i){
  const days=daysPicker('ndays'+i,cfg.days),start=h('input',{type:'time',value:hhmm(cfg.start)}),end=h('input',{type:'time',value:hhmm(cfg.end)});
  const dim=switchRow(null,isM1?'night.screen':'night.light','night.light_desc');dim.querySelector('input').checked=!!cfg.light;
  const bright={brightness:Math.round(cfg.brightness*100/255)};
  const [bOut,bRange]=slider(bright,'brightness',{min:0,max:100,step:isM1?25:1,fmt:v=>v?v+'%':t('state.off')});
  const speed={max_speed:cfg.max_speed};
  const [fOut,fRange]=slider(speed,'max_speed',{min:1});
  const fan=switchRow(null,'night.fan','night.fan_desc'),block=switchRow(null,'night.block_t','night.block_desc');
  fan.querySelector('input').checked=!!cfg.fan;block.querySelector('input').checked=!!cfg.block_start;
  const extra=isM1?[]:[fan,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.fan_max'}),fOut)),fRange,block];
  const field=h('fieldset',{},h('legend',{},t('night.period',{n:i+1})),
   h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'night.start'}),start),h('label',{class:'field'},h('span',{i18n:'night.end'}),end)),
   dim,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.light_max'}),bOut)),bRange,...extra,
   h('div',{class:'form-actions'},h('button',{type:'button',class:'btn ghost',onclick:()=>{model.splice(i,1);draw();}},icon('trash'),h('span',{i18n:'common.delete'}))));
  // One listener writes the whole window back, so no control can drift.
  const collect=()=>{
   cfg.days=days.mask();cfg.start=toMinutes(start.value);cfg.end=toMinutes(end.value);
   cfg.light=Number(dim.querySelector('input').checked);cfg.brightness=Math.round(bright.brightness*255/100);
   if(!isM1){cfg.fan=Number(fan.querySelector('input').checked);cfg.block_start=Number(block.querySelector('input').checked);cfg.max_speed=Number(speed.max_speed);}
  };
  field.addEventListener('input',collect);field.addEventListener('change',collect);
  return field;
 }
 function draw(){
  list.replaceChildren(...(model.length?model.map(window):[h('div',{class:'empty'},t('night.empty'))]));
 }
 const add=h('button',{type:'button',class:'btn'},icon('plus'),h('span',{i18n:'night.add_btn'}));
 add.onclick=()=>run(add,async()=>{if(model.length>=4)throw Error(t('common.max',{n:4}));
  model.push({days:127,fan:isM1?0:1,light:1,max_speed:30,brightness:0,block_start:1,start:1320,end:420});draw();},null);
 const save=h('button',{type:'button',class:'btn primary'},h('span',{i18n:'common.save'}));
 save.onclick=()=>run(save,async()=>{await command('night.set',{windows:model});toast(t('common.saved'));});
 return {el:h('div',{class:'stack'},pageHead('nav.sleep','night.lead'),card('night.list',null,list,
  info('night.hint'),h('div',{class:'form-actions'},add,save))),
  async show(){model=clone((await command('night.get')).windows||[]);draw();}};
}

window.automationPages=dev=>{
 const caps=(UI.caps&&UI.caps.actions)||[];
 const pages={};
 if(!caps.length||caps.includes('schedules.get'))pages.schedule=schedulePage(dev);
 if(caps.includes('buttons.set')&&dev.hasButtons)pages.buttons=buttonsPage(dev);
 if(caps.includes('night.get'))pages.night=nightPage(dev);
 return pages;
};
})();
<\/script>
<script>// Reuse only the product home renderer, not the device's router or settings UI.
(()=>{
 let dev,stopped=false,ready=false,loading=null,failures=0,lastSuccess=0;
 const disabled=new Map();
 function lock(){for(const el of document.querySelectorAll('#homePage button,#homePage input,#homePage select')){if(!disabled.has(el))disabled.set(el,el.disabled);el.disabled=true;}}
 function unlock(){for(const [el,value] of disabled)el.disabled=value;disabled.clear();}
 const feedback=document.createElement('p');feedback.className='banner info';feedback.setAttribute('role','status');feedback.textContent='正在获取设备状态…';document.body.prepend(feedback);
 async function load(){
  try{
   const raw=await command('status.get');failures=0;lastSuccess=Date.now();unlock();const s=UI.acceptStatus(raw);dev.onStatus?.(s);ready=true;feedback.hidden=true;return raw;
  }catch(e){failures++;if(ready&&(failures<3||Date.now()-lastSuccess<30000))return null;lock();feedback.hidden=false;feedback.className='banner warn';feedback.textContent=ready?'暂时无法更新，正在重试。当前显示上次状态。':e.message;if(!ready)document.querySelectorAll('#homePage .tile').forEach((tile,i)=>{tile.querySelector('.name').textContent=I18N.t('tc1.socket_n',{n:i+1});tile.querySelector('.state').textContent='等待设备状态';});}
 }
 function pollLoad(){if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
 UI.reload=async()=>{if(loading)await loading;return pollLoad();};
 UI.start=options=>{document.querySelectorAll('[data-settings-page]').forEach(page=>page.hidden=true);dev=options;UI.device=options;I18N.set('zh-CN');queueMicrotask(()=>{I18N.apply();lock();(async function poll(){await pollLoad();if(!stopped)setTimeout(poll,3000);})();});};
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#settings/"]');if(link){event.preventDefault();UI.toast('此项请在设备本地 WebUI 中设置');}});
 window.addEventListener('pagehide',()=>stopped=true);
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}#settingsPage{display:none!important}.banner{margin-top:0}@media(max-width:600px){.grid{grid-template-columns:minmax(0,1fr)}.metric .stat{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:4px}.metric .stat small{margin-left:0}}';document.head.append(style);
 new ResizeObserver(()=>{parent.postMessage({type:'device-height',height:Math.ceil(document.body.getBoundingClientRect().height)+8},parent.location.origin);}).observe(document.body);
})();

/* M1 air quality monitor page. The monitor only reports readings and answers
 * link requests from an A1; linkage rules live on the A1. */
(()=>{
'use strict';
const {t}=I18N;
const {$,h,icon,toast,run,confirm,summary,card,info,pageHead,seg,prettyMac,normalizeMac,clone}=UI;
const METRICS=['pm25','formaldehyde','temperature','humidity'];
const STALE_MS=15000;
let binding={response_ids:[]},bindingStatus={peers:[]};

/* ---------- Home: readings ---------- */
const tiles={};
$('metrics').append(...METRICS.map(k=>{
 const value=h('span',{class:'num'}),badge=h('span',{class:'badge'}),scale=h('div');
 tiles[k]={value,badge,scale};
 return h('section',{class:'card metric'},h('div',{class:'row between'},h('span',{class:'label','data-i18n':'m.'+k},t('m.'+k)),badge),
  h('div',{class:'stat'},value,h('small',{},UI.AIR[k].unit)),scale);
}));
const screen=seg([[0,'state.off'],[1,'1'],[2,'2'],[3,'3'],[4,'4']],v=>run(null,()=>UI.control('display.set',{brightness:v*25},{brightness_requested:v}),'toast.accepted'),{full:true,aria:t('m1.screen')});
screen.dataset.control='brightness';
$('screenSeg').replaceWith(screen);
const RANK={ok:0,warn:1,bad:2};
function renderHome(s){
 const stale=!s.sensor_valid||s.age_ms>STALE_MS;
 const fmt={pm25:v=>String(Math.round(v)),formaldehyde:v=>v.toFixed(3),temperature:v=>v.toFixed(1),humidity:v=>v.toFixed(0)};
 const grades={};
 for(const k of METRICS){const g=UI.grade(k,s[k]);grades[k]=g;const el=tiles[k];
  el.value.textContent=s.sensor_received?fmt[k](s[k]):'—';
  el.badge.className='badge '+(stale?'':g.cls);el.badge.textContent=t(g.key);
  el.scale.replaceChildren(UI.airScale(k,s[k]));}
 // Overall verdict comes from the pollutants; comfort only adds a remark.
 const worst=['pm25','formaldehyde'].reduce((a,k)=>RANK[grades[k].cls]>RANK[grades[a].cls]?k:a,'pm25');
 const v=$('verdict');v.dataset.level=stale?'':grades[worst].cls;
 const both=g=>grades[g].cls==='ok';
 $('overall').textContent=stale?t('m1.no_data'):t(both('pm25')&&both('formaldehyde')?(grades.pm25.key.endsWith('excellent')?'m1.v_excellent':'m1.v_good'):grades[worst].cls==='warn'?'m1.v_fair':'m1.v_poor');
 const why=METRICS.filter(k=>grades[k].cls!=='ok').map(k=>t('m.'+k)+' '+t(grades[k].key));
 $('overallWhy').textContent=stale?t('m1.stale_hint'):why.length?why.join(' · '):t('m1.all_ok');
 $('freshDot').className='dot '+(stale?'bad':'ok live');
 $('freshText').textContent=stale?t('m1.stale'):t('m1.updated',{n:Math.max(0,Math.round(s.age_ms/1000))});
 if(document.activeElement&&document.activeElement.parentNode!==screen)screen.set(s.brightness_requested);
}
function renderPeers(){
 const ids=binding.response_ids||[],peers=bindingStatus.peers||[];
 const ready=peers.filter(p=>p.session_ready).length;
 const head=h('div',{class:'card-head'},
  h('div',{},h('h2',{i18n:'m1.linked'}),h('p',{class:'help',i18n:'m1.linked_desc'})),
  h('span',{class:'badge '+(ready?'ok':'')},ready+' / '+ids.length));
 if(!ids.length){
  $('peerCard').replaceChildren(head,h('div',{class:'empty'},h('p',{},t('m1.linked_empty')),
   h('a',{class:'btn',href:'#settings/binding',style:'margin-top:12px'},icon('link'),h('span',{},t('m1.allow_btn')))));
  return;
 }
 const rows=ids.map(id=>{
  const a1=id.split(':')[0],p=peers.find(x=>x.mac===a1)||{};
  return h('div',{class:'item'},icon('fan'),
   h('div',{class:'grow'},h('b',{class:'num'},'A1 · '+prettyMac(a1)),h('span',{},p.ip||'—')),
   h('span',{class:'badge '+(p.session_ready?'ok':'warn')},t(p.session_ready?'m1.session_ok':'m1.session_wait')));
 });
 $('peerCard').replaceChildren(head,h('div',{class:'list'},rows));
}


/* ---------- Settings: linkage permission ---------- */
async function showBinding(){
 const page=document.querySelector('[data-settings-page="binding"]');
 const [cfg,status]=await Promise.all([api('/binding/config'),api('/binding/status').catch(()=>({peers:[]}))]);
 binding=cfg;bindingStatus=status;
 const save=()=>api('/binding/config',{response_ids:binding.response_ids}).then(showBinding);
 const own=String((UI.state&&UI.state.device_id)||'').toLowerCase();
 const input=h('input',{placeholder:'b0f893303134:'+(own||'b0f8932864b6'),maxLength:25,autocomplete:'off',spellcheck:false});
 const ids=(binding.response_ids||[]).slice();
 const add=h('form',{class:'subcard stack'},h('h3',{i18n:'m1.allow_add'}),
  h('label',{class:'field'},h('span',{i18n:'m1.pair_id'}),
   h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit',disabled:ids.length>=8},icon('plus'),h('span',{},t('common.add'))))),
  h('p',{class:'help',i18n:'m1.pair_help'}));
 UI.onSubmit(add,()=>{
  const parts=input.value.trim().split(':'),a1=normalizeMac(parts[0]||''),m1=normalizeMac(parts[1]||'');
  if(!a1||!m1)throw Error(t('m1.pair_bad'));
  if(own&&m1!==own)throw Error(t('m1.pair_other'));
  const id=a1+':'+m1;if(ids.includes(id))throw Error(t('bind.dup'));
  if(ids.length>=8)throw Error(t('common.max',{n:8}));
  binding.response_ids=ids.concat([id]);return save();},'bind.added');
 page.replaceChildren(pageHead('nav.permission','m1.perm_lead'),
  h('section',{class:'card'},h('div',{class:'card-head'},h('h2',{i18n:'m1.allowed'}),h('span',{class:'badge'},ids.length+' / 8')),
   ids.length?h('div',{class:'list'},ids.map((id,i)=>{const a1=id.split(':')[0],p=(bindingStatus.peers||[]).find(x=>x.mac===a1)||{};
    return h('div',{class:'item'},icon('fan'),h('div',{class:'grow'},h('b',{class:'num'},'A1 · '+prettyMac(a1)),h('span',{class:'num'},id)),
     h('span',{class:'badge '+(p.session_ready?'ok':'warn')},t(p.session_ready?'m1.session_ok':'m1.session_wait')),
     h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:ev=>{
      const rest=ids.slice();rest.splice(i,1);
      run(ev.currentTarget,async()=>{await api('/binding/config',{response_ids:rest});await showBinding();},'common.deleted');}},icon('trash')));}))
   :h('div',{class:'empty'},t('m1.allowed_empty')),add,info('m1.perm_hint')));
}

/* ---------- Boot ---------- */
const clock=UI.clockCard({
 load:async()=>UI.state||await api('/status'),
 save:async v=>{
  const s=UI.state;
  if(v.timezone_minutes!==s.timezone_minutes)await api('/time/config',{timezone_minutes:v.timezone_minutes});
  if(v.ntp_host!==s.ntp_host)await api('/ntp/config',{ntp_host:v.ntp_host});
 },
 status:s=>[['clock.synced',t('s.'+(s.ntp_status||'syncing')),s.ntp_synced?'ok':'warn'],
  ['clock.tz',UI.tzLabel(s.timezone_minutes||0)],['clock.ntp',s.ntp_host||'—'],
  ['clock.last',s.ntp_last_success?new Date(s.ntp_last_success*1000).toLocaleString(I18N.lang):'—']]});
$('clockCard').replaceWith(clock.el);

UI.start({
 model:'M1',kindKey:'kind.m1',icon:'air',mqttHostMax:127,factoryReset:true,
 otaName:'phicomm_m1.ota.bin.signed',haHintKey:'mqtt.ha_m1',otaHintKey:'fw.hint_m1',buttonHintKey:'sys.hint_m1',
 scheduleLead:'sch.lead_a1',interval:1000,
 groups:[['grp.network',['network','mqtt']],['grp.device',['device']],['grp.auto',['binding','schedule','night']],['grp.system',['firmware','diagnostics','logs','maintenance']]],
 nav:{network:'nav.wifi',mqtt:'nav.mqtt',device:'nav.general',binding:'nav.permission',schedule:'nav.schedule',night:'nav.sleep',firmware:'nav.firmware',diagnostics:'nav.diagnostics',logs:'nav.logs',maintenance:'nav.maintenance'},
 pages:{device:{show:clock.show,status:clock.status},binding:{show:showBinding}},
 diagGroups:[['diag.g_sensor',['uart_ready','sensor_valid','sensor_received','age_ms','temperature','humidity','formaldehyde','pm25','rx_frames','unknown_frames','uart_errors','discarded_bytes','last_frame']],
  ['diag.g_clock',['timezone_minutes','ntp_host','ntp_status','ntp_server','ntp_synced','ntp_screen_queued','ntp_last_success','ntp_next_seconds']],
  ['diag.g_screen',['brightness_requested']],
  ['diag.g_ota_img',['ota_signature_verified','ota_image_verified','ota_key_id','ota_image_length','ota_release_counter','ota_version']]],
 healthChecks:s=>[['diag.c_sensor',s.uart_ready&&s.sensor_valid?'ok':'bad',s.uart_errors?t('diag.errors',{n:s.uart_errors}):t(s.sensor_valid?'state.ok':'m1.no_data')],
  ['diag.c_clock',s.ntp_synced?'ok':'warn',t('s.'+(s.ntp_status||'syncing'))]],
 onStatus:renderHome
});
I18N.onChange(()=>{renderPeers();const p=document.querySelector('[data-settings-page="binding"]');if(p&&!p.hidden)showBinding();});
// The linked list is small and changes rarely; refresh it with the status.
(async function poll(){try{bindingStatus=await api('/binding/status');renderPeers();}catch{}setTimeout(poll,4000);})();
api('/binding/config').then(c=>{binding=c;renderPeers();}).catch(e=>toast(e.message,true));
})();
<\/script>
</body>
</html>
`},mu=["srcdoc","title"],gu={__name:"DeviceHome",props:{device:Object},emits:["command","settings"],setup(u,{expose:m,emit:l}){const a=u,c=l,n=Ne(),t=Ne(700);function r(e){if(e.source!==n.value?.contentWindow||e.origin!==location.origin)return;if(e.data?.type==="device-height"){t.value=Math.max(200,Math.min(12e3,Number(e.data.height)||700));return}if(e.data?.type==="device-settings"){c("settings");return}if(e.data?.type!=="device-command")return;const{id:i,request:s}=e.data,f=e.source;c("command",s,h=>{n.value?.contentWindow===f&&f.postMessage({type:"device-result",id:i,reply:JSON.parse(JSON.stringify(h))},location.origin)})}return m({refresh:()=>n.value?.contentWindow?.UI?.reload()}),os(()=>window.addEventListener("message",r)),Jn(()=>window.removeEventListener("message",r)),(e,i)=>(Me(),Ce("iframe",{ref_key:"frame",ref:n,class:"device-home",style:vl({height:t.value+"px"}),srcdoc:Ke(fu)[a.device.model],title:`${a.device.model.toUpperCase()} 首页`,sandbox:"allow-scripts allow-same-origin allow-modals allow-forms"},null,12,mu))}},bu=Xt(gu,[["__scopeId","data-v-f66fe628"]]);(()=>{const l=s=>new TextEncoder().encode(s).length;function a(s){const f=s.toLowerCase().replace(/^\[|\]$/g,"");if(f==="localhost"||f==="::1")return!0;if(f.includes(":"))return/^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(f);if(!/^\d+\.\d+\.\d+\.\d+$/.test(f))return!1;const h=f.split(".").map(Number);return h.some(b=>b>255)?!1:h[0]===10||h[0]===127||h[0]===172&&h[1]>=16&&h[1]<=31||h[0]===192&&h[1]===168||h[0]===169&&h[1]===254}function c(s){if(typeof s!="string"||!s.trim()||s.length>256)throw Error("device");const f=s.trim(),h=new URL(f.includes("://")?f:"http://"+f);if(!["http:","https:"].includes(h.protocol)||!a(h.hostname)||h.username||h.password||h.search||h.hash||h.pathname!=="/")throw Error("device");return h}function n(s){const f=new URL(s);if(s!==f.origin||!(f.protocol==="https:"||f.protocol==="http:"&&["localhost","127.0.0.1","[::1]"].includes(f.hostname)))throw Error("origin");return f.origin}function t(){const s=new Uint8Array(32);return crypto.getRandomValues(s),Array.from(s,f=>f.toString(16).padStart(2,"0")).join("")}function r(s,f=Date.now()){if(!s.startsWith("#iotcloud-import="))return null;if(s.length>2048)throw Error("ticket");const h=new URLSearchParams(s.slice(1));if([...h.keys()].sort().join(",")!=="expires,host,iotcloud-import,origin,port,user")throw Error("ticket");const b=h.get("iotcloud-import"),p=Number(h.get("expires")),o=n(h.get("origin"));if(!/^[a-f0-9]{64}$/.test(b)||!Number.isSafeInteger(p)||p<=f||p>f+12e4)throw Error("ticket");const v=e({v:1,host:h.get("host"),port:Number(h.get("port")),user:h.get("user"),password:"",protocol:"tmcp",expires:p},f);return{id:b,expires:p,origin:o,host:v.host,port:v.port,user:v.user}}function e(s,f=Date.now()){if(!s||typeof s!="object"||Array.isArray(s)||Object.keys(s).sort().join(",")!=="expires,host,password,port,protocol,user,v")throw Error("config");const{v:h,host:b,port:p,user:o,password:v,protocol:w,expires:g}=s;if(h!==1||w!=="tmcp"||typeof b!="string"||!b||l(b)>127||!/^([a-zA-Z0-9.-]+|\[[a-fA-F0-9:]+\])$/.test(b)||b.startsWith(".")||b.endsWith(".")||typeof o!="string"||l(o)>63||/[\x00-\x1f\x7f]/.test(o)||typeof v!="string"||l(v)>256||/[\x00-\x1f\x7f]/.test(v)||!Number.isInteger(p)||p<1||p>65535||!Number.isSafeInteger(g)||g<=f||g>f+12e4)throw Error("config");return{v:h,host:b,port:p,user:o,password:v,protocol:w,expires:g}}function i(s,{source:f,origin:h,id:b,expires:p},o){const v=s.data;return Date.now()<p&&s.source===f&&s.origin===h&&!!v&&typeof v=="object"&&v.type===o&&v.id===b}globalThis.IotProvision=Object.freeze({VERSION:1,TTL:12e4,deviceURL:c,platformOrigin:n,nonce:t,readTicket:r,config:e,packet:i})})();const vu={class:"card provision-device","aria-label":"配置本地 IoT 设备"},yu={key:0,class:"help"},wu={style:{"overflow-wrap":"anywhere"}},ku={key:0},_u=["aria-expanded"],xu=["disabled"],Su={class:"fields"},Tu=["disabled"],Au=["disabled"],Eu={class:"fields"},Iu=["disabled"],Mu=["disabled"],Cu={class:"trust-device"},Pu=["disabled"],Ou={class:"form-actions"},Nu=["disabled"],Ru={key:2,role:"status"},Uu={key:3,role:"alert"},Lu={__name:"ProvisionDevice",props:{connection:Object,broker:Object},setup(u){const m=u,l=globalThis.IotProvision,a=tt(()=>{if(m.broker?.host)return m.broker.host;try{return new URL(m.connection.host).hostname}catch{return""}}),c=Ne(!1),n=Ne(""),t=Ne(""),r=Ne(""),e=Ne(""),i=Ne(""),s=Ne(!1),f=Ne(""),h=Ne(""),b=Ne(!1);let p=null;function o(){p?.(),p=null,i.value="",b.value=!1}function v(){if(o(),c.value=!c.value,f.value="",h.value="",s.value=!1,c.value){let k="";try{k=new URL(m.connection.host).hostname}catch{}t.value=m.broker?.host||k,r.value=m.broker?.port||"",e.value=m.connection.username||"",i.value=m.connection.password||""}}ln(()=>[m.connection.host,m.connection.username,m.connection.password],o);function w(){g(),h.value="",f.value="";let k,_;try{l.platformOrigin(location.origin),k=l.deviceURL(n.value),_=l.config({v:1,host:t.value.trim(),port:Number(r.value),user:e.value,password:i.value,protocol:"tmcp",expires:Date.now()+l.TTL})}catch{h.value="请填写有效的局域网设备 IP、Broker 主机名、端口和凭据。平台需使用 HTTPS。";return}if(!s.value){h.value="请先确认设备地址和局域网可信。";return}const y=l.nonce(),T=_.expires;k.hash=new URLSearchParams({"iotcloud-import":y,origin:location.origin,expires:String(T),host:_.host,port:String(_.port),user:_.user}).toString();const S=window.open("about:blank","_blank");if(!S){h.value="浏览器阻止了新窗口，请允许后重试。";return}b.value=!0,f.value=`已打开 ${k.origin}。请在设备窗口确认来源并点击“接收并预填”。两分钟内有效。`;let E=!1;const P=()=>{window.removeEventListener("message",B),window.removeEventListener("pagehide",O),clearTimeout(I),clearInterval(z),_=null,i.value="",b.value=!1},O=()=>{P(),f.value="传递已取消，请重新发起。"},B=F=>{l.packet(F,{source:S,origin:k.origin,id:y,expires:T},"iotcloud.provision.ready")&&!E?(E=!0,S.postMessage({type:"iotcloud.provision.config",id:y,password:_.password},k.origin),_=null,f.value="已发送到指定设备窗口，等待设备前端确认接收。"):E&&l.packet(F,{source:S,origin:k.origin,id:y,expires:T},"iotcloud.provision.received")&&(P(),p=null,f.value="设备前端已预填。请在设备窗口检查并保存；此处不代表设备已保存或联网。")},I=setTimeout(()=>{O(),p=null},Math.max(0,T-Date.now())),z=setInterval(()=>{S.closed&&(O(),p=null)},1e3);p=P,window.addEventListener("message",B),window.addEventListener("pagehide",O),S.location.replace(k.href)}function g(){p?.(),p=null,b.value=!1}return Jn(o),(k,_)=>(Me(),Ce("section",vu,[_[16]||(_[16]=R("h2",null,"配置本地 IoT 设备",-1)),_[17]||(_[17]=R("p",{class:"help"},"在设备本地网页的 MQTT 设置中填写 Broker 主机名和设备接入端口，不要填写本站域名或 WebSocket 地址。",-1)),a.value?(Me(),Ce("p",yu,[_[7]||(_[7]=Ue("设备 MQTT Host：",-1)),R("strong",wu,Oe(a.value),1),u.broker?.port?(Me(),Ce("span",ku," · TCP 端口："+Oe(u.broker.port),1)):He("",!0)])):He("",!0),R("button",{type:"button",class:"btn","aria-expanded":c.value,onClick:v},Oe(c.value?"收起":"填写到本地设备"),9,_u),c.value?(Me(),Ce("form",{key:1,class:"stack",onSubmit:Yt(w,["prevent"])},[R("label",null,[_[8]||(_[8]=Ue("设备 IP 或本地网址",-1)),Ge(R("input",{"onUpdate:modelValue":_[0]||(_[0]=y=>n.value=y),required:"",placeholder:"192.168.1.100 或 http://192.168.1.100/",disabled:b.value,autocomplete:"off"},null,8,xu),[[ot,n.value]])]),R("div",Su,[R("label",null,[_[9]||(_[9]=Ue("设备 MQTT Host",-1)),Ge(R("input",{"onUpdate:modelValue":_[1]||(_[1]=y=>t.value=y),required:"",maxlength:"127",disabled:b.value,placeholder:"mqtt.example.com"},null,8,Tu),[[ot,t.value]])]),R("label",null,[_[10]||(_[10]=Ue("设备 MQTT 端口",-1)),Ge(R("input",{"onUpdate:modelValue":_[2]||(_[2]=y=>r.value=y),type:"number",min:"1",max:"65535",required:"",disabled:b.value,placeholder:"例如 1883（请确认）"},null,8,Au),[[ot,r.value]])])]),R("div",Eu,[R("label",null,[_[11]||(_[11]=Ue("设备 MQTT 用户名",-1)),Ge(R("input",{"onUpdate:modelValue":_[3]||(_[3]=y=>e.value=y),maxlength:"63",disabled:b.value,autocomplete:"off"},null,8,Iu),[[ot,e.value]])]),R("label",null,[_[12]||(_[12]=Ue("设备 MQTT 密码",-1)),Ge(R("input",{"onUpdate:modelValue":_[4]||(_[4]=y=>i.value=y),type:"password",maxlength:"256",disabled:b.value,autocomplete:"off"},null,8,Mu),[[ot,i.value]])])]),_[14]||(_[14]=R("p",{class:"help"},"仅配置 TMCP。设备需要支持本功能的新版 WebUI，并可能要求设备网页密码。端口是设备使用的 MQTT TCP 端口，不是网页的 WSS 端口。",-1)),R("label",Cu,[Ge(R("input",{"onUpdate:modelValue":_[5]||(_[5]=y=>s.value=y),type:"checkbox",required:"",disabled:b.value},null,8,Pu),[[yl,s.value]]),_[13]||(_[13]=Ue("我已核对设备 IP，仅在可信局域网内发送。HTTP 设备页面不能防止网络窃听或篡改。",-1))]),_[15]||(_[15]=R("p",{class:"help"},"链接只含 Broker 地址、端口、用户名和一次性握手信息，不含密码。接收前会再次确认来源，配置只预填到设备前端，检查并保存后才生效。",-1)),R("div",Ou,[R("button",{class:"btn primary",disabled:b.value},"打开设备并填写",8,Nu),b.value?(Me(),Ce("button",{key:0,type:"button",class:"btn",onClick:_[6]||(_[6]=y=>{o(),f.value="传递已取消"})},"取消传递")):He("",!0)])],32)):He("",!0),f.value?(Me(),Ce("p",Ru,Oe(f.value),1)):He("",!0),h.value?(Me(),Ce("p",Uu,Oe(h.value),1)):He("",!0)]))}},jo=Xt(Lu,[["__scopeId","data-v-900bafb0"]]),qu={class:"settings-heading"},ju={class:"settings-layout"},Bu={class:"settings-sidebar"},Fu={class:"settings-navigation","aria-label":"设置分类"},Du=["aria-current","onClick"],Wu={class:"settings-context"},zu={class:"settings-content"},Hu={class:"card settings-card"},$u={class:"settings-card-heading"},Ku={class:"settings-icon"},Vu={key:0,class:"settings-block"},Qu={class:"broker-options",role:"radiogroup","aria-label":"连接模式"},Gu=["aria-checked","disabled"],Yu=["aria-checked","disabled"],Ju={class:"settings-block"},Xu={class:"field-title"},Zu={class:"help"},ep=["disabled"],tp={class:"settings-block"},np={class:"field-title"},rp={class:"help"},ip={class:"settings-fields"},sp=["disabled"],op={class:"settings-password"},ap=["disabled","type"],lp=["aria-label"],cp={class:"settings-note help"},dp={class:"settings-actions"},up={class:"help"},pp=["disabled"],hp={class:"settings-tip"},fp={class:"card settings-card"},mp={class:"settings-card-heading"},gp={class:"settings-icon"},bp={class:"help"},vp={class:"badge"},yp={class:"device-toolbar"},wp={class:"help"},kp=["aria-expanded"],_p={class:"settings-fields"},xp={key:0},Sp={key:1,class:"protocol-note"},Tp={key:1,class:"managed-device-list"},Ap={class:"device-row-actions"},Ep=["aria-label","onClick"],Ip={class:"device-details"},Mp=["aria-label","onClick"],Cp={key:2,class:"settings-empty"},Pp={class:"settings-footnote"},Op={class:"card settings-card"},Np={class:"settings-block settings-fields"},Rp={class:"card settings-card"},Up={class:"settings-card-heading"},Lp={class:"settings-icon"},qp={class:"account-summary"},jp={class:"account-avatar"},Bp={class:"help"},Fp={class:"card settings-card"},Dp={class:"settings-card-heading"},Wp={class:"settings-icon"},zp={class:"settings-block"},Hp={class:"settings-fields"},$p={class:"settings-icon"},Kp={__name:"PlatformSettings",props:{initialSection:{type:String,default:"connection"},connection:Object,deviceBroker:Object,connected:Boolean,busy:Boolean,thirdParty:Boolean,devices:Array,states:Object,addForm:Object,deviceName:Function,now:Number},emits:["mode-change","connect","disconnect","add","remove","password","mqtt-password","home","refresh","rename"],setup(u,{emit:m}){const l=u,a=m,c=Ne(l.initialSection),n=Ne(!1),t=Ne(!1),r=Ne(""),e=Ne(""),i=Ne(""),s=Ne(""),f=tt(()=>[{id:"connection",title:"MQTT 连接",description:"服务器与连接凭据",icon:"cloud"},{id:"devices",title:"设备管理",description:"设备列表与添加",icon:"plug"},...ze.username?[{id:"account",title:"账号安全",description:"账号信息与密码",icon:"shield"}]:[]]),h=tt(()=>l.devices.filter(p=>l.connected&&l.states[qe(p)]?.available===!0).length);function b(p){return l.connected?l.states[qe(p)]?.available===!0?"在线":l.states[qe(p)]?.available===!1?"离线":"状态未知":"未连接"}return(p,o)=>{const v=Bo("RouterLink");return Me(),Ce(ft,null,[R("div",qu,[o[23]||(o[23]=R("div",null,[R("p",{class:"eyebrow"},"偏好与管理"),R("h1",null,"设置"),R("p",{class:"help"},"管理连接、设备与账号，让每一台设备保持就绪。")],-1)),R("button",{class:"btn",onClick:o[0]||(o[0]=w=>a("home"))},[o[22]||(o[22]=Ue("返回首页",-1)),Le(je,{name:"arrow",size:16})])]),R("div",ju,[R("aside",Bu,[R("nav",Fu,[(Me(!0),Ce(ft,null,mn(f.value,w=>(Me(),Ce("button",{key:w.id,"aria-current":c.value===w.id?"page":void 0,onClick:g=>c.value=w.id},[Le(je,{name:w.icon},null,8,["name"]),R("span",null,[R("b",null,Oe(w.title),1),R("small",null,Oe(w.description),1)]),Le(je,{class:"nav-arrow",name:"arrow",size:15})],8,Du))),128))]),R("div",Wu,[R("span",{class:Bt(["dot",u.connected?"ok":"warn"])},null,2),R("span",null,[Ue(Oe(u.connected?"连接已就绪":"尚未连接"),1),R("small",null,Oe(u.devices.length)+" 台设备 · "+Oe(h.value)+" 台在线",1)])])]),R("div",zu,[c.value==="connection"?(Me(),Ce(ft,{key:0},[He("",!0),Le(jo,{connection:u.connection,broker:u.deviceBroker},null,8,["connection","broker"]),R("section",Hu,[R("header",$u,[R("span",Ku,[Le(je,{name:"cloud",size:23})]),o[25]||(o[25]=R("div",null,[R("h2",null,"MQTT 连接"),R("p",{class:"help"},"选择服务器，建立设备与平台之间的连接。")],-1)),R("span",{class:Bt(["badge",u.connected?"ok":""])},Oe(u.busy?"连接中":u.connected?"已连接":"未连接"),3)]),Ke(ze).username?(Me(),Ce("div",Vu,[o[30]||(o[30]=R("div",{class:"field-title"},[R("h3",null,"连接方式"),R("p",{class:"help"},"使用平台服务，或连接自己的 MQTT 服务器。")],-1)),R("div",Qu,[R("button",{type:"button",role:"radio","aria-checked":!u.thirdParty,disabled:u.busy,onClick:o[1]||(o[1]=w=>!u.thirdParty||a("mode-change",!1))},[Le(je,{name:"cloud"}),o[26]||(o[26]=R("span",null,[R("b",null,"平台 Broker"),R("small",null,"使用当前账号连接")],-1)),o[27]||(o[27]=R("span",{class:"choice-dot"},null,-1))],8,Gu),R("button",{type:"button",role:"radio","aria-checked":u.thirdParty,disabled:u.busy,onClick:o[2]||(o[2]=w=>u.thirdParty||a("mode-change",!0))},[Le(je,{name:"settings"}),o[28]||(o[28]=R("span",null,[R("b",null,"第三方 Broker"),R("small",null,"使用自己的服务器")],-1)),o[29]||(o[29]=R("span",{class:"choice-dot"},null,-1))],8,Yu)])])):He("",!0),R("form",{onSubmit:o[8]||(o[8]=Yt(w=>a("connect"),["prevent"]))},[R("div",Ju,[R("div",Xu,[o[31]||(o[31]=R("h3",null,"服务器",-1)),R("p",Zu,Oe(u.thirdParty?"服务器需要支持 MQTT over WebSocket。":"平台地址与用户名由当前账号自动配置。"),1)]),R("label",null,[o[32]||(o[32]=Ue("WebSocket 地址",-1)),Ge(R("input",{"onUpdate:modelValue":o[3]||(o[3]=w=>u.connection.host=w),disabled:u.connected||!u.thirdParty,required:"",placeholder:"wss://mqtt.example.com/mqtt",spellcheck:"false"},null,8,ep),[[ot,u.connection.host]]),o[33]||(o[33]=R("small",{class:"help"},"支持 ws:// 和 wss:// 地址",-1))])]),R("div",tp,[R("div",np,[o[34]||(o[34]=R("h3",null,"连接凭据",-1)),R("p",rp,Oe(u.thirdParty?"填写服务器分配的用户名与密码。":"默认使用注册密码，可在账号安全中独立修改。"),1)]),R("div",ip,[R("label",null,[o[35]||(o[35]=Ue("MQTT 用户名",-1)),Ge(R("input",{"onUpdate:modelValue":o[4]||(o[4]=w=>u.connection.username=w),disabled:u.connected||!u.thirdParty,autocomplete:"username",placeholder:"MQTT 用户名"},null,8,sp),[[ot,u.connection.username]])]),R("label",null,[o[36]||(o[36]=Ue("MQTT 密码",-1)),R("span",op,[Ge(R("input",{"onUpdate:modelValue":o[5]||(o[5]=w=>u.connection.password=w),disabled:u.connected,type:n.value?"text":"password",autocomplete:"current-password",placeholder:"输入连接密码"},null,8,ap),[[wl,u.connection.password]]),R("button",{class:"btn ghost icon",type:"button","aria-label":n.value?"隐藏 MQTT 密码":"显示 MQTT 密码",onClick:o[6]||(o[6]=w=>n.value=!n.value)},[Le(je,{name:"eye",size:18})],8,lp)])])]),R("p",cp,[Le(je,{name:"shield",size:16}),o[37]||(o[37]=Ue("MQTT 密码保存在当前浏览器，用于自动连接；退出登录即清除。",-1))])]),R("footer",dp,[R("span",up,[R("span",{class:Bt(["dot",u.connected?"ok":"warn"])},null,2),Ue(Oe(u.connected?"默认自动连接；手动断开后将保持断开":u.busy?"正在连接服务器…":"填写完成后连接服务器"),1)]),u.connected?(Me(),Ce("button",{key:0,class:"btn",type:"button",onClick:o[7]||(o[7]=w=>a("disconnect"))},"断开连接")):(Me(),Ce("button",{key:1,class:"btn primary",disabled:u.busy},[Le(je,{name:"cloud",size:17}),Ue(Oe(u.busy?"连接中…":"连接服务器"),1)],8,pp))])],32)]),R("div",hp,[Le(je,{name:"signal",size:20}),R("div",null,[o[39]||(o[39]=R("b",null,"连接之后",-1)),o[40]||(o[40]=R("p",null,"使用相同 MQTT 账号的 TMCP 设备会自动出现在设备列表中。也可以前往设备管理手动添加。",-1)),R("button",{class:"btn ghost",onClick:o[9]||(o[9]=w=>c.value="devices")},[o[38]||(o[38]=Ue("查看设备管理",-1)),Le(je,{name:"arrow",size:15})])])])],64)):c.value==="devices"?(Me(),Ce(ft,{key:1},[Le(jo,{connection:u.connection,broker:u.deviceBroker},null,8,["connection","broker"]),R("section",fp,[R("header",mp,[R("span",gp,[Le(je,{name:"plug",size:23})]),R("div",null,[o[41]||(o[41]=R("h2",null,"设备管理",-1)),R("p",bp,"在这里查看和管理当前"+Oe(u.thirdParty?"浏览器":"账号")+"的设备。",1)]),R("span",vp,Oe(u.devices.length)+" 台",1)]),R("div",yp,[R("span",wp,Oe(h.value)+" 台在线 · "+Oe(u.devices.length)+" 台设备",1),R("div",null,[R("button",{class:"btn",onClick:o[10]||(o[10]=w=>a("refresh")),"aria-label":"刷新设备列表"},"刷新"),R("button",{class:"btn primary","aria-expanded":t.value,onClick:o[11]||(o[11]=w=>t.value=!t.value)},[Le(je,{name:t.value?"close":"plus",size:17},null,8,["name"]),Ue(Oe(t.value?"取消添加":"添加设备"),1)],8,kp)])]),t.value?(Me(),Ce("form",{key:0,class:"add-device-panel",onSubmit:o[15]||(o[15]=Yt(w=>a("add"),["prevent"]))},[o[49]||(o[49]=R("h3",null,"添加设备",-1)),R("label",null,[o[42]||(o[42]=Ue("MAC 地址",-1)),Ge(R("input",{"onUpdate:modelValue":o[12]||(o[12]=w=>u.addForm.mac=w),"aria-label":"MAC 地址",required:"",placeholder:"AABBCCDDEEFF",maxlength:"17",spellcheck:"false"},null,512),[[ot,u.addForm.mac]]),o[43]||(o[43]=R("small",{class:"help"},"填写设备的 12 位 MAC 地址，也支持冒号或短横线分隔。",-1))]),R("div",_p,[R("label",null,[o[45]||(o[45]=Ue("型号",-1)),Ge(R("select",{"aria-label":"型号","onUpdate:modelValue":o[13]||(o[13]=w=>u.addForm.model=w)},[...o[44]||(o[44]=[R("option",{value:"tc1"},"TC1 智能插排",-1),R("option",{value:"m1"},"M1 空气质量检测器",-1),R("option",{value:"a1"},"A1 空气净化器",-1)])],512),[[_s,u.addForm.model]])]),u.addForm.model==="tc1"?(Me(),Ce("label",xp,[o[47]||(o[47]=Ue("协议",-1)),Ge(R("select",{"onUpdate:modelValue":o[14]||(o[14]=w=>u.addForm.version=w)},[...o[46]||(o[46]=[R("option",{value:"v2"},"TMCP",-1),R("option",{value:"v1"},"Legacy",-1)])],512),[[_s,u.addForm.version]])])):(Me(),Ce("div",Sp,[...o[48]||(o[48]=[R("span",{class:"help"},"协议",-1),R("span",{class:"badge"},"TMCP",-1)])]))]),o[50]||(o[50]=R("div",{class:"add-device-actions"},[R("button",{class:"btn primary"},"确认添加")],-1))],32)):He("",!0),u.devices.length?(Me(),Ce("div",Tp,[(Me(!0),Ce(ft,null,mn(u.devices,w=>(Me(),Ce("div",{key:Ke(qe)(w),class:"managed-device"},[Le(ks,{device:w,state:u.states[Ke(qe)(w)]||{},name:u.deviceName(w),connected:u.connected,now:u.now},null,8,["device","state","name","connected","now"]),R("div",Ap,[R("button",{class:"btn ghost","aria-label":`修改 ${u.deviceName(w)} 的名称`,onClick:g=>a("rename",w)},[Le(je,{name:"edit",size:15}),o[51]||(o[51]=Ue("改名",-1))],8,Ep),R("details",Ip,[o[55]||(o[55]=R("summary",null,"详情",-1)),R("dl",null,[R("div",null,[o[52]||(o[52]=R("dt",null,"MAC 地址",-1)),R("dd",null,Oe(w.mac),1)]),R("div",null,[o[53]||(o[53]=R("dt",null,"连接协议",-1)),R("dd",null,Oe(w.version==="v1"?"Legacy":"TMCP"),1)]),R("div",null,[o[54]||(o[54]=R("dt",null,"状态",-1)),R("dd",null,Oe(b(w)),1)])]),R("button",{class:"btn danger","aria-label":`移除 ${u.deviceName(w)}`,onClick:g=>a("remove",w)},"移除此设备",8,Mp)])])]))),128))])):(Me(),Ce("div",Cp,[Le(je,{name:"plug",size:32}),o[56]||(o[56]=R("h3",null,"还没有设备",-1)),o[57]||(o[57]=R("p",{class:"help"},"连接后等待设备自动上线，或点击上方按钮手动添加。",-1))])),R("footer",Pp,[Le(je,{name:"signal",size:17}),o[58]||(o[58]=R("span",null,"TMCP 设备可自动发现；Legacy 仅支持 TC1。移除设备前会再次确认。",-1))])])],64)):(Me(),Ce(ft,{key:2},[R("section",Op,[o[62]||(o[62]=R("header",{class:"settings-card-heading"},[R("div",null,[R("h2",null,"修改 MQTT 密码"),R("p",{class:"help"},"默认使用注册密码。修改后请更新所有设备的 MQTT 密码，网站登录密码保持不变。")])],-1)),R("form",{onSubmit:o[18]||(o[18]=Yt(w=>a("mqtt-password",{current:i.value,password:s.value}),["prevent"]))},[R("div",Np,[R("label",null,[o[59]||(o[59]=Ue("网站当前密码",-1)),Ge(R("input",{"onUpdate:modelValue":o[16]||(o[16]=w=>i.value=w),type:"password",autocomplete:"current-password",required:""},null,512),[[ot,i.value]])]),R("label",null,[o[60]||(o[60]=Ue("新 MQTT 密码",-1)),Ge(R("input",{"onUpdate:modelValue":o[17]||(o[17]=w=>s.value=w),type:"password",autocomplete:"new-password",minlength:"6",required:""},null,512),[[ot,s.value]])])]),o[61]||(o[61]=R("footer",{class:"settings-actions"},[R("button",{class:"btn primary"},"保存 MQTT 密码")],-1))],32)]),R("section",Rp,[R("header",Up,[R("span",Lp,[Le(je,{name:"guest",size:23})]),o[63]||(o[63]=R("div",null,[R("h2",null,"账号安全"),R("p",{class:"help"},"管理登录信息，保护你的设备访问权限。")],-1))]),R("div",qp,[R("span",jp,Oe(Ke(ze).username?.slice(0,1).toUpperCase()),1),R("div",null,[R("b",null,Oe(Ke(ze).username),1),R("p",Bp,Oe(Ke(ze).isAdmin?"管理员":"普通账号")+" · 网站与 MQTT 密码独立管理",1)]),o[64]||(o[64]=R("span",{class:"badge ok"},"已登录",-1))])]),R("section",Fp,[R("header",Dp,[R("span",Wp,[Le(je,{name:"shield",size:23})]),o[65]||(o[65]=R("div",null,[R("h2",null,"修改密码"),R("p",{class:"help"},"修改成功后，使用新密码重新登录，MQTT 密码保持不变。")],-1))]),R("form",{onSubmit:o[21]||(o[21]=Yt(w=>a("password",{current:r.value,password:e.value}),["prevent"]))},[R("div",zp,[R("div",Hp,[R("label",null,[o[66]||(o[66]=Ue("当前密码",-1)),Ge(R("input",{"onUpdate:modelValue":o[19]||(o[19]=w=>r.value=w),type:"password",required:"",autocomplete:"current-password"},null,512),[[ot,r.value]])]),R("label",null,[o[67]||(o[67]=Ue("新密码",-1)),Ge(R("input",{"onUpdate:modelValue":o[20]||(o[20]=w=>e.value=w),type:"password",required:"",minlength:"6",autocomplete:"new-password"},null,512),[[ot,e.value]]),o[68]||(o[68]=R("small",{class:"help"},"至少 6 个字符",-1))])])]),o[69]||(o[69]=R("footer",{class:"settings-actions"},[R("p",{class:"help"},"网站密码与 MQTT 密码独立，设备无需修改。"),R("button",{class:"btn primary"},"修改密码并退出")],-1))],32)]),Ke(ze).isAdmin?(Me(),Jt(v,{key:0,class:"card administration-entry",to:"/admin"},{default:lr(()=>[R("span",$p,[Le(je,{name:"settings",size:23})]),o[70]||(o[70]=R("span",null,[R("b",null,"平台管理"),R("small",null,"管理账号、设备归属和注册方式")],-1)),Le(je,{name:"arrow"})]),_:1})):He("",!0)],64))])])],64)}}},Vp=Xt(Kp,[["__scopeId","data-v-b1eb2e9d"]]),Qp={class:"console-page"},Gp={class:"console-topbar topbar"},Yp={class:"console-nav"},Jp={class:"platform-tabs tabs","aria-label":"主导航"},Xp=["aria-current"],Zp=["aria-current"],eh={key:0,role:"status",class:"feedback device-host-hint"},th={key:1,role:"alert",class:"feedback error"},nh={key:2,role:"status",class:"feedback"},rh={class:"dashboard-grid"},ih={class:"surface devices-panel"},sh={class:"device-list"},oh=["aria-pressed","onClick"],ah=["aria-label","onClick"],lh={key:0,class:"helper-text"},ch={key:0,class:"device-area"},dh={class:"mobile-device-heading"},uh=["aria-label"],ph={class:"current-device"},hh=["title"],fh={class:"switch-device-label"},mh=["disabled"],gh={class:"device-heading"},bh={class:"help"},vh=["disabled"],yh={key:1,class:"surface empty-control"},xh={__name:"App",setup(u){const m="./icons/iotcloud.svg",a=Object.fromEntries(["tc1","m1","a1"].map($=>[$,window.PhicommDemo.create($)])),c=kl(),n=Tl(),t=Ne(null),r=Ne(null),e=Ne(null),i=Ne({});function s($){const M=i.value[qe($)]||k[qe($)]?.name||$.name;if(M)return M;const ce=w.value.filter(le=>le.model===$.model);return qo($)+(ce.length>1?" "+(ce.findIndex(le=>qe(le)===qe($))+1):"")}function f($,M,ce){if($.version==="v1"){M?i.value[qe($)]=M:delete i.value[qe($)],localStorage.setItem("phicomm.names."+ir()+":"+(ze.username||"guest"),JSON.stringify(i.value)),ce();return}Fd(N,$,M,le=>{if(!["ok","accepted"].includes(le.code)){ce(le.message||"保存失败");return}const ae=k[qe($)]||={};M?ae.name=M:(delete ae.name,ye($)),ce()})}const h=Ne("connection");function b($="connection"){h.value=$,o.value="settings",window.scrollTo({top:0})}const p=kn({host:"",port:""}),o=Ne("home"),v=Ne(c.name==="Guest"),w=Ne([]),g=Ne(""),k=kn({}),_=Ne(!1),y=Ne(""),T=Ne(""),S=Ne(!1),E=Ne(Date.now()),P=kn({host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""}),O=tt(()=>{try{return new URL(P.host).hostname}catch{return""}}),B=tt(()=>O.value&&O.value!==location.hostname),I=Ne(""),z=tt(()=>"iotcloud.device-host-hint."+ir()+":"+O.value),F=tt(()=>(!B.value||o.value,!1));function D(){I.value=z.value;try{localStorage.setItem(z.value,"1")}catch{}}const pe=kn({mac:"",model:"tc1",version:"v2"}),V=tt(()=>{const $=w.value.find(M=>qe(M)===g.value);return $?{...k[qe($)],...$}:null});ln(o,$=>xs("pageview",v.value?$==="settings"?"/guest/settings":"/guest":$==="settings"?"/settings":"/")),ln(()=>V.value?qe(V.value):"",$=>{$&&xs("device_view",v.value?"/guest":"/",V.value.model)});let Q,ie,W;const te=new Map;async function N($,M,ce=V.value,{timeoutMs:le=2e4}={}){if(!_.value&&S.value&&$.action.endsWith(".get")&&await new Promise(J=>{const ue=()=>{clearTimeout(G),ke(),J()},ke=ln([_,S],([se,Ae])=>{(se||!Ae)&&ue()}),G=setTimeout(ue,5e3)}),ce){const J=a[ce.model].command($.action,$.params);Object.assign(k[qe(ce)]||={},a[ce.model].state),M({code:$.action.endsWith(".get")?"ok":"accepted",data:J});return}if(!_.value||!ce){M({code:"offline",message:"请先连接 MQTT"});return}if(ce.version==="v1"){ee($,M);return}const ae=JSON.stringify([qe(ce),$.action,$.params||{}]);if($.action.endsWith(".get")){const J=[...te.values()].find(ue=>ue.signature===ae);if(J){const ue=J.reply;J.reply=ke=>{ue(ke),M(ke)};return}}const Ee=Ml(),d=ce,x=k[qe(d)]||={};(x.pending||={})[Ee]=$.action;const A=setTimeout(()=>{const J=te.get(Ee);te.delete(Ee),delete x.pending[Ee],J?.reply({code:"timeout",message:"暂未收到操作回执，请等待状态更新"})},le);te.set(Ee,{reply:M,timeout:A,key:qe(d),signature:ae});const j=As(d,{...$,request_id:Ee});Q.publish(j.topic,j.payload,{qos:1,retain:!1},J=>{if(J){clearTimeout(A);const ue=te.get(Ee);te.delete(Ee),delete x.pending[Ee],ue?.reply({code:"error",message:"发送失败"})}})}const Z=()=>"iotcloud.devices."+encodeURIComponent(P.host)+"/"+encodeURIComponent(P.username),we={getItem:$=>$==="phicomm_devices"?localStorage.getItem(Z()):null};ln(()=>[P.host,P.username],()=>{if(v.value){L();for(const $ of Object.keys(k))delete k[$];K()}});const re=()=>v.value?"guest:"+P.host+":"+P.username:ze.username;function _e(){Ss(re(),!1),L()}function X(){Ss(re(),!0),Y()}function L(){S.value=!1;for(const{reply:$,timeout:M}of te.values())clearTimeout(M),$({code:"offline",message:"MQTT 已断开"});te.clear(),Q?.end(!0),Q=null,_.value=!1,Object.keys(k).forEach($=>delete k[$])}function oe(){}async function K(){try{w.value=(v.value?Il(we).map($=>({...$,username:P.username})):await Lt("/devices")).map(Ts),w.value.some($=>qe($)===g.value)||(g.value=w.value[0]?qe(w.value[0]):""),_.value&&void 0}catch($){y.value=$.message}}function Y(){{_.value=!0,S.value=!1;for(const $ of w.value)Object.assign(k[qe($)]||={},a[$.model].state);return}}function ee({action:$,params:M={}},ce){const le=V.value,ae=x=>ce({code:"ok",data:x}),Ee=x=>ce({code:"unsupported",message:x});if($==="capabilities.get"){ae({actions:["outlet.set","child_lock.set","indicator.set"]});return}if($==="status.get"){if(!Array.from({length:6},(x,A)=>le[`plug_${A}`]).every(x=>x?.on!==void 0)){Ee("尚未收到设备状态");return}ae({name:le.name||"TC1",socket_states:Array.from({length:6},(x,A)=>!!le[`plug_${A}`]?.on),socket_names:Array.from({length:6},(x,A)=>le[`plug_${A}`]?.setting?.name||`插座 ${A+1}`),child_lock:!!(le.child_lock?.on??le.child_lock),led_enabled:!!(le.led_lock?.on??le.led_lock),mqtt_connected:!0,mqtt_host:P.host});return}if($==="power.get"){if(le.power_watts===void 0&&le.power===void 0){Ee("尚未收到电量数据");return}ae({power_watts:le.power_watts??Number(le.power),energy_kwh:le.energy_kwh??Number(le.powerConsumption)});return}let d;if($==="outlet.set"){const x=M.index===void 0?[0,1,2,3,4,5]:[M.index];if(x.some(A=>!Number.isInteger(A)||A<0||A>5)){Ee("插座编号无效");return}d=Object.fromEntries(x.map(A=>[`plug_${A}`,{on:M.on?1:0}]))}else if($==="child_lock.set")d={child_lock:{on:M.enabled?1:0}};else if($==="indicator.set")d={led_lock:{on:M.enabled?1:0}};else if($==="config.set"&&M.section==="socket"&&!le.legacyText)d={[`plug_${M.values.index}`]:{setting:{name:M.values.name}}};else{Ee("此 Legacy 设备不支持该操作");return}try{for(const[x,A]of Object.entries(d)){const j=As(le,{[x]:A});Q.publish(j.topic,j.payload,{qos:1,retain:!1},J=>{J&&(y.value="发送失败")})}ce({code:"accepted",data:{}})}catch(x){Ee(x.message)}}function ye($,M,ce={}){{Object.assign(k[qe($)]||={},a[$.model].state);return}}async function de(){if(Object.assign(p,{host:"",port:""}),L(),T.value="",y.value="",v.value)Object.assign(P,{host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""},JSON.parse(localStorage.getItem("tmcp_broker")||"{}"));else{const $=await Lt("/register/status");try{const M=new URL($.mqtt_uri.includes("://")?$.mqtt_uri:"mqtt://"+$.mqtt_uri);M.protocol==="mqtt:"&&M.hostname&&!M.username&&!M.password&&Object.assign(p,{host:M.hostname,port:Number(M.port||1883)})}catch{}Object.assign(P,{host:xl.mqttWS||$.mqtt_ws_uri||`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:ze.mqttUsername||ze.username,password:ze.password||Sl(ze.username)})}await K(),Y()}async function U(){try{const $=Ts({...pe,version:pe.model==="tc1"?pe.version:"v2",...v.value?{username:P.username}:{}});if(v.value){if(w.value.some(M=>M.mac===$.mac))throw Error("设备已存在");localStorage.setItem(Z(),JSON.stringify([...w.value,$]))}else await Lt("/devices",{method:"POST",body:JSON.stringify($)});await K(),pe.mac=""}catch($){y.value=$.message}}async function H($){if(confirm(`移除 ${$.mac}？`))try{Q?.unsubscribe(Cl($)),v.value?localStorage.setItem(Z(),JSON.stringify(w.value.filter(M=>qe(M)!==qe($)))):await Lt(`/devices/${$.namespace?"scoped/":""}${$.mac}${$.namespace?"?mqtt_username="+encodeURIComponent($.mqtt_username||$.username):""}`,{method:"DELETE"}),await K()}catch(M){y.value=M.message}}async function ne(){try{await Lt("/auth/logout",{method:"POST",body:"{}"})}catch($){y.value=$.message}ze.username=null,ze.mqttUsername=null,ze.isAdmin=!1,ze.aliases=[],ze.password="",_l(),L(),await n.replace("/login")}async function ge($){try{await Lt("/auth/mqtt-password",{method:"POST",body:JSON.stringify({current_password:$.current,password:$.password})}),ze.password=$.password,El(ze.username,$.password),v.value||(P.password=$.password,Y()),T.value="MQTT 密码已修改，请更新设备连接密码"}catch(M){y.value=M.message}}async function be($){try{await Lt("/auth/password",{method:"POST",body:JSON.stringify({current_password:$.current,password:$.password})}),await ne()}catch(M){y.value=M.message}}return os(async()=>{c.name!=="Guest"&&await Al();try{i.value=JSON.parse(localStorage.getItem("phicomm.names."+ir()+":"+(ze.username||"guest"))||"{}")}catch{}await de(),ie=setInterval(()=>E.value=Date.now(),1e3),W=setInterval(()=>{!v.value&&!document.hidden&&K()},5e3)}),Jn(()=>{L(),clearInterval(ie),clearInterval(W)}),($,M)=>{const ce=Bo("RouterLink");return Me(),Ce("main",Qp,[R("header",Gp,[R("div",{class:"brand"},[M[14]||(M[14]=R("span",{class:"kind"},"MQTT 管理平台",-1)),R("h1",null,[R("img",{src:m,width:"30",height:"30",alt:"",style:{"vertical-align":"middle","margin-right":"8px"}}),M[13]||(M[13]=Ue("IotCloud",-1))])]),R("nav",Yp,[R("span",{class:Bt(["status-pill",{online:_.value}])},Oe(_.value?"MQTT 已连接":"MQTT 未连接"),3),Ke(ze).isAdmin?(Me(),Jt(ce,{key:0,class:"btn console-admin",to:"/admin"},{default:lr(()=>[...M[15]||(M[15]=[Ue("平台管理",-1)])]),_:1})):He("",!0),Le(Pl),Ke(ze).username?(Me(),Ce("button",{key:1,onClick:ne},"退出")):(Me(),Jt(ce,{key:2,to:"/login"},{default:lr(()=>[...M[16]||(M[16]=[Ue("登录",-1)])]),_:1}))])]),R("nav",Jp,[R("button",{"aria-current":o.value==="home"?"page":void 0,onClick:M[0]||(M[0]=le=>o.value="home")},"首页",8,Xp),R("button",{"aria-current":o.value==="settings"?"page":void 0,onClick:M[1]||(M[1]=le=>b())},"设置",8,Zp)]),F.value?(Me(),Ce("div",eh,[R("details",null,[R("summary",null,[M[17]||(M[17]=Ue("设备接入地址：",-1)),R("strong",null,Oe(O.value),1)]),M[18]||(M[18]=R("p",null,"配置 IoT 设备时，请在设备本地网页的 MQTT 设置中将 Host 填为上述地址，端口按 Broker 的设备接入配置填写。不要填写当前网页域名或 WebSocket 地址。",-1))]),R("button",{type:"button",onClick:D},"我知道了")])):He("",!0),y.value?(Me(),Ce("p",th,Oe(y.value),1)):He("",!0),T.value?(Me(),Ce("p",nh,Oe(T.value),1)):He("",!0),o.value==="home"?(Me(),Ce(ft,{key:3},[R("div",rh,[R("aside",ih,[M[20]||(M[20]=R("h2",null,"设备",-1)),R("button",{class:"add-device-entry",type:"button",onClick:M[2]||(M[2]=le=>b("devices"))},[Le(je,{name:"plus",size:17}),M[19]||(M[19]=Ue("添加设备",-1))]),R("ul",sh,[(Me(!0),Ce(ft,null,mn(w.value,le=>(Me(),Ce("li",{key:Ke(qe)(le),class:"device-list-item"},[R("button",{class:"device-select","aria-pressed":g.value===Ke(qe)(le),onClick:ae=>g.value=Ke(qe)(le)},[Le(ks,{device:le,state:k[Ke(qe)(le)]||{},name:s(le),connected:_.value,now:E.value},null,8,["device","state","name","connected","now"])],8,oh),R("button",{class:"device-rename btn ghost icon","aria-label":`修改 ${s(le)} 的名称`,onClick:ae=>e.value.open(le,s(le))},[Le(je,{name:"edit",size:15})],8,ah)]))),128))]),R("button",{onClick:K},"刷新列表"),w.value.length?He("",!0):(Me(),Ce("p",lh,"暂无设备。设备上线后将自动显示，也可在设置中添加。"))]),V.value?(Me(),Ce("div",ch,[R("div",dh,[R("button",{class:"device-picker-trigger",type:"button","aria-haspopup":"dialog","aria-label":`切换设备，当前：${s(V.value)}`,onClick:M[3]||(M[3]=le=>r.value.open())},[R("span",ph,[R("b",{title:s(V.value)},Oe(s(V.value)),9,hh),R("small",null,Oe(_.value?V.value.available===!1?"离线":V.value.available===!0?"在线":"等待设备状态":"MQTT 未连接"),1)]),R("span",fh,[M[21]||(M[21]=Ue("切换设备",-1)),Le(je,{name:"arrow",size:16})])],8,uh),R("button",{class:"device-refresh",type:"button","aria-label":"刷新当前设备状态",disabled:!_.value,onClick:M[4]||(M[4]=le=>t.value?.refresh())},[Le(je,{name:"refresh"})],8,mh)]),R("div",gh,[R("div",null,[R("h2",null,Oe(s(V.value)),1),R("p",bh,Oe(Ke(qo)(V.value)),1)]),R("span",{class:Bt(["badge",V.value.available===!0&&_.value?"ok":""])},Oe(_.value?V.value.available===!1?"离线":V.value.available===!0?"在线":"等待设备状态":"MQTT 未连接"),3),R("button",{disabled:!_.value,onClick:M[5]||(M[5]=le=>t.value?.refresh())},"刷新状态",8,vh)]),(Me(),Jt(bu,{ref_key:"home",ref:t,key:g.value,device:V.value,onCommand:N,onSettings:M[6]||(M[6]=le=>b())},null,8,["device"]))])):(Me(),Ce("section",yh,[M[22]||(M[22]=R("h2",null,"从一台设备开始",-1)),M[23]||(M[23]=R("p",null,"在设置中连接 Broker 并添加设备。",-1)),R("button",{onClick:M[7]||(M[7]=le=>b("devices"))},"添加设备")]))]),Le(hu,{ref_key:"devicePicker",ref:r,devices:w.value,selected:g.value,states:k,"device-name":s,connected:_.value,now:E.value,onSelect:M[8]||(M[8]=le=>g.value=le),onRefresh:K,onAdd:M[9]||(M[9]=le=>b("devices"))},null,8,["devices","selected","states","connected","now"])],64)):(Me(),Jt(Vp,{key:4,"initial-section":h.value,"device-broker":p,connection:P,connected:_.value,busy:S.value,"third-party":v.value,devices:w.value,states:k,"add-form":pe,"device-name":s,now:E.value,onRename:M[10]||(M[10]=le=>e.value.open(le,s(le))),onModeChange:M[11]||(M[11]=le=>{v.value=le,de()}),onConnect:X,onDisconnect:_e,onAdd:U,onRemove:H,onPassword:be,onMqttPassword:ge,onHome:M[12]||(M[12]=le=>o.value="home"),onRefresh:K},null,8,["initial-section","device-broker","connection","connected","busy","third-party","devices","states","add-form","now"])),Le(lu,{ref_key:"nameDialog",ref:e,onSave:f},null,512),M[24]||(M[24]=R("footer",{class:"console-footer copyright"},[Ue("Copyright © Phicomm Community · "),R("a",{href:"https://github.com/phicomm-io/phicomm-community-mqtt",target:"_blank",rel:"noopener noreferrer"},"MQTT 平台仓库"),Ue(" · "),R("a",{href:"https://phicomm-io.github.io",target:"_blank",rel:"noopener noreferrer"},"项目网站")],-1))])}}};export{xh as default};
