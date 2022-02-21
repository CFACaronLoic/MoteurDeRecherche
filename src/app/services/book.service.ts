import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse } from '@angular/common/http';
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
      this.http.get<any>(this.local+'/booksearch')
      .subscribe((data:any) => {
        console.log(data);
    });
  }

}
