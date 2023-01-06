import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  exp: Experiencia = null;
  constructor(private sExperiencia: SExperienciaService, private actRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.actRout.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.exp = data;
      }, err => {
        alert("No se pudo modificar la experiencia :(")
      }
    )
  }

  onUpdate(): void{
    const id = this.actRout.snapshot.params['id'];
    this.sExperiencia.update(id, this.exp).subscribe(data => {
      this.router.navigate(['']);
    }, err=> {
      alert("No se pudo modificar la experiencia :(");
    }
    )
  }

}
