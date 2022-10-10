import { Component, Output  } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
@Output() feature  = new Subject<string>()

selectFeature(feature:string){
 this.feature.next(feature)
}
}