import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvitacionComponent } from "./invitacion/invitacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Invitacion-Valeria';
}
