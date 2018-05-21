
import { Component, Input } from '@angular/core';

import { Errors } from './errors.model';

@Component({
  selector: 'app-list-errors',
  templateUrl: './listErrors.component.html'
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors; }


}