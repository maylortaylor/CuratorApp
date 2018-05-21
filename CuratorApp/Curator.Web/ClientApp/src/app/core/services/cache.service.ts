import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

interface CacheContent {
  expiry: number;
  value: any;
}

/**
 * https://hackernoon.com/angular-simple-in-memory-cache-service-on-the-ui-with-rxjs-77f167387e39
 * Cache Service is an observables based in-memory cache implementation
 * Keeps track of in-flight observables and sets a default expiry for cached values
 * @export
 * @class CacheService
 */
@Injectable()
export class CacheService {
  private cache: Map<string, CacheContent> = new Map<string, CacheContent>();
  // private inFlightObservables: Map<string, Subject<any>> = new Map<string, Subject<any>>();
  readonly DEFAULT_MAX_AGE: number = (24*60*60);

/*  removeStorage: removes a key from localStorage and its sibling expiracy key
    params:
        key <string>     : localStorage key to remove
    returns:
        <boolean> : telling if operation succeeded
 */
removeStorage(name) {
  try {
      localStorage.removeItem(name);
      localStorage.removeItem(name + '_expiresIn');
  } catch(e) {
      console.log('removeStorage: Error removing key ['+ name + '] from localStorage: ' + JSON.stringify(e) );
      return false;
  }
  return true;
}
/*  getStorage: retrieves a key from localStorage previously set with setStorage().
    params:
        key <string> : localStorage key
    returns:
        <string> : value of localStorage key
        null : in case of expired key or failure
 */
getStorage(key) {

  var now = Date.now();  //epoch time, lets deal only with integer
  // set expiration for storage
  var expiresIn: any = localStorage.getItem(key+'_expiresIn');
  if (expiresIn===undefined || expiresIn===null) { expiresIn = 0; }

  if (expiresIn < now) {// Expired
      this.removeStorage(key);
      return null;
  } else {
      try {
          var value = localStorage.getItem(key);
          return value;
      } catch(e) {
          console.log('getStorage: Error reading key ['+ key + '] from localStorage: ' + JSON.stringify(e) );
          return null;
      }
  }
}

/*  setStorage: writes a key into localStorage setting a expire time
    params:
        key <string>     : localStorage key
        value <string>   : localStorage value
        expires <number> : number of seconds from now to expire the key
    returns:
        <boolean> : telling if operation succeeded
 */
setStorage(key, value, expires = this.DEFAULT_MAX_AGE) {
  var now = Date.now();  //millisecs since epoch time, lets deal only with integer
  var schedule: any = now + expires*1000;
  try {
      localStorage.setItem(key, value);
      localStorage.setItem(key + '_expiresIn', schedule);
  } catch(e) {
      console.log('setStorage: Error setting key ['+ key + '] in localStorage: ' + JSON.stringify(e) );
      return false;
  }
  return true;
}

  /**
   * Checks if the a key exists in cache
   */
  has(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  /**
   * Publishes the value to all observers of the given
   * in progress observables if observers exist.
   */
  // private notifyInFlightObservers(key: string, value: any): void {
  //   if (this.inFlightObservables.has(key)) {
  //     const inFlight = this.inFlightObservables.get(key);
  //     const observersCount = inFlight.observers.length;
  //     if (observersCount) {
  //       console.log(`%cNotifying ${inFlight.observers.length} flight subscribers for ${key}`, 'color: blue');
  //       inFlight.next(value);
  //     }
  //     inFlight.complete();
  //     this.inFlightObservables.delete(key);
  //   }
  // }

  /**
   * Checks if the key exists and   has not expired.
   */
  // private hasValidCachedValue(key: string): boolean {
  //   if (this.cache.has(key)) {
  //     if (this.cache.get(key).expiry < Date.now()) {
  //       this.cache.delete(key);
  //       return false;
  //     }
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}