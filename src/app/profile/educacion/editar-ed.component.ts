import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-editar-ed',
  templateUrl: './editar-ed.component.html',
  styleUrls: ['./editar-ed.component.css']
})
export class EditarEdComponent implements OnInit {
  educacion: Educacion = null;
  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al modificar la educacion");
        this.router.navigate(['profile']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['profile']);
      }, err =>{
         alert("Error al modificar educacion");
         this.router.navigate(['']);
      }
    )
  }

}
