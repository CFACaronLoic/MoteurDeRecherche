import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.css']
})
export class CircleImageComponent implements OnInit {

  book : Book = {
    id : 1,
    name : 'Le livre de Loic',
    author : 'Thibault',
    subject : 'Politique',
    category : 'Educatif'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
