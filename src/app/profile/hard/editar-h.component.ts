import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editar-h',
  templateUrl: './editar-h.component.html',
  styleUrls: ['./editar-h.component.css']
})
export class EditarHComponent implements OnInit {
  skill: Skill = null;
  constructor(private skills: SkillService,private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.details(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['hard&soft']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['hard&soft']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
