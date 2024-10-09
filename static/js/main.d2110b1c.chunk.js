(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{66:function(e,t,a){},67:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(54),c=a.n(i),r=(a(66),a(67),a(6)),o=a(4),l=a(13),d=a(5),j=a(11),b=a(7),u=a(15),h=a(10),m=a(29),p=a.n(m),O="https://jsonplaceholder.typicode.com/posts",x=Object(u.b)("posts/fetchPosts",Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(O);case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),g=Object(u.b)("posts/addNewPost",function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(O,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(u.c)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducers:{postAdded:{reducer:function(e,t){e.posts.push(t.payload)},prepare:function(e,t){return{payload:{id:Object(u.d)(),status:"created",title:e,content:t}}}},postDeleted:{reducer:function(e,t){var a=Object(h.a)(e.posts).find((function(e){var a;return e.id.toString()===(null===(a=t.payload)||void 0===a?void 0:a.id)})),s=Object(h.a)(e.posts).filter((function(e){var a;return e.id.toString()!==(null===(a=t.payload)||void 0===a?void 0:a.id)}));if(void 0!==a){var n=Object(r.a)(Object(r.a)({},a),{},{status:"deleted"});e.posts=[].concat(Object(j.a)(s),[n])}},prepare:function(e){return{payload:{id:e}}}}},extraReducers:function(e){e.addCase(x.pending,(function(e,t){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="succeeded";var a=t.payload.map((function(e){return e.status="created",e}));e.posts=Object(j.a)(a)})).addCase(x.rejected,(function(e,t){e.status="failed",e.error=t.error.message})).addCase(g.pending,(function(e,t){e.status="loading"})).addCase(g.fulfilled,(function(e,t){e.status="succeeded",console.log("state.posts nbb",Object(h.a)(e.posts)),console.log("action.payload",t.payload);var a=Math.max.apply(Math,Object(h.a)(e.posts).map((function(e){return e.id}))),s=t.payload;s.id=a+1,s.status="created",e.posts.push(s),console.log("state.posts",Object(h.a)(e.posts))})).addCase(g.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),v=function(e){return e.posts.posts},N=function(e){return e.posts.status},k=function(e){return e.posts.error},w=function(e,t){return e.posts.posts.find((function(e){return e.id===t}))},y=f.actions,L=(y.postAdded,y.postDeleted),P=f.reducer,C=a(3),S=a(8),I=a(9),A=[{id:1,name:"Leanne Graham",username:"Bret",email:"SincereLeanne@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",stateAbbr:"MA",geo:{lat:"-37.3159",lng:"81.1496"}},avatar_url:"avatars/person_ponytail_swirl.png?raw=true",phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona LLC",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell (you)",username:"Antonette",email:"ervin.howell@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",stateAbbr:"MO",geo:{lat:"-43.9509",lng:"-34.4618"}},avatar_url:"avatars/person_beard.png?raw=true",phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist Inc",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",avatar_url:"avatars/person_glasses.png?raw=true",username:"Samantha",email:"ClementineNathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",stateAbbr:"NY",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson LLC",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",avatar_url:"avatars/person_colored.png?raw=true",username:"Karianne",email:"Patricia.Lebsack@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",stateAbbr:"ID",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery LLC",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",avatar_url:"avatars/person_hair_down_headband.png?raw=true",username:"Kamren",email:"Chelsey.Dietrich@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",stateAbbr:"MN",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",avatar_url:"avatars/person_pixie_cut_light_brown.png?raw=true",username:"Leopoldo_Corkery",email:"Dennis.Schulist@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",stateAbbr:"ME",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman LLC",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",avatar_url:"avatars/person_spikey_pompadour.png?raw=true",username:"Elwyn.Skiles",email:"Kurtis.Weissnat@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",stateAbbr:"CA",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",avatar_url:"avatars/person_short_gray.png?raw=true",username:"Maxime_Nienow",email:"Nicholas.Runolfsdottir@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",stateAbbr:"PA",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",avatar_url:"avatars/person_ponytail.png?raw=true",username:"Delphine",email:"Glenna.Reichert@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",stateAbbr:"CO",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons LLC",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",avatar_url:"avatars/person_pixie_cut_red.png?raw=true",username:"Moriah.Stanton",email:"Clementina.DuBuque@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",stateAbbr:"GA",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],T=A.reduce((function(e,t,a){return Object(r.a)(Object(r.a)({},e),{},Object(I.a)({},t.id,t))}),{}),R="https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/avatars/person_anonymous.png?raw=true",_=a(17);function B(e,t){var a=e,s=t,n=[];return e&&0!==e.length?(a.reduce((function(e,t,a){var i=Object(r.a)({},t);return i.authorInfo=s[t.userId],n.push(i),i}),n),n):n}function E(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function z(e){return e.charAt(0).toUpperCase()+e.slice(1)}var D=a(1),F=function(){var e=Object(l.b)(),t=Object(C.m)(),a=Object(S.c)(),n=Object(o.a)(a,2),i=n[0],c=(n[1],i.get("pageNumber")),d=i.get("pageSize"),j=i.get("searchTerms"),b=j?j.split(" ").filter((function(e){return""!=e.trim()})).map((function(e){return e.trim()})):[],h=Object(s.useState)(j||""),m=Object(o.a)(h,2),p=m[0],O=m[1],g=Object(l.c)(v),f=Object(l.c)(N),w=Object(_.b)({loading:"loading"===f,indicator:Object(D.jsx)(_.a,{})}),y=w.containerProps,L=w.indicatorEl,P=(Object(l.c)(k),g&&B(g,T)||[]),I=c?Number(c):1,A=d?Number(d):10;P=P.sort((function(e,t){return e.title.localeCompare(t.title)})),console.log("postsAndAuthors",P),b.length>0&&P.length>0&&(P=P.filter((function(e){return e.title.toLowerCase().split(" ").some((function(e){return b.indexOf(e)>=0}))||e.body.toLowerCase().split(" ").some((function(e){return b.indexOf(e)>=0}))||e.authorInfo.name.toLowerCase().split(" ").some((function(e){return b.indexOf(e)>=0}))||e.authorInfo.company.name.toLowerCase().split(" ").some((function(e){return b.indexOf(e)>=0}))})));var F=function(e,t,a){var s=e.length,n=10,i=Math.ceil(s/n),c=1;n=parseInt(t.toString()),c=parseInt(a.toString()),n<1&&(n=1);c<1&&(c=1);var r={page:[],pageNumber:c,pageSize:n,totalPages:i,visiblePages:U(c,n,i)};return r.page=e.slice((c-1)*n,c*n),r}(P,A,I),M=F.page;function U(e,t,a){for(var s=[],n=e,i=e<a?4:5;n>0&&i>0;)s.push(n),n--,i--;var c=e+1;for(e<a&&i++;c<=a&&i>0;)s.push(c),c++,i--;return s.sort((function(e,t){return e-t}))}return Object(s.useEffect)((function(){document.title="Search Posts"}),[]),Object(s.useEffect)((function(){"idle"===f&&e(x())}),[f,e]),console.log("posts",g),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},y),{},{children:L})),"succeeded"===f?Object(D.jsxs)("div",{className:"center-it",children:[Object(D.jsx)("div",{className:"ui search-bar-container segment",children:Object(D.jsxs)("div",{className:"ui  transparent icon input",children:[Object(D.jsx)(S.b,{className:"create-post-link ui compact icon green button",title:"Create new post","aria-label":"Create new post",to:{pathname:"/LatinBlogPortfolio/Posts/Create",search:"?userId=2"},children:Object(D.jsxs)("i",{className:"plus icon",style:{width:"100%"},children:[" ","Create"]})}),Object(D.jsx)("input",{value:p,onChange:function(e){return O(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t("/LatinBlogPortfolio/Posts?pageNumber=1&pageSize="+A+"&searchTerms="+p)},className:"search-bar-input",type:"text","aria-label":"Search text",placeholder:"Search posts...",style:{marginRight:"20px"}}),Object(D.jsx)(S.b,{className:"post-search-button",title:"Search","aria-label":"Search",to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber=1&pageSize="+A+"&searchTerms="+p},children:Object(D.jsx)("i",{className:"search link icon"})})]})}),M.map((function(e){return"created"===e.status&&Object(D.jsx)(S.b,{to:"/LatinBlogPortfolio/Posts/".concat(e.id),title:"View post","aria-label":"View post",children:Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"ui items",children:Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:e.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.authorInfo.avatar_url:R,alt:"Avatar for ".concat(e.authorInfo?e.authorInfo.name:"the author")})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("h2",{className:"header header-content",children:E(e.title)}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsx)("span",{children:e.authorInfo?e.authorInfo.company.name:"Company Unknown"})}),Object(D.jsx)("div",{className:"description",children:Object(D.jsx)("p",{className:"posts-list-item-content",children:z(e.body)})}),Object(D.jsxs)("div",{className:"extra",children:["Authored by:"," ",e.authorInfo?e.authorInfo.name:"Unknown"]})]})]})})})},Object(u.d)())})),Object(D.jsx)("div",{className:"center-align-flex",children:Object(D.jsxs)("div",{className:"ui small basic icon buttons",children:[Object(D.jsx)(S.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.max(1,I-1)+"&pageSize="+A+"&searchTerms="+p},"aria-label":"Go to previous results page",className:"ui button",children:Object(D.jsx)("i",{className:"angle left icon"})}),F.visiblePages.map((function(e){return Object(D.jsx)(S.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+e+"&pageSize="+A+"&searchTerms="+p},"aria-label":"Go to page ".concat(e),className:"ui button",children:e},Object(u.d)())})),Object(D.jsx)(S.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.min(F.totalPages,I+1)+"&pageSize="+A+"&searchTerms="+p},"aria-label":"Go to next results page",className:"ui button",children:Object(D.jsx)("i",{className:"angle right icon"})})]})})]}):"error"===f&&Object(D.jsxs)("div",{className:"Error",children:[Object(D.jsxs)("h1",{children:[Object(D.jsx)("i",{className:"exclamation triangle icon"})," An unexpected error has occured while making your request."]}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"Please try again or contact your administrator."})]})]})},M=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!0),c=Object(o.a)(i,2),r=c[0],j=c[1],u=Object(s.useState)(""),h=Object(o.a)(u,2),m=h[0],p=h[1],O=Object(s.useState)(!0),x=Object(o.a)(O,2),f=x[0],N=x[1],k=Object(s.useState)("idle"),w=Object(o.a)(k,2),y=w[0],L=w[1],P=Object(C.m)(),S=Object(l.b)(),I=(Object(l.c)(v),function(e){return""!==e.trim()}),A=[a,m].every(I)&&"idle"===y,T=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=18;break}return e.prev=1,L("pending"),e.next=5,S(g({title:a,body:m,userId:2})).unwrap();case 5:P("/LatinBlogPortfolio/Posts"),n(""),p(""),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("post failed"),alert("Failed to save the post. Please try again.");case 13:return e.prev=13,L("idle"),e.finish(13);case 16:e.next=20;break;case 18:j(I(a)),N(I(m));case 20:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){document.title="Create A New Post"}),[]),Object(D.jsx)("section",{className:"single-post-container",children:Object(D.jsxs)("div",{className:"single-post ui piled segment",children:[Object(D.jsx)("h1",{children:"Add a New Post"}),Object(D.jsxs)("form",{className:"ui form add-post-body",children:[Object(D.jsxs)("div",{className:r?"field":"field error",children:[Object(D.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(D.jsx)("input",{type:"text",id:"postTitle",name:"postTitle","aria-label":"Post title",value:a,onChange:function(e){var t=e.target.value;n(t),j(I(t))}})]}),Object(D.jsxs)("div",{className:f?"field":"field error",children:[Object(D.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(D.jsx)("textarea",{id:"postContent",name:"postContent","aria-label":"Post content",value:m,onChange:function(e){var t=e.target.value;p(t),N(I(t))}})]}),Object(D.jsx)("button",{className:"ui primary button",type:"button",title:"Save post","aria-label":"Save post",onClick:T,disabled:"pending"===y||!r||!f,children:"pending"===y?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("i",{className:"spinner loading icon"}),Object(D.jsx)("span",{children:"Saving..."})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("i",{className:"save icon"}),Object(D.jsx)("span",{children:"Save Post"})]})})]}),(!r||!f)&&Object(D.jsx)("div",{className:"ui error message","aria-live":"polite",children:Object(D.jsxs)("ul",{className:"list",children:[!r&&Object(D.jsx)("li",{children:"Please enter a title for the post."}),!f&&Object(D.jsx)("li",{children:"Please enter content for the body of the post."})]})})]})})},U=function(){var e=Object(C.j)();return Object(s.useEffect)((function(){var e=document.querySelector("h1");e&&e.focus()}),[e]),Object(D.jsx)("div",{className:"ultimate-parent",children:Object(D.jsxs)("div",{className:"outlet-parent",children:[Object(D.jsxs)("header",{className:"header-outlet-parent",children:[Object(D.jsx)("meta",{name:"description",content:"A blog website for Latin writing. Create and explore Latin blog posts."}),Object(D.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(D.jsxs)("nav",{className:"nav-bar ui secondary menu",role:"navigation",children:[Object(D.jsx)(S.b,{role:"link",to:"/LatinBlogPortfolio",title:"Home page","aria-label":"Home page","aria-current":"/"===e.pathname?"page":void 0,className:"/"===e.pathname?"active item":"item",children:"Home"}),Object(D.jsx)(S.b,{role:"link",to:"/LatinBlogPortfolio/Posts",title:"Search all posts","aria-label":"Search all posts","aria-current":"/Posts"===e.pathname?"page":void 0,className:"/Posts"===e.pathname?"active item":"item",children:"Posts"}),Object(D.jsx)(S.b,{role:"link",to:"/LatinBlogPortfolio/Authors",title:"View all authors","aria-label":"View all authors","aria-current":"/Authors"===e.pathname?"page":void 0,className:"/Authors"===e.pathname?"active item":"item",children:"Authors"}),Object(D.jsx)(S.b,{role:"link",to:"/LatinBlogPortfolio/Posts/Create?userId=2",title:"Create a new post","aria-label":"Create new post","aria-current":"/Posts/Create"===e.pathname?"page":void 0,className:"/Posts/Create"===e.pathname?"active item":"item",children:"Create"}),Object(D.jsx)("div",{className:"right menu",children:Object(D.jsx)("div",{className:"item",style:{marginRight:"40px"},children:Object(D.jsxs)("button",{title:"Reset all data","aria-label":"Reset all data and return to the original state",className:" ui basic button compact primary",onClick:function(e){localStorage.removeItem("applicationState"),window.location.pathname="/LatinBlogPortfolio",alert("All data has been reset to its original state")},children:[" ",Object(D.jsx)("i",{className:"undo alternate icon reset-icon"}),"Reset Data"]})})})]})]}),Object(D.jsx)("main",{className:"App",role:"main",children:Object(D.jsx)(C.a,{})}),Object(D.jsxs)("footer",{className:"website-footer",role:"contentinfo",children:[Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"ui stackable three column grid",children:[Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"About"}),Object(D.jsxs)("p",{className:"text-justify",children:["This is a demo website that allows you to create, search for, and delete posts. You can view author information as well. It is built using the latest React, React-Router, Redux, Axios, and Fomantic UI and operates using a mock api. It was built with accessibility, responsiveness, and aesthetics in mind. Enjoy! Find the code base ",Object(D.jsx)("a",{href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:"here"}),"."]})]}),Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"Technologies"}),Object(D.jsxs)("ul",{className:"footer-link",children:[Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Javascript docs","aria-label":"Link to Javascript docs",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"Javascript"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to React docs","aria-label":"Link to React docs",href:"https://reactjs.org/",children:"React"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Redux docs","aria-label":"Link to Redux docs",href:"https://redux.js.org/",children:"Redux"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Redux Toolkit docs","aria-label":"Link to Redux Toolkit docs",href:"https://redux-toolkit.js.org/",children:"Redux Toolkit"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Redux Thunk docs","aria-label":"Link to Redux Thunk docs",href:"https://github.com/reduxjs/redux-thunk",children:"Redux-Thunk"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Typescript docs","aria-label":"Link to Typescript docs",href:"https://www.typescriptlang.org/",children:"Typescript"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Fomantic UI docs","aria-label":"Link to Fomantic UI docs",href:"https://fomantic-ui.com/",children:"Fomantic UI"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to React Router docs","aria-label":"Link to React Router docs",href:"https://reactrouter.com/en/main",children:"React Router"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Axios docs","aria-label":"Link to Axios docs",href:"https://www.npmjs.com/package/axios",children:"Axios"})})]})]}),Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"Helpful Links"}),Object(D.jsxs)("ul",{className:"footer-link",children:[Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to the code base","aria-label":"Link to the code base",href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:"Code Repository"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Email Thomas","aria-label":"Email Thomas",href:"mailto:tommy.loalbo@gmail.com",children:"Contact Me"})}),Object(D.jsx)("li",{className:"footer-link-li",children:Object(D.jsx)("a",{className:"footer-link-anchor",title:"Link to Thomas's LinkedIn","aria-label":"Link to Thomas Loalbo's LinkedIn profile",href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:"LinkedIn"})})]})]})]}),Object(D.jsx)("hr",{})]}),Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"ui stackable two column grid",children:[Object(D.jsx)("div",{className:"column",children:Object(D.jsx)("p",{className:"copyright-text",children:"Copyright \xa9 2022 All Rights Reserved."})}),Object(D.jsx)("div",{className:"column",children:Object(D.jsxs)("ul",{className:"social-links",children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{title:"Email Thomas","aria-label":"Email Thomas",className:"google",href:"mailto:tommy.loalbo@gmail.com",children:Object(D.jsx)("i",{className:"google icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"github",title:"Link to the code base","aria-label":"Link to the code base",href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:Object(D.jsx)("i",{className:"github icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"stackoverflow",title:"Link to Thomas's StackOverflow","aria-label":"Link to Thomas Loalbo's StackOverflow profile",href:"https://stackoverflow.com/users/4526910/thrillseeker419",children:Object(D.jsx)("i",{className:"stack overflow icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"linkedIn",title:"Link to Thomas's LinkedIn","aria-label":"Link to Thomas's LinkedIn",href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:Object(D.jsx)("i",{className:"linkedin icon"})})})]})})]})})]})]})})},G=function(){var e=Object(C.o)().postId;console.log("SinglePostPage");var t=Object(l.c)((function(t){return w(t,Number(e))})),a=t&&B([t],T),n=Object(_.b)({loading:void 0===t,indicator:Object(D.jsx)(_.a,{})}),i=n.containerProps,c=n.indicatorEl;console.log("postsAndAuthors",a);var o=t&&a[0];return Object(s.useEffect)((function(){document.title="View A Single Post"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},i),{},{children:c}))," ",t?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsxs)("article",{className:"single-post ui piled segment",children:[Object(D.jsxs)("h1",{className:"ui header",children:[Object(D.jsx)("img",{src:o.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+o.authorInfo.avatar_url:R,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",E(o.title),Object(D.jsxs)("div",{className:"sub header",children:["by"," ",o.authorInfo?o.authorInfo.name:"Unknown"]})]}),Object(D.jsx)("div",{className:"single-post-body",children:Object(D.jsx)("p",{children:z(o.body)})}),Object(D.jsx)("div",{className:"delete-button-container",children:2===o.userId&&Object(D.jsxs)(S.b,{title:"Go to delete post","aria-label":"Go to delete post",to:{pathname:"/LatinBlogPortfolio/Posts/Delete/"+e,search:"?userId=2"},className:" ui red button",children:[Object(D.jsx)("i",{className:"trash icon"}),"Delete Post"]})})]})}):Object(D.jsx)(D.Fragment,{})]})},V=function(){return Object(s.useEffect)((function(){document.title="Page not found"}),[]),Object(D.jsxs)("div",{className:"not-found-container",children:[Object(D.jsx)("h1",{children:"404"}),Object(D.jsx)("p",{children:" Page not found."}),Object(D.jsx)(S.b,{to:"/LatinBlogPortfolio",children:"Return to home page."})]})},W=a(102),J=a.p+"static/media/latinWriting.57d301cf.png",K=a.p+"static/media/latinWriting3.d1954b9b.png",H=a.p+"static/media/latinWriting4.f3697f24.png",q=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(0),c=Object(o.a)(i,2),r=c[0],l=c[1];Object(s.useEffect)((function(){document.title="The Communal Latin Blog"}),[]);return Object(D.jsxs)("section",{className:"home-section",children:[Object(D.jsxs)("h1",{className:"ui center aligned icon header",children:[Object(D.jsx)("i",{className:"circular book open icon"}),"The Communal Latin Blog"]}),Object(D.jsxs)("div",{className:"single-post-container",children:[Object(D.jsx)("article",{className:"single-post ui piled segment",children:Object(D.jsx)("p",{className:"single-post-body",children:"Ervin! We welcome you to The Communal Latin Blog! The community gathers here to practice their latin. Share your latin thoughts with the world. Connect with others. Enjoy learning another language by sharing stories with one another."})}),Object(D.jsxs)("article",{className:"carousel-article",role:"region","aria-label":"Latin Writing Carousel","aria-roledescription":"carousel",children:[Object(D.jsxs)(W.a,{className:"custom-carousel",fade:!0,interval:a?null:5e3,controls:!0,indicators:!0,activeIndex:r,onSelect:function(e){null!==e&&l(e)},children:[Object(D.jsxs)(W.a.Item,{children:[Object(D.jsx)("img",{className:"d-block w-100",src:J,alt:"First picture of Latin writing"}),Object(D.jsxs)(W.a.Caption,{"aria-live":"polite",children:[Object(D.jsx)("h3",{children:"Write to your heart's content!"}),Object(D.jsx)("p",{children:"People are here for it!"})]})]}),Object(D.jsxs)(W.a.Item,{children:[Object(D.jsx)("img",{className:"d-block w-100",src:K,alt:"Second picture of Latin writing"}),Object(D.jsxs)(W.a.Caption,{"aria-live":"polite",children:[Object(D.jsx)("h3",{children:"Read someone else's Latin"}),Object(D.jsx)("p",{children:"Explore various blogs"})]})]}),Object(D.jsxs)(W.a.Item,{children:[Object(D.jsx)("img",{className:"d-block w-100",src:H,alt:"Third picture of Latin writing"}),Object(D.jsxs)(W.a.Caption,{"aria-live":"polite",children:[Object(D.jsx)("h3",{children:"Meet the community"}),Object(D.jsx)("p",{children:"Connect with others of common interests!"})]})]})]}),Object(D.jsx)("div",{className:"carousel-controls",children:Object(D.jsx)("button",{onClick:function(){return n(!a)},"aria-pressed":a,"aria-label":a?"Play the carousel":"Pause the carousel",children:a?"Play":"Pause"})})]})]})]})},Y=function(){Object(C.o)().param1;var e=Object(l.c)(v);var t=Object(s.useMemo)((function(){return t="userId",e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{});var t}),[e]);return Object(s.useEffect)((function(){document.title="View ".concat(A.length," Authors")}),[]),e&&A?Object(D.jsx)("section",{children:Object(D.jsx)("div",{className:"ui link cards author-list-container",children:A&&A.map((function(e){var a;return Object(D.jsxs)(S.b,{title:"View "+e.name+" details","aria-label":"View "+e.name+" details",className:"card",to:"".concat(e.id),children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:e?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.avatar_url:R,alt:"Avatar for "+e.name})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("h2",{className:"header",children:e.name}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsx)("span",{children:e.email})}),Object(D.jsxs)("div",{className:"description",children:[e.company.name," - ",e.company.bs]})]}),Object(D.jsxs)("div",{className:"extra content",children:[Object(D.jsx)("span",{className:"right floated",children:e.website}),Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"comment icon"}),(null===(a=t[e.id])||void 0===a?void 0:a.length)||0," ","Posts"]})]})]},e.id)}))})}):Object(D.jsx)("div",{children:"Loading authors..."})},Q=function(){var e=Object(C.o)().authorId,t=A.find((function(t){return t.id.toString()===e})),a=Object(_.b)({loading:!t,indicator:Object(D.jsx)(_.a,{})}),n=a.containerProps,i=a.indicatorEl;return Object(s.useEffect)((function(){document.title="View An Author's Details"}),[]),t?Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},n),{},{children:i}))," ",t?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsx)("article",{className:"single-post ui piled segment",children:Object(D.jsx)("div",{className:"ui items",children:Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:t?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+t.avatar_url:R,alt:"Avatar of ".concat(t.name),className:"single-post-avatar ui medium circular image"})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("h2",{className:"header",children:t.name}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsxs)("p",{children:[t.company.name," -"," ",z(t.company.bs)]})}),Object(D.jsxs)("div",{className:"ui list",children:[Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"user icon"}),Object(D.jsxs)("div",{className:"content",children:["@",t.username]})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"marker icon"}),Object(D.jsxs)("div",{className:"content",children:[t.address.street,", ",t.address.suite,","," ",t.address.city,", ",t.address.stateAbbr&&"".concat(t.address.stateAbbr," ")," ",t.address.zipcode]})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"mail icon"}),Object(D.jsx)("div",{className:"content",children:Object(D.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"linkify icon"}),Object(D.jsx)("div",{className:"content",children:Object(D.jsx)("a",{href:"https://"+t.website,children:t.website})})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"phone icon"}),Object(D.jsx)("div",{className:"content",children:t.phone})]})]})]})]})})})}):Object(D.jsx)(D.Fragment,{})]}):Object(D.jsx)(V,{})},X=function(){var e=Object(C.o)().postId,t=Object(S.c)(),a=Object(o.a)(t,2),n=a[0],i=(a[1],Object(s.useState)("idle")),c=Object(o.a)(i,2),j=c[0],u=c[1],h=Object(l.b)(),m=Object(C.m)(),p=n.get("userId"),O=Object(l.c)((function(t){return w(t,Number(e))})),x=O&&B([O],T),g=Object(_.b)({loading:void 0===O,indicator:Object(D.jsx)(_.a,{})}),f=g.containerProps,v=g.indicatorEl,N=O&&x[0];console.log("singlePost",N);var k=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u("pending"),e.next=4,h(L(N.id.toString()));case 4:m("/LatinBlogPortfolio/Posts"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("delete failed",e.t0),alert("Failed to delete the post. Please try again.");case 11:return e.prev=11,u("idle"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){document.title="Delete Your Post"}),[]),O?"2"!==p?Object(D.jsx)(V,{}):Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},f),{},{children:v}))," ",O&&"2"===p?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsxs)("article",{className:"single-post ui piled segment",children:[Object(D.jsx)("h1",{children:" Are you sure you want to delete this post?"}),Object(D.jsxs)("div",{className:"ui segment",children:[Object(D.jsxs)("h2",{className:"ui header",children:[Object(D.jsx)("img",{src:N.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/avatars/person_beard.png?raw=true"+N.authorInfo.avatar_url:R,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",E(N.title),Object(D.jsxs)("div",{className:"sub header",children:["by"," ",N.authorInfo?N.authorInfo.name:"Unknown"]})]}),Object(D.jsx)("div",{className:"single-post-body",children:Object(D.jsxs)("p",{children:[z(N.body).slice(0,50),"...",Object(D.jsx)("br",{})]})}),Object(D.jsx)("div",{className:"delete-button-container",children:2===N.userId&&Object(D.jsx)("button",{title:"Confirm delete post","aria-label":"Confirm delete post",onClick:k,className:" ui red button",disabled:"pending"===j,children:"pending"===j?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("i",{className:"spinner loading icon"})," Deleting..."]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("i",{className:"trash icon"})," Delete Post"]})})})]})]})}):O&&"2"!==p?Object(D.jsx)("h1",{style:{marginLeft:"10px"},children:"401 Unauthorized"}):Object(D.jsx)("h1",{style:{marginLeft:"10px"},children:"404 Not Found"})]}):Object(D.jsx)(V,{})};var Z=function(){return Object(D.jsx)(C.d,{children:Object(D.jsxs)(C.b,{path:"/LatinBlogPortfolio",element:Object(D.jsx)(U,{}),children:[Object(D.jsx)(C.b,{path:"*",element:Object(D.jsx)(V,{})}),Object(D.jsx)(C.b,{index:!0,element:Object(D.jsx)(q,{})}),Object(D.jsxs)(C.b,{path:"Posts",children:[Object(D.jsx)(C.b,{index:!0,element:Object(D.jsx)(F,{})}),Object(D.jsx)(C.b,{path:"Create",element:Object(D.jsx)(M,{})}),Object(D.jsx)(C.b,{path:"Delete",children:Object(D.jsx)(C.b,{path:":postId",element:Object(D.jsx)(X,{})})}),Object(D.jsx)(C.b,{path:":postId",element:Object(D.jsx)(G,{})})]}),Object(D.jsxs)(C.b,{path:"Authors",children:[Object(D.jsx)(C.b,{index:!0,element:Object(D.jsx)(Y,{})}),Object(D.jsx)(C.b,{path:":authorId",element:Object(D.jsx)(Q,{})})]})]})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))},ee=Object(u.b)("posts/fetchPosts",Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),te=Object(u.c)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},reset:function(e){e.value=0},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(ee.pending,(function(e,t){}))}}),ae=te.actions,se=(ae.increment,ae.decrement,ae.reset,ae.incrementByAmount,te.reducer),ne=function(e){return function(t){return function(a){var s=t(a),n=e.getState;return localStorage.setItem("applicationState",JSON.stringify(n())),s}}},ie=Object(u.a)({reducer:{counter:se,posts:P},preloadedState:function(){if(null!==localStorage.getItem("applicationState"))return JSON.parse(localStorage.getItem("applicationState")||"")}(),middleware:function(e){return e().concat(ne)}});a(96),a(97);c.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(l.a,{store:ie,children:Object(D.jsx)(S.a,{children:Object(D.jsx)(C.d,{children:Object(D.jsx)(C.b,{path:"*",element:Object(D.jsx)(Z,{})})})})})})),$()}},[[98,1,2]]]);
//# sourceMappingURL=main.d2110b1c.chunk.js.map