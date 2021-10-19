import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'questTemplatesDrivenForms';
}

export class User {
  firstname: string = '';
  lastname: string = '';
  mail: string = '';
  password: string = '';
}
