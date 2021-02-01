import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor( public router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
    console.log("entrou no menu");
  }
  async enviar(){
    console.log("Enviou sugestão");
    this.router.navigate(['home']);
    const toast = await this.toastController.create({
      message: "Parabéns! Sugestão enviada com sucesso!",
      duration: 3000
    });
    toast.present();
  }
  

  voltar(){
    console.log("Voltou");
    this.router.navigate(['home']);
  }

  
}
