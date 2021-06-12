import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { PacienteInserirComponent } from "./pacientes/paciente-inserir/paciente-inserir.component";
import { PacienteListaComponent } from "./pacientes/paciente-lista/paciente-lista.component";
import { CadastrarComoComponent } from "./cabecalho/cadastrar-como/cadastrar-como.component";
import { CadastrarUsuarioComponent} from "./cabecalho/cadastrar-usuario/cadastrar-usuario.component";
import { CadastrarHospitalComponent} from "./cabecalho/cadastrar-hospital/cadastrar-hospital.component";
import { PgContatoComponent} from "./pg-contato/pg-contato.component";
import { PgQuemSomosComponent} from "./pg-quem-somos/pg-quem-somos.component";
import { PgTrabalheConoscoComponent} from "./pg-trabalhe-conosco/pg-trabalhe-conosco.component";
import { ReservaLeitosComponent} from "./reserva-leitos/reserva-leitos.component";
import { EfetuarLoginComponent} from "./efetuar-login/efetuar-login.component";
import { ConsultaLeitosComponent} from "./consulta-leitos/consulta-leitos.component";

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [  
  { path: "" , component: PacienteListaComponent},
  { path: "criar", component: PacienteInserirComponent, canActivate:[AuthGuard]},
  { path: "editar/:idPaciente", component: PacienteInserirComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'tipoCadastro', component: CadastrarComoComponent},
  { path: "cadastroUsuario", component: CadastrarUsuarioComponent},
  { path: "cadastroHospital", component: CadastrarHospitalComponent},
  { path: "contato", component: PgContatoComponent},
  { path: "quemSomos", component: PgQuemSomosComponent},
  { path: "trabalheConosco", component: PgTrabalheConoscoComponent},
  { path: "reservarLeito", component: ReservaLeitosComponent},
  { path: "efetuarLogin", component: EfetuarLoginComponent},
  { path: "consultarLeitos", component: ConsultaLeitosComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule{

}
