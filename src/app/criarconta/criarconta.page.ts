import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ConsultaCEPService } from '../shared/consulta-cep.service';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {
  
  usuario: any = {
    nome: null,
    email: null
  };

  form = FormGroup;
  httpClient: any;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public toastController: ToastController,
    private http: HttpClient,
    private cepService: ConsultaCEPService
    ) { 
    
    }
 
  ngOnInit(
    
  ) {
    
  }

  onSubmit(form, dados){
    console.log(form);


  }
  
   consultaCEP(cep, form) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados, form) {
    /*form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    // console.log(form);
  }

  resetaDadosForm(form) {
    form.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  voltar(){
    console.log("cliclou em voltar");
    this.router.navigate(['home']);
    
}
  async cadastrar(){
  console.log("cliclou em cadastrar");
    this.router.navigate(['home']);
    const toast = await this.toastController.create({
      message: "Parabéns! Dados cadastrados com sucesso.",
      duration: 3000
    });
    toast.present();
  }
}


