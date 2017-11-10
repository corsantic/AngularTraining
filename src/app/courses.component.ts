import { CoursesService } from './courses.service';
import{ Component} from '@angular/core';
//style for objects https://www.w3schools.com/jsref/dom_obj_style.asp

@Component({
selector:'courses',
template:`
<h2>{{ title }}</h2>


<div (click)="onDivClicked()">
<button (click)="onSave($event)">Save</button>
</div>


<ul><li *ngFor="let course of courses">
{{course}}</li>
</ul>
`
})
export class CoursesComponent{
 title="List of Courses";
 imageUrl="http://lorempixel.com/400/200";
 colSpan=2;
 isActive=false;

 onDivClicked(){
     console.log("onDivClicked");
 }


 onSave($event){
     $event.stopPropagation();
     console.log("button clicked",$event);
 }


courses;
constructor(service:CoursesService){
    this.courses=service.getCourses();
}


}