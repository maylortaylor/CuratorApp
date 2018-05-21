import { Injectable, EventEmitter, Output } from '@angular/core';
import { CacheService } from '../../../core/services/cache.service'
@Injectable()
export class ThemeService {
  @Output() theme: EventEmitter<any> = new EventEmitter();
  _theme: string = "main-theme";
  constructor(
    private _cache: CacheService
  ) { }

  setTheme(theme) {
    // this.
  }
  themeIsInCache() {
    return this._cache.has('theme');
  }
  changeTheme() {
    if (this.themeIsInCache()) {
      this._theme = this._cache.getStorage('theme');
      this.switchTheme(this._theme)
    } else {
      this.switchTheme(this._theme);
    }
  }
  switchTheme(currentTheme: string) {
    if (currentTheme == "main-theme") {
      this._theme = "dark-theme";
      this._cache.setStorage('theme', this._theme);
      this.theme.emit("dark-theme");
    }
    else if (currentTheme == "dark-theme") {
      this._theme = "main-theme";
      this._cache.setStorage('theme', this._theme);
      this.theme.emit("main-theme");
    }
  }
  getTheme() {
    if (this._cache.has('theme')){
      this._theme = this._cache.getStorage('theme');
      this.theme.emit(this._theme);
    }
    return this.theme;
  }
}
