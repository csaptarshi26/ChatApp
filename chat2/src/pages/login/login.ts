import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { usercreds } from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';
import { SignupPage } from '../signup/signup';
import { PasswordresetPage } from '../passwordreset/passwordreset';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials = {} as usercreds;

  username: string = "test@test.com";
  password: string = "test123";
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
    public authservice: AuthProvider, public toastCtrl: ToastController) {

  }

  signin() {
    var toaster = this.toastCtrl.create({
      duration: 2000,
      position: 'top'
    });
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration:2000
    });
    if (this.username == '') {
      toaster.setMessage('Username is required');
      toaster.present();
    }
    else if (this.password == '') {
      toaster.setMessage('Password is required');
      toaster.present();
    }
    else {
      loader.present();
      this.credentials.email = this.username;
      this.credentials.password = this.password;
      this.authservice.login(this.credentials).then((res: any) => {
        loader.dismiss();
        if (res.success) {
          this.navCtrl.push(TabsPage);
        }
      }).catch((err) => {
        loader.dismiss();
        toaster.setMessage(err);
        toaster.present();
       });
      }
    }
  passwordreset() {
    this.navCtrl.push(PasswordresetPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

}