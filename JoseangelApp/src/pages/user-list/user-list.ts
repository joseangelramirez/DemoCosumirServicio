import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UserinfoPage } from '../userinfo/userinfo';

/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  Users:any[]=[];
   
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private api: ApiProvider, 
    private loadingCtrl: LoadingController) {

    this.getData();
   
        
  }
    getData(){
      const loader = this.loadingCtrl.create({
        content: "Por favor espere...",
         
      });
      loader.present();

    this.api.getUsers().subscribe((res:any)=>{
      if(res.results){
        // Procedo con el llenado de los datos cuando
        // la peticion http se complete
       //  console.log(res.results);
         this.Users=res.results;
         loader.dismiss();
        // console.log(this.ArgsData);
       }
             
    },err=>{
      loader.dismiss();
    });
  }
  MostrarInfo(UserData:any){
    this.navParams.data=UserData;
  this.navCtrl.push(UserinfoPage,UserData)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

}
