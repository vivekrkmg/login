import { Component ,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserIdleService } from 'angular-user-idle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vivek';

constructor(private useridle:UserIdleService){}

// ngOnInit() {

//   this.useridle.startWatching();
//   this.useridle.onTimerStart().subscribe(count => {
//     var eventList =[ 'click', 'mouseover','keydown','DOMMouseScroll', 'mousewheel',
//     'mousedown','touchstart','touchmove','scroll','keyup'];
//     for (let event of eventList){
//       document.body.addEventListener(event , () =>this.useridle.resetTimer());
//     }
//   })
//   this.useridle.onTimeout().subscribe(() => {
// debugger
//     Swal.close();
   
    
//     //  this.logout();
//   })
// }


}
