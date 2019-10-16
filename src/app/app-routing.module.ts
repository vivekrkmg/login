import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { SubjectComponent } from './subject/subject.component';
import { Subject1Component } from './subject1/subject1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';





const routes: Routes = [
  
  {path : '' , component : LoginComponent},
  { path: 'login', component: LoginComponent },
  {path: 'employee', component: EmployeeComponent },
  {path: 'register', component: RegisterComponent },
  {path : 'parent' , component:ParentComponent},
  {path : 'child' , component:ChildComponent},
  {path : 'sweetalert', component : SweetalertComponent},
  {path : 'subject', component : SubjectComponent},
  {path : 'subject1', component : Subject1Component},
  {path : '**' , component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
