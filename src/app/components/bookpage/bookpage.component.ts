import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  constructor(private dataservice : DataService) { }

  ngOnInit() {
    this.dataservice.getBookdata.subscribe((data) => {
        console.log("got book");
    })
  }

}
