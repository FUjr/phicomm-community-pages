import{o as Pe,e as Ne,b as J,k as Le,t as Oe,d as Je,x as Qt,y as Hn,h as He,i as ht,v as zt,f as vt,g as vn,r as je,z as Ra,A as Ua,B as gl,F as Ht,C as ar,p as We,j as bl,D as wi,c as rn,w as or,a as La,E as er,G as vl,m as Wt,H as yl,I as wl,u as _l,J as tr,K as kl,s as _i,L as xl,M as ki}from"./index-DiHR58e_.js";import{d as Re,l as Sl,a as xi,r as Al,c as Si,t as El}from"./deviceProtocol-DNiAofik.js";import{_ as De,a as Il}from"./ThemeToggle-ywVJaY1D.js";import{_ as Vn}from"./_plugin-vue_export-helper-DlAUqK2U.js";var ai=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,Ml=Object.getOwnPropertyNames,Cl=Object.prototype.hasOwnProperty,tt=(d,h)=>()=>(d&&(h=d(d=0)),h),be=(d,h)=>()=>(h||d((h={exports:{}}).exports,h),h.exports),Gt=(d,h)=>{for(var o in h)ai(d,o,{get:h[o],enumerable:!0})},Pl=(d,h,o,a)=>{if(h&&typeof h=="object"||typeof h=="function")for(let p of Ml(h))!Cl.call(d,p)&&p!==o&&ai(d,p,{get:()=>h[p],enumerable:!(a=Tl(h,p))||a.enumerable});return d},Ue=d=>Pl(ai({},"__esModule",{value:!0}),d),ue=tt(()=>{}),qe={};Gt(qe,{_debugEnd:()=>Dr,_debugProcess:()=>Fr,_events:()=>ns,_eventsCount:()=>rs,_exiting:()=>Er,_fatalExceptions:()=>qr,_getActiveHandles:()=>za,_getActiveRequests:()=>Wa,_kill:()=>Mr,_linkedBinding:()=>Fa,_maxListeners:()=>ts,_preload_modules:()=>Zr,_rawDebug:()=>xr,_startProfilerIdleNotifier:()=>Wr,_stopProfilerIdleNotifier:()=>zr,_tickCallback:()=>Br,abort:()=>Vr,addListener:()=>ss,allowedNodeEnvironmentFlags:()=>Ur,arch:()=>cr,argv:()=>pr,argv0:()=>Xr,assert:()=>Ha,binding:()=>br,browser:()=>kr,chdir:()=>wr,config:()=>Ir,cpuUsage:()=>sn,cwd:()=>yr,debugPort:()=>Jr,default:()=>li,dlopen:()=>Da,domain:()=>Ar,emit:()=>cs,emitWarning:()=>gr,env:()=>ur,execArgv:()=>hr,execPath:()=>Yr,exit:()=>Nr,features:()=>Lr,hasUncaughtExceptionCaptureCallback:()=>$a,hrtime:()=>yn,kill:()=>Or,listeners:()=>Va,memoryUsage:()=>Pr,moduleLoadList:()=>Sr,nextTick:()=>ja,off:()=>as,on:()=>ft,once:()=>is,openStdin:()=>Rr,pid:()=>Qr,platform:()=>dr,ppid:()=>Gr,prependListener:()=>ds,prependOnceListener:()=>us,reallyExit:()=>Tr,release:()=>_r,removeAllListeners:()=>ls,removeListener:()=>os,resourceUsage:()=>Cr,setSourceMapsEnabled:()=>es,setUncaughtExceptionCaptureCallback:()=>jr,stderr:()=>$r,stdin:()=>Kr,stdout:()=>Hr,title:()=>lr,umask:()=>vr,uptime:()=>Ka,version:()=>fr,versions:()=>mr});function oi(d){throw new Error("Node.js process "+d+" is not supported by JSPM core outside of Node.js")}function Ol(){!Ut||!Nt||(Ut=!1,Nt.length?dt=Nt.concat(dt):cn=-1,dt.length&&qa())}function qa(){if(!Ut){var d=setTimeout(Ol,0);Ut=!0;for(var h=dt.length;h;){for(Nt=dt,dt=[];++cn<h;)Nt&&Nt[cn].run();cn=-1,h=dt.length}Nt=null,Ut=!1,clearTimeout(d)}}function ja(d){var h=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)h[o-1]=arguments[o];dt.push(new Ba(d,h)),dt.length===1&&!Ut&&setTimeout(qa,0)}function Ba(d,h){this.fun=d,this.array=h}function Qe(){}function Fa(d){oi("_linkedBinding")}function Da(d){oi("dlopen")}function Wa(){return[]}function za(){return[]}function Ha(d,h){if(!d)throw new Error(h||"assertion error")}function $a(){return!1}function Ka(){return gt.now()/1e3}function yn(d){var h=Math.floor((Date.now()-gt.now())*.001),o=gt.now()*.001,a=Math.floor(o)+h,p=Math.floor(o%1*1e9);return d&&(a=a-d[0],p=p-d[1],p<0&&(a--,p+=wn)),[a,p]}function ft(){return li}function Va(d){return[]}var dt,Ut,Nt,cn,lr,cr,dr,ur,pr,hr,fr,mr,gr,br,vr,yr,wr,_r,kr,xr,Sr,Ar,Er,Ir,Tr,Mr,sn,Cr,Pr,Or,Nr,Rr,Ur,Lr,qr,jr,Br,Fr,Dr,Wr,zr,Hr,$r,Kr,Vr,Qr,Gr,Yr,Jr,Xr,Zr,es,gt,nr,wn,ts,ns,rs,ss,is,as,os,ls,cs,ds,us,li,Nl=tt(()=>{ue(),he(),pe(),dt=[],Ut=!1,cn=-1,Ba.prototype.run=function(){this.fun.apply(null,this.array)},lr="browser",cr="x64",dr="browser",ur={PATH:"/usr/bin",LANG:typeof navigator<"u"?navigator.language+".UTF-8":void 0,PWD:"/",HOME:"/home",TMP:"/tmp"},pr=["/usr/bin/node"],hr=[],fr="v16.8.0",mr={},gr=function(d,h){console.warn((h?h+": ":"")+d)},br=function(d){oi("binding")},vr=function(d){return 0},yr=function(){return"/"},wr=function(d){},_r={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},kr=!0,xr=Qe,Sr=[],Ar={},Er=!1,Ir={},Tr=Qe,Mr=Qe,sn=function(){return{}},Cr=sn,Pr=sn,Or=Qe,Nr=Qe,Rr=Qe,Ur={},Lr={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},qr=Qe,jr=Qe,Br=Qe,Fr=Qe,Dr=Qe,Wr=Qe,zr=Qe,Hr=void 0,$r=void 0,Kr=void 0,Vr=Qe,Qr=2,Gr=1,Yr="/bin/usr/node",Jr=9229,Xr="node",Zr=[],es=Qe,gt={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},gt.now===void 0&&(nr=Date.now(),gt.timing&&gt.timing.navigationStart&&(nr=gt.timing.navigationStart),gt.now=()=>Date.now()-nr),wn=1e9,yn.bigint=function(d){var h=yn(d);return typeof BigInt>"u"?h[0]*wn+h[1]:BigInt(h[0]*wn)+BigInt(h[1])},ts=10,ns={},rs=0,ss=ft,is=ft,as=ft,os=ft,ls=ft,cs=Qe,ds=ft,us=ft,li={version:fr,versions:mr,arch:cr,platform:dr,browser:kr,release:_r,_rawDebug:xr,moduleLoadList:Sr,binding:br,_linkedBinding:Fa,_events:ns,_eventsCount:rs,_maxListeners:ts,on:ft,addListener:ss,once:is,off:as,removeListener:os,removeAllListeners:ls,emit:cs,prependListener:ds,prependOnceListener:us,listeners:Va,domain:Ar,_exiting:Er,config:Ir,dlopen:Da,uptime:Ka,_getActiveRequests:Wa,_getActiveHandles:za,reallyExit:Tr,_kill:Mr,cpuUsage:sn,resourceUsage:Cr,memoryUsage:Pr,kill:Or,exit:Nr,openStdin:Rr,allowedNodeEnvironmentFlags:Ur,assert:Ha,features:Lr,_fatalExceptions:qr,setUncaughtExceptionCaptureCallback:jr,hasUncaughtExceptionCaptureCallback:$a,emitWarning:gr,nextTick:ja,_tickCallback:Br,_debugProcess:Fr,_debugEnd:Dr,_startProfilerIdleNotifier:Wr,_stopProfilerIdleNotifier:zr,stdout:Hr,stdin:Kr,stderr:$r,abort:Vr,umask:vr,chdir:wr,cwd:yr,env:ur,title:lr,argv:pr,execArgv:hr,pid:Qr,ppid:Gr,execPath:Yr,debugPort:Jr,hrtime:yn,argv0:Xr,_preload_modules:Zr,setSourceMapsEnabled:es}}),pe=tt(()=>{Nl()});function Rl(){if(ps)return $t;ps=!0,$t.byteLength=r,$t.toByteArray=s,$t.fromByteArray=f;for(var d=[],h=[],o=typeof Uint8Array<"u"?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,n=a.length;p<n;++p)d[p]=a[p],h[a.charCodeAt(p)]=p;h[45]=62,h[95]=63;function t(l){var u=l.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var m=l.indexOf("=");m===-1&&(m=u);var v=m===u?0:4-m%4;return[m,v]}function r(l){var u=t(l),m=u[0],v=u[1];return(m+v)*3/4-v}function e(l,u,m){return(u+m)*3/4-m}function s(l){var u,m=t(l),v=m[0],k=m[1],b=new o(e(l,v,k)),_=0,A=k>0?v-4:v,y;for(y=0;y<A;y+=4)u=h[l.charCodeAt(y)]<<18|h[l.charCodeAt(y+1)]<<12|h[l.charCodeAt(y+2)]<<6|h[l.charCodeAt(y+3)],b[_++]=u>>16&255,b[_++]=u>>8&255,b[_++]=u&255;return k===2&&(u=h[l.charCodeAt(y)]<<2|h[l.charCodeAt(y+1)]>>4,b[_++]=u&255),k===1&&(u=h[l.charCodeAt(y)]<<10|h[l.charCodeAt(y+1)]<<4|h[l.charCodeAt(y+2)]>>2,b[_++]=u>>8&255,b[_++]=u&255),b}function i(l){return d[l>>18&63]+d[l>>12&63]+d[l>>6&63]+d[l&63]}function g(l,u,m){for(var v,k=[],b=u;b<m;b+=3)v=(l[b]<<16&16711680)+(l[b+1]<<8&65280)+(l[b+2]&255),k.push(i(v));return k.join("")}function f(l){for(var u,m=l.length,v=m%3,k=[],b=16383,_=0,A=m-v;_<A;_+=b)k.push(g(l,_,_+b>A?A:_+b));return v===1?(u=l[m-1],k.push(d[u>>2]+d[u<<4&63]+"==")):v===2&&(u=(l[m-2]<<8)+l[m-1],k.push(d[u>>10]+d[u>>4&63]+d[u<<2&63]+"=")),k.join("")}return $t}function Ul(){return hs?an:(hs=!0,an.read=function(d,h,o,a,p){var n,t,r=p*8-a-1,e=(1<<r)-1,s=e>>1,i=-7,g=o?p-1:0,f=o?-1:1,l=d[h+g];for(g+=f,n=l&(1<<-i)-1,l>>=-i,i+=r;i>0;n=n*256+d[h+g],g+=f,i-=8);for(t=n&(1<<-i)-1,n>>=-i,i+=a;i>0;t=t*256+d[h+g],g+=f,i-=8);if(n===0)n=1-s;else{if(n===e)return t?NaN:(l?-1:1)*(1/0);t=t+Math.pow(2,a),n=n-s}return(l?-1:1)*t*Math.pow(2,n-a)},an.write=function(d,h,o,a,p,n){var t,r,e,s=n*8-p-1,i=(1<<s)-1,g=i>>1,f=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,l=a?0:n-1,u=a?1:-1,m=h<0||h===0&&1/h<0?1:0;for(h=Math.abs(h),isNaN(h)||h===1/0?(r=isNaN(h)?1:0,t=i):(t=Math.floor(Math.log(h)/Math.LN2),h*(e=Math.pow(2,-t))<1&&(t--,e*=2),t+g>=1?h+=f/e:h+=f*Math.pow(2,1-g),h*e>=2&&(t++,e/=2),t+g>=i?(r=0,t=i):t+g>=1?(r=(h*e-1)*Math.pow(2,p),t=t+g):(r=h*Math.pow(2,g-1)*Math.pow(2,p),t=0));p>=8;d[o+l]=r&255,l+=u,r/=256,p-=8);for(t=t<<p|r,s+=p;s>0;d[o+l]=t&255,l+=u,t/=256,s-=8);d[o+l-u]|=m*128},an)}function Ll(){if(fs)return Et;fs=!0;let d=Rl(),h=Ul(),o=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Et.Buffer=t,Et.SlowBuffer=k,Et.INSPECT_MAX_BYTES=50;let a=2147483647;Et.kMaxLength=a,t.TYPED_ARRAY_SUPPORT=p(),!t.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function p(){try{let c=new Uint8Array(1),w={foo:function(){return 42}};return Object.setPrototypeOf(w,Uint8Array.prototype),Object.setPrototypeOf(c,w),c.foo()===42}catch{return!1}}Object.defineProperty(t.prototype,"parent",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.buffer}}),Object.defineProperty(t.prototype,"offset",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.byteOffset}});function n(c){if(c>a)throw new RangeError('The value "'+c+'" is invalid for option "size"');let w=new Uint8Array(c);return Object.setPrototypeOf(w,t.prototype),w}function t(c,w,E){if(typeof c=="number"){if(typeof w=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return i(c)}return r(c,w,E)}t.poolSize=8192;function r(c,w,E){if(typeof c=="string")return g(c,w);if(ArrayBuffer.isView(c))return l(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if($(c,ArrayBuffer)||c&&$(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($(c,SharedArrayBuffer)||c&&$(c.buffer,SharedArrayBuffer)))return u(c,w,E);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let F=c.valueOf&&c.valueOf();if(F!=null&&F!==c)return t.from(F,w,E);let ee=m(c);if(ee)return ee;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return t.from(c[Symbol.toPrimitive]("string"),w,E);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}t.from=function(c,w,E){return r(c,w,E)},Object.setPrototypeOf(t.prototype,Uint8Array.prototype),Object.setPrototypeOf(t,Uint8Array);function e(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function s(c,w,E){return e(c),c<=0?n(c):w!==void 0?typeof E=="string"?n(c).fill(w,E):n(c).fill(w):n(c)}t.alloc=function(c,w,E){return s(c,w,E)};function i(c){return e(c),n(c<0?0:v(c)|0)}t.allocUnsafe=function(c){return i(c)},t.allocUnsafeSlow=function(c){return i(c)};function g(c,w){if((typeof w!="string"||w==="")&&(w="utf8"),!t.isEncoding(w))throw new TypeError("Unknown encoding: "+w);let E=b(c,w)|0,F=n(E),ee=F.write(c,w);return ee!==E&&(F=F.slice(0,ee)),F}function f(c){let w=c.length<0?0:v(c.length)|0,E=n(w);for(let F=0;F<w;F+=1)E[F]=c[F]&255;return E}function l(c){if($(c,Uint8Array)){let w=new Uint8Array(c);return u(w.buffer,w.byteOffset,w.byteLength)}return f(c)}function u(c,w,E){if(w<0||c.byteLength<w)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<w+(E||0))throw new RangeError('"length" is outside of buffer bounds');let F;return w===void 0&&E===void 0?F=new Uint8Array(c):E===void 0?F=new Uint8Array(c,w):F=new Uint8Array(c,w,E),Object.setPrototypeOf(F,t.prototype),F}function m(c){if(t.isBuffer(c)){let w=v(c.length)|0,E=n(w);return E.length===0||c.copy(E,0,0,w),E}if(c.length!==void 0)return typeof c.length!="number"||ve(c.length)?n(0):f(c);if(c.type==="Buffer"&&Array.isArray(c.data))return f(c.data)}function v(c){if(c>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return c|0}function k(c){return+c!=c&&(c=0),t.alloc(+c)}t.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==t.prototype},t.compare=function(c,w){if($(c,Uint8Array)&&(c=t.from(c,c.offset,c.byteLength)),$(w,Uint8Array)&&(w=t.from(w,w.offset,w.byteLength)),!t.isBuffer(c)||!t.isBuffer(w))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===w)return 0;let E=c.length,F=w.length;for(let ee=0,fe=Math.min(E,F);ee<fe;++ee)if(c[ee]!==w[ee]){E=c[ee],F=w[ee];break}return E<F?-1:F<E?1:0},t.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(c,w){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return t.alloc(0);let E;if(w===void 0)for(w=0,E=0;E<c.length;++E)w+=c[E].length;let F=t.allocUnsafe(w),ee=0;for(E=0;E<c.length;++E){let fe=c[E];if($(fe,Uint8Array))ee+fe.length>F.length?(t.isBuffer(fe)||(fe=t.from(fe)),fe.copy(F,ee)):Uint8Array.prototype.set.call(F,fe,ee);else if(t.isBuffer(fe))fe.copy(F,ee);else throw new TypeError('"list" argument must be an Array of Buffers');ee+=fe.length}return F};function b(c,w){if(t.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||$(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);let E=c.length,F=arguments.length>2&&arguments[2]===!0;if(!F&&E===0)return 0;let ee=!1;for(;;)switch(w){case"ascii":case"latin1":case"binary":return E;case"utf8":case"utf-8":return W(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E*2;case"hex":return E>>>1;case"base64":return ge(c).length;default:if(ee)return F?-1:W(c).length;w=(""+w).toLowerCase(),ee=!0}}t.byteLength=b;function _(c,w,E){let F=!1;if((w===void 0||w<0)&&(w=0),w>this.length||((E===void 0||E>this.length)&&(E=this.length),E<=0)||(E>>>=0,w>>>=0,E<=w))return"";for(c||(c="utf8");;)switch(c){case"hex":return G(this,w,E);case"utf8":case"utf-8":return z(this,w,E);case"ascii":return le(this,w,E);case"latin1":case"binary":return X(this,w,E);case"base64":return T(this,w,E);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,w,E);default:if(F)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),F=!0}}t.prototype._isBuffer=!0;function A(c,w,E){let F=c[w];c[w]=c[E],c[E]=F}t.prototype.swap16=function(){let c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let w=0;w<c;w+=2)A(this,w,w+1);return this},t.prototype.swap32=function(){let c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let w=0;w<c;w+=4)A(this,w,w+3),A(this,w+1,w+2);return this},t.prototype.swap64=function(){let c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let w=0;w<c;w+=8)A(this,w,w+7),A(this,w+1,w+6),A(this,w+2,w+5),A(this,w+3,w+4);return this},t.prototype.toString=function(){let c=this.length;return c===0?"":arguments.length===0?z(this,0,c):_.apply(this,arguments)},t.prototype.toLocaleString=t.prototype.toString,t.prototype.equals=function(c){if(!t.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:t.compare(this,c)===0},t.prototype.inspect=function(){let c="",w=Et.INSPECT_MAX_BYTES;return c=this.toString("hex",0,w).replace(/(.{2})/g,"$1 ").trim(),this.length>w&&(c+=" ... "),"<Buffer "+c+">"},o&&(t.prototype[o]=t.prototype.inspect),t.prototype.compare=function(c,w,E,F,ee){if($(c,Uint8Array)&&(c=t.from(c,c.offset,c.byteLength)),!t.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(w===void 0&&(w=0),E===void 0&&(E=c?c.length:0),F===void 0&&(F=0),ee===void 0&&(ee=this.length),w<0||E>c.length||F<0||ee>this.length)throw new RangeError("out of range index");if(F>=ee&&w>=E)return 0;if(F>=ee)return-1;if(w>=E)return 1;if(w>>>=0,E>>>=0,F>>>=0,ee>>>=0,this===c)return 0;let fe=ee-F,xe=E-w,Y=Math.min(fe,xe),oe=this.slice(F,ee),Ee=c.slice(w,E);for(let Ie=0;Ie<Y;++Ie)if(oe[Ie]!==Ee[Ie]){fe=oe[Ie],xe=Ee[Ie];break}return fe<xe?-1:xe<fe?1:0};function y(c,w,E,F,ee){if(c.length===0)return-1;if(typeof E=="string"?(F=E,E=0):E>2147483647?E=2147483647:E<-2147483648&&(E=-2147483648),E=+E,ve(E)&&(E=ee?0:c.length-1),E<0&&(E=c.length+E),E>=c.length){if(ee)return-1;E=c.length-1}else if(E<0)if(ee)E=0;else return-1;if(typeof w=="string"&&(w=t.from(w,F)),t.isBuffer(w))return w.length===0?-1:S(c,w,E,F,ee);if(typeof w=="number")return w=w&255,typeof Uint8Array.prototype.indexOf=="function"?ee?Uint8Array.prototype.indexOf.call(c,w,E):Uint8Array.prototype.lastIndexOf.call(c,w,E):S(c,[w],E,F,ee);throw new TypeError("val must be string, number or Buffer")}function S(c,w,E,F,ee){let fe=1,xe=c.length,Y=w.length;if(F!==void 0&&(F=String(F).toLowerCase(),F==="ucs2"||F==="ucs-2"||F==="utf16le"||F==="utf-16le")){if(c.length<2||w.length<2)return-1;fe=2,xe/=2,Y/=2,E/=2}function oe(Ie,Te){return fe===1?Ie[Te]:Ie.readUInt16BE(Te*fe)}let Ee;if(ee){let Ie=-1;for(Ee=E;Ee<xe;Ee++)if(oe(c,Ee)===oe(w,Ie===-1?0:Ee-Ie)){if(Ie===-1&&(Ie=Ee),Ee-Ie+1===Y)return Ie*fe}else Ie!==-1&&(Ee-=Ee-Ie),Ie=-1}else for(E+Y>xe&&(E=xe-Y),Ee=E;Ee>=0;Ee--){let Ie=!0;for(let Te=0;Te<Y;Te++)if(oe(c,Ee+Te)!==oe(w,Te)){Ie=!1;break}if(Ie)return Ee}return-1}t.prototype.includes=function(c,w,E){return this.indexOf(c,w,E)!==-1},t.prototype.indexOf=function(c,w,E){return y(this,c,w,E,!0)},t.prototype.lastIndexOf=function(c,w,E){return y(this,c,w,E,!1)};function x(c,w,E,F){E=Number(E)||0;let ee=c.length-E;F?(F=Number(F),F>ee&&(F=ee)):F=ee;let fe=w.length;F>fe/2&&(F=fe/2);let xe;for(xe=0;xe<F;++xe){let Y=parseInt(w.substr(xe*2,2),16);if(ve(Y))return xe;c[E+xe]=Y}return xe}function I(c,w,E,F){return we(W(w,c.length-E),c,E,F)}function P(c,w,E,F){return we(se(w),c,E,F)}function O(c,w,E,F){return we(ge(w),c,E,F)}function j(c,w,E,F){return we(me(w,c.length-E),c,E,F)}t.prototype.write=function(c,w,E,F){if(w===void 0)F="utf8",E=this.length,w=0;else if(E===void 0&&typeof w=="string")F=w,E=this.length,w=0;else if(isFinite(w))w=w>>>0,isFinite(E)?(E=E>>>0,F===void 0&&(F="utf8")):(F=E,E=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let ee=this.length-w;if((E===void 0||E>ee)&&(E=ee),c.length>0&&(E<0||w<0)||w>this.length)throw new RangeError("Attempt to write outside buffer bounds");F||(F="utf8");let fe=!1;for(;;)switch(F){case"hex":return x(this,c,w,E);case"utf8":case"utf-8":return I(this,c,w,E);case"ascii":case"latin1":case"binary":return P(this,c,w,E);case"base64":return O(this,c,w,E);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,c,w,E);default:if(fe)throw new TypeError("Unknown encoding: "+F);F=(""+F).toLowerCase(),fe=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function T(c,w,E){return w===0&&E===c.length?d.fromByteArray(c):d.fromByteArray(c.slice(w,E))}function z(c,w,E){E=Math.min(c.length,E);let F=[],ee=w;for(;ee<E;){let fe=c[ee],xe=null,Y=fe>239?4:fe>223?3:fe>191?2:1;if(ee+Y<=E){let oe,Ee,Ie,Te;switch(Y){case 1:fe<128&&(xe=fe);break;case 2:oe=c[ee+1],(oe&192)===128&&(Te=(fe&31)<<6|oe&63,Te>127&&(xe=Te));break;case 3:oe=c[ee+1],Ee=c[ee+2],(oe&192)===128&&(Ee&192)===128&&(Te=(fe&15)<<12|(oe&63)<<6|Ee&63,Te>2047&&(Te<55296||Te>57343)&&(xe=Te));break;case 4:oe=c[ee+1],Ee=c[ee+2],Ie=c[ee+3],(oe&192)===128&&(Ee&192)===128&&(Ie&192)===128&&(Te=(fe&15)<<18|(oe&63)<<12|(Ee&63)<<6|Ie&63,Te>65535&&Te<1114112&&(xe=Te))}}xe===null?(xe=65533,Y=1):xe>65535&&(xe-=65536,F.push(xe>>>10&1023|55296),xe=56320|xe&1023),F.push(xe),ee+=Y}return B(F)}let q=4096;function B(c){let w=c.length;if(w<=q)return String.fromCharCode.apply(String,c);let E="",F=0;for(;F<w;)E+=String.fromCharCode.apply(String,c.slice(F,F+=q));return E}function le(c,w,E){let F="";E=Math.min(c.length,E);for(let ee=w;ee<E;++ee)F+=String.fromCharCode(c[ee]&127);return F}function X(c,w,E){let F="";E=Math.min(c.length,E);for(let ee=w;ee<E;++ee)F+=String.fromCharCode(c[ee]);return F}function G(c,w,E){let F=c.length;(!w||w<0)&&(w=0),(!E||E<0||E>F)&&(E=F);let ee="";for(let fe=w;fe<E;++fe)ee+=_e[c[fe]];return ee}function ie(c,w,E){let F=c.slice(w,E),ee="";for(let fe=0;fe<F.length-1;fe+=2)ee+=String.fromCharCode(F[fe]+F[fe+1]*256);return ee}t.prototype.slice=function(c,w){let E=this.length;c=~~c,w=w===void 0?E:~~w,c<0?(c+=E,c<0&&(c=0)):c>E&&(c=E),w<0?(w+=E,w<0&&(w=0)):w>E&&(w=E),w<c&&(w=c);let F=this.subarray(c,w);return Object.setPrototypeOf(F,t.prototype),F};function D(c,w,E){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+w>E)throw new RangeError("Trying to access beyond buffer length")}t.prototype.readUintLE=t.prototype.readUIntLE=function(c,w,E){c=c>>>0,w=w>>>0,E||D(c,w,this.length);let F=this[c],ee=1,fe=0;for(;++fe<w&&(ee*=256);)F+=this[c+fe]*ee;return F},t.prototype.readUintBE=t.prototype.readUIntBE=function(c,w,E){c=c>>>0,w=w>>>0,E||D(c,w,this.length);let F=this[c+--w],ee=1;for(;w>0&&(ee*=256);)F+=this[c+--w]*ee;return F},t.prototype.readUint8=t.prototype.readUInt8=function(c,w){return c=c>>>0,w||D(c,1,this.length),this[c]},t.prototype.readUint16LE=t.prototype.readUInt16LE=function(c,w){return c=c>>>0,w||D(c,2,this.length),this[c]|this[c+1]<<8},t.prototype.readUint16BE=t.prototype.readUInt16BE=function(c,w){return c=c>>>0,w||D(c,2,this.length),this[c]<<8|this[c+1]},t.prototype.readUint32LE=t.prototype.readUInt32LE=function(c,w){return c=c>>>0,w||D(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},t.prototype.readUint32BE=t.prototype.readUInt32BE=function(c,w){return c=c>>>0,w||D(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},t.prototype.readBigUInt64LE=ce(function(c){c=c>>>0,V(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&de(c,this.length-8);let F=w+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,ee=this[++c]+this[++c]*2**8+this[++c]*2**16+E*2**24;return BigInt(F)+(BigInt(ee)<<BigInt(32))}),t.prototype.readBigUInt64BE=ce(function(c){c=c>>>0,V(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&de(c,this.length-8);let F=w*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],ee=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+E;return(BigInt(F)<<BigInt(32))+BigInt(ee)}),t.prototype.readIntLE=function(c,w,E){c=c>>>0,w=w>>>0,E||D(c,w,this.length);let F=this[c],ee=1,fe=0;for(;++fe<w&&(ee*=256);)F+=this[c+fe]*ee;return ee*=128,F>=ee&&(F-=Math.pow(2,8*w)),F},t.prototype.readIntBE=function(c,w,E){c=c>>>0,w=w>>>0,E||D(c,w,this.length);let F=w,ee=1,fe=this[c+--F];for(;F>0&&(ee*=256);)fe+=this[c+--F]*ee;return ee*=128,fe>=ee&&(fe-=Math.pow(2,8*w)),fe},t.prototype.readInt8=function(c,w){return c=c>>>0,w||D(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},t.prototype.readInt16LE=function(c,w){c=c>>>0,w||D(c,2,this.length);let E=this[c]|this[c+1]<<8;return E&32768?E|4294901760:E},t.prototype.readInt16BE=function(c,w){c=c>>>0,w||D(c,2,this.length);let E=this[c+1]|this[c]<<8;return E&32768?E|4294901760:E},t.prototype.readInt32LE=function(c,w){return c=c>>>0,w||D(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},t.prototype.readInt32BE=function(c,w){return c=c>>>0,w||D(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},t.prototype.readBigInt64LE=ce(function(c){c=c>>>0,V(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&de(c,this.length-8);let F=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(E<<24);return(BigInt(F)<<BigInt(32))+BigInt(w+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),t.prototype.readBigInt64BE=ce(function(c){c=c>>>0,V(c,"offset");let w=this[c],E=this[c+7];(w===void 0||E===void 0)&&de(c,this.length-8);let F=(w<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(F)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+E)}),t.prototype.readFloatLE=function(c,w){return c=c>>>0,w||D(c,4,this.length),h.read(this,c,!0,23,4)},t.prototype.readFloatBE=function(c,w){return c=c>>>0,w||D(c,4,this.length),h.read(this,c,!1,23,4)},t.prototype.readDoubleLE=function(c,w){return c=c>>>0,w||D(c,8,this.length),h.read(this,c,!0,52,8)},t.prototype.readDoubleBE=function(c,w){return c=c>>>0,w||D(c,8,this.length),h.read(this,c,!1,52,8)};function te(c,w,E,F,ee,fe){if(!t.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(w>ee||w<fe)throw new RangeError('"value" argument is out of bounds');if(E+F>c.length)throw new RangeError("Index out of range")}t.prototype.writeUintLE=t.prototype.writeUIntLE=function(c,w,E,F){if(c=+c,w=w>>>0,E=E>>>0,!F){let xe=Math.pow(2,8*E)-1;te(this,c,w,E,xe,0)}let ee=1,fe=0;for(this[w]=c&255;++fe<E&&(ee*=256);)this[w+fe]=c/ee&255;return w+E},t.prototype.writeUintBE=t.prototype.writeUIntBE=function(c,w,E,F){if(c=+c,w=w>>>0,E=E>>>0,!F){let xe=Math.pow(2,8*E)-1;te(this,c,w,E,xe,0)}let ee=E-1,fe=1;for(this[w+ee]=c&255;--ee>=0&&(fe*=256);)this[w+ee]=c/fe&255;return w+E},t.prototype.writeUint8=t.prototype.writeUInt8=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,1,255,0),this[w]=c&255,w+1},t.prototype.writeUint16LE=t.prototype.writeUInt16LE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,2,65535,0),this[w]=c&255,this[w+1]=c>>>8,w+2},t.prototype.writeUint16BE=t.prototype.writeUInt16BE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,2,65535,0),this[w]=c>>>8,this[w+1]=c&255,w+2},t.prototype.writeUint32LE=t.prototype.writeUInt32LE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,4,4294967295,0),this[w+3]=c>>>24,this[w+2]=c>>>16,this[w+1]=c>>>8,this[w]=c&255,w+4},t.prototype.writeUint32BE=t.prototype.writeUInt32BE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,4,4294967295,0),this[w]=c>>>24,this[w+1]=c>>>16,this[w+2]=c>>>8,this[w+3]=c&255,w+4};function R(c,w,E,F,ee){Q(w,F,ee,c,E,7);let fe=Number(w&BigInt(4294967295));c[E++]=fe,fe=fe>>8,c[E++]=fe,fe=fe>>8,c[E++]=fe,fe=fe>>8,c[E++]=fe;let xe=Number(w>>BigInt(32)&BigInt(4294967295));return c[E++]=xe,xe=xe>>8,c[E++]=xe,xe=xe>>8,c[E++]=xe,xe=xe>>8,c[E++]=xe,E}function Z(c,w,E,F,ee){Q(w,F,ee,c,E,7);let fe=Number(w&BigInt(4294967295));c[E+7]=fe,fe=fe>>8,c[E+6]=fe,fe=fe>>8,c[E+5]=fe,fe=fe>>8,c[E+4]=fe;let xe=Number(w>>BigInt(32)&BigInt(4294967295));return c[E+3]=xe,xe=xe>>8,c[E+2]=xe,xe=xe>>8,c[E+1]=xe,xe=xe>>8,c[E]=xe,E+8}t.prototype.writeBigUInt64LE=ce(function(c,w=0){return R(this,c,w,BigInt(0),BigInt("0xffffffffffffffff"))}),t.prototype.writeBigUInt64BE=ce(function(c,w=0){return Z(this,c,w,BigInt(0),BigInt("0xffffffffffffffff"))}),t.prototype.writeIntLE=function(c,w,E,F){if(c=+c,w=w>>>0,!F){let Y=Math.pow(2,8*E-1);te(this,c,w,E,Y-1,-Y)}let ee=0,fe=1,xe=0;for(this[w]=c&255;++ee<E&&(fe*=256);)c<0&&xe===0&&this[w+ee-1]!==0&&(xe=1),this[w+ee]=(c/fe>>0)-xe&255;return w+E},t.prototype.writeIntBE=function(c,w,E,F){if(c=+c,w=w>>>0,!F){let Y=Math.pow(2,8*E-1);te(this,c,w,E,Y-1,-Y)}let ee=E-1,fe=1,xe=0;for(this[w+ee]=c&255;--ee>=0&&(fe*=256);)c<0&&xe===0&&this[w+ee+1]!==0&&(xe=1),this[w+ee]=(c/fe>>0)-xe&255;return w+E},t.prototype.writeInt8=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,1,127,-128),c<0&&(c=255+c+1),this[w]=c&255,w+1},t.prototype.writeInt16LE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,2,32767,-32768),this[w]=c&255,this[w+1]=c>>>8,w+2},t.prototype.writeInt16BE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,2,32767,-32768),this[w]=c>>>8,this[w+1]=c&255,w+2},t.prototype.writeInt32LE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,4,2147483647,-2147483648),this[w]=c&255,this[w+1]=c>>>8,this[w+2]=c>>>16,this[w+3]=c>>>24,w+4},t.prototype.writeInt32BE=function(c,w,E){return c=+c,w=w>>>0,E||te(this,c,w,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[w]=c>>>24,this[w+1]=c>>>16,this[w+2]=c>>>8,this[w+3]=c&255,w+4},t.prototype.writeBigInt64LE=ce(function(c,w=0){return R(this,c,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),t.prototype.writeBigInt64BE=ce(function(c,w=0){return Z(this,c,w,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ye(c,w,E,F,ee,fe){if(E+F>c.length)throw new RangeError("Index out of range");if(E<0)throw new RangeError("Index out of range")}function L(c,w,E,F,ee){return w=+w,E=E>>>0,ee||ye(c,w,E,4),h.write(c,w,E,F,23,4),E+4}t.prototype.writeFloatLE=function(c,w,E){return L(this,c,w,!0,E)},t.prototype.writeFloatBE=function(c,w,E){return L(this,c,w,!1,E)};function re(c,w,E,F,ee){return w=+w,E=E>>>0,ee||ye(c,w,E,8),h.write(c,w,E,F,52,8),E+8}t.prototype.writeDoubleLE=function(c,w,E){return re(this,c,w,!0,E)},t.prototype.writeDoubleBE=function(c,w,E){return re(this,c,w,!1,E)},t.prototype.copy=function(c,w,E,F){if(!t.isBuffer(c))throw new TypeError("argument should be a Buffer");if(E||(E=0),!F&&F!==0&&(F=this.length),w>=c.length&&(w=c.length),w||(w=0),F>0&&F<E&&(F=E),F===E||c.length===0||this.length===0)return 0;if(w<0)throw new RangeError("targetStart out of bounds");if(E<0||E>=this.length)throw new RangeError("Index out of range");if(F<0)throw new RangeError("sourceEnd out of bounds");F>this.length&&(F=this.length),c.length-w<F-E&&(F=c.length-w+E);let ee=F-E;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(w,E,F):Uint8Array.prototype.set.call(c,this.subarray(E,F),w),ee},t.prototype.fill=function(c,w,E,F){if(typeof c=="string"){if(typeof w=="string"?(F=w,w=0,E=this.length):typeof E=="string"&&(F=E,E=this.length),F!==void 0&&typeof F!="string")throw new TypeError("encoding must be a string");if(typeof F=="string"&&!t.isEncoding(F))throw new TypeError("Unknown encoding: "+F);if(c.length===1){let fe=c.charCodeAt(0);(F==="utf8"&&fe<128||F==="latin1")&&(c=fe)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(w<0||this.length<w||this.length<E)throw new RangeError("Out of range index");if(E<=w)return this;w=w>>>0,E=E===void 0?this.length:E>>>0,c||(c=0);let ee;if(typeof c=="number")for(ee=w;ee<E;++ee)this[ee]=c;else{let fe=t.isBuffer(c)?c:t.from(c,F),xe=fe.length;if(xe===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(ee=0;ee<E-w;++ee)this[ee+w]=fe[ee%xe]}return this};let H={};function M(c,w,E){H[c]=class extends E{constructor(){super(),Object.defineProperty(this,"message",{value:w.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(F){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:F,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}M("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),M("ERR_INVALID_ARG_TYPE",function(c,w){return`The "${c}" argument must be of type number. Received type ${typeof w}`},TypeError),M("ERR_OUT_OF_RANGE",function(c,w,E){let F=`The value of "${c}" is out of range.`,ee=E;return Number.isInteger(E)&&Math.abs(E)>2**32?ee=ne(String(E)):typeof E=="bigint"&&(ee=String(E),(E>BigInt(2)**BigInt(32)||E<-(BigInt(2)**BigInt(32)))&&(ee=ne(ee)),ee+="n"),F+=` It must be ${w}. Received ${ee}`,F},RangeError);function ne(c){let w="",E=c.length,F=c[0]==="-"?1:0;for(;E>=F+4;E-=3)w=`_${c.slice(E-3,E)}${w}`;return`${c.slice(0,E)}${w}`}function K(c,w,E){V(w,"offset"),(c[w]===void 0||c[w+E]===void 0)&&de(w,c.length-(E+1))}function Q(c,w,E,F,ee,fe){if(c>E||c<w){let xe=typeof w=="bigint"?"n":"",Y;throw w===0||w===BigInt(0)?Y=`>= 0${xe} and < 2${xe} ** ${(fe+1)*8}${xe}`:Y=`>= -(2${xe} ** ${(fe+1)*8-1}${xe}) and < 2 ** ${(fe+1)*8-1}${xe}`,new H.ERR_OUT_OF_RANGE("value",Y,c)}K(F,ee,fe)}function V(c,w){if(typeof c!="number")throw new H.ERR_INVALID_ARG_TYPE(w,"number",c)}function de(c,w,E){throw Math.floor(c)!==c?(V(c,E),new H.ERR_OUT_OF_RANGE("offset","an integer",c)):w<0?new H.ERR_BUFFER_OUT_OF_BOUNDS:new H.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${w}`,c)}let ae=/[^+/0-9A-Za-z-_]/g;function N(c){if(c=c.split("=")[0],c=c.trim().replace(ae,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function W(c,w){w=w||1/0;let E,F=c.length,ee=null,fe=[];for(let xe=0;xe<F;++xe){if(E=c.charCodeAt(xe),E>55295&&E<57344){if(!ee){if(E>56319){(w-=3)>-1&&fe.push(239,191,189);continue}else if(xe+1===F){(w-=3)>-1&&fe.push(239,191,189);continue}ee=E;continue}if(E<56320){(w-=3)>-1&&fe.push(239,191,189),ee=E;continue}E=(ee-55296<<10|E-56320)+65536}else ee&&(w-=3)>-1&&fe.push(239,191,189);if(ee=null,E<128){if((w-=1)<0)break;fe.push(E)}else if(E<2048){if((w-=2)<0)break;fe.push(E>>6|192,E&63|128)}else if(E<65536){if((w-=3)<0)break;fe.push(E>>12|224,E>>6&63|128,E&63|128)}else if(E<1114112){if((w-=4)<0)break;fe.push(E>>18|240,E>>12&63|128,E>>6&63|128,E&63|128)}else throw new Error("Invalid code point")}return fe}function se(c){let w=[];for(let E=0;E<c.length;++E)w.push(c.charCodeAt(E)&255);return w}function me(c,w){let E,F,ee,fe=[];for(let xe=0;xe<c.length&&!((w-=2)<0);++xe)E=c.charCodeAt(xe),F=E>>8,ee=E%256,fe.push(ee),fe.push(F);return fe}function ge(c){return d.toByteArray(N(c))}function we(c,w,E,F){let ee;for(ee=0;ee<F&&!(ee+E>=w.length||ee>=c.length);++ee)w[ee+E]=c[ee];return ee}function $(c,w){return c instanceof w||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===w.name}function ve(c){return c!==c}let _e=(function(){let c="0123456789abcdef",w=new Array(256);for(let E=0;E<16;++E){let F=E*16;for(let ee=0;ee<16;++ee)w[F+ee]=c[E]+c[ee]}return w})();function ce(c){return typeof BigInt>"u"?Me:c}function Me(){throw new Error("BigInt not supported")}return Et}var $t,ps,an,hs,Et,fs,ql=tt(()=>{ue(),he(),pe(),$t={},ps=!1,an={},hs=!1,Et={},fs=!1}),$e={};Gt($e,{Buffer:()=>$n,INSPECT_MAX_BYTES:()=>Qa,default:()=>mt,kMaxLength:()=>Ga});var mt,$n,Qa,Ga,Ke=tt(()=>{ue(),he(),pe(),ql(),mt=Ll(),mt.Buffer,mt.SlowBuffer,mt.INSPECT_MAX_BYTES,mt.kMaxLength,$n=mt.Buffer,Qa=mt.INSPECT_MAX_BYTES,Ga=mt.kMaxLength}),he=tt(()=>{Ke()}),Fe=be((d,h)=>{ue(),he(),pe();var o=class extends Error{constructor(a){if(!Array.isArray(a))throw new TypeError(`Expected input to be an Array, got ${typeof a}`);let p="";for(let n=0;n<a.length;n++)p+=`    ${a[n].stack}
`;super(p),this.name="AggregateError",this.errors=a}};h.exports={AggregateError:o,ArrayIsArray(a){return Array.isArray(a)},ArrayPrototypeIncludes(a,p){return a.includes(p)},ArrayPrototypeIndexOf(a,p){return a.indexOf(p)},ArrayPrototypeJoin(a,p){return a.join(p)},ArrayPrototypeMap(a,p){return a.map(p)},ArrayPrototypePop(a,p){return a.pop(p)},ArrayPrototypePush(a,p){return a.push(p)},ArrayPrototypeSlice(a,p,n){return a.slice(p,n)},Error,FunctionPrototypeCall(a,p,...n){return a.call(p,...n)},FunctionPrototypeSymbolHasInstance(a,p){return Function.prototype[Symbol.hasInstance].call(a,p)},MathFloor:Math.floor,Number,NumberIsInteger:Number.isInteger,NumberIsNaN:Number.isNaN,NumberMAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER,NumberMIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER,NumberParseInt:Number.parseInt,ObjectDefineProperties(a,p){return Object.defineProperties(a,p)},ObjectDefineProperty(a,p,n){return Object.defineProperty(a,p,n)},ObjectGetOwnPropertyDescriptor(a,p){return Object.getOwnPropertyDescriptor(a,p)},ObjectKeys(a){return Object.keys(a)},ObjectSetPrototypeOf(a,p){return Object.setPrototypeOf(a,p)},Promise,PromisePrototypeCatch(a,p){return a.catch(p)},PromisePrototypeThen(a,p,n){return a.then(p,n)},PromiseReject(a){return Promise.reject(a)},PromiseResolve(a){return Promise.resolve(a)},ReflectApply:Reflect.apply,RegExpPrototypeTest(a,p){return a.test(p)},SafeSet:Set,String,StringPrototypeSlice(a,p,n){return a.slice(p,n)},StringPrototypeToLowerCase(a){return a.toLowerCase()},StringPrototypeToUpperCase(a){return a.toUpperCase()},StringPrototypeTrim(a){return a.trim()},Symbol,SymbolFor:Symbol.for,SymbolAsyncIterator:Symbol.asyncIterator,SymbolHasInstance:Symbol.hasInstance,SymbolIterator:Symbol.iterator,SymbolDispose:Symbol.dispose||Symbol("Symbol.dispose"),SymbolAsyncDispose:Symbol.asyncDispose||Symbol("Symbol.asyncDispose"),TypedArrayPrototypeSet(a,p,n){return a.set(p,n)},Boolean,Uint8Array}}),Ya=be((d,h)=>{ue(),he(),pe(),h.exports={format(o,...a){return o.replace(/%([sdifj])/g,function(...[p,n]){let t=a.shift();return n==="f"?t.toFixed(6):n==="j"?JSON.stringify(t):n==="s"&&typeof t=="object"?`${t.constructor!==Object?t.constructor.name:""} {}`.trim():t.toString()})},inspect(o){switch(typeof o){case"string":if(o.includes("'"))if(o.includes('"')){if(!o.includes("`")&&!o.includes("${"))return`\`${o}\``}else return`"${o}"`;return`'${o}'`;case"number":return isNaN(o)?"NaN":Object.is(o,-0)?String(o):o;case"bigint":return`${String(o)}n`;case"boolean":case"undefined":return String(o);case"object":return"{}"}}}}),Ze=be((d,h)=>{ue(),he(),pe();var{format:o,inspect:a}=Ya(),{AggregateError:p}=Fe(),n=globalThis.AggregateError||p,t=Symbol("kIsNodeError"),r=["string","function","number","object","Function","Object","boolean","bigint","symbol"],e=/^([A-Z][a-z0-9]*)+$/,s="__node_internal_",i={};function g(b,_){if(!b)throw new i.ERR_INTERNAL_ASSERTION(_)}function f(b){let _="",A=b.length,y=b[0]==="-"?1:0;for(;A>=y+4;A-=3)_=`_${b.slice(A-3,A)}${_}`;return`${b.slice(0,A)}${_}`}function l(b,_,A){if(typeof _=="function")return g(_.length<=A.length,`Code: ${b}; The provided arguments length (${A.length}) does not match the required ones (${_.length}).`),_(...A);let y=(_.match(/%[dfijoOs]/g)||[]).length;return g(y===A.length,`Code: ${b}; The provided arguments length (${A.length}) does not match the required ones (${y}).`),A.length===0?_:o(_,...A)}function u(b,_,A){A||(A=Error);class y extends A{constructor(...x){super(l(b,_,x))}toString(){return`${this.name} [${b}]: ${this.message}`}}Object.defineProperties(y.prototype,{name:{value:A.name,writable:!0,enumerable:!1,configurable:!0},toString:{value(){return`${this.name} [${b}]: ${this.message}`},writable:!0,enumerable:!1,configurable:!0}}),y.prototype.code=b,y.prototype[t]=!0,i[b]=y}function m(b){let _=s+b.name;return Object.defineProperty(b,"name",{value:_}),b}function v(b,_){if(b&&_&&b!==_){if(Array.isArray(_.errors))return _.errors.push(b),_;let A=new n([_,b],_.message);return A.code=_.code,A}return b||_}var k=class extends Error{constructor(b="The operation was aborted",_=void 0){if(_!==void 0&&typeof _!="object")throw new i.ERR_INVALID_ARG_TYPE("options","Object",_);super(b,_),this.code="ABORT_ERR",this.name="AbortError"}};u("ERR_ASSERTION","%s",Error),u("ERR_INVALID_ARG_TYPE",(b,_,A)=>{g(typeof b=="string","'name' must be a string"),Array.isArray(_)||(_=[_]);let y="The ";b.endsWith(" argument")?y+=`${b} `:y+=`"${b}" ${b.includes(".")?"property":"argument"} `,y+="must be ";let S=[],x=[],I=[];for(let O of _)g(typeof O=="string","All expected entries have to be of type string"),r.includes(O)?S.push(O.toLowerCase()):e.test(O)?x.push(O):(g(O!=="object",'The value "object" should be written as "Object"'),I.push(O));if(x.length>0){let O=S.indexOf("object");O!==-1&&(S.splice(S,O,1),x.push("Object"))}if(S.length>0){switch(S.length){case 1:y+=`of type ${S[0]}`;break;case 2:y+=`one of type ${S[0]} or ${S[1]}`;break;default:{let O=S.pop();y+=`one of type ${S.join(", ")}, or ${O}`}}(x.length>0||I.length>0)&&(y+=" or ")}if(x.length>0){switch(x.length){case 1:y+=`an instance of ${x[0]}`;break;case 2:y+=`an instance of ${x[0]} or ${x[1]}`;break;default:{let O=x.pop();y+=`an instance of ${x.join(", ")}, or ${O}`}}I.length>0&&(y+=" or ")}switch(I.length){case 0:break;case 1:I[0].toLowerCase()!==I[0]&&(y+="an "),y+=`${I[0]}`;break;case 2:y+=`one of ${I[0]} or ${I[1]}`;break;default:{let O=I.pop();y+=`one of ${I.join(", ")}, or ${O}`}}if(A==null)y+=`. Received ${A}`;else if(typeof A=="function"&&A.name)y+=`. Received function ${A.name}`;else if(typeof A=="object"){var P;if((P=A.constructor)!==null&&P!==void 0&&P.name)y+=`. Received an instance of ${A.constructor.name}`;else{let O=a(A,{depth:-1});y+=`. Received ${O}`}}else{let O=a(A,{colors:!1});O.length>25&&(O=`${O.slice(0,25)}...`),y+=`. Received type ${typeof A} (${O})`}return y},TypeError),u("ERR_INVALID_ARG_VALUE",(b,_,A="is invalid")=>{let y=a(_);return y.length>128&&(y=y.slice(0,128)+"..."),`The ${b.includes(".")?"property":"argument"} '${b}' ${A}. Received ${y}`},TypeError),u("ERR_INVALID_RETURN_VALUE",(b,_,A)=>{var y;let S=A!=null&&(y=A.constructor)!==null&&y!==void 0&&y.name?`instance of ${A.constructor.name}`:`type ${typeof A}`;return`Expected ${b} to be returned from the "${_}" function but got ${S}.`},TypeError),u("ERR_MISSING_ARGS",(...b)=>{g(b.length>0,"At least one arg needs to be specified");let _,A=b.length;switch(b=(Array.isArray(b)?b:[b]).map(y=>`"${y}"`).join(" or "),A){case 1:_+=`The ${b[0]} argument`;break;case 2:_+=`The ${b[0]} and ${b[1]} arguments`;break;default:{let y=b.pop();_+=`The ${b.join(", ")}, and ${y} arguments`}break}return`${_} must be specified`},TypeError),u("ERR_OUT_OF_RANGE",(b,_,A)=>{g(_,'Missing "range" argument');let y;if(Number.isInteger(A)&&Math.abs(A)>2**32)y=f(String(A));else if(typeof A=="bigint"){y=String(A);let S=BigInt(2)**BigInt(32);(A>S||A<-S)&&(y=f(y)),y+="n"}else y=a(A);return`The value of "${b}" is out of range. It must be ${_}. Received ${y}`},RangeError),u("ERR_MULTIPLE_CALLBACK","Callback called multiple times",Error),u("ERR_METHOD_NOT_IMPLEMENTED","The %s method is not implemented",Error),u("ERR_STREAM_ALREADY_FINISHED","Cannot call %s after a stream was finished",Error),u("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable",Error),u("ERR_STREAM_DESTROYED","Cannot call %s after a stream was destroyed",Error),u("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),u("ERR_STREAM_PREMATURE_CLOSE","Premature close",Error),u("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF",Error),u("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event",Error),u("ERR_STREAM_WRITE_AFTER_END","write after end",Error),u("ERR_UNKNOWN_ENCODING","Unknown encoding: %s",TypeError),h.exports={AbortError:k,aggregateTwoErrors:m(v),hideStackFrames:m,codes:i}}),un=be((d,h)=>{ue(),he(),pe();var{AbortController:o,AbortSignal:a}=typeof self<"u"?self:typeof window<"u"?window:void 0;h.exports=o,h.exports.AbortSignal=a,h.exports.default=o}),Mt={};Gt(Mt,{EventEmitter:()=>Ja,default:()=>Kt,defaultMaxListeners:()=>Xa,init:()=>Za,listenerCount:()=>eo,on:()=>to,once:()=>no});function jl(){if(ms)return on;ms=!0;var d=typeof Reflect=="object"?Reflect:null,h=d&&typeof d.apply=="function"?d.apply:function(A,y,S){return Function.prototype.apply.call(A,y,S)},o;d&&typeof d.ownKeys=="function"?o=d.ownKeys:Object.getOwnPropertySymbols?o=function(A){return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A))}:o=function(A){return Object.getOwnPropertyNames(A)};function a(A){console&&console.warn&&console.warn(A)}var p=Number.isNaN||function(A){return A!==A};function n(){n.init.call(this)}on=n,on.once=k,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._eventsCount=0,n.prototype._maxListeners=void 0;var t=10;function r(A){if(typeof A!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof A)}Object.defineProperty(n,"defaultMaxListeners",{enumerable:!0,get:function(){return t},set:function(A){if(typeof A!="number"||A<0||p(A))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+A+".");t=A}}),n.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},n.prototype.setMaxListeners=function(A){if(typeof A!="number"||A<0||p(A))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+A+".");return this._maxListeners=A,this};function e(A){return A._maxListeners===void 0?n.defaultMaxListeners:A._maxListeners}n.prototype.getMaxListeners=function(){return e(this)},n.prototype.emit=function(A){for(var y=[],S=1;S<arguments.length;S++)y.push(arguments[S]);var x=A==="error",I=this._events;if(I!==void 0)x=x&&I.error===void 0;else if(!x)return!1;if(x){var P;if(y.length>0&&(P=y[0]),P instanceof Error)throw P;var O=new Error("Unhandled error."+(P?" ("+P.message+")":""));throw O.context=P,O}var j=I[A];if(j===void 0)return!1;if(typeof j=="function")h(j,this,y);else for(var T=j.length,z=u(j,T),S=0;S<T;++S)h(z[S],this,y);return!0};function s(A,y,S,x){var I,P,O;if(r(S),P=A._events,P===void 0?(P=A._events=Object.create(null),A._eventsCount=0):(P.newListener!==void 0&&(A.emit("newListener",y,S.listener?S.listener:S),P=A._events),O=P[y]),O===void 0)O=P[y]=S,++A._eventsCount;else if(typeof O=="function"?O=P[y]=x?[S,O]:[O,S]:x?O.unshift(S):O.push(S),I=e(A),I>0&&O.length>I&&!O.warned){O.warned=!0;var j=new Error("Possible EventEmitter memory leak detected. "+O.length+" "+String(y)+" listeners added. Use emitter.setMaxListeners() to increase limit");j.name="MaxListenersExceededWarning",j.emitter=A,j.type=y,j.count=O.length,a(j)}return A}n.prototype.addListener=function(A,y){return s(this,A,y,!1)},n.prototype.on=n.prototype.addListener,n.prototype.prependListener=function(A,y){return s(this,A,y,!0)};function i(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(A,y,S){var x={fired:!1,wrapFn:void 0,target:A,type:y,listener:S},I=i.bind(x);return I.listener=S,x.wrapFn=I,I}n.prototype.once=function(A,y){return r(y),this.on(A,g(this,A,y)),this},n.prototype.prependOnceListener=function(A,y){return r(y),this.prependListener(A,g(this,A,y)),this},n.prototype.removeListener=function(A,y){var S,x,I,P,O;if(r(y),x=this._events,x===void 0)return this;if(S=x[A],S===void 0)return this;if(S===y||S.listener===y)--this._eventsCount===0?this._events=Object.create(null):(delete x[A],x.removeListener&&this.emit("removeListener",A,S.listener||y));else if(typeof S!="function"){for(I=-1,P=S.length-1;P>=0;P--)if(S[P]===y||S[P].listener===y){O=S[P].listener,I=P;break}if(I<0)return this;I===0?S.shift():m(S,I),S.length===1&&(x[A]=S[0]),x.removeListener!==void 0&&this.emit("removeListener",A,O||y)}return this},n.prototype.off=n.prototype.removeListener,n.prototype.removeAllListeners=function(A){var y,S,x;if(S=this._events,S===void 0)return this;if(S.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):S[A]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete S[A]),this;if(arguments.length===0){var I=Object.keys(S),P;for(x=0;x<I.length;++x)P=I[x],P!=="removeListener"&&this.removeAllListeners(P);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(y=S[A],typeof y=="function")this.removeListener(A,y);else if(y!==void 0)for(x=y.length-1;x>=0;x--)this.removeListener(A,y[x]);return this};function f(A,y,S){var x=A._events;if(x===void 0)return[];var I=x[y];return I===void 0?[]:typeof I=="function"?S?[I.listener||I]:[I]:S?v(I):u(I,I.length)}n.prototype.listeners=function(A){return f(this,A,!0)},n.prototype.rawListeners=function(A){return f(this,A,!1)},n.listenerCount=function(A,y){return typeof A.listenerCount=="function"?A.listenerCount(y):l.call(A,y)},n.prototype.listenerCount=l;function l(A){var y=this._events;if(y!==void 0){var S=y[A];if(typeof S=="function")return 1;if(S!==void 0)return S.length}return 0}n.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]};function u(A,y){for(var S=new Array(y),x=0;x<y;++x)S[x]=A[x];return S}function m(A,y){for(;y+1<A.length;y++)A[y]=A[y+1];A.pop()}function v(A){for(var y=new Array(A.length),S=0;S<y.length;++S)y[S]=A[S].listener||A[S];return y}function k(A,y){return new Promise(function(S,x){function I(O){A.removeListener(y,P),x(O)}function P(){typeof A.removeListener=="function"&&A.removeListener("error",I),S([].slice.call(arguments))}_(A,y,P,{once:!0}),y!=="error"&&b(A,I,{once:!0})})}function b(A,y,S){typeof A.on=="function"&&_(A,"error",y,S)}function _(A,y,S,x){if(typeof A.on=="function")x.once?A.once(y,S):A.on(y,S);else if(typeof A.addEventListener=="function")A.addEventListener(y,function I(P){x.once&&A.removeEventListener(y,I),S(P)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof A)}return on}var on,ms,Kt,Ja,Xa,Za,eo,to,no,qt=tt(()=>{ue(),he(),pe(),on={},ms=!1,Kt=jl(),Kt.once,Kt.once=function(d,h){return new Promise((o,a)=>{function p(...t){n!==void 0&&d.removeListener("error",n),o(t)}let n;h!=="error"&&(n=t=>{d.removeListener(name,p),a(t)},d.once("error",n)),d.once(h,p)})},Kt.on=function(d,h){let o=[],a=[],p=null,n=!1,t={async next(){let s=o.shift();if(s)return createIterResult(s,!1);if(p){let i=Promise.reject(p);return p=null,i}return n?createIterResult(void 0,!0):new Promise((i,g)=>a.push({resolve:i,reject:g}))},async return(){d.removeListener(h,r),d.removeListener("error",e),n=!0;for(let s of a)s.resolve(createIterResult(void 0,!0));return createIterResult(void 0,!0)},throw(s){p=s,d.removeListener(h,r),d.removeListener("error",e)},[Symbol.asyncIterator](){return this}};return d.on(h,r),d.on("error",e),t;function r(...s){let i=a.shift();i?i.resolve(createIterResult(s,!1)):o.push(s)}function e(s){n=!0;let i=a.shift();i?i.reject(s):p=s,t.return()}},{EventEmitter:Ja,defaultMaxListeners:Xa,init:Za,listenerCount:eo,on:to,once:no}=Kt}),et=be((d,h)=>{ue(),he(),pe();var o=(Ke(),Ue($e)),{format:a,inspect:p}=Ya(),{codes:{ERR_INVALID_ARG_TYPE:n}}=Ze(),{kResistStopPropagation:t,AggregateError:r,SymbolDispose:e}=Fe(),s=globalThis.AbortSignal||un().AbortSignal,i=globalThis.AbortController||un().AbortController,g=Object.getPrototypeOf(async function(){}).constructor,f=globalThis.Blob||o.Blob,l=typeof f<"u"?function(v){return v instanceof f}:function(v){return!1},u=(v,k)=>{if(v!==void 0&&(v===null||typeof v!="object"||!("aborted"in v)))throw new n(k,"AbortSignal",v)},m=(v,k)=>{if(typeof v!="function")throw new n(k,"Function",v)};h.exports={AggregateError:r,kEmptyObject:Object.freeze({}),once(v){let k=!1;return function(...b){k||(k=!0,v.apply(this,b))}},createDeferredPromise:function(){let v,k;return{promise:new Promise((b,_)=>{v=b,k=_}),resolve:v,reject:k}},promisify(v){return new Promise((k,b)=>{v((_,...A)=>_?b(_):k(...A))})},debuglog(){return function(){}},format:a,inspect:p,types:{isAsyncFunction(v){return v instanceof g},isArrayBufferView(v){return ArrayBuffer.isView(v)}},isBlob:l,deprecate(v,k){return v},addAbortListener:(qt(),Ue(Mt)).addAbortListener||function(v,k){if(v===void 0)throw new n("signal","AbortSignal",v);u(v,"signal"),m(k,"listener");let b;return v.aborted?queueMicrotask(()=>k()):(v.addEventListener("abort",k,{__proto__:null,once:!0,[t]:!0}),b=()=>{v.removeEventListener("abort",k)}),{__proto__:null,[e](){var _;(_=b)===null||_===void 0||_()}}},AbortSignalAny:s.any||function(v){if(v.length===1)return v[0];let k=new i,b=()=>k.abort();return v.forEach(_=>{u(_,"signals"),_.addEventListener("abort",b,{once:!0})}),k.signal.addEventListener("abort",()=>{v.forEach(_=>_.removeEventListener("abort",b))},{once:!0}),k.signal}},h.exports.promisify.custom=Symbol.for("nodejs.util.promisify.custom")}),pn=be((d,h)=>{ue(),he(),pe();var{ArrayIsArray:o,ArrayPrototypeIncludes:a,ArrayPrototypeJoin:p,ArrayPrototypeMap:n,NumberIsInteger:t,NumberIsNaN:r,NumberMAX_SAFE_INTEGER:e,NumberMIN_SAFE_INTEGER:s,NumberParseInt:i,ObjectPrototypeHasOwnProperty:g,RegExpPrototypeExec:f,String:l,StringPrototypeToUpperCase:u,StringPrototypeTrim:m}=Fe(),{hideStackFrames:v,codes:{ERR_SOCKET_BAD_PORT:k,ERR_INVALID_ARG_TYPE:b,ERR_INVALID_ARG_VALUE:_,ERR_OUT_OF_RANGE:A,ERR_UNKNOWN_SIGNAL:y}}=Ze(),{normalizeEncoding:S}=et(),{isAsyncFunction:x,isArrayBufferView:I}=et().types,P={};function O($){return $===($|0)}function j($){return $===$>>>0}var T=/^[0-7]+$/,z="must be a 32-bit unsigned integer or an octal string";function q($,ve,_e){if(typeof $>"u"&&($=_e),typeof $=="string"){if(f(T,$)===null)throw new _(ve,$,z);$=i($,8)}return X($,ve),$}var B=v(($,ve,_e=s,ce=e)=>{if(typeof $!="number")throw new b(ve,"number",$);if(!t($))throw new A(ve,"an integer",$);if($<_e||$>ce)throw new A(ve,`>= ${_e} && <= ${ce}`,$)}),le=v(($,ve,_e=-2147483648,ce=2147483647)=>{if(typeof $!="number")throw new b(ve,"number",$);if(!t($))throw new A(ve,"an integer",$);if($<_e||$>ce)throw new A(ve,`>= ${_e} && <= ${ce}`,$)}),X=v(($,ve,_e=!1)=>{if(typeof $!="number")throw new b(ve,"number",$);if(!t($))throw new A(ve,"an integer",$);let ce=_e?1:0,Me=4294967295;if($<ce||$>Me)throw new A(ve,`>= ${ce} && <= ${Me}`,$)});function G($,ve){if(typeof $!="string")throw new b(ve,"string",$)}function ie($,ve,_e=void 0,ce){if(typeof $!="number")throw new b(ve,"number",$);if(_e!=null&&$<_e||ce!=null&&$>ce||(_e!=null||ce!=null)&&r($))throw new A(ve,`${_e!=null?`>= ${_e}`:""}${_e!=null&&ce!=null?" && ":""}${ce!=null?`<= ${ce}`:""}`,$)}var D=v(($,ve,_e)=>{if(!a(_e,$)){let ce="must be one of: "+p(n(_e,Me=>typeof Me=="string"?`'${Me}'`:l(Me)),", ");throw new _(ve,$,ce)}});function te($,ve){if(typeof $!="boolean")throw new b(ve,"boolean",$)}function R($,ve,_e){return $==null||!g($,ve)?_e:$[ve]}var Z=v(($,ve,_e=null)=>{let ce=R(_e,"allowArray",!1),Me=R(_e,"allowFunction",!1);if(!R(_e,"nullable",!1)&&$===null||!ce&&o($)||typeof $!="object"&&(!Me||typeof $!="function"))throw new b(ve,"Object",$)}),ye=v(($,ve)=>{if($!=null&&typeof $!="object"&&typeof $!="function")throw new b(ve,"a dictionary",$)}),L=v(($,ve,_e=0)=>{if(!o($))throw new b(ve,"Array",$);if($.length<_e){let ce=`must be longer than ${_e}`;throw new _(ve,$,ce)}});function re($,ve){L($,ve);for(let _e=0;_e<$.length;_e++)G($[_e],`${ve}[${_e}]`)}function H($,ve){L($,ve);for(let _e=0;_e<$.length;_e++)te($[_e],`${ve}[${_e}]`)}function M($,ve){L($,ve);for(let _e=0;_e<$.length;_e++){let ce=$[_e],Me=`${ve}[${_e}]`;if(ce==null)throw new b(Me,"AbortSignal",ce);de(ce,Me)}}function ne($,ve="signal"){if(G($,ve),P[$]===void 0)throw P[u($)]!==void 0?new y($+" (signals must use all capital letters)"):new y($)}var K=v(($,ve="buffer")=>{if(!I($))throw new b(ve,["Buffer","TypedArray","DataView"],$)});function Q($,ve){let _e=S(ve),ce=$.length;if(_e==="hex"&&ce%2!==0)throw new _("encoding",ve,`is invalid for data of length ${ce}`)}function V($,ve="Port",_e=!0){if(typeof $!="number"&&typeof $!="string"||typeof $=="string"&&m($).length===0||+$!==+$>>>0||$>65535||$===0&&!_e)throw new k(ve,$,_e);return $|0}var de=v(($,ve)=>{if($!==void 0&&($===null||typeof $!="object"||!("aborted"in $)))throw new b(ve,"AbortSignal",$)}),ae=v(($,ve)=>{if(typeof $!="function")throw new b(ve,"Function",$)}),N=v(($,ve)=>{if(typeof $!="function"||x($))throw new b(ve,"Function",$)}),W=v(($,ve)=>{if($!==void 0)throw new b(ve,"undefined",$)});function se($,ve,_e){if(!a(_e,$))throw new b(ve,`('${p(_e,"|")}')`,$)}var me=/^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;function ge($,ve){if(typeof $>"u"||!f(me,$))throw new _(ve,$,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}function we($){if(typeof $=="string")return ge($,"hints"),$;if(o($)){let ve=$.length,_e="";if(ve===0)return _e;for(let ce=0;ce<ve;ce++){let Me=$[ce];ge(Me,"hints"),_e+=Me,ce!==ve-1&&(_e+=", ")}return _e}throw new _("hints",$,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}h.exports={isInt32:O,isUint32:j,parseFileMode:q,validateArray:L,validateStringArray:re,validateBooleanArray:H,validateAbortSignalArray:M,validateBoolean:te,validateBuffer:K,validateDictionary:ye,validateEncoding:Q,validateFunction:ae,validateInt32:le,validateInteger:B,validateNumber:ie,validateObject:Z,validateOneOf:D,validatePlainFunction:N,validatePort:V,validateSignalName:ne,validateString:G,validateUint32:X,validateUndefined:W,validateUnion:se,validateAbortSignal:de,validateLinkHeaderValue:we}}),jt=be((d,h)=>{ue(),he(),pe();var o=h.exports={},a,p;function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=n}catch{a=n}try{typeof clearTimeout=="function"?p=clearTimeout:p=t}catch{p=t}})();function r(k){if(a===setTimeout)return setTimeout(k,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(k,0);try{return a(k,0)}catch{try{return a.call(null,k,0)}catch{return a.call(this,k,0)}}}function e(k){if(p===clearTimeout)return clearTimeout(k);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(k);try{return p(k)}catch{try{return p.call(null,k)}catch{return p.call(this,k)}}}var s=[],i=!1,g,f=-1;function l(){!i||!g||(i=!1,g.length?s=g.concat(s):f=-1,s.length&&u())}function u(){if(!i){var k=r(l);i=!0;for(var b=s.length;b;){for(g=s,s=[];++f<b;)g&&g[f].run();f=-1,b=s.length}g=null,i=!1,e(k)}}o.nextTick=function(k){var b=new Array(arguments.length-1);if(arguments.length>1)for(var _=1;_<arguments.length;_++)b[_-1]=arguments[_];s.push(new m(k,b)),s.length===1&&!i&&r(u)};function m(k,b){this.fun=k,this.array=b}m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={};function v(){}o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(k){return[]},o.binding=function(k){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(k){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}),_t=be((d,h)=>{ue(),he(),pe();var{SymbolAsyncIterator:o,SymbolIterator:a,SymbolFor:p}=Fe(),n=p("nodejs.stream.destroyed"),t=p("nodejs.stream.errored"),r=p("nodejs.stream.readable"),e=p("nodejs.stream.writable"),s=p("nodejs.stream.disturbed"),i=p("nodejs.webstream.isClosedPromise"),g=p("nodejs.webstream.controllerErrorFunction");function f(R,Z=!1){var ye;return!!(R&&typeof R.pipe=="function"&&typeof R.on=="function"&&(!Z||typeof R.pause=="function"&&typeof R.resume=="function")&&(!R._writableState||((ye=R._readableState)===null||ye===void 0?void 0:ye.readable)!==!1)&&(!R._writableState||R._readableState))}function l(R){var Z;return!!(R&&typeof R.write=="function"&&typeof R.on=="function"&&(!R._readableState||((Z=R._writableState)===null||Z===void 0?void 0:Z.writable)!==!1))}function u(R){return!!(R&&typeof R.pipe=="function"&&R._readableState&&typeof R.on=="function"&&typeof R.write=="function")}function m(R){return R&&(R._readableState||R._writableState||typeof R.write=="function"&&typeof R.on=="function"||typeof R.pipe=="function"&&typeof R.on=="function")}function v(R){return!!(R&&!m(R)&&typeof R.pipeThrough=="function"&&typeof R.getReader=="function"&&typeof R.cancel=="function")}function k(R){return!!(R&&!m(R)&&typeof R.getWriter=="function"&&typeof R.abort=="function")}function b(R){return!!(R&&!m(R)&&typeof R.readable=="object"&&typeof R.writable=="object")}function _(R){return v(R)||k(R)||b(R)}function A(R,Z){return R==null?!1:Z===!0?typeof R[o]=="function":Z===!1?typeof R[a]=="function":typeof R[o]=="function"||typeof R[a]=="function"}function y(R){if(!m(R))return null;let Z=R._writableState,ye=R._readableState,L=Z||ye;return!!(R.destroyed||R[n]||L!=null&&L.destroyed)}function S(R){if(!l(R))return null;if(R.writableEnded===!0)return!0;let Z=R._writableState;return Z!=null&&Z.errored?!1:typeof Z?.ended!="boolean"?null:Z.ended}function x(R,Z){if(!l(R))return null;if(R.writableFinished===!0)return!0;let ye=R._writableState;return ye!=null&&ye.errored?!1:typeof ye?.finished!="boolean"?null:!!(ye.finished||Z===!1&&ye.ended===!0&&ye.length===0)}function I(R){if(!f(R))return null;if(R.readableEnded===!0)return!0;let Z=R._readableState;return!Z||Z.errored?!1:typeof Z?.ended!="boolean"?null:Z.ended}function P(R,Z){if(!f(R))return null;let ye=R._readableState;return ye!=null&&ye.errored?!1:typeof ye?.endEmitted!="boolean"?null:!!(ye.endEmitted||Z===!1&&ye.ended===!0&&ye.length===0)}function O(R){return R&&R[r]!=null?R[r]:typeof R?.readable!="boolean"?null:y(R)?!1:f(R)&&R.readable&&!P(R)}function j(R){return R&&R[e]!=null?R[e]:typeof R?.writable!="boolean"?null:y(R)?!1:l(R)&&R.writable&&!S(R)}function T(R,Z){return m(R)?y(R)?!0:!(Z?.readable!==!1&&O(R)||Z?.writable!==!1&&j(R)):null}function z(R){var Z,ye;return m(R)?R.writableErrored?R.writableErrored:(Z=(ye=R._writableState)===null||ye===void 0?void 0:ye.errored)!==null&&Z!==void 0?Z:null:null}function q(R){var Z,ye;return m(R)?R.readableErrored?R.readableErrored:(Z=(ye=R._readableState)===null||ye===void 0?void 0:ye.errored)!==null&&Z!==void 0?Z:null:null}function B(R){if(!m(R))return null;if(typeof R.closed=="boolean")return R.closed;let Z=R._writableState,ye=R._readableState;return typeof Z?.closed=="boolean"||typeof ye?.closed=="boolean"?Z?.closed||ye?.closed:typeof R._closed=="boolean"&&le(R)?R._closed:null}function le(R){return typeof R._closed=="boolean"&&typeof R._defaultKeepAlive=="boolean"&&typeof R._removedConnection=="boolean"&&typeof R._removedContLen=="boolean"}function X(R){return typeof R._sent100=="boolean"&&le(R)}function G(R){var Z;return typeof R._consuming=="boolean"&&typeof R._dumped=="boolean"&&((Z=R.req)===null||Z===void 0?void 0:Z.upgradeOrConnect)===void 0}function ie(R){if(!m(R))return null;let Z=R._writableState,ye=R._readableState,L=Z||ye;return!L&&X(R)||!!(L&&L.autoDestroy&&L.emitClose&&L.closed===!1)}function D(R){var Z;return!!(R&&((Z=R[s])!==null&&Z!==void 0?Z:R.readableDidRead||R.readableAborted))}function te(R){var Z,ye,L,re,H,M,ne,K,Q,V;return!!(R&&((Z=(ye=(L=(re=(H=(M=R[t])!==null&&M!==void 0?M:R.readableErrored)!==null&&H!==void 0?H:R.writableErrored)!==null&&re!==void 0?re:(ne=R._readableState)===null||ne===void 0?void 0:ne.errorEmitted)!==null&&L!==void 0?L:(K=R._writableState)===null||K===void 0?void 0:K.errorEmitted)!==null&&ye!==void 0?ye:(Q=R._readableState)===null||Q===void 0?void 0:Q.errored)!==null&&Z!==void 0?Z:!((V=R._writableState)===null||V===void 0)&&V.errored))}h.exports={isDestroyed:y,kIsDestroyed:n,isDisturbed:D,kIsDisturbed:s,isErrored:te,kIsErrored:t,isReadable:O,kIsReadable:r,kIsClosedPromise:i,kControllerErrorFunction:g,kIsWritable:e,isClosed:B,isDuplexNodeStream:u,isFinished:T,isIterable:A,isReadableNodeStream:f,isReadableStream:v,isReadableEnded:I,isReadableFinished:P,isReadableErrored:q,isNodeStream:m,isWebStream:_,isWritable:j,isWritableNodeStream:l,isWritableStream:k,isWritableEnded:S,isWritableFinished:x,isWritableErrored:z,isServerRequest:G,isServerResponse:X,willEmitClose:ie,isTransformStream:b}}),Ct=be((d,h)=>{ue(),he(),pe();var o=jt(),{AbortError:a,codes:p}=Ze(),{ERR_INVALID_ARG_TYPE:n,ERR_STREAM_PREMATURE_CLOSE:t}=p,{kEmptyObject:r,once:e}=et(),{validateAbortSignal:s,validateFunction:i,validateObject:g,validateBoolean:f}=pn(),{Promise:l,PromisePrototypeThen:u,SymbolDispose:m}=Fe(),{isClosed:v,isReadable:k,isReadableNodeStream:b,isReadableStream:_,isReadableFinished:A,isReadableErrored:y,isWritable:S,isWritableNodeStream:x,isWritableStream:I,isWritableFinished:P,isWritableErrored:O,isNodeStream:j,willEmitClose:T,kIsClosedPromise:z}=_t(),q;function B(D){return D.setHeader&&typeof D.abort=="function"}var le=()=>{};function X(D,te,R){var Z,ye;if(arguments.length===2?(R=te,te=r):te==null?te=r:g(te,"options"),i(R,"callback"),s(te.signal,"options.signal"),R=e(R),_(D)||I(D))return G(D,te,R);if(!j(D))throw new n("stream",["ReadableStream","WritableStream","Stream"],D);let L=(Z=te.readable)!==null&&Z!==void 0?Z:b(D),re=(ye=te.writable)!==null&&ye!==void 0?ye:x(D),H=D._writableState,M=D._readableState,ne=()=>{D.writable||V()},K=T(D)&&b(D)===L&&x(D)===re,Q=P(D,!1),V=()=>{Q=!0,D.destroyed&&(K=!1),!(K&&(!D.readable||L))&&(!L||de)&&R.call(D)},de=A(D,!1),ae=()=>{de=!0,D.destroyed&&(K=!1),!(K&&(!D.writable||re))&&(!re||Q)&&R.call(D)},N=$=>{R.call(D,$)},W=v(D),se=()=>{W=!0;let $=O(D)||y(D);if($&&typeof $!="boolean")return R.call(D,$);if(L&&!de&&b(D,!0)&&!A(D,!1))return R.call(D,new t);if(re&&!Q&&!P(D,!1))return R.call(D,new t);R.call(D)},me=()=>{W=!0;let $=O(D)||y(D);if($&&typeof $!="boolean")return R.call(D,$);R.call(D)},ge=()=>{D.req.on("finish",V)};B(D)?(D.on("complete",V),K||D.on("abort",se),D.req?ge():D.on("request",ge)):re&&!H&&(D.on("end",ne),D.on("close",ne)),!K&&typeof D.aborted=="boolean"&&D.on("aborted",se),D.on("end",ae),D.on("finish",V),te.error!==!1&&D.on("error",N),D.on("close",se),W?o.nextTick(se):H!=null&&H.errorEmitted||M!=null&&M.errorEmitted?K||o.nextTick(me):(!L&&(!K||k(D))&&(Q||S(D)===!1)||!re&&(!K||S(D))&&(de||k(D)===!1)||M&&D.req&&D.aborted)&&o.nextTick(me);let we=()=>{R=le,D.removeListener("aborted",se),D.removeListener("complete",V),D.removeListener("abort",se),D.removeListener("request",ge),D.req&&D.req.removeListener("finish",V),D.removeListener("end",ne),D.removeListener("close",ne),D.removeListener("finish",V),D.removeListener("end",ae),D.removeListener("error",N),D.removeListener("close",se)};if(te.signal&&!W){let $=()=>{let ve=R;we(),ve.call(D,new a(void 0,{cause:te.signal.reason}))};if(te.signal.aborted)o.nextTick($);else{q=q||et().addAbortListener;let ve=q(te.signal,$),_e=R;R=e((...ce)=>{ve[m](),_e.apply(D,ce)})}}return we}function G(D,te,R){let Z=!1,ye=le;if(te.signal)if(ye=()=>{Z=!0,R.call(D,new a(void 0,{cause:te.signal.reason}))},te.signal.aborted)o.nextTick(ye);else{q=q||et().addAbortListener;let re=q(te.signal,ye),H=R;R=e((...M)=>{re[m](),H.apply(D,M)})}let L=(...re)=>{Z||o.nextTick(()=>R.apply(D,re))};return u(D[z].promise,L,L),le}function ie(D,te){var R;let Z=!1;return te===null&&(te=r),(R=te)!==null&&R!==void 0&&R.cleanup&&(f(te.cleanup,"cleanup"),Z=te.cleanup),new l((ye,L)=>{let re=X(D,te,H=>{Z&&re(),H?L(H):ye()})})}h.exports=X,h.exports.finished=ie}),Yt=be((d,h)=>{ue(),he(),pe();var o=jt(),{aggregateTwoErrors:a,codes:{ERR_MULTIPLE_CALLBACK:p},AbortError:n}=Ze(),{Symbol:t}=Fe(),{kIsDestroyed:r,isDestroyed:e,isFinished:s,isServerRequest:i}=_t(),g=t("kDestroy"),f=t("kConstruct");function l(T,z,q){T&&(T.stack,z&&!z.errored&&(z.errored=T),q&&!q.errored&&(q.errored=T))}function u(T,z){let q=this._readableState,B=this._writableState,le=B||q;return B!=null&&B.destroyed||q!=null&&q.destroyed?(typeof z=="function"&&z(),this):(l(T,B,q),B&&(B.destroyed=!0),q&&(q.destroyed=!0),le.constructed?m(this,T,z):this.once(g,function(X){m(this,a(X,T),z)}),this)}function m(T,z,q){let B=!1;function le(X){if(B)return;B=!0;let G=T._readableState,ie=T._writableState;l(X,ie,G),ie&&(ie.closed=!0),G&&(G.closed=!0),typeof q=="function"&&q(X),X?o.nextTick(v,T,X):o.nextTick(k,T)}try{T._destroy(z||null,le)}catch(X){le(X)}}function v(T,z){b(T,z),k(T)}function k(T){let z=T._readableState,q=T._writableState;q&&(q.closeEmitted=!0),z&&(z.closeEmitted=!0),(q!=null&&q.emitClose||z!=null&&z.emitClose)&&T.emit("close")}function b(T,z){let q=T._readableState,B=T._writableState;B!=null&&B.errorEmitted||q!=null&&q.errorEmitted||(B&&(B.errorEmitted=!0),q&&(q.errorEmitted=!0),T.emit("error",z))}function _(){let T=this._readableState,z=this._writableState;T&&(T.constructed=!0,T.closed=!1,T.closeEmitted=!1,T.destroyed=!1,T.errored=null,T.errorEmitted=!1,T.reading=!1,T.ended=T.readable===!1,T.endEmitted=T.readable===!1),z&&(z.constructed=!0,z.destroyed=!1,z.closed=!1,z.closeEmitted=!1,z.errored=null,z.errorEmitted=!1,z.finalCalled=!1,z.prefinished=!1,z.ended=z.writable===!1,z.ending=z.writable===!1,z.finished=z.writable===!1)}function A(T,z,q){let B=T._readableState,le=T._writableState;if(le!=null&&le.destroyed||B!=null&&B.destroyed)return this;B!=null&&B.autoDestroy||le!=null&&le.autoDestroy?T.destroy(z):z&&(z.stack,le&&!le.errored&&(le.errored=z),B&&!B.errored&&(B.errored=z),q?o.nextTick(b,T,z):b(T,z))}function y(T,z){if(typeof T._construct!="function")return;let q=T._readableState,B=T._writableState;q&&(q.constructed=!1),B&&(B.constructed=!1),T.once(f,z),!(T.listenerCount(f)>1)&&o.nextTick(S,T)}function S(T){let z=!1;function q(B){if(z){A(T,B??new p);return}z=!0;let le=T._readableState,X=T._writableState,G=X||le;le&&(le.constructed=!0),X&&(X.constructed=!0),G.destroyed?T.emit(g,B):B?A(T,B,!0):o.nextTick(x,T)}try{T._construct(B=>{o.nextTick(q,B)})}catch(B){o.nextTick(q,B)}}function x(T){T.emit(f)}function I(T){return T?.setHeader&&typeof T.abort=="function"}function P(T){T.emit("close")}function O(T,z){T.emit("error",z),o.nextTick(P,T)}function j(T,z){!T||e(T)||(!z&&!s(T)&&(z=new n),i(T)?(T.socket=null,T.destroy(z)):I(T)?T.abort():I(T.req)?T.req.abort():typeof T.destroy=="function"?T.destroy(z):typeof T.close=="function"?T.close():z?o.nextTick(O,T,z):o.nextTick(P,T),T.destroyed||(T[r]=!0))}h.exports={construct:y,destroyer:j,destroy:u,undestroy:_,errorOrDestroy:A}}),ci=be((d,h)=>{ue(),he(),pe();var{ArrayIsArray:o,ObjectSetPrototypeOf:a}=Fe(),{EventEmitter:p}=(qt(),Ue(Mt));function n(r){p.call(this,r)}a(n.prototype,p.prototype),a(n,p),n.prototype.pipe=function(r,e){let s=this;function i(k){r.writable&&r.write(k)===!1&&s.pause&&s.pause()}s.on("data",i);function g(){s.readable&&s.resume&&s.resume()}r.on("drain",g),!r._isStdio&&(!e||e.end!==!1)&&(s.on("end",l),s.on("close",u));let f=!1;function l(){f||(f=!0,r.end())}function u(){f||(f=!0,typeof r.destroy=="function"&&r.destroy())}function m(k){v(),p.listenerCount(this,"error")===0&&this.emit("error",k)}t(s,"error",m),t(r,"error",m);function v(){s.removeListener("data",i),r.removeListener("drain",g),s.removeListener("end",l),s.removeListener("close",u),s.removeListener("error",m),r.removeListener("error",m),s.removeListener("end",v),s.removeListener("close",v),r.removeListener("close",v)}return s.on("end",v),s.on("close",v),r.on("close",v),r.emit("pipe",s),r};function t(r,e,s){if(typeof r.prependListener=="function")return r.prependListener(e,s);!r._events||!r._events[e]?r.on(e,s):o(r._events[e])?r._events[e].unshift(s):r._events[e]=[s,r._events[e]]}h.exports={Stream:n,prependListener:t}}),Qn=be((d,h)=>{ue(),he(),pe();var{SymbolDispose:o}=Fe(),{AbortError:a,codes:p}=Ze(),{isNodeStream:n,isWebStream:t,kControllerErrorFunction:r}=_t(),e=Ct(),{ERR_INVALID_ARG_TYPE:s}=p,i,g=(f,l)=>{if(typeof f!="object"||!("aborted"in f))throw new s(l,"AbortSignal",f)};h.exports.addAbortSignal=function(f,l){if(g(f,"signal"),!n(l)&&!t(l))throw new s("stream",["ReadableStream","WritableStream","Stream"],l);return h.exports.addAbortSignalNoValidate(f,l)},h.exports.addAbortSignalNoValidate=function(f,l){if(typeof f!="object"||!("aborted"in f))return l;let u=n(l)?()=>{l.destroy(new a(void 0,{cause:f.reason}))}:()=>{l[r](new a(void 0,{cause:f.reason}))};if(f.aborted)u();else{i=i||et().addAbortListener;let m=i(f,u);e(l,m[o])}return l}}),Bl=be((d,h)=>{ue(),he(),pe();var{StringPrototypeSlice:o,SymbolIterator:a,TypedArrayPrototypeSet:p,Uint8Array:n}=Fe(),{Buffer:t}=(Ke(),Ue($e)),{inspect:r}=et();h.exports=class{constructor(){this.head=null,this.tail=null,this.length=0}push(e){let s={data:e,next:null};this.length>0?this.tail.next=s:this.head=s,this.tail=s,++this.length}unshift(e){let s={data:e,next:this.head};this.length===0&&(this.tail=s),this.head=s,++this.length}shift(){if(this.length===0)return;let e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}clear(){this.head=this.tail=null,this.length=0}join(e){if(this.length===0)return"";let s=this.head,i=""+s.data;for(;(s=s.next)!==null;)i+=e+s.data;return i}concat(e){if(this.length===0)return t.alloc(0);let s=t.allocUnsafe(e>>>0),i=this.head,g=0;for(;i;)p(s,i.data,g),g+=i.data.length,i=i.next;return s}consume(e,s){let i=this.head.data;if(e<i.length){let g=i.slice(0,e);return this.head.data=i.slice(e),g}return e===i.length?this.shift():s?this._getString(e):this._getBuffer(e)}first(){return this.head.data}*[a](){for(let e=this.head;e;e=e.next)yield e.data}_getString(e){let s="",i=this.head,g=0;do{let f=i.data;if(e>f.length)s+=f,e-=f.length;else{e===f.length?(s+=f,++g,i.next?this.head=i.next:this.head=this.tail=null):(s+=o(f,0,e),this.head=i,i.data=o(f,e));break}++g}while((i=i.next)!==null);return this.length-=g,s}_getBuffer(e){let s=t.allocUnsafe(e),i=e,g=this.head,f=0;do{let l=g.data;if(e>l.length)p(s,l,i-e),e-=l.length;else{e===l.length?(p(s,l,i-e),++f,g.next?this.head=g.next:this.head=this.tail=null):(p(s,new n(l.buffer,l.byteOffset,e),i-e),this.head=g,g.data=l.slice(e));break}++f}while((g=g.next)!==null);return this.length-=f,s}[Symbol.for("nodejs.util.inspect.custom")](e,s){return r(this,{...s,depth:0,customInspect:!1})}}}),Gn=be((d,h)=>{ue(),he(),pe();var{MathFloor:o,NumberIsInteger:a}=Fe(),{validateInteger:p}=pn(),{ERR_INVALID_ARG_VALUE:n}=Ze().codes,t=16*1024,r=16;function e(f,l,u){return f.highWaterMark!=null?f.highWaterMark:l?f[u]:null}function s(f){return f?r:t}function i(f,l){p(l,"value",0),f?r=l:t=l}function g(f,l,u,m){let v=e(l,m,u);if(v!=null){if(!a(v)||v<0){let k=m?`options.${u}`:"options.highWaterMark";throw new n(k,v)}return o(v)}return s(f.objectMode)}h.exports={getHighWaterMark:g,getDefaultHighWaterMark:s,setDefaultHighWaterMark:i}}),Fl=be((d,h)=>{ue(),he(),pe();var o=(Ke(),Ue($e)),a=o.Buffer;function p(t,r){for(var e in t)r[e]=t[e]}a.from&&a.alloc&&a.allocUnsafe&&a.allocUnsafeSlow?h.exports=o:(p(o,d),d.Buffer=n);function n(t,r,e){return a(t,r,e)}n.prototype=Object.create(a.prototype),p(a,n),n.from=function(t,r,e){if(typeof t=="number")throw new TypeError("Argument must not be a number");return a(t,r,e)},n.alloc=function(t,r,e){if(typeof t!="number")throw new TypeError("Argument must be a number");var s=a(t);return r!==void 0?typeof e=="string"?s.fill(r,e):s.fill(r):s.fill(0),s},n.allocUnsafe=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return a(t)},n.allocUnsafeSlow=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return o.SlowBuffer(t)}}),Dl=be(d=>{ue(),he(),pe();var h=Fl().Buffer,o=h.isEncoding||function(b){switch(b=""+b,b&&b.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function a(b){if(!b)return"utf8";for(var _;;)switch(b){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return b;default:if(_)return;b=(""+b).toLowerCase(),_=!0}}function p(b){var _=a(b);if(typeof _!="string"&&(h.isEncoding===o||!o(b)))throw new Error("Unknown encoding: "+b);return _||b}d.StringDecoder=n;function n(b){this.encoding=p(b);var _;switch(this.encoding){case"utf16le":this.text=f,this.end=l,_=4;break;case"utf8":this.fillLast=s,_=4;break;case"base64":this.text=u,this.end=m,_=3;break;default:this.write=v,this.end=k;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=h.allocUnsafe(_)}n.prototype.write=function(b){if(b.length===0)return"";var _,A;if(this.lastNeed){if(_=this.fillLast(b),_===void 0)return"";A=this.lastNeed,this.lastNeed=0}else A=0;return A<b.length?_?_+this.text(b,A):this.text(b,A):_||""},n.prototype.end=g,n.prototype.text=i,n.prototype.fillLast=function(b){if(this.lastNeed<=b.length)return b.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);b.copy(this.lastChar,this.lastTotal-this.lastNeed,0,b.length),this.lastNeed-=b.length};function t(b){return b<=127?0:b>>5===6?2:b>>4===14?3:b>>3===30?4:b>>6===2?-1:-2}function r(b,_,A){var y=_.length-1;if(y<A)return 0;var S=t(_[y]);return S>=0?(S>0&&(b.lastNeed=S-1),S):--y<A||S===-2?0:(S=t(_[y]),S>=0?(S>0&&(b.lastNeed=S-2),S):--y<A||S===-2?0:(S=t(_[y]),S>=0?(S>0&&(S===2?S=0:b.lastNeed=S-3),S):0))}function e(b,_,A){if((_[0]&192)!==128)return b.lastNeed=0,"�";if(b.lastNeed>1&&_.length>1){if((_[1]&192)!==128)return b.lastNeed=1,"�";if(b.lastNeed>2&&_.length>2&&(_[2]&192)!==128)return b.lastNeed=2,"�"}}function s(b){var _=this.lastTotal-this.lastNeed,A=e(this,b);if(A!==void 0)return A;if(this.lastNeed<=b.length)return b.copy(this.lastChar,_,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);b.copy(this.lastChar,_,0,b.length),this.lastNeed-=b.length}function i(b,_){var A=r(this,b,_);if(!this.lastNeed)return b.toString("utf8",_);this.lastTotal=A;var y=b.length-(A-this.lastNeed);return b.copy(this.lastChar,0,y),b.toString("utf8",_,y)}function g(b){var _=b&&b.length?this.write(b):"";return this.lastNeed?_+"�":_}function f(b,_){if((b.length-_)%2===0){var A=b.toString("utf16le",_);if(A){var y=A.charCodeAt(A.length-1);if(y>=55296&&y<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=b[b.length-2],this.lastChar[1]=b[b.length-1],A.slice(0,-1)}return A}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=b[b.length-1],b.toString("utf16le",_,b.length-1)}function l(b){var _=b&&b.length?this.write(b):"";if(this.lastNeed){var A=this.lastTotal-this.lastNeed;return _+this.lastChar.toString("utf16le",0,A)}return _}function u(b,_){var A=(b.length-_)%3;return A===0?b.toString("base64",_):(this.lastNeed=3-A,this.lastTotal=3,A===1?this.lastChar[0]=b[b.length-1]:(this.lastChar[0]=b[b.length-2],this.lastChar[1]=b[b.length-1]),b.toString("base64",_,b.length-A))}function m(b){var _=b&&b.length?this.write(b):"";return this.lastNeed?_+this.lastChar.toString("base64",0,3-this.lastNeed):_}function v(b){return b.toString(this.encoding)}function k(b){return b&&b.length?this.write(b):""}}),ro=be((d,h)=>{ue(),he(),pe();var o=jt(),{PromisePrototypeThen:a,SymbolAsyncIterator:p,SymbolIterator:n}=Fe(),{Buffer:t}=(Ke(),Ue($e)),{ERR_INVALID_ARG_TYPE:r,ERR_STREAM_NULL_VALUES:e}=Ze().codes;function s(i,g,f){let l;if(typeof g=="string"||g instanceof t)return new i({objectMode:!0,...f,read(){this.push(g),this.push(null)}});let u;if(g&&g[p])u=!0,l=g[p]();else if(g&&g[n])u=!1,l=g[n]();else throw new r("iterable",["Iterable"],g);let m=new i({objectMode:!0,highWaterMark:1,...f}),v=!1;m._read=function(){v||(v=!0,b())},m._destroy=function(_,A){a(k(_),()=>o.nextTick(A,_),y=>o.nextTick(A,y||_))};async function k(_){let A=_!=null,y=typeof l.throw=="function";if(A&&y){let{value:S,done:x}=await l.throw(_);if(await S,x)return}if(typeof l.return=="function"){let{value:S}=await l.return();await S}}async function b(){for(;;){try{let{value:_,done:A}=u?await l.next():l.next();if(A)m.push(null);else{let y=_&&typeof _.then=="function"?await _:_;if(y===null)throw v=!1,new e;if(m.push(y))continue;v=!1}}catch(_){m.destroy(_)}break}}return m}h.exports=s}),Yn=be((d,h)=>{ue(),he(),pe();var o=jt(),{ArrayPrototypeIndexOf:a,NumberIsInteger:p,NumberIsNaN:n,NumberParseInt:t,ObjectDefineProperties:r,ObjectKeys:e,ObjectSetPrototypeOf:s,Promise:i,SafeSet:g,SymbolAsyncDispose:f,SymbolAsyncIterator:l,Symbol:u}=Fe();h.exports=ce,ce.ReadableState=_e;var{EventEmitter:m}=(qt(),Ue(Mt)),{Stream:v,prependListener:k}=ci(),{Buffer:b}=(Ke(),Ue($e)),{addAbortSignal:_}=Qn(),A=Ct(),y=et().debuglog("stream",C=>{y=C}),S=Bl(),x=Yt(),{getHighWaterMark:I,getDefaultHighWaterMark:P}=Gn(),{aggregateTwoErrors:O,codes:{ERR_INVALID_ARG_TYPE:j,ERR_METHOD_NOT_IMPLEMENTED:T,ERR_OUT_OF_RANGE:z,ERR_STREAM_PUSH_AFTER_EOF:q,ERR_STREAM_UNSHIFT_AFTER_END_EVENT:B},AbortError:le}=Ze(),{validateObject:X}=pn(),G=u("kPaused"),{StringDecoder:ie}=Dl(),D=ro();s(ce.prototype,v.prototype),s(ce,v);var te=()=>{},{errorOrDestroy:R}=x,Z=1,ye=2,L=4,re=8,H=16,M=32,ne=64,K=128,Q=256,V=512,de=1024,ae=2048,N=4096,W=8192,se=16384,me=32768,ge=65536,we=1<<17,$=1<<18;function ve(C){return{enumerable:!1,get(){return(this.state&C)!==0},set(U){U?this.state|=C:this.state&=~C}}}r(_e.prototype,{objectMode:ve(Z),ended:ve(ye),endEmitted:ve(L),reading:ve(re),constructed:ve(H),sync:ve(M),needReadable:ve(ne),emittedReadable:ve(K),readableListening:ve(Q),resumeScheduled:ve(V),errorEmitted:ve(de),emitClose:ve(ae),autoDestroy:ve(N),destroyed:ve(W),closed:ve(se),closeEmitted:ve(me),multiAwaitDrain:ve(ge),readingMore:ve(we),dataEmitted:ve($)});function _e(C,U,ke){typeof ke!="boolean"&&(ke=U instanceof yt()),this.state=ae|N|H|M,C&&C.objectMode&&(this.state|=Z),ke&&C&&C.readableObjectMode&&(this.state|=Z),this.highWaterMark=C?I(this,C,"readableHighWaterMark",ke):P(!1),this.buffer=new S,this.length=0,this.pipes=[],this.flowing=null,this[G]=null,C&&C.emitClose===!1&&(this.state&=~ae),C&&C.autoDestroy===!1&&(this.state&=~N),this.errored=null,this.defaultEncoding=C&&C.defaultEncoding||"utf8",this.awaitDrainWriters=null,this.decoder=null,this.encoding=null,C&&C.encoding&&(this.decoder=new ie(C.encoding),this.encoding=C.encoding)}function ce(C){if(!(this instanceof ce))return new ce(C);let U=this instanceof yt();this._readableState=new _e(C,this,U),C&&(typeof C.read=="function"&&(this._read=C.read),typeof C.destroy=="function"&&(this._destroy=C.destroy),typeof C.construct=="function"&&(this._construct=C.construct),C.signal&&!U&&_(C.signal,this)),v.call(this,C),x.construct(this,()=>{this._readableState.needReadable&&Y(this,this._readableState)})}ce.prototype.destroy=x.destroy,ce.prototype._undestroy=x.undestroy,ce.prototype._destroy=function(C,U){U(C)},ce.prototype[m.captureRejectionSymbol]=function(C){this.destroy(C)},ce.prototype[f]=function(){let C;return this.destroyed||(C=this.readableEnded?null:new le,this.destroy(C)),new i((U,ke)=>A(this,Se=>Se&&Se!==C?ke(Se):U(null)))},ce.prototype.push=function(C,U){return Me(this,C,U,!1)},ce.prototype.unshift=function(C,U){return Me(this,C,U,!0)};function Me(C,U,ke,Se){y("readableAddChunk",U);let Ae=C._readableState,ze;if((Ae.state&Z)===0&&(typeof U=="string"?(ke=ke||Ae.defaultEncoding,Ae.encoding!==ke&&(Se&&Ae.encoding?U=b.from(U,ke).toString(Ae.encoding):(U=b.from(U,ke),ke=""))):U instanceof b?ke="":v._isUint8Array(U)?(U=v._uint8ArrayToBuffer(U),ke=""):U!=null&&(ze=new j("chunk",["string","Buffer","Uint8Array"],U))),ze)R(C,ze);else if(U===null)Ae.state&=~re,ee(C,Ae);else if((Ae.state&Z)!==0||U&&U.length>0)if(Se)if((Ae.state&L)!==0)R(C,new B);else{if(Ae.destroyed||Ae.errored)return!1;c(C,Ae,U,!0)}else if(Ae.ended)R(C,new q);else{if(Ae.destroyed||Ae.errored)return!1;Ae.state&=~re,Ae.decoder&&!ke?(U=Ae.decoder.write(U),Ae.objectMode||U.length!==0?c(C,Ae,U,!1):Y(C,Ae)):c(C,Ae,U,!1)}else Se||(Ae.state&=~re,Y(C,Ae));return!Ae.ended&&(Ae.length<Ae.highWaterMark||Ae.length===0)}function c(C,U,ke,Se){U.flowing&&U.length===0&&!U.sync&&C.listenerCount("data")>0?((U.state&ge)!==0?U.awaitDrainWriters.clear():U.awaitDrainWriters=null,U.dataEmitted=!0,C.emit("data",ke)):(U.length+=U.objectMode?1:ke.length,Se?U.buffer.unshift(ke):U.buffer.push(ke),(U.state&ne)!==0&&fe(C)),Y(C,U)}ce.prototype.isPaused=function(){let C=this._readableState;return C[G]===!0||C.flowing===!1},ce.prototype.setEncoding=function(C){let U=new ie(C);this._readableState.decoder=U,this._readableState.encoding=this._readableState.decoder.encoding;let ke=this._readableState.buffer,Se="";for(let Ae of ke)Se+=U.write(Ae);return ke.clear(),Se!==""&&ke.push(Se),this._readableState.length=Se.length,this};var w=1073741824;function E(C){if(C>w)throw new z("size","<= 1GiB",C);return C--,C|=C>>>1,C|=C>>>2,C|=C>>>4,C|=C>>>8,C|=C>>>16,C++,C}function F(C,U){return C<=0||U.length===0&&U.ended?0:(U.state&Z)!==0?1:n(C)?U.flowing&&U.length?U.buffer.first().length:U.length:C<=U.length?C:U.ended?U.length:0}ce.prototype.read=function(C){y("read",C),C===void 0?C=NaN:p(C)||(C=t(C,10));let U=this._readableState,ke=C;if(C>U.highWaterMark&&(U.highWaterMark=E(C)),C!==0&&(U.state&=~K),C===0&&U.needReadable&&((U.highWaterMark!==0?U.length>=U.highWaterMark:U.length>0)||U.ended))return y("read: emitReadable",U.length,U.ended),U.length===0&&U.ended?ot(this):fe(this),null;if(C=F(C,U),C===0&&U.ended)return U.length===0&&ot(this),null;let Se=(U.state&ne)!==0;if(y("need readable",Se),(U.length===0||U.length-C<U.highWaterMark)&&(Se=!0,y("length less than watermark",Se)),U.ended||U.reading||U.destroyed||U.errored||!U.constructed)Se=!1,y("reading, ended or constructing",Se);else if(Se){y("do read"),U.state|=re|M,U.length===0&&(U.state|=ne);try{this._read(U.highWaterMark)}catch(ze){R(this,ze)}U.state&=~M,U.reading||(C=F(ke,U))}let Ae;return C>0?Ae=Ft(C,U):Ae=null,Ae===null?(U.needReadable=U.length<=U.highWaterMark,C=0):(U.length-=C,U.multiAwaitDrain?U.awaitDrainWriters.clear():U.awaitDrainWriters=null),U.length===0&&(U.ended||(U.needReadable=!0),ke!==C&&U.ended&&ot(this)),Ae!==null&&!U.errorEmitted&&!U.closeEmitted&&(U.dataEmitted=!0,this.emit("data",Ae)),Ae};function ee(C,U){if(y("onEofChunk"),!U.ended){if(U.decoder){let ke=U.decoder.end();ke&&ke.length&&(U.buffer.push(ke),U.length+=U.objectMode?1:ke.length)}U.ended=!0,U.sync?fe(C):(U.needReadable=!1,U.emittedReadable=!0,xe(C))}}function fe(C){let U=C._readableState;y("emitReadable",U.needReadable,U.emittedReadable),U.needReadable=!1,U.emittedReadable||(y("emitReadable",U.flowing),U.emittedReadable=!0,o.nextTick(xe,C))}function xe(C){let U=C._readableState;y("emitReadable_",U.destroyed,U.length,U.ended),!U.destroyed&&!U.errored&&(U.length||U.ended)&&(C.emit("readable"),U.emittedReadable=!1),U.needReadable=!U.flowing&&!U.ended&&U.length<=U.highWaterMark,it(C)}function Y(C,U){!U.readingMore&&U.constructed&&(U.readingMore=!0,o.nextTick(oe,C,U))}function oe(C,U){for(;!U.reading&&!U.ended&&(U.length<U.highWaterMark||U.flowing&&U.length===0);){let ke=U.length;if(y("maybeReadMore read 0"),C.read(0),ke===U.length)break}U.readingMore=!1}ce.prototype._read=function(C){throw new T("_read()")},ce.prototype.pipe=function(C,U){let ke=this,Se=this._readableState;Se.pipes.length===1&&(Se.multiAwaitDrain||(Se.multiAwaitDrain=!0,Se.awaitDrainWriters=new g(Se.awaitDrainWriters?[Se.awaitDrainWriters]:[]))),Se.pipes.push(C),y("pipe count=%d opts=%j",Se.pipes.length,U);let Ae=(!U||U.end!==!1)&&C!==o.stdout&&C!==o.stderr?Xe:Ot;Se.endEmitted?o.nextTick(Ae):ke.once("end",Ae),C.on("unpipe",ze);function ze(ct,pt){y("onunpipe"),ct===ke&&pt&&pt.hasUnpiped===!1&&(pt.hasUnpiped=!0,tn())}function Xe(){y("onend"),C.end()}let rt,en=!1;function tn(){y("cleanup"),C.removeListener("close",lt),C.removeListener("finish",St),rt&&C.removeListener("drain",rt),C.removeListener("error",Pt),C.removeListener("unpipe",ze),ke.removeListener("end",Xe),ke.removeListener("end",Ot),ke.removeListener("data",mn),en=!0,rt&&Se.awaitDrainWriters&&(!C._writableState||C._writableState.needDrain)&&rt()}function nn(){en||(Se.pipes.length===1&&Se.pipes[0]===C?(y("false write response, pause",0),Se.awaitDrainWriters=C,Se.multiAwaitDrain=!1):Se.pipes.length>1&&Se.pipes.includes(C)&&(y("false write response, pause",Se.awaitDrainWriters.size),Se.awaitDrainWriters.add(C)),ke.pause()),rt||(rt=Ee(ke,C),C.on("drain",rt))}ke.on("data",mn);function mn(ct){y("ondata");let pt=C.write(ct);y("dest.write",pt),pt===!1&&nn()}function Pt(ct){if(y("onerror",ct),Ot(),C.removeListener("error",Pt),C.listenerCount("error")===0){let pt=C._writableState||C._readableState;pt&&!pt.errorEmitted?R(C,ct):C.emit("error",ct)}}k(C,"error",Pt);function lt(){C.removeListener("finish",St),Ot()}C.once("close",lt);function St(){y("onfinish"),C.removeListener("close",lt),Ot()}C.once("finish",St);function Ot(){y("unpipe"),ke.unpipe(C)}return C.emit("pipe",ke),C.writableNeedDrain===!0?nn():Se.flowing||(y("pipe resume"),ke.resume()),C};function Ee(C,U){return function(){let ke=C._readableState;ke.awaitDrainWriters===U?(y("pipeOnDrain",1),ke.awaitDrainWriters=null):ke.multiAwaitDrain&&(y("pipeOnDrain",ke.awaitDrainWriters.size),ke.awaitDrainWriters.delete(U)),(!ke.awaitDrainWriters||ke.awaitDrainWriters.size===0)&&C.listenerCount("data")&&C.resume()}}ce.prototype.unpipe=function(C){let U=this._readableState,ke={hasUnpiped:!1};if(U.pipes.length===0)return this;if(!C){let Ae=U.pipes;U.pipes=[],this.pause();for(let ze=0;ze<Ae.length;ze++)Ae[ze].emit("unpipe",this,{hasUnpiped:!1});return this}let Se=a(U.pipes,C);return Se===-1?this:(U.pipes.splice(Se,1),U.pipes.length===0&&this.pause(),C.emit("unpipe",this,ke),this)},ce.prototype.on=function(C,U){let ke=v.prototype.on.call(this,C,U),Se=this._readableState;return C==="data"?(Se.readableListening=this.listenerCount("readable")>0,Se.flowing!==!1&&this.resume()):C==="readable"&&!Se.endEmitted&&!Se.readableListening&&(Se.readableListening=Se.needReadable=!0,Se.flowing=!1,Se.emittedReadable=!1,y("on readable",Se.length,Se.reading),Se.length?fe(this):Se.reading||o.nextTick(Te,this)),ke},ce.prototype.addListener=ce.prototype.on,ce.prototype.removeListener=function(C,U){let ke=v.prototype.removeListener.call(this,C,U);return C==="readable"&&o.nextTick(Ie,this),ke},ce.prototype.off=ce.prototype.removeListener,ce.prototype.removeAllListeners=function(C){let U=v.prototype.removeAllListeners.apply(this,arguments);return(C==="readable"||C===void 0)&&o.nextTick(Ie,this),U};function Ie(C){let U=C._readableState;U.readableListening=C.listenerCount("readable")>0,U.resumeScheduled&&U[G]===!1?U.flowing=!0:C.listenerCount("data")>0?C.resume():U.readableListening||(U.flowing=null)}function Te(C){y("readable nexttick read 0"),C.read(0)}ce.prototype.resume=function(){let C=this._readableState;return C.flowing||(y("resume"),C.flowing=!C.readableListening,Ce(this,C)),C[G]=!1,this};function Ce(C,U){U.resumeScheduled||(U.resumeScheduled=!0,o.nextTick(st,C,U))}function st(C,U){y("resume",U.reading),U.reading||C.read(0),U.resumeScheduled=!1,C.emit("resume"),it(C),U.flowing&&!U.reading&&C.read(0)}ce.prototype.pause=function(){return y("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(y("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState[G]=!0,this};function it(C){let U=C._readableState;for(y("flow",U.flowing);U.flowing&&C.read()!==null;);}ce.prototype.wrap=function(C){let U=!1;C.on("data",Se=>{!this.push(Se)&&C.pause&&(U=!0,C.pause())}),C.on("end",()=>{this.push(null)}),C.on("error",Se=>{R(this,Se)}),C.on("close",()=>{this.destroy()}),C.on("destroy",()=>{this.destroy()}),this._read=()=>{U&&C.resume&&(U=!1,C.resume())};let ke=e(C);for(let Se=1;Se<ke.length;Se++){let Ae=ke[Se];this[Ae]===void 0&&typeof C[Ae]=="function"&&(this[Ae]=C[Ae].bind(C))}return this},ce.prototype[l]=function(){return Ve(this)},ce.prototype.iterator=function(C){return C!==void 0&&X(C,"options"),Ve(this,C)};function Ve(C,U){typeof C.read!="function"&&(C=ce.wrap(C,{objectMode:!0}));let ke=at(C,U);return ke.stream=C,ke}async function*at(C,U){let ke=te;function Se(Xe){this===C?(ke(),ke=te):ke=Xe}C.on("readable",Se);let Ae,ze=A(C,{writable:!1},Xe=>{Ae=Xe?O(Ae,Xe):null,ke(),ke=te});try{for(;;){let Xe=C.destroyed?null:C.read();if(Xe!==null)yield Xe;else{if(Ae)throw Ae;if(Ae===null)return;await new i(Se)}}}catch(Xe){throw Ae=O(Ae,Xe),Ae}finally{(Ae||U?.destroyOnReturn!==!1)&&(Ae===void 0||C._readableState.autoDestroy)?x.destroyer(C,null):(C.off("readable",Se),ze())}}r(ce.prototype,{readable:{__proto__:null,get(){let C=this._readableState;return!!C&&C.readable!==!1&&!C.destroyed&&!C.errorEmitted&&!C.endEmitted},set(C){this._readableState&&(this._readableState.readable=!!C)}},readableDidRead:{__proto__:null,enumerable:!1,get:function(){return this._readableState.dataEmitted}},readableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._readableState.readable!==!1&&(this._readableState.destroyed||this._readableState.errored)&&!this._readableState.endEmitted)}},readableHighWaterMark:{__proto__:null,enumerable:!1,get:function(){return this._readableState.highWaterMark}},readableBuffer:{__proto__:null,enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}},readableFlowing:{__proto__:null,enumerable:!1,get:function(){return this._readableState.flowing},set:function(C){this._readableState&&(this._readableState.flowing=C)}},readableLength:{__proto__:null,enumerable:!1,get(){return this._readableState.length}},readableObjectMode:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.objectMode:!1}},readableEncoding:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.encoding:null}},errored:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.errored:null}},closed:{__proto__:null,get(){return this._readableState?this._readableState.closed:!1}},destroyed:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.destroyed:!1},set(C){this._readableState&&(this._readableState.destroyed=C)}},readableEnded:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.endEmitted:!1}}}),r(_e.prototype,{pipesCount:{__proto__:null,get(){return this.pipes.length}},paused:{__proto__:null,get(){return this[G]!==!1},set(C){this[G]=!!C}}}),ce._fromList=Ft;function Ft(C,U){if(U.length===0)return null;let ke;return U.objectMode?ke=U.buffer.shift():!C||C>=U.length?(U.decoder?ke=U.buffer.join(""):U.buffer.length===1?ke=U.buffer.first():ke=U.buffer.concat(U.length),U.buffer.clear()):ke=U.buffer.consume(C,U.decoder),ke}function ot(C){let U=C._readableState;y("endReadable",U.endEmitted),U.endEmitted||(U.ended=!0,o.nextTick(nt,U,C))}function nt(C,U){if(y("endReadableNT",C.endEmitted,C.length),!C.errored&&!C.closeEmitted&&!C.endEmitted&&C.length===0){if(C.endEmitted=!0,U.emit("end"),U.writable&&U.allowHalfOpen===!1)o.nextTick(fn,U);else if(C.autoDestroy){let ke=U._writableState;(!ke||ke.autoDestroy&&(ke.finished||ke.writable===!1))&&U.destroy()}}}function fn(C){C.writable&&!C.writableEnded&&!C.destroyed&&C.end()}ce.from=function(C,U){return D(ce,C,U)};var Dt;function Zt(){return Dt===void 0&&(Dt={}),Dt}ce.fromWeb=function(C,U){return Zt().newStreamReadableFromReadableStream(C,U)},ce.toWeb=function(C,U){return Zt().newReadableStreamFromStreamReadable(C,U)},ce.wrap=function(C,U){var ke,Se;return new ce({objectMode:(ke=(Se=C.readableObjectMode)!==null&&Se!==void 0?Se:C.objectMode)!==null&&ke!==void 0?ke:!0,...U,destroy(Ae,ze){x.destroyer(C,Ae),ze(Ae)}}).wrap(C)}}),di=be((d,h)=>{ue(),he(),pe();var o=jt(),{ArrayPrototypeSlice:a,Error:p,FunctionPrototypeSymbolHasInstance:n,ObjectDefineProperty:t,ObjectDefineProperties:r,ObjectSetPrototypeOf:e,StringPrototypeToLowerCase:s,Symbol:i,SymbolHasInstance:g}=Fe();h.exports=X,X.WritableState=B;var{EventEmitter:f}=(qt(),Ue(Mt)),l=ci().Stream,{Buffer:u}=(Ke(),Ue($e)),m=Yt(),{addAbortSignal:v}=Qn(),{getHighWaterMark:k,getDefaultHighWaterMark:b}=Gn(),{ERR_INVALID_ARG_TYPE:_,ERR_METHOD_NOT_IMPLEMENTED:A,ERR_MULTIPLE_CALLBACK:y,ERR_STREAM_CANNOT_PIPE:S,ERR_STREAM_DESTROYED:x,ERR_STREAM_ALREADY_FINISHED:I,ERR_STREAM_NULL_VALUES:P,ERR_STREAM_WRITE_AFTER_END:O,ERR_UNKNOWN_ENCODING:j}=Ze().codes,{errorOrDestroy:T}=m;e(X.prototype,l.prototype),e(X,l);function z(){}var q=i("kOnFinished");function B(N,W,se){typeof se!="boolean"&&(se=W instanceof yt()),this.objectMode=!!(N&&N.objectMode),se&&(this.objectMode=this.objectMode||!!(N&&N.writableObjectMode)),this.highWaterMark=N?k(this,N,"writableHighWaterMark",se):b(!1),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;let me=!!(N&&N.decodeStrings===!1);this.decodeStrings=!me,this.defaultEncoding=N&&N.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=R.bind(void 0,W),this.writecb=null,this.writelen=0,this.afterWriteTickInfo=null,le(this),this.pendingcb=0,this.constructed=!0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!N||N.emitClose!==!1,this.autoDestroy=!N||N.autoDestroy!==!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this[q]=[]}function le(N){N.buffered=[],N.bufferedIndex=0,N.allBuffers=!0,N.allNoop=!0}B.prototype.getBuffer=function(){return a(this.buffered,this.bufferedIndex)},t(B.prototype,"bufferedRequestCount",{__proto__:null,get(){return this.buffered.length-this.bufferedIndex}});function X(N){let W=this instanceof yt();if(!W&&!n(X,this))return new X(N);this._writableState=new B(N,this,W),N&&(typeof N.write=="function"&&(this._write=N.write),typeof N.writev=="function"&&(this._writev=N.writev),typeof N.destroy=="function"&&(this._destroy=N.destroy),typeof N.final=="function"&&(this._final=N.final),typeof N.construct=="function"&&(this._construct=N.construct),N.signal&&v(N.signal,this)),l.call(this,N),m.construct(this,()=>{let se=this._writableState;se.writing||re(this,se),K(this,se)})}t(X,g,{__proto__:null,value:function(N){return n(this,N)?!0:this!==X?!1:N&&N._writableState instanceof B}}),X.prototype.pipe=function(){T(this,new S)};function G(N,W,se,me){let ge=N._writableState;if(typeof se=="function")me=se,se=ge.defaultEncoding;else{if(!se)se=ge.defaultEncoding;else if(se!=="buffer"&&!u.isEncoding(se))throw new j(se);typeof me!="function"&&(me=z)}if(W===null)throw new P;if(!ge.objectMode)if(typeof W=="string")ge.decodeStrings!==!1&&(W=u.from(W,se),se="buffer");else if(W instanceof u)se="buffer";else if(l._isUint8Array(W))W=l._uint8ArrayToBuffer(W),se="buffer";else throw new _("chunk",["string","Buffer","Uint8Array"],W);let we;return ge.ending?we=new O:ge.destroyed&&(we=new x("write")),we?(o.nextTick(me,we),T(N,we,!0),we):(ge.pendingcb++,ie(N,ge,W,se,me))}X.prototype.write=function(N,W,se){return G(this,N,W,se)===!0},X.prototype.cork=function(){this._writableState.corked++},X.prototype.uncork=function(){let N=this._writableState;N.corked&&(N.corked--,N.writing||re(this,N))},X.prototype.setDefaultEncoding=function(N){if(typeof N=="string"&&(N=s(N)),!u.isEncoding(N))throw new j(N);return this._writableState.defaultEncoding=N,this};function ie(N,W,se,me,ge){let we=W.objectMode?1:se.length;W.length+=we;let $=W.length<W.highWaterMark;return $||(W.needDrain=!0),W.writing||W.corked||W.errored||!W.constructed?(W.buffered.push({chunk:se,encoding:me,callback:ge}),W.allBuffers&&me!=="buffer"&&(W.allBuffers=!1),W.allNoop&&ge!==z&&(W.allNoop=!1)):(W.writelen=we,W.writecb=ge,W.writing=!0,W.sync=!0,N._write(se,me,W.onwrite),W.sync=!1),$&&!W.errored&&!W.destroyed}function D(N,W,se,me,ge,we,$){W.writelen=me,W.writecb=$,W.writing=!0,W.sync=!0,W.destroyed?W.onwrite(new x("write")):se?N._writev(ge,W.onwrite):N._write(ge,we,W.onwrite),W.sync=!1}function te(N,W,se,me){--W.pendingcb,me(se),L(W),T(N,se)}function R(N,W){let se=N._writableState,me=se.sync,ge=se.writecb;if(typeof ge!="function"){T(N,new y);return}se.writing=!1,se.writecb=null,se.length-=se.writelen,se.writelen=0,W?(W.stack,se.errored||(se.errored=W),N._readableState&&!N._readableState.errored&&(N._readableState.errored=W),me?o.nextTick(te,N,se,W,ge):te(N,se,W,ge)):(se.buffered.length>se.bufferedIndex&&re(N,se),me?se.afterWriteTickInfo!==null&&se.afterWriteTickInfo.cb===ge?se.afterWriteTickInfo.count++:(se.afterWriteTickInfo={count:1,cb:ge,stream:N,state:se},o.nextTick(Z,se.afterWriteTickInfo)):ye(N,se,1,ge))}function Z({stream:N,state:W,count:se,cb:me}){return W.afterWriteTickInfo=null,ye(N,W,se,me)}function ye(N,W,se,me){for(!W.ending&&!N.destroyed&&W.length===0&&W.needDrain&&(W.needDrain=!1,N.emit("drain"));se-- >0;)W.pendingcb--,me();W.destroyed&&L(W),K(N,W)}function L(N){if(N.writing)return;for(let ge=N.bufferedIndex;ge<N.buffered.length;++ge){var W;let{chunk:we,callback:$}=N.buffered[ge],ve=N.objectMode?1:we.length;N.length-=ve,$((W=N.errored)!==null&&W!==void 0?W:new x("write"))}let se=N[q].splice(0);for(let ge=0;ge<se.length;ge++){var me;se[ge]((me=N.errored)!==null&&me!==void 0?me:new x("end"))}le(N)}function re(N,W){if(W.corked||W.bufferProcessing||W.destroyed||!W.constructed)return;let{buffered:se,bufferedIndex:me,objectMode:ge}=W,we=se.length-me;if(!we)return;let $=me;if(W.bufferProcessing=!0,we>1&&N._writev){W.pendingcb-=we-1;let ve=W.allNoop?z:ce=>{for(let Me=$;Me<se.length;++Me)se[Me].callback(ce)},_e=W.allNoop&&$===0?se:a(se,$);_e.allBuffers=W.allBuffers,D(N,W,!0,W.length,_e,"",ve),le(W)}else{do{let{chunk:ve,encoding:_e,callback:ce}=se[$];se[$++]=null;let Me=ge?1:ve.length;D(N,W,!1,Me,ve,_e,ce)}while($<se.length&&!W.writing);$===se.length?le(W):$>256?(se.splice(0,$),W.bufferedIndex=0):W.bufferedIndex=$}W.bufferProcessing=!1}X.prototype._write=function(N,W,se){if(this._writev)this._writev([{chunk:N,encoding:W}],se);else throw new A("_write()")},X.prototype._writev=null,X.prototype.end=function(N,W,se){let me=this._writableState;typeof N=="function"?(se=N,N=null,W=null):typeof W=="function"&&(se=W,W=null);let ge;if(N!=null){let we=G(this,N,W);we instanceof p&&(ge=we)}return me.corked&&(me.corked=1,this.uncork()),ge||(!me.errored&&!me.ending?(me.ending=!0,K(this,me,!0),me.ended=!0):me.finished?ge=new I("end"):me.destroyed&&(ge=new x("end"))),typeof se=="function"&&(ge||me.finished?o.nextTick(se,ge):me[q].push(se)),this};function H(N){return N.ending&&!N.destroyed&&N.constructed&&N.length===0&&!N.errored&&N.buffered.length===0&&!N.finished&&!N.writing&&!N.errorEmitted&&!N.closeEmitted}function M(N,W){let se=!1;function me(ge){if(se){T(N,ge??y());return}if(se=!0,W.pendingcb--,ge){let we=W[q].splice(0);for(let $=0;$<we.length;$++)we[$](ge);T(N,ge,W.sync)}else H(W)&&(W.prefinished=!0,N.emit("prefinish"),W.pendingcb++,o.nextTick(Q,N,W))}W.sync=!0,W.pendingcb++;try{N._final(me)}catch(ge){me(ge)}W.sync=!1}function ne(N,W){!W.prefinished&&!W.finalCalled&&(typeof N._final=="function"&&!W.destroyed?(W.finalCalled=!0,M(N,W)):(W.prefinished=!0,N.emit("prefinish")))}function K(N,W,se){H(W)&&(ne(N,W),W.pendingcb===0&&(se?(W.pendingcb++,o.nextTick((me,ge)=>{H(ge)?Q(me,ge):ge.pendingcb--},N,W)):H(W)&&(W.pendingcb++,Q(N,W))))}function Q(N,W){W.pendingcb--,W.finished=!0;let se=W[q].splice(0);for(let me=0;me<se.length;me++)se[me]();if(N.emit("finish"),W.autoDestroy){let me=N._readableState;(!me||me.autoDestroy&&(me.endEmitted||me.readable===!1))&&N.destroy()}}r(X.prototype,{closed:{__proto__:null,get(){return this._writableState?this._writableState.closed:!1}},destroyed:{__proto__:null,get(){return this._writableState?this._writableState.destroyed:!1},set(N){this._writableState&&(this._writableState.destroyed=N)}},writable:{__proto__:null,get(){let N=this._writableState;return!!N&&N.writable!==!1&&!N.destroyed&&!N.errored&&!N.ending&&!N.ended},set(N){this._writableState&&(this._writableState.writable=!!N)}},writableFinished:{__proto__:null,get(){return this._writableState?this._writableState.finished:!1}},writableObjectMode:{__proto__:null,get(){return this._writableState?this._writableState.objectMode:!1}},writableBuffer:{__proto__:null,get(){return this._writableState&&this._writableState.getBuffer()}},writableEnded:{__proto__:null,get(){return this._writableState?this._writableState.ending:!1}},writableNeedDrain:{__proto__:null,get(){let N=this._writableState;return N?!N.destroyed&&!N.ending&&N.needDrain:!1}},writableHighWaterMark:{__proto__:null,get(){return this._writableState&&this._writableState.highWaterMark}},writableCorked:{__proto__:null,get(){return this._writableState?this._writableState.corked:0}},writableLength:{__proto__:null,get(){return this._writableState&&this._writableState.length}},errored:{__proto__:null,enumerable:!1,get(){return this._writableState?this._writableState.errored:null}},writableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._writableState.writable!==!1&&(this._writableState.destroyed||this._writableState.errored)&&!this._writableState.finished)}}});var V=m.destroy;X.prototype.destroy=function(N,W){let se=this._writableState;return!se.destroyed&&(se.bufferedIndex<se.buffered.length||se[q].length)&&o.nextTick(L,se),V.call(this,N,W),this},X.prototype._undestroy=m.undestroy,X.prototype._destroy=function(N,W){W(N)},X.prototype[f.captureRejectionSymbol]=function(N){this.destroy(N)};var de;function ae(){return de===void 0&&(de={}),de}X.fromWeb=function(N,W){return ae().newStreamWritableFromWritableStream(N,W)},X.toWeb=function(N){return ae().newWritableStreamFromStreamWritable(N)}}),Wl=be((d,h)=>{ue(),he(),pe();var o=jt(),a=(Ke(),Ue($e)),{isReadable:p,isWritable:n,isIterable:t,isNodeStream:r,isReadableNodeStream:e,isWritableNodeStream:s,isDuplexNodeStream:i,isReadableStream:g,isWritableStream:f}=_t(),l=Ct(),{AbortError:u,codes:{ERR_INVALID_ARG_TYPE:m,ERR_INVALID_RETURN_VALUE:v}}=Ze(),{destroyer:k}=Yt(),b=yt(),_=Yn(),A=di(),{createDeferredPromise:y}=et(),S=ro(),x=globalThis.Blob||a.Blob,I=typeof x<"u"?function(q){return q instanceof x}:function(q){return!1},P=globalThis.AbortController||un().AbortController,{FunctionPrototypeCall:O}=Fe(),j=class extends b{constructor(q){super(q),q?.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),q?.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)}};h.exports=function q(B,le){if(i(B))return B;if(e(B))return z({readable:B});if(s(B))return z({writable:B});if(r(B))return z({writable:!1,readable:!1});if(g(B))return z({readable:_.fromWeb(B)});if(f(B))return z({writable:A.fromWeb(B)});if(typeof B=="function"){let{value:G,write:ie,final:D,destroy:te}=T(B);if(t(G))return S(j,G,{objectMode:!0,write:ie,final:D,destroy:te});let R=G?.then;if(typeof R=="function"){let Z,ye=O(R,G,L=>{if(L!=null)throw new v("nully","body",L)},L=>{k(Z,L)});return Z=new j({objectMode:!0,readable:!1,write:ie,final(L){D(async()=>{try{await ye,o.nextTick(L,null)}catch(re){o.nextTick(L,re)}})},destroy:te})}throw new v("Iterable, AsyncIterable or AsyncFunction",le,G)}if(I(B))return q(B.arrayBuffer());if(t(B))return S(j,B,{objectMode:!0,writable:!1});if(g(B?.readable)&&f(B?.writable))return j.fromWeb(B);if(typeof B?.writable=="object"||typeof B?.readable=="object"){let G=B!=null&&B.readable?e(B?.readable)?B?.readable:q(B.readable):void 0,ie=B!=null&&B.writable?s(B?.writable)?B?.writable:q(B.writable):void 0;return z({readable:G,writable:ie})}let X=B?.then;if(typeof X=="function"){let G;return O(X,B,ie=>{ie!=null&&G.push(ie),G.push(null)},ie=>{k(G,ie)}),G=new j({objectMode:!0,writable:!1,read(){}})}throw new m(le,["Blob","ReadableStream","WritableStream","Stream","Iterable","AsyncIterable","Function","{ readable, writable } pair","Promise"],B)};function T(q){let{promise:B,resolve:le}=y(),X=new P,G=X.signal;return{value:q((async function*(){for(;;){let ie=B;B=null;let{chunk:D,done:te,cb:R}=await ie;if(o.nextTick(R),te)return;if(G.aborted)throw new u(void 0,{cause:G.reason});({promise:B,resolve:le}=y()),yield D}})(),{signal:G}),write(ie,D,te){let R=le;le=null,R({chunk:ie,done:!1,cb:te})},final(ie){let D=le;le=null,D({done:!0,cb:ie})},destroy(ie,D){X.abort(),D(ie)}}}function z(q){let B=q.readable&&typeof q.readable.read!="function"?_.wrap(q.readable):q.readable,le=q.writable,X=!!p(B),G=!!n(le),ie,D,te,R,Z;function ye(L){let re=R;R=null,re?re(L):L&&Z.destroy(L)}return Z=new j({readableObjectMode:!!(B!=null&&B.readableObjectMode),writableObjectMode:!!(le!=null&&le.writableObjectMode),readable:X,writable:G}),G&&(l(le,L=>{G=!1,L&&k(B,L),ye(L)}),Z._write=function(L,re,H){le.write(L,re)?H():ie=H},Z._final=function(L){le.end(),D=L},le.on("drain",function(){if(ie){let L=ie;ie=null,L()}}),le.on("finish",function(){if(D){let L=D;D=null,L()}})),X&&(l(B,L=>{X=!1,L&&k(B,L),ye(L)}),B.on("readable",function(){if(te){let L=te;te=null,L()}}),B.on("end",function(){Z.push(null)}),Z._read=function(){for(;;){let L=B.read();if(L===null){te=Z._read;return}if(!Z.push(L))return}}),Z._destroy=function(L,re){!L&&R!==null&&(L=new u),te=null,ie=null,D=null,R===null?re(L):(R=re,k(le,L),k(B,L))},Z}}),yt=be((d,h)=>{ue(),he(),pe();var{ObjectDefineProperties:o,ObjectGetOwnPropertyDescriptor:a,ObjectKeys:p,ObjectSetPrototypeOf:n}=Fe();h.exports=e;var t=Yn(),r=di();n(e.prototype,t.prototype),n(e,t);{let f=p(r.prototype);for(let l=0;l<f.length;l++){let u=f[l];e.prototype[u]||(e.prototype[u]=r.prototype[u])}}function e(f){if(!(this instanceof e))return new e(f);t.call(this,f),r.call(this,f),f?(this.allowHalfOpen=f.allowHalfOpen!==!1,f.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),f.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)):this.allowHalfOpen=!0}o(e.prototype,{writable:{__proto__:null,...a(r.prototype,"writable")},writableHighWaterMark:{__proto__:null,...a(r.prototype,"writableHighWaterMark")},writableObjectMode:{__proto__:null,...a(r.prototype,"writableObjectMode")},writableBuffer:{__proto__:null,...a(r.prototype,"writableBuffer")},writableLength:{__proto__:null,...a(r.prototype,"writableLength")},writableFinished:{__proto__:null,...a(r.prototype,"writableFinished")},writableCorked:{__proto__:null,...a(r.prototype,"writableCorked")},writableEnded:{__proto__:null,...a(r.prototype,"writableEnded")},writableNeedDrain:{__proto__:null,...a(r.prototype,"writableNeedDrain")},destroyed:{__proto__:null,get(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set(f){this._readableState&&this._writableState&&(this._readableState.destroyed=f,this._writableState.destroyed=f)}}});var s;function i(){return s===void 0&&(s={}),s}e.fromWeb=function(f,l){return i().newStreamDuplexFromReadableWritablePair(f,l)},e.toWeb=function(f){return i().newReadableWritablePairFromDuplex(f)};var g;e.from=function(f){return g||(g=Wl()),g(f,"body")}}),so=be((d,h)=>{ue(),he(),pe();var{ObjectSetPrototypeOf:o,Symbol:a}=Fe();h.exports=e;var{ERR_METHOD_NOT_IMPLEMENTED:p}=Ze().codes,n=yt(),{getHighWaterMark:t}=Gn();o(e.prototype,n.prototype),o(e,n);var r=a("kCallback");function e(g){if(!(this instanceof e))return new e(g);let f=g?t(this,g,"readableHighWaterMark",!0):null;f===0&&(g={...g,highWaterMark:null,readableHighWaterMark:f,writableHighWaterMark:g.writableHighWaterMark||0}),n.call(this,g),this._readableState.sync=!1,this[r]=null,g&&(typeof g.transform=="function"&&(this._transform=g.transform),typeof g.flush=="function"&&(this._flush=g.flush)),this.on("prefinish",i)}function s(g){typeof this._flush=="function"&&!this.destroyed?this._flush((f,l)=>{if(f){g?g(f):this.destroy(f);return}l!=null&&this.push(l),this.push(null),g&&g()}):(this.push(null),g&&g())}function i(){this._final!==s&&s.call(this)}e.prototype._final=s,e.prototype._transform=function(g,f,l){throw new p("_transform()")},e.prototype._write=function(g,f,l){let u=this._readableState,m=this._writableState,v=u.length;this._transform(g,f,(k,b)=>{if(k){l(k);return}b!=null&&this.push(b),m.ended||v===u.length||u.length<u.highWaterMark?l():this[r]=l})},e.prototype._read=function(){if(this[r]){let g=this[r];this[r]=null,g()}}}),io=be((d,h)=>{ue(),he(),pe();var{ObjectSetPrototypeOf:o}=Fe();h.exports=p;var a=so();o(p.prototype,a.prototype),o(p,a);function p(n){if(!(this instanceof p))return new p(n);a.call(this,n)}p.prototype._transform=function(n,t,r){r(null,n)}}),ui=be((d,h)=>{ue(),he(),pe();var o=jt(),{ArrayIsArray:a,Promise:p,SymbolAsyncIterator:n,SymbolDispose:t}=Fe(),r=Ct(),{once:e}=et(),s=Yt(),i=yt(),{aggregateTwoErrors:g,codes:{ERR_INVALID_ARG_TYPE:f,ERR_INVALID_RETURN_VALUE:l,ERR_MISSING_ARGS:u,ERR_STREAM_DESTROYED:m,ERR_STREAM_PREMATURE_CLOSE:v},AbortError:k}=Ze(),{validateFunction:b,validateAbortSignal:_}=pn(),{isIterable:A,isReadable:y,isReadableNodeStream:S,isNodeStream:x,isTransformStream:I,isWebStream:P,isReadableStream:O,isReadableFinished:j}=_t(),T=globalThis.AbortController||un().AbortController,z,q,B;function le(L,re,H){let M=!1;L.on("close",()=>{M=!0});let ne=r(L,{readable:re,writable:H},K=>{M=!K});return{destroy:K=>{M||(M=!0,s.destroyer(L,K||new m("pipe")))},cleanup:ne}}function X(L){return b(L[L.length-1],"streams[stream.length - 1]"),L.pop()}function G(L){if(A(L))return L;if(S(L))return ie(L);throw new f("val",["Readable","Iterable","AsyncIterable"],L)}async function*ie(L){q||(q=Yn()),yield*q.prototype[n].call(L)}async function D(L,re,H,{end:M}){let ne,K=null,Q=ae=>{if(ae&&(ne=ae),K){let N=K;K=null,N()}},V=()=>new p((ae,N)=>{ne?N(ne):K=()=>{ne?N(ne):ae()}});re.on("drain",Q);let de=r(re,{readable:!1},Q);try{re.writableNeedDrain&&await V();for await(let ae of L)re.write(ae)||await V();M&&(re.end(),await V()),H()}catch(ae){H(ne!==ae?g(ne,ae):ae)}finally{de(),re.off("drain",Q)}}async function te(L,re,H,{end:M}){I(re)&&(re=re.writable);let ne=re.getWriter();try{for await(let K of L)await ne.ready,ne.write(K).catch(()=>{});await ne.ready,M&&await ne.close(),H()}catch(K){try{await ne.abort(K),H(K)}catch(Q){H(Q)}}}function R(...L){return Z(L,e(X(L)))}function Z(L,re,H){if(L.length===1&&a(L[0])&&(L=L[0]),L.length<2)throw new u("streams");let M=new T,ne=M.signal,K=H?.signal,Q=[];_(K,"options.signal");function V(){ge(new k)}B=B||et().addAbortListener;let de;K&&(de=B(K,V));let ae,N,W=[],se=0;function me(_e){ge(_e,--se===0)}function ge(_e,ce){var Me;if(_e&&(!ae||ae.code==="ERR_STREAM_PREMATURE_CLOSE")&&(ae=_e),!(!ae&&!ce)){for(;W.length;)W.shift()(ae);(Me=de)===null||Me===void 0||Me[t](),M.abort(),ce&&(ae||Q.forEach(c=>c()),o.nextTick(re,ae,N))}}let we;for(let _e=0;_e<L.length;_e++){let ce=L[_e],Me=_e<L.length-1,c=_e>0,w=Me||H?.end!==!1,E=_e===L.length-1;if(x(ce)){let F=function(ee){ee&&ee.name!=="AbortError"&&ee.code!=="ERR_STREAM_PREMATURE_CLOSE"&&me(ee)};if(w){let{destroy:ee,cleanup:fe}=le(ce,Me,c);W.push(ee),y(ce)&&E&&Q.push(fe)}ce.on("error",F),y(ce)&&E&&Q.push(()=>{ce.removeListener("error",F)})}if(_e===0)if(typeof ce=="function"){if(we=ce({signal:ne}),!A(we))throw new l("Iterable, AsyncIterable or Stream","source",we)}else A(ce)||S(ce)||I(ce)?we=ce:we=i.from(ce);else if(typeof ce=="function"){if(I(we)){var $;we=G(($=we)===null||$===void 0?void 0:$.readable)}else we=G(we);if(we=ce(we,{signal:ne}),Me){if(!A(we,!0))throw new l("AsyncIterable",`transform[${_e-1}]`,we)}else{var ve;z||(z=io());let F=new z({objectMode:!0}),ee=(ve=we)===null||ve===void 0?void 0:ve.then;if(typeof ee=="function")se++,ee.call(we,Y=>{N=Y,Y!=null&&F.write(Y),w&&F.end(),o.nextTick(me)},Y=>{F.destroy(Y),o.nextTick(me,Y)});else if(A(we,!0))se++,D(we,F,me,{end:w});else if(O(we)||I(we)){let Y=we.readable||we;se++,D(Y,F,me,{end:w})}else throw new l("AsyncIterable or Promise","destination",we);we=F;let{destroy:fe,cleanup:xe}=le(we,!1,!0);W.push(fe),E&&Q.push(xe)}}else if(x(ce)){if(S(we)){se+=2;let F=ye(we,ce,me,{end:w});y(ce)&&E&&Q.push(F)}else if(I(we)||O(we)){let F=we.readable||we;se++,D(F,ce,me,{end:w})}else if(A(we))se++,D(we,ce,me,{end:w});else throw new f("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],we);we=ce}else if(P(ce)){if(S(we))se++,te(G(we),ce,me,{end:w});else if(O(we)||A(we))se++,te(we,ce,me,{end:w});else if(I(we))se++,te(we.readable,ce,me,{end:w});else throw new f("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],we);we=ce}else we=i.from(ce)}return(ne!=null&&ne.aborted||K!=null&&K.aborted)&&o.nextTick(V),we}function ye(L,re,H,{end:M}){let ne=!1;if(re.on("close",()=>{ne||H(new v)}),L.pipe(re,{end:!1}),M){let K=function(){ne=!0,re.end()};j(L)?o.nextTick(K):L.once("end",K)}else H();return r(L,{readable:!0,writable:!1},K=>{let Q=L._readableState;K&&K.code==="ERR_STREAM_PREMATURE_CLOSE"&&Q&&Q.ended&&!Q.errored&&!Q.errorEmitted?L.once("end",H).once("error",H):H(K)}),r(re,{readable:!1,writable:!0},H)}h.exports={pipelineImpl:Z,pipeline:R}}),ao=be((d,h)=>{ue(),he(),pe();var{pipeline:o}=ui(),a=yt(),{destroyer:p}=Yt(),{isNodeStream:n,isReadable:t,isWritable:r,isWebStream:e,isTransformStream:s,isWritableStream:i,isReadableStream:g}=_t(),{AbortError:f,codes:{ERR_INVALID_ARG_VALUE:l,ERR_MISSING_ARGS:u}}=Ze(),m=Ct();h.exports=function(...v){if(v.length===0)throw new u("streams");if(v.length===1)return a.from(v[0]);let k=[...v];if(typeof v[0]=="function"&&(v[0]=a.from(v[0])),typeof v[v.length-1]=="function"){let T=v.length-1;v[T]=a.from(v[T])}for(let T=0;T<v.length;++T)if(!(!n(v[T])&&!e(v[T]))){if(T<v.length-1&&!(t(v[T])||g(v[T])||s(v[T])))throw new l(`streams[${T}]`,k[T],"must be readable");if(T>0&&!(r(v[T])||i(v[T])||s(v[T])))throw new l(`streams[${T}]`,k[T],"must be writable")}let b,_,A,y,S;function x(T){let z=y;y=null,z?z(T):T?S.destroy(T):!j&&!O&&S.destroy()}let I=v[0],P=o(v,x),O=!!(r(I)||i(I)||s(I)),j=!!(t(P)||g(P)||s(P));if(S=new a({writableObjectMode:!!(I!=null&&I.writableObjectMode),readableObjectMode:!!(P!=null&&P.readableObjectMode),writable:O,readable:j}),O){if(n(I))S._write=function(z,q,B){I.write(z,q)?B():b=B},S._final=function(z){I.end(),_=z},I.on("drain",function(){if(b){let z=b;b=null,z()}});else if(e(I)){let z=(s(I)?I.writable:I).getWriter();S._write=async function(q,B,le){try{await z.ready,z.write(q).catch(()=>{}),le()}catch(X){le(X)}},S._final=async function(q){try{await z.ready,z.close().catch(()=>{}),_=q}catch(B){q(B)}}}let T=s(P)?P.readable:P;m(T,()=>{if(_){let z=_;_=null,z()}})}if(j){if(n(P))P.on("readable",function(){if(A){let T=A;A=null,T()}}),P.on("end",function(){S.push(null)}),S._read=function(){for(;;){let T=P.read();if(T===null){A=S._read;return}if(!S.push(T))return}};else if(e(P)){let T=(s(P)?P.readable:P).getReader();S._read=async function(){for(;;)try{let{value:z,done:q}=await T.read();if(!S.push(z))return;if(q){S.push(null);return}}catch{return}}}}return S._destroy=function(T,z){!T&&y!==null&&(T=new f),A=null,b=null,_=null,y===null?z(T):(y=z,n(P)&&p(P,T))},S}}),zl=be((d,h)=>{ue(),he(),pe();var o=globalThis.AbortController||un().AbortController,{codes:{ERR_INVALID_ARG_VALUE:a,ERR_INVALID_ARG_TYPE:p,ERR_MISSING_ARGS:n,ERR_OUT_OF_RANGE:t},AbortError:r}=Ze(),{validateAbortSignal:e,validateInteger:s,validateObject:i}=pn(),g=Fe().Symbol("kWeak"),f=Fe().Symbol("kResistStopPropagation"),{finished:l}=Ct(),u=ao(),{addAbortSignalNoValidate:m}=Qn(),{isWritable:v,isNodeStream:k}=_t(),{deprecate:b}=et(),{ArrayPrototypePush:_,Boolean:A,MathFloor:y,Number:S,NumberIsNaN:x,Promise:I,PromiseReject:P,PromiseResolve:O,PromisePrototypeThen:j,Symbol:T}=Fe(),z=T("kEmpty"),q=T("kEof");function B(K,Q){if(Q!=null&&i(Q,"options"),Q?.signal!=null&&e(Q.signal,"options.signal"),k(K)&&!v(K))throw new a("stream",K,"must be writable");let V=u(this,K);return Q!=null&&Q.signal&&m(Q.signal,V),V}function le(K,Q){if(typeof K!="function")throw new p("fn",["Function","AsyncFunction"],K);Q!=null&&i(Q,"options"),Q?.signal!=null&&e(Q.signal,"options.signal");let V=1;Q?.concurrency!=null&&(V=y(Q.concurrency));let de=V-1;return Q?.highWaterMark!=null&&(de=y(Q.highWaterMark)),s(V,"options.concurrency",1),s(de,"options.highWaterMark",0),de+=V,(async function*(){let ae=et().AbortSignalAny([Q?.signal].filter(A)),N=this,W=[],se={signal:ae},me,ge,we=!1,$=0;function ve(){we=!0,_e()}function _e(){$-=1,ce()}function ce(){ge&&!we&&$<V&&W.length<de&&(ge(),ge=null)}async function Me(){try{for await(let c of N){if(we)return;if(ae.aborted)throw new r;try{if(c=K(c,se),c===z)continue;c=O(c)}catch(w){c=P(w)}$+=1,j(c,_e,ve),W.push(c),me&&(me(),me=null),!we&&(W.length>=de||$>=V)&&await new I(w=>{ge=w})}W.push(q)}catch(c){let w=P(c);j(w,_e,ve),W.push(w)}finally{we=!0,me&&(me(),me=null)}}Me();try{for(;;){for(;W.length>0;){let c=await W[0];if(c===q)return;if(ae.aborted)throw new r;c!==z&&(yield c),W.shift(),ce()}await new I(c=>{me=c})}}finally{we=!0,ge&&(ge(),ge=null)}}).call(this)}function X(K=void 0){return K!=null&&i(K,"options"),K?.signal!=null&&e(K.signal,"options.signal"),(async function*(){let Q=0;for await(let de of this){var V;if(K!=null&&(V=K.signal)!==null&&V!==void 0&&V.aborted)throw new r({cause:K.signal.reason});yield[Q++,de]}}).call(this)}async function G(K,Q=void 0){for await(let V of R.call(this,K,Q))return!0;return!1}async function ie(K,Q=void 0){if(typeof K!="function")throw new p("fn",["Function","AsyncFunction"],K);return!await G.call(this,async(...V)=>!await K(...V),Q)}async function D(K,Q){for await(let V of R.call(this,K,Q))return V}async function te(K,Q){if(typeof K!="function")throw new p("fn",["Function","AsyncFunction"],K);async function V(de,ae){return await K(de,ae),z}for await(let de of le.call(this,V,Q));}function R(K,Q){if(typeof K!="function")throw new p("fn",["Function","AsyncFunction"],K);async function V(de,ae){return await K(de,ae)?de:z}return le.call(this,V,Q)}var Z=class extends n{constructor(){super("reduce"),this.message="Reduce of an empty stream requires an initial value"}};async function ye(K,Q,V){var de;if(typeof K!="function")throw new p("reducer",["Function","AsyncFunction"],K);V!=null&&i(V,"options"),V?.signal!=null&&e(V.signal,"options.signal");let ae=arguments.length>1;if(V!=null&&(de=V.signal)!==null&&de!==void 0&&de.aborted){let ge=new r(void 0,{cause:V.signal.reason});throw this.once("error",()=>{}),await l(this.destroy(ge)),ge}let N=new o,W=N.signal;if(V!=null&&V.signal){let ge={once:!0,[g]:this,[f]:!0};V.signal.addEventListener("abort",()=>N.abort(),ge)}let se=!1;try{for await(let ge of this){var me;if(se=!0,V!=null&&(me=V.signal)!==null&&me!==void 0&&me.aborted)throw new r;ae?Q=await K(Q,ge,{signal:W}):(Q=ge,ae=!0)}if(!se&&!ae)throw new Z}finally{N.abort()}return Q}async function L(K){K!=null&&i(K,"options"),K?.signal!=null&&e(K.signal,"options.signal");let Q=[];for await(let de of this){var V;if(K!=null&&(V=K.signal)!==null&&V!==void 0&&V.aborted)throw new r(void 0,{cause:K.signal.reason});_(Q,de)}return Q}function re(K,Q){let V=le.call(this,K,Q);return(async function*(){for await(let de of V)yield*de}).call(this)}function H(K){if(K=S(K),x(K))return 0;if(K<0)throw new t("number",">= 0",K);return K}function M(K,Q=void 0){return Q!=null&&i(Q,"options"),Q?.signal!=null&&e(Q.signal,"options.signal"),K=H(K),(async function*(){var V;if(Q!=null&&(V=Q.signal)!==null&&V!==void 0&&V.aborted)throw new r;for await(let ae of this){var de;if(Q!=null&&(de=Q.signal)!==null&&de!==void 0&&de.aborted)throw new r;K--<=0&&(yield ae)}}).call(this)}function ne(K,Q=void 0){return Q!=null&&i(Q,"options"),Q?.signal!=null&&e(Q.signal,"options.signal"),K=H(K),(async function*(){var V;if(Q!=null&&(V=Q.signal)!==null&&V!==void 0&&V.aborted)throw new r;for await(let ae of this){var de;if(Q!=null&&(de=Q.signal)!==null&&de!==void 0&&de.aborted)throw new r;if(K-- >0&&(yield ae),K<=0)return}}).call(this)}h.exports.streamReturningOperators={asIndexedPairs:b(X,"readable.asIndexedPairs will be removed in a future version."),drop:M,filter:R,flatMap:re,map:le,take:ne,compose:B},h.exports.promiseReturningOperators={every:ie,forEach:te,reduce:ye,toArray:L,some:G,find:D}}),oo=be((d,h)=>{ue(),he(),pe();var{ArrayPrototypePop:o,Promise:a}=Fe(),{isIterable:p,isNodeStream:n,isWebStream:t}=_t(),{pipelineImpl:r}=ui(),{finished:e}=Ct();lo();function s(...i){return new a((g,f)=>{let l,u,m=i[i.length-1];if(m&&typeof m=="object"&&!n(m)&&!p(m)&&!t(m)){let v=o(i);l=v.signal,u=v.end}r(i,(v,k)=>{v?f(v):g(k)},{signal:l,end:u})})}h.exports={finished:e,pipeline:s}}),lo=be((d,h)=>{ue(),he(),pe();var{Buffer:o}=(Ke(),Ue($e)),{ObjectDefineProperty:a,ObjectKeys:p,ReflectApply:n}=Fe(),{promisify:{custom:t}}=et(),{streamReturningOperators:r,promiseReturningOperators:e}=zl(),{codes:{ERR_ILLEGAL_CONSTRUCTOR:s}}=Ze(),i=ao(),{setDefaultHighWaterMark:g,getDefaultHighWaterMark:f}=Gn(),{pipeline:l}=ui(),{destroyer:u}=Yt(),m=Ct(),v=oo(),k=_t(),b=h.exports=ci().Stream;b.isDestroyed=k.isDestroyed,b.isDisturbed=k.isDisturbed,b.isErrored=k.isErrored,b.isReadable=k.isReadable,b.isWritable=k.isWritable,b.Readable=Yn();for(let A of p(r)){let y=function(...x){if(new.target)throw s();return b.Readable.from(n(S,this,x))},S=r[A];a(y,"name",{__proto__:null,value:S.name}),a(y,"length",{__proto__:null,value:S.length}),a(b.Readable.prototype,A,{__proto__:null,value:y,enumerable:!1,configurable:!0,writable:!0})}for(let A of p(e)){let y=function(...x){if(new.target)throw s();return n(S,this,x)},S=e[A];a(y,"name",{__proto__:null,value:S.name}),a(y,"length",{__proto__:null,value:S.length}),a(b.Readable.prototype,A,{__proto__:null,value:y,enumerable:!1,configurable:!0,writable:!0})}b.Writable=di(),b.Duplex=yt(),b.Transform=so(),b.PassThrough=io(),b.pipeline=l;var{addAbortSignal:_}=Qn();b.addAbortSignal=_,b.finished=m,b.destroy=u,b.compose=i,b.setDefaultHighWaterMark=g,b.getDefaultHighWaterMark=f,a(b,"promises",{__proto__:null,configurable:!0,enumerable:!0,get(){return v}}),a(l,t,{__proto__:null,enumerable:!0,get(){return v.pipeline}}),a(m,t,{__proto__:null,enumerable:!0,get(){return v.finished}}),b.Stream=b,b._isUint8Array=function(A){return A instanceof Uint8Array},b._uint8ArrayToBuffer=function(A){return o.from(A.buffer,A.byteOffset,A.byteLength)}}),Bt=be((d,h)=>{ue(),he(),pe();var o=lo(),a=oo(),p=o.Readable.destroy;h.exports=o.Readable,h.exports._uint8ArrayToBuffer=o._uint8ArrayToBuffer,h.exports._isUint8Array=o._isUint8Array,h.exports.isDisturbed=o.isDisturbed,h.exports.isErrored=o.isErrored,h.exports.isReadable=o.isReadable,h.exports.Readable=o.Readable,h.exports.Writable=o.Writable,h.exports.Duplex=o.Duplex,h.exports.Transform=o.Transform,h.exports.PassThrough=o.PassThrough,h.exports.addAbortSignal=o.addAbortSignal,h.exports.finished=o.finished,h.exports.destroy=o.destroy,h.exports.destroy=p,h.exports.pipeline=o.pipeline,h.exports.compose=o.compose,Object.defineProperty(o,"promises",{configurable:!0,enumerable:!0,get(){return a}}),h.exports.Stream=o.Stream,h.exports.default=h.exports}),Hl=be((d,h)=>{ue(),he(),pe(),typeof Object.create=="function"?h.exports=function(o,a){a&&(o.super_=a,o.prototype=Object.create(a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}))}:h.exports=function(o,a){if(a){o.super_=a;var p=function(){};p.prototype=a.prototype,o.prototype=new p,o.prototype.constructor=o}}}),$l=be((d,h)=>{ue(),he(),pe();var{Buffer:o}=(Ke(),Ue($e)),a=Symbol.for("BufferList");function p(n){if(!(this instanceof p))return new p(n);p._init.call(this,n)}p._init=function(n){Object.defineProperty(this,a,{value:!0}),this._bufs=[],this.length=0,n&&this.append(n)},p.prototype._new=function(n){return new p(n)},p.prototype._offset=function(n){if(n===0)return[0,0];let t=0;for(let r=0;r<this._bufs.length;r++){let e=t+this._bufs[r].length;if(n<e||r===this._bufs.length-1)return[r,n-t];t=e}},p.prototype._reverseOffset=function(n){let t=n[0],r=n[1];for(let e=0;e<t;e++)r+=this._bufs[e].length;return r},p.prototype.getBuffers=function(){return this._bufs},p.prototype.get=function(n){if(n>this.length||n<0)return;let t=this._offset(n);return this._bufs[t[0]][t[1]]},p.prototype.slice=function(n,t){return typeof n=="number"&&n<0&&(n+=this.length),typeof t=="number"&&t<0&&(t+=this.length),this.copy(null,0,n,t)},p.prototype.copy=function(n,t,r,e){if((typeof r!="number"||r<0)&&(r=0),(typeof e!="number"||e>this.length)&&(e=this.length),r>=this.length||e<=0)return n||o.alloc(0);let s=!!n,i=this._offset(r),g=e-r,f=g,l=s&&t||0,u=i[1];if(r===0&&e===this.length){if(!s)return this._bufs.length===1?this._bufs[0]:o.concat(this._bufs,this.length);for(let m=0;m<this._bufs.length;m++)this._bufs[m].copy(n,l),l+=this._bufs[m].length;return n}if(f<=this._bufs[i[0]].length-u)return s?this._bufs[i[0]].copy(n,t,u,u+f):this._bufs[i[0]].slice(u,u+f);s||(n=o.allocUnsafe(g));for(let m=i[0];m<this._bufs.length;m++){let v=this._bufs[m].length-u;if(f>v)this._bufs[m].copy(n,l,u),l+=v;else{this._bufs[m].copy(n,l,u,u+f),l+=v;break}f-=v,u&&(u=0)}return n.length>l?n.slice(0,l):n},p.prototype.shallowSlice=function(n,t){if(n=n||0,t=typeof t!="number"?this.length:t,n<0&&(n+=this.length),t<0&&(t+=this.length),n===t)return this._new();let r=this._offset(n),e=this._offset(t),s=this._bufs.slice(r[0],e[0]+1);return e[1]===0?s.pop():s[s.length-1]=s[s.length-1].slice(0,e[1]),r[1]!==0&&(s[0]=s[0].slice(r[1])),this._new(s)},p.prototype.toString=function(n,t,r){return this.slice(t,r).toString(n)},p.prototype.consume=function(n){if(n=Math.trunc(n),Number.isNaN(n)||n<=0)return this;for(;this._bufs.length;)if(n>=this._bufs[0].length)n-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift();else{this._bufs[0]=this._bufs[0].slice(n),this.length-=n;break}return this},p.prototype.duplicate=function(){let n=this._new();for(let t=0;t<this._bufs.length;t++)n.append(this._bufs[t]);return n},p.prototype.append=function(n){return this._attach(n,p.prototype._appendBuffer)},p.prototype.prepend=function(n){return this._attach(n,p.prototype._prependBuffer,!0)},p.prototype._attach=function(n,t,r){if(n==null)return this;if(n.buffer)t.call(this,o.from(n.buffer,n.byteOffset,n.byteLength));else if(Array.isArray(n)){let[e,s]=r?[n.length-1,-1]:[0,1];for(let i=e;i>=0&&i<n.length;i+=s)this._attach(n[i],t,r)}else if(this._isBufferList(n)){let[e,s]=r?[n._bufs.length-1,-1]:[0,1];for(let i=e;i>=0&&i<n._bufs.length;i+=s)this._attach(n._bufs[i],t,r)}else typeof n=="number"&&(n=n.toString()),t.call(this,o.from(n));return this},p.prototype._appendBuffer=function(n){this._bufs.push(n),this.length+=n.length},p.prototype._prependBuffer=function(n){this._bufs.unshift(n),this.length+=n.length},p.prototype.indexOf=function(n,t,r){if(r===void 0&&typeof t=="string"&&(r=t,t=void 0),typeof n=="function"||Array.isArray(n))throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');if(typeof n=="number"?n=o.from([n]):typeof n=="string"?n=o.from(n,r):this._isBufferList(n)?n=n.slice():Array.isArray(n.buffer)?n=o.from(n.buffer,n.byteOffset,n.byteLength):o.isBuffer(n)||(n=o.from(n)),t=Number(t||0),isNaN(t)&&(t=0),t<0&&(t=this.length+t),t<0&&(t=0),n.length===0)return t>this.length?this.length:t;let e=this._offset(t),s=e[0],i=e[1];for(;s<this._bufs.length;s++){let g=this._bufs[s];for(;i<g.length;)if(g.length-i>=n.length){let f=g.indexOf(n,i);if(f!==-1)return this._reverseOffset([s,f]);i=g.length-n.length+1}else{let f=this._reverseOffset([s,i]);if(this._match(f,n))return f;i++}i=0}return-1},p.prototype._match=function(n,t){if(this.length-n<t.length)return!1;for(let r=0;r<t.length;r++)if(this.get(n+r)!==t[r])return!1;return!0},(function(){let n={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readBigInt64BE:8,readBigInt64LE:8,readBigUInt64BE:8,readBigUInt64LE:8,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1,readIntBE:null,readIntLE:null,readUIntBE:null,readUIntLE:null};for(let t in n)(function(r){n[r]===null?p.prototype[r]=function(e,s){return this.slice(e,e+s)[r](0,s)}:p.prototype[r]=function(e=0){return this.slice(e,e+n[r])[r](0)}})(t)})(),p.prototype._isBufferList=function(n){return n instanceof p||p.isBufferList(n)},p.isBufferList=function(n){return n!=null&&n[a]},h.exports=p}),Kl=be((d,h)=>{ue(),he(),pe();var o=Bt().Duplex,a=Hl(),p=$l();function n(t){if(!(this instanceof n))return new n(t);if(typeof t=="function"){this._callback=t;let r=(function(e){this._callback&&(this._callback(e),this._callback=null)}).bind(this);this.on("pipe",function(e){e.on("error",r)}),this.on("unpipe",function(e){e.removeListener("error",r)}),t=null}p._init.call(this,t),o.call(this)}a(n,o),Object.assign(n.prototype,p.prototype),n.prototype._new=function(t){return new n(t)},n.prototype._write=function(t,r,e){this._appendBuffer(t),typeof e=="function"&&e()},n.prototype._read=function(t){if(!this.length)return this.push(null);t=Math.min(t,this.length),this.push(this.slice(0,t)),this.consume(t)},n.prototype.end=function(t){o.prototype.end.call(this,t),this._callback&&(this._callback(null,this.slice()),this._callback=null)},n.prototype._destroy=function(t,r){this._bufs.length=0,this.length=0,r(t)},n.prototype._isBufferList=function(t){return t instanceof n||t instanceof p||n.isBufferList(t)},n.isBufferList=p.isBufferList,h.exports=n,h.exports.BufferListStream=n,h.exports.BufferList=p}),Vl=be((d,h)=>{ue(),he(),pe();var o=class{constructor(){this.cmd=null,this.retain=!1,this.qos=0,this.dup=!1,this.length=-1,this.topic=null,this.payload=null}};h.exports=o}),co=be((d,h)=>{ue(),he(),pe();var o=h.exports,{Buffer:a}=(Ke(),Ue($e));o.types={0:"reserved",1:"connect",2:"connack",3:"publish",4:"puback",5:"pubrec",6:"pubrel",7:"pubcomp",8:"subscribe",9:"suback",10:"unsubscribe",11:"unsuback",12:"pingreq",13:"pingresp",14:"disconnect",15:"auth"},o.requiredHeaderFlags={1:0,2:0,4:0,5:0,6:2,7:0,8:2,9:0,10:2,11:0,12:0,13:0,14:0,15:0},o.requiredHeaderFlagsErrors={};for(let n in o.requiredHeaderFlags){let t=o.requiredHeaderFlags[n];o.requiredHeaderFlagsErrors[n]="Invalid header flag bits, must be 0x"+t.toString(16)+" for "+o.types[n]+" packet"}o.codes={};for(let n in o.types){let t=o.types[n];o.codes[t]=n}o.CMD_SHIFT=4,o.CMD_MASK=240,o.DUP_MASK=8,o.QOS_MASK=3,o.QOS_SHIFT=1,o.RETAIN_MASK=1,o.VARBYTEINT_MASK=127,o.VARBYTEINT_FIN_MASK=128,o.VARBYTEINT_MAX=268435455,o.SESSIONPRESENT_MASK=1,o.SESSIONPRESENT_HEADER=a.from([o.SESSIONPRESENT_MASK]),o.CONNACK_HEADER=a.from([o.codes.connack<<o.CMD_SHIFT]),o.USERNAME_MASK=128,o.PASSWORD_MASK=64,o.WILL_RETAIN_MASK=32,o.WILL_QOS_MASK=24,o.WILL_QOS_SHIFT=3,o.WILL_FLAG_MASK=4,o.CLEAN_SESSION_MASK=2,o.CONNECT_HEADER=a.from([o.codes.connect<<o.CMD_SHIFT]),o.properties={sessionExpiryInterval:17,willDelayInterval:24,receiveMaximum:33,maximumPacketSize:39,topicAliasMaximum:34,requestResponseInformation:25,requestProblemInformation:23,userProperties:38,authenticationMethod:21,authenticationData:22,payloadFormatIndicator:1,messageExpiryInterval:2,contentType:3,responseTopic:8,correlationData:9,maximumQoS:36,retainAvailable:37,assignedClientIdentifier:18,reasonString:31,wildcardSubscriptionAvailable:40,subscriptionIdentifiersAvailable:41,sharedSubscriptionAvailable:42,serverKeepAlive:19,responseInformation:26,serverReference:28,topicAlias:35,subscriptionIdentifier:11},o.propertiesCodes={};for(let n in o.properties){let t=o.properties[n];o.propertiesCodes[t]=n}o.propertiesTypes={sessionExpiryInterval:"int32",willDelayInterval:"int32",receiveMaximum:"int16",maximumPacketSize:"int32",topicAliasMaximum:"int16",requestResponseInformation:"byte",requestProblemInformation:"byte",userProperties:"pair",authenticationMethod:"string",authenticationData:"binary",payloadFormatIndicator:"byte",messageExpiryInterval:"int32",contentType:"string",responseTopic:"string",correlationData:"binary",maximumQoS:"int8",retainAvailable:"byte",assignedClientIdentifier:"string",reasonString:"string",wildcardSubscriptionAvailable:"byte",subscriptionIdentifiersAvailable:"byte",sharedSubscriptionAvailable:"byte",serverKeepAlive:"int16",responseInformation:"string",serverReference:"string",topicAlias:"int16",subscriptionIdentifier:"var"};function p(n){return[0,1,2].map(t=>[0,1].map(r=>[0,1].map(e=>{let s=a.alloc(1);return s.writeUInt8(o.codes[n]<<o.CMD_SHIFT|(r?o.DUP_MASK:0)|t<<o.QOS_SHIFT|e,0,!0),s})))}o.PUBLISH_HEADER=p("publish"),o.SUBSCRIBE_HEADER=p("subscribe"),o.SUBSCRIBE_OPTIONS_QOS_MASK=3,o.SUBSCRIBE_OPTIONS_NL_MASK=1,o.SUBSCRIBE_OPTIONS_NL_SHIFT=2,o.SUBSCRIBE_OPTIONS_RAP_MASK=1,o.SUBSCRIBE_OPTIONS_RAP_SHIFT=3,o.SUBSCRIBE_OPTIONS_RH_MASK=3,o.SUBSCRIBE_OPTIONS_RH_SHIFT=4,o.SUBSCRIBE_OPTIONS_RH=[0,16,32],o.SUBSCRIBE_OPTIONS_NL=4,o.SUBSCRIBE_OPTIONS_RAP=8,o.SUBSCRIBE_OPTIONS_QOS=[0,1,2],o.UNSUBSCRIBE_HEADER=p("unsubscribe"),o.ACKS={unsuback:p("unsuback"),puback:p("puback"),pubcomp:p("pubcomp"),pubrel:p("pubrel"),pubrec:p("pubrec")},o.SUBACK_HEADER=a.from([o.codes.suback<<o.CMD_SHIFT]),o.VERSION3=a.from([3]),o.VERSION4=a.from([4]),o.VERSION5=a.from([5]),o.VERSION131=a.from([131]),o.VERSION132=a.from([132]),o.QOS=[0,1,2].map(n=>a.from([n])),o.EMPTY={pingreq:a.from([o.codes.pingreq<<4,0]),pingresp:a.from([o.codes.pingresp<<4,0]),disconnect:a.from([o.codes.disconnect<<4,0])},o.MQTT5_PUBACK_PUBREC_CODES={0:"Success",16:"No matching subscribers",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",144:"Topic Name invalid",145:"Packet identifier in use",151:"Quota exceeded",153:"Payload format invalid"},o.MQTT5_PUBREL_PUBCOMP_CODES={0:"Success",146:"Packet Identifier not found"},o.MQTT5_SUBACK_CODES={0:"Granted QoS 0",1:"Granted QoS 1",2:"Granted QoS 2",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use",151:"Quota exceeded",158:"Shared Subscriptions not supported",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},o.MQTT5_UNSUBACK_CODES={0:"Success",17:"No subscription existed",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use"},o.MQTT5_DISCONNECT_CODES={0:"Normal disconnection",4:"Disconnect with Will Message",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",135:"Not authorized",137:"Server busy",139:"Server shutting down",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},o.MQTT5_AUTH_CODES={0:"Success",24:"Continue authentication",25:"Re-authenticate"}}),Ql=be((d,h)=>{ue(),he(),pe();var o=1e3,a=o*60,p=a*60,n=p*24,t=n*7,r=n*365.25;h.exports=function(f,l){l=l||{};var u=typeof f;if(u==="string"&&f.length>0)return e(f);if(u==="number"&&isFinite(f))return l.long?i(f):s(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function e(f){if(f=String(f),!(f.length>100)){var l=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);if(l){var u=parseFloat(l[1]),m=(l[2]||"ms").toLowerCase();switch(m){case"years":case"year":case"yrs":case"yr":case"y":return u*r;case"weeks":case"week":case"w":return u*t;case"days":case"day":case"d":return u*n;case"hours":case"hour":case"hrs":case"hr":case"h":return u*p;case"minutes":case"minute":case"mins":case"min":case"m":return u*a;case"seconds":case"second":case"secs":case"sec":case"s":return u*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function s(f){var l=Math.abs(f);return l>=n?Math.round(f/n)+"d":l>=p?Math.round(f/p)+"h":l>=a?Math.round(f/a)+"m":l>=o?Math.round(f/o)+"s":f+"ms"}function i(f){var l=Math.abs(f);return l>=n?g(f,l,n,"day"):l>=p?g(f,l,p,"hour"):l>=a?g(f,l,a,"minute"):l>=o?g(f,l,o,"second"):f+" ms"}function g(f,l,u,m){var v=l>=u*1.5;return Math.round(f/u)+" "+m+(v?"s":"")}}),Gl=be((d,h)=>{ue(),he(),pe();function o(a){n.debug=n,n.default=n,n.coerce=g,n.disable=s,n.enable=r,n.enabled=i,n.humanize=Ql(),n.destroy=f,Object.keys(a).forEach(l=>{n[l]=a[l]}),n.names=[],n.skips=[],n.formatters={};function p(l){let u=0;for(let m=0;m<l.length;m++)u=(u<<5)-u+l.charCodeAt(m),u|=0;return n.colors[Math.abs(u)%n.colors.length]}n.selectColor=p;function n(l){let u,m=null,v,k;function b(..._){if(!b.enabled)return;let A=b,y=Number(new Date),S=y-(u||y);A.diff=S,A.prev=u,A.curr=y,u=y,_[0]=n.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");let x=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,(I,P)=>{if(I==="%%")return"%";x++;let O=n.formatters[P];if(typeof O=="function"){let j=_[x];I=O.call(A,j),_.splice(x,1),x--}return I}),n.formatArgs.call(A,_),(A.log||n.log).apply(A,_)}return b.namespace=l,b.useColors=n.useColors(),b.color=n.selectColor(l),b.extend=t,b.destroy=n.destroy,Object.defineProperty(b,"enabled",{enumerable:!0,configurable:!1,get:()=>m!==null?m:(v!==n.namespaces&&(v=n.namespaces,k=n.enabled(l)),k),set:_=>{m=_}}),typeof n.init=="function"&&n.init(b),b}function t(l,u){let m=n(this.namespace+(typeof u>"u"?":":u)+l);return m.log=this.log,m}function r(l){n.save(l),n.namespaces=l,n.names=[],n.skips=[];let u=(typeof l=="string"?l:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(let m of u)m[0]==="-"?n.skips.push(m.slice(1)):n.names.push(m)}function e(l,u){let m=0,v=0,k=-1,b=0;for(;m<l.length;)if(v<u.length&&(u[v]===l[m]||u[v]==="*"))u[v]==="*"?(k=v,b=m,v++):(m++,v++);else if(k!==-1)v=k+1,b++,m=b;else return!1;for(;v<u.length&&u[v]==="*";)v++;return v===u.length}function s(){let l=[...n.names,...n.skips.map(u=>"-"+u)].join(",");return n.enable(""),l}function i(l){for(let u of n.skips)if(e(l,u))return!1;for(let u of n.names)if(e(l,u))return!0;return!1}function g(l){return l instanceof Error?l.stack||l.message:l}function f(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}h.exports=o}),wt=be((d,h)=>{ue(),he(),pe(),d.formatArgs=a,d.save=p,d.load=n,d.useColors=o,d.storage=t(),d.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),d.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function o(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function a(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+h.exports.humanize(this.diff),!this.useColors)return;let s="color: "+this.color;e.splice(1,0,s,"color: inherit");let i=0,g=0;e[0].replace(/%[a-zA-Z%]/g,f=>{f!=="%%"&&(i++,f==="%c"&&(g=i))}),e.splice(g,0,s)}d.log=console.debug||console.log||(()=>{});function p(e){try{e?d.storage.setItem("debug",e):d.storage.removeItem("debug")}catch{}}function n(){let e;try{e=d.storage.getItem("debug")||d.storage.getItem("DEBUG")}catch{}return!e&&typeof qe<"u"&&"env"in qe&&(e=qe.env.DEBUG),e}function t(){try{return localStorage}catch{}}h.exports=Gl()(d);var{formatters:r}=h.exports;r.j=function(e){try{return JSON.stringify(e)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}}}),Yl=be((d,h)=>{ue(),he(),pe();var o=Kl(),{EventEmitter:a}=(qt(),Ue(Mt)),p=Vl(),n=co(),t=wt()("mqtt-packet:parser"),r=class gs extends a{constructor(){super(),this.parser=this.constructor.parser}static parser(s){return this instanceof gs?(this.settings=s||{},this._states=["_parseHeader","_parseLength","_parsePayload","_newPacket"],this._resetState(),this):new gs().parser(s)}_resetState(){t("_resetState: resetting packet, error, _list, and _stateCounter"),this.packet=new p,this.error=null,this._list=o(),this._stateCounter=0}parse(s){for(this.error&&this._resetState(),this._list.append(s),t("parse: current state: %s",this._states[this._stateCounter]);(this.packet.length!==-1||this._list.length>0)&&this[this._states[this._stateCounter]]()&&!this.error;)this._stateCounter++,t("parse: state complete. _stateCounter is now: %d",this._stateCounter),t("parse: packet.length: %d, buffer list length: %d",this.packet.length,this._list.length),this._stateCounter>=this._states.length&&(this._stateCounter=0);return t("parse: exited while loop. packet: %d, buffer list length: %d",this.packet.length,this._list.length),this._list.length}_parseHeader(){let s=this._list.readUInt8(0),i=s>>n.CMD_SHIFT;this.packet.cmd=n.types[i];let g=s&15,f=n.requiredHeaderFlags[i];return f!=null&&g!==f?this._emitError(new Error(n.requiredHeaderFlagsErrors[i])):(this.packet.retain=(s&n.RETAIN_MASK)!==0,this.packet.qos=s>>n.QOS_SHIFT&n.QOS_MASK,this.packet.qos>2?this._emitError(new Error("Packet must not have both QoS bits set to 1")):(this.packet.dup=(s&n.DUP_MASK)!==0,t("_parseHeader: packet: %o",this.packet),this._list.consume(1),!0))}_parseLength(){let s=this._parseVarByteNum(!0);return s&&(this.packet.length=s.value,this._list.consume(s.bytes)),t("_parseLength %d",s.value),!!s}_parsePayload(){t("_parsePayload: payload %O",this._list);let s=!1;if(this.packet.length===0||this._list.length>=this.packet.length){switch(this._pos=0,this.packet.cmd){case"connect":this._parseConnect();break;case"connack":this._parseConnack();break;case"publish":this._parsePublish();break;case"puback":case"pubrec":case"pubrel":case"pubcomp":this._parseConfirmation();break;case"subscribe":this._parseSubscribe();break;case"suback":this._parseSuback();break;case"unsubscribe":this._parseUnsubscribe();break;case"unsuback":this._parseUnsuback();break;case"pingreq":case"pingresp":break;case"disconnect":this._parseDisconnect();break;case"auth":this._parseAuth();break;default:this._emitError(new Error("Not supported"))}s=!0}return t("_parsePayload complete result: %s",s),s}_parseConnect(){t("_parseConnect");let s,i,g,f,l={},u=this.packet,m=this._parseString();if(m===null)return this._emitError(new Error("Cannot parse protocolId"));if(m!=="MQTT"&&m!=="MQIsdp")return this._emitError(new Error("Invalid protocolId"));if(u.protocolId=m,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(u.protocolVersion=this._list.readUInt8(this._pos),u.protocolVersion>=128&&(u.bridgeMode=!0,u.protocolVersion=u.protocolVersion-128),u.protocolVersion!==3&&u.protocolVersion!==4&&u.protocolVersion!==5)return this._emitError(new Error("Invalid protocol version"));if(this._pos++,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(this._list.readUInt8(this._pos)&1)return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));l.username=this._list.readUInt8(this._pos)&n.USERNAME_MASK,l.password=this._list.readUInt8(this._pos)&n.PASSWORD_MASK,l.will=this._list.readUInt8(this._pos)&n.WILL_FLAG_MASK;let v=!!(this._list.readUInt8(this._pos)&n.WILL_RETAIN_MASK),k=(this._list.readUInt8(this._pos)&n.WILL_QOS_MASK)>>n.WILL_QOS_SHIFT;if(l.will)u.will={},u.will.retain=v,u.will.qos=k;else{if(v)return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));if(k)return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"))}if(u.clean=(this._list.readUInt8(this._pos)&n.CLEAN_SESSION_MASK)!==0,this._pos++,u.keepalive=this._parseNum(),u.keepalive===-1)return this._emitError(new Error("Packet too short"));if(u.protocolVersion===5){let _=this._parseProperties();Object.getOwnPropertyNames(_).length&&(u.properties=_)}let b=this._parseString();if(b===null)return this._emitError(new Error("Packet too short"));if(u.clientId=b,t("_parseConnect: packet.clientId: %s",u.clientId),l.will){if(u.protocolVersion===5){let _=this._parseProperties();Object.getOwnPropertyNames(_).length&&(u.will.properties=_)}if(s=this._parseString(),s===null)return this._emitError(new Error("Cannot parse will topic"));if(u.will.topic=s,t("_parseConnect: packet.will.topic: %s",u.will.topic),i=this._parseBuffer(),i===null)return this._emitError(new Error("Cannot parse will payload"));u.will.payload=i,t("_parseConnect: packet.will.paylaod: %s",u.will.payload)}if(l.username){if(f=this._parseString(),f===null)return this._emitError(new Error("Cannot parse username"));u.username=f,t("_parseConnect: packet.username: %s",u.username)}if(l.password){if(g=this._parseBuffer(),g===null)return this._emitError(new Error("Cannot parse password"));u.password=g}return this.settings=u,t("_parseConnect: complete"),u}_parseConnack(){t("_parseConnack");let s=this.packet;if(this._list.length<1)return null;let i=this._list.readUInt8(this._pos++);if(i>1)return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));if(s.sessionPresent=!!(i&n.SESSIONPRESENT_MASK),this.settings.protocolVersion===5)this._list.length>=2?s.reasonCode=this._list.readUInt8(this._pos++):s.reasonCode=0;else{if(this._list.length<2)return null;s.returnCode=this._list.readUInt8(this._pos++)}if(s.returnCode===-1||s.reasonCode===-1)return this._emitError(new Error("Cannot parse return code"));if(this.settings.protocolVersion===5){let g=this._parseProperties();Object.getOwnPropertyNames(g).length&&(s.properties=g)}t("_parseConnack: complete")}_parsePublish(){t("_parsePublish");let s=this.packet;if(s.topic=this._parseString(),s.topic===null)return this._emitError(new Error("Cannot parse topic"));if(!(s.qos>0&&!this._parseMessageId())){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}s.payload=this._list.slice(this._pos,s.length),t("_parsePublish: payload from buffer list: %o",s.payload)}}_parseSubscribe(){t("_parseSubscribe");let s=this.packet,i,g,f,l,u,m,v;if(s.subscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let k=this._parseProperties();Object.getOwnPropertyNames(k).length&&(s.properties=k)}if(s.length<=0)return this._emitError(new Error("Malformed subscribe, no payload specified"));for(;this._pos<s.length;){if(i=this._parseString(),i===null)return this._emitError(new Error("Cannot parse topic"));if(this._pos>=s.length)return this._emitError(new Error("Malformed Subscribe Payload"));if(g=this._parseByte(),this.settings.protocolVersion===5){if(g&192)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))}else if(g&252)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));if(f=g&n.SUBSCRIBE_OPTIONS_QOS_MASK,f>2)return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));if(m=(g>>n.SUBSCRIBE_OPTIONS_NL_SHIFT&n.SUBSCRIBE_OPTIONS_NL_MASK)!==0,u=(g>>n.SUBSCRIBE_OPTIONS_RAP_SHIFT&n.SUBSCRIBE_OPTIONS_RAP_MASK)!==0,l=g>>n.SUBSCRIBE_OPTIONS_RH_SHIFT&n.SUBSCRIBE_OPTIONS_RH_MASK,l>2)return this._emitError(new Error("Invalid retain handling, must be <= 2"));v={topic:i,qos:f},this.settings.protocolVersion===5?(v.nl=m,v.rap=u,v.rh=l):this.settings.bridgeMode&&(v.rh=0,v.rap=!0,v.nl=!0),t("_parseSubscribe: push subscription `%s` to subscription",v),s.subscriptions.push(v)}}}_parseSuback(){t("_parseSuback");let s=this.packet;if(this.packet.granted=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}if(s.length<=0)return this._emitError(new Error("Malformed suback, no payload specified"));for(;this._pos<this.packet.length;){let i=this._list.readUInt8(this._pos++);if(this.settings.protocolVersion===5){if(!n.MQTT5_SUBACK_CODES[i])return this._emitError(new Error("Invalid suback code"))}else if(i>2&&i!==128)return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));this.packet.granted.push(i)}}}_parseUnsubscribe(){t("_parseUnsubscribe");let s=this.packet;if(s.unsubscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}if(s.length<=0)return this._emitError(new Error("Malformed unsubscribe, no payload specified"));for(;this._pos<s.length;){let i=this._parseString();if(i===null)return this._emitError(new Error("Cannot parse topic"));t("_parseUnsubscribe: push topic `%s` to unsubscriptions",i),s.unsubscriptions.push(i)}}}_parseUnsuback(){t("_parseUnsuback");let s=this.packet;if(!this._parseMessageId())return this._emitError(new Error("Cannot parse messageId"));if((this.settings.protocolVersion===3||this.settings.protocolVersion===4)&&s.length!==2)return this._emitError(new Error("Malformed unsuback, payload length must be 2"));if(s.length<=0)return this._emitError(new Error("Malformed unsuback, no payload specified"));if(this.settings.protocolVersion===5){let i=this._parseProperties();for(Object.getOwnPropertyNames(i).length&&(s.properties=i),s.granted=[];this._pos<this.packet.length;){let g=this._list.readUInt8(this._pos++);if(!n.MQTT5_UNSUBACK_CODES[g])return this._emitError(new Error("Invalid unsuback code"));this.packet.granted.push(g)}}}_parseConfirmation(){t("_parseConfirmation: packet.cmd: `%s`",this.packet.cmd);let s=this.packet;if(this._parseMessageId(),this.settings.protocolVersion===5){if(s.length>2){switch(s.reasonCode=this._parseByte(),this.packet.cmd){case"puback":case"pubrec":if(!n.MQTT5_PUBACK_PUBREC_CODES[s.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break;case"pubrel":case"pubcomp":if(!n.MQTT5_PUBREL_PUBCOMP_CODES[s.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break}t("_parseConfirmation: packet.reasonCode `%d`",s.reasonCode)}else s.reasonCode=0;if(s.length>3){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}}return!0}_parseDisconnect(){let s=this.packet;if(t("_parseDisconnect"),this.settings.protocolVersion===5){this._list.length>0?(s.reasonCode=this._parseByte(),n.MQTT5_DISCONNECT_CODES[s.reasonCode]||this._emitError(new Error("Invalid disconnect reason code"))):s.reasonCode=0;let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}return t("_parseDisconnect result: true"),!0}_parseAuth(){t("_parseAuth");let s=this.packet;if(this.settings.protocolVersion!==5)return this._emitError(new Error("Not supported auth packet for this version MQTT"));if(s.reasonCode=this._parseByte(),!n.MQTT5_AUTH_CODES[s.reasonCode])return this._emitError(new Error("Invalid auth reason code"));let i=this._parseProperties();return Object.getOwnPropertyNames(i).length&&(s.properties=i),t("_parseAuth: result: true"),!0}_parseMessageId(){let s=this.packet;return s.messageId=this._parseNum(),s.messageId===null?(this._emitError(new Error("Cannot parse messageId")),!1):(t("_parseMessageId: packet.messageId %d",s.messageId),!0)}_parseString(s){let i=this._parseNum(),g=i+this._pos;if(i===-1||g>this._list.length||g>this.packet.length)return null;let f=this._list.toString("utf8",this._pos,g);return this._pos+=i,t("_parseString: result: %s",f),f}_parseStringPair(){return t("_parseStringPair"),{name:this._parseString(),value:this._parseString()}}_parseBuffer(){let s=this._parseNum(),i=s+this._pos;if(s===-1||i>this._list.length||i>this.packet.length)return null;let g=this._list.slice(this._pos,i);return this._pos+=s,t("_parseBuffer: result: %o",g),g}_parseNum(){if(this._list.length-this._pos<2)return-1;let s=this._list.readUInt16BE(this._pos);return this._pos+=2,t("_parseNum: result: %s",s),s}_parse4ByteNum(){if(this._list.length-this._pos<4)return-1;let s=this._list.readUInt32BE(this._pos);return this._pos+=4,t("_parse4ByteNum: result: %s",s),s}_parseVarByteNum(s){t("_parseVarByteNum");let i=4,g=0,f=1,l=0,u=!1,m,v=this._pos?this._pos:0;for(;g<i&&v+g<this._list.length;){if(m=this._list.readUInt8(v+g++),l+=f*(m&n.VARBYTEINT_MASK),f*=128,(m&n.VARBYTEINT_FIN_MASK)===0){u=!0;break}if(this._list.length<=g)break}return!u&&g===i&&this._list.length>=g&&this._emitError(new Error("Invalid variable byte integer")),v&&(this._pos+=g),u?s?u={bytes:g,value:l}:u=l:u=!1,t("_parseVarByteNum: result: %o",u),u}_parseByte(){let s;return this._pos<this._list.length&&(s=this._list.readUInt8(this._pos),this._pos++),t("_parseByte: result: %o",s),s}_parseByType(s){switch(t("_parseByType: type: %s",s),s){case"byte":return this._parseByte()!==0;case"int8":return this._parseByte();case"int16":return this._parseNum();case"int32":return this._parse4ByteNum();case"var":return this._parseVarByteNum();case"string":return this._parseString();case"pair":return this._parseStringPair();case"binary":return this._parseBuffer()}}_parseProperties(){t("_parseProperties");let s=this._parseVarByteNum(),i=this._pos+s,g={};for(;this._pos<i;){let f=this._parseByte();if(!f)return this._emitError(new Error("Cannot parse property code type")),!1;let l=n.propertiesCodes[f];if(!l)return this._emitError(new Error("Unknown property")),!1;if(l==="userProperties"){g[l]||(g[l]=Object.create(null));let u=this._parseByType(n.propertiesTypes[l]);if(g[l][u.name])if(Array.isArray(g[l][u.name]))g[l][u.name].push(u.value);else{let m=g[l][u.name];g[l][u.name]=[m],g[l][u.name].push(u.value)}else g[l][u.name]=u.value;continue}g[l]?Array.isArray(g[l])?g[l].push(this._parseByType(n.propertiesTypes[l])):(g[l]=[g[l]],g[l].push(this._parseByType(n.propertiesTypes[l]))):g[l]=this._parseByType(n.propertiesTypes[l])}return g}_newPacket(){return t("_newPacket"),this.packet&&(this._list.consume(this.packet.length),t("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d",this.packet.cmd,this.packet.payload,this.packet.length),this.emit("packet",this.packet)),t("_newPacket: new packet"),this.packet=new p,this._pos=0,!0}_emitError(s){t("_emitError",s),this.error=s,this.emit("error",s)}};h.exports=r}),Jl=be((d,h)=>{ue(),he(),pe();var{Buffer:o}=(Ke(),Ue($e)),a=65536,p={},n=o.isBuffer(o.from([1,2]).subarray(0,1));function t(i){let g=o.allocUnsafe(2);return g.writeUInt8(i>>8,0),g.writeUInt8(i&255,1),g}function r(){for(let i=0;i<a;i++)p[i]=t(i)}function e(i){let g=0,f=0,l=o.allocUnsafe(4);do g=i%128|0,i=i/128|0,i>0&&(g=g|128),l.writeUInt8(g,f++);while(i>0&&f<4);return i>0&&(f=0),n?l.subarray(0,f):l.slice(0,f)}function s(i){let g=o.allocUnsafe(4);return g.writeUInt32BE(i,0),g}h.exports={cache:p,generateCache:r,generateNumber:t,genBufVariableByteInt:e,generate4ByteBuffer:s}}),Xl=be((d,h)=>{ue(),he(),pe(),typeof qe>"u"||!qe.version||qe.version.indexOf("v0.")===0||qe.version.indexOf("v1.")===0&&qe.version.indexOf("v1.8.")!==0?h.exports={nextTick:o}:h.exports=qe;function o(a,p,n,t){if(typeof a!="function")throw new TypeError('"callback" argument must be a function');var r=arguments.length,e,s;switch(r){case 0:case 1:return qe.nextTick(a);case 2:return qe.nextTick(function(){a.call(null,p)});case 3:return qe.nextTick(function(){a.call(null,p,n)});case 4:return qe.nextTick(function(){a.call(null,p,n,t)});default:for(e=new Array(r-1),s=0;s<e.length;)e[s++]=arguments[s];return qe.nextTick(function(){a.apply(null,e)})}}}),uo=be((d,h)=>{ue(),he(),pe();var o=co(),{Buffer:a}=(Ke(),Ue($e)),p=a.allocUnsafe(0),n=a.from([0]),t=Jl(),r=Xl().nextTick,e=wt()("mqtt-packet:writeToStream"),s=t.cache,i=t.generateNumber,g=t.generateCache,f=t.genBufVariableByteInt,l=t.generate4ByteBuffer,u=X,m=!0;function v(H,M,ne){switch(e("generate called"),M.cork&&(M.cork(),r(k,M)),m&&(m=!1,g()),e("generate: packet.cmd: %s",H.cmd),H.cmd){case"connect":return b(H,M);case"connack":return _(H,M,ne);case"publish":return A(H,M,ne);case"puback":case"pubrec":case"pubrel":case"pubcomp":return y(H,M,ne);case"subscribe":return S(H,M,ne);case"suback":return x(H,M,ne);case"unsubscribe":return I(H,M,ne);case"unsuback":return P(H,M,ne);case"pingreq":case"pingresp":return O(H,M);case"disconnect":return j(H,M,ne);case"auth":return T(H,M,ne);default:return M.destroy(new Error("Unknown command")),!1}}Object.defineProperty(v,"cacheNumbers",{get(){return u===X},set(H){H?((!s||Object.keys(s).length===0)&&(m=!0),u=X):(m=!1,u=G)}});function k(H){H.uncork()}function b(H,M,ne){let K=H||{},Q=K.protocolId||"MQTT",V=K.protocolVersion||4,de=K.will,ae=K.clean,N=K.keepalive||0,W=K.clientId||"",se=K.username,me=K.password,ge=K.properties;ae===void 0&&(ae=!0);let we=0;if(typeof Q!="string"&&!a.isBuffer(Q))return M.destroy(new Error("Invalid protocolId")),!1;if(we+=Q.length+2,V!==3&&V!==4&&V!==5)return M.destroy(new Error("Invalid protocol version")),!1;if(we+=1,(typeof W=="string"||a.isBuffer(W))&&(W||V>=4)&&(W||ae))we+=a.byteLength(W)+2;else{if(V<4)return M.destroy(new Error("clientId must be supplied before 3.1.1")),!1;if(ae*1===0)return M.destroy(new Error("clientId must be given if cleanSession set to 0")),!1}if(typeof N!="number"||N<0||N>65535||N%1!==0)return M.destroy(new Error("Invalid keepalive")),!1;we+=2,we+=1;let $,ve;if(V===5){if($=te(M,ge),!$)return!1;we+=$.length}if(de){if(typeof de!="object")return M.destroy(new Error("Invalid will")),!1;if(!de.topic||typeof de.topic!="string")return M.destroy(new Error("Invalid will topic")),!1;if(we+=a.byteLength(de.topic)+2,we+=2,de.payload)if(de.payload.length>=0)typeof de.payload=="string"?we+=a.byteLength(de.payload):we+=de.payload.length;else return M.destroy(new Error("Invalid will payload")),!1;if(ve={},V===5){if(ve=te(M,de.properties),!ve)return!1;we+=ve.length}}let _e=!1;if(se!=null)if(re(se))_e=!0,we+=a.byteLength(se)+2;else return M.destroy(new Error("Invalid username")),!1;if(me!=null){if(!_e)return M.destroy(new Error("Username is required to use password")),!1;if(re(me))we+=L(me)+2;else return M.destroy(new Error("Invalid password")),!1}M.write(o.CONNECT_HEADER),q(M,we),D(M,Q),K.bridgeMode&&(V+=128),M.write(V===131?o.VERSION131:V===132?o.VERSION132:V===4?o.VERSION4:V===5?o.VERSION5:o.VERSION3);let ce=0;return ce|=se!=null?o.USERNAME_MASK:0,ce|=me!=null?o.PASSWORD_MASK:0,ce|=de&&de.retain?o.WILL_RETAIN_MASK:0,ce|=de&&de.qos?de.qos<<o.WILL_QOS_SHIFT:0,ce|=de?o.WILL_FLAG_MASK:0,ce|=ae?o.CLEAN_SESSION_MASK:0,M.write(a.from([ce])),u(M,N),V===5&&$.write(),D(M,W),de&&(V===5&&ve.write(),B(M,de.topic),D(M,de.payload)),se!=null&&D(M,se),me!=null&&D(M,me),!0}function _(H,M,ne){let K=ne?ne.protocolVersion:4,Q=H||{},V=K===5?Q.reasonCode:Q.returnCode,de=Q.properties,ae=2;if(typeof V!="number")return M.destroy(new Error("Invalid return code")),!1;let N=null;if(K===5){if(N=te(M,de),!N)return!1;ae+=N.length}return M.write(o.CONNACK_HEADER),q(M,ae),M.write(Q.sessionPresent?o.SESSIONPRESENT_HEADER:n),M.write(a.from([V])),N?.write(),!0}function A(H,M,ne){e("publish: packet: %o",H);let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.qos||0,de=Q.retain?o.RETAIN_MASK:0,ae=Q.topic,N=Q.payload||p,W=Q.messageId,se=Q.properties,me=0;if(typeof ae=="string")me+=a.byteLength(ae)+2;else if(a.isBuffer(ae))me+=ae.length+2;else return M.destroy(new Error("Invalid topic")),!1;if(a.isBuffer(N)?me+=N.length:me+=a.byteLength(N),V&&typeof W!="number")return M.destroy(new Error("Invalid messageId")),!1;V&&(me+=2);let ge=null;if(K===5){if(ge=te(M,se),!ge)return!1;me+=ge.length}return M.write(o.PUBLISH_HEADER[V][Q.dup?1:0][de?1:0]),q(M,me),u(M,L(ae)),M.write(ae),V>0&&u(M,W),ge?.write(),e("publish: payload: %o",N),M.write(N)}function y(H,M,ne){let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.cmd||"puback",de=Q.messageId,ae=Q.dup&&V==="pubrel"?o.DUP_MASK:0,N=0,W=Q.reasonCode,se=Q.properties,me=K===5?3:2;if(V==="pubrel"&&(N=1),typeof de!="number")return M.destroy(new Error("Invalid messageId")),!1;let ge=null;if(K===5&&typeof se=="object"){if(ge=R(M,se,ne,me),!ge)return!1;me+=ge.length}return M.write(o.ACKS[V][N][ae][0]),me===3&&(me+=W!==0?1:-1),q(M,me),u(M,de),K===5&&me!==2&&M.write(a.from([W])),ge!==null?ge.write():me===4&&M.write(a.from([0])),!0}function S(H,M,ne){e("subscribe: packet: ");let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.dup?o.DUP_MASK:0,de=Q.messageId,ae=Q.subscriptions,N=Q.properties,W=0;if(typeof de!="number")return M.destroy(new Error("Invalid messageId")),!1;W+=2;let se=null;if(K===5){if(se=te(M,N),!se)return!1;W+=se.length}if(typeof ae=="object"&&ae.length)for(let ge=0;ge<ae.length;ge+=1){let we=ae[ge].topic,$=ae[ge].qos;if(typeof we!="string")return M.destroy(new Error("Invalid subscriptions - invalid topic")),!1;if(typeof $!="number")return M.destroy(new Error("Invalid subscriptions - invalid qos")),!1;if(K===5){if(typeof(ae[ge].nl||!1)!="boolean")return M.destroy(new Error("Invalid subscriptions - invalid No Local")),!1;if(typeof(ae[ge].rap||!1)!="boolean")return M.destroy(new Error("Invalid subscriptions - invalid Retain as Published")),!1;let ve=ae[ge].rh||0;if(typeof ve!="number"||ve>2)return M.destroy(new Error("Invalid subscriptions - invalid Retain Handling")),!1}W+=a.byteLength(we)+2+1}else return M.destroy(new Error("Invalid subscriptions")),!1;e("subscribe: writing to stream: %o",o.SUBSCRIBE_HEADER),M.write(o.SUBSCRIBE_HEADER[1][V?1:0][0]),q(M,W),u(M,de),se!==null&&se.write();let me=!0;for(let ge of ae){let we=ge.topic,$=ge.qos,ve=+ge.nl,_e=+ge.rap,ce=ge.rh,Me;B(M,we),Me=o.SUBSCRIBE_OPTIONS_QOS[$],K===5&&(Me|=ve?o.SUBSCRIBE_OPTIONS_NL:0,Me|=_e?o.SUBSCRIBE_OPTIONS_RAP:0,Me|=ce?o.SUBSCRIBE_OPTIONS_RH[ce]:0),me=M.write(a.from([Me]))}return me}function x(H,M,ne){let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.messageId,de=Q.granted,ae=Q.properties,N=0;if(typeof V!="number")return M.destroy(new Error("Invalid messageId")),!1;if(N+=2,typeof de=="object"&&de.length)for(let se=0;se<de.length;se+=1){if(typeof de[se]!="number")return M.destroy(new Error("Invalid qos vector")),!1;N+=1}else return M.destroy(new Error("Invalid qos vector")),!1;let W=null;if(K===5){if(W=R(M,ae,ne,N),!W)return!1;N+=W.length}return M.write(o.SUBACK_HEADER),q(M,N),u(M,V),W!==null&&W.write(),M.write(a.from(de))}function I(H,M,ne){let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.messageId,de=Q.dup?o.DUP_MASK:0,ae=Q.unsubscriptions,N=Q.properties,W=0;if(typeof V!="number")return M.destroy(new Error("Invalid messageId")),!1;if(W+=2,typeof ae=="object"&&ae.length)for(let ge=0;ge<ae.length;ge+=1){if(typeof ae[ge]!="string")return M.destroy(new Error("Invalid unsubscriptions")),!1;W+=a.byteLength(ae[ge])+2}else return M.destroy(new Error("Invalid unsubscriptions")),!1;let se=null;if(K===5){if(se=te(M,N),!se)return!1;W+=se.length}M.write(o.UNSUBSCRIBE_HEADER[1][de?1:0][0]),q(M,W),u(M,V),se!==null&&se.write();let me=!0;for(let ge=0;ge<ae.length;ge++)me=B(M,ae[ge]);return me}function P(H,M,ne){let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.messageId,de=Q.dup?o.DUP_MASK:0,ae=Q.granted,N=Q.properties,W=Q.cmd,se=0,me=2;if(typeof V!="number")return M.destroy(new Error("Invalid messageId")),!1;if(K===5)if(typeof ae=="object"&&ae.length)for(let we=0;we<ae.length;we+=1){if(typeof ae[we]!="number")return M.destroy(new Error("Invalid qos vector")),!1;me+=1}else return M.destroy(new Error("Invalid qos vector")),!1;let ge=null;if(K===5){if(ge=R(M,N,ne,me),!ge)return!1;me+=ge.length}return M.write(o.ACKS[W][se][de][0]),q(M,me),u(M,V),ge!==null&&ge.write(),K===5&&M.write(a.from(ae)),!0}function O(H,M,ne){return M.write(o.EMPTY[H.cmd])}function j(H,M,ne){let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.reasonCode,de=Q.properties,ae=K===5?1:0,N=null;if(K===5){if(N=R(M,de,ne,ae),!N)return!1;ae+=N.length}return M.write(a.from([o.codes.disconnect<<4])),q(M,ae),K===5&&M.write(a.from([V])),N!==null&&N.write(),!0}function T(H,M,ne){let K=ne?ne.protocolVersion:4,Q=H||{},V=Q.reasonCode,de=Q.properties,ae=K===5?1:0;K!==5&&M.destroy(new Error("Invalid mqtt version for auth packet"));let N=R(M,de,ne,ae);return N?(ae+=N.length,M.write(a.from([o.codes.auth<<4])),q(M,ae),M.write(a.from([V])),N!==null&&N.write(),!0):!1}var z={};function q(H,M){if(M>o.VARBYTEINT_MAX)return H.destroy(new Error(`Invalid variable byte integer: ${M}`)),!1;let ne=z[M];return ne||(ne=f(M),M<16384&&(z[M]=ne)),e("writeVarByteInt: writing to stream: %o",ne),H.write(ne)}function B(H,M){let ne=a.byteLength(M);return u(H,ne),e("writeString: %s",M),H.write(M,"utf8")}function le(H,M,ne){B(H,M),B(H,ne)}function X(H,M){return e("writeNumberCached: number: %d",M),e("writeNumberCached: %o",s[M]),H.write(s[M])}function G(H,M){let ne=i(M);return e("writeNumberGenerated: %o",ne),H.write(ne)}function ie(H,M){let ne=l(M);return e("write4ByteNumber: %o",ne),H.write(ne)}function D(H,M){typeof M=="string"?B(H,M):M?(u(H,M.length),H.write(M)):u(H,0)}function te(H,M){if(typeof M!="object"||M.length!=null)return{length:1,write(){ye(H,{},0)}};let ne=0;function K(Q,V){let de=o.propertiesTypes[Q],ae=0;switch(de){case"byte":{if(typeof V!="boolean")return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=2;break}case"int8":{if(typeof V!="number"||V<0||V>255)return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=2;break}case"binary":{if(V&&V===null)return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=1+a.byteLength(V)+2;break}case"int16":{if(typeof V!="number"||V<0||V>65535)return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=3;break}case"int32":{if(typeof V!="number"||V<0||V>4294967295)return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=5;break}case"var":{if(typeof V!="number"||V<0||V>268435455)return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=1+a.byteLength(f(V));break}case"string":{if(typeof V!="string")return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=3+a.byteLength(V.toString());break}case"pair":{if(typeof V!="object")return H.destroy(new Error(`Invalid ${Q}: ${V}`)),!1;ae+=Object.getOwnPropertyNames(V).reduce((N,W)=>{let se=V[W];return Array.isArray(se)?N+=se.reduce((me,ge)=>(me+=3+a.byteLength(W.toString())+2+a.byteLength(ge.toString()),me),0):N+=3+a.byteLength(W.toString())+2+a.byteLength(V[W].toString()),N},0);break}default:return H.destroy(new Error(`Invalid property ${Q}: ${V}`)),!1}return ae}if(M)for(let Q in M){let V=0,de=0,ae=M[Q];if(ae!==void 0){if(Array.isArray(ae))for(let N=0;N<ae.length;N++){if(de=K(Q,ae[N]),!de)return!1;V+=de}else{if(de=K(Q,ae),!de)return!1;V=de}if(!V)return!1;ne+=V}}return{length:a.byteLength(f(ne))+ne,write(){ye(H,M,ne)}}}function R(H,M,ne,K){let Q=["reasonString","userProperties"],V=ne&&ne.properties&&ne.properties.maximumPacketSize?ne.properties.maximumPacketSize:0,de=te(H,M);if(V)for(;K+de.length>V;){let ae=Q.shift();if(ae&&M[ae])delete M[ae],de=te(H,M);else return!1}return de}function Z(H,M,ne){switch(o.propertiesTypes[M]){case"byte":{H.write(a.from([o.properties[M]])),H.write(a.from([+ne]));break}case"int8":{H.write(a.from([o.properties[M]])),H.write(a.from([ne]));break}case"binary":{H.write(a.from([o.properties[M]])),D(H,ne);break}case"int16":{H.write(a.from([o.properties[M]])),u(H,ne);break}case"int32":{H.write(a.from([o.properties[M]])),ie(H,ne);break}case"var":{H.write(a.from([o.properties[M]])),q(H,ne);break}case"string":{H.write(a.from([o.properties[M]])),B(H,ne);break}case"pair":{Object.getOwnPropertyNames(ne).forEach(K=>{let Q=ne[K];Array.isArray(Q)?Q.forEach(V=>{H.write(a.from([o.properties[M]])),le(H,K.toString(),V.toString())}):(H.write(a.from([o.properties[M]])),le(H,K.toString(),Q.toString()))});break}default:return H.destroy(new Error(`Invalid property ${M} value: ${ne}`)),!1}}function ye(H,M,ne){q(H,ne);for(let K in M)if(Object.prototype.hasOwnProperty.call(M,K)&&M[K]!=null){let Q=M[K];if(Array.isArray(Q))for(let V=0;V<Q.length;V++)Z(H,K,Q[V]);else Z(H,K,Q)}}function L(H){return H?H instanceof a?H.length:a.byteLength(H):0}function re(H){return typeof H=="string"||H instanceof a}h.exports=v}),Zl=be((d,h)=>{ue(),he(),pe();var o=uo(),{EventEmitter:a}=(qt(),Ue(Mt)),{Buffer:p}=(Ke(),Ue($e));function n(r,e){let s=new t;return o(r,s,e),s.concat()}var t=class extends a{constructor(){super(),this._array=new Array(20),this._i=0}write(r){return this._array[this._i++]=r,!0}concat(){let r=0,e=new Array(this._array.length),s=this._array,i=0,g;for(g=0;g<s.length&&s[g]!==void 0;g++)typeof s[g]!="string"?e[g]=s[g].length:e[g]=p.byteLength(s[g]),r+=e[g];let f=p.allocUnsafe(r);for(g=0;g<s.length&&s[g]!==void 0;g++)typeof s[g]!="string"?(s[g].copy(f,i),i+=e[g]):(f.write(s[g],i),i+=e[g]);return f}destroy(r){r&&this.emit("error",r)}};h.exports=n}),ec=be(d=>{ue(),he(),pe(),d.parser=Yl().parser,d.generate=Zl(),d.writeToStream=uo()}),tc=be((d,h)=>{ue(),he(),pe(),h.exports=a;function o(n){return n instanceof $n?$n.from(n):new n.constructor(n.buffer.slice(),n.byteOffset,n.length)}function a(n){if(n=n||{},n.circles)return p(n);let t=new Map;if(t.set(Date,g=>new Date(g)),t.set(Map,(g,f)=>new Map(e(Array.from(g),f))),t.set(Set,(g,f)=>new Set(e(Array.from(g),f))),n.constructorHandlers)for(let g of n.constructorHandlers)t.set(g[0],g[1]);let r=null;return n.proto?i:s;function e(g,f){let l=Object.keys(g),u=new Array(l.length);for(let m=0;m<l.length;m++){let v=l[m],k=g[v];typeof k!="object"||k===null?u[v]=k:k.constructor!==Object&&(r=t.get(k.constructor))?u[v]=r(k,f):ArrayBuffer.isView(k)?u[v]=o(k):u[v]=f(k)}return u}function s(g){if(typeof g!="object"||g===null)return g;if(Array.isArray(g))return e(g,s);if(g.constructor!==Object&&(r=t.get(g.constructor)))return r(g,s);let f={};for(let l in g){if(Object.hasOwnProperty.call(g,l)===!1)continue;let u=g[l];typeof u!="object"||u===null?f[l]=u:u.constructor!==Object&&(r=t.get(u.constructor))?f[l]=r(u,s):ArrayBuffer.isView(u)?f[l]=o(u):f[l]=s(u)}return f}function i(g){if(typeof g!="object"||g===null)return g;if(Array.isArray(g))return e(g,i);if(g.constructor!==Object&&(r=t.get(g.constructor)))return r(g,i);let f={};for(let l in g){let u=g[l];typeof u!="object"||u===null?f[l]=u:u.constructor!==Object&&(r=t.get(u.constructor))?f[l]=r(u,i):ArrayBuffer.isView(u)?f[l]=o(u):f[l]=i(u)}return f}}function p(n){let t=[],r=[],e=new Map;if(e.set(Date,l=>new Date(l)),e.set(Map,(l,u)=>new Map(i(Array.from(l),u))),e.set(Set,(l,u)=>new Set(i(Array.from(l),u))),n.constructorHandlers)for(let l of n.constructorHandlers)e.set(l[0],l[1]);let s=null;return n.proto?f:g;function i(l,u){let m=Object.keys(l),v=new Array(m.length);for(let k=0;k<m.length;k++){let b=m[k],_=l[b];if(typeof _!="object"||_===null)v[b]=_;else if(_.constructor!==Object&&(s=e.get(_.constructor)))v[b]=s(_,u);else if(ArrayBuffer.isView(_))v[b]=o(_);else{let A=t.indexOf(_);A!==-1?v[b]=r[A]:v[b]=u(_)}}return v}function g(l){if(typeof l!="object"||l===null)return l;if(Array.isArray(l))return i(l,g);if(l.constructor!==Object&&(s=e.get(l.constructor)))return s(l,g);let u={};t.push(l),r.push(u);for(let m in l){if(Object.hasOwnProperty.call(l,m)===!1)continue;let v=l[m];if(typeof v!="object"||v===null)u[m]=v;else if(v.constructor!==Object&&(s=e.get(v.constructor)))u[m]=s(v,g);else if(ArrayBuffer.isView(v))u[m]=o(v);else{let k=t.indexOf(v);k!==-1?u[m]=r[k]:u[m]=g(v)}}return t.pop(),r.pop(),u}function f(l){if(typeof l!="object"||l===null)return l;if(Array.isArray(l))return i(l,f);if(l.constructor!==Object&&(s=e.get(l.constructor)))return s(l,f);let u={};t.push(l),r.push(u);for(let m in l){let v=l[m];if(typeof v!="object"||v===null)u[m]=v;else if(v.constructor!==Object&&(s=e.get(v.constructor)))u[m]=s(v,f);else if(ArrayBuffer.isView(v))u[m]=o(v);else{let k=t.indexOf(v);k!==-1?u[m]=r[k]:u[m]=f(v)}}return t.pop(),r.pop(),u}}}),nc=be((d,h)=>{ue(),he(),pe(),h.exports=tc()()}),po=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0}),d.validateTopic=h,d.validateTopics=o;function h(a){let p=a.split("/");for(let n=0;n<p.length;n++)if(p[n]!=="+"){if(p[n]==="#")return n===p.length-1;if(p[n].indexOf("+")!==-1||p[n].indexOf("#")!==-1)return!1}return!0}function o(a){if(a.length===0)return"empty_topic_list";for(let p=0;p<a.length;p++)if(!h(a[p]))return a[p];return null}}),ho=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=Bt(),o={objectMode:!0},a={clean:!0},p=class{options;_inflights;constructor(n){this.options=n||{},this.options={...a,...n},this._inflights=new Map}put(n,t){return this._inflights.set(n.messageId,n),t&&t(),this}createStream(){let n=new h.Readable(o),t=[],r=!1,e=0;return this._inflights.forEach((s,i)=>{t.push(s)}),n._read=()=>{!r&&e<t.length?n.push(t[e++]):n.push(null)},n.destroy=s=>{if(!r)return r=!0,setTimeout(()=>{n.emit("close")},0),n},n}del(n,t){let r=this._inflights.get(n.messageId);return r?(this._inflights.delete(n.messageId),t(null,r)):t&&t(new Error("missing packet")),this}get(n,t){let r=this._inflights.get(n.messageId);return r?t(null,r):t&&t(new Error("missing packet")),this}close(n){this.options.clean&&(this._inflights=null),n&&n()}};d.default=p}),rc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=[0,16,128,131,135,144,145,151,153],o=(a,p,n)=>{a.log("handlePublish: packet %o",p),n=typeof n<"u"?n:a.noop;let t=p.topic.toString(),r=p.payload,{qos:e}=p,{messageId:s}=p,{options:i}=a;if(a.options.protocolVersion===5){let g;if(p.properties&&(g=p.properties.topicAlias),typeof g<"u")if(t.length===0)if(g>0&&g<=65535){let f=a.topicAliasRecv.getTopicByAlias(g);if(f)t=f,a.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d",t,g);else{a.log("handlePublish :: unregistered topic alias. alias: %d",g),a.emit("error",new Error("Received unregistered Topic Alias"));return}}else{a.log("handlePublish :: topic alias out of range. alias: %d",g),a.emit("error",new Error("Received Topic Alias is out of range"));return}else if(a.topicAliasRecv.put(t,g))a.log("handlePublish :: registered topic: %s - alias: %d",t,g);else{a.log("handlePublish :: topic alias out of range. alias: %d",g),a.emit("error",new Error("Received Topic Alias is out of range"));return}}switch(a.log("handlePublish: qos %d",e),e){case 2:{i.customHandleAcks(t,r,p,(g,f)=>{if(typeof g=="number"&&(f=g,g=null),g)return a.emit("error",g);if(h.indexOf(f)===-1)return a.emit("error",new Error("Wrong reason code for pubrec"));f?a._sendPacket({cmd:"pubrec",messageId:s,reasonCode:f},n):a.incomingStore.put(p,()=>{a._sendPacket({cmd:"pubrec",messageId:s},n)})});break}case 1:{i.customHandleAcks(t,r,p,(g,f)=>{if(typeof g=="number"&&(f=g,g=null),g)return a.emit("error",g);if(h.indexOf(f)===-1)return a.emit("error",new Error("Wrong reason code for puback"));f||a.emit("message",t,r,p),a.handleMessage(p,l=>{if(l)return n&&n(l);a._sendPacket({cmd:"puback",messageId:s,reasonCode:f},n)})});break}case 0:a.emit("message",t,r,p),a.handleMessage(p,n);break;default:a.log("handlePublish: unknown QoS. Doing nothing.");break}};d.default=o}),sc=be((d,h)=>{h.exports={version:"5.15.0"}}),Jt=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0}),d.MQTTJS_VERSION=d.nextTick=d.ErrorWithSubackPacket=d.ErrorWithReasonCode=void 0,d.applyMixin=a;var h=class fo extends Error{code;constructor(n,t){super(n),this.code=t,Object.setPrototypeOf(this,fo.prototype),Object.getPrototypeOf(this).name="ErrorWithReasonCode"}};d.ErrorWithReasonCode=h;var o=class mo extends Error{packet;constructor(n,t){super(n),this.packet=t,Object.setPrototypeOf(this,mo.prototype),Object.getPrototypeOf(this).name="ErrorWithSubackPacket"}};d.ErrorWithSubackPacket=o;function a(p,n,t=!1){let r=[n];for(;;){let e=r[0],s=Object.getPrototypeOf(e);if(s?.prototype)r.unshift(s);else break}for(let e of r)for(let s of Object.getOwnPropertyNames(e.prototype))(t||s!=="constructor")&&Object.defineProperty(p.prototype,s,Object.getOwnPropertyDescriptor(e.prototype,s)??Object.create(null))}d.nextTick=typeof qe?.nextTick=="function"?qe.nextTick:p=>{setTimeout(p,0)},d.MQTTJS_VERSION=sc().version}),Jn=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0}),d.ReasonCodes=void 0;var h=Jt();d.ReasonCodes={0:"",1:"Unacceptable protocol version",2:"Identifier rejected",3:"Server unavailable",4:"Bad username or password",5:"Not authorized",16:"No matching subscribers",17:"No subscription existed",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",132:"Unsupported Protocol Version",133:"Client Identifier not valid",134:"Bad User Name or Password",135:"Not authorized",136:"Server unavailable",137:"Server busy",138:"Banned",139:"Server shutting down",140:"Bad authentication method",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",145:"Packet identifier in use",146:"Packet Identifier not found",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"};var o=(a,p)=>{let{messageId:n}=p,t=p.cmd,r=null,e=a.outgoing[n]?a.outgoing[n].cb:null,s=null;if(!e){a.log("_handleAck :: Server sent an ack in error. Ignoring.");return}switch(a.log("_handleAck :: packet type",t),t){case"pubcomp":case"puback":{let i=p.reasonCode;i&&i>0&&i!==16?(s=new h.ErrorWithReasonCode(`Publish error: ${d.ReasonCodes[i]}`,i),a._removeOutgoingAndStoreMessage(n,()=>{e(s,p)})):a._removeOutgoingAndStoreMessage(n,e);break}case"pubrec":{r={cmd:"pubrel",qos:2,messageId:n};let i=p.reasonCode;i&&i>0&&i!==16?(s=new h.ErrorWithReasonCode(`Publish error: ${d.ReasonCodes[i]}`,i),a._removeOutgoingAndStoreMessage(n,()=>{e(s,p)})):a._sendPacket(r);break}case"suback":{delete a.outgoing[n],a.messageIdProvider.deallocate(n);let i=p.granted;for(let g=0;g<i.length;g++){let f=i[g];if((f&128)!==0){s=new Error(`Subscribe error: ${d.ReasonCodes[f]}`),s.code=f;let l=a.messageIdToTopic[n];l&&l.forEach(u=>{delete a._resubscribeTopics[u]})}}delete a.messageIdToTopic[n],a._invokeStoreProcessingQueue(),e(s,p);break}case"unsuback":{delete a.outgoing[n],a.messageIdProvider.deallocate(n),a._invokeStoreProcessingQueue(),e(null,p);break}default:a.emit("error",new Error("unrecognized packet type"))}a.disconnecting&&Object.keys(a.outgoing).length===0&&a.emit("outgoingEmpty")};d.default=o}),ic=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=Jt(),o=Jn(),a=(p,n)=>{let{options:t}=p,r=t.protocolVersion,e=r===5?n.reasonCode:n.returnCode;if(r!==5){let s=new h.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${r}`,e);p.emit("error",s);return}p.handleAuth(n,(s,i)=>{if(s){p.emit("error",s);return}if(e===24)p.reconnecting=!1,p._sendPacket(i);else{let g=new h.ErrorWithReasonCode(`Connection refused: ${o.ReasonCodes[e]}`,e);p.emit("error",g)}})};d.default=a}),ac=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0}),d.LRUCache=void 0;var h=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,o=new Set,a=typeof qe=="object"&&qe?qe:{},p=(l,u,m,v)=>{typeof a.emitWarning=="function"?a.emitWarning(l,u,m,v):console.error(`[${m}] ${u}: ${l}`)},n=globalThis.AbortController,t=globalThis.AbortSignal;if(typeof n>"u"){t=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(m,v){this._onabort.push(v)}},n=class{constructor(){u()}signal=new t;abort(m){if(!this.signal.aborted){this.signal.reason=m,this.signal.aborted=!0;for(let v of this.signal._onabort)v(m);this.signal.onabort?.(m)}}};let l=a.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",u=()=>{l&&(l=!1,p("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",u))}}var r=l=>!o.has(l),e=l=>l&&l===Math.floor(l)&&l>0&&isFinite(l),s=l=>e(l)?l<=Math.pow(2,8)?Uint8Array:l<=Math.pow(2,16)?Uint16Array:l<=Math.pow(2,32)?Uint32Array:l<=Number.MAX_SAFE_INTEGER?i:null:null,i=class extends Array{constructor(l){super(l),this.fill(0)}},g=class ln{heap;length;static#l=!1;static create(u){let m=s(u);if(!m)return[];ln.#l=!0;let v=new ln(u,m);return ln.#l=!1,v}constructor(u,m){if(!ln.#l)throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new m(u),this.length=0}push(u){this.heap[this.length++]=u}pop(){return this.heap[--this.length]}},f=class go{#l;#u;#m;#g;#C;#P;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#s;#b;#r;#n;#e;#c;#p;#o;#i;#v;#a;#y;#w;#h;#_;#E;#d;static unsafeExposeInternals(u){return{starts:u.#w,ttls:u.#h,sizes:u.#y,keyMap:u.#r,keyList:u.#n,valList:u.#e,next:u.#c,prev:u.#p,get head(){return u.#o},get tail(){return u.#i},free:u.#v,isBackgroundFetch:m=>u.#t(m),backgroundFetch:(m,v,k,b)=>u.#R(m,v,k,b),moveToTail:m=>u.#M(m),indexes:m=>u.#k(m),rindexes:m=>u.#x(m),isStale:m=>u.#f(m)}}get max(){return this.#l}get maxSize(){return this.#u}get calculatedSize(){return this.#b}get size(){return this.#s}get fetchMethod(){return this.#C}get memoMethod(){return this.#P}get dispose(){return this.#m}get disposeAfter(){return this.#g}constructor(u){let{max:m=0,ttl:v,ttlResolution:k=1,ttlAutopurge:b,updateAgeOnGet:_,updateAgeOnHas:A,allowStale:y,dispose:S,disposeAfter:x,noDisposeOnSet:I,noUpdateTTL:P,maxSize:O=0,maxEntrySize:j=0,sizeCalculation:T,fetchMethod:z,memoMethod:q,noDeleteOnFetchRejection:B,noDeleteOnStaleGet:le,allowStaleOnFetchRejection:X,allowStaleOnFetchAbort:G,ignoreFetchAbort:ie}=u;if(m!==0&&!e(m))throw new TypeError("max option must be a nonnegative integer");let D=m?s(m):Array;if(!D)throw new Error("invalid max value: "+m);if(this.#l=m,this.#u=O,this.maxEntrySize=j||this.#u,this.sizeCalculation=T,this.sizeCalculation){if(!this.#u&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(q!==void 0&&typeof q!="function")throw new TypeError("memoMethod must be a function if defined");if(this.#P=q,z!==void 0&&typeof z!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#C=z,this.#E=!!z,this.#r=new Map,this.#n=new Array(m).fill(void 0),this.#e=new Array(m).fill(void 0),this.#c=new D(m),this.#p=new D(m),this.#o=0,this.#i=0,this.#v=g.create(m),this.#s=0,this.#b=0,typeof S=="function"&&(this.#m=S),typeof x=="function"?(this.#g=x,this.#a=[]):(this.#g=void 0,this.#a=void 0),this.#_=!!this.#m,this.#d=!!this.#g,this.noDisposeOnSet=!!I,this.noUpdateTTL=!!P,this.noDeleteOnFetchRejection=!!B,this.allowStaleOnFetchRejection=!!X,this.allowStaleOnFetchAbort=!!G,this.ignoreFetchAbort=!!ie,this.maxEntrySize!==0){if(this.#u!==0&&!e(this.#u))throw new TypeError("maxSize must be a positive integer if specified");if(!e(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#D()}if(this.allowStale=!!y,this.noDeleteOnStaleGet=!!le,this.updateAgeOnGet=!!_,this.updateAgeOnHas=!!A,this.ttlResolution=e(k)||k===0?k:1,this.ttlAutopurge=!!b,this.ttl=v||0,this.ttl){if(!e(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#U()}if(this.#l===0&&this.ttl===0&&this.#u===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#l&&!this.#u){let te="LRU_CACHE_UNBOUNDED";r(te)&&(o.add(te),p("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",te,go))}}getRemainingTTL(u){return this.#r.has(u)?1/0:0}#U(){let u=new i(this.#l),m=new i(this.#l);this.#h=u,this.#w=m,this.#L=(b,_,A=h.now())=>{if(m[b]=_!==0?A:0,u[b]=_,_!==0&&this.ttlAutopurge){let y=setTimeout(()=>{this.#f(b)&&this.#S(this.#n[b],"expire")},_+1);y.unref&&y.unref()}},this.#I=b=>{m[b]=u[b]!==0?h.now():0},this.#A=(b,_)=>{if(u[_]){let A=u[_],y=m[_];if(!A||!y)return;b.ttl=A,b.start=y,b.now=v||k();let S=b.now-y;b.remainingTTL=A-S}};let v=0,k=()=>{let b=h.now();if(this.ttlResolution>0){v=b;let _=setTimeout(()=>v=0,this.ttlResolution);_.unref&&_.unref()}return b};this.getRemainingTTL=b=>{let _=this.#r.get(b);if(_===void 0)return 0;let A=u[_],y=m[_];if(!A||!y)return 1/0;let S=(v||k())-y;return A-S},this.#f=b=>{let _=m[b],A=u[b];return!!A&&!!_&&(v||k())-_>A}}#I=()=>{};#A=()=>{};#L=()=>{};#f=()=>!1;#D(){let u=new i(this.#l);this.#b=0,this.#y=u,this.#T=m=>{this.#b-=u[m],u[m]=0},this.#q=(m,v,k,b)=>{if(this.#t(v))return 0;if(!e(k))if(b){if(typeof b!="function")throw new TypeError("sizeCalculation must be a function");if(k=b(v,m),!e(k))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return k},this.#O=(m,v,k)=>{if(u[m]=v,this.#u){let b=this.#u-u[m];for(;this.#b>b;)this.#N(!0)}this.#b+=u[m],k&&(k.entrySize=v,k.totalCalculatedSize=this.#b)}}#T=u=>{};#O=(u,m,v)=>{};#q=(u,m,v,k)=>{if(v||k)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#k({allowStale:u=this.allowStale}={}){if(this.#s)for(let m=this.#i;!(!this.#j(m)||((u||!this.#f(m))&&(yield m),m===this.#o));)m=this.#p[m]}*#x({allowStale:u=this.allowStale}={}){if(this.#s)for(let m=this.#o;!(!this.#j(m)||((u||!this.#f(m))&&(yield m),m===this.#i));)m=this.#c[m]}#j(u){return u!==void 0&&this.#r.get(this.#n[u])===u}*entries(){for(let u of this.#k())this.#e[u]!==void 0&&this.#n[u]!==void 0&&!this.#t(this.#e[u])&&(yield[this.#n[u],this.#e[u]])}*rentries(){for(let u of this.#x())this.#e[u]!==void 0&&this.#n[u]!==void 0&&!this.#t(this.#e[u])&&(yield[this.#n[u],this.#e[u]])}*keys(){for(let u of this.#k()){let m=this.#n[u];m!==void 0&&!this.#t(this.#e[u])&&(yield m)}}*rkeys(){for(let u of this.#x()){let m=this.#n[u];m!==void 0&&!this.#t(this.#e[u])&&(yield m)}}*values(){for(let u of this.#k())this.#e[u]!==void 0&&!this.#t(this.#e[u])&&(yield this.#e[u])}*rvalues(){for(let u of this.#x())this.#e[u]!==void 0&&!this.#t(this.#e[u])&&(yield this.#e[u])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(u,m={}){for(let v of this.#k()){let k=this.#e[v],b=this.#t(k)?k.__staleWhileFetching:k;if(b!==void 0&&u(b,this.#n[v],this))return this.get(this.#n[v],m)}}forEach(u,m=this){for(let v of this.#k()){let k=this.#e[v],b=this.#t(k)?k.__staleWhileFetching:k;b!==void 0&&u.call(m,b,this.#n[v],this)}}rforEach(u,m=this){for(let v of this.#x()){let k=this.#e[v],b=this.#t(k)?k.__staleWhileFetching:k;b!==void 0&&u.call(m,b,this.#n[v],this)}}purgeStale(){let u=!1;for(let m of this.#x({allowStale:!0}))this.#f(m)&&(this.#S(this.#n[m],"expire"),u=!0);return u}info(u){let m=this.#r.get(u);if(m===void 0)return;let v=this.#e[m],k=this.#t(v)?v.__staleWhileFetching:v;if(k===void 0)return;let b={value:k};if(this.#h&&this.#w){let _=this.#h[m],A=this.#w[m];if(_&&A){let y=_-(h.now()-A);b.ttl=y,b.start=Date.now()}}return this.#y&&(b.size=this.#y[m]),b}dump(){let u=[];for(let m of this.#k({allowStale:!0})){let v=this.#n[m],k=this.#e[m],b=this.#t(k)?k.__staleWhileFetching:k;if(b===void 0||v===void 0)continue;let _={value:b};if(this.#h&&this.#w){_.ttl=this.#h[m];let A=h.now()-this.#w[m];_.start=Math.floor(Date.now()-A)}this.#y&&(_.size=this.#y[m]),u.unshift([v,_])}return u}load(u){this.clear();for(let[m,v]of u){if(v.start){let k=Date.now()-v.start;v.start=h.now()-k}this.set(m,v.value,v)}}set(u,m,v={}){if(m===void 0)return this.delete(u),this;let{ttl:k=this.ttl,start:b,noDisposeOnSet:_=this.noDisposeOnSet,sizeCalculation:A=this.sizeCalculation,status:y}=v,{noUpdateTTL:S=this.noUpdateTTL}=v,x=this.#q(u,m,v.size||0,A);if(this.maxEntrySize&&x>this.maxEntrySize)return y&&(y.set="miss",y.maxEntrySizeExceeded=!0),this.#S(u,"set"),this;let I=this.#s===0?void 0:this.#r.get(u);if(I===void 0)I=this.#s===0?this.#i:this.#v.length!==0?this.#v.pop():this.#s===this.#l?this.#N(!1):this.#s,this.#n[I]=u,this.#e[I]=m,this.#r.set(u,I),this.#c[this.#i]=I,this.#p[I]=this.#i,this.#i=I,this.#s++,this.#O(I,x,y),y&&(y.set="add"),S=!1;else{this.#M(I);let P=this.#e[I];if(m!==P){if(this.#E&&this.#t(P)){P.__abortController.abort(new Error("replaced"));let{__staleWhileFetching:O}=P;O!==void 0&&!_&&(this.#_&&this.#m?.(O,u,"set"),this.#d&&this.#a?.push([O,u,"set"]))}else _||(this.#_&&this.#m?.(P,u,"set"),this.#d&&this.#a?.push([P,u,"set"]));if(this.#T(I),this.#O(I,x,y),this.#e[I]=m,y){y.set="replace";let O=P&&this.#t(P)?P.__staleWhileFetching:P;O!==void 0&&(y.oldValue=O)}}else y&&(y.set="update")}if(k!==0&&!this.#h&&this.#U(),this.#h&&(S||this.#L(I,k,b),y&&this.#A(y,I)),!_&&this.#d&&this.#a){let P=this.#a,O;for(;O=P?.shift();)this.#g?.(...O)}return this}pop(){try{for(;this.#s;){let u=this.#e[this.#o];if(this.#N(!0),this.#t(u)){if(u.__staleWhileFetching)return u.__staleWhileFetching}else if(u!==void 0)return u}}finally{if(this.#d&&this.#a){let u=this.#a,m;for(;m=u?.shift();)this.#g?.(...m)}}}#N(u){let m=this.#o,v=this.#n[m],k=this.#e[m];return this.#E&&this.#t(k)?k.__abortController.abort(new Error("evicted")):(this.#_||this.#d)&&(this.#_&&this.#m?.(k,v,"evict"),this.#d&&this.#a?.push([k,v,"evict"])),this.#T(m),u&&(this.#n[m]=void 0,this.#e[m]=void 0,this.#v.push(m)),this.#s===1?(this.#o=this.#i=0,this.#v.length=0):this.#o=this.#c[m],this.#r.delete(v),this.#s--,m}has(u,m={}){let{updateAgeOnHas:v=this.updateAgeOnHas,status:k}=m,b=this.#r.get(u);if(b!==void 0){let _=this.#e[b];if(this.#t(_)&&_.__staleWhileFetching===void 0)return!1;if(this.#f(b))k&&(k.has="stale",this.#A(k,b));else return v&&this.#I(b),k&&(k.has="hit",this.#A(k,b)),!0}else k&&(k.has="miss");return!1}peek(u,m={}){let{allowStale:v=this.allowStale}=m,k=this.#r.get(u);if(k===void 0||!v&&this.#f(k))return;let b=this.#e[k];return this.#t(b)?b.__staleWhileFetching:b}#R(u,m,v,k){let b=m===void 0?void 0:this.#e[m];if(this.#t(b))return b;let _=new n,{signal:A}=v;A?.addEventListener("abort",()=>_.abort(A.reason),{signal:_.signal});let y={signal:_.signal,options:v,context:k},S=(T,z=!1)=>{let{aborted:q}=_.signal,B=v.ignoreFetchAbort&&T!==void 0;if(v.status&&(q&&!z?(v.status.fetchAborted=!0,v.status.fetchError=_.signal.reason,B&&(v.status.fetchAbortIgnored=!0)):v.status.fetchResolved=!0),q&&!B&&!z)return I(_.signal.reason);let le=O;return this.#e[m]===O&&(T===void 0?le.__staleWhileFetching?this.#e[m]=le.__staleWhileFetching:this.#S(u,"fetch"):(v.status&&(v.status.fetchUpdated=!0),this.set(u,T,y.options))),T},x=T=>(v.status&&(v.status.fetchRejected=!0,v.status.fetchError=T),I(T)),I=T=>{let{aborted:z}=_.signal,q=z&&v.allowStaleOnFetchAbort,B=q||v.allowStaleOnFetchRejection,le=B||v.noDeleteOnFetchRejection,X=O;if(this.#e[m]===O&&(!le||X.__staleWhileFetching===void 0?this.#S(u,"fetch"):q||(this.#e[m]=X.__staleWhileFetching)),B)return v.status&&X.__staleWhileFetching!==void 0&&(v.status.returnedStale=!0),X.__staleWhileFetching;if(X.__returned===X)throw T},P=(T,z)=>{let q=this.#C?.(u,b,y);q&&q instanceof Promise&&q.then(B=>T(B===void 0?void 0:B),z),_.signal.addEventListener("abort",()=>{(!v.ignoreFetchAbort||v.allowStaleOnFetchAbort)&&(T(void 0),v.allowStaleOnFetchAbort&&(T=B=>S(B,!0)))})};v.status&&(v.status.fetchDispatched=!0);let O=new Promise(P).then(S,x),j=Object.assign(O,{__abortController:_,__staleWhileFetching:b,__returned:void 0});return m===void 0?(this.set(u,j,{...y.options,status:void 0}),m=this.#r.get(u)):this.#e[m]=j,j}#t(u){if(!this.#E)return!1;let m=u;return!!m&&m instanceof Promise&&m.hasOwnProperty("__staleWhileFetching")&&m.__abortController instanceof n}async fetch(u,m={}){let{allowStale:v=this.allowStale,updateAgeOnGet:k=this.updateAgeOnGet,noDeleteOnStaleGet:b=this.noDeleteOnStaleGet,ttl:_=this.ttl,noDisposeOnSet:A=this.noDisposeOnSet,size:y=0,sizeCalculation:S=this.sizeCalculation,noUpdateTTL:x=this.noUpdateTTL,noDeleteOnFetchRejection:I=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:P=this.allowStaleOnFetchRejection,ignoreFetchAbort:O=this.ignoreFetchAbort,allowStaleOnFetchAbort:j=this.allowStaleOnFetchAbort,context:T,forceRefresh:z=!1,status:q,signal:B}=m;if(!this.#E)return q&&(q.fetch="get"),this.get(u,{allowStale:v,updateAgeOnGet:k,noDeleteOnStaleGet:b,status:q});let le={allowStale:v,updateAgeOnGet:k,noDeleteOnStaleGet:b,ttl:_,noDisposeOnSet:A,size:y,sizeCalculation:S,noUpdateTTL:x,noDeleteOnFetchRejection:I,allowStaleOnFetchRejection:P,allowStaleOnFetchAbort:j,ignoreFetchAbort:O,status:q,signal:B},X=this.#r.get(u);if(X===void 0){q&&(q.fetch="miss");let G=this.#R(u,X,le,T);return G.__returned=G}else{let G=this.#e[X];if(this.#t(G)){let R=v&&G.__staleWhileFetching!==void 0;return q&&(q.fetch="inflight",R&&(q.returnedStale=!0)),R?G.__staleWhileFetching:G.__returned=G}let ie=this.#f(X);if(!z&&!ie)return q&&(q.fetch="hit"),this.#M(X),k&&this.#I(X),q&&this.#A(q,X),G;let D=this.#R(u,X,le,T),te=D.__staleWhileFetching!==void 0&&v;return q&&(q.fetch=ie?"stale":"refresh",te&&ie&&(q.returnedStale=!0)),te?D.__staleWhileFetching:D.__returned=D}}async forceFetch(u,m={}){let v=await this.fetch(u,m);if(v===void 0)throw new Error("fetch() returned undefined");return v}memo(u,m={}){let v=this.#P;if(!v)throw new Error("no memoMethod provided to constructor");let{context:k,forceRefresh:b,..._}=m,A=this.get(u,_);if(!b&&A!==void 0)return A;let y=v(u,A,{options:_,context:k});return this.set(u,y,_),y}get(u,m={}){let{allowStale:v=this.allowStale,updateAgeOnGet:k=this.updateAgeOnGet,noDeleteOnStaleGet:b=this.noDeleteOnStaleGet,status:_}=m,A=this.#r.get(u);if(A!==void 0){let y=this.#e[A],S=this.#t(y);return _&&this.#A(_,A),this.#f(A)?(_&&(_.get="stale"),S?(_&&v&&y.__staleWhileFetching!==void 0&&(_.returnedStale=!0),v?y.__staleWhileFetching:void 0):(b||this.#S(u,"expire"),_&&v&&(_.returnedStale=!0),v?y:void 0)):(_&&(_.get="hit"),S?y.__staleWhileFetching:(this.#M(A),k&&this.#I(A),y))}else _&&(_.get="miss")}#B(u,m){this.#p[m]=u,this.#c[u]=m}#M(u){u!==this.#i&&(u===this.#o?this.#o=this.#c[u]:this.#B(this.#p[u],this.#c[u]),this.#B(this.#i,u),this.#i=u)}delete(u){return this.#S(u,"delete")}#S(u,m){let v=!1;if(this.#s!==0){let k=this.#r.get(u);if(k!==void 0)if(v=!0,this.#s===1)this.#F(m);else{this.#T(k);let b=this.#e[k];if(this.#t(b)?b.__abortController.abort(new Error("deleted")):(this.#_||this.#d)&&(this.#_&&this.#m?.(b,u,m),this.#d&&this.#a?.push([b,u,m])),this.#r.delete(u),this.#n[k]=void 0,this.#e[k]=void 0,k===this.#i)this.#i=this.#p[k];else if(k===this.#o)this.#o=this.#c[k];else{let _=this.#p[k];this.#c[_]=this.#c[k];let A=this.#c[k];this.#p[A]=this.#p[k]}this.#s--,this.#v.push(k)}}if(this.#d&&this.#a?.length){let k=this.#a,b;for(;b=k?.shift();)this.#g?.(...b)}return v}clear(){return this.#F("delete")}#F(u){for(let m of this.#x({allowStale:!0})){let v=this.#e[m];if(this.#t(v))v.__abortController.abort(new Error("deleted"));else{let k=this.#n[m];this.#_&&this.#m?.(v,k,u),this.#d&&this.#a?.push([v,k,u])}}if(this.#r.clear(),this.#e.fill(void 0),this.#n.fill(void 0),this.#h&&this.#w&&(this.#h.fill(0),this.#w.fill(0)),this.#y&&this.#y.fill(0),this.#o=0,this.#i=0,this.#v.length=0,this.#b=0,this.#s=0,this.#d&&this.#a){let m=this.#a,v;for(;v=m?.shift();)this.#g?.(...v)}}};d.LRUCache=f}),kt=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.ContainerIterator=d.Container=d.Base=void 0;var h=class{constructor(p=0){this.iteratorType=p}equals(p){return this.o===p.o}};d.ContainerIterator=h;var o=class{constructor(){this.i=0}get length(){return this.i}size(){return this.i}empty(){return this.i===0}};d.Base=o;var a=class extends o{};d.Container=a}),oc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Base{constructor(p=[]){super(),this.S=[];let n=this;p.forEach(function(t){n.push(t)})}clear(){this.i=0,this.S=[]}push(p){return this.S.push(p),this.i+=1,this.i}pop(){if(this.i!==0)return this.i-=1,this.S.pop()}top(){return this.S[this.i-1]}},a=o;d.default=a}),lc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Base{constructor(p=[]){super(),this.j=0,this.q=[];let n=this;p.forEach(function(t){n.push(t)})}clear(){this.q=[],this.i=this.j=0}push(p){let n=this.q.length;if(this.j/n>.5&&this.j+this.i>=n&&n>4096){let t=this.i;for(let r=0;r<t;++r)this.q[r]=this.q[this.j+r];this.j=0,this.q[this.i]=p}else this.q[this.j+this.i]=p;return++this.i}pop(){if(this.i===0)return;let p=this.q[this.j++];return this.i-=1,p}front(){if(this.i!==0)return this.q[this.j]}},a=o;d.default=a}),cc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Base{constructor(p=[],n=function(r,e){return r>e?-1:r<e?1:0},t=!0){if(super(),this.v=n,Array.isArray(p))this.C=t?[...p]:p;else{this.C=[];let e=this;p.forEach(function(s){e.C.push(s)})}this.i=this.C.length;let r=this.i>>1;for(let e=this.i-1>>1;e>=0;--e)this.k(e,r)}m(p){let n=this.C[p];for(;p>0;){let t=p-1>>1,r=this.C[t];if(this.v(r,n)<=0)break;this.C[p]=r,p=t}this.C[p]=n}k(p,n){let t=this.C[p];for(;p<n;){let r=p<<1|1,e=r+1,s=this.C[r];if(e<this.i&&this.v(s,this.C[e])>0&&(r=e,s=this.C[e]),this.v(s,t)>=0)break;this.C[p]=s,p=r}this.C[p]=t}clear(){this.i=0,this.C.length=0}push(p){this.C.push(p),this.m(this.i),this.i+=1}pop(){if(this.i===0)return;let p=this.C[0],n=this.C.pop();return this.i-=1,this.i&&(this.C[0]=n,this.k(0,this.i>>1)),p}top(){return this.C[0]}find(p){return this.C.indexOf(p)>=0}remove(p){let n=this.C.indexOf(p);return n<0?!1:(n===0?this.pop():n===this.i-1?(this.C.pop(),this.i-=1):(this.C.splice(n,1,this.C.pop()),this.i-=1,this.m(n),this.k(n,this.i>>1)),!0)}updateItem(p){let n=this.C.indexOf(p);return n<0?!1:(this.m(n),this.k(n,this.i>>1),!0)}toArray(){return[...this.C]}},a=o;d.default=a}),pi=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=class extends h.Container{},a=o;d.default=a}),xt=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.throwIteratorAccessError=h;function h(){throw new RangeError("Iterator access denied!")}}),bo=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.RandomIterator=void 0;var h=kt(),o=xt(),a=class extends h.ContainerIterator{constructor(p,n){super(n),this.o=p,this.iteratorType===0?(this.pre=function(){return this.o===0&&(0,o.throwIteratorAccessError)(),this.o-=1,this},this.next=function(){return this.o===this.container.size()&&(0,o.throwIteratorAccessError)(),this.o+=1,this}):(this.pre=function(){return this.o===this.container.size()-1&&(0,o.throwIteratorAccessError)(),this.o+=1,this},this.next=function(){return this.o===-1&&(0,o.throwIteratorAccessError)(),this.o-=1,this})}get pointer(){return this.container.getElementByPos(this.o)}set pointer(p){this.container.setElementByPos(this.o,p)}};d.RandomIterator=a}),dc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=a(pi()),o=bo();function a(r){return r&&r.t?r:{default:r}}var p=class vo extends o.RandomIterator{constructor(e,s,i){super(e,i),this.container=s}copy(){return new vo(this.o,this.container,this.iteratorType)}},n=class extends h.default{constructor(r=[],e=!0){if(super(),Array.isArray(r))this.J=e?[...r]:r,this.i=r.length;else{this.J=[];let s=this;r.forEach(function(i){s.pushBack(i)})}}clear(){this.i=0,this.J.length=0}begin(){return new p(0,this)}end(){return new p(this.i,this)}rBegin(){return new p(this.i-1,this,1)}rEnd(){return new p(-1,this,1)}front(){return this.J[0]}back(){return this.J[this.i-1]}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J[r]}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J.splice(r,1),this.i-=1,this.i}eraseElementByValue(r){let e=0;for(let s=0;s<this.i;++s)this.J[s]!==r&&(this.J[e++]=this.J[s]);return this.i=this.J.length=e,this.i}eraseElementByIterator(r){let e=r.o;return r=r.next(),this.eraseElementByPos(e),r}pushBack(r){return this.J.push(r),this.i+=1,this.i}popBack(){if(this.i!==0)return this.i-=1,this.J.pop()}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;this.J[r]=e}insert(r,e,s=1){if(r<0||r>this.i)throw new RangeError;return this.J.splice(r,0,...new Array(s).fill(e)),this.i+=s,this.i}find(r){for(let e=0;e<this.i;++e)if(this.J[e]===r)return new p(e,this);return this.end()}reverse(){this.J.reverse()}unique(){let r=1;for(let e=1;e<this.i;++e)this.J[e]!==this.J[e-1]&&(this.J[r++]=this.J[e]);return this.i=this.J.length=r,this.i}sort(r){this.J.sort(r)}forEach(r){for(let e=0;e<this.i;++e)r(this.J[e],e,this)}[Symbol.iterator](){return(function*(){yield*this.J}).bind(this)()}},t=n;d.default=t}),uc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=p(pi()),o=kt(),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class yo extends o.ContainerIterator{constructor(s,i,g,f){super(f),this.o=s,this.h=i,this.container=g,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this})}get pointer(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.l}set pointer(s){this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.l=s}copy(){return new yo(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.default{constructor(e=[]){super(),this.h={},this.p=this._=this.h.L=this.h.B=this.h;let s=this;e.forEach(function(i){s.pushBack(i)})}V(e){let{L:s,B:i}=e;s.B=i,i.L=s,e===this.p&&(this.p=i),e===this._&&(this._=s),this.i-=1}G(e,s){let i=s.B,g={l:e,L:s,B:i};s.B=g,i.L=g,s===this.h&&(this.p=g),i===this.h&&(this._=g),this.i+=1}clear(){this.i=0,this.p=this._=this.h.L=this.h.B=this.h}begin(){return new n(this.p,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this._,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){return this.p.l}back(){return this._.l}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return s.l}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return this.V(s),this.i}eraseElementByValue(e){let s=this.p;for(;s!==this.h;)s.l===e&&this.V(s),s=s.B;return this.i}eraseElementByIterator(e){let s=e.o;return s===this.h&&(0,a.throwIteratorAccessError)(),e=e.next(),this.V(s),e}pushBack(e){return this.G(e,this._),this.i}popBack(){if(this.i===0)return;let e=this._.l;return this.V(this._),e}pushFront(e){return this.G(e,this.h),this.i}popFront(){if(this.i===0)return;let e=this.p.l;return this.V(this.p),e}setElementByPos(e,s){if(e<0||e>this.i-1)throw new RangeError;let i=this.p;for(;e--;)i=i.B;i.l=s}insert(e,s,i=1){if(e<0||e>this.i)throw new RangeError;if(i<=0)return this.i;if(e===0)for(;i--;)this.pushFront(s);else if(e===this.i)for(;i--;)this.pushBack(s);else{let g=this.p;for(let l=1;l<e;++l)g=g.B;let f=g.B;for(this.i+=i;i--;)g.B={l:s,L:g},g.B.L=g,g=g.B;g.B=f,f.L=g}return this.i}find(e){let s=this.p;for(;s!==this.h;){if(s.l===e)return new n(s,this.h,this);s=s.B}return this.end()}reverse(){if(this.i<=1)return;let e=this.p,s=this._,i=0;for(;i<<1<this.i;){let g=e.l;e.l=s.l,s.l=g,e=e.B,s=s.L,i+=1}}unique(){if(this.i<=1)return this.i;let e=this.p;for(;e!==this.h;){let s=e;for(;s.B!==this.h&&s.l===s.B.l;)s=s.B,this.i-=1;e.B=s.B,e.B.L=e,e=e.B}return this.i}sort(e){if(this.i<=1)return;let s=[];this.forEach(function(g){s.push(g)}),s.sort(e);let i=this.p;s.forEach(function(g){i.l=g,i=i.B})}merge(e){let s=this;if(this.i===0)e.forEach(function(i){s.pushBack(i)});else{let i=this.p;e.forEach(function(g){for(;i!==s.h&&i.l<=g;)i=i.B;s.G(g,i.L)})}return this.i}forEach(e){let s=this.p,i=0;for(;s!==this.h;)e(s.l,i++,this),s=s.B}[Symbol.iterator](){return(function*(){if(this.i===0)return;let e=this.p;for(;e!==this.h;)yield e.l,e=e.B}).bind(this)()}},r=t;d.default=r}),pc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=a(pi()),o=bo();function a(r){return r&&r.t?r:{default:r}}var p=class wo extends o.RandomIterator{constructor(e,s,i){super(e,i),this.container=s}copy(){return new wo(this.o,this.container,this.iteratorType)}},n=class extends h.default{constructor(r=[],e=4096){super(),this.j=0,this.D=0,this.R=0,this.N=0,this.P=0,this.A=[];let s=(()=>{if(typeof r.length=="number")return r.length;if(typeof r.size=="number")return r.size;if(typeof r.size=="function")return r.size();throw new TypeError("Cannot get the length or size of the container")})();this.F=e,this.P=Math.max(Math.ceil(s/this.F),1);for(let f=0;f<this.P;++f)this.A.push(new Array(this.F));let i=Math.ceil(s/this.F);this.j=this.R=(this.P>>1)-(i>>1),this.D=this.N=this.F-s%this.F>>1;let g=this;r.forEach(function(f){g.pushBack(f)})}T(){let r=[],e=Math.max(this.P>>1,1);for(let s=0;s<e;++s)r[s]=new Array(this.F);for(let s=this.j;s<this.P;++s)r[r.length]=this.A[s];for(let s=0;s<this.R;++s)r[r.length]=this.A[s];r[r.length]=[...this.A[this.R]],this.j=e,this.R=r.length-1;for(let s=0;s<e;++s)r[r.length]=new Array(this.F);this.A=r,this.P=r.length}O(r){let e=this.D+r+1,s=e%this.F,i=s-1,g=this.j+(e-s)/this.F;return s===0&&(g-=1),g%=this.P,i<0&&(i+=this.F),{curNodeBucketIndex:g,curNodePointerIndex:i}}clear(){this.A=[new Array(this.F)],this.P=1,this.j=this.R=this.i=0,this.D=this.N=this.F>>1}begin(){return new p(0,this)}end(){return new p(this.i,this)}rBegin(){return new p(this.i-1,this,1)}rEnd(){return new p(-1,this,1)}front(){if(this.i!==0)return this.A[this.j][this.D]}back(){if(this.i!==0)return this.A[this.R][this.N]}pushBack(r){return this.i&&(this.N<this.F-1?this.N+=1:this.R<this.P-1?(this.R+=1,this.N=0):(this.R=0,this.N=0),this.R===this.j&&this.N===this.D&&this.T()),this.i+=1,this.A[this.R][this.N]=r,this.i}popBack(){if(this.i===0)return;let r=this.A[this.R][this.N];return this.i!==1&&(this.N>0?this.N-=1:this.R>0?(this.R-=1,this.N=this.F-1):(this.R=this.P-1,this.N=this.F-1)),this.i-=1,r}pushFront(r){return this.i&&(this.D>0?this.D-=1:this.j>0?(this.j-=1,this.D=this.F-1):(this.j=this.P-1,this.D=this.F-1),this.j===this.R&&this.D===this.N&&this.T()),this.i+=1,this.A[this.j][this.D]=r,this.i}popFront(){if(this.i===0)return;let r=this.A[this.j][this.D];return this.i!==1&&(this.D<this.F-1?this.D+=1:this.j<this.P-1?(this.j+=1,this.D=0):(this.j=0,this.D=0)),this.i-=1,r}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:e,curNodePointerIndex:s}=this.O(r);return this.A[e][s]}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:s,curNodePointerIndex:i}=this.O(r);this.A[s][i]=e}insert(r,e,s=1){if(r<0||r>this.i)throw new RangeError;if(r===0)for(;s--;)this.pushFront(e);else if(r===this.i)for(;s--;)this.pushBack(e);else{let i=[];for(let g=r;g<this.i;++g)i.push(this.getElementByPos(g));this.cut(r-1);for(let g=0;g<s;++g)this.pushBack(e);for(let g=0;g<i.length;++g)this.pushBack(i[g])}return this.i}cut(r){if(r<0)return this.clear(),0;let{curNodeBucketIndex:e,curNodePointerIndex:s}=this.O(r);return this.R=e,this.N=s,this.i=r+1,this.i}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;if(r===0)this.popFront();else if(r===this.i-1)this.popBack();else{let e=[];for(let i=r+1;i<this.i;++i)e.push(this.getElementByPos(i));this.cut(r),this.popBack();let s=this;e.forEach(function(i){s.pushBack(i)})}return this.i}eraseElementByValue(r){if(this.i===0)return 0;let e=[];for(let i=0;i<this.i;++i){let g=this.getElementByPos(i);g!==r&&e.push(g)}let s=e.length;for(let i=0;i<s;++i)this.setElementByPos(i,e[i]);return this.cut(s-1)}eraseElementByIterator(r){let e=r.o;return this.eraseElementByPos(e),r=r.next(),r}find(r){for(let e=0;e<this.i;++e)if(this.getElementByPos(e)===r)return new p(e,this);return this.end()}reverse(){let r=0,e=this.i-1;for(;r<e;){let s=this.getElementByPos(r);this.setElementByPos(r,this.getElementByPos(e)),this.setElementByPos(e,s),r+=1,e-=1}}unique(){if(this.i<=1)return this.i;let r=1,e=this.getElementByPos(0);for(let s=1;s<this.i;++s){let i=this.getElementByPos(s);i!==e&&(e=i,this.setElementByPos(r++,i))}for(;this.i>r;)this.popBack();return this.i}sort(r){let e=[];for(let s=0;s<this.i;++s)e.push(this.getElementByPos(s));e.sort(r);for(let s=0;s<this.i;++s)this.setElementByPos(s,e[s])}shrinkToFit(){if(this.i===0)return;let r=[];this.forEach(function(e){r.push(e)}),this.P=Math.max(Math.ceil(this.i/this.F),1),this.i=this.j=this.R=this.D=this.N=0,this.A=[];for(let e=0;e<this.P;++e)this.A.push(new Array(this.F));for(let e=0;e<r.length;++e)this.pushBack(r[e])}forEach(r){for(let e=0;e<this.i;++e)r(this.getElementByPos(e),e,this)}[Symbol.iterator](){return(function*(){for(let r=0;r<this.i;++r)yield this.getElementByPos(r)}).bind(this)()}},t=n;d.default=t}),hc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.TreeNodeEnableIndex=d.TreeNode=void 0;var h=class{constructor(a,p){this.ee=1,this.u=void 0,this.l=void 0,this.U=void 0,this.W=void 0,this.tt=void 0,this.u=a,this.l=p}L(){let a=this;if(a.ee===1&&a.tt.tt===a)a=a.W;else if(a.U)for(a=a.U;a.W;)a=a.W;else{let p=a.tt;for(;p.U===a;)a=p,p=a.tt;a=p}return a}B(){let a=this;if(a.W){for(a=a.W;a.U;)a=a.U;return a}else{let p=a.tt;for(;p.W===a;)a=p,p=a.tt;return a.W!==p?p:a}}te(){let a=this.tt,p=this.W,n=p.U;return a.tt===this?a.tt=p:a.U===this?a.U=p:a.W=p,p.tt=a,p.U=this,this.tt=p,this.W=n,n&&(n.tt=this),p}se(){let a=this.tt,p=this.U,n=p.W;return a.tt===this?a.tt=p:a.U===this?a.U=p:a.W=p,p.tt=a,p.W=this,this.tt=p,this.U=n,n&&(n.tt=this),p}};d.TreeNode=h;var o=class extends h{constructor(){super(...arguments),this.rt=1}te(){let a=super.te();return this.ie(),a.ie(),a}se(){let a=super.se();return this.ie(),a.ie(),a}ie(){this.rt=1,this.U&&(this.rt+=this.U.rt),this.W&&(this.rt+=this.W.rt)}};d.TreeNodeEnableIndex=o}),_o=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=hc(),o=kt(),a=xt(),p=class extends o.Container{constructor(t=function(e,s){return e<s?-1:e>s?1:0},r=!1){super(),this.Y=void 0,this.v=t,r?(this.re=h.TreeNodeEnableIndex,this.M=function(e,s,i){let g=this.ne(e,s,i);if(g){let f=g.tt;for(;f!==this.h;)f.rt+=1,f=f.tt;let l=this.he(g);if(l){let{parentNode:u,grandParent:m,curNode:v}=l;u.ie(),m.ie(),v.ie()}}return this.i},this.V=function(e){let s=this.fe(e);for(;s!==this.h;)s.rt-=1,s=s.tt}):(this.re=h.TreeNode,this.M=function(e,s,i){let g=this.ne(e,s,i);return g&&this.he(g),this.i},this.V=this.fe),this.h=new this.re}X(t,r){let e=this.h;for(;t;){let s=this.v(t.u,r);if(s<0)t=t.W;else if(s>0)e=t,t=t.U;else return t}return e}Z(t,r){let e=this.h;for(;t;)this.v(t.u,r)<=0?t=t.W:(e=t,t=t.U);return e}$(t,r){let e=this.h;for(;t;){let s=this.v(t.u,r);if(s<0)e=t,t=t.W;else if(s>0)t=t.U;else return t}return e}rr(t,r){let e=this.h;for(;t;)this.v(t.u,r)<0?(e=t,t=t.W):t=t.U;return e}ue(t){for(;;){let r=t.tt;if(r===this.h)return;if(t.ee===1){t.ee=0;return}if(t===r.U){let e=r.W;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.te():r.te();else if(e.W&&e.W.ee===1){e.ee=r.ee,r.ee=0,e.W.ee=0,r===this.Y?this.Y=r.te():r.te();return}else e.U&&e.U.ee===1?(e.ee=1,e.U.ee=0,e.se()):(e.ee=1,t=r)}else{let e=r.U;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.se():r.se();else if(e.U&&e.U.ee===1){e.ee=r.ee,r.ee=0,e.U.ee=0,r===this.Y?this.Y=r.se():r.se();return}else e.W&&e.W.ee===1?(e.ee=1,e.W.ee=0,e.te()):(e.ee=1,t=r)}}}fe(t){if(this.i===1)return this.clear(),this.h;let r=t;for(;r.U||r.W;){if(r.W)for(r=r.W;r.U;)r=r.U;else r=r.U;[t.u,r.u]=[r.u,t.u],[t.l,r.l]=[r.l,t.l],t=r}this.h.U===r?this.h.U=r.tt:this.h.W===r&&(this.h.W=r.tt),this.ue(r);let e=r.tt;return r===e.U?e.U=void 0:e.W=void 0,this.i-=1,this.Y.ee=0,e}oe(t,r){return t===void 0?!1:this.oe(t.U,r)||r(t)?!0:this.oe(t.W,r)}he(t){for(;;){let r=t.tt;if(r.ee===0)return;let e=r.tt;if(r===e.U){let s=e.W;if(s&&s.ee===1){if(s.ee=r.ee=0,e===this.Y)return;e.ee=1,t=e;continue}else if(t===r.W){if(t.ee=0,t.U&&(t.U.tt=r),t.W&&(t.W.tt=e),r.W=t.U,e.U=t.W,t.U=r,t.W=e,e===this.Y)this.Y=t,this.h.tt=t;else{let i=e.tt;i.U===e?i.U=t:i.W=t}return t.tt=e.tt,r.tt=t,e.tt=t,e.ee=1,{parentNode:r,grandParent:e,curNode:t}}else r.ee=0,e===this.Y?this.Y=e.se():e.se(),e.ee=1}else{let s=e.U;if(s&&s.ee===1){if(s.ee=r.ee=0,e===this.Y)return;e.ee=1,t=e;continue}else if(t===r.U){if(t.ee=0,t.U&&(t.U.tt=e),t.W&&(t.W.tt=r),e.W=t.U,r.U=t.W,t.U=e,t.W=r,e===this.Y)this.Y=t,this.h.tt=t;else{let i=e.tt;i.U===e?i.U=t:i.W=t}return t.tt=e.tt,r.tt=t,e.tt=t,e.ee=1,{parentNode:r,grandParent:e,curNode:t}}else r.ee=0,e===this.Y?this.Y=e.te():e.te(),e.ee=1}return}}ne(t,r,e){if(this.Y===void 0){this.i+=1,this.Y=new this.re(t,r),this.Y.ee=0,this.Y.tt=this.h,this.h.tt=this.Y,this.h.U=this.Y,this.h.W=this.Y;return}let s,i=this.h.U,g=this.v(i.u,t);if(g===0){i.l=r;return}else if(g>0)i.U=new this.re(t,r),i.U.tt=i,s=i.U,this.h.U=s;else{let f=this.h.W,l=this.v(f.u,t);if(l===0){f.l=r;return}else if(l<0)f.W=new this.re(t,r),f.W.tt=f,s=f.W,this.h.W=s;else{if(e!==void 0){let u=e.o;if(u!==this.h){let m=this.v(u.u,t);if(m===0){u.l=r;return}else if(m>0){let v=u.L(),k=this.v(v.u,t);if(k===0){v.l=r;return}else k<0&&(s=new this.re(t,r),v.W===void 0?(v.W=s,s.tt=v):(u.U=s,s.tt=u))}}}if(s===void 0)for(s=this.Y;;){let u=this.v(s.u,t);if(u>0){if(s.U===void 0){s.U=new this.re(t,r),s.U.tt=s,s=s.U;break}s=s.U}else if(u<0){if(s.W===void 0){s.W=new this.re(t,r),s.W.tt=s,s=s.W;break}s=s.W}else{s.l=r;return}}}}return this.i+=1,s}I(t,r){for(;t;){let e=this.v(t.u,r);if(e<0)t=t.W;else if(e>0)t=t.U;else return t}return t||this.h}clear(){this.i=0,this.Y=void 0,this.h.tt=void 0,this.h.U=this.h.W=void 0}updateKeyByIterator(t,r){let e=t.o;if(e===this.h&&(0,a.throwIteratorAccessError)(),this.i===1)return e.u=r,!0;if(e===this.h.U)return this.v(e.B().u,r)>0?(e.u=r,!0):!1;if(e===this.h.W)return this.v(e.L().u,r)<0?(e.u=r,!0):!1;let s=e.L().u;if(this.v(s,r)>=0)return!1;let i=e.B().u;return this.v(i,r)<=0?!1:(e.u=r,!0)}eraseElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r=0,e=this;return this.oe(this.Y,function(s){return t===r?(e.V(s),!0):(r+=1,!1)}),this.i}eraseElementByKey(t){if(this.i===0)return!1;let r=this.I(this.Y,t);return r===this.h?!1:(this.V(r),!0)}eraseElementByIterator(t){let r=t.o;r===this.h&&(0,a.throwIteratorAccessError)();let e=r.W===void 0;return t.iteratorType===0?e&&t.next():(!e||r.U===void 0)&&t.next(),this.V(r),t}forEach(t){let r=0;for(let e of this)t(e,r++,this)}getElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r,e=0;for(let s of this){if(e===t){r=s;break}e+=1}return r}getHeight(){if(this.i===0)return 0;let t=function(r){return r?Math.max(t(r.U),t(r.W))+1:0};return t(this.Y)}},n=p;d.default=n}),ko=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=kt(),o=xt(),a=class extends h.ContainerIterator{constructor(n,t,r){super(r),this.o=n,this.h=t,this.iteratorType===0?(this.pre=function(){return this.o===this.h.U&&(0,o.throwIteratorAccessError)(),this.o=this.o.L(),this},this.next=function(){return this.o===this.h&&(0,o.throwIteratorAccessError)(),this.o=this.o.B(),this}):(this.pre=function(){return this.o===this.h.W&&(0,o.throwIteratorAccessError)(),this.o=this.o.B(),this},this.next=function(){return this.o===this.h&&(0,o.throwIteratorAccessError)(),this.o=this.o.L(),this})}get index(){let n=this.o,t=this.h.tt;if(n===this.h)return t?t.rt-1:0;let r=0;for(n.U&&(r+=n.U.rt);n!==t;){let e=n.tt;n===e.W&&(r+=1,e.U&&(r+=e.U.rt)),n=e}return r}},p=a;d.default=p}),fc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=p(_o()),o=p(ko()),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class xo extends o.default{constructor(s,i,g,f){super(s,i,f),this.container=g}get pointer(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.u}copy(){return new xo(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.default{constructor(e=[],s,i){super(s,i);let g=this;e.forEach(function(f){g.insert(f)})}*K(e){e!==void 0&&(yield*this.K(e.U),yield e.u,yield*this.K(e.W))}begin(){return new n(this.h.U||this.h,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this.h.W||this.h,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){return this.h.U?this.h.U.u:void 0}back(){return this.h.W?this.h.W.u:void 0}insert(e,s){return this.M(e,void 0,s)}find(e){let s=this.I(this.Y,e);return new n(s,this.h,this)}lowerBound(e){let s=this.X(this.Y,e);return new n(s,this.h,this)}upperBound(e){let s=this.Z(this.Y,e);return new n(s,this.h,this)}reverseLowerBound(e){let s=this.$(this.Y,e);return new n(s,this.h,this)}reverseUpperBound(e){let s=this.rr(this.Y,e);return new n(s,this.h,this)}union(e){let s=this;return e.forEach(function(i){s.insert(i)}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=t;d.default=r}),mc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=p(_o()),o=p(ko()),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class So extends o.default{constructor(s,i,g,f){super(s,i,f),this.container=g}get pointer(){this.o===this.h&&(0,a.throwIteratorAccessError)();let s=this;return new Proxy([],{get(i,g){if(g==="0")return s.o.u;if(g==="1")return s.o.l},set(i,g,f){if(g!=="1")throw new TypeError("props must be 1");return s.o.l=f,!0}})}copy(){return new So(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.default{constructor(e=[],s,i){super(s,i);let g=this;e.forEach(function(f){g.setElement(f[0],f[1])})}*K(e){e!==void 0&&(yield*this.K(e.U),yield[e.u,e.l],yield*this.K(e.W))}begin(){return new n(this.h.U||this.h,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this.h.W||this.h,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){if(this.i===0)return;let e=this.h.U;return[e.u,e.l]}back(){if(this.i===0)return;let e=this.h.W;return[e.u,e.l]}lowerBound(e){let s=this.X(this.Y,e);return new n(s,this.h,this)}upperBound(e){let s=this.Z(this.Y,e);return new n(s,this.h,this)}reverseLowerBound(e){let s=this.$(this.Y,e);return new n(s,this.h,this)}reverseUpperBound(e){let s=this.rr(this.Y,e);return new n(s,this.h,this)}setElement(e,s,i){return this.M(e,s,i)}find(e){let s=this.I(this.Y,e);return new n(s,this.h,this)}getElementByKey(e){return this.I(this.Y,e).l}union(e){let s=this;return e.forEach(function(i){s.setElement(i[0],i[1])}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=t;d.default=r}),Ao=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=h;function h(o){let a=typeof o;return a==="object"&&o!==null||a==="function"}}),Eo=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.HashContainerIterator=d.HashContainer=void 0;var h=kt(),o=p(Ao()),a=xt();function p(r){return r&&r.t?r:{default:r}}var n=class extends h.ContainerIterator{constructor(r,e,s){super(s),this.o=r,this.h=e,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L,this})}};d.HashContainerIterator=n;var t=class extends h.Container{constructor(){super(),this.H=[],this.g={},this.HASH_TAG=Symbol("@@HASH_TAG"),Object.setPrototypeOf(this.g,null),this.h={},this.h.L=this.h.B=this.p=this._=this.h}V(r){let{L:e,B:s}=r;e.B=s,s.L=e,r===this.p&&(this.p=s),r===this._&&(this._=e),this.i-=1}M(r,e,s){s===void 0&&(s=(0,o.default)(r));let i;if(s){let g=r[this.HASH_TAG];if(g!==void 0)return this.H[g].l=e,this.i;Object.defineProperty(r,this.HASH_TAG,{value:this.H.length,configurable:!0}),i={u:r,l:e,L:this._,B:this.h},this.H.push(i)}else{let g=this.g[r];if(g)return g.l=e,this.i;i={u:r,l:e,L:this._,B:this.h},this.g[r]=i}return this.i===0?(this.p=i,this.h.B=i):this._.B=i,this._=i,this.h.L=i,++this.i}I(r,e){if(e===void 0&&(e=(0,o.default)(r)),e){let s=r[this.HASH_TAG];return s===void 0?this.h:this.H[s]}else return this.g[r]||this.h}clear(){let r=this.HASH_TAG;this.H.forEach(function(e){delete e.u[r]}),this.H=[],this.g={},Object.setPrototypeOf(this.g,null),this.i=0,this.p=this._=this.h.L=this.h.B=this.h}eraseElementByKey(r,e){let s;if(e===void 0&&(e=(0,o.default)(r)),e){let i=r[this.HASH_TAG];if(i===void 0)return!1;delete r[this.HASH_TAG],s=this.H[i],delete this.H[i]}else{if(s=this.g[r],s===void 0)return!1;delete this.g[r]}return this.V(s),!0}eraseElementByIterator(r){let e=r.o;return e===this.h&&(0,a.throwIteratorAccessError)(),this.V(e),r.next()}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let e=this.p;for(;r--;)e=e.B;return this.V(e),this.i}};d.HashContainer=t}),gc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=Eo(),o=xt(),a=class Io extends h.HashContainerIterator{constructor(r,e,s,i){super(r,e,i),this.container=s}get pointer(){return this.o===this.h&&(0,o.throwIteratorAccessError)(),this.o.u}copy(){return new Io(this.o,this.h,this.container,this.iteratorType)}},p=class extends h.HashContainer{constructor(t=[]){super();let r=this;t.forEach(function(e){r.insert(e)})}begin(){return new a(this.p,this.h,this)}end(){return new a(this.h,this.h,this)}rBegin(){return new a(this._,this.h,this,1)}rEnd(){return new a(this.h,this.h,this,1)}front(){return this.p.u}back(){return this._.u}insert(t,r){return this.M(t,void 0,r)}getElementByPos(t){if(t<0||t>this.i-1)throw new RangeError;let r=this.p;for(;t--;)r=r.B;return r.u}find(t,r){let e=this.I(t,r);return new a(e,this.h,this)}forEach(t){let r=0,e=this.p;for(;e!==this.h;)t(e.u,r++,this),e=e.B}[Symbol.iterator](){return(function*(){let t=this.p;for(;t!==this.h;)yield t.u,t=t.B}).bind(this)()}},n=p;d.default=n}),bc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),d.default=void 0;var h=Eo(),o=p(Ao()),a=xt();function p(e){return e&&e.t?e:{default:e}}var n=class To extends h.HashContainerIterator{constructor(s,i,g,f){super(s,i,f),this.container=g}get pointer(){this.o===this.h&&(0,a.throwIteratorAccessError)();let s=this;return new Proxy([],{get(i,g){if(g==="0")return s.o.u;if(g==="1")return s.o.l},set(i,g,f){if(g!=="1")throw new TypeError("props must be 1");return s.o.l=f,!0}})}copy(){return new To(this.o,this.h,this.container,this.iteratorType)}},t=class extends h.HashContainer{constructor(e=[]){super();let s=this;e.forEach(function(i){s.setElement(i[0],i[1])})}begin(){return new n(this.p,this.h,this)}end(){return new n(this.h,this.h,this)}rBegin(){return new n(this._,this.h,this,1)}rEnd(){return new n(this.h,this.h,this,1)}front(){if(this.i!==0)return[this.p.u,this.p.l]}back(){if(this.i!==0)return[this._.u,this._.l]}setElement(e,s,i){return this.M(e,s,i)}getElementByKey(e,s){if(s===void 0&&(s=(0,o.default)(e)),s){let g=e[this.HASH_TAG];return g!==void 0?this.H[g].l:void 0}let i=this.g[e];return i?i.l:void 0}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return[s.u,s.l]}find(e,s){let i=this.I(e,s);return new n(i,this.h,this)}forEach(e){let s=0,i=this.p;for(;i!==this.h;)e([i.u,i.l],s++,this),i=i.B}[Symbol.iterator](){return(function*(){let e=this.p;for(;e!==this.h;)yield[e.u,e.l],e=e.B}).bind(this)()}},r=t;d.default=r}),vc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"t",{value:!0}),Object.defineProperty(d,"Deque",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(d,"HashMap",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(d,"HashSet",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(d,"LinkList",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(d,"OrderedMap",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(d,"OrderedSet",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(d,"PriorityQueue",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(d,"Queue",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(d,"Stack",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(d,"Vector",{enumerable:!0,get:function(){return p.default}});var h=g(oc()),o=g(lc()),a=g(cc()),p=g(dc()),n=g(uc()),t=g(pc()),r=g(fc()),e=g(mc()),s=g(gc()),i=g(bc());function g(f){return f&&f.t?f:{default:f}}}),yc=be((d,h)=>{ue(),he(),pe();var o=vc().OrderedSet,a=wt()("number-allocator:trace"),p=wt()("number-allocator:error");function n(r,e){this.low=r,this.high=e}n.prototype.equals=function(r){return this.low===r.low&&this.high===r.high},n.prototype.compare=function(r){return this.low<r.low&&this.high<r.low?-1:r.low<this.low&&r.high<this.low?1:0};function t(r,e){if(!(this instanceof t))return new t(r,e);this.min=r,this.max=e,this.ss=new o([],(s,i)=>s.compare(i)),a("Create"),this.clear()}t.prototype.firstVacant=function(){return this.ss.size()===0?null:this.ss.front().low},t.prototype.alloc=function(){if(this.ss.size()===0)return a("alloc():empty"),null;let r=this.ss.begin(),e=r.pointer.low,s=r.pointer.high,i=e;return i+1<=s?this.ss.updateKeyByIterator(r,new n(e+1,s)):this.ss.eraseElementByPos(0),a("alloc():"+i),i},t.prototype.use=function(r){let e=new n(r,r),s=this.ss.lowerBound(e);if(!s.equals(this.ss.end())){let i=s.pointer.low,g=s.pointer.high;return s.pointer.equals(e)?(this.ss.eraseElementByIterator(s),a("use():"+r),!0):i>r?!1:i===r?(this.ss.updateKeyByIterator(s,new n(i+1,g)),a("use():"+r),!0):g===r?(this.ss.updateKeyByIterator(s,new n(i,g-1)),a("use():"+r),!0):(this.ss.updateKeyByIterator(s,new n(r+1,g)),this.ss.insert(new n(i,r-1)),a("use():"+r),!0)}return a("use():failed"),!1},t.prototype.free=function(r){if(r<this.min||r>this.max){p("free():"+r+" is out of range");return}let e=new n(r,r),s=this.ss.upperBound(e);if(s.equals(this.ss.end())){if(s.equals(this.ss.begin())){this.ss.insert(e);return}s.pre();let i=s.pointer.high;s.pointer.high+1===r?this.ss.updateKeyByIterator(s,new n(i,r)):this.ss.insert(e)}else if(s.equals(this.ss.begin()))if(r+1===s.pointer.low){let i=s.pointer.high;this.ss.updateKeyByIterator(s,new n(r,i))}else this.ss.insert(e);else{let i=s.pointer.low,g=s.pointer.high;s.pre();let f=s.pointer.low;s.pointer.high+1===r?r+1===i?(this.ss.eraseElementByIterator(s),this.ss.updateKeyByIterator(s,new n(f,g))):this.ss.updateKeyByIterator(s,new n(f,r)):r+1===i?(this.ss.eraseElementByIterator(s.next()),this.ss.insert(new n(r,g))):this.ss.insert(e)}a("free():"+r)},t.prototype.clear=function(){a("clear()"),this.ss.clear(),this.ss.insert(new n(this.min,this.max))},t.prototype.intervalCount=function(){return this.ss.size()},t.prototype.dump=function(){console.log("length:"+this.ss.size());for(let r of this.ss)console.log(r)},h.exports=t}),Mo=be((d,h)=>{ue(),he(),pe();var o=yc();h.exports.NumberAllocator=o}),wc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=ac(),o=Mo(),a=class{aliasToTopic;topicToAlias;max;numberAllocator;length;constructor(p){p>0&&(this.aliasToTopic=new h.LRUCache({max:p}),this.topicToAlias={},this.numberAllocator=new o.NumberAllocator(1,p),this.max=p,this.length=0)}put(p,n){if(n===0||n>this.max)return!1;let t=this.aliasToTopic.get(n);return t&&delete this.topicToAlias[t],this.aliasToTopic.set(n,p),this.topicToAlias[p]=n,this.numberAllocator.use(n),this.length=this.aliasToTopic.size,!0}getTopicByAlias(p){return this.aliasToTopic.get(p)}getAliasByTopic(p){let n=this.topicToAlias[p];return typeof n<"u"&&this.aliasToTopic.get(n),n}clear(){this.aliasToTopic.clear(),this.topicToAlias={},this.numberAllocator.clear(),this.length=0}getLruAlias(){return this.numberAllocator.firstVacant()||[...this.aliasToTopic.keys()][this.aliasToTopic.size-1]}};d.default=a}),_c=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(d,"__esModule",{value:!0});var o=Jn(),a=h(wc()),p=Jt(),n=(t,r)=>{t.log("_handleConnack");let{options:e}=t,s=e.protocolVersion===5?r.reasonCode:r.returnCode;if(clearTimeout(t.connackTimer),delete t.topicAliasSend,r.properties){if(r.properties.topicAliasMaximum){if(r.properties.topicAliasMaximum>65535){t.emit("error",new Error("topicAliasMaximum from broker is out of range"));return}r.properties.topicAliasMaximum>0&&(t.topicAliasSend=new a.default(r.properties.topicAliasMaximum))}r.properties.serverKeepAlive&&e.keepalive&&(e.keepalive=r.properties.serverKeepAlive),r.properties.maximumPacketSize&&(e.properties||(e.properties={}),e.properties.maximumPacketSize=r.properties.maximumPacketSize)}if(s===0)t.reconnecting=!1,t._onConnect(r);else if(s>0){let i=new p.ErrorWithReasonCode(`Connection refused: ${o.ReasonCodes[s]}`,s);t.emit("error",i),t.options.reconnectOnConnackError&&t._cleanUp(!0)}};d.default=n}),kc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=(o,a,p)=>{o.log("handling pubrel packet");let n=typeof p<"u"?p:o.noop,{messageId:t}=a,r={cmd:"pubcomp",messageId:t};o.incomingStore.get(a,(e,s)=>{e?o._sendPacket(r,n):(o.emit("message",s.topic,s.payload,s),o.handleMessage(s,i=>{if(i)return n(i);o.incomingStore.del(s,o.noop),o._sendPacket(r,n)}))})};d.default=h}),xc=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(d,"__esModule",{value:!0});var o=h(rc()),a=h(ic()),p=h(_c()),n=h(Jn()),t=h(kc()),r=(e,s,i)=>{let{options:g}=e;if(g.protocolVersion===5&&g.properties&&g.properties.maximumPacketSize&&g.properties.maximumPacketSize<s.length)return e.emit("error",new Error(`exceeding packets size ${s.cmd}`)),e.end({reasonCode:149,properties:{reasonString:"Maximum packet size was exceeded"}}),e;switch(e.log("_handlePacket :: emitting packetreceive"),e.emit("packetreceive",s),s.cmd){case"publish":(0,o.default)(e,s,i);break;case"puback":case"pubrec":case"pubcomp":case"suback":case"unsuback":e.reschedulePing(),(0,n.default)(e,s),i();break;case"pubrel":e.reschedulePing(),(0,t.default)(e,s,i);break;case"connack":(0,p.default)(e,s),i();break;case"auth":e.reschedulePing(),(0,a.default)(e,s),i();break;case"pingresp":e.log("_handlePacket :: received pingresp"),e.reschedulePing(!0),i();break;case"disconnect":e.emit("disconnect",s),i();break;default:e.log("_handlePacket :: unknown command"),i();break}};d.default=r}),Co=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=class{nextId;constructor(){this.nextId=Math.max(1,Math.floor(Math.random()*65535))}allocate(){let o=this.nextId++;return this.nextId===65536&&(this.nextId=1),o}getLastAllocated(){return this.nextId===1?65535:this.nextId-1}register(o){return!0}deallocate(o){}clear(){}};d.default=h}),Sc=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=class{aliasToTopic;max;length;constructor(o){this.aliasToTopic={},this.max=o}put(o,a){return a===0||a>this.max?!1:(this.aliasToTopic[a]=o,this.length=Object.keys(this.aliasToTopic).length,!0)}getTopicByAlias(o){return this.aliasToTopic[o]}clear(){this.aliasToTopic={}}};d.default=h}),Ac=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(d,"__esModule",{value:!0}),d.TypedEventEmitter=void 0;var o=h((qt(),Ue(Mt))),a=Jt(),p=class{};d.TypedEventEmitter=p,(0,a.applyMixin)(p,o.default)}),Xn=be((d,h)=>{ue(),he(),pe();function o(a){"@babel/helpers - typeof";return h.exports=o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},h.exports.__esModule=!0,h.exports.default=h.exports,o(a)}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Ec=be((d,h)=>{ue(),he(),pe();var o=Xn().default;function a(p,n){if(o(p)!="object"||!p)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,n||"default");if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(p)}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Ic=be((d,h)=>{ue(),he(),pe();var o=Xn().default,a=Ec();function p(n){var t=a(n,"string");return o(t)=="symbol"?t:t+""}h.exports=p,h.exports.__esModule=!0,h.exports.default=h.exports}),Tc=be((d,h)=>{ue(),he(),pe();var o=Ic();function a(p,n,t){return(n=o(n))in p?Object.defineProperty(p,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):p[n]=t,p}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Mc=be((d,h)=>{ue(),he(),pe();function o(a){if(Array.isArray(a))return a}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Cc=be((d,h)=>{ue(),he(),pe();function o(a,p){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var t,r,e,s,i=[],g=!0,f=!1;try{if(e=(n=n.call(a)).next,p===0){if(Object(n)!==n)return;g=!1}else for(;!(g=(t=e.call(n)).done)&&(i.push(t.value),i.length!==p);g=!0);}catch(l){f=!0,r=l}finally{try{if(!g&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw r}}return i}}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Pc=be((d,h)=>{ue(),he(),pe();function o(a,p){(p==null||p>a.length)&&(p=a.length);for(var n=0,t=Array(p);n<p;n++)t[n]=a[n];return t}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Oc=be((d,h)=>{ue(),he(),pe();var o=Pc();function a(p,n){if(p){if(typeof p=="string")return o(p,n);var t={}.toString.call(p).slice(8,-1);return t==="Object"&&p.constructor&&(t=p.constructor.name),t==="Map"||t==="Set"?Array.from(p):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(p,n):void 0}}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Nc=be((d,h)=>{ue(),he(),pe();function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Rc=be((d,h)=>{ue(),he(),pe();var o=Mc(),a=Cc(),p=Oc(),n=Nc();function t(r,e){return o(r)||a(r,e)||p(r,e)||n()}h.exports=t,h.exports.__esModule=!0,h.exports.default=h.exports}),Po=be((d,h)=>{ue(),he(),pe(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d):typeof define=="function"&&define.amd?define(["exports"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.fastUniqueNumbers={}))})(d,function(o){var a=function(l){return function(u){var m=l(u);return u.add(m),m}},p=function(l){return function(u,m){return l.set(u,m),m}},n=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,t=536870912,r=t*2,e=function(l,u){return function(m){var v=u.get(m),k=v===void 0?m.size:v<r?v+1:0;if(!m.has(k))return l(m,k);if(m.size<t){for(;m.has(k);)k=Math.floor(Math.random()*r);return l(m,k)}if(m.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;m.has(k);)k=Math.floor(Math.random()*n);return l(m,k)}},s=new WeakMap,i=p(s),g=e(i,s),f=a(g);o.addUniqueNumber=f,o.generateUniqueNumber=g})}),Uc=be((d,h)=>{ue(),he(),pe();function o(p,n,t,r,e,s,i){try{var g=p[s](i),f=g.value}catch(l){return void t(l)}g.done?n(f):Promise.resolve(f).then(r,e)}function a(p){return function(){var n=this,t=arguments;return new Promise(function(r,e){var s=p.apply(n,t);function i(f){o(s,r,e,i,g,"next",f)}function g(f){o(s,r,e,i,g,"throw",f)}i(void 0)})}}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Oo=be((d,h)=>{ue(),he(),pe();function o(a,p){this.v=a,this.k=p}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),No=be((d,h)=>{ue(),he(),pe();function o(a,p,n,t){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}h.exports=o=function(e,s,i,g){function f(l,u){o(e,l,function(m){return this._invoke(l,u,m)})}s?r?r(e,s,{value:i,enumerable:!g,configurable:!g,writable:!g}):e[s]=i:(f("next",0),f("throw",1),f("return",2))},h.exports.__esModule=!0,h.exports.default=h.exports,o(a,p,n,t)}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),Ro=be((d,h)=>{ue(),he(),pe();var o=No();function a(){var p,n,t=typeof Symbol=="function"?Symbol:{},r=t.iterator||"@@iterator",e=t.toStringTag||"@@toStringTag";function s(k,b,_,A){var y=b&&b.prototype instanceof g?b:g,S=Object.create(y.prototype);return o(S,"_invoke",(function(x,I,P){var O,j,T,z=0,q=P||[],B=!1,le={p:0,n:0,v:p,a:X,f:X.bind(p,4),d:function(G,ie){return O=G,j=0,T=p,le.n=ie,i}};function X(G,ie){for(j=G,T=ie,n=0;!B&&z&&!D&&n<q.length;n++){var D,te=q[n],R=le.p,Z=te[2];G>3?(D=Z===ie)&&(T=te[(j=te[4])?5:(j=3,3)],te[4]=te[5]=p):te[0]<=R&&((D=G<2&&R<te[1])?(j=0,le.v=ie,le.n=te[1]):R<Z&&(D=G<3||te[0]>ie||ie>Z)&&(te[4]=G,te[5]=ie,le.n=Z,j=0))}if(D||G>1)return i;throw B=!0,ie}return function(G,ie,D){if(z>1)throw TypeError("Generator is already running");for(B&&ie===1&&X(ie,D),j=ie,T=D;(n=j<2?p:T)||!B;){O||(j?j<3?(j>1&&(le.n=-1),X(j,T)):le.n=T:le.v=T);try{if(z=2,O){if(j||(G="next"),n=O[G]){if(!(n=n.call(O,T)))throw TypeError("iterator result is not an object");if(!n.done)return n;T=n.value,j<2&&(j=0)}else j===1&&(n=O.return)&&n.call(O),j<2&&(T=TypeError("The iterator does not provide a '"+G+"' method"),j=1);O=p}else if((n=(B=le.n<0)?T:x.call(I,le))!==i)break}catch(te){O=p,j=1,T=te}finally{z=1}}return{value:n,done:B}}})(k,_,A),!0),S}var i={};function g(){}function f(){}function l(){}n=Object.getPrototypeOf;var u=[][r]?n(n([][r]())):(o(n={},r,function(){return this}),n),m=l.prototype=g.prototype=Object.create(u);function v(k){return Object.setPrototypeOf?Object.setPrototypeOf(k,l):(k.__proto__=l,o(k,e,"GeneratorFunction")),k.prototype=Object.create(m),k}return f.prototype=l,o(m,"constructor",l),o(l,"constructor",f),f.displayName="GeneratorFunction",o(l,e,"GeneratorFunction"),o(m),o(m,e,"Generator"),o(m,r,function(){return this}),o(m,"toString",function(){return"[object Generator]"}),(h.exports=a=function(){return{w:s,m:v}},h.exports.__esModule=!0,h.exports.default=h.exports)()}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Uo=be((d,h)=>{ue(),he(),pe();var o=Oo(),a=No();function p(n,t){function r(s,i,g,f){try{var l=n[s](i),u=l.value;return u instanceof o?t.resolve(u.v).then(function(m){r("next",m,g,f)},function(m){r("throw",m,g,f)}):t.resolve(u).then(function(m){l.value=m,g(l)},function(m){return r("throw",m,g,f)})}catch(m){f(m)}}var e;this.next||(a(p.prototype),a(p.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),a(this,"_invoke",function(s,i,g){function f(){return new t(function(l,u){r(s,g,l,u)})}return e=e?e.then(f,f):f()},!0)}h.exports=p,h.exports.__esModule=!0,h.exports.default=h.exports}),Lo=be((d,h)=>{ue(),he(),pe();var o=Ro(),a=Uo();function p(n,t,r,e,s){return new a(o().w(n,t,r,e),s||Promise)}h.exports=p,h.exports.__esModule=!0,h.exports.default=h.exports}),Lc=be((d,h)=>{ue(),he(),pe();var o=Lo();function a(p,n,t,r,e){var s=o(p,n,t,r,e);return s.next().then(function(i){return i.done?i.value:s.next()})}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),qc=be((d,h)=>{ue(),he(),pe();function o(a){var p=Object(a),n=[];for(var t in p)n.unshift(t);return function r(){for(;n.length;)if((t=n.pop())in p)return r.value=t,r.done=!1,r;return r.done=!0,r}}h.exports=o,h.exports.__esModule=!0,h.exports.default=h.exports}),jc=be((d,h)=>{ue(),he(),pe();var o=Xn().default;function a(p){if(p!=null){var n=p[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],t=0;if(n)return n.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length))return{next:function(){return p&&t>=p.length&&(p=void 0),{value:p&&p[t++],done:!p}}}}throw new TypeError(o(p)+" is not iterable")}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports}),Bc=be((d,h)=>{ue(),he(),pe();var o=Oo(),a=Ro(),p=Lc(),n=Lo(),t=Uo(),r=qc(),e=jc();function s(){var i=a(),g=i.m(s),f=(Object.getPrototypeOf?Object.getPrototypeOf(g):g.__proto__).constructor;function l(v){var k=typeof v=="function"&&v.constructor;return!!k&&(k===f||(k.displayName||k.name)==="GeneratorFunction")}var u={throw:1,return:2,break:3,continue:3};function m(v){var k,b;return function(_){k||(k={stop:function(){return b(_.a,2)},catch:function(){return _.v},abrupt:function(A,y){return b(_.a,u[A],y)},delegateYield:function(A,y,S){return k.resultName=y,b(_.d,e(A),S)},finish:function(A){return b(_.f,A)}},b=function(A,y,S){_.p=k.prev,_.n=k.next;try{return A(y,S)}finally{k.next=_.n}}),k.resultName&&(k[k.resultName]=_.v,k.resultName=void 0),k.sent=_.v,k.next=_.n;try{return v.call(this,k)}finally{_.p=k.prev,_.n=k.next}}}return(h.exports=s=function(){return{wrap:function(v,k,b,_){return i.w(m(v),k,b,_&&_.reverse())},isGeneratorFunction:l,mark:i.m,awrap:function(v,k){return new o(v,k)},AsyncIterator:t,async:function(v,k,b,_,A){return(l(k)?n:p)(m(v),k,b,_,A)},keys:r,values:e}},h.exports.__esModule=!0,h.exports.default=h.exports)()}h.exports=s,h.exports.__esModule=!0,h.exports.default=h.exports}),Fc=be((d,h)=>{ue(),he(),pe();var o=Bc()();h.exports=o;try{regeneratorRuntime=o}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}),Dc=be((d,h)=>{ue(),he(),pe(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d,Tc(),Rc(),Po(),Uc(),Fc()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/slicedToArray","fast-unique-numbers","@babel/runtime/helpers/asyncToGenerator","@babel/runtime/regenerator"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.brokerFactory={},o._defineProperty,o._slicedToArray,o.fastUniqueNumbers,o._asyncToGenerator,o._regeneratorRuntime))})(d,function(o,a,p,n,t,r){var e=function(b){return typeof b.start=="function"},s=new WeakMap;function i(b,_){var A=Object.keys(b);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(b);_&&(y=y.filter(function(S){return Object.getOwnPropertyDescriptor(b,S).enumerable})),A.push.apply(A,y)}return A}function g(b){for(var _=1;_<arguments.length;_++){var A=arguments[_]!=null?arguments[_]:{};_%2?i(Object(A),!0).forEach(function(y){a(b,y,A[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(A)):i(Object(A)).forEach(function(y){Object.defineProperty(b,y,Object.getOwnPropertyDescriptor(A,y))})}return b}var f=function(b){return g(g({},b),{},{connect:function(_){var A=_.call;return t(r.mark(function y(){var S,x,I,P;return r.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return S=new MessageChannel,x=S.port1,I=S.port2,O.next=1,A("connect",{port:x},[x]);case 1:return P=O.sent,s.set(I,P),O.abrupt("return",I);case 2:case"end":return O.stop()}},y)}))},disconnect:function(_){var A=_.call;return(function(){var y=t(r.mark(function S(x){var I;return r.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(I=s.get(x),I!==void 0){P.next=1;break}throw new Error("The given port is not connected.");case 1:return P.next=2,A("disconnect",{portId:I});case 2:case"end":return P.stop()}},S)}));return function(S){return y.apply(this,arguments)}})()},isSupported:function(_){var A=_.call;return function(){return A("isSupported")}}})};function l(b,_){var A=Object.keys(b);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(b);_&&(y=y.filter(function(S){return Object.getOwnPropertyDescriptor(b,S).enumerable})),A.push.apply(A,y)}return A}function u(b){for(var _=1;_<arguments.length;_++){var A=arguments[_]!=null?arguments[_]:{};_%2?l(Object(A),!0).forEach(function(y){a(b,y,A[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(A)):l(Object(A)).forEach(function(y){Object.defineProperty(b,y,Object.getOwnPropertyDescriptor(A,y))})}return b}var m=new WeakMap,v=function(b){if(m.has(b))return m.get(b);var _=new Map;return m.set(b,_),_},k=function(b){var _=f(b);return function(A){var y=v(A);A.addEventListener("message",function(q){var B=q.data,le=B.id;if(le!==null&&y.has(le)){var X=y.get(le),G=X.reject,ie=X.resolve;y.delete(le),B.error===void 0?ie(B.result):G(new Error(B.error.message))}}),e(A)&&A.start();for(var S=function(q){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,le=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return new Promise(function(X,G){var ie=n.generateUniqueNumber(y);y.set(ie,{reject:G,resolve:X}),B===null?A.postMessage({id:ie,method:q},le):A.postMessage({id:ie,method:q,params:B},le)})},x=function(q,B){var le=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];A.postMessage({id:null,method:q,params:B},le)},I={},P=0,O=Object.entries(_);P<O.length;P++){var j=p(O[P],2),T=j[0],z=j[1];I=u(u({},I),{},a({},T,z({call:S,notify:x})))}return u({},I)}};o.createBroker=k})}),Wc=be((d,h)=>{ue(),he(),pe(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d,Xn(),Dc(),Po()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/typeof","broker-factory","fast-unique-numbers"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.workerTimersBroker={},o._typeof,o.brokerFactory,o.fastUniqueNumbers))})(d,function(o,a,p,n){var t=new Map([[0,null]]),r=new Map([[0,null]]),e=p.createBroker({clearInterval:function(i){var g=i.call;return function(f){a(t.get(f))==="symbol"&&(t.set(f,null),g("clear",{timerId:f,timerType:"interval"}).then(function(){t.delete(f)}))}},clearTimeout:function(i){var g=i.call;return function(f){a(r.get(f))==="symbol"&&(r.set(f,null),g("clear",{timerId:f,timerType:"timeout"}).then(function(){r.delete(f)}))}},setInterval:function(i){var g=i.call;return function(f){for(var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length,m=new Array(u>2?u-2:0),v=2;v<u;v++)m[v-2]=arguments[v];var k=Symbol(),b=n.generateUniqueNumber(t);t.set(b,k);var _=function(){return g("set",{delay:l,now:performance.timeOrigin+performance.now(),timerId:b,timerType:"interval"}).then(function(){var A=t.get(b);if(A===void 0)throw new Error("The timer is in an undefined state.");A===k&&(f.apply(void 0,m),t.get(b)===k&&_())})};return _(),b}},setTimeout:function(i){var g=i.call;return function(f){for(var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length,m=new Array(u>2?u-2:0),v=2;v<u;v++)m[v-2]=arguments[v];var k=Symbol(),b=n.generateUniqueNumber(r);return r.set(b,k),g("set",{delay:l,now:performance.timeOrigin+performance.now(),timerId:b,timerType:"timeout"}).then(function(){var _=r.get(b);if(_===void 0)throw new Error("The timer is in an undefined state.");_===k&&(r.delete(b),f.apply(void 0,m))}),b}}}),s=function(i){var g=new Worker(i);return e(g)};o.load=s,o.wrap=e})}),zc=be((d,h)=>{ue(),he(),pe(),(function(o,a){typeof d=="object"&&typeof h<"u"?a(d,Wc()):typeof define=="function"&&define.amd?define(["exports","worker-timers-broker"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o.workerTimers={},o.workerTimersBroker))})(d,function(o,a){var p=function(g,f){var l=null;return function(){if(l!==null)return l;var u=new Blob([f],{type:"application/javascript; charset=utf-8"}),m=URL.createObjectURL(u);return l=g(m),setTimeout(function(){return URL.revokeObjectURL(m)}),l}},n=`(()=>{var e={45:(e,t,r)=>{var n=r(738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},79:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},122:(e,t,r)=>{var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},156:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},172:e=>{e.exports=function(e,t){this.v=e,this.k=t},e.exports.__esModule=!0,e.exports.default=e.exports},293:e=>{function t(e,t,r,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,u){var a=e.apply(r,n);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},373:e=>{e.exports=function(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function e(){for(;r.length;)if((n=r.pop())in t)return e.value=n,e.done=!1,e;return e.done=!0,e}},e.exports.__esModule=!0,e.exports.default=e.exports},389:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,u=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<u?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*u);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,s=r(i),c=a(s,i),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c}(t)},472:function(e,t,r){!function(e,t,r,n){"use strict";var o=function(e,t){return function(r){var o=t.get(r);if(void 0===o)return Promise.resolve(!1);var u=n(o,2),a=u[0],i=u[1];return e(a),t.delete(r),i(!1),Promise.resolve(!0)}},u=function(e,t){var r=function(n,o,u,a){var i=n-e.now();i>0?o.set(a,[t(r,i,n,o,u,a),u]):(o.delete(a),u(!0))};return r},a=function(e,t,r,n){return function(o,u,a){var i=o+u-t.timeOrigin,s=i-t.now();return new Promise((function(t){e.set(a,[r(n,s,i,e,t,a),t])}))}},i=new Map,s=o(globalThis.clearTimeout,i),c=new Map,f=o(globalThis.clearTimeout,c),l=u(performance,globalThis.setTimeout),p=a(i,performance,globalThis.setTimeout,l),d=a(c,performance,globalThis.setTimeout,l);r.createWorker(self,{clear:function(){var r=e(t.mark((function e(r){var n,o,u;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timerId,o=r.timerType,e.next=1,"interval"===o?s(n):f(n);case 1:return u=e.sent,e.abrupt("return",{result:u});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}(),set:function(){var r=e(t.mark((function e(r){var n,o,u,a,i;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.delay,o=r.now,u=r.timerId,a=r.timerType,e.next=1,("interval"===a?p:d)(n,o,u);case 1:return i=e.sent,e.abrupt("return",{result:i});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}()})}(r(293),r(756),r(623),r(715))},546:e=>{function t(r,n,o,u){var a=Object.defineProperty;try{a({},"",{})}catch(r){a=0}e.exports=t=function(e,r,n,o){if(r)a?a(e,r,{value:n,enumerable:!o,configurable:!o,writable:!o}):e[r]=n;else{var u=function(r,n){t(e,r,(function(e){return this._invoke(r,n,e)}))};u("next",0),u("throw",1),u("return",2)}},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n,o,u)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},579:(e,t,r)=>{var n=r(738).default;e.exports=function(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(n(e)+" is not iterable")},e.exports.__esModule=!0,e.exports.default=e.exports},623:function(e,t,r){!function(e,t,r,n,o){"use strict";var u={INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601},a=function(e,t){return Object.assign(new Error(e),{status:t})},i=function(e){return a('The requested method called "'.concat(e,'" is not supported.'),u.METHOD_NOT_FOUND)},s=function(e){return a('The handler of the method called "'.concat(e,'" returned no required result.'),u.INTERNAL_ERROR)},c=function(e){return a('The handler of the method called "'.concat(e,'" returned an unexpected result.'),u.INTERNAL_ERROR)},f=function(e){return a('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),u.INVALID_PARAMS)},l=function(e,n){return function(){var o=t(r.mark((function t(o){var u,a,f,l,p,d,v,x,y,b,h,m,_,g,w;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o.data,a=u.id,f=u.method,l=u.params,p=n[f],t.prev=1,void 0!==p){t.next=2;break}throw i(f);case 2:if(void 0!==(d=void 0===l?p():p(l))){t.next=3;break}throw s(f);case 3:if(!(d instanceof Promise)){t.next=5;break}return t.next=4,d;case 4:g=t.sent,t.next=6;break;case 5:g=d;case 6:if(v=g,null!==a){t.next=8;break}if(void 0===v.result){t.next=7;break}throw c(f);case 7:t.next=10;break;case 8:if(void 0!==v.result){t.next=9;break}throw c(f);case 9:x=v.result,y=v.transferables,b=void 0===y?[]:y,e.postMessage({id:a,result:x},b);case 10:t.next=12;break;case 11:t.prev=11,w=t.catch(1),h=w.message,m=w.status,_=void 0===m?-32603:m,e.postMessage({error:{code:_,message:h},id:a});case 12:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return o.apply(this,arguments)}}()},p=function(){return new Promise((function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])}))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=new Map,y=function(e,n,u){return v(v({},n),{},{connect:function(t){var r=t.port;r.start();var u=e(r,n),a=o.generateUniqueNumber(x);return x.set(a,(function(){u(),r.close(),x.delete(a)})),{result:a}},disconnect:function(e){var t=e.portId,r=x.get(t);if(void 0===r)throw f(t);return r(),{result:null}},isSupported:function(){var e=t(r.mark((function e(){var t,n,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,p();case 1:if(!e.sent){e.next=5;break}if(!((t=u())instanceof Promise)){e.next=3;break}return e.next=2,t;case 2:o=e.sent,e.next=4;break;case 3:o=t;case 4:return n=o,e.abrupt("return",{result:n});case 5:return e.abrupt("return",{result:!1});case 6:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()})},b=function(e,t){var r=y(b,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0}),n=l(e,r);return e.addEventListener("message",n),function(){return e.removeEventListener("message",n)}};e.createWorker=b,e.isSupported=p}(t,r(293),r(756),r(693),r(389))},633:(e,t,r)=>{var n=r(172),o=r(993),u=r(869),a=r(887),i=r(791),s=r(373),c=r(579);function f(){"use strict";var t=o(),r=t.m(f),l=(Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__).constructor;function p(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))}var d={throw:1,return:2,break:3,continue:3};function v(e){var t,r;return function(n){t||(t={stop:function(){return r(n.a,2)},catch:function(){return n.v},abrupt:function(e,t){return r(n.a,d[e],t)},delegateYield:function(e,o,u){return t.resultName=o,r(n.d,c(e),u)},finish:function(e){return r(n.f,e)}},r=function(e,r,o){n.p=t.prev,n.n=t.next;try{return e(r,o)}finally{t.next=n.n}}),t.resultName&&(t[t.resultName]=n.v,t.resultName=void 0),t.sent=n.v,t.next=n.n;try{return e.call(this,t)}finally{n.p=t.prev,n.n=t.next}}}return(e.exports=f=function(){return{wrap:function(e,r,n,o){return t.w(v(e),r,n,o&&o.reverse())},isGeneratorFunction:p,mark:t.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:i,async:function(e,t,r,n,o){return(p(t)?a:u)(v(e),t,r,n,o)},keys:s,values:c}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=f,e.exports.__esModule=!0,e.exports.default=e.exports},693:(e,t,r)=>{var n=r(736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},715:(e,t,r)=>{var n=r(987),o=r(156),u=r(122),a=r(752);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},736:(e,t,r)=>{var n=r(738).default,o=r(45);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},752:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},756:(e,t,r)=>{var n=r(633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},791:(e,t,r)=>{var n=r(172),o=r(546);e.exports=function e(t,r){function u(e,o,a,i){try{var s=t[e](o),c=s.value;return c instanceof n?r.resolve(c.v).then((function(e){u("next",e,a,i)}),(function(e){u("throw",e,a,i)})):r.resolve(c).then((function(e){s.value=e,a(s)}),(function(e){return u("throw",e,a,i)}))}catch(e){i(e)}}var a;this.next||(o(e.prototype),o(e.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",(function(){return this}))),o(this,"_invoke",(function(e,t,n){function o(){return new r((function(t,r){u(e,n,t,r)}))}return a=a?a.then(o,o):o()}),!0)},e.exports.__esModule=!0,e.exports.default=e.exports},869:(e,t,r)=>{var n=r(887);e.exports=function(e,t,r,o,u){var a=n(e,t,r,o,u);return a.next().then((function(e){return e.done?e.value:a.next()}))},e.exports.__esModule=!0,e.exports.default=e.exports},887:(e,t,r)=>{var n=r(993),o=r(791);e.exports=function(e,t,r,u,a){return new o(n().w(e,t,r,u),a||Promise)},e.exports.__esModule=!0,e.exports.default=e.exports},987:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},993:(e,t,r)=>{var n=r(546);function o(){var t,r,u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.toStringTag||"@@toStringTag";function s(e,o,u,a){var i=o&&o.prototype instanceof f?o:f,s=Object.create(i.prototype);return n(s,"_invoke",function(e,n,o){var u,a,i,s=0,f=o||[],l=!1,p={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,r){return u=e,a=0,i=t,p.n=r,c}};function d(e,n){for(a=e,i=n,r=0;!l&&s&&!o&&r<f.length;r++){var o,u=f[r],d=p.p,v=u[2];e>3?(o=v===n)&&(i=u[(a=u[4])?5:(a=3,3)],u[4]=u[5]=t):u[0]<=d&&((o=e<2&&d<u[1])?(a=0,p.v=n,p.n=u[1]):d<v&&(o=e<3||u[0]>n||n>v)&&(u[4]=e,u[5]=n,p.n=v,a=0))}if(o||e>1)return c;throw l=!0,n}return function(o,f,v){if(s>1)throw TypeError("Generator is already running");for(l&&1===f&&d(f,v),a=f,i=v;(r=a<2?t:i)||!l;){u||(a?a<3?(a>1&&(p.n=-1),d(a,i)):p.n=i:p.v=i);try{if(s=2,u){if(a||(o="next"),r=u[o]){if(!(r=r.call(u,i)))throw TypeError("iterator result is not an object");if(!r.done)return r;i=r.value,a<2&&(a=0)}else 1===a&&(r=u.return)&&r.call(u),a<2&&(i=TypeError("The iterator does not provide a '"+o+"' method"),a=1);u=t}else if((r=(l=p.n<0)?i:e.call(n,p))!==c)break}catch(e){u=t,a=1,i=e}finally{s=1}}return{value:r,done:l}}}(e,u,a),!0),s}var c={};function f(){}function l(){}function p(){}r=Object.getPrototypeOf;var d=[][a]?r(r([][a]())):(n(r={},a,(function(){return this})),r),v=p.prototype=f.prototype=Object.create(d);function x(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,n(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e}return l.prototype=p,n(v,"constructor",p),n(p,"constructor",l),l.displayName="GeneratorFunction",n(p,i,"GeneratorFunction"),n(v),n(v,i,"Generator"),n(v,a,(function(){return this})),n(v,"toString",(function(){return"[object Generator]"})),(e.exports=o=function(){return{w:s,m:x}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`,t=p(a.load,n),r=function(g){return t().clearInterval(g)},e=function(g){return t().clearTimeout(g)},s=function(){var g;return(g=t()).setInterval.apply(g,arguments)},i=function(){var g;return(g=t()).setTimeout.apply(g,arguments)};o.clearInterval=r,o.clearTimeout=e,o.setInterval=s,o.setTimeout=i})}),Zn=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0}),d.isReactNativeBrowser=d.isWebWorker=void 0;var h=()=>typeof window<"u"?typeof navigator<"u"&&navigator.userAgent?.toLowerCase().indexOf(" electron/")>-1&&qe?.versions?!Object.prototype.hasOwnProperty.call(qe.versions,"electron"):typeof window.document<"u":!1,o=()=>!!(typeof self=="object"&&self?.constructor?.name?.includes("WorkerGlobalScope")&&typeof Deno>"u"),a=()=>typeof navigator<"u"&&navigator.product==="ReactNative",p=h()||o()||a();d.isWebWorker=o(),d.isReactNativeBrowser=a(),d.default=p}),Hc=be(d=>{ue(),he(),pe();var h=d&&d.__createBinding||(Object.create?function(s,i,g,f){f===void 0&&(f=g);var l=Object.getOwnPropertyDescriptor(i,g);(!l||("get"in l?!i.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return i[g]}}),Object.defineProperty(s,f,l)}:function(s,i,g,f){f===void 0&&(f=g),s[f]=i[g]}),o=d&&d.__setModuleDefault||(Object.create?function(s,i){Object.defineProperty(s,"default",{enumerable:!0,value:i})}:function(s,i){s.default=i}),a=d&&d.__importStar||(function(){var s=function(i){return s=Object.getOwnPropertyNames||function(g){var f=[];for(var l in g)Object.prototype.hasOwnProperty.call(g,l)&&(f[f.length]=l);return f},s(i)};return function(i){if(i&&i.__esModule)return i;var g={};if(i!=null)for(var f=s(i),l=0;l<f.length;l++)f[l]!=="default"&&h(g,i,f[l]);return o(g,i),g}})();Object.defineProperty(d,"__esModule",{value:!0});var p=zc(),n=a(Zn()),t={set:p.setInterval,clear:p.clearInterval},r={set:(s,i)=>setInterval(s,i),clear:s=>clearInterval(s)},e=s=>{switch(s){case"native":return r;case"worker":return t;default:return n.default&&!n.isWebWorker&&!n.isReactNativeBrowser?t:r}};d.default=e}),qo=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(d,"__esModule",{value:!0});var o=h(Hc()),a=class{_keepalive;timerId;timer;destroyed=!1;counter;client;_keepaliveTimeoutTimestamp;_intervalEvery;get keepaliveTimeoutTimestamp(){return this._keepaliveTimeoutTimestamp}get intervalEvery(){return this._intervalEvery}get keepalive(){return this._keepalive}constructor(p,n){this.client=p,this.timer=typeof n=="object"&&"set"in n&&"clear"in n?n:(0,o.default)(n),this.setKeepalive(p.options.keepalive)}clear(){this.timerId&&(this.timer.clear(this.timerId),this.timerId=null)}setKeepalive(p){if(p*=1e3,isNaN(p)||p<=0||p>2147483647)throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${p}`);this._keepalive=p,this.reschedule(),this.client.log(`KeepaliveManager: set keepalive to ${p}ms`)}destroy(){this.clear(),this.destroyed=!0}reschedule(){if(this.destroyed)return;this.clear(),this.counter=0;let p=Math.ceil(this._keepalive*1.5);this._keepaliveTimeoutTimestamp=Date.now()+p,this._intervalEvery=Math.ceil(this._keepalive/2),this.timerId=this.timer.set(()=>{this.destroyed||(this.counter+=1,this.counter===2?this.client.sendPing():this.counter>2&&this.client.onKeepaliveTimeout())},this._intervalEvery)}};d.default=a}),bs=be(d=>{ue(),he(),pe();var h=d&&d.__createBinding||(Object.create?function(y,S,x,I){I===void 0&&(I=x);var P=Object.getOwnPropertyDescriptor(S,x);(!P||("get"in P?!S.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return S[x]}}),Object.defineProperty(y,I,P)}:function(y,S,x,I){I===void 0&&(I=x),y[I]=S[x]}),o=d&&d.__setModuleDefault||(Object.create?function(y,S){Object.defineProperty(y,"default",{enumerable:!0,value:S})}:function(y,S){y.default=S}),a=d&&d.__importStar||(function(){var y=function(S){return y=Object.getOwnPropertyNames||function(x){var I=[];for(var P in x)Object.prototype.hasOwnProperty.call(x,P)&&(I[I.length]=P);return I},y(S)};return function(S){if(S&&S.__esModule)return S;var x={};if(S!=null)for(var I=y(S),P=0;P<I.length;P++)I[P]!=="default"&&h(x,S,I[P]);return o(x,S),x}})(),p=d&&d.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(d,"__esModule",{value:!0});var n=p(ec()),t=Bt(),r=p(nc()),e=p(wt()),s=a(po()),i=p(ho()),g=p(xc()),f=p(Co()),l=p(Sc()),u=Jt(),m=Ac(),v=p(qo()),k=a(Zn()),b=globalThis.setImmediate||((...y)=>{let S=y.shift();(0,u.nextTick)(()=>{S(...y)})}),_={keepalive:60,reschedulePings:!0,protocolId:"MQTT",protocolVersion:4,reconnectPeriod:1e3,connectTimeout:30*1e3,clean:!0,resubscribe:!0,subscribeBatchSize:null,writeCache:!0,timerVariant:"auto"},A=class vs extends m.TypedEventEmitter{static VERSION=u.MQTTJS_VERSION;connected;disconnecting;disconnected;reconnecting;incomingStore;outgoingStore;options;queueQoSZero;_reconnectCount;log;messageIdProvider;outgoing;messageIdToTopic;noop;keepaliveManager;stream;queue;streamBuilder;_resubscribeTopics;connackTimer;reconnectTimer;_storeProcessing;_packetIdsDuringStoreProcessing;_storeProcessingQueue;_firstConnection;topicAliasRecv;topicAliasSend;_deferredReconnect;connackPacket;static defaultId(){return`mqttjs_${Math.random().toString(16).substr(2,8)}`}constructor(S,x){super(),this.options=x||{};for(let I in _)typeof this.options[I]>"u"?this.options[I]=_[I]:this.options[I]=x[I];this.log=this.options.log||(0,e.default)("mqttjs:client"),this.noop=this._noop.bind(this),this.log("MqttClient :: version:",vs.VERSION),k.isWebWorker?this.log("MqttClient :: environment","webworker"):this.log("MqttClient :: environment",k.default?"browser":"node"),this.log("MqttClient :: options.protocol",x.protocol),this.log("MqttClient :: options.protocolVersion",x.protocolVersion),this.log("MqttClient :: options.username",x.username),this.log("MqttClient :: options.keepalive",x.keepalive),this.log("MqttClient :: options.reconnectPeriod",x.reconnectPeriod),this.log("MqttClient :: options.rejectUnauthorized",x.rejectUnauthorized),this.log("MqttClient :: options.properties.topicAliasMaximum",x.properties?x.properties.topicAliasMaximum:void 0),this.options.clientId=typeof x.clientId=="string"?x.clientId:vs.defaultId(),this.log("MqttClient :: clientId",this.options.clientId),this.options.customHandleAcks=x.protocolVersion===5&&x.customHandleAcks?x.customHandleAcks:(...I)=>{I[3](null,0)},this.options.writeCache||(n.default.writeToStream.cacheNumbers=!1),this.streamBuilder=S,this.messageIdProvider=typeof this.options.messageIdProvider>"u"?new f.default:this.options.messageIdProvider,this.outgoingStore=x.outgoingStore||new i.default,this.incomingStore=x.incomingStore||new i.default,this.queueQoSZero=x.queueQoSZero===void 0?!0:x.queueQoSZero,this._resubscribeTopics={},this.messageIdToTopic={},this.keepaliveManager=null,this.connected=!1,this.disconnecting=!1,this.reconnecting=!1,this.queue=[],this.connackTimer=null,this.reconnectTimer=null,this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={},this._storeProcessingQueue=[],this.outgoing={},this._firstConnection=!0,x.properties&&x.properties.topicAliasMaximum>0&&(x.properties.topicAliasMaximum>65535?this.log("MqttClient :: options.properties.topicAliasMaximum is out of range"):this.topicAliasRecv=new l.default(x.properties.topicAliasMaximum)),this.on("connect",()=>{let{queue:I}=this,P=()=>{let O=I.shift();this.log("deliver :: entry %o",O);let j=null;if(!O){this._resubscribe();return}j=O.packet,this.log("deliver :: call _sendPacket for %o",j);let T=!0;j.messageId&&j.messageId!==0&&(this.messageIdProvider.register(j.messageId)||(T=!1)),T?this._sendPacket(j,z=>{O.cb&&O.cb(z),P()}):(this.log("messageId: %d has already used. The message is skipped and removed.",j.messageId),P())};this.log("connect :: sending queued packets"),P()}),this.on("close",()=>{this.log("close :: connected set to `false`"),this.connected=!1,this.log("close :: clearing connackTimer"),clearTimeout(this.connackTimer),this._destroyKeepaliveManager(),this.topicAliasRecv&&this.topicAliasRecv.clear(),this.log("close :: calling _setupReconnect"),this._setupReconnect()}),this.options.manualConnect||(this.log("MqttClient :: setting up stream"),this.connect())}handleAuth(S,x){x()}handleMessage(S,x){x()}_nextId(){return this.messageIdProvider.allocate()}getLastMessageId(){return this.messageIdProvider.getLastAllocated()}connect(){let S=new t.Writable,x=n.default.parser(this.options),I=null,P=[];this.log("connect :: calling method to clear reconnect"),this._clearReconnect(),this.disconnected&&!this.reconnecting&&(this.incomingStore=this.options.incomingStore||new i.default,this.outgoingStore=this.options.outgoingStore||new i.default,this.disconnecting=!1,this.disconnected=!1),this.log("connect :: using streamBuilder provided to client to create stream"),this.stream=this.streamBuilder(this),x.on("packet",q=>{this.log("parser :: on packet push to packets array."),P.push(q)});let O=()=>{this.log("work :: getting next packet in queue");let q=P.shift();if(q)this.log("work :: packet pulled from queue"),(0,g.default)(this,q,j);else{this.log("work :: no packets in queue");let B=I;I=null,this.log("work :: done flag is %s",!!B),B&&B()}},j=()=>{if(P.length)(0,u.nextTick)(O);else{let q=I;I=null,q()}};S._write=(q,B,le)=>{I=le,this.log("writable stream :: parsing buffer"),x.parse(q),O()};let T=q=>{this.log("streamErrorHandler :: error",q.message),q.code?(this.log("streamErrorHandler :: emitting error"),this.emit("error",q)):this.noop(q)};this.log("connect :: pipe stream to writable stream"),this.stream.pipe(S),this.stream.on("error",T),this.stream.on("close",()=>{this.log("(%s)stream :: on close",this.options.clientId),this._flushVolatile(),this.log("stream: emit close to MqttClient"),this.emit("close")}),this.log("connect: sending packet `connect`");let z={cmd:"connect",protocolId:this.options.protocolId,protocolVersion:this.options.protocolVersion,clean:this.options.clean,clientId:this.options.clientId,keepalive:this.options.keepalive,username:this.options.username,password:this.options.password,properties:this.options.properties};if(this.options.will&&(z.will={...this.options.will,payload:this.options.will?.payload}),this.topicAliasRecv&&(z.properties||(z.properties={}),this.topicAliasRecv&&(z.properties.topicAliasMaximum=this.topicAliasRecv.max)),this._writePacket(z),x.on("error",this.emit.bind(this,"error")),this.options.properties){if(!this.options.properties.authenticationMethod&&this.options.properties.authenticationData)return this.end(()=>this.emit("error",new Error("Packet has no Authentication Method"))),this;if(this.options.properties.authenticationMethod&&this.options.authPacket&&typeof this.options.authPacket=="object"){let q={cmd:"auth",reasonCode:0,...this.options.authPacket};this._writePacket(q)}}return this.stream.setMaxListeners(1e3),clearTimeout(this.connackTimer),this.connackTimer=setTimeout(()=>{this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"),this.emit("error",new Error("connack timeout")),this._cleanUp(!0)},this.options.connectTimeout),this}publish(S,x,I,P){this.log("publish :: message `%s` to topic `%s`",x,S);let{options:O}=this;typeof I=="function"&&(P=I,I=null),I=I||{},I={qos:0,retain:!1,dup:!1,...I};let{qos:j,retain:T,dup:z,properties:q,cbStorePut:B}=I;if(this._checkDisconnecting(P))return this;let le=()=>{let X=0;if((j===1||j===2)&&(X=this._nextId(),X===null))return this.log("No messageId left"),!1;let G={cmd:"publish",topic:S,payload:x,qos:j,retain:T,messageId:X,dup:z};switch(O.protocolVersion===5&&(G.properties=q),this.log("publish :: qos",j),j){case 1:case 2:this.outgoing[G.messageId]={volatile:!1,cb:P||this.noop},this.log("MqttClient:publish: packet cmd: %s",G.cmd),this._sendPacket(G,void 0,B);break;default:this.log("MqttClient:publish: packet cmd: %s",G.cmd),this._sendPacket(G,P,B);break}return!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!le())&&this._storeProcessingQueue.push({invoke:le,cbStorePut:I.cbStorePut,callback:P}),this}publishAsync(S,x,I){return new Promise((P,O)=>{this.publish(S,x,I,(j,T)=>{j?O(j):P(T)})})}subscribe(S,x,I){let P=this.options.protocolVersion;typeof x=="function"&&(I=x),I=I||this.noop;let O=!1,j=[];typeof S=="string"?(S=[S],j=S):Array.isArray(S)?j=S:typeof S=="object"&&(O=S.resubscribe,delete S.resubscribe,j=Object.keys(S));let T=s.validateTopics(j);if(T!==null)return b(I,new Error(`Invalid topic ${T}`)),this;if(this._checkDisconnecting(I))return this.log("subscribe: discconecting true"),this;let z={qos:0};P===5&&(z.nl=!1,z.rap=!1,z.rh=0),x={...z,...x};let{properties:q}=x,B=[],le=(ie,D)=>{if(D=D||x,!Object.prototype.hasOwnProperty.call(this._resubscribeTopics,ie)||this._resubscribeTopics[ie].qos<D.qos||O){let te={topic:ie,qos:D.qos};P===5&&(te.nl=D.nl,te.rap=D.rap,te.rh=D.rh,te.properties=q),this.log("subscribe: pushing topic `%s` and qos `%s` to subs list",te.topic,te.qos),B.push(te)}};if(Array.isArray(S)?S.forEach(ie=>{this.log("subscribe: array topic %s",ie),le(ie)}):Object.keys(S).forEach(ie=>{this.log("subscribe: object topic %s, %o",ie,S[ie]),le(ie,S[ie])}),!B.length)return I(null,[]),this;let X=(ie,D)=>{let te={cmd:"subscribe",subscriptions:ie,messageId:D};if(q&&(te.properties=q),this.options.resubscribe){this.log("subscribe :: resubscribe true");let Z=[];ie.forEach(ye=>{if(this.options.reconnectPeriod>0){let L={qos:ye.qos};P===5&&(L.nl=ye.nl||!1,L.rap=ye.rap||!1,L.rh=ye.rh||0,L.properties=ye.properties),this._resubscribeTopics[ye.topic]=L,Z.push(ye.topic)}}),this.messageIdToTopic[te.messageId]=Z}let R=new Promise((Z,ye)=>{this.outgoing[te.messageId]={volatile:!0,cb(L,re){if(!L){let{granted:H}=re;for(let M=0;M<H.length;M+=1)ie[M].qos=H[M]}L?ye(new u.ErrorWithSubackPacket(L.message,re)):Z(re)}}});return this.log("subscribe :: call _sendPacket"),this._sendPacket(te),R},G=()=>{let ie=this.options.subscribeBatchSize??B.length,D=[];for(let te=0;te<B.length;te+=ie){let R=B.slice(te,te+ie),Z=this._nextId();if(Z===null)return this.log("No messageId left"),!1;D.push(X(R,Z))}return Promise.all(D).then(te=>{I(null,B,te.at(-1))}).catch(te=>{I(te,B,te.packet)}),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!G())&&this._storeProcessingQueue.push({invoke:G,callback:I}),this}subscribeAsync(S,x){return new Promise((I,P)=>{this.subscribe(S,x,(O,j)=>{O?P(O):I(j)})})}unsubscribe(S,x,I){typeof S=="string"&&(S=[S]),typeof x=="function"&&(I=x),I=I||this.noop;let P=s.validateTopics(S);if(P!==null)return b(I,new Error(`Invalid topic ${P}`)),this;if(this._checkDisconnecting(I))return this;let O=()=>{let j=this._nextId();if(j===null)return this.log("No messageId left"),!1;let T={cmd:"unsubscribe",messageId:j,unsubscriptions:[]};return typeof S=="string"?T.unsubscriptions=[S]:Array.isArray(S)&&(T.unsubscriptions=S),this.options.resubscribe&&T.unsubscriptions.forEach(z=>{delete this._resubscribeTopics[z]}),typeof x=="object"&&x.properties&&(T.properties=x.properties),this.outgoing[T.messageId]={volatile:!0,cb:I},this.log("unsubscribe: call _sendPacket"),this._sendPacket(T),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!O())&&this._storeProcessingQueue.push({invoke:O,callback:I}),this}unsubscribeAsync(S,x){return new Promise((I,P)=>{this.unsubscribe(S,x,(O,j)=>{O?P(O):I(j)})})}end(S,x,I){this.log("end :: (%s)",this.options.clientId),(S==null||typeof S!="boolean")&&(I=I||x,x=S,S=!1),typeof x!="object"&&(I=I||x,x=null),this.log("end :: cb? %s",!!I),(!I||typeof I!="function")&&(I=this.noop);let P=()=>{this.log("end :: closeStores: closing incoming and outgoing stores"),this.disconnected=!0,this.incomingStore.close(j=>{this.outgoingStore.close(T=>{if(this.log("end :: closeStores: emitting end"),this.emit("end"),I){let z=j||T;this.log("end :: closeStores: invoking callback with args"),I(z)}})}),this._deferredReconnect?this._deferredReconnect():(this.options.reconnectPeriod===0||this.options.manualConnect)&&(this.disconnecting=!1)},O=()=>{this.log("end :: (%s) :: finish :: calling _cleanUp with force %s",this.options.clientId,S),this._cleanUp(S,()=>{this.log("end :: finish :: calling process.nextTick on closeStores"),(0,u.nextTick)(P)},x)};return this.disconnecting?(I(),this):(this._clearReconnect(),this.disconnecting=!0,!S&&Object.keys(this.outgoing).length>0?(this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty",this.options.clientId),this.once("outgoingEmpty",setTimeout.bind(null,O,10))):(this.log("end :: (%s) :: immediately calling finish",this.options.clientId),O()),this)}endAsync(S,x){return new Promise((I,P)=>{this.end(S,x,O=>{O?P(O):I()})})}removeOutgoingMessage(S){if(this.outgoing[S]){let{cb:x}=this.outgoing[S];this._removeOutgoingAndStoreMessage(S,()=>{x(new Error("Message removed"))})}return this}reconnect(S){this.log("client reconnect");let x=()=>{S?(this.options.incomingStore=S.incomingStore,this.options.outgoingStore=S.outgoingStore):(this.options.incomingStore=null,this.options.outgoingStore=null),this.incomingStore=this.options.incomingStore||new i.default,this.outgoingStore=this.options.outgoingStore||new i.default,this.disconnecting=!1,this.disconnected=!1,this._deferredReconnect=null,this._reconnect()};return this.disconnecting&&!this.disconnected?this._deferredReconnect=x:x(),this}_flushVolatile(){this.outgoing&&(this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"),Object.keys(this.outgoing).forEach(S=>{this.outgoing[S].volatile&&typeof this.outgoing[S].cb=="function"&&(this.outgoing[S].cb(new Error("Connection closed")),delete this.outgoing[S])}))}_flush(){this.outgoing&&(this.log("_flush: queue exists? %b",!!this.outgoing),Object.keys(this.outgoing).forEach(S=>{typeof this.outgoing[S].cb=="function"&&(this.outgoing[S].cb(new Error("Connection closed")),delete this.outgoing[S])}))}_removeTopicAliasAndRecoverTopicName(S){let x;S.properties&&(x=S.properties.topicAlias);let I=S.topic.toString();if(this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o",x,I),I.length===0){if(typeof x>"u")return new Error("Unregistered Topic Alias");if(I=this.topicAliasSend.getTopicByAlias(x),typeof I>"u")return new Error("Unregistered Topic Alias");S.topic=I}x&&delete S.properties.topicAlias}_checkDisconnecting(S){return this.disconnecting&&(S&&S!==this.noop?S(new Error("client disconnecting")):this.emit("error",new Error("client disconnecting"))),this.disconnecting}_reconnect(){this.log("_reconnect: emitting reconnect to client"),this.emit("reconnect"),this.connected?(this.end(()=>{this.connect()}),this.log("client already connected. disconnecting first.")):(this.log("_reconnect: calling connect"),this.connect())}_setupReconnect(){!this.disconnecting&&!this.reconnectTimer&&this.options.reconnectPeriod>0?(this.reconnecting||(this.log("_setupReconnect :: emit `offline` state"),this.emit("offline"),this.log("_setupReconnect :: set `reconnecting` to `true`"),this.reconnecting=!0),this.log("_setupReconnect :: setting reconnectTimer for %d ms",this.options.reconnectPeriod),this.reconnectTimer=setInterval(()=>{this.log("reconnectTimer :: reconnect triggered!"),this._reconnect()},this.options.reconnectPeriod)):this.log("_setupReconnect :: doing nothing...")}_clearReconnect(){this.log("_clearReconnect : clearing reconnect timer"),this.reconnectTimer&&(clearInterval(this.reconnectTimer),this.reconnectTimer=null)}_cleanUp(S,x,I={}){if(x&&(this.log("_cleanUp :: done callback provided for on stream close"),this.stream.on("close",x)),this.log("_cleanUp :: forced? %s",S),S)this.options.reconnectPeriod===0&&this.options.clean&&this._flush(),this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),this.stream.destroy();else{let P={cmd:"disconnect",...I};this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet",this.options.clientId),this._sendPacket(P,()=>{this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),b(()=>{this.stream.end(()=>{this.log("_cleanUp :: (%s) :: stream destroyed",this.options.clientId)})})})}!this.disconnecting&&!this.reconnecting&&(this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."),this._clearReconnect(),this._setupReconnect()),this._destroyKeepaliveManager(),x&&!this.connected&&(this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener",this.options.clientId),this.stream.removeListener("close",x),x())}_storeAndSend(S,x,I){this.log("storeAndSend :: store packet with cmd %s to outgoingStore",S.cmd);let P=S,O;if(P.cmd==="publish"&&(P=(0,r.default)(S),O=this._removeTopicAliasAndRecoverTopicName(P),O))return x&&x(O);this.outgoingStore.put(P,j=>{if(j)return x&&x(j);I(),this._writePacket(S,x)})}_applyTopicAlias(S){if(this.options.protocolVersion===5&&S.cmd==="publish"){let x;S.properties&&(x=S.properties.topicAlias);let I=S.topic.toString();if(this.topicAliasSend)if(x){if(I.length!==0&&(this.log("applyTopicAlias :: register topic: %s - alias: %d",I,x),!this.topicAliasSend.put(I,x)))return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",I,x),new Error("Sending Topic Alias out of range")}else I.length!==0&&(this.options.autoAssignTopicAlias?(x=this.topicAliasSend.getAliasByTopic(I),x?(S.topic="",S.properties={...S.properties,topicAlias:x},this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d",I,x)):(x=this.topicAliasSend.getLruAlias(),this.topicAliasSend.put(I,x),S.properties={...S.properties,topicAlias:x},this.log("applyTopicAlias :: auto assign topic: %s - alias: %d",I,x))):this.options.autoUseTopicAlias&&(x=this.topicAliasSend.getAliasByTopic(I),x&&(S.topic="",S.properties={...S.properties,topicAlias:x},this.log("applyTopicAlias :: auto use topic: %s - alias: %d",I,x))));else if(x)return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",I,x),new Error("Sending Topic Alias out of range")}}_noop(S){this.log("noop ::",S)}_writePacket(S,x){this.log("_writePacket :: packet: %O",S),this.log("_writePacket :: emitting `packetsend`"),this.emit("packetsend",S),this.log("_writePacket :: writing to stream");let I=n.default.writeToStream(S,this.stream,this.options);this.log("_writePacket :: writeToStream result %s",I),!I&&x&&x!==this.noop?(this.log("_writePacket :: handle events on `drain` once through callback."),this.stream.once("drain",x)):x&&(this.log("_writePacket :: invoking cb"),x())}_sendPacket(S,x,I,P){this.log("_sendPacket :: (%s) ::  start",this.options.clientId),I=I||this.noop,x=x||this.noop;let O=this._applyTopicAlias(S);if(O){x(O);return}if(!this.connected){if(S.cmd==="auth"){this._writePacket(S,x);return}this.log("_sendPacket :: client not connected. Storing packet offline."),this._storePacket(S,x,I);return}if(P){this._writePacket(S,x);return}switch(S.cmd){case"publish":break;case"pubrel":this._storeAndSend(S,x,I);return;default:this._writePacket(S,x);return}switch(S.qos){case 2:case 1:this._storeAndSend(S,x,I);break;default:this._writePacket(S,x);break}this.log("_sendPacket :: (%s) ::  end",this.options.clientId)}_storePacket(S,x,I){this.log("_storePacket :: packet: %o",S),this.log("_storePacket :: cb? %s",!!x),I=I||this.noop;let P=S;if(P.cmd==="publish"){P=(0,r.default)(S);let j=this._removeTopicAliasAndRecoverTopicName(P);if(j)return x&&x(j)}let O=P.qos||0;O===0&&this.queueQoSZero||P.cmd!=="publish"?this.queue.push({packet:P,cb:x}):O>0?(x=this.outgoing[P.messageId]?this.outgoing[P.messageId].cb:null,this.outgoingStore.put(P,j=>{if(j)return x&&x(j);I()})):x&&x(new Error("No connection to broker"))}_setupKeepaliveManager(){this.log("_setupKeepaliveManager :: keepalive %d (seconds)",this.options.keepalive),!this.keepaliveManager&&this.options.keepalive&&(this.keepaliveManager=new v.default(this,this.options.timerVariant))}_destroyKeepaliveManager(){this.keepaliveManager&&(this.log("_destroyKeepaliveManager :: destroying keepalive manager"),this.keepaliveManager.destroy(),this.keepaliveManager=null)}reschedulePing(S=!1){this.keepaliveManager&&this.options.keepalive&&(S||this.options.reschedulePings)&&this._reschedulePing()}_reschedulePing(){this.log("_reschedulePing :: rescheduling ping"),this.keepaliveManager.reschedule()}sendPing(){this.log("_sendPing :: sending pingreq"),this._sendPacket({cmd:"pingreq"})}onKeepaliveTimeout(){this.emit("error",new Error("Keepalive timeout")),this.log("onKeepaliveTimeout :: calling _cleanUp with force true"),this._cleanUp(!0)}_resubscribe(){this.log("_resubscribe");let S=Object.keys(this._resubscribeTopics);if(!this._firstConnection&&(this.options.clean||this.options.protocolVersion>=4&&!this.connackPacket.sessionPresent)&&S.length>0)if(this.options.resubscribe)if(this.options.protocolVersion===5){this.log("_resubscribe: protocolVersion 5");for(let x=0;x<S.length;x++){let I={};I[S[x]]=this._resubscribeTopics[S[x]],I.resubscribe=!0,this.subscribe(I,{properties:I[S[x]].properties})}}else this._resubscribeTopics.resubscribe=!0,this.subscribe(this._resubscribeTopics);else this._resubscribeTopics={};this._firstConnection=!1}_onConnect(S){if(this.disconnected){this.emit("connect",S);return}this.connackPacket=S,this.messageIdProvider.clear(),this._setupKeepaliveManager(),this.connected=!0;let x=()=>{let I=this.outgoingStore.createStream(),P=()=>{I.destroy(),I=null,this._flushStoreProcessingQueue(),O()},O=()=>{this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={}};this.once("close",P),I.on("error",T=>{O(),this._flushStoreProcessingQueue(),this.removeListener("close",P),this.emit("error",T)});let j=()=>{if(!I)return;let T=I.read(1),z;if(!T){I.once("readable",j);return}if(this._storeProcessing=!0,this._packetIdsDuringStoreProcessing[T.messageId]){j();return}!this.disconnecting&&!this.reconnectTimer?(z=this.outgoing[T.messageId]?this.outgoing[T.messageId].cb:null,this.outgoing[T.messageId]={volatile:!1,cb(q,B){z&&z(q,B),j()}},this._packetIdsDuringStoreProcessing[T.messageId]=!0,this.messageIdProvider.register(T.messageId)?this._sendPacket(T,void 0,void 0,!0):this.log("messageId: %d has already used.",T.messageId)):I.destroy&&I.destroy()};I.on("end",()=>{let T=!0;for(let z in this._packetIdsDuringStoreProcessing)if(!this._packetIdsDuringStoreProcessing[z]){T=!1;break}this.removeListener("close",P),T?(O(),this._invokeAllStoreProcessingQueue(),this.emit("connect",S)):x()}),j()};x()}_invokeStoreProcessingQueue(){if(!this._storeProcessing&&this._storeProcessingQueue.length>0){let S=this._storeProcessingQueue[0];if(S&&S.invoke())return this._storeProcessingQueue.shift(),!0}return!1}_invokeAllStoreProcessingQueue(){for(;this._invokeStoreProcessingQueue(););}_flushStoreProcessingQueue(){for(let S of this._storeProcessingQueue)S.cbStorePut&&S.cbStorePut(new Error("Connection closed")),S.callback&&S.callback(new Error("Connection closed"));this._storeProcessingQueue.splice(0)}_removeOutgoingAndStoreMessage(S,x){delete this.outgoing[S],this.outgoingStore.del({messageId:S},(I,P)=>{x(I,P),this.messageIdProvider.deallocate(S),this._invokeStoreProcessingQueue()})}};d.default=A}),$c=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=Mo(),o=class{numberAllocator;lastId;constructor(){this.numberAllocator=new h.NumberAllocator(1,65535)}allocate(){return this.lastId=this.numberAllocator.alloc(),this.lastId}getLastAllocated(){return this.lastId}register(a){return this.numberAllocator.use(a)}deallocate(a){this.numberAllocator.free(a)}clear(){this.numberAllocator.clear()}};d.default=o});function Kc(){if(ys)return _n;ys=!0;let d=2147483647,h=36,o=1,a=26,p=38,n=700,t=72,r=128,e="-",s=/^xn--/,i=/[^\0-\x7F]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},l=h-o,u=Math.floor,m=String.fromCharCode;function v(O){throw new RangeError(f[O])}function k(O,j){let T=[],z=O.length;for(;z--;)T[z]=j(O[z]);return T}function b(O,j){let T=O.split("@"),z="";T.length>1&&(z=T[0]+"@",O=T[1]),O=O.replace(g,".");let q=O.split("."),B=k(q,j).join(".");return z+B}function _(O){let j=[],T=0,z=O.length;for(;T<z;){let q=O.charCodeAt(T++);if(q>=55296&&q<=56319&&T<z){let B=O.charCodeAt(T++);(B&64512)==56320?j.push(((q&1023)<<10)+(B&1023)+65536):(j.push(q),T--)}else j.push(q)}return j}let A=O=>String.fromCodePoint(...O),y=function(O){return O>=48&&O<58?26+(O-48):O>=65&&O<91?O-65:O>=97&&O<123?O-97:h},S=function(O,j){return O+22+75*(O<26)-((j!=0)<<5)},x=function(O,j,T){let z=0;for(O=T?u(O/n):O>>1,O+=u(O/j);O>l*a>>1;z+=h)O=u(O/l);return u(z+(l+1)*O/(O+p))},I=function(O){let j=[],T=O.length,z=0,q=r,B=t,le=O.lastIndexOf(e);le<0&&(le=0);for(let X=0;X<le;++X)O.charCodeAt(X)>=128&&v("not-basic"),j.push(O.charCodeAt(X));for(let X=le>0?le+1:0;X<T;){let G=z;for(let D=1,te=h;;te+=h){X>=T&&v("invalid-input");let R=y(O.charCodeAt(X++));R>=h&&v("invalid-input"),R>u((d-z)/D)&&v("overflow"),z+=R*D;let Z=te<=B?o:te>=B+a?a:te-B;if(R<Z)break;let ye=h-Z;D>u(d/ye)&&v("overflow"),D*=ye}let ie=j.length+1;B=x(z-G,ie,G==0),u(z/ie)>d-q&&v("overflow"),q+=u(z/ie),z%=ie,j.splice(z++,0,q)}return String.fromCodePoint(...j)},P=function(O){let j=[];O=_(O);let T=O.length,z=r,q=0,B=t;for(let G of O)G<128&&j.push(m(G));let le=j.length,X=le;for(le&&j.push(e);X<T;){let G=d;for(let D of O)D>=z&&D<G&&(G=D);let ie=X+1;G-z>u((d-q)/ie)&&v("overflow"),q+=(G-z)*ie,z=G;for(let D of O)if(D<z&&++q>d&&v("overflow"),D===z){let te=q;for(let R=h;;R+=h){let Z=R<=B?o:R>=B+a?a:R-B;if(te<Z)break;let ye=te-Z,L=h-Z;j.push(m(S(Z+ye%L,0))),te=u(ye/L)}j.push(m(S(te,0))),B=x(q,ie,X===le),q=0,++X}++q,++z}return j.join("")};return _n={version:"2.3.1",ucs2:{decode:_,encode:A},decode:I,encode:P,toASCII:function(O){return b(O,function(j){return i.test(j)?"xn--"+P(j):j})},toUnicode:function(O){return b(O,function(j){return s.test(j)?I(j.slice(4).toLowerCase()):j})}},_n}var _n,ys,It,Vc=tt(()=>{ue(),he(),pe(),_n={},ys=!1,It=Kc(),It.decode,It.encode,It.toASCII,It.toUnicode,It.ucs2,It.version});function Qc(){return _s||(_s=!0,ws=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var d={},h=Symbol("test"),o=Object(h);if(typeof h=="string"||Object.prototype.toString.call(h)!=="[object Symbol]"||Object.prototype.toString.call(o)!=="[object Symbol]")return!1;var a=42;d[h]=a;for(h in d)return!1;if(typeof Object.keys=="function"&&Object.keys(d).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(d).length!==0)return!1;var p=Object.getOwnPropertySymbols(d);if(p.length!==1||p[0]!==h||!Object.prototype.propertyIsEnumerable.call(d,h))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var n=Object.getOwnPropertyDescriptor(d,h);if(n.value!==a||n.enumerable!==!0)return!1}return!0}),ws}function Gc(){return xs||(xs=!0,ks=Error),ks}function Yc(){return As||(As=!0,Ss=EvalError),Ss}function Jc(){return Is||(Is=!0,Es=RangeError),Es}function Xc(){return Ms||(Ms=!0,Ts=ReferenceError),Ts}function jo(){return Ps||(Ps=!0,Cs=SyntaxError),Cs}function hn(){return Ns||(Ns=!0,Os=TypeError),Os}function Zc(){return Us||(Us=!0,Rs=URIError),Rs}function ed(){if(Ls)return kn;Ls=!0;var d=typeof Symbol<"u"&&Symbol,h=Qc();return kn=function(){return typeof d!="function"||typeof Symbol!="function"||typeof d("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:h()},kn}function td(){if(qs)return xn;qs=!0;var d={__proto__:null,foo:{}},h=Object;return xn=function(){return{__proto__:d}.foo===d.foo&&!(d instanceof h)},xn}function nd(){if(js)return Sn;js=!0;var d="Function.prototype.bind called on incompatible ",h=Object.prototype.toString,o=Math.max,a="[object Function]",p=function(r,e){for(var s=[],i=0;i<r.length;i+=1)s[i]=r[i];for(var g=0;g<e.length;g+=1)s[g+r.length]=e[g];return s},n=function(r,e){for(var s=[],i=e,g=0;i<r.length;i+=1,g+=1)s[g]=r[i];return s},t=function(r,e){for(var s="",i=0;i<r.length;i+=1)s+=r[i],i+1<r.length&&(s+=e);return s};return Sn=function(r){var e=this;if(typeof e!="function"||h.apply(e)!==a)throw new TypeError(d+e);for(var s=n(arguments,1),i,g=function(){if(this instanceof i){var v=e.apply(this,p(s,arguments));return Object(v)===v?v:this}return e.apply(r,p(s,arguments))},f=o(0,e.length-s.length),l=[],u=0;u<f;u++)l[u]="$"+u;if(i=Function("binder","return function ("+t(l,",")+"){ return binder.apply(this,arguments); }")(g),e.prototype){var m=function(){};m.prototype=e.prototype,i.prototype=new m,m.prototype=null}return i},Sn}function hi(){if(Bs)return An;Bs=!0;var d=nd();return An=Function.prototype.bind||d,An}function rd(){if(Fs)return En;Fs=!0;var d=Function.prototype.call,h=Object.prototype.hasOwnProperty,o=hi();return En=o.call(d,h),En}function Xt(){if(Ds)return In;Ds=!0;var d,h=Gc(),o=Yc(),a=Jc(),p=Xc(),n=jo(),t=hn(),r=Zc(),e=Function,s=function(X){try{return e('"use strict"; return ('+X+").constructor;")()}catch{}},i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch{i=null}var g=function(){throw new t},f=i?(function(){try{return arguments.callee,g}catch{try{return i(arguments,"callee").get}catch{return g}}})():g,l=ed()(),u=td()(),m=Object.getPrototypeOf||(u?function(X){return X.__proto__}:null),v={},k=typeof Uint8Array>"u"||!m?d:m(Uint8Array),b={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?d:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?d:ArrayBuffer,"%ArrayIteratorPrototype%":l&&m?m([][Symbol.iterator]()):d,"%AsyncFromSyncIteratorPrototype%":d,"%AsyncFunction%":v,"%AsyncGenerator%":v,"%AsyncGeneratorFunction%":v,"%AsyncIteratorPrototype%":v,"%Atomics%":typeof Atomics>"u"?d:Atomics,"%BigInt%":typeof BigInt>"u"?d:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?d:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?d:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?d:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":h,"%eval%":eval,"%EvalError%":o,"%Float32Array%":typeof Float32Array>"u"?d:Float32Array,"%Float64Array%":typeof Float64Array>"u"?d:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?d:FinalizationRegistry,"%Function%":e,"%GeneratorFunction%":v,"%Int8Array%":typeof Int8Array>"u"?d:Int8Array,"%Int16Array%":typeof Int16Array>"u"?d:Int16Array,"%Int32Array%":typeof Int32Array>"u"?d:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":l&&m?m(m([][Symbol.iterator]())):d,"%JSON%":typeof JSON=="object"?JSON:d,"%Map%":typeof Map>"u"?d:Map,"%MapIteratorPrototype%":typeof Map>"u"||!l||!m?d:m(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?d:Promise,"%Proxy%":typeof Proxy>"u"?d:Proxy,"%RangeError%":a,"%ReferenceError%":p,"%Reflect%":typeof Reflect>"u"?d:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?d:Set,"%SetIteratorPrototype%":typeof Set>"u"||!l||!m?d:m(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?d:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":l&&m?m(""[Symbol.iterator]()):d,"%Symbol%":l?Symbol:d,"%SyntaxError%":n,"%ThrowTypeError%":f,"%TypedArray%":k,"%TypeError%":t,"%Uint8Array%":typeof Uint8Array>"u"?d:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?d:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?d:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?d:Uint32Array,"%URIError%":r,"%WeakMap%":typeof WeakMap>"u"?d:WeakMap,"%WeakRef%":typeof WeakRef>"u"?d:WeakRef,"%WeakSet%":typeof WeakSet>"u"?d:WeakSet};if(m)try{null.error}catch(X){var _=m(m(X));b["%Error.prototype%"]=_}var A=function X(G){var ie;if(G==="%AsyncFunction%")ie=s("async function () {}");else if(G==="%GeneratorFunction%")ie=s("function* () {}");else if(G==="%AsyncGeneratorFunction%")ie=s("async function* () {}");else if(G==="%AsyncGenerator%"){var D=X("%AsyncGeneratorFunction%");D&&(ie=D.prototype)}else if(G==="%AsyncIteratorPrototype%"){var te=X("%AsyncGenerator%");te&&m&&(ie=m(te.prototype))}return b[G]=ie,ie},y={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},S=hi(),x=rd(),I=S.call(Function.call,Array.prototype.concat),P=S.call(Function.apply,Array.prototype.splice),O=S.call(Function.call,String.prototype.replace),j=S.call(Function.call,String.prototype.slice),T=S.call(Function.call,RegExp.prototype.exec),z=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,q=/\\(\\)?/g,B=function(X){var G=j(X,0,1),ie=j(X,-1);if(G==="%"&&ie!=="%")throw new n("invalid intrinsic syntax, expected closing `%`");if(ie==="%"&&G!=="%")throw new n("invalid intrinsic syntax, expected opening `%`");var D=[];return O(X,z,function(te,R,Z,ye){D[D.length]=Z?O(ye,q,"$1"):R||te}),D},le=function(X,G){var ie=X,D;if(x(y,ie)&&(D=y[ie],ie="%"+D[0]+"%"),x(b,ie)){var te=b[ie];if(te===v&&(te=A(ie)),typeof te>"u"&&!G)throw new t("intrinsic "+X+" exists, but is not available. Please file an issue!");return{alias:D,name:ie,value:te}}throw new n("intrinsic "+X+" does not exist!")};return In=function(X,G){if(typeof X!="string"||X.length===0)throw new t("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof G!="boolean")throw new t('"allowMissing" argument must be a boolean');if(T(/^%?[^%]*%?$/,X)===null)throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var ie=B(X),D=ie.length>0?ie[0]:"",te=le("%"+D+"%",G),R=te.name,Z=te.value,ye=!1,L=te.alias;L&&(D=L[0],P(ie,I([0,1],L)));for(var re=1,H=!0;re<ie.length;re+=1){var M=ie[re],ne=j(M,0,1),K=j(M,-1);if((ne==='"'||ne==="'"||ne==="`"||K==='"'||K==="'"||K==="`")&&ne!==K)throw new n("property names with quotes must have matching quotes");if((M==="constructor"||!H)&&(ye=!0),D+="."+M,R="%"+D+"%",x(b,R))Z=b[R];else if(Z!=null){if(!(M in Z)){if(!G)throw new t("base intrinsic for "+X+" exists, but the property is not available.");return}if(i&&re+1>=ie.length){var Q=i(Z,M);H=!!Q,H&&"get"in Q&&!("originalValue"in Q.get)?Z=Q.get:Z=Z[M]}else H=x(Z,M),Z=Z[M];H&&!ye&&(b[R]=Z)}}return Z},In}function fi(){if(Ws)return Tn;Ws=!0;var d=Xt(),h=d("%Object.defineProperty%",!0)||!1;if(h)try{h({},"a",{value:1})}catch{h=!1}return Tn=h,Tn}function Bo(){if(zs)return Mn;zs=!0;var d=Xt(),h=d("%Object.getOwnPropertyDescriptor%",!0);if(h)try{h([],"length")}catch{h=null}return Mn=h,Mn}function sd(){if(Hs)return Cn;Hs=!0;var d=fi(),h=jo(),o=hn(),a=Bo();return Cn=function(p,n,t){if(!p||typeof p!="object"&&typeof p!="function")throw new o("`obj` must be an object or a function`");if(typeof n!="string"&&typeof n!="symbol")throw new o("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new o("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new o("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new o("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new o("`loose`, if provided, must be a boolean");var r=arguments.length>3?arguments[3]:null,e=arguments.length>4?arguments[4]:null,s=arguments.length>5?arguments[5]:null,i=arguments.length>6?arguments[6]:!1,g=!!a&&a(p,n);if(d)d(p,n,{configurable:s===null&&g?g.configurable:!s,enumerable:r===null&&g?g.enumerable:!r,value:t,writable:e===null&&g?g.writable:!e});else if(i||!r&&!e&&!s)p[n]=t;else throw new h("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Cn}function id(){if($s)return Pn;$s=!0;var d=fi(),h=function(){return!!d};return h.hasArrayLengthDefineBug=function(){if(!d)return null;try{return d([],"length",{value:1}).length!==1}catch{return!0}},Pn=h,Pn}function ad(){if(Ks)return On;Ks=!0;var d=Xt(),h=sd(),o=id()(),a=Bo(),p=hn(),n=d("%Math.floor%");return On=function(t,r){if(typeof t!="function")throw new p("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||n(r)!==r)throw new p("`length` must be a positive 32-bit integer");var e=arguments.length>2&&!!arguments[2],s=!0,i=!0;if("length"in t&&a){var g=a(t,"length");g&&!g.configurable&&(s=!1),g&&!g.writable&&(i=!1)}return(s||i||!e)&&(o?h(t,"length",r,!0,!0):h(t,"length",r)),t},On}function od(){if(Vs)return Vt;Vs=!0;var d=hi(),h=Xt(),o=ad(),a=hn(),p=h("%Function.prototype.apply%"),n=h("%Function.prototype.call%"),t=h("%Reflect.apply%",!0)||d.call(n,p),r=fi(),e=h("%Math.max%");Vt=function(i){if(typeof i!="function")throw new a("a function is required");var g=t(d,n,arguments);return o(g,1+e(0,i.length-(arguments.length-1)),!0)};var s=function(){return t(d,p,arguments)};return r?r(Vt,"apply",{value:s}):Vt.apply=s,Vt}function ld(){if(Qs)return Nn;Qs=!0;var d=Xt(),h=od(),o=h(d("String.prototype.indexOf"));return Nn=function(a,p){var n=d(a,!!p);return typeof n=="function"&&o(a,".prototype.")>-1?h(n):n},Nn}var ws,_s,ks,xs,Ss,As,Es,Is,Ts,Ms,Cs,Ps,Os,Ns,Rs,Us,kn,Ls,xn,qs,Sn,js,An,Bs,En,Fs,In,Ds,Tn,Ws,Mn,zs,Cn,Hs,Pn,$s,On,Ks,Vt,Vs,Nn,Qs,cd=tt(()=>{ue(),he(),pe(),ws={},_s=!1,ks={},xs=!1,Ss={},As=!1,Es={},Is=!1,Ts={},Ms=!1,Cs={},Ps=!1,Os={},Ns=!1,Rs={},Us=!1,kn={},Ls=!1,xn={},qs=!1,Sn={},js=!1,An={},Bs=!1,En={},Fs=!1,In={},Ds=!1,Tn={},Ws=!1,Mn={},zs=!1,Cn={},Hs=!1,Pn={},$s=!1,On={},Ks=!1,Vt={},Vs=!1,Nn={},Qs=!1});function mi(d){throw new Error("Node.js process "+d+" is not supported by JSPM core outside of Node.js")}function dd(){!Lt||!Rt||(Lt=!1,Rt.length?ut=Rt.concat(ut):dn=-1,ut.length&&Fo())}function Fo(){if(!Lt){var d=setTimeout(dd,0);Lt=!0;for(var h=ut.length;h;){for(Rt=ut,ut=[];++dn<h;)Rt&&Rt[dn].run();dn=-1,h=ut.length}Rt=null,Lt=!1,clearTimeout(d)}}function ud(d){var h=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)h[o-1]=arguments[o];ut.push(new Do(d,h)),ut.length===1&&!Lt&&setTimeout(Fo,0)}function Do(d,h){this.fun=d,this.array=h}function Ge(){}function pd(d){mi("_linkedBinding")}function hd(d){mi("dlopen")}function fd(){return[]}function md(){return[]}function gd(d,h){if(!d)throw new Error(h||"assertion error")}function bd(){return!1}function vd(){return bt.now()/1e3}function rr(d){var h=Math.floor((Date.now()-bt.now())*.001),o=bt.now()*.001,a=Math.floor(o)+h,p=Math.floor(o%1*1e9);return d&&(a=a-d[0],p=p-d[1],p<0&&(a--,p+=Rn)),[a,p]}function At(){return gi}function yd(d){return[]}var ut,Lt,Rt,dn,Ai,Ei,Ii,Ti,Mi,Ci,Pi,Oi,Ni,Ri,Ui,Li,qi,ji,Bi,Fi,Di,Wi,zi,Hi,$i,gn,Ki,Vi,Qi,Gi,Yi,Ji,Xi,Zi,ea,ta,na,ra,sa,ia,aa,oa,la,ca,da,ua,pa,ha,fa,ma,ga,bt,sr,Rn,ba,va,ya,wa,_a,ka,xa,Sa,Aa,Ea,Ia,gi,Wo=tt(()=>{ue(),he(),pe(),ut=[],Lt=!1,dn=-1,Do.prototype.run=function(){this.fun.apply(null,this.array)},Ai="browser",Ei="x64",Ii="browser",Ti={PATH:"/usr/bin",LANG:navigator.language+".UTF-8",PWD:"/",HOME:"/home",TMP:"/tmp"},Mi=["/usr/bin/node"],Ci=[],Pi="v16.8.0",Oi={},Ni=function(d,h){console.warn((h?h+": ":"")+d)},Ri=function(d){mi("binding")},Ui=function(d){return 0},Li=function(){return"/"},qi=function(d){},ji={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},Bi=Ge,Fi=[],Di={},Wi=!1,zi={},Hi=Ge,$i=Ge,gn=function(){return{}},Ki=gn,Vi=gn,Qi=Ge,Gi=Ge,Yi=Ge,Ji={},Xi={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},Zi=Ge,ea=Ge,ta=Ge,na=Ge,ra=Ge,sa=Ge,ia=Ge,aa=void 0,oa=void 0,la=void 0,ca=Ge,da=2,ua=1,pa="/bin/usr/node",ha=9229,fa="node",ma=[],ga=Ge,bt={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},bt.now===void 0&&(sr=Date.now(),bt.timing&&bt.timing.navigationStart&&(sr=bt.timing.navigationStart),bt.now=()=>Date.now()-sr),Rn=1e9,rr.bigint=function(d){var h=rr(d);return typeof BigInt>"u"?h[0]*Rn+h[1]:BigInt(h[0]*Rn)+BigInt(h[1])},ba=10,va={},ya=0,wa=At,_a=At,ka=At,xa=At,Sa=At,Aa=Ge,Ea=At,Ia=At,gi={version:Pi,versions:Oi,arch:Ei,platform:Ii,release:ji,_rawDebug:Bi,moduleLoadList:Fi,binding:Ri,_linkedBinding:pd,_events:va,_eventsCount:ya,_maxListeners:ba,on:At,addListener:wa,once:_a,off:ka,removeListener:xa,removeAllListeners:Sa,emit:Aa,prependListener:Ea,prependOnceListener:Ia,listeners:yd,domain:Di,_exiting:Wi,config:zi,dlopen:hd,uptime:vd,_getActiveRequests:fd,_getActiveHandles:md,reallyExit:Hi,_kill:$i,cpuUsage:gn,resourceUsage:Ki,memoryUsage:Vi,kill:Qi,exit:Gi,openStdin:Yi,allowedNodeEnvironmentFlags:Ji,assert:gd,features:Xi,_fatalExceptions:Zi,setUncaughtExceptionCaptureCallback:ea,hasUncaughtExceptionCaptureCallback:bd,emitWarning:Ni,nextTick:ud,_tickCallback:ta,_debugProcess:na,_debugEnd:ra,_startProfilerIdleNotifier:sa,_stopProfilerIdleNotifier:ia,stdout:aa,stdin:la,stderr:oa,abort:ca,umask:Ui,chdir:qi,cwd:Li,env:Ti,title:Ai,argv:Mi,execArgv:Ci,pid:da,ppid:ua,execPath:pa,debugPort:ha,hrtime:rr,argv0:fa,_preload_modules:ma,setSourceMapsEnabled:ga}});function wd(){if(Gs)return Un;Gs=!0;var d=gi;function h(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function o(n,t){for(var r="",e=0,s=-1,i=0,g,f=0;f<=n.length;++f){if(f<n.length)g=n.charCodeAt(f);else{if(g===47)break;g=47}if(g===47){if(!(s===f-1||i===1))if(s!==f-1&&i===2){if(r.length<2||e!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",e=0):(r=r.slice(0,l),e=r.length-1-r.lastIndexOf("/")),s=f,i=0;continue}}else if(r.length===2||r.length===1){r="",e=0,s=f,i=0;continue}}t&&(r.length>0?r+="/..":r="..",e=2)}else r.length>0?r+="/"+n.slice(s+1,f):r=n.slice(s+1,f),e=f-s-1;s=f,i=0}else g===46&&i!==-1?++i:i=-1}return r}function a(n,t){var r=t.dir||t.root,e=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+e:r+n+e:e}var p={resolve:function(){for(var n="",t=!1,r,e=arguments.length-1;e>=-1&&!t;e--){var s;e>=0?s=arguments[e]:(r===void 0&&(r=d.cwd()),s=r),h(s),s.length!==0&&(n=s+"/"+n,t=s.charCodeAt(0)===47)}return n=o(n,!t),t?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(n){if(h(n),n.length===0)return".";var t=n.charCodeAt(0)===47,r=n.charCodeAt(n.length-1)===47;return n=o(n,!t),n.length===0&&!t&&(n="."),n.length>0&&r&&(n+="/"),t?"/"+n:n},isAbsolute:function(n){return h(n),n.length>0&&n.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var n,t=0;t<arguments.length;++t){var r=arguments[t];h(r),r.length>0&&(n===void 0?n=r:n+="/"+r)}return n===void 0?".":p.normalize(n)},relative:function(n,t){if(h(n),h(t),n===t||(n=p.resolve(n),t=p.resolve(t),n===t))return"";for(var r=1;r<n.length&&n.charCodeAt(r)===47;++r);for(var e=n.length,s=e-r,i=1;i<t.length&&t.charCodeAt(i)===47;++i);for(var g=t.length,f=g-i,l=s<f?s:f,u=-1,m=0;m<=l;++m){if(m===l){if(f>l){if(t.charCodeAt(i+m)===47)return t.slice(i+m+1);if(m===0)return t.slice(i+m)}else s>l&&(n.charCodeAt(r+m)===47?u=m:m===0&&(u=0));break}var v=n.charCodeAt(r+m),k=t.charCodeAt(i+m);if(v!==k)break;v===47&&(u=m)}var b="";for(m=r+u+1;m<=e;++m)(m===e||n.charCodeAt(m)===47)&&(b.length===0?b+="..":b+="/..");return b.length>0?b+t.slice(i+u):(i+=u,t.charCodeAt(i)===47&&++i,t.slice(i))},_makeLong:function(n){return n},dirname:function(n){if(h(n),n.length===0)return".";for(var t=n.charCodeAt(0),r=t===47,e=-1,s=!0,i=n.length-1;i>=1;--i)if(t=n.charCodeAt(i),t===47){if(!s){e=i;break}}else s=!1;return e===-1?r?"/":".":r&&e===1?"//":n.slice(0,e)},basename:function(n,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');h(n);var r=0,e=-1,s=!0,i;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";var g=t.length-1,f=-1;for(i=n.length-1;i>=0;--i){var l=n.charCodeAt(i);if(l===47){if(!s){r=i+1;break}}else f===-1&&(s=!1,f=i+1),g>=0&&(l===t.charCodeAt(g)?--g===-1&&(e=i):(g=-1,e=f))}return r===e?e=f:e===-1&&(e=n.length),n.slice(r,e)}else{for(i=n.length-1;i>=0;--i)if(n.charCodeAt(i)===47){if(!s){r=i+1;break}}else e===-1&&(s=!1,e=i+1);return e===-1?"":n.slice(r,e)}},extname:function(n){h(n);for(var t=-1,r=0,e=-1,s=!0,i=0,g=n.length-1;g>=0;--g){var f=n.charCodeAt(g);if(f===47){if(!s){r=g+1;break}continue}e===-1&&(s=!1,e=g+1),f===46?t===-1?t=g:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||e===-1||i===0||i===1&&t===e-1&&t===r+1?"":n.slice(t,e)},format:function(n){if(n===null||typeof n!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return a("/",n)},parse:function(n){h(n);var t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;var r=n.charCodeAt(0),e=r===47,s;e?(t.root="/",s=1):s=0;for(var i=-1,g=0,f=-1,l=!0,u=n.length-1,m=0;u>=s;--u){if(r=n.charCodeAt(u),r===47){if(!l){g=u+1;break}continue}f===-1&&(l=!1,f=u+1),r===46?i===-1?i=u:m!==1&&(m=1):i!==-1&&(m=-1)}return i===-1||f===-1||m===0||m===1&&i===f-1&&i===g+1?f!==-1&&(g===0&&e?t.base=t.name=n.slice(1,f):t.base=t.name=n.slice(g,f)):(g===0&&e?(t.name=n.slice(1,i),t.base=n.slice(1,f)):(t.name=n.slice(g,i),t.base=n.slice(g,f)),t.ext=n.slice(i,f)),g>0?t.dir=n.slice(0,g-1):e&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};return p.posix=p,Un=p,Un}var Un,Gs,Ys,_d=tt(()=>{ue(),he(),pe(),Wo(),Un={},Gs=!1,Ys=wd()}),zo={};Gt(zo,{URL:()=>Zo,Url:()=>Qo,default:()=>Ye,fileURLToPath:()=>$o,format:()=>Go,parse:()=>Xo,pathToFileURL:()=>Ko,resolve:()=>Yo,resolveObject:()=>Jo});function kd(){if(Js)return Ln;Js=!0;var d=typeof Map=="function"&&Map.prototype,h=Object.getOwnPropertyDescriptor&&d?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,o=d&&h&&typeof h.get=="function"?h.get:null,a=d&&Map.prototype.forEach,p=typeof Set=="function"&&Set.prototype,n=Object.getOwnPropertyDescriptor&&p?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,t=p&&n&&typeof n.get=="function"?n.get:null,r=p&&Set.prototype.forEach,e=typeof WeakMap=="function"&&WeakMap.prototype,s=e?WeakMap.prototype.has:null,i=typeof WeakSet=="function"&&WeakSet.prototype,g=i?WeakSet.prototype.has:null,f=typeof WeakRef=="function"&&WeakRef.prototype,l=f?WeakRef.prototype.deref:null,u=Boolean.prototype.valueOf,m=Object.prototype.toString,v=Function.prototype.toString,k=String.prototype.match,b=String.prototype.slice,_=String.prototype.replace,A=String.prototype.toUpperCase,y=String.prototype.toLowerCase,S=RegExp.prototype.test,x=Array.prototype.concat,I=Array.prototype.join,P=Array.prototype.slice,O=Math.floor,j=typeof BigInt=="function"?BigInt.prototype.valueOf:null,T=Object.getOwnPropertySymbols,z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,q=typeof Symbol=="function"&&typeof Symbol.iterator=="object",B=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===q||!0)?Symbol.toStringTag:null,le=Object.prototype.propertyIsEnumerable,X=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(Y){return Y.__proto__}:null);function G(Y,oe){if(Y===1/0||Y===-1/0||Y!==Y||Y&&Y>-1e3&&Y<1e3||S.call(/e/,oe))return oe;var Ee=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof Y=="number"){var Ie=Y<0?-O(-Y):O(Y);if(Ie!==Y){var Te=String(Ie),Ce=b.call(oe,Te.length+1);return _.call(Te,Ee,"$&_")+"."+_.call(_.call(Ce,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _.call(oe,Ee,"$&_")}var ie=Vo,D=ie.custom,te=Q(D)?D:null;Ln=function Y(oe,Ee,Ie,Te){var Ce=Ee||{};if(ae(Ce,"quoteStyle")&&Ce.quoteStyle!=="single"&&Ce.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ae(Ce,"maxStringLength")&&(typeof Ce.maxStringLength=="number"?Ce.maxStringLength<0&&Ce.maxStringLength!==1/0:Ce.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var st=ae(Ce,"customInspect")?Ce.customInspect:!0;if(typeof st!="boolean"&&st!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ae(Ce,"indent")&&Ce.indent!==null&&Ce.indent!=="	"&&!(parseInt(Ce.indent,10)===Ce.indent&&Ce.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(ae(Ce,"numericSeparator")&&typeof Ce.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var it=Ce.numericSeparator;if(typeof oe>"u")return"undefined";if(oe===null)return"null";if(typeof oe=="boolean")return oe?"true":"false";if(typeof oe=="string")return ce(oe,Ce);if(typeof oe=="number"){if(oe===0)return 1/0/oe>0?"0":"-0";var Ve=String(oe);return it?G(oe,Ve):Ve}if(typeof oe=="bigint"){var at=String(oe)+"n";return it?G(oe,at):at}var Ft=typeof Ce.depth>"u"?5:Ce.depth;if(typeof Ie>"u"&&(Ie=0),Ie>=Ft&&Ft>0&&typeof oe=="object")return ye(oe)?"[Array]":"[Object]";var ot=ee(Ce,Ie);if(typeof Te>"u")Te=[];else if(se(Te,oe)>=0)return"[Circular]";function nt(lt,St,Ot){if(St&&(Te=P.call(Te),Te.push(St)),Ot){var ct={depth:Ce.depth};return ae(Ce,"quoteStyle")&&(ct.quoteStyle=Ce.quoteStyle),Y(lt,ct,Ie+1,Te)}return Y(lt,Ce,Ie+1,Te)}if(typeof oe=="function"&&!re(oe)){var fn=W(oe),Dt=xe(oe,nt);return"[Function"+(fn?": "+fn:" (anonymous)")+"]"+(Dt.length>0?" { "+I.call(Dt,", ")+" }":"")}if(Q(oe)){var Zt=q?_.call(String(oe),/^(Symbol\(.*\))_[^)]*$/,"$1"):z.call(oe);return typeof oe=="object"&&!q?c(Zt):Zt}if(_e(oe)){for(var C="<"+y.call(String(oe.nodeName)),U=oe.attributes||[],ke=0;ke<U.length;ke++)C+=" "+U[ke].name+"="+R(Z(U[ke].value),"double",Ce);return C+=">",oe.childNodes&&oe.childNodes.length&&(C+="..."),C+="</"+y.call(String(oe.nodeName))+">",C}if(ye(oe)){if(oe.length===0)return"[]";var Se=xe(oe,nt);return ot&&!F(Se)?"["+fe(Se,ot)+"]":"[ "+I.call(Se,", ")+" ]"}if(H(oe)){var Ae=xe(oe,nt);return!("cause"in Error.prototype)&&"cause"in oe&&!le.call(oe,"cause")?"{ ["+String(oe)+"] "+I.call(x.call("[cause]: "+nt(oe.cause),Ae),", ")+" }":Ae.length===0?"["+String(oe)+"]":"{ ["+String(oe)+"] "+I.call(Ae,", ")+" }"}if(typeof oe=="object"&&st){if(te&&typeof oe[te]=="function"&&ie)return ie(oe,{depth:Ft-Ie});if(st!=="symbol"&&typeof oe.inspect=="function")return oe.inspect()}if(me(oe)){var ze=[];return a&&a.call(oe,function(lt,St){ze.push(nt(St,oe,!0)+" => "+nt(lt,oe))}),E("Map",o.call(oe),ze,ot)}if($(oe)){var Xe=[];return r&&r.call(oe,function(lt){Xe.push(nt(lt,oe))}),E("Set",t.call(oe),Xe,ot)}if(ge(oe))return w("WeakMap");if(ve(oe))return w("WeakSet");if(we(oe))return w("WeakRef");if(ne(oe))return c(nt(Number(oe)));if(V(oe))return c(nt(j.call(oe)));if(K(oe))return c(u.call(oe));if(M(oe))return c(nt(String(oe)));if(typeof window<"u"&&oe===window)return"{ [object Window] }";if(typeof globalThis<"u"&&oe===globalThis||typeof qn<"u"&&oe===qn)return"{ [object globalThis] }";if(!L(oe)&&!re(oe)){var rt=xe(oe,nt),en=X?X(oe)===Object.prototype:oe instanceof Object||oe.constructor===Object,tn=oe instanceof Object?"":"null prototype",nn=!en&&B&&Object(oe)===oe&&B in oe?b.call(N(oe),8,-1):tn?"Object":"",mn=en||typeof oe.constructor!="function"?"":oe.constructor.name?oe.constructor.name+" ":"",Pt=mn+(nn||tn?"["+I.call(x.call([],nn||[],tn||[]),": ")+"] ":"");return rt.length===0?Pt+"{}":ot?Pt+"{"+fe(rt,ot)+"}":Pt+"{ "+I.call(rt,", ")+" }"}return String(oe)};function R(Y,oe,Ee){var Ie=(Ee.quoteStyle||oe)==="double"?'"':"'";return Ie+Y+Ie}function Z(Y){return _.call(String(Y),/"/g,"&quot;")}function ye(Y){return N(Y)==="[object Array]"&&(!B||!(typeof Y=="object"&&B in Y))}function L(Y){return N(Y)==="[object Date]"&&(!B||!(typeof Y=="object"&&B in Y))}function re(Y){return N(Y)==="[object RegExp]"&&(!B||!(typeof Y=="object"&&B in Y))}function H(Y){return N(Y)==="[object Error]"&&(!B||!(typeof Y=="object"&&B in Y))}function M(Y){return N(Y)==="[object String]"&&(!B||!(typeof Y=="object"&&B in Y))}function ne(Y){return N(Y)==="[object Number]"&&(!B||!(typeof Y=="object"&&B in Y))}function K(Y){return N(Y)==="[object Boolean]"&&(!B||!(typeof Y=="object"&&B in Y))}function Q(Y){if(q)return Y&&typeof Y=="object"&&Y instanceof Symbol;if(typeof Y=="symbol")return!0;if(!Y||typeof Y!="object"||!z)return!1;try{return z.call(Y),!0}catch{}return!1}function V(Y){if(!Y||typeof Y!="object"||!j)return!1;try{return j.call(Y),!0}catch{}return!1}var de=Object.prototype.hasOwnProperty||function(Y){return Y in(this||qn)};function ae(Y,oe){return de.call(Y,oe)}function N(Y){return m.call(Y)}function W(Y){if(Y.name)return Y.name;var oe=k.call(v.call(Y),/^function\s*([\w$]+)/);return oe?oe[1]:null}function se(Y,oe){if(Y.indexOf)return Y.indexOf(oe);for(var Ee=0,Ie=Y.length;Ee<Ie;Ee++)if(Y[Ee]===oe)return Ee;return-1}function me(Y){if(!o||!Y||typeof Y!="object")return!1;try{o.call(Y);try{t.call(Y)}catch{return!0}return Y instanceof Map}catch{}return!1}function ge(Y){if(!s||!Y||typeof Y!="object")return!1;try{s.call(Y,s);try{g.call(Y,g)}catch{return!0}return Y instanceof WeakMap}catch{}return!1}function we(Y){if(!l||!Y||typeof Y!="object")return!1;try{return l.call(Y),!0}catch{}return!1}function $(Y){if(!t||!Y||typeof Y!="object")return!1;try{t.call(Y);try{o.call(Y)}catch{return!0}return Y instanceof Set}catch{}return!1}function ve(Y){if(!g||!Y||typeof Y!="object")return!1;try{g.call(Y,g);try{s.call(Y,s)}catch{return!0}return Y instanceof WeakSet}catch{}return!1}function _e(Y){return!Y||typeof Y!="object"?!1:typeof HTMLElement<"u"&&Y instanceof HTMLElement?!0:typeof Y.nodeName=="string"&&typeof Y.getAttribute=="function"}function ce(Y,oe){if(Y.length>oe.maxStringLength){var Ee=Y.length-oe.maxStringLength,Ie="... "+Ee+" more character"+(Ee>1?"s":"");return ce(b.call(Y,0,oe.maxStringLength),oe)+Ie}var Te=_.call(_.call(Y,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Me);return R(Te,"single",oe)}function Me(Y){var oe=Y.charCodeAt(0),Ee={8:"b",9:"t",10:"n",12:"f",13:"r"}[oe];return Ee?"\\"+Ee:"\\x"+(oe<16?"0":"")+A.call(oe.toString(16))}function c(Y){return"Object("+Y+")"}function w(Y){return Y+" { ? }"}function E(Y,oe,Ee,Ie){var Te=Ie?fe(Ee,Ie):I.call(Ee,", ");return Y+" ("+oe+") {"+Te+"}"}function F(Y){for(var oe=0;oe<Y.length;oe++)if(se(Y[oe],`
`)>=0)return!1;return!0}function ee(Y,oe){var Ee;if(Y.indent==="	")Ee="	";else if(typeof Y.indent=="number"&&Y.indent>0)Ee=I.call(Array(Y.indent+1)," ");else return null;return{base:Ee,prev:I.call(Array(oe+1),Ee)}}function fe(Y,oe){if(Y.length===0)return"";var Ee=`
`+oe.prev+oe.base;return Ee+I.call(Y,","+Ee)+`
`+oe.prev}function xe(Y,oe){var Ee=ye(Y),Ie=[];if(Ee){Ie.length=Y.length;for(var Te=0;Te<Y.length;Te++)Ie[Te]=ae(Y,Te)?oe(Y[Te],Y):""}var Ce=typeof T=="function"?T(Y):[],st;if(q){st={};for(var it=0;it<Ce.length;it++)st["$"+Ce[it]]=Ce[it]}for(var Ve in Y)ae(Y,Ve)&&(Ee&&String(Number(Ve))===Ve&&Ve<Y.length||q&&st["$"+Ve]instanceof Symbol||(S.call(/[^\w$]/,Ve)?Ie.push(oe(Ve,Y)+": "+oe(Y[Ve],Y)):Ie.push(Ve+": "+oe(Y[Ve],Y))));if(typeof T=="function")for(var at=0;at<Ce.length;at++)le.call(Y,Ce[at])&&Ie.push("["+oe(Ce[at])+"]: "+oe(Y[Ce[at]],Y));return Ie}return Ln}function xd(){if(Xs)return jn;Xs=!0;var d=Xt(),h=ld(),o=kd(),a=hn(),p=d("%WeakMap%",!0),n=d("%Map%",!0),t=h("WeakMap.prototype.get",!0),r=h("WeakMap.prototype.set",!0),e=h("WeakMap.prototype.has",!0),s=h("Map.prototype.get",!0),i=h("Map.prototype.set",!0),g=h("Map.prototype.has",!0),f=function(v,k){for(var b=v,_;(_=b.next)!==null;b=_)if(_.key===k)return b.next=_.next,_.next=v.next,v.next=_,_},l=function(v,k){var b=f(v,k);return b&&b.value},u=function(v,k,b){var _=f(v,k);_?_.value=b:v.next={key:k,next:v.next,value:b}},m=function(v,k){return!!f(v,k)};return jn=function(){var v,k,b,_={assert:function(A){if(!_.has(A))throw new a("Side channel does not contain "+o(A))},get:function(A){if(p&&A&&(typeof A=="object"||typeof A=="function")){if(v)return t(v,A)}else if(n){if(k)return s(k,A)}else if(b)return l(b,A)},has:function(A){if(p&&A&&(typeof A=="object"||typeof A=="function")){if(v)return e(v,A)}else if(n){if(k)return g(k,A)}else if(b)return m(b,A);return!1},set:function(A,y){p&&A&&(typeof A=="object"||typeof A=="function")?(v||(v=new p),r(v,A,y)):n?(k||(k=new n),i(k,A,y)):(b||(b={key:{},next:null}),u(b,A,y))}};return _},jn}function bi(){if(Zs)return Bn;Zs=!0;var d=String.prototype.replace,h=/%20/g,o={RFC1738:"RFC1738",RFC3986:"RFC3986"};return Bn={default:o.RFC3986,formatters:{RFC1738:function(a){return d.call(a,h,"+")},RFC3986:function(a){return String(a)}},RFC1738:o.RFC1738,RFC3986:o.RFC3986},Bn}function Ho(){if(ei)return Fn;ei=!0;var d=bi(),h=Object.prototype.hasOwnProperty,o=Array.isArray,a=(function(){for(var v=[],k=0;k<256;++k)v.push("%"+((k<16?"0":"")+k.toString(16)).toUpperCase());return v})(),p=function(v){for(;v.length>1;){var k=v.pop(),b=k.obj[k.prop];if(o(b)){for(var _=[],A=0;A<b.length;++A)typeof b[A]<"u"&&_.push(b[A]);k.obj[k.prop]=_}}},n=function(v,k){for(var b=k&&k.plainObjects?Object.create(null):{},_=0;_<v.length;++_)typeof v[_]<"u"&&(b[_]=v[_]);return b},t=function v(k,b,_){if(!b)return k;if(typeof b!="object"){if(o(k))k.push(b);else if(k&&typeof k=="object")(_&&(_.plainObjects||_.allowPrototypes)||!h.call(Object.prototype,b))&&(k[b]=!0);else return[k,b];return k}if(!k||typeof k!="object")return[k].concat(b);var A=k;return o(k)&&!o(b)&&(A=n(k,_)),o(k)&&o(b)?(b.forEach(function(y,S){if(h.call(k,S)){var x=k[S];x&&typeof x=="object"&&y&&typeof y=="object"?k[S]=v(x,y,_):k.push(y)}else k[S]=y}),k):Object.keys(b).reduce(function(y,S){var x=b[S];return h.call(y,S)?y[S]=v(y[S],x,_):y[S]=x,y},A)},r=function(v,k){return Object.keys(k).reduce(function(b,_){return b[_]=k[_],b},v)},e=function(v,k,b){var _=v.replace(/\+/g," ");if(b==="iso-8859-1")return _.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(_)}catch{return _}},s=1024,i=function(v,k,b,_,A){if(v.length===0)return v;var y=v;if(typeof v=="symbol"?y=Symbol.prototype.toString.call(v):typeof v!="string"&&(y=String(v)),b==="iso-8859-1")return escape(y).replace(/%u[0-9a-f]{4}/gi,function(T){return"%26%23"+parseInt(T.slice(2),16)+"%3B"});for(var S="",x=0;x<y.length;x+=s){for(var I=y.length>=s?y.slice(x,x+s):y,P=[],O=0;O<I.length;++O){var j=I.charCodeAt(O);if(j===45||j===46||j===95||j===126||j>=48&&j<=57||j>=65&&j<=90||j>=97&&j<=122||A===d.RFC1738&&(j===40||j===41)){P[P.length]=I.charAt(O);continue}if(j<128){P[P.length]=a[j];continue}if(j<2048){P[P.length]=a[192|j>>6]+a[128|j&63];continue}if(j<55296||j>=57344){P[P.length]=a[224|j>>12]+a[128|j>>6&63]+a[128|j&63];continue}O+=1,j=65536+((j&1023)<<10|I.charCodeAt(O)&1023),P[P.length]=a[240|j>>18]+a[128|j>>12&63]+a[128|j>>6&63]+a[128|j&63]}S+=P.join("")}return S},g=function(v){for(var k=[{obj:{o:v},prop:"o"}],b=[],_=0;_<k.length;++_)for(var A=k[_],y=A.obj[A.prop],S=Object.keys(y),x=0;x<S.length;++x){var I=S[x],P=y[I];typeof P=="object"&&P!==null&&b.indexOf(P)===-1&&(k.push({obj:y,prop:I}),b.push(P))}return p(k),v},f=function(v){return Object.prototype.toString.call(v)==="[object RegExp]"},l=function(v){return!v||typeof v!="object"?!1:!!(v.constructor&&v.constructor.isBuffer&&v.constructor.isBuffer(v))},u=function(v,k){return[].concat(v,k)},m=function(v,k){if(o(v)){for(var b=[],_=0;_<v.length;_+=1)b.push(k(v[_]));return b}return k(v)};return Fn={arrayToObject:n,assign:r,combine:u,compact:g,decode:e,encode:i,isBuffer:l,isRegExp:f,maybeMap:m,merge:t},Fn}function Sd(){if(ti)return Dn;ti=!0;var d=xd(),h=Ho(),o=bi(),a=Object.prototype.hasOwnProperty,p={brackets:function(m){return m+"[]"},comma:"comma",indices:function(m,v){return m+"["+v+"]"},repeat:function(m){return m}},n=Array.isArray,t=Array.prototype.push,r=function(m,v){t.apply(m,n(v)?v:[v])},e=Date.prototype.toISOString,s=o.default,i={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:h.encode,encodeValuesOnly:!1,format:s,formatter:o.formatters[s],indices:!1,serializeDate:function(m){return e.call(m)},skipNulls:!1,strictNullHandling:!1},g=function(m){return typeof m=="string"||typeof m=="number"||typeof m=="boolean"||typeof m=="symbol"||typeof m=="bigint"},f={},l=function m(v,k,b,_,A,y,S,x,I,P,O,j,T,z,q,B,le,X){for(var G=v,ie=X,D=0,te=!1;(ie=ie.get(f))!==void 0&&!te;){var R=ie.get(v);if(D+=1,typeof R<"u"){if(R===D)throw new RangeError("Cyclic object value");te=!0}typeof ie.get(f)>"u"&&(D=0)}if(typeof P=="function"?G=P(k,G):G instanceof Date?G=T(G):b==="comma"&&n(G)&&(G=h.maybeMap(G,function(N){return N instanceof Date?T(N):N})),G===null){if(y)return I&&!B?I(k,i.encoder,le,"key",z):k;G=""}if(g(G)||h.isBuffer(G)){if(I){var Z=B?k:I(k,i.encoder,le,"key",z);return[q(Z)+"="+q(I(G,i.encoder,le,"value",z))]}return[q(k)+"="+q(String(G))]}var ye=[];if(typeof G>"u")return ye;var L;if(b==="comma"&&n(G))B&&I&&(G=h.maybeMap(G,I)),L=[{value:G.length>0?G.join(",")||null:void 0}];else if(n(P))L=P;else{var re=Object.keys(G);L=O?re.sort(O):re}var H=x?k.replace(/\./g,"%2E"):k,M=_&&n(G)&&G.length===1?H+"[]":H;if(A&&n(G)&&G.length===0)return M+"[]";for(var ne=0;ne<L.length;++ne){var K=L[ne],Q=typeof K=="object"&&typeof K.value<"u"?K.value:G[K];if(!(S&&Q===null)){var V=j&&x?K.replace(/\./g,"%2E"):K,de=n(G)?typeof b=="function"?b(M,V):M:M+(j?"."+V:"["+V+"]");X.set(v,D);var ae=d();ae.set(f,X),r(ye,m(Q,de,b,_,A,y,S,x,b==="comma"&&B&&n(G)?null:I,P,O,j,T,z,q,B,le,ae))}}return ye},u=function(m){if(!m)return i;if(typeof m.allowEmptyArrays<"u"&&typeof m.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof m.encodeDotInKeys<"u"&&typeof m.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(m.encoder!==null&&typeof m.encoder<"u"&&typeof m.encoder!="function")throw new TypeError("Encoder has to be a function.");var v=m.charset||i.charset;if(typeof m.charset<"u"&&m.charset!=="utf-8"&&m.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var k=o.default;if(typeof m.format<"u"){if(!a.call(o.formatters,m.format))throw new TypeError("Unknown format option provided.");k=m.format}var b=o.formatters[k],_=i.filter;(typeof m.filter=="function"||n(m.filter))&&(_=m.filter);var A;if(m.arrayFormat in p?A=m.arrayFormat:"indices"in m?A=m.indices?"indices":"repeat":A=i.arrayFormat,"commaRoundTrip"in m&&typeof m.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var y=typeof m.allowDots>"u"?m.encodeDotInKeys===!0?!0:i.allowDots:!!m.allowDots;return{addQueryPrefix:typeof m.addQueryPrefix=="boolean"?m.addQueryPrefix:i.addQueryPrefix,allowDots:y,allowEmptyArrays:typeof m.allowEmptyArrays=="boolean"?!!m.allowEmptyArrays:i.allowEmptyArrays,arrayFormat:A,charset:v,charsetSentinel:typeof m.charsetSentinel=="boolean"?m.charsetSentinel:i.charsetSentinel,commaRoundTrip:m.commaRoundTrip,delimiter:typeof m.delimiter>"u"?i.delimiter:m.delimiter,encode:typeof m.encode=="boolean"?m.encode:i.encode,encodeDotInKeys:typeof m.encodeDotInKeys=="boolean"?m.encodeDotInKeys:i.encodeDotInKeys,encoder:typeof m.encoder=="function"?m.encoder:i.encoder,encodeValuesOnly:typeof m.encodeValuesOnly=="boolean"?m.encodeValuesOnly:i.encodeValuesOnly,filter:_,format:k,formatter:b,serializeDate:typeof m.serializeDate=="function"?m.serializeDate:i.serializeDate,skipNulls:typeof m.skipNulls=="boolean"?m.skipNulls:i.skipNulls,sort:typeof m.sort=="function"?m.sort:null,strictNullHandling:typeof m.strictNullHandling=="boolean"?m.strictNullHandling:i.strictNullHandling}};return Dn=function(m,v){var k=m,b=u(v),_,A;typeof b.filter=="function"?(A=b.filter,k=A("",k)):n(b.filter)&&(A=b.filter,_=A);var y=[];if(typeof k!="object"||k===null)return"";var S=p[b.arrayFormat],x=S==="comma"&&b.commaRoundTrip;_||(_=Object.keys(k)),b.sort&&_.sort(b.sort);for(var I=d(),P=0;P<_.length;++P){var O=_[P];b.skipNulls&&k[O]===null||r(y,l(k[O],O,S,x,b.allowEmptyArrays,b.strictNullHandling,b.skipNulls,b.encodeDotInKeys,b.encode?b.encoder:null,b.filter,b.sort,b.allowDots,b.serializeDate,b.format,b.formatter,b.encodeValuesOnly,b.charset,I))}var j=y.join(b.delimiter),T=b.addQueryPrefix===!0?"?":"";return b.charsetSentinel&&(b.charset==="iso-8859-1"?T+="utf8=%26%2310003%3B&":T+="utf8=%E2%9C%93&"),j.length>0?T+j:""},Dn}function Ad(){if(ni)return Wn;ni=!0;var d=Ho(),h=Object.prototype.hasOwnProperty,o=Array.isArray,a={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:d.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1},p=function(f){return f.replace(/&#(\d+);/g,function(l,u){return String.fromCharCode(parseInt(u,10))})},n=function(f,l){return f&&typeof f=="string"&&l.comma&&f.indexOf(",")>-1?f.split(","):f},t="utf8=%26%2310003%3B",r="utf8=%E2%9C%93",e=function(f,l){var u={__proto__:null},m=l.ignoreQueryPrefix?f.replace(/^\?/,""):f;m=m.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var v=l.parameterLimit===1/0?void 0:l.parameterLimit,k=m.split(l.delimiter,v),b=-1,_,A=l.charset;if(l.charsetSentinel)for(_=0;_<k.length;++_)k[_].indexOf("utf8=")===0&&(k[_]===r?A="utf-8":k[_]===t&&(A="iso-8859-1"),b=_,_=k.length);for(_=0;_<k.length;++_)if(_!==b){var y=k[_],S=y.indexOf("]="),x=S===-1?y.indexOf("="):S+1,I,P;x===-1?(I=l.decoder(y,a.decoder,A,"key"),P=l.strictNullHandling?null:""):(I=l.decoder(y.slice(0,x),a.decoder,A,"key"),P=d.maybeMap(n(y.slice(x+1),l),function(j){return l.decoder(j,a.decoder,A,"value")})),P&&l.interpretNumericEntities&&A==="iso-8859-1"&&(P=p(P)),y.indexOf("[]=")>-1&&(P=o(P)?[P]:P);var O=h.call(u,I);O&&l.duplicates==="combine"?u[I]=d.combine(u[I],P):(!O||l.duplicates==="last")&&(u[I]=P)}return u},s=function(f,l,u,m){for(var v=m?l:n(l,u),k=f.length-1;k>=0;--k){var b,_=f[k];if(_==="[]"&&u.parseArrays)b=u.allowEmptyArrays&&(v===""||u.strictNullHandling&&v===null)?[]:[].concat(v);else{b=u.plainObjects?Object.create(null):{};var A=_.charAt(0)==="["&&_.charAt(_.length-1)==="]"?_.slice(1,-1):_,y=u.decodeDotInKeys?A.replace(/%2E/g,"."):A,S=parseInt(y,10);!u.parseArrays&&y===""?b={0:v}:!isNaN(S)&&_!==y&&String(S)===y&&S>=0&&u.parseArrays&&S<=u.arrayLimit?(b=[],b[S]=v):y!=="__proto__"&&(b[y]=v)}v=b}return v},i=function(f,l,u,m){if(f){var v=u.allowDots?f.replace(/\.([^.[]+)/g,"[$1]"):f,k=/(\[[^[\]]*])/,b=/(\[[^[\]]*])/g,_=u.depth>0&&k.exec(v),A=_?v.slice(0,_.index):v,y=[];if(A){if(!u.plainObjects&&h.call(Object.prototype,A)&&!u.allowPrototypes)return;y.push(A)}for(var S=0;u.depth>0&&(_=b.exec(v))!==null&&S<u.depth;){if(S+=1,!u.plainObjects&&h.call(Object.prototype,_[1].slice(1,-1))&&!u.allowPrototypes)return;y.push(_[1])}if(_){if(u.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+u.depth+" and strictDepth is true");y.push("["+v.slice(_.index)+"]")}return s(y,l,u,m)}},g=function(f){if(!f)return a;if(typeof f.allowEmptyArrays<"u"&&typeof f.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof f.decodeDotInKeys<"u"&&typeof f.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(f.decoder!==null&&typeof f.decoder<"u"&&typeof f.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof f.charset<"u"&&f.charset!=="utf-8"&&f.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var l=typeof f.charset>"u"?a.charset:f.charset,u=typeof f.duplicates>"u"?a.duplicates:f.duplicates;if(u!=="combine"&&u!=="first"&&u!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var m=typeof f.allowDots>"u"?f.decodeDotInKeys===!0?!0:a.allowDots:!!f.allowDots;return{allowDots:m,allowEmptyArrays:typeof f.allowEmptyArrays=="boolean"?!!f.allowEmptyArrays:a.allowEmptyArrays,allowPrototypes:typeof f.allowPrototypes=="boolean"?f.allowPrototypes:a.allowPrototypes,allowSparse:typeof f.allowSparse=="boolean"?f.allowSparse:a.allowSparse,arrayLimit:typeof f.arrayLimit=="number"?f.arrayLimit:a.arrayLimit,charset:l,charsetSentinel:typeof f.charsetSentinel=="boolean"?f.charsetSentinel:a.charsetSentinel,comma:typeof f.comma=="boolean"?f.comma:a.comma,decodeDotInKeys:typeof f.decodeDotInKeys=="boolean"?f.decodeDotInKeys:a.decodeDotInKeys,decoder:typeof f.decoder=="function"?f.decoder:a.decoder,delimiter:typeof f.delimiter=="string"||d.isRegExp(f.delimiter)?f.delimiter:a.delimiter,depth:typeof f.depth=="number"||f.depth===!1?+f.depth:a.depth,duplicates:u,ignoreQueryPrefix:f.ignoreQueryPrefix===!0,interpretNumericEntities:typeof f.interpretNumericEntities=="boolean"?f.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:typeof f.parameterLimit=="number"?f.parameterLimit:a.parameterLimit,parseArrays:f.parseArrays!==!1,plainObjects:typeof f.plainObjects=="boolean"?f.plainObjects:a.plainObjects,strictDepth:typeof f.strictDepth=="boolean"?!!f.strictDepth:a.strictDepth,strictNullHandling:typeof f.strictNullHandling=="boolean"?f.strictNullHandling:a.strictNullHandling}};return Wn=function(f,l){var u=g(l);if(f===""||f===null||typeof f>"u")return u.plainObjects?Object.create(null):{};for(var m=typeof f=="string"?e(f,u):f,v=u.plainObjects?Object.create(null):{},k=Object.keys(m),b=0;b<k.length;++b){var _=k[b],A=i(_,m[_],u,typeof f=="string");v=d.merge(v,A,u)}return u.allowSparse===!0?v:d.compact(v)},Wn}function Ed(){if(ri)return zn;ri=!0;var d=Sd(),h=Ad(),o=bi();return zn={formats:o,parse:h,stringify:d},zn}function Id(){if(si)return Tt;si=!0;var d=It;function h(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var o=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,p=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,n=["<",">",'"',"`"," ","\r",`
`,"	"],t=["{","}","|","\\","^","`"].concat(n),r=["'"].concat(t),e=["%","/","?",";","#"].concat(r),s=["/","?","#"],i=255,g=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,l={javascript:!0,"javascript:":!0},u={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=Ed();function k(y,S,x){if(y&&typeof y=="object"&&y instanceof h)return y;var I=new h;return I.parse(y,S,x),I}h.prototype.parse=function(y,S,x){if(typeof y!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof y);var I=y.indexOf("?"),P=I!==-1&&I<y.indexOf("#")?"?":"#",O=y.split(P),j=/\\/g;O[0]=O[0].replace(j,"/"),y=O.join(P);var T=y;if(T=T.trim(),!x&&y.split("#").length===1){var z=p.exec(T);if(z)return this.path=T,this.href=T,this.pathname=z[1],z[2]?(this.search=z[2],S?this.query=v.parse(this.search.substr(1)):this.query=this.search.substr(1)):S&&(this.search="",this.query={}),this}var q=o.exec(T);if(q){q=q[0];var B=q.toLowerCase();this.protocol=B,T=T.substr(q.length)}if(x||q||T.match(/^\/\/[^@/]+@[^@/]+/)){var le=T.substr(0,2)==="//";le&&!(q&&u[q])&&(T=T.substr(2),this.slashes=!0)}if(!u[q]&&(le||q&&!m[q])){for(var X=-1,G=0;G<s.length;G++){var ie=T.indexOf(s[G]);ie!==-1&&(X===-1||ie<X)&&(X=ie)}var D,te;X===-1?te=T.lastIndexOf("@"):te=T.lastIndexOf("@",X),te!==-1&&(D=T.slice(0,te),T=T.slice(te+1),this.auth=decodeURIComponent(D)),X=-1;for(var G=0;G<e.length;G++){var ie=T.indexOf(e[G]);ie!==-1&&(X===-1||ie<X)&&(X=ie)}X===-1&&(X=T.length),this.host=T.slice(0,X),T=T.slice(X),this.parseHost(),this.hostname=this.hostname||"";var R=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!R)for(var Z=this.hostname.split(/\./),G=0,ye=Z.length;G<ye;G++){var L=Z[G];if(L&&!L.match(g)){for(var re="",H=0,M=L.length;H<M;H++)L.charCodeAt(H)>127?re+="x":re+=L[H];if(!re.match(g)){var ne=Z.slice(0,G),K=Z.slice(G+1),Q=L.match(f);Q&&(ne.push(Q[1]),K.unshift(Q[2])),K.length&&(T="/"+K.join(".")+T),this.hostname=ne.join(".");break}}}this.hostname.length>i?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=d.toASCII(this.hostname));var V=this.port?":"+this.port:"",de=this.hostname||"";this.host=de+V,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),T[0]!=="/"&&(T="/"+T))}if(!l[B])for(var G=0,ye=r.length;G<ye;G++){var ae=r[G];if(T.indexOf(ae)!==-1){var N=encodeURIComponent(ae);N===ae&&(N=escape(ae)),T=T.split(ae).join(N)}}var W=T.indexOf("#");W!==-1&&(this.hash=T.substr(W),T=T.slice(0,W));var se=T.indexOf("?");if(se!==-1?(this.search=T.substr(se),this.query=T.substr(se+1),S&&(this.query=v.parse(this.query)),T=T.slice(0,se)):S&&(this.search="",this.query={}),T&&(this.pathname=T),m[B]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var V=this.pathname||"",me=this.search||"";this.path=V+me}return this.href=this.format(),this};function b(y){return typeof y=="string"&&(y=k(y)),y instanceof h?y.format():h.prototype.format.call(y)}h.prototype.format=function(){var y=this.auth||"";y&&(y=encodeURIComponent(y),y=y.replace(/%3A/i,":"),y+="@");var S=this.protocol||"",x=this.pathname||"",I=this.hash||"",P=!1,O="";this.host?P=y+this.host:this.hostname&&(P=y+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(P+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(O=v.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var j=this.search||O&&"?"+O||"";return S&&S.substr(-1)!==":"&&(S+=":"),this.slashes||(!S||m[S])&&P!==!1?(P="//"+(P||""),x&&x.charAt(0)!=="/"&&(x="/"+x)):P||(P=""),I&&I.charAt(0)!=="#"&&(I="#"+I),j&&j.charAt(0)!=="?"&&(j="?"+j),x=x.replace(/[?#]/g,function(T){return encodeURIComponent(T)}),j=j.replace("#","%23"),S+P+x+j+I};function _(y,S){return k(y,!1,!0).resolve(S)}h.prototype.resolve=function(y){return this.resolveObject(k(y,!1,!0)).format()};function A(y,S){return y?k(y,!1,!0).resolveObject(S):S}return h.prototype.resolveObject=function(y){if(typeof y=="string"){var S=new h;S.parse(y,!1,!0),y=S}for(var x=new h,I=Object.keys(this),P=0;P<I.length;P++){var O=I[P];x[O]=this[O]}if(x.hash=y.hash,y.href==="")return x.href=x.format(),x;if(y.slashes&&!y.protocol){for(var j=Object.keys(y),T=0;T<j.length;T++){var z=j[T];z!=="protocol"&&(x[z]=y[z])}return m[x.protocol]&&x.hostname&&!x.pathname&&(x.pathname="/",x.path=x.pathname),x.href=x.format(),x}if(y.protocol&&y.protocol!==x.protocol){if(!m[y.protocol]){for(var q=Object.keys(y),B=0;B<q.length;B++){var le=q[B];x[le]=y[le]}return x.href=x.format(),x}if(x.protocol=y.protocol,!y.host&&!u[y.protocol]){for(var ye=(y.pathname||"").split("/");ye.length&&!(y.host=ye.shift()););y.host||(y.host=""),y.hostname||(y.hostname=""),ye[0]!==""&&ye.unshift(""),ye.length<2&&ye.unshift(""),x.pathname=ye.join("/")}else x.pathname=y.pathname;if(x.search=y.search,x.query=y.query,x.host=y.host||"",x.auth=y.auth,x.hostname=y.hostname||y.host,x.port=y.port,x.pathname||x.search){var X=x.pathname||"",G=x.search||"";x.path=X+G}return x.slashes=x.slashes||y.slashes,x.href=x.format(),x}var ie=x.pathname&&x.pathname.charAt(0)==="/",D=y.host||y.pathname&&y.pathname.charAt(0)==="/",te=D||ie||x.host&&y.pathname,R=te,Z=x.pathname&&x.pathname.split("/")||[],ye=y.pathname&&y.pathname.split("/")||[],L=x.protocol&&!m[x.protocol];if(L&&(x.hostname="",x.port=null,x.host&&(Z[0]===""?Z[0]=x.host:Z.unshift(x.host)),x.host="",y.protocol&&(y.hostname=null,y.port=null,y.host&&(ye[0]===""?ye[0]=y.host:ye.unshift(y.host)),y.host=null),te=te&&(ye[0]===""||Z[0]==="")),D)x.host=y.host||y.host===""?y.host:x.host,x.hostname=y.hostname||y.hostname===""?y.hostname:x.hostname,x.search=y.search,x.query=y.query,Z=ye;else if(ye.length)Z||(Z=[]),Z.pop(),Z=Z.concat(ye),x.search=y.search,x.query=y.query;else if(y.search!=null){if(L){x.host=Z.shift(),x.hostname=x.host;var re=x.host&&x.host.indexOf("@")>0?x.host.split("@"):!1;re&&(x.auth=re.shift(),x.hostname=re.shift(),x.host=x.hostname)}return x.search=y.search,x.query=y.query,(x.pathname!==null||x.search!==null)&&(x.path=(x.pathname?x.pathname:"")+(x.search?x.search:"")),x.href=x.format(),x}if(!Z.length)return x.pathname=null,x.search?x.path="/"+x.search:x.path=null,x.href=x.format(),x;for(var H=Z.slice(-1)[0],M=(x.host||y.host||Z.length>1)&&(H==="."||H==="..")||H==="",ne=0,K=Z.length;K>=0;K--)H=Z[K],H==="."?Z.splice(K,1):H===".."?(Z.splice(K,1),ne++):ne&&(Z.splice(K,1),ne--);if(!te&&!R)for(;ne--;ne)Z.unshift("..");te&&Z[0]!==""&&(!Z[0]||Z[0].charAt(0)!=="/")&&Z.unshift(""),M&&Z.join("/").substr(-1)!=="/"&&Z.push("");var Q=Z[0]===""||Z[0]&&Z[0].charAt(0)==="/";if(L){x.hostname=Q?"":Z.length?Z.shift():"",x.host=x.hostname;var re=x.host&&x.host.indexOf("@")>0?x.host.split("@"):!1;re&&(x.auth=re.shift(),x.hostname=re.shift(),x.host=x.hostname)}return te=te||x.host&&Z.length,te&&!Q&&Z.unshift(""),Z.length>0?x.pathname=Z.join("/"):(x.pathname=null,x.path=null),(x.pathname!==null||x.search!==null)&&(x.path=(x.pathname?x.pathname:"")+(x.search?x.search:"")),x.auth=y.auth||x.auth,x.slashes=x.slashes||y.slashes,x.href=x.format(),x},h.prototype.parseHost=function(){var y=this.host,S=a.exec(y);S&&(S=S[0],S!==":"&&(this.port=S.substr(1)),y=y.substr(0,y.length-S.length)),y&&(this.hostname=y)},Tt.parse=k,Tt.resolve=_,Tt.resolveObject=A,Tt.format=b,Tt.Url=h,Tt}function $o(d){if(typeof d=="string")d=new URL(d);else if(!(d instanceof URL))throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");if(d.protocol!=="file:")throw new Deno.errors.InvalidData("invalid url scheme");return Kn?Td(d):Md(d)}function Td(d){let h=d.hostname,o=d.pathname;for(let a=0;a<o.length;a++)if(o[a]==="%"){let p=o.codePointAt(a+2)||32;if(o[a+1]==="2"&&p===102||o[a+1]==="5"&&p===99)throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")}if(o=o.replace(sl,"\\"),o=decodeURIComponent(o),h!=="")return`\\\\${h}${o}`;{let a=o.codePointAt(1)|32,p=o[2];if(a<nl||a>rl||p!==":")throw new Deno.errors.InvalidData("file url path must be absolute");return o.slice(1)}}function Md(d){if(d.hostname!=="")throw new Deno.errors.InvalidData("invalid file url hostname");let h=d.pathname;for(let o=0;o<h.length;o++)if(h[o]==="%"){let a=h.codePointAt(o+2)||32;if(h[o+1]==="2"&&a===102)throw new Deno.errors.InvalidData("must not include encoded / characters")}return decodeURIComponent(h)}function Ko(d){let h=Ys.resolve(d),o=d.charCodeAt(d.length-1);(o===tl||Kn&&o===el)&&h[h.length-1]!==Ys.sep&&(h+="/");let a=new URL("file://");return h.includes("%")&&(h=h.replace(il,"%25")),!Kn&&h.includes("\\")&&(h=h.replace(al,"%5C")),h.includes(`
`)&&(h=h.replace(ol,"%0A")),h.includes("\r")&&(h=h.replace(ll,"%0D")),h.includes("	")&&(h=h.replace(cl,"%09")),a.pathname=h,a}var Vo,Ln,Js,qn,jn,Xs,Bn,Zs,Fn,ei,Dn,ti,Wn,ni,zn,ri,Tt,si,Ye,Ta,Qo,Go,Yo,Jo,Xo,Zo,el,tl,nl,rl,Kn,sl,il,al,ol,ll,cl,Cd=tt(()=>{ue(),he(),pe(),Vc(),cd(),_d(),Wo(),Vo=Object.freeze(Object.create(null)),Ln={},Js=!1,qn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:global,jn={},Xs=!1,Bn={},Zs=!1,Fn={},ei=!1,Dn={},ti=!1,Wn={},ni=!1,zn={},ri=!1,Tt={},si=!1,Ye=Id(),Ye.parse,Ye.resolve,Ye.resolveObject,Ye.format,Ye.Url,Ta=typeof Deno<"u"?Deno.build.os==="windows"?"win32":Deno.build.os:void 0,Ye.URL=typeof URL<"u"?URL:null,Ye.pathToFileURL=Ko,Ye.fileURLToPath=$o,Qo=Ye.Url,Go=Ye.format,Yo=Ye.resolve,Jo=Ye.resolveObject,Xo=Ye.parse,Zo=Ye.URL,el=92,tl=47,nl=97,rl=122,Kn=Ta==="win32",sl=/\//g,il=/%/g,al=/\\/g,ol=/\n/g,ll=/\r/g,cl=/\t/g}),Pd=be((d,h)=>{ue(),he(),pe(),h.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}}),vi=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0}),d.BufferedDuplex=void 0,d.writev=a;var h=Bt(),o=(Ke(),Ue($e));function a(n,t){let r=new Array(n.length);for(let e=0;e<n.length;e++)typeof n[e].chunk=="string"?r[e]=o.Buffer.from(n[e].chunk,"utf8"):r[e]=n[e].chunk;this._write(o.Buffer.concat(r),"binary",t)}var p=class extends h.Duplex{socket;proxy;isSocketOpen;writeQueue;constructor(n,t,r){super({objectMode:!0}),this.proxy=t,this.socket=r,this.writeQueue=[],n.objectMode||(this._writev=a.bind(this)),this.isSocketOpen=!1,this.proxy.on("data",e=>{!this.destroyed&&this.readable&&this.push(e)})}_read(n){this.proxy.read(n)}_write(n,t,r){this.isSocketOpen?this.writeToProxy(n,t,r):this.writeQueue.push({chunk:n,encoding:t,cb:r})}_final(n){this.writeQueue=[],this.proxy.end(n)}_destroy(n,t){this.writeQueue=[],this.proxy.destroy(),t(n)}socketReady(){this.emit("connect"),this.isSocketOpen=!0,this.processWriteQueue()}writeToProxy(n,t,r){this.proxy.write(n,t)===!1?this.proxy.once("drain",r):r()}processWriteQueue(){for(;this.writeQueue.length>0;){let{chunk:n,encoding:t,cb:r}=this.writeQueue.shift();this.writeToProxy(n,t,r)}}};d.BufferedDuplex=p}),bn=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(d,"__esModule",{value:!0}),d.streamBuilder=d.browserStreamBuilder=void 0;var o=(Ke(),Ue($e)),a=h(Pd()),p=h(wt()),n=Bt(),t=h(Zn()),r=vi(),e=(0,p.default)("mqttjs:ws"),s=["rejectUnauthorized","ca","cert","key","pfx","passphrase"];function i(k,b){let _=`${k.protocol}://${k.hostname}:${k.port}${k.path}`;return typeof k.transformWsUrl=="function"&&(_=k.transformWsUrl(_,k,b)),_}function g(k){let b=k;return k.port||(k.protocol==="wss"?b.port=443:b.port=80),k.path||(b.path="/"),k.wsOptions||(b.wsOptions={}),!t.default&&!k.forceNativeWebSocket&&k.protocol==="wss"&&s.forEach(_=>{Object.prototype.hasOwnProperty.call(k,_)&&!Object.prototype.hasOwnProperty.call(k.wsOptions,_)&&(b.wsOptions[_]=k[_])}),b}function f(k){let b=g(k);if(b.hostname||(b.hostname=b.host),!b.hostname){if(typeof document>"u")throw new Error("Could not determine host. Specify host manually.");let _=new URL(document.URL);b.hostname=_.hostname,b.port||(b.port=Number(_.port))}return b.objectMode===void 0&&(b.objectMode=!(b.binary===!0||b.binary===void 0)),b}function l(k,b,_){e("createWebSocket"),e(`protocol: ${_.protocolId} ${_.protocolVersion}`);let A=_.protocolId==="MQIsdp"&&_.protocolVersion===3?"mqttv3.1":"mqtt";e(`creating new Websocket for url: ${b} and protocol: ${A}`);let y;return _.createWebsocket?y=_.createWebsocket(b,[A],_):y=new a.default(b,[A],_.wsOptions),y}function u(k,b){let _=b.protocolId==="MQIsdp"&&b.protocolVersion===3?"mqttv3.1":"mqtt",A=i(b,k),y;return b.createWebsocket?y=b.createWebsocket(A,[_],b):y=new WebSocket(A,[_]),y.binaryType="arraybuffer",y}var m=(k,b)=>{e("streamBuilder");let _=g(b);_.hostname=_.hostname||_.host||"localhost";let A=i(_,k),y=l(k,A,_),S=a.default.createWebSocketStream(y,_.wsOptions);return S.url=A,y.on("close",()=>{S.destroy()}),S};d.streamBuilder=m;var v=(k,b)=>{e("browserStreamBuilder");let _,A=f(b).browserBufferSize||1024*512,y=b.browserBufferTimeout||1e3,S=!b.objectMode,x=u(k,b),I=O(b,B,le);b.objectMode||(I._writev=r.writev.bind(I)),I.on("close",()=>{x.close()});let P=typeof x.addEventListener<"u";x.readyState===x.OPEN?(_=I,_.socket=x):(_=new r.BufferedDuplex(b,I,x),P?x.addEventListener("open",j):x.onopen=j),P?(x.addEventListener("close",T),x.addEventListener("error",z),x.addEventListener("message",q)):(x.onclose=T,x.onerror=z,x.onmessage=q);function O(X,G,ie){let D=new n.Transform({objectMode:X.objectMode});return D._write=G,D._flush=ie,D}function j(){e("WebSocket onOpen"),_ instanceof r.BufferedDuplex&&_.socketReady()}function T(X){e("WebSocket onClose",X),_.end(),_.destroy()}function z(X){e("WebSocket onError",X);let G=new Error("WebSocket error");G.event=X,_.destroy(G)}async function q(X){if(!I||!I.readable||!I.writable)return;let{data:G}=X;G instanceof ArrayBuffer?G=o.Buffer.from(G):G instanceof Blob?G=o.Buffer.from(await new Response(G).arrayBuffer()):G=o.Buffer.from(G,"utf8"),I.push(G)}function B(X,G,ie){if(x.bufferedAmount>A){setTimeout(B,y,X,G,ie);return}S&&typeof X=="string"&&(X=o.Buffer.from(X,"utf8"));try{x.send(X)}catch(D){return ie(D)}ie()}function le(X){x.close(),X()}return _};d.browserStreamBuilder=v}),yi={};Gt(yi,{Server:()=>Be,Socket:()=>Be,Stream:()=>Be,_createServerHandle:()=>Be,_normalizeArgs:()=>Be,_setSimultaneousAccepts:()=>Be,connect:()=>Be,createConnection:()=>Be,createServer:()=>Be,default:()=>dl,isIP:()=>Be,isIPv4:()=>Be,isIPv6:()=>Be});function Be(){throw new Error("Node.js net module is not supported by JSPM core outside of Node.js")}var dl,ul=tt(()=>{ue(),he(),pe(),dl={_createServerHandle:Be,_normalizeArgs:Be,_setSimultaneousAccepts:Be,connect:Be,createConnection:Be,createServer:Be,isIP:Be,isIPv4:Be,isIPv6:Be,Server:Be,Socket:Be,Stream:Be}}),pl=be((d,h)=>{ue(),he(),pe(),h.exports={}}),Ma=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(d,"__esModule",{value:!0});var o=h((ul(),Ue(yi))),a=h(wt()),p=h(pl()),n=(0,a.default)("mqttjs:tcp"),t=(r,e)=>{if(e.port=e.port||1883,e.hostname=e.hostname||e.host||"localhost",e.socksProxy)return(0,p.default)(e.hostname,e.port,e.socksProxy,{timeout:e.socksTimeout});let{port:s,path:i}=e,g=e.hostname;return n("port %d and host %s",s,g),o.default.createConnection({port:s,host:g,path:i})};d.default=t}),hl={};Gt(hl,{default:()=>fl});var fl,Od=tt(()=>{ue(),he(),pe(),fl={}}),Ca=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(d,"__esModule",{value:!0});var o=(Od(),Ue(hl)),a=h((ul(),Ue(yi))),p=h(wt()),n=h(pl()),t=(0,p.default)("mqttjs:tls");function r(s){let{host:i,port:g,socksProxy:f,...l}=s;if(f!==void 0){let u=(0,n.default)(i,g,f,{timeout:s.socksTimeout});return(0,o.connect)({...l,socket:u})}return(0,o.connect)(s)}var e=(s,i)=>{i.port=i.port||8883,i.host=i.hostname||i.host||"localhost",a.default.isIP(i.host)===0&&(i.servername=i.host),i.rejectUnauthorized=i.rejectUnauthorized!==!1,delete i.path,t("port %d host %s rejectUnauthorized %b",i.port,i.host,i.rejectUnauthorized);let g=r(i);g.on("secureConnect",()=>{i.rejectUnauthorized&&!g.authorized?g.emit("error",new Error("TLS not authorized")):g.removeListener("error",f)});function f(l){i.rejectUnauthorized&&s.emit("error",l),g.end()}return g.on("error",f),g};d.default=e}),Pa=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=(Ke(),Ue($e)),o=Bt(),a=vi(),p,n,t;function r(){let f=new o.Transform;return f._write=(l,u,m)=>{p.send({data:l.buffer,success(){m()},fail(v){m(new Error(v))}})},f._flush=l=>{p.close({success(){l()}})},f}function e(f){f.hostname||(f.hostname="localhost"),f.path||(f.path="/"),f.wsOptions||(f.wsOptions={})}function s(f,l){let u=f.protocol==="wxs"?"wss":"ws",m=`${u}://${f.hostname}${f.path}`;return f.port&&f.port!==80&&f.port!==443&&(m=`${u}://${f.hostname}:${f.port}${f.path}`),typeof f.transformWsUrl=="function"&&(m=f.transformWsUrl(m,f,l)),m}function i(){p.onOpen(()=>{t.socketReady()}),p.onMessage(f=>{let{data:l}=f;l instanceof ArrayBuffer?l=h.Buffer.from(l):l=h.Buffer.from(l,"utf8"),n.push(l)}),p.onClose(()=>{t.emit("close"),t.end(),t.destroy()}),p.onError(f=>{let l=new Error(f.errMsg);t.destroy(l)})}var g=(f,l)=>{if(l.hostname=l.hostname||l.host,!l.hostname)throw new Error("Could not determine host. Specify host manually.");let u=l.protocolId==="MQIsdp"&&l.protocolVersion===3?"mqttv3.1":"mqtt";e(l);let m=s(l,f);p=wx.connectSocket({url:m,protocols:[u]}),n=r(),t=new a.BufferedDuplex(l,n,p),t._destroy=(k,b)=>{p.close({success(){b&&b(k)}})};let v=t.destroy;return t.destroy=(k,b)=>(t.destroy=v,setTimeout(()=>{p.close({fail(){t._destroy(k,b)}})},0),t),i(),t};d.default=g}),Oa=be(d=>{ue(),he(),pe(),Object.defineProperty(d,"__esModule",{value:!0});var h=(Ke(),Ue($e)),o=Bt(),a=vi(),p,n,t,r=!1;function e(){let l=new o.Transform;return l._write=(u,m,v)=>{p.sendSocketMessage({data:u.buffer,success(){v()},fail(){v(new Error)}})},l._flush=u=>{p.closeSocket({success(){u()}})},l}function s(l){l.hostname||(l.hostname="localhost"),l.path||(l.path="/"),l.wsOptions||(l.wsOptions={})}function i(l,u){let m=l.protocol==="alis"?"wss":"ws",v=`${m}://${l.hostname}${l.path}`;return l.port&&l.port!==80&&l.port!==443&&(v=`${m}://${l.hostname}:${l.port}${l.path}`),typeof l.transformWsUrl=="function"&&(v=l.transformWsUrl(v,l,u)),v}function g(){r||(r=!0,p.onSocketOpen(()=>{t.socketReady()}),p.onSocketMessage(l=>{if(typeof l.data=="string"){let u=h.Buffer.from(l.data,"base64");n.push(u)}else{let u=new FileReader;u.addEventListener("load",()=>{if(u.result instanceof ArrayBuffer){n.push(h.Buffer.from(u.result));return}n.push(h.Buffer.from(u.result,"utf-8"))}),u.readAsArrayBuffer(l.data)}}),p.onSocketClose(()=>{t.end(),t.destroy()}),p.onSocketError(l=>{t.destroy(l)}))}var f=(l,u)=>{if(u.hostname=u.hostname||u.host,!u.hostname)throw new Error("Could not determine host. Specify host manually.");let m=u.protocolId==="MQIsdp"&&u.protocolVersion===3?"mqttv3.1":"mqtt";s(u);let v=i(u,l);return p=u.my,p.connectSocket({url:v,protocols:m}),n=e(),t=new a.BufferedDuplex(u,n,p),g(),t};d.default=f}),Nd=be(d=>{ue(),he(),pe();var h=d&&d.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(d,"__esModule",{value:!0}),d.connectAsync=i;var o=h(wt()),a=h((Cd(),Ue(zo))),p=h(bs()),n=h(Zn());typeof qe?.nextTick!="function"&&(qe.nextTick=setImmediate);var t=(0,o.default)("mqttjs"),r=null;function e(g){let f;if(g.auth)if(f=g.auth.match(/^(.+):(.+)$/),f){let[,l,u]=f;g.username=l,g.password=u}else g.username=g.auth}function s(g,f){if(t("connecting to an MQTT broker..."),typeof g=="object"&&!f&&(f=g,g=""),f=f||{},g&&typeof g=="string"){let m=a.default.parse(g,!0),v={};if(m.port!=null&&(v.port=Number(m.port)),v.host=m.hostname,v.query=m.query,v.auth=m.auth,v.protocol=m.protocol,v.path=m.path,f={...v,...f},!f.protocol)throw new Error("Missing protocol");f.protocol=f.protocol.replace(/:$/,"")}if(f.unixSocket=f.unixSocket||f.protocol?.includes("+unix"),f.unixSocket?f.protocol=f.protocol.replace("+unix",""):!f.protocol?.startsWith("ws")&&!f.protocol?.startsWith("wx")&&delete f.path,e(f),f.query&&typeof f.query.clientId=="string"&&(f.clientId=f.query.clientId),n.default||f.unixSocket?f.socksProxy=void 0:f.socksProxy===void 0&&typeof qe<"u"&&(f.socksProxy=qe.env.MQTTJS_SOCKS_PROXY),f.cert&&f.key)if(f.protocol){if(["mqtts","wss","wxs","alis"].indexOf(f.protocol)===-1)switch(f.protocol){case"mqtt":f.protocol="mqtts";break;case"ws":f.protocol="wss";break;case"wx":f.protocol="wxs";break;case"ali":f.protocol="alis";break;default:throw new Error(`Unknown protocol for secure connection: "${f.protocol}"!`)}}else throw new Error("Missing secure protocol key");if(r||(r={},!n.default&&!f.forceNativeWebSocket?(r.ws=bn().streamBuilder,r.wss=bn().streamBuilder,r.mqtt=Ma().default,r.tcp=Ma().default,r.ssl=Ca().default,r.tls=r.ssl,r.mqtts=Ca().default):(r.ws=bn().browserStreamBuilder,r.wss=bn().browserStreamBuilder,r.wx=Pa().default,r.wxs=Pa().default,r.ali=Oa().default,r.alis=Oa().default)),!r[f.protocol]){let m=["mqtts","wss"].indexOf(f.protocol)!==-1;f.protocol=["mqtt","mqtts","ws","wss","wx","wxs","ali","alis"].filter((v,k)=>m&&k%2===0?!1:typeof r[v]=="function")[0]}if(f.clean===!1&&!f.clientId)throw new Error("Missing clientId for unclean clients");f.protocol&&(f.defaultProtocol=f.protocol);function l(m){return f.servers&&((!m._reconnectCount||m._reconnectCount===f.servers.length)&&(m._reconnectCount=0),f.host=f.servers[m._reconnectCount].host,f.port=f.servers[m._reconnectCount].port,f.protocol=f.servers[m._reconnectCount].protocol?f.servers[m._reconnectCount].protocol:f.defaultProtocol,f.hostname=f.host,m._reconnectCount++),t("calling streambuilder for",f.protocol),r[f.protocol](m,f)}let u=new p.default(l,f);return u.on("error",()=>{}),u}function i(g,f,l=!0){return new Promise((u,m)=>{let v=s(g,f),k={connect:_=>{b(),u(v)},end:()=>{b(),u(v)},error:_=>{b(),v.end(),m(_)}};l===!1&&(k.close=()=>{k.error(new Error("Couldn't connect to server"))});function b(){Object.keys(k).forEach(_=>{v.off(_,k[_])})}Object.keys(k).forEach(_=>{v.on(_,k[_])})})}d.default=s}),Na=be(d=>{ue(),he(),pe();var h=d&&d.__createBinding||(Object.create?function(l,u,m,v){v===void 0&&(v=m);var k=Object.getOwnPropertyDescriptor(u,m);(!k||("get"in k?!u.__esModule:k.writable||k.configurable))&&(k={enumerable:!0,get:function(){return u[m]}}),Object.defineProperty(l,v,k)}:function(l,u,m,v){v===void 0&&(v=m),l[v]=u[m]}),o=d&&d.__setModuleDefault||(Object.create?function(l,u){Object.defineProperty(l,"default",{enumerable:!0,value:u})}:function(l,u){l.default=u}),a=d&&d.__importStar||(function(){var l=function(u){return l=Object.getOwnPropertyNames||function(m){var v=[];for(var k in m)Object.prototype.hasOwnProperty.call(m,k)&&(v[v.length]=k);return v},l(u)};return function(u){if(u&&u.__esModule)return u;var m={};if(u!=null)for(var v=l(u),k=0;k<v.length;k++)v[k]!=="default"&&h(m,u,v[k]);return o(m,u),m}})(),p=d&&d.__exportStar||function(l,u){for(var m in l)m!=="default"&&!Object.prototype.hasOwnProperty.call(u,m)&&h(u,l,m)},n=d&&d.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(d,"__esModule",{value:!0}),d.ReasonCodes=d.KeepaliveManager=d.UniqueMessageIdProvider=d.DefaultMessageIdProvider=d.Store=d.MqttClient=d.connectAsync=d.connect=d.Client=void 0;var t=n(bs());d.MqttClient=t.default;var r=n(Co());d.DefaultMessageIdProvider=r.default;var e=n($c());d.UniqueMessageIdProvider=e.default;var s=n(ho());d.Store=s.default;var i=a(Nd());d.connect=i.default,Object.defineProperty(d,"connectAsync",{enumerable:!0,get:function(){return i.connectAsync}});var g=n(qo());d.KeepaliveManager=g.default,d.Client=t.default,p(bs(),d),p(Jt(),d),p(po(),d);var f=Jn();Object.defineProperty(d,"ReasonCodes",{enumerable:!0,get:function(){return f.ReasonCodes}})}),Rd=be(d=>{ue(),he(),pe();var h=d&&d.__createBinding||(Object.create?function(t,r,e,s){s===void 0&&(s=e);var i=Object.getOwnPropertyDescriptor(r,e);(!i||("get"in i?!r.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(t,s,i)}:function(t,r,e,s){s===void 0&&(s=e),t[s]=r[e]}),o=d&&d.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,"default",{enumerable:!0,value:r})}:function(t,r){t.default=r}),a=d&&d.__importStar||(function(){var t=function(r){return t=Object.getOwnPropertyNames||function(e){var s=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[s.length]=i);return s},t(r)};return function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var s=t(r),i=0;i<s.length;i++)s[i]!=="default"&&h(e,r,s[i]);return o(e,r),e}})(),p=d&&d.__exportStar||function(t,r){for(var e in t)e!=="default"&&!Object.prototype.hasOwnProperty.call(r,e)&&h(r,t,e)};Object.defineProperty(d,"__esModule",{value:!0});var n=a(Na());d.default=n,p(Na(),d)});Rd();const ii=d=>({tc1:"TC1 智能插排",m1:"M1 空气质量检测器",a1:"A1 空气净化器"})[d.model]||"设备",ir=(d,h=0)=>d!=null&&d!==""&&Number.isFinite(Number(d))?Number(d).toFixed(h):"—";function Ud(d,h={},o=!1,a=Date.now()){if(!o)return"尚未连接";if(h.available===!1)return"设备离线";if(d.model==="tc1"){const n=h.socket_states||Array.from({length:6},(e,s)=>h[`plug_${s}`]?.on),t=n.length===6&&n.every(e=>e!=null),r=h.power_watts??h.power;return!t&&r===void 0?"等待设备数据":[r!==void 0?ir(r,1)+" W":null,t?`${n.filter(Boolean).length} 开 · ${n.filter(e=>!e).length} 关`:null].filter(Boolean).join(" · ")}if(d.model==="m1")return!h.sensor_valid||!h.sensorAt||a-h.sensorAt>6e4||!Number.isFinite(Number(h.pm25))?"等待有效空气数据":`${Number(h.pm25)>75||Number(h.formaldehyde)>.1?"空气较差":Number(h.pm25)>35||Number(h.formaldehyde)>.08?"空气一般":"空气良好"} · PM2.5 ${ir(h.pm25)}`;if(h.fan_on===void 0)return"等待设备数据";const p=h.applied_speed??h.percentage??h.speed;return`${h.fan_on?"运行 "+ir(p)+"%":"已停止"} · ${h.led_enabled===void 0?"灯光未知":h.led_enabled?"灯光开启":"灯光关闭"}`}const Ld={class:"device-summary"},qd={class:"summary-icon"},jd={class:"summary-copy"},Bd={class:"summary-type"},Fd={__name:"DeviceSummary",props:{device:Object,state:Object,name:String,connected:Boolean,now:Number},setup(d){const h=d,o=Hn(()=>Ud(h.device,h.state,h.connected,h.now));return(a,p)=>(Pe(),Ne("span",Ld,[J("span",qd,[Le(De,{name:d.device.model==="m1"?"air":d.device.model==="a1"?"fan":"plug",size:22},null,8,["name"])]),J("span",jd,[J("b",null,Oe(d.name),1),J("small",Bd,Oe(Je(ii)(d.device)),1),J("span",{class:Qt(["summary-reading",{muted:!d.connected||d.state?.available===!1}])},Oe(o.value),3)])]))}},ml=Vn(Fd,[["__scopeId","data-v-8a42031e"]]),Dd=["disabled"],Wd={key:0,class:"help"},zd={key:1,role:"alert",class:"error"},Hd=["disabled"],$d=["disabled"],Kd=["disabled"],Vd={__name:"DeviceNameDialog",emits:["save"],setup(d,{expose:h,emit:o}){const a=o,p=je(),n=je(),t=je(""),r=je(""),e=je(!1);function s(g,f){n.value=g,t.value=f,r.value="",p.value.showModal()}function i(g=t.value.trim()){if(r.value="",g&&new TextEncoder().encode(g).length>63){r.value="名称不能超过 63 字节。";return}e.value=!0,a("save",n.value,g,f=>{e.value=!1,f?r.value=f:p.value.close()})}return h({open:s}),(g,f)=>(Pe(),Ne("dialog",{ref_key:"dialog",ref:p,class:"rename-dialog",onCancel:f[4]||(f[4]=l=>e.value&&l.preventDefault())},[J("form",{onSubmit:f[3]||(f[3]=vn(l=>i(),["prevent"]))},[f[6]||(f[6]=J("h2",null,"修改设备名称",-1)),f[7]||(f[7]=J("p",{class:"help"},"使用容易辨认的名称，例如“客厅净化器”。",-1)),J("label",null,[f[5]||(f[5]=He("设备名称",-1)),ht(J("input",{"onUpdate:modelValue":f[0]||(f[0]=l=>t.value=l),maxlength:"63",disabled:e.value,autofocus:""},null,8,Dd),[[zt,t.value]])]),n.value?.version==="v1"?(Pe(),Ne("p",Wd,"旧版设备的名称保存在当前浏览器中。")):vt("",!0),r.value?(Pe(),Ne("p",zd,Oe(r.value),1)):vt("",!0),J("footer",null,[J("button",{class:"btn ghost",type:"button",disabled:e.value,onClick:f[1]||(f[1]=l=>i(""))},"恢复默认名称",8,Hd),J("button",{class:"btn",type:"button",disabled:e.value,onClick:f[2]||(f[2]=l=>p.value.close())},"取消",8,$d),J("button",{class:"btn primary",disabled:e.value},Oe(e.value?"保存中…":"保存名称"),9,Kd)])],32)],544))}},Qd=Vn(Vd,[["__scopeId","data-v-ee85dc5f"]]),Gd={tc1:`<!doctype html>
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
  let timer=null,last=null;
  function translate(){check.textContent=t('fw.check');install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const option of source.options)option.textContent=t('fw.source_'+option.value);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
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
  online.append(h('h2',{i18n:'fw.online'}),source,h('div',{class:'row'},check,install),latest,notes);
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

<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.source_cn':['Mainland China mirror','境内镜像'],'fw.source_global':['Global server','境外服务器'],
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
  let timer=null,last=null;
  function translate(){check.textContent=t('fw.check');install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const option of source.options)option.textContent=t('fw.source_'+option.value);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
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
  online.append(h('h2',{i18n:'fw.online'}),source,h('div',{class:'row'},check,install),latest,notes);
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
 const previewSpeed=$('previewSpeed');
 if(previewSpeed&&document.activeElement!==previewSpeed){const value=s.fan_on?s.percentage:s.requested_speed;previewSpeed.value=value;$('previewSpeedValue').textContent=value+'%';}
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
api('/light/advanced').then(a=>{advanced=a;updateRingAnimation();if(UI.state)renderLight(UI.state);}).catch(e=>toast(e.message,true));
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
  let timer=null,last=null;
  function translate(){check.textContent=t('fw.check');install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const option of source.options)option.textContent=t('fw.source_'+option.value);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
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
  online.append(h('h2',{i18n:'fw.online'}),source,h('div',{class:'row'},check,install),latest,notes);
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
`},Yd=["srcdoc","title"],Jd={__name:"DeviceHome",props:{device:Object},emits:["command","settings"],setup(d,{expose:h,emit:o}){const a=d,p=o,n=je(),t=je(700);function r(e){if(e.source!==n.value?.contentWindow||e.origin!==location.origin)return;if(e.data?.type==="device-height"){t.value=Math.max(200,Math.min(12e3,Number(e.data.height)||700));return}if(e.data?.type==="device-settings"){p("settings");return}if(e.data?.type!=="device-command")return;const{id:s,request:i}=e.data,g=e.source;p("command",i,f=>{n.value?.contentWindow===g&&g.postMessage({type:"device-result",id:s,reply:JSON.parse(JSON.stringify(f))},location.origin)})}return h({refresh:()=>n.value?.contentWindow?.UI?.reload()}),Ra(()=>window.addEventListener("message",r)),Ua(()=>window.removeEventListener("message",r)),(e,s)=>(Pe(),Ne("iframe",{ref_key:"frame",ref:n,class:"device-home",style:gl({height:t.value+"px"}),srcdoc:Je(Gd)[a.device.model],title:`${a.device.model.toUpperCase()} 首页`,sandbox:"allow-scripts allow-same-origin allow-modals"},null,12,Yd))}},Xd=Vn(Jd,[["__scopeId","data-v-72bddd4e"]]),Zd={class:"settings-heading"},eu={class:"settings-layout"},tu={class:"settings-sidebar"},nu={class:"settings-navigation","aria-label":"设置分类"},ru=["aria-current","onClick"],su={class:"settings-context"},iu={class:"settings-content"},au={class:"card settings-card"},ou={class:"settings-card-heading"},lu={class:"settings-icon"},cu={key:0,class:"settings-block"},du={class:"broker-options",role:"radiogroup","aria-label":"连接模式"},uu=["aria-checked","disabled"],pu=["aria-checked","disabled"],hu={class:"settings-block"},fu={class:"field-title"},mu={class:"help"},gu=["disabled"],bu={class:"settings-block"},vu={class:"field-title"},yu={class:"help"},wu={class:"settings-fields"},_u=["disabled"],ku={class:"settings-password"},xu=["disabled","type"],Su=["aria-label"],Au={class:"settings-note help"},Eu={class:"settings-actions"},Iu={class:"help"},Tu=["disabled"],Mu={class:"settings-tip"},Cu={key:1,class:"card settings-card"},Pu={class:"settings-card-heading"},Ou={class:"settings-icon"},Nu={class:"help"},Ru={class:"badge"},Uu={class:"device-toolbar"},Lu={class:"help"},qu=["aria-expanded"],ju={class:"settings-fields"},Bu={key:0},Fu={key:1,class:"protocol-note"},Du={key:1,class:"managed-device-list"},Wu={class:"device-row-actions"},zu=["aria-label","onClick"],Hu={class:"device-details"},$u=["aria-label","onClick"],Ku={key:2,class:"settings-empty"},Vu={class:"settings-footnote"},Qu={class:"card settings-card"},Gu={class:"settings-card-heading"},Yu={class:"settings-icon"},Ju={class:"account-summary"},Xu={class:"account-avatar"},Zu={class:"help"},ep={class:"card settings-card"},tp={class:"settings-card-heading"},np={class:"settings-icon"},rp={class:"settings-block"},sp={class:"settings-fields"},ip={class:"settings-icon"},ap={__name:"PlatformSettings",props:{connection:Object,connected:Boolean,busy:Boolean,thirdParty:Boolean,devices:Array,states:Object,addForm:Object,deviceName:Function,now:Number},emits:["mode-change","connect","disconnect","add","remove","password","home","refresh","rename"],setup(d,{emit:h}){const o=d,a=h,p=je("connection"),n=je(!1),t=je(!1),r=je(""),e=je(""),s=Hn(()=>[{id:"connection",title:"MQTT 连接",description:"服务器与连接凭据",icon:"cloud"},{id:"devices",title:"设备管理",description:"设备列表与添加",icon:"plug"},...We.username?[{id:"account",title:"账号安全",description:"账号信息与密码",icon:"shield"}]:[]]),i=Hn(()=>o.devices.filter(f=>o.connected&&o.states[Re(f)]?.available===!0).length);function g(f){return o.connected?o.states[Re(f)]?.available===!0?"在线":o.states[Re(f)]?.available===!1?"离线":"状态未知":"未连接"}return(f,l)=>{const u=La("RouterLink");return Pe(),Ne(Ht,null,[J("div",Zd,[l[20]||(l[20]=J("div",null,[J("p",{class:"eyebrow"},"偏好与管理"),J("h1",null,"设置"),J("p",{class:"help"},"管理连接、设备与账号，让每一台设备保持就绪。")],-1)),J("button",{class:"btn",onClick:l[0]||(l[0]=m=>a("home"))},[l[19]||(l[19]=He("返回首页",-1)),Le(De,{name:"arrow",size:16})])]),J("div",eu,[J("aside",tu,[J("nav",nu,[(Pe(!0),Ne(Ht,null,ar(s.value,m=>(Pe(),Ne("button",{key:m.id,"aria-current":p.value===m.id?"page":void 0,onClick:v=>p.value=m.id},[Le(De,{name:m.icon},null,8,["name"]),J("span",null,[J("b",null,Oe(m.title),1),J("small",null,Oe(m.description),1)]),Le(De,{class:"nav-arrow",name:"arrow",size:15})],8,ru))),128))]),J("div",su,[J("span",{class:Qt(["dot",d.connected?"ok":"warn"])},null,2),J("span",null,[He(Oe(d.connected?"连接已就绪":"尚未连接"),1),J("small",null,Oe(d.devices.length)+" 台设备 · "+Oe(i.value)+" 台在线",1)])])]),J("div",iu,[p.value==="connection"?(Pe(),Ne(Ht,{key:0},[J("section",au,[J("header",ou,[J("span",lu,[Le(De,{name:"cloud",size:23})]),l[21]||(l[21]=J("div",null,[J("h2",null,"MQTT 连接"),J("p",{class:"help"},"选择服务器，建立设备与平台之间的连接。")],-1)),J("span",{class:Qt(["badge",d.connected?"ok":""])},Oe(d.busy?"连接中":d.connected?"已连接":"未连接"),3)]),Je(We).username?(Pe(),Ne("div",cu,[l[26]||(l[26]=J("div",{class:"field-title"},[J("h3",null,"连接方式"),J("p",{class:"help"},"使用平台服务，或连接自己的 MQTT 服务器。")],-1)),J("div",du,[J("button",{type:"button",role:"radio","aria-checked":!d.thirdParty,disabled:d.busy,onClick:l[1]||(l[1]=m=>!d.thirdParty||a("mode-change",!1))},[Le(De,{name:"cloud"}),l[22]||(l[22]=J("span",null,[J("b",null,"平台 Broker"),J("small",null,"使用当前账号连接")],-1)),l[23]||(l[23]=J("span",{class:"choice-dot"},null,-1))],8,uu),J("button",{type:"button",role:"radio","aria-checked":d.thirdParty,disabled:d.busy,onClick:l[2]||(l[2]=m=>d.thirdParty||a("mode-change",!0))},[Le(De,{name:"settings"}),l[24]||(l[24]=J("span",null,[J("b",null,"第三方 Broker"),J("small",null,"使用自己的服务器")],-1)),l[25]||(l[25]=J("span",{class:"choice-dot"},null,-1))],8,pu)])])):vt("",!0),J("form",{onSubmit:l[8]||(l[8]=vn(m=>a("connect"),["prevent"]))},[J("div",hu,[J("div",fu,[l[27]||(l[27]=J("h3",null,"服务器",-1)),J("p",mu,Oe(d.thirdParty?"服务器需要支持 MQTT over WebSocket。":"平台地址与用户名由当前账号自动配置。"),1)]),J("label",null,[l[28]||(l[28]=He("WebSocket 地址",-1)),ht(J("input",{"onUpdate:modelValue":l[3]||(l[3]=m=>d.connection.host=m),disabled:d.connected||!d.thirdParty,required:"",placeholder:"wss://mqtt.example.com/mqtt",spellcheck:"false"},null,8,gu),[[zt,d.connection.host]]),l[29]||(l[29]=J("small",{class:"help"},"支持 ws:// 和 wss:// 地址",-1))])]),J("div",bu,[J("div",vu,[l[30]||(l[30]=J("h3",null,"连接凭据",-1)),J("p",yu,Oe(d.thirdParty?"填写服务器分配的用户名与密码。":"与平台登录使用同一账号密码。"),1)]),J("div",wu,[J("label",null,[l[31]||(l[31]=He("MQTT 用户名",-1)),ht(J("input",{"onUpdate:modelValue":l[4]||(l[4]=m=>d.connection.username=m),disabled:d.connected||!d.thirdParty,autocomplete:"username",placeholder:"MQTT 用户名"},null,8,_u),[[zt,d.connection.username]])]),J("label",null,[l[32]||(l[32]=He("MQTT 密码",-1)),J("span",ku,[ht(J("input",{"onUpdate:modelValue":l[5]||(l[5]=m=>d.connection.password=m),disabled:d.connected,type:n.value?"text":"password",autocomplete:"current-password",placeholder:"输入连接密码"},null,8,xu),[[bl,d.connection.password]]),J("button",{class:"btn ghost icon",type:"button","aria-label":n.value?"隐藏 MQTT 密码":"显示 MQTT 密码",onClick:l[6]||(l[6]=m=>n.value=!n.value)},[Le(De,{name:"eye",size:18})],8,Su)])])]),J("p",Au,[Le(De,{name:"shield",size:16}),l[33]||(l[33]=He("平台密码保存在当前浏览器，用于自动连接；退出登录即清除。",-1))])]),J("footer",Eu,[J("span",Iu,[J("span",{class:Qt(["dot",d.connected?"ok":"warn"])},null,2),He(Oe(d.connected?"默认自动连接；手动断开后将保持断开":d.busy?"正在连接服务器…":"填写完成后连接服务器"),1)]),d.connected?(Pe(),Ne("button",{key:0,class:"btn",type:"button",onClick:l[7]||(l[7]=m=>a("disconnect"))},"断开连接")):(Pe(),Ne("button",{key:1,class:"btn primary",disabled:d.busy},[Le(De,{name:"cloud",size:17}),He(Oe(d.busy?"连接中…":"连接服务器"),1)],8,Tu))])],32)]),J("div",Mu,[Le(De,{name:"signal",size:20}),J("div",null,[l[35]||(l[35]=J("b",null,"连接之后",-1)),l[36]||(l[36]=J("p",null,"使用相同 MQTT 账号的 TMCP 设备会自动出现在设备列表中。也可以前往设备管理手动添加。",-1)),J("button",{class:"btn ghost",onClick:l[9]||(l[9]=m=>p.value="devices")},[l[34]||(l[34]=He("查看设备管理",-1)),Le(De,{name:"arrow",size:15})])])])],64)):p.value==="devices"?(Pe(),Ne("section",Cu,[J("header",Pu,[J("span",Ou,[Le(De,{name:"plug",size:23})]),J("div",null,[l[37]||(l[37]=J("h2",null,"设备管理",-1)),J("p",Nu,"在这里查看和管理当前"+Oe(d.thirdParty?"浏览器":"账号")+"的设备。",1)]),J("span",Ru,Oe(d.devices.length)+" 台",1)]),J("div",Uu,[J("span",Lu,Oe(i.value)+" 台在线 · "+Oe(d.devices.length)+" 台设备",1),J("div",null,[J("button",{class:"btn",onClick:l[10]||(l[10]=m=>a("refresh")),"aria-label":"刷新设备列表"},"刷新"),J("button",{class:"btn primary","aria-expanded":t.value,onClick:l[11]||(l[11]=m=>t.value=!t.value)},[Le(De,{name:t.value?"close":"plus",size:17},null,8,["name"]),He(Oe(t.value?"取消添加":"添加设备"),1)],8,qu)])]),t.value?(Pe(),Ne("form",{key:0,class:"add-device-panel",onSubmit:l[15]||(l[15]=vn(m=>a("add"),["prevent"]))},[l[45]||(l[45]=J("h3",null,"添加设备",-1)),J("label",null,[l[38]||(l[38]=He("MAC 地址",-1)),ht(J("input",{"onUpdate:modelValue":l[12]||(l[12]=m=>d.addForm.mac=m),"aria-label":"MAC 地址",required:"",placeholder:"AABBCCDDEEFF",maxlength:"17",spellcheck:"false"},null,512),[[zt,d.addForm.mac]]),l[39]||(l[39]=J("small",{class:"help"},"填写设备的 12 位 MAC 地址，也支持冒号或短横线分隔。",-1))]),J("div",ju,[J("label",null,[l[41]||(l[41]=He("型号",-1)),ht(J("select",{"aria-label":"型号","onUpdate:modelValue":l[13]||(l[13]=m=>d.addForm.model=m)},[...l[40]||(l[40]=[J("option",{value:"tc1"},"TC1 智能插排",-1),J("option",{value:"m1"},"M1 空气质量检测器",-1),J("option",{value:"a1"},"A1 空气净化器",-1)])],512),[[wi,d.addForm.model]])]),d.addForm.model==="tc1"?(Pe(),Ne("label",Bu,[l[43]||(l[43]=He("协议",-1)),ht(J("select",{"onUpdate:modelValue":l[14]||(l[14]=m=>d.addForm.version=m)},[...l[42]||(l[42]=[J("option",{value:"v2"},"TMCP",-1),J("option",{value:"v1"},"Legacy",-1)])],512),[[wi,d.addForm.version]])])):(Pe(),Ne("div",Fu,[...l[44]||(l[44]=[J("span",{class:"help"},"协议",-1),J("span",{class:"badge"},"TMCP",-1)])]))]),l[46]||(l[46]=J("div",{class:"add-device-actions"},[J("button",{class:"btn primary"},"确认添加")],-1))],32)):vt("",!0),d.devices.length?(Pe(),Ne("div",Du,[(Pe(!0),Ne(Ht,null,ar(d.devices,m=>(Pe(),Ne("div",{key:Je(Re)(m),class:"managed-device"},[Le(ml,{device:m,state:d.states[Je(Re)(m)]||{},name:d.deviceName(m),connected:d.connected,now:d.now},null,8,["device","state","name","connected","now"]),J("div",Wu,[J("button",{class:"btn ghost","aria-label":`修改 ${d.deviceName(m)} 的名称`,onClick:v=>a("rename",m)},[Le(De,{name:"edit",size:15}),l[47]||(l[47]=He("改名",-1))],8,zu),J("details",Hu,[l[51]||(l[51]=J("summary",null,"详情",-1)),J("dl",null,[J("div",null,[l[48]||(l[48]=J("dt",null,"MAC 地址",-1)),J("dd",null,Oe(m.mac),1)]),J("div",null,[l[49]||(l[49]=J("dt",null,"连接协议",-1)),J("dd",null,Oe(m.version==="v1"?"Legacy":"TMCP"),1)]),J("div",null,[l[50]||(l[50]=J("dt",null,"状态",-1)),J("dd",null,Oe(g(m)),1)])]),J("button",{class:"btn danger","aria-label":`移除 ${d.deviceName(m)}`,onClick:v=>a("remove",m)},"移除此设备",8,$u)])])]))),128))])):(Pe(),Ne("div",Ku,[Le(De,{name:"plug",size:32}),l[52]||(l[52]=J("h3",null,"还没有设备",-1)),l[53]||(l[53]=J("p",{class:"help"},"连接后等待设备自动上线，或点击上方按钮手动添加。",-1))])),J("footer",Vu,[Le(De,{name:"signal",size:17}),l[54]||(l[54]=J("span",null,"TMCP 设备可自动发现；Legacy 仅支持 TC1。移除设备前会再次确认。",-1))])])):(Pe(),Ne(Ht,{key:2},[J("section",Qu,[J("header",Gu,[J("span",Yu,[Le(De,{name:"guest",size:23})]),l[55]||(l[55]=J("div",null,[J("h2",null,"账号安全"),J("p",{class:"help"},"管理登录信息，保护你的设备访问权限。")],-1))]),J("div",Ju,[J("span",Xu,Oe(Je(We).username?.slice(0,1).toUpperCase()),1),J("div",null,[J("b",null,Oe(Je(We).username),1),J("p",Zu,Oe(Je(We).isAdmin?"管理员":"普通账号")+" · 网站与平台 MQTT 共用账号",1)]),l[56]||(l[56]=J("span",{class:"badge ok"},"已登录",-1))])]),J("section",ep,[J("header",tp,[J("span",np,[Le(De,{name:"shield",size:23})]),l[57]||(l[57]=J("div",null,[J("h2",null,"修改密码"),J("p",{class:"help"},"修改成功后，使用新密码重新登录。")],-1))]),J("form",{onSubmit:l[18]||(l[18]=vn(m=>a("password",{current:r.value,password:e.value}),["prevent"]))},[J("div",rp,[J("div",sp,[J("label",null,[l[58]||(l[58]=He("当前密码",-1)),ht(J("input",{"onUpdate:modelValue":l[16]||(l[16]=m=>r.value=m),type:"password",required:"",autocomplete:"current-password"},null,512),[[zt,r.value]])]),J("label",null,[l[59]||(l[59]=He("新密码",-1)),ht(J("input",{"onUpdate:modelValue":l[17]||(l[17]=m=>e.value=m),type:"password",required:"",minlength:"6",autocomplete:"new-password"},null,512),[[zt,e.value]]),l[60]||(l[60]=J("small",{class:"help"},"至少 6 个字符",-1))])])]),l[61]||(l[61]=J("footer",{class:"settings-actions"},[J("p",{class:"help"},"使用此账号的设备也需要更新 MQTT 密码。"),J("button",{class:"btn primary"},"修改密码并退出")],-1))],32)]),Je(We).isAdmin?(Pe(),rn(u,{key:0,class:"card administration-entry",to:"/admin"},{default:or(()=>[J("span",ip,[Le(De,{name:"settings",size:23})]),l[62]||(l[62]=J("span",null,[J("b",null,"平台管理"),J("small",null,"管理账号、设备归属和注册方式")],-1)),Le(De,{name:"arrow"})]),_:1})):vt("",!0)],64))])])],64)}}},op=Vn(ap,[["__scopeId","data-v-ca832006"]]),lp={class:"console-page"},cp={class:"console-topbar topbar"},dp={class:"console-nav"},up={class:"platform-tabs tabs","aria-label":"主导航"},pp=["aria-current"],hp=["aria-current"],fp={key:0,role:"alert",class:"feedback error"},mp={key:1,role:"status",class:"feedback"},gp={key:2,class:"dashboard-grid"},bp={class:"surface devices-panel"},vp={class:"device-list"},yp=["aria-pressed","onClick"],wp=["aria-label","onClick"],_p={key:0,class:"helper-text"},kp={key:0,class:"device-area"},xp={class:"device-heading"},Sp={class:"help"},Ap=["disabled"],Ep={key:1,class:"surface empty-control"},Pp={__name:"App",setup(d){const h=Object.fromEntries(["tc1","m1","a1"].map(L=>[L,window.PhicommDemo.create(L)])),o=vl(),a=_l(),p=je(null),n=je(null),t=je({});function r(L){const re=t.value[Re(L)]||l[Re(L)]?.name||L.name;if(re)return re;const H=g.value.filter(M=>M.model===L.model);return ii(L)+(H.length>1?" "+(H.findIndex(M=>Re(M)===Re(L))+1):"")}function e(L,re,H){if(L.version==="v1"){re?t.value[Re(L)]=re:delete t.value[Re(L)],localStorage.setItem("phicomm.names."+(We.username||"guest"),JSON.stringify(t.value)),H();return}O({action:"config.set",params:{section:"device",values:{name:re}}},M=>{if(!["ok","accepted"].includes(M.code)){H(M.message||"保存失败");return}const ne=l[Re(L)]||={};re?ne.name=re:(delete ne.name,ie(L)),H()},L)}const s=je("home"),i=je(o.name==="Guest"),g=je([]),f=je(""),l=tr({}),u=je(!1),m=je(""),v=je(""),k=je(!1),b=je(Date.now()),_=tr({host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""}),A=tr({mac:"",model:"tc1",version:"v2"}),y=Hn(()=>{const L=g.value.find(re=>Re(re)===f.value);return L?{...l[Re(L)],...L}:null});er(f,async()=>{if(await kl(),!matchMedia("(max-width:800px)").matches)return;const L=document.querySelector(".device-select[aria-pressed=true]"),re=L?.closest(".device-list");re&&(re.scrollLeft+=L.getBoundingClientRect().left-re.getBoundingClientRect().left)}),er(s,L=>_i("pageview",i.value?L==="settings"?"/guest/settings":"/guest":L==="settings"?"/settings":"/")),er(()=>y.value?Re(y.value):"",L=>{L&&_i("device_view",i.value?"/guest":"/",y.value.model)});let S,x,I;const P=new Map;function O(L,re,H=y.value){if(H){const ae=h[H.model].command(L.action,L.params);Object.assign(l[Re(H)]||={},h[H.model].state),re({code:L.action.endsWith(".get")?"ok":"accepted",data:ae});return}if(!u.value||!H){re({code:"offline",message:"请先连接 MQTT"});return}if(H.version==="v1"){G(L,re);return}const M=JSON.stringify([Re(H),L.action,L.params||{}]);if(L.action.endsWith(".get")){const ae=[...P.values()].find(N=>N.signature===M);if(ae){const N=ae.reply;ae.reply=W=>{N(W),re(W)};return}}const ne=Al(),K=H,Q=l[Re(K)]||={};(Q.pending||={})[ne]=L.action;const V=setTimeout(()=>{const ae=P.get(ne);P.delete(ne),delete Q.pending[ne],ae?.reply({code:"timeout",message:"暂未收到操作回执，请等待状态更新"})},2e4);P.set(ne,{reply:re,timeout:V,key:Re(K),signature:M});const de=Si(K,{...L,request_id:ne});S.publish(de.topic,de.payload,{qos:1,retain:!1},ae=>{if(ae){clearTimeout(V);const N=P.get(ne);P.delete(ne),delete Q.pending[ne],N?.reply({code:"error",message:"发送失败"})}})}const j=()=>i.value?"guest":We.username;function T(){ki(j(),!1),q()}function z(){ki(j(),!0),X()}function q(){k.value=!1;for(const{reply:L,timeout:re}of P.values())clearTimeout(re),L({code:"offline",message:"MQTT 已断开"});P.clear(),S?.end(!0),S=null,u.value=!1,Object.keys(l).forEach(L=>delete l[L])}function B(){}async function le(){try{g.value=(i.value?Sl().map(L=>({...L,username:_.username})):await Wt("/devices")).map(xi),g.value.some(L=>Re(L)===f.value)||(f.value=g.value[0]?Re(g.value[0]):""),u.value&&void 0}catch(L){m.value=L.message}}function X(){{u.value=!0,k.value=!1;for(const L of g.value)Object.assign(l[Re(L)]||={},h[L.model].state);return}}function G({action:L,params:re={}},H){const M=y.value,ne=V=>H({code:"ok",data:V}),K=V=>H({code:"unsupported",message:V});if(L==="capabilities.get"){ne({actions:["outlet.set","child_lock.set","indicator.set"]});return}if(L==="status.get"){if(!Array.from({length:6},(V,de)=>M[`plug_${de}`]).every(V=>V?.on!==void 0)){K("尚未收到设备状态");return}ne({name:M.name||"TC1",socket_states:Array.from({length:6},(V,de)=>!!M[`plug_${de}`]?.on),socket_names:Array.from({length:6},(V,de)=>M[`plug_${de}`]?.setting?.name||`插座 ${de+1}`),child_lock:!!(M.child_lock?.on??M.child_lock),led_enabled:!!(M.led_lock?.on??M.led_lock),mqtt_connected:!0,mqtt_host:_.host});return}if(L==="power.get"){if(M.power_watts===void 0&&M.power===void 0){K("尚未收到电量数据");return}ne({power_watts:M.power_watts??Number(M.power),energy_kwh:M.energy_kwh??Number(M.powerConsumption)});return}let Q;if(L==="outlet.set"){const V=re.index===void 0?[0,1,2,3,4,5]:[re.index];if(V.some(de=>!Number.isInteger(de)||de<0||de>5)){K("插座编号无效");return}Q=Object.fromEntries(V.map(de=>[`plug_${de}`,{on:re.on?1:0}]))}else if(L==="child_lock.set")Q={child_lock:{on:re.enabled?1:0}};else if(L==="indicator.set")Q={led_lock:{on:re.enabled?1:0}};else if(L==="config.set"&&re.section==="socket"&&!M.legacyText)Q={[`plug_${re.values.index}`]:{setting:{name:re.values.name}}};else{K("此 Legacy 设备不支持该操作");return}try{for(const[V,de]of Object.entries(Q)){const ae=Si(M,{[V]:de});S.publish(ae.topic,ae.payload,{qos:1,retain:!1},N=>{N&&(m.value="发送失败")})}H({code:"accepted",data:{}})}catch(V){K(V.message)}}function ie(L,re,H={}){{Object.assign(l[Re(L)]||={},h[L.model].state);return}}async function D(){if(q(),v.value="",m.value="",i.value)Object.assign(_,{host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""},JSON.parse(localStorage.getItem("tmcp_broker")||"{}"));else{const L=await Wt("/register/status");Object.assign(_,{host:L.mqtt_ws_uri||`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:We.mqttUsername||We.username,password:We.password||wl(We.username)})}await le(),X()}async function te(){try{const L=xi({...A,version:A.model==="tc1"?A.version:"v2",...i.value?{username:_.username}:{}});if(i.value){if(g.value.some(re=>re.mac===L.mac))throw Error("设备已存在");localStorage.setItem("phicomm_devices",JSON.stringify([...g.value,L]))}else await Wt("/devices",{method:"POST",body:JSON.stringify(L)});await le(),A.mac=""}catch(L){m.value=L.message}}async function R(L){if(confirm(`移除 ${L.mac}？`))try{S?.unsubscribe(El(L)),i.value?localStorage.setItem("phicomm_devices",JSON.stringify(g.value.filter(re=>Re(re)!==Re(L)))):await Wt(`/devices/${L.namespace?"scoped/":""}${L.mac}${L.namespace?"?mqtt_username="+encodeURIComponent(L.mqtt_username||L.username):""}`,{method:"DELETE"}),await le()}catch(re){m.value=re.message}}async function Z(){try{await Wt("/auth/logout",{method:"POST",body:"{}"})}catch(L){m.value=L.message}We.username=null,We.mqttUsername=null,We.isAdmin=!1,We.aliases=[],We.password="",yl(),q(),await a.replace("/login")}async function ye(L){try{await Wt("/auth/password",{method:"POST",body:JSON.stringify({current_password:L.current,password:L.password})}),await Z()}catch(re){m.value=re.message}}return Ra(async()=>{o.name!=="Guest"&&await xl();try{t.value=JSON.parse(localStorage.getItem("phicomm.names."+(We.username||"guest"))||"{}")}catch{}await D(),x=setInterval(()=>b.value=Date.now(),1e3),I=setInterval(()=>{!i.value&&!document.hidden&&le()},5e3)}),Ua(()=>{q(),clearInterval(x),clearInterval(I)}),(L,re)=>{const H=La("RouterLink");return Pe(),Ne("main",lp,[J("header",cp,[re[10]||(re[10]=J("div",{class:"brand"},[J("span",{class:"kind"},"MQTT 管理平台"),J("h1",null,"Phicomm")],-1)),J("nav",dp,[J("span",{class:Qt(["status-pill",{online:u.value}])},Oe(u.value?"MQTT 已连接":"MQTT 未连接"),3),Je(We).isAdmin?(Pe(),rn(H,{key:0,class:"btn",to:"/admin"},{default:or(()=>[...re[8]||(re[8]=[He("平台管理",-1)])]),_:1})):vt("",!0),Le(Il),Je(We).username?(Pe(),Ne("button",{key:1,onClick:Z},"退出")):(Pe(),rn(H,{key:2,to:"/login"},{default:or(()=>[...re[9]||(re[9]=[He("登录",-1)])]),_:1}))])]),J("nav",up,[J("button",{"aria-current":s.value==="home"?"page":void 0,onClick:re[0]||(re[0]=M=>s.value="home")},"首页",8,pp),J("button",{"aria-current":s.value==="settings"?"page":void 0,onClick:re[1]||(re[1]=M=>s.value="settings")},"设置",8,hp)]),m.value?(Pe(),Ne("p",fp,Oe(m.value),1)):vt("",!0),v.value?(Pe(),Ne("p",mp,Oe(v.value),1)):vt("",!0),s.value==="home"?(Pe(),Ne("div",gp,[J("aside",bp,[re[11]||(re[11]=J("h2",null,"设备",-1)),J("ul",vp,[(Pe(!0),Ne(Ht,null,ar(g.value,M=>(Pe(),Ne("li",{key:Je(Re)(M),class:"device-list-item"},[J("button",{class:"device-select","aria-pressed":f.value===Je(Re)(M),onClick:ne=>f.value=Je(Re)(M)},[Le(ml,{device:M,state:l[Je(Re)(M)]||{},name:r(M),connected:u.value,now:b.value},null,8,["device","state","name","connected","now"])],8,yp),J("button",{class:"device-rename btn ghost icon","aria-label":`修改 ${r(M)} 的名称`,onClick:ne=>n.value.open(M,r(M))},[Le(De,{name:"edit",size:15})],8,wp)]))),128))]),J("button",{onClick:le},"刷新列表"),g.value.length?vt("",!0):(Pe(),Ne("p",_p,"暂无设备。设备上线后将自动显示，也可在设置中添加。"))]),y.value?(Pe(),Ne("div",kp,[J("div",xp,[J("div",null,[J("h2",null,Oe(r(y.value)),1),J("p",Sp,Oe(Je(ii)(y.value)),1)]),J("span",{class:Qt(["badge",y.value.available===!0&&u.value?"ok":""])},Oe(u.value?y.value.available===!1?"离线":y.value.available===!0?"在线":"等待设备状态":"MQTT 未连接"),3),J("button",{disabled:!u.value,onClick:re[2]||(re[2]=M=>p.value?.refresh())},"刷新状态",8,Ap)]),(Pe(),rn(Xd,{ref_key:"home",ref:p,key:f.value,device:y.value,onCommand:O,onSettings:re[3]||(re[3]=M=>s.value="settings")},null,8,["device"]))])):(Pe(),Ne("section",Ep,[re[12]||(re[12]=J("h2",null,"从一台设备开始",-1)),re[13]||(re[13]=J("p",null,"在设置中连接 Broker 并添加设备。",-1)),J("button",{onClick:re[4]||(re[4]=M=>s.value="settings")},"打开设置")]))])):(Pe(),rn(op,{key:3,connection:_,connected:u.value,busy:k.value,"third-party":i.value,devices:g.value,states:l,"add-form":A,"device-name":r,now:b.value,onRename:re[5]||(re[5]=M=>n.value.open(M,r(M))),onModeChange:re[6]||(re[6]=M=>{i.value=M,D()}),onConnect:z,onDisconnect:T,onAdd:te,onRemove:R,onPassword:ye,onHome:re[7]||(re[7]=M=>s.value="home"),onRefresh:le},null,8,["connection","connected","busy","third-party","devices","states","add-form","now"])),Le(Qd,{ref_key:"nameDialog",ref:n,onSave:e},null,512),re[14]||(re[14]=J("footer",{class:"console-footer"},"Phicomm",-1))])}}};export{Pp as default};
