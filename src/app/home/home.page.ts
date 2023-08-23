import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
nome!: string;
telefone! : number;
email! : string;
lista_contatos: Contato[] = [];

constructor(private alertController: AlertController) {
let c1 : Contato = new Contato("Tamilyn Camille Costa", 99837841, "tamycc@gmail.com")
let c2 : Contato = new Contato("Yasmim Haffermann Bilovus",84263506,"yasmimhaff@gmail.com")
let c3 : Contato = new Contato("Ermindo Treviso Neto",98755901,"ermesneto@gmail.com")
let c4 : Contato = new Contato("Rafael Jose de Souza Vaz Dourado",96403627,"RafaelD@gmail.com")
this.lista_contatos.push(c1);
this.lista_contatos.push(c2);
this.lista_contatos.push(c3);
this.lista_contatos.push(c4);

}

cadastrar(){
if(!this.nome || !this.telefone || !this.email){
this.presentAlert("Erro", "Todos os campos são obrigatórios!");
}else{
this.presentAlert("Sucesso", "Contato Cadastrado!");
}
let novo : Contato = new Contato(this.nome, this.telefone, this.email);
this.lista_contatos.push(novo);
}

async presentAlert(subHeader: string, message: string) {
const alert = await this.alertController.create({
header: 'Agenda de Contatos',
subHeader: subHeader,
message: message,
buttons: ['OK'],
});

await alert.present();
}
}