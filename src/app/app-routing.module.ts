import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Finances 2.0',
  },

  {
    path: 'home',
    loadChildren: () => import('./routes.module').then(mod => mod.home),
    title: 'Finances 2.0',
  },

  {
    path: 'transactions',
    loadChildren: () => import('./routes.module').then(mod => mod.transactions),
    title: 'Painel de transações',
  },

  {
    path: 'admin',
    loadChildren: () => import('./routes.module').then(mod => mod.admin),
    title: 'Painel do administrador',
  },

  {
    path: '**',
    loadChildren: () => import('./routes.module').then(mod => mod.notFoundPage),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
