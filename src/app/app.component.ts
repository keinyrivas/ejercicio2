
import { Component } from '@angular/core';
import { PersonaService } from './services/personas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio2';
  persona: Array<any>;

  constructor(private personaService: PersonaService) {
    this.persona = new Array<any>();
  }

  getAllPersona() {
    this.personaService.getPersona().subscribe((persona) => {
      this.persona = persona;
    });
  }
}