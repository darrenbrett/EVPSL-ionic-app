(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team/team.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team/team.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Team Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"center-box\" style=\"text-align: center\">\n      <ion-col><h3>{{ team?.fullName }}</h3></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-img [src]=\"team?.lgLogoUrl\" class=\"logo-lg\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n    <ion-row>\n      <ion-header class=\"section-header\">Team Details</ion-header>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Founded:</span> {{ team?.entryYear }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">First Season:</span> {{ team?.firstSeason }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Conference:</span> {{ team?.conference }}</ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n    <ion-row>\n      <ion-header class=\"section-header\">Season Record</ion-header>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Wins:</span> {{ team?.season?.wins }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Losses:</span> {{ team?.season?.losses }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Ties:</span> {{ team?.season?.ties }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Goal Differential:</span> {{ team?.season?.goalDiff }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Points:</span> {{ team?.season?.points }}</ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n    <ion-row>\n      <ion-header class=\"section-header\">Ownership/Management</ion-header>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Owner:</span> {{ team?.owner?.firstName }} {{ team?.owner?.lastName }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Coach:</span> {{ team?.coach }}</ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n  </ion-grid>\n  <ion-row>\n    <ion-header class=\"section-header\">Player Roster</ion-header>\n  </ion-row>\n  <ion-grid *ngFor=\"let p of players; let i = index\">\n    <ion-row>\n      <ion-col style=\"margin-left: 10px;\">{{ p.fullName }} <span class=\"grey-text\">({{ p.position }})</span></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/teams/team/team-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/teams/team/team-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageRoutingModule", function() { return TeamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.page */ "./src/app/teams/team/team.page.ts");




const routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"]
    }
];
let TeamPageRoutingModule = class TeamPageRoutingModule {
};
TeamPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamPageRoutingModule);



/***/ }),

/***/ "./src/app/teams/team/team.module.ts":
/*!*******************************************!*\
  !*** ./src/app/teams/team/team.module.ts ***!
  \*******************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-routing.module */ "./src/app/teams/team/team-routing.module.ts");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team.page */ "./src/app/teams/team/team.page.ts");







let TeamPageModule = class TeamPageModule {
};
TeamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamPageRoutingModule"]
        ],
        declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
    })
], TeamPageModule);



/***/ }),

/***/ "./src/app/teams/team/team.page.scss":
/*!*******************************************!*\
  !*** ./src/app/teams/team/team.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grey-text {\n  color: #ccc;\n}\n\n.section-header {\n  margin: 0 8px;\n  padding: 2px;\n  margin-bottom: 4px;\n  background-color: #333;\n}\n\n.indented {\n  margin-left: 12px;\n}\n\n.logo-img-center {\n  height: 40px;\n  width: 34px;\n  padding: 4px 0 4px 0;\n  text-align: center;\n  margin-left: 20px;\n}\n\n.logo-lg {\n  position: relative;\n  width: 200px;\n  height: auto;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3RlYW1zL3RlYW0vdGVhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RlYW1zL3RlYW0vdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGVhbXMvdGVhbS90ZWFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmV5LXRleHQge1xuICBjb2xvcjogI2NjYztcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luOiAwIDhweDtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi5pbmRlbnRlZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4ubG9nby1pbWctY2VudGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgcGFkZGluZzogNHB4IDAgNHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5sb2dvLWxnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjowIGF1dG87XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcbn1cbiIsIi5ncmV5LXRleHQge1xuICBjb2xvcjogI2NjYztcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luOiAwIDhweDtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi5pbmRlbnRlZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4ubG9nby1pbWctY2VudGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgcGFkZGluZzogNHB4IDAgNHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5sb2dvLWxnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/teams/team/team.page.ts":
/*!*****************************************!*\
  !*** ./src/app/teams/team/team.page.ts ***!
  \*****************************************/
/*! exports provided: TeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPage", function() { return TeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams.service */ "./src/app/teams/teams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TeamPage = class TeamPage {
    constructor(activatedRoute, teamsService) {
        this.activatedRoute = activatedRoute;
        this.teamsService = teamsService;
        this.players = [];
    }
    getTeamByLocation(location) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const team = yield this.teamsService.getTeamByLocation(location);
            return team;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (!paramMap.has('location')) {
                    // redirect
                    return;
                }
                const location = paramMap.get('location');
                this.team = yield this.getTeamByLocation(location.charAt(0).toUpperCase() + location.slice(1));
                this.players = yield this.team.roster;
            }));
        });
    }
};
TeamPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"] }
];
TeamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team/team.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team.page.scss */ "./src/app/teams/team/team.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../teams.page.scss */ "./src/app/teams/teams.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]])
], TeamPage);



/***/ })

}]);
//# sourceMappingURL=team-team-module-es2015.js.map