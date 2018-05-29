import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Logger } from './logger.service';

export let isDebugMode = !environment.production;

const noop = (): any => undefined;

@Injectable()
export class ConsoleLoggerService implements Logger {

  get debug() {
    if (isDebugMode) {
      console.debug("")
      return console.debug.bind(console);
    } else {
      return noop;
    }
  }
  debugLabel(label: string = "", obj: any) {
    this.invokeConsoleMethod("debug", obj, label);
  }
  get error() {
    if (isDebugMode) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }
  errorLabel(label: string = "", obj: any) {
    this.invokeConsoleMethod("error", obj, label);
  }
  get info() {
    if (isDebugMode) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }
  infoLabel(label: string = "", obj: any) {
    this.invokeConsoleMethod("info", obj, label);
  }
  get table() {
    if (isDebugMode) {
      return console.table.bind(console);
    } else {
      return noop;
    }
  }
  tableLabel(label: string = "", obj: any) {
    this.invokeConsoleMethod("table", obj, label);
  }
  get warn() {
    if (isDebugMode) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }
  warnLabel(label: string = "", obj: any) {
    this.invokeConsoleMethod("warn", obj, label);
  }
  invokeConsoleMethod(type: string, args?: any, label: string = ""): void {
    const logFn: Function = (console)[type] || console.log || noop;
    if (label != "") {
      logFn(label, args)
    } else {
      logFn.apply(console, [args]);
    }
  }
}