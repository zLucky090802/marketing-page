import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroComponent } from './features/landing/components/hero/hero.component';
import { OurServicesComponent } from './features/landing/components/our-services/our-services.component';
import { FormContactComponent } from './features/landing/components/form-contact/form-contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutUsComponent } from "./features/landing/components/about-us/about-us.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    OurServicesComponent,
    FormContactComponent,
    FooterComponent,
    AboutUsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marketingPage';
}
