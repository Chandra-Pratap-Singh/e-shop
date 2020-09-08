import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSingupComponent } from './components/login-signup/login-singup.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { loginSignupReducer } from './store/reducers/login-signup-reducer';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './Modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginSingupComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({
      loginSignup: loginSignupReducer
    }),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
