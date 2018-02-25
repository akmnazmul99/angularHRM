import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BsDropdownModule, CarouselModule, TypeaheadModule, DatepickerModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {FileUploadModule } from 'ng2-file-upload';
import {enableProdMode} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


//import {MarketAPI} from './services/MarketAPI.service';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {LeftMenuBarComponent} from './leftmenubar.component';
import {ApplyForLeaveComponent} from './applyforleave.component';
import {LeaveDetailsComponent} from './leavedetails.component';
import {CurrentLeaveStateComponent} from './currentleavestate.component';
import {HolidayCalendarComponent} from './holidaycalendar.component';
import {OwnAttendanceComponent} from './ownattendance.component';
import {OwnCurrentAttendanceComponent} from './owncurrentattendance.component';
import {AbsentSummaryComponent} from './absentsummary.component';
import {TodaysLeaveComponent} from './todaysleave.component';
import {EmployeeInfoComponent} from './employeeinfo.component';
import {NoticePublishComponent} from './noticepublish.component';
import {FooterComponent} from './footer.component';
import {ProductComponent} from './product.component';
import {ProfileComponent} from './profile.component';
import {AppTemplate} from './app.template';
import {TopNavbarComponent} from './topnavbar.component';
import {NavigationManager} from './services/NavigationManager';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderComponent} from './loader.component';
import {LoaderService} from './webservice/loader.service';
import {WebAPIService} from './webservice/web-api-service';
import { CKEditorModule } from 'ng2-ckeditor';
import {CKEditorSample} from './CKEditorSample';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatSpinner,
    MatProgressSpinner,
    MatFormFieldControl,
    MatOptionModule,
    MatFormFieldModule,
} from '@angular/material';

const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'applyforleave',
        component: ApplyForLeaveComponent
    },
    {
        path: 'leavedetails',
        component: LeaveDetailsComponent
    },
    {
        path: 'currentleavestate',
        component: CurrentLeaveStateComponent
    },
    {
        path: 'holidaycalendar',
        component: HolidayCalendarComponent
    },
    {
        path: 'ownattendance',
        component: OwnAttendanceComponent
    },
    {
        path: 'owncurrentattendance',
        component: OwnCurrentAttendanceComponent
    },
    {
        path: 'absentsummary',
        component: AbsentSummaryComponent
    },
    {
        path: 'todaysleave',
        component: TodaysLeaveComponent
    },
    {
        path: 'employeeinfo',
        component: EmployeeInfoComponent
    },
    {
        path: 'noticepublish',
        component: NoticePublishComponent
    },
    {
        path: 'products',
        component: ProductComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'ck',
        component: CKEditorSample
    },
    {
        path: '**',
        component: AppComponent
    },

];

enableProdMode();
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        TypeaheadModule.forRoot(),
        DatepickerModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
		MatFormFieldModule, MatOptionModule, MatSelectModule,
        MatMenuModule,
        MatPaginatorModule,
        BrowserAnimationsModule, MatButtonModule, FileUploadModule,
        RouterModule.forRoot(appRoutes),
	CKEditorModule
    ],
	exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatOptionModule,
        MatSelectModule, MatButtonModule,
        MatMenuModule,
        MatProgressSpinner, MatSpinner,
        MatFormFieldModule, MatOptionModule,
        MatSelectModule, MatButtonModule,
        MatMenuModule,MatProgressSpinner, MatSpinner,
        FileUploadModule,
        LoaderComponent
    ],
    declarations: [
        /**
         * This is for templating
         */
        AppTemplate,

        /**
         * All are components of the template
         */
        AppComponent,
        HomeComponent,
        ApplyForLeaveComponent,
        LeaveDetailsComponent,
        CurrentLeaveStateComponent,
        HolidayCalendarComponent,
        OwnAttendanceComponent,
        OwnCurrentAttendanceComponent,
        AbsentSummaryComponent,
        TodaysLeaveComponent,
        EmployeeInfoComponent,
        NoticePublishComponent,
        LeftMenuBarComponent,
        FooterComponent,
        ProductComponent,
        ProfileComponent,
        TopNavbarComponent,
	LoaderComponent,
        MatProgressSpinner, MatSpinner,
	CKEditorSample,
    ],
    providers: [
        //MarketAPI, 
        NavigationManager,
		WebAPIService,
        LoaderService,
        
//        {provide: APP_BASE_HREF, useValue: '/InventoryUI'}
          {provide: LocationStrategy, useValue: '/angularHRM/', useClass: HashLocationStrategy}


    ],
    bootstrap: [AppTemplate]
//    bootstrap: [HomeComponent]
})

export class AppModule {}