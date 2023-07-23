import { Routes } from '@angular/router';
import { AdminPanelComponent } from './features/admin/admin-panel/admin-panel.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { UserPanelComponent } from './features/user-panel/user-panel.component';

export const home: Routes = [{ path: '', component: HomeComponent }];

export const admin: Routes = [
  { path: 'admin', component: AdminPanelComponent },
];

export const auth: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
];

export const user: Routes = [{ path: 'user', component: UserPanelComponent }];

export const notFoundPage: Routes = [
  { path: '**', component: NotFoundPageComponent },
];
