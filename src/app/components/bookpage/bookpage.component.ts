import { Component, OnInit } from '@angular/core';
import { Bookpage } from 'src/app/interfaces/bookpage';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  Book:Bookpage = <Bookpage>{};

  constructor(private dataservice : DataService) { }

  ngOnInit() {
    this.dataservice.getBookpagedata.subscribe((data) => {
      console.log(data);
        this.Book.author = data.author
        this.Book.categories = data.categories
        this.Book.subjects = data.subjects
        this.Book.title = data.title
    })
  }
}
