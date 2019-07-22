import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {
  InfoUser:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.InfoUser=this.navParams.data;
 console.log( this.InfoUser);
 
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinfoPage');
  }

}
