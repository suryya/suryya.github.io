(this["webpackJsonpbsaeball-team"]=this["webpackJsonpbsaeball-team"]||[]).push([[0],{102:function(e,t,a){e.exports=a(121)},107:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(48),c=a.n(i),o=(a(107),a(31)),l=a(4),u=a(129),s=a(20),m=a(16),p=a(126),d=a(83),f=a(123),h=a(130),b=a(80),v=a(131),E=a(124),g=a(128),y=a(32),O=a(28),j=a.n(O),x=a(63),C="CREATE_TEAM",w="ADD_MEMBER",k=C,S=w,P="DATA_READY",z=r.a.createContext(),A=r.a.createContext(),F=["point guard (PG)","shooting guard (SG)","power forward (PF)","small forward (SF)","the center (C)"],q=function(e,t){return Promise.resolve().then((function(){localStorage.setItem(e,t)}))},I=function(e){return Promise.resolve().then((function(){return localStorage.getItem(e)}))};function T(e){return M.apply(this,arguments)}function M(){return(M=Object(x.a)(j.a.mark((function e(t){var a,n,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("baseball-team");case 2:if((i=e.sent)&&(i=JSON.parse(i)),!((null===(a=i)||void 0===a?void 0:a.members)&&(null===(n=i)||void 0===n?void 0:n.team)&&(null===(r=i)||void 0===r?void 0:r.positionOptions))){e.next=8;break}return e.abrupt("return",i);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("baseball-team",JSON.stringify(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return function(){var t=Object(x.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!==typeof e){t.next=9;break}return t.prev=1,t.next=4,e(a);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:return t.abrupt("return",a);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()}function D(e){return function(){var t=Object(x.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!==typeof e){t.next=10;break}return t.prev=1,t.next=4,e(a);case 4:a=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:return t.abrupt("return",a);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}function J(e,t){t.type;var a=t.payload;return Object(m.a)(Object(m.a)({},e),a)}function B(e){var t=e.children,a=Object(n.useRef)({members:[],team:[],positionOptions:F}),i=r.a.useReducer(J,a.current),c=Object(o.a)(i,2),l=c[0],u=c[1];Object(n.useEffect)((function(){(function(){var e=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(T)(t);case 2:a=e.sent,u({type:P,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(a.current)}),[a]);var s=Object(n.useCallback)((function(e){return function(t){var a;switch(t.type){case S:var n=l.members.filter((function(e){return"".concat(e.fname).concat(e.lname)==="".concat(t.payload.fname).concat(t.payload.lname)}));n&&n.length&&(a=Object(m.a)({},l)),a=Object(m.a)(Object(m.a)({},l),{members:[].concat(Object(y.a)(l.members),[t.payload])}),L(N)(a).then((function(){e({type:t.type,payload:a})}));break;case k:a=Object(m.a)(Object(m.a)({},l),{team:t.payload}),L(N)(a).then((function(){e({type:t.type,payload:a})}));break;default:throw new Error("Unhandled action type: ".concat(t.type))}}}),[l]);return r.a.createElement(z.Provider,{value:l},r.a.createElement(A.Provider,{value:s(u)},t))}function H(){var e=r.a.useContext(z);if(void 0===e)throw new Error("useCountState must be used within a CountProvider");return e}function V(){var e=r.a.useContext(A);if(void 0===e)throw new Error("useCountDispatch must be used within a CountProvider");return e}var _=a(13),G=a(132);var Y=r.a.memo((function(e){return r.a.createElement(G.a,e,e.children)})),Z=C;function $(){var e=V(),t=H(),a=t.members,i=t.team,c=t.positionOptions,u=Object(n.useState)([]),y=Object(o.a)(u,2),O=y[0],j=y[1],x=Object(p.a)(),C=Object(n.useState)({}),w=Object(o.a)(C,2),k=w[0],S=w[1],P=Object(n.useCallback)((function(e,t){var a={users:t.map((function(t){var a;return null!==(a=null===e||void 0===e?void 0:e[t])&&void 0!==a?a:""})),position:t.map((function(t){return(null===e||void 0===e?void 0:e[t])?t:""}))};S(a)}),[]);Object(n.useEffect)((function(){var e=(null===a||void 0===a?void 0:a.length)&&a.map((function(e){return"".concat(e.fname," ").concat(e.lname)}));j(e)}),[a]),Object(n.useEffect)((function(){P(i,c)}),[i,c,P]);var z=Object(n.useCallback)((function(t,a){var n=t.position.reduce((function(e,a,n){return Object(m.a)(Object(m.a)({},e),Object(s.a)({},a,t.users[n]))}),{});e({type:Z,payload:n}),a.setStatus({success:!0}),x({title:"Success",description:"Team successfully created",status:"success",duration:2e3,position:"top-right",isClosable:!0}),a.setSubmitting(!1)}),[e,x]),A=Object(n.useCallback)((function(e,t,n){console.log("validatTeamMembers:",t);var r,i=t.users.filter((function(t){return t&&t===e})).length>1;if(e){if(i&&t.users[n]===e)r="Team member can't be repeated";else if(t.position[n]&&t.users[n]===e){var c;r=0===(null===(c=a.filter((function(a){return"".concat(a.fname," ").concat(a.lname)===e&&a.position===t.position[n]})))||void 0===c?void 0:c.length)?"Selcted user does not match the position":void 0}}else r="Team Member is required";return r}),[a]),F=Object(n.useCallback)((function(e,t,n){console.log("validatePosition:",t);var r,i=t.position.filter((function(t){return t&&t===e})).length>1;if(e){if(i&&t.position[n]===e)r="Position can't be repeated";else if(t.users[n]&&t.position[n]===e){var c;r=0===(null===(c=a.filter((function(a){return"".concat(a.position)===e&&"".concat(a.fname," ").concat(a.lname)===t.users[n]})))||void 0===c?void 0:c.length)?"Selcted position does not match the user":void 0}}else r="Position is required";return r}),[a]);return r.a.createElement(d.a,{align:"center"},r.a.createElement(l.a,{w:"70%",h:"10"},r.a.createElement(f.a,{as:"h4",size:"md",p:4},"Compose bsae ball team"),r.a.createElement(_.d,{onSubmit:z,initialValues:k,enableReinitialize:!0},(function(e){return r.a.createElement(_.c,null,r.a.createElement(l.a,{w:"100%",p:4},r.a.createElement(h.a,{columns:2,spacingX:"40px",spacingY:"20px"},(null===c||void 0===c?void 0:c.length)&&c.map((function(t,a){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(l.a,{height:"80px"},r.a.createElement(_.b,{name:"users[".concat(a,"]"),validate:function(t){return A(t,e.values,a)}},(function(e){var t,n,i,c,o=e.field,l=e.form;return r.a.createElement(b.a,{isInvalid:(null===(t=l.errors)||void 0===t||null===(n=t.users)||void 0===n?void 0:n[a])&&(null===(i=l.touched)||void 0===i||null===(c=i.users)||void 0===c?void 0:c[a])},r.a.createElement(v.a,Object.assign({},o,{placeholder:"Choose Member"}),(null===O||void 0===O?void 0:O.length)&&O.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(_.a,{component:Y,name:"users[".concat(a,"]")}))}))),r.a.createElement(l.a,{height:"80px"},r.a.createElement(_.b,{name:"position[".concat(a,"]"),validate:function(t){return F(t,e.values,a)}},(function(e){var t,n,i,o,l=e.field,u=e.form;return r.a.createElement(b.a,{isInvalid:(null===(t=u.errors)||void 0===t||null===(n=t.position)||void 0===n?void 0:n[a])&&(null===(i=u.touched)||void 0===i||null===(o=i.position)||void 0===o?void 0:o[a])},r.a.createElement(v.a,Object.assign({},l,{placeholder:"Choose Position"}),(null===c||void 0===c?void 0:c.length)&&c.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(_.a,{component:Y,name:"position[".concat(a,"]")}))}))))})),r.a.createElement(l.a,{height:"70px"},r.a.createElement(b.a,null,r.a.createElement(E.a,{spacing:4},r.a.createElement(g.a,{variantColor:"gray",size:"md",type:"reset",onClick:function(){return e.resetForm(k)}},"Reset"),r.a.createElement(g.a,{variantColor:"blue",size:"md",isLoading:e.isSubmitting,type:"submit"},"Save")))))))}))))}var Q=a(101),U=a(125),X=a(64),K=w;function W(){var e=V(),t=H(),a=t.members,i=t.positionOptions,c=Object(p.a)(),o={fname:"",lname:"",height:"",position:""},u=Object(n.useCallback)((function(e){var t=a.filter((function(t){return"".concat(t.fname).concat(t.lname)==="".concat(e.fname).concat(e.lname)}));return t&&t.length}),[a]),s=r.a.useMemo((function(){return X.b({fname:X.c().label("First name").required().test("is-alpha","First name should contain characters only",(function(e){return/^[A-Za-z\s]+$/.test(e)})).test("unique-name","Name should be unique",(function(e){return!u({fname:e,lname:this.parent.lname})})),lname:X.c().label("Last name").required().test("is-alpha","Last name should contain characters only",(function(e){return/^[A-Za-z\s]+$/.test(e)})).test("unique-name","Name should be unique",(function(e){return!u({lname:e,fname:this.parent.fname})})),height:X.a().typeError("Height must be a number").label("Height").required().positive("should be a positive number"),position:X.c().label("Position").required()})}),[u]),m=Object(n.useCallback)((function(t,a){e({type:K,payload:t}),a.resetForm({formInitValues:o}),a.setStatus({success:!0}),c({title:"Success",description:"Added team member successfully",status:"success",duration:2e3,position:"top-right",isClosable:!0}),a.setSubmitting(!1)}),[e,c,o]);return r.a.createElement(d.a,{align:"center"},r.a.createElement(d.a,{size:"65%",align:"center",justify:"center"},r.a.createElement(l.a,{w:"100%",h:"10"},r.a.createElement(f.a,{as:"h4",size:"md",p:4},"Enter team member details"),r.a.createElement(_.d,{initialValues:o,onSubmit:m,validationSchema:s},(function(e){return r.a.createElement(_.c,null,r.a.createElement(l.a,{w:"100%",p:4},r.a.createElement(h.a,{columns:1,spacing:10},r.a.createElement(l.a,{height:"40px"},r.a.createElement(_.b,{name:"fname"},(function(e){var t=e.field,a=e.form;return r.a.createElement(b.a,{isInvalid:a.errors.fname&&a.touched.fname},r.a.createElement(Q.a,Object.assign({},t,{type:"text",id:"f-name","aria-describedby":"Enter first name",placeholder:"First Name"})),r.a.createElement(_.a,{id:"first-name-helper-text",component:Y,name:"fname"}))}))),r.a.createElement(l.a,{height:"40px"},r.a.createElement(_.b,{name:"lname"},(function(e){var t=e.field,a=e.form;return r.a.createElement(b.a,{isInvalid:a.errors.lname&&a.touched.lname},r.a.createElement(Q.a,Object.assign({},t,{type:"text",id:"l-name","aria-describedby":"Enter last name",placeholder:"Last Name"})),r.a.createElement(_.a,{id:"last-name-helper-text",component:Y,name:"lname"}))}))),r.a.createElement(l.a,{height:"40px"},r.a.createElement(_.b,{name:"height"},(function(e){var t=e.field,a=e.form;return r.a.createElement(b.a,{isInvalid:a.errors.height&&a.touched.height},r.a.createElement(Q.a,Object.assign({},t,{type:"text",id:"l-height","aria-describedby":"Enter height in cm*",placeholder:"Height in cm"})),r.a.createElement(_.a,{id:"height-helper-text",component:Y,name:"height"}))}))),r.a.createElement(l.a,{height:"40px"},r.a.createElement(_.b,{name:"position"},(function(e){var t=e.field,a=e.form;return r.a.createElement(b.a,{isInvalid:a.errors.position&&a.touched.position},r.a.createElement(v.a,Object.assign({},t,{placeholder:"Choose Position"}),(null===i||void 0===i?void 0:i.length)&&i.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(_.a,{id:"email-helper-text",component:Y,name:"position"}))}))),r.a.createElement(l.a,{height:"70px"},r.a.createElement(b.a,null,r.a.createElement(E.a,{spacing:4},r.a.createElement(g.a,{variantColor:"gray",size:"md",type:"reset",onClick:function(){return e.resetForm(o)}},"Reset"),r.a.createElement(g.a,{variantColor:"blue",size:"md",isLoading:e.isSubmitting,type:"submit"},"Save")))))))})))),r.a.createElement(d.a,{size:"35%",align:"center",justify:"center"},r.a.createElement(l.a,{w:"100%",h:"10",p:8},a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{as:"h4",size:"md"},"List of existing team members"),r.a.createElement(U.b,{as:"ol",styleType:"decimal"},null===a||void 0===a?void 0:a.map((function(e,t){return r.a.createElement(U.a,{key:"".concat(t)},e.fname," ",e.lname)})))))))}function ee(){var e=r.a.useState(0),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.createElement(l.a,{w:"100%",p:4},r.a.createElement(u.f,{index:a,onChange:function(e){n(e)}},r.a.createElement(u.c,null,r.a.createElement(u.a,null,"Compose Team"),r.a.createElement(u.a,null,"First Quarter")),r.a.createElement(B,null,r.a.createElement(u.e,null,r.a.createElement(u.d,null,r.a.createElement(W,null)),r.a.createElement(u.d,null,r.a.createElement($,null))))))}var te=a(98),ae=a(127),ne=a(18),re=a(133),ie=Object(m.a)(Object(m.a)({},ae.a),{},{colors:Object(m.a)(Object(m.a)({},ae.a.colors),{},{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}})}),ce=function(e){var t=e.children;return r.a.createElement(ne.a,{theme:ie},r.a.createElement(re.a,null),t)};var oe=function(){return r.a.createElement(ce,null,r.a.createElement("div",{className:"App"},r.a.createElement(te.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Baseball Team App"),r.a.createElement("link",{rel:"canonical",href:"https://reactjs.org/"})),r.a.createElement("header",{className:"App-header"}),r.a.createElement("main",null,r.a.createElement(ee,null))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.51ccbab5.chunk.js.map