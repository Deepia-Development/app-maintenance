import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Report {
  id: number;
  taskId: number;
  taskDescription: string;
  date: Date;
  whatHappened: string;
  observations: string;
}

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html'
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [
    {
      id: 1,
      taskId: 1,
      taskDescription: 'Cambiar rollos de tickets',
      date: new Date('2024-03-01'),
      whatHappened: 'Se completó la revisión',
      observations: 'Todo en orden'
    },
    {
      id: 2,
      taskId: 2,
      taskDescription: 'Cambiar rollos de impresora',
      date: new Date('2024-03-02'),
      whatHappened: 'Mantenimiento realizado',
      observations: 'Se requiere seguimiento'
    },
    {
      id: 3,
      taskId: 3,
      taskDescription: 'Resolver averías',
      date: new Date('2024-03-03'),
      whatHappened: 'Reparación completada',
      observations: 'Funcionando correctamente'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí podrías cargar los reportes desde un servicio
  }

  viewReportDetails(reportId: number) {
    // Navegar a la página de detalles del reporte
    this.router.navigate(['/report-details', reportId]);
  }

  generatePDF(reportId: number) {
    console.log('Generando PDF para el reporte', reportId);
    // Implementar la lógica para generar PDF
  }

  goBackToList() {
    this.router.navigate(['/list']);
  }
}