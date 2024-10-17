import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

interface Empleado {
  id: number;
  nombre: string;
  contrasena: string;
  habilitado: boolean;
}

@Component({
  selector: 'app-gerente-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './gerente-dashboard.component.html',
  styleUrls: ['./gerente-dashboard.component.css']
})
export class GerenteDashboardComponent {
empleadoSeleccionado: any;
mostrarEmpleados() {
throw new Error('Method not implemented.');
}
  empleados: Empleado[] = JSON.parse(localStorage.getItem('empleados') || '[]'); // Cargar empleados desde Local Storage   aqui se cambia para base de datos
  nuevoEmpleado = {
    nombre: '',
    contrasena: ''
  };

  constructor(private router: Router) {}

  agregarEmpleado() {
    const idNuevoEmpleado = this.empleados.length + 1; // Genera un ID único
    this.empleados.push({
      id: idNuevoEmpleado,
      nombre: this.nuevoEmpleado.nombre,
      contrasena: this.nuevoEmpleado.contrasena,
      habilitado: true,
    });

    // Guardar en Local Storage
    localStorage.setItem('empleados', JSON.stringify(this.empleados));

    alert(`Empleado ${this.nuevoEmpleado.nombre} agregado exitosamente. ID: ${idNuevoEmpleado}, Contraseña: ${this.nuevoEmpleado.contrasena}`);
    this.nuevoEmpleado.nombre = ''; // Limpia el campo de nombre
    this.nuevoEmpleado.contrasena = ''; // Limpia el campo de contraseña

     // Redirigir a la página de inicio de sesión de empleados
     this.router.navigate(['/empleado']);
  }


  deshabilitarEmpleado(id: number) {
    const empleado = this.empleados.find(emp => emp.id === id);
    if (empleado) {
      empleado.habilitado = false;
      localStorage.setItem('empleados', JSON.stringify(this.empleados)); // Actualizar Local Storage
      alert(`Empleado ${empleado.nombre} deshabilitado`);
    } else {
      alert('Empleado no encontrado');
    }
  }

  // Los métodos agregarPlato y mostrarClientes deben estar definidos aquí
  agregarPlato() {
    throw new Error('Method not implemented.');
  }

  mostrarClientes() {
    throw new Error('Method not implemented.');
  }
}
