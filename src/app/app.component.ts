import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PaginationService } from './pagination.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  constructor(public page: PaginationService) {}

  ngOnInit() {
   this.page.init('cars', 'year', { reverse: true, prepend: false ,limit:4})
  // this.page.loading = true;
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.page.more()
   
    }
    console.log(e);
     if (e === 'top') {
      // this.page.more()
     }
  }



}
