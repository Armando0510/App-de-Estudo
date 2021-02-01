import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CrudserviceService } from '../shared/crudservice.service';
import {  AlertController  } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: any ={
  email: '',
  senha: '',
  }
 
  formulario = FormGroup;
  
 
  OnSubmit(form){
      console.log(form);
      console.log(this.usuario);
       this.router.navigate(['menu']);
  }


  constructor( 
    public router: Router,
    public fb: FormBuilder,
    public toastController: ToastController,
    public CrudserviceService: CrudserviceService,
    private alertCtrl: AlertController,) {  

    
    
    }

    
  


   Entrar(){
    console.log("teste página sobre");
    
     this.router.navigate(['menu']);
      //Monta body
  }

    criarconta(){
     
    
     this.router.navigate(['criarconta']);
     

    }

    Politica(){
      console.log("Entrou na politica");
      this.router.navigate(['politicaprivacidade']);
    }

    async sobre(){
      console.log("Entrou na página sobre");
      this.router.navigate(['sobre']);
    }

   
}

