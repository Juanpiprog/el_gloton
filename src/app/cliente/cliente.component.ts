import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  nombre = '';
  direccion = '';
  telefono = '';
  contrasena = '';
  idLogin = ''; // Cambié el nombre para evitar confusiones
  contrasenaLogin = '';
  private clienteId = 1;

  constructor(private router: Router) {} // Inyectamos el Router

  registrar() {
    const cliente = {
      id: this.clienteId++,
      nombre: this.nombre,
      direccion: this.direccion,
      telefono: this.telefono,
      contrasena: this.contrasena,
    };

    // Guardar en Local Storage
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    // Resetear el formulario
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
    this.contrasena = '';
  }

  iniciarSesion() {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const clienteEncontrado = clientes.find(
      (c: any) => c.id == this.idLogin && c.contrasena === this.contrasenaLogin
    );

    if (clienteEncontrado) {
      alert('Inicio de sesión exitoso');
      // Redirige al cliente al menú después del inicio de sesión exitoso
      this.router.navigate(['/menu-cliente']);
    } else {
      alert('ID o contraseña incorrectos');
    }
  }
}
