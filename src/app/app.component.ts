import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //String interpolation
  title = ' Welcome To angular';
  //Property binding
  public image="/assets/images/logo1.jpg"
  //Two-way Binding
  public value=" "
  //event binding
  onClick()
  {
    alert("Welcome To Event Button")
  }
}
