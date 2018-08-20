import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { LayoutComponentsModule } from '../layoutComponents/layoutComponents.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    imports: [
        LayoutComponentsModule,
        LayoutModule
    ],
    exports: [],
    declarations: [
        ProfileComponent
    ],
    providers: [],
})
export class ProfileModule { }
