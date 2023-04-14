import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



listadoEstudiantes: any[] = [
  {
    nombre: "Marcelino",
    estado: "Aprobado"
  },
  {
    nombre: "Samuel",
    estado: "Reprobado"
  },
  {
    nombre: "Martin",
    estado: "Aprobado"
  },
  {
    nombre: "Carlos",
    estado: "Reprobado"
  }
]

}
