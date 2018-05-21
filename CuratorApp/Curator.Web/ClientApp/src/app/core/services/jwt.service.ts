import { Injectable } from '@angular/core';
import { CacheService } from '../services/cache.service';


@Injectable()
export class JwtService {
  constructor(
    private _cache: CacheService
  ) {  }
  getToken(): String {
    return this._cache.getStorage('jwtToken')
    // return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    this._cache.setStorage('jwtToken', token);
    // window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    this._cache.removeStorage('jwtToken');
    // window.localStorage.removeItem('jwtToken');
  }

}