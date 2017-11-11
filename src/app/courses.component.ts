import { CoursesService } from './courses.service';
import{ Component} from '@angular/core';
//style for objects https://www.w3schools.com/jsref/dom_obj_style.asp

@Component({
selector:'courses',
template:`
<input #email (keyup.enter)="onKeyUp(email.value)"/>
`
})
export class CoursesComponent{
onKeyUp(email)
{
  console.log(email);
}

}