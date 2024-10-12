import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RickandmortyService } from './rickandmorty.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule, //se llama a este modulo 
  ],
  providers:[RickandmortyService], //se llama al servicio que se utilizara en el componente
  declarations: [HomePage]
})
export class HomePageModule {}
