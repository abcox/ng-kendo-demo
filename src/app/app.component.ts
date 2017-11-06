import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  public model: User;
  public items: Array<string> = [
     "Toronto",
     "North Bay",
     "Mississauga",
     "Ajax",
     "Oshawa",
     "Brampton",
     "Barry",
     "Guelph",
     "Kitchener",
     "Hamilton"
   ];

  public newsletter: boolean = false;

  constructor(){
  }

  onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}
