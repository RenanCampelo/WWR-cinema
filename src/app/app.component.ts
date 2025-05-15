import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { NavbarComponent } from '../app/components/navbar/navbar.component';  
import { CarouselComponent } from '../app/components/carousel/carousel.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule,NavbarComponent,CarouselComponent] 
})
export class AppComponent {
  title = 'ggggg';
}