import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../core/quote.service';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  quotes: any
  displayedColumns: string[] = ["QuoteID", "QuoteType", "Description", "Sales", "DueDate", "Premium", "Actions"]

  constructor(private quoteService: QuoteService, private authService: AuthService, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.handleGet();
  }

  handleGet() {
    this.quoteService.getQuotes().subscribe((response) => {
      this.quotes = response;
    })
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('auth/login')
  }

  applyFilter(event: Event) {

  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddQuoteComponent)
  }

  openUpdateDialog(): void {
    let dialogRef = this.dialog.open(UpdateQuoteComponent)
  }

  openDeleteDialog(): void {
    let dialogRef = this.dialog.open(DeleteQuoteComponent)
  }

}
