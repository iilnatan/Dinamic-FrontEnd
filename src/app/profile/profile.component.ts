import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }
  Avatar:String="../img/profile/avatar.jpg"
  Banner:String="../img/profile/imgRan.jpg"
  Nombre:String="Marco Natan Buffa"

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data))
  }

}
