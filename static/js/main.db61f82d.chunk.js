(this["webpackJsonpreact-control"]=this["webpackJsonpreact-control"]||[]).push([[0],{287:function(e,t,a){e.exports=a(476)},476:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(11),c=a.n(r),i=a(19),o=a(0),l=a.n(o),s=a(15),u=a.n(s),m=a(551),p=a(479),d=a(523),g=a(547),f=a(549),h=a(218),E=a.n(h),b=a(64),v=a(520),x=a(521),y=a(519),w=a(550),O=a(522),S=a(71),k=a.n(S),j="https://api.gbaranski.com";function C(){var e=new Headers;return e.append("username",localStorage.getItem("username")||""),e.append("password",localStorage.getItem("password")||""),e}var N=function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/api/login"),e.next=3,fetch(t,{method:"POST",headers:C()});case 3:return a=e.sent,e.abrupt("return",200===a.status);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function T(){return(T=Object(i.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/api/getDeviceStatus"),e.next=3,fetch(t,{method:"GET",headers:C()});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.next=9,JSON.parse(n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(i.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/api/getHistory"),e.next=3,fetch(t,{method:"GET",headers:C()});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/alarmclock/getData"),e.next=3,fetch(t,{method:"GET",headers:C()});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.t0=console,e.t1=JSON,e.next=11,n;case 11:return e.t2=e.sent,e.t3=e.t1.parse.call(e.t1,e.t2),e.t0.log.call(e.t0,e.t3),e.next=16,JSON.parse(n);case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(i.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/alarmclock/getTempArray"),e.next=3,fetch(t,{method:"GET",headers:C()});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.next=9,JSON.parse(n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return H.apply(this,arguments)}function H(){return(H=Object(i.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t.getHours(),":").concat(t.getMinutes()),(n=C()).append("time",a),e.next=5,fetch("".concat(j,"/alarmclock/setTime"),{method:"POST",headers:n});case 5:return r=e.sent,e.abrupt("return",r.ok);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=C()).append("state",String(+!t)),e.next=4,fetch("".concat(j,"/alarmclock/switchState"),{method:"POST",headers:a});case 4:return n=e.sent,e.abrupt("return",n.ok);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("gbaranski"===(t=C()).get("username")){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,fetch("".concat(j,"/alarmclock/testSiren"),{method:"POST",headers:t});case 7:return a=e.sent,e.abrupt("return",a.ok);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return W.apply(this,arguments)}function W(){return(W=Object(i.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/watermixer/getData"),e.next=3,fetch(t,{method:"GET",headers:C()});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.t0=console,e.t1=JSON,e.next=11,n;case 11:return e.t2=e.sent,e.t3=e.t1.parse.call(e.t1,e.t2),e.t0.log.call(e.t0,e.t3),e.next=16,JSON.parse(n);case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/watermixer/startMixing"),{method:"POST",headers:C()});case 2:return t=e.sent,e.abrupt("return",t.ok);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return l.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Made by ",l.a.createElement(y.a,{href:"https://github.com/gbaranski",target:"blank"},"Grzegorz Baranski"))}var K=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(1,0,2)}}}));function U(e){var t=K(),a=l.a.useState(""),r=Object(n.a)(a,2),o=r[0],s=r[1],u=l.a.useState(""),h=Object(n.a)(u,2),v=h[0],y=h[1],S=l.a.useState(!1),j=Object(n.a)(S,2),C=j[0],T=j[1],D=l.a.useState(""),B=Object(n.a)(D,2),I=B[0],z=B[1],P=function(){T(!1)},H=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),localStorage.setItem("username",o),localStorage.setItem("password",v),t.next=5,N();case 5:t.sent?(e.setAttemptedToLogin(!0),e.setLoggedIn(!0)):(z("Failed logging in"),T(!0));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(x.a,{component:"main",maxWidth:"xs"},l.a.createElement(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:C,autoHideDuration:6e3,onClose:P,message:I,action:l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{color:"secondary",size:"small",onClick:P},"UNDO"),l.a.createElement(O.a,{size:"small","aria-label":"close",color:"inherit",onClick:P},l.a.createElement(k.a,{fontSize:"small"})))}),l.a.createElement(d.a,null),l.a.createElement("div",{className:t.paper},l.a.createElement(m.a,{className:t.avatar},l.a.createElement(E.a,null)),l.a.createElement(b.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:t.form,autoComplete:"off",onSubmit:H},l.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",value:o,onChange:function(e){return s(e.target.value)},autoFocus:!0}),l.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:v,onChange:function(e){return y(e.target.value)}}),l.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:H},"Sign In"))),l.a.createElement(f.a,{mt:1},l.a.createElement(q,null)))}var Y=a(49),X=a(3),_=a(539),Q=a(149),V=a(32),Z=a(23);function $(e){return l.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function ee(e,t){return{time:e,amount:t}}var te=[ee("00:00",24.5),ee("03:00",23.5),ee("06:00",25.6),ee("09:00",23),ee("12:00",26.5),ee("15:00",21.2),ee("18:00",23.3),ee("21:00",26.1),ee("24:00",24.5)];function ae(){var e=Object(V.a)();return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,"Last 24 hours temperature"),l.a.createElement(Z.e,null,l.a.createElement(Z.d,{data:te,margin:{top:16,right:16,bottom:0,left:24}},l.a.createElement(Z.g,{dataKey:"time",stroke:e.palette.text.secondary}),l.a.createElement(Z.h,{stroke:e.palette.text.secondary},l.a.createElement(Z.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Temperature (\xb0C)")),l.a.createElement(Z.c,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}var ne=a(529),re=a(229),ce=a.n(re),ie=a(228),oe=a.n(ie),le=a(525),se=a(526),ue=a(528),me=a(527);function pe(){var e=l.a.useState({alarmclock:!1,watermixer:!1,gate:!1,garage:!1}),t=Object(n.a)(e,2),a=t[0],r=t[1];Object(o.useEffect)((function(){(function(){return T.apply(this,arguments)})().then((function(e){r(e),console.log(e)}))}),[]);var c=function(e){return e.state?l.a.createElement(oe.a,{style:{color:"rgb(32, 199, 155)"}}):l.a.createElement(ce.a,{style:{color:"rgb(244, 188, 58)"}})};return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,"Devices Status"),l.a.createElement(le.a,null,l.a.createElement(se.a,{key:1},l.a.createElement(me.a,{primary:"Alarmclock",secondary:"192.168.1.110"}),l.a.createElement(ue.a,null,l.a.createElement(c,{state:a.alarmclock}))),l.a.createElement(se.a,{key:2},l.a.createElement(me.a,{primary:"Watermixer",secondary:"192.168.1.120"}),l.a.createElement(ue.a,null,l.a.createElement(c,{state:a.watermixer}))),l.a.createElement(ne.a,{variant:"inset",component:"li"}),l.a.createElement(se.a,{key:3},l.a.createElement(me.a,{primary:"Gate",secondary:"192.168.1.1xx"}),l.a.createElement(ue.a,null,l.a.createElement(c,{state:a.gate}))),l.a.createElement(ne.a,{variant:"inset",component:"li"}),l.a.createElement(se.a,{key:4},l.a.createElement(me.a,{primary:"Garage",secondary:"192.168.1.1xx"}),l.a.createElement(ue.a,null,l.a.createElement(c,{state:a.garage}))),l.a.createElement(ne.a,{variant:"inset",component:"li"})))}var de=a(112),ge=a(553),fe=a(237),he=a.n(fe),Ee=a(63),be=a(530),ve=a(531),xe=a(230),ye=a.n(xe),we=a(231),Oe=a.n(we),Se=a(232),ke=a.n(Se),je=a(233),Ce=a.n(je),Ne=a(234),Te=a.n(Ne),De=a(235),Be=a.n(De),Ie=function(e){switch(e.index){default:case 0:return l.a.createElement(ye.a,null);case 1:return l.a.createElement(Oe.a,null);case 2:return l.a.createElement(ke.a,null);case 3:return l.a.createElement(Ce.a,null)}},ze=function(e){if(0===e)return"Dashboard";var t=[Object.keys(Ee.Devices)[e-1]];return t[0]===Ee.Devices.Gate&&(t[0]="".concat(Ee.Devices.Gate," & ").concat(Ee.Devices.Garage)),t},Pe=[Ee.Devices.Gate],He=function(e){return Pe.includes(Object.values(Ee.Devices)[e-1])},Ge=l.a.createElement("div",null,l.a.createElement(ve.a,{inset:!0},"More"),l.a.createElement(se.a,{button:!0,key:1},l.a.createElement(be.a,null,l.a.createElement(Te.a,null)),l.a.createElement(me.a,{primary:"About website"})),l.a.createElement(se.a,{button:!0,disabled:!0,key:2},l.a.createElement(be.a,null,l.a.createElement(Be.a,null)),l.a.createElement(me.a,{primary:"Support"}))),Fe=a(532),Le=a(533),Ae=a(236),Re=a.n(Ae),We=Object(v.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},toolbar:{paddingRight:24},title:{flexGrow:1},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},appBarSpacer:e.mixins.toolbar}}));function Je(e){var t=We();return l.a.createElement(Fe.a,{position:"absolute",className:Object(X.a)(t.appBar,e.open&&t.appBarShift)},l.a.createElement(Le.a,{className:t.toolbar},l.a.createElement(O.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:e.handleDrawerOpen,className:Object(X.a)(t.menuButton,e.open&&t.menuButtonHidden)},l.a.createElement(Re.a,null)),l.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},e.pageName)))}var Me=Object(v.a)((function(e){return{drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(de.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),toolbarIcon:Object(Y.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar)}}));var qe=function(e){var t=Me();return l.a.createElement(l.a.Fragment,null,l.a.createElement(Je,{open:e.open,handleDrawerOpen:e.handleDrawerOpen,pageName:e.pageName}),l.a.createElement(ge.a,{variant:"permanent",classes:{paper:Object(X.a)(t.drawerPaper,!e.open&&t.drawerPaperClose)},open:e.open},l.a.createElement("div",{className:t.toolbarIcon},l.a.createElement(O.a,{onClick:e.handleDrawerClose},l.a.createElement(he.a,null))),l.a.createElement(ne.a,null),l.a.createElement(le.a,null,function(e){return[0,1,2,3].map((function(t,a){return l.a.createElement(se.a,{button:!0,selected:e.currentlyOpen===a,disabled:He(a),onClick:function(){return e.setPage(a)},key:a},l.a.createElement(be.a,null,l.a.createElement(Ie,{index:a})),l.a.createElement(me.a,{primary:ze(a)}))}))}({setPage:e.setPage,currentlyOpen:e.currentlyOpen})),l.a.createElement(ne.a,null),l.a.createElement(le.a,null,Ge)))};var Ke=function(){return l.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Made by ",l.a.createElement(y.a,{target:"_blank",href:"https://github.com/gbaranski"},"Grzegorz Baranski")," ")},Ue=a(534),Ye=a(538),Xe=a(537),_e=a(535),Qe=a(536);function Ve(e,t){var a=Object(o.useRef)();Object(o.useEffect)((function(){a.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}function Ze(e){return("0"+String(e)).slice(-2)}function $e(){var e=l.a.useState([{}]),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(o.useEffect)((function(){(function(){return D.apply(this,arguments)})().then((function(e){r(e),console.log(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,"Recent Requests"),l.a.createElement(Ue.a,{size:"small"},l.a.createElement(_e.a,null,l.a.createElement(Qe.a,null,l.a.createElement(Xe.a,null,"Date"),l.a.createElement(Xe.a,null,"User"),l.a.createElement(Xe.a,null,"Request name"),l.a.createElement(Xe.a,null,"IP"))),l.a.createElement(Ye.a,null,a.map((function(e,t){return l.a.createElement(Qe.a,{key:t},l.a.createElement(Xe.a,null,function(e){var t=new Date(e);return Ze(t.getHours())+":"+Ze(t.getMinutes())+"  "+Ze(t.getDate())+"/"+Ze(t.getMonth()+1)+"/"+t.getFullYear()}(e.date)),l.a.createElement(Xe.a,null,e.user),l.a.createElement(Xe.a,null,e.requestType),l.a.createElement(Xe.a,null,e.ip))})))))}var et=Object(v.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(Y.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function tt(e){var t=et(),a=Object(X.a)(t.paper,t.fixedHeight);return l.a.createElement("div",{className:t.root},l.a.createElement(d.a,null),l.a.createElement(qe,{open:e.open,handleDrawerClose:function(){e.setOpen(!1)},handleDrawerOpen:function(){e.setOpen(!0)},currentlyOpen:0,setPage:e.setPage,pageName:"Dashboard"}),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.appBarSpacer}),l.a.createElement(x.a,{maxWidth:"lg",className:t.container},l.a.createElement(_.a,{container:!0,spacing:3},l.a.createElement(_.a,{item:!0,xs:12,md:8,lg:9},l.a.createElement(Q.a,{className:a},l.a.createElement(ae,null))),l.a.createElement(_.a,{item:!0,xs:12,md:4,lg:3},l.a.createElement(Q.a,{className:a},l.a.createElement(pe,null))),l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(Q.a,{className:t.paper},l.a.createElement($e,null)))),l.a.createElement(f.a,{pt:4},l.a.createElement(Ke,null)))))}var at=a(148),nt=a.n(at);function rt(){var e=Object(V.a)(),t=l.a.useState(),a=Object(n.a)(t,2),r=a[0],c=a[1];return Object(o.useEffect)((function(){(function(){return z.apply(this,arguments)})().then((function(e){c(e),console.log(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,"Last 24 hours temperature"),l.a.createElement(Z.e,null,l.a.createElement(Z.d,{data:r,margin:{top:16,right:16,bottom:0,left:24}},l.a.createElement(Z.g,{dataKey:"unixTime",domain:["auto","auto"],name:"Time",type:"number",tickFormatter:function(e){return nt()(e).format("HH:mm")},stroke:e.palette.text.secondary},l.a.createElement(Z.a,{position:"bottom",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Date (HH:mm)")),l.a.createElement(Z.h,{dataKey:"temp",name:"Temperature",stroke:e.palette.text.secondary},l.a.createElement(Z.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Temperature (\xb0C)")),l.a.createElement(Z.f,{formatter:function(e){return e+"\xb0C"},labelFormatter:function(e){return nt()(e).format("HH:mm")}}),l.a.createElement(Z.b,{formatter:function(){return"Temperature \xb0C"},align:"right"}),l.a.createElement(Z.c,{type:"monotone",dataKey:"temp",stroke:e.palette.primary.main,dot:!1}))))}var ct=a(33),it=a(55),ot=a.n(it),lt=a(540);function st(e){return e.data.map((function(e){return l.a.createElement(p.a,{color:"primary",onClick:e.onClick,variant:"outlined"},e.innerText)}))}var ut=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,"Manage Device"),l.a.createElement(lt.a,{color:"primary","aria-label":"outlined primary button group grouped"},l.a.createElement(st,{data:e.data,root:!0,grouped:!0})))};function mt(e){return e.data.map((function(e,t){return l.a.createElement(se.a,{key:t},e.icon&&l.a.createElement(ue.a,null,e.icon),l.a.createElement(me.a,{primary:e.title,secondary:e.description}))}))}var pt=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null,"Device Info"),l.a.createElement(mt,{data:e.data}))},dt=a(56),gt=a.n(dt),ft=a(541),ht=a(542),Et=a(543),bt=a(544),vt=a(545),xt=a(21),yt=a(548),wt=a(116),Ot=Object(v.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(Y.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},buttonSuccess:{backgroundColor:gt.a[500],"&:hover":{backgroundColor:gt.a[700]}},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{color:gt.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));var St=function(e){var t=Ot(),a=localStorage.getItem("lastAlarmclockData"),r=a?JSON.parse(a):void 0,o=l.a.useState(r||void 0),s=Object(n.a)(o,2),u=s[0],m=s[1],g=l.a.useState(!1),h=Object(n.a)(g,2),E=h[0],b=h[1],v=l.a.useState(new Date),y=Object(n.a)(v,2),S=y[0],j=y[1],C=l.a.useState(!1),N=Object(n.a)(C,2),T=N[0],D=N[1],I=l.a.useState(""),z=Object(n.a)(I,2),H=z[0],F=z[1],A=function(){D(!1)},R=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,F(t?"Success testing siren!":"Server is down, or You don't have permisison for that :)!"),D(!0),setTimeout((function(){D(!1)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Switching alamr state"),!u){e.next=9;break}return e.next=4,G(u.alarmState);case 4:F("Success changing alarm state!"),D(!0),setTimeout((function(){D(!1)}),1e3),e.next=12;break;case 9:F("Something went wrong!"),D(!0),setTimeout((function(){D(!1)}),1e3);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),e.next=3,P(S);case 3:t=e.sent,F(t?"Success changing alarm time!":"Failed during changing alarm time!"),D(!0),setTimeout((function(){D(!1)}),1e3);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Ve(Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,m(t),localStorage.setItem("lastAlarmclockData",JSON.stringify(t));case 5:case"end":return e.stop()}}),e)}))),1e3);var M=Object(X.a)(t.paper,t.fixedHeight),q=[{title:"Temperature",description:(null===u||void 0===u?void 0:u.temperature)+"\xb0C / "+(null===u||void 0===u?void 0:u.heatIndex)+"\xb0C"||!1,icon:l.a.createElement(ot.a,{path:ct.c,size:2,color:"rgb(117,117,117)"})},{title:"Humidity",description:(null===u||void 0===u?void 0:u.humidity)+"%"||!1,icon:l.a.createElement(ot.a,{path:ct.d,size:2,color:"rgb(117,117,117)"})},{title:"Remaining time",description:(null===u||void 0===u?void 0:u.remainingTime)||"",icon:l.a.createElement(ot.a,{path:ct.b,size:1.5,color:"rgb(117,117,117)",style:{marginLeft:"8%"}})},{title:"Alarm time",description:(null===u||void 0===u?void 0:u.alarmTime)+"".concat((null===u||void 0===u?void 0:u.alarmState)?" ON":" OFF")||"",icon:l.a.createElement(ot.a,{path:ct.a,size:1.5,color:"rgb(117,117,117)",style:{marginLeft:"8%"}})}];return l.a.createElement(xt.a,{utils:wt.a},l.a.createElement("div",{className:t.root},l.a.createElement(ft.a,{open:E,onClose:function(){return b(!1)},"aria-labelledby":"form-dialog-title"},l.a.createElement(ht.a,{id:"form-dialog-title"},"Set new Alarm Time"),l.a.createElement(Et.a,null,l.a.createElement(bt.a,null,"Use time input below to set new alarm time, press Save to save that to remote ESP microcontroller"),l.a.createElement(yt.a,{margin:"normal",id:"time-picker",label:"Time picker",value:S,required:!0,onChange:function(e){j(e)},minutesStep:5,ampm:!1,KeyboardButtonProps:{"aria-label":"change time"}})),l.a.createElement(vt.a,null,l.a.createElement(p.a,{onClick:function(){return b(!1)},color:"primary"},"Cancel"),l.a.createElement(p.a,{onClick:function(){return J()},color:"primary"},"Save"))),l.a.createElement(w.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:T,autoHideDuration:6e3,onClose:A,message:H,action:l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{color:"secondary",size:"small",onClick:A},"UNDO"),l.a.createElement(O.a,{size:"small","aria-label":"close",color:"inherit",onClick:A},l.a.createElement(k.a,{fontSize:"small"})))}),l.a.createElement(d.a,null),l.a.createElement(qe,{open:e.open,handleDrawerClose:function(){e.setOpen(!1)},handleDrawerOpen:function(){e.setOpen(!0)},currentlyOpen:1,setPage:e.setPage,pageName:"Alarmclock"}),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.appBarSpacer}),l.a.createElement(x.a,{maxWidth:"lg",className:t.container},l.a.createElement(_.a,{container:!0,spacing:3},l.a.createElement(_.a,{item:!0,xs:12,md:8,lg:9},l.a.createElement(Q.a,{className:M},l.a.createElement(rt,null))),l.a.createElement(_.a,{item:!0,xs:12,md:4,lg:3},l.a.createElement(Q.a,{className:M},l.a.createElement(pt,{data:q}))),l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(Q.a,{className:t.paper},l.a.createElement(ut,{data:[{onClick:R,innerText:"Test alarm"},{onClick:function(){b(!0)},innerText:"Set alarm time"},{onClick:W,innerText:"Switch alarm state"}]})))),l.a.createElement(f.a,{pt:4},l.a.createElement(Ke,null))))))},kt=Object(v.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(Y.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},buttonSuccess:{backgroundColor:gt.a[500],"&:hover":{backgroundColor:gt.a[700]}},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{color:gt.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));var jt=function(e){var t=kt(),a=localStorage.getItem("lastWatermixerData"),r=a?JSON.parse(a):void 0,o=l.a.useState(r||void 0),s=Object(n.a)(o,2),u=s[0],m=s[1],g=l.a.useState(!1),h=Object(n.a)(g,2),E=h[0],b=h[1],v=l.a.useState(""),y=Object(n.a)(v,2),S=y[0],j=y[1],C=function(){b(!1)},N=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:e.sent,j("Success mixing water!"),b(!0),setTimeout((function(){b(!1)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Ve(Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,m(t),localStorage.setItem("lastWatermixerData",JSON.stringify(t));case 5:case"end":return e.stop()}}),e)}))),1e3);var T,D=Object(X.a)(t.paper,t.fixedHeight),B=[{title:"Current state",description:"Water should be ".concat((null===u||void 0===u?void 0:u.isTimerOn)?"warm":"cold"),icon:l.a.createElement(ot.a,{path:ct.d,size:2,color:"rgb(117,117,117)"})},{title:"Remaining time",description:u?(T=u.remainingSeconds,"".concat(Math.floor(T/60%60),"m ").concat(T%60,"s")):"0",icon:l.a.createElement(ot.a,{path:ct.b,size:1.5,color:"rgb(117,117,117)",style:{marginLeft:"8%"}})}];return l.a.createElement(xt.a,{utils:wt.a},l.a.createElement("div",{className:t.root},l.a.createElement(w.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:E,autoHideDuration:6e3,onClose:C,message:S,action:l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{color:"secondary",size:"small",onClick:C},"UNDO"),l.a.createElement(O.a,{size:"small","aria-label":"close",color:"inherit",onClick:C},l.a.createElement(k.a,{fontSize:"small"})))}),l.a.createElement(d.a,null),l.a.createElement(qe,{open:e.open,handleDrawerClose:function(){e.setOpen(!1)},handleDrawerOpen:function(){e.setOpen(!0)},currentlyOpen:2,setPage:e.setPage,pageName:"Watermixer"}),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.appBarSpacer}),l.a.createElement(x.a,{maxWidth:"lg",className:t.container},l.a.createElement(_.a,{container:!0,spacing:3},l.a.createElement(_.a,{item:!0,xs:12,md:8,lg:12},l.a.createElement(Q.a,{className:D},l.a.createElement(pt,{data:B}))),l.a.createElement(_.a,{item:!0,xs:12},l.a.createElement(Q.a,{className:t.paper},l.a.createElement(ut,{data:[{onClick:N,innerText:"Start mixing"}]})))),l.a.createElement(f.a,{pt:4},l.a.createElement(Ke,null))))))},Ct=a(238),Nt=a(546);var Tt=function(){return l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",textAlign:"center",transform:"translate(-50%, -50%)"}},l.a.createElement(Nt.a,null),l.a.createElement($,null,"Loading"))},Dt=function(){var e=Object(i.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N(),e.next=3,n;case 3:if(!e.sent){e.next=5;break}t(!0);case 5:n.then((function(){return a(!0)}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Bt=function(){var e=Object(o.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(!1),i=Object(n.a)(c,2),s=i[0],u=i[1],m=Object(o.useState)(0),p=Object(n.a)(m,2),d=p[0],g=p[1],f=Object(o.useState)(!0),h=Object(n.a)(f,2),E=h[0],b=h[1];if(!s)return Dt(r,u),l.a.createElement(Tt,null);if(!a&&s)return l.a.createElement(U,{setAttemptedToLogin:u,setLoggedIn:r});var v=function(e){Ct.isMobile&&b(!1),g(e)};switch(d){default:case 0:return l.a.createElement(tt,{setPage:v,open:E,setOpen:b});case 1:return l.a.createElement(St,{setPage:v,open:E,setOpen:b});case 2:return l.a.createElement(jt,{setPage:v,open:E,setOpen:b})}};u.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(Bt,null)),document.getElementById("root"))}},[[287,1,2]]]);
//# sourceMappingURL=main.db61f82d.chunk.js.map