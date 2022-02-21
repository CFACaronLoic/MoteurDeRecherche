import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  local = 'http://localhost:8080';  
  constructor(private http: HttpClient) {
  }
  
  Test(): void {
      const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
      this.http.get<any>(this.local+'/booksearch',{ headers, responseType: 'text' as 'json'})
      .subscribe((data:any) => {
    window.alert(data);
    });
  }
}
