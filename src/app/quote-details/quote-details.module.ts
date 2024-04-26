import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteDetailsRoutingModule } from './quote-details-routing.module';
import { QuoteDetailsComponent } from './quote-details.component';


@NgModule({
  declarations: [
    QuoteDetailsComponent
  ],
  imports: [
    CommonModule,
    QuoteDetailsRoutingModule
  ]
})
export class QuoteDetailsModule { }
