import { CommonModule, NgClass, NgComponentOutlet, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterOutlet } from '@angular/router';
interface carouselImage {
  imageSrc: string;
  imageDescription: string;
}
@Component({
  selector: 'app-index-en',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgComponentOutlet, NgIf, CommonModule, GoogleMapsModule,],
  templateUrl: './index-en.component.html',
  styleUrl: './index-en.component.css'
})
export class IndexEnComponent implements OnInit {

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
      imageSrc: "../assets/Piatto_1.jpg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/Piatto_2.jpg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/photo_4.jpeg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/photo_2.jpeg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/photo_4.jpeg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/photo_2.jpeg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/photo_4.jpeg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/photo_2.jpeg",
      imageDescription: "",
    },
    {
      imageSrc: "../assets/photo_4.jpeg",
      imageDescription: "",
    }
  ]
  @Input() indicators = true;

  selectedIndex = 0;


  ngOnInit(): void {

  }

}


