import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { MascotasComponent } from './categoria/mascotas/mascotas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BellezaJoyeriaComponent } from './categoria/belleza-joyeria/belleza-joyeria.component';
import { TecnologiaComponent } from './categoria/tecnologia/tecnologia.component';
import { ElectrodomesticosComponent } from './categoria/electrodomesticos/electrodomesticos.component';
import { InstrumentosComponent } from './categoria/instrumentos/instrumentos.component';
import { UtilesEscolaresComponent } from './categoria/utiles-escolares/utiles-escolares.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'productos', component: ProductosComponent },
    {path:'contactos', component: ContactosComponent},
    { path: 'belleza-joyeria', component: BellezaJoyeriaComponent },
    { path: 'tecnologia', component: TecnologiaComponent },
    { path: 'electrodomesticos', component: ElectrodomesticosComponent },
    { path: 'instrumentos', component: InstrumentosComponent },
    { path: 'mascotas', component: MascotasComponent },
    { path: 'utiles-escolares', component: UtilesEscolaresComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Pagina404Component },
    { path: 'mascotas', component:MascotasComponent  }
];