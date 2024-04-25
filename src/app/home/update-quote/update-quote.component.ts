import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuoteService } from 'src/app/core/quote.service';

@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.css']
})
export class UpdateQuoteComponent {
  updateQuoteForm: FormGroup;

  constructor(private fb: FormBuilder, private quoteService: QuoteService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.updateQuoteForm = fb.group({
      quoteId: [data.Quote.QuoteID], 
      quoteType: [data.Quote.QuoteType, Validators.required], 
      sales: [data.Quote.Sales, Validators.required], 
      premium: [data.Quote.Premium, Validators.required], 
      dueDate: [data.Quote.DueDate, Validators.required], 
      description: [data.Quote.Description, Validators.required]
    })
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.quoteService.updateQuote(form.value).subscribe((response) => {
        console.log("Updated: " + response.toString());
        this.data.HomeComponent.handleGet();
      })
    }
  }
}
