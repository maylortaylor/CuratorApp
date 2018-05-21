import { ChangeDetectorRef, NgZone, Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidebarService } from './core/services/sidebar.service';
import { ThemeService } from './layout/topnav-menu/services/theme.service'
import { UserService } from './core/services/user.service';
import { CacheService } from './core/services/cache.service';
import { MatchMediaService } from './core/services/match.media.service';
import { LoggerService } from './core/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sideNavIsOpen = false;
  themeCss: string = "main-theme";
  @ViewChild('sideNav') public sideNav: ElementRef;

  IsMobile: Boolean = false;
  IsDesktop: Boolean = false;
  constructor(
    private _sideBar: SidebarService,
    private _theme: ThemeService,
    private _user: UserService,
    private _cache: CacheService,
    private _matchMedia: MatchMediaService,
    private _ngZone: NgZone,
    private _sideBarService: SidebarService,
    private _logger: LoggerService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
      //GET INITIAL VALUE BASED ON DEVICE WIDTHS AT TIME THE APP RENDERS
      this.IsMobile = (this._matchMedia.IsPhone() || this._matchMedia.IsTablet());
      this.IsDesktop = (this._matchMedia.IsDesktop());

      var that = this;
      /*---------------------------------------------------
      TAP INTO LISTENERS FOR WHEN DEVICE WIDTH CHANGES
      ---------------------------------------------------*/

      this._matchMedia.OnPhone(
          function (mediaQueryList: MediaQueryList)
          {
              that.ShowMobile();
          }
      );

      this._matchMedia.OnTablet(
          function (mediaQueryList: MediaQueryList)
          {
              that.ShowMobile();
          }
      );

      this._matchMedia.OnDesktop(
          function (mediaQueryList: MediaQueryList)
          {
              that.ShowDesktop();
          }
      );


          // Correct source file name and line number :)
    _logger.info('AppComponent: logger.info()');
    _logger.warn('AppComponent: logger.warn()');
    _logger.error('AppComponent: logger.error()');
  }

  ngOnInit() {
    this._user.populate();
    this.setTheme();
  }
  ngAfterViewInit() {
    this._sideBarService.sideNav = this.sideNav;
  }
  ShowMobile()
  {
      this._ngZone.run(() =>
      { // Change the property within the zone, CD will run after
          this.IsMobile = true;
          this.IsDesktop = false;
      });
  }

  ShowDesktop()
  {
      this._ngZone.run(() =>
      { // Change the property within the zone, CD will run after
          this.IsMobile = false;
          this.IsDesktop = true;
      });
  }
  setTheme() {
    if (this._cache.has('theme')){
      var t: any = this._cache.getStorage('theme');
      this.themeCss = t;
    } else {
      this.themeCss = 'main-theme';
    }
    this._theme.getTheme()
    .subscribe(item => {
      this.themeCss = item
    });
  }
}
