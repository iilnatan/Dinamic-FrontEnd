import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-crear-h',
  templateUrl: './crear-h.component.html',
  styleUrls: ['./crear-h.component.css']
})
export class CrearHComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skills: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skills.save(skill).subscribe(
      data =>{
        alert("Se creo correctamente");
        this.router.navigate(['profile'])
      }, err =>{
        alert("No se pudo crear la skill :(")
        this.router.navigate(['profile'])
      }
    )
  }

}
