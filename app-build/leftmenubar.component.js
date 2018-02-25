"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NavigationManager_1 = require("./services/NavigationManager");
var LeftMenuBarComponent = (function () {
    function LeftMenuBarComponent(router, navigationManager) {
        var _this = this;
        this.router = router;
        this.navigationManager = navigationManager;
        this.showNavBar = false;
        this.activeMenu = "home";
        this.navigationManager.showNavBarEmitter.subscribe(function (mode) {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                _this.showNavBar = mode;
            }
        });
        this.navigationManager.menuActivationEmitter.subscribe(function (menuName) {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (menuName !== null) {
                _this.activeMenu = menuName;
            }
        });
    }
    LeftMenuBarComponent.prototype.goHome = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("home");
        this.router.navigate(["home"]);
    };
    LeftMenuBarComponent.prototype.goApplyForLeave = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("applyforleave");
        this.router.navigate(["applyforleave"]);
    };
    LeftMenuBarComponent.prototype.goLeaveDetails = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("leavedetails");
        this.router.navigate(["leavedetails"]);
    };
    LeftMenuBarComponent.prototype.goCurrentLeaveState = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("currentleavestate");
        this.router.navigate(["currentleavestate"]);
    };
    LeftMenuBarComponent.prototype.goHolidayCalendar = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("holidaycalendar");
        this.router.navigate(["holidaycalendar"]);
    };
    LeftMenuBarComponent.prototype.goOwnAttendance = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("ownattendance");
        this.router.navigate(["ownattendance"]);
    };
    LeftMenuBarComponent.prototype.goOwnCurrentAttendance = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("owncurrentattendance");
        this.router.navigate(["owncurrentattendance"]);
    };
    LeftMenuBarComponent.prototype.goAbsentSummary = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("absentsummary");
        this.router.navigate(["absentsummary"]);
    };
    LeftMenuBarComponent.prototype.goTodaysLeave = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("todaysleave");
        this.router.navigate(["todaysleave"]);
    };
    LeftMenuBarComponent.prototype.goEmployeeInfo = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("employeeinfo");
        this.router.navigate(["employeeinfo"]);
    };
    LeftMenuBarComponent.prototype.goNoticePublish = function (event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("noticepublish");
        this.router.navigate(["noticepublish"]);
    };
    return LeftMenuBarComponent;
}());
LeftMenuBarComponent = __decorate([
    core_1.Component({
        selector: "app-leftmenubar",
        templateUrl: 'app/html/leftmenubar.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, NavigationManager_1.NavigationManager])
], LeftMenuBarComponent);
exports.LeftMenuBarComponent = LeftMenuBarComponent;
//# sourceMappingURL=leftmenubar.component.js.map