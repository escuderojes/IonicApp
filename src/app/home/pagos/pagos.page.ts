import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PagosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Aquí trasladamos la lógica del script JS al TS

    const showQrButton = document.getElementById('show-qr');
    const backToCardButton = document.getElementById('back-to-card');
    const cardPaymentForm = document.getElementById('card-payment-form') as HTMLElement;
    const qrContainer = document.querySelector('.qr-payment-container') as HTMLElement;

    // Mostrar la sección de QR y ocultar el formulario de tarjeta
    showQrButton?.addEventListener('click', () => {
      if (cardPaymentForm) {
        cardPaymentForm.style.display = 'none';
      }
      if (qrContainer) {
        qrContainer.classList.add('active');
      }
      if (showQrButton) {
        showQrButton.style.display = 'none';
      }
    });

    // Volver a la vista de pago con tarjeta
    backToCardButton?.addEventListener('click', () => {
      if (cardPaymentForm) {
        cardPaymentForm.style.display = 'block';
      }
      if (qrContainer) {
        qrContainer.classList.remove('active');
      }
      if (showQrButton) {
        showQrButton.style.display = 'inline-block';
      }
    });
  }

}
