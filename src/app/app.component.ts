import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName="Rashmika";
  showDetails = true;
  option1 = true;
  option2 = true;
  option3 = true;
  textColor = 'green';
  inputValue = 'My name is Dasun';
  myTitle = 'Hello Welocome to Angular 2020';
  myAge = 30;
  customers: string[] = ['Kamal', 'Dasun', 'Wimal', 'Ramal'];


  getText(param) {
    this.myTitle = param.value;
    console.log(param.value);
  }
}
