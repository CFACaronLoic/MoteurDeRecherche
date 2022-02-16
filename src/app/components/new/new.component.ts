import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  books : Array<Book> = [ 
    {id : 1,name : 'Le livre de Loic',author : 'Thibaut',subject: 'Politique',category : 'Education'},
    {id : 2,name : 'Le livre de Thibaut',author : 'Loic',subject: 'Cuisine',category : 'Romance'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
