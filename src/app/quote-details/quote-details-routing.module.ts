import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteDetailsComponent } from './quote-details.component';
import { authGuard } from '../core/auth.guard';

const routes: Routes = [
  { path: "quote-details/:id", component: QuoteDetailsComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteDetailsRoutingModule {

}
