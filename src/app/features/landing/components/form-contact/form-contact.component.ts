import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactData {
  nombre: string;
  email: string;
  empresa: string;
  servicio: string;
  mensaje: string;
}

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  contactModel = signal<ContactData>({
    nombre: '',
    email: '',
    empresa: '',
    servicio: 'marketing',
    mensaje: ''
  });

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting.set(true);

    const data = this.contactModel();
    console.log('Enviando Lead Calificado:', data);

    // Simulación de envío reactivo
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      
      // Reseteamos el modelo a su estado inicial
      this.contactModel.set({
        nombre: '',
        email: '',
        empresa: '',
        servicio: 'marketing',
        mensaje: ''
      });
    }, 1500);
  }

  updateField(key: keyof ContactData, value: string) {
    this.contactModel.update(state => ({ ...state, [key]: value }));
  }

  resetFormState() {
    this.submitSuccess.set(false);
  }
}