import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  tasks: Task[] = [
    { id: 1, description: 'Cambiar rollos de tickets', completed: false },
    { id: 2, description: 'Cambiar rollos de impresora', completed: false },
    { id: 3, description: 'Resolver averias', completed: true },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: NavigationEvent): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        const updatedTask = navigation.extras.state['updatedTask'] as Task;
        if (updatedTask) {
          this.updateTask(updatedTask);
          console.log('Tarea actualizada:', updatedTask);
        }
      }
    });
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      console.log('Lista de tareas actualizada:', this.tasks);
    }
  }

  openReportForTask(task: Task) {
    this.router.navigate(['/report', task.id]);
  }

  onReporte() {
    console.log('Función onReporte llamada');
    // Implementa la lógica para generar un reporte general si es necesario
  }

  onListReporte(){
    this.router.navigate(['/report-list']);
  }

  filterTasks(completed: boolean) {
    return this.tasks.filter(task => task.completed === completed);
  }
}