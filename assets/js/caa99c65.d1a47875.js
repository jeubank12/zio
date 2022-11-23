"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[14379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(h,s(s({ref:t},d),{},{components:r})):a.createElement(h,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={id:"deep-dive",title:"Deep dive"},s=void 0,l={unversionedId:"deep-dive",id:"deep-dive",title:"Deep dive",description:"Inserts in depth",source:"@site/node_modules/@zio.dev/zio-sql/deep-dive.md",sourceDirName:".",slug:"/deep-dive",permalink:"/zio-sql/deep-dive",draft:!1,tags:[],version:"current",frontMatter:{id:"deep-dive",title:"Deep dive"},sidebar:"sidebar",previous:{title:"ZIO SQL",permalink:"/zio-sql/"}},i={},u=[{value:"Inserts in depth",id:"inserts-in-depth",level:2},{value:"Table description",id:"table-description",level:3},{value:"Insert tuples",id:"insert-tuples",level:3},{value:"Insert custom case class",id:"insert-custom-case-class",level:3},{value:"Show generated SQL query",id:"show-generated-sql-query",level:3},{value:"Execute the query",id:"execute-the-query",level:3},{value:"More examples",id:"more-examples",level:3},{value:"What is missing",id:"what-is-missing",level:3},{value:"Subqueries &amp; Correlated subqueries",id:"subqueries--correlated-subqueries",level:2},{value:"Subquery",id:"subquery",level:3},{value:"Correlated subqueries",id:"correlated-subqueries",level:3},{value:"Correlated subquery in from clause &amp; Derived tables",id:"correlated-subquery-in-from-clause--derived-tables",level:3},{value:"Learning Resources",id:"learning-resources",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"inserts-in-depth"},"Inserts in depth"),(0,n.kt)("h3",{id:"table-description"},"Table description"),(0,n.kt)("p",null,"As usual, in order to use the DSL, first thing we need to do is to create meta-model of our table. Let\u2019s imagine we have a ",(0,n.kt)("em",{parentName:"p"},"customers")," table in postgres (in case of a different database just extend the appropriate module)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.sql.postgresql.PostgresModule\n\ntrait TableModel extends PostgresModule {\n\n  import ColumnSet._\n\n  val customers =\n      (uuid("id") ++ localDate(\u201cdate_of_birth\u201d) ++ string("first_name") ++ string("last_name") ++ boolean("verified_customer") ++ zonedDateTime("created"))\n        .table("customers")\n\n  val customerId :*: dob :*: fName :*: lName :*: verified :*: created :*: _ = customers.columns\n} \n')),(0,n.kt)("p",null,"Then, to use zio-sql \u2019s inserts, just mix in ",(0,n.kt)("inlineCode",{parentName:"p"},"TableModel")," trait from above, to your repository. "),(0,n.kt)("p",null,"In case you\u2019re wondering what those extracted columns are (customerId, dob etc), they are of a type called ",(0,n.kt)("em",{parentName:"p"},"Expr"),".\n",(0,n.kt)("inlineCode",{parentName:"p"},"Expr[F, A, B]")," is fundamental abstraction in zio-sql which basically represents description of any SQL expression of type ",(0,n.kt)("inlineCode",{parentName:"p"},"B"),", having a source of type ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," and a phantom type ",(0,n.kt)("inlineCode",{parentName:"p"},"F"),".\nTo give specific example, type of ",(0,n.kt)("inlineCode",{parentName:"p"},"fName")," is "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"Expr[Features.Source[String(\u201cfirst_name\u201d)], customers.TableType, String]. \n")),(0,n.kt)("p",null,"This gives DSL huge power to remember table from which the column comes from, type of the columns and what kind of Expr we are dealing with. Don\u2019t worry, you don\u2019t need to remember any of this, but from now on we will use those Expr instances in our inserts."),(0,n.kt)("p",null,"In general, DSL is giving us two options how to approach inserts. We can insert either tuple values or used defined case class - which requires zio-schema instance (more on that later).\nAlso your custom data type or tuple need to consist only of the types for which there is a ",(0,n.kt)("inlineCode",{parentName:"p"},"TypeTag")," instance defined. Each sql module has a finite set of such types - those are the types that particular module can work with. In other words, types inside your tuples or case class need to correspond with the types of the extracted Exprs."),(0,n.kt)("h3",{id:"insert-tuples"},"Insert tuples"),(0,n.kt)("p",null,"Let\u2019s say we want to build the query like the following one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"insert into \n  customers(id, date_of_birth, first_name, last_name, verified_customer, created)\nvalues\n  ('60b01fc9-c902-4468-8d49-3c0f989def37', \u20181983-01-05\u2019, 'Ronald', 'Russell', true, '2020-11-21 19:10:25+00')\n")),(0,n.kt)("p",null,"zio-sql gives us nice typesafe DSL that feels similar to writing SQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'insertInto(customers)\n    (customerId, dob, fName, lName, verified, created)\n  .values((UUID.randomUUID(), LocalDate.ofYearDay(1990, 1), "Ronald", "Russell", true, ZonedDateTime.now()))\n')),(0,n.kt)("p",null,"Compiler verifies your inserts and your query fails with compile-time error at any of the following situations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you mess up the order of values - e.g. you put Boolean where String is expected"),(0,n.kt)("li",{parentName:"ul"},"you don\u2019t specify all the not null columns of the table"),(0,n.kt)("li",{parentName:"ul"},"you try to insert to columns from another table")),(0,n.kt)("p",null,"Some  details about syntax: ",(0,n.kt)("inlineCode",{parentName:"p"},"insertInto")," method takes two value parameters. One is our table ",(0,n.kt)("inlineCode",{parentName:"p"},"customers")," that we created before in ",(0,n.kt)("em",{parentName:"p"},"Table description")," section. The other is an ",(0,n.kt)("em",{parentName:"p"},"HList like")," collection of Expr\u2019s, called ",(0,n.kt)("inlineCode",{parentName:"p"},"Selection"),". You create it by appending Exprs with \u201c++\u201d operator.\n",(0,n.kt)("inlineCode",{parentName:"p"},"values")," method takes a Tuple6 of type (UUID, LocalDate, String, String, Boolean, ZonedDateTime). The required tuple is dependent on combination of Exprs. Just like with normal sql insert, you could swap ",(0,n.kt)("inlineCode",{parentName:"p"},"fName")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"dob")," Expr and corresponding values and your query will work just fine. Compiler will only let you build such queries that won\u2019t explode in runtime (in case you described your table correctly of course ! )"),(0,n.kt)("p",null,"If we need to insert multiple values at once, all we need to do is to create any ",(0,n.kt)("inlineCode",{parentName:"p"},"Seq")," of tuples and stick it into the overloaded ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," method. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val data =\n        List(\n          (UUID.randomUUID(), LocalDate.ofYearDay(1990, 1), "Ronald1", "Russel1", true,  ZonedDateTime.now()),\n          (UUID.randomUUID(), LocalDate.ofYearDay(1980, 1), "Ronald2", "Russel2", false,  ZonedDateTime.now()),\n          (UUID.randomUUID(), LocalDate.ofYearDay(1970, 1), "Ronald3", "Russel3", true,  ZonedDateTime.now())\n        )\n\nval query = insertInto(customers)(\n        customerId, dob, fName, lName, verified, createdString, createdTimestamp\n      ).values(data)\n')),(0,n.kt)("p",null,"In this case, data is of type ",(0,n.kt)("inlineCode",{parentName:"p"},"List[(UUID, LocalDate, String, String, Boolean, ZonedDateTime)]")),(0,n.kt)("h3",{id:"insert-custom-case-class"},"Insert custom case class"),(0,n.kt)("p",null,"ZIO SQL lets you insert also your own case classes.\nLet\u2019s define a ",(0,n.kt)("em",{parentName:"p"},"customer")," case class:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Customer(\n        id: UUID,\n        dateOfBirth: LocalDate,\n        firstName: String,\n        lastName: String,\n        verified: Boolean,\n        createdTimestamp: ZonedDateTime\n      )\n")),(0,n.kt)("p",null,"In this case, the name of the fields makes no difference. Similarly to writing sql, the order of the fields is important."),(0,n.kt)("p",null,"zio-sql also needs an implicit instance of zio-schema for your data type. You can define it easily:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.schema.DeriveSchema\nimplicit val customerSchema = DeriveSchema.gen[Customer]\n")),(0,n.kt)("p",null,"Then your insert looks almost the same as before:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val data: Customer = Customer(UUID.randomUUID(), LocalDate.ofYearDay(1990, 1), "Ronald", "Russel", true, ZonedDateTime.now())\n\nval query = insertInto(customers)(\n        customerId, dob, fName, lName, verified, createdString, createdTimestamp\n      ).values(data)\n')),(0,n.kt)("p",null,"Or you can insert multiple rows at once. Just define data as a ",(0,n.kt)("inlineCode",{parentName:"p"},"List")," or any collection of your choice."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"val data : List[Customer] = ???\n")),(0,n.kt)("h3",{id:"show-generated-sql-query"},"Show generated SQL query"),(0,n.kt)("p",null,"In case you want to see the exact query that zio-sql generated, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"renderInsert")," method inside repo that has PostgresModule (or TableModel from above example) mixed in."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val query = insertInto(customers)(\n        customerId, dob, fName, lName, verified, createdString, createdTimestamp\n      ).values((UUID.randomUUID(), LocalDate.ofYearDay(1990, 1), "Ronald", "Russell", true, ZonedDateTime.now()))\n\nval sqlString: String = renderInsert(query)\n')),(0,n.kt)("h3",{id:"execute-the-query"},"Execute the query"),(0,n.kt)("p",null,"In order to execute a query, we use ",(0,n.kt)("inlineCode",{parentName:"p"},"execute")," method inside repo that has PostgresModule (or TableModel from the above example) mixed in."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val query = insertInto(customers)(\n        customerId, dob, fName, lName, verified, createdString, createdTimestamp\n      ).values((UUID.randomUUID(), LocalDate.ofYearDay(1990, 1), "Ronald", "Russell", true, ZonedDateTime.now()))\n\nval executed : ZIO[Has[SqlDriver], Exception, Int] = execute(query)\n')),(0,n.kt)("p",null,"As the type of ",(0,n.kt)("inlineCode",{parentName:"p"},"executed")," indicates, you need to provide an ",(0,n.kt)("inlineCode",{parentName:"p"},"SqlDriver")," in order to run this effect. The result ",(0,n.kt)("em",{parentName:"p"},"Int")," is the number of rows updated."),(0,n.kt)("h3",{id:"more-examples"},"More examples"),(0,n.kt)("p",null,"More examples can be found in zio-sql test suite (",(0,n.kt)("inlineCode",{parentName:"p"},"PostgresModuleSpec"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"SqlServerModuleSpec"),", \u2026) or in zio-sql-example application in resources."),(0,n.kt)("h3",{id:"what-is-missing"},"What is missing"),(0,n.kt)("p",null,"As of now - Q1 2022 - zio-sql contributors is actively working on:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returning generated IDs from inserts"),(0,n.kt)("li",{parentName:"ul"},"introduce nullable columns - for which user won\u2019t need to input values"),(0,n.kt)("li",{parentName:"ul"},"introduce auto generated columns - for which user cannot input values")),(0,n.kt)("h2",{id:"subqueries--correlated-subqueries"},"Subqueries & Correlated subqueries"),(0,n.kt)("p",null,"The goal of ZIO SQL is to give users the ability to describe also queries much more complex than just simple selects or joins. In this section we will introduce a few examples of subqueries and correlated subqueries. In case you will find a query which is not possible to write with zio-sql - or the generated sql query looks differently then expected - please contact us on discord and we will try to add your use case to the next release :) Now let\u2019s explore what is possible today."),(0,n.kt)("h3",{id:"subquery"},"Subquery"),(0,n.kt)("p",null,"Subquery is a query which is a part of another query. It\u2019s executed first - before outer query - and then its result is used in outer query."),(0,n.kt)("p",null,"Now let\u2019s say we want to build following query (this is on MSSQL Server) :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select order_id, product_id, unit_price \nfrom order_details\nwhere unit_price > (select AVG(price) from product_prices )\n")),(0,n.kt)("p",null,"We want to match details about orders, but we are interested only in those orders where price is higher than average price of all the products from ",(0,n.kt)("inlineCode",{parentName:"p"},"product_prices")," table. "),(0,n.kt)("p",null,"This is the meta model that we are working with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val productPrices =\n      (uuid("product_id") ++ offsetDateTime("effective") ++ bigDecimal("price")).table("product_prices")\n\nval id :*: effective :*: price :*: _ = productPrices.columns\n\nval orderDetails =\n      (uuid("order_id") ++ uuid("product_id") ++ bigDecimal("unit_price")).table("order_details")\n\nval orderDetailsId :*: productId :*: unitPrice :*: _ = orderDetails.columns\n')),(0,n.kt)("p",null,"We can create query very easily. In fact, just type it like a regular sql query and let your IDE auto completion guide you! "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"val query = select(orderDetailsId, productId, unitPrice)\n        .from(orderDetails)\n        .where(\n          unitPrice > select(Avg(price)).from(productPrices)\n        )\n")),(0,n.kt)("p",null,"Then you can either execute the query to selected types or inspect sql query represented as a String.\nYou just need a custom data type (Row in our example) to encapsulate results of a selection."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"case class Row(orderId: UUID, productId: UUID, unitPrice: BigDecimal)\n\nval result: ZStream[Has[SqlDriver],Exception,Row] = execute(query.to[UUID, UUID, BigDecimal, Row](Row.apply))\n\nval sqlQuery: String = renderRead(query)\n")),(0,n.kt)("p",null,"Similarly you can use subqueries inside ",(0,n.kt)("inlineCode",{parentName:"p"},"select")," clause."),(0,n.kt)("h3",{id:"correlated-subqueries"},"Correlated subqueries"),(0,n.kt)("p",null,"Correlated subqueries are the ones that are executed after the outer query. They can be dependent on the result of the outer query and therefore they are executed for each resulting row of the outer query."),(0,n.kt)("p",null,"Lets say we want to build the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'select first_name, last_name, \n        ( select count(orders.id) from orders where customers.id = orders.customer_id ) as "count" \nfrom customers\n')),(0,n.kt)("p",null,"This would return the count of orders for each customer."),(0,n.kt)("p",null,"Description of tables:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val customers = (uuid("id") ++ string("first_name") ++ string("last_name"))).table("customers")\n\nval customerId :*: fName :*: lName _ = customers.columns\n\nval orders = (uuid("id") ++ uuid("customer_id") ++ localDate("order_date")).table("orders")\n\nval orderId :*: fkCustomerId :*: orderDate :*: _ = orders.columns\n')),(0,n.kt)("p",null,"ZIO SQL query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val subquery =\n        customers.subselect(Count(orderId)).from(orders).where(fkCustomerId === customerId)\n\nval query = select(fName, lName, (subquery as "Count")).from(customers)\n')),(0,n.kt)("p",null,"All of these examples and more can be found and run in zio-sql tests."),(0,n.kt)("h3",{id:"correlated-subquery-in-from-clause--derived-tables"},"Correlated subquery in from clause & Derived tables"),(0,n.kt)("p",null,"Just one last, a little more complex example before we wrap up this section, for which we would use the same ",(0,n.kt)("em",{parentName:"p"},"customers")," and ",(0,n.kt)("em",{parentName:"p"},"orders")," tables as before."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val customers = (uuid("id") ++ string("first_name") ++ string("last_name"))).table("customers")\n\nval customerId :*: fName :*: lName _ = customers.columns\n\nval orders = (uuid("id") ++ uuid("customer_id") ++ localDate("order_date")).table("orders")\n\nval orderId :*: fkCustomerId :*: orderDate :*: _ = orders.columns\n')),(0,n.kt)("p",null,"Imagine we want to write a query that selects all customers with the date of their last order. If you approach this problem with JOIN, you end up with one row of a customer with the newest order. In fact, this is a good example of correlated subquery inside ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," clause, where subquery needs to access ",(0,n.kt)("inlineCode",{parentName:"p"},"customer_id")," of the outer query. For this type of problems postgres introduced ",(0,n.kt)("strong",{parentName:"p"},"LATERAL")," keyword and MSSQL Server have ",(0,n.kt)("strong",{parentName:"p"},"CROSS APPLY")," and ",(0,n.kt)("strong",{parentName:"p"},"OUTER APPLY"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select customers.id, customers.first_name, customers.last_name, derived.order_date\n                from customers,\n                lateral  (\n                     select orders.order_date\n                     from orders\n                     where customers.id = orders.customer_id\n                     order by orders.order_date desc limit 1 ) derived order by derived.order_date desc\n")),(0,n.kt)("p",null,"Now it\u2019s starting to be a little more complicated. First we need to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"subselect")," which can access columns from another source table - ",(0,n.kt)("inlineCode",{parentName:"p"},"customers")," in our case. Then we specify this source as a type parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"subselect"),". In order to build the whole query we also need ",(0,n.kt)("inlineCode",{parentName:"p"},"derived.order_date")," which is coming from ",(0,n.kt)("inlineCode",{parentName:"p"},"derived")," table, so that we can extract that column. We create ",(0,n.kt)("inlineCode",{parentName:"p"},"derivedTable")," by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"asTable(tableName: String)")," method on ",(0,n.kt)("inlineCode",{parentName:"p"},"subselect"),". "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},' val derivedTable  = subselect[customers.TableType](orderDate)\n        .from(orders)\n        .limit(1)\n        .where(customerId === fkCustomerId)\n        .orderBy(Ordering.Desc(orderDate))\n        .asTable("derived")\n\nval orderDateDerived :*: _ = derivedTable\n')),(0,n.kt)("p",null,"Finally, we have all the ingredients we need to describe our query with zio-sql."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import PostgresSpecific.PostgresSpecificTable._\n\nval query =\n        select(customerId, fName, lName, orderDateDerived)\n          .from(customers.lateral(derivedTable))\n          .orderBy(Ordering.Desc(orderDateDerived))\n")),(0,n.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sviezypan/zio-sql-example"},"ZIO SQL Example Application")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sviezypan"},"Jaro Regec"))))}c.isMDXComponent=!0}}]);