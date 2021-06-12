import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent} from '../cabecalho.component';
@Component({
  selector: 'app-barra-login',
  templateUrl: './barra-login.component.html',
  styleUrls: ['./barra-login.component.css']
})
export class BarraLoginComponent implements OnInit {
  public autenticado: boolean = false;

  constructor(
    private cabecalhoComponent: CabecalhoComponent
  ) {
    
   }

  ngOnInit(): void {
    this.autenticado = this.cabecalhoComponent.autenticado;
  }

  mtControleCadastro(): string{
    this.autenticado=this.cabecalhoComponent.autenticado;
    if(this.autenticado){
      return ""
  
    }else{
      return "tipoCadastro"
    }
    }  

}

