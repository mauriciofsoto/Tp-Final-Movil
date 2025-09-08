import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { IonicModule, LoadingController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class Tab1Page {

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController   // 🔹 agregamos el LoadingController
  ) { }

  // 🔹 marcar async para poder usar await
  async iniciarSesion(usuario: string, password: string) {
    if (!usuario || !password) {
      alert('Por favor completá todos los campos');
      return;
    }

    // 🔹 crear y mostrar el loading
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión',
      spinner: 'crescent',
      backdropDismiss: false
    });
    await loading.present();

    // 🔹 hacer login 
    this.authService.login(usuario, password).subscribe({
      next: async (res) => {
        await loading.dismiss();  // cerrar el loading
        this.router.navigate(['/tabs/tab2']);
      },
      error: async (err) => {
        await loading.dismiss();  // cerrar el loading
        alert(err.error?.error || 'Error en login');
      }
    });
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }
}
