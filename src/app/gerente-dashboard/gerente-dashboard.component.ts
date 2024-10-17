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

interface Cliente {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  contrasena: string;
}

@Component({
  selector: 'app-gerente-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './gerente-dashboard.component.html',
  styleUrls: ['./gerente-dashboard.component.css']
})
export class GerenteDashboardComponent {
mostrarEmpleados() {
throw new Error('Method not implemented.');
}
  empleados: Empleado[] = JSON.parse(localStorage.getItem('empleados') || '[]'); // Cargar empleados desde Local Storage
  clientes: Cliente[] = []; // Array para almacenar los clientes
  mostrarClientesFlag = false; // Bandera para mostrar/ocultar lista de clientes

  nuevoEmpleado = {
    nombre: '',
    contrasena: ''
  };

  empleadoSeleccionado: any;

  constructor(private router: Router) {
    this.cargarClientes(); // Cargar los clientes al inicializar
  }

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

  // Función para cargar los clientes desde el Local Storage
  cargarClientes() {
    const clientesGuardados = localStorage.getItem('clientes');
    if (clientesGuardados) {
      this.clientes = JSON.parse(clientesGuardados); // Parsear los clientes
    } else {
      this.clientes = []; // Si no hay clientes, dejar el array vacío
    }
  }

  // Método para mostrar la lista de clientes
  // Método para mostrar clientes
  mostrarClientes() {
    this.clientes = JSON.parse(localStorage.getItem('clientes') || '[]'); // Cargar clientes desde Local Storage
    this.mostrarClientesFlag = true; // Cambia la bandera para mostrar la lista de clientes
  }
  

  agregarPlato() {
    throw new Error('Method not implemented.');
  }
}
