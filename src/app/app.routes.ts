import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { GerenteComponent } from './gerente/gerente.component';
import { GerenteDashboardComponent } from './gerente-dashboard/gerente-dashboard.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component'; // Importa el nuevo componente

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'gerente', component: GerenteComponent },
  { path: 'gerente-dashboard', component: GerenteDashboardComponent },
  { path: 'menu-cliente', component: MenuClienteComponent }, // Nueva ruta para el menú del cliente
];
