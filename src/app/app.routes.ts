import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent}, //ggf. für später
    { path: 'user', component: UserComponent},
    { path: 'help', component: InfoComponent}
];
