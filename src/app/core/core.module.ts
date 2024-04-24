import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { QuoteService } from './quote.service';



@NgModule({
  imports: [
    HttpClientModule
  ], 
  providers: [
    AuthService, 
    QuoteService
  ]
})
export class CoreModule { }
