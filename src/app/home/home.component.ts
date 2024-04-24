import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../core/quote.service';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  quotes: any
  displayedColumns: string[] = ["QuoteID", "QuoteType", "Description", "Sales", "DueDate", "Premium", "Actions"]

  constructor(private quoteService: QuoteService, private authService: AuthService, private router: Router,) {

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

}
