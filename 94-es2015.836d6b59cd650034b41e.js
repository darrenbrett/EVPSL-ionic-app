(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{GlhA:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));var e=[".btn[_ngcontent-%COMP%]{margin:10px}ion-item[_ngcontent-%COMP%]{border-bottom:1px solid #f4f4f4}.no-line[_ngcontent-%COMP%]{border:none}"]},cAcB:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),o=u("GlhA"),a=u("MKJQ"),b=u("sZkV"),r=u("s7LF"),s=u("SVse"),d=u("iInd"),g=u("mrSG"),c=u("qXBG");class p{constructor(l,n){this.authService=l,this.router=n,this.isLogin=!0,this.isLoading=!1,this.failedLogin=!1}onLogin(l){return g.a(this,void 0,void 0,(function*(){this.isLoading=!0;const n={email:l.value.email,password:l.value.password},u=yield this.authService.login(n);console.log("response: ",u),"Login failed"===u&&(this.failedLogin=!0,this.isLoading=!1),l.reset(),this.isLoading=!1}))}onSwitchAuthMode(){this.isLogin=!this.isLogin}ngOnInit(){this.creds=this.router.getCurrentNavigation().extras.state}}var h=e.nb({encapsulation:0,styles:[o.a],data:{}});function m(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,3,"ion-item",[["class","no-line"],["lines","none"]],null,null,null,a.M,a.l)),e.ob(1,49152,null,0,b.E,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Should be a valid email address."]))],(function(l,n){l(n,1,0,"none")}),null)}function f(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,3,"ion-item",[["class","no-line"],["lines","none"]],null,null,null,a.M,a.l)),e.ob(1,49152,null,0,b.E,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Should be at least 6 characters in length."]))],(function(l,n){l(n,1,0,"none")}),null)}function y(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"ion-spinner",[["class","ion-text-center"]],null,null,null,a.V,a.v)),e.ob(1,49152,null,0,b.mb,[e.h,e.k,e.x],null,null)],null,null)}function A(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-button",[["class","btn"],["color","primary"],["expand","block"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onLogin(e.Ab(l.parent,11))&&i),i}),a.B,a.b)),e.ob(1,49152,null,0,b.h,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),e.Ib(-1,0,["Log in"]))],(function(l,n){l(n,1,0,"primary",!e.Ab(n.parent,11).valid,"block","submit")}),null)}function k(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"p",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Login failed. Please try again."]))],null,null)}function v(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,6,"ion-header",[],null,null,null,a.H,a.h)),e.ob(1,49152,null,0,b.y,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.Z,a.z)),e.ob(3,49152,null,0,b.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[["style","text-align: center;"]],null,null,null,a.Y,a.y)),e.ob(5,49152,null,0,b.ub,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Log in"])),(l()(),e.pb(7,0,null,null,55,"ion-content",[["padding",""]],null,null,null,a.F,a.f)),e.ob(8,49152,null,0,b.r,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,53,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Ab(l,11).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Ab(l,11).onReset()&&i),i}),null,null)),e.ob(10,16384,null,0,r.o,[],null,null),e.ob(11,4210688,[["f",4]],0,r.j,[[8,null],[8,null]],null,null),e.Fb(2048,null,r.a,null,[r.j]),e.ob(13,16384,null,0,r.i,[[4,r.a]],null,null),(l()(),e.pb(14,0,null,null,35,"ion-list",[],null,null,null,a.P,a.o)),e.ob(15,49152,null,0,b.L,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,14,"ion-item",[],null,null,null,a.M,a.l)),e.ob(17,49152,null,0,b.E,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.N,a.n)),e.ob(19,49152,null,0,b.K,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Email"])),(l()(),e.pb(21,0,null,0,9,"ion-input",[["email",""],["name","email"],["ngModel",""],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Ab(l,25)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Ab(l,25)._handleInputEvent(u.target)&&i),i}),a.K,a.k)),e.ob(22,16384,null,0,r.l,[],{required:[0,"required"]},null),e.ob(23,16384,null,0,r.b,[],{email:[0,"email"]},null),e.Fb(1024,null,r.e,(function(l,n){return[l,n]}),[r.l,r.b]),e.ob(25,16384,null,0,b.Fb,[e.k],null,null),e.Fb(1024,null,r.f,(function(l){return[l]}),[b.Fb]),e.ob(27,671744,[["emailCtlr",4]],0,r.k,[[2,r.a],[6,r.e],[8,null],[6,r.f]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,r.g,null,[r.k]),e.ob(29,16384,null,0,r.h,[[4,r.g]],null,null),e.ob(30,49152,null,0,b.D,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.eb(16777216,null,0,1,null,m)),e.ob(32,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(33,0,null,0,14,"ion-item",[],null,null,null,a.M,a.l)),e.ob(34,49152,null,0,b.E,[e.h,e.k,e.x],null,null),(l()(),e.pb(35,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.N,a.n)),e.ob(36,49152,null,0,b.K,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Password"])),(l()(),e.pb(38,0,null,0,9,"ion-input",[["minlength","6"],["name","password"],["ngModel",""],["password",""],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Ab(l,42)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Ab(l,42)._handleInputEvent(u.target)&&i),i}),a.K,a.k)),e.ob(39,16384,null,0,r.l,[],{required:[0,"required"]},null),e.ob(40,540672,null,0,r.d,[],{minlength:[0,"minlength"]},null),e.Fb(1024,null,r.e,(function(l,n){return[l,n]}),[r.l,r.d]),e.ob(42,16384,null,0,b.Fb,[e.k],null,null),e.Fb(1024,null,r.f,(function(l){return[l]}),[b.Fb]),e.ob(44,671744,[["passwordCtlr",4]],0,r.k,[[2,r.a],[6,r.e],[8,null],[6,r.f]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,r.g,null,[r.k]),e.ob(46,16384,null,0,r.h,[[4,r.g]],null,null),e.ob(47,49152,null,0,b.D,[e.h,e.k,e.x],{minlength:[0,"minlength"],name:[1,"name"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(49,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,y)),e.ob(51,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,A)),e.ob(53,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,k)),e.ob(55,16384,null,0,s.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(56,0,null,null,6,"ion-button",[["class","btn"],["color","primary"],["expand","block"],["fill","clear"],["type","submit"]],null,null,null,a.B,a.b)),e.ob(57,49152,null,0,b.h,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],type:[3,"type"]},null),(l()(),e.pb(58,0,null,0,4,"a",[["href","#"],["style","text-decoration: none;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Ab(l,59).onClick(u)&&i),"click"===n&&(i=!1!==e.Ab(l,60).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),e.ob(59,737280,null,0,b.Eb,[s.g,b.Bb,e.k,d.m,[2,d.n]],null,null),e.ob(60,671744,null,0,d.o,[d.m,d.a,s.g],{routerLink:[0,"routerLink"]},null),e.Bb(61,3),(l()(),e.Ib(-1,null,["Switch to sign up"]))],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,19,0,"floating"),l(n,22,0,""),l(n,23,0,""),l(n,27,0,"email",null==u.creds?null:u.creds.email),l(n,30,0,"email","","email"),l(n,32,0,!e.Ab(n,27).valid&&e.Ab(n,27).touched),l(n,36,0,"floating"),l(n,39,0,""),l(n,40,0,"6"),l(n,44,0,"password",null==u.creds?null:u.creds.password),l(n,47,0,"6","password","","password"),l(n,49,0,!e.Ab(n,44).valid&&e.Ab(n,44).touched),l(n,51,0,u.isLoading),l(n,53,0,!u.isLoading),l(n,55,0,u.failedLogin),l(n,57,0,"primary","block","clear","submit"),l(n,59,0);var i=l(n,61,0,"/","auth","signup");l(n,60,0,i)}),(function(l,n){l(n,9,0,e.Ab(n,13).ngClassUntouched,e.Ab(n,13).ngClassTouched,e.Ab(n,13).ngClassPristine,e.Ab(n,13).ngClassDirty,e.Ab(n,13).ngClassValid,e.Ab(n,13).ngClassInvalid,e.Ab(n,13).ngClassPending),l(n,21,0,e.Ab(n,22).required?"":null,e.Ab(n,29).ngClassUntouched,e.Ab(n,29).ngClassTouched,e.Ab(n,29).ngClassPristine,e.Ab(n,29).ngClassDirty,e.Ab(n,29).ngClassValid,e.Ab(n,29).ngClassInvalid,e.Ab(n,29).ngClassPending),l(n,38,0,e.Ab(n,39).required?"":null,e.Ab(n,40).minlength?e.Ab(n,40).minlength:null,e.Ab(n,46).ngClassUntouched,e.Ab(n,46).ngClassTouched,e.Ab(n,46).ngClassPristine,e.Ab(n,46).ngClassDirty,e.Ab(n,46).ngClassValid,e.Ab(n,46).ngClassInvalid,e.Ab(n,46).ngClassPending),l(n,58,0,e.Ab(n,60).target,e.Ab(n,60).href)}))}function C(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-auth",[],null,null,null,v,h)),e.ob(1,114688,null,0,p,[c.a,d.m],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e.lb("app-auth",p,C,{},{},[]);const I=()=>u.e(96).then(u.bind(null,"i+Gx")).then(l=>l.SignupPageModuleNgFactory);class L{}u.d(n,"AuthPageModuleNgFactory",(function(){return w}));var w=e.mb(i,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[t.a,x]],[3,e.j],e.v]),e.yb(4608,s.l,s.k,[e.s,[2,s.u]]),e.yb(4608,r.n,r.n,[]),e.yb(4608,b.a,b.a,[e.x,e.g]),e.yb(4608,b.Ab,b.Ab,[b.a,e.j,e.p]),e.yb(4608,b.Db,b.Db,[b.a,e.j,e.p]),e.yb(1073742336,s.b,s.b,[]),e.yb(1073742336,r.m,r.m,[]),e.yb(1073742336,r.c,r.c,[]),e.yb(1073742336,b.yb,b.yb,[]),e.yb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),e.yb(1073742336,L,L,[]),e.yb(1073742336,i,i,[]),e.yb(1024,d.k,(function(){return[[{path:"",component:p},{path:"signup",loadChildren:I}]]}),[])])}))}}]);