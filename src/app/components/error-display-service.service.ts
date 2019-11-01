import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ErrorDisplayComponent } from './error-display.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDisplayServiceService {

  isDialogOpen: Boolean = false;

  constructor(
    public alertController: AlertController
  ) { }

  async displayError(error): any {
    if (this.isDialogOpen) {
      return false;
    }
    this.isDialogOpen = true;
    const alert = await this.alertController.create({
      header: 'Oops',
      subHeader: 'There was an error!',
      message: (error.reason) ? error.reason: 'Something was wrong!',
      buttons: ['Close']
    });

    alert.present();

  }

}
