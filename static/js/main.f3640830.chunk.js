(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(40),i=a.n(n),r=(a(49),a(50),a(4)),o=a(6),l=a(8),d=a(15),j=a(14),u=a(19),b=a(10),h=a(5),m=a(20),p=a.n(m),O="https://jsonplaceholder.typicode.com/posts",x=Object(b.b)("posts/fetchPosts",Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(O);case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),g=Object(b.b)("posts/addNewPost",function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(O,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(b.c)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducers:{postAdded:{reducer:function(e,t){e.posts.push(t.payload)},prepare:function(e,t){return{payload:{id:Object(b.d)(),status:"created",title:e,content:t}}}},postDeleted:{reducer:function(e,t){var a=Object(h.a)(e.posts).find((function(e){var a;return e.id.toString()===(null===(a=t.payload)||void 0===a?void 0:a.id)})),s=Object(h.a)(e.posts).filter((function(e){var a;return e.id.toString()!==(null===(a=t.payload)||void 0===a?void 0:a.id)}));if(void 0!==a){var c=Object(r.a)(Object(r.a)({},a),{},{status:"deleted"});e.posts=[].concat(Object(j.a)(s),[c])}},prepare:function(e){return{payload:{id:e}}}}},extraReducers:function(e){e.addCase(x.pending,(function(e,t){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="succeeded";var a=t.payload.map((function(e){return e.status="created",e}));e.posts=Object(j.a)(a)})).addCase(x.rejected,(function(e,t){e.status="failed",e.error=t.error.message})).addCase(g.pending,(function(e,t){e.status="loading"})).addCase(g.fulfilled,(function(e,t){e.status="succeeded",console.log("state.posts nbb",Object(h.a)(e.posts)),console.log("action.payload",t.payload);var a=Math.max.apply(Math,Object(h.a)(e.posts).map((function(e){return e.id}))),s=t.payload;s.id=a+1,s.status="created",e.posts.push(s),console.log("state.posts",Object(h.a)(e.posts))})).addCase(g.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),v=function(e){return e.posts.posts},N=function(e){return e.posts.status},y=function(e){return e.posts.error},w=function(e,t){return e.posts.posts.find((function(e){return e.id===t}))},P=f.actions,k=(P.postAdded,P.postDeleted),S=f.reducer,C=a(2),L=a(3),A=a(23),I=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",stateAbbr:"MA",geo:{lat:"-37.3159",lng:"81.1496"}},avatar_url:"avatars/person_ponytail_swirl.png?raw=true",phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona LLC",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell (you)",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",stateAbbr:"MO",geo:{lat:"-43.9509",lng:"-34.4618"}},avatar_url:"avatars/person_beard.png?raw=true",phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist Inc",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",avatar_url:"avatars/person_glasses.png?raw=true",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",stateAbbr:"NY",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson LLC",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",avatar_url:"avatars/person_colored.png?raw=true",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",stateAbbr:"ID",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery LLC",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",avatar_url:"avatars/person_hair_down_headband.png?raw=true",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",stateAbbr:"MN",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",avatar_url:"avatars/person_pixie_cut_light_brown.png?raw=true",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",stateAbbr:"ME",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman LLC",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",avatar_url:"avatars/person_spikey_pompadour.png?raw=true",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",stateAbbr:"CA",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",avatar_url:"avatars/person_short_gray.png?raw=true",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",stateAbbr:"PA",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",avatar_url:"avatars/person_ponytail.png?raw=true",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",stateAbbr:"CO",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons LLC",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",avatar_url:"avatars/person_pixie_cut_red.png?raw=true",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",stateAbbr:"GA",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],_=I.reduce((function(e,t,a){return Object(r.a)(Object(r.a)({},e),{},Object(A.a)({},t.id,t))}),{}),B="https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/avatars/person_anonymous.png?raw=true",T=a(12);function z(e,t){var a=e,s=t,c=[];return e&&0!==e.length?(a.reduce((function(e,t,a){var n=Object(r.a)({},t);return n.authorInfo=s[t.userId],c.push(n),n}),c),c):c}function R(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function E(e){return e.charAt(0).toUpperCase()+e.slice(1)}var D=a(1),M=function(){var e=Object(l.b)(),t=Object(C.g)(),a=Object(L.c)(),c=Object(o.a)(a,2),n=c[0],i=(c[1],n.get("pageNumber")),d=n.get("pageSize"),j=n.get("searchTerms"),u=j?j.split(" ").filter((function(e){return""!=e.trim()})).map((function(e){return e.trim()})):[],h=Object(s.useState)(j||""),m=Object(o.a)(h,2),p=m[0],O=m[1],g=Object(l.c)(v),f=Object(l.c)(N),w=Object(T.b)({loading:"loading"===f,indicator:Object(D.jsx)(T.a,{})}),P=w.containerProps,k=w.indicatorEl,S=(Object(l.c)(y),g&&z(g,_)||[]),A=i?Number(i):1,I=d?Number(d):10;S=S.sort((function(e,t){return e.title.localeCompare(t.title)})),u.length>0&&S.length>0&&(S=S.filter((function(e){return e.title.split(" ").some((function(e){return u.indexOf(e)>=0}))||e.body.split(" ").some((function(e){return u.indexOf(e)>=0}))})));var M=function(e,t,a){var s=e.length,c=10,n=Math.ceil(s/c),i=1;c=parseInt(t.toString()),i=parseInt(a.toString()),c<1&&(c=1);i<1&&(i=1);var r={page:[],pageNumber:i,pageSize:c,totalPages:n,visiblePages:U(i,c,n)};return r.page=e.slice((i-1)*c,i*c),r}(S,I,A),F=M.page;function U(e,t,a){for(var s=[],c=e,n=e<a?4:5;c>0&&n>0;)s.push(c),c--,n--;var i=e+1;for(e<a&&n++;i<=a&&n>0;)s.push(i),i++,n--;return s.sort((function(e,t){return e-t}))}return Object(s.useEffect)((function(){document.title="Search Posts"}),[]),Object(s.useEffect)((function(){"idle"===f&&e(x())}),[f,e]),console.log("posts",g),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},P),{},{children:k})),"succeeded"===f?Object(D.jsxs)("div",{className:"center-it",children:[Object(D.jsx)("div",{className:"ui search-bar-container segment",children:Object(D.jsxs)("div",{className:"ui  transparent icon input",children:[Object(D.jsx)(L.b,{className:"create-post-link ui compact icon button",to:{pathname:"/LatinBlogPortfolio/Posts/Create",search:"?userId=2"},children:Object(D.jsx)("i",{className:"plus icon"})}),Object(D.jsx)("input",{value:p,onChange:function(e){return O(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t("/LatinBlogPortfolio/Posts?pageNumber=1&pageSize="+I+"&searchTerms="+p)},className:"search-bar-input",type:"text",placeholder:"Search posts...",style:{marginRight:"20px"}}),Object(D.jsx)(L.b,{className:"post-search-button",to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber=1&pageSize="+I+"&searchTerms="+p},children:Object(D.jsx)("i",{className:"search link icon"})})]})}),F.map((function(e){return"created"===e.status&&Object(D.jsx)(L.b,{to:"/LatinBlogPortfolio/Posts/".concat(e.id),children:Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"ui items",children:Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:e.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.authorInfo.avatar_url:B,alt:"Avatar"})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("h2",{className:"header",children:e.status+R(e.title)}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsx)("span",{children:e.authorInfo?e.authorInfo.company.name:"Company Unknown"})}),Object(D.jsx)("div",{className:"description",children:Object(D.jsx)("p",{children:E(e.body)})}),Object(D.jsxs)("div",{className:"extra",children:["Authored by:"," ",e.authorInfo?e.authorInfo.name:"Unknown"]})]})]})})})},Object(b.d)())})),Object(D.jsx)("div",{className:"center-align-flex",children:Object(D.jsxs)("div",{className:"ui small basic icon buttons",children:[Object(D.jsx)(L.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.max(1,A-1)+"&pageSize="+I+"&searchTerms="+p},className:"ui button",children:Object(D.jsx)("i",{className:"angle left icon"})}),M.visiblePages.map((function(e){return Object(D.jsx)(L.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+e+"&pageSize="+I+"&searchTerms="+p},className:"ui button",children:e},Object(b.d)())})),Object(D.jsx)(L.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.min(M.totalPages,A+1)+"&pageSize="+I+"&searchTerms="+p},className:"ui button",children:Object(D.jsx)("i",{className:"angle right icon"})})]})})]}):"error"===f&&Object(D.jsxs)("div",{className:"Error",children:[Object(D.jsxs)("h1",{children:[Object(D.jsx)("i",{className:"exclamation triangle icon"})," An unexpected error has occured while making your request."]}),Object(D.jsx)("br",{}),Object(D.jsx)("p",{children:"Please try again or contact your administrator."})]})]})},F=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!0),i=Object(o.a)(n,2),r=i[0],d=i[1],j=Object(s.useState)(""),u=Object(o.a)(j,2),b=u[0],h=u[1],m=Object(s.useState)(!0),p=Object(o.a)(m,2),O=p[0],x=p[1],f=Object(s.useState)("idle"),N=Object(o.a)(f,2),y=N[0],w=N[1],P=Object(C.g)(),k=Object(l.b)(),S=(Object(l.c)(v),[a,b].every((function(e){return""!==e}))&&"idle"===y);return Object(s.useEffect)((function(){document.title="Create A New Post"}),[]),Object(D.jsx)("section",{className:"single-post-container",children:Object(D.jsxs)("div",{className:"single-post ui piled segment",children:[Object(D.jsx)("h1",{children:"Add a New Post"}),Object(D.jsxs)("form",{className:"ui form add-post-body",children:[Object(D.jsxs)("div",{className:r?"field":"field error",children:[Object(D.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(D.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",value:a,onChange:function(e){""===e.target.value||null===e.target.value||void 0===e.target.value?d(!1):d(!0),c(e.target.value)}})]}),Object(D.jsxs)("div",{className:O?"field":"field error",children:[Object(D.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(D.jsx)("textarea",{id:"postContent",name:"postContent",value:b,onChange:function(e){""===e.target.value||null===e.target.value||void 0===e.target.value?x(!1):x(!0),h(e.target.value)}})]}),Object(D.jsx)("button",{className:r&&O?"ui primary button":"ui primary button disabled",type:"button",onClick:function(){if(S)try{w("pending"),k(g({title:a,body:b,userId:2})).unwrap().then((function(e){P("/LatinBlogPortfolio/Posts")})).catch((function(e){return console.log("post add error:",e)})),c(""),h("")}catch(e){console.log("post failed")}finally{w("idle")}},children:"Save Post"})]}),(!r||!O)&&Object(D.jsx)("div",{className:"ui error message",children:Object(D.jsxs)("ul",{className:"list",children:[!r&&Object(D.jsx)("li",{children:"Please enter a title for the post."}),!O&&Object(D.jsx)("li",{children:"Please enter content for the body of the post."})]})})]})})},U=function(){var e=Object(C.f)();return Object(D.jsxs)("div",{className:"ultimate-parent",children:[Object(D.jsx)("div",{className:"header-outlet-parent"}),Object(D.jsxs)("nav",{className:"ui secondary menu",children:[Object(D.jsx)(L.b,{role:"link",to:"/LatinBlogPortfolio",className:"/"===e.pathname?"active item":"item",children:"Home"}),Object(D.jsx)(L.b,{role:"link",to:"/LatinBlogPortfolio/Posts",className:"/Posts"===e.pathname?"active item":"item",children:"Posts"}),Object(D.jsx)(L.b,{role:"link",to:"/LatinBlogPortfolio/Authors",className:"/Authors"===e.pathname?"active item":"item",children:"Authors"}),Object(D.jsx)(L.b,{role:"link",to:"/LatinBlogPortfolio/Posts/Create?userId=2",className:"/Posts/Create"===e.pathname?"active item":"item",children:"Create"}),Object(D.jsx)("div",{className:"right menu",children:Object(D.jsx)("div",{className:"item",style:{marginRight:"40px"},children:Object(D.jsxs)("button",{className:" ui button compact primary",onClick:function(e){localStorage.removeItem("applicationState"),window.location.pathname="/LatinBlogPortfolio",alert("All data has been reset to its original state")},children:[" ",Object(D.jsx)("i",{className:"undo alternate icon"}),"Reset"]})})})]}),Object(D.jsx)("main",{className:"App",children:Object(D.jsx)(C.a,{})}),Object(D.jsxs)("footer",{className:"website-footer",children:[Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"ui stackable three column grid",children:[Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"About"}),Object(D.jsx)("p",{className:"text-justify",children:"This is a demo website that allows you to create, search for, and delete posts. You can view author information as well. It is built using the latest React, React-Router, Redux, Axios, and Fomantic UI and operates using a mock api. It was built with accessibility, responsiveness, and aesthetics in mind. Enjoy!"})]}),Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"Technologies"}),Object(D.jsxs)("ul",{className:"footer-link",children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"Javascript"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://reactjs.org/",children:"React"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://redux.js.org/",children:"Redux"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://redux-toolkit.js.org/",children:"Redux Toolkit"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://github.com/reduxjs/redux-thunk",children:"Redux-Thunk"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://www.typescriptlang.org/",children:"Typescript"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://fomantic-ui.com/",children:"Fomantic UI"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://reactrouter.com/en/main",children:"React Router"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://www.npmjs.com/package/axios",children:"Axios"})})]})]}),Object(D.jsxs)("section",{className:"column",children:[Object(D.jsx)("h1",{children:"Helpful Links"}),Object(D.jsxs)("ul",{className:"footer-link",children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:"Code Repository"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"mailto:tommy.loalbo@gmail.com",children:"Contact Me"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:"LinkedIn"})})]})]})]}),Object(D.jsx)("hr",{})]}),Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"ui stackable two column grid",children:[Object(D.jsx)("div",{className:"column",children:Object(D.jsx)("p",{className:"copyright-text",children:"Copyright \xa9 2022 All Rights Reserved."})}),Object(D.jsx)("div",{className:"column",children:Object(D.jsxs)("ul",{className:"social-links",children:[Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"google",href:"mailto:tommy.loalbo@gmail.com",children:Object(D.jsx)("i",{className:"google icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"github",href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:Object(D.jsx)("i",{className:"github icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"stackoverflow",href:"https://stackoverflow.com/users/4526910/thrillseeker419",children:Object(D.jsx)("i",{className:"stack overflow icon"})})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{className:"linkedIn",href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:Object(D.jsx)("i",{className:"linkedin icon"})})})]})})]})})]})]})},J=function(){var e=Object(C.h)().postId;console.log("SinglePostPage");var t=Object(l.c)((function(t){return w(t,Number(e))})),a=t&&z([t],_),c=Object(T.b)({loading:void 0===t,indicator:Object(D.jsx)(T.a,{})}),n=c.containerProps,i=c.indicatorEl;console.log("postsAndAuthors",a);var o=t&&a[0];return Object(s.useEffect)((function(){document.title="View A Single Post"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},n),{},{children:i}))," ",t?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsxs)("article",{className:"single-post ui piled segment",children:[Object(D.jsxs)("h1",{className:"ui header",children:[Object(D.jsx)("img",{src:o.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+o.authorInfo.avatar_url:B,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",R(o.title),Object(D.jsxs)("div",{className:"sub header",children:["by"," ",o.authorInfo?o.authorInfo.name:"Unknown"]})]}),Object(D.jsx)("div",{className:"single-post-body",children:Object(D.jsx)("p",{children:E(o.body)})}),Object(D.jsx)("div",{className:"delete-button-container",children:2===o.userId&&Object(D.jsxs)(L.b,{to:{pathname:"/LatinBlogPortfolio/Posts/Delete/"+e,search:"?userId=2"},className:" ui red button",children:[Object(D.jsx)("i",{className:"trash icon"}),"Delete Post"]})})]})}):Object(D.jsx)(D.Fragment,{})]})},K=function(){return Object(s.useEffect)((function(){document.title="Page not found"}),[]),Object(D.jsxs)("div",{className:"not-found-container",children:[Object(D.jsx)("h1",{children:"404"}),Object(D.jsx)("p",{children:" Page not found."}),Object(D.jsx)(L.b,{to:"/LatinBlogPortfolio",children:"Return to home page."})]})},H=function(){Object(C.h)().param1;return Object(s.useEffect)((function(){document.title="The Communal Latin Blog"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsxs)("h1",{className:"ui center aligned icon header",children:[Object(D.jsx)("i",{className:"circular book open icon"}),"The Communal Latin Blog"]}),Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsx)("article",{className:"single-post ui piled segment ",children:Object(D.jsx)("p",{className:"single-post-body",children:"Welcome to The Communal Latin Blog! The community gathers here to practice their latin. Share your latin thoughts with the world. Connect with others. Enjoy learning another language by sharing stories with one another."})})})]})},G=function(){Object(C.h)().param1;var e=Object(l.c)(v);var t,a=(t="userId",e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{}));return Object(s.useEffect)((function(){document.title="View All Authors"}),[]),Object(D.jsx)("section",{children:Object(D.jsx)("div",{className:"ui link cards author-list-container",children:I&&I.map((function(e){return Object(D.jsxs)(L.b,{className:"card",to:"".concat(e.id),children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:e?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.avatar_url:B,alt:"Avatar for "+e.name})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("div",{className:"header",children:e.name}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsx)("a",{children:e.email})}),Object(D.jsxs)("div",{className:"description",children:[e.company.name," - ",e.company.bs]})]}),Object(D.jsxs)("div",{className:"extra content",children:[Object(D.jsx)("span",{className:"right floated",children:e.website}),Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"comment icon"}),a[e.id]&&a[e.id].length||0," ","Posts"]})]})]},Object(b.d)())}))})})},V=function(){var e=Object(C.h)().authorId,t=I.find((function(t){return t.id.toString()===e})),a=Object(T.b)({loading:void 0===e,indicator:Object(D.jsx)(T.a,{})}),c=a.containerProps,n=a.indicatorEl;return Object(s.useEffect)((function(){document.title="View An Author's Details"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},c),{},{children:n}))," ",t?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsx)("article",{className:"single-post ui piled segment",children:Object(D.jsx)("div",{className:"ui items",children:Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"image",children:Object(D.jsx)("img",{src:t?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+t.avatar_url:B,alt:"Avatar",className:"single-post-avatar ui medium circular image"})}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("a",{className:"header",children:t.name}),Object(D.jsx)("div",{className:"meta",children:Object(D.jsxs)("p",{children:[t.company.name," -"," ",E(t.company.bs)]})}),Object(D.jsxs)("div",{className:"ui list",children:[Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"user icon"}),Object(D.jsxs)("div",{className:"content",children:["@",t.username]})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"marker icon"}),Object(D.jsxs)("div",{className:"content",children:[t.address.street,", ",t.address.suite,","," ",t.address.city,", ",t.address.stateAbbr," ",t.address.zipcode]})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"mail icon"}),Object(D.jsx)("div",{className:"content",children:Object(D.jsx)("a",{href:"mailto:jack@semantic-ui.com",children:t.email})})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"linkify icon"}),Object(D.jsx)("div",{className:"content",children:Object(D.jsx)("a",{href:"https://"+t.website,children:t.website})})]}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("i",{className:"phone icon"}),Object(D.jsx)("div",{className:"content",children:t.phone})]})]})]})]})})})}):Object(D.jsx)(D.Fragment,{})]})},W=function(){var e=Object(C.h)().postId,t=Object(L.c)(),a=Object(o.a)(t,2),c=a[0],n=(a[1],Object(l.b)()),i=Object(C.g)(),d=c.get("userId"),j=Object(l.c)((function(t){return w(t,Number(e))})),u=j&&z([j],_),b=Object(T.b)({loading:void 0===j,indicator:Object(D.jsx)(T.a,{})}),h=b.containerProps,m=b.indicatorEl,p=j&&u[0];return Object(s.useEffect)((function(){document.title="Delete Your Post"}),[]),Object(D.jsxs)("section",{children:[Object(D.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},h),{},{children:m}))," ",j&&"2"===d?Object(D.jsx)("div",{className:"single-post-container",children:Object(D.jsxs)("article",{className:"single-post ui piled segment",children:[Object(D.jsx)("h1",{children:" Are you sure you want to delete this post?"}),Object(D.jsxs)("div",{className:"ui segment",children:[Object(D.jsxs)("h2",{className:"ui header",children:[Object(D.jsx)("img",{src:p.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public"+p.authorInfo.avatar_url:B,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",R(p.title),Object(D.jsxs)("div",{className:"sub header",children:["by"," ",p.authorInfo?p.authorInfo.name:"Unknown"]})]}),Object(D.jsx)("div",{className:"single-post-body",children:Object(D.jsxs)("p",{children:[E(p.body).slice(0,50),"...",Object(D.jsx)("br",{})]})}),Object(D.jsx)("div",{className:"delete-button-container",children:2===p.userId&&Object(D.jsxs)("button",{onClick:function(){try{n(k(p.id.toString()));i("/LatinBlogPortfolio/Posts")}catch(e){console.log("delete failed",e)}},className:" ui red button",children:[Object(D.jsx)("i",{className:"trash icon"}),"Delete Post"]})})]})]})}):j&&"2"!==d?Object(D.jsx)("h1",{style:{marginLeft:"10px"},children:"401 Unauthorized"}):Object(D.jsx)("h1",{style:{marginLeft:"10px"},children:"404 Not Found"})]})};var Y=function(){return Object(D.jsx)(C.d,{children:Object(D.jsxs)(C.b,{path:"/LatinBlogPortfolio",element:Object(D.jsx)(U,{}),children:[Object(D.jsx)(C.b,{path:"*",element:Object(D.jsx)(K,{})}),Object(D.jsx)(C.b,{index:!0,element:Object(D.jsx)(H,{})}),Object(D.jsxs)(C.b,{path:"Posts",children:[Object(D.jsx)(C.b,{index:!0,element:Object(D.jsx)(M,{})}),Object(D.jsx)(C.b,{path:"Create",element:Object(D.jsx)(F,{})}),Object(D.jsx)(C.b,{path:"Delete",children:Object(D.jsx)(C.b,{path:":postId",element:Object(D.jsx)(W,{})})}),Object(D.jsx)(C.b,{path:":postId",element:Object(D.jsx)(J,{})})]}),Object(D.jsxs)(C.b,{path:"Authors",children:[Object(D.jsx)(C.b,{index:!0,element:Object(D.jsx)(G,{})}),Object(D.jsx)(C.b,{path:":authorId",element:Object(D.jsx)(V,{})})]})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))},Q=Object(b.b)("posts/fetchPosts",Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),X=Object(b.c)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},reset:function(e){e.value=0},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Q.pending,(function(e,t){}))}}),Z=X.actions,$=(Z.increment,Z.decrement,Z.reset,Z.incrementByAmount,X.reducer),ee=function(e){return function(t){return function(a){var s=t(a),c=e.getState;return localStorage.setItem("applicationState",JSON.stringify(c())),s}}},te=Object(b.a)({reducer:{counter:$,posts:S},preloadedState:function(){if(null!==localStorage.getItem("applicationState"))return JSON.parse(localStorage.getItem("applicationState")||"")}(),middleware:function(e){return e().concat(ee)}});a(79);i.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(l.a,{store:te,children:Object(D.jsx)(L.a,{children:Object(D.jsx)(C.d,{children:Object(D.jsx)(C.b,{path:"*",element:Object(D.jsx)(Y,{})})})})})})),q()}},[[80,1,2]]]);
//# sourceMappingURL=main.f3640830.chunk.js.map