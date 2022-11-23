import { Component, OnInit } from '@angular/core';
import { persona } from './model/persona.model';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }
  title = 'front-end';
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data))
  }
}
