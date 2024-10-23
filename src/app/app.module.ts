import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ValidationComponent } from './componentes/validation/validation.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CodeComponent } from './componentes/code/code.component';
import { ListComponent } from './componentes/list/list.component';
import { ReportComponent } from './componentes/report/report.component'; 
import { FormsModule } from '@angular/forms';
import { InstruccionesComponent } from './componentes/instrucciones/instrucciones.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ForgotPassComponent } from './users/forgot-pass/forgot-pass.component';
import { ReportListComponent } from './componentes/report-list/report-list.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ValidationComponent,
    CodeComponent,
    ListComponent,
    ReportComponent,
    InstruccionesComponent,
    LoginComponent,
    SignupComponent,
    ForgotPassComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    ZXingScannerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }