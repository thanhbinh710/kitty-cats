import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
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
