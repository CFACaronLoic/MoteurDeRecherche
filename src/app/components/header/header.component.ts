import { Component, OnInit } from '@angular/core';
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

  onClick(value:string): void {
    this.bookservice.GetSearchResult(value).subscribe((data:any) => {
      this.dataservice.GetBookList(data);
    });
  }

}
