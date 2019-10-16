import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() Message: string;
   @Output() newItemEvent= new EventEmitter <string>();
   addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  constructor(private router:Router) { }

  ngOnInit() {
  
  }

}
