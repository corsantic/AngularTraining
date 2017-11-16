import { SummaryPipe } from './summary.pipe';
import{ Component} from '@angular/core';

//style for objects https://www.w3schools.com/jsref/dom_obj_style.asp

@Component({
selector:'courses',
template:`
{{text | summary:10}}

`
})
export class CoursesComponent{

text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper risus eu aliquam porta. Nunc hendrerit, libero non tempus pharetra, odio odio pharetra enim, vel suscipit nisi odio non ipsum. Cras et ultricies nisl, sit amet laoreet justo. Etiam sed erat sit amet lectus fermentum bibendum. Curabitur bibendum lectus non dolor accumsan auctor. Vivamus posuere enim vitae lectus convallis, eget mollis nulla tincidunt. Sed pellentesque arcu magna, a iaculis mi ultrices dapibus. Mauris eget dolor sed elit ultrices elementum at sit amet erat. Pellentesque lobortis non arcu vitae imperdiet. Donec augue neque, dapibus ac mi at, tempor convallis quam. Donec lectus augue, suscipit eu nisl in, tempor auctor diam. Curabitur accumsan egestas tempus. Suspendisse potenti. Aliquam at lacinia mi, sed volutpat purus."
}