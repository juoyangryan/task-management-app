import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'login', pathMatch: 'full', redirectTo: "home" },  
  { path: '**', pathMatch: 'full', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
