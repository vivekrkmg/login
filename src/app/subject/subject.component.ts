import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectserviceService } from '../subjectservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  message: string;
  subscription: Subscription;

  constructor(public subjectservice: SubjectserviceService, public router:Router) { }

  ngOnInit() {
    this.subscription = this.subjectservice.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  }


