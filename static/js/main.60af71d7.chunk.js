(this["webpackJsonpmy-app-1"]=this["webpackJsonpmy-app-1"]||[]).push([[0],{124:function(e,t,a){e.exports={avatar:"avatar_avatar__Nj4Zx"}},126:function(e,t,a){e.exports={user:"user_user__RrFk1"}},127:function(e,t,a){e.exports={NotFound:"NotFound_NotFound__3ag7y"}},154:function(e,t,a){e.exports=a(280)},159:function(e,t,a){},160:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(56),o=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(159),a(160);var c=a(7),u=a(33),i=a(10),s={terminalsData:[{name:"\u0422\u0435\u0440\u043c\u0438\u043d\u0430\u043b",info:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{name:"\u041f\u0440\u0438\u043c\u0435\u0440",info:"\u041f\u0440\u0438\u043c\u0435\u0440"}]};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if("ADD-TERMINALS"===t.type)return Object(i.a)(Object(i.a)({},e),{},{terminalsData:[].concat(Object(u.a)(e.terminalsData),[t.newterminal])});if("DELETE-TERMINALS"===t.type){var a=Object(u.a)(e.terminalsData);return e.terminalsData.length>1&&a.pop(),Object(i.a)(Object(i.a)({},e),{},{terminalsData:a})}return e},p={buyersData:[{id:1,name:"\u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f","average\u0421heck":166,shoppingCount:12,totalRevenues:2e3},{id:2,name:"\u041e\u043b\u0435\u0433","average\u0421heck":250,shoppingCount:2,totalRevenues:500},{id:3,name:"\u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432","average\u0421heck":400,shoppingCount:4,totalRevenues:1200},{id:4,name:"\u0418\u0440\u0438\u043d\u0430","average\u0421heck":300,shoppingCount:1,totalRevenues:300},{id:5,name:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439","average\u0421heck":214,shoppingCount:7,totalRevenues:1500},{id:6,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0439","average\u0421heck":333,shoppingCount:3,totalRevenues:1e3},{id:7,name:"\u0422\u043e\u043c","average\u0421heck":225,shoppingCount:4,totalRevenues:990},{id:8,name:"\u041b\u0435\u043e\u043d\u0438\u0434","average\u0421heck":325,shoppingCount:2,totalRevenues:650},{id:9,name:"\u0411\u043e\u0431","average\u0421heck":1800,shoppingCount:1,totalRevenues:1800},{id:10,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439","average\u0421heck":375,shoppingCount:8,totalRevenues:3e3},{id:11,name:"\u0410\u043d\u043d\u0430","average\u0421heck":300,shoppingCount:9,totalRevenues:2700},{id:12,name:"\u0422\u0430\u0442\u044c\u044f\u043d\u0430","average\u0421heck":480,shoppingCount:5,totalRevenues:2400},{id:13,name:"\u041e\u043b\u0435\u0433","average\u0421heck":454,shoppingCount:11,totalRevenues:5e3},{id:14,name:"\u041e\u043b\u044c\u0433\u0430","average\u0421heck":1300,shoppingCount:1,totalRevenues:1300},{id:15,name:"\u0412\u0438\u043a\u0442\u043e\u0440","average\u0421heck":289,shoppingCount:10,totalRevenues:2890}]};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;function a(t){var a=Object(u.a)(e.buyersData);return a=a.sort((function(e,a){return e[t]>a[t]?1:-1})),Object(i.a)(Object(i.a)({},e),{},{buyersData:Object(u.a)(a)})}return"SORT-BUYERS"===t.type?a(t.sort):e},v=a(80),f=a.n(v),d=a(119),h=a(120).create({baseURL:"https://avatars.githubusercontent.com/",responseType:"json"}),g=function(e){return h.get(e)},b=a(38),_={isAuth:!1,userAvatar:null};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return"SET_USER"===t.type?Object(i.a)(Object(i.a)({},e),t.data):e},y=a(121),j=a(118),N=Object(c.c)({terminals:m,buyers:E,auth:O,form:j.a}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,D=Object(c.e)(N,k(Object(c.a)(y.a)));window.store=D;var R=D,C=a(8),S=a(24),A=a(11),T=a(60),w=a.n(T),x=a(124),L=a.n(x);var I=function(e){return r.a.createElement("div",{className:L.a.avatar},r.a.createElement("img",{src:e.avatar}))},M=Object(C.b)((function(e){return{avatar:e.auth.userAvatar}}),(function(e){return{}}))(I),B=a(34),U=a.n(B);var F=function(){return r.a.createElement("div",{className:U.a.links},r.a.createElement(A.b,{to:function(e){return Object(i.a)(Object(i.a)({},e),{},{pathname:"/terminals"})},className:U.a.item,activeClassName:U.a.active},"\u0422\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044b"),r.a.createElement(A.b,{to:function(e){return Object(i.a)(Object(i.a)({},e),{},{pathname:"/buyers"})},className:U.a.item,activeClassName:U.a.active},"\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0438"))};var P=function(e){return r.a.createElement("header",{className:w.a.header},r.a.createElement("div",{className:w.a.container},r.a.createElement("span",{className:w.a.logo},"TEST"),r.a.createElement(F,null),r.a.createElement(M,null)))},Y=Object(C.b)((function(e){return{}}),(function(e){return{}}))(P),J=a(61),K=a.n(J),Q=a(116),W=a(117);function z(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}function G(e){if(!e||-1==e.search(/[A-Z]/))return"\u041b\u0435\u0433\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}function H(e){if(!e||-1==e.search(/[0-9]/))return"\u041b\u0435\u0433\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}var V=a(128),X=a(83),Z=a.n(X);function q(e){var t=e.input,a=e.meta,n=Object(V.a)(e,["input","meta"]),l=a.touched&&a.error;return r.a.createElement("div",{className:Z.a.form+" "+(l?Z.a.error:"")},l?r.a.createElement("span",null,a.error):r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,n))))}var $,ee=($=8,function(e){return e&&e.length<$?"Min symbols - ".concat($):void 0});var te=Object(W.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Q.a,{placeholder:"Login",name:"login",component:q,validate:z})),r.a.createElement("div",null,r.a.createElement(Q.a,{type:"password",placeholder:"Password",name:"password",component:q,validate:[z,ee,G,H]})),e.error?r.a.createElement("div",{className:K.a.error},e.error):r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}));var ae=function(e){return e.isAuth?r.a.createElement(S.a,{to:"/terminals"}):r.a.createElement("div",{className:K.a.login},r.a.createElement("div",{className:K.a.reg},r.a.createElement("h2",null,"Login"),r.a.createElement(te,{onSubmit:function(t){e.login(t.login)}})))},ne=Object(C.b)((function(e){return{isAuth:e.auth.isAuth}}),(function(e){return{login:function(t){e(function(e){return function(){var t=Object(d.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:"5065"===(n=t.sent).headers["content-length"]?a(Object(b.a)("login",{_error:"User is not found"})):a({type:"SET_USER",data:{userAvatar:n.request.responseURL,isAuth:!0}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(ae),re=a(35),le=a.n(re);var oe=Object(W.a)({form:"terminal"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:le.a.inputs},r.a.createElement("span",{className:le.a.inputs_item},r.a.createElement(Q.a,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430",name:"terminal",component:"input",autocomplete:"off"}),r.a.createElement(Q.a,{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"info",component:"input",autocomplete:"off"})),r.a.createElement("div",null,r.a.createElement("button",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}));var ce=function(e){if(!1===e.isAuth)return r.a.createElement(S.a,{to:"/login"});var t=e.terminalsData.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.info))}));return r.a.createElement("div",{className:le.a.content},r.a.createElement(oe,{onSubmit:function(t){t.terminal&&t.info&&(e.addTerminal(t.terminal,t.info),t.terminal=null,t.info=null)}}),r.a.createElement("table",{className:le.a.table,align:"center",cols:"2"},t),r.a.createElement("button",{onClick:e.deleteTerminal,className:le.a.button},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))},ue=Object(C.b)((function(e){return{isAuth:e.auth.isAuth,terminalsData:e.terminals.terminalsData}}),(function(e){return{addTerminal:function(t,a){e(function(e,t){return{type:"ADD-TERMINALS",newterminal:{name:e,info:t}}}(t,a))},deleteTerminal:function(){e({type:"DELETE-TERMINALS"})}}}))(ce),ie=a(47),se=a(63),me=a.n(se),pe=a(46),Ee=a.n(pe);var ve=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t=Math.ceil(e.buyersData.length/5),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",{className:Ee.a.pagination},a.map((function(t){return r.a.createElement("span",{onClick:function(){e.changePage(t),e.setPortionNumber(t)},className:e.portionNumber===t?Ee.a.pagination_item+" "+Ee.a.active:Ee.a.pagination_item},t)})))};var fe=function(e){var t=Object(n.useState)("\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0432\u0441\u0435\u0445"),a=Object(ie.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)("id"),u=Object(ie.a)(c,2),i=u[0],s=u[1],m=Object(n.useState)(e.buyersData),p=Object(ie.a)(m,2),E=p[0],v=p[1],f=Object(n.useState)(1),d=Object(ie.a)(f,2),h=d[0],g=d[1];if(Object(n.useEffect)((function(){v(e.buyersData)}),[e.buyersData]),!1===e.isAuth)return r.a.createElement(S.a,{to:"/login"});var b=e.buyersData,_=E.filter((function(e,t){return t<10})),O=E.filter((function(e,t){return t>-1&&t<5}));return r.a.createElement("div",{className:me.a.content},r.a.createElement("span",{className:me.a.select},r.a.createElement("select",{value:i,onChange:function(t){g(1),s(t.currentTarget.value),e.sortBuyers(t.currentTarget.value)}},r.a.createElement("option",{value:"id"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("option",{value:"average\u0421heck"},"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0447\u0435\u043a"),r.a.createElement("option",{value:"shoppingCount"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u041f\u043e\u043a\u0443\u043f\u043e\u043a"),r.a.createElement("option",{value:"totalRevenues"},"\u041e\u0431\u0449\u0430\u044f \u0432\u044b\u0440\u0443\u0447\u043a\u0430"),r.a.createElement("option",{value:"name"},"\u041f\u043e \u0438\u043c\u0435\u043d\u0438")),r.a.createElement("select",{value:l,onChange:function(e){v(b),g(1),o(+e.currentTarget.value)}},r.a.createElement("option",{value:"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0432\u0441\u0435\u0445"},"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0432\u0441\u0435\u0445"),r.a.createElement("option",{value:"5"},"\u043f\u043e 5"),r.a.createElement("option",{value:"10"},"top-10"))),r.a.createElement("table",{className:me.a.table,align:"center",cols:"5"},r.a.createElement("tr",null,r.a.createElement("th",null,"ID \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("th",null,"\u0418\u043c\u044f \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("th",null,"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0447\u0435\u043a"),r.a.createElement("th",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043a\u0443\u043f\u043e\u043a"),r.a.createElement("th",null,"\u041e\u0431\u0449\u0430\u044f \u0432\u044b\u0440\u0443\u0447\u043a\u0430")),(10===l?_:5===l?O:E).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(A.b,{to:"/buyers/"+e.id},e.id)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.average\u0421heck),r.a.createElement("td",null,e.shoppingCount),r.a.createElement("td",null,e.totalRevenues))}))),5===l?r.a.createElement(ve,Object.assign({},e,{changePage:function(e){v(1===e?b.filter((function(e,t){return t>=0&&t<5})):b.filter((function(t,a){return a>=0+5*(e-1)&&a<5+5*(e-1)})))},portionNumber:h,setPortionNumber:g})):null)},de=Object(C.b)((function(e){return{isAuth:e.auth.isAuth,buyersData:e.buyers.buyersData}}),(function(e){return{sortBuyers:function(t){e(function(e){return{type:"SORT-BUYERS",sort:e}}(t))}}}))(fe),he=a(126),ge=a.n(he),be=a(127),_e=a.n(be);var Oe=function(){return r.a.createElement("div",{className:_e.a.NotFound},"Ops.. \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :/")};var ye=function(e){var t=+e.match.params.userId;if(!1===e.isAuth)return r.a.createElement(S.a,{to:"/login"});if(e.buyersData.some((function(e){return e.id===t}))){var a=e.buyersData.find((function(e){return e.id===t}));return r.a.createElement("div",{className:ge.a.user},r.a.createElement("table",{cols:"2",align:"center"},r.a.createElement("tr",null,r.a.createElement("td",null,"ID"),r.a.createElement("td",null,a.id)),r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,a.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0447\u0435\u043a"),r.a.createElement("td",null,a.average\u0421heck)),r.a.createElement("tr",null,r.a.createElement("td",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043a\u0443\u043f\u043e\u043a"),r.a.createElement("td",null,a.shoppingCount)),r.a.createElement("tr",null,r.a.createElement("td",null,"\u041e\u0431\u0449\u0430\u044f \u0432\u044b\u0440\u0443\u0447\u043a\u0430"),r.a.createElement("td",null,a.totalRevenues))))}return r.a.createElement(Oe,null)},je=Object(c.d)(Object(C.b)((function(e){return{isAuth:e.auth.isAuth,buyersData:e.buyers.buyersData}})),S.g)(ye);var Ne=function(){return r.a.createElement(C.a,{store:R},r.a.createElement(A.a,{basename:"/test2"},r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement("span",{className:"content"},r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/terminals",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(S.b,{exact:!0,path:"/buyers",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(S.b,{exact:!0,path:"/buyers/:userId?",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(S.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(S.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(S.b,{exact:!0,path:"*",render:function(){return r.a.createElement(Oe,null)}}))),r.a.createElement("footer",null,"Copyright \xa9 2020"))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){e.exports={links:"links_links__1mgPy",item:"links_item__18y_p",active:"links_active__2YQYO"}},35:function(e,t,a){e.exports={content:"terminals_content__2EFkh",table:"terminals_table__2Kc2L",inputs:"terminals_inputs__1KaYM",inputs_item:"terminals_inputs_item__3jf4J",button:"terminals_button__bgUQL"}},46:function(e,t,a){e.exports={pagination:"paginator_pagination__1gNGI",pagination_item:"paginator_pagination_item__jHMwK",active:"paginator_active__3E4Sd"}},60:function(e,t,a){e.exports={header:"header_header__le349",container:"header_container__1owvz",logo:"header_logo__36LdC"}},61:function(e,t,a){e.exports={login:"login_login__14exH",reg:"login_reg__306Li",error:"login_error__2E8Gg"}},63:function(e,t,a){e.exports={content:"Buyers_content__3YFQI",table:"Buyers_table__1nTtD",select:"Buyers_select__3z2a8",user:"Buyers_user__1hV0y"}},83:function(e,t,a){e.exports={form:"formsControls_form__3Wm1i",error:"formsControls_error__24MY6"}}},[[154,1,2]]]);
//# sourceMappingURL=main.60af71d7.chunk.js.map