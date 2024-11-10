import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-presen',
  templateUrl: './presen.page.html',
  styleUrls: ['./presen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PresenPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Seleccionar el ícono del menú y el contenedor del menú
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
      // Añadir evento de clic al ícono del menú
      menuToggle.addEventListener('click', () => {
        // Alternar la clase 'active' para mostrar/ocultar el menú
        menu.classList.toggle('active');
      });
    }
  }
}
