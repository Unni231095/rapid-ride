import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { VehicleRegistrationComponent } from './vehicleregistration/vehicleregistration.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MypoolComponent } from './user/mypool/mypool.component';
import { CreatepoolComponent } from './user/createpool/createpool.component';
import { FindpoolComponent } from './user/findpool/findpool.component';
import { NotificationComponent } from './user/notification/notification.component';
import { PoollistComponent } from './user/poollist/poollist.component';
import { PooldetailsComponent } from './user/pooldetails/pooldetails.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'vehicleregistration', component: VehicleRegistrationComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'myprofile', component: MyprofileComponent },
    {
                path: 'user', component: UserComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'mypool', component: MypoolComponent },
            { path: 'createpool', component: CreatepoolComponent },
            { path: 'findpool', component: FindpoolComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'poollist', component: PoollistComponent },
            { path: 'pooldetails', component: PooldetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}