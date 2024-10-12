import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from './rickandmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items:any

    //Cuando este componente se inice ocupará la api desde RickandmortyService
  constructor(
    private rickandmortyService:RickandmortyService
  ) {}

    //ngOnInit trae los recursos, los modifica y muere el componente, esto para no utilizar
    //memoria en el dispositivo de manera constante.
    ngOnInit(): void {
      //devuelve un observable y el metodo subscribe hace que la funcion este en escucha
      this.rickandmortyService.obtenerPersonajes().subscribe(
          {
            //Devuelve una respuesta en caso de que todo este correcto
            next:(respuestaApi:any)=>{
              console.log(respuestaApi);
              this.items=respuestaApi.results
            },
            error:(err)=>{
              console.log(err);
            }

          }
        
      )
      
    }
}
