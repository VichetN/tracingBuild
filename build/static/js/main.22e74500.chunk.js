(this.webpackJsonpcontacttracing=this.webpackJsonpcontacttracing||[]).push([[0],{174:function(e,t,n){},218:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var s,a,c,r=n(1),i=n(47),o=n.n(i),l=(n(218),n(219),n(85)),d=(n(174),n(114)),j=n(37),b=n(2),u=n.n(b),h=n(9),O=n(28),p=n(314),m=n(203),f=n(109),g=n(69),x=n(312),v=n(315),y=n(202),S=n(107),I=n(317),w=(Object(I.a)(s||(s=Object(S.a)(["\nmutation sendingPhone($phonenumber:String){\n    sendingPhone(phonenumber:$phonenumber){\n      success\n      message\n    }\n}\n"]))),Object(I.a)(a||(a=Object(S.a)(["\nmutation verifyCode($phonenumber:String,$code:String,$firstName:String,$lastName:String){\n    verifyCode(phonenumber:$phonenumber,code:$code,firstName:$firstName,lastName:$lastName){\n      success\n      message\n      id\n    }\n}\n"])))),N=Object(I.a)(c||(c=Object(S.a)(["\nmutation createTransaction($personalInfoId:ID!,$shopId:ID!){\n    createTransaction(personalInfoId:$personalInfoId,shopId:$shopId){\n        success\n        message\n    }\n}\n"]))),C=n(319),F=n(320),z=n(120),R=n(12);function $(e){var t=e.verifyCode,n=(e.personalInfo,e.isMoble),s=p.a.useForm(),a=Object(O.a)(s,1)[0],c=Object(r.useState)(!1),i=Object(O.a)(c,2),o=i[0],l=i[1];return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(f.a,{children:Object(R.jsx)(g.a,{xs:24,md:24,children:Object(R.jsx)(x.a,{style:{margin:"0 auto",width:n?"100%":"50%"},children:Object(R.jsx)(p.a,{form:a,name:"verifyCode",onFinish:function(e){t(e.code),l(!0)},onFinishFailed:function(e){console.log("Failed:",e)},style:{color:"#014283"},children:Object(R.jsxs)(f.a,{children:[Object(R.jsxs)(g.a,{xs:24,md:24,style:{textAlign:"center"},children:[Object(R.jsx)("h3",{className:"HeaderFont",children:"\u179f\u17bc\u1798\u1794\u1789\u17d2\u1785\u17bc\u179b\u179b\u17c1\u1781\u1780\u17bc\u178a\u178a\u17c2\u179b\u1799\u17be\u1784\u1794\u17b6\u1793\u1795\u17d2\u1789\u17be\u1791\u17c5\u1780\u17b6\u1793\u17cb\u179b\u17c1\u1781\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780"}),Object(R.jsx)("br",{})]}),Object(R.jsxs)(g.a,{xs:24,md:24,children:[Object(R.jsxs)("p",{style:{fontSize:18},children:[Object(R.jsx)(z.b,{}),"\u2003\u179b\u17c1\u1781\u1780\u17bc\u178a"]}),Object(R.jsx)(p.a.Item,{name:"code",rules:[{required:!0,message:"\u178f\u17d2\u179a\u17bc\u179c\u1794\u17c6\u1796\u17c1\u1789\u1794\u17d2\u179a\u17a2\u1794\u17cb\u1781\u17b6\u1784\u179b\u17be!"}],children:Object(R.jsx)(v.a,{placeholder:"\u179b\u17c1\u1781\u1780\u17bc\u178a",size:"large",style:{borderRadius:10}})}),Object(R.jsx)("p",{style:{fontSize:14,textAlign:"center"},children:"\u179b\u17c1\u1781\u1780\u17bc\u178a\u1793\u17b9\u1784\u1795\u17bb\u178f\u1780\u17c6\u178e\u178f\u17cb\u1780\u17d2\u1793\u17bb\u1784\u179a\u1799\u17c8\u1796\u17c1\u179b 30 \u179c\u17b7\u1793\u17b6\u1791\u17b8"})]}),Object(R.jsx)(g.a,{xs:24,md:24,children:Object(R.jsx)(p.a.Item,{children:Object(R.jsxs)(y.a,{htmlType:"submit",type:"primary",size:"large",style:{width:"100%",borderRadius:10},loading:o,children:["\u1794\u1793\u17d2\u178f\u2003",Object(R.jsx)(z.a,{})]})})})]})})})})})})}var E=n(169),k=n(197),D=n(123),T=n.n(D);function q(e){for(var t=T.a.parseZone(e).format("D").toString(),n=T.a.parseZone(e).format("M")-1,s=T.a.parseZone(e).format("YYYY").toString(),a=t.split(""),c=s.split(""),r=["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],i=[],o=["\u1790\u17d2\u1784\u17c3\u1791\u17b8"],l=0;l<a.length;l++)t<10&&o.push(r[0]),o.push(r[a[l]]),l===a.length-1&&i.push(o.join(""));i.push("\u1781\u17c2"+["\u1798\u1780\u179a\u17b6","\u1780\u17bb\u1798\u17d2\u1797\u17c8","\u1798\u17b7\u1793\u17b6","\u1798\u17c1\u179f\u17b6","\u17a7\u179f\u1797\u17b6","\u1798\u17b7\u1790\u17bb\u1793\u17b6","\u1780\u1780\u17d2\u1780\u178a\u17b6","\u179f\u17b8\u17a0\u17b6","\u1780\u1789\u17d2\u1789\u17b6","\u178f\u17bb\u179b\u17b6","\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6","\u1792\u17d2\u1793\u17bc\u179a"][n]);for(var d=["\u1786\u17d2\u1793\u17b6\u17c6"],j=0;j<c.length;j++)d.push(r[c[j]]),j===c.length-1&&i.push(d.join(""));return i.join(" ")}var B,H=function(e){return function(e){for(var t,n=null===e||void 0===e||null===(t=e.toString())||void 0===t?void 0:t.split(""),s=["\u17e0","\u17e1","\u17e2","\u17e3","\u17e4","\u17e5","\u17e6","\u17e7","\u17e8","\u17e9"],a=[],c=0;c<(null===n||void 0===n?void 0:n.length);c++)isNaN(n[c])?a.push(n[c]):a.push(s[n[c]]);return null===a||void 0===a?void 0:a.join("")}(T.a.parseZone(e).format("HH:mm").toString()+" \u1793\u17b6\u1791\u17b8")},A=n(193),P=n(192),M=n.p+"static/media/success-sound.588291df.mp3",J=n(146),L=n(190),V=n(108),Y=(Object(L.a)({apiKey:"AIzaSyBkrR5Bqi1DP7syi-WqxRBR38afDYTo31E",authDomain:"travel-statistic.firebaseapp.com",projectId:"travel-statistic",storageBucket:"travel-statistic.appspot.com",messagingSenderId:"295015207821",appId:"1:295015207821:web:f567c9b812c9662ac8a3c4",measurementId:"G-C8V5N5KPZT"}),Object(V.b)());function Z(e){var t=e.isMoble,n=e.shopData,s=new Date,a=(Object(j.f)(),Object(r.useState)(new Audio(M))),c=(Object(O.a)(a,1)[0],Object(r.useState)(!1)),i=Object(O.a)(c,2),o=(i[0],i[1],Object(J.a)(M,{volume:.5})),l=Object(O.a)(o,1)[0];return Object(r.useEffect)((function(){l(),sessionStorage.setItem("reloadCount","11")}),[]),Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(f.a,{children:Object(R.jsx)(g.a,{xs:24,md:24,children:Object(R.jsxs)(x.a,{style:{margin:"0 auto",width:t?"100%":"50%",color:"#014283",textAlign:"center"},children:[Object(R.jsx)("h2",{className:"HeaderFont",children:"\u179f\u17bc\u1798\u179f\u17d2\u179c\u17b6\u1782\u1798\u1793\u17cd\u1798\u1780\u1780\u17b6\u1793\u17cb"}),Object(R.jsxs)("h2",{className:"HeaderFont",children:[Object(R.jsx)(P.a,{style:{fontSize:30}})," ",null===n||void 0===n?void 0:n.name]}),Object(R.jsxs)("p",{children:["\u17a2\u17d2\u1793\u1780\u1798\u1780\u178a\u179b\u17cb\u1791\u17b8\u1793\u17c1\u17c7\u1793\u17c5",q(s)," \u179c\u17c1\u179b\u17b6\u1798\u17c9\u17c4\u1784 ",H(s)]}),Object(R.jsx)("div",{style:{width:250,height:250,textAlign:"center",borderRadius:"50%",border:"35px solid #52c41a",margin:"0 auto",padding:0},children:Object(R.jsxs)("div",{style:{width:"100%",height:"100%",paddingTop:30,borderRadius:"50%",boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"},children:[Object(R.jsx)("h2",{className:"HeaderFont",style:{color:"#9254de"},children:"\u179a\u17bd\u1785\u179a\u17b6\u179b\u17cb"}),Object(R.jsx)(A.a,{id:"success",onClick:function(){return l()},className:"scale-animate",style:{fontSize:80,color:"#52c41a"}})]})}),Object(R.jsx)("br",{}),Object(R.jsx)("p",{style:{fontSize:18},children:"\u179f\u17bc\u1798\u17a2\u179a\u1782\u17bb\u178e\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u1785\u17bc\u179b\u179a\u17bd\u1798\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780!"})]})})})})}var Q=Object(I.a)(B||(B=Object(S.a)(["\nquery getShopById($shopId:ID!){\n    getShopById(shopId:$shopId){\n        shopNumber\n        _id\n        name\n    }\n}\n"])));function W(){var e=Object(j.g)().id,t=Object(j.f)(),n=Object(r.useState)(!1),s=Object(O.a)(n,2),a=s[0],c=s[1],i=Object(r.useState)(null),o=Object(O.a)(i,2),d=o[0],b=o[1],S=Object(J.a)(M),I=(Object(O.a)(S,1)[0],Object(r.useState)({})),D=Object(O.a)(I,2),T=D[0],q=D[1],B=Object(r.useState)(!1),H=Object(O.a)(B,2),A=H[0],P=H[1],L=Object(r.useState)(""),W=Object(O.a)(L,2),K=(W[0],W[1],Object(r.useState)(null)),G=Object(O.a)(K,2),U=G[0],_=G[1],X=p.a.useForm(),ee=Object(O.a)(X,1)[0],te=Object(r.useState)("sendCode"),ne=Object(O.a)(te,2),se=ne[0],ae=ne[1],ce=Object(r.useState)({}),re=Object(O.a)(ce,2),ie=re[0],oe=re[1],le=function(){window.innerWidth<=960?P(!0):P(!1)};Object(r.useEffect)((function(){le()}),[]),window.addEventListener("resize",le);var de=Object(C.a)(Q,{variables:{shopId:e},onCompleted:function(e){var t=e.getShopById;q(t)},onError:function(e){console.log(e),t.push("/")}}),je=de.data;de.loading;Object(r.useEffect)((function(){je&&q(null===je||void 0===je?void 0:je.getShopById)}),[je]),Object(r.useEffect)((function(){JSON.parse(localStorage.getItem("personalInfo"));"11"===sessionStorage.getItem("reloadCount")&&(t.replace("/"),sessionStorage.removeItem("reloadCount"))}),[]),Y.onAuthStateChanged((function(e){e&&b(e)})),Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("personalInfo"));null!==d&&d.displayName===(null===t||void 0===t?void 0:t.id)&&he({variables:{personalInfoId:d.displayName,shopId:e}})}),[d]);var be=Object(F.a)(N,{onCompleted:function(e){!0===e.createTransaction.success?(m.b.success("\u1780\u17b6\u179a\u1785\u17bb\u17c7\u1788\u17d2\u1798\u17c4\u17c7\u1787\u17c4\u1782\u1787\u17d0\u1799"),ae("successMessage")):(m.b.error("\u179f\u17bc\u1798\u1798\u17c1\u178f\u17d2\u178f\u17b6\u179f\u17d2\u1780\u17c2\u1793 QR Code \u1798\u17d2\u178f\u1784\u1791\u17c0\u178f!"),t.push("/"))},onError:function(e){m.b.error("\u179f\u17bc\u1798\u1798\u17c1\u178f\u17d2\u178f\u17b6\u179f\u17d2\u1780\u17c2\u1793 QR Code \u1798\u17d2\u178f\u1784\u1791\u17c0\u178f!"),t.push("/")}}),ue=Object(O.a)(be,2),he=ue[0],Oe=(ue[1].loading,Object(F.a)(w,{onCompleted:function(t){var n=t.verifyCode;if(!0===n.success){var s={id:n.id,phonenumber:null===ie||void 0===ie?void 0:ie.tel};localStorage.setItem("personalInfo",JSON.stringify(s)),Object(V.d)(Y.currentUser,{displayName:n.id}).then((function(){he({variables:{personalInfoId:n.id,shopId:e}})})).catch((function(e){m.b.error(e)}))}else m.b.error(n.message)},onError:function(e){m.b.error(e.message)}})),pe=Object(O.a)(Oe,2),me=pe[0],fe=pe[1].loading,ge=function(e){var t=e;return"0"===t.substring(0,1)?"+855"+t.substring(1,t.length):"0"!==t.substring(0,1)&&"855"===t.substring(0,3)?"+855"+t.substring(3,t.length):"+"===t.substring(0,1)?"+855"+t.substring(1,t.length):"855"!==t.substring(0,3)?"+855"+t.substring(0,t.length):t};if(void 0!==e){var xe=function(){var e=Object(h.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.recaptchaVerifier=new V.a("recaptcha-container",{size:"invisible",callback:function(e){},"expired-callback":function(){}},Y),n=t.tel,s=window.recaptchaVerifier,Object(V.c)(Y,n,s).then((function(e){window.confirmationResult=e,_(e),ae("verifyCode")})).catch((function(e){console.log(e),c(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.confirm(t).then((function(e){e.user;me({variables:{firstName:null===ie||void 0===ie?void 0:ie.firstName,lastName:null===ie||void 0===ie?void 0:ie.lastName,phonenumber:null===ie||void 0===ie?void 0:ie.tel}})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{style:{padding:"20px",height:"100%"},children:["sendCode"===se?Object(R.jsx)(f.a,{children:Object(R.jsx)(g.a,{xs:24,md:24,children:Object(R.jsx)(x.a,{style:{margin:"0 auto",width:A?"100%":"50%"},children:Object(R.jsxs)(p.a,{form:ee,name:"login",onFinish:function(e){c(!0),isNaN(null===e||void 0===e?void 0:e.tel)?m.b.error("\u179f\u17bc\u1798\u1794\u1789\u17d2\u1785\u17bc\u179b\u17c1\u1781\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791\u17a2\u17c4\u1799\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c!"):(xe(Object(l.a)(Object(l.a)({},e),{},{tel:ge(null===e||void 0===e?void 0:e.tel)})),oe(Object(l.a)(Object(l.a)({},e),{},{tel:ge(null===e||void 0===e?void 0:e.tel)})))},onFinishFailed:function(e){console.log("Failed:",e)},style:{color:"#014283"},children:[Object(R.jsx)("div",{id:"recaptcha-container"}),Object(R.jsxs)(f.a,{children:[Object(R.jsxs)(g.a,{xs:24,md:24,style:{textAlign:"center"},children:[Object(R.jsx)("h3",{className:"HeaderFont",children:"\u179f\u17bc\u1798\u1794\u1789\u17d2\u1785\u17bc\u179b\u1796\u17d0\u178f\u17cc\u1798\u17b6\u1793\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780"}),Object(R.jsx)("br",{})]}),Object(R.jsxs)(g.a,{xs:24,md:24,children:[Object(R.jsxs)("p",{style:{fontSize:18},children:[Object(R.jsx)(E.a,{}),"\u2003\u1782\u17c4\u178f\u17d2\u178f\u1793\u17b6\u1798"]}),Object(R.jsx)(p.a.Item,{name:"lastName",rules:[{required:!0,message:"\u178f\u17d2\u179a\u17bc\u179c\u1794\u17c6\u1796\u17c1\u1789\u1794\u17d2\u179a\u17a2\u1794\u17cb\u1781\u17b6\u1784\u179b\u17be!"}],children:Object(R.jsx)(v.a,{placeholder:"\u1782\u17c4\u178f\u17d2\u178f\u1793\u17b6\u1798",size:"large",style:{borderRadius:10}})})]}),Object(R.jsxs)(g.a,{xs:24,md:24,children:[Object(R.jsxs)("p",{style:{fontSize:18},children:[Object(R.jsx)(E.a,{}),"\u2003\u1793\u17b6\u1798"]}),Object(R.jsx)(p.a.Item,{name:"firstName",rules:[{required:!0,message:"\u178f\u17d2\u179a\u17bc\u179c\u1794\u17c6\u1796\u17c1\u1789\u1794\u17d2\u179a\u17a2\u1794\u17cb\u1781\u17b6\u1784\u179b\u17be!"}],children:Object(R.jsx)(v.a,{placeholder:"\u1793\u17b6\u1798",size:"large",style:{borderRadius:10}})})]}),Object(R.jsxs)(g.a,{xs:24,md:24,children:[Object(R.jsxs)("p",{style:{fontSize:18},children:[Object(R.jsx)(k.a,{}),"\u2003\u179b\u17c1\u1781\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791"]}),Object(R.jsx)(p.a.Item,{name:"tel",rules:[{required:!0,message:"\u178f\u17d2\u179a\u17bc\u179c\u1794\u17c6\u1796\u17c1\u1789\u1794\u17d2\u179a\u17a2\u1794\u17cb\u1781\u17b6\u1784\u179b\u17be!"}],children:Object(R.jsx)(v.a,{placeholder:"\u179b\u17c1\u1781\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791",onChange:function(e){return function(e){/^[+-]?\d*(?:[.,]\d*)?$/.test(e)?ee.setFieldsValue({tel:e}):ee.setFieldsValue({tel:""})}(e.target.value)},size:"large",style:{borderRadius:10}})})]}),Object(R.jsx)(g.a,{xs:24,md:24,children:Object(R.jsx)(p.a.Item,{children:Object(R.jsxs)(y.a,{htmlType:"submit",type:"primary",size:"large",style:{width:"100%",height:"100%",borderRadius:10},loading:a,children:["\u1794\u1793\u17d2\u178f\u2003",Object(R.jsx)(z.a,{})]})})})]})]})})})}):null,"verifyCode"===se?Object(R.jsx)($,{verifyCode:ve,personalInfo:ie,isMoble:A,loading:fe}):null,"successMessage"===se?Object(R.jsx)(Z,{isMoble:A,shopData:T}):null]})}t.push("/")}var K=n(318),G=n(313),U=n.p+"static/media/srLogo-nobg.3caecaed.png",_=K.a.Header;function X(){return Object(R.jsx)(_,{className:"site-layout-background",style:{padding:0,background:"#014283",height:100},children:Object(R.jsxs)(f.a,{children:[Object(R.jsx)(g.a,{xs:7,sm:4,md:4,lg:2,style:{color:"white"},children:Object(R.jsx)(G.a,{className:"img-logo",src:U,preview:!1})}),Object(R.jsx)(g.a,{xs:14,style:{color:"white",fontSize:18,marginTop:15},children:" \u179a\u178a\u17d2\u178b\u1794\u17b6\u179b\u1781\u17c1\u178f\u17d2\u178f\u179f\u17c0\u1798\u179a\u17b6\u1794"})]})})}function ee(){var e=Object(r.useState)(!1),t=Object(O.a)(e,2),n=t[0],s=t[1],a=function(){window.innerWidth<=960?s(!0):s(!1)};return Object(r.useEffect)((function(){a()}),[]),window.addEventListener("resize",a),Object(R.jsx)("div",{style:{padding:"20px"},children:Object(R.jsx)(f.a,{children:Object(R.jsx)(g.a,{xs:24,md:24,children:Object(R.jsxs)(x.a,{style:{margin:"0 auto",width:n?"100%":"50%",color:"#014283",textAlign:"center"},children:[Object(R.jsx)("h2",{className:"HeaderFont",children:"\u179f\u17bc\u1798\u179f\u17d2\u1780\u17c2\u1793 QR Code!"}),Object(R.jsx)("br",{}),Object(R.jsx)("p",{style:{fontSize:18},children:"\u179f\u17bc\u1798\u17a2\u179a\u1782\u17bb\u178e\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u1785\u17bc\u179b\u179a\u17bd\u1798\u179a\u1794\u179f\u17cb\u17a2\u17d2\u1793\u1780"})]})})})})}K.a.Footer,K.a.Content;var te=n(311),ne=n(316),se=n(310),ae=(n(296),n(201)),ce=n.n(ae);var re=function(){var e=new te.a({uri:"https://covid-19.srprovince.com/graphql",cache:new ne.a});return Object(R.jsx)(se.a,{client:e,children:Object(R.jsx)(ce.a,Object(l.a)(Object(l.a)({},{title:"QR Code | Scan",description:"Siem Reap Province qr code scanner app",meta:{charset:"utf-8",name:{description:"Siem Reap Province qr code scanner app"}}}),{},{children:Object(R.jsx)(d.a,{children:Object(R.jsx)(K.a,{style:{minHeight:"100vh"},children:Object(R.jsxs)(K.a,{className:"site-layout",children:[Object(R.jsx)(X,{}),Object(R.jsxs)(j.c,{children:[Object(R.jsx)(j.a,{path:"/:id",children:Object(R.jsx)(W,{})}),Object(R.jsx)(j.a,{path:"/",component:function(){return Object(R.jsx)(ee,{})}})]})]})})})}))})},ie=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,322)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};o.a.render(Object(R.jsx)(re,{}),document.getElementById("root")),ie()}},[[299,1,2]]]);
//# sourceMappingURL=main.22e74500.chunk.js.map