import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  carro_lottie: AnimationOptions = {
    path: '../../../assets/lotties/carro.json',
  };

  constructor(private router: Router) { }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  onSubmit() {
    this.router.navigate(['/validation']);
  }
}
