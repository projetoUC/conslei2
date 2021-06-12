import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/auth/usuario.service';
import { Paciente } from '../paciente.model';
import { PacienteService } from '../paciente.service';


@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html',
  styleUrls: ['./paciente-lista.component.css']
})
export class PacienteListaComponent implements OnInit, OnDestroy {

  pacientes:Paciente[] = [];
  private pacientesSubscription!: Subscription;
  public estaCarregando: boolean = false;
  totalDePacientes: number = 10;
  totalDePacientesPorPagina: number = 2;
  opcoesTotalDePacientesPorPagina = [2, 5, 10]
  paginaAtual: number = 1;
  public autenticado: boolean = false;
  private authObserver: Subscription;
  public idUsuario: string;


  constructor(
    public pacienteService: PacienteService,
    private usuarioService: UsuarioService
  ) {

  }

  ngOnDestroy(): void {
    this.pacientesSubscription.unsubscribe();
    this.authObserver.unsubscribe();
  }

  ngOnInit(): void {
    this.estaCarregando = true;
    this.pacienteService.getPacientes(this.totalDePacientesPorPagina, this.paginaAtual);
    this.idUsuario = this.usuarioService.getIdUsuario();
    this.pacientesSubscription = this.pacienteService
      .getListaDePacientesAtualizadaObservable()
      .subscribe((dados: {pacientes: [], maxPacientes: number}) => {
        this.estaCarregando = false;
        this.pacientes = dados.pacientes;
        this.totalDePacientes = dados.maxPacientes;
      });
      this.autenticado = this.usuarioService.isAutenticado();
      this.authObserver = this.usuarioService.getStatusSubject()
      .subscribe((autenticado) => this.autenticado = autenticado);
  }
  onDelete (id: string){
    this.pacienteService.removerPaciente(id).subscribe(() => {
        this.pacienteService.getPacientes(this.totalDePacientesPorPagina, this.paginaAtual);
    });
  }

  onPaginaAlterada (dadosPagina: PageEvent){
    this.estaCarregando = true;
    this.paginaAtual = dadosPagina.pageIndex + 1;
    this.totalDePacientesPorPagina = dadosPagina.pageSize;
    this.pacienteService.getPacientes(this.totalDePacientesPorPagina, this.paginaAtual);
  }

}

