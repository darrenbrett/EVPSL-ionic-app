(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{zrdp:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),i=u("MKJQ"),s=u("sZkV"),c=u("SVse"),r=u("mrSG"),b=u("yZrb");let a=(()=>{class l{constructor(l){this.apiService=l}getLatestScores(){return r.a(this,void 0,void 0,(function*(){let l=[];return l=yield this.apiService.sendRequest("games/latest"),console.log("scores: ",l),l.reverse(),l}))}}return l.ngInjectableDef=e.Ob({factory:function(){return new l(e.Pb(b.a))},token:l,providedIn:"root"}),l})();var p=u("6LKi");class h{constructor(l,n){this.scoresService=l,this.teamsService=n,this.scores=[]}getLatestScores(){return r.a(this,void 0,void 0,(function*(){return this.scores=yield this.scoresService.getLatestScores(),this.scores}))}ngOnInit(){this.getLatestScores()}}var g=e.nb({encapsulation:0,styles:[["ion-grid[_ngcontent-%COMP%]{border-bottom:1px solid #555}.logo-img[_ngcontent-%COMP%]{height:40px;padding:2px 0}.scorer-details[_ngcontent-%COMP%]{color:#ccc;font-size:70%}.center-box[_ngcontent-%COMP%]{align-items:center}"]],data:{}});function m(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,25,"ion-grid",[],null,null,null,i.G,i.g)),e.ob(1,49152,null,0,s.x,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,11,"ion-row",[["class","center-box"]],null,null,null,i.U,i.u)),e.ob(3,49152,null,0,s.db,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-col",[["size","2"]],null,null,null,i.E,i.e)),e.ob(5,49152,null,0,s.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(6,0,null,0,1,"ion-img",[["class","logo-img"]],null,null,null,i.J,i.j)),e.ob(7,49152,null,0,s.A,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.pb(8,0,null,0,2,"ion-col",[["size","4"]],null,null,null,i.E,i.e)),e.ob(9,49152,null,0,s.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(10,0,[" "," "])),(l()(),e.pb(11,0,null,0,2,"ion-col",[["size","2"]],null,null,null,i.E,i.e)),e.ob(12,49152,null,0,s.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(13,0,[" "," "])),(l()(),e.pb(14,0,null,0,11,"ion-row",[["class","center-box"]],null,null,null,i.U,i.u)),e.ob(15,49152,null,0,s.db,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,3,"ion-col",[["size","2"]],null,null,null,i.E,i.e)),e.ob(17,49152,null,0,s.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(18,0,null,0,1,"ion-img",[["class","logo-img"]],null,null,null,i.J,i.j)),e.ob(19,49152,null,0,s.A,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.pb(20,0,null,0,2,"ion-col",[["size","4"]],null,null,null,i.E,i.e)),e.ob(21,49152,null,0,s.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Ib(22,0,[" "," "])),(l()(),e.pb(23,0,null,0,2,"ion-col",[["sieze","2"]],null,null,null,i.E,i.e)),e.ob(24,49152,null,0,s.q,[e.h,e.k,e.x],null,null),(l()(),e.Ib(25,0,[" "," "]))],(function(l,n){l(n,5,0,"2"),l(n,7,0,n.context.$implicit.awayTeamLogoUrl),l(n,9,0,"4"),l(n,12,0,"2"),l(n,17,0,"2"),l(n,19,0,n.context.$implicit.homeTeamLogoUrl),l(n,21,0,"4")}),(function(l,n){l(n,10,0,n.context.$implicit.awayTeam),l(n,13,0,n.context.$implicit.awayTeamGoalTimes.length),l(n,22,0,n.context.$implicit.homeTeam),l(n,25,0,n.context.$implicit.homeTeamGoalTimes.length)}))}function x(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.H,i.h)),e.ob(1,49152,null,0,s.y,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Z,i.z)),e.ob(3,49152,null,0,s.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.c)),e.ob(5,49152,null,0,s.i,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[["class","green-menu"]],null,null,null,i.Q,i.r)),e.ob(7,49152,null,0,s.O,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.Y,i.y)),e.ob(9,49152,null,0,s.ub,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Scores"])),(l()(),e.pb(11,0,null,null,3,"ion-content",[],null,null,null,i.F,i.f)),e.ob(12,49152,null,0,s.r,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,m)),e.ob(14,278528,null,0,c.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,14,0,u.scores)}),null)}function y(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-scores",[],null,null,null,x,g)),e.ob(1,114688,null,0,h,[a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var d=e.lb("app-scores",h,y,{},{},[]),k=u("s7LF"),f=u("iInd");class v{}u.d(n,"ScoresPageModuleNgFactory",(function(){return z}));var z=e.mb(o,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[t.a,d]],[3,e.j],e.v]),e.yb(4608,c.l,c.k,[e.s,[2,c.u]]),e.yb(4608,k.n,k.n,[]),e.yb(4608,s.a,s.a,[e.x,e.g]),e.yb(4608,s.Ab,s.Ab,[s.a,e.j,e.p]),e.yb(4608,s.Db,s.Db,[s.a,e.j,e.p]),e.yb(1073742336,c.b,c.b,[]),e.yb(1073742336,k.m,k.m,[]),e.yb(1073742336,k.c,k.c,[]),e.yb(1073742336,s.yb,s.yb,[]),e.yb(1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),e.yb(1073742336,v,v,[]),e.yb(1073742336,o,o,[]),e.yb(1024,f.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);