"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[34649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"hmac",title:"HMAC"},o=void 0,p={unversionedId:"hmac",id:"hmac",title:"HMAC",description:"Hash-based message authentication codes (HMACs), are a type of",source:"@site/node_modules/@zio.dev/zio-crypto/hmac.md",sourceDirName:".",slug:"/hmac",permalink:"/zio-crypto/hmac",draft:!1,tags:[],version:"current",frontMatter:{id:"hmac",title:"HMAC"},sidebar:"sidebar",previous:{title:"Hash",permalink:"/zio-crypto/hash"},next:{title:"Symmetric Encryption",permalink:"/zio-crypto/symmetric-encryption"}},l={},s=[{value:"Algorithms",id:"algorithms",level:2},{value:"API",id:"api",level:2},{value:"String Example",id:"string-example",level:2},{value:"Byte Example",id:"byte-example",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hash-based message authentication codes (HMACs), are a type of\nmessage authentication code (MAC) that use cryptographic hash functions\nand a secret key.\nThey function as a kind of digital signature of\ndata integrity and authenticity.\nHMACs use symmetric keys. The key used to sign a message is the same as is\nused to verify the authenticity and integrity of the message."),(0,a.kt)("h2",{id:"algorithms"},"Algorithms"),(0,a.kt)("p",null,"We support HMAC-SHA1, HMAC-SHA256, HMAC-SHA384, and HMAC-SHA512."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"There are two basic functions provided: ",(0,a.kt)("inlineCode",{parentName:"p"},"sign")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"verify"),"."),(0,a.kt)("p",null,"For any message ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," and key ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),", we have that ",(0,a.kt)("inlineCode",{parentName:"p"},"verify(m, sign(m, k), k) == true"),"."),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"sign")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"verify")," are implemented in terms of\n",(0,a.kt)("inlineCode",{parentName:"p"},"String")," (provided you specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"Charset"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"Byte"),"."),(0,a.kt)("h2",{id:"string-example"},"String Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import java.nio.charset.StandardCharsets._\n\nobject Example extends zio.App {\n  override def run(args: List[String]) = (for {\n    k        <- HMAC.genKey(HMACSHA256)\n    hmac     <- HMAC.sign(m, k, US_ASCII)\n    verified <- HMAC.verify(m, hmac, k, US_ASCII)\n  } yield verified).exitCode\n    .provideCustomLayer(HMAC.live)\n}\n")),(0,a.kt)("h2",{id:"byte-example"},"Byte Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object Example extends zio.App {\n  override def run(args: List[String]) = (for {\n    m        <- SecureRandom.nextBytes(10)\n    k        <- HMAC.genKey(HMACSHA256)\n    hmac     <- HMAC.sign(m1, k)\n    verified <- HMAC.verify(m0, hmac, k)\n  } yield verified).exitCode\n    .provideCustomLayer(HMAC.live ++ SecureRandom.live.orDie)\n}\n")))}m.isMDXComponent=!0}}]);