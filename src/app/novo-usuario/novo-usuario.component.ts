import { Component, OnInit } from '@angular/core';
import {Usuario} from '../shared/usuario.model';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  usuario: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
