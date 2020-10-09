import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AvesCarnesComponent } from './aves-carnes/aves-carnes.component';
import { ArrozLegumbresPastasComponent } from './arroz-legumbres-pastas/arroz-legumbres-pastas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PostresComponent } from './postres/postres.component';
import { SopasComponent } from './sopas/sopas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AvesCarnesComponent,
    ArrozLegumbresPastasComponent,

    NosotrosComponent,
    PostresComponent,
    SopasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
