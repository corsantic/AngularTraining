import { CoursesService } from './courses.service';
import{ Component} from '@angular/core';
//style for objects https://www.w3schools.com/jsref/dom_obj_style.asp

@Component({
selector:'courses',
template:`
{{course.title| uppercase}}<br/>
{{course.student | number}}<br/>
{{course.rating| number:'2.1-1'}}<br/>
{{course.price | currency:'AUD':true:'3.1-1'}}<br/>
{{course.releaseDate | date:'shortDate'}}<br/>
`
})
export class CoursesComponent{
course;
    constructor(service:CoursesService){

        this.course=service.getCourses();

        
    }

}