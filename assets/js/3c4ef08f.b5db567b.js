"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[32692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(87462),l=(n(67294),n(3905));const a={id:"index",title:"Introduction to ZIO SQL",sidebar_label:"ZIO SQL"},o=void 0,i={unversionedId:"zio-sql/index",id:"zio-sql/index",title:"Introduction to ZIO SQL",description:"Installation",source:"@site/docs/zio-sql/index.md",sourceDirName:"zio-sql",slug:"/zio-sql/",permalink:"/zio-sql/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-sql/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO SQL",sidebar_label:"ZIO SQL"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO SBT",permalink:"/zio-sbt/"},next:{title:"Deep dive",permalink:"/zio-sql/deep-dive"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Imports and modules",id:"imports-and-modules",level:2},{value:"Table schema",id:"table-schema",level:2},{value:"Table schema decomposition",id:"table-schema-decomposition",level:2},{value:"Selects",id:"selects",level:2},{value:"Inserts",id:"inserts",level:2},{value:"Updates",id:"updates",level:2},{value:"Deletes",id:"deletes",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Printing queries",id:"printing-queries",level:2},{value:"Running queries",id:"running-queries",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"ZIO SQL is packaged into separate modules for different databases. Depending on which of these (currently supported) systems you're using, you will need to add one of the following dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'//PostgreSQL\nlibraryDependencies += "dev.zio" %% "zio-sql-postgres" % "0.0.3" \n\n//MySQL\nlibraryDependencies += "dev.zio" %% "zio-sql-mysql" % "0.0.3"\n\n//Oracle\nlibraryDependencies += "dev.zio" %% "zio-sql-oracle" % "0.0.3"\n\n//SQL Server\nlibraryDependencies += "dev.zio" %% "zio-sql-sqlserver" % "0.0.3"\n')),(0,l.kt)("h2",{id:"imports-and-modules"},"Imports and modules"),(0,l.kt)("p",null,"Most of the needed imports will be resolved with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.sql._\n")),(0,l.kt)("p",null,"ZIO SQL relies heavily on path dependent types, so to use most of the features you need to be in the scope of one of the database modules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"trait MyRepositoryModule extends PostgresModule {\n\n  // your ZIO SQL code here\n\n}\n\n// other available modules are MysqlModule, OracleModule and SqlServerModule\n")),(0,l.kt)("p",null,"We will assume this scope in the following examples."),(0,l.kt)("h2",{id:"table-schema"},"Table schema"),(0,l.kt)("p",null,"Table schemas are required to later construct correct and type-safe queries. Table schemas are created from ",(0,l.kt)("inlineCode",{parentName:"p"},"ColumnSet"),"s that are composed out of single columns, by calling a method ",(0,l.kt)("inlineCode",{parentName:"p"},"table")," (on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ColumnSet"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import ColumnSet._\n\nval products =\n  (uuid("id") ++ string("name") ++ bigDecimal("price")).table("products")\n\nval orders = \n  (uuid("id") ++ uuid("product_id") ++ int("quantity") ++ localDate("order_date")).table("orders")\n')),(0,l.kt)("p",null,"Column sets are composable - this could be useful when your tables share some common columns."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import ColumnSet._\n\n//common columns\nval auditColumns = zonedDateTime("created_at") ++ zonedDateTime("updated_at")\n\n//products definition\nval productColumns = uuid("id") ++ string("name") ++ bigDecimal("price") ++ auditColumns\n\nval products = productColumns.table("products")\n\n//orders definition\nval orderColumns = uuid("id") ++ uuid("product_id") ++ int("quantity") ++ localDate("order_date") ++ auditColumns\n\nval orders = orderColumns.table("orders")\n')),(0,l.kt)("h2",{id:"table-schema-decomposition"},"Table schema decomposition"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h2",{id:"selects"},"Selects"),(0,l.kt)("p",null,"Simple select."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val allProducts = select(productId, name, price).from(products)\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," clause."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def productById(id: UUID) = \n  select(productId, name, price).from(products).where(productId === id)\n")),(0,l.kt)("p",null,"Inner join."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val ordersWithProductNames = \n  select(orderId, name).from(products.join(orders).on(productId === fkProductId))\n")),(0,l.kt)("p",null,"Left outer join."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val leftOuter = \n  select(orderId, name).from(products.leftOuter(orders).on(productId === fkProductId))\n")),(0,l.kt)("p",null,"Right outer join."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val rightOuter = \n  select(orderId, name).from(products.rightOuter(orders).on(productId === fkProductId))\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val limitedResults = \n  select(orderId, name)\n    .from(products.join(orders)\n    .on(productId === fkProductId))\n    .limit(5)\n    .offset(10)\n")),(0,l.kt)("h2",{id:"inserts"},"Inserts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'insertInto(products)\n    (productId, name, price)\n  .values((UUID.randomUUID(), "Zionomicon", 10.5))\n')),(0,l.kt)("h2",{id:"updates"},"Updates"),(0,l.kt)("p",null,"TODO: details"),(0,l.kt)("h2",{id:"deletes"},"Deletes"),(0,l.kt)("p",null,"TODO: details"),(0,l.kt)("h2",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"TODO: details"),(0,l.kt)("h2",{id:"printing-queries"},"Printing queries"),(0,l.kt)("p",null,"TODO: details"),(0,l.kt)("h2",{id:"running-queries"},"Running queries"),(0,l.kt)("p",null,"TODO: details"))}c.isMDXComponent=!0}}]);