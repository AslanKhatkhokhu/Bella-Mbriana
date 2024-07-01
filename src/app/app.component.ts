import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'


interface carouselImage{
  imageSrc: string;
  imageDescription: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, CommonModule, GoogleMapsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
images: carouselImage[] = [
  {
    imageSrc:"../assets/Piatto_1.jpg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/Piatto_2.jpg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_3.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_4.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_2.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_3.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_4.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_2.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_3.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_4.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_2.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_3.jpeg",
    imageDescription:"",
  },
  {
    imageSrc:"../assets/photo_4.jpeg",
    imageDescription:"",
  }
]
@Input() indicators = true;

selectedIndex = 0;


ngOnInit(): void{

}

}
