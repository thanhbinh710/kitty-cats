import { Component, OnInit } from '@angular/core';
import { data } from './catdata';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Kitty App';
  catList: Cat[];

  constructor() { }

  ngOnInit() {
    this.catList = data;
  }

}
