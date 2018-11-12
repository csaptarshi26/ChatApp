import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { HeaderColor } from '@ionic-native/header-color';


import { config } from './app.firebaseconfig';
 
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';
import { SignupPage } from '../pages/signup/signup';
import { UserProvider } from '../providers/user/user';
import { PasswordresetPage } from '../pages/passwordreset/passwordreset';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { ProfilepicPage } from '../pages/profilepic/profilepic';


@NgModule({
  declarations: [
    MyApp, 
    LoginPage,
    TabsPage,
    SignupPage,
    PasswordresetPage,
    ProfilepicPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    SignupPage,
    PasswordresetPage,
    ProfilepicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
    UserProvider,
    File,
    FileChooser,
    FilePath,
    ImghandlerProvider,
    ImghandlerProvider,
    HeaderColor
  ]
})
export class AppModule {}
