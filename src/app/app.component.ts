import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './auth/usuario.service';
import { Paciente } from './pacientes/paciente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (
    private usuarioService: UsuarioService
  ){

  }

  ngOnInit(): void{
    this.usuarioService.autenticarAutomaticamente();
  }

}
