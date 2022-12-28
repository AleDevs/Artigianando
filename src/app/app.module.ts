import { APP_INITIALIZER, NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { HomeComponent } from './pages/home/home.component';

// Firebase modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { LoginComponent } from './backoffice/access/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './backoffice/access/register/register.component';
import { UserService } from './shared/services/users.service';
import { ThemeService } from './shared/services/theme.service';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const auth = (authService: AuthService) => {
  return (): Promise<boolean> => {
    return authService.init();
  }
};

const theme = (themeService: ThemeService) => {
  return () => {
    themeService.init();
  }
};

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'fill'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "Artigianando"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: auth, deps: [AuthService], multi: true },
    { provide: APP_INITIALIZER, useFactory: theme, deps: [ThemeService], multi: true },
    AuthService,
    UserService,

    //material
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: appearance }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
