import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Cat } from '../../models/cat';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  catId: string;
  cat: Cat;

  constructor(
    private catService: CatService,
    private activatedRoute: ActivatedRoute
  ) {
    this.catId = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.catService.getCat(this.catId).subscribe(
      res => {
        this.cat = res;
      }, err => {
        console.error(err);
      }
    );
  }

}
