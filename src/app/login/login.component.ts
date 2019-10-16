import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { filter } from 'rxjs/operators';
import { User } from '../register/user.model';
import { pipe } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  Users = [];
  UserDetail: User[] =[];
  constructor(private router: Router, private formBuilder: FormBuilder, private userservice: UserService) { }
  Email: string;
  password: string;


  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted= true;
    if (this.loginForm.invalid){
    return;
    }
  }


  authanticateuser() {
    debugger
    let User = null;
    // let navigate= false;
    if (this.loginForm.invalid) {
      return;
    }
    this.userservice.getUsers().subscribe(Data => {
      debugger
      if(Data)
      {
        this.UserDetail= Data as User[];
        
       let varr= this.UserDetail.filter(x=>x.email== this.loginForm.controls.email.value &&
         x.password ==this.loginForm.controls.password.value
       
       
       
        //   {
        //   debugger
        //   if(x.email== this.loginForm.controls.email.value && x.password ==this.loginForm.controls.password.value)
        //   {
        //     navigate= true;
           
        //   }
        // } 
          
        );
        console.log(varr);
        if(varr.length > 0)
        {
         this.router.navigate(["employee"])
        }
        else{
          Swal.fire('invalid user')
        }
          
        
      }

      // User = Data.map(filter(user => user['email'] == this.loginForm.controls.email.value &&
      //   user['password'] == this.loginForm.controls.password.value))
      // if (User['length'] > 0) {
      //   this.router.navigate(["employee"])
      // } else {
      //   alert("invalid user")
      // }
    });
  }
  signup(): void {

    this.router.navigate(["register"]);

  }
}
