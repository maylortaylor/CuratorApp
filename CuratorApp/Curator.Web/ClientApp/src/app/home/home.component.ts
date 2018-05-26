import { Component } from '@angular/core';
import { HomeDataService } from './services/homeData.service';
import { LoggerService } from '../core/services/logger.service';

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
    private _homeData: HomeDataService,
    private _logger: LoggerService
  ) {

  }

  ngOnInit() {
    this._homeData.getHomeData()
    .subscribe(res => {
      this._logger.info(res);
    }, err => {
      this._logger.error(err);
    })
  }
}
