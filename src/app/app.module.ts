import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './shared/services/auth.service';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './backoffice/profile/profile.component';

// Firebase modules
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './backoffice/access/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { RegisterComponent } from './backoffice/access/register/register.component';
import { UserManager } from './shared/manager/users.manager';

 const auth = (authService: AuthService) => {
   return (): Promise<boolean> => {
     return authService.init();
   }
 };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
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
    {provide: APP_INITIALIZER, useFactory: auth, deps: [AuthService], multi: true},
    // {provide: APP_INITIALIZER, useFactory: myUser, deps: [UserManager], multi: true},
    AuthService,
    UserManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
