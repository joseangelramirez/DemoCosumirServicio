import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  // Declaro los objetos de los cuales voy a ahcer uso para 
  // mostrar la informacion del usuario
  InfoUser:any ={};
  PirctureUser:any ={};
  Cell:any ={};
  Email:any ={};
  Phone:any ={};
  Location:any ={};
  // Declaro un objeto el cual voy a pasar como parametro al detalle
 ArgsData:any[]=[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private api: ApiProvider) {

     this.api.getUsers().subscribe((res:any)=>{
       if(res.results){
         // Procedo con el llenado de los datos cuando
         // la peticion http se complete
        //  console.log(res.results);
           this.InfoUser=res.results[0].name;
         this.PirctureUser=res.results[0].picture;
         this.Cell=res.results[0].cell;
         this.Email=res.results[0].email;    
         this.Phone=res.results[0].phone;
         this.Location=res.results[0].location;
         // Lleno el arreglo con toda la informacion del Usuario
         this.ArgsData.push(this.InfoUser,this.PirctureUser,this.Cell,this.Email,this.Phone,this.Location);
         // console.log(this.ArgsData);
        }
       
         
     });
   
        
  }
  MostrarInfo(){
    this.navParams.data=this.ArgsData;
  this.navCtrl.push(UserinfoPage,this.ArgsData)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

}
