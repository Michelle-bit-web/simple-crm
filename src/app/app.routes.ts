import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent}, //ggf. für später
    { path: 'user', component: UserComponent},
    { path: 'help', component: InfoComponent},
    { path: 'user/:id', component: UserDetailsComponent}
];
