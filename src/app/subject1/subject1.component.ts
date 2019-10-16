import { Component, OnInit } from '@angular/core';
import { SubjectserviceService } from '../subjectservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component implements OnInit {

  constructor(public subjectservice: SubjectserviceService, public router: Router) { }

  setMessage(event) {
    console.log(event.value);
    this.subjectservice.setMessage(event.value);
  }

  ngOnInit() {
  }

}
