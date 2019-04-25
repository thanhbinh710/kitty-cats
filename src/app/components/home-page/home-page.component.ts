import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Kitty App';
  catList: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catService.getCats().subscribe(
      (res: any) => {
        this.catList = res.data;
      },
      err => {
        console.error(err);
      }
    );
  }

}
