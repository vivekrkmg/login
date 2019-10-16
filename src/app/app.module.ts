import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserService } from './user.service';
import  {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { SubjectComponent } from './subject/subject.component';
import { Subject1Component } from './subject1/subject1.component'
import { SubjectserviceService } from './subjectservice.service';
import { UserIdleModule, UserIdleService } from 'angular-user-idle';
import {MatNativeDateModule, MatSliderModule, DateAdapter} from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule ,  } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCardModule
   ,     MatFormFieldModule, 
        MatCheckboxModule,
    MatRadioModule,
     MatSelectModule,
    MatInputModule,
  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    ParentComponent,
    ChildComponent,
    SweetalertComponent,
    SubjectComponent,
    Subject1Component,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserIdleModule.forRoot({idle: 500, timeout: 500, ping: 500}),
   HttpClientModule,
   MatDatepickerModule,
   BrowserAnimationsModule,
   
   MatFormFieldModule,
   
   
  
  ],
  providers: [UserService, SubjectserviceService , UserIdleService, MatDatepickerModule,MatInputModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
