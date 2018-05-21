import { Component } from '@angular/core';
import { ApiService } from '../core/services/api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  channels: any = ['woo', 'two', 'three', 'woo', 'two', 'three',
  'woo', 'two', 'three', 'woo', 'two', 'three', 'woo', 'two', 'three', 'woo', 'two', 'three',
  'woo', 'two', 'three', 'woo', 'two', 'three','woo', 'two', 'three', 'woo', 'two', 'three',
  'woo', 'two', 'three', 'woo', 'two', 'three','woo', 'two', 'three', 'woo', 'two', 'three'
]

  constructor(
    private api: ApiService
  ) {

  }

  ngOnInit() {
    this.api.get('values')
    .subscribe(
      res => {
        console.log(res);
        
        // debugger
      },
      err => {
        debugger;
      }
  );
  }
}
