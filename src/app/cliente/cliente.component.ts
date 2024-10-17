import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormsModule], // Asegúrate de agregar FormsModule aquí
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  nombre = '';
  direccion = '';
  telefono = '';
  contrasena = '';
  id = '';
  contrasenaLogin = '';
  private clienteId = 1; // Para asignar IDs únicos

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
      (c: any) => c.id === this.id && c.contrasena === this.contrasenaLogin
    );

    if (clienteEncontrado) {
      // Lógica para redirigir al cliente a la vista de pedidos o menú
      alert('Inicio de sesión exitoso');
    } else {
      alert('ID o contraseña incorrectos');
    }
  }
}
