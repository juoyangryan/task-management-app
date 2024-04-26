import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'home', pathMatch: 'full', redirectTo: "home"},
  { path: 'quote-details/:id', loadChildren: () => import('./quote-details/quote-details.module').then(m => m.QuoteDetailsModule) }, 
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' }, 
  { path: '**', pathMatch: 'full', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
