import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);


  contactForm : FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(2)]],
    email: ['',[Validators.required, Validators.email]],
    company: ['',[Validators.required]],
    service: ['Marketing', Validators.required],
    message: ['',[Validators.required, Validators.minLength(2)]],
  });

  onSubmit(event: Event) {
    if(this.contactForm.invalid){
      this.contactForm.markAllAsTouched();
    }

    event.preventDefault();
    this.isSubmitting.set(true);

    const data = this.contactForm.value;;
    console.log('Enviando Lead Calificado:', data);

    
    // Simulación de envío reactivo
    setTimeout(() => {
      this.isSubmitting.set(false);
      
      this.http.post('https://formspree.io/f/meeyelpq', data)
      .subscribe({
        next: (response) =>{
          alert('¡Mensaje enviado con éxito!')
          this.isSubmitting.set(false)
          this.submitSuccess.set(true);
          this.resetFormState();
        },
        error: (err) =>{
          alert('Hubo un error al enviar el mensaje.')
          this.isSubmitting.set(false)
        }
      })
      // Reseteamos el modelo a su estado inicial
      
    }, 1500);
  }

  resetFormState() {
    this.submitSuccess.set(false);
    this.contactForm.reset({service:'marketing'})
  }
}