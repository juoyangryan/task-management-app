import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../core/quote.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit{
  quoteItem: any;
  id = 0;

  constructor(private activatedRoute: ActivatedRoute, private quoteService: QuoteService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.loadData(this.id);
  }

  loadData(id: number) {
    this.quoteService.getQuoteById(id).subscribe((response) => {
      this.quoteItem = response
    })
  }

  loadImage(type: string) {
    switch(type) {
      case 'Auto': return "../../assets/auto.png";
      case 'House': return "../../assets/house.png";
      case 'Boat': return "../../assets/boat.png";
      default: return "../../assets/general.png"
    }
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('auth/login')
  }

}
