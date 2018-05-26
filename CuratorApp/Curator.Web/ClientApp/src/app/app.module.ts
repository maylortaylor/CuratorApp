import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ProfileComponent } from './profile/profile.component';
import {
  LoginDialog
} from './layout';
import { LayoutModule } from './layout/layout.module'
import { LayoutComponentsModule } from './layoutComponents/layoutComponents.module';
// import {
//   BsDropdownModule,
//   TooltipModule,
//   ModalModule
// } from 'ngx-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './core/auth/auth.service';
import { AuthGuard } from './core/auth/auth-guard.service';

@NgModule({
  declarations: [
    // 1) Top Level Components
    AppComponent,
    // HomeComponent,
    ProfileComponent,

    // 2) Modals
    LoginDialog,

    // 3) Filters
  ],
  entryComponents: [
    // ???
    LoginDialog
  ],
  imports: [
    // 1) Bootstrap
    NgbModule.forRoot(),

    // 2) Routing
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),

    // 3) Angular Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    // 4) Important Modules
    CoreModule,
    HttpClientModule,
    LayoutModule,
    LayoutComponentsModule,
    HomeModule,
    // 5) Other Modules
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
