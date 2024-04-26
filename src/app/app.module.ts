import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { QuoteDetailsModule } from './quote-details/quote-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule, 
    HomeModule, 
    CoreModule, 
    BrowserModule,
    QuoteDetailsModule, 
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
