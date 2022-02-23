import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-regex',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  radiovalue:string ="";
  regexpvalue:boolean=false;

  constructor(private bookservice:BookService,private dataservice:DataService) { }

  ngOnInit(): void {
  }

  onClick(value:string, value2:string, regex:boolean): void {
    this.bookservice.GetAdvancedSearchResult(value,value2,false).subscribe((data:any) => {
      this.dataservice.GetBookList(data);
    });
  }

  onItemChange(checkbox:string) {
    this.radiovalue = checkbox;
    return this.radiovalue;
  }

  RegexpOn(value:boolean) {
    this.regexpvalue = value;
    return this.regexpvalue;
  }

}
