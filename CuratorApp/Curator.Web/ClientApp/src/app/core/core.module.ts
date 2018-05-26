import { NgModule } from '@angular/core';

import {
  ApiService,
  CacheService,
  JwtService,
  LoggerService,
  ConsoleLoggerService,
  MatchMediaService,
  SidebarService,
  UserService,
  SnackBarService
} from './services';

@NgModule({
  providers: [
    ApiService,
    CacheService,
    JwtService,
    { provide: LoggerService, useClass: ConsoleLoggerService },
    MatchMediaService,
    SidebarService,
    SnackBarService,
    UserService
  ]
})
export class CoreModule { }
