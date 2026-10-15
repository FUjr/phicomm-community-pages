import{o as Pe,e as Ne,b as X,k as Le,t as Oe,d as Je,x as Qt,y as Hn,h as He,i as ht,v as zt,f as yt,g as yn,r as je,z as Ra,A as Ua,B as gl,F as Ht,C as ar,p as We,j as bl,D as wi,c as rn,w as or,a as La,E as er,G as yl,m as Wt,H as vl,I as wl,u as _l,J as tr,K as kl,s as _i,L as xl,M as ki}from"./index-WuZTmaeW.js";import{d as Ue,l as Sl,a as xi,r as Al,c as Si,t as El}from"./deviceProtocol-DNiAofik.js";import{_ as De,a as Tl}from"./ThemeToggle-BwDjdZxS.js";import{_ as Vn}from"./_plugin-vue_export-helper-DlAUqK2U.js";var ai=Object.defineProperty,Il=Object.getOwnPropertyDescriptor,Ml=Object.getOwnPropertyNames,Cl=Object.prototype.hasOwnProperty,tt=(d,h)=>()=>(d&&(h=d(d=0)),h),be=(d,h)=>()=>(h||d((h={exports:{}}).exports,h),h.exports),Gt=(d,h)=>{for(var o in h)ai(d,o,{get:h[o],enumerable:!0})},Pl=(d,h,o,a)=>{if(h&&typeof h=="object"||typeof h=="function")for(let p of Ml(h))!Cl.call(d,p)&&p!==o&&ai(d,p,{get:()=>h[p],enumerable:!(a=Il(h,p))||a.enumerable});return d},Re=d=>Pl(ai({},"__esModule",{value:!0}),d),de=tt(()=>{}),qe={};Gt(qe,{_debugEnd:()=>Dr,_debugProcess:()=>Fr,_events:()=>ns,_eventsCount:()=>rs,_exiting:()=>Er,_fatalExceptions:()=>qr,_getActiveHandles:()=>za,_getActiveRequests:()=>Wa,_kill:()=>Mr,_linkedBinding:()=>Fa,_maxListeners:()=>ts,_preload_modules:()=>Zr,_rawDebug:()=>xr,_startProfilerIdleNotifier:()=>Wr,_stopProfilerIdleNotifier:()=>zr,_tickCallback:()=>Br,abort:()=>Vr,addListener:()=>ss,allowedNodeEnvironmentFlags:()=>Ur,arch:()=>cr,argv:()=>pr,argv0:()=>Xr,assert:()=>Ha,binding:()=>br,browser:()=>kr,chdir:()=>wr,config:()=>Tr,cpuUsage:()=>sn,cwd:()=>vr,debugPort:()=>Jr,default:()=>li,dlopen:()=>Da,domain:()=>Ar,emit:()=>cs,emitWarning:()=>gr,env:()=>ur,execArgv:()=>hr,execPath:()=>Yr,exit:()=>Nr,features:()=>Lr,hasUncaughtExceptionCaptureCallback:()=>$a,hrtime:()=>vn,kill:()=>Or,listeners:()=>Va,memoryUsage:()=>Pr,moduleLoadList:()=>Sr,nextTick:()=>ja,off:()=>as,on:()=>ft,once:()=>is,openStdin:()=>Rr,pid:()=>Qr,platform:()=>dr,ppid:()=>Gr,prependListener:()=>ds,prependOnceListener:()=>us,reallyExit:()=>Ir,release:()=>_r,removeAllListeners:()=>ls,removeListener:()=>os,resourceUsage:()=>Cr,setSourceMapsEnabled:()=>es,setUncaughtExceptionCaptureCallback:()=>jr,stderr:()=>$r,stdin:()=>Kr,stdout:()=>Hr,title:()=>lr,umask:()=>yr,uptime:()=>Ka,version:()=>fr,versions:()=>mr});function oi(d){throw new Error("Node.js process "+d+" is not supported by JSPM core outside of Node.js")}function Ol(){!Ut||!Nt||(Ut=!1,Nt.length?dt=Nt.concat(dt):cn=-1,dt.length&&qa())}function qa(){if(!Ut){var d=setTimeout(Ol,0);Ut=!0;for(var h=dt.length;h;){for(Nt=dt,dt=[];++cn<h;)Nt&&Nt[cn].run();cn=-1,h=dt.length}Nt=null,Ut=!1,clearTimeout(d)}}function ja(d){var h=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)h[o-1]=arguments[o];dt.push(new Ba(d,h)),dt.length===1&&!Ut&&setTimeout(qa,0)}function Ba(d,h){this.fun=d,this.array=h}function Qe(){}function Fa(d){oi("_linkedBinding")}function Da(d){oi("dlopen")}function Wa(){return[]}function za(){return[]}function Ha(d,h){if(!d)throw new Error(h||"assertion error")}function $a(){return!1}function Ka(){return gt.now()/1e3}function vn(d){var h=Math.floor((Date.now()-gt.now())*.001),o=gt.now()*.001,a=Math.floor(o)+h,p=Math.floor(o%1*1e9);return d&&(a=a-d[0],p=p-d[1],p<0&&(a--,p+=wn)),[a,p]}function ft(){return li}function Va(d){return[]}var dt,Ut,Nt,cn,lr,cr,dr,ur,pr,hr,fr,mr,gr,br,yr,vr,wr,_r,kr,xr,Sr,Ar,Er,Tr,Ir,Mr,sn,Cr,Pr,Or,Nr,Rr,Ur,Lr,qr,jr,Br,Fr,Dr,Wr,zr,Hr,$r,Kr,Vr,Qr,Gr,Yr,Jr,Xr,Zr,es,gt,nr,wn,ts,ns,rs,ss,is,as,os,ls,cs,ds,us,li,Nl=tt(()=>{de(),pe(),ue(),dt=[],Ut=!1,cn=-1,Ba.prototype.run=function(){this.fun.apply(null,this.array)},lr="browser",cr="x64",dr="browser",ur={PATH:"/usr/bin",LANG:typeof navigator<"u"?navigator.language+".UTF-8":void 0,PWD:"/",HOME:"/home",TMP:"/tmp"},pr=["/usr/bin/node"],hr=[],fr="v16.8.0",mr={},gr=function(d,h){console.warn((h?h+": ":"")+d)},br=function(d){oi("binding")},yr=function(d){return 0},vr=function(){return"/"},wr=function(d){},_r={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},kr=!0,xr=Qe,Sr=[],Ar={},Er=!1,Tr={},Ir=Qe,Mr=Qe,sn=function(){return{}},Cr=sn,Pr=sn,Or=Qe,Nr=Qe,Rr=Qe,Ur={},Lr={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},qr=Qe,jr=Qe,Br=Qe,Fr=Qe,Dr=Qe,Wr=Qe,zr=Qe,Hr=void 0,$r=void 0,Kr=void 0,Vr=Qe,Qr=2,Gr=1,Yr="/bin/usr/node",Jr=9229,Xr="node",Zr=[],es=Qe,gt={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},gt.now===void 0&&(nr=Date.now(),gt.timing&&gt.timing.navigationStart&&(nr=gt.timing.navigationStart),gt.now=()=>Date.now()-nr),wn=1e9,vn.bigint=function(d){var h=vn(d);return typeof BigInt>"u"?h[0]*wn+h[1]:BigInt(h[0]*wn)+BigInt(h[1])},ts=10,ns={},rs=0,ss=ft,is=ft,as=ft,os=ft,ls=ft,cs=Qe,ds=ft,us=ft,li={version:fr,versions:mr,arch:cr,platform:dr,browser:kr,release:_r,_rawDebug:xr,moduleLoadList:Sr,binding:br,_linkedBinding:Fa,_events:ns,_eventsCount:rs,_maxListeners:ts,on:ft,addListener:ss,once:is,off:as,removeListener:os,removeAllListeners:ls,emit:cs,prependListener:ds,prependOnceListener:us,listeners:Va,domain:Ar,_exiting:Er,config:Tr,dlopen:Da,uptime:Ka,_getActiveRequests:Wa,_getActiveHandles:za,reallyExit:Ir,_kill:Mr,cpuUsage:sn,resourceUsage:Cr,memoryUsage:Pr,kill:Or,exit:Nr,openStdin:Rr,allowedNodeEnvironmentFlags:Ur,assert:Ha,features:Lr,_fatalExceptions:qr,setUncaughtExceptionCaptureCallback:jr,hasUncaughtExceptionCaptureCallback:$a,emitWarning:gr,nextTick:ja,_tickCallback:Br,_debugProcess:Fr,_debugEnd:Dr,_startProfilerIdleNotifier:Wr,_stopProfilerIdleNotifier:zr,stdout:Hr,stdin:Kr,stderr:$r,abort:Vr,umask:yr,chdir:wr,cwd:vr,env:ur,title:lr,argv:pr,execArgv:hr,pid:Qr,ppid:Gr,execPath:Yr,debugPort:Jr,hrtime:vn,argv0:Xr,_preload_modules:Zr,setSourceMapsEnabled:es}}),ue=tt(()=>{Nl()});function Rl(){if(ps)return $t;ps=!0,$t.byteLength=r,$t.toByteArray=s,$t.fromByteArray=m;for(var d=[],h=[],o=typeof Uint8Array<"u"?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,n=a.length;p<n;++p)d[p]=a[p],h[a.charCodeAt(p)]=p;h[45]=62,h[95]=63;function t(l){var u=l.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=l.indexOf("=");f===-1&&(f=u);var y=f===u?0:4-f%4;return[f,y]}function r(l){var u=t(l),f=u[0],y=u[1];return(f+y)*3/4-y}function e(l,u,f){return(u+f)*3/4-f}function s(l){var u,f=t(l),y=f[0],k=f[1],b=new o(e(l,y,k)),_=0,A=k>0?y-4:y,v;for(v=0;v<A;v+=4)u=h[l.charCodeAt(v)]<<18|h[l.charCodeAt(v+1)]<<12|h[l.charCodeAt(v+2)]<<6|h[l.charCodeAt(v+3)],b[_++]=u>>16&255,b[_++]=u>>8&255,b[_++]=u&255;return k===2&&(u=h[l.charCodeAt(v)]<<2|h[l.charCodeAt(v+1)]>>4,b[_++]=u&255),k===1&&(u=h[l.charCodeAt(v)]<<10|h[l.charCodeAt(v+1)]<<4|h[l.charCodeAt(v+2)]>>2,b[_++]=u>>8&255,b[_++]=u&255),b}function i(l){return d[l>>18&63]+d[l>>12&63]+d[l>>6&63]+d[l&63]}function g(l,u,f){for(var y,k=[],b=u;b<f;b+=3)y=(l[b]<<16&16711680)+(l[b+1]<<8&65280)+(l[b+2]&255),k.push(i(y));return k.join("")}function m(l){for(var u,f=l.length,y=f%3,k=[],b=16383,_=0,A=f-y;_<A;_+=b)k.push(g(l,_,_+b>A?A:_+b));return y===1?(u=l[f-1],k.push(d[u>>2]+d[u<<4&63]+"==")):y===2&&(u=(l[f-2]<<8)+l[f-1],k.push(d[u>>10]+d[u>>4&63]+d[u<<2&63]+"=")),k.join("")}return $t}function Ul(){return hs?an:(hs=!0,an.read=function(d,h,o,a,p){var n,t,r=p*8-a-1,e=(1<<r)-1,s=e>>1,i=-7,g=o?p-1:0,m=o?-1:1,l=d[h+g];for(g+=m,n=l&(1<<-i)-1,l>>=-i,i+=r;i>0;n=n*256+d[h+g],g+=m,i-=8);for(t=n&(1<<-i)-1,n>>=-i,i+=a;i>0;t=t*256+d[h+g],g+=m,i-=8);if(n===0)n=1-s;else{if(n===e)return t?NaN:(l?-1:1)*(1/0);t=t+Math.pow(2,a),n=n-s}return(l?-1:1)*t*Math.pow(2,n-a)},an.write=function(d,h,o,a,p,n){var t,r,e,s=n*8-p-1,i=(1<<s)-1,g=i>>1,m=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,l=a?0:n-1,u=a?1:-1,f=h<0||h===0&&1/h<0?1:0;for(h=Math.abs(h),isNaN(h)||h===1/0?(r=isNaN(h)?1:0,t=i):(t=Math.floor(Math.log(h)/Math.LN2),h*(e=Math.pow(2,-t))<1&&(t--,e*=2),t+g>=1?h+=m/e:h+=m*Math.pow(2,1-g),h*e>=2&&(t++,e/=2),t+g>=i?(r=0,t=i):t+g>=1?(r=(h*e-1)*Math.pow(2,p),t=t+g):(r=h*Math.pow(2,g-1)*Math.pow(2,p),t=0));p>=8;d[o+l]=r&255,l+=u,r/=256,p-=8);for(t=t<<p|r,s+=p;s>0;d[o+l]=t&255,l+=u,t/=256,s-=8);d[o+l-u]|=f*128},an)}function Ll(){if(fs)return Et;fs=!0;let d=Rl(),h=Ul(),o=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Et.Buffer=t,Et.SlowBuffer=k,Et.INSPECT_MAX_BYTES=50;let a=2147483647;Et.kMaxLength=a,t.TYPED_ARRAY_SUPPORT=p(),!t.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function p(){try{let c=new Uint8Array(1),w={foo:function(){return 42}};return Object.setPrototypeOf(w,Uint8Array.prototype),Object.setPrototypeOf(c,w),c.foo()===42}catch{return!1}}Object.defineProperty(t.prototype,"parent",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.buffer}}),Object.defineProperty(t.prototype,"offset",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.byteOffset}});function n(c){if(c>a)throw new RangeError('The value "'+c+'" is invalid for option "size"');let w=new Uint8Array(c);return Object.setPrototypeOf(w,t.prototype),w}function t(c,w,E){if(typeof c=="number"){if(typeof w=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return i(c)}return r(c,w,E)}t.poolSize=8192;function r(c,w,E){if(typeof c=="string")return g(c,w);if(ArrayBuffer.isView(c))return l(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if($(c,ArrayBuffer)||c&&$(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($(c,SharedArrayBuffer)||c&&$(c.buffer,SharedArrayBuffer)))return u(c,w,E);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let D=c.valueOf&&c.valueOf();if(D!=null&&D!==c)return t.from(D,w,E);let te=f(c);if(te)return te;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return t.from(c[Symbol.toPrimitive]("string"),w,E);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}t.from=function(c,w,E){return r(c,w,E)},Object.setPrototypeOf(t.prototype,Uint8Array.prototype),Object.setPrototypeOf(t,Uint8Array);function e(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function s(c,w,E){return e(c),c<=0?n(c):w!==void 0?typeof E=="string"?n(c).fill(w,E):n(c).fill(w):n(c)}t.alloc=function(c,w,E){return s(c,w,E)};function i(c){return e(c),n(c<0?0:y(c)|0)}t.allocUnsafe=function(c){return i(c)},t.allocUnsafeSlow=function(c){return i(c)};function g(c,w){if((typeof w!="string"||w==="")&&(w="utf8"),!t.isEncoding(w))throw new TypeError("Unknown encoding: "+w);let E=b(c,w)|0,D=n(E),te=D.write(c,w);return te!==E&&(D=D.slice(0,te)),D}function m(c){let w=c.length<0?0:y(c.length)|0,E=n(w);for(let D=0;D<w;D+=1)E[D]=c[D]&255;return E}function l(c){if($(c,Uint8Array)){let w=new Uint8Array(c);return u(w.buffer,w.byteOffset,w.byteLength)}return m(c)}function u(c,w,E){if(w<0||c.byteLength<w)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<w+(E||0))throw new RangeError('"length" is outside of buffer bounds');let D;return w===void 0&&E===void 0?D=new Uint8Array(c):E===void 0?D=new Uint8Array(c,w):D=new Uint8Array(c,w,E),Object.setPrototypeOf(D,t.prototype),D}function f(c){if(t.isBuffer(c)){let w=y(c.length)|0,E=n(w);return E.length===0||c.copy(E,0,0,w),E}if(c.length!==void 0)return typeof c.length!="number"||ye(c.length)?n(0):m(c);if(c.type==="Buffer"&&Array.isArray(c.data))return m(c.data)}function y(c){if(c>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return c|0}function k(c){return+c!=c&&(c=0),t.alloc(+c)}t.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==t.prototype},t.compare=function(c,w){if($(c,Uint8Array)&&(c=t.from(c,c.offset,c.byteLength)),$(w,Uint8Array)&&(w=t.from(w,w.offset,w.byteLength)),!t.isBuffer(c)||!t.isBuffer(w))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===w)return 0;let E=c.length,D=w.length;for(let te=0,he=Math.min(E,D);te<he;++te)if(c[te]!==w[te]){E=c[te],D=w[te];break}return E<D?-1:D<E?1:0},t.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(c,w){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return t.alloc(0);let E;if(w===void 0)for(w=0,E=0;E<c.length;++E)w+=c[E].length;let D=t.allocUnsafe(w),te=0;for(E=0;E<c.length;++E){let he=c[E];if($(he,Uint8Array))te+he.length>D.length?(t.isBuffer(he)||(he=t.from(he)),he.copy(D,te)):Uint8Array.prototype.set.call(D,he,te);else if(t.isBuffer(he))he.copy(D,te);else throw new TypeError('"list" argument must be an Array of Buffers');te+=he.length}return D};function b(c,w){if(t.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||$(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);let E=c.length,D=arguments.length>2&&arguments[2]===!0;if(!D&&E===0)return 0;let te=!1;for(;;)switch(w){case"ascii":case"latin1":case"binary":return E;case"utf8":case"utf-8":return H(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E*2;case"hex":return E>>>1;case"base64":return ge(c).length;default:if(te)return D?-1:H(c).length;w=(""+w).toLowerCase(),te=!0}}t.byteLength=b;function _(c,w,E){let D=!1;if((w===void 0||w<0)&&(w=0),w>this.length||((E===void 0||E>this.length)&&(E=this.length),E<=0)||(E>>>=0,w>>>=0,E<=w))return"";for(c||(c="utf8");;)switch(c){case"hex":return Y(this,w,E);case"utf8":case"utf-8":return z(this,w,E);case"ascii":return le(this,w,E);case"latin1":case"binary":return Z(this,w,E);case"base64":return I(this,w,E);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,w,E);default:if(D)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),D=!0}}t.prototype._isBuffer=!0;function A(c,w,E){let D=c[w];c[w]=c[E],c[E]=D}t.prototype.swap16=function(){let c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let w=0;w<c;w+=2)A(this,w,w+1);return this},t.prototype.swap32=function(){let c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let w=0;w<c;w+=4)A(this,w,w+3),A(this,w+1,w+2);return this},t.prototype.swap64=function(){let c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let w=0;w<c;w+=8)A(this,w,w+7),A(this,w+1,w+6),A(this,w+2,w+5),A(this,w+3,w+4);return this},t.prototype.toString=function(){let c=this.length;return c===0?"":arguments.length===0?z(this,0,c):_.apply(this,arguments)},t.prototype.toLocaleString=t.prototype.toString,t.prototype.equals=function(c){if(!t.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:t.compare(this,c)===0},t.prototype.inspect=function(){let c="",w=Et.INSPECT_MAX_BYTES;return c=this.toString("hex",0,w).replace(/(.{2})/g,"$1 ").trim(),this.length>w&&(c+=" ... "),"<Buffer "+c+">"},o&&(t.prototype[o]=t.prototype.inspect),t.prototype.compare=function(c,w,E,D,te){if($(c,Uint8Array)&&(c=t.from(c,c.offset,c.byteLength)),!t.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(w===void 0&&(w=0),E===void 0&&(E=c?c.length:0),D===void 0&&(D=0),te===void 0&&(te=this.length),w<0||E>c.length||D<0||te>this.length)throw new RangeError("out of range index");if(D>=te&&w>=E)return 0;if(D>=te)return-1;if(w>=E)return 1;if(w>>>=0,E>>>=0,D>>>=0,te>>>=0,this===c)return 0;let he=te-D,xe=E-w,J=Math.min(he,xe),ae=this.slice(D,te),Ee=c.slice(w,E);for(let Te=0;Te<J;++Te)if(ae[Te]!==Ee[Te]){he=ae[Te],xe=Ee[Te];break}return he<xe?-1:xe<he?1:0};function v(c,w,E,D,te){if(c.length===0)return-1;if(typeof E=="string"?(D=E,E=0):E>2147483647?E=2147483647:E<-2147483648&&(E=-2147483648),E=+E,ye(E)&&(E=te?0:c.length-1),E<0&&(E=c.length+E),E>=c.length){if(te)return-1;E=c.length-1}else if(E<0)if(te)E=0;else return-1;if(typeof w=="string"&&(w=t.from(w,D)),t.isBuffer(w))return w.length===0?-1:S(c,w,E,D,te);if(typeof w=="number")return w=w&255,typeof Uint8Array.prototype.indexOf=="function"?te?Uint8Array.prototype.indexOf.call(c,w,E):Uint8Array.prototype.lastIndexOf.call(c,w,E):S(c,[w],E,D,te);throw new TypeError("val must be string, number or Buffer")}function S(c,w,E,D,te){let he=1,xe=c.length,J=w.length;if(D!==void 0&&(D=String(D).toLowerCase(),D==="ucs2"||D==="ucs-2"||D==="utf16le"||D==="utf-16le")){if(c.length<2||w.length<2)return-1;he=2,xe/=2,J/=2,E/=2}function ae(Te,Ie){return he===1?Te[Ie]:Te.readUInt16BE(Ie*he)}let Ee;if(te){let Te=-1;for(Ee=E;Ee<xe;Ee++)if(ae(c,Ee)===ae(w,Te===-1?0:Ee-Te)){if(Te===-1&&(Te=Ee),Ee-Te+1===J)return Te*he}else Te!==-1&&(Ee-=Ee-Te),Te=-1}else for(E+J>xe&&(E=xe-J),Ee=E;Ee>=0;Ee--){let Te=!0;for(let Ie=0;Ie<J;Ie++)if(ae(c,Ee+Ie)!==ae(w,Ie)){Te=!1;break}if(Te)return Ee}return-1}t.prototype.includes=function(c,w,E){return this.indexOf(c,w,E)!==-1},t.prototype.indexOf=function(c,w,E){return v(this,c,w,E,!0)},t.prototype.lastIndexOf=function(c,w,E){return v(this,c,w,E,!1)};function x(c,w,E,D){E=Number(E)||0;let te=c.length-E;D?(D=Number(D),D>te&&(D=te)):D=te;let he=w.length;D>he/2&&(D=he/2);let xe;for(xe=0;xe<D;++xe){let J=parseInt(w.substr(xe*2,2),16);if(ye(J))return xe;c[E+xe]=J}return xe}function T(c,w,E,D){return we(H(w,c.length-E),c,E,D)}function C(c,w,E,D){return we(re(w),c,E,D)}function P(c,w,E,D){return we(ge(w),c,E,D)}function B(c,w,E,D){return we(me(w,c.length-E),c,E,D)}t.prototype.write=function(c,w,E,D){if(w===void 0)D="utf8",E=this.length,w=0;else if(E===void 0&&typeof w=="string")D=w,E=this.length,w=0;else if(isFinite(w))w=w>>>0,isFinite(E)?(E=E>>>0,D===void 0&&(D="utf8")):(D=E,E=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let te=this.length-w;if((E===void 0||E>te)&&(E=te),c.length>0&&(E<0||w<0)||w>this.length)throw new RangeError("Attempt to write outside buffer bounds");D||(D="utf8");let he=!1;for(;;)switch(D){case"hex":return x(this,c,w,E);case"utf8":case"utf-8":return T(this,c,w,E);case"ascii":case"latin1":case"binary":return C(this,c,w,E);case"base64":return P(this,c,w,E);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,c,w,E);default:if(he)throw new TypeError("Unknown encoding: "+D);D=(""+D).toLowerCase(),he=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(c,w,E){return w===0&&E===c.length?d.fromByteArray(c):d.fromByteArray(c.slice(w,E))}function z(c,w,E){E=Math.min(c.length,E);let D=[],te=w;for(;te<E;){let he=c[te],xe=null,J=he>239?4:he>223?3:he>191?2:1;if(te+J<=E){let ae,Ee,Te,Ie;switch(J){case 1:he<128&&(xe=he);break;case 2:ae=c[te+1],(ae&192)===128&&(Ie=(he&31)<<6|ae&63,Ie>127&&(xe=Ie));break;case 3:ae=c[te+1],Ee=c[te+2],(ae&192)===128&&(Ee&192)===128&&(Ie=(he&15)<<12|(ae&63)<<6|Ee&63,Ie>2047&&(Ie<55296||Ie>57343)&&(xe=Ie));break;case 4:ae=c[te+1],Ee=c[te+2],Te=c[te+3],(ae&192)===128&&(Ee&192)===128&&(Te&192)===128&&(Ie=(he&15)<<18|(ae&63)<<12|(Ee&63)<<6|Te&63,Ie>65535&&Ie<1114112&&(xe=Ie))}}xe===null?(xe=65533,J=1):xe>65535&&(xe-=65536,D.push(xe>>>10&1023|55296),xe=56320|xe&1023),D.push(xe),te+=J}return F(D)}let j=4096;function F(c){let w=c.length;if(w<=j)return String.fromCharCode.apply(String,c);let E="",D=0;for(;D<w;)E+=String.fromCharCode.apply(String,c.slice(D,D+=j));return E}function le(c,w,E){let D="";E=Math.min(c.length,E);for(let te=w;te<E;++te)D+=String.fromCharCode(c[te]&127);return D}function Z(c,w,E){let D="";E=Math.min(c.length,E);for(let te=w;te<E;++te)D+=String.fromCharCode(c[te]);return D}function Y(c,w,E){let D=c.length;(!w||w<0)&&(w=0),(!E||E<0||E>D)&&(E=D);let te="";for(let he=w;he<E;++he)te+=_e[c[he]];return te}function ie(c,w,E){let D=c.slice(w,E),te="";for(let he=0;he<D.length-1;he+=2)te+=String.fromCharCode(D[he]+D[he+1]*256);return te}t.prototype.slice=function(c,w){let E=this.length;c=~~c,w=w===void 0?E:~~w,c<0?(c+=E,c<0&&(c=0)):c>E&&(c=E),w<0?(w+=E,w<0&&(w=0)):w>E&&(w=E),w<c&&(w=c);let D=this.subarray(c,w);return Object.setPrototypeOf(D,t.prototype),D};function W(c,w,E){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+w>E)throw new RangeError("Trying to access beyond buffer length")}t.prototype.readUintLE=t.prototype.readUIntLE=function(c,w,E){c=c>>>0,w=w>>>0,E||W(c,w,this.length);let D=this[c],te=1,he=0;for(;++he<w&&(te*=256);)D+=this[c+he]*te;return D},t.prototype.readUintBE=t.prototype.readUIntBE=function(c,w,E){c=c>>>0,w=w>>>0,E||W(c,w,this.length);let D=this[c+--w],te=1;for(;w>0&&(te*=256);)D+=this[c+--w]*te;return D},t.prototype.readUint8=t.prototype.readUInt8=function(c,w){return c=c>>>0,w||W(c,1,this.length),this[c]},t.prototype.readUint16LE=t.prototype.readUInt16LE=function(c,w){return c=c>>>0,w||W(c,2,this.length),this[c]|this[c+1]<<8},t.prototype.readUint16BE=t.prototype.readUInt16BE=function(c,w){return c=c>>>0,w||W(c,2,this.length),this[c]<<8|this[c+1]},t.prototype.readUint32LE=t.prototype.readUInt32LE=function(c,w){return c=c>>>0,w||W(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},t.prototype.readUint32BE=t.prototype.readUInt32BE=function(c,w){return c=c>>>0,w||W(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},t.prototype.readBigUInt64LE=ce(function(c){c=c>>>0,G(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&fe(c,this.length-8);let D=w+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,te=this[++c]+this[++c]*2**8+this[++c]*2**16+E*2**24;return BigInt(D)+(BigInt(te)<<BigInt(32))}),t.prototype.readBigUInt64BE=ce(function(c){c=c>>>0,G(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&fe(c,this.length-8);let D=w*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],te=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+E;return(BigInt(D)<<BigInt(32))+BigInt(te)}),t.prototype.readIntLE=function(c,w,E){c=c>>>0,w=w>>>0,E||W(c,w,this.length);let D=this[c],te=1,he=0;for(;++he<w&&(te*=256);)D+=this[c+he]*te;return te*=128,D>=te&&(D-=Math.pow(2,8*w)),D},t.prototype.readIntBE=function(c,w,E){c=c>>>0,w=w>>>0,E||W(c,w,this.length);let D=w,te=1,he=this[c+--D];for(;D>0&&(te*=256);)he+=this[c+--D]*te;return te*=128,he>=te&&(he-=Math.pow(2,8*w)),he},t.prototype.readInt8=function(c,w){return c=c>>>0,w||W(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},t.prototype.readInt16LE=function(c,w){c=c>>>0,w||W(c,2,this.length);let E=this[c]|this[c+1]<<8;return E&32768?E|4294901760:E},t.prototype.readInt16BE=function(c,w){c=c>>>0,w||W(c,2,this.length);let E=this[c+1]|this[c]<<8;return E&32768?E|4294901760:E},t.prototype.readInt32LE=function(c,w){return c=c>>>0,w||W(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},t.prototype.readInt32BE=function(c,w){return c=c>>>0,w||W(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},t.prototype.readBigInt64LE=ce(function(c){c=c>>>0,G(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&fe(c,this.length-8);let D=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(E<<24);return(BigInt(D)<<BigInt(32))+BigInt(w+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),t.prototype.readBigInt64BE=ce(function(c){c=c>>>0,G(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&fe(c,this.length-8);let D=(w<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(D)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+E)}),t.prototype.readFloatLE=function(c,w){return c=c>>>0,w||W(c,4,this.length),h.read(this,c,!0,23,4)},t.prototype.readFloatBE=function(c,w){return c=c>>>0,w||W(c,4,this.length),h.read(this,c,!1,23,4)},t.prototype.readDoubleLE=function(c,w){return c=c>>>0,w||W(c,8,this.length),h.read(this,c,!0,52,8)},t.prototype.readDoubleBE=function(c,w){return c=c>>>0,w||W(c,8,this.length),h.read(this,c,!1,52,8)};function ne(c,w,E,D,te,he){if(!t.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(w>te||w<he)throw new RangeError('"value" argument is out of bounds');if(E+D>c.length)throw new RangeError("Index out of range")}t.prototype.writeUintLE=t.prototype.writeUIntLE=function(c,w,E,D){if(c=+c,w=w>>>0,E=E>>>0,!D){let xe=Math.pow(2,8*E)-1;ne(this,c,w,E,xe,0)}let te=1,he=0;for(this[w]=c&255;++he<E&&(te*=256);)this[w+he]=c/te&255;return w+E},t.prototype.writeUintBE=t.prototype.writeUIntBE=function(c,w,E,D){if(c=+c,w=w>>>0,E=E>>>0,!D){let xe=Math.pow(2,8*E)-1;ne(this,c,w,E,xe,0)}let te=E-1,he=1;for(this[w+te]=c&255;--te>=0&&(he*=256);)this[w+te]=c/he&255;return w+E},t.prototype.writeUint8=t.prototype.writeUInt8=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,1,255,0),this[w]=c&255,w+1},t.prototype.writeUint16LE=t.prototype.writeUInt16LE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,2,65535,0),this[w]=c&255,this[w+1]=c>>>8,w+2},t.prototype.writeUint16BE=t.prototype.writeUInt16BE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,2,65535,0),this[w]=c>>>8,this[w+1]=c&255,w+2},t.prototype.writeUint32LE=t.prototype.writeUInt32LE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,4,4294967295,0),this[w+3]=c>>>24,this[w+2]=c>>>16,this[w+1]=c>>>8,this[w]=c&255,w+4},t.prototype.writeUint32BE=t.prototype.writeUInt32BE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,4,4294967295,0),this[w]=c>>>24,this[w+1]=c>>>16,this[w+2]=c>>>8,this[w+3]=c&255,w+4};function O(c,w,E,D,te){K(w,D,te,c,E,7);let he=Number(w&BigInt(4294967295));c[E++]=he,he=he>>8,c[E++]=he,he=he>>8,c[E++]=he,he=he>>8,c[E++]=he;let xe=Number(w>>BigInt(32)&BigInt(4294967295));return c[E++]=xe,xe=xe>>8,c[E++]=xe,xe=xe>>8,c[E++]=xe,xe=xe>>8,c[E++]=xe,E}function ee(c,w,E,D,te){K(w,D,te,c,E,7);let he=Number(w&BigInt(4294967295));c[E+7]=he,he=he>>8,c[E+6]=he,he=he>>8,c[E+5]=he,he=he>>8,c[E+4]=he;let xe=Number(w>>BigInt(32)&BigInt(4294967295));return c[E+3]=xe,xe=xe>>8,c[E+2]=xe,xe=xe>>8,c[E+1]=xe,xe=xe>>8,c[E]=xe,E+8}t.prototype.writeBigUInt64LE=ce(function(c,w=0){return O(this,c,w,BigInt(0),BigInt("0xffffffffffffffff"))}),t.prototype.writeBigUInt64BE=ce(function(c,w=0){return ee(this,c,w,BigInt(0),BigInt("0xffffffffffffffff"))}),t.prototype.writeIntLE=function(c,w,E,D){if(c=+c,w=w>>>0,!D){let J=Math.pow(2,8*E-1);ne(this,c,w,E,J-1,-J)}let te=0,he=1,xe=0;for(this[w]=c&255;++te<E&&(he*=256);)c<0&&xe===0&&this[w+te-1]!==0&&(xe=1),this[w+te]=(c/he>>0)-xe&255;return w+E},t.prototype.writeIntBE=function(c,w,E,D){if(c=+c,w=w>>>0,!D){let J=Math.pow(2,8*E-1);ne(this,c,w,E,J-1,-J)}let te=E-1,he=1,xe=0;for(this[w+te]=c&255;--te>=0&&(he*=256);)c<0&&xe===0&&this[w+te+1]!==0&&(xe=1),this[w+te]=(c/he>>0)-xe&255;return w+E},t.prototype.writeInt8=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,1,127,-128),c<0&&(c=255+c+1),this[w]=c&255,w+1},t.prototype.writeInt16LE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,2,32767,-32768),this[w]=c&255,this[w+1]=c>>>8,w+2},t.prototype.writeInt16BE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,2,32767,-32768),this[w]=c>>>8,this[w+1]=c&255,w+2},t.prototype.writeInt32LE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,4,2147483647,-2147483648),this[w]=c&255,this[w+1]=c>>>8,this[w+2]=c>>>16,this[w+3]=c>>>24,w+4},t.prototype.writeInt32BE=function(c,w,E){return c=+c,w=w>>>0,E||ne(this,c,w,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[w]=c>>>24,this[w+1]=c>>>16,this[w+2]=c>>>8,this[w+3]=c&255,w+4},t.prototype.writeBigInt64LE=ce(function(c,w=0){return O(this,c,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),t.prototype.writeBigInt64BE=ce(function(c,w=0){return ee(this,c,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Q(c,w,E,D,te,he){if(E+D>c.length)throw new RangeError("Index out of range");if(E<0)throw new RangeError("Index out of range")}function q(c,w,E,D,te){return w=+w,E=E>>>0,te||Q(c,w,E,4),h.write(c,w,E,D,23,4),E+4}t.prototype.writeFloatLE=function(c,w,E){return q(this,c,w,!0,E)},t.prototype.writeFloatBE=function(c,w,E){return q(this,c,w,!1,E)};function ve(c,w,E,D,te){return w=+w,E=E>>>0,te||Q(c,w,E,8),h.write(c,w,E,D,52,8),E+8}t.prototype.writeDoubleLE=function(c,w,E){return ve(this,c,w,!0,E)},t.prototype.writeDoubleBE=function(c,w,E){return ve(this,c,w,!1,E)},t.prototype.copy=function(c,w,E,D){if(!t.isBuffer(c))throw new TypeError("argument should be a Buffer");if(E||(E=0),!D&&D!==0&&(D=this.length),w>=c.length&&(w=c.length),w||(w=0),D>0&&D<E&&(D=E),D===E||c.length===0||this.length===0)return 0;if(w<0)throw new RangeError("targetStart out of bounds");if(E<0||E>=this.length)throw new RangeError("Index out of range");if(D<0)throw new RangeError("sourceEnd out of bounds");D>this.length&&(D=this.length),c.length-w<D-E&&(D=c.length-w+E);let te=D-E;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(w,E,D):Uint8Array.prototype.set.call(c,this.subarray(E,D),w),te},t.prototype.fill=function(c,w,E,D){if(typeof c=="string"){if(typeof w=="string"?(D=w,w=0,E=this.length):typeof E=="string"&&(D=E,E=this.length),D!==void 0&&typeof D!="string")throw new TypeError("encoding must be a string");if(typeof D=="string"&&!t.isEncoding(D))throw new TypeError("Unknown encoding: "+D);if(c.length===1){let he=c.charCodeAt(0);(D==="utf8"&&he<128||D==="latin1")&&(c=he)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(w<0||this.length<w||this.length<E)throw new RangeError("Out of range index");if(E<=w)return this;w=w>>>0,E=E===void 0?this.length:E>>>0,c||(c=0);let te;if(typeof c=="number")for(te=w;te<E;++te)this[te]=c;else{let he=t.isBuffer(c)?c:t.from(c,D),xe=he.length;if(xe===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(te=0;te<E-w;++te)this[te+w]=he[te%xe]}return this};let L={};function N(c,w,E){L[c]=class extends E{constructor(){super(),Object.defineProperty(this,"message",{value:w.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(D){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:D,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}N("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),N("ERR_INVALID_ARG_TYPE",function(c,w){return`The "${c}" argument must be of type number. Received type ${typeof w}`},TypeError),N("ERR_OUT_OF_RANGE",function(c,w,E){let D=`The value of "${c}" is out of range.`,te=E;return Number.isInteger(E)&&Math.abs(E)>2**32?te=se(String(E)):typeof E=="bigint"&&(te=String(E),(E>BigInt(2)**BigInt(32)||E<-(BigInt(2)**BigInt(32)))&&(te=se(te)),te+="n"),D+=` It must be ${w}. Received ${te}`,D},RangeError);function se(c){let w="",E=c.length,D=c[0]==="-"?1:0;for(;E>=D+4;E-=3)w=`_${c.slice(E-3,E)}${w}`;return`${c.slice(0,E)}${w}`}function V(c,w,E){G(w,"offset"),(c[w]===void 0||c[w+E]===void 0)&&fe(w,c.length-(E+1))}function K(c,w,E,D,te,he){if(c>E||c<w){let xe=typeof w=="bigint"?"n":"",J;throw w===0||w===BigInt(0)?J=`>= 0${xe} and < 2${xe} ** ${(he+1)*8}${xe}`:J=`>= -(2${xe} ** ${(he+1)*8-1}${xe}) and < 2 ** ${(he+1)*8-1}${xe}`,new L.ERR_OUT_OF_RANGE("value",J,c)}V(D,te,he)}function G(c,w){if(typeof c!="number")throw new L.ERR_INVALID_ARG_TYPE(w,"number",c)}function fe(c,w,E){throw Math.floor(c)!==c?(G(c,E),new L.ERR_OUT_OF_RANGE("offset","an integer",c)):w<0?new L.ERR_BUFFER_OUT_OF_BOUNDS:new L.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${w}`,c)}let oe=/[^+/0-9A-Za-z-_]/g;function R(c){if(c=c.split("=")[0],c=c.trim().replace(oe,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function H(c,w){w=w||1/0;let E,D=c.length,te=null,he=[];for(let xe=0;xe<D;++xe){if(E=c.charCodeAt(xe),E>55295&&E<57344){if(!te){if(E>56319){(w-=3)>-1&&he.push(239,191,189);continue}else if(xe+1===D){(w-=3)>-1&&he.push(239,191,189);continue}te=E;continue}if(E<56320){(w-=3)>-1&&he.push(239,191,189),te=E;continue}E=(te-55296<<10|E-56320)+65536}else te&&(w-=3)>-1&&he.push(239,191,189);if(te=null,E<128){if((w-=1)<0)break;he.push(E)}else if(E<2048){if((w-=2)<0)break;he.push(E>>6|192,E&63|128)}else if(E<65536){if((w-=3)<0)break;he.push(E>>12|224,E>>6&63|128,E&63|128)}else if(E<1114112){if((w-=4)<0)break;he.push(E>>18|240,E>>12&63|128,E>>6&63|128,E&63|128)}else throw new Error("Invalid code point")}return he}function re(c){let w=[];for(let E=0;E<c.length;++E)w.push(c.charCodeAt(E)&255);return w}function me(c,w){let E,D,te,he=[];for(let xe=0;xe<c.length&&!((w-=2)<0);++xe)E=c.charCodeAt(xe),D=E>>8,te=E%256,he.push(te),he.push(D);return he}function ge(c){return d.toByteArray(R(c))}function we(c,w,E,D){let te;for(te=0;te<D&&!(te+E>=w.length||te>=c.length);++te)w[te+E]=c[te];return te}function $(c,w){return c instanceof w||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===w.name}function ye(c){return c!==c}let _e=(function(){let c="0123456789abcdef",w=new Array(256);for(let E=0;E<16;++E){let D=E*16;for(let te=0;te<16;++te)w[D+te]=c[E]+c[te]}return w})();function ce(c){return typeof BigInt>"u"?Me:c}function Me(){throw new Error("BigInt not supported")}return Et}var $t,ps,an,hs,Et,fs,ql=tt(()=>{de(),pe(),ue(),$t={},ps=!1,an={},hs=!1,Et={},fs=!1}),$e={};Gt($e,{Buffer:()=>$n,INSPECT_MAX_BYTES:()=>Qa,default:()=>mt,kMaxLength:()=>Ga});var mt,$n,Qa,Ga,Ke=tt(()=>{de(),pe(),ue(),ql(),mt=Ll(),mt.Buffer,mt.SlowBuffer,mt.INSPECT_MAX_BYTES,mt.kMaxLength,$n=mt.Buffer,Qa=mt.INSPECT_MAX_BYTES,Ga=mt.kMaxLength}),pe=tt(()=>{Ke()}),Fe=be((d,h)=>{de(),pe(),ue();var o=class extends Error{constructor(a){if(!Array.isArray(a))throw new TypeError(`Expected input to be an Array, got ${typeof a}`);let p="";for(let n=0;n<a.length;n++)p+=`    ${a[n].stack}
`;super(p),this.name="AggregateError",this.errors=a}};h.exports={AggregateError:o,ArrayIsArray(a){return Array.isArray(a)},ArrayPrototypeIncludes(a,p){return a.includes(p)},ArrayPrototypeIndexOf(a,p){return a.indexOf(p)},ArrayPrototypeJoin(a,p){return a.join(p)},ArrayPrototypeMap(a,p){return a.map(p)},ArrayPrototypePop(a,p){return a.pop(p)},ArrayPrototypePush(a,p){return a.push(p)},ArrayPrototypeSlice(a,p,n){return a.slice(p,n)},Error,FunctionPrototypeCall(a,p,...n){return a.call(p,...n)},FunctionPrototypeSymbolHasInstance(a,p){return Function.prototype[Symbol.hasInstance].call(a,p)},MathFloor:Math.floor,Number,NumberIsInteger:Number.isInteger,NumberIsNaN:Number.isNaN,NumberMAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER,NumberMIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER,NumberParseInt:Number.parseInt,ObjectDefineProperties(a,p){return Object.defineProperties(a,p)},ObjectDefineProperty(a,p,n){return Object.defineProperty(a,p,n)},ObjectGetOwnPropertyDescriptor(a,p){return Object.getOwnPropertyDescriptor(a,p)},ObjectKeys(a){return Object.keys(a)},ObjectSetPrototypeOf(a,p){return Object.setPrototypeOf(a,p)},Promise,PromisePrototypeCatch(a,p){return a.catch(p)},PromisePrototypeThen(a,p,n){return a.then(p,n)},PromiseReject(a){return Promise.reject(a)},PromiseResolve(a){return Promise.resolve(a)},ReflectApply:Reflect.apply,RegExpPrototypeTest(a,p){return a.test(p)},SafeSet:Set,String,StringPrototypeSlice(a,p,n){return a.slice(p,n)},StringPrototypeToLowerCase(a){return a.toLowerCase()},StringPrototypeToUpperCase(a){return a.toUpperCase()},StringPrototypeTrim(a){return a.trim()},Symbol,SymbolFor:Symbol.for,SymbolAsyncIterator:Symbol.asyncIterator,SymbolHasInstance:Symbol.hasInstance,SymbolIterator:Symbol.iterator,SymbolDispose:Symbol.dispose||Symbol("Symbol.dispose"),SymbolAsyncDispose:Symbol.asyncDispose||Symbol("Symbol.asyncDispose"),TypedArrayPrototypeSet(a,p,n){return a.set(p,n)},Boolean,Uint8Array}}),Ya=be((d,h)=>{de(),pe(),ue(),h.exports={format(o,...a){return o.replace(/%([sdifj])/g,function(...[p,n]){let t=a.shift();return n==="f"?t.toFixed(6):n==="j"?JSON.stringify(t):n==="s"&&typeof t=="object"?`${t.constructor!==Object?t.constructor.name:""} {}`.trim():t.toString()})},inspect(o){switch(typeof o){case"string":if(o.includes("'"))if(o.includes('"')){if(!o.includes("`")&&!o.includes("${"))return`\`${o}\``}else return`"${o}"`;return`'${o}'`;case"number":return isNaN(o)?"NaN":Object.is(o,-0)?String(o):o;case"bigint":return`${String(o)}n`;case"boolean":case"undefined":return String(o);case"object":return"{}"}}}}),Ze=be((d,h)=>{de(),pe(),ue();var{format:o,inspect:a}=Ya(),{AggregateError:p}=Fe(),n=globalThis.AggregateError||p,t=Symbol("kIsNodeError"),r=["string","function","number","object","Function","Object","boolean","bigint","symbol"],e=/^([A-Z][a-z0-9]*)+$/,s="__node_internal_",i={};function g(b,_){if(!b)throw new i.ERR_INTERNAL_ASSERTION(_)}function m(b){let _="",A=b.length,v=b[0]==="-"?1:0;for(;A>=v+4;A-=3)_=`_${b.slice(A-3,A)}${_}`;return`${b.slice(0,A)}${_}`}function l(b,_,A){if(typeof _=="function")return g(_.length<=A.length,`Code: ${b}; The provided arguments length (${A.length}) does not match the required ones (${_.length}).`),_(...A);let v=(_.match(/%[dfijoOs]/g)||[]).length;return g(v===A.length,`Code: ${b}; The provided arguments length (${A.length}) does not match the required ones (${v}).`),A.length===0?_:o(_,...A)}function u(b,_,A){A||(A=Error);class v extends A{constructor(...x){super(l(b,_,x))}toString(){return`${this.name} [${b}]: ${this.message}`}}Object.defineProperties(v.prototype,{name:{value:A.name,writable:!0,enumerable:!1,configurable:!0},toString:{value(){return`${this.name} [${b}]: ${this.message}`},writable:!0,enumerable:!1,configurable:!0}}),v.prototype.code=b,v.prototype[t]=!0,i[b]=v}function f(b){let _=s+b.name;return Object.defineProperty(b,"name",{value:_}),b}function y(b,_){if(b&&_&&b!==_){if(Array.isArray(_.errors))return _.errors.push(b),_;let A=new n([_,b],_.message);return A.code=_.code,A}return b||_}var k=class extends Error{constructor(b="The operation was aborted",_=void 0){if(_!==void 0&&typeof _!="object")throw new i.ERR_INVALID_ARG_TYPE("options","Object",_);super(b,_),this.code="ABORT_ERR",this.name="AbortError"}};u("ERR_ASSERTION","%s",Error),u("ERR_INVALID_ARG_TYPE",(b,_,A)=>{g(typeof b=="string","'name' must be a string"),Array.isArray(_)||(_=[_]);let v="The ";b.endsWith(" argument")?v+=`${b} `:v+=`"${b}" ${b.includes(".")?"property":"argument"} `,v+="must be ";let S=[],x=[],T=[];for(let P of _)g(typeof P=="string","All expected entries have to be of type string"),r.includes(P)?S.push(P.toLowerCase()):e.test(P)?x.push(P):(g(P!=="object",'The value "object" should be written as "Object"'),T.push(P));if(x.length>0){let P=S.indexOf("object");P!==-1&&(S.splice(S,P,1),x.push("Object"))}if(S.length>0){switch(S.length){case 1:v+=`of type ${S[0]}`;break;case 2:v+=`one of type ${S[0]} or ${S[1]}`;break;default:{let P=S.pop();v+=`one of type ${S.join(", ")}, or ${P}`}}(x.length>0||T.length>0)&&(v+=" or ")}if(x.length>0){switch(x.length){case 1:v+=`an instance of ${x[0]}`;break;case 2:v+=`an instance of ${x[0]} or ${x[1]}`;break;default:{let P=x.pop();v+=`an instance of ${x.join(", ")}, or ${P}`}}T.length>0&&(v+=" or ")}switch(T.length){case 0:break;case 1:T[0].toLowerCase()!==T[0]&&(v+="an "),v+=`${T[0]}`;break;case 2:v+=`one of ${T[0]} or ${T[1]}`;break;default:{let P=T.pop();v+=`one of ${T.join(", ")}, or ${P}`}}if(A==null)v+=`. Received ${A}`;else if(typeof A=="function"&&A.name)v+=`. Received function ${A.name}`;else if(typeof A=="object"){var C;if((C=A.constructor)!==null&&C!==void 0&&C.name)v+=`. Received an instance of ${A.constructor.name}`;else{let P=a(A,{depth:-1});v+=`. Received ${P}`}}else{let P=a(A,{colors:!1});P.length>25&&(P=`${P.slice(0,25)}...`),v+=`. Received type ${typeof A} (${P})`}return v},TypeError),u("ERR_INVALID_ARG_VALUE",(b,_,A="is invalid")=>{let v=a(_);return v.length>128&&(v=v.slice(0,128)+"..."),`The ${b.includes(".")?"property":"argument"} '${b}' ${A}. Received ${v}`},TypeError),u("ERR_INVALID_RETURN_VALUE",(b,_,A)=>{var v;let S=A!=null&&(v=A.constructor)!==null&&v!==void 0&&v.name?`instance of ${A.constructor.name}`:`type ${typeof A}`;return`Expected ${b} to be returned from the "${_}" function but got ${S}.`},TypeError),u("ERR_MISSING_ARGS",(...b)=>{g(b.length>0,"At least one arg needs to be specified");let _,A=b.length;switch(b=(Array.isArray(b)?b:[b]).map(v=>`"${v}"`).join(" or "),A){case 1:_+=`The ${b[0]} argument`;break;case 2:_+=`The ${b[0]} and ${b[1]} arguments`;break;default:{let v=b.pop();_+=`The ${b.join(", ")}, and ${v} arguments`}break}return`${_} must be specified`},TypeError),u("ERR_OUT_OF_RANGE",(b,_,A)=>{g(_,'Missing "range" argument');let v;if(Number.isInteger(A)&&Math.abs(A)>2**32)v=m(String(A));else if(typeof A=="bigint"){v=String(A);let S=BigInt(2)**BigInt(32);(A>S||A<-S)&&(v=m(v)),v+="n"}else v=a(A);return`The value of "${b}" is out of range. It must be ${_}. Received ${v}`},RangeError),u("ERR_MULTIPLE_CALLBACK","Callback called multiple times",Error),u("ERR_METHOD_NOT_IMPLEMENTED","The %s method is not implemented",Error),u("ERR_STREAM_ALREADY_FINISHED","Cannot call %s after a stream was finished",Error),u("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable",Error),u("ERR_STREAM_DESTROYED","Cannot call %s after a stream was destroyed",Error),u("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),u("ERR_STREAM_PREMATURE_CLOSE","Premature close",Error),u("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF",Error),u("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event",Error),u("ERR_STREAM_WRITE_AFTER_END","write after end",Error),u("ERR_UNKNOWN_ENCODING","Unknown encoding: %s",TypeError),h.exports={AbortError:k,aggregateTwoErrors:f(y),hideStackFrames:f,codes:i}}),un=be((d,h)=>{de(),pe(),ue();var{AbortController:o,AbortSignal:a}=typeof self<"u"?self:typeof window<"u"?window:void 0;h.exports=o,h.exports.AbortSignal=a,h.exports.default=o}),Mt={};Gt(Mt,{EventEmitter:()=>Ja,default:()=>Kt,defaultMaxListeners:()=>Xa,init:()=>Za,listenerCount:()=>eo,on:()=>to,once:()=>no});function jl(){if(ms)return on;ms=!0;var d=typeof Reflect=="object"?Reflect:null,h=d&&typeof d.apply=="function"?d.apply:function(A,v,S){return Function.prototype.apply.call(A,v,S)},o;d&&typeof d.ownKeys=="function"?o=d.ownKeys:Object.getOwnPropertySymbols?o=function(A){return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A))}:o=function(A){return Object.getOwnPropertyNames(A)};function a(A){console&&console.warn&&console.warn(A)}var p=Number.isNaN||function(A){return A!==A};function n(){n.init.call(this)}on=n,on.once=k,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._eventsCount=0,n.prototype._maxListeners=void 0;var t=10;function r(A){if(typeof A!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof A)}Object.defineProperty(n,"defaultMaxListeners",{enumerable:!0,get:function(){return t},set:function(A){if(typeof A!="number"||A<0||p(A))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+A+".");t=A}}),n.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},n.prototype.setMaxListeners=function(A){if(typeof A!="number"||A<0||p(A))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+A+".");return this._maxListeners=A,this};function e(A){return A._maxListeners===void 0?n.defaultMaxListeners:A._maxListeners}n.prototype.getMaxListeners=function(){return e(this)},n.prototype.emit=function(A){for(var v=[],S=1;S<arguments.length;S++)v.push(arguments[S]);var x=A==="error",T=this._events;if(T!==void 0)x=x&&T.error===void 0;else if(!x)return!1;if(x){var C;if(v.length>0&&(C=v[0]),C instanceof Error)throw C;var P=new Error("Unhandled error."+(C?" ("+C.message+")":""));throw P.context=C,P}var B=T[A];if(B===void 0)return!1;if(typeof B=="function")h(B,this,v);else for(var I=B.length,z=u(B,I),S=0;S<I;++S)h(z[S],this,v);return!0};function s(A,v,S,x){var T,C,P;if(r(S),C=A._events,C===void 0?(C=A._events=Object.create(null),A._eventsCount=0):(C.newListener!==void 0&&(A.emit("newListener",v,S.listener?S.listener:S),C=A._events),P=C[v]),P===void 0)P=C[v]=S,++A._eventsCount;else if(typeof P=="function"?P=C[v]=x?[S,P]:[P,S]:x?P.unshift(S):P.push(S),T=e(A),T>0&&P.length>T&&!P.warned){P.warned=!0;var B=new Error("Possible EventEmitter memory leak detected. "+P.length+" "+String(v)+" listeners added. Use emitter.setMaxListeners() to increase limit");B.name="MaxListenersExceededWarning",B.emitter=A,B.type=v,B.count=P.length,a(B)}return A}n.prototype.addListener=function(A,v){return s(this,A,v,!1)},n.prototype.on=n.prototype.addListener,n.prototype.prependListener=function(A,v){return s(this,A,v,!0)};function i(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(A,v,S){var x={fired:!1,wrapFn:void 0,target:A,type:v,listener:S},T=i.bind(x);return T.listener=S,x.wrapFn=T,T}n.prototype.once=function(A,v){return r(v),this.on(A,g(this,A,v)),this},n.prototype.prependOnceListener=function(A,v){return r(v),this.prependListener(A,g(this,A,v)),this},n.prototype.removeListener=function(A,v){var S,x,T,C,P;if(r(v),x=this._events,x===void 0)return this;if(S=x[A],S===void 0)return this;if(S===v||S.listener===v)--this._eventsCount===0?this._events=Object.create(null):(delete x[A],x.removeListener&&this.emit("removeListener",A,S.listener||v));else if(typeof S!="function"){for(T=-1,C=S.length-1;C>=0;C--)if(S[C]===v||S[C].listener===v){P=S[C].listener,T=C;break}if(T<0)return this;T===0?S.shift():f(S,T),S.length===1&&(x[A]=S[0]),x.removeListener!==void 0&&this.emit("removeListener",A,P||v)}return this},n.prototype.off=n.prototype.removeListener,n.prototype.removeAllListeners=function(A){var v,S,x;if(S=this._events,S===void 0)return this;if(S.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):S[A]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete S[A]),this;if(arguments.length===0){var T=Object.keys(S),C;for(x=0;x<T.length;++x)C=T[x],C!=="removeListener"&&this.removeAllListeners(C);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(v=S[A],typeof v=="function")this.removeListener(A,v);else if(v!==void 0)for(x=v.length-1;x>=0;x--)this.removeListener(A,v[x]);return this};function m(A,v,S){var x=A._events;if(x===void 0)return[];var T=x[v];return T===void 0?[]:typeof T=="function"?S?[T.listener||T]:[T]:S?y(T):u(T,T.length)}n.prototype.listeners=function(A){return m(this,A,!0)},n.prototype.rawListeners=function(A){return m(this,A,!1)},n.listenerCount=function(A,v){return typeof A.listenerCount=="function"?A.listenerCount(v):l.call(A,v)},n.prototype.listenerCount=l;function l(A){var v=this._events;if(v!==void 0){var S=v[A];if(typeof S=="function")return 1;if(S!==void 0)return S.length}return 0}n.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]};function u(A,v){for(var S=new Array(v),x=0;x<v;++x)S[x]=A[x];return S}function f(A,v){for(;v+1<A.length;v++)A[v]=A[v+1];A.pop()}function y(A){for(var v=new Array(A.length),S=0;S<v.length;++S)v[S]=A[S].listener||A[S];return v}function k(A,v){return new Promise(function(S,x){function T(P){A.removeListener(v,C),x(P)}function C(){typeof A.removeListener=="function"&&A.removeListener("error",T),S([].slice.call(arguments))}_(A,v,C,{once:!0}),v!=="error"&&b(A,T,{once:!0})})}function b(A,v,S){typeof A.on=="function"&&_(A,"error",v,S)}function _(A,v,S,x){if(typeof A.on=="function")x.once?A.once(v,S):A.on(v,S);else if(typeof A.addEventListener=="function")A.addEventListener(v,function T(C){x.once&&A.removeEventListener(v,T),S(C)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof A)}return on}var on,ms,Kt,Ja,Xa,Za,eo,to,no,qt=tt(()=>{de(),pe(),ue(),on={},ms=!1,Kt=jl(),Kt.once,Kt.once=function(d,h){return new Promise((o,a)=>{function p(...t){n!==void 0&&d.removeListener("error",n),o(t)}let n;h!=="error"&&(n=t=>{d.removeListener(name,p),a(t)},d.once("error",n)),d.once(h,p)})},Kt.on=function(d,h){let o=[],a=[],p=null,n=!1,t={async next(){let s=o.shift();if(s)return createIterResult(s,!1);if(p){let i=Promise.reject(p);return p=null,i}return n?createIterResult(void 0,!0):new Promise((i,g)=>a.push({resolve:i,reject:g}))},async return(){d.removeListener(h,r),d.removeListener("error",e),n=!0;for(let s of a)s.resolve(createIterResult(void 0,!0));return createIterResult(void 0,!0)},throw(s){p=s,d.removeListener(h,r),d.removeListener("error",e)},[Symbol.asyncIterator](){return this}};return d.on(h,r),d.on("error",e),t;function r(...s){let i=a.shift();i?i.resolve(createIterResult(s,!1)):o.push(s)}function e(s){n=!0;let i=a.shift();i?i.reject(s):p=s,t.return()}},{EventEmitter:Ja,defaultMaxListeners:Xa,init:Za,listenerCount:eo,on:to,once:no}=Kt}),et=be((d,h)=>{de(),pe(),ue();var o=(Ke(),Re($e)),{format:a,inspect:p}=Ya(),{codes:{ERR_INVALID_ARG_TYPE:n}}=Ze(),{kResistStopPropagation:t,AggregateError:r,SymbolDispose:e}=Fe(),s=globalThis.AbortSignal||un().AbortSignal,i=globalThis.AbortController||un().AbortController,g=Object.getPrototypeOf(async function(){}).constructor,m=globalThis.Blob||o.Blob,l=typeof m<"u"?function(y){return y instanceof m}:function(y){return!1},u=(y,k)=>{if(y!==void 0&&(y===null||typeof y!="object"||!("aborted"in y)))throw new n(k,"AbortSignal",y)},f=(y,k)=>{if(typeof y!="function")throw new n(k,"Function",y)};h.exports={AggregateError:r,kEmptyObject:Object.freeze({}),once(y){let k=!1;return function(...b){k||(k=!0,y.apply(this,b))}},createDeferredPromise:function(){let y,k;return{promise:new Promise((b,_)=>{y=b,k=_}),resolve:y,reject:k}},promisify(y){return new Promise((k,b)=>{y((_,...A)=>_?b(_):k(...A))})},debuglog(){return function(){}},format:a,inspect:p,types:{isAsyncFunction(y){return y instanceof g},isArrayBufferView(y){return ArrayBuffer.isView(y)}},isBlob:l,deprecate(y,k){return y},addAbortListener:(qt(),Re(Mt)).addAbortListener||function(y,k){if(y===void 0)throw new n("signal","AbortSignal",y);u(y,"signal"),f(k,"listener");let b;return y.aborted?queueMicrotask(()=>k()):(y.addEventListener("abort",k,{__proto__:null,once:!0,[t]:!0}),b=()=>{y.removeEventListener("abort",k)}),{__proto__:null,[e](){var _;(_=b)===null||_===void 0||_()}}},AbortSignalAny:s.any||function(y){if(y.length===1)return y[0];let k=new i,b=()=>k.abort();return y.forEach(_=>{u(_,"signals"),_.addEventListener("abort",b,{once:!0})}),k.signal.addEventListener("abort",()=>{y.forEach(_=>_.removeEventListener("abort",b))},{once:!0}),k.signal}},h.exports.promisify.custom=Symbol.for("nodejs.util.promisify.custom")}),pn=be((d,h)=>{de(),pe(),ue();var{ArrayIsArray:o,ArrayPrototypeIncludes:a,ArrayPrototypeJoin:p,ArrayPrototypeMap:n,NumberIsInteger:t,NumberIsNaN:r,NumberMAX_SAFE_INTEGER:e,NumberMIN_SAFE_INTEGER:s,NumberParseInt:i,ObjectPrototypeHasOwnProperty:g,RegExpPrototypeExec:m,String:l,StringPrototypeToUpperCase:u,StringPrototypeTrim:f}=Fe(),{hideStackFrames:y,codes:{ERR_SOCKET_BAD_PORT:k,ERR_INVALID_ARG_TYPE:b,ERR_INVALID_ARG_VALUE:_,ERR_OUT_OF_RANGE:A,ERR_UNKNOWN_SIGNAL:v}}=Ze(),{normalizeEncoding:S}=et(),{isAsyncFunction:x,isArrayBufferView:T}=et().types,C={};function P($){return $===($|0)}function B($){return $===$>>>0}var I=/^[0-7]+$/,z="must be a 32-bit unsigned integer or an octal string";function j($,ye,_e){if(typeof $>"u"&&($=_e),typeof $=="string"){if(m(I,$)===null)throw new _(ye,$,z);$=i($,8)}return Z($,ye),$}var F=y(($,ye,_e=s,ce=e)=>{if(typeof $!="number")throw new b(ye,"number",$);if(!t($))throw new A(ye,"an integer",$);if($<_e||$>ce)throw new A(ye,`>= ${_e} && <= ${ce}`,$)}),le=y(($,ye,_e=-2147483648,ce=2147483647)=>{if(typeof $!="number")throw new b(ye,"number",$);if(!t($))throw new A(ye,"an integer",$);if($<_e||$>ce)throw new A(ye,`>= ${_e} && <= ${ce}`,$)}),Z=y(($,ye,_e=!1)=>{if(typeof $!="number")throw new b(ye,"number",$);if(!t($))throw new A(ye,"an integer",$);let ce=_e?1:0,Me=4294967295;if($<ce||$>Me)throw new A(ye,`>= ${ce} && <= ${Me}`,$)});function Y($,ye){if(typeof $!="string")throw new b(ye,"string",$)}function ie($,ye,_e=void 0,ce){if(typeof $!="number")throw new b(ye,"number",$);if(_e!=null&&$<_e||ce!=null&&$>ce||(_e!=null||ce!=null)&&r($))throw new A(ye,`${_e!=null?`>= ${_e}`:""}${_e!=null&&ce!=null?" && ":""}${ce!=null?`<= ${ce}`:""}`,$)}var W=y(($,ye,_e)=>{if(!a(_e,$)){let ce="must be one of: "+p(n(_e,Me=>typeof Me=="string"?`'${Me}'`:l(Me)),", ");throw new _(ye,$,ce)}});function ne($,ye){if(typeof $!="boolean")throw new b(ye,"boolean",$)}function O($,ye,_e){return $==null||!g($,ye)?_e:$[ye]}var ee=y(($,ye,_e=null)=>{let ce=O(_e,"allowArray",!1),Me=O(_e,"allowFunction",!1);if(!O(_e,"nullable",!1)&&$===null||!ce&&o($)||typeof $!="object"&&(!Me||typeof $!="function"))throw new b(ye,"Object",$)}),Q=y(($,ye)=>{if($!=null&&typeof $!="object"&&typeof $!="function")throw new b(ye,"a dictionary",$)}),q=y(($,ye,_e=0)=>{if(!o($))throw new b(ye,"Array",$);if($.length<_e){let ce=`must be longer than ${_e}`;throw new _(ye,$,ce)}});function ve($,ye){q($,ye);for(let _e=0;_e<$.length;_e++)Y($[_e],`${ye}[${_e}]`)}function L($,ye){q($,ye);for(let _e=0;_e<$.length;_e++)ne($[_e],`${ye}[${_e}]`)}function N($,ye){q($,ye);for(let _e=0;_e<$.length;_e++){let ce=$[_e],Me=`${ye}[${_e}]`;if(ce==null)throw new b(Me,"AbortSignal",ce);fe(ce,Me)}}function se($,ye="signal"){if(Y($,ye),C[$]===void 0)throw C[u($)]!==void 0?new v($+" (signals must use all capital letters)"):new v($)}var V=y(($,ye="buffer")=>{if(!T($))throw new b(ye,["Buffer","TypedArray","DataView"],$)});function K($,ye){let _e=S(ye),ce=$.length;if(_e==="hex"&&ce%2!==0)throw new _("encoding",ye,`is invalid for data of length ${ce}`)}function G($,ye="Port",_e=!0){if(typeof $!="number"&&typeof $!="string"||typeof $=="string"&&f($).length===0||+$!==+$>>>0||$>65535||$===0&&!_e)throw new k(ye,$,_e);return $|0}var fe=y(($,ye)=>{if($!==void 0&&($===null||typeof $!="object"||!("aborted"in $)))throw new b(ye,"AbortSignal",$)}),oe=y(($,ye)=>{if(typeof $!="function")throw new b(ye,"Function",$)}),R=y(($,ye)=>{if(typeof $!="function"||x($))throw new b(ye,"Function",$)}),H=y(($,ye)=>{if($!==void 0)throw new b(ye,"undefined",$)});function re($,ye,_e){if(!a(_e,$))throw new b(ye,`('${p(_e,"|")}')`,$)}var me=/^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;function ge($,ye){if(typeof $>"u"||!m(me,$))throw new _(ye,$,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}function we($){if(typeof $=="string")return ge($,"hints"),$;if(o($)){let ye=$.length,_e="";if(ye===0)return _e;for(let ce=0;ce<ye;ce++){let Me=$[ce];ge(Me,"hints"),_e+=Me,ce!==ye-1&&(_e+=", ")}return _e}throw new _("hints",$,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}h.exports={isInt32:P,isUint32:B,parseFileMode:j,validateArray:q,validateStringArray:ve,validateBooleanArray:L,validateAbortSignalArray:N,validateBoolean:ne,validateBuffer:V,validateDictionary:Q,validateEncoding:K,validateFunction:oe,validateInt32:le,validateInteger:F,validateNumber:ie,validateObject:ee,validateOneOf:W,validatePlainFunction:R,validatePort:G,validateSignalName:se,validateString:Y,validateUint32:Z,validateUndefined:H,validateUnion:re,validateAbortSignal:fe,validateLinkHeaderValue:we}}),jt=be((d,h)=>{de(),pe(),ue();var o=h.exports={},a,p;function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=n}catch{a=n}try{typeof clearTimeout=="function"?p=clearTimeout:p=t}catch{p=t}})();function r(k){if(a===setTimeout)return setTimeout(k,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(k,0);try{return a(k,0)}catch{try{return a.call(null,k,0)}catch{return a.call(this,k,0)}}}function e(k){if(p===clearTimeout)return clearTimeout(k);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(k);try{return p(k)}catch{try{return p.call(null,k)}catch{return p.call(this,k)}}}var s=[],i=!1,g,m=-1;function l(){!i||!g||(i=!1,g.length?s=g.concat(s):m=-1,s.length&&u())}function u(){if(!i){var k=r(l);i=!0;for(var b=s.length;b;){for(g=s,s=[];++m<b;)g&&g[m].run();m=-1,b=s.length}g=null,i=!1,e(k)}}o.nextTick=function(k){var b=new Array(arguments.length-1);if(arguments.length>1)for(var _=1;_<arguments.length;_++)b[_-1]=arguments[_];s.push(new f(k,b)),s.length===1&&!i&&r(u)};function f(k,b){this.fun=k,this.array=b}f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={};function y(){}o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(k){return[]},o.binding=function(k){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(k){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}),_t=be((d,h)=>{de(),pe(),ue();var{SymbolAsyncIterator:o,SymbolIterator:a,SymbolFor:p}=Fe(),n=p("nodejs.stream.destroyed"),t=p("nodejs.stream.errored"),r=p("nodejs.stream.readable"),e=p("nodejs.stream.writable"),s=p("nodejs.stream.disturbed"),i=p("nodejs.webstream.isClosedPromise"),g=p("nodejs.webstream.controllerErrorFunction");function m(O,ee=!1){var Q;return!!(O&&typeof O.pipe=="function"&&typeof O.on=="function"&&(!ee||typeof O.pause=="function"&&typeof O.resume=="function")&&(!O._writableState||((Q=O._readableState)===null||Q===void 0?void 0:Q.readable)!==!1)&&(!O._writableState||O._readableState))}function l(O){var ee;return!!(O&&typeof O.write=="function"&&typeof O.on=="function"&&(!O._readableState||((ee=O._writableState)===null||ee===void 0?void 0:ee.writable)!==!1))}function u(O){return!!(O&&typeof O.pipe=="function"&&O._readableState&&typeof O.on=="function"&&typeof O.write=="function")}function f(O){return O&&(O._readableState||O._writableState||typeof O.write=="function"&&typeof O.on=="function"||typeof O.pipe=="function"&&typeof O.on=="function")}function y(O){return!!(O&&!f(O)&&typeof O.pipeThrough=="function"&&typeof O.getReader=="function"&&typeof O.cancel=="function")}function k(O){return!!(O&&!f(O)&&typeof O.getWriter=="function"&&typeof O.abort=="function")}function b(O){return!!(O&&!f(O)&&typeof O.readable=="object"&&typeof O.writable=="object")}function _(O){return y(O)||k(O)||b(O)}function A(O,ee){return O==null?!1:ee===!0?typeof O[o]=="function":ee===!1?typeof O[a]=="function":typeof O[o]=="function"||typeof O[a]=="function"}function v(O){if(!f(O))return null;let ee=O._writableState,Q=O._readableState,q=ee||Q;return!!(O.destroyed||O[n]||q!=null&&q.destroyed)}function S(O){if(!l(O))return null;if(O.writableEnded===!0)return!0;let ee=O._writableState;return ee!=null&&ee.errored?!1:typeof ee?.ended!="boolean"?null:ee.ended}function x(O,ee){if(!l(O))return null;if(O.writableFinished===!0)return!0;let Q=O._writableState;return Q!=null&&Q.errored?!1:typeof Q?.finished!="boolean"?null:!!(Q.finished||ee===!1&&Q.ended===!0&&Q.length===0)}function T(O){if(!m(O))return null;if(O.readableEnded===!0)return!0;let ee=O._readableState;return!ee||ee.errored?!1:typeof ee?.ended!="boolean"?null:ee.ended}function C(O,ee){if(!m(O))return null;let Q=O._readableState;return Q!=null&&Q.errored?!1:typeof Q?.endEmitted!="boolean"?null:!!(Q.endEmitted||ee===!1&&Q.ended===!0&&Q.length===0)}function P(O){return O&&O[r]!=null?O[r]:typeof O?.readable!="boolean"?null:v(O)?!1:m(O)&&O.readable&&!C(O)}function B(O){return O&&O[e]!=null?O[e]:typeof O?.writable!="boolean"?null:v(O)?!1:l(O)&&O.writable&&!S(O)}function I(O,ee){return f(O)?v(O)?!0:!(ee?.readable!==!1&&P(O)||ee?.writable!==!1&&B(O)):null}function z(O){var ee,Q;return f(O)?O.writableErrored?O.writableErrored:(ee=(Q=O._writableState)===null||Q===void 0?void 0:Q.errored)!==null&&ee!==void 0?ee:null:null}function j(O){var ee,Q;return f(O)?O.readableErrored?O.readableErrored:(ee=(Q=O._readableState)===null||Q===void 0?void 0:Q.errored)!==null&&ee!==void 0?ee:null:null}function F(O){if(!f(O))return null;if(typeof O.closed=="boolean")return O.closed;let ee=O._writableState,Q=O._readableState;return typeof ee?.closed=="boolean"||typeof Q?.closed=="boolean"?ee?.closed||Q?.closed:typeof O._closed=="boolean"&&le(O)?O._closed:null}function le(O){return typeof O._closed=="boolean"&&typeof O._defaultKeepAlive=="boolean"&&typeof O._removedConnection=="boolean"&&typeof O._removedContLen=="boolean"}function Z(O){return typeof O._sent100=="boolean"&&le(O)}function Y(O){var ee;return typeof O._consuming=="boolean"&&typeof O._dumped=="boolean"&&((ee=O.req)===null||ee===void 0?void 0:ee.upgradeOrConnect)===void 0}function ie(O){if(!f(O))return null;let ee=O._writableState,Q=O._readableState,q=ee||Q;return!q&&Z(O)||!!(q&&q.autoDestroy&&q.emitClose&&q.closed===!1)}function W(O){var ee;return!!(O&&((ee=O[s])!==null&&ee!==void 0?ee:O.readableDidRead||O.readableAborted))}function ne(O){var ee,Q,q,ve,L,N,se,V,K,G;return!!(O&&((ee=(Q=(q=(ve=(L=(N=O[t])!==null&&N!==void 0?N:O.readableErrored)!==null&&L!==void 0?L:O.writableErrored)!==null&&ve!==void 0?ve:(se=O._readableState)===null||se===void 0?void 0:se.errorEmitted)!==null&&q!==void 0?q:(V=O._writableState)===null||V===void 0?void 0:V.errorEmitted)!==null&&Q!==void 0?Q:(K=O._readableState)===null||K===void 0?void 0:K.errored)!==null&&ee!==void 0?ee:!((G=O._writableState)===null||G===void 0)&&G.errored))}h.exports={isDestroyed:v,kIsDestroyed:n,isDisturbed:W,kIsDisturbed:s,isErrored:ne,kIsErrored:t,isReadable:P,kIsReadable:r,kIsClosedPromise:i,kControllerErrorFunction:g,kIsWritable:e,isClosed:F,isDuplexNodeStream:u,isFinished:I,isIterable:A,isReadableNodeStream:m,isReadableStream:y,isReadableEnded:T,isReadableFinished:C,isReadableErrored:j,isNodeStream:f,isWebStream:_,isWritable:B,isWritableNodeStream:l,isWritableStream:k,isWritableEnded:S,isWritableFinished:x,isWritableErrored:z,isServerRequest:Y,isServerResponse:Z,willEmitClose:ie,isTransformStream:b}}),Ct=be((d,h)=>{de(),pe(),ue();var o=jt(),{AbortError:a,codes:p}=Ze(),{ERR_INVALID_ARG_TYPE:n,ERR_STREAM_PREMATURE_CLOSE:t}=p,{kEmptyObject:r,once:e}=et(),{validateAbortSignal:s,validateFunction:i,validateObject:g,validateBoolean:m}=pn(),{Promise:l,PromisePrototypeThen:u,SymbolDispose:f}=Fe(),{isClosed:y,isReadable:k,isReadableNodeStream:b,isReadableStream:_,isReadableFinished:A,isReadableErrored:v,isWritable:S,isWritableNodeStream:x,isWritableStream:T,isWritableFinished:C,isWritableErrored:P,isNodeStream:B,willEmitClose:I,kIsClosedPromise:z}=_t(),j;function F(W){return W.setHeader&&typeof W.abort=="function"}var le=()=>{};function Z(W,ne,O){var ee,Q;if(arguments.length===2?(O=ne,ne=r):ne==null?ne=r:g(ne,"options"),i(O,"callback"),s(ne.signal,"options.signal"),O=e(O),_(W)||T(W))return Y(W,ne,O);if(!B(W))throw new n("stream",["ReadableStream","WritableStream","Stream"],W);let q=(ee=ne.readable)!==null&&ee!==void 0?ee:b(W),ve=(Q=ne.writable)!==null&&Q!==void 0?Q:x(W),L=W._writableState,N=W._readableState,se=()=>{W.writable||G()},V=I(W)&&b(W)===q&&x(W)===ve,K=C(W,!1),G=()=>{K=!0,W.destroyed&&(V=!1),!(V&&(!W.readable||q))&&(!q||fe)&&O.call(W)},fe=A(W,!1),oe=()=>{fe=!0,W.destroyed&&(V=!1),!(V&&(!W.writable||ve))&&(!ve||K)&&O.call(W)},R=$=>{O.call(W,$)},H=y(W),re=()=>{H=!0;let $=P(W)||v(W);if($&&typeof $!="boolean")return O.call(W,$);if(q&&!fe&&b(W,!0)&&!A(W,!1))return O.call(W,new t);if(ve&&!K&&!C(W,!1))return O.call(W,new t);O.call(W)},me=()=>{H=!0;let $=P(W)||v(W);if($&&typeof $!="boolean")return O.call(W,$);O.call(W)},ge=()=>{W.req.on("finish",G)};F(W)?(W.on("complete",G),V||W.on("abort",re),W.req?ge():W.on("request",ge)):ve&&!L&&(W.on("end",se),W.on("close",se)),!V&&typeof W.aborted=="boolean"&&W.on("aborted",re),W.on("end",oe),W.on("finish",G),ne.error!==!1&&W.on("error",R),W.on("close",re),H?o.nextTick(re):L!=null&&L.errorEmitted||N!=null&&N.errorEmitted?V||o.nextTick(me):(!q&&(!V||k(W))&&(K||S(W)===!1)||!ve&&(!V||S(W))&&(fe||k(W)===!1)||N&&W.req&&W.aborted)&&o.nextTick(me);let we=()=>{O=le,W.removeListener("aborted",re),W.removeListener("complete",G),W.removeListener("abort",re),W.removeListener("request",ge),W.req&&W.req.removeListener("finish",G),W.removeListener("end",se),W.removeListener("close",se),W.removeListener("finish",G),W.removeListener("end",oe),W.removeListener("error",R),W.removeListener("close",re)};if(ne.signal&&!H){let $=()=>{let ye=O;we(),ye.call(W,new a(void 0,{cause:ne.signal.reason}))};if(ne.signal.aborted)o.nextTick($);else{j=j||et().addAbortListener;let ye=j(ne.signal,$),_e=O;O=e((...ce)=>{ye[f](),_e.apply(W,ce)})}}return we}function Y(W,ne,O){let ee=!1,Q=le;if(ne.signal)if(Q=()=>{ee=!0,O.call(W,new a(void 0,{cause:ne.signal.reason}))},ne.signal.aborted)o.nextTick(Q);else{j=j||et().addAbortListener;let ve=j(ne.signal,Q),L=O;O=e((...N)=>{ve[f](),L.apply(W,N)})}let q=(...ve)=>{ee||o.nextTick(()=>O.apply(W,ve))};return u(W[z].promise,q,q),le}function ie(W,ne){var O;let ee=!1;return ne===null&&(ne=r),(O=ne)!==null&&O!==void 0&&O.cleanup&&(m(ne.cleanup,"cleanup"),ee=ne.cleanup),new l((Q,q)=>{let ve=Z(W,ne,L=>{ee&&ve(),L?q(L):Q()})})}h.exports=Z,h.exports.finished=ie}),Yt=be((d,h)=>{de(),pe(),ue();var o=jt(),{aggregateTwoErrors:a,codes:{ERR_MULTIPLE_CALLBACK:p},AbortError:n}=Ze(),{Symbol:t}=Fe(),{kIsDestroyed:r,isDestroyed:e,isFinished:s,isServerRequest:i}=_t(),g=t("kDestroy"),m=t("kConstruct");function l(I,z,j){I&&(I.stack,z&&!z.errored&&(z.errored=I),j&&!j.errored&&(j.errored=I))}function u(I,z){let j=this._readableState,F=this._writableState,le=F||j;return F!=null&&F.destroyed||j!=null&&j.destroyed?(typeof z=="function"&&z(),this):(l(I,F,j),F&&(F.destroyed=!0),j&&(j.destroyed=!0),le.constructed?f(this,I,z):this.once(g,function(Z){f(this,a(Z,I),z)}),this)}function f(I,z,j){let F=!1;function le(Z){if(F)return;F=!0;let Y=I._readableState,ie=I._writableState;l(Z,ie,Y),ie&&(ie.closed=!0),Y&&(Y.closed=!0),typeof j=="function"&&j(Z),Z?o.nextTick(y,I,Z):o.nextTick(k,I)}try{I._destroy(z||null,le)}catch(Z){le(Z)}}function y(I,z){b(I,z),k(I)}function k(I){let z=I._readableState,j=I._writableState;j&&(j.closeEmitted=!0),z&&(z.closeEmitted=!0),(j!=null&&j.emitClose||z!=null&&z.emitClose)&&I.emit("close")}function b(I,z){let j=I._readableState,F=I._writableState;F!=null&&F.errorEmitted||j!=null&&j.errorEmitted||(F&&(F.errorEmitted=!0),j&&(j.errorEmitted=!0),I.emit("error",z))}function _(){let I=this._readableState,z=this._writableState;I&&(I.constructed=!0,I.closed=!1,I.closeEmitted=!1,I.destroyed=!1,I.errored=null,I.errorEmitted=!1,I.reading=!1,I.ended=I.readable===!1,I.endEmitted=I.readable===!1),z&&(z.constructed=!0,z.destroyed=!1,z.closed=!1,z.closeEmitted=!1,z.errored=null,z.errorEmitted=!1,z.finalCalled=!1,z.prefinished=!1,z.ended=z.writable===!1,z.ending=z.writable===!1,z.finished=z.writable===!1)}function A(I,z,j){let F=I._readableState,le=I._writableState;if(le!=null&&le.destroyed||F!=null&&F.destroyed)return this;F!=null&&F.autoDestroy||le!=null&&le.autoDestroy?I.destroy(z):z&&(z.stack,le&&!le.errored&&(le.errored=z),F&&!F.errored&&(F.errored=z),j?o.nextTick(b,I,z):b(I,z))}function v(I,z){if(typeof I._construct!="function")return;let j=I._readableState,F=I._writableState;j&&(j.constructed=!1),F&&(F.constructed=!1),I.once(m,z),!(I.listenerCount(m)>1)&&o.nextTick(S,I)}function S(I){let z=!1;function j(F){if(z){A(I,F??new p);return}z=!0;let le=I._readableState,Z=I._writableState,Y=Z||le;le&&(le.constructed=!0),Z&&(Z.constructed=!0),Y.destroyed?I.emit(g,F):F?A(I,F,!0):o.nextTick(x,I)}try{I._construct(F=>{o.nextTick(j,F)})}catch(F){o.nextTick(j,F)}}function x(I){I.emit(m)}function T(I){return I?.setHeader&&typeof I.abort=="function"}function C(I){I.emit("close")}function P(I,z){I.emit("error",z),o.nextTick(C,I)}function B(I,z){!I||e(I)||(!z&&!s(I)&&(z=new n),i(I)?(I.socket=null,I.destroy(z)):T(I)?I.abort():T(I.req)?I.req.abort():typeof I.destroy=="function"?I.destroy(z):typeof I.close=="function"?I.close():z?o.nextTick(P,I,z):o.nextTick(C,I),I.destroyed||(I[r]=!0))}h.exports={construct:v,destroyer:B,destroy:u,undestroy:_,errorOrDestroy:A}}),ci=be((d,h)=>{de(),pe(),ue();var{ArrayIsArray:o,ObjectSetPrototypeOf:a}=Fe(),{EventEmitter:p}=(qt(),Re(Mt));function n(r){p.call(this,r)}a(n.prototype,p.prototype),a(n,p),n.prototype.pipe=function(r,e){let s=this;function i(k){r.writable&&r.write(k)===!1&&s.pause&&s.pause()}s.on("data",i);function g(){s.readable&&s.resume&&s.resume()}r.on("drain",g),!r._isStdio&&(!e||e.end!==!1)&&(s.on("end",l),s.on("close",u));let m=!1;function l(){m||(m=!0,r.end())}function u(){m||(m=!0,typeof r.destroy=="function"&&r.destroy())}function f(k){y(),p.listenerCount(this,"error")===0&&this.emit("error",k)}t(s,"error",f),t(r,"error",f);function y(){s.removeListener("data",i),r.removeListener("drain",g),s.removeListener("end",l),s.removeListener("close",u),s.removeListener("error",f),r.removeListener("error",f),s.removeListener("end",y),s.removeListener("close",y),r.removeListener("close",y)}return s.on("end",y),s.on("close",y),r.on("close",y),r.emit("pipe",s),r};function t(r,e,s){if(typeof r.prependListener=="function")return r.prependListener(e,s);!r._events||!r._events[e]?r.on(e,s):o(r._events[e])?r._events[e].unshift(s):r._events[e]=[s,r._events[e]]}h.exports={Stream:n,prependListener:t}}),Qn=be((d,h)=>{de(),pe(),ue();var{SymbolDispose:o}=Fe(),{AbortError:a,codes:p}=Ze(),{isNodeStream:n,isWebStream:t,kControllerErrorFunction:r}=_t(),e=Ct(),{ERR_INVALID_ARG_TYPE:s}=p,i,g=(m,l)=>{if(typeof m!="object"||!("aborted"in m))throw new s(l,"AbortSignal",m)};h.exports.addAbortSignal=function(m,l){if(g(m,"signal"),!n(l)&&!t(l))throw new s("stream",["ReadableStream","WritableStream","Stream"],l);return h.exports.addAbortSignalNoValidate(m,l)},h.exports.addAbortSignalNoValidate=function(m,l){if(typeof m!="object"||!("aborted"in m))return l;let u=n(l)?()=>{l.destroy(new a(void 0,{cause:m.reason}))}:()=>{l[r](new a(void 0,{cause:m.reason}))};if(m.aborted)u();else{i=i||et().addAbortListener;let f=i(m,u);e(l,f[o])}return l}}),Bl=be((d,h)=>{de(),pe(),ue();var{StringPrototypeSlice:o,SymbolIterator:a,TypedArrayPrototypeSet:p,Uint8Array:n}=Fe(),{Buffer:t}=(Ke(),Re($e)),{inspect:r}=et();h.exports=class{constructor(){this.head=null,this.tail=null,this.length=0}push(e){let s={data:e,next:null};this.length>0?this.tail.next=s:this.head=s,this.tail=s,++this.length}unshift(e){let s={data:e,next:this.head};this.length===0&&(this.tail=s),this.head=s,++this.length}shift(){if(this.length===0)return;let e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}clear(){this.head=this.tail=null,this.length=0}join(e){if(this.length===0)return"";let s=this.head,i=""+s.data;for(;(s=s.next)!==null;)i+=e+s.data;return i}concat(e){if(this.length===0)return t.alloc(0);let s=t.allocUnsafe(e>>>0),i=this.head,g=0;for(;i;)p(s,i.data,g),g+=i.data.length,i=i.next;return s}consume(e,s){let i=this.head.data;if(e<i.length){let g=i.slice(0,e);return this.head.data=i.slice(e),g}return e===i.length?this.shift():s?this._getString(e):this._getBuffer(e)}first(){return this.head.data}*[a](){for(let e=this.head;e;e=e.next)yield e.data}_getString(e){let s="",i=this.head,g=0;do{let m=i.data;if(e>m.length)s+=m,e-=m.length;else{e===m.length?(s+=m,++g,i.next?this.head=i.next:this.head=this.tail=null):(s+=o(m,0,e),this.head=i,i.data=o(m,e));break}++g}while((i=i.next)!==null);return this.length-=g,s}_getBuffer(e){let s=t.allocUnsafe(e),i=e,g=this.head,m=0;do{let l=g.data;if(e>l.length)p(s,l,i-e),e-=l.length;else{e===l.length?(p(s,l,i-e),++m,g.next?this.head=g.next:this.head=this.tail=null):(p(s,new n(l.buffer,l.byteOffset,e),i-e),this.head=g,g.data=l.slice(e));break}++m}while((g=g.next)!==null);return this.length-=m,s}[Symbol.for("nodejs.util.inspect.custom")](e,s){return r(this,{...s,depth:0,customInspect:!1})}}}),Gn=be((d,h)=>{de(),pe(),ue();var{MathFloor:o,NumberIsInteger:a}=Fe(),{validateInteger:p}=pn(),{ERR_INVALID_ARG_VALUE:n}=Ze().codes,t=16*1024,r=16;function e(m,l,u){return m.highWaterMark!=null?m.highWaterMark:l?m[u]:null}function s(m){return m?r:t}function i(m,l){p(l,"value",0),m?r=l:t=l}function g(m,l,u,f){let y=e(l,f,u);if(y!=null){if(!a(y)||y<0){let k=f?`options.${u}`:"options.highWaterMark";throw new n(k,y)}return o(y)}return s(m.objectMode)}h.exports={getHighWaterMark:g,getDefaultHighWaterMark:s,setDefaultHighWaterMark:i}}),Fl=be((d,h)=>{de(),pe(),ue();var o=(Ke(),Re($e)),a=o.Buffer;function p(t,r){for(var e in t)r[e]=t[e]}a.from&&a.alloc&&a.allocUnsafe&&a.allocUnsafeSlow?h.exports=o:(p(o,d),d.Buffer=n);function n(t,r,e){return a(t,r,e)}n.prototype=Object.create(a.prototype),p(a,n),n.from=function(t,r,e){if(typeof t=="number")throw new TypeError("Argument must not be a number");return a(t,r,e)},n.alloc=function(t,r,e){if(typeof t!="number")throw new TypeError("Argument must be a number");var s=a(t);return r!==void 0?typeof e=="string"?s.fill(r,e):s.fill(r):s.fill(0),s},n.allocUnsafe=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return a(t)},n.allocUnsafeSlow=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return o.SlowBuffer(t)}}),Dl=be(d=>{de(),pe(),ue();var h=Fl().Buffer,o=h.isEncoding||function(b){switch(b=""+b,b&&b.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function a(b){if(!b)return"utf8";for(var _;;)switch(b){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return b;default:if(_)return;b=(""+b).toLowerCase(),_=!0}}function p(b){var _=a(b);if(typeof _!="string"&&(h.isEncoding===o||!o(b)))throw new Error("Unknown encoding: "+b);return _||b}d.StringDecoder=n;function n(b){this.encoding=p(b);var _;switch(this.encoding){case"utf16le":this.text=m,this.end=l,_=4;break;case"utf8":this.fillLast=s,_=4;break;case"base64":this.text=u,this.end=f,_=3;break;default:this.write=y,this.end=k;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=h.allocUnsafe(_)}n.prototype.write=function(b){if(b.length===0)return"";var _,A;if(this.lastNeed){if(_=this.fillLast(b),_===void 0)return"";A=this.lastNeed,this.lastNeed=0}else A=0;return A<b.length?_?_+this.text(b,A):this.text(b,A):_||""},n.prototype.end=g,n.prototype.text=i,n.prototype.fillLast=function(b){if(this.lastNeed<=b.length)return b.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);b.copy(this.lastChar,this.lastTotal-this.lastNeed,0,b.length),this.lastNeed-=b.length};function t(b){return b<=127?0:b>>5===6?2:b>>4===14?3:b>>3===30?4:b>>6===2?-1:-2}function r(b,_,A){var v=_.length-1;if(v<A)return 0;var S=t(_[v]);return S>=0?(S>0&&(b.lastNeed=S-1),S):--v<A||S===-2?0:(S=t(_[v]),S>=0?(S>0&&(b.lastNeed=S-2),S):--v<A||S===-2?0:(S=t(_[v]),S>=0?(S>0&&(S===2?S=0:b.lastNeed=S-3),S):0))}function e(b,_,A){if((_[0]&192)!==128)return b.lastNeed=0,"�";if(b.lastNeed>1&&_.length>1){if((_[1]&192)!==128)return b.lastNeed=1,"�";if(b.lastNeed>2&&_.length>2&&(_[2]&192)!==128)return b.lastNeed=2,"�"}}function s(b){var _=this.lastTotal-this.lastNeed,A=e(this,b);if(A!==void 0)return A;if(this.lastNeed<=b.length)return b.copy(this.lastChar,_,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);b.copy(this.lastChar,_,0,b.length),this.lastNeed-=b.length}function i(b,_){var A=r(this,b,_);if(!this.lastNeed)return b.toString("utf8",_);this.lastTotal=A;var v=b.length-(A-this.lastNeed);return b.copy(this.lastChar,0,v),b.toString("utf8",_,v)}function g(b){var _=b&&b.length?this.write(b):"";return this.lastNeed?_+"�":_}function m(b,_){if((b.length-_)%2===0){var A=b.toString("utf16le",_);if(A){var v=A.charCodeAt(A.length-1);if(v>=55296&&v<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=b[b.length-2],this.lastChar[1]=b[b.length-1],A.slice(0,-1)}return A}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=b[b.length-1],b.toString("utf16le",_,b.length-1)}function l(b){var _=b&&b.length?this.write(b):"";if(this.lastNeed){var A=this.lastTotal-this.lastNeed;return _+this.lastChar.toString("utf16le",0,A)}return _}function u(b,_){var A=(b.length-_)%3;return A===0?b.toString("base64",_):(this.lastNeed=3-A,this.lastTotal=3,A===1?this.lastChar[0]=b[b.length-1]:(this.lastChar[0]=b[b.length-2],this.lastChar[1]=b[b.length-1]),b.toString("base64",_,b.length-A))}function f(b){var _=b&&b.length?this.write(b):"";return this.lastNeed?_+this.lastChar.toString("base64",0,3-this.lastNeed):_}function y(b){return b.toString(this.encoding)}function k(b){return b&&b.length?this.write(b):""}}),ro=be((d,h)=>{de(),pe(),ue();var o=jt(),{PromisePrototypeThen:a,SymbolAsyncIterator:p,SymbolIterator:n}=Fe(),{Buffer:t}=(Ke(),Re($e)),{ERR_INVALID_ARG_TYPE:r,ERR_STREAM_NULL_VALUES:e}=Ze().codes;function s(i,g,m){let l;if(typeof g=="string"||g instanceof t)return new i({objectMode:!0,...m,read(){this.push(g),this.push(null)}});let u;if(g&&g[p])u=!0,l=g[p]();else if(g&&g[n])u=!1,l=g[n]();else throw new r("iterable",["Iterable"],g);let f=new i({objectMode:!0,highWaterMark:1,...m}),y=!1;f._read=function(){y||(y=!0,b())},f._destroy=function(_,A){a(k(_),()=>o.nextTick(A,_),v=>o.nextTick(A,v||_))};async function k(_){let A=_!=null,v=typeof l.throw=="function";if(A&&v){let{value:S,done:x}=await l.throw(_);if(await S,x)return}if(typeof l.return=="function"){let{value:S}=await l.return();await S}}async function b(){for(;;){try{let{value:_,done:A}=u?await l.next():l.next();if(A)f.push(null);else{let v=_&&typeof _.then=="function"?await _:_;if(v===null)throw y=!1,new e;if(f.push(v))continue;y=!1}}catch(_){f.destroy(_)}break}}return f}h.exports=s}),Yn=be((d,h)=>{de(),pe(),ue();var o=jt(),{ArrayPrototypeIndexOf:a,NumberIsInteger:p,NumberIsNaN:n,NumberParseInt:t,ObjectDefineProperties:r,ObjectKeys:e,ObjectSetPrototypeOf:s,Promise:i,SafeSet:g,SymbolAsyncDispose:m,SymbolAsyncIterator:l,Symbol:u}=Fe();h.exports=ce,ce.ReadableState=_e;var{EventEmitter:f}=(qt(),Re(Mt)),{Stream:y,prependListener:k}=ci(),{Buffer:b}=(Ke(),Re($e)),{addAbortSignal:_}=Qn(),A=Ct(),v=et().debuglog("stream",M=>{v=M}),S=Bl(),x=Yt(),{getHighWaterMark:T,getDefaultHighWaterMark:C}=Gn(),{aggregateTwoErrors:P,codes:{ERR_INVALID_ARG_TYPE:B,ERR_METHOD_NOT_IMPLEMENTED:I,ERR_OUT_OF_RANGE:z,ERR_STREAM_PUSH_AFTER_EOF:j,ERR_STREAM_UNSHIFT_AFTER_END_EVENT:F},AbortError:le}=Ze(),{validateObject:Z}=pn(),Y=u("kPaused"),{StringDecoder:ie}=Dl(),W=ro();s(ce.prototype,y.prototype),s(ce,y);var ne=()=>{},{errorOrDestroy:O}=x,ee=1,Q=2,q=4,ve=8,L=16,N=32,se=64,V=128,K=256,G=512,fe=1024,oe=2048,R=4096,H=8192,re=16384,me=32768,ge=65536,we=1<<17,$=1<<18;function ye(M){return{enumerable:!1,get(){return(this.state&M)!==0},set(U){U?this.state|=M:this.state&=~M}}}r(_e.prototype,{objectMode:ye(ee),ended:ye(Q),endEmitted:ye(q),reading:ye(ve),constructed:ye(L),sync:ye(N),needReadable:ye(se),emittedReadable:ye(V),readableListening:ye(K),resumeScheduled:ye(G),errorEmitted:ye(fe),emitClose:ye(oe),autoDestroy:ye(R),destroyed:ye(H),closed:ye(re),closeEmitted:ye(me),multiAwaitDrain:ye(ge),readingMore:ye(we),dataEmitted:ye($)});function _e(M,U,ke){typeof ke!="boolean"&&(ke=U instanceof vt()),this.state=oe|R|L|N,M&&M.objectMode&&(this.state|=ee),ke&&M&&M.readableObjectMode&&(this.state|=ee),this.highWaterMark=M?T(this,M,"readableHighWaterMark",ke):C(!1),this.buffer=new S,this.length=0,this.pipes=[],this.flowing=null,this[Y]=null,M&&M.emitClose===!1&&(this.state&=~oe),M&&M.autoDestroy===!1&&(this.state&=~R),this.errored=null,this.defaultEncoding=M&&M.defaultEncoding||"utf8",this.awaitDrainWriters=null,this.decoder=null,this.encoding=null,M&&M.encoding&&(this.decoder=new ie(M.encoding),this.encoding=M.encoding)}function ce(M){if(!(this instanceof ce))return new ce(M);let U=this instanceof vt();this._readableState=new _e(M,this,U),M&&(typeof M.read=="function"&&(this._read=M.read),typeof M.destroy=="function"&&(this._destroy=M.destroy),typeof M.construct=="function"&&(this._construct=M.construct),M.signal&&!U&&_(M.signal,this)),y.call(this,M),x.construct(this,()=>{this._readableState.needReadable&&J(this,this._readableState)})}ce.prototype.destroy=x.destroy,ce.prototype._undestroy=x.undestroy,ce.prototype._destroy=function(M,U){U(M)},ce.prototype[f.captureRejectionSymbol]=function(M){this.destroy(M)},ce.prototype[m]=function(){let M;return this.destroyed||(M=this.readableEnded?null:new le,this.destroy(M)),new i((U,ke)=>A(this,Se=>Se&&Se!==M?ke(Se):U(null)))},ce.prototype.push=function(M,U){return Me(this,M,U,!1)},ce.prototype.unshift=function(M,U){return Me(this,M,U,!0)};function Me(M,U,ke,Se){v("readableAddChunk",U);let Ae=M._readableState,ze;if((Ae.state&ee)===0&&(typeof U=="string"?(ke=ke||Ae.defaultEncoding,Ae.encoding!==ke&&(Se&&Ae.encoding?U=b.from(U,ke).toString(Ae.encoding):(U=b.from(U,ke),ke=""))):U instanceof b?ke="":y._isUint8Array(U)?(U=y._uint8ArrayToBuffer(U),ke=""):U!=null&&(ze=new B("chunk",["string","Buffer","Uint8Array"],U))),ze)O(M,ze);else if(U===null)Ae.state&=~ve,te(M,Ae);else if((Ae.state&ee)!==0||U&&U.length>0)if(Se)if((Ae.state&q)!==0)O(M,new F);else{if(Ae.destroyed||Ae.errored)return!1;c(M,Ae,U,!0)}else if(Ae.ended)O(M,new j);else{if(Ae.destroyed||Ae.errored)return!1;Ae.state&=~ve,Ae.decoder&&!ke?(U=Ae.decoder.write(U),Ae.objectMode||U.length!==0?c(M,Ae,U,!1):J(M,Ae)):c(M,Ae,U,!1)}else Se||(Ae.state&=~ve,J(M,Ae));return!Ae.ended&&(Ae.length<Ae.highWaterMark||Ae.length===0)}function c(M,U,ke,Se){U.flowing&&U.length===0&&!U.sync&&M.listenerCount("data")>0?((U.state&ge)!==0?U.awaitDrainWriters.clear():U.awaitDrainWriters=null,U.dataEmitted=!0,M.emit("data",ke)):(U.length+=U.objectMode?1:ke.length,Se?U.buffer.unshift(ke):U.buffer.push(ke),(U.state&se)!==0&&he(M)),J(M,U)}ce.prototype.isPaused=function(){let M=this._readableState;return M[Y]===!0||M.flowing===!1},ce.prototype.setEncoding=function(M){let U=new ie(M);this._readableState.decoder=U,this._readableState.encoding=this._readableState.decoder.encoding;let ke=this._readableState.buffer,Se="";for(let Ae of ke)Se+=U.write(Ae);return ke.clear(),Se!==""&&ke.push(Se),this._readableState.length=Se.length,this};var w=1073741824;function E(M){if(M>w)throw new z("size","<= 1GiB",M);return M--,M|=M>>>1,M|=M>>>2,M|=M>>>4,M|=M>>>8,M|=M>>>16,M++,M}function D(M,U){return M<=0||U.length===0&&U.ended?0:(U.state&ee)!==0?1:n(M)?U.flowing&&U.length?U.buffer.first().length:U.length:M<=U.length?M:U.ended?U.length:0}ce.prototype.read=function(M){v("read",M),M===void 0?M=NaN:p(M)||(M=t(M,10));let U=this._readableState,ke=M;if(M>U.highWaterMark&&(U.highWaterMark=E(M)),M!==0&&(U.state&=~V),M===0&&U.needReadable&&((U.highWaterMark!==0?U.length>=U.highWaterMark:U.length>0)||U.ended))return v("read: emitReadable",U.length,U.ended),U.length===0&&U.ended?ot(this):he(this),null;if(M=D(M,U),M===0&&U.ended)return U.length===0&&ot(this),null;let Se=(U.state&se)!==0;if(v("need readable",Se),(U.length===0||U.length-M<U.highWaterMark)&&(Se=!0,v("length less than watermark",Se)),U.ended||U.reading||U.destroyed||U.errored||!U.constructed)Se=!1,v("reading, ended or constructing",Se);else if(Se){v("do read"),U.state|=ve|N,U.length===0&&(U.state|=se);try{this._read(U.highWaterMark)}catch(ze){O(this,ze)}U.state&=~N,U.reading||(M=D(ke,U))}let Ae;return M>0?Ae=Ft(M,U):Ae=null,Ae===null?(U.needReadable=U.length<=U.highWaterMark,M=0):(U.length-=M,U.multiAwaitDrain?U.awaitDrainWriters.clear():U.awaitDrainWriters=null),U.length===0&&(U.ended||(U.needReadable=!0),ke!==M&&U.ended&&ot(this)),Ae!==null&&!U.errorEmitted&&!U.closeEmitted&&(U.dataEmitted=!0,this.emit("data",Ae)),Ae};function te(M,U){if(v("onEofChunk"),!U.ended){if(U.decoder){let ke=U.decoder.end();ke&&ke.length&&(U.buffer.push(ke),U.length+=U.objectMode?1:ke.length)}U.ended=!0,U.sync?he(M):(U.needReadable=!1,U.emittedReadable=!0,xe(M))}}function he(M){let U=M._readableState;v("emitReadable",U.needReadable,U.emittedReadable),U.needReadable=!1,U.emittedReadable||(v("emitReadable",U.flowing),U.emittedReadable=!0,o.nextTick(xe,M))}function xe(M){let U=M._readableState;v("emitReadable_",U.destroyed,U.length,U.ended),!U.destroyed&&!U.errored&&(U.length||U.ended)&&(M.emit("readable"),U.emittedReadable=!1),U.needReadable=!U.flowing&&!U.ended&&U.length<=U.highWaterMark,it(M)}function J(M,U){!U.readingMore&&U.constructed&&(U.readingMore=!0,o.nextTick(ae,M,U))}function ae(M,U){for(;!U.reading&&!U.ended&&(U.length<U.highWaterMark||U.flowing&&U.length===0);){let ke=U.length;if(v("maybeReadMore read 0"),M.read(0),ke===U.length)break}U.readingMore=!1}ce.prototype._read=function(M){throw new I("_read()")},ce.prototype.pipe=function(M,U){let ke=this,Se=this._readableState;Se.pipes.length===1&&(Se.multiAwaitDrain||(Se.multiAwaitDrain=!0,Se.awaitDrainWriters=new g(Se.awaitDrainWriters?[Se.awaitDrainWriters]:[]))),Se.pipes.push(M),v("pipe count=%d opts=%j",Se.pipes.length,U);let Ae=(!U||U.end!==!1)&&M!==o.stdout&&M!==o.stderr?Xe:Ot;Se.endEmitted?o.nextTick(Ae):ke.once("end",Ae),M.on("unpipe",ze);function ze(ct,pt){v("onunpipe"),ct===ke&&pt&&pt.hasUnpiped===!1&&(pt.hasUnpiped=!0,tn())}function Xe(){v("onend"),M.end()}let rt,en=!1;function tn(){v("cleanup"),M.removeListener("close",lt),M.removeListener("finish",St),rt&&M.removeListener("drain",rt),M.removeListener("error",Pt),M.removeListener("unpipe",ze),ke.removeListener("end",Xe),ke.removeListener("end",Ot),ke.removeListener("data",mn),en=!0,rt&&Se.awaitDrainWriters&&(!M._writableState||M._writableState.needDrain)&&rt()}function nn(){en||(Se.pipes.length===1&&Se.pipes[0]===M?(v("false write response, pause",0),Se.awaitDrainWriters=M,Se.multiAwaitDrain=!1):Se.pipes.length>1&&Se.pipes.includes(M)&&(v("false write response, pause",Se.awaitDrainWriters.size),Se.awaitDrainWriters.add(M)),ke.pause()),rt||(rt=Ee(ke,M),M.on("drain",rt))}ke.on("data",mn);function mn(ct){v("ondata");let pt=M.write(ct);v("dest.write",pt),pt===!1&&nn()}function Pt(ct){if(v("onerror",ct),Ot(),M.removeListener("error",Pt),M.listenerCount("error")===0){let pt=M._writableState||M._readableState;pt&&!pt.errorEmitted?O(M,ct):M.emit("error",ct)}}k(M,"error",Pt);function lt(){M.removeListener("finish",St),Ot()}M.once("close",lt);function St(){v("onfinish"),M.removeListener("close",lt),Ot()}M.once("finish",St);function Ot(){v("unpipe"),ke.unpipe(M)}return M.emit("pipe",ke),M.writableNeedDrain===!0?nn():Se.flowing||(v("pipe resume"),ke.resume()),M};function Ee(M,U){return function(){let ke=M._readableState;ke.awaitDrainWriters===U?(v("pipeOnDrain",1),ke.awaitDrainWriters=null):ke.multiAwaitDrain&&(v("pipeOnDrain",ke.awaitDrainWriters.size),ke.awaitDrainWriters.delete(U)),(!ke.awaitDrainWriters||ke.awaitDrainWriters.size===0)&&M.listenerCount("data")&&M.resume()}}ce.prototype.unpipe=function(M){let U=this._readableState,ke={hasUnpiped:!1};if(U.pipes.length===0)return this;if(!M){let Ae=U.pipes;U.pipes=[],this.pause();for(let ze=0;ze<Ae.length;ze++)Ae[ze].emit("unpipe",this,{hasUnpiped:!1});return this}let Se=a(U.pipes,M);return Se===-1?this:(U.pipes.splice(Se,1),U.pipes.length===0&&this.pause(),M.emit("unpipe",this,ke),this)},ce.prototype.on=function(M,U){let ke=y.prototype.on.call(this,M,U),Se=this._readableState;return M==="data"?(Se.readableListening=this.listenerCount("readable")>0,Se.flowing!==!1&&this.resume()):M==="readable"&&!Se.endEmitted&&!Se.readableListening&&(Se.readableListening=Se.needReadable=!0,Se.flowing=!1,Se.emittedReadable=!1,v("on readable",Se.length,Se.reading),Se.length?he(this):Se.reading||o.nextTick(Ie,this)),ke},ce.prototype.addListener=ce.prototype.on,ce.prototype.removeListener=function(M,U){let ke=y.prototype.removeListener.call(this,M,U);return M==="readable"&&o.nextTick(Te,this),ke},ce.prototype.off=ce.prototype.removeListener,ce.prototype.removeAllListeners=function(M){let U=y.prototype.removeAllListeners.apply(this,arguments);return(M==="readable"||M===void 0)&&o.nextTick(Te,this),U};function Te(M){let U=M._readableState;U.readableListening=M.listenerCount("readable")>0,U.resumeScheduled&&U[Y]===!1?U.flowing=!0:M.listenerCount("data")>0?M.resume():U.readableListening||(U.flowing=null)}function Ie(M){v("readable nexttick read 0"),M.read(0)}ce.prototype.resume=function(){let M=this._readableState;return M.flowing||(v("resume"),M.flowing=!M.readableListening,Ce(this,M)),M[Y]=!1,this};function Ce(M,U){U.resumeScheduled||(U.resumeScheduled=!0,o.nextTick(st,M,U))}function st(M,U){v("resume",U.reading),U.reading||M.read(0),U.resumeScheduled=!1,M.emit("resume"),it(M),U.flowing&&!U.reading&&M.read(0)}ce.prototype.pause=function(){return v("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(v("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState[Y]=!0,this};function it(M){let U=M._readableState;for(v("flow",U.flowing);U.flowing&&M.read()!==null;);}ce.prototype.wrap=function(M){let U=!1;M.on("data",Se=>{!this.push(Se)&&M.pause&&(U=!0,M.pause())}),M.on("end",()=>{this.push(null)}),M.on("error",Se=>{O(this,Se)}),M.on("close",()=>{this.destroy()}),M.on("destroy",()=>{this.destroy()}),this._read=()=>{U&&M.resume&&(U=!1,M.resume())};let ke=e(M);for(let Se=1;Se<ke.length;Se++){let Ae=ke[Se];this[Ae]===void 0&&typeof M[Ae]=="function"&&(this[Ae]=M[Ae].bind(M))}return this},ce.prototype[l]=function(){return Ve(this)},ce.prototype.iterator=function(M){return M!==void 0&&Z(M,"options"),Ve(this,M)};function Ve(M,U){typeof M.read!="function"&&(M=ce.wrap(M,{objectMode:!0}));let ke=at(M,U);return ke.stream=M,ke}async function*at(M,U){let ke=ne;function Se(Xe){this===M?(ke(),ke=ne):ke=Xe}M.on("readable",Se);let Ae,ze=A(M,{writable:!1},Xe=>{Ae=Xe?P(Ae,Xe):null,ke(),ke=ne});try{for(;;){let Xe=M.destroyed?null:M.read();if(Xe!==null)yield Xe;else{if(Ae)throw Ae;if(Ae===null)return;await new i(Se)}}}catch(Xe){throw Ae=P(Ae,Xe),Ae}finally{(Ae||U?.destroyOnReturn!==!1)&&(Ae===void 0||M._readableState.autoDestroy)?x.destroyer(M,null):(M.off("readable",Se),ze())}}r(ce.prototype,{readable:{__proto__:null,get(){let M=this._readableState;return!!M&&M.readable!==!1&&!M.destroyed&&!M.errorEmitted&&!M.endEmitted},set(M){this._readableState&&(this._readableState.readable=!!M)}},readableDidRead:{__proto__:null,enumerable:!1,get:function(){return this._readableState.dataEmitted}},readableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._readableState.readable!==!1&&(this._readableState.destroyed||this._readableState.errored)&&!this._readableState.endEmitted)}},readableHighWaterMark:{__proto__:null,enumerable:!1,get:function(){return this._readableState.highWaterMark}},readableBuffer:{__proto__:null,enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}},readableFlowing:{__proto__:null,enumerable:!1,get:function(){return this._readableState.flowing},set:function(M){this._readableState&&(this._readableState.flowing=M)}},readableLength:{__proto__:null,enumerable:!1,get(){return this._readableState.length}},readableObjectMode:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.objectMode:!1}},readableEncoding:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.encoding:null}},errored:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.errored:null}},closed:{__proto__:null,get(){return this._readableState?this._readableState.closed:!1}},destroyed:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.destroyed:!1},set(M){this._readableState&&(this._readableState.destroyed=M)}},readableEnded:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.endEmitted:!1}}}),r(_e.prototype,{pipesCount:{__proto__:null,get(){return this.pipes.length}},paused:{__proto__:null,get(){return this[Y]!==!1},set(M){this[Y]=!!M}}}),ce._fromList=Ft;function Ft(M,U){if(U.length===0)return null;let ke;return U.objectMode?ke=U.buffer.shift():!M||M>=U.length?(U.decoder?ke=U.buffer.join(""):U.buffer.length===1?ke=U.buffer.first():ke=U.buffer.concat(U.length),U.buffer.clear()):ke=U.buffer.consume(M,U.decoder),ke}function ot(M){let U=M._readableState;v("endReadable",U.endEmitted),U.endEmitted||(U.ended=!0,o.nextTick(nt,U,M))}function nt(M,U){if(v("endReadableNT",M.endEmitted,M.length),!M.errored&&!M.closeEmitted&&!M.endEmitted&&M.length===0){if(M.endEmitted=!0,U.emit("end"),U.writable&&U.allowHalfOpen===!1)o.nextTick(fn,U);else if(M.autoDestroy){let ke=U._writableState;(!ke||ke.autoDestroy&&(ke.finished||ke.writable===!1))&&U.destroy()}}}function fn(M){M.writable&&!M.writableEnded&&!M.destroyed&&M.end()}ce.from=function(M,U){return W(ce,M,U)};var Dt;function Zt(){return Dt===void 0&&(Dt={}),Dt}ce.fromWeb=function(M,U){return Zt().newStreamReadableFromReadableStream(M,U)},ce.toWeb=function(M,U){return Zt().newReadableStreamFromStreamReadable(M,U)},ce.wrap=function(M,U){var ke,Se;return new ce({objectMode:(ke=(Se=M.readableObjectMode)!==null&&Se!==void 0?Se:M.objectMode)!==null&&ke!==void 0?ke:!0,...U,destroy(Ae,ze){x.destroyer(M,Ae),ze(Ae)}}).wrap(M)}}),di=be((d,h)=>{de(),pe(),ue();var o=jt(),{ArrayPrototypeSlice:a,Error:p,FunctionPrototypeSymbolHasInstance:n,ObjectDefineProperty:t,ObjectDefineProperties:r,ObjectSetPrototypeOf:e,StringPrototypeToLowerCase:s,Symbol:i,SymbolHasInstance:g}=Fe();h.exports=Z,Z.WritableState=F;var{EventEmitter:m}=(qt(),Re(Mt)),l=ci().Stream,{Buffer:u}=(Ke(),Re($e)),f=Yt(),{addAbortSignal:y}=Qn(),{getHighWaterMark:k,getDefaultHighWaterMark:b}=Gn(),{ERR_INVALID_ARG_TYPE:_,ERR_METHOD_NOT_IMPLEMENTED:A,ERR_MULTIPLE_CALLBACK:v,ERR_STREAM_CANNOT_PIPE:S,ERR_STREAM_DESTROYED:x,ERR_STREAM_ALREADY_FINISHED:T,ERR_STREAM_NULL_VALUES:C,ERR_STREAM_WRITE_AFTER_END:P,ERR_UNKNOWN_ENCODING:B}=Ze().codes,{errorOrDestroy:I}=f;e(Z.prototype,l.prototype),e(Z,l);function z(){}var j=i("kOnFinished");function F(R,H,re){typeof re!="boolean"&&(re=H instanceof vt()),this.objectMode=!!(R&&R.objectMode),re&&(this.objectMode=this.objectMode||!!(R&&R.writableObjectMode)),this.highWaterMark=R?k(this,R,"writableHighWaterMark",re):b(!1),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;let me=!!(R&&R.decodeStrings===!1);this.decodeStrings=!me,this.defaultEncoding=R&&R.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=O.bind(void 0,H),this.writecb=null,this.writelen=0,this.afterWriteTickInfo=null,le(this),this.pendingcb=0,this.constructed=!0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!R||R.emitClose!==!1,this.autoDestroy=!R||R.autoDestroy!==!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this[j]=[]}function le(R){R.buffered=[],R.bufferedIndex=0,R.allBuffers=!0,R.allNoop=!0}F.prototype.getBuffer=function(){return a(this.buffered,this.bufferedIndex)},t(F.prototype,"bufferedRequestCount",{__proto__:null,get(){return this.buffered.length-this.bufferedIndex}});function Z(R){let H=this instanceof vt();if(!H&&!n(Z,this))return new Z(R);this._writableState=new F(R,this,H),R&&(typeof R.write=="function"&&(this._write=R.write),typeof R.writev=="function"&&(this._writev=R.writev),typeof R.destroy=="function"&&(this._destroy=R.destroy),typeof R.final=="function"&&(this._final=R.final),typeof R.construct=="function"&&(this._construct=R.construct),R.signal&&y(R.signal,this)),l.call(this,R),f.construct(this,()=>{let re=this._writableState;re.writing||ve(this,re),V(this,re)})}t(Z,g,{__proto__:null,value:function(R){return n(this,R)?!0:this!==Z?!1:R&&R._writableState instanceof F}}),Z.prototype.pipe=function(){I(this,new S)};function Y(R,H,re,me){let ge=R._writableState;if(typeof re=="function")me=re,re=ge.defaultEncoding;else{if(!re)re=ge.defaultEncoding;else if(re!=="buffer"&&!u.isEncoding(re))throw new B(re);typeof me!="function"&&(me=z)}if(H===null)throw new C;if(!ge.objectMode)if(typeof H=="string")ge.decodeStrings!==!1&&(H=u.from(H,re),re="buffer");else if(H instanceof u)re="buffer";else if(l._isUint8Array(H))H=l._uint8ArrayToBuffer(H),re="buffer";else throw new _("chunk",["string","Buffer","Uint8Array"],H);let we;return ge.ending?we=new P:ge.destroyed&&(we=new x("write")),we?(o.nextTick(me,we),I(R,we,!0),we):(ge.pendingcb++,ie(R,ge,H,re,me))}Z.prototype.write=function(R,H,re){return Y(this,R,H,re)===!0},Z.prototype.cork=function(){this._writableState.corked++},Z.prototype.uncork=function(){let R=this._writableState;R.corked&&(R.corked--,R.writing||ve(this,R))},Z.prototype.setDefaultEncoding=function(R){if(typeof R=="string"&&(R=s(R)),!u.isEncoding(R))throw new B(R);return this._writableState.defaultEncoding=R,this};function ie(R,H,re,me,ge){let we=H.objectMode?1:re.length;H.length+=we;let $=H.length<H.highWaterMark;return $||(H.needDrain=!0),H.writing||H.corked||H.errored||!H.constructed?(H.buffered.push({chunk:re,encoding:me,callback:ge}),H.allBuffers&&me!=="buffer"&&(H.allBuffers=!1),H.allNoop&&ge!==z&&(H.allNoop=!1)):(H.writelen=we,H.writecb=ge,H.writing=!0,H.sync=!0,R._write(re,me,H.onwrite),H.sync=!1),$&&!H.errored&&!H.destroyed}function W(R,H,re,me,ge,we,$){H.writelen=me,H.writecb=$,H.writing=!0,H.sync=!0,H.destroyed?H.onwrite(new x("write")):re?R._writev(ge,H.onwrite):R._write(ge,we,H.onwrite),H.sync=!1}function ne(R,H,re,me){--H.pendingcb,me(re),q(H),I(R,re)}function O(R,H){let re=R._writableState,me=re.sync,ge=re.writecb;if(typeof ge!="function"){I(R,new v);return}re.writing=!1,re.writecb=null,re.length-=re.writelen,re.writelen=0,H?(H.stack,re.errored||(re.errored=H),R._readableState&&!R._readableState.errored&&(R._readableState.errored=H),me?o.nextTick(ne,R,re,H,ge):ne(R,re,H,ge)):(re.buffered.length>re.bufferedIndex&&ve(R,re),me?re.afterWriteTickInfo!==null&&re.afterWriteTickInfo.cb===ge?re.afterWriteTickInfo.count++:(re.afterWriteTickInfo={count:1,cb:ge,stream:R,state:re},o.nextTick(ee,re.afterWriteTickInfo)):Q(R,re,1,ge))}function ee({stream:R,state:H,count:re,cb:me}){return H.afterWriteTickInfo=null,Q(R,H,re,me)}function Q(R,H,re,me){for(!H.ending&&!R.destroyed&&H.length===0&&H.needDrain&&(H.needDrain=!1,R.emit("drain"));re-- >0;)H.pendingcb--,me();H.destroyed&&q(H),V(R,H)}function q(R){if(R.writing)return;for(let ge=R.bufferedIndex;ge<R.buffered.length;++ge){var H;let{chunk:we,callback:$}=R.buffered[ge],ye=R.objectMode?1:we.length;R.length-=ye,$((H=R.errored)!==null&&H!==void 0?H:new x("write"))}let re=R[j].splice(0);for(let ge=0;ge<re.length;ge++){var me;re[ge]((me=R.errored)!==null&&me!==void 0?me:new x("end"))}le(R)}function ve(R,H){if(H.corked||H.bufferProcessing||H.destroyed||!H.constructed)return;let{buffered:re,bufferedIndex:me,objectMode:ge}=H,we=re.length-me;if(!we)return;let $=me;if(H.bufferProcessing=!0,we>1&&R._writev){H.pendingcb-=we-1;let ye=H.allNoop?z:ce=>{for(let Me=$;Me<re.length;++Me)re[Me].callback(ce)},_e=H.allNoop&&$===0?re:a(re,$);_e.allBuffers=H.allBuffers,W(R,H,!0,H.length,_e,"",ye),le(H)}else{do{let{chunk:ye,encoding:_e,callback:ce}=re[$];re[$++]=null;let Me=ge?1:ye.length;W(R,H,!1,Me,ye,_e,ce)}while($<re.length&&!H.writing);$===re.length?le(H):$>256?(re.splice(0,$),H.bufferedIndex=0):H.bufferedIndex=$}H.bufferProcessing=!1}Z.prototype._write=function(R,H,re){if(this._writev)this._writev([{chunk:R,encoding:H}],re);else throw new A("_write()")},Z.prototype._writev=null,Z.prototype.end=function(R,H,re){let me=this._writableState;typeof R=="function"?(re=R,R=null,H=null):typeof H=="function"&&(re=H,H=null);let ge;if(R!=null){let we=Y(this,R,H);we instanceof p&&(ge=we)}return me.corked&&(me.corked=1,this.uncork()),ge||(!me.errored&&!me.ending?(me.ending=!0,V(this,me,!0),me.ended=!0):me.finished?ge=new T("end"):me.destroyed&&(ge=new x("end"))),typeof re=="function"&&(ge||me.finished?o.nextTick(re,ge):me[j].push(re)),this};function L(R){return R.ending&&!R.destroyed&&R.constructed&&R.length===0&&!R.errored&&R.buffered.length===0&&!R.finished&&!R.writing&&!R.errorEmitted&&!R.closeEmitted}function N(R,H){let re=!1;function me(ge){if(re){I(R,ge??v());return}if(re=!0,H.pendingcb--,ge){let we=H[j].splice(0);for(let $=0;$<we.length;$++)we[$](ge);I(R,ge,H.sync)}else L(H)&&(H.prefinished=!0,R.emit("prefinish"),H.pendingcb++,o.nextTick(K,R,H))}H.sync=!0,H.pendingcb++;try{R._final(me)}catch(ge){me(ge)}H.sync=!1}function se(R,H){!H.prefinished&&!H.finalCalled&&(typeof R._final=="function"&&!H.destroyed?(H.finalCalled=!0,N(R,H)):(H.prefinished=!0,R.emit("prefinish")))}function V(R,H,re){L(H)&&(se(R,H),H.pendingcb===0&&(re?(H.pendingcb++,o.nextTick((me,ge)=>{L(ge)?K(me,ge):ge.pendingcb--},R,H)):L(H)&&(H.pendingcb++,K(R,H))))}function K(R,H){H.pendingcb--,H.finished=!0;let re=H[j].splice(0);for(let me=0;me<re.length;me++)re[me]();if(R.emit("finish"),H.autoDestroy){let me=R._readableState;(!me||me.autoDestroy&&(me.endEmitted||me.readable===!1))&&R.destroy()}}r(Z.prototype,{closed:{__proto__:null,get(){return this._writableState?this._writableState.closed:!1}},destroyed:{__proto__:null,get(){return this._writableState?this._writableState.destroyed:!1},set(R){this._writableState&&(this._writableState.destroyed=R)}},writable:{__proto__:null,get(){let R=this._writableState;return!!R&&R.writable!==!1&&!R.destroyed&&!R.errored&&!R.ending&&!R.ended},set(R){this._writableState&&(this._writableState.writable=!!R)}},writableFinished:{__proto__:null,get(){return this._writableState?this._writableState.finished:!1}},writableObjectMode:{__proto__:null,get(){return this._writableState?this._writableState.objectMode:!1}},writableBuffer:{__proto__:null,get(){return this._writableState&&this._writableState.getBuffer()}},writableEnded:{__proto__:null,get(){return this._writableState?this._writableState.ending:!1}},writableNeedDrain:{__proto__:null,get(){let R=this._writableState;return R?!R.destroyed&&!R.ending&&R.needDrain:!1}},writableHighWaterMark:{__proto__:null,get(){return this._writableState&&this._writableState.highWaterMark}},writableCorked:{__proto__:null,get(){return this._writableState?this._writableState.corked:0}},writableLength:{__proto__:null,get(){return this._writableState&&this._writableState.length}},errored:{__proto__:null,enumerable:!1,get(){return this._writableState?this._writableState.errored:null}},writableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._writableState.writable!==!1&&(this._writableState.destroyed||this._writableState.errored)&&!this._writableState.finished)}}});var G=f.destroy;Z.prototype.destroy=function(R,H){let re=this._writableState;return!re.destroyed&&(re.bufferedIndex<re.buffered.length||re[j].length)&&o.nextTick(q,re),G.call(this,R,H),this},Z.prototype._undestroy=f.undestroy,Z.prototype._destroy=function(R,H){H(R)},Z.prototype[m.captureRejectionSymbol]=function(R){this.destroy(R)};var fe;function oe(){return fe===void 0&&(fe={}),fe}Z.fromWeb=function(R,H){return oe().newStreamWritableFromWritableStream(R,H)},Z.toWeb=function(R){return oe().newWritableStreamFromStreamWritable(R)}}),Wl=be((d,h)=>{de(),pe(),ue();var o=jt(),a=(Ke(),Re($e)),{isReadable:p,isWritable:n,isIterable:t,isNodeStream:r,isReadableNodeStream:e,isWritableNodeStream:s,isDuplexNodeStream:i,isReadableStream:g,isWritableStream:m}=_t(),l=Ct(),{AbortError:u,codes:{ERR_INVALID_ARG_TYPE:f,ERR_INVALID_RETURN_VALUE:y}}=Ze(),{destroyer:k}=Yt(),b=vt(),_=Yn(),A=di(),{createDeferredPromise:v}=et(),S=ro(),x=globalThis.Blob||a.Blob,T=typeof x<"u"?function(j){return j instanceof x}:function(j){return!1},C=globalThis.AbortController||un().AbortController,{FunctionPrototypeCall:P}=Fe(),B=class extends b{constructor(j){super(j),j?.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),j?.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)}};h.exports=function j(F,le){if(i(F))return F;if(e(F))return z({readable:F});if(s(F))return z({writable:F});if(r(F))return z({writable:!1,readable:!1});if(g(F))return z({readable:_.fromWeb(F)});if(m(F))return z({writable:A.fromWeb(F)});if(typeof F=="function"){let{value:Y,write:ie,final:W,destroy:ne}=I(F);if(t(Y))return S(B,Y,{objectMode:!0,write:ie,final:W,destroy:ne});let O=Y?.then;if(typeof O=="function"){let ee,Q=P(O,Y,q=>{if(q!=null)throw new y("nully","body",q)},q=>{k(ee,q)});return ee=new B({objectMode:!0,readable:!1,write:ie,final(q){W(async()=>{try{await Q,o.nextTick(q,null)}catch(ve){o.nextTick(q,ve)}})},destroy:ne})}throw new y("Iterable, AsyncIterable or AsyncFunction",le,Y)}if(T(F))return j(F.arrayBuffer());if(t(F))return S(B,F,{objectMode:!0,writable:!1});if(g(F?.readable)&&m(F?.writable))return B.fromWeb(F);if(typeof F?.writable=="object"||typeof F?.readable=="object"){let Y=F!=null&&F.readable?e(F?.readable)?F?.readable:j(F.readable):void 0,ie=F!=null&&F.writable?s(F?.writable)?F?.writable:j(F.writable):void 0;return z({readable:Y,writable:ie})}let Z=F?.then;if(typeof Z=="function"){let Y;return P(Z,F,ie=>{ie!=null&&Y.push(ie),Y.push(null)},ie=>{k(Y,ie)}),Y=new B({objectMode:!0,writable:!1,read(){}})}throw new f(le,["Blob","ReadableStream","WritableStream","Stream","Iterable","AsyncIterable","Function","{ readable, writable } pair","Promise"],F)};function I(j){let{promise:F,resolve:le}=v(),Z=new C,Y=Z.signal;return{value:j((async function*(){for(;;){let ie=F;F=null;let{chunk:W,done:ne,cb:O}=await ie;if(o.nextTick(O),ne)return;if(Y.aborted)throw new u(void 0,{cause:Y.reason});({promise:F,resolve:le}=v()),yield W}})(),{signal:Y}),write(ie,W,ne){let O=le;le=null,O({chunk:ie,done:!1,cb:ne})},final(ie){let W=le;le=null,W({done:!0,cb:ie})},destroy(ie,W){Z.abort(),W(ie)}}}function z(j){let F=j.readable&&typeof j.readable.read!="function"?_.wrap(j.readable):j.readable,le=j.writable,Z=!!p(F),Y=!!n(le),ie,W,ne,O,ee;function Q(q){let ve=O;O=null,ve?ve(q):q&&ee.destroy(q)}return ee=new B({readableObjectMode:!!(F!=null&&F.readableObjectMode),writableObjectMode:!!(le!=null&&le.writableObjectMode),readable:Z,writable:Y}),Y&&(l(le,q=>{Y=!1,q&&k(F,q),Q(q)}),ee._write=function(q,ve,L){le.write(q,ve)?L():ie=L},ee._final=function(q){le.end(),W=q},le.on("drain",function(){if(ie){let q=ie;ie=null,q()}}),le.on("finish",function(){if(W){let q=W;W=null,q()}})),Z&&(l(F,q=>{Z=!1,q&&k(F,q),Q(q)}),F.on("readable",function(){if(ne){let q=ne;ne=null,q()}}),F.on("end",function(){ee.push(null)}),ee._read=function(){for(;;){let q=F.read();if(q===null){ne=ee._read;return}if(!ee.push(q))return}}),ee._destroy=function(q,ve){!q&&O!==null&&(q=new u),ne=null,ie=null,W=null,O===null?ve(q):(O=ve,k(le,q),k(F,q))},ee}}),vt=be((d,h)=>{de(),pe(),ue();var{ObjectDefineProperties:o,ObjectGetOwnPropertyDescriptor:a,ObjectKeys:p,ObjectSetPrototypeOf:n}=Fe();h.exports=e;var t=Yn(),r=di();n(e.prototype,t.prototype),n(e,t);{let m=p(r.prototype);for(let l=0;l<m.length;l++){let u=m[l];e.prototype[u]||(e.prototype[u]=r.prototype[u])}}function e(m){if(!(this instanceof e))return new e(m);t.call(this,m),r.call(this,m),m?(this.allowHalfOpen=m.allowHalfOpen!==!1,m.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),m.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)):this.allowHalfOpen=!0}o(e.prototype,{writable:{__proto__:null,...a(r.prototype,"writable")},writableHighWaterMark:{__proto__:null,...a(r.prototype,"writableHighWaterMark")},writableObjectMode:{__proto__:null,...a(r.prototype,"writableObjectMode")},writableBuffer:{__proto__:null,...a(r.prototype,"writableBuffer")},writableLength:{__proto__:null,...a(r.prototype,"writableLength")},writableFinished:{__proto__:null,...a(r.prototype,"writableFinished")},writableCorked:{__proto__:null,...a(r.prototype,"writableCorked")},writableEnded:{__proto__:null,...a(r.prototype,"writableEnded")},writableNeedDrain:{__proto__:null,...a(r.prototype,"writableNeedDrain")},destroyed:{__proto__:null,get(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set(m){this._readableState&&this._writableState&&(this._readableState.destroyed=m,this._writableState.destroyed=m)}}});var s;function i(){return s===void 0&&(s={}),s}e.fromWeb=function(m,l){return i().newStreamDuplexFromReadableWritablePair(m,l)},e.toWeb=function(m){return i().newReadableWritablePairFromDuplex(m)};var g;e.from=function(m){return g||(g=Wl()),g(m,"body")}}),so=be((d,h)=>{de(),pe(),ue();var{ObjectSetPrototypeOf:o,Symbol:a}=Fe();h.exports=e;var{ERR_METHOD_NOT_IMPLEMENTED:p}=Ze().codes,n=vt(),{getHighWaterMark:t}=Gn();o(e.prototype,n.prototype),o(e,n);var r=a("kCallback");function e(g){if(!(this instanceof e))return new e(g);let m=g?t(this,g,"readableHighWaterMark",!0):null;m===0&&(g={...g,highWaterMark:null,readableHighWaterMark:m,writableHighWaterMark:g.writableHighWaterMark||0}),n.call(this,g),this._readableState.sync=!1,this[r]=null,g&&(typeof g.transform=="function"&&(this._transform=g.transform),typeof g.flush=="function"&&(this._flush=g.flush)),this.on("prefinish",i)}function s(g){typeof this._flush=="function"&&!this.destroyed?this._flush((m,l)=>{if(m){g?g(m):this.destroy(m);return}l!=null&&this.push(l),this.push(null),g&&g()}):(this.push(null),g&&g())}function i(){this._final!==s&&s.call(this)}e.prototype._final=s,e.prototype._transform=function(g,m,l){throw new p("_transform()")},e.prototype._write=function(g,m,l){let u=this._readableState,f=this._writableState,y=u.length;this._transform(g,m,(k,b)=>{if(k){l(k);return}b!=null&&this.push(b),f.ended||y===u.length||u.length<u.highWaterMark?l():this[r]=l})},e.prototype._read=function(){if(this[r]){let g=this[r];this[r]=null,g()}}}),io=be((d,h)=>{de(),pe(),ue();var{ObjectSetPrototypeOf:o}=Fe();h.exports=p;var a=so();o(p.prototype,a.prototype),o(p,a);function p(n){if(!(this instanceof p))return new p(n);a.call(this,n)}p.prototype._transform=function(n,t,r){r(null,n)}}),ui=be((d,h)=>{de(),pe(),ue();var o=jt(),{ArrayIsArray:a,Promise:p,SymbolAsyncIterator:n,SymbolDispose:t}=Fe(),r=Ct(),{once:e}=et(),s=Yt(),i=vt(),{aggregateTwoErrors:g,codes:{ERR_INVALID_ARG_TYPE:m,ERR_INVALID_RETURN_VALUE:l,ERR_MISSING_ARGS:u,ERR_STREAM_DESTROYED:f,ERR_STREAM_PREMATURE_CLOSE:y},AbortError:k}=Ze(),{validateFunction:b,validateAbortSignal:_}=pn(),{isIterable:A,isReadable:v,isReadableNodeStream:S,isNodeStream:x,isTransformStream:T,isWebStream:C,isReadableStream:P,isReadableFinished:B}=_t(),I=globalThis.AbortController||un().AbortController,z,j,F;function le(q,ve,L){let N=!1;q.on("close",()=>{N=!0});let se=r(q,{readable:ve,writable:L},V=>{N=!V});return{destroy:V=>{N||(N=!0,s.destroyer(q,V||new f("pipe")))},cleanup:se}}function Z(q){return b(q[q.length-1],"streams[stream.length - 1]"),q.pop()}function Y(q){if(A(q))return q;if(S(q))return ie(q);throw new m("val",["Readable","Iterable","AsyncIterable"],q)}async function*ie(q){j||(j=Yn()),yield*j.prototype[n].call(q)}async function W(q,ve,L,{end:N}){let se,V=null,K=oe=>{if(oe&&(se=oe),V){let R=V;V=null,R()}},G=()=>new p((oe,R)=>{se?R(se):V=()=>{se?R(se):oe()}});ve.on("drain",K);let fe=r(ve,{readable:!1},K);try{ve.writableNeedDrain&&await G();for await(let oe of q)ve.write(oe)||await G();N&&(ve.end(),await G()),L()}catch(oe){L(se!==oe?g(se,oe):oe)}finally{fe(),ve.off("drain",K)}}async function ne(q,ve,L,{end:N}){T(ve)&&(ve=ve.writable);let se=ve.getWriter();try{for await(let V of q)await se.ready,se.write(V).catch(()=>{});await se.ready,N&&await se.close(),L()}catch(V){try{await se.abort(V),L(V)}catch(K){L(K)}}}function O(...q){return ee(q,e(Z(q)))}function ee(q,ve,L){if(q.length===1&&a(q[0])&&(q=q[0]),q.length<2)throw new u("streams");let N=new I,se=N.signal,V=L?.signal,K=[];_(V,"options.signal");function G(){ge(new k)}F=F||et().addAbortListener;let fe;V&&(fe=F(V,G));let oe,R,H=[],re=0;function me(_e){ge(_e,--re===0)}function ge(_e,ce){var Me;if(_e&&(!oe||oe.code==="ERR_STREAM_PREMATURE_CLOSE")&&(oe=_e),!(!oe&&!ce)){for(;H.length;)H.shift()(oe);(Me=fe)===null||Me===void 0||Me[t](),N.abort(),ce&&(oe||K.forEach(c=>c()),o.nextTick(ve,oe,R))}}let we;for(let _e=0;_e<q.length;_e++){let ce=q[_e],Me=_e<q.length-1,c=_e>0,w=Me||L?.end!==!1,E=_e===q.length-1;if(x(ce)){let D=function(te){te&&te.name!=="AbortError"&&te.code!=="ERR_STREAM_PREMATURE_CLOSE"&&me(te)};if(w){let{destroy:te,cleanup:he}=le(ce,Me,c);H.push(te),v(ce)&&E&&K.push(he)}ce.on("error",D),v(ce)&&E&&K.push(()=>{ce.removeListener("error",D)})}if(_e===0)if(typeof ce=="function"){if(we=ce({signal:se}),!A(we))throw new l("Iterable, AsyncIterable or Stream","source",we)}else A(ce)||S(ce)||T(ce)?we=ce:we=i.from(ce);else if(typeof ce=="function"){if(T(we)){var $;we=Y(($=we)===null||$===void 0?void 0:$.readable)}else we=Y(we);if(we=ce(we,{signal:se}),Me){if(!A(we,!0))throw new l("AsyncIterable",`transform[${_e-1}]`,we)}else{var ye;z||(z=io());let D=new z({objectMode:!0}),te=(ye=we)===null||ye===void 0?void 0:ye.then;if(typeof te=="function")re++,te.call(we,J=>{R=J,J!=null&&D.write(J),w&&D.end(),o.nextTick(me)},J=>{D.destroy(J),o.nextTick(me,J)});else if(A(we,!0))re++,W(we,D,me,{end:w});else if(P(we)||T(we)){let J=we.readable||we;re++,W(J,D,me,{end:w})}else throw new l("AsyncIterable or Promise","destination",we);we=D;let{destroy:he,cleanup:xe}=le(we,!1,!0);H.push(he),E&&K.push(xe)}}else if(x(ce)){if(S(we)){re+=2;let D=Q(we,ce,me,{end:w});v(ce)&&E&&K.push(D)}else if(T(we)||P(we)){let D=we.readable||we;re++,W(D,ce,me,{end:w})}else if(A(we))re++,W(we,ce,me,{end:w});else throw new m("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],we);we=ce}else if(C(ce)){if(S(we))re++,ne(Y(we),ce,me,{end:w});else if(P(we)||A(we))re++,ne(we,ce,me,{end:w});else if(T(we))re++,ne(we.readable,ce,me,{end:w});else throw new m("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],we);we=ce}else we=i.from(ce)}return(se!=null&&se.aborted||V!=null&&V.aborted)&&o.nextTick(G),we}function Q(q,ve,L,{end:N}){let se=!1;if(ve.on("close",()=>{se||L(new y)}),q.pipe(ve,{end:!1}),N){let V=function(){se=!0,ve.end()};B(q)?o.nextTick(V):q.once("end",V)}else L();return r(q,{readable:!0,writable:!1},V=>{let K=q._readableState;V&&V.code==="ERR_STREAM_PREMATURE_CLOSE"&&K&&K.ended&&!K.errored&&!K.errorEmitted?q.once("end",L).once("error",L):L(V)}),r(ve,{readable:!1,writable:!0},L)}h.exports={pipelineImpl:ee,pipeline:O}}),ao=be((d,h)=>{de(),pe(),ue();var{pipeline:o}=ui(),a=vt(),{destroyer:p}=Yt(),{isNodeStream:n,isReadable:t,isWritable:r,isWebStream:e,isTransformStream:s,isWritableStream:i,isReadableStream:g}=_t(),{AbortError:m,codes:{ERR_INVALID_ARG_VALUE:l,ERR_MISSING_ARGS:u}}=Ze(),f=Ct();h.exports=function(...y){if(y.length===0)throw new u("streams");if(y.length===1)return a.from(y[0]);let k=[...y];if(typeof y[0]=="function"&&(y[0]=a.from(y[0])),typeof y[y.length-1]=="function"){let I=y.length-1;y[I]=a.from(y[I])}for(let I=0;I<y.length;++I)if(!(!n(y[I])&&!e(y[I]))){if(I<y.length-1&&!(t(y[I])||g(y[I])||s(y[I])))throw new l(`streams[${I}]`,k[I],"must be readable");if(I>0&&!(r(y[I])||i(y[I])||s(y[I])))throw new l(`streams[${I}]`,k[I],"must be writable")}let b,_,A,v,S;function x(I){let z=v;v=null,z?z(I):I?S.destroy(I):!B&&!P&&S.destroy()}let T=y[0],C=o(y,x),P=!!(r(T)||i(T)||s(T)),B=!!(t(C)||g(C)||s(C));if(S=new a({writableObjectMode:!!(T!=null&&T.writableObjectMode),readableObjectMode:!!(C!=null&&C.readableObjectMode),writable:P,readable:B}),P){if(n(T))S._write=function(z,j,F){T.write(z,j)?F():b=F},S._final=function(z){T.end(),_=z},T.on("drain",function(){if(b){let z=b;b=null,z()}});else if(e(T)){let z=(s(T)?T.writable:T).getWriter();S._write=async function(j,F,le){try{await z.ready,z.write(j).catch(()=>{}),le()}catch(Z){le(Z)}},S._final=async function(j){try{await z.ready,z.close().catch(()=>{}),_=j}catch(F){j(F)}}}let I=s(C)?C.readable:C;f(I,()=>{if(_){let z=_;_=null,z()}})}if(B){if(n(C))C.on("readable",function(){if(A){let I=A;A=null,I()}}),C.on("end",function(){S.push(null)}),S._read=function(){for(;;){let I=C.read();if(I===null){A=S._read;return}if(!S.push(I))return}};else if(e(C)){let I=(s(C)?C.readable:C).getReader();S._read=async function(){for(;;)try{let{value:z,done:j}=await I.read();if(!S.push(z))return;if(j){S.push(null);return}}catch{return}}}}return S._destroy=function(I,z){!I&&v!==null&&(I=new m),A=null,b=null,_=null,v===null?z(I):(v=z,n(C)&&p(C,I))},S}}),zl=be((d,h)=>{de(),pe(),ue();var o=globalThis.AbortController||un().AbortController,{codes:{ERR_INVALID_ARG_VALUE:a,ERR_INVALID_ARG_TYPE:p,ERR_MISSING_ARGS:n,ERR_OUT_OF_RANGE:t},AbortError:r}=Ze(),{validateAbortSignal:e,validateInteger:s,validateObject:i}=pn(),g=Fe().Symbol("kWeak"),m=Fe().Symbol("kResistStopPropagation"),{finished:l}=Ct(),u=ao(),{addAbortSignalNoValidate:f}=Qn(),{isWritable:y,isNodeStream:k}=_t(),{deprecate:b}=et(),{ArrayPrototypePush:_,Boolean:A,MathFloor:v,Number:S,NumberIsNaN:x,Promise:T,PromiseReject:C,PromiseResolve:P,PromisePrototypeThen:B,Symbol:I}=Fe(),z=I("kEmpty"),j=I("kEof");function F(V,K){if(K!=null&&i(K,"options"),K?.signal!=null&&e(K.signal,"options.signal"),k(V)&&!y(V))throw new a("stream",V,"must be writable");let G=u(this,V);return K!=null&&K.signal&&f(K.signal,G),G}function le(V,K){if(typeof V!="function")throw new p("fn",["Function","AsyncFunction"],V);K!=null&&i(K,"options"),K?.signal!=null&&e(K.signal,"options.signal");let G=1;K?.concurrency!=null&&(G=v(K.concurrency));let fe=G-1;return K?.highWaterMark!=null&&(fe=v(K.highWaterMark)),s(G,"options.concurrency",1),s(fe,"options.highWaterMark",0),fe+=G,(async function*(){let oe=et().AbortSignalAny([K?.signal].filter(A)),R=this,H=[],re={signal:oe},me,ge,we=!1,$=0;function ye(){we=!0,_e()}function _e(){$-=1,ce()}function ce(){ge&&!we&&$<G&&H.length<fe&&(ge(),ge=null)}async function Me(){try{for await(let c of R){if(we)return;if(oe.aborted)throw new r;try{if(c=V(c,re),c===z)continue;c=P(c)}catch(w){c=C(w)}$+=1,B(c,_e,ye),H.push(c),me&&(me(),me=null),!we&&(H.length>=fe||$>=G)&&await new T(w=>{ge=w})}H.push(j)}catch(c){let w=C(c);B(w,_e,ye),H.push(w)}finally{we=!0,me&&(me(),me=null)}}Me();try{for(;;){for(;H.length>0;){let c=await H[0];if(c===j)return;if(oe.aborted)throw new r;c!==z&&(yield c),H.shift(),ce()}await new T(c=>{me=c})}}finally{we=!0,ge&&(ge(),ge=null)}}).call(this)}function Z(V=void 0){return V!=null&&i(V,"options"),V?.signal!=null&&e(V.signal,"options.signal"),(async function*(){let K=0;for await(let fe of this){var G;if(V!=null&&(G=V.signal)!==null&&G!==void 0&&G.aborted)throw new r({cause:V.signal.reason});yield[K++,fe]}}).call(this)}async function Y(V,K=void 0){for await(let G of O.call(this,V,K))return!0;return!1}async function ie(V,K=void 0){if(typeof V!="function")throw new p("fn",["Function","AsyncFunction"],V);return!await Y.call(this,async(...G)=>!await V(...G),K)}async function W(V,K){for await(let G of O.call(this,V,K))return G}async function ne(V,K){if(typeof V!="function")throw new p("fn",["Function","AsyncFunction"],V);async function G(fe,oe){return await V(fe,oe),z}for await(let fe of le.call(this,G,K));}function O(V,K){if(typeof V!="function")throw new p("fn",["Function","AsyncFunction"],V);async function G(fe,oe){return await V(fe,oe)?fe:z}return le.call(this,G,K)}var ee=class extends n{constructor(){super("reduce"),this.message="Reduce of an empty stream requires an initial value"}};async function Q(V,K,G){var fe;if(typeof V!="function")throw new p("reducer",["Function","AsyncFunction"],V);G!=null&&i(G,"options"),G?.signal!=null&&e(G.signal,"options.signal");let oe=arguments.length>1;if(G!=null&&(fe=G.signal)!==null&&fe!==void 0&&fe.aborted){let ge=new r(void 0,{cause:G.signal.reason});throw this.once("error",()=>{}),await l(this.destroy(ge)),ge}let R=new o,H=R.signal;if(G!=null&&G.signal){let ge={once:!0,[g]:this,[m]:!0};G.signal.addEventListener("abort",()=>R.abort(),ge)}let re=!1;try{for await(let ge of this){var me;if(re=!0,G!=null&&(me=G.signal)!==null&&me!==void 0&&me.aborted)throw new r;oe?K=await V(K,ge,{signal:H}):(K=ge,oe=!0)}if(!re&&!oe)throw new ee}finally{R.abort()}return K}async function q(V){V!=null&&i(V,"options"),V?.signal!=null&&e(V.signal,"options.signal");let K=[];for await(let fe of this){var G;if(V!=null&&(G=V.signal)!==null&&G!==void 0&&G.aborted)throw new r(void 0,{cause:V.signal.reason});_(K,fe)}return K}function ve(V,K){let G=le.call(this,V,K);return(async function*(){for await(let fe of G)yield*fe}).call(this)}function L(V){if(V=S(V),x(V))return 0;if(V<0)throw new t("number",">= 0",V);return V}function N(V,K=void 0){return K!=null&&i(K,"options"),K?.signal!=null&&e(K.signal,"options.signal"),V=L(V),(async function*(){var G;if(K!=null&&(G=K.signal)!==null&&G!==void 0&&G.aborted)throw new r;for await(let oe of this){var fe;if(K!=null&&(fe=K.signal)!==null&&fe!==void 0&&fe.aborted)throw new r;V--<=0&&(yield oe)}}).call(this)}function se(V,K=void 0){return K!=null&&i(K,"options"),K?.signal!=null&&e(K.signal,"options.signal"),V=L(V),(async function*(){var G;if(K!=null&&(G=K.signal)!==null&&G!==void 0&&G.aborted)throw new r;for await(let oe of this){var fe;if(K!=null&&(fe=K.signal)!==null&&fe!==void 0&&fe.aborted)throw new r;if(V-- >0&&(yield oe),V<=0)return}}).call(this)}h.exports.streamReturningOperators={asIndexedPairs:b(Z,"readable.asIndexedPairs will be removed in a future version."),drop:N,filter:O,flatMap:ve,map:le,take:se,compose:F},h.exports.promiseReturningOperators={every:ie,forEach:ne,reduce:Q,toArray:q,some:Y,find:W}}),oo=be((d,h)=>{de(),pe(),ue();var{ArrayPrototypePop:o,Promise:a}=Fe(),{isIterable:p,isNodeStream:n,isWebStream:t}=_t(),{pipelineImpl:r}=ui(),{finished:e}=Ct();lo();function s(...i){return new a((g,m)=>{let l,u,f=i[i.length-1];if(f&&typeof f=="object"&&!n(f)&&!p(f)&&!t(f)){let y=o(i);l=y.signal,u=y.end}r(i,(y,k)=>{y?m(y):g(k)},{signal:l,end:u})})}h.exports={finished:e,pipeline:s}}),lo=be((d,h)=>{de(),pe(),ue();var{Buffer:o}=(Ke(),Re($e)),{ObjectDefineProperty:a,ObjectKeys:p,ReflectApply:n}=Fe(),{promisify:{custom:t}}=et(),{streamReturningOperators:r,promiseReturningOperators:e}=zl(),{codes:{ERR_ILLEGAL_CONSTRUCTOR:s}}=Ze(),i=ao(),{setDefaultHighWaterMark:g,getDefaultHighWaterMark:m}=Gn(),{pipeline:l}=ui(),{destroyer:u}=Yt(),f=Ct(),y=oo(),k=_t(),b=h.exports=ci().Stream;b.isDestroyed=k.isDestroyed,b.isDisturbed=k.isDisturbed,b.isErrored=k.isErrored,b.isReadable=k.isReadable,b.isWritable=k.isWritable,b.Readable=Yn();for(let A of p(r)){let v=function(...x){if(new.target)throw s();return b.Readable.from(n(S,this,x))},S=r[A];a(v,"name",{__proto__:null,value:S.name}),a(v,"length",{__proto__:null,value:S.length}),a(b.Readable.prototype,A,{__proto__:null,value:v,enumerable:!1,configurable:!0,writable:!0})}for(let A of p(e)){let v=function(...x){if(new.target)throw s();return n(S,this,x)},S=e[A];a(v,"name",{__proto__:null,value:S.name}),a(v,"length",{__proto__:null,value:S.length}),a(b.Readable.prototype,A,{__proto__:null,value:v,enumerable:!1,configurable:!0,writable:!0})}b.Writable=di(),b.Duplex=vt(),b.Transform=so(),b.PassThrough=io(),b.pipeline=l;var{addAbortSignal:_}=Qn();b.addAbortSignal=_,b.finished=f,b.destroy=u,b.compose=i,b.setDefaultHighWaterMark=g,b.getDefaultHighWaterMark=m,a(b,"promises",{__proto__:null,configurable:!0,enumerable:!0,get(){return y}}),a(l,t,{__proto__:null,enumerable:!0,get(){return y.pipeline}}),a(f,t,{__proto__:null,enumerable:!0,get(){return y.finished}}),b.Stream=b,b._isUint8Array=function(A){return A instanceof Uint8Array},b._uint8ArrayToBuffer=function(A){return o.from(A.buffer,A.byteOffset,A.byteLength)}}),Bt=be((d,h)=>{de(),pe(),ue();var o=lo(),a=oo(),p=o.Readable.destroy;h.exports=o.Readable,h.exports._uint8ArrayToBuffer=o._uint8ArrayToBuffer,h.exports._isUint8Array=o._isUint8Array,h.exports.isDisturbed=o.isDisturbed,h.exports.isErrored=o.isErrored,h.exports.isReadable=o.isReadable,h.exports.Readable=o.Readable,h.exports.Writable=o.Writable,h.exports.Duplex=o.Duplex,h.exports.Transform=o.Transform,h.exports.PassThrough=o.PassThrough,h.exports.addAbortSignal=o.addAbortSignal,h.exports.finished=o.finished,h.exports.destroy=o.destroy,h.exports.destroy=p,h.exports.pipeline=o.pipeline,h.exports.compose=o.compose,Object.defineProperty(o,"promises",{configurable:!0,enumerable:!0,get(){return a}}),h.exports.Stream=o.Stream,h.exports.default=h.exports}),Hl=be((d,h)=>{de(),pe(),ue(),typeof Object.create=="function"?h.exports=function(o,a){a&&(o.super_=a,o.prototype=Object.create(a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}))}:h.exports=function(o,a){if(a){o.super_=a;var p=function(){};p.prototype=a.prototype,o.prototype=new p,o.prototype.constructor=o}}}),$l=be((d,h)=>{de(),pe(),ue();var{Buffer:o}=(Ke(),Re($e)),a=Symbol.for("BufferList");function p(n){if(!(this instanceof p))return new p(n);p._init.call(this,n)}p._init=function(n){Object.defineProperty(this,a,{value:!0}),this._bufs=[],this.length=0,n&&this.append(n)},p.prototype._new=function(n){return new p(n)},p.prototype._offset=function(n){if(n===0)return[0,0];let t=0;for(let r=0;r<this._bufs.length;r++){let e=t+this._bufs[r].length;if(n<e||r===this._bufs.length-1)return[r,n-t];t=e}},p.prototype._reverseOffset=function(n){let t=n[0],r=n[1];for(let e=0;e<t;e++)r+=this._bufs[e].length;return r},p.prototype.getBuffers=function(){return this._bufs},p.prototype.get=function(n){if(n>this.length||n<0)return;let t=this._offset(n);return this._bufs[t[0]][t[1]]},p.prototype.slice=function(n,t){return typeof n=="number"&&n<0&&(n+=this.length),typeof t=="number"&&t<0&&(t+=this.length),this.copy(null,0,n,t)},p.prototype.copy=function(n,t,r,e){if((typeof r!="number"||r<0)&&(r=0),(typeof e!="number"||e>this.length)&&(e=this.length),r>=this.length||e<=0)return n||o.alloc(0);let s=!!n,i=this._offset(r),g=e-r,m=g,l=s&&t||0,u=i[1];if(r===0&&e===this.length){if(!s)return this._bufs.length===1?this._bufs[0]:o.concat(this._bufs,this.length);for(let f=0;f<this._bufs.length;f++)this._bufs[f].copy(n,l),l+=this._bufs[f].length;return n}if(m<=this._bufs[i[0]].length-u)return s?this._bufs[i[0]].copy(n,t,u,u+m):this._bufs[i[0]].slice(u,u+m);s||(n=o.allocUnsafe(g));for(let f=i[0];f<this._bufs.length;f++){let y=this._bufs[f].length-u;if(m>y)this._bufs[f].copy(n,l,u),l+=y;else{this._bufs[f].copy(n,l,u,u+m),l+=y;break}m-=y,u&&(u=0)}return n.length>l?n.slice(0,l):n},p.prototype.shallowSlice=function(n,t){if(n=n||0,t=typeof t!="number"?this.length:t,n<0&&(n+=this.length),t<0&&(t+=this.length),n===t)return this._new();let r=this._offset(n),e=this._offset(t),s=this._bufs.slice(r[0],e[0]+1);return e[1]===0?s.pop():s[s.length-1]=s[s.length-1].slice(0,e[1]),r[1]!==0&&(s[0]=s[0].slice(r[1])),this._new(s)},p.prototype.toString=function(n,t,r){return this.slice(t,r).toString(n)},p.prototype.consume=function(n){if(n=Math.trunc(n),Number.isNaN(n)||n<=0)return this;for(;this._bufs.length;)if(n>=this._bufs[0].length)n-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift();else{this._bufs[0]=this._bufs[0].slice(n),this.length-=n;break}return this},p.prototype.duplicate=function(){let n=this._new();for(let t=0;t<this._bufs.length;t++)n.append(this._bufs[t]);return n},p.prototype.append=function(n){return this._attach(n,p.prototype._appendBuffer)},p.prototype.prepend=function(n){return this._attach(n,p.prototype._prependBuffer,!0)},p.prototype._attach=function(n,t,r){if(n==null)return this;if(n.buffer)t.call(this,o.from(n.buffer,n.byteOffset,n.byteLength));else if(Array.isArray(n)){let[e,s]=r?[n.length-1,-1]:[0,1];for(let i=e;i>=0&&i<n.length;i+=s)this._attach(n[i],t,r)}else if(this._isBufferList(n)){let[e,s]=r?[n._bufs.length-1,-1]:[0,1];for(let i=e;i>=0&&i<n._bufs.length;i+=s)this._attach(n._bufs[i],t,r)}else typeof n=="number"&&(n=n.toString()),t.call(this,o.from(n));return this},p.prototype._appendBuffer=function(n){this._bufs.push(n),this.length+=n.length},p.prototype._prependBuffer=function(n){this._bufs.unshift(n),this.length+=n.length},p.prototype.indexOf=function(n,t,r){if(r===void 0&&typeof t=="string"&&(r=t,t=void 0),typeof n=="function"||Array.isArray(n))throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');if(typeof n=="number"?n=o.from([n]):typeof n=="string"?n=o.from(n,r):this._isBufferList(n)?n=n.slice():Array.isArray(n.buffer)?n=o.from(n.buffer,n.byteOffset,n.byteLength):o.isBuffer(n)||(n=o.from(n)),t=Number(t||0),isNaN(t)&&(t=0),t<0&&(t=this.length+t),t<0&&(t=0),n.length===0)return t>this.length?this.length:t;let e=this._offset(t),s=e[0],i=e[1];for(;s<this._bufs.length;s++){let g=this._bufs[s];for(;i<g.length;)if(g.length-i>=n.length){let m=g.indexOf(n,i);if(m!==-1)return this._reverseOffset([s,m]);i=g.length-n.length+1}else{let m=this._reverseOffset([s,i]);if(this._match(m,n))return m;i++}i=0}return-1},p.prototype._match=function(n,t){if(this.length-n<t.length)return!1;for(let r=0;r<t.length;r++)if(this.get(n+r)!==t[r])return!1;return!0},(function(){let n={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readBigInt64BE:8,readBigInt64LE:8,readBigUInt64BE:8,readBigUInt64LE:8,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1,readIntBE:null,readIntLE:null,readUIntBE:null,readUIntLE:null};for(let t in n)(function(r){n[r]===null?p.prototype[r]=function(e,s){return this.slice(e,e+s)[r](0,s)}:p.prototype[r]=function(e=0){return this.slice(e,e+n[r])[r](0)}})(t)})(),p.prototype._isBufferList=function(n){return n instanceof p||p.isBufferList(n)},p.isBufferList=function(n){return n!=null&&n[a]},h.exports=p}),Kl=be((d,h)=>{de(),pe(),ue();var o=Bt().Duplex,a=Hl(),p=$l();function n(t){if(!(this instanceof n))return new n(t);if(typeof t=="function"){this._callback=t;let r=(function(e){this._callback&&(this._callback(e),this._callback=null)}).bind(this);this.on("pipe",function(e){e.on("error",r)}),this.on("unpipe",function(e){e.removeListener("error",r)}),t=null}p._init.call(this,t),o.call(this)}a(n,o),Object.assign(n.prototype,p.prototype),n.prototype._new=function(t){return new n(t)},n.prototype._write=function(t,r,e){this._appendBuffer(t),typeof e=="function"&&e()},n.prototype._read=function(t){if(!this.length)return this.push(null);t=Math.min(t,this.length),this.push(this.slice(0,t)),this.consume(t)},n.prototype.end=function(t){o.prototype.end.call(this,t),this._callback&&(this._callback(null,this.slice()),this._callback=null)},n.prototype._destroy=function(t,r){this._bufs.length=0,this.length=0,r(t)},n.prototype._isBufferList=function(t){return t instanceof n||t instanceof p||n.isBufferList(t)},n.isBufferList=p.isBufferList,h.exports=n,h.exports.BufferListStream=n,h.exports.BufferList=p}),Vl=be((d,h)=>{de(),pe(),ue();var o=class{constructor(){this.cmd=null,this.retain=!1,this.qos=0,this.dup=!1,this.length=-1,this.topic=null,this.payload=null}};h.exports=o}),co=be((d,h)=>{de(),pe(),ue();var o=h.exports,{Buffer:a}=(Ke(),Re($e));o.types={0:"reserved",1:"connect",2:"connack",3:"publish",4:"puback",5:"pubrec",6:"pubrel",7:"pubcomp",8:"subscribe",9:"suback",10:"unsubscribe",11:"unsuback",12:"pingreq",13:"pingresp",14:"disconnect",15:"auth"},o.requiredHeaderFlags={1:0,2:0,4:0,5:0,6:2,7:0,8:2,9:0,10:2,11:0,12:0,13:0,14:0,15:0},o.requiredHeaderFlagsErrors={};for(let n in o.requiredHeaderFlags){let t=o.requiredHeaderFlags[n];o.requiredHeaderFlagsErrors[n]="Invalid header flag bits, must be 0x"+t.toString(16)+" for "+o.types[n]+" packet"}o.codes={};for(let n in o.types){let t=o.types[n];o.codes[t]=n}o.CMD_SHIFT=4,o.CMD_MASK=240,o.DUP_MASK=8,o.QOS_MASK=3,o.QOS_SHIFT=1,o.RETAIN_MASK=1,o.VARBYTEINT_MASK=127,o.VARBYTEINT_FIN_MASK=128,o.VARBYTEINT_MAX=268435455,o.SESSIONPRESENT_MASK=1,o.SESSIONPRESENT_HEADER=a.from([o.SESSIONPRESENT_MASK]),o.CONNACK_HEADER=a.from([o.codes.connack<<o.CMD_SHIFT]),o.USERNAME_MASK=128,o.PASSWORD_MASK=64,o.WILL_RETAIN_MASK=32,o.WILL_QOS_MASK=24,o.WILL_QOS_SHIFT=3,o.WILL_FLAG_MASK=4,o.CLEAN_SESSION_MASK=2,o.CONNECT_HEADER=a.from([o.codes.connect<<o.CMD_SHIFT]),o.properties={sessionExpiryInterval:17,willDelayInterval:24,receiveMaximum:33,maximumPacketSize:39,topicAliasMaximum:34,requestResponseInformation:25,requestProblemInformation:23,userProperties:38,authenticationMethod:21,authenticationData:22,payloadFormatIndicator:1,messageExpiryInterval:2,contentType:3,responseTopic:8,correlationData:9,maximumQoS:36,retainAvailable:37,assignedClientIdentifier:18,reasonString:31,wildcardSubscriptionAvailable:40,subscriptionIdentifiersAvailable:41,sharedSubscriptionAvailable:42,serverKeepAlive:19,responseInformation:26,serverReference:28,topicAlias:35,subscriptionIdentifier:11},o.propertiesCodes={};for(let n in o.properties){let t=o.properties[n];o.propertiesCodes[t]=n}o.propertiesTypes={sessionExpiryInterval:"int32",willDelayInterval:"int32",receiveMaximum:"int16",maximumPacketSize:"int32",topicAliasMaximum:"int16",requestResponseInformation:"byte",requestProblemInformation:"byte",userProperties:"pair",authenticationMethod:"string",authenticationData:"binary",payloadFormatIndicator:"byte",messageExpiryInterval:"int32",contentType:"string",responseTopic:"string",correlationData:"binary",maximumQoS:"int8",retainAvailable:"byte",assignedClientIdentifier:"string",reasonString:"string",wildcardSubscriptionAvailable:"byte",subscriptionIdentifiersAvailable:"byte",sharedSubscriptionAvailable:"byte",serverKeepAlive:"int16",responseInformation:"string",serverReference:"string",topicAlias:"int16",subscriptionIdentifier:"var"};function p(n){return[0,1,2].map(t=>[0,1].map(r=>[0,1].map(e=>{let s=a.alloc(1);return s.writeUInt8(o.codes[n]<<o.CMD_SHIFT|(r?o.DUP_MASK:0)|t<<o.QOS_SHIFT|e,0,!0),s})))}o.PUBLISH_HEADER=p("publish"),o.SUBSCRIBE_HEADER=p("subscribe"),o.SUBSCRIBE_OPTIONS_QOS_MASK=3,o.SUBSCRIBE_OPTIONS_NL_MASK=1,o.SUBSCRIBE_OPTIONS_NL_SHIFT=2,o.SUBSCRIBE_OPTIONS_RAP_MASK=1,o.SUBSCRIBE_OPTIONS_RAP_SHIFT=3,o.SUBSCRIBE_OPTIONS_RH_MASK=3,o.SUBSCRIBE_OPTIONS_RH_SHIFT=4,o.SUBSCRIBE_OPTIONS_RH=[0,16,32],o.SUBSCRIBE_OPTIONS_NL=4,o.SUBSCRIBE_OPTIONS_RAP=8,o.SUBSCRIBE_OPTIONS_QOS=[0,1,2],o.UNSUBSCRIBE_HEADER=p("unsubscribe"),o.ACKS={unsuback:p("unsuback"),puback:p("puback"),pubcomp:p("pubcomp"),pubrel:p("pubrel"),pubrec:p("pubrec")},o.SUBACK_HEADER=a.from([o.codes.suback<<o.CMD_SHIFT]),o.VERSION3=a.from([3]),o.VERSION4=a.from([4]),o.VERSION5=a.from([5]),o.VERSION131=a.from([131]),o.VERSION132=a.from([132]),o.QOS=[0,1,2].map(n=>a.from([n])),o.EMPTY={pingreq:a.from([o.codes.pingreq<<4,0]),pingresp:a.from([o.codes.pingresp<<4,0]),disconnect:a.from([o.codes.disconnect<<4,0])},o.MQTT5_PUBACK_PUBREC_CODES={0:"Success",16:"No matching subscribers",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",144:"Topic Name invalid",145:"Packet identifier in use",151:"Quota exceeded",153:"Payload format invalid"},o.MQTT5_PUBREL_PUBCOMP_CODES={0:"Success",146:"Packet Identifier not found"},o.MQTT5_SUBACK_CODES={0:"Granted QoS 0",1:"Granted QoS 1",2:"Granted QoS 2",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use",151:"Quota exceeded",158:"Shared Subscriptions not supported",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},o.MQTT5_UNSUBACK_CODES={0:"Success",17:"No subscription existed",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use"},o.MQTT5_DISCONNECT_CODES={0:"Normal disconnection",4:"Disconnect with Will Message",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",135:"Not authorized",137:"Server busy",139:"Server shutting down",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},o.MQTT5_AUTH_CODES={0:"Success",24:"Continue authentication",25:"Re-authenticate"}}),Ql=be((d,h)=>{de(),pe(),ue();var o=1e3,a=o*60,p=a*60,n=p*24,t=n*7,r=n*365.25;h.exports=function(m,l){l=l||{};var u=typeof m;if(u==="string"&&m.length>0)return e(m);if(u==="number"&&isFinite(m))return l.long?i(m):s(m);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(m))};function e(m){if(m=String(m),!(m.length>100)){var l=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(m);if(l){var u=parseFloat(l[1]),f=(l[2]||"ms").toLowerCase();switch(f){case"years":case"year":case"yrs":case"yr":case"y":return u*r;case"weeks":case"week":case"w":return u*t;case"days":case"day":case"d":return u*n;case"hours":case"hour":case"hrs":case"hr":case"h":return u*p;case"minutes":case"minute":case"mins":case"min":case"m":return u*a;case"seconds":case"second":case"secs":case"sec":case"s":return u*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function s(m){var l=Math.abs(m);return l>=n?Math.round(m/n)+"d":l>=p?Math.round(m/p)+"h":l>=a?Math.round(m/a)+"m":l>=o?Math.round(m/o)+"s":m+"ms"}function i(m){var l=Math.abs(m);return l>=n?g(m,l,n,"day"):l>=p?g(m,l,p,"hour"):l>=a?g(m,l,a,"minute"):l>=o?g(m,l,o,"second"):m+" ms"}function g(m,l,u,f){var y=l>=u*1.5;return Math.round(m/u)+" "+f+(y?"s":"")}}),Gl=be((d,h)=>{de(),pe(),ue();function o(a){n.debug=n,n.default=n,n.coerce=g,n.disable=s,n.enable=r,n.enabled=i,n.humanize=Ql(),n.destroy=m,Object.keys(a).forEach(l=>{n[l]=a[l]}),n.names=[],n.skips=[],n.formatters={};function p(l){let u=0;for(let f=0;f<l.length;f++)u=(u<<5)-u+l.charCodeAt(f),u|=0;return n.colors[Math.abs(u)%n.colors.length]}n.selectColor=p;function n(l){let u,f=null,y,k;function b(..._){if(!b.enabled)return;let A=b,v=Number(new Date),S=v-(u||v);A.diff=S,A.prev=u,A.curr=v,u=v,_[0]=n.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");let x=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,(T,C)=>{if(T==="%%")return"%";x++;let P=n.formatters[C];if(typeof P=="function"){let B=_[x];T=P.call(A,B),_.splice(x,1),x--}return T}),n.formatArgs.call(A,_),(A.log||n.log).apply(A,_)}return b.namespace=l,b.useColors=n.useColors(),b.color=n.selectColor(l),b.extend=t,b.destroy=n.destroy,Object.defineProperty(b,"enabled",{enumerable:!0,configurable:!1,get:()=>f!==null?f:(y!==n.namespaces&&(y=n.namespaces,k=n.enabled(l)),k),set:_=>{f=_}}),typeof n.init=="function"&&n.init(b),b}function t(l,u){let f=n(this.namespace+(typeof u>"u"?":":u)+l);return f.log=this.log,f}function r(l){n.save(l),n.namespaces=l,n.names=[],n.skips=[];let u=(typeof l=="string"?l:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(let f of u)f[0]==="-"?n.skips.push(f.slice(1)):n.names.push(f)}function e(l,u){let f=0,y=0,k=-1,b=0;for(;f<l.length;)if(y<u.length&&(u[y]===l[f]||u[y]==="*"))u[y]==="*"?(k=y,b=f,y++):(f++,y++);else if(k!==-1)y=k+1,b++,f=b;else return!1;for(;y<u.length&&u[y]==="*";)y++;return y===u.length}function s(){let l=[...n.names,...n.skips.map(u=>"-"+u)].join(",");return n.enable(""),l}function i(l){for(let u of n.skips)if(e(l,u))return!1;for(let u of n.names)if(e(l,u))return!0;return!1}function g(l){return l instanceof Error?l.stack||l.message:l}function m(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}h.exports=o}),wt=be((d,h)=>{de(),pe(),ue(),d.formatArgs=a,d.save=p,d.load=n,d.useColors=o,d.storage=t(),d.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),d.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function o(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function a(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+h.exports.humanize(this.diff),!this.useColors)return;let s="color: "+this.color;e.splice(1,0,s,"color: inherit");let i=0,g=0;e[0].replace(/%[a-zA-Z%]/g,m=>{m!=="%%"&&(i++,m==="%c"&&(g=i))}),e.splice(g,0,s)}d.log=console.debug||console.log||(()=>{});function p(e){try{e?d.storage.setItem("debug",e):d.storage.removeItem("debug")}catch{}}function n(){let e;try{e=d.storage.getItem("debug")||d.storage.getItem("DEBUG")}catch{}return!e&&typeof qe<"u"&&"env"in qe&&(e=qe.env.DEBUG),e}function t(){try{return localStorage}catch{}}h.exports=Gl()(d);var{formatters:r}=h.exports;r.j=function(e){try{return JSON.stringify(e)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}}}),Yl=be((d,h)=>{de(),pe(),ue();var o=Kl(),{EventEmitter:a}=(qt(),Re(Mt)),p=Vl(),n=co(),t=wt()("mqtt-packet:parser"),r=class gs extends a{constructor(){super(),this.parser=this.constructor.parser}static parser(s){return this instanceof gs?(this.settings=s||{},this._states=["_parseHeader","_parseLength","_parsePayload","_newPacket"],this._resetState(),this):new gs().parser(s)}_resetState(){t("_resetState: resetting packet, error, _list, and _stateCounter"),this.packet=new p,this.error=null,this._list=o(),this._stateCounter=0}parse(s){for(this.error&&this._resetState(),this._list.append(s),t("parse: current state: %s",this._states[this._stateCounter]);(this.packet.length!==-1||this._list.length>0)&&this[this._states[this._stateCounter]]()&&!this.error;)this._stateCounter++,t("parse: state complete. _stateCounter is now: %d",this._stateCounter),t("parse: packet.length: %d, buffer list length: %d",this.packet.length,this._list.length),this._stateCounter>=this._states.length&&(this._stateCounter=0);return t("parse: exited while loop. packet: %d, buffer list length: %d",this.packet.length,this._list.length),this._list.length}_parseHeader(){let s=this._list.readUInt8(0),i=s>>n.CMD_SHIFT;this.packet.cmd=n.types[i];let g=s&15,m=n.requiredHeaderFlags[i];return m!=null&&g!==m?this._emitError(new Error(n.requiredHeaderFlagsErrors[i])):(this.packet.retain=(s&n.RETAIN_MASK)!==0,this.packet.qos=s>>n.QOS_SHIFT&n.QOS_MASK,this.packet.qos>2?this._emitError(new Error("Packet must not have both QoS bits set to 1")):(this.packet.dup=(s&n.DUP_MASK)!==0,t("_parseHeader: packet: %o",this.packet),this._list.consume(1),!0))}_parseLength(){let s=this._parseVarByteNum(!0);return s&&(this.packet.length=s.value,this._list.consume(s.bytes)),t("_parseLength %d",s.value),!!s}_parsePayload(){t("_parsePayload: payload %O",this._list);let s=!1;if(this.packet.length===0||this._list.length>=this.packet.length){switch(this._pos=0,this.packet.cmd){case"connect":this._parseConnect();break;case"connack":this._parseConnack();break;case"publish":this._parsePublish();break;case"puback":case"pubrec":case"pubrel":case"pubcomp":this._parseConfirmation();break;case"subscribe":this._parseSubscribe();break;case"suback":this._parseSuback();break;case"unsubscribe":this._parseUnsubscribe();break;case"unsuback":this._parseUnsuback();break;case"pingreq":case"pingresp":break;case"disconnect":this._parseDisconnect();break;case"auth":this._parseAuth();break;default:this._emitError(new Error("Not supported"))}s=!0}return t("_parsePayload complete result: %s",s),s}_parseConnect(){t("_parseConnect");let s,i,g,m,l={},u=this.packet,f=this._parseString();if(f===null)return this._emitError(new Error("Cannot parse protocolId"));if(f!=="MQTT"&&f!=="MQIsdp")return this._emitError(new Error("Invalid protocolId"));if(u.protocolId=f,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(u.protocolVersion=this._list.readUInt8(this._pos),u.protocolVersion>=128&&(u.bridgeMode=!0,u.protocolVersion=u.protocolVersion-128),u.protocolVersion!==3&&u.protocolVersion!==4&&u.protocolVersion!==5)return this._emitError(new Error("Invalid protocol version"));if(this._pos++,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(this._list.readUInt8(this._pos)&1)return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));l.username=this._list.readUInt8(this._pos)&n.USERNAME_MASK,l.password=this._list.readUInt8(this._pos)&n.PASSWORD_MASK,l.will=this._list.readUInt8(this._pos)&n.WILL_FLAG_MASK;let y=!!(this._list.readUInt8(this._pos)&n.WILL_RETAIN_MASK),k=(this._list.readUInt8(this._pos)&n.WILL_QOS_MASK)>>n.WILL_QOS_SHIFT;if(l.will)u.will={},u.will.retain=y,u.will.qos=k;else{if(y)return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));if(k)return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"))}if(u.clean=(this._list.readUInt8(this._pos)&n.CLEAN_SESSION_MASK)!==0,this._pos++,u.keepalive=this._parseNum(),u.keepalive===-1)return this._emitError(new Error("Packet too short"));if(u.protocolVersion===5){let _=this._parseProperties();Object.getOwnPropertyNames(_).length&&(u.properties=_)}let b=this._parseString();if(b===null)return this._emitError(new Error("Packet too short"));if(u.clientId=b,t("_parseConnect: packet.clientId: %s",u.clientId),l.will){if(u.protocolVersion===5){let _=this._parseProperties();Object.getOwnPropertyNames(_).length&&(u.will.properties=_)}if(s=this._parseString(),s===null)return this._emitError(new Error("Cannot parse will topic"));if(u.will.topic=s,t("_parseConnect: packet.will.topic: %s",u.will.topic),i=this._parseBuffer(),i===null)return this._emitError(new Error("Cannot parse will payload"));u.will.payload=i,t("_parseConnect: packet.will.paylaod: %s",u.will.payload)}if(l.username){if(m=this._parseString(),m===null)return this._emitError(new Error("Cannot parse username"));u.username=m,t("_parseConnect: packet.username: %s",u.username)}if(l.password){if(g=this._parseBuffer(),g===null)return this._emitError(new Error("Cannot parse password"));u.password=g}return this.settings=u,t("_parseConnect: complete"),u}_parseConnack(){t("_parseConnack");let s=this.packet;if(this._list.length<1)return null;let i=this._list.readUInt8(this._pos++);if(i>1)return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));if(s.sessionPresent=!!(i&n.SESSIONPRESENT_MASK),this.settings.protocolVersion===5)this._list.length>=2?s.reasonCode=this._list.readUInt8(this._pos++):s.reasonCode=0;else{if(this._list.length<2)return null;s.returnCode=this._list.readUInt8(this._pos++)}if(s.returnCode===-1||s.reasonCode===-1)return this._emitError(new Error("Cannot parse return code"));if(this.settings.protocolVersion===5){let g=this._parseProperties();Object.getOwnPropertyNames(g).length&&(s.properties=g)}t("_parseConnack: complete")}_parsePublish(){t("_parsePublish");let s=this.packet;if(s.topic=this._parseString(),s.topic===null)return this._emitError(new Error("Cannot parse topic"));if(!(s.qos>0&&!this._parseMessageId())){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}s.payload=this._list.slice(this._pos,s.length),t("_parsePublish: payload from buffer list: %o",s.payload)}}_parseSubscribe(){t("_parseSubscribe");let s=this.packet,i,g,m,l,u,f,y;if(s.subscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let k=this._parseProperties();Object.getOwnPropertyNames(k).length&&(s.properties=k)}if(s.length<=0)return this._emitError(new Error("Malformed subscribe, no payload specified"));for(;this._pos<s.length;){if(i=this._parseString(),i===null)return this._emitError(new Error("Cannot parse topic"));if(this._pos>=s.length)return this._emitError(new Error("Malformed Subscribe Payload"));if(g=this._parseByte(),this.settings.protocolVersion===5){if(g&192)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))}else if(g&252)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));if(m=g&n.SUBSCRIBE_OPTIONS_QOS_MASK,m>2)return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));if(f=(g>>n.SUBSCRIBE_OPTIONS_NL_SHIFT&n.SUBSCRIBE_OPTIONS_NL_MASK)!==0,u=(g>>n.SUBSCRIBE_OPTIONS_RAP_SHIFT&n.SUBSCRIBE_OPTIONS_RAP_MASK)!==0,l=g>>n.SUBSCRIBE_OPTIONS_RH_SHIFT&n.SUBSCRIBE_OPTIONS_RH_MASK,l>2)return this._emitError(new Error("Invalid retain handling, must be <= 2"));y={topic:i,qos:m},this.settings.protocolVersion===5?(y.nl=f,y.rap=u,y.rh=l):this.settings.bridgeMode&&(y.rh=0,y.rap=!0,y.nl=!0),t("_parseSubscribe: push subscription `%s` to subscription",y),s.subscriptions.push(y)}}}_parseSuback(){t("_parseSuback");let s=this.packet;if(this.packet.granted=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}if(s.length<=0)return this._emitError(new Error("Malformed suback, no payload specified"));for(;this._pos<this.packet.length;){let i=this._list.readUInt8(this._pos++);if(this.settings.protocolVersion===5){if(!n.MQTT5_SUBACK_CODES[i])return this._emitError(new Error("Invalid suback code"))}else if(i>2&&i!==128)return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));this.packet.granted.push(i)}}}_parseUnsubscribe(){t("_parseUnsubscribe");let s=this.packet;if(s.unsubscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}if(s.length<=0)return this._emitError(new Error("Malformed unsubscribe, no payload specified"));for(;this._pos<s.length;){let i=this._parseString();if(i===null)return this._emitError(new Error("Cannot parse topic"));t("_parseUnsubscribe: push topic `%s` to unsubscriptions",i),s.unsubscriptions.push(i)}}}_parseUnsuback(){t("_parseUnsuback");let s=this.packet;if(!this._parseMessageId())return this._emitError(new Error("Cannot parse messageId"));if((this.settings.protocolVersion===3||this.settings.protocolVersion===4)&&s.length!==2)return this._emitError(new Error("Malformed unsuback, payload length must be 2"));if(s.length<=0)return this._emitError(new Error("Malformed unsuback, no payload specified"));if(this.settings.protocolVersion===5){let i=this._parseProperties();for(Object.getOwnPropertyNames(i).length&&(s.properties=i),s.granted=[];this._pos<this.packet.length;){let g=this._list.readUInt8(this._pos++);if(!n.MQTT5_UNSUBACK_CODES[g])return this._emitError(new Error("Invalid unsuback code"));this.packet.granted.push(g)}}}_parseConfirmation(){t("_parseConfirmation: packet.cmd: `%s`",this.packet.cmd);let s=this.packet;if(this._parseMessageId(),this.settings.protocolVersion===5){if(s.length>2){switch(s.reasonCode=this._parseByte(),this.packet.cmd){case"puback":case"pubrec":if(!n.MQTT5_PUBACK_PUBREC_CODES[s.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break;case"pubrel":case"pubcomp":if(!n.MQTT5_PUBREL_PUBCOMP_CODES[s.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break}t("_parseConfirmation: packet.reasonCode `%d`",s.reasonCode)}else s.reasonCode=0;if(s.length>3){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}}return!0}_parseDisconnect(){let s=this.packet;if(t("_parseDisconnect"),this.settings.protocolVersion===5){this._list.length>0?(s.reasonCode=this._parseByte(),n.MQTT5_DISCONNECT_CODES[s.reasonCode]||this._emitError(new Error("Invalid disconnect reason code"))):s.reasonCode=0;let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}return t("_parseDisconnect result: true"),!0}_parseAuth(){t("_parseAuth");let s=this.packet;if(this.settings.protocolVersion!==5)return this._emitError(new Error("Not supported auth packet for this version MQTT"));if(s.reasonCode=this._parseByte(),!n.MQTT5_AUTH_CODES[s.reasonCode])return this._emitError(new Error("Invalid auth reason code"));let i=this._parseProperties();return Object.getOwnPropertyNames(i).length&&(s.properties=i),t("_parseAuth: result: true"),!0}_parseMessageId(){let s=this.packet;return s.messageId=this._parseNum(),s.messageId===null?(this._emitError(new Error("Cannot parse messageId")),!1):(t("_parseMessageId: packet.messageId %d",s.messageId),!0)}_parseString(s){let i=this._parseNum(),g=i+this._pos;if(i===-1||g>this._list.length||g>this.packet.length)return null;let m=this._list.toString("utf8",this._pos,g);return this._pos+=i,t("_parseString: result: %s",m),m}_parseStringPair(){return t("_parseStringPair"),{name:this._parseString(),value:this._parseString()}}_parseBuffer(){let s=this._parseNum(),i=s+this._pos;if(s===-1||i>this._list.length||i>this.packet.length)return null;let g=this._list.slice(this._pos,i);return this._pos+=s,t("_parseBuffer: result: %o",g),g}_parseNum(){if(this._list.length-this._pos<2)return-1;let s=this._list.readUInt16BE(this._pos);return this._pos+=2,t("_parseNum: result: %s",s),s}_parse4ByteNum(){if(this._list.length-this._pos<4)return-1;let s=this._list.readUInt32BE(this._pos);return this._pos+=4,t("_parse4ByteNum: result: %s",s),s}_parseVarByteNum(s){t("_parseVarByteNum");let i=4,g=0,m=1,l=0,u=!1,f,y=this._pos?this._pos:0;for(;g<i&&y+g<this._list.length;){if(f=this._list.readUInt8(y+g++),l+=m*(f&n.VARBYTEINT_MASK),m*=128,(f&n.VARBYTEINT_FIN_MASK)===0){u=!0;break}if(this._list.length<=g)break}return!u&&g===i&&this._list.length>=g&&this._emitError(new Error("Invalid variable byte integer")),y&&(this._pos+=g),u?s?u={bytes:g,value:l}:u=l:u=!1,t("_parseVarByteNum: result: %o",u),u}_parseByte(){let s;return this._pos<this._list.length&&(s=this._list.readUInt8(this._pos),this._pos++),t("_parseByte: result: %o",s),s}_parseByType(s){switch(t("_parseByType: type: %s",s),s){case"byte":return this._parseByte()!==0;case"int8":return this._parseByte();case"int16":return this._parseNum();case"int32":return this._parse4ByteNum();case"var":return this._parseVarByteNum();case"string":return this._parseString();case"pair":return this._parseStringPair();case"binary":return this._parseBuffer()}}_parseProperties(){t("_parseProperties");let s=this._parseVarByteNum(),i=this._pos+s,g={};for(;this._pos<i;){let m=this._parseByte();if(!m)return this._emitError(new Error("Cannot parse property code type")),!1;let l=n.propertiesCodes[m];if(!l)return this._emitError(new Error("Unknown property")),!1;if(l==="userProperties"){g[l]||(g[l]=Object.create(null));let u=this._parseByType(n.propertiesTypes[l]);if(g[l][u.name])if(Array.isArray(g[l][u.name]))g[l][u.name].push(u.value);else{let f=g[l][u.name];g[l][u.name]=[f],g[l][u.name].push(u.value)}else g[l][u.name]=u.value;continue}g[l]?Array.isArray(g[l])?g[l].push(this._parseByType(n.propertiesTypes[l])):(g[l]=[g[l]],g[l].push(this._parseByType(n.propertiesTypes[l]))):g[l]=this._parseByType(n.propertiesTypes[l])}return g}_newPacket(){return t("_newPacket"),this.packet&&(this._list.consume(this.packet.length),t("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d",this.packet.cmd,this.packet.payload,this.packet.length),this.emit("packet",this.packet)),t("_newPacket: new packet"),this.packet=new p,this._pos=0,!0}_emitError(s){t("_emitError",s),this.error=s,this.emit("error",s)}};h.exports=r}),Jl=be((d,h)=>{de(),pe(),ue();var{Buffer:o}=(Ke(),Re($e)),a=65536,p={},n=o.isBuffer(o.from([1,2]).subarray(0,1));function t(i){let g=o.allocUnsafe(2);return g.writeUInt8(i>>8,0),g.writeUInt8(i&255,1),g}function r(){for(let i=0;i<a;i++)p[i]=t(i)}function e(i){let g=0,m=0,l=o.allocUnsafe(4);do g=i%128|0,i=i/128|0,i>0&&(g=g|128),l.writeUInt8(g,m++);while(i>0&&m<4);return i>0&&(m=0),n?l.subarray(0,m):l.slice(0,m)}function s(i){let g=o.allocUnsafe(4);return g.writeUInt32BE(i,0),g}h.exports={cache:p,generateCache:r,generateNumber:t,genBufVariableByteInt:e,generate4ByteBuffer:s}}),Xl=be((d,h)=>{de(),pe(),ue(),typeof qe>"u"||!qe.version||qe.version.indexOf("v0.")===0||qe.version.indexOf("v1.")===0&&qe.version.indexOf("v1.8.")!==0?h.exports={nextTick:o}:h.exports=qe;function o(a,p,n,t){if(typeof a!="function")throw new TypeError('"callback" argument must be a function');var r=arguments.length,e,s;switch(r){case 0:case 1:return qe.nextTick(a);case 2:return qe.nextTick(function(){a.call(null,p)});case 3:return qe.nextTick(function(){a.call(null,p,n)});case 4:return qe.nextTick(function(){a.call(null,p,n,t)});default:for(e=new Array(r-1),s=0;s<e.length;)e[s++]=arguments[s];return qe.nextTick(function(){a.apply(null,e)})}}}),uo=be((d,h)=>{de(),pe(),ue();var o=co(),{Buffer:a}=(Ke(),Re($e)),p=a.allocUnsafe(0),n=a.from([0]),t=Jl(),r=Xl().nextTick,e=wt()("mqtt-packet:writeToStream"),s=t.cache,i=t.generateNumber,g=t.generateCache,m=t.genBufVariableByteInt,l=t.generate4ByteBuffer,u=Z,f=!0;function y(L,N,se){switch(e("generate called"),N.cork&&(N.cork(),r(k,N)),f&&(f=!1,g()),e("generate: packet.cmd: %s",L.cmd),L.cmd){case"connect":return b(L,N);case"connack":return _(L,N,se);case"publish":return A(L,N,se);case"puback":case"pubrec":case"pubrel":case"pubcomp":return v(L,N,se);case"subscribe":return S(L,N,se);case"suback":return x(L,N,se);case"unsubscribe":return T(L,N,se);case"unsuback":return C(L,N,se);case"pingreq":case"pingresp":return P(L,N);case"disconnect":return B(L,N,se);case"auth":return I(L,N,se);default:return N.destroy(new Error("Unknown command")),!1}}Object.defineProperty(y,"cacheNumbers",{get(){return u===Z},set(L){L?((!s||Object.keys(s).length===0)&&(f=!0),u=Z):(f=!1,u=Y)}});function k(L){L.uncork()}function b(L,N,se){let V=L||{},K=V.protocolId||"MQTT",G=V.protocolVersion||4,fe=V.will,oe=V.clean,R=V.keepalive||0,H=V.clientId||"",re=V.username,me=V.password,ge=V.properties;oe===void 0&&(oe=!0);let we=0;if(typeof K!="string"&&!a.isBuffer(K))return N.destroy(new Error("Invalid protocolId")),!1;if(we+=K.length+2,G!==3&&G!==4&&G!==5)return N.destroy(new Error("Invalid protocol version")),!1;if(we+=1,(typeof H=="string"||a.isBuffer(H))&&(H||G>=4)&&(H||oe))we+=a.byteLength(H)+2;else{if(G<4)return N.destroy(new Error("clientId must be supplied before 3.1.1")),!1;if(oe*1===0)return N.destroy(new Error("clientId must be given if cleanSession set to 0")),!1}if(typeof R!="number"||R<0||R>65535||R%1!==0)return N.destroy(new Error("Invalid keepalive")),!1;we+=2,we+=1;let $,ye;if(G===5){if($=ne(N,ge),!$)return!1;we+=$.length}if(fe){if(typeof fe!="object")return N.destroy(new Error("Invalid will")),!1;if(!fe.topic||typeof fe.topic!="string")return N.destroy(new Error("Invalid will topic")),!1;if(we+=a.byteLength(fe.topic)+2,we+=2,fe.payload)if(fe.payload.length>=0)typeof fe.payload=="string"?we+=a.byteLength(fe.payload):we+=fe.payload.length;else return N.destroy(new Error("Invalid will payload")),!1;if(ye={},G===5){if(ye=ne(N,fe.properties),!ye)return!1;we+=ye.length}}let _e=!1;if(re!=null)if(ve(re))_e=!0,we+=a.byteLength(re)+2;else return N.destroy(new Error("Invalid username")),!1;if(me!=null){if(!_e)return N.destroy(new Error("Username is required to use password")),!1;if(ve(me))we+=q(me)+2;else return N.destroy(new Error("Invalid password")),!1}N.write(o.CONNECT_HEADER),j(N,we),W(N,K),V.bridgeMode&&(G+=128),N.write(G===131?o.VERSION131:G===132?o.VERSION132:G===4?o.VERSION4:G===5?o.VERSION5:o.VERSION3);let ce=0;return ce|=re!=null?o.USERNAME_MASK:0,ce|=me!=null?o.PASSWORD_MASK:0,ce|=fe&&fe.retain?o.WILL_RETAIN_MASK:0,ce|=fe&&fe.qos?fe.qos<<o.WILL_QOS_SHIFT:0,ce|=fe?o.WILL_FLAG_MASK:0,ce|=oe?o.CLEAN_SESSION_MASK:0,N.write(a.from([ce])),u(N,R),G===5&&$.write(),W(N,H),fe&&(G===5&&ye.write(),F(N,fe.topic),W(N,fe.payload)),re!=null&&W(N,re),me!=null&&W(N,me),!0}function _(L,N,se){let V=se?se.protocolVersion:4,K=L||{},G=V===5?K.reasonCode:K.returnCode,fe=K.properties,oe=2;if(typeof G!="number")return N.destroy(new Error("Invalid return code")),!1;let R=null;if(V===5){if(R=ne(N,fe),!R)return!1;oe+=R.length}return N.write(o.CONNACK_HEADER),j(N,oe),N.write(K.sessionPresent?o.SESSIONPRESENT_HEADER:n),N.write(a.from([G])),R?.write(),!0}function A(L,N,se){e("publish: packet: %o",L);let V=se?se.protocolVersion:4,K=L||{},G=K.qos||0,fe=K.retain?o.RETAIN_MASK:0,oe=K.topic,R=K.payload||p,H=K.messageId,re=K.properties,me=0;if(typeof oe=="string")me+=a.byteLength(oe)+2;else if(a.isBuffer(oe))me+=oe.length+2;else return N.destroy(new Error("Invalid topic")),!1;if(a.isBuffer(R)?me+=R.length:me+=a.byteLength(R),G&&typeof H!="number")return N.destroy(new Error("Invalid messageId")),!1;G&&(me+=2);let ge=null;if(V===5){if(ge=ne(N,re),!ge)return!1;me+=ge.length}return N.write(o.PUBLISH_HEADER[G][K.dup?1:0][fe?1:0]),j(N,me),u(N,q(oe)),N.write(oe),G>0&&u(N,H),ge?.write(),e("publish: payload: %o",R),N.write(R)}function v(L,N,se){let V=se?se.protocolVersion:4,K=L||{},G=K.cmd||"puback",fe=K.messageId,oe=K.dup&&G==="pubrel"?o.DUP_MASK:0,R=0,H=K.reasonCode,re=K.properties,me=V===5?3:2;if(G==="pubrel"&&(R=1),typeof fe!="number")return N.destroy(new Error("Invalid messageId")),!1;let ge=null;if(V===5&&typeof re=="object"){if(ge=O(N,re,se,me),!ge)return!1;me+=ge.length}return N.write(o.ACKS[G][R][oe][0]),me===3&&(me+=H!==0?1:-1),j(N,me),u(N,fe),V===5&&me!==2&&N.write(a.from([H])),ge!==null?ge.write():me===4&&N.write(a.from([0])),!0}function S(L,N,se){e("subscribe: packet: ");let V=se?se.protocolVersion:4,K=L||{},G=K.dup?o.DUP_MASK:0,fe=K.messageId,oe=K.subscriptions,R=K.properties,H=0;if(typeof fe!="number")return N.destroy(new Error("Invalid messageId")),!1;H+=2;let re=null;if(V===5){if(re=ne(N,R),!re)return!1;H+=re.length}if(typeof oe=="object"&&oe.length)for(let ge=0;ge<oe.length;ge+=1){let we=oe[ge].topic,$=oe[ge].qos;if(typeof we!="string")return N.destroy(new Error("Invalid subscriptions - invalid topic")),!1;if(typeof $!="number")return N.destroy(new Error("Invalid subscriptions - invalid qos")),!1;if(V===5){if(typeof(oe[ge].nl||!1)!="boolean")return N.destroy(new Error("Invalid subscriptions - invalid No Local")),!1;if(typeof(oe[ge].rap||!1)!="boolean")return N.destroy(new Error("Invalid subscriptions - invalid Retain as Published")),!1;let ye=oe[ge].rh||0;if(typeof ye!="number"||ye>2)return N.destroy(new Error("Invalid subscriptions - invalid Retain Handling")),!1}H+=a.byteLength(we)+2+1}else return N.destroy(new Error("Invalid subscriptions")),!1;e("subscribe: writing to stream: %o",o.SUBSCRIBE_HEADER),N.write(o.SUBSCRIBE_HEADER[1][G?1:0][0]),j(N,H),u(N,fe),re!==null&&re.write();let me=!0;for(let ge of oe){let we=ge.topic,$=ge.qos,ye=+ge.nl,_e=+ge.rap,ce=ge.rh,Me;F(N,we),Me=o.SUBSCRIBE_OPTIONS_QOS[$],V===5&&(Me|=ye?o.SUBSCRIBE_OPTIONS_NL:0,Me|=_e?o.SUBSCRIBE_OPTIONS_RAP:0,Me|=ce?o.SUBSCRIBE_OPTIONS_RH[ce]:0),me=N.write(a.from([Me]))}return me}function x(L,N,se){let V=se?se.protocolVersion:4,K=L||{},G=K.messageId,fe=K.granted,oe=K.properties,R=0;if(typeof G!="number")return N.destroy(new Error("Invalid messageId")),!1;if(R+=2,typeof fe=="object"&&fe.length)for(let re=0;re<fe.length;re+=1){if(typeof fe[re]!="number")return N.destroy(new Error("Invalid qos vector")),!1;R+=1}else return N.destroy(new Error("Invalid qos vector")),!1;let H=null;if(V===5){if(H=O(N,oe,se,R),!H)return!1;R+=H.length}return N.write(o.SUBACK_HEADER),j(N,R),u(N,G),H!==null&&H.write(),N.write(a.from(fe))}function T(L,N,se){let V=se?se.protocolVersion:4,K=L||{},G=K.messageId,fe=K.dup?o.DUP_MASK:0,oe=K.unsubscriptions,R=K.properties,H=0;if(typeof G!="number")return N.destroy(new Error("Invalid messageId")),!1;if(H+=2,typeof oe=="object"&&oe.length)for(let ge=0;ge<oe.length;ge+=1){if(typeof oe[ge]!="string")return N.destroy(new Error("Invalid unsubscriptions")),!1;H+=a.byteLength(oe[ge])+2}else return N.destroy(new Error("Invalid unsubscriptions")),!1;let re=null;if(V===5){if(re=ne(N,R),!re)return!1;H+=re.length}N.write(o.UNSUBSCRIBE_HEADER[1][fe?1:0][0]),j(N,H),u(N,G),re!==null&&re.write();let me=!0;for(let ge=0;ge<oe.length;ge++)me=F(N,oe[ge]);return me}function C(L,N,se){let V=se?se.protocolVersion:4,K=L||{},G=K.messageId,fe=K.dup?o.DUP_MASK:0,oe=K.granted,R=K.properties,H=K.cmd,re=0,me=2;if(typeof G!="number")return N.destroy(new Error("Invalid messageId")),!1;if(V===5)if(typeof oe=="object"&&oe.length)for(let we=0;we<oe.length;we+=1){if(typeof oe[we]!="number")return N.destroy(new Error("Invalid qos vector")),!1;me+=1}else return N.destroy(new Error("Invalid qos vector")),!1;let ge=null;if(V===5){if(ge=O(N,R,se,me),!ge)return!1;me+=ge.length}return N.write(o.ACKS[H][re][fe][0]),j(N,me),u(N,G),ge!==null&&ge.write(),V===5&&N.write(a.from(oe)),!0}function P(L,N,se){return N.write(o.EMPTY[L.cmd])}function B(L,N,se){let V=se?se.protocolVersion:4,K=L||{},G=K.reasonCode,fe=K.properties,oe=V===5?1:0,R=null;if(V===5){if(R=O(N,fe,se,oe),!R)return!1;oe+=R.length}return N.write(a.from([o.codes.disconnect<<4])),j(N,oe),V===5&&N.write(a.from([G])),R!==null&&R.write(),!0}function I(L,N,se){let V=se?se.protocolVersion:4,K=L||{},G=K.reasonCode,fe=K.properties,oe=V===5?1:0;V!==5&&N.destroy(new Error("Invalid mqtt version for auth packet"));let R=O(N,fe,se,oe);return R?(oe+=R.length,N.write(a.from([o.codes.auth<<4])),j(N,oe),N.write(a.from([G])),R!==null&&R.write(),!0):!1}var z={};function j(L,N){if(N>o.VARBYTEINT_MAX)return L.destroy(new Error(`Invalid variable byte integer: ${N}`)),!1;let se=z[N];return se||(se=m(N),N<16384&&(z[N]=se)),e("writeVarByteInt: writing to stream: %o",se),L.write(se)}function F(L,N){let se=a.byteLength(N);return u(L,se),e("writeString: %s",N),L.write(N,"utf8")}function le(L,N,se){F(L,N),F(L,se)}function Z(L,N){return e("writeNumberCached: number: %d",N),e("writeNumberCached: %o",s[N]),L.write(s[N])}function Y(L,N){let se=i(N);return e("writeNumberGenerated: %o",se),L.write(se)}function ie(L,N){let se=l(N);return e("write4ByteNumber: %o",se),L.write(se)}function W(L,N){typeof N=="string"?F(L,N):N?(u(L,N.length),L.write(N)):u(L,0)}function ne(L,N){if(typeof N!="object"||N.length!=null)return{length:1,write(){Q(L,{},0)}};let se=0;function V(K,G){let fe=o.propertiesTypes[K],oe=0;switch(fe){case"byte":{if(typeof G!="boolean")return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=2;break}case"int8":{if(typeof G!="number"||G<0||G>255)return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=2;break}case"binary":{if(G&&G===null)return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=1+a.byteLength(G)+2;break}case"int16":{if(typeof G!="number"||G<0||G>65535)return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=3;break}case"int32":{if(typeof G!="number"||G<0||G>4294967295)return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=5;break}case"var":{if(typeof G!="number"||G<0||G>268435455)return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=1+a.byteLength(m(G));break}case"string":{if(typeof G!="string")return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=3+a.byteLength(G.toString());break}case"pair":{if(typeof G!="object")return L.destroy(new Error(`Invalid ${K}: ${G}`)),!1;oe+=Object.getOwnPropertyNames(G).reduce((R,H)=>{let re=G[H];return Array.isArray(re)?R+=re.reduce((me,ge)=>(me+=3+a.byteLength(H.toString())+2+a.byteLength(ge.toString()),me),0):R+=3+a.byteLength(H.toString())+2+a.byteLength(G[H].toString()),R},0);break}default:return L.destroy(new Error(`Invalid property ${K}: ${G}`)),!1}return oe}if(N)for(let K in N){let G=0,fe=0,oe=N[K];if(oe!==void 0){if(Array.isArray(oe))for(let R=0;R<oe.length;R++){if(fe=V(K,oe[R]),!fe)return!1;G+=fe}else{if(fe=V(K,oe),!fe)return!1;G=fe}if(!G)return!1;se+=G}}return{length:a.byteLength(m(se))+se,write(){Q(L,N,se)}}}function O(L,N,se,V){let K=["reasonString","userProperties"],G=se&&se.properties&&se.properties.maximumPacketSize?se.properties.maximumPacketSize:0,fe=ne(L,N);if(G)for(;V+fe.length>G;){let oe=K.shift();if(oe&&N[oe])delete N[oe],fe=ne(L,N);else return!1}return fe}function ee(L,N,se){switch(o.propertiesTypes[N]){case"byte":{L.write(a.from([o.properties[N]])),L.write(a.from([+se]));break}case"int8":{L.write(a.from([o.properties[N]])),L.write(a.from([se]));break}case"binary":{L.write(a.from([o.properties[N]])),W(L,se);break}case"int16":{L.write(a.from([o.properties[N]])),u(L,se);break}case"int32":{L.write(a.from([o.properties[N]])),ie(L,se);break}case"var":{L.write(a.from([o.properties[N]])),j(L,se);break}case"string":{L.write(a.from([o.properties[N]])),F(L,se);break}case"pair":{Object.getOwnPropertyNames(se).forEach(V=>{let K=se[V];Array.isArray(K)?K.forEach(G=>{L.write(a.from([o.properties[N]])),le(L,V.toString(),G.toString())}):(L.write(a.from([o.properties[N]])),le(L,V.toString(),K.toString()))});break}default:return L.destroy(new Error(`Invalid property ${N} value: ${se}`)),!1}}function Q(L,N,se){j(L,se);for(let V in N)if(Object.prototype.hasOwnProperty.call(N,V)&&N[V]!=null){let K=N[V];if(Array.isArray(K))for(let G=0;G<K.length;G++)ee(L,V,K[G]);else ee(L,V,K)}}function q(L){return L?L instanceof a?L.length:a.byteLength(L):0}function ve(L){return typeof L=="string"||L instanceof a}h.exports=y}),Zl=be((d,h)=>{de(),pe(),ue();var o=uo(),{EventEmitter:a}=(qt(),Re(Mt)),{Buffer:p}=(Ke(),Re($e));function n(r,e){let s=new t;return o(r,s,e),s.concat()}var t=class extends a{constructor(){super(),this._array=new Array(20),this._i=0}write(r){return this._array[this._i++]=r,!0}concat(){let r=0,e=new Array(this._array.length),s=this._array,i=0,g;for(g=0;g<s.length&&s[g]!==void 0;g++)typeof s[g]!="string"?e[g]=s[g].length:e[g]=p.byteLength(s[g]),r+=e[g];let m=p.allocUnsafe(r);for(g=0;g<s.length&&s[g]!==void 0;g++)typeof s[g]!="string"?(s[g].copy(m,i),i+=e[g]):(m.write(s[g],i),i+=e[g]);return m}destroy(r){r&&this.emit("error",r)}};h.exports=n}),ec=be(d=>{de(),pe(),ue(),d.parser=Yl().parser,d.generate=Zl(),d.writeToStream=uo()}),tc=be((d,h)=>{de(),pe(),ue(),h.exports=a;function o(n){return n instanceof $n?$n.from(n):new n.constructor(n.buffer.slice(),n.byteOffset,n.length)}function a(n){if(n=n||{},n.circles)return p(n);let t=new Map;if(t.set(Date,g=>new Date(g)),t.set(Map,(g,m)=>new Map(e(Array.from(g),m))),t.set(Set,(g,m)=>new Set(e(Array.from(g),m))),n.constructorHandlers)for(let g of n.constructorHandlers)t.set(g[0],g[1]);let r=null;return n.proto?i:s;function e(g,m){let l=Object.keys(g),u=new Array(l.length);for(let f=0;f<l.length;f++){let y=l[f],k=g[y];typeof k!="object"||k===null?u[y]=k:k.constructor!==Object&&(r=t.get(k.constructor))?u[y]=r(k,m):ArrayBuffer.isView(k)?u[y]=o(k):u[y]=m(k)}return u}function s(g){if(typeof g!="object"||g===null)return g;if(Array.isArray(g))return e(g,s);if(g.constructor!==Object&&(r=t.get(g.constructor)))return r(g,s);let m={};for(let l in g){if(Object.hasOwnProperty.call(g,l)===!1)continue;let u=g[l];typeof u!="object"||u===null?m[l]=u:u.constructor!==Object&&(r=t.get(u.constructor))?m[l]=r(u,s):ArrayBuffer.isView(u)?m[l]=o(u):m[l]=s(u)}return m}function i(g){if(typeof g!="object"||g===null)return g;if(Array.isArray(g))return e(g,i);if(g.constructor!==Object&&(r=t.get(g.constructor)))return r(g,i);let m={};for(let l in g){let u=g[l];typeof u!="object"||u===null?m[l]=u:u.constructor!==Object&&(r=t.get(u.constructor))?m[l]=r(u,i):ArrayBuffer.isView(u)?m[l]=o(u):m[l]=i(u)}return m}}function p(n){let t=[],r=[],e=new Map;if(e.set(Date,l=>new Date(l)),e.set(Map,(l,u)=>new Map(i(Array.from(l),u))),e.set(Set,(l,u)=>new Set(i(Array.from(l),u))),n.constructorHandlers)for(let l of n.constructorHandlers)e.set(l[0],l[1]);let s=null;return n.proto?m:g;function i(l,u){let f=Object.keys(l),y=new Array(f.length);for(let k=0;k<f.length;k++){let b=f[k],_=l[b];if(typeof _!="object"||_===null)y[b]=_;else if(_.constructor!==Object&&(s=e.get(_.constructor)))y[b]=s(_,u);else if(ArrayBuffer.isView(_))y[b]=o(_);else{let A=t.indexOf(_);A!==-1?y[b]=r[A]:y[b]=u(_)}}return y}function g(l){if(typeof l!="object"||l===null)return l;if(Array.isArray(l))return i(l,g);if(l.constructor!==Object&&(s=e.get(l.constructor)))return s(l,g);let u={};t.push(l),r.push(u);for(let f in l){if(Object.hasOwnProperty.call(l,f)===!1)continue;let y=l[f];if(typeof y!="object"||y===null)u[f]=y;else if(y.constructor!==Object&&(s=e.get(y.constructor)))u[f]=s(y,g);else if(ArrayBuffer.isView(y))u[f]=o(y);else{let k=t.indexOf(y);k!==-1?u[f]=r[k]:u[f]=g(y)}}return t.pop(),r.pop(),u}function m(l){if(typeof l!="object"||l===null)return l;if(Array.isArray(l))return i(l,m);if(l.constructor!==Object&&(s=e.get(l.constructor)))return s(l,m);let u={};t.push(l),r.push(u);for(let f in l){let y=l[f];if(typeof y!="object"||y===null)u[f]=y;else if(y.constructor!==Object&&(s=e.get(y.constructor)))u[f]=s(y,m);else if(ArrayBuffer.isView(y))u[f]=o(y);else{let k=t.indexOf(y);k!==-1?u[f]=r[k]:u[f]=m(y)}}return t.pop(),r.pop(),u}}}),nc=be((d,h)=>{de(),pe(),ue(),h.exports=tc()()}),po=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0}),d.validateTopic=h,d.validateTopics=o;function h(a){let p=a.split("/");for(let n=0;n<p.length;n++)if(p[n]!=="+"){if(p[n]==="#")return n===p.length-1;if(p[n].indexOf("+")!==-1||p[n].indexOf("#")!==-1)return!1}return!0}function o(a){if(a.length===0)return"empty_topic_list";for(let p=0;p<a.length;p++)if(!h(a[p]))return a[p];return null}}),ho=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=Bt(),o={objectMode:!0},a={clean:!0},p=class{options;_inflights;constructor(n){this.options=n||{},this.options={...a,...n},this._inflights=new Map}put(n,t){return this._inflights.set(n.messageId,n),t&&t(),this}createStream(){let n=new h.Readable(o),t=[],r=!1,e=0;return this._inflights.forEach((s,i)=>{t.push(s)}),n._read=()=>{!r&&e<t.length?n.push(t[e++]):n.push(null)},n.destroy=s=>{if(!r)return r=!0,setTimeout(()=>{n.emit("close")},0),n},n}del(n,t){let r=this._inflights.get(n.messageId);return r?(this._inflights.delete(n.messageId),t(null,r)):t&&t(new Error("missing packet")),this}get(n,t){let r=this._inflights.get(n.messageId);return r?t(null,r):t&&t(new Error("missing packet")),this}close(n){this.options.clean&&(this._inflights=null),n&&n()}};d.default=p}),rc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=[0,16,128,131,135,144,145,151,153],o=(a,p,n)=>{a.log("handlePublish: packet %o",p),n=typeof n<"u"?n:a.noop;let t=p.topic.toString(),r=p.payload,{qos:e}=p,{messageId:s}=p,{options:i}=a;if(a.options.protocolVersion===5){let g;if(p.properties&&(g=p.properties.topicAlias),typeof g<"u")if(t.length===0)if(g>0&&g<=65535){let m=a.topicAliasRecv.getTopicByAlias(g);if(m)t=m,a.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d",t,g);else{a.log("handlePublish :: unregistered topic alias. alias: %d",g),a.emit("error",new Error("Received unregistered Topic Alias"));return}}else{a.log("handlePublish :: topic alias out of range. alias: %d",g),a.emit("error",new Error("Received Topic Alias is out of range"));return}else if(a.topicAliasRecv.put(t,g))a.log("handlePublish :: registered topic: %s - alias: %d",t,g);else{a.log("handlePublish :: topic alias out of range. alias: %d",g),a.emit("error",new Error("Received Topic Alias is out of range"));return}}switch(a.log("handlePublish: qos %d",e),e){case 2:{i.customHandleAcks(t,r,p,(g,m)=>{if(typeof g=="number"&&(m=g,g=null),g)return a.emit("error",g);if(h.indexOf(m)===-1)return a.emit("error",new Error("Wrong reason code for pubrec"));m?a._sendPacket({cmd:"pubrec",messageId:s,reasonCode:m},n):a.incomingStore.put(p,()=>{a._sendPacket({cmd:"pubrec",messageId:s},n)})});break}case 1:{i.customHandleAcks(t,r,p,(g,m)=>{if(typeof g=="number"&&(m=g,g=null),g)return a.emit("error",g);if(h.indexOf(m)===-1)return a.emit("error",new Error("Wrong reason code for puback"));m||a.emit("message",t,r,p),a.handleMessage(p,l=>{if(l)return n&&n(l);a._sendPacket({cmd:"puback",messageId:s,reasonCode:m},n)})});break}case 0:a.emit("message",t,r,p),a.handleMessage(p,n);break;default:a.log("handlePublish: unknown QoS. Doing nothing.");break}};d.default=o}),sc=be((d,h)=>{h.exports={version:"5.15.0"}}),Jt=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0}),d.MQTTJS_VERSION=d.nextTick=d.ErrorWithSubackPacket=d.ErrorWithReasonCode=void 0,d.applyMixin=a;var h=class fo extends Error{code;constructor(n,t){super(n),this.code=t,Object.setPrototypeOf(this,fo.prototype),Object.getPrototypeOf(this).name="ErrorWithReasonCode"}};d.ErrorWithReasonCode=h;var o=class mo extends Error{packet;constructor(n,t){super(n),this.packet=t,Object.setPrototypeOf(this,mo.prototype),Object.getPrototypeOf(this).name="ErrorWithSubackPacket"}};d.ErrorWithSubackPacket=o;function a(p,n,t=!1){let r=[n];for(;;){let e=r[0],s=Object.getPrototypeOf(e);if(s?.prototype)r.unshift(s);else break}for(let e of r)for(let s of Object.getOwnPropertyNames(e.prototype))(t||s!=="constructor")&&Object.defineProperty(p.prototype,s,Object.getOwnPropertyDescriptor(e.prototype,s)??Object.create(null))}d.nextTick=typeof qe?.nextTick=="function"?qe.nextTick:p=>{setTimeout(p,0)},d.MQTTJS_VERSION=sc().version}),Jn=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0}),d.ReasonCodes=void 0;var h=Jt();d.ReasonCodes={0:"",1:"Unacceptable protocol version",2:"Identifier rejected",3:"Server unavailable",4:"Bad username or password",5:"Not authorized",16:"No matching subscribers",17:"No subscription existed",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",132:"Unsupported Protocol Version",133:"Client Identifier not valid",134:"Bad User Name or Password",135:"Not authorized",136:"Server unavailable",137:"Server busy",138:"Banned",139:"Server shutting down",140:"Bad authentication method",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",145:"Packet identifier in use",146:"Packet Identifier not found",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"};var o=(a,p)=>{let{messageId:n}=p,t=p.cmd,r=null,e=a.outgoing[n]?a.outgoing[n].cb:null,s=null;if(!e){a.log("_handleAck :: Server sent an ack in error. Ignoring.");return}switch(a.log("_handleAck :: packet type",t),t){case"pubcomp":case"puback":{let i=p.reasonCode;i&&i>0&&i!==16?(s=new h.ErrorWithReasonCode(`Publish error: ${d.ReasonCodes[i]}`,i),a._removeOutgoingAndStoreMessage(n,()=>{e(s,p)})):a._removeOutgoingAndStoreMessage(n,e);break}case"pubrec":{r={cmd:"pubrel",qos:2,messageId:n};let i=p.reasonCode;i&&i>0&&i!==16?(s=new h.ErrorWithReasonCode(`Publish error: ${d.ReasonCodes[i]}`,i),a._removeOutgoingAndStoreMessage(n,()=>{e(s,p)})):a._sendPacket(r);break}case"suback":{delete a.outgoing[n],a.messageIdProvider.deallocate(n);let i=p.granted;for(let g=0;g<i.length;g++){let m=i[g];if((m&128)!==0){s=new Error(`Subscribe error: ${d.ReasonCodes[m]}`),s.code=m;let l=a.messageIdToTopic[n];l&&l.forEach(u=>{delete a._resubscribeTopics[u]})}}delete a.messageIdToTopic[n],a._invokeStoreProcessingQueue(),e(s,p);break}case"unsuback":{delete a.outgoing[n],a.messageIdProvider.deallocate(n),a._invokeStoreProcessingQueue(),e(null,p);break}default:a.emit("error",new Error("unrecognized packet type"))}a.disconnecting&&Object.keys(a.outgoing).length===0&&a.emit("outgoingEmpty")};d.default=o}),ic=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=Jt(),o=Jn(),a=(p,n)=>{let{options:t}=p,r=t.protocolVersion,e=r===5?n.reasonCode:n.returnCode;if(r!==5){let s=new h.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${r}`,e);p.emit("error",s);return}p.handleAuth(n,(s,i)=>{if(s){p.emit("error",s);return}if(e===24)p.reconnecting=!1,p._sendPacket(i);else{let g=new h.ErrorWithReasonCode(`Connection refused: ${o.ReasonCodes[e]}`,e);p.emit("error",g)}})};d.default=a}),ac=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0}),d.LRUCache=void 0;var h=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,o=new Set,a=typeof qe=="object"&&qe?qe:{},p=(l,u,f,y)=>{typeof a.emitWarning=="function"?a.emitWarning(l,u,f,y):console.error(`[${f}] ${u}: ${l}`)},n=globalThis.AbortController,t=globalThis.AbortSignal;if(typeof n>"u"){t=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(f,y){this._onabort.push(y)}},n=class{constructor(){u()}signal=new t;abort(f){if(!this.signal.aborted){this.signal.reason=f,this.signal.aborted=!0;for(let y of this.signal._onabort)y(f);this.signal.onabort?.(f)}}};let l=a.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",u=()=>{l&&(l=!1,p("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",u))}}var r=l=>!o.has(l),e=l=>l&&l===Math.floor(l)&&l>0&&isFinite(l),s=l=>e(l)?l<=Math.pow(2,8)?Uint8Array:l<=Math.pow(2,16)?Uint16Array:l<=Math.pow(2,32)?Uint32Array:l<=Number.MAX_SAFE_INTEGER?i:null:null,i=class extends Array{constructor(l){super(l),this.fill(0)}},g=class ln{heap;length;static#l=!1;static create(u){let f=s(u);if(!f)return[];ln.#l=!0;let y=new ln(u,f);return ln.#l=!1,y}constructor(u,f){if(!ln.#l)throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new f(u),this.length=0}push(u){this.heap[this.length++]=u}pop(){return this.heap[--this.length]}},m=class go{#l;#u;#m;#g;#C;#P;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#s;#b;#r;#n;#e;#c;#p;#o;#i;#y;#a;#v;#w;#h;#_;#E;#d;static unsafeExposeInternals(u){return{starts:u.#w,ttls:u.#h,sizes:u.#v,keyMap:u.#r,keyList:u.#n,valList:u.#e,next:u.#c,prev:u.#p,get head(){return u.#o},get tail(){return u.#i},free:u.#y,isBackgroundFetch:f=>u.#t(f),backgroundFetch:(f,y,k,b)=>u.#R(f,y,k,b),moveToTail:f=>u.#M(f),indexes:f=>u.#k(f),rindexes:f=>u.#x(f),isStale:f=>u.#f(f)}}get max(){return this.#l}get maxSize(){return this.#u}get calculatedSize(){return this.#b}get size(){return this.#s}get fetchMethod(){return this.#C}get memoMethod(){return this.#P}get dispose(){return this.#m}get disposeAfter(){return this.#g}constructor(u){let{max:f=0,ttl:y,ttlResolution:k=1,ttlAutopurge:b,updateAgeOnGet:_,updateAgeOnHas:A,allowStale:v,dispose:S,disposeAfter:x,noDisposeOnSet:T,noUpdateTTL:C,maxSize:P=0,maxEntrySize:B=0,sizeCalculation:I,fetchMethod:z,memoMethod:j,noDeleteOnFetchRejection:F,noDeleteOnStaleGet:le,allowStaleOnFetchRejection:Z,allowStaleOnFetchAbort:Y,ignoreFetchAbort:ie}=u;if(f!==0&&!e(f))throw new TypeError("max option must be a nonnegative integer");let W=f?s(f):Array;if(!W)throw new Error("invalid max value: "+f);if(this.#l=f,this.#u=P,this.maxEntrySize=B||this.#u,this.sizeCalculation=I,this.sizeCalculation){if(!this.#u&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(j!==void 0&&typeof j!="function")throw new TypeError("memoMethod must be a function if defined");if(this.#P=j,z!==void 0&&typeof z!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#C=z,this.#E=!!z,this.#r=new Map,this.#n=new Array(f).fill(void 0),this.#e=new Array(f).fill(void 0),this.#c=new W(f),this.#p=new W(f),this.#o=0,this.#i=0,this.#y=g.create(f),this.#s=0,this.#b=0,typeof S=="function"&&(this.#m=S),typeof x=="function"?(this.#g=x,this.#a=[]):(this.#g=void 0,this.#a=void 0),this.#_=!!this.#m,this.#d=!!this.#g,this.noDisposeOnSet=!!T,this.noUpdateTTL=!!C,this.noDeleteOnFetchRejection=!!F,this.allowStaleOnFetchRejection=!!Z,this.allowStaleOnFetchAbort=!!Y,this.ignoreFetchAbort=!!ie,this.maxEntrySize!==0){if(this.#u!==0&&!e(this.#u))throw new TypeError("maxSize must be a positive integer if specified");if(!e(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#D()}if(this.allowStale=!!v,this.noDeleteOnStaleGet=!!le,this.updateAgeOnGet=!!_,this.updateAgeOnHas=!!A,this.ttlResolution=e(k)||k===0?k:1,this.ttlAutopurge=!!b,this.ttl=y||0,this.ttl){if(!e(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#U()}if(this.#l===0&&this.ttl===0&&this.#u===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#l&&!this.#u){let ne="LRU_CACHE_UNBOUNDED";r(ne)&&(o.add(ne),p("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",ne,go))}}getRemainingTTL(u){return this.#r.has(u)?1/0:0}#U(){let u=new i(this.#l),f=new i(this.#l);this.#h=u,this.#w=f,this.#L=(b,_,A=h.now())=>{if(f[b]=_!==0?A:0,u[b]=_,_!==0&&this.ttlAutopurge){let v=setTimeout(()=>{this.#f(b)&&this.#S(this.#n[b],"expire")},_+1);v.unref&&v.unref()}},this.#T=b=>{f[b]=u[b]!==0?h.now():0},this.#A=(b,_)=>{if(u[_]){let A=u[_],v=f[_];if(!A||!v)return;b.ttl=A,b.start=v,b.now=y||k();let S=b.now-v;b.remainingTTL=A-S}};let y=0,k=()=>{let b=h.now();if(this.ttlResolution>0){y=b;let _=setTimeout(()=>y=0,this.ttlResolution);_.unref&&_.unref()}return b};this.getRemainingTTL=b=>{let _=this.#r.get(b);if(_===void 0)return 0;let A=u[_],v=f[_];if(!A||!v)return 1/0;let S=(y||k())-v;return A-S},this.#f=b=>{let _=f[b],A=u[b];return!!A&&!!_&&(y||k())-_>A}}#T=()=>{};#A=()=>{};#L=()=>{};#f=()=>!1;#D(){let u=new i(this.#l);this.#b=0,this.#v=u,this.#I=f=>{this.#b-=u[f],u[f]=0},this.#q=(f,y,k,b)=>{if(this.#t(y))return 0;if(!e(k))if(b){if(typeof b!="function")throw new TypeError("sizeCalculation must be a function");if(k=b(y,f),!e(k))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return k},this.#O=(f,y,k)=>{if(u[f]=y,this.#u){let b=this.#u-u[f];for(;this.#b>b;)this.#N(!0)}this.#b+=u[f],k&&(k.entrySize=y,k.totalCalculatedSize=this.#b)}}#I=u=>{};#O=(u,f,y)=>{};#q=(u,f,y,k)=>{if(y||k)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#k({allowStale:u=this.allowStale}={}){if(this.#s)for(let f=this.#i;!(!this.#j(f)||((u||!this.#f(f))&&(yield f),f===this.#o));)f=this.#p[f]}*#x({allowStale:u=this.allowStale}={}){if(this.#s)for(let f=this.#o;!(!this.#j(f)||((u||!this.#f(f))&&(yield f),f===this.#i));)f=this.#c[f]}#j(u){return u!==void 0&&this.#r.get(this.#n[u])===u}*entries(){for(let u of this.#k())this.#e[u]!==void 0&&this.#n[u]!==void 0&&!this.#t(this.#e[u])&&(yield[this.#n[u],this.#e[u]])}*rentries(){for(let u of this.#x())this.#e[u]!==void 0&&this.#n[u]!==void 0&&!this.#t(this.#e[u])&&(yield[this.#n[u],this.#e[u]])}*keys(){for(let u of this.#k()){let f=this.#n[u];f!==void 0&&!this.#t(this.#e[u])&&(yield f)}}*rkeys(){for(let u of this.#x()){let f=this.#n[u];f!==void 0&&!this.#t(this.#e[u])&&(yield f)}}*values(){for(let u of this.#k())this.#e[u]!==void 0&&!this.#t(this.#e[u])&&(yield this.#e[u])}*rvalues(){for(let u of this.#x())this.#e[u]!==void 0&&!this.#t(this.#e[u])&&(yield this.#e[u])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(u,f={}){for(let y of this.#k()){let k=this.#e[y],b=this.#t(k)?k.__staleWhileFetching:k;if(b!==void 0&&u(b,this.#n[y],this))return this.get(this.#n[y],f)}}forEach(u,f=this){for(let y of this.#k()){let k=this.#e[y],b=this.#t(k)?k.__staleWhileFetching:k;b!==void 0&&u.call(f,b,this.#n[y],this)}}rforEach(u,f=this){for(let y of this.#x()){let k=this.#e[y],b=this.#t(k)?k.__staleWhileFetching:k;b!==void 0&&u.call(f,b,this.#n[y],this)}}purgeStale(){let u=!1;for(let f of this.#x({allowStale:!0}))this.#f(f)&&(this.#S(this.#n[f],"expire"),u=!0);return u}info(u){let f=this.#r.get(u);if(f===void 0)return;let y=this.#e[f],k=this.#t(y)?y.__staleWhileFetching:y;if(k===void 0)return;let b={value:k};if(this.#h&&this.#w){let _=this.#h[f],A=this.#w[f];if(_&&A){let v=_-(h.now()-A);b.ttl=v,b.start=Date.now()}}return this.#v&&(b.size=this.#v[f]),b}dump(){let u=[];for(let f of this.#k({allowStale:!0})){let y=this.#n[f],k=this.#e[f],b=this.#t(k)?k.__staleWhileFetching:k;if(b===void 0||y===void 0)continue;let _={value:b};if(this.#h&&this.#w){_.ttl=this.#h[f];let A=h.now()-this.#w[f];_.start=Math.floor(Date.now()-A)}this.#v&&(_.size=this.#v[f]),u.unshift([y,_])}return u}load(u){this.clear();for(let[f,y]of u){if(y.start){let k=Date.now()-y.start;y.start=h.now()-k}this.set(f,y.value,y)}}set(u,f,y={}){if(f===void 0)return this.delete(u),this;let{ttl:k=this.ttl,start:b,noDisposeOnSet:_=this.noDisposeOnSet,sizeCalculation:A=this.sizeCalculation,status:v}=y,{noUpdateTTL:S=this.noUpdateTTL}=y,x=this.#q(u,f,y.size||0,A);if(this.maxEntrySize&&x>this.maxEntrySize)return v&&(v.set="miss",v.maxEntrySizeExceeded=!0),this.#S(u,"set"),this;let T=this.#s===0?void 0:this.#r.get(u);if(T===void 0)T=this.#s===0?this.#i:this.#y.length!==0?this.#y.pop():this.#s===this.#l?this.#N(!1):this.#s,this.#n[T]=u,this.#e[T]=f,this.#r.set(u,T),this.#c[this.#i]=T,this.#p[T]=this.#i,this.#i=T,this.#s++,this.#O(T,x,v),v&&(v.set="add"),S=!1;else{this.#M(T);let C=this.#e[T];if(f!==C){if(this.#E&&this.#t(C)){C.__abortController.abort(new Error("replaced"));let{__staleWhileFetching:P}=C;P!==void 0&&!_&&(this.#_&&this.#m?.(P,u,"set"),this.#d&&this.#a?.push([P,u,"set"]))}else _||(this.#_&&this.#m?.(C,u,"set"),this.#d&&this.#a?.push([C,u,"set"]));if(this.#I(T),this.#O(T,x,v),this.#e[T]=f,v){v.set="replace";let P=C&&this.#t(C)?C.__staleWhileFetching:C;P!==void 0&&(v.oldValue=P)}}else v&&(v.set="update")}if(k!==0&&!this.#h&&this.#U(),this.#h&&(S||this.#L(T,k,b),v&&this.#A(v,T)),!_&&this.#d&&this.#a){let C=this.#a,P;for(;P=C?.shift();)this.#g?.(...P)}return this}pop(){try{for(;this.#s;){let u=this.#e[this.#o];if(this.#N(!0),this.#t(u)){if(u.__staleWhileFetching)return u.__staleWhileFetching}else if(u!==void 0)return u}}finally{if(this.#d&&this.#a){let u=this.#a,f;for(;f=u?.shift();)this.#g?.(...f)}}}#N(u){let f=this.#o,y=this.#n[f],k=this.#e[f];return this.#E&&this.#t(k)?k.__abortController.abort(new Error("evicted")):(this.#_||this.#d)&&(this.#_&&this.#m?.(k,y,"evict"),this.#d&&this.#a?.push([k,y,"evict"])),this.#I(f),u&&(this.#n[f]=void 0,this.#e[f]=void 0,this.#y.push(f)),this.#s===1?(this.#o=this.#i=0,this.#y.length=0):this.#o=this.#c[f],this.#r.delete(y),this.#s--,f}has(u,f={}){let{updateAgeOnHas:y=this.updateAgeOnHas,status:k}=f,b=this.#r.get(u);if(b!==void 0){let _=this.#e[b];if(this.#t(_)&&_.__staleWhileFetching===void 0)return!1;if(this.#f(b))k&&(k.has="stale",this.#A(k,b));else return y&&this.#T(b),k&&(k.has="hit",this.#A(k,b)),!0}else k&&(k.has="miss");return!1}peek(u,f={}){let{allowStale:y=this.allowStale}=f,k=this.#r.get(u);if(k===void 0||!y&&this.#f(k))return;let b=this.#e[k];return this.#t(b)?b.__staleWhileFetching:b}#R(u,f,y,k){let b=f===void 0?void 0:this.#e[f];if(this.#t(b))return b;let _=new n,{signal:A}=y;A?.addEventListener("abort",()=>_.abort(A.reason),{signal:_.signal});let v={signal:_.signal,options:y,context:k},S=(I,z=!1)=>{let{aborted:j}=_.signal,F=y.ignoreFetchAbort&&I!==void 0;if(y.status&&(j&&!z?(y.status.fetchAborted=!0,y.status.fetchError=_.signal.reason,F&&(y.status.fetchAbortIgnored=!0)):y.status.fetchResolved=!0),j&&!F&&!z)return T(_.signal.reason);let le=P;return this.#e[f]===P&&(I===void 0?le.__staleWhileFetching?this.#e[f]=le.__staleWhileFetching:this.#S(u,"fetch"):(y.status&&(y.status.fetchUpdated=!0),this.set(u,I,v.options))),I},x=I=>(y.status&&(y.status.fetchRejected=!0,y.status.fetchError=I),T(I)),T=I=>{let{aborted:z}=_.signal,j=z&&y.allowStaleOnFetchAbort,F=j||y.allowStaleOnFetchRejection,le=F||y.noDeleteOnFetchRejection,Z=P;if(this.#e[f]===P&&(!le||Z.__staleWhileFetching===void 0?this.#S(u,"fetch"):j||(this.#e[f]=Z.__staleWhileFetching)),F)return y.status&&Z.__staleWhileFetching!==void 0&&(y.status.returnedStale=!0),Z.__staleWhileFetching;if(Z.__returned===Z)throw I},C=(I,z)=>{let j=this.#C?.(u,b,v);j&&j instanceof Promise&&j.then(F=>I(F===void 0?void 0:F),z),_.signal.addEventListener("abort",()=>{(!y.ignoreFetchAbort||y.allowStaleOnFetchAbort)&&(I(void 0),y.allowStaleOnFetchAbort&&(I=F=>S(F,!0)))})};y.status&&(y.status.fetchDispatched=!0);let P=new Promise(C).then(S,x),B=Object.assign(P,{__abortController:_,__staleWhileFetching:b,__returned:void 0});return f===void 0?(this.set(u,B,{...v.options,status:void 0}),f=this.#r.get(u)):this.#e[f]=B,B}#t(u){if(!this.#E)return!1;let f=u;return!!f&&f instanceof Promise&&f.hasOwnProperty("__staleWhileFetching")&&f.__abortController instanceof n}async fetch(u,f={}){let{allowStale:y=this.allowStale,updateAgeOnGet:k=this.updateAgeOnGet,noDeleteOnStaleGet:b=this.noDeleteOnStaleGet,ttl:_=this.ttl,noDisposeOnSet:A=this.noDisposeOnSet,size:v=0,sizeCalculation:S=this.sizeCalculation,noUpdateTTL:x=this.noUpdateTTL,noDeleteOnFetchRejection:T=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:C=this.allowStaleOnFetchRejection,ignoreFetchAbort:P=this.ignoreFetchAbort,allowStaleOnFetchAbort:B=this.allowStaleOnFetchAbort,context:I,forceRefresh:z=!1,status:j,signal:F}=f;if(!this.#E)return j&&(j.fetch="get"),this.get(u,{allowStale:y,updateAgeOnGet:k,noDeleteOnStaleGet:b,status:j});let le={allowStale:y,updateAgeOnGet:k,noDeleteOnStaleGet:b,ttl:_,noDisposeOnSet:A,size:v,sizeCalculation:S,noUpdateTTL:x,noDeleteOnFetchRejection:T,allowStaleOnFetchRejection:C,allowStaleOnFetchAbort:B,ignoreFetchAbort:P,status:j,signal:F},Z=this.#r.get(u);if(Z===void 0){j&&(j.fetch="miss");let Y=this.#R(u,Z,le,I);return Y.__returned=Y}else{let Y=this.#e[Z];if(this.#t(Y)){let O=y&&Y.__staleWhileFetching!==void 0;return j&&(j.fetch="inflight",O&&(j.returnedStale=!0)),O?Y.__staleWhileFetching:Y.__returned=Y}let ie=this.#f(Z);if(!z&&!ie)return j&&(j.fetch="hit"),this.#M(Z),k&&this.#T(Z),j&&this.#A(j,Z),Y;let W=this.#R(u,Z,le,I),ne=W.__staleWhileFetching!==void 0&&y;return j&&(j.fetch=ie?"stale":"refresh",ne&&ie&&(j.returnedStale=!0)),ne?W.__staleWhileFetching:W.__returned=W}}async forceFetch(u,f={}){let y=await this.fetch(u,f);if(y===void 0)throw new Error("fetch() returned undefined");return y}memo(u,f={}){let y=this.#P;if(!y)throw new Error("no memoMethod provided to constructor");let{context:k,forceRefresh:b,..._}=f,A=this.get(u,_);if(!b&&A!==void 0)return A;let v=y(u,A,{options:_,context:k});return this.set(u,v,_),v}get(u,f={}){let{allowStale:y=this.allowStale,updateAgeOnGet:k=this.updateAgeOnGet,noDeleteOnStaleGet:b=this.noDeleteOnStaleGet,status:_}=f,A=this.#r.get(u);if(A!==void 0){let v=this.#e[A],S=this.#t(v);return _&&this.#A(_,A),this.#f(A)?(_&&(_.get="stale"),S?(_&&y&&v.__staleWhileFetching!==void 0&&(_.returnedStale=!0),y?v.__staleWhileFetching:void 0):(b||this.#S(u,"expire"),_&&y&&(_.returnedStale=!0),y?v:void 0)):(_&&(_.get="hit"),S?v.__staleWhileFetching:(this.#M(A),k&&this.#T(A),v))}else _&&(_.get="miss")}#B(u,f){this.#p[f]=u,this.#c[u]=f}#M(u){u!==this.#i&&(u===this.#o?this.#o=this.#c[u]:this.#B(this.#p[u],this.#c[u]),this.#B(this.#i,u),this.#i=u)}delete(u){return this.#S(u,"delete")}#S(u,f){let y=!1;if(this.#s!==0){let k=this.#r.get(u);if(k!==void 0)if(y=!0,this.#s===1)this.#F(f);else{this.#I(k);let b=this.#e[k];if(this.#t(b)?b.__abortController.abort(new Error("deleted")):(this.#_||this.#d)&&(this.#_&&this.#m?.(b,u,f),this.#d&&this.#a?.push([b,u,f])),this.#r.delete(u),this.#n[k]=void 0,this.#e[k]=void 0,k===this.#i)this.#i=this.#p[k];else if(k===this.#o)this.#o=this.#c[k];else{let _=this.#p[k];this.#c[_]=this.#c[k];let A=this.#c[k];this.#p[A]=this.#p[k]}this.#s--,this.#y.push(k)}}if(this.#d&&this.#a?.length){let k=this.#a,b;for(;b=k?.shift();)this.#g?.(...b)}return y}clear(){return this.#F("delete")}#F(u){for(let f of this.#x({allowStale:!0})){let y=this.#e[f];if(this.#t(y))y.__abortController.abort(new Error("deleted"));else{let k=this.#n[f];this.#_&&this.#m?.(y,k,u),this.#d&&this.#a?.push([y,k,u])}}if(this.#r.clear(),this.#e.fill(void 0),this.#n.fill(void 0),this.#h&&this.#w&&(this.#h.fill(0),this.#w.fill(0)),this.#v&&this.#v.fill(0),this.#o=0,this.#i=0,this.#y.length=0,this.#b=0,this.#s=0,this.#d&&this.#a){let f=this.#a,y;for(;y=f?.shift();)this.#g?.(...y)}}};d.LRUCache=m}),kt=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.ContainerIterator=d.Container=d.Base=void 0;var h=class{constructor(p=0){this.iteratorType=p}equals(p){return this.o===p.o}};d.ContainerIterator=h;var o=class{constructor(){this.i=0}get length(){return this.i}size(){return this.i}empty(){return this.i===0}};d.Base=o;var a=class extends o{};d.Container=a}),oc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Base{constructor(p=[]){super(),this.S=[];let n=this;p.forEach(function(t){n.push(t)})}clear(){this.i=0,this.S=[]}push(p){return this.S.push(p),this.i+=1,this.i}pop(){if(this.i!==0)return this.i-=1,this.S.pop()}top(){return this.S[this.i-1]}},a=o;d.default=a}),lc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Base{constructor(p=[]){super(),this.j=0,this.q=[];let n=this;p.forEach(function(t){n.push(t)})}clear(){this.q=[],this.i=this.j=0}push(p){let n=this.q.length;if(this.j/n>.5&&this.j+this.i>=n&&n>4096){let t=this.i;for(let r=0;r<t;++r)this.q[r]=this.q[this.j+r];this.j=0,this.q[this.i]=p}else this.q[this.j+this.i]=p;return++this.i}pop(){if(this.i===0)return;let p=this.q[this.j++];return this.i-=1,p}front(){if(this.i!==0)return this.q[this.j]}},a=o;d.default=a}),cc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Base{constructor(p=[],n=function(r,e){return r>e?-1:r<e?1:0},t=!0){if(super(),this.v=n,Array.isArray(p))this.C=t?[...p]:p;else{this.C=[];let e=this;p.forEach(function(s){e.C.push(s)})}this.i=this.C.length;let r=this.i>>1;for(let e=this.i-1>>1;e>=0;--e)this.k(e,r)}m(p){let n=this.C[p];for(;p>0;){let t=p-1>>1,r=this.C[t];if(this.v(r,n)<=0)break;this.C[p]=r,p=t}this.C[p]=n}k(p,n){let t=this.C[p];for(;p<n;){let r=p<<1|1,e=r+1,s=this.C[r];if(e<this.i&&this.v(s,this.C[e])>0&&(r=e,s=this.C[e]),this.v(s,t)>=0)break;this.C[p]=s,p=r}this.C[p]=t}clear(){this.i=0,this.C.length=0}push(p){this.C.push(p),this.m(this.i),this.i+=1}pop(){if(this.i===0)return;let p=this.C[0],n=this.C.pop();return this.i-=1,this.i&&(this.C[0]=n,this.k(0,this.i>>1)),p}top(){return this.C[0]}find(p){return this.C.indexOf(p)>=0}remove(p){let n=this.C.indexOf(p);return n<0?!1:(n===0?this.pop():n===this.i-1?(this.C.pop(),this.i-=1):(this.C.splice(n,1,this.C.pop()),this.i-=1,this.m(n),this.k(n,this.i>>1)),!0)}updateItem(p){let n=this.C.indexOf(p);return n<0?!1:(this.m(n),this.k(n,this.i>>1),!0)}toArray(){return[...this.C]}},a=o;d.default=a}),pi=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Container{},a=o;d.default=a}),xt=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.throwIteratorAccessError=h;function h(){throw new RangeError("Iterator access denied!")}}),bo=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.RandomIterator=void 0;var h=kt(),o=xt(),a=class extends h.ContainerIterator{constructor(p,n){super(n),this.o=p,this.iteratorType===0?(this.pre=function(){return this.o===0&&(0,o.throwIteratorAccessError)(),this.o-=1,this},this.next=function(){return this.o===this.container.size()&&(0,o.throwIteratorAccessError)(),this.o+=1,this}):(this.pre=function(){return this.o===this.container.size()-1&&(0,o.throwIteratorAccessError)(),this.o+=1,this},this.next=function(){return this.o===-1&&(0,o.throwIteratorAccessError)(),this.o-=1,this})}get pointer(){return this.container.getElementByPos(this.o)}set pointer(p){this.container.setElementByPos(this.o,p)}};d.RandomIterator=a}),dc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=a(pi()),o=bo();function a(r){return r&&r.t?r:{default:r}}var p=class yo extends o.RandomIterator{constructor(e,s,i){super(e,i),this.container=s}copy(){return new yo(this.o,this.container,this.iteratorType)}},n=class extends h.default{constructor(r=[],e=!0){if(super(),Array.isArray(r))this.J=e?[...r]:r,this.i=r.length;else{this.J=[];let s=this;r.forEach(function(i){s.pushBack(i)})}}clear(){this.i=0,this.J.length=0}begin(){return new p(0,this)}end(){return new p(this.i,this)}rBegin(){return new p(this.i-1,this,1)}rEnd(){return new p(-1,this,1)}front(){return this.J[0]}back(){return this.J[this.i-1]}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J[r]}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J.splice(r,1),this.i-=1,this.i}eraseElementByValue(r){let e=0;for(let s=0;s<this.i;++s)this.J[s]!==r&&(this.J[e++]=this.J[s]);return this.i=this.J.length=e,this.i}eraseElementByIterator(r){let e=r.o;return r=r.next(),this.eraseElementByPos(e),r}pushBack(r){return this.J.push(r),this.i+=1,this.i}popBack(){if(this.i!==0)return this.i-=1,this.J.pop()}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;this.J[r]=e}insert(r,e,s=1){if(r<0||r>this.i)throw new RangeError;return this.J.splice(r,0,...new Array(s).fill(e)),this.i+=s,this.i}find(r){for(let e=0;e<this.i;++e)if(this.J[e]===r)return new p(e,this);return this.end()}reverse(){this.J.reverse()}unique(){let r=1;for(let e=1;e<this.i;++e)this.J[e]!==this.J[e-1]&&(this.J[r++]=this.J[e]);return this.i=this.J.length=r,this.i}sort(r){this.J.sort(r)}forEach(r){for(let e=0;e<this.i;++e)r(this.J[e],e,this)}[Symbol.iterator](){return(function*(){yield*this.J}).bind(this)()}},t=n;d.default=t}),uc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=p(pi()),o=kt(),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class vo extends o.ContainerIterator{constructor(s,i,g,m){super(m),this.o=s,this.h=i,this.container=g,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this})}get pointer(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.l}set pointer(s){this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.l=s}copy(){return new vo(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.default{constructor(e=[]){super(),this.h={},this.p=this._=this.h.L=this.h.B=this.h;let s=this;e.forEach(function(i){s.pushBack(i)})}V(e){let{L:s,B:i}=e;s.B=i,i.L=s,e===this.p&&(this.p=i),e===this._&&(this._=s),this.i-=1}G(e,s){let i=s.B,g={l:e,L:s,B:i};s.B=g,i.L=g,s===this.h&&(this.p=g),i===this.h&&(this._=g),this.i+=1}clear(){this.i=0,this.p=this._=this.h.L=this.h.B=this.h}begin(){return new n(this.p,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this._,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){return this.p.l}back(){return this._.l}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return s.l}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return this.V(s),this.i}eraseElementByValue(e){let s=this.p;for(;s!==this.h;)s.l===e&&this.V(s),s=s.B;return this.i}eraseElementByIterator(e){let s=e.o;return s===this.h&&(0,a.throwIteratorAccessError)(),e=e.next(),this.V(s),e}pushBack(e){return this.G(e,this._),this.i}popBack(){if(this.i===0)return;let e=this._.l;return this.V(this._),e}pushFront(e){return this.G(e,this.h),this.i}popFront(){if(this.i===0)return;let e=this.p.l;return this.V(this.p),e}setElementByPos(e,s){if(e<0||e>this.i-1)throw new RangeError;let i=this.p;for(;e--;)i=i.B;i.l=s}insert(e,s,i=1){if(e<0||e>this.i)throw new RangeError;if(i<=0)return this.i;if(e===0)for(;i--;)this.pushFront(s);else if(e===this.i)for(;i--;)this.pushBack(s);else{let g=this.p;for(let l=1;l<e;++l)g=g.B;let m=g.B;for(this.i+=i;i--;)g.B={l:s,L:g},g.B.L=g,g=g.B;g.B=m,m.L=g}return this.i}find(e){let s=this.p;for(;s!==this.h;){if(s.l===e)return new n(s,this.h,this);s=s.B}return this.end()}reverse(){if(this.i<=1)return;let e=this.p,s=this._,i=0;for(;i<<1<this.i;){let g=e.l;e.l=s.l,s.l=g,e=e.B,s=s.L,i+=1}}unique(){if(this.i<=1)return this.i;let e=this.p;for(;e!==this.h;){let s=e;for(;s.B!==this.h&&s.l===s.B.l;)s=s.B,this.i-=1;e.B=s.B,e.B.L=e,e=e.B}return this.i}sort(e){if(this.i<=1)return;let s=[];this.forEach(function(g){s.push(g)}),s.sort(e);let i=this.p;s.forEach(function(g){i.l=g,i=i.B})}merge(e){let s=this;if(this.i===0)e.forEach(function(i){s.pushBack(i)});else{let i=this.p;e.forEach(function(g){for(;i!==s.h&&i.l<=g;)i=i.B;s.G(g,i.L)})}return this.i}forEach(e){let s=this.p,i=0;for(;s!==this.h;)e(s.l,i++,this),s=s.B}[Symbol.iterator](){return(function*(){if(this.i===0)return;let e=this.p;for(;e!==this.h;)yield e.l,e=e.B}).bind(this)()}},r=t;d.default=r}),pc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=a(pi()),o=bo();function a(r){return r&&r.t?r:{default:r}}var p=class wo extends o.RandomIterator{constructor(e,s,i){super(e,i),this.container=s}copy(){return new wo(this.o,this.container,this.iteratorType)}},n=class extends h.default{constructor(r=[],e=4096){super(),this.j=0,this.D=0,this.R=0,this.N=0,this.P=0,this.A=[];let s=(()=>{if(typeof r.length=="number")return r.length;if(typeof r.size=="number")return r.size;if(typeof r.size=="function")return r.size();throw new TypeError("Cannot get the length or size of the container")})();this.F=e,this.P=Math.max(Math.ceil(s/this.F),1);for(let m=0;m<this.P;++m)this.A.push(new Array(this.F));let i=Math.ceil(s/this.F);this.j=this.R=(this.P>>1)-(i>>1),this.D=this.N=this.F-s%this.F>>1;let g=this;r.forEach(function(m){g.pushBack(m)})}T(){let r=[],e=Math.max(this.P>>1,1);for(let s=0;s<e;++s)r[s]=new Array(this.F);for(let s=this.j;s<this.P;++s)r[r.length]=this.A[s];for(let s=0;s<this.R;++s)r[r.length]=this.A[s];r[r.length]=[...this.A[this.R]],this.j=e,this.R=r.length-1;for(let s=0;s<e;++s)r[r.length]=new Array(this.F);this.A=r,this.P=r.length}O(r){let e=this.D+r+1,s=e%this.F,i=s-1,g=this.j+(e-s)/this.F;return s===0&&(g-=1),g%=this.P,i<0&&(i+=this.F),{curNodeBucketIndex:g,curNodePointerIndex:i}}clear(){this.A=[new Array(this.F)],this.P=1,this.j=this.R=this.i=0,this.D=this.N=this.F>>1}begin(){return new p(0,this)}end(){return new p(this.i,this)}rBegin(){return new p(this.i-1,this,1)}rEnd(){return new p(-1,this,1)}front(){if(this.i!==0)return this.A[this.j][this.D]}back(){if(this.i!==0)return this.A[this.R][this.N]}pushBack(r){return this.i&&(this.N<this.F-1?this.N+=1:this.R<this.P-1?(this.R+=1,this.N=0):(this.R=0,this.N=0),this.R===this.j&&this.N===this.D&&this.T()),this.i+=1,this.A[this.R][this.N]=r,this.i}popBack(){if(this.i===0)return;let r=this.A[this.R][this.N];return this.i!==1&&(this.N>0?this.N-=1:this.R>0?(this.R-=1,this.N=this.F-1):(this.R=this.P-1,this.N=this.F-1)),this.i-=1,r}pushFront(r){return this.i&&(this.D>0?this.D-=1:this.j>0?(this.j-=1,this.D=this.F-1):(this.j=this.P-1,this.D=this.F-1),this.j===this.R&&this.D===this.N&&this.T()),this.i+=1,this.A[this.j][this.D]=r,this.i}popFront(){if(this.i===0)return;let r=this.A[this.j][this.D];return this.i!==1&&(this.D<this.F-1?this.D+=1:this.j<this.P-1?(this.j+=1,this.D=0):(this.j=0,this.D=0)),this.i-=1,r}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:e,curNodePointerIndex:s}=this.O(r);return this.A[e][s]}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:s,curNodePointerIndex:i}=this.O(r);this.A[s][i]=e}insert(r,e,s=1){if(r<0||r>this.i)throw new RangeError;if(r===0)for(;s--;)this.pushFront(e);else if(r===this.i)for(;s--;)this.pushBack(e);else{let i=[];for(let g=r;g<this.i;++g)i.push(this.getElementByPos(g));this.cut(r-1);for(let g=0;g<s;++g)this.pushBack(e);for(let g=0;g<i.length;++g)this.pushBack(i[g])}return this.i}cut(r){if(r<0)return this.clear(),0;let{curNodeBucketIndex:e,curNodePointerIndex:s}=this.O(r);return this.R=e,this.N=s,this.i=r+1,this.i}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;if(r===0)this.popFront();else if(r===this.i-1)this.popBack();else{let e=[];for(let i=r+1;i<this.i;++i)e.push(this.getElementByPos(i));this.cut(r),this.popBack();let s=this;e.forEach(function(i){s.pushBack(i)})}return this.i}eraseElementByValue(r){if(this.i===0)return 0;let e=[];for(let i=0;i<this.i;++i){let g=this.getElementByPos(i);g!==r&&e.push(g)}let s=e.length;for(let i=0;i<s;++i)this.setElementByPos(i,e[i]);return this.cut(s-1)}eraseElementByIterator(r){let e=r.o;return this.eraseElementByPos(e),r=r.next(),r}find(r){for(let e=0;e<this.i;++e)if(this.getElementByPos(e)===r)return new p(e,this);return this.end()}reverse(){let r=0,e=this.i-1;for(;r<e;){let s=this.getElementByPos(r);this.setElementByPos(r,this.getElementByPos(e)),this.setElementByPos(e,s),r+=1,e-=1}}unique(){if(this.i<=1)return this.i;let r=1,e=this.getElementByPos(0);for(let s=1;s<this.i;++s){let i=this.getElementByPos(s);i!==e&&(e=i,this.setElementByPos(r++,i))}for(;this.i>r;)this.popBack();return this.i}sort(r){let e=[];for(let s=0;s<this.i;++s)e.push(this.getElementByPos(s));e.sort(r);for(let s=0;s<this.i;++s)this.setElementByPos(s,e[s])}shrinkToFit(){if(this.i===0)return;let r=[];this.forEach(function(e){r.push(e)}),this.P=Math.max(Math.ceil(this.i/this.F),1),this.i=this.j=this.R=this.D=this.N=0,this.A=[];for(let e=0;e<this.P;++e)this.A.push(new Array(this.F));for(let e=0;e<r.length;++e)this.pushBack(r[e])}forEach(r){for(let e=0;e<this.i;++e)r(this.getElementByPos(e),e,this)}[Symbol.iterator](){return(function*(){for(let r=0;r<this.i;++r)yield this.getElementByPos(r)}).bind(this)()}},t=n;d.default=t}),hc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.TreeNodeEnableIndex=d.TreeNode=void 0;var h=class{constructor(a,p){this.ee=1,this.u=void 0,this.l=void 0,this.U=void 0,this.W=void 0,this.tt=void 0,this.u=a,this.l=p}L(){let a=this;if(a.ee===1&&a.tt.tt===a)a=a.W;else if(a.U)for(a=a.U;a.W;)a=a.W;else{let p=a.tt;for(;p.U===a;)a=p,p=a.tt;a=p}return a}B(){let a=this;if(a.W){for(a=a.W;a.U;)a=a.U;return a}else{let p=a.tt;for(;p.W===a;)a=p,p=a.tt;return a.W!==p?p:a}}te(){let a=this.tt,p=this.W,n=p.U;return a.tt===this?a.tt=p:a.U===this?a.U=p:a.W=p,p.tt=a,p.U=this,this.tt=p,this.W=n,n&&(n.tt=this),p}se(){let a=this.tt,p=this.U,n=p.W;return a.tt===this?a.tt=p:a.U===this?a.U=p:a.W=p,p.tt=a,p.W=this,this.tt=p,this.U=n,n&&(n.tt=this),p}};d.TreeNode=h;var o=class extends h{constructor(){super(...arguments),this.rt=1}te(){let a=super.te();return this.ie(),a.ie(),a}se(){let a=super.se();return this.ie(),a.ie(),a}ie(){this.rt=1,this.U&&(this.rt+=this.U.rt),this.W&&(this.rt+=this.W.rt)}};d.TreeNodeEnableIndex=o}),_o=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=hc(),o=kt(),a=xt(),p=class extends o.Container{constructor(t=function(e,s){return e<s?-1:e>s?1:0},r=!1){super(),this.Y=void 0,this.v=t,r?(this.re=h.TreeNodeEnableIndex,this.M=function(e,s,i){let g=this.ne(e,s,i);if(g){let m=g.tt;for(;m!==this.h;)m.rt+=1,m=m.tt;let l=this.he(g);if(l){let{parentNode:u,grandParent:f,curNode:y}=l;u.ie(),f.ie(),y.ie()}}return this.i},this.V=function(e){let s=this.fe(e);for(;s!==this.h;)s.rt-=1,s=s.tt}):(this.re=h.TreeNode,this.M=function(e,s,i){let g=this.ne(e,s,i);return g&&this.he(g),this.i},this.V=this.fe),this.h=new this.re}X(t,r){let e=this.h;for(;t;){let s=this.v(t.u,r);if(s<0)t=t.W;else if(s>0)e=t,t=t.U;else return t}return e}Z(t,r){let e=this.h;for(;t;)this.v(t.u,r)<=0?t=t.W:(e=t,t=t.U);return e}$(t,r){let e=this.h;for(;t;){let s=this.v(t.u,r);if(s<0)e=t,t=t.W;else if(s>0)t=t.U;else return t}return e}rr(t,r){let e=this.h;for(;t;)this.v(t.u,r)<0?(e=t,t=t.W):t=t.U;return e}ue(t){for(;;){let r=t.tt;if(r===this.h)return;if(t.ee===1){t.ee=0;return}if(t===r.U){let e=r.W;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.te():r.te();else if(e.W&&e.W.ee===1){e.ee=r.ee,r.ee=0,e.W.ee=0,r===this.Y?this.Y=r.te():r.te();return}else e.U&&e.U.ee===1?(e.ee=1,e.U.ee=0,e.se()):(e.ee=1,t=r)}else{let e=r.U;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.se():r.se();else if(e.U&&e.U.ee===1){e.ee=r.ee,r.ee=0,e.U.ee=0,r===this.Y?this.Y=r.se():r.se();return}else e.W&&e.W.ee===1?(e.ee=1,e.W.ee=0,e.te()):(e.ee=1,t=r)}}}fe(t){if(this.i===1)return this.clear(),this.h;let r=t;for(;r.U||r.W;){if(r.W)for(r=r.W;r.U;)r=r.U;else r=r.U;[t.u,r.u]=[r.u,t.u],[t.l,r.l]=[r.l,t.l],t=r}this.h.U===r?this.h.U=r.tt:this.h.W===r&&(this.h.W=r.tt),this.ue(r);let e=r.tt;return r===e.U?e.U=void 0:e.W=void 0,this.i-=1,this.Y.ee=0,e}oe(t,r){return t===void 0?!1:this.oe(t.U,r)||r(t)?!0:this.oe(t.W,r)}he(t){for(;;){let r=t.tt;if(r.ee===0)return;let e=r.tt;if(r===e.U){let s=e.W;if(s&&s.ee===1){if(s.ee=r.ee=0,e===this.Y)return;e.ee=1,t=e;continue}else if(t===r.W){if(t.ee=0,t.U&&(t.U.tt=r),t.W&&(t.W.tt=e),r.W=t.U,e.U=t.W,t.U=r,t.W=e,e===this.Y)this.Y=t,this.h.tt=t;else{let i=e.tt;i.U===e?i.U=t:i.W=t}return t.tt=e.tt,r.tt=t,e.tt=t,e.ee=1,{parentNode:r,grandParent:e,curNode:t}}else r.ee=0,e===this.Y?this.Y=e.se():e.se(),e.ee=1}else{let s=e.U;if(s&&s.ee===1){if(s.ee=r.ee=0,e===this.Y)return;e.ee=1,t=e;continue}else if(t===r.U){if(t.ee=0,t.U&&(t.U.tt=e),t.W&&(t.W.tt=r),e.W=t.U,r.U=t.W,t.U=e,t.W=r,e===this.Y)this.Y=t,this.h.tt=t;else{let i=e.tt;i.U===e?i.U=t:i.W=t}return t.tt=e.tt,r.tt=t,e.tt=t,e.ee=1,{parentNode:r,grandParent:e,curNode:t}}else r.ee=0,e===this.Y?this.Y=e.te():e.te(),e.ee=1}return}}ne(t,r,e){if(this.Y===void 0){this.i+=1,this.Y=new this.re(t,r),this.Y.ee=0,this.Y.tt=this.h,this.h.tt=this.Y,this.h.U=this.Y,this.h.W=this.Y;return}let s,i=this.h.U,g=this.v(i.u,t);if(g===0){i.l=r;return}else if(g>0)i.U=new this.re(t,r),i.U.tt=i,s=i.U,this.h.U=s;else{let m=this.h.W,l=this.v(m.u,t);if(l===0){m.l=r;return}else if(l<0)m.W=new this.re(t,r),m.W.tt=m,s=m.W,this.h.W=s;else{if(e!==void 0){let u=e.o;if(u!==this.h){let f=this.v(u.u,t);if(f===0){u.l=r;return}else if(f>0){let y=u.L(),k=this.v(y.u,t);if(k===0){y.l=r;return}else k<0&&(s=new this.re(t,r),y.W===void 0?(y.W=s,s.tt=y):(u.U=s,s.tt=u))}}}if(s===void 0)for(s=this.Y;;){let u=this.v(s.u,t);if(u>0){if(s.U===void 0){s.U=new this.re(t,r),s.U.tt=s,s=s.U;break}s=s.U}else if(u<0){if(s.W===void 0){s.W=new this.re(t,r),s.W.tt=s,s=s.W;break}s=s.W}else{s.l=r;return}}}}return this.i+=1,s}I(t,r){for(;t;){let e=this.v(t.u,r);if(e<0)t=t.W;else if(e>0)t=t.U;else return t}return t||this.h}clear(){this.i=0,this.Y=void 0,this.h.tt=void 0,this.h.U=this.h.W=void 0}updateKeyByIterator(t,r){let e=t.o;if(e===this.h&&(0,a.throwIteratorAccessError)(),this.i===1)return e.u=r,!0;if(e===this.h.U)return this.v(e.B().u,r)>0?(e.u=r,!0):!1;if(e===this.h.W)return this.v(e.L().u,r)<0?(e.u=r,!0):!1;let s=e.L().u;if(this.v(s,r)>=0)return!1;let i=e.B().u;return this.v(i,r)<=0?!1:(e.u=r,!0)}eraseElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r=0,e=this;return this.oe(this.Y,function(s){return t===r?(e.V(s),!0):(r+=1,!1)}),this.i}eraseElementByKey(t){if(this.i===0)return!1;let r=this.I(this.Y,t);return r===this.h?!1:(this.V(r),!0)}eraseElementByIterator(t){let r=t.o;r===this.h&&(0,a.throwIteratorAccessError)();let e=r.W===void 0;return t.iteratorType===0?e&&t.next():(!e||r.U===void 0)&&t.next(),this.V(r),t}forEach(t){let r=0;for(let e of this)t(e,r++,this)}getElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r,e=0;for(let s of this){if(e===t){r=s;break}e+=1}return r}getHeight(){if(this.i===0)return 0;let t=function(r){return r?Math.max(t(r.U),t(r.W))+1:0};return t(this.Y)}},n=p;d.default=n}),ko=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=xt(),a=class extends h.ContainerIterator{constructor(n,t,r){super(r),this.o=n,this.h=t,this.iteratorType===0?(this.pre=function(){return this.o===this.h.U&&(0,o.throwIteratorAccessError)(),this.o=this.o.L(),this},this.next=function(){return this.o===this.h&&(0,o.throwIteratorAccessError)(),this.o=this.o.B(),this}):(this.pre=function(){return this.o===this.h.W&&(0,o.throwIteratorAccessError)(),this.o=this.o.B(),this},this.next=function(){return this.o===this.h&&(0,o.throwIteratorAccessError)(),this.o=this.o.L(),this})}get index(){let n=this.o,t=this.h.tt;if(n===this.h)return t?t.rt-1:0;let r=0;for(n.U&&(r+=n.U.rt);n!==t;){let e=n.tt;n===e.W&&(r+=1,e.U&&(r+=e.U.rt)),n=e}return r}},p=a;d.default=p}),fc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=p(_o()),o=p(ko()),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class xo extends o.default{constructor(s,i,g,m){super(s,i,m),this.container=g}get pointer(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.u}copy(){return new xo(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.default{constructor(e=[],s,i){super(s,i);let g=this;e.forEach(function(m){g.insert(m)})}*K(e){e!==void 0&&(yield*this.K(e.U),yield e.u,yield*this.K(e.W))}begin(){return new n(this.h.U||this.h,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this.h.W||this.h,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){return this.h.U?this.h.U.u:void 0}back(){return this.h.W?this.h.W.u:void 0}insert(e,s){return this.M(e,void 0,s)}find(e){let s=this.I(this.Y,e);return new n(s,this.h,this)}lowerBound(e){let s=this.X(this.Y,e);return new n(s,this.h,this)}upperBound(e){let s=this.Z(this.Y,e);return new n(s,this.h,this)}reverseLowerBound(e){let s=this.$(this.Y,e);return new n(s,this.h,this)}reverseUpperBound(e){let s=this.rr(this.Y,e);return new n(s,this.h,this)}union(e){let s=this;return e.forEach(function(i){s.insert(i)}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=t;d.default=r}),mc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=p(_o()),o=p(ko()),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class So extends o.default{constructor(s,i,g,m){super(s,i,m),this.container=g}get pointer(){this.o===this.h&&(0,a.throwIteratorAccessError)();let s=this;return new Proxy([],{get(i,g){if(g==="0")return s.o.u;if(g==="1")return s.o.l},set(i,g,m){if(g!=="1")throw new TypeError("props must be 1");return s.o.l=m,!0}})}copy(){return new So(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.default{constructor(e=[],s,i){super(s,i);let g=this;e.forEach(function(m){g.setElement(m[0],m[1])})}*K(e){e!==void 0&&(yield*this.K(e.U),yield[e.u,e.l],yield*this.K(e.W))}begin(){return new n(this.h.U||this.h,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this.h.W||this.h,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){if(this.i===0)return;let e=this.h.U;return[e.u,e.l]}back(){if(this.i===0)return;let e=this.h.W;return[e.u,e.l]}lowerBound(e){let s=this.X(this.Y,e);return new n(s,this.h,this)}upperBound(e){let s=this.Z(this.Y,e);return new n(s,this.h,this)}reverseLowerBound(e){let s=this.$(this.Y,e);return new n(s,this.h,this)}reverseUpperBound(e){let s=this.rr(this.Y,e);return new n(s,this.h,this)}setElement(e,s,i){return this.M(e,s,i)}find(e){let s=this.I(this.Y,e);return new n(s,this.h,this)}getElementByKey(e){return this.I(this.Y,e).l}union(e){let s=this;return e.forEach(function(i){s.setElement(i[0],i[1])}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=t;d.default=r}),Ao=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=h;function h(o){let a=typeof o;return a==="object"&&o!==null||a==="function"}}),Eo=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.HashContainerIterator=d.HashContainer=void 0;var h=kt(),o=p(Ao()),a=xt();function p(r){return r&&r.t?r:{default:r}}var n=class extends h.ContainerIterator{constructor(r,e,s){super(s),this.o=r,this.h=e,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this})}};d.HashContainerIterator=n;var t=class extends h.Container{constructor(){super(),this.H=[],this.g={},this.HASH_TAG=Symbol("@@HASH_TAG"),Object.setPrototypeOf(this.g,null),this.h={},this.h.L=this.h.B=this.p=this._=this.h}V(r){let{L:e,B:s}=r;e.B=s,s.L=e,r===this.p&&(this.p=s),r===this._&&(this._=e),this.i-=1}M(r,e,s){s===void 0&&(s=(0,o.default)(r));let i;if(s){let g=r[this.HASH_TAG];if(g!==void 0)return this.H[g].l=e,this.i;Object.defineProperty(r,this.HASH_TAG,{value:this.H.length,configurable:!0}),i={u:r,l:e,L:this._,B:this.h},this.H.push(i)}else{let g=this.g[r];if(g)return g.l=e,this.i;i={u:r,l:e,L:this._,B:this.h},this.g[r]=i}return this.i===0?(this.p=i,this.h.B=i):this._.B=i,this._=i,this.h.L=i,++this.i}I(r,e){if(e===void 0&&(e=(0,o.default)(r)),e){let s=r[this.HASH_TAG];return s===void 0?this.h:this.H[s]}else return this.g[r]||this.h}clear(){let r=this.HASH_TAG;this.H.forEach(function(e){delete e.u[r]}),this.H=[],this.g={},Object.setPrototypeOf(this.g,null),this.i=0,this.p=this._=this.h.L=this.h.B=this.h}eraseElementByKey(r,e){let s;if(e===void 0&&(e=(0,o.default)(r)),e){let i=r[this.HASH_TAG];if(i===void 0)return!1;delete r[this.HASH_TAG],s=this.H[i],delete this.H[i]}else{if(s=this.g[r],s===void 0)return!1;delete this.g[r]}return this.V(s),!0}eraseElementByIterator(r){let e=r.o;return e===this.h&&(0,a.throwIteratorAccessError)(),this.V(e),r.next()}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let e=this.p;for(;r--;)e=e.B;return this.V(e),this.i}};d.HashContainer=t}),gc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=Eo(),o=xt(),a=class To extends h.HashContainerIterator{constructor(r,e,s,i){super(r,e,i),this.container=s}get pointer(){return this.o===this.h&&(0,o.throwIteratorAccessError)(),this.o.u}copy(){return new To(this.o,this.h,this.container,this.iteratorType)}},p=class extends h.HashContainer{constructor(t=[]){super();let r=this;t.forEach(function(e){r.insert(e)})}begin(){return new a(this.p,this.h,this)}end(){return new a(this.h,this.h,this)}rBegin(){return new a(this._,this.h,this,1)}rEnd(){return new a(this.h,this.h,this,1)}front(){return this.p.u}back(){return this._.u}insert(t,r){return this.M(t,void 0,r)}getElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r=this.p;for(;t--;)r=r.B;return r.u}find(t,r){let e=this.I(t,r);return new a(e,this.h,this)}forEach(t){let r=0,e=this.p;for(;e!==this.h;)t(e.u,r++,this),e=e.B}[Symbol.iterator](){return(function*(){let t=this.p;for(;t!==this.h;)yield t.u,t=t.B}).bind(this)()}},n=p;d.default=n}),bc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=Eo(),o=p(Ao()),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class Io extends h.HashContainerIterator{constructor(s,i,g,m){super(s,i,m),this.container=g}get pointer(){this.o===this.h&&(0,a.throwIteratorAccessError)();let s=this;return new Proxy([],{get(i,g){if(g==="0")return s.o.u;if(g==="1")return s.o.l},set(i,g,m){if(g!=="1")throw new TypeError("props must be 1");return s.o.l=m,!0}})}copy(){return new Io(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.HashContainer{constructor(e=[]){super();let s=this;e.forEach(function(i){s.setElement(i[0],i[1])})}begin(){return new n(this.p,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this._,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){if(this.i!==0)return[this.p.u,this.p.l]}back(){if(this.i!==0)return[this._.u,this._.l]}setElement(e,s,i){return this.M(e,s,i)}getElementByKey(e,s){if(s===void 0&&(s=(0,o.default)(e)),s){let g=e[this.HASH_TAG];return g!==void 0?this.H[g].l:void 0}let i=this.g[e];return i?i.l:void 0}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return[s.u,s.l]}find(e,s){let i=this.I(e,s);return new n(i,this.h,this)}forEach(e){let s=0,i=this.p;for(;i!==this.h;)e([i.u,i.l],s++,this),i=i.B}[Symbol.iterator](){return(function*(){let e=this.p;for(;e!==this.h;)yield[e.u,e.l],e=e.B}).bind(this)()}},r=t;d.default=r}),yc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"t",{value:!0}),Object.defineProperty(d,"Deque",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(d,"HashMap",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(d,"HashSet",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(d,"LinkList",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(d,"OrderedMap",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(d,"OrderedSet",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(d,"PriorityQueue",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(d,"Queue",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(d,"Stack",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(d,"Vector",{enumerable:!0,get:function(){return p.default}});var h=g(oc()),o=g(lc()),a=g(cc()),p=g(dc()),n=g(uc()),t=g(pc()),r=g(fc()),e=g(mc()),s=g(gc()),i=g(bc());function g(m){return m&&m.t?m:{default:m}}}),vc=be((d,h)=>{de(),pe(),ue();var o=yc().OrderedSet,a=wt()("number-allocator:trace"),p=wt()("number-allocator:error");function n(r,e){this.low=r,this.high=e}n.prototype.equals=function(r){return this.low===r.low&&this.high===r.high},n.prototype.compare=function(r){return this.low<r.low&&this.high<r.low?-1:r.low<this.low&&r.high<this.low?1:0};function t(r,e){if(!(this instanceof t))return new t(r,e);this.min=r,this.max=e,this.ss=new o([],(s,i)=>s.compare(i)),a("Create"),this.clear()}t.prototype.firstVacant=function(){return this.ss.size()===0?null:this.ss.front().low},t.prototype.alloc=function(){if(this.ss.size()===0)return a("alloc():empty"),null;let r=this.ss.begin(),e=r.pointer.low,s=r.pointer.high,i=e;return i+1<=s?this.ss.updateKeyByIterator(r,new n(e+1,s)):this.ss.eraseElementByPos(0),a("alloc():"+i),i},t.prototype.use=function(r){let e=new n(r,r),s=this.ss.lowerBound(e);if(!s.equals(this.ss.end())){let i=s.pointer.low,g=s.pointer.high;return s.pointer.equals(e)?(this.ss.eraseElementByIterator(s),a("use():"+r),!0):i>r?!1:i===r?(this.ss.updateKeyByIterator(s,new n(i+1,g)),a("use():"+r),!0):g===r?(this.ss.updateKeyByIterator(s,new n(i,g-1)),a("use():"+r),!0):(this.ss.updateKeyByIterator(s,new n(r+1,g)),this.ss.insert(new n(i,r-1)),a("use():"+r),!0)}return a("use():failed"),!1},t.prototype.free=function(r){if(r<this.min||r>this.max){p("free():"+r+" is out of range");return}let e=new n(r,r),s=this.ss.upperBound(e);if(s.equals(this.ss.end())){if(s.equals(this.ss.begin())){this.ss.insert(e);return}s.pre();let i=s.pointer.high;s.pointer.high+1===r?this.ss.updateKeyByIterator(s,new n(i,r)):this.ss.insert(e)}else if(s.equals(this.ss.begin()))if(r+1===s.pointer.low){let i=s.pointer.high;this.ss.updateKeyByIterator(s,new n(r,i))}else this.ss.insert(e);else{let i=s.pointer.low,g=s.pointer.high;s.pre();let m=s.pointer.low;s.pointer.high+1===r?r+1===i?(this.ss.eraseElementByIterator(s),this.ss.updateKeyByIterator(s,new n(m,g))):this.ss.updateKeyByIterator(s,new n(m,r)):r+1===i?(this.ss.eraseElementByIterator(s.next()),this.ss.insert(new n(r,g))):this.ss.insert(e)}a("free():"+r)},t.prototype.clear=function(){a("clear()"),this.ss.clear(),this.ss.insert(new n(this.min,this.max))},t.prototype.intervalCount=function(){return this.ss.size()},t.prototype.dump=function(){console.log("length:"+this.ss.size());for(let r of this.ss)console.log(r)},h.exports=t}),Mo=be((d,h)=>{de(),pe(),ue();var o=vc();h.exports.NumberAllocator=o}),wc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=ac(),o=Mo(),a=class{aliasToTopic;topicToAlias;max;numberAllocator;length;constructor(p){p>0&&(this.aliasToTopic=new h.LRUCache({max:p}),this.topicToAlias={},this.numberAllocator=new o.NumberAllocator(1,p),this.max=p,this.length=0)}put(p,n){if(n===0||n>this.max)return!1;let t=this.aliasToTopic.get(n);return t&&delete this.topicToAlias[t],this.aliasToTopic.set(n,p),this.topicToAlias[p]=n,this.numberAllocator.use(n),this.length=this.aliasToTopic.size,!0}getTopicByAlias(p){return this.aliasToTopic.get(p)}getAliasByTopic(p){let n=this.topicToAlias[p];return typeof n<"u"&&this.aliasToTopic.get(n),n}clear(){this.aliasToTopic.clear(),this.topicToAlias={},this.numberAllocator.clear(),this.length=0}getLruAlias(){return this.numberAllocator.firstVacant()||[...this.aliasToTopic.keys()][this.aliasToTopic.size-1]}};d.default=a}),_c=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(d,"__esModule",{value:!0});var o=Jn(),a=h(wc()),p=Jt(),n=(t,r)=>{t.log("_handleConnack");let{options:e}=t,s=e.protocolVersion===5?r.reasonCode:r.returnCode;if(clearTimeout(t.connackTimer),delete t.topicAliasSend,r.properties){if(r.properties.topicAliasMaximum){if(r.properties.topicAliasMaximum>65535){t.emit("error",new Error("topicAliasMaximum from broker is out of range"));return}r.properties.topicAliasMaximum>0&&(t.topicAliasSend=new a.default(r.properties.topicAliasMaximum))}r.properties.serverKeepAlive&&e.keepalive&&(e.keepalive=r.properties.serverKeepAlive),r.properties.maximumPacketSize&&(e.properties||(e.properties={}),e.properties.maximumPacketSize=r.properties.maximumPacketSize)}if(s===0)t.reconnecting=!1,t._onConnect(r);else if(s>0){let i=new p.ErrorWithReasonCode(`Connection refused: ${o.ReasonCodes[s]}`,s);t.emit("error",i),t.options.reconnectOnConnackError&&t._cleanUp(!0)}};d.default=n}),kc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=(o,a,p)=>{o.log("handling pubrel packet");let n=typeof p<"u"?p:o.noop,{messageId:t}=a,r={cmd:"pubcomp",messageId:t};o.incomingStore.get(a,(e,s)=>{e?o._sendPacket(r,n):(o.emit("message",s.topic,s.payload,s),o.handleMessage(s,i=>{if(i)return n(i);o.incomingStore.del(s,o.noop),o._sendPacket(r,n)}))})};d.default=h}),xc=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(d,"__esModule",{value:!0});var o=h(rc()),a=h(ic()),p=h(_c()),n=h(Jn()),t=h(kc()),r=(e,s,i)=>{let{options:g}=e;if(g.protocolVersion===5&&g.properties&&g.properties.maximumPacketSize&&g.properties.maximumPacketSize<s.length)return e.emit("error",new Error(`exceeding packets size ${s.cmd}`)),e.end({reasonCode:149,properties:{reasonString:"Maximum packet size was exceeded"}}),e;switch(e.log("_handlePacket :: emitting packetreceive"),e.emit("packetreceive",s),s.cmd){case"publish":(0,o.default)(e,s,i);break;case"puback":case"pubrec":case"pubcomp":case"suback":case"unsuback":e.reschedulePing(),(0,n.default)(e,s),i();break;case"pubrel":e.reschedulePing(),(0,t.default)(e,s,i);break;case"connack":(0,p.default)(e,s),i();break;case"auth":e.reschedulePing(),(0,a.default)(e,s),i();break;case"pingresp":e.log("_handlePacket :: received pingresp"),e.reschedulePing(!0),i();break;case"disconnect":e.emit("disconnect",s),i();break;default:e.log("_handlePacket :: unknown command"),i();break}};d.default=r}),Co=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=class{nextId;constructor(){this.nextId=Math.max(1,Math.floor(Math.random()*65535))}allocate(){let o=this.nextId++;return this.nextId===65536&&(this.nextId=1),o}getLastAllocated(){return this.nextId===1?65535:this.nextId-1}register(o){return!0}deallocate(o){}clear(){}};d.default=h}),Sc=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=class{aliasToTopic;max;length;constructor(o){this.aliasToTopic={},this.max=o}put(o,a){return a===0||a>this.max?!1:(this.aliasToTopic[a]=o,this.length=Object.keys(this.aliasToTopic).length,!0)}getTopicByAlias(o){return this.aliasToTopic[o]}clear(){this.aliasToTopic={}}};d.default=h}),Ac=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(d,"__esModule",{value:!0}),d.TypedEventEmitter=void 0;var o=h((qt(),Re(Mt))),a=Jt(),p=class{};d.TypedEventEmitter=p,(0,a.applyMixin)(p,o.default)}),Xn=be((d,h)=>{de(),pe(),ue();function o(a){"@babel/helpers - typeof";return h.exports=o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},h.exports.__esModule=!0,h.exports.default=h.exports,o(a)}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Ec=be((d,h)=>{de(),pe(),ue();var o=Xn().default;function a(p,n){if(o(p)!="object"||!p)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,n||"default");if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(p)}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Tc=be((d,h)=>{de(),pe(),ue();var o=Xn().default,a=Ec();function p(n){var t=a(n,"string");return o(t)=="symbol"?t:t+""}h.exports=p,h.exports.__esModule=!0,h.exports.default=h.exports}),Ic=be((d,h)=>{de(),pe(),ue();var o=Tc();function a(p,n,t){return(n=o(n))in p?Object.defineProperty(p,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):p[n]=t,p}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Mc=be((d,h)=>{de(),pe(),ue();function o(a){if(Array.isArray(a))return a}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Cc=be((d,h)=>{de(),pe(),ue();function o(a,p){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var t,r,e,s,i=[],g=!0,m=!1;try{if(e=(n=n.call(a)).next,p===0){if(Object(n)!==n)return;g=!1}else for(;!(g=(t=e.call(n)).done)&&(i.push(t.value),i.length!==p);g=!0);}catch(l){m=!0,r=l}finally{try{if(!g&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(m)throw r}}return i}}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Pc=be((d,h)=>{de(),pe(),ue();function o(a,p){(p==null||p>a.length)&&(p=a.length);for(var n=0,t=Array(p);n<p;n++)t[n]=a[n];return t}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Oc=be((d,h)=>{de(),pe(),ue();var o=Pc();function a(p,n){if(p){if(typeof p=="string")return o(p,n);var t={}.toString.call(p).slice(8,-1);return t==="Object"&&p.constructor&&(t=p.constructor.name),t==="Map"||t==="Set"?Array.from(p):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(p,n):void 0}}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Nc=be((d,h)=>{de(),pe(),ue();function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Rc=be((d,h)=>{de(),pe(),ue();var o=Mc(),a=Cc(),p=Oc(),n=Nc();function t(r,e){return o(r)||a(r,e)||p(r,e)||n()}h.exports=t,h.exports.__esModule=!0,h.exports.default=h.exports}),Po=be((d,h)=>{de(),pe(),ue(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d):typeof define=="function"&&define.amd?define(["exports"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.fastUniqueNumbers={}))})(d,function(o){var a=function(l){return function(u){var f=l(u);return u.add(f),f}},p=function(l){return function(u,f){return l.set(u,f),f}},n=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,t=536870912,r=t*2,e=function(l,u){return function(f){var y=u.get(f),k=y===void 0?f.size:y<r?y+1:0;if(!f.has(k))return l(f,k);if(f.size<t){for(;f.has(k);)k=Math.floor(Math.random()*r);return l(f,k)}if(f.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;f.has(k);)k=Math.floor(Math.random()*n);return l(f,k)}},s=new WeakMap,i=p(s),g=e(i,s),m=a(g);o.addUniqueNumber=m,o.generateUniqueNumber=g})}),Uc=be((d,h)=>{de(),pe(),ue();function o(p,n,t,r,e,s,i){try{var g=p[s](i),m=g.value}catch(l){return void t(l)}g.done?n(m):Promise.resolve(m).then(r,e)}function a(p){return function(){var n=this,t=arguments;return new Promise(function(r,e){var s=p.apply(n,t);function i(m){o(s,r,e,i,g,"next",m)}function g(m){o(s,r,e,i,g,"throw",m)}i(void 0)})}}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Oo=be((d,h)=>{de(),pe(),ue();function o(a,p){this.v=a,this.k=p}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),No=be((d,h)=>{de(),pe(),ue();function o(a,p,n,t){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}h.exports=o=function(e,s,i,g){function m(l,u){o(e,l,function(f){return this._invoke(l,u,f)})}s?r?r(e,s,{value:i,enumerable:!g,configurable:!g,writable:!g}):e[s]=i:(m("next",0),m("throw",1),m("return",2))},h.exports.__esModule=!0,h.exports.default=h.exports,o(a,p,n,t)}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Ro=be((d,h)=>{de(),pe(),ue();var o=No();function a(){var p,n,t=typeof Symbol=="function"?Symbol:{},r=t.iterator||"@@iterator",e=t.toStringTag||"@@toStringTag";function s(k,b,_,A){var v=b&&b.prototype instanceof g?b:g,S=Object.create(v.prototype);return o(S,"_invoke",(function(x,T,C){var P,B,I,z=0,j=C||[],F=!1,le={p:0,n:0,v:p,a:Z,f:Z.bind(p,4),d:function(Y,ie){return P=Y,B=0,I=p,le.n=ie,i}};function Z(Y,ie){for(B=Y,I=ie,n=0;!F&&z&&!W&&n<j.length;n++){var W,ne=j[n],O=le.p,ee=ne[2];Y>3?(W=ee===ie)&&(I=ne[(B=ne[4])?5:(B=3,3)],ne[4]=ne[5]=p):ne[0]<=O&&((W=Y<2&&O<ne[1])?(B=0,le.v=ie,le.n=ne[1]):O<ee&&(W=Y<3||ne[0]>ie||ie>ee)&&(ne[4]=Y,ne[5]=ie,le.n=ee,B=0))}if(W||Y>1)return i;throw F=!0,ie}return function(Y,ie,W){if(z>1)throw TypeError("Generator is already running");for(F&&ie===1&&Z(ie,W),B=ie,I=W;(n=B<2?p:I)||!F;){P||(B?B<3?(B>1&&(le.n=-1),Z(B,I)):le.n=I:le.v=I);try{if(z=2,P){if(B||(Y="next"),n=P[Y]){if(!(n=n.call(P,I)))throw TypeError("iterator result is not an object");if(!n.done)return n;I=n.value,B<2&&(B=0)}else B===1&&(n=P.return)&&n.call(P),B<2&&(I=TypeError("The iterator does not provide a '"+Y+"' method"),B=1);P=p}else if((n=(F=le.n<0)?I:x.call(T,le))!==i)break}catch(ne){P=p,B=1,I=ne}finally{z=1}}return{value:n,done:F}}})(k,_,A),!0),S}var i={};function g(){}function m(){}function l(){}n=Object.getPrototypeOf;var u=[][r]?n(n([][r]())):(o(n={},r,function(){return this}),n),f=l.prototype=g.prototype=Object.create(u);function y(k){return Object.setPrototypeOf?Object.setPrototypeOf(k,l):(k.__proto__=l,o(k,e,"GeneratorFunction")),k.prototype=Object.create(f),k}return m.prototype=l,o(f,"constructor",l),o(l,"constructor",m),m.displayName="GeneratorFunction",o(l,e,"GeneratorFunction"),o(f),o(f,e,"Generator"),o(f,r,function(){return this}),o(f,"toString",function(){return"[object Generator]"}),(h.exports=a=function(){return{w:s,m:y}},h.exports.__esModule=!0,h.exports.default=h.exports)()}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Uo=be((d,h)=>{de(),pe(),ue();var o=Oo(),a=No();function p(n,t){function r(s,i,g,m){try{var l=n[s](i),u=l.value;return u instanceof o?t.resolve(u.v).then(function(f){r("next",f,g,m)},function(f){r("throw",f,g,m)}):t.resolve(u).then(function(f){l.value=f,g(l)},function(f){return r("throw",f,g,m)})}catch(f){m(f)}}var e;this.next||(a(p.prototype),a(p.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),a(this,"_invoke",function(s,i,g){function m(){return new t(function(l,u){r(s,g,l,u)})}return e=e?e.then(m,m):m()},!0)}h.exports=p,h.exports.__esModule=!0,h.exports.default=h.exports}),Lo=be((d,h)=>{de(),pe(),ue();var o=Ro(),a=Uo();function p(n,t,r,e,s){return new a(o().w(n,t,r,e),s||Promise)}h.exports=p,h.exports.__esModule=!0,h.exports.default=h.exports}),Lc=be((d,h)=>{de(),pe(),ue();var o=Lo();function a(p,n,t,r,e){var s=o(p,n,t,r,e);return s.next().then(function(i){return i.done?i.value:s.next()})}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),qc=be((d,h)=>{de(),pe(),ue();function o(a){var p=Object(a),n=[];for(var t in p)n.unshift(t);return function r(){for(;n.length;)if((t=n.pop())in p)return r.value=t,r.done=!1,r;return r.done=!0,r}}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),jc=be((d,h)=>{de(),pe(),ue();var o=Xn().default;function a(p){if(p!=null){var n=p[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],t=0;if(n)return n.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length))return{next:function(){return p&&t>=p.length&&(p=void 0),{value:p&&p[t++],done:!p}}}}throw new TypeError(o(p)+" is not iterable")}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Bc=be((d,h)=>{de(),pe(),ue();var o=Oo(),a=Ro(),p=Lc(),n=Lo(),t=Uo(),r=qc(),e=jc();function s(){var i=a(),g=i.m(s),m=(Object.getPrototypeOf?Object.getPrototypeOf(g):g.__proto__).constructor;function l(y){var k=typeof y=="function"&&y.constructor;return!!k&&(k===m||(k.displayName||k.name)==="GeneratorFunction")}var u={throw:1,return:2,break:3,continue:3};function f(y){var k,b;return function(_){k||(k={stop:function(){return b(_.a,2)},catch:function(){return _.v},abrupt:function(A,v){return b(_.a,u[A],v)},delegateYield:function(A,v,S){return k.resultName=v,b(_.d,e(A),S)},finish:function(A){return b(_.f,A)}},b=function(A,v,S){_.p=k.prev,_.n=k.next;try{return A(v,S)}finally{k.next=_.n}}),k.resultName&&(k[k.resultName]=_.v,k.resultName=void 0),k.sent=_.v,k.next=_.n;try{return y.call(this,k)}finally{_.p=k.prev,_.n=k.next}}}return(h.exports=s=function(){return{wrap:function(y,k,b,_){return i.w(f(y),k,b,_&&_.reverse())},isGeneratorFunction:l,mark:i.m,awrap:function(y,k){return new o(y,k)},AsyncIterator:t,async:function(y,k,b,_,A){return(l(k)?n:p)(f(y),k,b,_,A)},keys:r,values:e}},h.exports.__esModule=!0,h.exports.default=h.exports)()}h.exports=s,h.exports.__esModule=!0,h.exports.default=h.exports}),Fc=be((d,h)=>{de(),pe(),ue();var o=Bc()();h.exports=o;try{regeneratorRuntime=o}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}),Dc=be((d,h)=>{de(),pe(),ue(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d,Ic(),Rc(),Po(),Uc(),Fc()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/slicedToArray","fast-unique-numbers","@babel/runtime/helpers/asyncToGenerator","@babel/runtime/regenerator"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.brokerFactory={},o._defineProperty,o._slicedToArray,o.fastUniqueNumbers,o._asyncToGenerator,o._regeneratorRuntime))})(d,function(o,a,p,n,t,r){var e=function(b){return typeof b.start=="function"},s=new WeakMap;function i(b,_){var A=Object.keys(b);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(b);_&&(v=v.filter(function(S){return Object.getOwnPropertyDescriptor(b,S).enumerable})),A.push.apply(A,v)}return A}function g(b){for(var _=1;_<arguments.length;_++){var A=arguments[_]!=null?arguments[_]:{};_%2?i(Object(A),!0).forEach(function(v){a(b,v,A[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(A)):i(Object(A)).forEach(function(v){Object.defineProperty(b,v,Object.getOwnPropertyDescriptor(A,v))})}return b}var m=function(b){return g(g({},b),{},{connect:function(_){var A=_.call;return t(r.mark(function v(){var S,x,T,C;return r.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return S=new MessageChannel,x=S.port1,T=S.port2,P.next=1,A("connect",{port:x},[x]);case 1:return C=P.sent,s.set(T,C),P.abrupt("return",T);case 2:case"end":return P.stop()}},v)}))},disconnect:function(_){var A=_.call;return(function(){var v=t(r.mark(function S(x){var T;return r.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(T=s.get(x),T!==void 0){C.next=1;break}throw new Error("The given port is not connected.");case 1:return C.next=2,A("disconnect",{portId:T});case 2:case"end":return C.stop()}},S)}));return function(S){return v.apply(this,arguments)}})()},isSupported:function(_){var A=_.call;return function(){return A("isSupported")}}})};function l(b,_){var A=Object.keys(b);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(b);_&&(v=v.filter(function(S){return Object.getOwnPropertyDescriptor(b,S).enumerable})),A.push.apply(A,v)}return A}function u(b){for(var _=1;_<arguments.length;_++){var A=arguments[_]!=null?arguments[_]:{};_%2?l(Object(A),!0).forEach(function(v){a(b,v,A[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(A)):l(Object(A)).forEach(function(v){Object.defineProperty(b,v,Object.getOwnPropertyDescriptor(A,v))})}return b}var f=new WeakMap,y=function(b){if(f.has(b))return f.get(b);var _=new Map;return f.set(b,_),_},k=function(b){var _=m(b);return function(A){var v=y(A);A.addEventListener("message",function(j){var F=j.data,le=F.id;if(le!==null&&v.has(le)){var Z=v.get(le),Y=Z.reject,ie=Z.resolve;v.delete(le),F.error===void 0?ie(F.result):Y(new Error(F.error.message))}}),e(A)&&A.start();for(var S=function(j){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,le=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return new Promise(function(Z,Y){var ie=n.generateUniqueNumber(v);v.set(ie,{reject:Y,resolve:Z}),F===null?A.postMessage({id:ie,method:j},le):A.postMessage({id:ie,method:j,params:F},le)})},x=function(j,F){var le=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];A.postMessage({id:null,method:j,params:F},le)},T={},C=0,P=Object.entries(_);C<P.length;C++){var B=p(P[C],2),I=B[0],z=B[1];T=u(u({},T),{},a({},I,z({call:S,notify:x})))}return u({},T)}};o.createBroker=k})}),Wc=be((d,h)=>{de(),pe(),ue(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d,Xn(),Dc(),Po()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/typeof","broker-factory","fast-unique-numbers"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.workerTimersBroker={},o._typeof,o.brokerFactory,o.fastUniqueNumbers))})(d,function(o,a,p,n){var t=new Map([[0,null]]),r=new Map([[0,null]]),e=p.createBroker({clearInterval:function(i){var g=i.call;return function(m){a(t.get(m))==="symbol"&&(t.set(m,null),g("clear",{timerId:m,timerType:"interval"}).then(function(){t.delete(m)}))}},clearTimeout:function(i){var g=i.call;return function(m){a(r.get(m))==="symbol"&&(r.set(m,null),g("clear",{timerId:m,timerType:"timeout"}).then(function(){r.delete(m)}))}},setInterval:function(i){var g=i.call;return function(m){for(var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length,f=new Array(u>2?u-2:0),y=2;y<u;y++)f[y-2]=arguments[y];var k=Symbol(),b=n.generateUniqueNumber(t);t.set(b,k);var _=function(){return g("set",{delay:l,now:performance.timeOrigin+performance.now(),timerId:b,timerType:"interval"}).then(function(){var A=t.get(b);if(A===void 0)throw new Error("The timer is in an undefined state.");A===k&&(m.apply(void 0,f),t.get(b)===k&&_())})};return _(),b}},setTimeout:function(i){var g=i.call;return function(m){for(var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length,f=new Array(u>2?u-2:0),y=2;y<u;y++)f[y-2]=arguments[y];var k=Symbol(),b=n.generateUniqueNumber(r);return r.set(b,k),g("set",{delay:l,now:performance.timeOrigin+performance.now(),timerId:b,timerType:"timeout"}).then(function(){var _=r.get(b);if(_===void 0)throw new Error("The timer is in an undefined state.");_===k&&(r.delete(b),m.apply(void 0,f))}),b}}}),s=function(i){var g=new Worker(i);return e(g)};o.load=s,o.wrap=e})}),zc=be((d,h)=>{de(),pe(),ue(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d,Wc()):typeof define=="function"&&define.amd?define(["exports","worker-timers-broker"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.workerTimers={},o.workerTimersBroker))})(d,function(o,a){var p=function(g,m){var l=null;return function(){if(l!==null)return l;var u=new Blob([m],{type:"application/javascript; charset=utf-8"}),f=URL.createObjectURL(u);return l=g(f),setTimeout(function(){return URL.revokeObjectURL(f)}),l}},n=`(()=>{var e={45:(e,t,r)=>{var n=r(738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},79:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},122:(e,t,r)=>{var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},156:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},172:e=>{e.exports=function(e,t){this.v=e,this.k=t},e.exports.__esModule=!0,e.exports.default=e.exports},293:e=>{function t(e,t,r,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,u){var a=e.apply(r,n);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},373:e=>{e.exports=function(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function e(){for(;r.length;)if((n=r.pop())in t)return e.value=n,e.done=!1,e;return e.done=!0,e}},e.exports.__esModule=!0,e.exports.default=e.exports},389:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,u=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<u?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*u);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,s=r(i),c=a(s,i),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c}(t)},472:function(e,t,r){!function(e,t,r,n){"use strict";var o=function(e,t){return function(r){var o=t.get(r);if(void 0===o)return Promise.resolve(!1);var u=n(o,2),a=u[0],i=u[1];return e(a),t.delete(r),i(!1),Promise.resolve(!0)}},u=function(e,t){var r=function(n,o,u,a){var i=n-e.now();i>0?o.set(a,[t(r,i,n,o,u,a),u]):(o.delete(a),u(!0))};return r},a=function(e,t,r,n){return function(o,u,a){var i=o+u-t.timeOrigin,s=i-t.now();return new Promise((function(t){e.set(a,[r(n,s,i,e,t,a),t])}))}},i=new Map,s=o(globalThis.clearTimeout,i),c=new Map,f=o(globalThis.clearTimeout,c),l=u(performance,globalThis.setTimeout),p=a(i,performance,globalThis.setTimeout,l),d=a(c,performance,globalThis.setTimeout,l);r.createWorker(self,{clear:function(){var r=e(t.mark((function e(r){var n,o,u;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timerId,o=r.timerType,e.next=1,"interval"===o?s(n):f(n);case 1:return u=e.sent,e.abrupt("return",{result:u});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}(),set:function(){var r=e(t.mark((function e(r){var n,o,u,a,i;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.delay,o=r.now,u=r.timerId,a=r.timerType,e.next=1,("interval"===a?p:d)(n,o,u);case 1:return i=e.sent,e.abrupt("return",{result:i});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}()})}(r(293),r(756),r(623),r(715))},546:e=>{function t(r,n,o,u){var a=Object.defineProperty;try{a({},"",{})}catch(r){a=0}e.exports=t=function(e,r,n,o){if(r)a?a(e,r,{value:n,enumerable:!o,configurable:!o,writable:!o}):e[r]=n;else{var u=function(r,n){t(e,r,(function(e){return this._invoke(r,n,e)}))};u("next",0),u("throw",1),u("return",2)}},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n,o,u)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},579:(e,t,r)=>{var n=r(738).default;e.exports=function(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(n(e)+" is not iterable")},e.exports.__esModule=!0,e.exports.default=e.exports},623:function(e,t,r){!function(e,t,r,n,o){"use strict";var u={INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601},a=function(e,t){return Object.assign(new Error(e),{status:t})},i=function(e){return a('The requested method called "'.concat(e,'" is not supported.'),u.METHOD_NOT_FOUND)},s=function(e){return a('The handler of the method called "'.concat(e,'" returned no required result.'),u.INTERNAL_ERROR)},c=function(e){return a('The handler of the method called "'.concat(e,'" returned an unexpected result.'),u.INTERNAL_ERROR)},f=function(e){return a('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),u.INVALID_PARAMS)},l=function(e,n){return function(){var o=t(r.mark((function t(o){var u,a,f,l,p,d,v,x,y,b,h,m,_,g,w;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o.data,a=u.id,f=u.method,l=u.params,p=n[f],t.prev=1,void 0!==p){t.next=2;break}throw i(f);case 2:if(void 0!==(d=void 0===l?p():p(l))){t.next=3;break}throw s(f);case 3:if(!(d instanceof Promise)){t.next=5;break}return t.next=4,d;case 4:g=t.sent,t.next=6;break;case 5:g=d;case 6:if(v=g,null!==a){t.next=8;break}if(void 0===v.result){t.next=7;break}throw c(f);case 7:t.next=10;break;case 8:if(void 0!==v.result){t.next=9;break}throw c(f);case 9:x=v.result,y=v.transferables,b=void 0===y?[]:y,e.postMessage({id:a,result:x},b);case 10:t.next=12;break;case 11:t.prev=11,w=t.catch(1),h=w.message,m=w.status,_=void 0===m?-32603:m,e.postMessage({error:{code:_,message:h},id:a});case 12:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return o.apply(this,arguments)}}()},p=function(){return new Promise((function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])}))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=new Map,y=function(e,n,u){return v(v({},n),{},{connect:function(t){var r=t.port;r.start();var u=e(r,n),a=o.generateUniqueNumber(x);return x.set(a,(function(){u(),r.close(),x.delete(a)})),{result:a}},disconnect:function(e){var t=e.portId,r=x.get(t);if(void 0===r)throw f(t);return r(),{result:null}},isSupported:function(){var e=t(r.mark((function e(){var t,n,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,p();case 1:if(!e.sent){e.next=5;break}if(!((t=u())instanceof Promise)){e.next=3;break}return e.next=2,t;case 2:o=e.sent,e.next=4;break;case 3:o=t;case 4:return n=o,e.abrupt("return",{result:n});case 5:return e.abrupt("return",{result:!1});case 6:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()})},b=function(e,t){var r=y(b,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0}),n=l(e,r);return e.addEventListener("message",n),function(){return e.removeEventListener("message",n)}};e.createWorker=b,e.isSupported=p}(t,r(293),r(756),r(693),r(389))},633:(e,t,r)=>{var n=r(172),o=r(993),u=r(869),a=r(887),i=r(791),s=r(373),c=r(579);function f(){"use strict";var t=o(),r=t.m(f),l=(Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__).constructor;function p(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))}var d={throw:1,return:2,break:3,continue:3};function v(e){var t,r;return function(n){t||(t={stop:function(){return r(n.a,2)},catch:function(){return n.v},abrupt:function(e,t){return r(n.a,d[e],t)},delegateYield:function(e,o,u){return t.resultName=o,r(n.d,c(e),u)},finish:function(e){return r(n.f,e)}},r=function(e,r,o){n.p=t.prev,n.n=t.next;try{return e(r,o)}finally{t.next=n.n}}),t.resultName&&(t[t.resultName]=n.v,t.resultName=void 0),t.sent=n.v,t.next=n.n;try{return e.call(this,t)}finally{n.p=t.prev,n.n=t.next}}}return(e.exports=f=function(){return{wrap:function(e,r,n,o){return t.w(v(e),r,n,o&&o.reverse())},isGeneratorFunction:p,mark:t.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:i,async:function(e,t,r,n,o){return(p(t)?a:u)(v(e),t,r,n,o)},keys:s,values:c}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=f,e.exports.__esModule=!0,e.exports.default=e.exports},693:(e,t,r)=>{var n=r(736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},715:(e,t,r)=>{var n=r(987),o=r(156),u=r(122),a=r(752);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},736:(e,t,r)=>{var n=r(738).default,o=r(45);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},752:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},756:(e,t,r)=>{var n=r(633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},791:(e,t,r)=>{var n=r(172),o=r(546);e.exports=function e(t,r){function u(e,o,a,i){try{var s=t[e](o),c=s.value;return c instanceof n?r.resolve(c.v).then((function(e){u("next",e,a,i)}),(function(e){u("throw",e,a,i)})):r.resolve(c).then((function(e){s.value=e,a(s)}),(function(e){return u("throw",e,a,i)}))}catch(e){i(e)}}var a;this.next||(o(e.prototype),o(e.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",(function(){return this}))),o(this,"_invoke",(function(e,t,n){function o(){return new r((function(t,r){u(e,n,t,r)}))}return a=a?a.then(o,o):o()}),!0)},e.exports.__esModule=!0,e.exports.default=e.exports},869:(e,t,r)=>{var n=r(887);e.exports=function(e,t,r,o,u){var a=n(e,t,r,o,u);return a.next().then((function(e){return e.done?e.value:a.next()}))},e.exports.__esModule=!0,e.exports.default=e.exports},887:(e,t,r)=>{var n=r(993),o=r(791);e.exports=function(e,t,r,u,a){return new o(n().w(e,t,r,u),a||Promise)},e.exports.__esModule=!0,e.exports.default=e.exports},987:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},993:(e,t,r)=>{var n=r(546);function o(){var t,r,u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.toStringTag||"@@toStringTag";function s(e,o,u,a){var i=o&&o.prototype instanceof f?o:f,s=Object.create(i.prototype);return n(s,"_invoke",function(e,n,o){var u,a,i,s=0,f=o||[],l=!1,p={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,r){return u=e,a=0,i=t,p.n=r,c}};function d(e,n){for(a=e,i=n,r=0;!l&&s&&!o&&r<f.length;r++){var o,u=f[r],d=p.p,v=u[2];e>3?(o=v===n)&&(i=u[(a=u[4])?5:(a=3,3)],u[4]=u[5]=t):u[0]<=d&&((o=e<2&&d<u[1])?(a=0,p.v=n,p.n=u[1]):d<v&&(o=e<3||u[0]>n||n>v)&&(u[4]=e,u[5]=n,p.n=v,a=0))}if(o||e>1)return c;throw l=!0,n}return function(o,f,v){if(s>1)throw TypeError("Generator is already running");for(l&&1===f&&d(f,v),a=f,i=v;(r=a<2?t:i)||!l;){u||(a?a<3?(a>1&&(p.n=-1),d(a,i)):p.n=i:p.v=i);try{if(s=2,u){if(a||(o="next"),r=u[o]){if(!(r=r.call(u,i)))throw TypeError("iterator result is not an object");if(!r.done)return r;i=r.value,a<2&&(a=0)}else 1===a&&(r=u.return)&&r.call(u),a<2&&(i=TypeError("The iterator does not provide a '"+o+"' method"),a=1);u=t}else if((r=(l=p.n<0)?i:e.call(n,p))!==c)break}catch(e){u=t,a=1,i=e}finally{s=1}}return{value:r,done:l}}}(e,u,a),!0),s}var c={};function f(){}function l(){}function p(){}r=Object.getPrototypeOf;var d=[][a]?r(r([][a]())):(n(r={},a,(function(){return this})),r),v=p.prototype=f.prototype=Object.create(d);function x(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,n(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e}return l.prototype=p,n(v,"constructor",p),n(p,"constructor",l),l.displayName="GeneratorFunction",n(p,i,"GeneratorFunction"),n(v),n(v,i,"Generator"),n(v,a,(function(){return this})),n(v,"toString",(function(){return"[object Generator]"})),(e.exports=o=function(){return{w:s,m:x}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`,t=p(a.load,n),r=function(g){return t().clearInterval(g)},e=function(g){return t().clearTimeout(g)},s=function(){var g;return(g=t()).setInterval.apply(g,arguments)},i=function(){var g;return(g=t()).setTimeout.apply(g,arguments)};o.clearInterval=r,o.clearTimeout=e,o.setInterval=s,o.setTimeout=i})}),Zn=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0}),d.isReactNativeBrowser=d.isWebWorker=void 0;var h=()=>typeof window<"u"?typeof navigator<"u"&&navigator.userAgent?.toLowerCase().indexOf(" electron/")>-1&&qe?.versions?!Object.prototype.hasOwnProperty.call(qe.versions,"electron"):typeof window.document<"u":!1,o=()=>!!(typeof self=="object"&&self?.constructor?.name?.includes("WorkerGlobalScope")&&typeof Deno>"u"),a=()=>typeof navigator<"u"&&navigator.product==="ReactNative",p=h()||o()||a();d.isWebWorker=o(),d.isReactNativeBrowser=a(),d.default=p}),Hc=be(d=>{de(),pe(),ue();var h=d&&d.__createBinding||(Object.create?function(s,i,g,m){m===void 0&&(m=g);var l=Object.getOwnPropertyDescriptor(i,g);(!l||("get"in l?!i.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return i[g]}}),Object.defineProperty(s,m,l)}:function(s,i,g,m){m===void 0&&(m=g),s[m]=i[g]}),o=d&&d.__setModuleDefault||(Object.create?function(s,i){Object.defineProperty(s,"default",{enumerable:!0,value:i})}:function(s,i){s.default=i}),a=d&&d.__importStar||(function(){var s=function(i){return s=Object.getOwnPropertyNames||function(g){var m=[];for(var l in g)Object.prototype.hasOwnProperty.call(g,l)&&(m[m.length]=l);return m},s(i)};return function(i){if(i&&i.__esModule)return i;var g={};if(i!=null)for(var m=s(i),l=0;l<m.length;l++)m[l]!=="default"&&h(g,i,m[l]);return o(g,i),g}})();Object.defineProperty(d,"__esModule",{value:!0});var p=zc(),n=a(Zn()),t={set:p.setInterval,clear:p.clearInterval},r={set:(s,i)=>setInterval(s,i),clear:s=>clearInterval(s)},e=s=>{switch(s){case"native":return r;case"worker":return t;default:return n.default&&!n.isWebWorker&&!n.isReactNativeBrowser?t:r}};d.default=e}),qo=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(d,"__esModule",{value:!0});var o=h(Hc()),a=class{_keepalive;timerId;timer;destroyed=!1;counter;client;_keepaliveTimeoutTimestamp;_intervalEvery;get keepaliveTimeoutTimestamp(){return this._keepaliveTimeoutTimestamp}get intervalEvery(){return this._intervalEvery}get keepalive(){return this._keepalive}constructor(p,n){this.client=p,this.timer=typeof n=="object"&&"set"in n&&"clear"in n?n:(0,o.default)(n),this.setKeepalive(p.options.keepalive)}clear(){this.timerId&&(this.timer.clear(this.timerId),this.timerId=null)}setKeepalive(p){if(p*=1e3,isNaN(p)||p<=0||p>2147483647)throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${p}`);this._keepalive=p,this.reschedule(),this.client.log(`KeepaliveManager: set keepalive to ${p}ms`)}destroy(){this.clear(),this.destroyed=!0}reschedule(){if(this.destroyed)return;this.clear(),this.counter=0;let p=Math.ceil(this._keepalive*1.5);this._keepaliveTimeoutTimestamp=Date.now()+p,this._intervalEvery=Math.ceil(this._keepalive/2),this.timerId=this.timer.set(()=>{this.destroyed||(this.counter+=1,this.counter===2?this.client.sendPing():this.counter>2&&this.client.onKeepaliveTimeout())},this._intervalEvery)}};d.default=a}),bs=be(d=>{de(),pe(),ue();var h=d&&d.__createBinding||(Object.create?function(v,S,x,T){T===void 0&&(T=x);var C=Object.getOwnPropertyDescriptor(S,x);(!C||("get"in C?!S.__esModule:C.writable||C.configurable))&&(C={enumerable:!0,get:function(){return S[x]}}),Object.defineProperty(v,T,C)}:function(v,S,x,T){T===void 0&&(T=x),v[T]=S[x]}),o=d&&d.__setModuleDefault||(Object.create?function(v,S){Object.defineProperty(v,"default",{enumerable:!0,value:S})}:function(v,S){v.default=S}),a=d&&d.__importStar||(function(){var v=function(S){return v=Object.getOwnPropertyNames||function(x){var T=[];for(var C in x)Object.prototype.hasOwnProperty.call(x,C)&&(T[T.length]=C);return T},v(S)};return function(S){if(S&&S.__esModule)return S;var x={};if(S!=null)for(var T=v(S),C=0;C<T.length;C++)T[C]!=="default"&&h(x,S,T[C]);return o(x,S),x}})(),p=d&&d.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(d,"__esModule",{value:!0});var n=p(ec()),t=Bt(),r=p(nc()),e=p(wt()),s=a(po()),i=p(ho()),g=p(xc()),m=p(Co()),l=p(Sc()),u=Jt(),f=Ac(),y=p(qo()),k=a(Zn()),b=globalThis.setImmediate||((...v)=>{let S=v.shift();(0,u.nextTick)(()=>{S(...v)})}),_={keepalive:60,reschedulePings:!0,protocolId:"MQTT",protocolVersion:4,reconnectPeriod:1e3,connectTimeout:30*1e3,clean:!0,resubscribe:!0,subscribeBatchSize:null,writeCache:!0,timerVariant:"auto"},A=class ys extends f.TypedEventEmitter{static VERSION=u.MQTTJS_VERSION;connected;disconnecting;disconnected;reconnecting;incomingStore;outgoingStore;options;queueQoSZero;_reconnectCount;log;messageIdProvider;outgoing;messageIdToTopic;noop;keepaliveManager;stream;queue;streamBuilder;_resubscribeTopics;connackTimer;reconnectTimer;_storeProcessing;_packetIdsDuringStoreProcessing;_storeProcessingQueue;_firstConnection;topicAliasRecv;topicAliasSend;_deferredReconnect;connackPacket;static defaultId(){return`mqttjs_${Math.random().toString(16).substr(2,8)}`}constructor(S,x){super(),this.options=x||{};for(let T in _)typeof this.options[T]>"u"?this.options[T]=_[T]:this.options[T]=x[T];this.log=this.options.log||(0,e.default)("mqttjs:client"),this.noop=this._noop.bind(this),this.log("MqttClient :: version:",ys.VERSION),k.isWebWorker?this.log("MqttClient :: environment","webworker"):this.log("MqttClient :: environment",k.default?"browser":"node"),this.log("MqttClient :: options.protocol",x.protocol),this.log("MqttClient :: options.protocolVersion",x.protocolVersion),this.log("MqttClient :: options.username",x.username),this.log("MqttClient :: options.keepalive",x.keepalive),this.log("MqttClient :: options.reconnectPeriod",x.reconnectPeriod),this.log("MqttClient :: options.rejectUnauthorized",x.rejectUnauthorized),this.log("MqttClient :: options.properties.topicAliasMaximum",x.properties?x.properties.topicAliasMaximum:void 0),this.options.clientId=typeof x.clientId=="string"?x.clientId:ys.defaultId(),this.log("MqttClient :: clientId",this.options.clientId),this.options.customHandleAcks=x.protocolVersion===5&&x.customHandleAcks?x.customHandleAcks:(...T)=>{T[3](null,0)},this.options.writeCache||(n.default.writeToStream.cacheNumbers=!1),this.streamBuilder=S,this.messageIdProvider=typeof this.options.messageIdProvider>"u"?new m.default:this.options.messageIdProvider,this.outgoingStore=x.outgoingStore||new i.default,this.incomingStore=x.incomingStore||new i.default,this.queueQoSZero=x.queueQoSZero===void 0?!0:x.queueQoSZero,this._resubscribeTopics={},this.messageIdToTopic={},this.keepaliveManager=null,this.connected=!1,this.disconnecting=!1,this.reconnecting=!1,this.queue=[],this.connackTimer=null,this.reconnectTimer=null,this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={},this._storeProcessingQueue=[],this.outgoing={},this._firstConnection=!0,x.properties&&x.properties.topicAliasMaximum>0&&(x.properties.topicAliasMaximum>65535?this.log("MqttClient :: options.properties.topicAliasMaximum is out of range"):this.topicAliasRecv=new l.default(x.properties.topicAliasMaximum)),this.on("connect",()=>{let{queue:T}=this,C=()=>{let P=T.shift();this.log("deliver :: entry %o",P);let B=null;if(!P){this._resubscribe();return}B=P.packet,this.log("deliver :: call _sendPacket for %o",B);let I=!0;B.messageId&&B.messageId!==0&&(this.messageIdProvider.register(B.messageId)||(I=!1)),I?this._sendPacket(B,z=>{P.cb&&P.cb(z),C()}):(this.log("messageId: %d has already used. The message is skipped and removed.",B.messageId),C())};this.log("connect :: sending queued packets"),C()}),this.on("close",()=>{this.log("close :: connected set to `false`"),this.connected=!1,this.log("close :: clearing connackTimer"),clearTimeout(this.connackTimer),this._destroyKeepaliveManager(),this.topicAliasRecv&&this.topicAliasRecv.clear(),this.log("close :: calling _setupReconnect"),this._setupReconnect()}),this.options.manualConnect||(this.log("MqttClient :: setting up stream"),this.connect())}handleAuth(S,x){x()}handleMessage(S,x){x()}_nextId(){return this.messageIdProvider.allocate()}getLastMessageId(){return this.messageIdProvider.getLastAllocated()}connect(){let S=new t.Writable,x=n.default.parser(this.options),T=null,C=[];this.log("connect :: calling method to clear reconnect"),this._clearReconnect(),this.disconnected&&!this.reconnecting&&(this.incomingStore=this.options.incomingStore||new i.default,this.outgoingStore=this.options.outgoingStore||new i.default,this.disconnecting=!1,this.disconnected=!1),this.log("connect :: using streamBuilder provided to client to create stream"),this.stream=this.streamBuilder(this),x.on("packet",j=>{this.log("parser :: on packet push to packets array."),C.push(j)});let P=()=>{this.log("work :: getting next packet in queue");let j=C.shift();if(j)this.log("work :: packet pulled from queue"),(0,g.default)(this,j,B);else{this.log("work :: no packets in queue");let F=T;T=null,this.log("work :: done flag is %s",!!F),F&&F()}},B=()=>{if(C.length)(0,u.nextTick)(P);else{let j=T;T=null,j()}};S._write=(j,F,le)=>{T=le,this.log("writable stream :: parsing buffer"),x.parse(j),P()};let I=j=>{this.log("streamErrorHandler :: error",j.message),j.code?(this.log("streamErrorHandler :: emitting error"),this.emit("error",j)):this.noop(j)};this.log("connect :: pipe stream to writable stream"),this.stream.pipe(S),this.stream.on("error",I),this.stream.on("close",()=>{this.log("(%s)stream :: on close",this.options.clientId),this._flushVolatile(),this.log("stream: emit close to MqttClient"),this.emit("close")}),this.log("connect: sending packet `connect`");let z={cmd:"connect",protocolId:this.options.protocolId,protocolVersion:this.options.protocolVersion,clean:this.options.clean,clientId:this.options.clientId,keepalive:this.options.keepalive,username:this.options.username,password:this.options.password,properties:this.options.properties};if(this.options.will&&(z.will={...this.options.will,payload:this.options.will?.payload}),this.topicAliasRecv&&(z.properties||(z.properties={}),this.topicAliasRecv&&(z.properties.topicAliasMaximum=this.topicAliasRecv.max)),this._writePacket(z),x.on("error",this.emit.bind(this,"error")),this.options.properties){if(!this.options.properties.authenticationMethod&&this.options.properties.authenticationData)return this.end(()=>this.emit("error",new Error("Packet has no Authentication Method"))),this;if(this.options.properties.authenticationMethod&&this.options.authPacket&&typeof this.options.authPacket=="object"){let j={cmd:"auth",reasonCode:0,...this.options.authPacket};this._writePacket(j)}}return this.stream.setMaxListeners(1e3),clearTimeout(this.connackTimer),this.connackTimer=setTimeout(()=>{this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"),this.emit("error",new Error("connack timeout")),this._cleanUp(!0)},this.options.connectTimeout),this}publish(S,x,T,C){this.log("publish :: message `%s` to topic `%s`",x,S);let{options:P}=this;typeof T=="function"&&(C=T,T=null),T=T||{},T={qos:0,retain:!1,dup:!1,...T};let{qos:B,retain:I,dup:z,properties:j,cbStorePut:F}=T;if(this._checkDisconnecting(C))return this;let le=()=>{let Z=0;if((B===1||B===2)&&(Z=this._nextId(),Z===null))return this.log("No messageId left"),!1;let Y={cmd:"publish",topic:S,payload:x,qos:B,retain:I,messageId:Z,dup:z};switch(P.protocolVersion===5&&(Y.properties=j),this.log("publish :: qos",B),B){case 1:case 2:this.outgoing[Y.messageId]={volatile:!1,cb:C||this.noop},this.log("MqttClient:publish: packet cmd: %s",Y.cmd),this._sendPacket(Y,void 0,F);break;default:this.log("MqttClient:publish: packet cmd: %s",Y.cmd),this._sendPacket(Y,C,F);break}return!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!le())&&this._storeProcessingQueue.push({invoke:le,cbStorePut:T.cbStorePut,callback:C}),this}publishAsync(S,x,T){return new Promise((C,P)=>{this.publish(S,x,T,(B,I)=>{B?P(B):C(I)})})}subscribe(S,x,T){let C=this.options.protocolVersion;typeof x=="function"&&(T=x),T=T||this.noop;let P=!1,B=[];typeof S=="string"?(S=[S],B=S):Array.isArray(S)?B=S:typeof S=="object"&&(P=S.resubscribe,delete S.resubscribe,B=Object.keys(S));let I=s.validateTopics(B);if(I!==null)return b(T,new Error(`Invalid topic ${I}`)),this;if(this._checkDisconnecting(T))return this.log("subscribe: discconecting true"),this;let z={qos:0};C===5&&(z.nl=!1,z.rap=!1,z.rh=0),x={...z,...x};let{properties:j}=x,F=[],le=(ie,W)=>{if(W=W||x,!Object.prototype.hasOwnProperty.call(this._resubscribeTopics,ie)||this._resubscribeTopics[ie].qos<W.qos||P){let ne={topic:ie,qos:W.qos};C===5&&(ne.nl=W.nl,ne.rap=W.rap,ne.rh=W.rh,ne.properties=j),this.log("subscribe: pushing topic `%s` and qos `%s` to subs list",ne.topic,ne.qos),F.push(ne)}};if(Array.isArray(S)?S.forEach(ie=>{this.log("subscribe: array topic %s",ie),le(ie)}):Object.keys(S).forEach(ie=>{this.log("subscribe: object topic %s, %o",ie,S[ie]),le(ie,S[ie])}),!F.length)return T(null,[]),this;let Z=(ie,W)=>{let ne={cmd:"subscribe",subscriptions:ie,messageId:W};if(j&&(ne.properties=j),this.options.resubscribe){this.log("subscribe :: resubscribe true");let ee=[];ie.forEach(Q=>{if(this.options.reconnectPeriod>0){let q={qos:Q.qos};C===5&&(q.nl=Q.nl||!1,q.rap=Q.rap||!1,q.rh=Q.rh||0,q.properties=Q.properties),this._resubscribeTopics[Q.topic]=q,ee.push(Q.topic)}}),this.messageIdToTopic[ne.messageId]=ee}let O=new Promise((ee,Q)=>{this.outgoing[ne.messageId]={volatile:!0,cb(q,ve){if(!q){let{granted:L}=ve;for(let N=0;N<L.length;N+=1)ie[N].qos=L[N]}q?Q(new u.ErrorWithSubackPacket(q.message,ve)):ee(ve)}}});return this.log("subscribe :: call _sendPacket"),this._sendPacket(ne),O},Y=()=>{let ie=this.options.subscribeBatchSize??F.length,W=[];for(let ne=0;ne<F.length;ne+=ie){let O=F.slice(ne,ne+ie),ee=this._nextId();if(ee===null)return this.log("No messageId left"),!1;W.push(Z(O,ee))}return Promise.all(W).then(ne=>{T(null,F,ne.at(-1))}).catch(ne=>{T(ne,F,ne.packet)}),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!Y())&&this._storeProcessingQueue.push({invoke:Y,callback:T}),this}subscribeAsync(S,x){return new Promise((T,C)=>{this.subscribe(S,x,(P,B)=>{P?C(P):T(B)})})}unsubscribe(S,x,T){typeof S=="string"&&(S=[S]),typeof x=="function"&&(T=x),T=T||this.noop;let C=s.validateTopics(S);if(C!==null)return b(T,new Error(`Invalid topic ${C}`)),this;if(this._checkDisconnecting(T))return this;let P=()=>{let B=this._nextId();if(B===null)return this.log("No messageId left"),!1;let I={cmd:"unsubscribe",messageId:B,unsubscriptions:[]};return typeof S=="string"?I.unsubscriptions=[S]:Array.isArray(S)&&(I.unsubscriptions=S),this.options.resubscribe&&I.unsubscriptions.forEach(z=>{delete this._resubscribeTopics[z]}),typeof x=="object"&&x.properties&&(I.properties=x.properties),this.outgoing[I.messageId]={volatile:!0,cb:T},this.log("unsubscribe: call _sendPacket"),this._sendPacket(I),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!P())&&this._storeProcessingQueue.push({invoke:P,callback:T}),this}unsubscribeAsync(S,x){return new Promise((T,C)=>{this.unsubscribe(S,x,(P,B)=>{P?C(P):T(B)})})}end(S,x,T){this.log("end :: (%s)",this.options.clientId),(S==null||typeof S!="boolean")&&(T=T||x,x=S,S=!1),typeof x!="object"&&(T=T||x,x=null),this.log("end :: cb? %s",!!T),(!T||typeof T!="function")&&(T=this.noop);let C=()=>{this.log("end :: closeStores: closing incoming and outgoing stores"),this.disconnected=!0,this.incomingStore.close(B=>{this.outgoingStore.close(I=>{if(this.log("end :: closeStores: emitting end"),this.emit("end"),T){let z=B||I;this.log("end :: closeStores: invoking callback with args"),T(z)}})}),this._deferredReconnect?this._deferredReconnect():(this.options.reconnectPeriod===0||this.options.manualConnect)&&(this.disconnecting=!1)},P=()=>{this.log("end :: (%s) :: finish :: calling _cleanUp with force %s",this.options.clientId,S),this._cleanUp(S,()=>{this.log("end :: finish :: calling process.nextTick on closeStores"),(0,u.nextTick)(C)},x)};return this.disconnecting?(T(),this):(this._clearReconnect(),this.disconnecting=!0,!S&&Object.keys(this.outgoing).length>0?(this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty",this.options.clientId),this.once("outgoingEmpty",setTimeout.bind(null,P,10))):(this.log("end :: (%s) :: immediately calling finish",this.options.clientId),P()),this)}endAsync(S,x){return new Promise((T,C)=>{this.end(S,x,P=>{P?C(P):T()})})}removeOutgoingMessage(S){if(this.outgoing[S]){let{cb:x}=this.outgoing[S];this._removeOutgoingAndStoreMessage(S,()=>{x(new Error("Message removed"))})}return this}reconnect(S){this.log("client reconnect");let x=()=>{S?(this.options.incomingStore=S.incomingStore,this.options.outgoingStore=S.outgoingStore):(this.options.incomingStore=null,this.options.outgoingStore=null),this.incomingStore=this.options.incomingStore||new i.default,this.outgoingStore=this.options.outgoingStore||new i.default,this.disconnecting=!1,this.disconnected=!1,this._deferredReconnect=null,this._reconnect()};return this.disconnecting&&!this.disconnected?this._deferredReconnect=x:x(),this}_flushVolatile(){this.outgoing&&(this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"),Object.keys(this.outgoing).forEach(S=>{this.outgoing[S].volatile&&typeof this.outgoing[S].cb=="function"&&(this.outgoing[S].cb(new Error("Connection closed")),delete this.outgoing[S])}))}_flush(){this.outgoing&&(this.log("_flush: queue exists? %b",!!this.outgoing),Object.keys(this.outgoing).forEach(S=>{typeof this.outgoing[S].cb=="function"&&(this.outgoing[S].cb(new Error("Connection closed")),delete this.outgoing[S])}))}_removeTopicAliasAndRecoverTopicName(S){let x;S.properties&&(x=S.properties.topicAlias);let T=S.topic.toString();if(this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o",x,T),T.length===0){if(typeof x>"u")return new Error("Unregistered Topic Alias");if(T=this.topicAliasSend.getTopicByAlias(x),typeof T>"u")return new Error("Unregistered Topic Alias");S.topic=T}x&&delete S.properties.topicAlias}_checkDisconnecting(S){return this.disconnecting&&(S&&S!==this.noop?S(new Error("client disconnecting")):this.emit("error",new Error("client disconnecting"))),this.disconnecting}_reconnect(){this.log("_reconnect: emitting reconnect to client"),this.emit("reconnect"),this.connected?(this.end(()=>{this.connect()}),this.log("client already connected. disconnecting first.")):(this.log("_reconnect: calling connect"),this.connect())}_setupReconnect(){!this.disconnecting&&!this.reconnectTimer&&this.options.reconnectPeriod>0?(this.reconnecting||(this.log("_setupReconnect :: emit `offline` state"),this.emit("offline"),this.log("_setupReconnect :: set `reconnecting` to `true`"),this.reconnecting=!0),this.log("_setupReconnect :: setting reconnectTimer for %d ms",this.options.reconnectPeriod),this.reconnectTimer=setInterval(()=>{this.log("reconnectTimer :: reconnect triggered!"),this._reconnect()},this.options.reconnectPeriod)):this.log("_setupReconnect :: doing nothing...")}_clearReconnect(){this.log("_clearReconnect : clearing reconnect timer"),this.reconnectTimer&&(clearInterval(this.reconnectTimer),this.reconnectTimer=null)}_cleanUp(S,x,T={}){if(x&&(this.log("_cleanUp :: done callback provided for on stream close"),this.stream.on("close",x)),this.log("_cleanUp :: forced? %s",S),S)this.options.reconnectPeriod===0&&this.options.clean&&this._flush(),this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),this.stream.destroy();else{let C={cmd:"disconnect",...T};this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet",this.options.clientId),this._sendPacket(C,()=>{this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),b(()=>{this.stream.end(()=>{this.log("_cleanUp :: (%s) :: stream destroyed",this.options.clientId)})})})}!this.disconnecting&&!this.reconnecting&&(this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."),this._clearReconnect(),this._setupReconnect()),this._destroyKeepaliveManager(),x&&!this.connected&&(this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener",this.options.clientId),this.stream.removeListener("close",x),x())}_storeAndSend(S,x,T){this.log("storeAndSend :: store packet with cmd %s to outgoingStore",S.cmd);let C=S,P;if(C.cmd==="publish"&&(C=(0,r.default)(S),P=this._removeTopicAliasAndRecoverTopicName(C),P))return x&&x(P);this.outgoingStore.put(C,B=>{if(B)return x&&x(B);T(),this._writePacket(S,x)})}_applyTopicAlias(S){if(this.options.protocolVersion===5&&S.cmd==="publish"){let x;S.properties&&(x=S.properties.topicAlias);let T=S.topic.toString();if(this.topicAliasSend)if(x){if(T.length!==0&&(this.log("applyTopicAlias :: register topic: %s - alias: %d",T,x),!this.topicAliasSend.put(T,x)))return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",T,x),new Error("Sending Topic Alias out of range")}else T.length!==0&&(this.options.autoAssignTopicAlias?(x=this.topicAliasSend.getAliasByTopic(T),x?(S.topic="",S.properties={...S.properties,topicAlias:x},this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d",T,x)):(x=this.topicAliasSend.getLruAlias(),this.topicAliasSend.put(T,x),S.properties={...S.properties,topicAlias:x},this.log("applyTopicAlias :: auto assign topic: %s - alias: %d",T,x))):this.options.autoUseTopicAlias&&(x=this.topicAliasSend.getAliasByTopic(T),x&&(S.topic="",S.properties={...S.properties,topicAlias:x},this.log("applyTopicAlias :: auto use topic: %s - alias: %d",T,x))));else if(x)return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",T,x),new Error("Sending Topic Alias out of range")}}_noop(S){this.log("noop ::",S)}_writePacket(S,x){this.log("_writePacket :: packet: %O",S),this.log("_writePacket :: emitting `packetsend`"),this.emit("packetsend",S),this.log("_writePacket :: writing to stream");let T=n.default.writeToStream(S,this.stream,this.options);this.log("_writePacket :: writeToStream result %s",T),!T&&x&&x!==this.noop?(this.log("_writePacket :: handle events on `drain` once through callback."),this.stream.once("drain",x)):x&&(this.log("_writePacket :: invoking cb"),x())}_sendPacket(S,x,T,C){this.log("_sendPacket :: (%s) ::  start",this.options.clientId),T=T||this.noop,x=x||this.noop;let P=this._applyTopicAlias(S);if(P){x(P);return}if(!this.connected){if(S.cmd==="auth"){this._writePacket(S,x);return}this.log("_sendPacket :: client not connected. Storing packet offline."),this._storePacket(S,x,T);return}if(C){this._writePacket(S,x);return}switch(S.cmd){case"publish":break;case"pubrel":this._storeAndSend(S,x,T);return;default:this._writePacket(S,x);return}switch(S.qos){case 2:case 1:this._storeAndSend(S,x,T);break;default:this._writePacket(S,x);break}this.log("_sendPacket :: (%s) ::  end",this.options.clientId)}_storePacket(S,x,T){this.log("_storePacket :: packet: %o",S),this.log("_storePacket :: cb? %s",!!x),T=T||this.noop;let C=S;if(C.cmd==="publish"){C=(0,r.default)(S);let B=this._removeTopicAliasAndRecoverTopicName(C);if(B)return x&&x(B)}let P=C.qos||0;P===0&&this.queueQoSZero||C.cmd!=="publish"?this.queue.push({packet:C,cb:x}):P>0?(x=this.outgoing[C.messageId]?this.outgoing[C.messageId].cb:null,this.outgoingStore.put(C,B=>{if(B)return x&&x(B);T()})):x&&x(new Error("No connection to broker"))}_setupKeepaliveManager(){this.log("_setupKeepaliveManager :: keepalive %d (seconds)",this.options.keepalive),!this.keepaliveManager&&this.options.keepalive&&(this.keepaliveManager=new y.default(this,this.options.timerVariant))}_destroyKeepaliveManager(){this.keepaliveManager&&(this.log("_destroyKeepaliveManager :: destroying keepalive manager"),this.keepaliveManager.destroy(),this.keepaliveManager=null)}reschedulePing(S=!1){this.keepaliveManager&&this.options.keepalive&&(S||this.options.reschedulePings)&&this._reschedulePing()}_reschedulePing(){this.log("_reschedulePing :: rescheduling ping"),this.keepaliveManager.reschedule()}sendPing(){this.log("_sendPing :: sending pingreq"),this._sendPacket({cmd:"pingreq"})}onKeepaliveTimeout(){this.emit("error",new Error("Keepalive timeout")),this.log("onKeepaliveTimeout :: calling _cleanUp with force true"),this._cleanUp(!0)}_resubscribe(){this.log("_resubscribe");let S=Object.keys(this._resubscribeTopics);if(!this._firstConnection&&(this.options.clean||this.options.protocolVersion>=4&&!this.connackPacket.sessionPresent)&&S.length>0)if(this.options.resubscribe)if(this.options.protocolVersion===5){this.log("_resubscribe: protocolVersion 5");for(let x=0;x<S.length;x++){let T={};T[S[x]]=this._resubscribeTopics[S[x]],T.resubscribe=!0,this.subscribe(T,{properties:T[S[x]].properties})}}else this._resubscribeTopics.resubscribe=!0,this.subscribe(this._resubscribeTopics);else this._resubscribeTopics={};this._firstConnection=!1}_onConnect(S){if(this.disconnected){this.emit("connect",S);return}this.connackPacket=S,this.messageIdProvider.clear(),this._setupKeepaliveManager(),this.connected=!0;let x=()=>{let T=this.outgoingStore.createStream(),C=()=>{T.destroy(),T=null,this._flushStoreProcessingQueue(),P()},P=()=>{this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={}};this.once("close",C),T.on("error",I=>{P(),this._flushStoreProcessingQueue(),this.removeListener("close",C),this.emit("error",I)});let B=()=>{if(!T)return;let I=T.read(1),z;if(!I){T.once("readable",B);return}if(this._storeProcessing=!0,this._packetIdsDuringStoreProcessing[I.messageId]){B();return}!this.disconnecting&&!this.reconnectTimer?(z=this.outgoing[I.messageId]?this.outgoing[I.messageId].cb:null,this.outgoing[I.messageId]={volatile:!1,cb(j,F){z&&z(j,F),B()}},this._packetIdsDuringStoreProcessing[I.messageId]=!0,this.messageIdProvider.register(I.messageId)?this._sendPacket(I,void 0,void 0,!0):this.log("messageId: %d has already used.",I.messageId)):T.destroy&&T.destroy()};T.on("end",()=>{let I=!0;for(let z in this._packetIdsDuringStoreProcessing)if(!this._packetIdsDuringStoreProcessing[z]){I=!1;break}this.removeListener("close",C),I?(P(),this._invokeAllStoreProcessingQueue(),this.emit("connect",S)):x()}),B()};x()}_invokeStoreProcessingQueue(){if(!this._storeProcessing&&this._storeProcessingQueue.length>0){let S=this._storeProcessingQueue[0];if(S&&S.invoke())return this._storeProcessingQueue.shift(),!0}return!1}_invokeAllStoreProcessingQueue(){for(;this._invokeStoreProcessingQueue(););}_flushStoreProcessingQueue(){for(let S of this._storeProcessingQueue)S.cbStorePut&&S.cbStorePut(new Error("Connection closed")),S.callback&&S.callback(new Error("Connection closed"));this._storeProcessingQueue.splice(0)}_removeOutgoingAndStoreMessage(S,x){delete this.outgoing[S],this.outgoingStore.del({messageId:S},(T,C)=>{x(T,C),this.messageIdProvider.deallocate(S),this._invokeStoreProcessingQueue()})}};d.default=A}),$c=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=Mo(),o=class{numberAllocator;lastId;constructor(){this.numberAllocator=new h.NumberAllocator(1,65535)}allocate(){return this.lastId=this.numberAllocator.alloc(),this.lastId}getLastAllocated(){return this.lastId}register(a){return this.numberAllocator.use(a)}deallocate(a){this.numberAllocator.free(a)}clear(){this.numberAllocator.clear()}};d.default=o});function Kc(){if(vs)return _n;vs=!0;let d=2147483647,h=36,o=1,a=26,p=38,n=700,t=72,r=128,e="-",s=/^xn--/,i=/[^\0-\x7F]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},l=h-o,u=Math.floor,f=String.fromCharCode;function y(P){throw new RangeError(m[P])}function k(P,B){let I=[],z=P.length;for(;z--;)I[z]=B(P[z]);return I}function b(P,B){let I=P.split("@"),z="";I.length>1&&(z=I[0]+"@",P=I[1]),P=P.replace(g,".");let j=P.split("."),F=k(j,B).join(".");return z+F}function _(P){let B=[],I=0,z=P.length;for(;I<z;){let j=P.charCodeAt(I++);if(j>=55296&&j<=56319&&I<z){let F=P.charCodeAt(I++);(F&64512)==56320?B.push(((j&1023)<<10)+(F&1023)+65536):(B.push(j),I--)}else B.push(j)}return B}let A=P=>String.fromCodePoint(...P),v=function(P){return P>=48&&P<58?26+(P-48):P>=65&&P<91?P-65:P>=97&&P<123?P-97:h},S=function(P,B){return P+22+75*(P<26)-((B!=0)<<5)},x=function(P,B,I){let z=0;for(P=I?u(P/n):P>>1,P+=u(P/B);P>l*a>>1;z+=h)P=u(P/l);return u(z+(l+1)*P/(P+p))},T=function(P){let B=[],I=P.length,z=0,j=r,F=t,le=P.lastIndexOf(e);le<0&&(le=0);for(let Z=0;Z<le;++Z)P.charCodeAt(Z)>=128&&y("not-basic"),B.push(P.charCodeAt(Z));for(let Z=le>0?le+1:0;Z<I;){let Y=z;for(let W=1,ne=h;;ne+=h){Z>=I&&y("invalid-input");let O=v(P.charCodeAt(Z++));O>=h&&y("invalid-input"),O>u((d-z)/W)&&y("overflow"),z+=O*W;let ee=ne<=F?o:ne>=F+a?a:ne-F;if(O<ee)break;let Q=h-ee;W>u(d/Q)&&y("overflow"),W*=Q}let ie=B.length+1;F=x(z-Y,ie,Y==0),u(z/ie)>d-j&&y("overflow"),j+=u(z/ie),z%=ie,B.splice(z++,0,j)}return String.fromCodePoint(...B)},C=function(P){let B=[];P=_(P);let I=P.length,z=r,j=0,F=t;for(let Y of P)Y<128&&B.push(f(Y));let le=B.length,Z=le;for(le&&B.push(e);Z<I;){let Y=d;for(let W of P)W>=z&&W<Y&&(Y=W);let ie=Z+1;Y-z>u((d-j)/ie)&&y("overflow"),j+=(Y-z)*ie,z=Y;for(let W of P)if(W<z&&++j>d&&y("overflow"),W===z){let ne=j;for(let O=h;;O+=h){let ee=O<=F?o:O>=F+a?a:O-F;if(ne<ee)break;let Q=ne-ee,q=h-ee;B.push(f(S(ee+Q%q,0))),ne=u(Q/q)}B.push(f(S(ne,0))),F=x(j,ie,Z===le),j=0,++Z}++j,++z}return B.join("")};return _n={version:"2.3.1",ucs2:{decode:_,encode:A},decode:T,encode:C,toASCII:function(P){return b(P,function(B){return i.test(B)?"xn--"+C(B):B})},toUnicode:function(P){return b(P,function(B){return s.test(B)?T(B.slice(4).toLowerCase()):B})}},_n}var _n,vs,Tt,Vc=tt(()=>{de(),pe(),ue(),_n={},vs=!1,Tt=Kc(),Tt.decode,Tt.encode,Tt.toASCII,Tt.toUnicode,Tt.ucs2,Tt.version});function Qc(){return _s||(_s=!0,ws=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var d={},h=Symbol("test"),o=Object(h);if(typeof h=="string"||Object.prototype.toString.call(h)!=="[object Symbol]"||Object.prototype.toString.call(o)!=="[object Symbol]")return!1;var a=42;d[h]=a;for(h in d)return!1;if(typeof Object.keys=="function"&&Object.keys(d).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(d).length!==0)return!1;var p=Object.getOwnPropertySymbols(d);if(p.length!==1||p[0]!==h||!Object.prototype.propertyIsEnumerable.call(d,h))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var n=Object.getOwnPropertyDescriptor(d,h);if(n.value!==a||n.enumerable!==!0)return!1}return!0}),ws}function Gc(){return xs||(xs=!0,ks=Error),ks}function Yc(){return As||(As=!0,Ss=EvalError),Ss}function Jc(){return Ts||(Ts=!0,Es=RangeError),Es}function Xc(){return Ms||(Ms=!0,Is=ReferenceError),Is}function jo(){return Ps||(Ps=!0,Cs=SyntaxError),Cs}function hn(){return Ns||(Ns=!0,Os=TypeError),Os}function Zc(){return Us||(Us=!0,Rs=URIError),Rs}function ed(){if(Ls)return kn;Ls=!0;var d=typeof Symbol<"u"&&Symbol,h=Qc();return kn=function(){return typeof d!="function"||typeof Symbol!="function"||typeof d("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:h()},kn}function td(){if(qs)return xn;qs=!0;var d={__proto__:null,foo:{}},h=Object;return xn=function(){return{__proto__:d}.foo===d.foo&&!(d instanceof h)},xn}function nd(){if(js)return Sn;js=!0;var d="Function.prototype.bind called on incompatible ",h=Object.prototype.toString,o=Math.max,a="[object Function]",p=function(r,e){for(var s=[],i=0;i<r.length;i+=1)s[i]=r[i];for(var g=0;g<e.length;g+=1)s[g+r.length]=e[g];return s},n=function(r,e){for(var s=[],i=e,g=0;i<r.length;i+=1,g+=1)s[g]=r[i];return s},t=function(r,e){for(var s="",i=0;i<r.length;i+=1)s+=r[i],i+1<r.length&&(s+=e);return s};return Sn=function(r){var e=this;if(typeof e!="function"||h.apply(e)!==a)throw new TypeError(d+e);for(var s=n(arguments,1),i,g=function(){if(this instanceof i){var y=e.apply(this,p(s,arguments));return Object(y)===y?y:this}return e.apply(r,p(s,arguments))},m=o(0,e.length-s.length),l=[],u=0;u<m;u++)l[u]="$"+u;if(i=Function("binder","return function ("+t(l,",")+"){ return binder.apply(this,arguments); }")(g),e.prototype){var f=function(){};f.prototype=e.prototype,i.prototype=new f,f.prototype=null}return i},Sn}function hi(){if(Bs)return An;Bs=!0;var d=nd();return An=Function.prototype.bind||d,An}function rd(){if(Fs)return En;Fs=!0;var d=Function.prototype.call,h=Object.prototype.hasOwnProperty,o=hi();return En=o.call(d,h),En}function Xt(){if(Ds)return Tn;Ds=!0;var d,h=Gc(),o=Yc(),a=Jc(),p=Xc(),n=jo(),t=hn(),r=Zc(),e=Function,s=function(Z){try{return e('"use strict"; return ('+Z+").constructor;")()}catch{}},i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch{i=null}var g=function(){throw new t},m=i?(function(){try{return arguments.callee,g}catch{try{return i(arguments,"callee").get}catch{return g}}})():g,l=ed()(),u=td()(),f=Object.getPrototypeOf||(u?function(Z){return Z.__proto__}:null),y={},k=typeof Uint8Array>"u"||!f?d:f(Uint8Array),b={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?d:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?d:ArrayBuffer,"%ArrayIteratorPrototype%":l&&f?f([][Symbol.iterator]()):d,"%AsyncFromSyncIteratorPrototype%":d,"%AsyncFunction%":y,"%AsyncGenerator%":y,"%AsyncGeneratorFunction%":y,"%AsyncIteratorPrototype%":y,"%Atomics%":typeof Atomics>"u"?d:Atomics,"%BigInt%":typeof BigInt>"u"?d:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?d:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?d:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?d:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":h,"%eval%":eval,"%EvalError%":o,"%Float32Array%":typeof Float32Array>"u"?d:Float32Array,"%Float64Array%":typeof Float64Array>"u"?d:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?d:FinalizationRegistry,"%Function%":e,"%GeneratorFunction%":y,"%Int8Array%":typeof Int8Array>"u"?d:Int8Array,"%Int16Array%":typeof Int16Array>"u"?d:Int16Array,"%Int32Array%":typeof Int32Array>"u"?d:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":l&&f?f(f([][Symbol.iterator]())):d,"%JSON%":typeof JSON=="object"?JSON:d,"%Map%":typeof Map>"u"?d:Map,"%MapIteratorPrototype%":typeof Map>"u"||!l||!f?d:f(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?d:Promise,"%Proxy%":typeof Proxy>"u"?d:Proxy,"%RangeError%":a,"%ReferenceError%":p,"%Reflect%":typeof Reflect>"u"?d:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?d:Set,"%SetIteratorPrototype%":typeof Set>"u"||!l||!f?d:f(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?d:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":l&&f?f(""[Symbol.iterator]()):d,"%Symbol%":l?Symbol:d,"%SyntaxError%":n,"%ThrowTypeError%":m,"%TypedArray%":k,"%TypeError%":t,"%Uint8Array%":typeof Uint8Array>"u"?d:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?d:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?d:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?d:Uint32Array,"%URIError%":r,"%WeakMap%":typeof WeakMap>"u"?d:WeakMap,"%WeakRef%":typeof WeakRef>"u"?d:WeakRef,"%WeakSet%":typeof WeakSet>"u"?d:WeakSet};if(f)try{null.error}catch(Z){var _=f(f(Z));b["%Error.prototype%"]=_}var A=function Z(Y){var ie;if(Y==="%AsyncFunction%")ie=s("async function () {}");else if(Y==="%GeneratorFunction%")ie=s("function* () {}");else if(Y==="%AsyncGeneratorFunction%")ie=s("async function* () {}");else if(Y==="%AsyncGenerator%"){var W=Z("%AsyncGeneratorFunction%");W&&(ie=W.prototype)}else if(Y==="%AsyncIteratorPrototype%"){var ne=Z("%AsyncGenerator%");ne&&f&&(ie=f(ne.prototype))}return b[Y]=ie,ie},v={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},S=hi(),x=rd(),T=S.call(Function.call,Array.prototype.concat),C=S.call(Function.apply,Array.prototype.splice),P=S.call(Function.call,String.prototype.replace),B=S.call(Function.call,String.prototype.slice),I=S.call(Function.call,RegExp.prototype.exec),z=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,j=/\\(\\)?/g,F=function(Z){var Y=B(Z,0,1),ie=B(Z,-1);if(Y==="%"&&ie!=="%")throw new n("invalid intrinsic syntax, expected closing `%`");if(ie==="%"&&Y!=="%")throw new n("invalid intrinsic syntax, expected opening `%`");var W=[];return P(Z,z,function(ne,O,ee,Q){W[W.length]=ee?P(Q,j,"$1"):O||ne}),W},le=function(Z,Y){var ie=Z,W;if(x(v,ie)&&(W=v[ie],ie="%"+W[0]+"%"),x(b,ie)){var ne=b[ie];if(ne===y&&(ne=A(ie)),typeof ne>"u"&&!Y)throw new t("intrinsic "+Z+" exists, but is not available. Please file an issue!");return{alias:W,name:ie,value:ne}}throw new n("intrinsic "+Z+" does not exist!")};return Tn=function(Z,Y){if(typeof Z!="string"||Z.length===0)throw new t("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof Y!="boolean")throw new t('"allowMissing" argument must be a boolean');if(I(/^%?[^%]*%?$/,Z)===null)throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var ie=F(Z),W=ie.length>0?ie[0]:"",ne=le("%"+W+"%",Y),O=ne.name,ee=ne.value,Q=!1,q=ne.alias;q&&(W=q[0],C(ie,T([0,1],q)));for(var ve=1,L=!0;ve<ie.length;ve+=1){var N=ie[ve],se=B(N,0,1),V=B(N,-1);if((se==='"'||se==="'"||se==="`"||V==='"'||V==="'"||V==="`")&&se!==V)throw new n("property names with quotes must have matching quotes");if((N==="constructor"||!L)&&(Q=!0),W+="."+N,O="%"+W+"%",x(b,O))ee=b[O];else if(ee!=null){if(!(N in ee)){if(!Y)throw new t("base intrinsic for "+Z+" exists, but the property is not available.");return}if(i&&ve+1>=ie.length){var K=i(ee,N);L=!!K,L&&"get"in K&&!("originalValue"in K.get)?ee=K.get:ee=ee[N]}else L=x(ee,N),ee=ee[N];L&&!Q&&(b[O]=ee)}}return ee},Tn}function fi(){if(Ws)return In;Ws=!0;var d=Xt(),h=d("%Object.defineProperty%",!0)||!1;if(h)try{h({},"a",{value:1})}catch{h=!1}return In=h,In}function Bo(){if(zs)return Mn;zs=!0;var d=Xt(),h=d("%Object.getOwnPropertyDescriptor%",!0);if(h)try{h([],"length")}catch{h=null}return Mn=h,Mn}function sd(){if(Hs)return Cn;Hs=!0;var d=fi(),h=jo(),o=hn(),a=Bo();return Cn=function(p,n,t){if(!p||typeof p!="object"&&typeof p!="function")throw new o("`obj` must be an object or a function`");if(typeof n!="string"&&typeof n!="symbol")throw new o("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new o("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new o("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new o("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new o("`loose`, if provided, must be a boolean");var r=arguments.length>3?arguments[3]:null,e=arguments.length>4?arguments[4]:null,s=arguments.length>5?arguments[5]:null,i=arguments.length>6?arguments[6]:!1,g=!!a&&a(p,n);if(d)d(p,n,{configurable:s===null&&g?g.configurable:!s,enumerable:r===null&&g?g.enumerable:!r,value:t,writable:e===null&&g?g.writable:!e});else if(i||!r&&!e&&!s)p[n]=t;else throw new h("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Cn}function id(){if($s)return Pn;$s=!0;var d=fi(),h=function(){return!!d};return h.hasArrayLengthDefineBug=function(){if(!d)return null;try{return d([],"length",{value:1}).length!==1}catch{return!0}},Pn=h,Pn}function ad(){if(Ks)return On;Ks=!0;var d=Xt(),h=sd(),o=id()(),a=Bo(),p=hn(),n=d("%Math.floor%");return On=function(t,r){if(typeof t!="function")throw new p("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||n(r)!==r)throw new p("`length` must be a positive 32-bit integer");var e=arguments.length>2&&!!arguments[2],s=!0,i=!0;if("length"in t&&a){var g=a(t,"length");g&&!g.configurable&&(s=!1),g&&!g.writable&&(i=!1)}return(s||i||!e)&&(o?h(t,"length",r,!0,!0):h(t,"length",r)),t},On}function od(){if(Vs)return Vt;Vs=!0;var d=hi(),h=Xt(),o=ad(),a=hn(),p=h("%Function.prototype.apply%"),n=h("%Function.prototype.call%"),t=h("%Reflect.apply%",!0)||d.call(n,p),r=fi(),e=h("%Math.max%");Vt=function(i){if(typeof i!="function")throw new a("a function is required");var g=t(d,n,arguments);return o(g,1+e(0,i.length-(arguments.length-1)),!0)};var s=function(){return t(d,p,arguments)};return r?r(Vt,"apply",{value:s}):Vt.apply=s,Vt}function ld(){if(Qs)return Nn;Qs=!0;var d=Xt(),h=od(),o=h(d("String.prototype.indexOf"));return Nn=function(a,p){var n=d(a,!!p);return typeof n=="function"&&o(a,".prototype.")>-1?h(n):n},Nn}var ws,_s,ks,xs,Ss,As,Es,Ts,Is,Ms,Cs,Ps,Os,Ns,Rs,Us,kn,Ls,xn,qs,Sn,js,An,Bs,En,Fs,Tn,Ds,In,Ws,Mn,zs,Cn,Hs,Pn,$s,On,Ks,Vt,Vs,Nn,Qs,cd=tt(()=>{de(),pe(),ue(),ws={},_s=!1,ks={},xs=!1,Ss={},As=!1,Es={},Ts=!1,Is={},Ms=!1,Cs={},Ps=!1,Os={},Ns=!1,Rs={},Us=!1,kn={},Ls=!1,xn={},qs=!1,Sn={},js=!1,An={},Bs=!1,En={},Fs=!1,Tn={},Ds=!1,In={},Ws=!1,Mn={},zs=!1,Cn={},Hs=!1,Pn={},$s=!1,On={},Ks=!1,Vt={},Vs=!1,Nn={},Qs=!1});function mi(d){throw new Error("Node.js process "+d+" is not supported by JSPM core outside of Node.js")}function dd(){!Lt||!Rt||(Lt=!1,Rt.length?ut=Rt.concat(ut):dn=-1,ut.length&&Fo())}function Fo(){if(!Lt){var d=setTimeout(dd,0);Lt=!0;for(var h=ut.length;h;){for(Rt=ut,ut=[];++dn<h;)Rt&&Rt[dn].run();dn=-1,h=ut.length}Rt=null,Lt=!1,clearTimeout(d)}}function ud(d){var h=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)h[o-1]=arguments[o];ut.push(new Do(d,h)),ut.length===1&&!Lt&&setTimeout(Fo,0)}function Do(d,h){this.fun=d,this.array=h}function Ge(){}function pd(d){mi("_linkedBinding")}function hd(d){mi("dlopen")}function fd(){return[]}function md(){return[]}function gd(d,h){if(!d)throw new Error(h||"assertion error")}function bd(){return!1}function yd(){return bt.now()/1e3}function rr(d){var h=Math.floor((Date.now()-bt.now())*.001),o=bt.now()*.001,a=Math.floor(o)+h,p=Math.floor(o%1*1e9);return d&&(a=a-d[0],p=p-d[1],p<0&&(a--,p+=Rn)),[a,p]}function At(){return gi}function vd(d){return[]}var ut,Lt,Rt,dn,Ai,Ei,Ti,Ii,Mi,Ci,Pi,Oi,Ni,Ri,Ui,Li,qi,ji,Bi,Fi,Di,Wi,zi,Hi,$i,gn,Ki,Vi,Qi,Gi,Yi,Ji,Xi,Zi,ea,ta,na,ra,sa,ia,aa,oa,la,ca,da,ua,pa,ha,fa,ma,ga,bt,sr,Rn,ba,ya,va,wa,_a,ka,xa,Sa,Aa,Ea,Ta,gi,Wo=tt(()=>{de(),pe(),ue(),ut=[],Lt=!1,dn=-1,Do.prototype.run=function(){this.fun.apply(null,this.array)},Ai="browser",Ei="x64",Ti="browser",Ii={PATH:"/usr/bin",LANG:navigator.language+".UTF-8",PWD:"/",HOME:"/home",TMP:"/tmp"},Mi=["/usr/bin/node"],Ci=[],Pi="v16.8.0",Oi={},Ni=function(d,h){console.warn((h?h+": ":"")+d)},Ri=function(d){mi("binding")},Ui=function(d){return 0},Li=function(){return"/"},qi=function(d){},ji={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},Bi=Ge,Fi=[],Di={},Wi=!1,zi={},Hi=Ge,$i=Ge,gn=function(){return{}},Ki=gn,Vi=gn,Qi=Ge,Gi=Ge,Yi=Ge,Ji={},Xi={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},Zi=Ge,ea=Ge,ta=Ge,na=Ge,ra=Ge,sa=Ge,ia=Ge,aa=void 0,oa=void 0,la=void 0,ca=Ge,da=2,ua=1,pa="/bin/usr/node",ha=9229,fa="node",ma=[],ga=Ge,bt={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},bt.now===void 0&&(sr=Date.now(),bt.timing&&bt.timing.navigationStart&&(sr=bt.timing.navigationStart),bt.now=()=>Date.now()-sr),Rn=1e9,rr.bigint=function(d){var h=rr(d);return typeof BigInt>"u"?h[0]*Rn+h[1]:BigInt(h[0]*Rn)+BigInt(h[1])},ba=10,ya={},va=0,wa=At,_a=At,ka=At,xa=At,Sa=At,Aa=Ge,Ea=At,Ta=At,gi={version:Pi,versions:Oi,arch:Ei,platform:Ti,release:ji,_rawDebug:Bi,moduleLoadList:Fi,binding:Ri,_linkedBinding:pd,_events:ya,_eventsCount:va,_maxListeners:ba,on:At,addListener:wa,once:_a,off:ka,removeListener:xa,removeAllListeners:Sa,emit:Aa,prependListener:Ea,prependOnceListener:Ta,listeners:vd,domain:Di,_exiting:Wi,config:zi,dlopen:hd,uptime:yd,_getActiveRequests:fd,_getActiveHandles:md,reallyExit:Hi,_kill:$i,cpuUsage:gn,resourceUsage:Ki,memoryUsage:Vi,kill:Qi,exit:Gi,openStdin:Yi,allowedNodeEnvironmentFlags:Ji,assert:gd,features:Xi,_fatalExceptions:Zi,setUncaughtExceptionCaptureCallback:ea,hasUncaughtExceptionCaptureCallback:bd,emitWarning:Ni,nextTick:ud,_tickCallback:ta,_debugProcess:na,_debugEnd:ra,_startProfilerIdleNotifier:sa,_stopProfilerIdleNotifier:ia,stdout:aa,stdin:la,stderr:oa,abort:ca,umask:Ui,chdir:qi,cwd:Li,env:Ii,title:Ai,argv:Mi,execArgv:Ci,pid:da,ppid:ua,execPath:pa,debugPort:ha,hrtime:rr,argv0:fa,_preload_modules:ma,setSourceMapsEnabled:ga}});function wd(){if(Gs)return Un;Gs=!0;var d=gi;function h(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function o(n,t){for(var r="",e=0,s=-1,i=0,g,m=0;m<=n.length;++m){if(m<n.length)g=n.charCodeAt(m);else{if(g===47)break;g=47}if(g===47){if(!(s===m-1||i===1))if(s!==m-1&&i===2){if(r.length<2||e!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",e=0):(r=r.slice(0,l),e=r.length-1-r.lastIndexOf("/")),s=m,i=0;continue}}else if(r.length===2||r.length===1){r="",e=0,s=m,i=0;continue}}t&&(r.length>0?r+="/..":r="..",e=2)}else r.length>0?r+="/"+n.slice(s+1,m):r=n.slice(s+1,m),e=m-s-1;s=m,i=0}else g===46&&i!==-1?++i:i=-1}return r}function a(n,t){var r=t.dir||t.root,e=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+e:r+n+e:e}var p={resolve:function(){for(var n="",t=!1,r,e=arguments.length-1;e>=-1&&!t;e--){var s;e>=0?s=arguments[e]:(r===void 0&&(r=d.cwd()),s=r),h(s),s.length!==0&&(n=s+"/"+n,t=s.charCodeAt(0)===47)}return n=o(n,!t),t?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(n){if(h(n),n.length===0)return".";var t=n.charCodeAt(0)===47,r=n.charCodeAt(n.length-1)===47;return n=o(n,!t),n.length===0&&!t&&(n="."),n.length>0&&r&&(n+="/"),t?"/"+n:n},isAbsolute:function(n){return h(n),n.length>0&&n.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var n,t=0;t<arguments.length;++t){var r=arguments[t];h(r),r.length>0&&(n===void 0?n=r:n+="/"+r)}return n===void 0?".":p.normalize(n)},relative:function(n,t){if(h(n),h(t),n===t||(n=p.resolve(n),t=p.resolve(t),n===t))return"";for(var r=1;r<n.length&&n.charCodeAt(r)===47;++r);for(var e=n.length,s=e-r,i=1;i<t.length&&t.charCodeAt(i)===47;++i);for(var g=t.length,m=g-i,l=s<m?s:m,u=-1,f=0;f<=l;++f){if(f===l){if(m>l){if(t.charCodeAt(i+f)===47)return t.slice(i+f+1);if(f===0)return t.slice(i+f)}else s>l&&(n.charCodeAt(r+f)===47?u=f:f===0&&(u=0));break}var y=n.charCodeAt(r+f),k=t.charCodeAt(i+f);if(y!==k)break;y===47&&(u=f)}var b="";for(f=r+u+1;f<=e;++f)(f===e||n.charCodeAt(f)===47)&&(b.length===0?b+="..":b+="/..");return b.length>0?b+t.slice(i+u):(i+=u,t.charCodeAt(i)===47&&++i,t.slice(i))},_makeLong:function(n){return n},dirname:function(n){if(h(n),n.length===0)return".";for(var t=n.charCodeAt(0),r=t===47,e=-1,s=!0,i=n.length-1;i>=1;--i)if(t=n.charCodeAt(i),t===47){if(!s){e=i;break}}else s=!1;return e===-1?r?"/":".":r&&e===1?"//":n.slice(0,e)},basename:function(n,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');h(n);var r=0,e=-1,s=!0,i;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";var g=t.length-1,m=-1;for(i=n.length-1;i>=0;--i){var l=n.charCodeAt(i);if(l===47){if(!s){r=i+1;break}}else m===-1&&(s=!1,m=i+1),g>=0&&(l===t.charCodeAt(g)?--g===-1&&(e=i):(g=-1,e=m))}return r===e?e=m:e===-1&&(e=n.length),n.slice(r,e)}else{for(i=n.length-1;i>=0;--i)if(n.charCodeAt(i)===47){if(!s){r=i+1;break}}else e===-1&&(s=!1,e=i+1);return e===-1?"":n.slice(r,e)}},extname:function(n){h(n);for(var t=-1,r=0,e=-1,s=!0,i=0,g=n.length-1;g>=0;--g){var m=n.charCodeAt(g);if(m===47){if(!s){r=g+1;break}continue}e===-1&&(s=!1,e=g+1),m===46?t===-1?t=g:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||e===-1||i===0||i===1&&t===e-1&&t===r+1?"":n.slice(t,e)},format:function(n){if(n===null||typeof n!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return a("/",n)},parse:function(n){h(n);var t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;var r=n.charCodeAt(0),e=r===47,s;e?(t.root="/",s=1):s=0;for(var i=-1,g=0,m=-1,l=!0,u=n.length-1,f=0;u>=s;--u){if(r=n.charCodeAt(u),r===47){if(!l){g=u+1;break}continue}m===-1&&(l=!1,m=u+1),r===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||m===-1||f===0||f===1&&i===m-1&&i===g+1?m!==-1&&(g===0&&e?t.base=t.name=n.slice(1,m):t.base=t.name=n.slice(g,m)):(g===0&&e?(t.name=n.slice(1,i),t.base=n.slice(1,m)):(t.name=n.slice(g,i),t.base=n.slice(g,m)),t.ext=n.slice(i,m)),g>0?t.dir=n.slice(0,g-1):e&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};return p.posix=p,Un=p,Un}var Un,Gs,Ys,_d=tt(()=>{de(),pe(),ue(),Wo(),Un={},Gs=!1,Ys=wd()}),zo={};Gt(zo,{URL:()=>Zo,Url:()=>Qo,default:()=>Ye,fileURLToPath:()=>$o,format:()=>Go,parse:()=>Xo,pathToFileURL:()=>Ko,resolve:()=>Yo,resolveObject:()=>Jo});function kd(){if(Js)return Ln;Js=!0;var d=typeof Map=="function"&&Map.prototype,h=Object.getOwnPropertyDescriptor&&d?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,o=d&&h&&typeof h.get=="function"?h.get:null,a=d&&Map.prototype.forEach,p=typeof Set=="function"&&Set.prototype,n=Object.getOwnPropertyDescriptor&&p?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,t=p&&n&&typeof n.get=="function"?n.get:null,r=p&&Set.prototype.forEach,e=typeof WeakMap=="function"&&WeakMap.prototype,s=e?WeakMap.prototype.has:null,i=typeof WeakSet=="function"&&WeakSet.prototype,g=i?WeakSet.prototype.has:null,m=typeof WeakRef=="function"&&WeakRef.prototype,l=m?WeakRef.prototype.deref:null,u=Boolean.prototype.valueOf,f=Object.prototype.toString,y=Function.prototype.toString,k=String.prototype.match,b=String.prototype.slice,_=String.prototype.replace,A=String.prototype.toUpperCase,v=String.prototype.toLowerCase,S=RegExp.prototype.test,x=Array.prototype.concat,T=Array.prototype.join,C=Array.prototype.slice,P=Math.floor,B=typeof BigInt=="function"?BigInt.prototype.valueOf:null,I=Object.getOwnPropertySymbols,z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,j=typeof Symbol=="function"&&typeof Symbol.iterator=="object",F=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===j||!0)?Symbol.toStringTag:null,le=Object.prototype.propertyIsEnumerable,Z=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(J){return J.__proto__}:null);function Y(J,ae){if(J===1/0||J===-1/0||J!==J||J&&J>-1e3&&J<1e3||S.call(/e/,ae))return ae;var Ee=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof J=="number"){var Te=J<0?-P(-J):P(J);if(Te!==J){var Ie=String(Te),Ce=b.call(ae,Ie.length+1);return _.call(Ie,Ee,"$&_")+"."+_.call(_.call(Ce,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _.call(ae,Ee,"$&_")}var ie=Vo,W=ie.custom,ne=K(W)?W:null;Ln=function J(ae,Ee,Te,Ie){var Ce=Ee||{};if(oe(Ce,"quoteStyle")&&Ce.quoteStyle!=="single"&&Ce.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(oe(Ce,"maxStringLength")&&(typeof Ce.maxStringLength=="number"?Ce.maxStringLength<0&&Ce.maxStringLength!==1/0:Ce.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var st=oe(Ce,"customInspect")?Ce.customInspect:!0;if(typeof st!="boolean"&&st!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(oe(Ce,"indent")&&Ce.indent!==null&&Ce.indent!=="	"&&!(parseInt(Ce.indent,10)===Ce.indent&&Ce.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(oe(Ce,"numericSeparator")&&typeof Ce.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var it=Ce.numericSeparator;if(typeof ae>"u")return"undefined";if(ae===null)return"null";if(typeof ae=="boolean")return ae?"true":"false";if(typeof ae=="string")return ce(ae,Ce);if(typeof ae=="number"){if(ae===0)return 1/0/ae>0?"0":"-0";var Ve=String(ae);return it?Y(ae,Ve):Ve}if(typeof ae=="bigint"){var at=String(ae)+"n";return it?Y(ae,at):at}var Ft=typeof Ce.depth>"u"?5:Ce.depth;if(typeof Te>"u"&&(Te=0),Te>=Ft&&Ft>0&&typeof ae=="object")return Q(ae)?"[Array]":"[Object]";var ot=te(Ce,Te);if(typeof Ie>"u")Ie=[];else if(re(Ie,ae)>=0)return"[Circular]";function nt(lt,St,Ot){if(St&&(Ie=C.call(Ie),Ie.push(St)),Ot){var ct={depth:Ce.depth};return oe(Ce,"quoteStyle")&&(ct.quoteStyle=Ce.quoteStyle),J(lt,ct,Te+1,Ie)}return J(lt,Ce,Te+1,Ie)}if(typeof ae=="function"&&!ve(ae)){var fn=H(ae),Dt=xe(ae,nt);return"[Function"+(fn?": "+fn:" (anonymous)")+"]"+(Dt.length>0?" { "+T.call(Dt,", ")+" }":"")}if(K(ae)){var Zt=j?_.call(String(ae),/^(Symbol\(.*\))_[^)]*$/,"$1"):z.call(ae);return typeof ae=="object"&&!j?c(Zt):Zt}if(_e(ae)){for(var M="<"+v.call(String(ae.nodeName)),U=ae.attributes||[],ke=0;ke<U.length;ke++)M+=" "+U[ke].name+"="+O(ee(U[ke].value),"double",Ce);return M+=">",ae.childNodes&&ae.childNodes.length&&(M+="..."),M+="</"+v.call(String(ae.nodeName))+">",M}if(Q(ae)){if(ae.length===0)return"[]";var Se=xe(ae,nt);return ot&&!D(Se)?"["+he(Se,ot)+"]":"[ "+T.call(Se,", ")+" ]"}if(L(ae)){var Ae=xe(ae,nt);return!("cause"in Error.prototype)&&"cause"in ae&&!le.call(ae,"cause")?"{ ["+String(ae)+"] "+T.call(x.call("[cause]: "+nt(ae.cause),Ae),", ")+" }":Ae.length===0?"["+String(ae)+"]":"{ ["+String(ae)+"] "+T.call(Ae,", ")+" }"}if(typeof ae=="object"&&st){if(ne&&typeof ae[ne]=="function"&&ie)return ie(ae,{depth:Ft-Te});if(st!=="symbol"&&typeof ae.inspect=="function")return ae.inspect()}if(me(ae)){var ze=[];return a&&a.call(ae,function(lt,St){ze.push(nt(St,ae,!0)+" => "+nt(lt,ae))}),E("Map",o.call(ae),ze,ot)}if($(ae)){var Xe=[];return r&&r.call(ae,function(lt){Xe.push(nt(lt,ae))}),E("Set",t.call(ae),Xe,ot)}if(ge(ae))return w("WeakMap");if(ye(ae))return w("WeakSet");if(we(ae))return w("WeakRef");if(se(ae))return c(nt(Number(ae)));if(G(ae))return c(nt(B.call(ae)));if(V(ae))return c(u.call(ae));if(N(ae))return c(nt(String(ae)));if(typeof window<"u"&&ae===window)return"{ [object Window] }";if(typeof globalThis<"u"&&ae===globalThis||typeof qn<"u"&&ae===qn)return"{ [object globalThis] }";if(!q(ae)&&!ve(ae)){var rt=xe(ae,nt),en=Z?Z(ae)===Object.prototype:ae instanceof Object||ae.constructor===Object,tn=ae instanceof Object?"":"null prototype",nn=!en&&F&&Object(ae)===ae&&F in ae?b.call(R(ae),8,-1):tn?"Object":"",mn=en||typeof ae.constructor!="function"?"":ae.constructor.name?ae.constructor.name+" ":"",Pt=mn+(nn||tn?"["+T.call(x.call([],nn||[],tn||[]),": ")+"] ":"");return rt.length===0?Pt+"{}":ot?Pt+"{"+he(rt,ot)+"}":Pt+"{ "+T.call(rt,", ")+" }"}return String(ae)};function O(J,ae,Ee){var Te=(Ee.quoteStyle||ae)==="double"?'"':"'";return Te+J+Te}function ee(J){return _.call(String(J),/"/g,"&quot;")}function Q(J){return R(J)==="[object Array]"&&(!F||!(typeof J=="object"&&F in J))}function q(J){return R(J)==="[object Date]"&&(!F||!(typeof J=="object"&&F in J))}function ve(J){return R(J)==="[object RegExp]"&&(!F||!(typeof J=="object"&&F in J))}function L(J){return R(J)==="[object Error]"&&(!F||!(typeof J=="object"&&F in J))}function N(J){return R(J)==="[object String]"&&(!F||!(typeof J=="object"&&F in J))}function se(J){return R(J)==="[object Number]"&&(!F||!(typeof J=="object"&&F in J))}function V(J){return R(J)==="[object Boolean]"&&(!F||!(typeof J=="object"&&F in J))}function K(J){if(j)return J&&typeof J=="object"&&J instanceof Symbol;if(typeof J=="symbol")return!0;if(!J||typeof J!="object"||!z)return!1;try{return z.call(J),!0}catch{}return!1}function G(J){if(!J||typeof J!="object"||!B)return!1;try{return B.call(J),!0}catch{}return!1}var fe=Object.prototype.hasOwnProperty||function(J){return J in(this||qn)};function oe(J,ae){return fe.call(J,ae)}function R(J){return f.call(J)}function H(J){if(J.name)return J.name;var ae=k.call(y.call(J),/^function\s*([\w$]+)/);return ae?ae[1]:null}function re(J,ae){if(J.indexOf)return J.indexOf(ae);for(var Ee=0,Te=J.length;Ee<Te;Ee++)if(J[Ee]===ae)return Ee;return-1}function me(J){if(!o||!J||typeof J!="object")return!1;try{o.call(J);try{t.call(J)}catch{return!0}return J instanceof Map}catch{}return!1}function ge(J){if(!s||!J||typeof J!="object")return!1;try{s.call(J,s);try{g.call(J,g)}catch{return!0}return J instanceof WeakMap}catch{}return!1}function we(J){if(!l||!J||typeof J!="object")return!1;try{return l.call(J),!0}catch{}return!1}function $(J){if(!t||!J||typeof J!="object")return!1;try{t.call(J);try{o.call(J)}catch{return!0}return J instanceof Set}catch{}return!1}function ye(J){if(!g||!J||typeof J!="object")return!1;try{g.call(J,g);try{s.call(J,s)}catch{return!0}return J instanceof WeakSet}catch{}return!1}function _e(J){return!J||typeof J!="object"?!1:typeof HTMLElement<"u"&&J instanceof HTMLElement?!0:typeof J.nodeName=="string"&&typeof J.getAttribute=="function"}function ce(J,ae){if(J.length>ae.maxStringLength){var Ee=J.length-ae.maxStringLength,Te="... "+Ee+" more character"+(Ee>1?"s":"");return ce(b.call(J,0,ae.maxStringLength),ae)+Te}var Ie=_.call(_.call(J,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Me);return O(Ie,"single",ae)}function Me(J){var ae=J.charCodeAt(0),Ee={8:"b",9:"t",10:"n",12:"f",13:"r"}[ae];return Ee?"\\"+Ee:"\\x"+(ae<16?"0":"")+A.call(ae.toString(16))}function c(J){return"Object("+J+")"}function w(J){return J+" { ? }"}function E(J,ae,Ee,Te){var Ie=Te?he(Ee,Te):T.call(Ee,", ");return J+" ("+ae+") {"+Ie+"}"}function D(J){for(var ae=0;ae<J.length;ae++)if(re(J[ae],`
`)>=0)return!1;return!0}function te(J,ae){var Ee;if(J.indent==="	")Ee="	";else if(typeof J.indent=="number"&&J.indent>0)Ee=T.call(Array(J.indent+1)," ");else return null;return{base:Ee,prev:T.call(Array(ae+1),Ee)}}function he(J,ae){if(J.length===0)return"";var Ee=`
`+ae.prev+ae.base;return Ee+T.call(J,","+Ee)+`
`+ae.prev}function xe(J,ae){var Ee=Q(J),Te=[];if(Ee){Te.length=J.length;for(var Ie=0;Ie<J.length;Ie++)Te[Ie]=oe(J,Ie)?ae(J[Ie],J):""}var Ce=typeof I=="function"?I(J):[],st;if(j){st={};for(var it=0;it<Ce.length;it++)st["$"+Ce[it]]=Ce[it]}for(var Ve in J)oe(J,Ve)&&(Ee&&String(Number(Ve))===Ve&&Ve<J.length||j&&st["$"+Ve]instanceof Symbol||(S.call(/[^\w$]/,Ve)?Te.push(ae(Ve,J)+": "+ae(J[Ve],J)):Te.push(Ve+": "+ae(J[Ve],J))));if(typeof I=="function")for(var at=0;at<Ce.length;at++)le.call(J,Ce[at])&&Te.push("["+ae(Ce[at])+"]: "+ae(J[Ce[at]],J));return Te}return Ln}function xd(){if(Xs)return jn;Xs=!0;var d=Xt(),h=ld(),o=kd(),a=hn(),p=d("%WeakMap%",!0),n=d("%Map%",!0),t=h("WeakMap.prototype.get",!0),r=h("WeakMap.prototype.set",!0),e=h("WeakMap.prototype.has",!0),s=h("Map.prototype.get",!0),i=h("Map.prototype.set",!0),g=h("Map.prototype.has",!0),m=function(y,k){for(var b=y,_;(_=b.next)!==null;b=_)if(_.key===k)return b.next=_.next,_.next=y.next,y.next=_,_},l=function(y,k){var b=m(y,k);return b&&b.value},u=function(y,k,b){var _=m(y,k);_?_.value=b:y.next={key:k,next:y.next,value:b}},f=function(y,k){return!!m(y,k)};return jn=function(){var y,k,b,_={assert:function(A){if(!_.has(A))throw new a("Side channel does not contain "+o(A))},get:function(A){if(p&&A&&(typeof A=="object"||typeof A=="function")){if(y)return t(y,A)}else if(n){if(k)return s(k,A)}else if(b)return l(b,A)},has:function(A){if(p&&A&&(typeof A=="object"||typeof A=="function")){if(y)return e(y,A)}else if(n){if(k)return g(k,A)}else if(b)return f(b,A);return!1},set:function(A,v){p&&A&&(typeof A=="object"||typeof A=="function")?(y||(y=new p),r(y,A,v)):n?(k||(k=new n),i(k,A,v)):(b||(b={key:{},next:null}),u(b,A,v))}};return _},jn}function bi(){if(Zs)return Bn;Zs=!0;var d=String.prototype.replace,h=/%20/g,o={RFC1738:"RFC1738",RFC3986:"RFC3986"};return Bn={default:o.RFC3986,formatters:{RFC1738:function(a){return d.call(a,h,"+")},RFC3986:function(a){return String(a)}},RFC1738:o.RFC1738,RFC3986:o.RFC3986},Bn}function Ho(){if(ei)return Fn;ei=!0;var d=bi(),h=Object.prototype.hasOwnProperty,o=Array.isArray,a=(function(){for(var y=[],k=0;k<256;++k)y.push("%"+((k<16?"0":"")+k.toString(16)).toUpperCase());return y})(),p=function(y){for(;y.length>1;){var k=y.pop(),b=k.obj[k.prop];if(o(b)){for(var _=[],A=0;A<b.length;++A)typeof b[A]<"u"&&_.push(b[A]);k.obj[k.prop]=_}}},n=function(y,k){for(var b=k&&k.plainObjects?Object.create(null):{},_=0;_<y.length;++_)typeof y[_]<"u"&&(b[_]=y[_]);return b},t=function y(k,b,_){if(!b)return k;if(typeof b!="object"){if(o(k))k.push(b);else if(k&&typeof k=="object")(_&&(_.plainObjects||_.allowPrototypes)||!h.call(Object.prototype,b))&&(k[b]=!0);else return[k,b];return k}if(!k||typeof k!="object")return[k].concat(b);var A=k;return o(k)&&!o(b)&&(A=n(k,_)),o(k)&&o(b)?(b.forEach(function(v,S){if(h.call(k,S)){var x=k[S];x&&typeof x=="object"&&v&&typeof v=="object"?k[S]=y(x,v,_):k.push(v)}else k[S]=v}),k):Object.keys(b).reduce(function(v,S){var x=b[S];return h.call(v,S)?v[S]=y(v[S],x,_):v[S]=x,v},A)},r=function(y,k){return Object.keys(k).reduce(function(b,_){return b[_]=k[_],b},y)},e=function(y,k,b){var _=y.replace(/\+/g," ");if(b==="iso-8859-1")return _.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(_)}catch{return _}},s=1024,i=function(y,k,b,_,A){if(y.length===0)return y;var v=y;if(typeof y=="symbol"?v=Symbol.prototype.toString.call(y):typeof y!="string"&&(v=String(y)),b==="iso-8859-1")return escape(v).replace(/%u[0-9a-f]{4}/gi,function(I){return"%26%23"+parseInt(I.slice(2),16)+"%3B"});for(var S="",x=0;x<v.length;x+=s){for(var T=v.length>=s?v.slice(x,x+s):v,C=[],P=0;P<T.length;++P){var B=T.charCodeAt(P);if(B===45||B===46||B===95||B===126||B>=48&&B<=57||B>=65&&B<=90||B>=97&&B<=122||A===d.RFC1738&&(B===40||B===41)){C[C.length]=T.charAt(P);continue}if(B<128){C[C.length]=a[B];continue}if(B<2048){C[C.length]=a[192|B>>6]+a[128|B&63];continue}if(B<55296||B>=57344){C[C.length]=a[224|B>>12]+a[128|B>>6&63]+a[128|B&63];continue}P+=1,B=65536+((B&1023)<<10|T.charCodeAt(P)&1023),C[C.length]=a[240|B>>18]+a[128|B>>12&63]+a[128|B>>6&63]+a[128|B&63]}S+=C.join("")}return S},g=function(y){for(var k=[{obj:{o:y},prop:"o"}],b=[],_=0;_<k.length;++_)for(var A=k[_],v=A.obj[A.prop],S=Object.keys(v),x=0;x<S.length;++x){var T=S[x],C=v[T];typeof C=="object"&&C!==null&&b.indexOf(C)===-1&&(k.push({obj:v,prop:T}),b.push(C))}return p(k),y},m=function(y){return Object.prototype.toString.call(y)==="[object RegExp]"},l=function(y){return!y||typeof y!="object"?!1:!!(y.constructor&&y.constructor.isBuffer&&y.constructor.isBuffer(y))},u=function(y,k){return[].concat(y,k)},f=function(y,k){if(o(y)){for(var b=[],_=0;_<y.length;_+=1)b.push(k(y[_]));return b}return k(y)};return Fn={arrayToObject:n,assign:r,combine:u,compact:g,decode:e,encode:i,isBuffer:l,isRegExp:m,maybeMap:f,merge:t},Fn}function Sd(){if(ti)return Dn;ti=!0;var d=xd(),h=Ho(),o=bi(),a=Object.prototype.hasOwnProperty,p={brackets:function(f){return f+"[]"},comma:"comma",indices:function(f,y){return f+"["+y+"]"},repeat:function(f){return f}},n=Array.isArray,t=Array.prototype.push,r=function(f,y){t.apply(f,n(y)?y:[y])},e=Date.prototype.toISOString,s=o.default,i={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:h.encode,encodeValuesOnly:!1,format:s,formatter:o.formatters[s],indices:!1,serializeDate:function(f){return e.call(f)},skipNulls:!1,strictNullHandling:!1},g=function(f){return typeof f=="string"||typeof f=="number"||typeof f=="boolean"||typeof f=="symbol"||typeof f=="bigint"},m={},l=function f(y,k,b,_,A,v,S,x,T,C,P,B,I,z,j,F,le,Z){for(var Y=y,ie=Z,W=0,ne=!1;(ie=ie.get(m))!==void 0&&!ne;){var O=ie.get(y);if(W+=1,typeof O<"u"){if(O===W)throw new RangeError("Cyclic object value");ne=!0}typeof ie.get(m)>"u"&&(W=0)}if(typeof C=="function"?Y=C(k,Y):Y instanceof Date?Y=I(Y):b==="comma"&&n(Y)&&(Y=h.maybeMap(Y,function(R){return R instanceof Date?I(R):R})),Y===null){if(v)return T&&!F?T(k,i.encoder,le,"key",z):k;Y=""}if(g(Y)||h.isBuffer(Y)){if(T){var ee=F?k:T(k,i.encoder,le,"key",z);return[j(ee)+"="+j(T(Y,i.encoder,le,"value",z))]}return[j(k)+"="+j(String(Y))]}var Q=[];if(typeof Y>"u")return Q;var q;if(b==="comma"&&n(Y))F&&T&&(Y=h.maybeMap(Y,T)),q=[{value:Y.length>0?Y.join(",")||null:void 0}];else if(n(C))q=C;else{var ve=Object.keys(Y);q=P?ve.sort(P):ve}var L=x?k.replace(/\./g,"%2E"):k,N=_&&n(Y)&&Y.length===1?L+"[]":L;if(A&&n(Y)&&Y.length===0)return N+"[]";for(var se=0;se<q.length;++se){var V=q[se],K=typeof V=="object"&&typeof V.value<"u"?V.value:Y[V];if(!(S&&K===null)){var G=B&&x?V.replace(/\./g,"%2E"):V,fe=n(Y)?typeof b=="function"?b(N,G):N:N+(B?"."+G:"["+G+"]");Z.set(y,W);var oe=d();oe.set(m,Z),r(Q,f(K,fe,b,_,A,v,S,x,b==="comma"&&F&&n(Y)?null:T,C,P,B,I,z,j,F,le,oe))}}return Q},u=function(f){if(!f)return i;if(typeof f.allowEmptyArrays<"u"&&typeof f.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof f.encodeDotInKeys<"u"&&typeof f.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(f.encoder!==null&&typeof f.encoder<"u"&&typeof f.encoder!="function")throw new TypeError("Encoder has to be a function.");var y=f.charset||i.charset;if(typeof f.charset<"u"&&f.charset!=="utf-8"&&f.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var k=o.default;if(typeof f.format<"u"){if(!a.call(o.formatters,f.format))throw new TypeError("Unknown format option provided.");k=f.format}var b=o.formatters[k],_=i.filter;(typeof f.filter=="function"||n(f.filter))&&(_=f.filter);var A;if(f.arrayFormat in p?A=f.arrayFormat:"indices"in f?A=f.indices?"indices":"repeat":A=i.arrayFormat,"commaRoundTrip"in f&&typeof f.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var v=typeof f.allowDots>"u"?f.encodeDotInKeys===!0?!0:i.allowDots:!!f.allowDots;return{addQueryPrefix:typeof f.addQueryPrefix=="boolean"?f.addQueryPrefix:i.addQueryPrefix,allowDots:v,allowEmptyArrays:typeof f.allowEmptyArrays=="boolean"?!!f.allowEmptyArrays:i.allowEmptyArrays,arrayFormat:A,charset:y,charsetSentinel:typeof f.charsetSentinel=="boolean"?f.charsetSentinel:i.charsetSentinel,commaRoundTrip:f.commaRoundTrip,delimiter:typeof f.delimiter>"u"?i.delimiter:f.delimiter,encode:typeof f.encode=="boolean"?f.encode:i.encode,encodeDotInKeys:typeof f.encodeDotInKeys=="boolean"?f.encodeDotInKeys:i.encodeDotInKeys,encoder:typeof f.encoder=="function"?f.encoder:i.encoder,encodeValuesOnly:typeof f.encodeValuesOnly=="boolean"?f.encodeValuesOnly:i.encodeValuesOnly,filter:_,format:k,formatter:b,serializeDate:typeof f.serializeDate=="function"?f.serializeDate:i.serializeDate,skipNulls:typeof f.skipNulls=="boolean"?f.skipNulls:i.skipNulls,sort:typeof f.sort=="function"?f.sort:null,strictNullHandling:typeof f.strictNullHandling=="boolean"?f.strictNullHandling:i.strictNullHandling}};return Dn=function(f,y){var k=f,b=u(y),_,A;typeof b.filter=="function"?(A=b.filter,k=A("",k)):n(b.filter)&&(A=b.filter,_=A);var v=[];if(typeof k!="object"||k===null)return"";var S=p[b.arrayFormat],x=S==="comma"&&b.commaRoundTrip;_||(_=Object.keys(k)),b.sort&&_.sort(b.sort);for(var T=d(),C=0;C<_.length;++C){var P=_[C];b.skipNulls&&k[P]===null||r(v,l(k[P],P,S,x,b.allowEmptyArrays,b.strictNullHandling,b.skipNulls,b.encodeDotInKeys,b.encode?b.encoder:null,b.filter,b.sort,b.allowDots,b.serializeDate,b.format,b.formatter,b.encodeValuesOnly,b.charset,T))}var B=v.join(b.delimiter),I=b.addQueryPrefix===!0?"?":"";return b.charsetSentinel&&(b.charset==="iso-8859-1"?I+="utf8=%26%2310003%3B&":I+="utf8=%E2%9C%93&"),B.length>0?I+B:""},Dn}function Ad(){if(ni)return Wn;ni=!0;var d=Ho(),h=Object.prototype.hasOwnProperty,o=Array.isArray,a={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:d.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1},p=function(m){return m.replace(/&#(\d+);/g,function(l,u){return String.fromCharCode(parseInt(u,10))})},n=function(m,l){return m&&typeof m=="string"&&l.comma&&m.indexOf(",")>-1?m.split(","):m},t="utf8=%26%2310003%3B",r="utf8=%E2%9C%93",e=function(m,l){var u={__proto__:null},f=l.ignoreQueryPrefix?m.replace(/^\?/,""):m;f=f.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var y=l.parameterLimit===1/0?void 0:l.parameterLimit,k=f.split(l.delimiter,y),b=-1,_,A=l.charset;if(l.charsetSentinel)for(_=0;_<k.length;++_)k[_].indexOf("utf8=")===0&&(k[_]===r?A="utf-8":k[_]===t&&(A="iso-8859-1"),b=_,_=k.length);for(_=0;_<k.length;++_)if(_!==b){var v=k[_],S=v.indexOf("]="),x=S===-1?v.indexOf("="):S+1,T,C;x===-1?(T=l.decoder(v,a.decoder,A,"key"),C=l.strictNullHandling?null:""):(T=l.decoder(v.slice(0,x),a.decoder,A,"key"),C=d.maybeMap(n(v.slice(x+1),l),function(B){return l.decoder(B,a.decoder,A,"value")})),C&&l.interpretNumericEntities&&A==="iso-8859-1"&&(C=p(C)),v.indexOf("[]=")>-1&&(C=o(C)?[C]:C);var P=h.call(u,T);P&&l.duplicates==="combine"?u[T]=d.combine(u[T],C):(!P||l.duplicates==="last")&&(u[T]=C)}return u},s=function(m,l,u,f){for(var y=f?l:n(l,u),k=m.length-1;k>=0;--k){var b,_=m[k];if(_==="[]"&&u.parseArrays)b=u.allowEmptyArrays&&(y===""||u.strictNullHandling&&y===null)?[]:[].concat(y);else{b=u.plainObjects?Object.create(null):{};var A=_.charAt(0)==="["&&_.charAt(_.length-1)==="]"?_.slice(1,-1):_,v=u.decodeDotInKeys?A.replace(/%2E/g,"."):A,S=parseInt(v,10);!u.parseArrays&&v===""?b={0:y}:!isNaN(S)&&_!==v&&String(S)===v&&S>=0&&u.parseArrays&&S<=u.arrayLimit?(b=[],b[S]=y):v!=="__proto__"&&(b[v]=y)}y=b}return y},i=function(m,l,u,f){if(m){var y=u.allowDots?m.replace(/\.([^.[]+)/g,"[$1]"):m,k=/(\[[^[\]]*])/,b=/(\[[^[\]]*])/g,_=u.depth>0&&k.exec(y),A=_?y.slice(0,_.index):y,v=[];if(A){if(!u.plainObjects&&h.call(Object.prototype,A)&&!u.allowPrototypes)return;v.push(A)}for(var S=0;u.depth>0&&(_=b.exec(y))!==null&&S<u.depth;){if(S+=1,!u.plainObjects&&h.call(Object.prototype,_[1].slice(1,-1))&&!u.allowPrototypes)return;v.push(_[1])}if(_){if(u.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+u.depth+" and strictDepth is true");v.push("["+y.slice(_.index)+"]")}return s(v,l,u,f)}},g=function(m){if(!m)return a;if(typeof m.allowEmptyArrays<"u"&&typeof m.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof m.decodeDotInKeys<"u"&&typeof m.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(m.decoder!==null&&typeof m.decoder<"u"&&typeof m.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof m.charset<"u"&&m.charset!=="utf-8"&&m.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var l=typeof m.charset>"u"?a.charset:m.charset,u=typeof m.duplicates>"u"?a.duplicates:m.duplicates;if(u!=="combine"&&u!=="first"&&u!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var f=typeof m.allowDots>"u"?m.decodeDotInKeys===!0?!0:a.allowDots:!!m.allowDots;return{allowDots:f,allowEmptyArrays:typeof m.allowEmptyArrays=="boolean"?!!m.allowEmptyArrays:a.allowEmptyArrays,allowPrototypes:typeof m.allowPrototypes=="boolean"?m.allowPrototypes:a.allowPrototypes,allowSparse:typeof m.allowSparse=="boolean"?m.allowSparse:a.allowSparse,arrayLimit:typeof m.arrayLimit=="number"?m.arrayLimit:a.arrayLimit,charset:l,charsetSentinel:typeof m.charsetSentinel=="boolean"?m.charsetSentinel:a.charsetSentinel,comma:typeof m.comma=="boolean"?m.comma:a.comma,decodeDotInKeys:typeof m.decodeDotInKeys=="boolean"?m.decodeDotInKeys:a.decodeDotInKeys,decoder:typeof m.decoder=="function"?m.decoder:a.decoder,delimiter:typeof m.delimiter=="string"||d.isRegExp(m.delimiter)?m.delimiter:a.delimiter,depth:typeof m.depth=="number"||m.depth===!1?+m.depth:a.depth,duplicates:u,ignoreQueryPrefix:m.ignoreQueryPrefix===!0,interpretNumericEntities:typeof m.interpretNumericEntities=="boolean"?m.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:typeof m.parameterLimit=="number"?m.parameterLimit:a.parameterLimit,parseArrays:m.parseArrays!==!1,plainObjects:typeof m.plainObjects=="boolean"?m.plainObjects:a.plainObjects,strictDepth:typeof m.strictDepth=="boolean"?!!m.strictDepth:a.strictDepth,strictNullHandling:typeof m.strictNullHandling=="boolean"?m.strictNullHandling:a.strictNullHandling}};return Wn=function(m,l){var u=g(l);if(m===""||m===null||typeof m>"u")return u.plainObjects?Object.create(null):{};for(var f=typeof m=="string"?e(m,u):m,y=u.plainObjects?Object.create(null):{},k=Object.keys(f),b=0;b<k.length;++b){var _=k[b],A=i(_,f[_],u,typeof m=="string");y=d.merge(y,A,u)}return u.allowSparse===!0?y:d.compact(y)},Wn}function Ed(){if(ri)return zn;ri=!0;var d=Sd(),h=Ad(),o=bi();return zn={formats:o,parse:h,stringify:d},zn}function Td(){if(si)return It;si=!0;var d=Tt;function h(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var o=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,p=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,n=["<",">",'"',"`"," ","\r",`
`,"	"],t=["{","}","|","\\","^","`"].concat(n),r=["'"].concat(t),e=["%","/","?",";","#"].concat(r),s=["/","?","#"],i=255,g=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,l={javascript:!0,"javascript:":!0},u={javascript:!0,"javascript:":!0},f={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=Ed();function k(v,S,x){if(v&&typeof v=="object"&&v instanceof h)return v;var T=new h;return T.parse(v,S,x),T}h.prototype.parse=function(v,S,x){if(typeof v!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof v);var T=v.indexOf("?"),C=T!==-1&&T<v.indexOf("#")?"?":"#",P=v.split(C),B=/\\/g;P[0]=P[0].replace(B,"/"),v=P.join(C);var I=v;if(I=I.trim(),!x&&v.split("#").length===1){var z=p.exec(I);if(z)return this.path=I,this.href=I,this.pathname=z[1],z[2]?(this.search=z[2],S?this.query=y.parse(this.search.substr(1)):this.query=this.search.substr(1)):S&&(this.search="",this.query={}),this}var j=o.exec(I);if(j){j=j[0];var F=j.toLowerCase();this.protocol=F,I=I.substr(j.length)}if(x||j||I.match(/^\/\/[^@/]+@[^@/]+/)){var le=I.substr(0,2)==="//";le&&!(j&&u[j])&&(I=I.substr(2),this.slashes=!0)}if(!u[j]&&(le||j&&!f[j])){for(var Z=-1,Y=0;Y<s.length;Y++){var ie=I.indexOf(s[Y]);ie!==-1&&(Z===-1||ie<Z)&&(Z=ie)}var W,ne;Z===-1?ne=I.lastIndexOf("@"):ne=I.lastIndexOf("@",Z),ne!==-1&&(W=I.slice(0,ne),I=I.slice(ne+1),this.auth=decodeURIComponent(W)),Z=-1;for(var Y=0;Y<e.length;Y++){var ie=I.indexOf(e[Y]);ie!==-1&&(Z===-1||ie<Z)&&(Z=ie)}Z===-1&&(Z=I.length),this.host=I.slice(0,Z),I=I.slice(Z),this.parseHost(),this.hostname=this.hostname||"";var O=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!O)for(var ee=this.hostname.split(/\./),Y=0,Q=ee.length;Y<Q;Y++){var q=ee[Y];if(q&&!q.match(g)){for(var ve="",L=0,N=q.length;L<N;L++)q.charCodeAt(L)>127?ve+="x":ve+=q[L];if(!ve.match(g)){var se=ee.slice(0,Y),V=ee.slice(Y+1),K=q.match(m);K&&(se.push(K[1]),V.unshift(K[2])),V.length&&(I="/"+V.join(".")+I),this.hostname=se.join(".");break}}}this.hostname.length>i?this.hostname="":this.hostname=this.hostname.toLowerCase(),O||(this.hostname=d.toASCII(this.hostname));var G=this.port?":"+this.port:"",fe=this.hostname||"";this.host=fe+G,this.href+=this.host,O&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),I[0]!=="/"&&(I="/"+I))}if(!l[F])for(var Y=0,Q=r.length;Y<Q;Y++){var oe=r[Y];if(I.indexOf(oe)!==-1){var R=encodeURIComponent(oe);R===oe&&(R=escape(oe)),I=I.split(oe).join(R)}}var H=I.indexOf("#");H!==-1&&(this.hash=I.substr(H),I=I.slice(0,H));var re=I.indexOf("?");if(re!==-1?(this.search=I.substr(re),this.query=I.substr(re+1),S&&(this.query=y.parse(this.query)),I=I.slice(0,re)):S&&(this.search="",this.query={}),I&&(this.pathname=I),f[F]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var G=this.pathname||"",me=this.search||"";this.path=G+me}return this.href=this.format(),this};function b(v){return typeof v=="string"&&(v=k(v)),v instanceof h?v.format():h.prototype.format.call(v)}h.prototype.format=function(){var v=this.auth||"";v&&(v=encodeURIComponent(v),v=v.replace(/%3A/i,":"),v+="@");var S=this.protocol||"",x=this.pathname||"",T=this.hash||"",C=!1,P="";this.host?C=v+this.host:this.hostname&&(C=v+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(C+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(P=y.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var B=this.search||P&&"?"+P||"";return S&&S.substr(-1)!==":"&&(S+=":"),this.slashes||(!S||f[S])&&C!==!1?(C="//"+(C||""),x&&x.charAt(0)!=="/"&&(x="/"+x)):C||(C=""),T&&T.charAt(0)!=="#"&&(T="#"+T),B&&B.charAt(0)!=="?"&&(B="?"+B),x=x.replace(/[?#]/g,function(I){return encodeURIComponent(I)}),B=B.replace("#","%23"),S+C+x+B+T};function _(v,S){return k(v,!1,!0).resolve(S)}h.prototype.resolve=function(v){return this.resolveObject(k(v,!1,!0)).format()};function A(v,S){return v?k(v,!1,!0).resolveObject(S):S}return h.prototype.resolveObject=function(v){if(typeof v=="string"){var S=new h;S.parse(v,!1,!0),v=S}for(var x=new h,T=Object.keys(this),C=0;C<T.length;C++){var P=T[C];x[P]=this[P]}if(x.hash=v.hash,v.href==="")return x.href=x.format(),x;if(v.slashes&&!v.protocol){for(var B=Object.keys(v),I=0;I<B.length;I++){var z=B[I];z!=="protocol"&&(x[z]=v[z])}return f[x.protocol]&&x.hostname&&!x.pathname&&(x.pathname="/",x.path=x.pathname),x.href=x.format(),x}if(v.protocol&&v.protocol!==x.protocol){if(!f[v.protocol]){for(var j=Object.keys(v),F=0;F<j.length;F++){var le=j[F];x[le]=v[le]}return x.href=x.format(),x}if(x.protocol=v.protocol,!v.host&&!u[v.protocol]){for(var Q=(v.pathname||"").split("/");Q.length&&!(v.host=Q.shift()););v.host||(v.host=""),v.hostname||(v.hostname=""),Q[0]!==""&&Q.unshift(""),Q.length<2&&Q.unshift(""),x.pathname=Q.join("/")}else x.pathname=v.pathname;if(x.search=v.search,x.query=v.query,x.host=v.host||"",x.auth=v.auth,x.hostname=v.hostname||v.host,x.port=v.port,x.pathname||x.search){var Z=x.pathname||"",Y=x.search||"";x.path=Z+Y}return x.slashes=x.slashes||v.slashes,x.href=x.format(),x}var ie=x.pathname&&x.pathname.charAt(0)==="/",W=v.host||v.pathname&&v.pathname.charAt(0)==="/",ne=W||ie||x.host&&v.pathname,O=ne,ee=x.pathname&&x.pathname.split("/")||[],Q=v.pathname&&v.pathname.split("/")||[],q=x.protocol&&!f[x.protocol];if(q&&(x.hostname="",x.port=null,x.host&&(ee[0]===""?ee[0]=x.host:ee.unshift(x.host)),x.host="",v.protocol&&(v.hostname=null,v.port=null,v.host&&(Q[0]===""?Q[0]=v.host:Q.unshift(v.host)),v.host=null),ne=ne&&(Q[0]===""||ee[0]==="")),W)x.host=v.host||v.host===""?v.host:x.host,x.hostname=v.hostname||v.hostname===""?v.hostname:x.hostname,x.search=v.search,x.query=v.query,ee=Q;else if(Q.length)ee||(ee=[]),ee.pop(),ee=ee.concat(Q),x.search=v.search,x.query=v.query;else if(v.search!=null){if(q){x.host=ee.shift(),x.hostname=x.host;var ve=x.host&&x.host.indexOf("@")>0?x.host.split("@"):!1;ve&&(x.auth=ve.shift(),x.hostname=ve.shift(),x.host=x.hostname)}return x.search=v.search,x.query=v.query,(x.pathname!==null||x.search!==null)&&(x.path=(x.pathname?x.pathname:"")+(x.search?x.search:"")),x.href=x.format(),x}if(!ee.length)return x.pathname=null,x.search?x.path="/"+x.search:x.path=null,x.href=x.format(),x;for(var L=ee.slice(-1)[0],N=(x.host||v.host||ee.length>1)&&(L==="."||L==="..")||L==="",se=0,V=ee.length;V>=0;V--)L=ee[V],L==="."?ee.splice(V,1):L===".."?(ee.splice(V,1),se++):se&&(ee.splice(V,1),se--);if(!ne&&!O)for(;se--;se)ee.unshift("..");ne&&ee[0]!==""&&(!ee[0]||ee[0].charAt(0)!=="/")&&ee.unshift(""),N&&ee.join("/").substr(-1)!=="/"&&ee.push("");var K=ee[0]===""||ee[0]&&ee[0].charAt(0)==="/";if(q){x.hostname=K?"":ee.length?ee.shift():"",x.host=x.hostname;var ve=x.host&&x.host.indexOf("@")>0?x.host.split("@"):!1;ve&&(x.auth=ve.shift(),x.hostname=ve.shift(),x.host=x.hostname)}return ne=ne||x.host&&ee.length,ne&&!K&&ee.unshift(""),ee.length>0?x.pathname=ee.join("/"):(x.pathname=null,x.path=null),(x.pathname!==null||x.search!==null)&&(x.path=(x.pathname?x.pathname:"")+(x.search?x.search:"")),x.auth=v.auth||x.auth,x.slashes=x.slashes||v.slashes,x.href=x.format(),x},h.prototype.parseHost=function(){var v=this.host,S=a.exec(v);S&&(S=S[0],S!==":"&&(this.port=S.substr(1)),v=v.substr(0,v.length-S.length)),v&&(this.hostname=v)},It.parse=k,It.resolve=_,It.resolveObject=A,It.format=b,It.Url=h,It}function $o(d){if(typeof d=="string")d=new URL(d);else if(!(d instanceof URL))throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");if(d.protocol!=="file:")throw new Deno.errors.InvalidData("invalid url scheme");return Kn?Id(d):Md(d)}function Id(d){let h=d.hostname,o=d.pathname;for(let a=0;a<o.length;a++)if(o[a]==="%"){let p=o.codePointAt(a+2)||32;if(o[a+1]==="2"&&p===102||o[a+1]==="5"&&p===99)throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")}if(o=o.replace(sl,"\\"),o=decodeURIComponent(o),h!=="")return`\\\\${h}${o}`;{let a=o.codePointAt(1)|32,p=o[2];if(a<nl||a>rl||p!==":")throw new Deno.errors.InvalidData("file url path must be absolute");return o.slice(1)}}function Md(d){if(d.hostname!=="")throw new Deno.errors.InvalidData("invalid file url hostname");let h=d.pathname;for(let o=0;o<h.length;o++)if(h[o]==="%"){let a=h.codePointAt(o+2)||32;if(h[o+1]==="2"&&a===102)throw new Deno.errors.InvalidData("must not include encoded / characters")}return decodeURIComponent(h)}function Ko(d){let h=Ys.resolve(d),o=d.charCodeAt(d.length-1);(o===tl||Kn&&o===el)&&h[h.length-1]!==Ys.sep&&(h+="/");let a=new URL("file://");return h.includes("%")&&(h=h.replace(il,"%25")),!Kn&&h.includes("\\")&&(h=h.replace(al,"%5C")),h.includes(`
`)&&(h=h.replace(ol,"%0A")),h.includes("\r")&&(h=h.replace(ll,"%0D")),h.includes("	")&&(h=h.replace(cl,"%09")),a.pathname=h,a}var Vo,Ln,Js,qn,jn,Xs,Bn,Zs,Fn,ei,Dn,ti,Wn,ni,zn,ri,It,si,Ye,Ia,Qo,Go,Yo,Jo,Xo,Zo,el,tl,nl,rl,Kn,sl,il,al,ol,ll,cl,Cd=tt(()=>{de(),pe(),ue(),Vc(),cd(),_d(),Wo(),Vo=Object.freeze(Object.create(null)),Ln={},Js=!1,qn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:global,jn={},Xs=!1,Bn={},Zs=!1,Fn={},ei=!1,Dn={},ti=!1,Wn={},ni=!1,zn={},ri=!1,It={},si=!1,Ye=Td(),Ye.parse,Ye.resolve,Ye.resolveObject,Ye.format,Ye.Url,Ia=typeof Deno<"u"?Deno.build.os==="windows"?"win32":Deno.build.os:void 0,Ye.URL=typeof URL<"u"?URL:null,Ye.pathToFileURL=Ko,Ye.fileURLToPath=$o,Qo=Ye.Url,Go=Ye.format,Yo=Ye.resolve,Jo=Ye.resolveObject,Xo=Ye.parse,Zo=Ye.URL,el=92,tl=47,nl=97,rl=122,Kn=Ia==="win32",sl=/\//g,il=/%/g,al=/\\/g,ol=/\n/g,ll=/\r/g,cl=/\t/g}),Pd=be((d,h)=>{de(),pe(),ue(),h.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}}),yi=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0}),d.BufferedDuplex=void 0,d.writev=a;var h=Bt(),o=(Ke(),Re($e));function a(n,t){let r=new Array(n.length);for(let e=0;e<n.length;e++)typeof n[e].chunk=="string"?r[e]=o.Buffer.from(n[e].chunk,"utf8"):r[e]=n[e].chunk;this._write(o.Buffer.concat(r),"binary",t)}var p=class extends h.Duplex{socket;proxy;isSocketOpen;writeQueue;constructor(n,t,r){super({objectMode:!0}),this.proxy=t,this.socket=r,this.writeQueue=[],n.objectMode||(this._writev=a.bind(this)),this.isSocketOpen=!1,this.proxy.on("data",e=>{!this.destroyed&&this.readable&&this.push(e)})}_read(n){this.proxy.read(n)}_write(n,t,r){this.isSocketOpen?this.writeToProxy(n,t,r):this.writeQueue.push({chunk:n,encoding:t,cb:r})}_final(n){this.writeQueue=[],this.proxy.end(n)}_destroy(n,t){this.writeQueue=[],this.proxy.destroy(),t(n)}socketReady(){this.emit("connect"),this.isSocketOpen=!0,this.processWriteQueue()}writeToProxy(n,t,r){this.proxy.write(n,t)===!1?this.proxy.once("drain",r):r()}processWriteQueue(){for(;this.writeQueue.length>0;){let{chunk:n,encoding:t,cb:r}=this.writeQueue.shift();this.writeToProxy(n,t,r)}}};d.BufferedDuplex=p}),bn=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(d,"__esModule",{value:!0}),d.streamBuilder=d.browserStreamBuilder=void 0;var o=(Ke(),Re($e)),a=h(Pd()),p=h(wt()),n=Bt(),t=h(Zn()),r=yi(),e=(0,p.default)("mqttjs:ws"),s=["rejectUnauthorized","ca","cert","key","pfx","passphrase"];function i(k,b){let _=`${k.protocol}://${k.hostname}:${k.port}${k.path}`;return typeof k.transformWsUrl=="function"&&(_=k.transformWsUrl(_,k,b)),_}function g(k){let b=k;return k.port||(k.protocol==="wss"?b.port=443:b.port=80),k.path||(b.path="/"),k.wsOptions||(b.wsOptions={}),!t.default&&!k.forceNativeWebSocket&&k.protocol==="wss"&&s.forEach(_=>{Object.prototype.hasOwnProperty.call(k,_)&&!Object.prototype.hasOwnProperty.call(k.wsOptions,_)&&(b.wsOptions[_]=k[_])}),b}function m(k){let b=g(k);if(b.hostname||(b.hostname=b.host),!b.hostname){if(typeof document>"u")throw new Error("Could not determine host. Specify host manually.");let _=new URL(document.URL);b.hostname=_.hostname,b.port||(b.port=Number(_.port))}return b.objectMode===void 0&&(b.objectMode=!(b.binary===!0||b.binary===void 0)),b}function l(k,b,_){e("createWebSocket"),e(`protocol: ${_.protocolId} ${_.protocolVersion}`);let A=_.protocolId==="MQIsdp"&&_.protocolVersion===3?"mqttv3.1":"mqtt";e(`creating new Websocket for url: ${b} and protocol: ${A}`);let v;return _.createWebsocket?v=_.createWebsocket(b,[A],_):v=new a.default(b,[A],_.wsOptions),v}function u(k,b){let _=b.protocolId==="MQIsdp"&&b.protocolVersion===3?"mqttv3.1":"mqtt",A=i(b,k),v;return b.createWebsocket?v=b.createWebsocket(A,[_],b):v=new WebSocket(A,[_]),v.binaryType="arraybuffer",v}var f=(k,b)=>{e("streamBuilder");let _=g(b);_.hostname=_.hostname||_.host||"localhost";let A=i(_,k),v=l(k,A,_),S=a.default.createWebSocketStream(v,_.wsOptions);return S.url=A,v.on("close",()=>{S.destroy()}),S};d.streamBuilder=f;var y=(k,b)=>{e("browserStreamBuilder");let _,A=m(b).browserBufferSize||1024*512,v=b.browserBufferTimeout||1e3,S=!b.objectMode,x=u(k,b),T=P(b,F,le);b.objectMode||(T._writev=r.writev.bind(T)),T.on("close",()=>{x.close()});let C=typeof x.addEventListener<"u";x.readyState===x.OPEN?(_=T,_.socket=x):(_=new r.BufferedDuplex(b,T,x),C?x.addEventListener("open",B):x.onopen=B),C?(x.addEventListener("close",I),x.addEventListener("error",z),x.addEventListener("message",j)):(x.onclose=I,x.onerror=z,x.onmessage=j);function P(Z,Y,ie){let W=new n.Transform({objectMode:Z.objectMode});return W._write=Y,W._flush=ie,W}function B(){e("WebSocket onOpen"),_ instanceof r.BufferedDuplex&&_.socketReady()}function I(Z){e("WebSocket onClose",Z),_.end(),_.destroy()}function z(Z){e("WebSocket onError",Z);let Y=new Error("WebSocket error");Y.event=Z,_.destroy(Y)}async function j(Z){if(!T||!T.readable||!T.writable)return;let{data:Y}=Z;Y instanceof ArrayBuffer?Y=o.Buffer.from(Y):Y instanceof Blob?Y=o.Buffer.from(await new Response(Y).arrayBuffer()):Y=o.Buffer.from(Y,"utf8"),T.push(Y)}function F(Z,Y,ie){if(x.bufferedAmount>A){setTimeout(F,v,Z,Y,ie);return}S&&typeof Z=="string"&&(Z=o.Buffer.from(Z,"utf8"));try{x.send(Z)}catch(W){return ie(W)}ie()}function le(Z){x.close(),Z()}return _};d.browserStreamBuilder=y}),vi={};Gt(vi,{Server:()=>Be,Socket:()=>Be,Stream:()=>Be,_createServerHandle:()=>Be,_normalizeArgs:()=>Be,_setSimultaneousAccepts:()=>Be,connect:()=>Be,createConnection:()=>Be,createServer:()=>Be,default:()=>dl,isIP:()=>Be,isIPv4:()=>Be,isIPv6:()=>Be});function Be(){throw new Error("Node.js net module is not supported by JSPM core outside of Node.js")}var dl,ul=tt(()=>{de(),pe(),ue(),dl={_createServerHandle:Be,_normalizeArgs:Be,_setSimultaneousAccepts:Be,connect:Be,createConnection:Be,createServer:Be,isIP:Be,isIPv4:Be,isIPv6:Be,Server:Be,Socket:Be,Stream:Be}}),pl=be((d,h)=>{de(),pe(),ue(),h.exports={}}),Ma=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(d,"__esModule",{value:!0});var o=h((ul(),Re(vi))),a=h(wt()),p=h(pl()),n=(0,a.default)("mqttjs:tcp"),t=(r,e)=>{if(e.port=e.port||1883,e.hostname=e.hostname||e.host||"localhost",e.socksProxy)return(0,p.default)(e.hostname,e.port,e.socksProxy,{timeout:e.socksTimeout});let{port:s,path:i}=e,g=e.hostname;return n("port %d and host %s",s,g),o.default.createConnection({port:s,host:g,path:i})};d.default=t}),hl={};Gt(hl,{default:()=>fl});var fl,Od=tt(()=>{de(),pe(),ue(),fl={}}),Ca=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(d,"__esModule",{value:!0});var o=(Od(),Re(hl)),a=h((ul(),Re(vi))),p=h(wt()),n=h(pl()),t=(0,p.default)("mqttjs:tls");function r(s){let{host:i,port:g,socksProxy:m,...l}=s;if(m!==void 0){let u=(0,n.default)(i,g,m,{timeout:s.socksTimeout});return(0,o.connect)({...l,socket:u})}return(0,o.connect)(s)}var e=(s,i)=>{i.port=i.port||8883,i.host=i.hostname||i.host||"localhost",a.default.isIP(i.host)===0&&(i.servername=i.host),i.rejectUnauthorized=i.rejectUnauthorized!==!1,delete i.path,t("port %d host %s rejectUnauthorized %b",i.port,i.host,i.rejectUnauthorized);let g=r(i);g.on("secureConnect",()=>{i.rejectUnauthorized&&!g.authorized?g.emit("error",new Error("TLS not authorized")):g.removeListener("error",m)});function m(l){i.rejectUnauthorized&&s.emit("error",l),g.end()}return g.on("error",m),g};d.default=e}),Pa=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=(Ke(),Re($e)),o=Bt(),a=yi(),p,n,t;function r(){let m=new o.Transform;return m._write=(l,u,f)=>{p.send({data:l.buffer,success(){f()},fail(y){f(new Error(y))}})},m._flush=l=>{p.close({success(){l()}})},m}function e(m){m.hostname||(m.hostname="localhost"),m.path||(m.path="/"),m.wsOptions||(m.wsOptions={})}function s(m,l){let u=m.protocol==="wxs"?"wss":"ws",f=`${u}://${m.hostname}${m.path}`;return m.port&&m.port!==80&&m.port!==443&&(f=`${u}://${m.hostname}:${m.port}${m.path}`),typeof m.transformWsUrl=="function"&&(f=m.transformWsUrl(f,m,l)),f}function i(){p.onOpen(()=>{t.socketReady()}),p.onMessage(m=>{let{data:l}=m;l instanceof ArrayBuffer?l=h.Buffer.from(l):l=h.Buffer.from(l,"utf8"),n.push(l)}),p.onClose(()=>{t.emit("close"),t.end(),t.destroy()}),p.onError(m=>{let l=new Error(m.errMsg);t.destroy(l)})}var g=(m,l)=>{if(l.hostname=l.hostname||l.host,!l.hostname)throw new Error("Could not determine host. Specify host manually.");let u=l.protocolId==="MQIsdp"&&l.protocolVersion===3?"mqttv3.1":"mqtt";e(l);let f=s(l,m);p=wx.connectSocket({url:f,protocols:[u]}),n=r(),t=new a.BufferedDuplex(l,n,p),t._destroy=(k,b)=>{p.close({success(){b&&b(k)}})};let y=t.destroy;return t.destroy=(k,b)=>(t.destroy=y,setTimeout(()=>{p.close({fail(){t._destroy(k,b)}})},0),t),i(),t};d.default=g}),Oa=be(d=>{de(),pe(),ue(),Object.defineProperty(d,"__esModule",{value:!0});var h=(Ke(),Re($e)),o=Bt(),a=yi(),p,n,t,r=!1;function e(){let l=new o.Transform;return l._write=(u,f,y)=>{p.sendSocketMessage({data:u.buffer,success(){y()},fail(){y(new Error)}})},l._flush=u=>{p.closeSocket({success(){u()}})},l}function s(l){l.hostname||(l.hostname="localhost"),l.path||(l.path="/"),l.wsOptions||(l.wsOptions={})}function i(l,u){let f=l.protocol==="alis"?"wss":"ws",y=`${f}://${l.hostname}${l.path}`;return l.port&&l.port!==80&&l.port!==443&&(y=`${f}://${l.hostname}:${l.port}${l.path}`),typeof l.transformWsUrl=="function"&&(y=l.transformWsUrl(y,l,u)),y}function g(){r||(r=!0,p.onSocketOpen(()=>{t.socketReady()}),p.onSocketMessage(l=>{if(typeof l.data=="string"){let u=h.Buffer.from(l.data,"base64");n.push(u)}else{let u=new FileReader;u.addEventListener("load",()=>{if(u.result instanceof ArrayBuffer){n.push(h.Buffer.from(u.result));return}n.push(h.Buffer.from(u.result,"utf-8"))}),u.readAsArrayBuffer(l.data)}}),p.onSocketClose(()=>{t.end(),t.destroy()}),p.onSocketError(l=>{t.destroy(l)}))}var m=(l,u)=>{if(u.hostname=u.hostname||u.host,!u.hostname)throw new Error("Could not determine host. Specify host manually.");let f=u.protocolId==="MQIsdp"&&u.protocolVersion===3?"mqttv3.1":"mqtt";s(u);let y=i(u,l);return p=u.my,p.connectSocket({url:y,protocols:f}),n=e(),t=new a.BufferedDuplex(u,n,p),g(),t};d.default=m}),Nd=be(d=>{de(),pe(),ue();var h=d&&d.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(d,"__esModule",{value:!0}),d.connectAsync=i;var o=h(wt()),a=h((Cd(),Re(zo))),p=h(bs()),n=h(Zn());typeof qe?.nextTick!="function"&&(qe.nextTick=setImmediate);var t=(0,o.default)("mqttjs"),r=null;function e(g){let m;if(g.auth)if(m=g.auth.match(/^(.+):(.+)$/),m){let[,l,u]=m;g.username=l,g.password=u}else g.username=g.auth}function s(g,m){if(t("connecting to an MQTT broker..."),typeof g=="object"&&!m&&(m=g,g=""),m=m||{},g&&typeof g=="string"){let f=a.default.parse(g,!0),y={};if(f.port!=null&&(y.port=Number(f.port)),y.host=f.hostname,y.query=f.query,y.auth=f.auth,y.protocol=f.protocol,y.path=f.path,m={...y,...m},!m.protocol)throw new Error("Missing protocol");m.protocol=m.protocol.replace(/:$/,"")}if(m.unixSocket=m.unixSocket||m.protocol?.includes("+unix"),m.unixSocket?m.protocol=m.protocol.replace("+unix",""):!m.protocol?.startsWith("ws")&&!m.protocol?.startsWith("wx")&&delete m.path,e(m),m.query&&typeof m.query.clientId=="string"&&(m.clientId=m.query.clientId),n.default||m.unixSocket?m.socksProxy=void 0:m.socksProxy===void 0&&typeof qe<"u"&&(m.socksProxy=qe.env.MQTTJS_SOCKS_PROXY),m.cert&&m.key)if(m.protocol){if(["mqtts","wss","wxs","alis"].indexOf(m.protocol)===-1)switch(m.protocol){case"mqtt":m.protocol="mqtts";break;case"ws":m.protocol="wss";break;case"wx":m.protocol="wxs";break;case"ali":m.protocol="alis";break;default:throw new Error(`Unknown protocol for secure connection: "${m.protocol}"!`)}}else throw new Error("Missing secure protocol key");if(r||(r={},!n.default&&!m.forceNativeWebSocket?(r.ws=bn().streamBuilder,r.wss=bn().streamBuilder,r.mqtt=Ma().default,r.tcp=Ma().default,r.ssl=Ca().default,r.tls=r.ssl,r.mqtts=Ca().default):(r.ws=bn().browserStreamBuilder,r.wss=bn().browserStreamBuilder,r.wx=Pa().default,r.wxs=Pa().default,r.ali=Oa().default,r.alis=Oa().default)),!r[m.protocol]){let f=["mqtts","wss"].indexOf(m.protocol)!==-1;m.protocol=["mqtt","mqtts","ws","wss","wx","wxs","ali","alis"].filter((y,k)=>f&&k%2===0?!1:typeof r[y]=="function")[0]}if(m.clean===!1&&!m.clientId)throw new Error("Missing clientId for unclean clients");m.protocol&&(m.defaultProtocol=m.protocol);function l(f){return m.servers&&((!f._reconnectCount||f._reconnectCount===m.servers.length)&&(f._reconnectCount=0),m.host=m.servers[f._reconnectCount].host,m.port=m.servers[f._reconnectCount].port,m.protocol=m.servers[f._reconnectCount].protocol?m.servers[f._reconnectCount].protocol:m.defaultProtocol,m.hostname=m.host,f._reconnectCount++),t("calling streambuilder for",m.protocol),r[m.protocol](f,m)}let u=new p.default(l,m);return u.on("error",()=>{}),u}function i(g,m,l=!0){return new Promise((u,f)=>{let y=s(g,m),k={connect:_=>{b(),u(y)},end:()=>{b(),u(y)},error:_=>{b(),y.end(),f(_)}};l===!1&&(k.close=()=>{k.error(new Error("Couldn't connect to server"))});function b(){Object.keys(k).forEach(_=>{y.off(_,k[_])})}Object.keys(k).forEach(_=>{y.on(_,k[_])})})}d.default=s}),Na=be(d=>{de(),pe(),ue();var h=d&&d.__createBinding||(Object.create?function(l,u,f,y){y===void 0&&(y=f);var k=Object.getOwnPropertyDescriptor(u,f);(!k||("get"in k?!u.__esModule:k.writable||k.configurable))&&(k={enumerable:!0,get:function(){return u[f]}}),Object.defineProperty(l,y,k)}:function(l,u,f,y){y===void 0&&(y=f),l[y]=u[f]}),o=d&&d.__setModuleDefault||(Object.create?function(l,u){Object.defineProperty(l,"default",{enumerable:!0,value:u})}:function(l,u){l.default=u}),a=d&&d.__importStar||(function(){var l=function(u){return l=Object.getOwnPropertyNames||function(f){var y=[];for(var k in f)Object.prototype.hasOwnProperty.call(f,k)&&(y[y.length]=k);return y},l(u)};return function(u){if(u&&u.__esModule)return u;var f={};if(u!=null)for(var y=l(u),k=0;k<y.length;k++)y[k]!=="default"&&h(f,u,y[k]);return o(f,u),f}})(),p=d&&d.__exportStar||function(l,u){for(var f in l)f!=="default"&&!Object.prototype.hasOwnProperty.call(u,f)&&h(u,l,f)},n=d&&d.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(d,"__esModule",{value:!0}),d.ReasonCodes=d.KeepaliveManager=d.UniqueMessageIdProvider=d.DefaultMessageIdProvider=d.Store=d.MqttClient=d.connectAsync=d.connect=d.Client=void 0;var t=n(bs());d.MqttClient=t.default;var r=n(Co());d.DefaultMessageIdProvider=r.default;var e=n($c());d.UniqueMessageIdProvider=e.default;var s=n(ho());d.Store=s.default;var i=a(Nd());d.connect=i.default,Object.defineProperty(d,"connectAsync",{enumerable:!0,get:function(){return i.connectAsync}});var g=n(qo());d.KeepaliveManager=g.default,d.Client=t.default,p(bs(),d),p(Jt(),d),p(po(),d);var m=Jn();Object.defineProperty(d,"ReasonCodes",{enumerable:!0,get:function(){return m.ReasonCodes}})}),Rd=be(d=>{de(),pe(),ue();var h=d&&d.__createBinding||(Object.create?function(t,r,e,s){s===void 0&&(s=e);var i=Object.getOwnPropertyDescriptor(r,e);(!i||("get"in i?!r.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(t,s,i)}:function(t,r,e,s){s===void 0&&(s=e),t[s]=r[e]}),o=d&&d.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),a=d&&d.__importStar||(function(){var t=function(r){return t=Object.getOwnPropertyNames||function(e){var s=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[s.length]=i);return s},t(r)};return function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var s=t(r),i=0;i<s.length;i++)s[i]!=="default"&&h(e,r,s[i]);return o(e,r),e}})(),p=d&&d.__exportStar||function(t,r){for(var e in t)e!=="default"&&!Object.prototype.hasOwnProperty.call(r,e)&&h(r,t,e)};Object.defineProperty(d,"__esModule",{value:!0});var n=a(Na());d.default=n,p(Na(),d)});Rd();const ii=d=>({tc1:"TC1 智能插排",m1:"M1 空气质量检测器",a1:"A1 空气净化器"})[d.model]||"设备",ir=(d,h=0)=>d!=null&&d!==""&&Number.isFinite(Number(d))?Number(d).toFixed(h):"—";function Ud(d,h={},o=!1,a=Date.now()){if(!o)return"尚未连接";if(h.available===!1)return"设备离线";if(d.model==="tc1"){const n=h.socket_states||Array.from({length:6},(e,s)=>h[`plug_${s}`]?.on),t=n.length===6&&n.every(e=>e!=null),r=h.power_watts??h.power;return!t&&r===void 0?"等待设备数据":[r!==void 0?ir(r,1)+" W":null,t?`${n.filter(Boolean).length} 开 · ${n.filter(e=>!e).length} 关`:null].filter(Boolean).join(" · ")}if(d.model==="m1")return!h.sensor_valid||!h.sensorAt||a-h.sensorAt>6e4||!Number.isFinite(Number(h.pm25))?"等待有效空气数据":`${Number(h.pm25)>75||Number(h.formaldehyde)>.1?"空气较差":Number(h.pm25)>35||Number(h.formaldehyde)>.08?"空气一般":"空气良好"} · PM2.5 ${ir(h.pm25)}`;if(h.fan_on===void 0)return"等待设备数据";const p=h.applied_speed??h.percentage??h.speed;return`${h.fan_on?"运行 "+ir(p)+"%":"已停止"} · ${h.led_enabled===void 0?"灯光未知":h.led_enabled?"灯光开启":"灯光关闭"}`}const Ld={class:"device-summary"},qd={class:"summary-icon"},jd={class:"summary-copy"},Bd={class:"summary-type"},Fd={__name:"DeviceSummary",props:{device:Object,state:Object,name:String,connected:Boolean,now:Number},setup(d){const h=d,o=Hn(()=>Ud(h.device,h.state,h.connected,h.now));return(a,p)=>(Pe(),Ne("span",Ld,[X("span",qd,[Le(De,{name:d.device.model==="m1"?"air":d.device.model==="a1"?"fan":"plug",size:22},null,8,["name"])]),X("span",jd,[X("b",null,Oe(d.name),1),X("small",Bd,Oe(Je(ii)(d.device)),1),X("span",{class:Qt(["summary-reading",{muted:!d.connected||d.state?.available===!1}])},Oe(o.value),3)])]))}},ml=Vn(Fd,[["__scopeId","data-v-8a42031e"]]),Dd=["disabled"],Wd={key:0,class:"help"},zd={key:1,role:"alert",class:"error"},Hd=["disabled"],$d=["disabled"],Kd={__name:"DeviceNameDialog",emits:["save"],setup(d,{expose:h,emit:o}){const a=o,p=je(),n=je(),t=je(""),r=je(""),e=je(!1);function s(g,m){n.value=g,t.value=m,r.value="",p.value.showModal()}function i(){r.value="";const g=t.value.trim();if(!g||new TextEncoder().encode(g).length>63){r.value="名称不能为空，且不能超过 63 字节。";return}e.value=!0,a("save",n.value,g,m=>{e.value=!1,m?r.value=m:p.value.close()})}return h({open:s}),(g,m)=>(Pe(),Ne("dialog",{ref_key:"dialog",ref:p,class:"rename-dialog",onCancel:m[2]||(m[2]=l=>e.value&&l.preventDefault())},[X("form",{onSubmit:yn(i,["prevent"])},[m[4]||(m[4]=X("h2",null,"修改设备名称",-1)),m[5]||(m[5]=X("p",{class:"help"},"使用容易辨认的名称，例如“客厅净化器”。",-1)),X("label",null,[m[3]||(m[3]=He("设备名称",-1)),ht(X("input",{"onUpdate:modelValue":m[0]||(m[0]=l=>t.value=l),required:"",maxlength:"63",disabled:e.value,autofocus:""},null,8,Dd),[[zt,t.value]])]),n.value?.version==="v1"?(Pe(),Ne("p",Wd,"旧版设备的名称保存在当前浏览器中。")):yt("",!0),r.value?(Pe(),Ne("p",zd,Oe(r.value),1)):yt("",!0),X("footer",null,[X("button",{class:"btn",type:"button",disabled:e.value,onClick:m[1]||(m[1]=l=>p.value.close())},"取消",8,Hd),X("button",{class:"btn primary",disabled:e.value},Oe(e.value?"保存中…":"保存名称"),9,$d)])],32)],544))}},Vd=Vn(Kd,[["__scopeId","data-v-35974502"]]),Qd={tc1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TC1 智能插座</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;
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
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
.btn[aria-busy=true]::before{content:"";width:14px;height:14px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

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
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "light light"}
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
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .breathe{animation:pulse 3s infinite}
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
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}
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

<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.source_cn':['Mainland China mirror','境内镜像'],'fw.source_global':['Global server','境外服务器'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
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
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],
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
'a1.speed':['Fan speed','风速'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
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
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  pending.delete(event.data.id);clearTimeout(entry.timer);entry.cleanup();
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{clearTimeout(timer);pending.delete(id);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   pending.set(id,{resolve,timer,cleanup});
   parent.postMessage({type:'device-command',id,request:JSON.parse(options.body)},parent.location.origin);
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
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
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
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
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
 const active=document.querySelector('.side a[aria-current]');if(active&&active.scrollIntoView)active.scrollIntoView({block:'nearest',inline:'center'});
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
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})});
 });
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,card('mqtt.broker',null,form)),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const source=h('select',{id:'otaSource'}),latest=h('p',{class:'help'}),notes=h('a',{target:'_blank',rel:'noopener',hidden:true},t('fw.notes'));
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  const check=h('button',{class:'btn',type:'button'},t('fw.check'));
  let timer=null;
  async function poll(){
   const data=await command('ota.check.get');
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'');
   install.hidden=!data.available;notes.hidden=!data.release_log;
   if(data.release_log)notes.href=data.release_log;
   if(data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;check.disabled=false;}),1000);
   else check.disabled=false;
  }
  check.onclick=()=>run(check,async()=>{if(timer)clearTimeout(timer);install.hidden=true;notes.hidden=true;await command('ota.check',{source:source.value});latest.textContent=t('fw.check_checking');check.disabled=true;timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;check.disabled=false;}),500);});
  source.onchange=()=>{if(timer)clearTimeout(timer);install.hidden=true;notes.hidden=true;latest.textContent='';check.disabled=false;};
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources)source.append(h('option',{value:id},t('fw.source_'+id)));}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{},t('fw.online')),source,h('div',{class:'row'},check,install),latest,notes);
 }
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'http://…/'+dev.otaName});
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
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
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
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
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
  for(const r of d.records)rows.push(JSON.stringify(r));
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
 const input=h('input',{id:'deviceName',maxLength:63,required:true}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'})))),meta);
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
  const raw=await command('status.get');failures=0;lastSuccess=Date.now();const s=UI.acceptStatus(raw);
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
 'display.set':'op.display','system.reboot':'op.reboot'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a));
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
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set'].includes(a);
  if(switchable){
   const values=keys&&['outlet.set','fan.set'].includes(a)?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   parts.push(()=>({brightness:Number(m.brightness)}));
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
 const key=sel(keyHost,'btn.key',dev.model==='A1'?[['0','btn.key_power'],['1','btn.key_wifi']]:[['0','btn.key_fn']]);
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const keyName=k=>t(dev.model==='A1'?(Number(k)===0?'btn.key_power':'btn.key_wifi'):'btn.key_fn');
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(v.action==='system.reboot')return target;
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
  const items=[];let offset=0;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<68);
  listBox.replaceChildren();
  for(const k of (dev.model==='A1'?[0,1]:[0])){
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
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info('btn.reset_note')),editorCard),
  async show(){await load();preview();}};
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
 UI.start=options=>{dev=options;UI.device=options;I18N.set('zh-CN');queueMicrotask(()=>{I18N.apply();lock();(async function poll(){await pollLoad();if(!stopped)setTimeout(poll,3000);})();});};
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#settings/"]');if(link){event.preventDefault();UI.toast('此项请在设备本地 WebUI 中设置');}});
 window.addEventListener('pagehide',()=>stopped=true);
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}#settingsPage{display:none!important}.banner{margin-top:0}';document.head.append(style);
 new ResizeObserver(()=>{parent.postMessage({type:'device-height',height:Math.ceil(document.body.getBoundingClientRect().height)+8},parent.location.origin);}).observe(document.body);
})();

/* TC1 smart power strip page: six socket tiles, power trend and the metering
 * settings the strip alone has. */
(()=>{
'use strict';
const {t}=I18N;
const {$,h,icon,toast,run,onSubmit,switchRow,summary,card,pageHead,seg}=UI;
let busy=false;
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
function lock(){const pending=busy||UI.controlBusy;for(const {tile} of tiles){tile.disabled=pending;tile.setAttribute('aria-busy',String(!!pending));}$('allOn').disabled=pending;$('allOff').disabled=pending;}
async function setStates(params){
 if(busy)return;busy=true;lock();
 const states=Array.from(UI.state.socket_states,Boolean);if(params.index===undefined)states.fill(params.on);else states[params.index]=params.on;
 try{await UI.control('outlet.set',params,{socket_states:states});}catch(e){toast(e.message,true);}finally{busy=false;lock();renderSockets(UI.state);}
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
 const states=s.socket_states||[0,0,0,0,0,0];
 $('onCount').textContent=t('tc1.on_count',{n:states.filter(Boolean).length});
 states.forEach((v,i)=>{const x=tiles[i];x.tile.setAttribute('aria-pressed',String(!!v));
  x.name.textContent=(s.socket_names||[])[i]||t('tc1.socket_n',{n:i+1});x.state.textContent=t(v?'tc1.on':'tc1.off')+(busy?' · '+t('control.syncing'):'');});
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
 pages:{},
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
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>A1 空气净化器</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;
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
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
.btn[aria-busy=true]::before{content:"";width:14px;height:14px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

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
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "light light"}
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
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .breathe{animation:pulse 3s infinite}
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
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}
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

 <section class="card" style="grid-area:light">
  <div class="card-head"><div><h2 data-i18n="a1.ring"></h2><p class="help" id="effectNote"></p></div><span id="lightSave" class="help"></span></div>
  <div class="light-layout">
   <svg id="ring" class="ring" viewBox="0 0 200 200" aria-hidden="true"></svg>
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

<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.source_cn':['Mainland China mirror','境内镜像'],'fw.source_global':['Global server','境外服务器'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
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
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],
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
'a1.speed':['Fan speed','风速'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
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
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  pending.delete(event.data.id);clearTimeout(entry.timer);entry.cleanup();
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{clearTimeout(timer);pending.delete(id);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   pending.set(id,{resolve,timer,cleanup});
   parent.postMessage({type:'device-command',id,request:JSON.parse(options.body)},parent.location.origin);
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
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
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
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
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
 const active=document.querySelector('.side a[aria-current]');if(active&&active.scrollIntoView)active.scrollIntoView({block:'nearest',inline:'center'});
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
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})});
 });
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,card('mqtt.broker',null,form)),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const source=h('select',{id:'otaSource'}),latest=h('p',{class:'help'}),notes=h('a',{target:'_blank',rel:'noopener',hidden:true},t('fw.notes'));
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  const check=h('button',{class:'btn',type:'button'},t('fw.check'));
  let timer=null;
  async function poll(){
   const data=await command('ota.check.get');
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'');
   install.hidden=!data.available;notes.hidden=!data.release_log;
   if(data.release_log)notes.href=data.release_log;
   if(data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;check.disabled=false;}),1000);
   else check.disabled=false;
  }
  check.onclick=()=>run(check,async()=>{if(timer)clearTimeout(timer);install.hidden=true;notes.hidden=true;await command('ota.check',{source:source.value});latest.textContent=t('fw.check_checking');check.disabled=true;timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;check.disabled=false;}),500);});
  source.onchange=()=>{if(timer)clearTimeout(timer);install.hidden=true;notes.hidden=true;latest.textContent='';check.disabled=false;};
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources)source.append(h('option',{value:id},t('fw.source_'+id)));}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{},t('fw.online')),source,h('div',{class:'row'},check,install),latest,notes);
 }
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'http://…/'+dev.otaName});
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
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
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
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
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
  for(const r of d.records)rows.push(JSON.stringify(r));
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
 const input=h('input',{id:'deviceName',maxLength:63,required:true}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'})))),meta);
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
  const raw=await command('status.get');failures=0;lastSuccess=Date.now();const s=UI.acceptStatus(raw);
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
 'display.set':'op.display','system.reboot':'op.reboot'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a));
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
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set'].includes(a);
  if(switchable){
   const values=keys&&['outlet.set','fan.set'].includes(a)?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   parts.push(()=>({brightness:Number(m.brightness)}));
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
 const key=sel(keyHost,'btn.key',dev.model==='A1'?[['0','btn.key_power'],['1','btn.key_wifi']]:[['0','btn.key_fn']]);
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const keyName=k=>t(dev.model==='A1'?(Number(k)===0?'btn.key_power':'btn.key_wifi'):'btn.key_fn');
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(v.action==='system.reboot')return target;
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
  const items=[];let offset=0;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<68);
  listBox.replaceChildren();
  for(const k of (dev.model==='A1'?[0,1]:[0])){
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
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info('btn.reset_note')),editorCard),
  async show(){await load();preview();}};
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
 UI.start=options=>{dev=options;UI.device=options;I18N.set('zh-CN');queueMicrotask(()=>{I18N.apply();lock();(async function poll(){await pollLoad();if(!stopped)setTimeout(poll,3000);})();});};
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#settings/"]');if(link){event.preventDefault();UI.toast('此项请在设备本地 WebUI 中设置');}});
 window.addEventListener('pagehide',()=>stopped=true);
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}#settingsPage{display:none!important}.banner{margin-top:0}';document.head.append(style);
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
 if(!dragging&&document.activeElement!==speed){const v=s.fan_on?s.percentage:s.requested_speed;speed.value=v;$('speedValue').textContent=v+'%';presets.set(s.fan_on?s.percentage:null);}
 $('outBar').style.width=s.applied_speed+'%';$('targetBar').style.width=s.percentage+'%';$('targetBar').hidden=!s.percentage;
 $('outText').textContent=!s.fan_on&&!s.applied_speed?t('a1.out_stopped'):s.applied_speed!==s.percentage?t('a1.out_ramp',{a:s.applied_speed,p:s.percentage}):t('a1.out_steady',{a:s.applied_speed});
 for(const [id,badge] of [['panelBadge',$('panelBadge')],['panelBadge2',$('panelBadge2')]]){badge.className='badge '+(s.panel_ready?'ok':'bad');badge.textContent=t(s.panel_ready?'a1.panel_ok':'a1.panel_bad');}
 for(const id of ['childLock','childLockDevice'])$(id).checked=s.child_lock;
}

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
let lightDirty=false,lightTimer=null,color=[0,0,255];
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
 if(!s)return;const N=24,svg=$('ring'),on=$('ledEnabled').checked,bright=Number($('bright').value)/255;
 const eff=advanced.effect;let lit=N;
 if(eff===0&&s.fan_on)lit=Math.max(1,Math.round(s.applied_speed/100*N));
 const parts=[];
 for(let i=0;i<N;i++){const a=(i/N)*Math.PI*2-Math.PI/2,x=100+78*Math.cos(a),y=100+78*Math.sin(a);
  let fill=hex(color),op=on&&i<lit?0.25+0.75*bright:0.12;
  if(!on||i>=lit)fill='var(--muted)';
  else if(eff===3)fill='hsl('+(i*15)+' 90% 55%)';
  else if(eff===4){const seg2=advanced.segment[Math.floor(i/(N/Math.max(1,advanced.segments)))];if(seg2)fill=hex(seg2.colors[1]);}
  parts.push('<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="7" fill="'+fill+'" opacity="'+op.toFixed(2)+'"'+(on&&eff===2?' class="breathe"':'')+'/>');}
 svg.innerHTML=parts.join('')+'<text x="100" y="98" text-anchor="middle" class="ring-v">'+(on?Math.round(bright*100)+'%':t('state.off'))+'</text><text x="100" y="122" text-anchor="middle" class="ring-l">'+t('a1.effect.'+eff)+'</text>';
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
 const m=clone(advanced=await api('/light/advanced'));
 const draw=()=>{
  const opts=h('div',{class:'options',role:'radiogroup'},EFFECTS.map(e=>h('label',{class:'option'},h('input',{type:'radio',name:'effect',value:e,checked:m.effect===e,onchange:()=>{m.effect=e;draw();}}),
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
  page.replaceChildren(pageHead('nav.light','fx.lead'),
   h('section',{class:'card'},h('div',{class:'card-head'},h('h2',{i18n:'fx.effect'})),opts,
    h('div',{style:'margin-top:16px'},flag(m,'follow_fan','fx.follow','fx.follow_desc')),segs,
    h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),h('p',{class:'help',i18n:'fx.quality_hint'}),
     h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'fx.quality_pm'}),num(m,'quality_pm',{unit:'µg/m³',step:0.01})),
      h('label',{class:'field'},h('span',{i18n:'fx.quality_hcho'}),num(m,'quality_hcho',{unit:'mg/m³',step:0.001})))),
    saveBar(async()=>{await api('/light/advanced',m);advanced=clone(m);if(UI.state)renderLight(UI.state);})));
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
 groups:[['grp.network',['network','mqtt']],['grp.device',['device','light']],['grp.auto',['binding','linkage','schedule','night']],['grp.system',['firmware','diagnostics','logs','maintenance']]],
 nav:{network:'nav.wifi',mqtt:'nav.mqtt',device:'nav.general',light:'nav.light',binding:'nav.binding',linkage:'nav.linkage',schedule:'nav.schedule',night:'nav.sleep',firmware:'nav.firmware',diagnostics:'nav.diagnostics',logs:'nav.logs',maintenance:'nav.maintenance'},
 pages:{device:{show:clock.show,status:clock.status},light:{show:showLight},binding:{show:showBinding},linkage:{show:showLinkage}},
 diagGroups:[['diag.g_fan',['fan_on','requested_fan_on','requested_speed','speed','percentage','applied_speed','fan_ready','child_lock','panel_ready','panel_errors','hardware_errors','panel_raw']],
  ['diag.g_light',['led_enabled','led_visible','led_always_on','brightness','red','green','blue','config_dirty','save_error']],
  ['diag.g_ota_img',['ota_signature_verified','ota_image_verified','ota_key_id','ota_image_length','ota_release_counter','ota_version']]],
 healthChecks:s=>[['diag.c_panel',s.panel_ready?'ok':'bad',s.panel_ready?t('state.ok'):t('diag.errors',{n:s.panel_errors})],
  ['diag.c_fan',s.fan_ready&&!s.hardware_errors?'ok':'bad',s.hardware_errors?t('diag.errors',{n:s.hardware_errors}):t('state.ok')],
  ['diag.c_storage',s.save_error?'bad':'ok',s.save_error||t('state.ok')]],
 chips:s=>s.child_lock?[h('span',{class:'chip'},icon('lock'),h('b',{},t('a1.child_lock')))]:[],
 onStatus:s=>{renderFan(s);renderLight(s);}
});
I18N.onChange(()=>{if(UI.state){renderAuto();for(const key of ['device','light','binding','linkage'])if(!document.querySelector('[data-settings-page="'+key+'"]').hidden&&UI.pages[key].show)UI.pages[key].show();}});
// Keep the automatic-control summary fresh even while the home page is idle.
(async function poll(){try{bindingStatus=await api('/binding/status');if(UI.state)renderFan(UI.state);renderAuto();}catch{}setTimeout(poll,3000);})();
api('/light/advanced').then(a=>{advanced=a;if(UI.state)renderLight(UI.state);}).catch(e=>toast(e.message,true));
})();
<\/script>
</body>
</html>
`,m1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>M1 空气质量检测器</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;
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
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
.btn[aria-busy=true]::before{content:"";width:14px;height:14px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

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
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "light light"}
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
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .breathe{animation:pulse 3s infinite}
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
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}
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

<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.source_cn':['Mainland China mirror','境内镜像'],'fw.source_global':['Global server','境外服务器'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
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
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],
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
'a1.speed':['Fan speed','风速'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
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
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  pending.delete(event.data.id);clearTimeout(entry.timer);entry.cleanup();
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{clearTimeout(timer);pending.delete(id);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   pending.set(id,{resolve,timer,cleanup});
   parent.postMessage({type:'device-command',id,request:JSON.parse(options.body)},parent.location.origin);
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
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
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
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
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
 const active=document.querySelector('.side a[aria-current]');if(active&&active.scrollIntoView)active.scrollIntoView({block:'nearest',inline:'center'});
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
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})});
 });
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,card('mqtt.broker',null,form)),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const source=h('select',{id:'otaSource'}),latest=h('p',{class:'help'}),notes=h('a',{target:'_blank',rel:'noopener',hidden:true},t('fw.notes'));
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  const check=h('button',{class:'btn',type:'button'},t('fw.check'));
  let timer=null;
  async function poll(){
   const data=await command('ota.check.get');
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'');
   install.hidden=!data.available;notes.hidden=!data.release_log;
   if(data.release_log)notes.href=data.release_log;
   if(data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;check.disabled=false;}),1000);
   else check.disabled=false;
  }
  check.onclick=()=>run(check,async()=>{if(timer)clearTimeout(timer);install.hidden=true;notes.hidden=true;await command('ota.check',{source:source.value});latest.textContent=t('fw.check_checking');check.disabled=true;timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;check.disabled=false;}),500);});
  source.onchange=()=>{if(timer)clearTimeout(timer);install.hidden=true;notes.hidden=true;latest.textContent='';check.disabled=false;};
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources)source.append(h('option',{value:id},t('fw.source_'+id)));}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{},t('fw.online')),source,h('div',{class:'row'},check,install),latest,notes);
 }
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'http://…/'+dev.otaName});
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
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
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
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
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
  for(const r of d.records)rows.push(JSON.stringify(r));
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
 const input=h('input',{id:'deviceName',maxLength:63,required:true}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'})))),meta);
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
  const raw=await command('status.get');failures=0;lastSuccess=Date.now();const s=UI.acceptStatus(raw);
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
 'display.set':'op.display','system.reboot':'op.reboot'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a));
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
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set'].includes(a);
  if(switchable){
   const values=keys&&['outlet.set','fan.set'].includes(a)?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   parts.push(()=>({brightness:Number(m.brightness)}));
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
 const key=sel(keyHost,'btn.key',dev.model==='A1'?[['0','btn.key_power'],['1','btn.key_wifi']]:[['0','btn.key_fn']]);
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const keyName=k=>t(dev.model==='A1'?(Number(k)===0?'btn.key_power':'btn.key_wifi'):'btn.key_fn');
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(v.action==='system.reboot')return target;
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
  const items=[];let offset=0;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<68);
  listBox.replaceChildren();
  for(const k of (dev.model==='A1'?[0,1]:[0])){
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
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info('btn.reset_note')),editorCard),
  async show(){await load();preview();}};
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
 UI.start=options=>{dev=options;UI.device=options;I18N.set('zh-CN');queueMicrotask(()=>{I18N.apply();lock();(async function poll(){await pollLoad();if(!stopped)setTimeout(poll,3000);})();});};
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#settings/"]');if(link){event.preventDefault();UI.toast('此项请在设备本地 WebUI 中设置');}});
 window.addEventListener('pagehide',()=>stopped=true);
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}#settingsPage{display:none!important}.banner{margin-top:0}';document.head.append(style);
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
`},Gd=["srcdoc","title"],Yd={__name:"DeviceHome",props:{device:Object},emits:["command","settings"],setup(d,{expose:h,emit:o}){const a=d,p=o,n=je(),t=je(700);function r(e){if(e.source!==n.value?.contentWindow||e.origin!==location.origin)return;if(e.data?.type==="device-height"){t.value=Math.max(200,Math.min(12e3,Number(e.data.height)||700));return}if(e.data?.type==="device-settings"){p("settings");return}if(e.data?.type!=="device-command")return;const{id:s,request:i}=e.data,g=e.source;p("command",i,m=>{n.value?.contentWindow===g&&g.postMessage({type:"device-result",id:s,reply:JSON.parse(JSON.stringify(m))},location.origin)})}return h({refresh:()=>n.value?.contentWindow?.UI?.reload()}),Ra(()=>window.addEventListener("message",r)),Ua(()=>window.removeEventListener("message",r)),(e,s)=>(Pe(),Ne("iframe",{ref_key:"frame",ref:n,class:"device-home",style:gl({height:t.value+"px"}),srcdoc:Je(Qd)[a.device.model],title:`${a.device.model.toUpperCase()} 首页`,sandbox:"allow-scripts allow-same-origin allow-modals"},null,12,Gd))}},Jd=Vn(Yd,[["__scopeId","data-v-72bddd4e"]]),Xd={class:"settings-heading"},Zd={class:"settings-layout"},eu={class:"settings-sidebar"},tu={class:"settings-navigation","aria-label":"设置分类"},nu=["aria-current","onClick"],ru={class:"settings-context"},su={class:"settings-content"},iu={class:"card settings-card"},au={class:"settings-card-heading"},ou={class:"settings-icon"},lu={key:0,class:"settings-block"},cu={class:"broker-options",role:"radiogroup","aria-label":"连接模式"},du=["aria-checked","disabled"],uu=["aria-checked","disabled"],pu={class:"settings-block"},hu={class:"field-title"},fu={class:"help"},mu=["disabled"],gu={class:"settings-block"},bu={class:"field-title"},yu={class:"help"},vu={class:"settings-fields"},wu=["disabled"],_u={class:"settings-password"},ku=["disabled","type"],xu=["aria-label"],Su={class:"settings-note help"},Au={class:"settings-actions"},Eu={class:"help"},Tu=["disabled"],Iu={class:"settings-tip"},Mu={key:1,class:"card settings-card"},Cu={class:"settings-card-heading"},Pu={class:"settings-icon"},Ou={class:"help"},Nu={class:"badge"},Ru={class:"device-toolbar"},Uu={class:"help"},Lu=["aria-expanded"],qu={class:"settings-fields"},ju={key:0},Bu={key:1,class:"protocol-note"},Fu={key:1,class:"managed-device-list"},Du={class:"device-row-actions"},Wu=["aria-label","onClick"],zu={class:"device-details"},Hu=["aria-label","onClick"],$u={key:2,class:"settings-empty"},Ku={class:"settings-footnote"},Vu={class:"card settings-card"},Qu={class:"settings-card-heading"},Gu={class:"settings-icon"},Yu={class:"account-summary"},Ju={class:"account-avatar"},Xu={class:"help"},Zu={class:"card settings-card"},ep={class:"settings-card-heading"},tp={class:"settings-icon"},np={class:"settings-block"},rp={class:"settings-fields"},sp={class:"settings-icon"},ip={__name:"PlatformSettings",props:{connection:Object,connected:Boolean,busy:Boolean,thirdParty:Boolean,devices:Array,states:Object,addForm:Object,deviceName:Function,now:Number},emits:["mode-change","connect","disconnect","add","remove","password","home","refresh","rename"],setup(d,{emit:h}){const o=d,a=h,p=je("connection"),n=je(!1),t=je(!1),r=je(""),e=je(""),s=Hn(()=>[{id:"connection",title:"MQTT 连接",description:"服务器与连接凭据",icon:"cloud"},{id:"devices",title:"设备管理",description:"设备列表与添加",icon:"plug"},...We.username?[{id:"account",title:"账号安全",description:"账号信息与密码",icon:"shield"}]:[]]),i=Hn(()=>o.devices.filter(m=>o.connected&&o.states[Ue(m)]?.available===!0).length);function g(m){return o.connected?o.states[Ue(m)]?.available===!0?"在线":o.states[Ue(m)]?.available===!1?"离线":"状态未知":"未连接"}return(m,l)=>{const u=La("RouterLink");return Pe(),Ne(Ht,null,[X("div",Xd,[l[20]||(l[20]=X("div",null,[X("p",{class:"eyebrow"},"偏好与管理"),X("h1",null,"设置"),X("p",{class:"help"},"管理连接、设备与账号，让每一台设备保持就绪。")],-1)),X("button",{class:"btn",onClick:l[0]||(l[0]=f=>a("home"))},[l[19]||(l[19]=He("返回首页",-1)),Le(De,{name:"arrow",size:16})])]),X("div",Zd,[X("aside",eu,[X("nav",tu,[(Pe(!0),Ne(Ht,null,ar(s.value,f=>(Pe(),Ne("button",{key:f.id,"aria-current":p.value===f.id?"page":void 0,onClick:y=>p.value=f.id},[Le(De,{name:f.icon},null,8,["name"]),X("span",null,[X("b",null,Oe(f.title),1),X("small",null,Oe(f.description),1)]),Le(De,{class:"nav-arrow",name:"arrow",size:15})],8,nu))),128))]),X("div",ru,[X("span",{class:Qt(["dot",d.connected?"ok":"warn"])},null,2),X("span",null,[He(Oe(d.connected?"连接已就绪":"尚未连接"),1),X("small",null,Oe(d.devices.length)+" 台设备 · "+Oe(i.value)+" 台在线",1)])])]),X("div",su,[p.value==="connection"?(Pe(),Ne(Ht,{key:0},[X("section",iu,[X("header",au,[X("span",ou,[Le(De,{name:"cloud",size:23})]),l[21]||(l[21]=X("div",null,[X("h2",null,"MQTT 连接"),X("p",{class:"help"},"选择服务器，建立设备与平台之间的连接。")],-1)),X("span",{class:Qt(["badge",d.connected?"ok":""])},Oe(d.busy?"连接中":d.connected?"已连接":"未连接"),3)]),Je(We).username?(Pe(),Ne("div",lu,[l[26]||(l[26]=X("div",{class:"field-title"},[X("h3",null,"连接方式"),X("p",{class:"help"},"使用平台服务，或连接自己的 MQTT 服务器。")],-1)),X("div",cu,[X("button",{type:"button",role:"radio","aria-checked":!d.thirdParty,disabled:d.busy,onClick:l[1]||(l[1]=f=>!d.thirdParty||a("mode-change",!1))},[Le(De,{name:"cloud"}),l[22]||(l[22]=X("span",null,[X("b",null,"平台 Broker"),X("small",null,"使用当前账号连接")],-1)),l[23]||(l[23]=X("span",{class:"choice-dot"},null,-1))],8,du),X("button",{type:"button",role:"radio","aria-checked":d.thirdParty,disabled:d.busy,onClick:l[2]||(l[2]=f=>d.thirdParty||a("mode-change",!0))},[Le(De,{name:"settings"}),l[24]||(l[24]=X("span",null,[X("b",null,"第三方 Broker"),X("small",null,"使用自己的服务器")],-1)),l[25]||(l[25]=X("span",{class:"choice-dot"},null,-1))],8,uu)])])):yt("",!0),X("form",{onSubmit:l[8]||(l[8]=yn(f=>a("connect"),["prevent"]))},[X("div",pu,[X("div",hu,[l[27]||(l[27]=X("h3",null,"服务器",-1)),X("p",fu,Oe(d.thirdParty?"服务器需要支持 MQTT over WebSocket。":"平台地址与用户名由当前账号自动配置。"),1)]),X("label",null,[l[28]||(l[28]=He("WebSocket 地址",-1)),ht(X("input",{"onUpdate:modelValue":l[3]||(l[3]=f=>d.connection.host=f),disabled:d.connected||!d.thirdParty,required:"",placeholder:"wss://mqtt.example.com/mqtt",spellcheck:"false"},null,8,mu),[[zt,d.connection.host]]),l[29]||(l[29]=X("small",{class:"help"},"支持 ws:// 和 wss:// 地址",-1))])]),X("div",gu,[X("div",bu,[l[30]||(l[30]=X("h3",null,"连接凭据",-1)),X("p",yu,Oe(d.thirdParty?"填写服务器分配的用户名与密码。":"与平台登录使用同一账号密码。"),1)]),X("div",vu,[X("label",null,[l[31]||(l[31]=He("MQTT 用户名",-1)),ht(X("input",{"onUpdate:modelValue":l[4]||(l[4]=f=>d.connection.username=f),disabled:d.connected||!d.thirdParty,autocomplete:"username",placeholder:"MQTT 用户名"},null,8,wu),[[zt,d.connection.username]])]),X("label",null,[l[32]||(l[32]=He("MQTT 密码",-1)),X("span",_u,[ht(X("input",{"onUpdate:modelValue":l[5]||(l[5]=f=>d.connection.password=f),disabled:d.connected,type:n.value?"text":"password",autocomplete:"current-password",placeholder:"输入连接密码"},null,8,ku),[[bl,d.connection.password]]),X("button",{class:"btn ghost icon",type:"button","aria-label":n.value?"隐藏 MQTT 密码":"显示 MQTT 密码",onClick:l[6]||(l[6]=f=>n.value=!n.value)},[Le(De,{name:"eye",size:18})],8,xu)])])]),X("p",Su,[Le(De,{name:"shield",size:16}),l[33]||(l[33]=He("平台密码保存在当前浏览器，用于自动连接；退出登录即清除。",-1))])]),X("footer",Au,[X("span",Eu,[X("span",{class:Qt(["dot",d.connected?"ok":"warn"])},null,2),He(Oe(d.connected?"默认自动连接；手动断开后将保持断开":d.busy?"正在连接服务器…":"填写完成后连接服务器"),1)]),d.connected?(Pe(),Ne("button",{key:0,class:"btn",type:"button",onClick:l[7]||(l[7]=f=>a("disconnect"))},"断开连接")):(Pe(),Ne("button",{key:1,class:"btn primary",disabled:d.busy},[Le(De,{name:"cloud",size:17}),He(Oe(d.busy?"连接中…":"连接服务器"),1)],8,Tu))])],32)]),X("div",Iu,[Le(De,{name:"signal",size:20}),X("div",null,[l[35]||(l[35]=X("b",null,"连接之后",-1)),l[36]||(l[36]=X("p",null,"使用相同 MQTT 账号的 TMCP 设备会自动出现在设备列表中。也可以前往设备管理手动添加。",-1)),X("button",{class:"btn ghost",onClick:l[9]||(l[9]=f=>p.value="devices")},[l[34]||(l[34]=He("查看设备管理",-1)),Le(De,{name:"arrow",size:15})])])])],64)):p.value==="devices"?(Pe(),Ne("section",Mu,[X("header",Cu,[X("span",Pu,[Le(De,{name:"plug",size:23})]),X("div",null,[l[37]||(l[37]=X("h2",null,"设备管理",-1)),X("p",Ou,"在这里查看和管理当前"+Oe(d.thirdParty?"浏览器":"账号")+"的设备。",1)]),X("span",Nu,Oe(d.devices.length)+" 台",1)]),X("div",Ru,[X("span",Uu,Oe(i.value)+" 台在线 · "+Oe(d.devices.length)+" 台设备",1),X("div",null,[X("button",{class:"btn",onClick:l[10]||(l[10]=f=>a("refresh")),"aria-label":"刷新设备列表"},"刷新"),X("button",{class:"btn primary","aria-expanded":t.value,onClick:l[11]||(l[11]=f=>t.value=!t.value)},[Le(De,{name:t.value?"close":"plus",size:17},null,8,["name"]),He(Oe(t.value?"取消添加":"添加设备"),1)],8,Lu)])]),t.value?(Pe(),Ne("form",{key:0,class:"add-device-panel",onSubmit:l[15]||(l[15]=yn(f=>a("add"),["prevent"]))},[l[45]||(l[45]=X("h3",null,"添加设备",-1)),X("label",null,[l[38]||(l[38]=He("MAC 地址",-1)),ht(X("input",{"onUpdate:modelValue":l[12]||(l[12]=f=>d.addForm.mac=f),"aria-label":"MAC 地址",required:"",placeholder:"AABBCCDDEEFF",maxlength:"17",spellcheck:"false"},null,512),[[zt,d.addForm.mac]]),l[39]||(l[39]=X("small",{class:"help"},"填写设备的 12 位 MAC 地址，也支持冒号或短横线分隔。",-1))]),X("div",qu,[X("label",null,[l[41]||(l[41]=He("型号",-1)),ht(X("select",{"aria-label":"型号","onUpdate:modelValue":l[13]||(l[13]=f=>d.addForm.model=f)},[...l[40]||(l[40]=[X("option",{value:"tc1"},"TC1 智能插排",-1),X("option",{value:"m1"},"M1 空气质量检测器",-1),X("option",{value:"a1"},"A1 空气净化器",-1)])],512),[[wi,d.addForm.model]])]),d.addForm.model==="tc1"?(Pe(),Ne("label",ju,[l[43]||(l[43]=He("协议",-1)),ht(X("select",{"onUpdate:modelValue":l[14]||(l[14]=f=>d.addForm.version=f)},[...l[42]||(l[42]=[X("option",{value:"v2"},"TMCP",-1),X("option",{value:"v1"},"Legacy",-1)])],512),[[wi,d.addForm.version]])])):(Pe(),Ne("div",Bu,[...l[44]||(l[44]=[X("span",{class:"help"},"协议",-1),X("span",{class:"badge"},"TMCP",-1)])]))]),l[46]||(l[46]=X("div",{class:"add-device-actions"},[X("button",{class:"btn primary"},"确认添加")],-1))],32)):yt("",!0),d.devices.length?(Pe(),Ne("div",Fu,[(Pe(!0),Ne(Ht,null,ar(d.devices,f=>(Pe(),Ne("div",{key:Je(Ue)(f),class:"managed-device"},[Le(ml,{device:f,state:d.states[Je(Ue)(f)]||{},name:d.deviceName(f),connected:d.connected,now:d.now},null,8,["device","state","name","connected","now"]),X("div",Du,[X("button",{class:"btn ghost","aria-label":`修改 ${d.deviceName(f)} 的名称`,onClick:y=>a("rename",f)},[Le(De,{name:"edit",size:15}),l[47]||(l[47]=He("改名",-1))],8,Wu),X("details",zu,[l[51]||(l[51]=X("summary",null,"详情",-1)),X("dl",null,[X("div",null,[l[48]||(l[48]=X("dt",null,"MAC 地址",-1)),X("dd",null,Oe(f.mac),1)]),X("div",null,[l[49]||(l[49]=X("dt",null,"连接协议",-1)),X("dd",null,Oe(f.version==="v1"?"Legacy":"TMCP"),1)]),X("div",null,[l[50]||(l[50]=X("dt",null,"状态",-1)),X("dd",null,Oe(g(f)),1)])]),X("button",{class:"btn danger","aria-label":`移除 ${d.deviceName(f)}`,onClick:y=>a("remove",f)},"移除此设备",8,Hu)])])]))),128))])):(Pe(),Ne("div",$u,[Le(De,{name:"plug",size:32}),l[52]||(l[52]=X("h3",null,"还没有设备",-1)),l[53]||(l[53]=X("p",{class:"help"},"连接后等待设备自动上线，或点击上方按钮手动添加。",-1))])),X("footer",Ku,[Le(De,{name:"signal",size:17}),l[54]||(l[54]=X("span",null,"TMCP 设备可自动发现；Legacy 仅支持 TC1。移除设备前会再次确认。",-1))])])):(Pe(),Ne(Ht,{key:2},[X("section",Vu,[X("header",Qu,[X("span",Gu,[Le(De,{name:"guest",size:23})]),l[55]||(l[55]=X("div",null,[X("h2",null,"账号安全"),X("p",{class:"help"},"管理登录信息，保护你的设备访问权限。")],-1))]),X("div",Yu,[X("span",Ju,Oe(Je(We).username?.slice(0,1).toUpperCase()),1),X("div",null,[X("b",null,Oe(Je(We).username),1),X("p",Xu,Oe(Je(We).isAdmin?"管理员":"普通账号")+" · 网站与平台 MQTT 共用账号",1)]),l[56]||(l[56]=X("span",{class:"badge ok"},"已登录",-1))])]),X("section",Zu,[X("header",ep,[X("span",tp,[Le(De,{name:"shield",size:23})]),l[57]||(l[57]=X("div",null,[X("h2",null,"修改密码"),X("p",{class:"help"},"修改成功后，使用新密码重新登录。")],-1))]),X("form",{onSubmit:l[18]||(l[18]=yn(f=>a("password",{current:r.value,password:e.value}),["prevent"]))},[X("div",np,[X("div",rp,[X("label",null,[l[58]||(l[58]=He("当前密码",-1)),ht(X("input",{"onUpdate:modelValue":l[16]||(l[16]=f=>r.value=f),type:"password",required:"",autocomplete:"current-password"},null,512),[[zt,r.value]])]),X("label",null,[l[59]||(l[59]=He("新密码",-1)),ht(X("input",{"onUpdate:modelValue":l[17]||(l[17]=f=>e.value=f),type:"password",required:"",minlength:"6",autocomplete:"new-password"},null,512),[[zt,e.value]]),l[60]||(l[60]=X("small",{class:"help"},"至少 6 个字符",-1))])])]),l[61]||(l[61]=X("footer",{class:"settings-actions"},[X("p",{class:"help"},"使用此账号的设备也需要更新 MQTT 密码。"),X("button",{class:"btn primary"},"修改密码并退出")],-1))],32)]),Je(We).isAdmin?(Pe(),rn(u,{key:0,class:"card administration-entry",to:"/admin"},{default:or(()=>[X("span",sp,[Le(De,{name:"settings",size:23})]),l[62]||(l[62]=X("span",null,[X("b",null,"平台管理"),X("small",null,"管理账号、设备归属和注册方式")],-1)),Le(De,{name:"arrow"})]),_:1})):yt("",!0)],64))])])],64)}}},ap=Vn(ip,[["__scopeId","data-v-ca832006"]]),op={class:"console-page"},lp={class:"console-topbar topbar"},cp={class:"console-nav"},dp={class:"platform-tabs tabs","aria-label":"主导航"},up=["aria-current"],pp=["aria-current"],hp={key:0,role:"alert",class:"feedback error"},fp={key:1,role:"status",class:"feedback"},mp={key:2,class:"dashboard-grid"},gp={class:"surface devices-panel"},bp={class:"device-list"},yp=["aria-pressed","onClick"],vp=["aria-label","onClick"],wp={key:0,class:"helper-text"},_p={key:0,class:"device-area"},kp={class:"device-heading"},xp={class:"help"},Sp=["disabled"],Ap={key:1,class:"surface empty-control"},Cp={__name:"App",setup(d){const h=Object.fromEntries(["tc1","m1","a1"].map(Q=>[Q,window.PhicommDemo.create(Q)])),o=yl(),a=_l(),p=je(null),n=je(null),t=je({});function r(Q){const q=t.value[Ue(Q)]||l[Ue(Q)]?.name||Q.name;if(q)return q;const ve=g.value.filter(L=>L.model===Q.model);return ii(Q)+(ve.length>1?" "+(ve.findIndex(L=>Ue(L)===Ue(Q))+1):"")}function e(Q,q,ve){if(Q.version==="v1"){t.value[Ue(Q)]=q,localStorage.setItem("phicomm.names."+(We.username||"guest"),JSON.stringify(t.value)),ve();return}P({action:"config.set",params:{section:"device",values:{name:q}}},L=>{if(!["ok","accepted"].includes(L.code)){ve(L.message||"保存失败");return}const N=l[Ue(Q)]||={};N.name=q,ve()},Q)}const s=je("home"),i=je(o.name==="Guest"),g=je([]),m=je(""),l=tr({}),u=je(!1),f=je(""),y=je(""),k=je(!1),b=je(Date.now()),_=tr({host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""}),A=tr({mac:"",model:"tc1",version:"v2"}),v=Hn(()=>{const Q=g.value.find(q=>Ue(q)===m.value);return Q?{...l[Ue(Q)],...Q}:null});er(m,async()=>{if(await kl(),!matchMedia("(max-width:800px)").matches)return;const Q=document.querySelector(".device-select[aria-pressed=true]"),q=Q?.closest(".device-list");q&&(q.scrollLeft+=Q.getBoundingClientRect().left-q.getBoundingClientRect().left)}),er(s,Q=>_i("pageview",i.value?Q==="settings"?"/guest/settings":"/guest":Q==="settings"?"/settings":"/")),er(()=>v.value?Ue(v.value):"",Q=>{Q&&_i("device_view",i.value?"/guest":"/",v.value.model)});let S,x,T;const C=new Map;function P(Q,q,ve=v.value){if(ve){const fe=h[ve.model].command(Q.action,Q.params);Object.assign(l[Ue(ve)]||={},h[ve.model].state),q({code:Q.action.endsWith(".get")?"ok":"accepted",data:fe});return}if(!u.value||!ve){q({code:"offline",message:"请先连接 MQTT"});return}if(ve.version==="v1"){Y(Q,q);return}const L=JSON.stringify([Ue(ve),Q.action,Q.params||{}]);if(Q.action.endsWith(".get")){const fe=[...C.values()].find(oe=>oe.signature===L);if(fe){const oe=fe.reply;fe.reply=R=>{oe(R),q(R)};return}}const N=Al(),se=ve,V=l[Ue(se)]||={};(V.pending||={})[N]=Q.action;const K=setTimeout(()=>{const fe=C.get(N);C.delete(N),delete V.pending[N],fe?.reply({code:"timeout",message:"暂未收到操作回执，请等待状态更新"})},2e4);C.set(N,{reply:q,timeout:K,key:Ue(se),signature:L});const G=Si(se,{...Q,request_id:N});S.publish(G.topic,G.payload,{qos:1,retain:!1},fe=>{if(fe){clearTimeout(K);const oe=C.get(N);C.delete(N),delete V.pending[N],oe?.reply({code:"error",message:"发送失败"})}})}const B=()=>i.value?"guest":We.username;function I(){ki(B(),!1),j()}function z(){ki(B(),!0),Z()}function j(){k.value=!1;for(const{reply:Q,timeout:q}of C.values())clearTimeout(q),Q({code:"offline",message:"MQTT 已断开"});C.clear(),S?.end(!0),S=null,u.value=!1,Object.keys(l).forEach(Q=>delete l[Q])}function F(){}async function le(){try{g.value=(i.value?Sl().map(Q=>({...Q,username:_.username})):await Wt("/devices")).map(xi),g.value.some(Q=>Ue(Q)===m.value)||(m.value=g.value[0]?Ue(g.value[0]):""),u.value&&void 0}catch(Q){f.value=Q.message}}function Z(){{u.value=!0,k.value=!1;for(const Q of g.value)Object.assign(l[Ue(Q)]||={},h[Q.model].state);return}}function Y({action:Q,params:q={}},ve){const L=v.value,N=K=>ve({code:"ok",data:K}),se=K=>ve({code:"unsupported",message:K});if(Q==="capabilities.get"){N({actions:["outlet.set","child_lock.set","indicator.set"]});return}if(Q==="status.get"){if(!Array.from({length:6},(K,G)=>L[`plug_${G}`]).every(K=>K?.on!==void 0)){se("尚未收到设备状态");return}N({name:L.name||"TC1",socket_states:Array.from({length:6},(K,G)=>!!L[`plug_${G}`]?.on),socket_names:Array.from({length:6},(K,G)=>L[`plug_${G}`]?.setting?.name||`插座 ${G+1}`),child_lock:!!(L.child_lock?.on??L.child_lock),led_enabled:!!(L.led_lock?.on??L.led_lock),mqtt_connected:!0,mqtt_host:_.host});return}if(Q==="power.get"){if(L.power_watts===void 0&&L.power===void 0){se("尚未收到电量数据");return}N({power_watts:L.power_watts??Number(L.power),energy_kwh:L.energy_kwh??Number(L.powerConsumption)});return}let V;if(Q==="outlet.set"){const K=q.index===void 0?[0,1,2,3,4,5]:[q.index];if(K.some(G=>!Number.isInteger(G)||G<0||G>5)){se("插座编号无效");return}V=Object.fromEntries(K.map(G=>[`plug_${G}`,{on:q.on?1:0}]))}else if(Q==="child_lock.set")V={child_lock:{on:q.enabled?1:0}};else if(Q==="indicator.set")V={led_lock:{on:q.enabled?1:0}};else if(Q==="config.set"&&q.section==="socket"&&!L.legacyText)V={[`plug_${q.values.index}`]:{setting:{name:q.values.name}}};else{se("此 Legacy 设备不支持该操作");return}try{for(const[K,G]of Object.entries(V)){const fe=Si(L,{[K]:G});S.publish(fe.topic,fe.payload,{qos:1,retain:!1},oe=>{oe&&(f.value="发送失败")})}ve({code:"accepted",data:{}})}catch(K){se(K.message)}}async function ie(){if(j(),y.value="",f.value="",i.value)Object.assign(_,{host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""},JSON.parse(localStorage.getItem("tmcp_broker")||"{}"));else{const Q=await Wt("/register/status");Object.assign(_,{host:Q.mqtt_ws_uri||`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:We.mqttUsername||We.username,password:We.password||wl(We.username)})}await le(),Z()}async function W(){try{const Q=xi({...A,version:A.model==="tc1"?A.version:"v2",...i.value?{username:_.username}:{}});if(i.value){if(g.value.some(q=>q.mac===Q.mac))throw Error("设备已存在");localStorage.setItem("phicomm_devices",JSON.stringify([...g.value,Q]))}else await Wt("/devices",{method:"POST",body:JSON.stringify(Q)});await le(),A.mac=""}catch(Q){f.value=Q.message}}async function ne(Q){if(confirm(`移除 ${Q.mac}？`))try{S?.unsubscribe(El(Q)),i.value?localStorage.setItem("phicomm_devices",JSON.stringify(g.value.filter(q=>Ue(q)!==Ue(Q)))):await Wt(`/devices/${Q.namespace?"scoped/":""}${Q.mac}${Q.namespace?"?mqtt_username="+encodeURIComponent(Q.mqtt_username||Q.username):""}`,{method:"DELETE"}),await le()}catch(q){f.value=q.message}}async function O(){try{await Wt("/auth/logout",{method:"POST",body:"{}"})}catch(Q){f.value=Q.message}We.username=null,We.mqttUsername=null,We.isAdmin=!1,We.aliases=[],We.password="",vl(),j(),await a.replace("/login")}async function ee(Q){try{await Wt("/auth/password",{method:"POST",body:JSON.stringify({current_password:Q.current,password:Q.password})}),await O()}catch(q){f.value=q.message}}return Ra(async()=>{o.name!=="Guest"&&await xl();try{t.value=JSON.parse(localStorage.getItem("phicomm.names."+(We.username||"guest"))||"{}")}catch{}await ie(),x=setInterval(()=>b.value=Date.now(),1e3),T=setInterval(()=>{!i.value&&!document.hidden&&le()},5e3)}),Ua(()=>{j(),clearInterval(x),clearInterval(T)}),(Q,q)=>{const ve=La("RouterLink");return Pe(),Ne("main",op,[X("header",lp,[q[10]||(q[10]=X("div",{class:"brand"},[X("span",{class:"kind"},"MQTT 管理平台"),X("h1",null,"Phicomm")],-1)),X("nav",cp,[X("span",{class:Qt(["status-pill",{online:u.value}])},Oe(u.value?"MQTT 已连接":"MQTT 未连接"),3),Je(We).isAdmin?(Pe(),rn(ve,{key:0,class:"btn",to:"/admin"},{default:or(()=>[...q[8]||(q[8]=[He("平台管理",-1)])]),_:1})):yt("",!0),Le(Tl),Je(We).username?(Pe(),Ne("button",{key:1,onClick:O},"退出")):(Pe(),rn(ve,{key:2,to:"/login"},{default:or(()=>[...q[9]||(q[9]=[He("登录",-1)])]),_:1}))])]),X("nav",dp,[X("button",{"aria-current":s.value==="home"?"page":void 0,onClick:q[0]||(q[0]=L=>s.value="home")},"首页",8,up),X("button",{"aria-current":s.value==="settings"?"page":void 0,onClick:q[1]||(q[1]=L=>s.value="settings")},"设置",8,pp)]),f.value?(Pe(),Ne("p",hp,Oe(f.value),1)):yt("",!0),y.value?(Pe(),Ne("p",fp,Oe(y.value),1)):yt("",!0),s.value==="home"?(Pe(),Ne("div",mp,[X("aside",gp,[q[11]||(q[11]=X("h2",null,"设备",-1)),X("ul",bp,[(Pe(!0),Ne(Ht,null,ar(g.value,L=>(Pe(),Ne("li",{key:Je(Ue)(L),class:"device-list-item"},[X("button",{class:"device-select","aria-pressed":m.value===Je(Ue)(L),onClick:N=>m.value=Je(Ue)(L)},[Le(ml,{device:L,state:l[Je(Ue)(L)]||{},name:r(L),connected:u.value,now:b.value},null,8,["device","state","name","connected","now"])],8,yp),X("button",{class:"device-rename btn ghost icon","aria-label":`修改 ${r(L)} 的名称`,onClick:N=>n.value.open(L,r(L))},[Le(De,{name:"edit",size:15})],8,vp)]))),128))]),X("button",{onClick:le},"刷新列表"),g.value.length?yt("",!0):(Pe(),Ne("p",wp,"暂无设备。设备上线后将自动显示，也可在设置中添加。"))]),v.value?(Pe(),Ne("div",_p,[X("div",kp,[X("div",null,[X("h2",null,Oe(r(v.value)),1),X("p",xp,Oe(Je(ii)(v.value)),1)]),X("span",{class:Qt(["badge",v.value.available===!0&&u.value?"ok":""])},Oe(u.value?v.value.available===!1?"离线":v.value.available===!0?"在线":"等待设备状态":"MQTT 未连接"),3),X("button",{disabled:!u.value,onClick:q[2]||(q[2]=L=>p.value?.refresh())},"刷新状态",8,Sp)]),(Pe(),rn(Jd,{ref_key:"home",ref:p,key:m.value,device:v.value,onCommand:P,onSettings:q[3]||(q[3]=L=>s.value="settings")},null,8,["device"]))])):(Pe(),Ne("section",Ap,[q[12]||(q[12]=X("h2",null,"从一台设备开始",-1)),q[13]||(q[13]=X("p",null,"在设置中连接 Broker 并添加设备。",-1)),X("button",{onClick:q[4]||(q[4]=L=>s.value="settings")},"打开设置")]))])):(Pe(),rn(ap,{key:3,connection:_,connected:u.value,busy:k.value,"third-party":i.value,devices:g.value,states:l,"add-form":A,"device-name":r,now:b.value,onRename:q[5]||(q[5]=L=>n.value.open(L,r(L))),onModeChange:q[6]||(q[6]=L=>{i.value=L,ie()}),onConnect:z,onDisconnect:I,onAdd:W,onRemove:ne,onPassword:ee,onHome:q[7]||(q[7]=L=>s.value="home"),onRefresh:le},null,8,["connection","connected","busy","third-party","devices","states","add-form","now"])),Le(Vd,{ref_key:"nameDialog",ref:n,onSave:e},null,512),q[14]||(q[14]=X("footer",{class:"console-footer"},"Phicomm",-1))])}}};export{Cp as default};
