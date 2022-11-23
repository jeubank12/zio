"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[60060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(a),f=r,d=p["".concat(o,".").concat(f)]||p[f]||h[f]||c;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<c;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},56629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const c={id:"cache-statistics",title:"Cache Statistics"},s=void 0,i={unversionedId:"cache-statistics",id:"cache-statistics",title:"Cache Statistics",description:"ZIO Cache automatically tracks various statistics associated with the cache, such as the number of cache hits and misses and the current size of the cache, to allow you to assess the effectiveness of the cache. You can access these statistics by using the cacheStats operator on Cache.",source:"@site/node_modules/@zio.dev/zio-cache/cache-statistics.md",sourceDirName:".",slug:"/cache-statistics",permalink:"/zio-cache/cache-statistics",draft:!1,tags:[],version:"current",frontMatter:{id:"cache-statistics",title:"Cache Statistics"},sidebar:"sidebar",previous:{title:"Cache",permalink:"/zio-cache/cache"},next:{title:"Entry Statistics",permalink:"/zio-cache/entry-statistics"}},o={},l=[],u={toc:l};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ZIO Cache automatically tracks various statistics associated with the cache, such as the number of cache hits and misses and the current size of the cache, to allow you to assess the effectiveness of the cache. You can access these statistics by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheStats")," operator on ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait CacheStats {\n  def hits: Long\n  def misses: Long\n  def size: Int\n}\n\ntrait Cache[-Key, +Error, +Value] {\n  def cacheStats: UIO[CacheStats]\n}\n")),(0,r.kt)("p",null,"The cache statistics represent a snapshot as of a point in time. Note that the cache statistics are designed for aggregate analysis and may not be fully consistent."),(0,r.kt)("p",null,"More cache statistics will be added over time."))}h.isMDXComponent=!0}}]);