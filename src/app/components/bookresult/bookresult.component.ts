import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bookresult',
  templateUrl: './bookresult.component.html',
  styleUrls: ['./bookresult.component.css']
})
export class BookresultComponent implements OnInit {

  bookList : Array<Book> = [];

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getBookdata.subscribe((data) => {
      let book = {} as Book;
      console.log(data)
      for(var i = 0; i < data.hits.hits.length;i++){
        book.id = data.hits.hits[0]._source.id;
        book.authors = data.hits.hits[0]._source.authors;
        book.bookshelves = data.hits.hits[0]._source.bookshelves;
        book.title = data.hits.hits[0]._source.title;
        book.subjects = data.hits.hits[0]._source.subjects;
        this.bookList.push(book);
      }
  });
  }
}
