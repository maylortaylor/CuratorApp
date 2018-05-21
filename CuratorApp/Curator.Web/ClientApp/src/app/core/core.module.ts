import { NgModule } from '@angular/core';

import {
  ApiService,
  CacheService,
  JwtService,
  LoggerService,
  ConsoleLoggerService,
  MatchMediaService,
  SidebarService,
  UserService
} from './services';

@NgModule({
  providers: [
    ApiService,
    CacheService,
    JwtService,
    { provide: LoggerService, useClass: ConsoleLoggerService },
    MatchMediaService,
    SidebarService,
    UserService
  ]
})
export class CoreModule { }
