import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images = [
    'img/Carrossel/aindaEstouAquiCRS.webp',
    'img/Carrossel/brancaDeNeveCRS.webp',
    'img/Carrossel/Lilo_StitchCRS.jpg',
    'img/Carrossel/UmFilmeMinecraftCRS.jpg'
  ];

  currentIndex = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => this.next());
      }, 3000);
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
