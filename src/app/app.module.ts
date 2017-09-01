import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { GoogleSignInComponent } from 'angular-google-signin';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageService } from 'angular2-localstorage';

import { ApicallService } from './utilities/apicall/apicall.service';
import { RegistrationService } from './services/registration/registration.service';
import { LoginService } from './services/login/login.service';
import { CommonemailService } from './services/common/commonemail.service';
import { ApibeautifyService } from './utilities/apiurl/apibeautify.service';
import { VehicleregistrationService } from './services/vehicleregistration/vehicleregistration.service';
import { CreatepoolService } from './services/createpool/createpool.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MypoolComponent } from './user/mypool/mypool.component';
import { CreatepoolComponent } from './user/createpool/createpool.component';
import { FindpoolComponent } from './user/findpool/findpool.component';
import { NotificationComponent } from './user/notification/notification.component';
import { RegistrationComponent } from './registration/registration.component';
import { PoollistComponent } from './user/poollist/poollist.component';
import { PooldetailsComponent } from './user/pooldetails/pooldetails.component';
import { VehicleRegistrationComponent } from './vehicleregistration/vehicleregistration.component';


@NgModule({
  declarations: [
    GoogleSignInComponent,
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    DashboardComponent,
    MyprofileComponent,
    MypoolComponent,
    CreatepoolComponent,
    FindpoolComponent,
    NotificationComponent,
    RegistrationComponent,
    PoollistComponent,
    PooldetailsComponent,
    VehicleRegistrationComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ApicallService,
    LoginService,
    ApibeautifyService,
    CommonemailService,
    RegistrationService,
    VehicleregistrationService,
    CreatepoolService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
