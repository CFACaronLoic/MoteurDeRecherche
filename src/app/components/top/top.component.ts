import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { DataService } from 'src/app/services/data.service';
import { Book } from 'src/app/interfaces/book';
import { Bookpage } from 'src/app/interfaces/bookpage';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  bookList : Array<Book> = [];

  constructor(private bookservice:BookService, private dataservice:DataService) { }

  ngOnInit(): void {
    this.bookservice.GetTop().subscribe((data:any) => {
      this.dataservice.GetBookList(data);
      for(var i = 0; i < data.hits.hits.length;i++){
        let book = {} as Book;
        book.id = data.hits.hits[i]._source.id;
        book.authors = data.hits.hits[i]._source.authors;
        book.bookshelves = data.hits.hits[i]._source.bookshelves;
        book.title = data.hits.hits[i]._source.title;
        book.subjects = data.hits.hits[i]._source.subjects;
        this.bookList.push(book);
      }
    });
  }

  SendData(title:string,authors:string,categories:string[],subjects:string[]) {
    let bookpage = {} as Bookpage;
    bookpage.author = authors;
    bookpage.categories = categories;
    bookpage.subjects = subjects;
    bookpage.title = title;
    this.dataservice.GetBook(bookpage);
  }

}
