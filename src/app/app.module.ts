import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from  'angularfire2/auth';

import { MyApp } from './app.component';
import {FIREBASE_CONFIG}  from  '../app/app.fire.config'
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BookMePage } from '../pages/book-me/book-me';
import {BookPage } from '../pages/book/book';
import { RhinoPage } from '../pages/rhino/rhino';
import { ElephantPage } from '../pages/elephant/elephant';
import { LionPage } from '../pages/lion/lion';
import { BuffaloPage } from '../pages/buffalo/buffalo';
import { LeopardPage } from '../pages/leopard/leopard';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    BookMePage,
    BookPage,
    RhinoPage,
    ElephantPage,
    LionPage,
    BuffaloPage,
    LeopardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    BookMePage,
    BookPage,
    RhinoPage,
    ElephantPage,
    LionPage,
    BuffaloPage,
    LeopardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
