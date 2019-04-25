import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../../../models/cat';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cat: Cat;
  constructor() { }

  ngOnInit() {
  }

}
