(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[24],{519:function(t,e,n){"use strict";var a=n(3),o=n(4),r=n(11),c=n(495),i=n(0),s=n(1),l=["children"];e.a=function(t){var e=Object(i.useState)(!1),n=Object(r.a)(e,2),d=n[0],h=n[1],u=Object(i.useState)(-1),b=Object(r.a)(u,2),m=b[0],f=b[1],g=t.children,p=Object(o.a)(t,l);return Object(i.useEffect)((function(){var t=!0;return document.body.offsetWidth>576?t&&f(!0):t&&f(!1),function(){return t=!1}}),[]),Object(s.jsx)(s.Fragment,{children:-1!==m&&Object(s.jsx)(s.Fragment,{children:m?Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({},p),{},{children:g})):Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({},p),{},{open:d,onClick:function(){return h(!d)},children:g}))})})}},534:function(t,e,n){"use strict";var a=n(26),o=n(35);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(0)),c=(0,a(n(34)).default)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");e.default=c},555:function(t,e,n){"use strict";var a=n(28),o=n.n(a),r="/api/highscore",c={putUpdateHighscore:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o.a.put("".concat(r,"/update"),{name:t,score:e})},postScore:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o.a.post("".concat(r,"/post"),{name:t,coin:e})},getLeaderboard:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.a.get("".concat(r,"/leaderboard"),{params:{name:t}})}};e.a=c},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={TOP_COIN:"top-coin",CORRECT_WORD:"correct-word",WORD_MATCH:"word-match",FAST_GAME:"fast-game"}},592:function(t,e,n){"use strict";var a=n(2),o=n(4),r=n(0),c=n(6),i=(n(7),n(21)),s=n(8),l=r.forwardRef((function(t,e){var n=t.animation,i=void 0===n?"pulse":n,s=t.classes,l=t.className,d=t.component,h=void 0===d?"span":d,u=t.height,b=t.variant,m=void 0===b?"text":b,f=t.width,g=Object(o.a)(t,["animation","classes","className","component","height","variant","width"]),p=Boolean(g.children);return r.createElement(h,Object(a.a)({ref:e,className:Object(c.a)(s.root,s[m],l,p&&[s.withChildren,!f&&s.fitContent,!u&&s.heightAuto],!1!==i&&s[i])},g,{style:Object(a.a)({width:f,height:u},g.style)}))}));e.a=Object(s.a)((function(t){return{root:{display:"block",backgroundColor:Object(i.a)(t.palette.text.primary,"light"===t.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:t.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(t.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(l)},716:function(t,e,n){},757:function(t,e,n){"use strict";n.r(e);var a=n(279),o=n(16),r=n.n(o),c=n(27),i=n(11),s=n(555),l=n(59),d=n(0),h=n(3),u=n(592),b=n(519),m=n(5),f=n(29),g=n(488),p=Object(g.a)((function(){return{root:{width:"100%",height:"50rem",backgroundColor:"var(--bg-color-sec)",boxShadow:"var(--box-shadow)",overflowX:"hidden",overflowY:"auto",position:"relative","&::-webkit-scrollbar":{width:"2px"},"&::-webkit-scrollbar-track":{backgroundColor:"var(--bg-color-sec)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"var(--bg-color-accent)"}},titleWrap:{width:"100%",backgroundColor:function(t){return t.color},padding:"1.8rem 1.2rem",position:"sticky",top:0,left:0,zIndex:2},title:{color:"#fff",textTransform:"capitalize",fontSize:"1.8rem",fontWeight:500,letterSpacing:"0.75px"},infoIcon:{color:"#fff",cursor:"pointer"},boxWrap:{padding:"1.8rem 1.4rem",display:"grid",gridTemplateColumns:"1fr",gap:"1.4rem"},skeleton:{height:"5rem"},box:{padding:"0.8rem 1.4rem",border:"solid 1px var(--border-color)",display:"flex",justifyContent:"space-between",alignItems:"center"},avt:{borderRadius:"50%",width:"5rem",height:"5rem"},content:{flexGrow:1,margin:"0 1.2rem"},name:{fontSize:"1.5rem",fontWeight:500,lineHeight:1.75,color:"var(--text-color)"},count:{fontSize:"1.4rem",color:"var(--label-color)",fontWeight:500},medalIcon:{width:"4rem",height:"4rem"},nthTop:{width:"4rem",height:"4rem",lineHeight:"4rem",textAlign:"center",fontSize:"1.6rem",fontWeight:800,color:"#fff",clipPath:"polygon(50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%, 0 30%)"}}})),j=n(534),v=n.n(j),O=n(1);function x(t){var e=t.classes,n=t.nthTop,a=t.avatar,o=t.name,r=t.coin,c=t.unit,i=Boolean(o)&&o.length>=20?"".concat(o.slice(0,17),"..."):o,s=Boolean(a)?Object(f.a)(a,50,50):m.c.IMAGE_SRC,l=1===n?"#FFAA00":2===n?"#C0C0C0":3===n?"#cd7f32":"#EC4B76";return Object(O.jsxs)("div",{className:e.box,style:{borderColor:n<=3?l:""},children:[Object(O.jsx)("img",{src:s,alt:"Avatar",className:e.avt}),Object(O.jsxs)("div",{className:e.content,children:[Object(O.jsx)("h5",{className:e.name,children:i}),Object(O.jsx)("p",{children:Object(O.jsxs)("span",{className:e.count,children:[r,"\xa0",c]})})]}),Object(O.jsx)("div",{className:e.nthTop,style:{backgroundColor:l},children:n})]})}var w=function(t){var e=t.title,n=t.list,a=t.color,o=t.loading,r=t.unit,c=t.tooltip,i=p({color:a}),s=n&&n.sort((function(t,e){return Number(e.coin)-Number(t.coin)}));return console.log(n),Object(O.jsxs)("div",{className:i.root,children:[Object(O.jsxs)("div",{className:"".concat(i.titleWrap," flex-center-between"),children:[Object(O.jsx)("h3",{className:i.title,children:e}),c&&Object(O.jsx)(b.a,{title:c,children:Object(O.jsx)(v.a,{className:i.infoIcon})})]}),Object(O.jsx)("div",{className:i.boxWrap,children:o?new Array(10).fill(0).map((function(t,e){return Object(O.jsx)(u.a,{className:i.skeleton,animation:"wave",variant:"rect"},e)})):n&&s.map((function(t,e){return Object(d.createElement)(x,Object(h.a)(Object(h.a)({},t),{},{unit:r,classes:i,key:e,nthTop:e+1}))}))})]})};var C=function(t){var e=t.color,n=t.title,a=t.unit,o=t.tooltip,h=t.nameGame,u=Object(d.useState)([]),b=Object(i.a)(u,2),m=b[0],f=b[1],g=Object(d.useState)(!0),p=Object(i.a)(g,2),j=p[0],v=p[1];return Object(d.useEffect)((function(){return Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"top-coin"!==h){t.next=8;break}return t.next=4,l.a.getTopCoin(h);case 4:200===(e=t.sent).status&&(e.data.length>5?f(e.data.slice(0,5)):f(e.data),v(!1)),t.next=12;break;case 8:return t.next=10,s.a.getLeaderboard(h);case 10:200===(n=t.sent).status&&(console.log(n.data),n.data.length>5?f(n.data.list.slice(0,5)):f(n.data.list),v(!1));case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})))(),function(){return!1}}),[]),Object(O.jsx)(w,{list:m,loading:j,color:e,title:n,unit:a,tooltip:o})},k=n(556),y=n(56),N=(n(716),["#847AD1","#7AD18A","#E06B96","#36C0CE","#DB883E"]);e.default=function(){return Object(y.a)("B\u1ea3ng x\u1ebfp h\u1ea1ng"),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"leaderboard",children:[Object(O.jsxs)("h1",{className:"leaderboard-title flex-center",children:[Object(O.jsx)("img",{src:a.a,alt:"Icon",className:"leaderboard-icon"}),"B\u1ea2NG X\u1ebeP H\u1ea0NG"]}),Object(O.jsx)("div",{className:"english-break"}),Object(O.jsxs)("div",{className:"leaderboard-grid",children:[Object(O.jsx)(C,{title:"Top ng\u01b0\u1eddi d\xf9ng nhi\u1ec1u Coin nh\u1ea5t",color:N[0],unit:"$",tooltip:"Top nh\u1eefng ng\u01b0\u1eddi d\xf9ng c\xf3 s\u1ed1 coin nhi\u1ec1u nh\u1ea5t",nameGame:k.a.TOP_COIN}),Object(O.jsx)(C,{title:"Top H\xe3y ch\u1ecdn t\u1eeb \u0111\xfang",color:N[1],unit:"c\xe2u",tooltip:"Top nh\u1eefng ng\u01b0\u1eddi d\xf9ng c\xf3 s\u1ed1 c\xe2u \u0111\xfang nhi\u1ec1u nh\u1ea5t trong game H\xe3y ch\u1ecdn t\u1eeb \u0111\xfang",nameGame:k.a.CORRECT_WORD}),Object(O.jsx)(C,{title:"Top Gh\xe9p t\u1eeb",color:N[2],unit:"c\xe2u",tooltip:"Top nh\u1eefng ng\u01b0\u1eddi d\xf9ng c\xf3 s\u1ed1 c\xe2u \u0111\xfang nhi\u1ec1u nh\u1ea5t trong game Gh\xe9p t\u1eeb",nameGame:k.a.WORD_MATCH}),Object(O.jsx)(C,{title:"Top tay nhanh h\u01a1n n\xe3o",color:N[3],unit:"\u0111i\u1ec3m",tooltip:"Top nh\u1eefng ng\u01b0\u1eddi d\xf9ng c\xf3 \u0111i\u1ec3m cao nh\u1ea5t trong game Tay nhanh h\u01a1n n\xe3o",nameGame:k.a.FAST_GAME})]})]})})}}}]);
//# sourceMappingURL=24.ac9ae64e.chunk.js.map