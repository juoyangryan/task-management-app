import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../core/quote.service';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  quotes: any
  displayedColumns: string[] = ["QuoteID", "QuoteType", "Description", "Sales", "DueDate", "Premium", "Actions"]
  dataSource = new MatTableDataSource();

  constructor(private quoteService: QuoteService, private authService: AuthService, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.handleGet();
  }

  handleGet() {
    this.quoteService.getQuotes().subscribe((response) => {
      this.quotes = response;
      this.dataSource.data = this.quotes;
    })
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('auth/login')
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddQuoteComponent, {
      data: {
        homeComponent: this
      }
    })
  }

  openUpdateDialog(): void {
    let dialogRef = this.dialog.open(UpdateQuoteComponent)
  }

  openDeleteDialog(): void {
    let dialogRef = this.dialog.open(DeleteQuoteComponent)
  }

}
