import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ThemeService } from './topnav-menu/services/theme.service';

import {
  BannerComponent,
  FooterComponent,
  TopNavMenuComponent
} from '../layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    BannerComponent,
    FooterComponent,
    TopNavMenuComponent
  ],
  exports: [
    MaterialModule,
    BannerComponent,
    FooterComponent,
    TopNavMenuComponent
  ],
  providers: [
    ThemeService
  ]
})
export class LayoutModule { }
