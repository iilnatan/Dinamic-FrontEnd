import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../model/persona.model';
import { ImagenService } from '../service/imagen.service';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  persona: persona = new persona("","","","");

  constructor(public personaService: PersonaService, private tokenService: TokenService, activatedRouter: ActivatedRoute, imageServ:ImagenService, router: Router) { }
  isLogged = false;
  
   ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {
        this.persona = data
      })
  }

  /*onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['profile']);
      }, err => {
        alert("No se pudo corregir")
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "avatar_"+id;
    this.imageServ.uploadImage($event, name);
    
  }

*/
}
