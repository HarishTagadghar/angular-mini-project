import { Component, Output  , EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
@Output() feature  = new EventEmitter<string>()

selectFeature(feature:string){
 this.feature.emit(feature)
}
}