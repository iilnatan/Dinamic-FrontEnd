import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-nuevaed',
  templateUrl: './nuevaed.component.html',
  styleUrls: ['./nuevaed.component.css']
})
export class NuevaedComponent implements OnInit {
  nombreEd: string = '';
  descripcionEd: string = '';
  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const ed = new Educacion(this.nombreEd, this.descripcionEd);
    this.sEducacion.save(ed).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['profile']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
