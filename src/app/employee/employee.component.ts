import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Employee } from '../employee.model';
import Swal from 'sweetalert2';
import { UserIdleService } from 'angular-user-idle';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UserService, private userIdle:UserIdleService) { }

  addForm: FormGroup;
  Employees = [];
  isSave = true ;
  msg:any="";
  ngOnInit() {

    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => {
      var eventList =[ 'click', 'mouseover','keydown','DOMMouseScroll', 'mousewheel',
      'mousedown','touchstart','touchmove','scroll','keyup'];
      for (let event of eventList){
        document.body.addEventListener(event , () =>this.userIdle.resetTimer());
      }
    })
    this.userIdle.onTimeout().subscribe(() => {
debugger

      Swal.close();
     
      
       this.logout();
    })


    this.getemployee()
    this.CraeteForm(null);
    
   

  }
CraeteForm(obj){
  if(obj){
    this.addForm = this.formBuilder.group({  
      id:[obj.id],
      name: [obj.name, Validators.required],
      email: [obj.email, Validators.required],
      position: [obj.position, Validators.required]
    });
  }else{
    this.addForm = this.formBuilder.group({  
      id:[],
      name: ['', Validators.required],
      email: ['', Validators.required],
      position: ['', Validators.required]
    });
  }
 
}
  
  getemployee() {
  
    this.userservice.getUsers()
    
    .subscribe((data: Employee[]) => {  
      this.Employees = data;
       
    });    
  }

   updateemployee() {
     debugger
    const employee = this.addForm.getRawValue();
   this.isSave = true
     this.userservice.updateUser(employee)
       .subscribe((data : Employee[])=> {
        this.Employees.filter((e)=>{
          if(e["id"]===data["id"]){
          e=data;
return data;
        
          }
        
        }) ;  
        this.getemployee()
        Swal.fire('record is successfully updated.....')
     
         this.CraeteForm(null); 
      })
      
  
   }

  createemployee() {
    debugger;
   let employee = this.addForm.value;
   employee.id = this.Employees.length + 1;

   this.userservice.createUser(this.addForm.value)  
     .subscribe ( (data:Employee[]) =>{
     this.Employees.push(data) 
     this.addForm.reset()
    
     Swal.fire('record is successfully added.....')
     })
   
  }
  deletemployee(id) {
    debugger
    this.userservice.deleteUser(id)
      .subscribe(() => {
       this.getemployee();
     
      })
      Swal.fire('record is successfully deleted.....')
  }
  editemployee (employee:any){
debugger
    this.isSave = false;
  this.CraeteForm(employee);
 
  }
  logout(){
    debugger
    this.router.navigate(['/login']);
  }
}








  // isSave = true;
  // employees = [
  //   {name:"Sikandar",email:"abc@gmail.com", position:"Programmer"},
  //   {name:"Alex",email:"abcd@gmail.com", position:"Designer"},
  //   {name:"Maria", email:"absc@gmail.com",position:"Manager"}
  // ];
  // model:any={};
  // model2:any={};
  // msg:any="";
  // addEmployee(){
  //   debugger;
  //   console.log (this.addForm)

  //   this.model.name = this.addForm.controls.name.value
  //   this.model.email = this.addForm.controls.email.value
  //   this.model.position = this.addForm.controls.position.value

  //   this.employees.push(this.model);
  //   this.model = {};
  //   this.msg = "Record is successfully added..... "; 

  // }
  // deleteEmployee(i){
  //   this.employees.splice(i,1);
  //   this.msg = "Record is successfully deleted..... ";

  // }
  // myValue;
  // editEmployee(k){
  //  this. isSave = false;

  //   var employee = this.employees[k];
  //   this.InitializeEmp(employee);


  // }
  // updateEmployee(){
  //   debugger
  //   this.isSave = true

  //   let k= this.myValue;
  //   for(let i=0; i<this.employees.length;i++){
  //     if(i==k){


  //       this.employees[i]= this.model;
  //       this.model = {};
  //       this.msg = "Record is successfully updated..... ";
  //     }

  //   }






    // this.InitializeEmp(null);


//   private InitializeEmp(employee) {
//     if(employee){
//       this.addForm = this.formBuilder.group({
//         name: [employee.name, Validators.required],
//         email: [employee.email, Validators.required],
//         position: [employee.position, Validators.required],
//       });
//     }else{
//       this.addForm = this.formBuilder.group({
//         name: ['', Validators.required],
//         email: ['', Validators.required],
//         position: ['', Validators.required],
//       });
//     }

//   }

// get f() { return this.addForm.controls; }
//  onSubmit() {
// // //   this.isSave = true;


// console.warn(this.addForm.value);
//  }
//   clickMe(){
//     this.msg = "";
//   }



