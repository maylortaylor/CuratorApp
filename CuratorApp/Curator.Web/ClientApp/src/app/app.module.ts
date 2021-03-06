import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { LoginDialog } from './layout';
import { LayoutModule } from './layout/layout.module'
import { LayoutComponentsModule } from './layoutComponents/layoutComponents.module';

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
    // ProfileModule,

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
    // FormsModule,
    // ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
    LayoutModule,
    // LayoutComponentsModule,
    HomeModule,
    ProfileModule,
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
