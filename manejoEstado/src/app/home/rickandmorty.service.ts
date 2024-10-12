import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private urlBase:string='https://rickandmortyapi.com/api'
  constructor(

    private http:HttpClient
  ) { }


obtenerPersonajes(){

  return this.http.get(this.urlBase + '/character')
}


}
