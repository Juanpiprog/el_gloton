import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Asegúrate de que la ruta sea correcta
import { ClienteComponent } from './cliente/cliente.component'; // Importa el componente Cliente
import { EmpleadoComponent } from './empleado/empleado.component'; // Importa el componente Empleado
import { GerenteComponent } from './gerente/gerente.component'; // Importa el componente Gerente
import { GerenteDashboardComponent } from './gerente-dashboard/gerente-dashboard.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta raíz para el componente Inicio
  { path: 'cliente', component: ClienteComponent }, // Ruta para el componente Cliente
  { path: 'empleado', component: EmpleadoComponent }, // Ruta para el componente Empleado
  { path: 'gerente', component: GerenteComponent }, // Ruta para el componente Gerente
  { path: 'gerente-dashboard', component: GerenteDashboardComponent },
  { path: '**', component: InicioComponent }
];
