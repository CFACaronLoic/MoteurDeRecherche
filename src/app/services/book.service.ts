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

  GetSearchResult(value:string) {
    return this.http.get(this.local+`/booksearch/${value}`);
    }

  GetAdvancedSearchResult(value:string,value2:string,regex:boolean) {
    if(regex==false){
      return this.http.get(this.local+`/bookfieldsearch/${value}/${value2}`);
    }else
      return this.http.get(this.local+`/bookregexpsearch/${value}/${value2}`);
    }

  GetTop(){
    return this.http.get(this.local+"/bookall/10");
    }
  }

