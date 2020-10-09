import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { AvesCarnesComponent } from './aves-carnes/aves-carnes.component';
import { ArrozLegumbresPastasComponent } from './arroz-legumbres-pastas/arroz-legumbres-pastas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PostresComponent } from './postres/postres.component';
import { SopasComponent } from './sopas/sopas.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Aves', component: AvesCarnesComponent },
  { path: "Arroz", component: ArrozLegumbresPastasComponent },
  { path: 'Nosotros', component: NosotrosComponent },
  { path: 'Postres', component: PostresComponent },
  { path: 'Sopas', component: SopasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
