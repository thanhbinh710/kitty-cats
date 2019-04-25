import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Kitty App';
  imageUrl = 'https://placekitten.com/300/350';
  isHidden: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }

}
