import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:any;

  local = 'http://localhost:8080';  
  constructor(private http: HttpClient) {
  }
  
  getBooks(){
    return this.books;
  }

  Test() {
      //const headers = new HttpHeaders()//.set('Content-Type', 'text/plain; charset=utf-8').set("accept","*/*");
      /*this.http.get<any>(this.local+'/bookall')
      .subscribe((data:any) => {
    console.log(data);
    });*/
    //this.http.get(this.local+'/booksearch');
    return this.http.get(this.local+'/booksearch');
    }
  }

