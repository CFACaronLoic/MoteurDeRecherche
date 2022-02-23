import { Injectable } from '@angular/core';
import { BookObject } from '../interfaces/object';
import { Book } from '../interfaces/book';
import { Bookpage } from '../interfaces/bookpage';

//1. Import BehaviorSubject from rxjs module
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //2. Create the data which we want to share with all the components
  //private bookdata = new BehaviorSubject("data":{"hits":{}});
  private bookdata: BehaviorSubject<BookObject> = new BehaviorSubject(<BookObject>{});
  private book: BehaviorSubject<Bookpage> = new BehaviorSubject(<Bookpage>{});

  //3. Now we want to broadcast this message or data, so we create an observable
  getBookdata = this.bookdata.asObservable();
  getBookpagedata = this.book.asObservable();

  constructor() { }

  //4. Create a method that updates the data (Behaviour Subject)
  GetBookList(data:BookObject){
    this.bookdata.next(data);
  }

  GetBook(data:Bookpage){
    this.book.next(data);
  }
}
