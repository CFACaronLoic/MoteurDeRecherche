import { Injectable } from '@angular/core';
import { BookObject } from '../interfaces/object';

//1. Import BehaviorSubject from rxjs module
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //2. Create the data which we want to share with all the components
  //private bookdata = new BehaviorSubject("data":{"hits":{}});
  private bookdata: BehaviorSubject<BookObject> = new BehaviorSubject(<BookObject>{});

  //3. Now we want to broadcast this message or data, so we create an observable
  getBookdata = this.bookdata.asObservable();

  constructor() { }

  //4. Create a method that updates the data (Behaviour Subject)
  GetBook(data:BookObject){
    this.bookdata.next(data);
  }
}
