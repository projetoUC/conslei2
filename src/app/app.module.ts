import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PacienteListaComponent } from './pacientes/paciente-lista/paciente-lista.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PacienteService } from './pacientes/paciente.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErroInterceptor } from './erro-interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { ErroComponent } from './erro/erro.component';
import { PacienteInserirComponent } from './pacientes/paciente-inserir/paciente-inserir.component';
import { CadastrarComoComponent } from './cabecalho/cadastrar-como/cadastrar-como.component';
import { CadastrarUsuarioComponent } from './cabecalho/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarHospitalComponent } from './cabecalho/cadastrar-hospital/cadastrar-hospital.component';
import { BarraLoginComponent } from './cabecalho/barra-login/barra-login.component';
import { BarraMenu1Component } from './cabecalho/barra-menu1/barra-menu1.component';
import { BarraContatoComponent } from './cabecalho/barra-contato/barra-contato.component';
import { BarraSociaisComponent } from './cabecalho/barra-sociais/barra-sociais.component';
import { PgContatoComponent } from './pg-contato/pg-contato.component';
import { PgQuemSomosComponent } from './pg-quem-somos/pg-quem-somos.component';
import { PgTrabalheConoscoComponent } from './pg-trabalhe-conosco/pg-trabalhe-conosco.component';
import { ReservaLeitosComponent } from './reserva-leitos/reserva-leitos.component';
import { EfetuarLoginComponent } from './efetuar-login/efetuar-login.component';
import { PgMainComponent } from './pg-main/pg-main.component';
import { ConsultaLeitosComponent } from './consulta-leitos/consulta-leitos.component';


@NgModule({
  declarations: [
    AppComponent,
    PacienteInserirComponent,
    CabecalhoComponent,
    PacienteListaComponent,
    LoginComponent,
    SignupComponent,
    ErroComponent,
    PacienteInserirComponent,
    CadastrarComoComponent,
    CadastrarUsuarioComponent,
    CadastrarHospitalComponent,
    BarraLoginComponent,
    BarraMenu1Component,
    BarraContatoComponent,
    BarraSociaisComponent,
    PgContatoComponent,
    PgQuemSomosComponent,
    PgTrabalheConoscoComponent,
    ReservaLeitosComponent,
    EfetuarLoginComponent,
    PgMainComponent,
    ConsultaLeitosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
