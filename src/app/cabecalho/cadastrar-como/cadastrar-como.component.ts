import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-como',
  templateUrl: './cadastrar-como.component.html',
  styleUrls: ['./cadastrar-como.component.css']
})

export class CadastrarComoComponent implements OnInit {

  exibeFormulario(tipoUsuario):void{
    
    switch(tipoUsuario){

      case "paciente":{
        console.log("Renderizando - Formulário Paciente");
        break;
      }
      case "hospital":{
        console.log("Renderizando - Formulário Paciente");
        break;
      }
    
    }
    

  }
  constructor() { }

  ngOnInit(): void {
  }

}
