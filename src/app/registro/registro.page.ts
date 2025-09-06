import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // necesario para ion-header, ion-input, etc.
import { CommonModule } from '@angular/common'; // necesario para *ngIf, *ngFor
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule] // FormsModule no hace falta si no usás ngModel
})
export class RegistroPage {

  constructor(private router: Router) {}

  redirigirATab1() {
    this.router.navigate(['/tab1']); // Navega a la ruta 'ta1'
  }

  registrarse(
    nombre: string, 
    nombreUsuario: string, 
    email: string, 
    nacimiento: string, 
    password: string, 
    repPassword: string
  ) {
    if (!nombre || !nombreUsuario || !email || !nacimiento || !password || !repPassword) {
      alert('Completa todos los campos');
      return;
    }

    if (password !== repPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    alert('Registro exitoso');
    this.router.navigate(['/tabs/tab1']);
  }

  volverLogin() {
    this.router.navigate(['/tabs/tab1']);
  }
  iniciarSesion(usuario: string, password: string) {
    console.log('Usuario:', usuario);
    console.log('Password:', password);
    // Aquí va tu lógica de inicio de sesión
  }
}
