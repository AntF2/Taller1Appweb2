import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { MascotasComponent } from './categoria/mascotas/mascotas.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'productos', component: ProductosComponent },
    {path:'contactos', component: ContactosComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Pagina404Component },
    { path: 'mascotas', component:MascotasComponent  }
];