import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';



@NgModule({
  declarations: [
    HomeComponent,
    AddQuoteComponent,
    UpdateQuoteComponent,
    DeleteQuoteComponent, 

  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    MatTableModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatFormFieldModule, 
    MatSortModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatDialogModule, 
    ReactiveFormsModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule
  ], 
  providers: [
    MatDatepickerModule
  ]
})
export class HomeModule { }
