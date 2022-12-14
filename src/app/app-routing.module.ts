import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EducacionComponent } from './profile/educacion/educacion.component';
import { ExperienciaComponent } from './profile/experiencia/experiencia.component';
import { HardComponent } from './profile/hard/hard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectosComponent } from './profile/proyectos/proyectos.component';

const routes: Routes = [
  {path:"profile", component:ProfileComponent},
  {path:"contact", component:ContactComponent},
  {path:"", component:HomeComponent},
  {path:"educacion", component:EducacionComponent},
  {path:"experiencia", component:ExperienciaComponent},
  {path:"hard&soft", component:HardComponent},
  {path:"proyectos", component:ProyectosComponent},
  {path:"login", component:LoginComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
