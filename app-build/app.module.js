"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ng2_file_upload_1 = require("ng2-file-upload");
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
//import {MarketAPI} from './services/MarketAPI.service';
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var leftmenubar_component_1 = require("./leftmenubar.component");
var applyforleave_component_1 = require("./applyforleave.component");
var leavedetails_component_1 = require("./leavedetails.component");
var currentleavestate_component_1 = require("./currentleavestate.component");
var holidaycalendar_component_1 = require("./holidaycalendar.component");
var ownattendance_component_1 = require("./ownattendance.component");
var owncurrentattendance_component_1 = require("./owncurrentattendance.component");
var absentsummary_component_1 = require("./absentsummary.component");
var todaysleave_component_1 = require("./todaysleave.component");
var employeeinfo_component_1 = require("./employeeinfo.component");
var noticepublish_component_1 = require("./noticepublish.component");
var footer_component_1 = require("./footer.component");
var product_component_1 = require("./product.component");
var profile_component_1 = require("./profile.component");
var app_template_1 = require("./app.template");
var topnavbar_component_1 = require("./topnavbar.component");
var NavigationManager_1 = require("./services/NavigationManager");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var loader_component_1 = require("./loader.component");
var loader_service_1 = require("./webservice/loader.service");
var web_api_service_1 = require("./webservice/web-api-service");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var CKEditorSample_1 = require("./CKEditorSample");
var material_1 = require("@angular/material");
var appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'applyforleave',
        component: applyforleave_component_1.ApplyForLeaveComponent
    },
    {
        path: 'leavedetails',
        component: leavedetails_component_1.LeaveDetailsComponent
    },
    {
        path: 'currentleavestate',
        component: currentleavestate_component_1.CurrentLeaveStateComponent
    },
    {
        path: 'holidaycalendar',
        component: holidaycalendar_component_1.HolidayCalendarComponent
    },
    {
        path: 'ownattendance',
        component: ownattendance_component_1.OwnAttendanceComponent
    },
    {
        path: 'owncurrentattendance',
        component: owncurrentattendance_component_1.OwnCurrentAttendanceComponent
    },
    {
        path: 'absentsummary',
        component: absentsummary_component_1.AbsentSummaryComponent
    },
    {
        path: 'todaysleave',
        component: todaysleave_component_1.TodaysLeaveComponent
    },
    {
        path: 'employeeinfo',
        component: employeeinfo_component_1.EmployeeInfoComponent
    },
    {
        path: 'noticepublish',
        component: noticepublish_component_1.NoticePublishComponent
    },
    {
        path: 'products',
        component: product_component_1.ProductComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'ck',
        component: CKEditorSample_1.CKEditorSample
    },
    {
        path: '**',
        component: app_component_1.AppComponent
    },
];
core_2.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            ngx_bootstrap_1.CarouselModule.forRoot(),
            ngx_bootstrap_1.TypeaheadModule.forRoot(),
            ngx_bootstrap_1.DatepickerModule.forRoot(),
            ngx_bootstrap_1.ModalModule.forRoot(),
            ngx_bootstrap_1.TabsModule.forRoot(),
            material_1.MatFormFieldModule, material_1.MatOptionModule, material_1.MatSelectModule,
            material_1.MatMenuModule,
            material_1.MatPaginatorModule,
            animations_1.BrowserAnimationsModule, material_1.MatButtonModule, ng2_file_upload_1.FileUploadModule,
            router_1.RouterModule.forRoot(appRoutes),
            ng2_ckeditor_1.CKEditorModule
        ],
        exports: [
            material_1.MatAutocompleteModule,
            material_1.MatButtonModule,
            material_1.MatButtonToggleModule,
            material_1.MatCardModule,
            material_1.MatCheckboxModule,
            material_1.MatChipsModule,
            material_1.MatStepperModule,
            material_1.MatDatepickerModule,
            material_1.MatDialogModule,
            material_1.MatExpansionModule,
            material_1.MatGridListModule,
            material_1.MatIconModule,
            material_1.MatInputModule,
            material_1.MatListModule,
            material_1.MatMenuModule,
            material_1.MatNativeDateModule,
            material_1.MatPaginatorModule,
            material_1.MatProgressBarModule,
            material_1.MatRadioModule,
            material_1.MatRippleModule,
            material_1.MatSelectModule,
            material_1.MatSidenavModule,
            material_1.MatSliderModule,
            material_1.MatSlideToggleModule,
            material_1.MatSnackBarModule,
            material_1.MatSortModule,
            material_1.MatTableModule,
            material_1.MatTabsModule,
            material_1.MatToolbarModule,
            material_1.MatOptionModule,
            material_1.MatSelectModule, material_1.MatButtonModule,
            material_1.MatMenuModule,
            material_1.MatProgressSpinner, material_1.MatSpinner,
            material_1.MatFormFieldModule, material_1.MatOptionModule,
            material_1.MatSelectModule, material_1.MatButtonModule,
            material_1.MatMenuModule, material_1.MatProgressSpinner, material_1.MatSpinner,
            ng2_file_upload_1.FileUploadModule,
            loader_component_1.LoaderComponent
        ],
        declarations: [
            /**
             * This is for templating
             */
            app_template_1.AppTemplate,
            /**
             * All are components of the template
             */
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            applyforleave_component_1.ApplyForLeaveComponent,
            leavedetails_component_1.LeaveDetailsComponent,
            currentleavestate_component_1.CurrentLeaveStateComponent,
            holidaycalendar_component_1.HolidayCalendarComponent,
            ownattendance_component_1.OwnAttendanceComponent,
            owncurrentattendance_component_1.OwnCurrentAttendanceComponent,
            absentsummary_component_1.AbsentSummaryComponent,
            todaysleave_component_1.TodaysLeaveComponent,
            employeeinfo_component_1.EmployeeInfoComponent,
            noticepublish_component_1.NoticePublishComponent,
            leftmenubar_component_1.LeftMenuBarComponent,
            footer_component_1.FooterComponent,
            product_component_1.ProductComponent,
            profile_component_1.ProfileComponent,
            topnavbar_component_1.TopNavbarComponent,
            loader_component_1.LoaderComponent,
            material_1.MatProgressSpinner, material_1.MatSpinner,
            CKEditorSample_1.CKEditorSample,
        ],
        providers: [
            //MarketAPI, 
            NavigationManager_1.NavigationManager,
            web_api_service_1.WebAPIService,
            loader_service_1.LoaderService,
            //        {provide: APP_BASE_HREF, useValue: '/InventoryUI'}
            { provide: common_1.LocationStrategy, useValue: '/angularHRM/', useClass: common_1.HashLocationStrategy }
        ],
        bootstrap: [app_template_1.AppTemplate]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map