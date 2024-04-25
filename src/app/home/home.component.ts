import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { QuoteService } from '../core/quote.service';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  quotes: any
  displayedColumns: string[] = ["QuoteID", "QuoteType", "Description", "Sales", "DueDate", "Premium", "Actions"]
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private quoteService: QuoteService, private authService: AuthService, private router: Router, public dialog: MatDialog) {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  openUpdateDialog(Quote: any): void {
    let dialogRef = this.dialog.open(UpdateQuoteComponent, {
      data: {
        HomeComponent: this, 
        Quote: Quote
      }
    })
  }

  openDeleteDialog(Quote: any): void {
    let dialogRef = this.dialog.open(DeleteQuoteComponent, {
      data: {
        HomeComponent: this, 
        Quote: Quote
      }
    })
  }

}
