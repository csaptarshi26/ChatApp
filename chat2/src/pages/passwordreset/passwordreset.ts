import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the PasswordresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {

  email: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, public userservice: UserProvider) {
  }

  reset() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'top',
    });

    if (this.email == '') {
      toaster.setMessage('Email is required');
      toaster.present();
    } else {
      this.userservice.passwordreset(this.email).then((res: any) => {
        if (res.success) {
          toaster.setMessage('Email Sent ! Please follow the instruction');
          toaster.present();
        }
      }).catch((err) => {
        toaster.setMessage(err);
        toaster.present();
       });
    }
  }
  goback() {
    this.navCtrl.push(LoginPage);
  }
}
