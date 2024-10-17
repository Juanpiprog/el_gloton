import { Component } from '@angular/core';
import { Plato } from './platoInterface'; // Asegúrate de tener esta interfaz
import { NgForm } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent {
  platos: Plato[] = [];

  constructor() {
    this.cargarPlatos();
  }

  cargarPlatos() {
    const platosEnStorage = localStorage.getItem('platos');
    if (platosEnStorage) {
      this.platos = JSON.parse(platosEnStorage);
    } else {
      // Si no existen, agregar los platos por defecto
      this.platos = [
        { id: 1, nombre: 'Hamburguesa', descripcion: 'Hamburguesa clásica', precio: 50, disponible: true },
        { id: 2, nombre: 'Pizza', descripcion: 'Pizza de queso', precio: 80, disponible: true },
        { id: 3, nombre: 'Tacos', descripcion: 'Tacos al pastor', precio: 30, disponible: true }
      ];
      localStorage.setItem('platos', JSON.stringify(this.platos));
    }
  }

  deshabilitarPlato(id: number) {
    const plato = this.platos.find(p => p.id === id);
    if (plato) {
      plato.disponible = false;
      localStorage.setItem('platos', JSON.stringify(this.platos));
      alert(`Plato ${plato.nombre} deshabilitado`);
    }
  }

  habilitarPlato(id: number) {
    const plato = this.platos.find(p => p.id === id);
    if (plato) {
      plato.disponible = true;
      localStorage.setItem('platos', JSON.stringify(this.platos));
      alert(`Plato ${plato.nombre} habilitado`);
    }
  }
}
