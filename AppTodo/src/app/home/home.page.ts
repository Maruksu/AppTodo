import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController) {}

  async showAdd() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header:'O que você deseja fazer?',
      inputs: [
        {
          name:'tarefa 01',
          type:'text',
          placeholder:'Digite o que deseja fazer:',
        },
      ],
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary',
          handler: () => {
            console.log('Cancelado com sucesso!');
          },
        },
        {
          text:'Adicionar',
          handler: () => {
            console.log('Adicionado com sucesso!');
          },
        },
      ],
    });
    
    await alert.present();
    
  }
}
