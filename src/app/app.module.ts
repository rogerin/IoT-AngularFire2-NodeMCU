import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AmbientProvider } from '../providers/ambient/ambient';

var config = {
  apiKey: "AIzaSyClu7rYMShX2Yy1xNhhIsl_aPw33XuBW2E",
  authDomain: "iot-ionic-3724a.firebaseapp.com",
  databaseURL: "https://iot-ionic-3724a.firebaseio.com",
  projectId: "iot-ionic-3724a",
  storageBucket: "iot-ionic-3724a.appspot.com",
  messagingSenderId: "633703016567"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AmbientProvider
  ]
})
export class AppModule {}
