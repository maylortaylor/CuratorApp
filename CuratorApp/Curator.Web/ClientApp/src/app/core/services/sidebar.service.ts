import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  public sideNav: any;

  isOpen() {
    return this.sideNav.opened;
  }
}
