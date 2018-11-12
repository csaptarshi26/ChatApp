import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';


import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';
import { newUser } from '../../models/interfaces/usercreds';
import { ProfilepicPage } from '../profilepic/profilepic';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

   newUser ={} as newUser;

   email:string="";
   password:string="";
   displayName:string="";
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public toastCtrl: ToastController,public authservice: AuthProvider,
      public loadingCtrl: LoadingController,public userservice: UserProvider) {
      
  }

  signup(){
    var toaster = this.toastCtrl.create({
      duration: 2000,
      position: 'top'
    });
    if (this.email == '') {
      toaster.setMessage('Email is required');
      toaster.present();
    }
    else if (this.password == '') {
      toaster.setMessage('Password is required');
      toaster.present();
    }else if (this.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else if (this.displayName == '') {
      toaster.setMessage('Display name is required');
      toaster.present();
    } else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();
      this.newUser.email=this.email;
      this.newUser.password=this.password;
      this.newUser.displayName=this.displayName;
      this.userservice.addUser(this.newUser).then((res: any) => {
        loader.dismiss();
        if (res.success){
          this.navCtrl.push(ProfilepicPage);
        }
      }).catch((err) => {
        loader.dismiss();
        toaster.setMessage(err);
        toaster.present();
       });
    }
  }

  goBack(){
    this.navCtrl.push(LoginPage);
  }


}
