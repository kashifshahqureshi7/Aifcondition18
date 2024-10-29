import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ifcondition';

  data = true;
  login()
  {
    this.data = true;
  }
  logout()
  {
    this.data = false;

  }
  Name = "Zahid";

  foremployee: any[] = [
    { id: 1, email: 'Kashif@gmail.com' },
    { id: 2, email: 'Naseem@gmail.com' },
    {id:3,email:'Adeed@gmail.com'},
  ]
}
