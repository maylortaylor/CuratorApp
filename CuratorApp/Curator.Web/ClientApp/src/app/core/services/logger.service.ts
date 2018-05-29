import { Injectable } from '@angular/core';

export abstract class Logger {
  debug: any;
  debugLabel: (label: string, obj: any) => void;
  error: any;
  errorLabel: (label: string, obj: any) => void;
  info: any;
  infoLabel: (label: string, obj: any) => void;
  table: any;
  tableLabel: (label: string, obj: any) => void;
  warn: any;
  warnLabel: (label: string, obj: any) => void;
}

@Injectable()
export class LoggerService implements Logger {

  debug: any;
  debugLabel: (label: string, obj: any) => void;
  error: any;
  errorLabel: (label: string, obj: any) => void;
  info: any;
  infoLabel: (label: string, obj: any) => void;
  table: any;
  tableLabel: (label: string, obj: any) => void;
  warn: any;
  warnLabel: (label: string, obj: any) => void;

  invokeConsoleMethod(type: string, args?: any, label: string = ""): void {}
}