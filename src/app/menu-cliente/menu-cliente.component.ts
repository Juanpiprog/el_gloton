import { Component } from '@angular/core';
import { Plato } from '../platos/platoInterface'; // Asegúrate de tener esta interfaz
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-cliente',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './menu-cliente.component.html',
  styleUrl: './menu-cliente.component.css'
})
export class MenuClienteComponent {
 
    platos: Plato[] = [];
    platosDisponibles: Plato[] = [];
  
    constructor() {
      this.cargarPlatos();
    }
  
    cargarPlatos() {
      const platosEnStorage = localStorage.getItem('platos');
      if (platosEnStorage) {
        this.platos = JSON.parse(platosEnStorage);
        this.filtrarPlatosDisponibles();
      }
    }
  
    filtrarPlatosDisponibles() {
      this.platosDisponibles = this.platos.filter(plato => plato.disponible);
    }
  }
  

