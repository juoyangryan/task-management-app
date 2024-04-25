import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuotes() {
    // should use injector but short on time
    let token = localStorage.getItem("access_token");
    return this.http.get('https://localhost:44366/api/quote', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  deleteQuotes(id: number) {
    // should use injector but short on time
    let token = localStorage.getItem("access_token");
    return this.http.delete(`https://localhost:44366/api/quote/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  addQuotes(quoteData: any) {
    // should use injector but short on time
    let token = localStorage.getItem("access_token");
    return this.http.post(`https://localhost:44366/api/quote`, quoteData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  updateQuote(quoteData: any) {
    // should use injector but short on time
    let token = localStorage.getItem("access_token");
    return this.http.put(`https://localhost:44366/api/quote`, quoteData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
