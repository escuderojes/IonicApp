import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PrincipalPage implements OnInit {
  isMenuActive = false;

  constructor(private router: Router) {
    // Suscribirse a los eventos de navegación del Router
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Aquí puedes hacer algo si es necesario, pero no es necesario recargar la página
        // Por ejemplo, podrías cerrar el menú al navegar
        this.isMenuActive = false; // Cierra el menú al cambiar de ruta
      }
    });
  }

  ngOnInit() { }

  // Método para alternar el menú
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
