import { Component, OnInit } from '@angular/core';
import { BookObject } from 'src/app/interfaces/object';
import { BookService } from 'src/app/services/book.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private bookservice:BookService, private dataservice:DataService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    //this.dataservice.GetBook(this.bookservice.getBooks());
    this.bookservice.Test().subscribe((data:any) => {
      this.dataservice.GetBook(data);
    });
  }

  data() {
   
  }

}
