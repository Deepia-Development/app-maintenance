import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('scanner') scanner: ZXingScannerComponent | undefined;

  allowedFormats = [ BarcodeFormat.QR_CODE ];
  qrResultString: string = '';
  showScanner: boolean = true;
  stream: MediaStream | null = null;

  constructor() { }

  ngOnInit(): void {
    this.startScanner();
  }

  async startScanner() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = this.stream;
      this.showScanner = true;
    } catch (err) {
      console.error('Error accessing the camera', err);
      alert('No se pudo acceder a la cámara. Por favor, asegúrese de que tiene una cámara conectada y que ha dado los permisos necesarios.');
      this.showScanner = false;
    }
  }

  onScanSuccess(result: string) {
    this.qrResultString = result;
    this.stopCamera();
    console.log('Código QR escaneado:', result);
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
    this.showScanner = false;
  }

  resetScanner() {
    this.qrResultString = '';
    this.startScanner();
  }
}