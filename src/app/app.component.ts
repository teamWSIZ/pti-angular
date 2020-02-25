import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gg';
  //klasa z danymi
  gg : string = 'Abra kadabra';
  x = 12;


  funkcja() {
    let z = 111;  //zmienna lokalna
    this.x += 1;
  }

}
