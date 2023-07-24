import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },

  {
    path: '',
    loadChildren: () => import('./routes').then((mod) => mod.home),
  },

  {
    path: '',
    loadChildren: () => import('./routes').then((mod) => mod.admin),
  },

  {
    path: '',
    loadChildren: () => import('./routes').then((mod) => mod.auth),
  },

  {
    path: '',
    loadChildren: () => import('./routes').then((mod) => mod.user),
  },

  {
    path: '**',
    loadChildren: () => import('./routes').then((mod) => mod.notFoundPage),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
