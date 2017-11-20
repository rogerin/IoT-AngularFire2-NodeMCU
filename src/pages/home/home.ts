import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AmbientProvider } from '../../providers/ambient/ambient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ambients: Observable<any>;

  constructor(public navCtrl: NavController, private provider: AmbientProvider,
    private toast: ToastController) {

    this.ambients = this.provider.getAll();
  }


  editAmbient(ambient: any) {
    // Maneira 1
    this.navCtrl.push('AmbientPage', { ambient: ambient });

    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }

  changeActive(ambient: any){
    this.provider.changeActive(ambient)
      .then(() => {
        this.toast.create({ message: 'Ambiente modificado com sucesso.', duration: 3000 }).present();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao modificar o ambiente.', duration: 3000 }).present();
      });
  }

  removeAmbient(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Ambiente removido com sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o ambiente.', duration: 3000 }).present();
        });
    }
  }


  newAmbient() {
    this.navCtrl.push('AmbientPage')
  }
}
