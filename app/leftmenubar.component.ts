import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {NavigationManager} from "./services/NavigationManager";

@Component({
    selector: "app-leftmenubar",
    templateUrl: 'app/html/leftmenubar.component.html'
})

export class LeftMenuBarComponent {
    private showNavBar: boolean = false;
    private activeMenu: string = "home";

    constructor(private router: Router, private navigationManager: NavigationManager) {
        this.navigationManager.showNavBarEmitter.subscribe((mode) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.showNavBar = mode;
            }
        });
        this.navigationManager.menuActivationEmitter.subscribe((menuName) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (menuName !== null) {
                this.activeMenu = menuName;
            }
        });

    }
    
    goHome(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("home");
        this.router.navigate(["home"]);
    }
    goApplyForLeave(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("applyforleave");
        this.router.navigate(["applyforleave"]);
    }
    goLeaveDetails(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("leavedetails");
        this.router.navigate(["leavedetails"]);
    }
    goCurrentLeaveState(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("currentleavestate");
        this.router.navigate(["currentleavestate"]);
    }
    goHolidayCalendar(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("holidaycalendar");
        this.router.navigate(["holidaycalendar"]);
    }
    goOwnAttendance(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("ownattendance");
        this.router.navigate(["ownattendance"]);
    }
    goOwnCurrentAttendance(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("owncurrentattendance");
        this.router.navigate(["owncurrentattendance"]);
    }
    goAbsentSummary(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("absentsummary");
        this.router.navigate(["absentsummary"]);
    }
    goTodaysLeave(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("todaysleave");
        this.router.navigate(["todaysleave"]);
    }
    goEmployeeInfo(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("employeeinfo");
        this.router.navigate(["employeeinfo"]);
    }
    goNoticePublish(event: Event) {
        event.preventDefault();
        this.navigationManager.showNavBar(true);
        this.navigationManager.setActiveMenu("noticepublish");
        this.router.navigate(["noticepublish"]);
    }
}