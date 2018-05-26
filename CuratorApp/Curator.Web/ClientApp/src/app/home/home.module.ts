import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeDataService } from './services/homeData.service';
import { HomeComponent } from './home.component';
import { LayoutComponentsModule } from '../layoutComponents/layoutComponents.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutComponentsModule
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [
        HomeDataService
    ],
})
export class HomeModule { }
