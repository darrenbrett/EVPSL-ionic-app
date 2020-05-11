(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["standings-standings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/standings/standings.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/standings/standings.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Standings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-button size=\"6\" offset=\"2\" *ngIf=\"!overall\" (click)=\"showOverallStandings()\" color=\"success\">CLICK FOR OVERALL STANDINGS</ion-button>\n<ion-button size=\"6\" offset=\"2\" *ngIf=\"overall\" (click)=\"showConferenceStandings()\" color=\"success\">CLICK FOR CONFERENCE STANDINGS</ion-button>\n\n<ion-content>\n  <ion-grid *ngIf=\"!overall\">\n    <ion-header class=\"standings-header\">WESTERN CONFERENCE</ion-header>\n    <ion-row class=\"col-labels\">\n      <ion-col>TEAM</ion-col>\n      <ion-col style=\"margin-left: 6px;\">W</ion-col>\n      <ion-col>L</ion-col>\n      <ion-col>T</ion-col>\n      <ion-col>GD</ion-col>\n      <ion-col>PTS</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let t of westernStandings; let i = index\" class=\"center-box\">\n      <ion-img [src]=\"t.lgLogoUrl\" class=\"logo-img\"></ion-img>\n      <ion-col style=\"margin-left: 8px;\">{{ t.name.location | teamNameTrunc }}</ion-col>\n      <ion-col style=\"margin-left: 6px;\">{{ t.season.wins }}</ion-col>\n      <ion-col>{{ t.season.losses }}</ion-col>\n      <ion-col>{{ t.season.ties }}</ion-col>\n      <ion-col>{{ t.season.goalDiff }}</ion-col>\n      <ion-col>{{ t.season.points }}</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!overall\">\n    <ion-item-divider></ion-item-divider>\n    <ion-header class=\"standings-header\">EASTERN CONFERENCE</ion-header>\n    <ion-row class=\"col-labels\">\n      <ion-col>TEAM</ion-col>\n      <ion-col style=\"margin-left: 6px;\">W</ion-col>\n      <ion-col>L</ion-col>\n      <ion-col>T</ion-col>\n      <ion-col>GD</ion-col>\n      <ion-col>PTS</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let t of easternStandings; let i = index\" class=\"center-box\">\n      <ion-img [src]=\"t.lgLogoUrl\" class=\"logo-img\"></ion-img>\n      <ion-col style=\"margin-left: 8px;\">{{ t.name.location | teamNameTrunc }}</ion-col>\n      <ion-col style=\"margin-left: 6px;\">{{ t.season.wins }}</ion-col>\n      <ion-col>{{ t.season.losses }}</ion-col>\n      <ion-col>{{ t.season.ties }}</ion-col>\n      <ion-col>{{ t.season.goalDiff }}</ion-col>\n      <ion-col>{{ t.season.points }}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"overall\">\n    <ion-header class=\"standings-header\">OVERALL STANDINGS</ion-header>\n    <ion-row class=\"col-labels\">\n      <ion-col>TEAM</ion-col>\n      <ion-col style=\"margin-left: 6px;\">W</ion-col>\n      <ion-col>L</ion-col>\n      <ion-col>T</ion-col>\n      <ion-col>GD</ion-col>\n      <ion-col>PTS</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let t of overallStandings; let i = index\" class=\"center-box\">\n      <ion-img [src]=\"t.lgLogoUrl\" class=\"logo-img\"></ion-img>\n      <ion-col style=\"margin-left: 8px;\">{{ t.name.location | teamNameTrunc }}</ion-col>\n      <ion-col style=\"margin-left: 6px;\">{{ t.season.wins }}</ion-col>\n      <ion-col>{{ t.season.losses }}</ion-col>\n      <ion-col>{{ t.season.ties }}</ion-col>\n      <ion-col>{{ t.season.goalDiff }}</ion-col>\n      <ion-col>{{ t.season.points }}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/standings/standings-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/standings/standings-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StandingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsPageRoutingModule", function() { return StandingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _standings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./standings.page */ "./src/app/standings/standings.page.ts");




const routes = [
    {
        path: '',
        component: _standings_page__WEBPACK_IMPORTED_MODULE_3__["StandingsPage"]
    }
];
let StandingsPageRoutingModule = class StandingsPageRoutingModule {
};
StandingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StandingsPageRoutingModule);



/***/ }),

/***/ "./src/app/standings/standings.module.ts":
/*!***********************************************!*\
  !*** ./src/app/standings/standings.module.ts ***!
  \***********************************************/
/*! exports provided: StandingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsPageModule", function() { return StandingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _standings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standings-routing.module */ "./src/app/standings/standings-routing.module.ts");
/* harmony import */ var _standings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standings.page */ "./src/app/standings/standings.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let StandingsPageModule = class StandingsPageModule {
};
StandingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _standings_routing_module__WEBPACK_IMPORTED_MODULE_5__["StandingsPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot()
        ],
        declarations: [_standings_page__WEBPACK_IMPORTED_MODULE_6__["StandingsPage"]]
    })
], StandingsPageModule);



/***/ }),

/***/ "./src/app/standings/standings.page.scss":
/*!***********************************************!*\
  !*** ./src/app/standings/standings.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".standings-header {\n  margin-bottom: 4px;\n  color: #f1f1f1;\n  text-align: center;\n  background-color: #444;\n  padding: 4px 0;\n}\n\nion-row {\n  border-bottom: 1px solid #555;\n}\n\n.grey-text {\n  color: #ccc;\n}\n\n.logo-img {\n  height: 40px;\n  width: 34px;\n  padding: 2px 0;\n}\n\n.col-labels {\n  padding-left: 38px;\n}\n\n.center-box {\n  align-items: center;\n}\n\n.drk-grn-btn, .btn-native {\n  background-color: #1d6b1d;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3N0YW5kaW5ncy9zdGFuZGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zdGFuZGluZ3Mvc3RhbmRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3RhbmRpbmdzL3N0YW5kaW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhbmRpbmdzLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbmlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU1NTtcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4ubG9nby1pbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAzNHB4O1xuICBwYWRkaW5nOiAycHggMDtcbn1cblxuLmNvbC1sYWJlbHMge1xuICBwYWRkaW5nLWxlZnQ6IDM4cHg7XG59XG5cbi5jZW50ZXItYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRyay1ncm4tYnRuLCAuYnRuLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDZiMWQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwiLnN0YW5kaW5ncy1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7XG59XG5cbi5ncmV5LXRleHQge1xuICBjb2xvcjogI2NjYztcbn1cblxuLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgcGFkZGluZzogMnB4IDA7XG59XG5cbi5jb2wtbGFiZWxzIHtcbiAgcGFkZGluZy1sZWZ0OiAzOHB4O1xufVxuXG4uY2VudGVyLWJveCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kcmstZ3JuLWJ0biwgLmJ0bi1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ2YjFkO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/standings/standings.page.ts":
/*!*********************************************!*\
  !*** ./src/app/standings/standings.page.ts ***!
  \*********************************************/
/*! exports provided: StandingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsPage", function() { return StandingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _standings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standings.service */ "./src/app/standings/standings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let StandingsPage = class StandingsPage {
    constructor(standingsService, router) {
        this.standingsService = standingsService;
        this.router = router;
        this.easternStandings = [];
        this.westernStandings = [];
        this.overallStandings = [];
        this.overall = false;
    }
    getConferenceStandings() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.easternStandings = yield this.standingsService.getStandingsByConference('east');
            this.westernStandings = yield this.standingsService.getStandingsByConference('west');
        });
    }
    getOverallStandings() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.overallStandings = yield this.standingsService.getOverallStandings();
        });
    }
    showOverallStandings() {
        this.overall = true;
    }
    showConferenceStandings() {
        this.overall = false;
    }
    ngOnInit() {
        this.getConferenceStandings();
        this.getOverallStandings();
    }
};
StandingsPage.ctorParameters = () => [
    { type: _standings_service__WEBPACK_IMPORTED_MODULE_2__["StandingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
StandingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-standings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./standings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/standings/standings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./standings.page.scss */ "./src/app/standings/standings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_standings_service__WEBPACK_IMPORTED_MODULE_2__["StandingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], StandingsPage);



/***/ }),

/***/ "./src/app/standings/standings.service.ts":
/*!************************************************!*\
  !*** ./src/app/standings/standings.service.ts ***!
  \************************************************/
/*! exports provided: StandingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsService", function() { return StandingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");



let StandingsService = class StandingsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getStandingsByConference(conference) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let standings = [];
            const req = `teams/standings/${conference}`;
            standings = yield this.apiService.sendRequest(req);
            return standings;
        });
    }
    getOverallStandings() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let standings = [];
            const req = `teams/standings/overall`;
            standings = yield this.apiService.sendRequest(req);
            return standings;
        });
    }
};
StandingsService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
StandingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], StandingsService);



/***/ })

}]);
//# sourceMappingURL=standings-standings-module-es2015.js.map