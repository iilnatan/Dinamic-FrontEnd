import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {
  
  skill: Skill[] = [];
  
  constructor(private skillS: SkillService, private tokenServ: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills():void {
    this.skillS.list().subscribe(
      data => {
        this.skill = data;
      }
    )
  }
  delete(id:number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill :(");
        }
      )
    }
  }
}
