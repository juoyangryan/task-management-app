import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuoteService } from 'src/app/core/quote.service';

@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.component.html',
  styleUrls: ['./delete-quote.component.css']
})
export class DeleteQuoteComponent {

  constructor(private quoteService: QuoteService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onDelete() {
    this.quoteService.deleteQuotes(this.data.QuoteID).subscribe((response) => {
      console.log("Deleted: " + response.toString());
      this.data.HomeComponent.handleGet();
    })
  }
}
