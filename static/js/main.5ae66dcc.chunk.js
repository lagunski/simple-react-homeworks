(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__1-bZS",ava:"Message_ava__1r-uT",block:"Message_block__3jNrC",text_block:"Message_text_block__3tlUg",n:"Message_n__3JJQt",concave:"Message_concave__1Sv5H",left_concave:"Message_left_concave__2zCsP",m:"Message_m__31k4O",t:"Message_t__3Qb6O"}},,function(e,a,t){e.exports={main_block:"Affairs_main_block__dVW-M",button_del:"Affairs_button_del__3LPzi",buttons_filter:"Affairs_buttons_filter__3bagm",priority:"Affairs_priority__1VDmc",affairs:"Affairs_affairs__30M2O"}},,,function(e,a,t){e.exports={mainBlock:"Greeting_mainBlock__3Hpmn",error:"Greeting_error__1-6NV",errorText:"Greeting_errorText__3C27r",button:"Greeting_button__227Yr"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__10Zbj",errorInput:"SuperInputText_errorInput__UiWBK",error:"SuperInputText_error__1OosL"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3qAuR",radio:"SuperCheckbox_radio__z9Ugp",checkbox_block:"SuperCheckbox_checkbox_block__2pU6N"}},,,function(e,a,t){e.exports={default:"SuperButton_default__3MKo8",red:"SuperButton_red__3XVVN","infinite-spinning":"SuperButton_infinite-spinning__bu1Dv"}},,,,,,,function(e,a,t){e.exports={inputBlock:"App_inputBlock__Hyaa1",someClass:"App_someClass__1uk94",error:"App_error__AOmnW",errorText:"App_errorText__3txuX",button:"App_button__2JNQM"}},function(e,a,t){e.exports={blue:"HW4_blue__3UCom",column:"HW4_column__1M3lt"}},,,,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),o=(t(33),t(23)),u=t.n(o);var i=function(){return r.a.createElement("div",null,"// add NavLinks")},s=t(5),m=t.n(s);var _=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("div",{className:m.a.ava},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:m.a.block},r.a.createElement("div",{className:m.a.concave},r.a.createElement("div",{className:m.a.left_concave})),r.a.createElement("div",{className:m.a.text_block},r.a.createElement("div",{className:m.a.n},e.name),r.a.createElement("div",{className:m.a.m},e.message," "),r.a.createElement("div",{className:m.a.t},e.time))))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Roman",E="Hi! How are you?",p="15:15";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:d,name:f,message:E,time:p}))},v=t(2),h=t(7),k=t.n(h);var g=function(e){return r.a.createElement("div",{className:k.a.affair},r.a.createElement("div",null,e.affair.name,r.a.createElement("span",{className:k.a.button_del},r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))),r.a.createElement("div",{className:k.a.priority},"Priority: ",e.affair.priority))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:k.a.main_block},r.a.createElement("div",{className:k.a.affairs},a),r.a.createElement("div",{className:k.a.buttons_filter},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(N),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(v.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(26),j=t(10),y=t.n(j),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=y.a.error;return r.a.createElement("div",{className:y.a.mainBlock},r.a.createElement("input",{value:a,onChange:t,className:l?o:"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),r.a.createElement("span",{className:y.a.errorText},l),r.a.createElement("div",null," \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u044e\u0434\u0435\u0439: ",c),r.a.createElement("button",{onClick:n,className:y.a.button},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(v.a)(i,2),m=s[0],_=s[1],d=a.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){0!==o.trim().length?(t(o),alert("Hello ".concat(o," !")),u("")):(_("Error error error"),u(""))},error:m,totalUsers:d})},A=t(41);var T=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(w,{users:t,addUserCallback:function(e){var a=[{_id:Object(A.a)(),name:e}].concat(Object(O.a)(t));l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(6),B=t(12),I=t.n(B),F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(I.a.error," ").concat(u||""),m=c?I.a.superInput:"".concat(I.a.errorInput," ").concat(o," ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},P=t(24),U=t.n(P),H=t(16),W=t.n(H),J=function(e){var a=e.red,t=e.className,n=Object(M.a)(e,["red","className"]),l="".concat(a?W.a.red:W.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},D=t(27),G=t(13),K=t.n(G),V=function(e){var a=e.type,t=e.onChange,n=e.onChangeChecked,l=e.className,c=e.spanClassName,o=e.children,u=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]);console.log(Object(D.a)({type:a,onChange:t,onChangeChecked:n,className:l,spanClassName:c,children:o},u));var i="".concat(K.a.checkbox," ").concat(l||"");return r.a.createElement("label",{className:K.a.checkbox_block},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:i},u)),o&&r.a.createElement("span",{className:K.a.spanClassName},o))};var L=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(v.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,"homeworks 4",r.a.createElement("div",{className:U.a.column},r.a.createElement(F,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(J,{red:!1,onClick:o},"delete "),r.a.createElement(V,{checked:s,onChangeChecked:m},"it-incubator.by "),r.a.createElement(V,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})))},X=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(v.a)(o,2),i=u[0],s=(u[1],l||{}),m=s.children,_=s.onDoubleClick,d=s.className,f=Object(M.a)(s,["children","onDoubleClick","className"]),E="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",d);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(F,Object.assign({autoFocus:!0,onBlur:function(e){a&&a(e)},onEnter:function(){t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){_&&_(e)},className:E},f),m||c.value))};function z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}z("test",{x:"A",y:1});!function(e,a){var t=localStorage.getItem(e);null!==t&&(a=JSON.parse(t))}("test",{x:"",y:0});var Q=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(X,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(J,{onClick:function(){z("editable-span-value",t)}},"save"),r.a.createElement(J,{onClick:function(){}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var R=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(T,null),r.a.createElement(L,null),r.a.createElement(Q,null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var q=function(){return r.a.createElement("div",null)};var Y=function(){return r.a.createElement("div",null)},$=t(1),ee="/pre-junior",ae="/junior",te="/junior-plus";var ne=function(){return r.a.createElement("div",null,r.a.createElement($.d,null,r.a.createElement($.b,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:ee})}}),r.a.createElement($.b,{path:ee,render:function(){return r.a.createElement(R,null)}}),r.a.createElement($.b,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:ae})}}),r.a.createElement($.b,{path:ae,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement($.b,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:te})}}),r.a.createElement($.b,{path:te,render:function(){return r.a.createElement(q,null)}}),"// add routes",r.a.createElement($.b,{render:function(){return r.a.createElement(Z,null)}})))},re=t(15);var le=function(){return r.a.createElement("div",null,r.a.createElement(re.a,null,r.a.createElement(i,null),r.a.createElement(ne,null)))};var ce=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.5ae66dcc.chunk.js.map