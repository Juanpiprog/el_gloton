import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Empleado {
  id: number;
  nombre: string;
  contrasena: string;
  habilitado?: boolean;
}

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleados: Empleado[] = [];
  codigo: string = '';
  contrasena: string = '';

  constructor() {
    const empleadosGuardados = localStorage.getItem('empleados');
    this.empleados = empleadosGuardados ? JSON.parse(empleadosGuardados) : [];
  }

  iniciarSesion() {
    const id = parseInt(this.codigo, 10);
    const empleado = this.empleados.find(emp => emp.id === id && emp.contrasena === this.contrasena && emp.habilitado);

    if (empleado) {
      alert(`Inicio de sesión exitoso para ${empleado.nombre}`);
      // Redirigir a la vista correspondiente del empleado
    } else {
      alert('ID o contraseña incorrectos o empleado deshabilitado');
    }
  }
}
