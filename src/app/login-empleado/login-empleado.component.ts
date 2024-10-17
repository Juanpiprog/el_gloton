import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-empleado',
  standalone: true,
  imports: [],
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css']
})
export class LoginEmpleadoComponent {
  codigo: string = ''; // ID del empleado
  contrasena: string = ''; // Contraseña del empleado

  constructor(private router: Router) {}

  iniciarSesion() {
    // Obtener la lista de empleados desde Local Storage
    const empleados = JSON.parse(localStorage.getItem('empleados') || '[]');
    // Buscar el empleado con el ID y la contraseña proporcionados
    const empleado = empleados.find((emp: { id: number; contrasena: string }) => emp.id === parseInt(this.codigo) && emp.contrasena === this.contrasena);
    
    if (empleado) {
      // Si se encuentra al empleado, redirigir a su dashboard
      alert(`Bienvenido ${empleado.nombre}`);
      this.router.navigate(['/empleado-dashboard']); // Cambia esto a la ruta correcta
    } else {
      alert('ID o contraseña incorrectos');
    }
  }
}
