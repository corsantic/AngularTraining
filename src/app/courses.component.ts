import { CoursesService } from './courses.service';
import{ Component} from '@angular/core';
//style for objects https://www.w3schools.com/jsref/dom_obj_style.asp

@Component({
selector:'courses',
template:`
<input [value]="email" (keyup.enter)="email=$event.target.value; onKeyUp()"/>
<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
`//down is better way
})
export class CoursesComponent{
email="me@email.com";

    onKeyUp(){

     console.log(this.email);
}

}