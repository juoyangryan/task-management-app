import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuoteService } from 'src/app/core/quote.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent {
  addQuoteForm: FormGroup;

  constructor(private fb: FormBuilder, private quoteService: QuoteService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.addQuoteForm = fb.group({
      quoteType: ['', Validators.required], 
      sales: ['', Validators.required], 
      premium: ['', Validators.required], 
      dueDate: ['', Validators.required], 
      description: ['', Validators.required]
    })
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.quoteService.addQuotes(form.value).subscribe((response) => {
        console.log("Added: " + response.toString());
        this.data.homeComponent.handleGet();
      })
    }
  }
}
