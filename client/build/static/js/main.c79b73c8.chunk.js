(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{57:function(e,a,t){e.exports=t(85)},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),o=t.n(l),c=t(30),i=t(7),s=t(19),m=t(107),u=t(118),g=t(109);var d=function(){var e=r.a.useState(0),a=Object(s.a)(e,2),t=a[0],n=a[1];return r.a.createElement(m.a,{position:"static",color:"default"},r.a.createElement(u.a,{value:t,onChange:function(e,a){n(a)},indicatorColor:"secondary"},r.a.createElement(g.a,{label:"Google Books",disabled:!0}),r.a.createElement(g.a,{label:"Search",component:c.b,to:"/"}),r.a.createElement(g.a,{label:"Saved",component:c.b,to:"/saved"})))},f=t(110),h=t(111),p=t(112),E=t(31),v=t.n(E),b=function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=20"))},k=function(){return v.a.get("/api/books")},x=function(e){return v.a.delete("/api/books/"+e)},N=function(e){return v.a.post("/api/books",e)},I=Object(f.a)({text:{fontFamily:"Arial, Helvetica, sans-serif",color:"white"},card:{textAlign:"center",backgroundColor:"rgb(44, 122, 109)"}});var S=function(){var e=I();return r.a.createElement(h.a,{className:e.card},r.a.createElement(p.a,null,r.a.createElement("h1",{className:e.text},"(React) Google Books Search"),r.a.createElement("h4",{className:e.text},"Search for and Save Books of Interest")))},j=t(115),w=t(114),y=t(116),O=t(113),A=Object(f.a)({root:{glexGrow:1},media:{height:232,width:168,margin:"auto",paddingTop:"5%",alignItems:"center"},cardText:{fontSize:"1rem",textAlign:"center",padding:"5%",margin:"auto",fontFamily:"Arial, Helvetica, sans-serif"},text:{fontFamily:"Arial, Helvetica, sans-serif"},background:{backgroundColor:"rgb(44, 122, 109)"}});var C=function(e){var a=e.title,t=e.authors,n=e.genres,l=e.description,o=e.image,c=e.link,i=e.handleBookDelete,s=A();return r.a.createElement(p.a,{className:s.background},r.a.createElement(h.a,{variant:"outlined",className:s.root},r.a.createElement(p.a,null,r.a.createElement("h2",{className:s.text},r.a.createElement("em",null,a))),r.a.createElement(p.a,{className:s.text},"Author(s):\xa0\xa0",t.map((function(e,a){return r.a.createElement("span",{key:a}," ",e,a<t.length-1?",":"")}))),r.a.createElement(p.a,{className:s.text},"Genre(s):\xa0\xa0",void 0===n?"There are no matches for this genre.":n.map((function(e,a){return r.a.createElement("span",{key:a},"  ",e,a<n.length-1?",":"")}))),r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:12,m:6,lg:4,xl:4},r.a.createElement(w.a,{className:s.media,image:o,title:a})),r.a.createElement(O.a,{item:!0,xs:12,m:6,lg:8,xl:8},r.a.createElement(p.a,{className:s.cardText},r.a.createElement("b",null,"Description:")," ",l))),r.a.createElement(j.a,null,r.a.createElement(y.a,{variant:"outlined",size:"small",href:c,target:"_blank"},"View"),r.a.createElement(y.a,{variant:"outlined",size:"small",onClick:i},"Delete"))))},T=Object(f.a)({background:{backgroundColor:"rgb(44, 122, 109)",color:"white",fontFamily:"Arial, Helvetica, sans-serif"}});var F=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];function o(){k().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}Object(n.useEffect)((function(){o()}),[]);var c=T();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(h.a,{variant:"outlined"},r.a.createElement(p.a,{className:c.background},r.a.createElement("h2",null,"Saved Books")),t.map((function(e){return r.a.createElement(C,{key:e._id,title:e.title,authors:e.author,genres:e.genre,description:e.description,image:e.image,link:e.link,handleBookDelete:function(){return a=e._id,void x(a).then((function(e){return o()})).catch((function(e){return console.log(e)}));var a}})}))))},B=t(49),H=t(119),L=Object(f.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),paddingTop:"5px",paddingBottom:"5px",flex:1},text:{fontFamily:"Arial, Helvetica, sans-serif",color:"white"},background:{backgroundColor:"rgb(44, 122, 109)"}}}));var z=function(e){var a=e.search,t=e.handleInputChange,n=L();return r.a.createElement(h.a,{variant:"outlined",className:n.background},r.a.createElement(p.a,null,r.a.createElement("h2",{className:n.text},"Search")),r.a.createElement(p.a,null,r.a.createElement(B.a,{className:n.root},r.a.createElement(H.a,{className:n.input,placeholder:"Search by title, author, or genre...",value:a,onChange:t,name:"term",list:"term",type:"text",id:"term"}))))},G=Object(f.a)({root:{glexGrow:1},media:{height:232,width:168,margin:"auto",paddingTop:"5%",alignItems:"center"},cardText:{fontSize:"1rem",textAlign:"center",padding:"5%",margin:"auto",fontFamily:"Arial, Helvetica, sans-serif"},text:{fontFamily:"Arial, Helvetica, sans-serif"},background:{backgroundColor:"rgb(44, 122, 109)"}});var D=function(e){var a=e.title,t=e.authors,n=e.genres,l=e.description,o=e.image,c=e.link,i=e.handleSave,s=G();return r.a.createElement(p.a,{className:s.background},r.a.createElement(h.a,{variant:"outlined",className:s.root},r.a.createElement(p.a,null,r.a.createElement("h2",{className:s.text},r.a.createElement("em",null,a))),r.a.createElement(p.a,{className:s.text},"Author(s):\xa0\xa0",void 0===t?"There are no authors for this title.":t.map((function(e,a){return r.a.createElement("span",{key:a},"  ",e,a<t.length-1?",":"")}))),r.a.createElement(p.a,{className:s.text},"Genre(s):\xa0\xa0",void 0===n?"There are no matches for this genre.":n.map((function(e,a){return r.a.createElement("span",{key:a},"  ",e,a<n.length-1?",":"")}))),r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:12,m:6,lg:4,xl:4},r.a.createElement(w.a,{className:s.media,image:o,title:a})),r.a.createElement(O.a,{item:!0,xs:12,m:6,lg:8,xl:8},r.a.createElement(p.a,{className:s.cardText},r.a.createElement("b",null,"Description:")," ",l))),r.a.createElement(j.a,null,r.a.createElement(y.a,{variant:"outlined",size:"small",href:c,target:"_blank"},"View"),r.a.createElement(y.a,{variant:"outlined",size:"small",onClick:i},"Save"))))},_=Object(f.a)({background:{backgroundColor:"rgb(44, 122, 109)",color:"white",fontFamily:"Arial, Helvetica, sans-serif"}});var R=function(){var e=Object(n.useState)("Star Wars"),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)([]),c=Object(s.a)(o,2),i=c[0],m=c[1],u=Object(n.useState)(""),g=Object(s.a)(u,2),d=g[0],f=g[1];console.log(d),Object(n.useEffect)((function(){t&&b(t).then((function(e){if(console.log("response",e),0===e.data.items.length)throw new Error("No results found.");m(e.data.items)})).catch((function(e){return f(e)}))}),[t]),console.log("results",i);var E=_();return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(z,{results:t,handleInputChange:function(e){l(e.target.value)}}),r.a.createElement(h.a,{variant:"outlined"},r.a.createElement(p.a,{className:E.background},r.a.createElement("h2",null,"Results")),i.map((function(e,a){return r.a.createElement(D,{key:a,title:e.volumeInfo.title,authors:e.volumeInfo.authors,genres:e.volumeInfo.categories,description:e.volumeInfo.description,image:void 0===e.volumeInfo.imageLinks?"https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-200x300.jpg":"".concat(e.volumeInfo.imageLinks.thumbnail),link:e.volumeInfo.infoLink,handleSave:function(){return function(e){console.log([e]),console.log(i[e].volumeInfo),N({title:i[e].volumeInfo.title,author:i[e].volumeInfo.authors,genre:i[e].volumeInfo.categories,description:i[e].volumeInfo.description,image:void 0===i[e].volumeInfo.imageLinks?"https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-200x300.jpg":i[e].volumeInfo.imageLinks.thumbnail,link:i[e].volumeInfo.infoLink}).then((function(e){return console.log("Successful save to database.",e)})).catch((function(e){return console.log("this is an error",e)}))}(a)}})}))))},J=t(117);var V=function(){return r.a.createElement(c.a,null,r.a.createElement(J.a,{maxWidth:"xl"},r.a.createElement(d,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/saved",component:F}),r.a.createElement(i.a,{exact:!0,path:"/",component:R}))))};o.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.c79b73c8.chunk.js.map