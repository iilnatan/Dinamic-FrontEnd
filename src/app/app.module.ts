import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvbarComponent } from './nvbar/nvbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienciaComponent } from './profile/experiencia/experiencia.component';
import { EducacionComponent } from './profile/educacion/educacion.component';
import { HardComponent } from './profile/hard/hard.component';
import { ProyectosComponent } from './profile/proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NuevaExpComponent } from './profile/experiencia/nueva-exp/nueva-exp.component';
import { EditarComponent } from './profile/experiencia/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    ProfileComponent,
    HomeComponent,
    ContactComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardComponent,
    ProyectosComponent,
    LoginComponent,
    NuevaExpComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
