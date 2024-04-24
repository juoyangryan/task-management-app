import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../core/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  quotes: any

  constructor(private quoteService: QuoteService) {

  }

  ngOnInit(): void {
    this.handleGet();
  }

  handleGet() {
    this.quoteService.getQuotes().subscribe((response) => {
      this.quotes = response;
    })
  }

}
