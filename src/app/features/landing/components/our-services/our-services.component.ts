import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  marketingServices: Servicio[] = [
    {
      titulo: 'Estrategia de Contenido de Alto Impacto',
      descripcion: 'Diseño de planes editoriales y guiones enfocados en algoritmos modernos (Reels, TikTok, Shorts) para capturar la atención en segundos.',
      caracteristicas: ['Investigación de audiencias', 'Guiones persuasivos', 'Análisis de retención']
    },
    {
      titulo: 'Tráfico Pago & Performance',
      descripcion: 'Campañas optimizadas en Meta Ads y Google Ads dirigidas a atraer leads calificados con el menor costo de adquisición posible.',
      caracteristicas: ['Segmentación avanzada', 'Copys de alta conversión', 'Reportes mensuales']
    }
  ];

  techServices: Servicio[] = [
    {
      titulo: 'Automatización de Ventas & CRMs',
      descripcion: 'Conectamos tus canales (WhatsApp, Instagram, Web) con flujos automatizados para calificar leads y agendar reuniones sin intervención manual.',
      caracteristicas: ['Integración con Make/Zapier', 'Chatbots inteligentes', 'Configuración de CRM']
    },
    {
      titulo: 'Desarrollo Web & Landing Pages',
      descripcion: 'Sitios web ultra-rápidos optimizados para SEO y diseñados específicamente para guiar al usuario hacia la conversión.',
      caracteristicas: ['Arquitectura modular', 'Optimización móvil', 'Estructuras stand-alone']
    }
  ];
}
