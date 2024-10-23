import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ValidationComponent } from './componentes/validation/validation.component';
import { CodeComponent } from './componentes/code/code.component';
import { ListComponent } from './componentes/list/list.component';
import { ReportComponent } from './componentes/report/report.component';
import { InstruccionesComponent } from './componentes/instrucciones/instrucciones.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ForgotPassComponent } from './users/forgot-pass/forgot-pass.component';
import { ReportListComponent } from './componentes/report-list/report-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'code', component: CodeComponent },
  { path: 'list', component: ListComponent },
  { path: 'report/:id', component: ReportComponent },
  { path: 'instrucciones', component: InstruccionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-pass', component: ForgotPassComponent },
  { path: 'report-list', component: ReportListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }