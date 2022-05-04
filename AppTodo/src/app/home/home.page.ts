import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {}

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
          handler: (form) => {
            this.adicionaTarefa(form.tarefa1);
          },
        },
      ],
    });
    
    await alert.present();
    
  }
  async adicionaTarefa(novaTarefa: string) {
    if(novaTarefa.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Digite a tarefa',
        duration: 2000,
        position: 'top',
      });

      toast.present();
      return;
    }
  }
}
