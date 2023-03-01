import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../model/persona.model';
import { ImagenService } from '../service/imagen.service';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-corregirperfil',
  templateUrl: './corregirperfil.component.html',
  styleUrls: ['./corregirperfil.component.css']
})
export class CorregirperfilComponent implements OnInit {

  persona: persona = new persona("","","","");

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageServ: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err => {
        alert("No se pudo corregir");
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageServ.url;
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
}
