import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-profilepic',
  templateUrl: 'profilepic.html',
})
export class ProfilepicPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: ImghandlerProvider,
    public zone: NgZone, public userservice: UserProvider, public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
  }
 
  ionViewDidLoad() {
  }
 
  chooseimage() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      loader.dismiss();
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
  }
 
  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    var toaster = this.toastCtrl.create({
      duration: 2000,
      position: 'top'
    });
    loader.present();
    this.userservice.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if (res.success) {
        this.navCtrl.setRoot(TabsPage);
      }
    }).catch((err) => {
      toaster.setMessage(err);
      toaster.present();
     });
  }
 
  proceed() {
    this.navCtrl.setRoot(TabsPage);
  }
 
}