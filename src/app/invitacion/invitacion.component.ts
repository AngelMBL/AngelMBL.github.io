import { Component } from '@angular/core';

@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [],
  templateUrl: './invitacion.component.html',
  styleUrl: './invitacion.component.scss'
})
export class InvitacionComponent {
  confirmarAsistencia() {
    const numeroTelefono = '3311112312';
    const mensaje = '¡Hola! Confirmo mi asistencia a tu fiesta de cumpleaños.';
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
