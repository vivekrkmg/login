import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from './user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  Users = [];
  submitted = false;

  constructor(private formBiulder : FormBuilder , private router: Router , private userservice : UserService) { }

  ngOnInit() {

    this.registerForm = this.formBiulder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

     
      if (this.registerForm.invalid) {
          return;
      }
this.registeremployee()
this.getemploye()
     
  }
  registeremployee() {
    debugger;
   let user = this.registerForm.value;
   user.id = this.Users.length + 1;

   this.userservice.register(this.registerForm.value)  
     .subscribe ( (data:User[]) =>{
    // this.Users.push(data) 
    this.getemploye()
      this.registerForm.reset()
    
     Swal.fire('successfully Registered.....')
     })
   
  }
  getemploye() {
  
    this.userservice.getUsers()    
    .subscribe((data: User[]) => {  
      this.Users = data;
       
    });    
  }
  
}
