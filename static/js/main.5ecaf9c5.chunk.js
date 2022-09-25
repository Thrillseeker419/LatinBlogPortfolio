(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(48),n=a.n(i),r=(a(57),a(58),a(8)),o=a(5),l=a(13),d=a(4),j=a(11),b=a(9),u=a(14),h=a(10),m=a(24),p=a.n(m),O="https://jsonplaceholder.typicode.com/posts",x=Object(u.b)("posts/fetchPosts",Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(O);case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),g=Object(u.b)("posts/addNewPost",function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(O,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(u.c)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducers:{postAdded:{reducer:function(e,t){e.posts.push(t.payload)},prepare:function(e,t){return{payload:{id:Object(u.d)(),status:"created",title:e,content:t}}}},postDeleted:{reducer:function(e,t){var a=Object(h.a)(e.posts).find((function(e){var a;return e.id.toString()===(null===(a=t.payload)||void 0===a?void 0:a.id)})),s=Object(h.a)(e.posts).filter((function(e){var a;return e.id.toString()!==(null===(a=t.payload)||void 0===a?void 0:a.id)}));if(void 0!==a){var c=Object(r.a)(Object(r.a)({},a),{},{status:"deleted"});e.posts=[].concat(Object(j.a)(s),[c])}},prepare:function(e){return{payload:{id:e}}}}},extraReducers:function(e){e.addCase(x.pending,(function(e,t){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="succeeded";var a=t.payload.map((function(e){return e.status="created",e}));e.posts=Object(j.a)(a)})).addCase(x.rejected,(function(e,t){e.status="failed",e.error=t.error.message})).addCase(g.pending,(function(e,t){e.status="loading"})).addCase(g.fulfilled,(function(e,t){e.status="succeeded",console.log("state.posts nbb",Object(h.a)(e.posts)),console.log("action.payload",t.payload);var a=Math.max.apply(Math,Object(h.a)(e.posts).map((function(e){return e.id}))),s=t.payload;s.id=a+1,s.status="created",e.posts.push(s),console.log("state.posts",Object(h.a)(e.posts))})).addCase(g.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),v=function(e){return e.posts.posts},N=function(e){return e.posts.status},k=function(e){return e.posts.error},y=function(e,t){return e.posts.posts.find((function(e){return e.id===t}))},w=f.actions,P=(w.postAdded,w.postDeleted),L=f.reducer,S=a(3),C=a(6),A=a(7),I=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",stateAbbr:"MA",geo:{lat:"-37.3159",lng:"81.1496"}},avatar_url:"avatars/person_ponytail_swirl.png?raw=true",phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona LLC",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell (you)",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",stateAbbr:"MO",geo:{lat:"-43.9509",lng:"-34.4618"}},avatar_url:"avatars/person_beard.png?raw=true",phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist Inc",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",avatar_url:"avatars/person_glasses.png?raw=true",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",stateAbbr:"NY",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson LLC",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",avatar_url:"avatars/person_colored.png?raw=true",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",stateAbbr:"ID",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery LLC",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",avatar_url:"avatars/person_hair_down_headband.png?raw=true",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",stateAbbr:"MN",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",avatar_url:"avatars/person_pixie_cut_light_brown.png?raw=true",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",stateAbbr:"ME",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman LLC",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",avatar_url:"avatars/person_spikey_pompadour.png?raw=true",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",stateAbbr:"CA",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",avatar_url:"avatars/person_short_gray.png?raw=true",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",stateAbbr:"PA",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",avatar_url:"avatars/person_ponytail.png?raw=true",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",stateAbbr:"CO",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons LLC",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",avatar_url:"avatars/person_pixie_cut_red.png?raw=true",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",stateAbbr:"GA",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],T=I.reduce((function(e,t,a){return Object(r.a)(Object(r.a)({},e),{},Object(A.a)({},t.id,t))}),{}),R="https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/avatars/person_anonymous.png?raw=true",_=a(15);function B(e,t){var a=e,s=t,c=[];return e&&0!==e.length?(a.reduce((function(e,t,a){var i=Object(r.a)({},t);return i.authorInfo=s[t.userId],c.push(i),i}),c),c):c}function z(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function E(e){return e.charAt(0).toUpperCase()+e.slice(1)}var D=a(1),M=function(){var e=Object(l.b)(),t=Object(S.m)(),a=Object(C.c)(),c=Object(o.a)(a,2),i=c[0],n=(c[1],i.get("pageNumber")),d=i.get("pageSize"),j=i.get("searchTerms"),b=j?j.split(" ").filter((function(e){return""!=e.trim()})).map((function(e){return e.trim()})):[],h=Object(s.useState)(j||""),m=Object(o.a)(h,2),p=m[0],O=m[1],g=Object(l.c)(v),f=Object(l.c)(N),y=Object(_.b)({loading:"loading"===f,indicator:Object(D.jsx)(_.a,{})}),w=y.containerProps,P=y.indicatorEl,L=(Object(l.c)(k),g&&B(g,T)||[]),A=n?Number(n):1,I=d?Number(d):10;L=L.sort((function(e,t){return e.title.localeCompare(t.title)})),b.length>0&&L.length>0&&(L=L.filter((function(e){return e.title.split(" ").some((function(e){return b.indexOf(e)>=0}))||e.body.split(" ").some((function(e){return b.indexOf(e)>=0}))||e.authorInfo.name.split(" ").some((function(e){return b.indexOf(e)>=0}))})));var M=function(e,t,a){var s=e.length,c=10,i=Math.ceil(s/c),n=1;c=parseInt(t.toString()),n=parseInt(a.toString()),c<1&&(c=1);n<1&&(n=1);var r={page:[],pageNumber:n,pageSize:c,totalPages:i,visiblePages:U(n,c,i)};return r.page=e.slice((n-1)*c,n*c),r}(L,I,A),F=M.page;function U(e,t,a){for(var s=[],c=e,i=e<a?4:5;c>0&&i>0;)s.push(c),c--,i--;var n=e+1;for(e<a&&i++;n<=a&&i>0;)s.push(n),n++,i--;return s.sort((function(e,t){return e-t}))}return Object(s.useEffect)((function(){document.title="Search Posts"}),[]),Object(s.useEffect)((function(){"idle"===f&&e(x())}),[f,e]),console.log("posts",g),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},w),{},{children:P})),"succeeded"===f?Object(D.jsxs)("div",{className:"center-it",children:[Object(D.jsx)("div",{className:"ui search-bar-container segment",children:Object(D.jsxs)("div",{className:"ui  transparent icon input",children:[Object(D.jsx)(C.b,{className:"create-post-link ui compact icon green button",title:"Create new post","aria-label":"Create new post",to:{pathname:"/LatinBlogPortfolio/Posts/Create",search:"?userId=2"},children:Object(D.jsxs)("i",{className:"plus icon",style:{width:"100%"},children:[" ","New"]})}),Object(D.jsx)("input",{value:p,onChange:function(e){return O(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t("/LatinBlogPortfolio/Posts?pageNumber=1&pageSize="+I+"&searchTerms="+p)},className:"search-bar-input",type:"text","aria-label":"Search text",placeholder:"Search posts...",style:{marginRight:"20px"}}),Object(D.jsx)(C.b,{className:"post-search-button",title:"Search","aria-label":"Search",to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber=1&pageSize="+I+"&searchTerms="+p},children:Object(D.jsx)("i",{className:"search link icon"})})]})}),F.map((function(e){return"created"===e.status&&Object(D.jsx)(C.b,{to:"/LatinBlogPortfolio/Posts/".concat(e.id),title:"View post","aria-label":"View post",children:Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"ui items",children:Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:e.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.authorInfo.avatar_url:R,alt:"Avatar for the author of this post"})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("h2",{className:"header",children:z(e.title)}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsx)("span",{children:e.authorInfo?e.authorInfo.company.name:"Company Unknown"})}),Object(D.jsx)("div",{className:"description",children:Object(D.jsx)("p",{children:E(e.body)})}),Object(D.jsxs)("div",{className:"extra",children:["Authored by:"," ",e.authorInfo?e.authorInfo.name:"Unknown"]})]})]})})})},Object(u.d)())})),Object(D.jsx)("div",{className:"center-align-flex",children:Object(D.jsxs)("div",{className:"ui small basic icon buttons",children:[Object(D.jsx)(C.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.max(1,A-1)+"&pageSize="+I+"&searchTerms="+p},className:"ui button",children:Object(D.jsx)("i",{className:"angle left icon"})}),M.visiblePages.map((function(e){return Object(D.jsx)(C.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+e+"&pageSize="+I+"&searchTerms="+p},className:"ui button",children:e},Object(u.d)())})),Object(D.jsx)(C.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.min(M.totalPages,A+1)+"&pageSize="+I+"&searchTerms="+p},className:"ui button",children:Object(D.jsx)("i",{className:"angle right icon"})})]})})]}):"error"===f&&Object(D.jsxs)("div",{className:"Error",children:[Object(D.jsxs)("h1",{children:[Object(D.jsx)("i",{className:"exclamation triangle icon"})," An unexpected error has occured while making your request."]}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"Please try again or contact your administrator."})]})]})},F=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(!0),n=Object(o.a)(i,2),r=n[0],d=n[1],j=Object(s.useState)(""),b=Object(o.a)(j,2),u=b[0],h=b[1],m=Object(s.useState)(!0),p=Object(o.a)(m,2),O=p[0],x=p[1],f=Object(s.useState)("idle"),N=Object(o.a)(f,2),k=N[0],y=N[1],w=Object(S.m)(),P=Object(l.b)(),L=(Object(l.c)(v),[a,u].every((function(e){return""!==e}))&&"idle"===k);return Object(s.useEffect)((function(){document.title="Create A New Post"}),[]),Object(D.jsx)("section",{className:"single-post-container",children:Object(D.jsxs)("div",{className:"single-post ui piled segment",children:[Object(D.jsx)("h1",{children:"Add a New Post"}),Object(D.jsxs)("form",{className:"ui form add-post-body",children:[Object(D.jsxs)("div",{className:r?"field":"field error",children:[Object(D.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(D.jsx)("input",{type:"text",id:"postTitle",name:"postTitle","aria-label":"Post title",value:a,onChange:function(e){""===e.target.value||null===e.target.value||void 0===e.target.value?d(!1):d(!0),c(e.target.value)}})]}),Object(D.jsxs)("div",{className:O?"field":"field error",children:[Object(D.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(D.jsx)("textarea",{id:"postContent",name:"postContent","aria-label":"Post content",value:u,onChange:function(e){""===e.target.value||null===e.target.value||void 0===e.target.value?x(!1):x(!0),h(e.target.value)}})]}),Object(D.jsx)("button",{className:r&&O?"ui primary button":"ui primary button disabled",type:"button",title:"Save post","aria-label":"Save post",onClick:function(){if(L)try{y("pending"),P(g({title:a,body:u,userId:2})).unwrap().then((function(e){w("/LatinBlogPortfolio/Posts")})).catch((function(e){return console.log("post add error:",e)})),c(""),h("")}catch(e){console.log("post failed")}finally{y("idle")}},children:"Save Post"})]}),(!r||!O)&&Object(D.jsx)("div",{className:"ui error message",children:Object(D.jsxs)("ul",{className:"list",children:[!r&&Object(D.jsx)("li",{children:"Please enter a title for the post."}),!O&&Object(D.jsx)("li",{children:"Please enter content for the body of the post."})]})})]})})},U=function(){var e=Object(S.j)();return Object(D.jsx)("div",{className:"ultimate-parent",children:Object(D.jsxs)("div",{className:"header-outlet-parent",children:[Object(D.jsxs)("nav",{className:"nav-bar ui secondary menu",children:[Object(D.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio",title:"Home page","aria-label":"Home page",className:"/"===e.pathname?"active item":"item",children:"Home"}),Object(D.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio/Posts",title:"Search all posts","aria-label":"Search all posts",className:"/Posts"===e.pathname?"active item":"item",children:"Posts"}),Object(D.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio/Authors",title:"View all authors","aria-label":"View all authors",className:"/Authors"===e.pathname?"active item":"item",children:"Authors"}),Object(D.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio/Posts/Create?userId=2",title:"Create a new post","aria-label":"Create new post",className:"/Posts/Create"===e.pathname?"active item":"item",children:"Create"}),Object(D.jsx)("div",{className:"right menu",children:Object(D.jsx)("div",{className:"item",style:{marginRight:"40px"},children:Object(D.jsxs)("button",{title:"Reset all data","aria-label":"Reset all data",className:" ui basic button compact primary",onClick:function(e){localStorage.removeItem("applicationState"),window.location.pathname="/LatinBlogPortfolio",alert("All data has been reset to its original state")},children:[" ",Object(D.jsx)("i",{className:"undo alternate icon reset-icon"}),"Reset"]})})})]}),Object(D.jsx)("main",{className:"App",children:Object(D.jsx)(S.a,{})}),Object(D.jsxs)("footer",{className:"website-footer",children:[Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"ui stackable three column grid",children:[Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"About"}),Object(D.jsx)("p",{className:"text-justify",children:"This is a demo website that allows you to create, search for, and delete posts. You can view author information as well. It is built using the latest React, React-Router, Redux, Axios, and Fomantic UI and operates using a mock api. It was built with accessibility, responsiveness, and aesthetics in mind. Enjoy!"})]}),Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"Technologies"}),Object(D.jsxs)("ul",{className:"footer-link",children:[Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Javascript docs","aria-label":"Link to Javascript docs",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"Javascript"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to React docs","aria-label":"Link to React docs",href:"https://reactjs.org/",children:"React"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Redux docs","aria-label":"Link to Redux docs",href:"https://redux.js.org/",children:"Redux"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Redux Toolkit docs","aria-label":"Link to Redux Toolkit docs",href:"https://redux-toolkit.js.org/",children:"Redux Toolkit"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Redux Thunk docs","aria-label":"Link to Redux Thunk docs",href:"https://github.com/reduxjs/redux-thunk",children:"Redux-Thunk"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Typescript docs","aria-label":"Link to Typescript docs",href:"https://www.typescriptlang.org/",children:"Typescript"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Fomantic UI docs","aria-label":"Link to Fomantic UI docs",href:"https://fomantic-ui.com/",children:"Fomantic UI"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to React Router docs","aria-label":"Link to React Router docs",href:"https://reactrouter.com/en/main",children:"React Router"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Axios docs","aria-label":"Link to Axios docs",href:"https://www.npmjs.com/package/axios",children:"Axios"})})]})]}),Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"Helpful Links"}),Object(D.jsxs)("ul",{className:"footer-link",children:[Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to the code base","aria-label":"Link to the code base",href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:"Code Repository"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Email Thomas","aria-label":"Email Thomas",href:"mailto:tommy.loalbo@gmail.com",children:"Contact Me"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Thomas's LinkedIn","aria-label":"Link to Thomas's LinkedIn",href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:"LinkedIn"})})]})]})]}),Object(D.jsx)("hr",{})]}),Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"ui stackable two column grid",children:[Object(D.jsx)("div",{className:"column",children:Object(D.jsx)("p",{className:"copyright-text",children:"Copyright \xa9 2022 All Rights Reserved."})}),Object(D.jsx)("div",{className:"column",children:Object(D.jsxs)("ul",{className:"social-links",children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{title:"Email Thomas","aria-label":"Email Thomas",className:"google",href:"mailto:tommy.loalbo@gmail.com",children:Object(D.jsx)("i",{className:"google icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"github",title:"Link to the code base","aria-label":"Link to the code base",href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:Object(D.jsx)("i",{className:"github icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"stackoverflow",title:"Link to Thomas's StackOverflow","aria-label":"Link to Thomas's stack overflow",href:"https://stackoverflow.com/users/4526910/thrillseeker419",children:Object(D.jsx)("i",{className:"stack overflow icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"linkedIn",title:"Link to Thomas's LinkedIn","aria-label":"Link to Thomas's LinkedIn",href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:Object(D.jsx)("i",{className:"linkedin icon"})})})]})})]})})]})]})})},J=function(){var e=Object(S.o)().postId;console.log("SinglePostPage");var t=Object(l.c)((function(t){return y(t,Number(e))})),a=t&&B([t],T),c=Object(_.b)({loading:void 0===t,indicator:Object(D.jsx)(_.a,{})}),i=c.containerProps,n=c.indicatorEl;console.log("postsAndAuthors",a);var o=t&&a[0];return Object(s.useEffect)((function(){document.title="View A Single Post"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},i),{},{children:n}))," ",t?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsxs)("article",{className:"single-post ui piled segment",children:[Object(D.jsxs)("h1",{className:"ui header",children:[Object(D.jsx)("img",{src:o.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+o.authorInfo.avatar_url:R,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",z(o.title),Object(D.jsxs)("div",{className:"sub header",children:["by"," ",o.authorInfo?o.authorInfo.name:"Unknown"]})]}),Object(D.jsx)("div",{className:"single-post-body",children:Object(D.jsx)("p",{children:E(o.body)})}),Object(D.jsx)("div",{className:"delete-button-container",children:2===o.userId&&Object(D.jsxs)(C.b,{title:"Go to delete post","aria-label":"Go to delete post",to:{pathname:"/LatinBlogPortfolio/Posts/Delete/"+e,search:"?userId=2"},className:" ui red button",children:[Object(D.jsx)("i",{className:"trash icon"}),"Delete Post"]})})]})}):Object(D.jsx)(D.Fragment,{})]})},V=function(){return Object(s.useEffect)((function(){document.title="Page not found"}),[]),Object(D.jsxs)("div",{className:"not-found-container",children:[Object(D.jsx)("h1",{children:"404"}),Object(D.jsx)("p",{children:" Page not found."}),Object(D.jsx)(C.b,{to:"/LatinBlogPortfolio",children:"Return to home page."})]})},H=function(){Object(S.o)().param1;return Object(s.useEffect)((function(){document.title="The Communal Latin Blog"}),[]),Object(D.jsxs)("section",{className:"home-section",children:[Object(D.jsxs)("h1",{className:"ui center aligned icon header",children:[Object(D.jsx)("i",{className:"circular book open icon"}),"The Communal Latin Blog"]}),Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsx)("article",{className:"single-post ui piled segment ",children:Object(D.jsx)("p",{className:"single-post-body",children:"Ervin, we welcome you to The Communal Latin Blog! The community gathers here to practice their latin. Share your latin thoughts with the world. Connect with others. Enjoy learning another language by sharing stories with one another."})})})]})},K=function(){Object(S.o)().param1;var e=Object(l.c)(v);var t,a=(t="userId",e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{}));return Object(s.useEffect)((function(){document.title="View All Authors"}),[]),Object(D.jsx)("section",{children:Object(D.jsx)("div",{className:"ui link cards author-list-container",children:I&&I.map((function(e){return Object(D.jsxs)(C.b,{title:"View "+e.name+" details","aria-label":"View "+e.name+" details",className:"card",to:"".concat(e.id),children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:e?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.avatar_url:R,alt:"Avatar for "+e.name})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("div",{className:"header",children:e.name}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsx)("a",{children:e.email})}),Object(D.jsxs)("div",{className:"description",children:[e.company.name," - ",e.company.bs]})]}),Object(D.jsxs)("div",{className:"extra content",children:[Object(D.jsx)("span",{className:"right floated",children:e.website}),Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"comment icon"}),a[e.id]&&a[e.id].length||0," ","Posts"]})]})]},Object(u.d)())}))})})},G=function(){var e=Object(S.o)().authorId,t=I.find((function(t){return t.id.toString()===e})),a=Object(_.b)({loading:void 0===e,indicator:Object(D.jsx)(_.a,{})}),c=a.containerProps,i=a.indicatorEl;return Object(s.useEffect)((function(){document.title="View An Author's Details"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},c),{},{children:i}))," ",t?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsx)("article",{className:"single-post ui piled segment",children:Object(D.jsx)("div",{className:"ui items",children:Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:t?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+t.avatar_url:R,alt:"Avatar",className:"single-post-avatar ui medium circular image"})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("a",{className:"header",children:t.name}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsxs)("p",{children:[t.company.name," -"," ",E(t.company.bs)]})}),Object(D.jsxs)("div",{className:"ui list",children:[Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"user icon"}),Object(D.jsxs)("div",{className:"content",children:["@",t.username]})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"marker icon"}),Object(D.jsxs)("div",{className:"content",children:[t.address.street,", ",t.address.suite,","," ",t.address.city,", ",t.address.stateAbbr," ",t.address.zipcode]})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"mail icon"}),Object(D.jsx)("div",{className:"content",children:Object(D.jsx)("a",{href:"mailto:jack@semantic-ui.com",children:t.email})})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"linkify icon"}),Object(D.jsx)("div",{className:"content",children:Object(D.jsx)("a",{href:"https://"+t.website,children:t.website})})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"phone icon"}),Object(D.jsx)("div",{className:"content",children:t.phone})]})]})]})]})})})}):Object(D.jsx)(D.Fragment,{})]})},W=function(){var e=Object(S.o)().postId,t=Object(C.c)(),a=Object(o.a)(t,2),c=a[0],i=(a[1],Object(l.b)()),n=Object(S.m)(),d=c.get("userId"),j=Object(l.c)((function(t){return y(t,Number(e))})),b=j&&B([j],T),u=Object(_.b)({loading:void 0===j,indicator:Object(D.jsx)(_.a,{})}),h=u.containerProps,m=u.indicatorEl,p=j&&b[0];return Object(s.useEffect)((function(){document.title="Delete Your Post"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},h),{},{children:m}))," ",j&&"2"===d?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsxs)("article",{className:"single-post ui piled segment",children:[Object(D.jsx)("h1",{children:" Are you sure you want to delete this post?"}),Object(D.jsxs)("div",{className:"ui segment",children:[Object(D.jsxs)("h2",{className:"ui header",children:[Object(D.jsx)("img",{src:p.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public"+p.authorInfo.avatar_url:R,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",z(p.title),Object(D.jsxs)("div",{className:"sub header",children:["by"," ",p.authorInfo?p.authorInfo.name:"Unknown"]})]}),Object(D.jsx)("div",{className:"single-post-body",children:Object(D.jsxs)("p",{children:[E(p.body).slice(0,50),"...",Object(D.jsx)("br",{})]})}),Object(D.jsx)("div",{className:"delete-button-container",children:2===p.userId&&Object(D.jsxs)("button",{title:"Confirm delete post","aria-label":"Confirm delete post",onClick:function(){try{i(P(p.id.toString()));n("/LatinBlogPortfolio/Posts")}catch(e){console.log("delete failed",e)}},className:" ui red button",children:[Object(D.jsx)("i",{className:"trash icon"}),"Delete Post"]})})]})]})}):j&&"2"!==d?Object(D.jsx)("h1",{style:{marginLeft:"10px"},children:"401 Unauthorized"}):Object(D.jsx)("h1",{style:{marginLeft:"10px"},children:"404 Not Found"})]})};var Y=function(){return Object(D.jsx)(S.d,{children:Object(D.jsxs)(S.b,{path:"/LatinBlogPortfolio",element:Object(D.jsx)(U,{}),children:[Object(D.jsx)(S.b,{path:"*",element:Object(D.jsx)(V,{})}),Object(D.jsx)(S.b,{index:!0,element:Object(D.jsx)(H,{})}),Object(D.jsxs)(S.b,{path:"Posts",children:[Object(D.jsx)(S.b,{index:!0,element:Object(D.jsx)(M,{})}),Object(D.jsx)(S.b,{path:"Create",element:Object(D.jsx)(F,{})}),Object(D.jsx)(S.b,{path:"Delete",children:Object(D.jsx)(S.b,{path:":postId",element:Object(D.jsx)(W,{})})}),Object(D.jsx)(S.b,{path:":postId",element:Object(D.jsx)(J,{})})]}),Object(D.jsxs)(S.b,{path:"Authors",children:[Object(D.jsx)(S.b,{index:!0,element:Object(D.jsx)(K,{})}),Object(D.jsx)(S.b,{path:":authorId",element:Object(D.jsx)(G,{})})]})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))},Q=Object(u.b)("posts/fetchPosts",Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),X=Object(u.c)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},reset:function(e){e.value=0},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Q.pending,(function(e,t){}))}}),Z=X.actions,$=(Z.increment,Z.decrement,Z.reset,Z.incrementByAmount,X.reducer),ee=function(e){return function(t){return function(a){var s=t(a),c=e.getState;return localStorage.setItem("applicationState",JSON.stringify(c())),s}}},te=Object(u.a)({reducer:{counter:$,posts:L},preloadedState:function(){if(null!==localStorage.getItem("applicationState"))return JSON.parse(localStorage.getItem("applicationState")||"")}(),middleware:function(e){return e().concat(ee)}});a(87);n.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(l.a,{store:te,children:Object(D.jsx)(C.a,{children:Object(D.jsx)(S.d,{children:Object(D.jsx)(S.b,{path:"*",element:Object(D.jsx)(Y,{})})})})})})),q()}},[[88,1,2]]]);
//# sourceMappingURL=main.5ecaf9c5.chunk.js.map