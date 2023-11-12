import { Component } from '@angular/core';
import {dataFake}from '../../dataFake/colaboradore'
import { dataFakeCard } from 'src/app/dataFake/data-card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  colaboradores = dataFake
  menus = dataFakeCard
}
