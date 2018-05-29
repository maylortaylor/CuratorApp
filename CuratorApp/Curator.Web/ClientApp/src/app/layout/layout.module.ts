import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ThemeService } from './topnav-menu/services/theme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FooterComponent,
  TopNavMenuComponent
} from '../layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    TopNavMenuComponent
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    TopNavMenuComponent
  ],
  providers: [
    ThemeService
  ]
})
export class LayoutModule { }
