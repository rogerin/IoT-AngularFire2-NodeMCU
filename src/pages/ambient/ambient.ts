import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmbientProvider } from '../../providers/ambient/ambient';

@IonicPage()
@Component({
  selector: 'page-ambient',
  templateUrl: 'ambient.html',
})
export class AmbientPage {
  title: string;
  form: FormGroup;
  ambient: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: AmbientProvider,
    private toast: ToastController) {

      this.ambient = this.navParams.data.ambient || { };
      this.createForm();
      this.setupPageTitle();
    }

  ionViewDidLoad() {}

  private setupPageTitle() {
    this.title = this.navParams.data.ambient ? 'Alterando Ambiente' : 'Novo Ambiente';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.ambient.key],
      name: [this.ambient.name, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Ambiente salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o ambiente.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
