import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  whatHappened: string = '';
  observations: string = '';
  notes: string = '';
  capturedImage: string | null = null;
  currentTask: Task | null = null;
  showCamera: boolean = false;
  stream: MediaStream | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const taskId = params.get('id');
      if (taskId) {
        this.currentTask = {
          id: parseInt(taskId),
          description: 'Tarea ' + taskId,
          completed: false
        };
        this.whatHappened = `Tarea: ${this.currentTask.description}`;
      } else {
        console.error('No se proporcionó ID de tarea');
        this.router.navigate(['/list']);
      }
    });
  }

  async captureImage() {
    this.showCamera = true;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = this.stream;
    } catch (err) {
      console.error('Error accessing the camera', err);
      alert('No se pudo acceder a la cámara. Por favor, asegúrese de que tiene una cámara conectada y que ha dado los permisos necesarios.');
      this.showCamera = false;
    }
  }

  takePicture() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0);
    this.capturedImage = canvas.toDataURL('image/jpeg');
    this.stopCamera();
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
    this.showCamera = false;
  }

  onSubmit() {
    if (!this.currentTask) {
      console.error('No hay tarea actual');
      alert('Error: No se pudo encontrar la tarea actual.');
      return;
    }

    if (!this.whatHappened || !this.observations || !this.capturedImage) {
      alert('Por favor, complete todos los campos y capture una imagen antes de enviar el reporte.');
      return;
    }

    // Marcar la tarea como completada
    this.currentTask.completed = true;

    console.log('Reporte enviado:', {
      task: this.currentTask,
      whatHappened: this.whatHappened,
      observations: this.observations,
      notes: this.notes,
      evidence: this.capturedImage
    });

    // Navegar de vuelta a la lista de tareas y actualizar el estado
    this.router.navigate(['/list'], { 
      state: { updatedTask: this.currentTask }
    });
  }
}