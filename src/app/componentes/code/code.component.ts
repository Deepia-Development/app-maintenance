import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html'
})
export class CodeComponent implements OnInit, OnDestroy {
  generatedCode: string = '';
  timeLeft: number = 25;
  private timerSubscription: Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.generateNewCode();
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  

  startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 25;
        this.generateNewCode();
      }
    });
  }

  generateNewCode(): void {
    // Genera un código aleatorio de 6 caracteres
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.generatedCode = Array.from({length: 6}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }

  onReady(): void {
    console.log('Usuario presionó Listo');
    this.router.navigate(['/list']);
    
    // Implementa la lógica adicional aquí
  }
}