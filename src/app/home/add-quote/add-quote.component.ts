import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from 'src/app/core/quote.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent {
  addQuoteForm: FormGroup;

  constructor(private fb: FormBuilder, private quoteService: QuoteService) {
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
      })
    }
  }
}
