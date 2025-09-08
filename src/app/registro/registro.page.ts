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

  constructor(private router: Router, private authService: AuthService) {}

  // Navegar al login
  redirigirATab1() {
    this.router.navigate(['/tab1']);
  }

  // Registrar usuario
  registrarUsuario(nombre: string, email: string, password: string, repPassword: string, fecha: string) {
    // Validaciones básicas
    if (!nombre || !email || !password || !repPassword || !fecha) {
      alert('Por favor completá todos los campos');
      return;
    }

    if (password !== repPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    // Llamar al AuthService (fecha enviada como string YYYY-MM-DD)
    this.authService.register(nombre, email, password, fecha).subscribe({
      next: (res) => {
        alert(res.message || 'Registro exitoso 🎉');
        this.router.navigate(['/tab1']); // Redirige al login
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.error || 'Error en el registro');
      }
    });
  }
}
