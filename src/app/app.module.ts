import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { GoogleSignInComponent } from 'angular-google-signin';

import { ApicallService } from './utilities/apicall/apicall.service';

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
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ApicallService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
