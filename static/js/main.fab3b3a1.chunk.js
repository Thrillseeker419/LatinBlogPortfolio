(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(40),i=a.n(n),r=(a(49),a(50),a(4)),o=a(6),l=a(8),d=a(15),j=a(14),u=a(19),b=a(10),h=a(5),m=a(20),p=a.n(m),O="https://jsonplaceholder.typicode.com/posts",x=Object(b.b)("posts/fetchPosts",Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(O);case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),g=Object(b.b)("posts/addNewPost",function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(O,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(b.c)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducers:{postAdded:{reducer:function(e,t){e.posts.push(t.payload)},prepare:function(e,t){return{payload:{id:Object(b.d)(),status:"created",title:e,content:t}}}},postDeleted:{reducer:function(e,t){var a=Object(h.a)(e.posts).find((function(e){var a;return e.id.toString()===(null===(a=t.payload)||void 0===a?void 0:a.id)})),s=Object(h.a)(e.posts).filter((function(e){var a;return e.id.toString()!==(null===(a=t.payload)||void 0===a?void 0:a.id)}));if(void 0!==a){var c=Object(r.a)(Object(r.a)({},a),{},{status:"deleted"});e.posts=[].concat(Object(j.a)(s),[c])}},prepare:function(e){return{payload:{id:e}}}}},extraReducers:function(e){e.addCase(x.pending,(function(e,t){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="succeeded";var a=t.payload.map((function(e){return e.status="created",e}));e.posts=Object(j.a)(a)})).addCase(x.rejected,(function(e,t){e.status="failed",e.error=t.error.message})).addCase(g.pending,(function(e,t){e.status="loading"})).addCase(g.fulfilled,(function(e,t){e.status="succeeded",console.log("state.posts nbb",Object(h.a)(e.posts)),console.log("action.payload",t.payload);var a=Math.max.apply(Math,Object(h.a)(e.posts).map((function(e){return e.id}))),s=t.payload;s.id=a+1,e.posts.push(s),console.log("state.posts",Object(h.a)(e.posts))})).addCase(g.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),v=function(e){return e.posts.posts},N=function(e){return e.posts.status},y=function(e){return e.posts.error},w=function(e,t){return e.posts.posts.find((function(e){return e.id===t}))},P=f.actions,k=(P.postAdded,P.postDeleted),S=f.reducer,C=a(3),L=a(23),A=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",stateAbbr:"MA",geo:{lat:"-37.3159",lng:"81.1496"}},avatar_url:"avatars/person_ponytail_swirl.png?raw=true",phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona LLC",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell (you)",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",stateAbbr:"MO",geo:{lat:"-43.9509",lng:"-34.4618"}},avatar_url:"avatars/person_beard.png?raw=true",phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist Inc",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",avatar_url:"avatars/person_glasses.png?raw=true",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",stateAbbr:"NY",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson LLC",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",avatar_url:"avatars/person_colored.png?raw=true",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",stateAbbr:"ID",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery LLC",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",avatar_url:"avatars/person_hair_down_headband.png?raw=true",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",stateAbbr:"MN",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",avatar_url:"avatars/person_pixie_cut_light_brown.png?raw=true",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",stateAbbr:"ME",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman LLC",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",avatar_url:"avatars/person_spikey_pompadour.png?raw=true",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",stateAbbr:"CA",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",avatar_url:"avatars/person_short_gray.png?raw=true",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",stateAbbr:"PA",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",avatar_url:"avatars/person_ponytail.png?raw=true",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",stateAbbr:"CO",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons LLC",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",avatar_url:"avatars/person_pixie_cut_red.png?raw=true",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",stateAbbr:"GA",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],I=A.reduce((function(e,t,a){return Object(r.a)(Object(r.a)({},e),{},Object(L.a)({},t.id,t))}),{}),_="https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/avatars/person_anonymous.png?raw=true",B=a(12);function T(e,t){var a=e,s=t,c=[];return e&&0!==e.length?(a.reduce((function(e,t,a){var n=Object(r.a)({},t);return n.authorInfo=s[t.userId],c.push(n),n}),c),c):c}function z(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function R(e){return e.charAt(0).toUpperCase()+e.slice(1)}var E=a(1),D=function(){var e=Object(l.b)(),t=Object(C.c)(),a=Object(o.a)(t,2),c=a[0],n=(a[1],c.get("pageNumber")),i=c.get("pageSize"),d=c.get("searchTerms"),j=d?d.split(" ").filter((function(e){return""!=e.trim()})).map((function(e){return e.trim()})):[],u=Object(s.useState)(d||""),h=Object(o.a)(u,2),m=h[0],p=h[1],O=Object(l.c)(v),g=Object(l.c)(N),f=Object(B.b)({loading:"loading"===g,indicator:Object(E.jsx)(B.a,{})}),w=f.containerProps,P=f.indicatorEl,k=(Object(l.c)(y),O&&T(O,I)||[]),S=n?Number(n):1,L=i?Number(i):10;k=k.sort((function(e,t){return e.title.localeCompare(t.title)})),j.length>0&&k.length>0&&(k=k.filter((function(e){return e.title.split(" ").some((function(e){return j.indexOf(e)>=0}))||e.body.split(" ").some((function(e){return j.indexOf(e)>=0}))})));var A=function(e,t,a){var s=e.length,c=10,n=Math.ceil(s/c),i=1;c=parseInt(t.toString()),i=parseInt(a.toString()),c<1&&(c=1);i<1&&(i=1);var r={page:[],pageNumber:i,pageSize:c,totalPages:n,visiblePages:M(i,c,n)};return r.page=e.slice((i-1)*c,i*c),r}(k,L,S),D=A.page;function M(e,t,a){for(var s=[],c=e,n=e<a?4:5;c>0&&n>0;)s.push(c),c--,n--;var i=e+1;for(e<a&&n++;i<=a&&n>0;)s.push(i),i++,n--;return s.sort((function(e,t){return e-t}))}return Object(s.useEffect)((function(){document.title="Search Posts"}),[]),Object(s.useEffect)((function(){"idle"===g&&e(x())}),[g,e]),Object(E.jsxs)("section",{children:[Object(E.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},w),{},{children:P})),"succeeded"===g?Object(E.jsxs)("div",{className:"center-it",children:[Object(E.jsx)("div",{className:"ui search-bar-container segment",children:Object(E.jsxs)("div",{className:"ui  transparent icon input",children:[Object(E.jsx)(C.b,{className:"create-post-link ui compact icon button",to:{pathname:"/LatinBlogPortfolio/Posts/Create",search:"?userId=2"},children:Object(E.jsx)("i",{className:"plus icon"})}),Object(E.jsx)("input",{value:m,onChange:function(e){return p(e.target.value)},className:"search-bar-input",type:"text",placeholder:"Search posts...",style:{marginRight:"20px"}}),Object(E.jsx)(C.b,{className:"post-search-button",to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber=1&pageSize="+L+"&searchTerms="+m},children:Object(E.jsx)("i",{className:"search link icon"})})]})}),D.map((function(e){return"created"===e.status&&Object(E.jsx)(C.b,{to:"/LatinBlogPortfolio/".concat(e.id),children:Object(E.jsx)("div",{children:Object(E.jsx)("div",{className:"ui items",children:Object(E.jsxs)("div",{className:"item",children:[Object(E.jsx)("div",{className:"image",children:Object(E.jsx)("img",{src:e.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.authorInfo.avatar_url:_,alt:"Avatar"})}),Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("h2",{className:"header",children:e.status+z(e.title)}),Object(E.jsx)("div",{className:"meta",children:Object(E.jsx)("span",{children:e.authorInfo?e.authorInfo.company.name:"Company Unknown"})}),Object(E.jsx)("div",{className:"description",children:Object(E.jsx)("p",{children:R(e.body)})}),Object(E.jsxs)("div",{className:"extra",children:["Authored by:"," ",e.authorInfo?e.authorInfo.name:"Unknown"]})]})]})})})},Object(b.d)())})),Object(E.jsx)("div",{className:"center-align-flex",children:Object(E.jsxs)("div",{className:"ui small basic icon buttons",children:[Object(E.jsx)(C.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.max(1,S-1)+"&pageSize="+L+"&searchTerms="+m},className:"ui button",children:Object(E.jsx)("i",{className:"angle left icon"})}),A.visiblePages.map((function(e){return Object(E.jsx)(C.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+e+"&pageSize="+L+"&searchTerms="+m},className:"ui button",children:e},Object(b.d)())})),Object(E.jsx)(C.b,{to:{pathname:"/LatinBlogPortfolio/Posts",search:"?pageNumber="+Math.min(A.totalPages,S+1)+"&pageSize="+L+"&searchTerms="+m},className:"ui button",children:Object(E.jsx)("i",{className:"angle right icon"})})]})})]}):"error"===g&&Object(E.jsxs)("div",{className:"Error",children:[Object(E.jsxs)("h1",{children:[Object(E.jsx)("i",{className:"exclamation triangle icon"})," An unexpected error has occured while making your request."]}),Object(E.jsx)("br",{}),Object(E.jsx)("p",{children:"Please try again or contact your administrator."})]})]})},M=a(2),F=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!0),i=Object(o.a)(n,2),r=i[0],d=i[1],j=Object(s.useState)(""),u=Object(o.a)(j,2),b=u[0],h=u[1],m=Object(s.useState)(!0),p=Object(o.a)(m,2),O=p[0],x=p[1],f=Object(s.useState)("idle"),N=Object(o.a)(f,2),y=N[0],w=N[1],P=Object(M.g)(),k=Object(l.b)(),S=(Object(l.c)(v),[a,b].every((function(e){return""!==e}))&&"idle"===y);return Object(s.useEffect)((function(){document.title="Create A New Post"}),[]),Object(E.jsx)("section",{className:"single-post-container",children:Object(E.jsxs)("div",{className:"single-post ui piled segment",children:[Object(E.jsx)("h1",{children:"Add a New Post"}),Object(E.jsxs)("form",{className:"ui form add-post-body",children:[Object(E.jsxs)("div",{className:r?"field":"field error",children:[Object(E.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(E.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",value:a,onChange:function(e){""===e.target.value||null===e.target.value||void 0===e.target.value?d(!1):d(!0),c(e.target.value)}})]}),Object(E.jsxs)("div",{className:O?"field":"field error",children:[Object(E.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(E.jsx)("textarea",{id:"postContent",name:"postContent",value:b,onChange:function(e){""===e.target.value||null===e.target.value||void 0===e.target.value?x(!1):x(!0),h(e.target.value)}})]}),Object(E.jsx)("button",{className:r&&O?"ui primary button":"ui primary button disabled",type:"button",onClick:function(){if(S)try{w("pending"),k(g({title:a,body:b,userId:2})).unwrap().then((function(e){P("/LatinBlogPortfolio/Posts")})).catch((function(e){return console.log(e)})),c(""),h("")}catch(e){console.log("post failed")}finally{w("idle")}},children:"Save Post"})]}),(!r||!O)&&Object(E.jsx)("div",{className:"ui error message",children:Object(E.jsxs)("ul",{className:"list",children:[!r&&Object(E.jsx)("li",{children:"Please enter a title for the post."}),!O&&Object(E.jsx)("li",{children:"Please enter content for the body of the post."})]})})]})})},U=function(){var e=Object(M.f)();return Object(E.jsxs)("div",{className:"ultimate-parent",children:[Object(E.jsxs)("nav",{className:"ui secondary menu",children:[Object(E.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio",className:"/"===e.pathname?"active item":"item",children:"Home"}),Object(E.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio/Posts",className:"/Posts"===e.pathname?"active item":"item",children:"Posts"}),Object(E.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio/Authors",className:"/Authors"===e.pathname?"active item":"item",children:"Authors"}),Object(E.jsx)(C.b,{role:"link",to:"/LatinBlogPortfolio/Posts/Create?userId=2",className:"/Posts/Create"===e.pathname?"active item":"item",children:"Create"}),Object(E.jsx)("div",{className:"right menu",children:Object(E.jsx)("div",{className:"item",style:{marginRight:"40px"},children:Object(E.jsxs)("button",{className:" ui button compact primary",onClick:function(e){localStorage.removeItem("applicationState"),window.location.pathname="/LatinBlogPortfolio",alert("All data has been reset to its original state")},children:[" ",Object(E.jsx)("i",{className:"undo alternate icon"}),"Reset"]})})})]}),Object(E.jsx)("main",{className:"App",children:Object(E.jsx)(M.a,{})}),Object(E.jsxs)("footer",{className:"website-footer",children:[Object(E.jsxs)("div",{className:"container",children:[Object(E.jsxs)("div",{className:"ui stackable three column grid",children:[Object(E.jsxs)("section",{className:"column",children:[Object(E.jsx)("h1",{children:"About"}),Object(E.jsx)("p",{className:"text-justify",children:"This is a demo website that allows you to create, search for, and delete posts. You can view author information as well. It is built using the latest React, React-Router, Redux, Axios, and Fomantic UI and operates using a mock api. It was built with accessibility, responsiveness, and aesthetics in mind. Enjoy!"})]}),Object(E.jsxs)("section",{className:"column",children:[Object(E.jsx)("h1",{children:"Technologies"}),Object(E.jsxs)("ul",{className:"footer-link",children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"Javascript"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://reactjs.org/",children:"React"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://redux.js.org/",children:"Redux"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://redux-toolkit.js.org/",children:"Redux Toolkit"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://github.com/reduxjs/redux-thunk",children:"Redux-Thunk"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://www.typescriptlang.org/",children:"Typescript"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://fomantic-ui.com/",children:"Fomantic UI"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://reactrouter.com/en/main",children:"React Router"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://www.npmjs.com/package/axios",children:"Axios"})})]})]}),Object(E.jsxs)("section",{className:"column",children:[Object(E.jsx)("h1",{children:"Helpful Links"}),Object(E.jsxs)("ul",{className:"footer-link",children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:"Code Repository"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"mailto:tommy.loalbo@gmail.com",children:"Contact Me"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:"LinkedIn"})})]})]})]}),Object(E.jsx)("hr",{})]}),Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"ui stackable two column grid",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsx)("p",{className:"copyright-text",children:"Copyright \xa9 2022 All Rights Reserved."})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("ul",{className:"social-links",children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{className:"google",href:"mailto:tommy.loalbo@gmail.com",children:Object(E.jsx)("i",{className:"google icon"})})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{className:"github",href:"https://github.com/Thrillseeker419/LatinBlogPortfolio",children:Object(E.jsx)("i",{className:"github icon"})})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{className:"stackoverflow",href:"https://stackoverflow.com/users/4526910/thrillseeker419",children:Object(E.jsx)("i",{className:"stack overflow icon"})})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{className:"linkedIn",href:"https://www.linkedin.com/in/thomas-loalbo-230054b9/",children:Object(E.jsx)("i",{className:"linkedin icon"})})})]})})]})})]})]})},J=function(){var e=Object(M.h)().postId;console.log("SinglePostPage");var t=Object(l.c)((function(t){return w(t,Number(e))})),a=t&&T([t],I),c=Object(B.b)({loading:void 0===t,indicator:Object(E.jsx)(B.a,{})}),n=c.containerProps,i=c.indicatorEl;console.log("postsAndAuthors",a);var o=t&&a[0];return Object(s.useEffect)((function(){document.title="View A Single Post"}),[]),Object(E.jsxs)("section",{children:[Object(E.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},n),{},{children:i}))," ",t?Object(E.jsx)("div",{className:"single-post-container",children:Object(E.jsxs)("article",{className:"single-post ui piled segment",children:[Object(E.jsxs)("h1",{className:"ui header",children:[Object(E.jsx)("img",{src:o.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+o.authorInfo.avatar_url:_,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",z(o.title),Object(E.jsxs)("div",{className:"sub header",children:["by"," ",o.authorInfo?o.authorInfo.name:"Unknown"]})]}),Object(E.jsx)("div",{className:"single-post-body",children:Object(E.jsx)("p",{children:R(o.body)})}),Object(E.jsx)("div",{className:"delete-button-container",children:2===o.userId&&Object(E.jsxs)(C.b,{to:{pathname:"/LatinBlogPortfolio/Posts/Delete/"+e,search:"?userId=2"},className:" ui red button",children:[Object(E.jsx)("i",{className:"trash icon"}),"Delete Post"]})})]})}):Object(E.jsx)(E.Fragment,{})]})},H=function(){return Object(s.useEffect)((function(){document.title="Page not found"}),[]),Object(E.jsxs)("div",{className:"not-found-container",children:[Object(E.jsx)("h1",{children:"404"}),Object(E.jsx)("p",{children:" Page not found."}),Object(E.jsx)(C.b,{to:"/LatinBlogPortfolio",children:"Return to home page."})]})},K=function(){Object(M.h)().param1;return Object(s.useEffect)((function(){document.title="The Communal Latin Blog"}),[]),Object(E.jsxs)("section",{children:[Object(E.jsxs)("h1",{className:"ui center aligned icon header",children:[Object(E.jsx)("i",{className:"circular book open icon"}),"The Communal Latin Blog"]}),Object(E.jsx)("div",{className:"single-post-container",children:Object(E.jsx)("article",{className:"single-post ui piled segment ",children:Object(E.jsx)("p",{className:"single-post-body",children:"Welcome to The Communal Latin Blog! The community gathers here to practice their latin. Share your latin thoughts with the world. Connect with others. Enjoy learning another language by sharing stories with one another."})})})]})},G=function(){Object(M.h)().param1;var e=Object(l.c)(v);var t,a=(t="userId",e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{}));return Object(s.useEffect)((function(){document.title="View All Authors"}),[]),Object(E.jsx)("section",{children:Object(E.jsx)("div",{className:"ui link cards author-list-container",children:A&&A.map((function(e){return Object(E.jsxs)(C.b,{className:"card",to:"".concat(e.id),children:[Object(E.jsx)("div",{className:"image",children:Object(E.jsx)("img",{src:e?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+e.avatar_url:_,alt:"Avatar for "+e.name})}),Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("div",{className:"header",children:e.name}),Object(E.jsx)("div",{className:"meta",children:Object(E.jsx)("a",{children:e.email})}),Object(E.jsxs)("div",{className:"description",children:[e.company.name," - ",e.company.bs]})]}),Object(E.jsxs)("div",{className:"extra content",children:[Object(E.jsx)("span",{className:"right floated",children:e.website}),Object(E.jsxs)("span",{children:[Object(E.jsx)("i",{className:"comment icon"}),a[e.id]&&a[e.id].length||0," ","Posts"]})]})]},Object(b.d)())}))})})},V=function(){var e=Object(M.h)().authorId,t=A.find((function(t){return t.id.toString()===e})),a=Object(B.b)({loading:void 0===e,indicator:Object(E.jsx)(B.a,{})}),c=a.containerProps,n=a.indicatorEl;return Object(s.useEffect)((function(){document.title="View An Author's Details"}),[]),Object(E.jsxs)("section",{children:[Object(E.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},c),{},{children:n}))," ",t?Object(E.jsx)("div",{className:"single-post-container",children:Object(E.jsx)("article",{className:"single-post ui piled segment",children:Object(E.jsx)("div",{className:"ui items",children:Object(E.jsxs)("div",{className:"item",children:[Object(E.jsx)("div",{className:"image",children:Object(E.jsx)("img",{src:t?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/"+t.avatar_url:_,alt:"Avatar",className:"single-post-avatar ui medium circular image"})}),Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("a",{className:"header",children:t.name}),Object(E.jsx)("div",{className:"meta",children:Object(E.jsxs)("p",{children:[t.company.name," -"," ",R(t.company.bs)]})}),Object(E.jsxs)("div",{className:"ui list",children:[Object(E.jsxs)("div",{className:"item",children:[Object(E.jsx)("i",{className:"user icon"}),Object(E.jsxs)("div",{className:"content",children:["@",t.username]})]}),Object(E.jsxs)("div",{className:"item",children:[Object(E.jsx)("i",{className:"marker icon"}),Object(E.jsxs)("div",{className:"content",children:[t.address.street,", ",t.address.suite,","," ",t.address.city,", ",t.address.stateAbbr," ",t.address.zipcode]})]}),Object(E.jsxs)("div",{className:"item",children:[Object(E.jsx)("i",{className:"mail icon"}),Object(E.jsx)("div",{className:"content",children:Object(E.jsx)("a",{href:"mailto:jack@semantic-ui.com",children:t.email})})]}),Object(E.jsxs)("div",{className:"item",children:[Object(E.jsx)("i",{className:"linkify icon"}),Object(E.jsx)("div",{className:"content",children:Object(E.jsx)("a",{href:"https://"+t.website,children:t.website})})]}),Object(E.jsxs)("div",{className:"item",children:[Object(E.jsx)("i",{className:"phone icon"}),Object(E.jsx)("div",{className:"content",children:t.phone})]})]})]})]})})})}):Object(E.jsx)(E.Fragment,{})]})},W=function(){var e=Object(M.h)().postId,t=Object(C.c)(),a=Object(o.a)(t,2),c=a[0],n=(a[1],Object(l.b)()),i=Object(M.g)(),d=c.get("userId"),j=Object(l.c)((function(t){return w(t,Number(e))})),u=j&&T([j],I),b=Object(B.b)({loading:void 0===j,indicator:Object(E.jsx)(B.a,{})}),h=b.containerProps,m=b.indicatorEl,p=j&&u[0];return Object(s.useEffect)((function(){document.title="Delete Your Post"}),[]),Object(E.jsxs)("section",{children:[Object(E.jsx)("div",Object(r.a)(Object(r.a)({className:"loader-wrapper"},h),{},{children:m}))," ",j&&"2"===d?Object(E.jsx)("div",{className:"single-post-container",children:Object(E.jsxs)("article",{className:"single-post ui piled segment",children:[Object(E.jsx)("h1",{children:" Are you sure you want to delete this post?"}),Object(E.jsxs)("div",{className:"ui segment",children:[Object(E.jsxs)("h2",{className:"ui header",children:[Object(E.jsx)("img",{src:p.authorInfo?"https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public"+p.authorInfo.avatar_url:_,alt:"Avatar",className:"single-post-avatar ui circular image"})," ",z(p.title),Object(E.jsxs)("div",{className:"sub header",children:["by"," ",p.authorInfo?p.authorInfo.name:"Unknown"]})]}),Object(E.jsx)("div",{className:"single-post-body",children:Object(E.jsxs)("p",{children:[R(p.body).slice(0,50),"...",Object(E.jsx)("br",{})]})}),Object(E.jsx)("div",{className:"delete-button-container",children:2===p.userId&&Object(E.jsxs)("button",{onClick:function(){try{n(k(p.id.toString()));i("/LatinBlogPortfolio/Posts")}catch(e){console.log("delete failed",e)}},className:" ui red button",children:[Object(E.jsx)("i",{className:"trash icon"}),"Delete Post"]})})]})]})}):j&&"2"!==d?Object(E.jsx)("h1",{style:{marginLeft:"10px"},children:"401 Unauthorized"}):Object(E.jsx)("h1",{style:{marginLeft:"10px"},children:"404 Not Found"})]})};var Y=function(){return Object(E.jsx)(M.d,{children:Object(E.jsxs)(M.b,{path:"/LatinBlogPortfolio",element:Object(E.jsx)(U,{}),children:[Object(E.jsx)(M.b,{path:"*",element:Object(E.jsx)(H,{})}),Object(E.jsx)(M.b,{index:!0,element:Object(E.jsx)(K,{})}),Object(E.jsxs)(M.b,{path:"Posts",children:[Object(E.jsx)(M.b,{index:!0,element:Object(E.jsx)(D,{})}),Object(E.jsx)(M.b,{path:"Create",element:Object(E.jsx)(F,{})}),Object(E.jsx)(M.b,{path:"Delete",children:Object(E.jsx)(M.b,{path:":postId",element:Object(E.jsx)(W,{})})}),Object(E.jsx)(M.b,{path:":postId",element:Object(E.jsx)(J,{})})]}),Object(E.jsxs)(M.b,{path:"Authors",children:[Object(E.jsx)(M.b,{index:!0,element:Object(E.jsx)(G,{})}),Object(E.jsx)(M.b,{path:":authorId",element:Object(E.jsx)(V,{})})]})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))},Q=Object(b.b)("posts/fetchPosts",Object(u.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.abrupt("return",Object(j.a)(t.data));case 4:case"end":return e.stop()}}),e)})))),X=Object(b.c)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},reset:function(e){e.value=0},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Q.pending,(function(e,t){}))}}),Z=X.actions,$=(Z.increment,Z.decrement,Z.reset,Z.incrementByAmount,X.reducer),ee=function(e){return function(t){return function(a){var s=t(a),c=e.getState;return localStorage.setItem("applicationState",JSON.stringify(c())),s}}},te=Object(b.a)({reducer:{counter:$,posts:S},preloadedState:function(){if(null!==localStorage.getItem("applicationState"))return JSON.parse(localStorage.getItem("applicationState")||"")}(),middleware:function(e){return e().concat(ee)}});a(79);i.a.createRoot(document.getElementById("root")).render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(l.a,{store:te,children:Object(E.jsx)(C.a,{children:Object(E.jsx)(M.d,{children:Object(E.jsx)(M.b,{path:"*",element:Object(E.jsx)(Y,{})})})})})})),q()}},[[80,1,2]]]);
//# sourceMappingURL=main.fab3b3a1.chunk.js.map