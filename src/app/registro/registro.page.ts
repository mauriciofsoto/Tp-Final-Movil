import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage {

  nombre: string = '';
  email: string = '';
  password: string = '';
  repPassword: string = '';
  fecha: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  registrarUsuario() {
    // Validaciones básicas
    if (!this.nombre || !this.email || !this.password || !this.repPassword || !this.fecha) {
      alert('Por favor completá todos los campos');
      return;
    }

    if (this.password !== this.repPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Llamar al AuthService
    this.authService.register(this.nombre, this.email, this.password, this.fecha).subscribe({
      next: (res) => {
        alert(res.message || 'Registro exitoso 🎉');
        this.router.navigate(['/tabs/tab1']); // Redirige al login
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.error || 'Error en el registro');
      }
    });
  }

  irLogin() {
    this.router.navigate(['/tabs/tab1']); // Navegar a login
  }
}
