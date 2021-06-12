import { Injectable } from '@angular/core';
import { Paciente } from './paciente.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root'})
export class PacienteService {
  private pacientes: Paciente[] = [];
  private listaPacientesAtualizada = new Subject<{pacientes: Paciente[], maxPacientes: number}>();

  constructor(private httpClient: HttpClient, private router: Router){

  }

  getPacientes(pageSize: number, page: number): void {
      this.httpClient.get <{mensagem: string, pacientes: any, maxPacientes: number}>
      (`http://localhost:3000/api/pacientes?pageSize=${pageSize}&page=${page}`)
        .pipe(map((dados) => {
          return {
              pacientes: dados.pacientes.map((paciente:any) => {
              return {
                id: paciente._id,
                nome: paciente.nome,
                rg: paciente.rg,
                cpf: paciente.cpf,
                sexo: paciente.sexo,
                fone_fixo: paciente.fone_fixo,
                celular: paciente.celular,
                endereco: paciente.endereco,
                bairro: paciente.bairro,
                cep: paciente.cep,
                cidade: paciente.cidade,
                estado: paciente.estado,
                email: paciente.email,
                imagemURL: paciente.imagemURL,
                criador: paciente.criador,
                }

          

            }),
            maxPacientes: dados.maxPacientes
          }
        }))
        .subscribe(
          (dados) => {
            console.log(dados.pacientes);
            this.pacientes = dados.pacientes;
            this.listaPacientesAtualizada.next({pacientes: [...this.pacientes], maxPacientes: dados.maxPacientes});
          }
        )
  }

  getListaDePacientesAtualizadaObservable(){
    return this.listaPacientesAtualizada.asObservable();
  }

  adicionarPaciente(id: string, nome:string, rg: string, cpf: string, sexo:string, fone_fixo:string, celular:string, endereco: string, bairro: string, cep: string, cidade: string, estado: string, email:string, imagem: File){
    const dadosPaciente = new FormData();
    dadosPaciente.append("nome", nome);
    dadosPaciente.append("rg", rg);
    dadosPaciente.append("cpf", cpf);    
    dadosPaciente.append("sexo", sexo);
    dadosPaciente.append("fone_fixo", fone_fixo);
    dadosPaciente.append("celular", celular);
    dadosPaciente.append("endereco", endereco);
    dadosPaciente.append("bairro", bairro);
    dadosPaciente.append("cep", cep);
    dadosPaciente.append("cidade", cidade);
    dadosPaciente.append("estado", estado);    
    dadosPaciente.append("email", email);
    dadosPaciente.append("imagem", imagem);

    this.httpClient.post<{mensagem: string, paciente: Paciente}>('http://localhost:3000/api/pacientes',
      dadosPaciente).subscribe(
        (dados) => {
          this.router.navigate(['/']);
        }
      )
  }

  removerPaciente (id: string): any{
    return this.httpClient.delete(`http://localhost:3000/api/pacientes/${id}`);
  }
  getPaciente (idPaciente: any){
    
    return this.httpClient.get<{_id: string, nome:string, rg: string, cpf: string, sexo:string, fone_fixo:string, celular:string, endereco: string, bairro: string, cep: string, cidade: string, estado: string, email:string, imagemURL: string, criador: string}>    
    (`http://localhost:3000/api/pacientes/${idPaciente}`);
  }

  atualizarPaciente (id: string, nome: string, rg: string, cpf: string, sexo:string, fone_fixo:string, celular:string, endereco: string, bairro: string, cep: string, cidade: string, estado: string, email: string, imagem: File | string){
    
    let pacienteData: Paciente | FormData;
    if(typeof(imagem)==='object'){ //é um arquivo, montar um form data
      pacienteData = new FormData();
      pacienteData.append("id", id);
      pacienteData.append("nome", nome);
      pacienteData.append("rg", rg);
      pacienteData.append("cpf", cpf);
      pacienteData.append("sexo", sexo);
      pacienteData.append("fone_fixo", fone_fixo);
      pacienteData.append("celular", celular);
      pacienteData.append("endereco", endereco);
      pacienteData.append("bairro", bairro);
      pacienteData.append("cep", cep);
      pacienteData.append("cidade", cidade);
      pacienteData.append("estado", estado);
      pacienteData.append("email", email);
      pacienteData.append("imagem", imagem, nome); //chave, foto e nome para o arquivo
    } else {
      //enviar um JSON comum
      pacienteData = {
        id: id,
        nome: nome,
        rg: rg,
        cpf: cpf,
        sexo: sexo,
        fone_fixo: fone_fixo,
        celular: celular,
        endereco: endereco,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        estado: estado,
        email: email,
        imagemURL: imagem,
        criador: null,    
      }
    }
    console.log(typeof(pacienteData));

    this.httpClient.put(`http://localhost:3000/api/pacientes/${id}`, pacienteData).
    subscribe((res => {
      this.router.navigate(['/']);
    }));
  }
}

