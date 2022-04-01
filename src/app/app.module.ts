import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NotFoundComponent } from './articles/not-found/not-found.component';
import { SliderPrincipalComponent } from './views/slider-principal/slider-principal.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { EnQueCreemosComponent } from './articles/calidad-uts/en-que-creemos/en-que-creemos.component';
import { ComoLoHacemosComponent } from './articles/calidad-uts/como-lo-hacemos/como-lo-hacemos.component';
import { QuienesSomosComponent } from './articles/calidad-uts/quienes-somos/quienes-somos.component';
import { SitiosDeInteresComponent } from './views/sitios-de-interes/sitios-de-interes.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { PoliticaDeLaCalidadComponent } from './articles/gestion-de-la-calidad/politica-de-la-calidad/politica-de-la-calidad.component';
import { ReglamentoComponent } from './articles/gestion-de-la-calidad/reglamento/reglamento.component';
import { ConsejoGeneralDeLaCalidadComponent } from './articles/gestion-de-la-calidad/consejo-general-de-la-calidad/consejo-general-de-la-calidad.component';
import { ConsejosDeLaCalidadDeUnidadesComponent } from './articles/gestion-de-la-calidad/consejos-de-la-calidad-de-unidades/consejos-de-la-calidad-de-unidades.component';
import { GestionPorProcesosComponent } from './articles/gestion-de-la-calidad/gestion-por-procesos/gestion-por-procesos.component';
import { CulturaDeLaCalidadComponent } from './articles/gestion-de-la-calidad/cultura-de-la-calidad/cultura-de-la-calidad.component';
import { MejoraContinuaComponent } from './articles/gestion-de-la-calidad/mejora-continua/mejora-continua.component';
import { AcreditacionInstitucionalComponent } from './articles/aseguramiento-de-la-calidad/acreditacion-institucional/acreditacion-institucional.component';
import { AcreditacionCertificacionPregradoComponent } from './articles/aseguramiento-de-la-calidad/acreditacion-certificacion-pregrado/acreditacion-certificacion-pregrado.component';
import { DocumentosComponent } from './articles/documentos/documentos.component';
import { MapaComponent } from './articles/gestion-de-la-calidad/mapa/mapa.component';
import { ContactoComponent } from './articles/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SliderPrincipalComponent,
    NavbarComponent,
    EnQueCreemosComponent,
    ComoLoHacemosComponent,
    QuienesSomosComponent,
    SitiosDeInteresComponent,
    NoticiasComponent,
    PoliticaDeLaCalidadComponent,
    ReglamentoComponent,
    ConsejoGeneralDeLaCalidadComponent,
    ConsejosDeLaCalidadDeUnidadesComponent,
    GestionPorProcesosComponent,
    CulturaDeLaCalidadComponent,
    MejoraContinuaComponent,
    AcreditacionInstitucionalComponent,
    AcreditacionCertificacionPregradoComponent,
    DocumentosComponent,
    MapaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //HOME
      {
        path: '',
        component: HomeComponent
      },
      //CALIDAD UTS
      {
        path: 'en-que-creemos',
        component: EnQueCreemosComponent
      },
      {
        path: 'como-lo-hacemos',
        component: ComoLoHacemosComponent
      },
      {
        path: 'quienes-somos',
        component: QuienesSomosComponent
      },
      //GESTIÓN DE LA CALIDAD
      {
        path: 'politica-de-la-calidad',
        component: PoliticaDeLaCalidadComponent
      },
      //DOCTOS
      {
        path: 'documentos',
        component: DocumentosComponent
      },

       //MAPA
       {
        path: 'mapa',
        component: MapaComponent
      },

       //Contacto
       {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: "**",
        redirectTo: "/404"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NotFoundComponent]
})
export class AppModule { }
