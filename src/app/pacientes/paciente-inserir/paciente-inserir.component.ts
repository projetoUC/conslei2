import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente.model';
import { mimeTypeValidator } from './mime-type.validator';

@Component({
  selector: 'app-paciente-inserir',
  templateUrl: './paciente-inserir.component.html',
  styleUrls: ['./paciente-inserir.component.css'],
})

export class PacienteInserirComponent implements OnInit {
  private modo = "criar";
  private idPaciente: any;
  public paciente: any;
  public estaCarregando: boolean = false;
  form: FormGroup;
  previewImagem: string;

  constructor(
    public pacienteService: PacienteService,
    public route: ActivatedRoute
  ) {

  }

  ngOnInit(){
    this.form = new FormGroup({
      nome: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      rg: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      cpf: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      sexo: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      fone_fixo: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      celular: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      endereco: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      bairro: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      cep: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      cidade: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      estado: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      imagemURL: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      imagem: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeTypeValidator]
      })
    })



    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("idPaciente")){
        this.modo = "editar";
        this.idPaciente = paramMap.get("idPaciente");
        this.estaCarregando = true;
        this.paciente = this.pacienteService.getPaciente(this.idPaciente).subscribe( dadosPac => {
          this.estaCarregando = false;
          this.paciente = {
            id: dadosPac._id,
            nome: dadosPac.nome,
            fone: dadosPac.fone_fixo,
            email: dadosPac.email,
            imagemURL: dadosPac.imagemURL,
            criador: dadosPac.criador
          };
          this.form.setValue({
            nome: this.paciente.nome,
            fone: this.paciente.fone_fixo,
            email:this.paciente.email,
            imagem: this.paciente.imagemURL
          })
        });
      }
      else{
        this.modo = "criar";
        this.idPaciente = null;
      }
    })
  }

  onImagemSelecionada(event: Event){
    const arquivo = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({'imagem': arquivo});
    this.form.get('imagem').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImagem = reader.result as string;
    }
    reader.readAsDataURL(arquivo);
  }

  onSalvarPaciente() {
/*     if (this.form.invalid) {
      return;
    }
 */    this.estaCarregando = true;
    if (this.modo === "criar"){
      this.pacienteService.adicionarPaciente(
        this.form.value.id,
        this.form.value.nome,
        this.form.value.rg,
        this.form.value.cpf,
        this.form.value.sexo,
        this.form.value.fone_fixo,
        this.form.value.celular,
        this.form.value.endereco,
        this.form.value.bairro,
        this.form.value.cep,
        this.form.value.cidade,
        this.form.value.estado,
        this.form.value.email,
        this.form.value.imagem,
        

      );
    } else {
      this.pacienteService.atualizarPaciente(
        this.idPaciente,
        this.form.value.nome,
        this.form.value.rg,
        this.form.value.cpf,
        this.form.value.sexo,
        this.form.value.fone_fixo,
        this.form.value.celular,
        this.form.value.endereco,
        this.form.value.bairro,
        this.form.value.cep,
        this.form.value.cidade,
        this.form.value.estado,
        this.form.value.email,
        this.form.value.imagem,
      )
    }
    //this.estaCarregando = false;
    this.form.reset();
  }
}
