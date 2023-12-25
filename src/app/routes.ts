import { AdminPanelComponent } from './features/admin/admin-panel/admin-panel.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { Routes } from '@angular/router';
import { TransactionComponent } from './features/transaction/transaction.component';
import { UserPanelComponent } from './features/user-panel/user-panel.component';

export const home: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Finances 2.0',
  },

  {
    path: 'home',
    component: HomeComponent,
    title: 'Finances 2.0',
  },
];

export const admin: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    title: 'Painel do administrador',
  },
];

export const user: Routes = [
  {
    path: 'user',
    component: UserPanelComponent,
    title: 'Painel do usuario',
  },
];

export const notFoundPage: Routes = [
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'Página não encontrada',
  },
];

export const transactions: Routes = [
  {
    path: 'transactions',
    component: TransactionComponent,
    title: 'Painel de transações',
  },
];
