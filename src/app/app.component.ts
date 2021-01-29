import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  sumarValores(a: number, b: number) {
    let c = a + b;
    return `a = ${a} + b = ${b}  = ${ c }`;
  }
}
