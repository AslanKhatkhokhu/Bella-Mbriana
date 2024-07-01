import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterOutlet } from '@angular/router';
interface carouselImage{
  imageSrc: string;
  imageDescription: string;
}
@Component({
  selector: 'app-index-ru',
  standalone: true,
  imports: [RouterOutlet, NgClass, CommonModule, GoogleMapsModule,],
  templateUrl: './index-ru.component.html',
  styleUrl: './index-ru.component.css'
})
export class IndexRuComponent implements OnInit{
  MobileMenuShow: Boolean = false;
  public mobileMenuShowing() {
    this.MobileMenuShow = !this.MobileMenuShow;
  }
  LanguageMenuShow: Boolean = false;
  public languageMenuShowing() {
    this.LanguageMenuShow = !this.LanguageMenuShow;
  }
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
      imageSrc:"../assets/photo_4.jpeg",
      imageDescription:"",
    },
    {
      imageSrc:"../assets/piatto_5.jpg",
      imageDescription:"",
    },
    {
      imageSrc:"../assets/photo_2.jpeg",
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
      imageSrc:"../assets/photo_4.jpeg",
      imageDescription:"",
    },
    {
      imageSrc:"../assets/photo_2.jpeg",
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
  

