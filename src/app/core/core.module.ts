import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { QuoteService } from './quote.service';
import { authGuard } from './auth.guard';



@NgModule({
  imports: [
    HttpClientModule
  ], 
  providers: [
    AuthService, 
    QuoteService, 
    authGuard
  ]
})
export class CoreModule { }
