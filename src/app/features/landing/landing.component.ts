import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProccessComponent } from './components/proccess/proccess.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

@Component({
  selector: 'app-landing',
  imports: [
    HeroComponent,
    FormContactComponent,
    AboutUsComponent,
    ProccessComponent,
    OurServicesComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
