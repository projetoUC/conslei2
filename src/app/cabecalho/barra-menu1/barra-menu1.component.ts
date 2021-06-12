import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho.component';

@Component({
  selector: 'app-barra-menu1',
  templateUrl: './barra-menu1.component.html',
  styleUrls: ['./barra-menu1.component.css']
})
export class BarraMenu1Component implements OnInit {
public autenticado: boolean = false;


  constructor(
    private cabecalhoComponent: CabecalhoComponent
    
  ) {
    
   }

  ngOnInit(): void {
    this.autenticado=this.cabecalhoComponent.autenticado;
    
  }

mtControleReserva(): string{
  this.autenticado=this.cabecalhoComponent.autenticado;
  if(this.autenticado){
    return "reservarLeito"

  }else{
    return "efetuarLogin"
  }
}





}
