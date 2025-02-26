import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactosComponent } from './contactos/contactos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'formulario', component: FormularioComponent },
    {path:'contactos', component: ContactosComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Pagina404Component },
];